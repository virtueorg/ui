<script lang="ts">
  import { TRANSITION_SCALE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";
  import { scale } from "svelte/transition";

  type $$Props = Select.ContentProps;

  export { className as class };

  let className = "";
</script>

<Select.Content
  class={cn("bg-panel", "rounded-lg", className)}
  transition={scale}
  transitionConfig={TRANSITION_SCALE}
  {...$$restProps}
>
  <slot />
</Select.Content>
