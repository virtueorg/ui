<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLButtonElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      text-left
      p-5
      flex
      items-center
      justify-between
    `,
    variants: {
      disabled: {
        true: cn`
          cursor-not-allowed
        `,
      },
    },
  })

  const { value, disabled } = ctx.getItem()
  const { elements } = ctx.get()
  const { trigger } = elements
</script>

{#if asChild}
  <slot builder={$trigger({ value, disabled })} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ disabled }), className)}
    use:melt={$trigger({ value, disabled })}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
