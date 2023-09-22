<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Tabs } from "bits-ui";

  type $$Props = Tabs.Props;

  export { className as class };

  let className = "";
</script>

<Tabs.Root class={cn(className)} {...$$restProps}>
  <slot />
</Tabs.Root>
