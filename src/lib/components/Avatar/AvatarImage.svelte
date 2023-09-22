<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Avatar } from "bits-ui";

  type $$Props = Avatar.ImageProps;

  export { className as class };

  let className = "";
</script>

<Avatar.Image class={cn("w-full", "h-full", "object-cover", className)} {...$$restProps}>
  <slot />
</Avatar.Image>
