<script lang="ts">
  import { TickIcon } from "$lib/icons";
  import { cn } from "$lib/utils/misc";
  import { Checkbox } from "bits-ui";
  import { Icon } from "../Icon";

  type $$Props = Checkbox.IndicatorProps;

  export { className as class };

  let className = "";
</script>

<Checkbox.Indicator class={cn("ml-auto", "text-primary", className)} let:isChecked {...$$restProps}>
  {#if isChecked}
    <slot>
      <Icon>
        <TickIcon />
      </Icon>
    </slot>
  {/if}
</Checkbox.Indicator>
