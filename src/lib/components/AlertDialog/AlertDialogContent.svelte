<script lang="ts">
  import { TRANSITION_Y_IN } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";
  import { fly } from "svelte/transition";

  type $$Props = AlertDialog.ContentProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Content
  class={cn(
    "w-full",
    "bg-muted/5",
    "pointer-events-auto",
    "md:max-w-lg",
    "md:rounded-lg",
    className,
  )}
  transition={fly}
  transitionConfig={TRANSITION_Y_IN}
  {...$$restProps}
>
  <slot />
</AlertDialog.Content>
