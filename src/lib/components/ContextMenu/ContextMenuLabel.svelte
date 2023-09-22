<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.LabelProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.Label class={cn("text-mutedForeground", "text-sm", className)} {...$$restProps}>
  <slot />
</ContextMenu.Label>
