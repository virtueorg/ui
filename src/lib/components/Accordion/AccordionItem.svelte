<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Accordion } from "bits-ui";

  type $$Props = Accordion.ItemProps;

  export let value: $$Props["value"];
  export { className as class };

  let className = "";
</script>

<Accordion.Item class={cn("bg-muted/5 rounded-lg", className)} {value} {...$$restProps}>
  <slot />
</Accordion.Item>
