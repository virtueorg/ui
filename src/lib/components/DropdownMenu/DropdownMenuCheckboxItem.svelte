<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateContextMenuCheckboxItemProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateContextMenuCheckboxItemProps & AsChild

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
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
          cursor-default
        `,
      },
    },
  })

  const { elements } = ctx.createCheckboxItem({ ...$$restProps, disabled })
  const { checkboxItem } = elements
</script>

{#if asChild}
  <slot builder={$checkboxItem} />
{:else}
  <div
    class={cn(style.base, style({ disabled }), className)}
    use:melt={$checkboxItem}
    {...$$restProps}
  >
    <slot />
  </div>
{/if}
