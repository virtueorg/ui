<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.TriggerProps;

  export { className as class };

  let className = "";
</script>

<ContextMenu.Trigger class={cn(className)} {...$$restProps}>
  <slot />
</ContextMenu.Trigger>
