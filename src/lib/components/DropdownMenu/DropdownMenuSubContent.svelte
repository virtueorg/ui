<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.SubContentProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.SubContent class={cn("w-64", "bg-panel", "rounded-lg", className)} {...$$restProps}>
  <slot />
</DropdownMenu.SubContent>
