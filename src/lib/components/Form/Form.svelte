<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import type { HTMLFormAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLFormAttributes & {
    enhance?: (node: HTMLFormElement) => void
  }

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

{#if enhance}
  <form class={cn(style.base, className)} use:enhance {...$$restProps}>
    <slot />
  </form>
{:else}
  <form class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </form>
{/if}
