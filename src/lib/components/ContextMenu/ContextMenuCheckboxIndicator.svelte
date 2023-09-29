<script lang="ts">
  import TickIcon from "$lib/icons/TickIcon.svelte";
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";
  import Icon from "../Icon/Icon.svelte";

  type $$Props = ContextMenu.CheckboxItemIndicatorProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.CheckboxIndicator
  class={cn`
    ml-auto
    ${className}
  `}
  {...$$restProps}
>
  <slot>
    <Icon>
      <TickIcon />
    </Icon>
  </slot>
</ContextMenu.CheckboxIndicator>
