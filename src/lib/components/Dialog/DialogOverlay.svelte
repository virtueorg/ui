<script lang="ts">
  import { TRANSITION_BASE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";
  import { fade } from "svelte/transition";

  type $$Props = Dialog.OverlayProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Overlay
  class={cn("absolute inset-0 bg-background/80 -z-10 pointer-events-auto", className)}
  transition={fade}
  transitionConfig={TRANSITION_BASE}
  {...$$restProps}
>
  <slot />
</Dialog.Overlay>
