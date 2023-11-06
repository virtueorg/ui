<script lang="ts">
  import { ChevronRightIcon, cn, Icon } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
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

  const { elements, options } = ctx.getSub()
  const { disabled } = options
  const { subTrigger } = elements
</script>

{#if asChild}
  <slot builder={$subTrigger} />
{:else}
  <button
    type="button"
    class={cn(style.base, style({ disabled: $disabled }), className)}
    use:melt={$subTrigger}
    {...$$restProps}
    on:click
  >
    <slot />

    <Icon class="ml-auto">
      <ChevronRightIcon />
    </Icon>
  </button>
{/if}
