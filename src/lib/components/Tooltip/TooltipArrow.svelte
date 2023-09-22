<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Tooltip } from "bits-ui";

  type $$Props = Tooltip.ArrowProps;

  export { className as class };

  let className = "";
</script>

<Tooltip.Arrow class={cn(className)} {...$$restProps}>
  <slot />
</Tooltip.Arrow>
