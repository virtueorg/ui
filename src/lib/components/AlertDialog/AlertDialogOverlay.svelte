<script lang="ts">
  import { TRANSITION_BASE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";
  import { fade } from "svelte/transition";

  type $$Props = AlertDialog.OverlayProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Overlay
  class={cn("absolute", "inset-0", "bg-background/80", "-z-10", "pointer-events-auto", className)}
  transition={fade}
  transitionConfig={TRANSITION_BASE}
  {...$$restProps}
>
  <slot />
</AlertDialog.Overlay>
