<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Accordion } from "bits-ui";

  type $$Props = Accordion.HeaderProps;

  export { className as class };

  let className = "";
</script>

<Accordion.Header class={cn("font-bold", className)} {...$$restProps}>
  <slot />
</Accordion.Header>
