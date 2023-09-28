<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.ItemProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.Item
  class={cn(
    "transition-all flex items-center gap-2 rounded-lg p-2 cursor-pointer",

    "active:scale-95",

    "hover:bg-muted/5",
    className,
  )}
  {...$$restProps}
>
  <slot />
</ContextMenu.Item>
