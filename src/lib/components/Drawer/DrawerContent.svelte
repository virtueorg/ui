<script lang="ts">
  import { TRANSITION_X_IN } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";
  import { fly } from "svelte/transition";

  type $$Props = Dialog.ContentProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Content
  class={cn(
    "w-full",
    "h-full",
    "flex",
    "flex-col",
    "bg-muted",
    "pointer-events-auto",

    "md:max-w-lg",
    className,
  )}
  transition={fly}
  transitionConfig={TRANSITION_X_IN}
  {...$$restProps}
>
  <slot />
</Dialog.Content>
