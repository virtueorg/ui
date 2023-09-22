<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    value?: number;
  };

  export { className as class };
  export let value: $$Props["value"] = 0;

  let className = "";
</script>

<div
  class={cn("transition-all h-full", "bg-primary", className)}
  style="width: {value}%"
  {...$$restProps}
/>
