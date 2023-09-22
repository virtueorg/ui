<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.ArrowProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.Arrow class={cn(className)} {...$$restProps}>
  <slot />
</DropdownMenu.Arrow>
