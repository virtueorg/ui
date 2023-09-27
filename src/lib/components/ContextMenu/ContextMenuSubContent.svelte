<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.SubContentProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.SubContent class={cn("w-64", "bg-panel", "rounded-lg", className)} {...$$restProps}>
  <slot />
</ContextMenu.SubContent>
