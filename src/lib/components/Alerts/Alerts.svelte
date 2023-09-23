<script lang="ts">
  import { alerts } from "$lib/stores/alerts";
  import { TRANSITION_BASE, TRANSITION_Y_IN, TRANSITION_Y_OUT } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { flip } from "svelte/animate";
  import type { HTMLAttributes } from "svelte/elements";
  import { fly } from "svelte/transition";
  import AlertItem from "./AlertItem.svelte";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

{#if $alerts.length}
  <div
    class={cn(
      "fixed",
      "top-0",
      "right-0",
      "w-full",
      "p-4",
      "flex",
      "flex-col",
      "gap-2",
      "z-50",

      "md:max-w-lg",
      className,
    )}
    {...$$restProps}
  >
    {#each $alerts as alert (alert.id)}
      <div
        animate:flip={TRANSITION_BASE}
        in:fly|global={TRANSITION_Y_IN}
        out:fly|global={TRANSITION_Y_OUT}
      >
        <AlertItem {alert} />
      </div>
    {/each}
  </div>
{/if}
