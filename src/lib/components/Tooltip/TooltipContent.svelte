<script lang="ts">
  import { TRANSITION_SCALE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { Tooltip } from "bits-ui";
  import { scale } from "svelte/transition";

  type $$Props = Tooltip.ContentProps;

  export { className as class };

  let className = "";
</script>

<Tooltip.Content
  class={cn`
    bg-panel
    rounded-lg
    p-3
    ${className}
  `}
  transition={scale}
  transitionConfig={TRANSITION_SCALE}
  {...$$restProps}
>
  <slot />
</Tooltip.Content>
