<script lang="ts">
  import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";
  import Icon from "../Icon/Icon.svelte";

  type $$Props = ContextMenu.SubTriggerProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.SubTrigger
  class={cn(
    "transition-all",
    "flex",
    "items-center",
    "gap-2",
    "rounded-lg",
    "p-2",
    "cursor-pointer",

    "active:scale-95",

    "hover:bg-mutedHover",
    className,
  )}
  {...$$restProps}
>
  <slot />

  <Icon class="ml-auto">
    <ChevronRightIcon />
  </Icon>
</ContextMenu.SubTrigger>
