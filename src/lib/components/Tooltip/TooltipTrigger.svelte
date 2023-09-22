<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Tooltip } from "bits-ui";

  type $$Props = Tooltip.TriggerProps;

  export { className as class };

  let className = "";
</script>

<Tooltip.Trigger class={cn(className)} {...$$restProps}>
  <slot />
</Tooltip.Trigger>
