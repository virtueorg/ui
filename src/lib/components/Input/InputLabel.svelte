<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLLabelAttributes } from "svelte/elements";

  type $$Props = HTMLLabelAttributes;

  export { className as class };

  let className = "";
</script>

<label
  class={cn("absolute", "top-0", "left-0", "p-3", "text-sm", "text-mutedForeground", className)}
  {...$$restProps}
>
  <slot />
</label>
