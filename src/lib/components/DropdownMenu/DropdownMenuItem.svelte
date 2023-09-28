<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.ItemProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.Item
  class={cn(
    "transition-all flex items-center gap-2 rounded-lg p-2 cursor-pointer",

    "active:scale-95",

    "hover:bg-muted/5",
    className,
  )}
  {...$$restProps}
>
  <slot />
</DropdownMenu.Item>
