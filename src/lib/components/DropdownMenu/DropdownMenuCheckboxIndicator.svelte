<script lang="ts">
  import TickIcon from "$lib/icons/TickIcon.svelte";
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";
  import Icon from "../Icon/Icon.svelte";

  type $$Props = DropdownMenu.CheckboxItemIndicatorProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.CheckboxIndicator
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
</DropdownMenu.CheckboxIndicator>
