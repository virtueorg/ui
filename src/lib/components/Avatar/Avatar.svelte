<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Avatar } from "bits-ui";

  type $$Props = Avatar.Props;

  export { className as class };

  let className = "";
</script>

<Avatar.Root
  class={cn(
    "w-11",
    "h-11",
    "flex",
    "items-center",
    "justify-center",
    "bg-muted",
    "rounded-lg",
    "overflow-hidden",
    className,
  )}
  {...$$restProps}
>
  <slot />
</Avatar.Root>
