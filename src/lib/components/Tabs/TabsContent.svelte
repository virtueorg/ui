<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Tabs } from "bits-ui";

  type $$Props = Tabs.ContentProps;

  export { className as class };
  export let value: $$Props["value"];

  let className = "";
</script>

<Tabs.Content class={cn(className)} {value} {...$$restProps}>
  <slot />
</Tabs.Content>
