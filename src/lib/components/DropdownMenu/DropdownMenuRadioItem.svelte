<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt, type CreateDropdownMenuRadioGroupProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateDropdownMenuRadioGroupProps &
    AsChild & {
      disabled?: boolean
    }

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"] = undefined
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      w-full
      text-left
      flex
      items-center
      gap-2
      rounded-lg
      p-2
      cursor-pointer
    
      hover:bg-muted/5
    `,
  })

  const { elements } = ctx.createRadioItem($value || "")
  const { radioItem } = elements
</script>

{#if asChild}
  <slot builder={$radioItem({ value: $value || "", disabled })} />
{:else}
  <button
    type="button"
    class={cn(style.base, className)}
    use:melt={$radioItem({ value: $value || "", disabled })}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
