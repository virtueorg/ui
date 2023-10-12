<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Accordion } from "bits-ui";

  type $$Props = Accordion.TriggerProps;

  export { className as class };

  let className = "";
</script>

<Accordion.Trigger
  class={cn`
    w-full
    text-left
    p-5
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Accordion.Trigger>
