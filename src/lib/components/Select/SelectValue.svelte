<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLSpanElement> &
    AsChild & {
      placeholder?: string
    }

  export let placeholder: $$Props["placeholder"] = ""
  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      font-bold
    `,
  })

  const { states } = ctx.get()
  const { selectedLabel } = states
</script>

{#if asChild}
  <slot label={$selectedLabel || placeholder} />
{:else}
  <span class={cn(style.base, className)} {...$$restProps}>
    {$selectedLabel || placeholder}
  </span>
{/if}
