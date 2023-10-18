<script lang="ts">
  import { alerts } from "$lib/stores/alerts";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import AlertItem from "./AlertItem.svelte";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

{#if $alerts.length}
  <div class={cn("Alerts", className)} {...$$restProps}>
    {#each $alerts as alert (alert.id)}
      <AlertItem {alert} />
    {/each}
  </div>
{/if}

<style lang="postcss">
  .Alerts {
    @apply fixed;
    @apply top-0;
    @apply right-0;
    @apply w-full;
    @apply p-5;
    @apply flex;
    @apply flex-col;
    @apply gap-2;
    @apply z-50;

    @apply md:max-w-lg;
  }
</style>
