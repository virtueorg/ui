<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.GroupProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.Group class={cn("p-2", className)} {...$$restProps}>
  <slot />
</ContextMenu.Group>
