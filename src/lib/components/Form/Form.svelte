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
  <form
    class={cn`
      flex
      flex-col
      gap-5
      ${className}
    `}
    {...$$restProps}
    use:enhance
  >
    <slot />
  </form>
{:else}
  <form
    class={cn`
      flex
      flex-col
      gap-5
      ${className}
    `}
    {...$$restProps}
  >
    <slot />
  </form>
{/if}
