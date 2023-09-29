<script lang="ts">
  import { TRANSITION_Y_IN } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";
  import { fly } from "svelte/transition";

  type $$Props = Dialog.ContentProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Content
  class={cn`
    w-full
    bg-panel
    pointer-events-auto
    
    md:max-w-lg
    md:rounded-lg
    ${className}
  `}
  transition={fly}
  transitionConfig={TRANSITION_Y_IN}
  {...$$restProps}
>
  <slot />
</Dialog.Content>
