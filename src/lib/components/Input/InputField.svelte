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
  class={cn(
    "w-full",
    "p-3",
    "bg-transparent",
    "rounded-lg",
    hasIcon && "pr-11",
    hasLabel && "pt-8",
    className,
  )}
  {...$$restProps}
  bind:value
/>
