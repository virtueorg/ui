<script lang="ts">
  import { alerts } from "$lib/stores/alerts"
  import { cn } from "$lib/utils/misc"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import AlertItem from "./AlertItem.svelte"

  type $$Props = HTMLAttributes<HTMLDivElement>

  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      fixed
      top-0
      right-0
      w-full
      p-4
      flex
      flex-col
      gap-2
      z-50

      md:max-w-lg
    `,
  })
</script>

{#if $alerts.length}
  <div class={cn(style.base, className)} {...$$restProps}>
    {#each $alerts as alert (alert.id)}
      <AlertItem {alert} />
    {/each}
  </div>
{/if}
