<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.LabelProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.Label class={cn("text-muted text-sm", className)} {...$$restProps}>
  <slot />
</DropdownMenu.Label>
