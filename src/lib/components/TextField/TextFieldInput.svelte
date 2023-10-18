<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLInputAttributes } from "svelte/elements";

  type $$Props = HTMLInputAttributes & {
    hasIcon?: boolean;
    hasLabel?: boolean;
  };

  export { className as class };
  export let value: $$Props["value"] = undefined;
  export let hasIcon: $$Props["hasIcon"] = false;
  export let hasLabel: $$Props["hasLabel"] = false;

  let className = "";
</script>

<input
  class={cn("TextFieldInput", { hasIcon }, { hasLabel }, className)}
  {...$$restProps}
  bind:value
/>

<style lang="postcss">
  .TextFieldInput {
    @apply w-full;
    @apply p-3;
    @apply bg-transparent;
    @apply rounded-lg;
  }

  .hasIcon {
    @apply pr-11;
  }

  .hasLabel {
    @apply pt-8;
  }
</style>
