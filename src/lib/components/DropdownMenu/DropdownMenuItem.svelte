<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      text-left
      w-full
      flex
      items-center
      gap-2
      rounded-lg
      p-2
      cursor-pointer

      hover:bg-muted/5

      active:scale-95
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
          cursor-not-allowed

          hover:bg-transparent
        `,
      },
    },
  })

  const { elements } = ctx.get()
  const { item } = elements
</script>

{#if asChild}
  <slot builder={$item} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ disabled: disabled || false }), className)}
    use:melt={$item}
    {disabled}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
