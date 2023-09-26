<script lang="ts">
  import { TRANSITION_SCALE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";
  import { scale } from "svelte/transition";

  type $$Props = ContextMenu.ContentProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.Content
  class={cn("w-64", "bg-panel", "rounded-lg", className)}
  transition={scale}
  transitionConfig={TRANSITION_SCALE}
  {...$$restProps}
>
  <slot />
</ContextMenu.Content>
