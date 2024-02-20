<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLFormAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLFormAttributes &
    AsChild & {
      enhance?: (node: HTMLFormElement) => void
    }

  export let asChild: $$Props["asChild"] = false
  export let enhance: $$Props["enhance"] = undefined
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-4
    `,
  })
</script>

{#if asChild}
  <slot />
{:else if enhance}
  <form class={cn(style.base, className)} use:enhance {...$$restProps}>
    <slot />
  </form>
{:else}
  <form class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </form>
{/if}
