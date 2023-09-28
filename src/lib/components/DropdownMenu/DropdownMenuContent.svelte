<script lang="ts">
  import { TRANSITION_SCALE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";
  import { scale } from "svelte/transition";

  type $$Props = DropdownMenu.ContentProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.Content
  class={cn("w-64 bg-panel rounded-lg", className)}
  transition={scale}
  transitionConfig={TRANSITION_SCALE}
  {...$$restProps}
>
  <slot />
</DropdownMenu.Content>
