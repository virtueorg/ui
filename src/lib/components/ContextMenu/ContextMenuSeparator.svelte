<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.SeparatorProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.Separator
  class={cn("h-px", "bg-mutedForeground", "opacity-10", className)}
  {...$$restProps}
>
  <slot />
</ContextMenu.Separator>
