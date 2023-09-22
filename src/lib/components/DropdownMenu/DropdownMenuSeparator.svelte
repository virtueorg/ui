<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.SeparatorProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.Separator
  class={cn("h-px", "bg-mutedForeground", "opacity-10", className)}
  {...$$restProps}
>
  <slot />
</DropdownMenu.Separator>
