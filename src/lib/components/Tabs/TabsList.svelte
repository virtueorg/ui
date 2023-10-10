<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Tabs } from "bits-ui";

  type $$Props = Tabs.ListProps;

  export { className as class };

  let className = "";
</script>

<Tabs.List
  class={cn`
    flex
    items-center
    whitespace-nowrap
    overflow-auto
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Tabs.List>
