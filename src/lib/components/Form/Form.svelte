<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLFormAttributes } from "svelte/elements";

  type $$Props = HTMLFormAttributes & {
    enhance?: (node: HTMLFormElement) => void;
  };

  export let enhance: $$Props["enhance"] = undefined;
  export { className as class };

  let className = "";
</script>

{#if enhance}
  <form class={cn("Form", className)} use:enhance {...$$restProps}>
    <slot />
  </form>
{:else}
  <form class={cn("Form", className)} {...$$restProps}>
    <slot />
  </form>
{/if}

<style lang="postcss">
  .Form {
    @appl flex;
    @appl flex-col;
    @appl gap-5;
  }
</style>
