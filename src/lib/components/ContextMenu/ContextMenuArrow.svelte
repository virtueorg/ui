<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.ArrowProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.Arrow class={cn(className)} {...$$restProps}>
  <slot />
</ContextMenu.Arrow>
