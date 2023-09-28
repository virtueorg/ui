<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.RadioItemProps;

  export { className as class };
  export let value: $$Props["value"];

  let className = "";
</script>

<ContextMenu.RadioItem
  class={cn(
    "transition-all flex items-center gap-2 rounded-lg p-2 cursor-pointer",

    "active:scale-95",

    "hover:bg-muted/5",
    className,
  )}
  {value}
  {...$$restProps}
>
  <slot />
</ContextMenu.RadioItem>
