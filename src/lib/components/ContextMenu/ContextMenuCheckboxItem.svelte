<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type CreateContextMenuCheckboxItemProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateContextMenuCheckboxItemProps & AsChildType

  export let asChild: $$Props["asChild"] = false
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      w-full
      flex
      items-center
      justify-between
      gap-3
      p-3
      rounded-xl
      border
      border-transparent

      hover:bg-muted/5
      hover:border-muted/5

      active:scale-95
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50

          hover:bg-transparent
          hover:border-transparent
          
          active:scale-100
        `,
      },
    },
  })

  const { elements } = ctx.setCheckboxItem({ ...$$restProps, disabled })
  const { checkboxItem } = elements

  $: builder = $checkboxItem
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button
    type="button"
    {disabled}
    class={cn(style.base, style({ disabled }), className)}
    use:melt={builder}
    {...$$restProps}
    on:click
  >
    <slot {builder} />
  </button>
{/if}
