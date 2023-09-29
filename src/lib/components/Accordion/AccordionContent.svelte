<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Accordion } from "bits-ui";
  import { slide } from "svelte/transition";

  type $$Props = Accordion.ContentProps;

  export { className as class };

  let className = "";
</script>

<Accordion.Content
  class={cn`
    p-4 
    ${className}
  `}
  {...$$restProps}
  transition={slide}
>
  <slot />
</Accordion.Content>
