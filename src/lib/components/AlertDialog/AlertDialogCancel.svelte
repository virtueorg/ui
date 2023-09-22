<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";

  type $$Props = AlertDialog.CancelProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Cancel class={cn(className)} {...$$restProps}>
  <slot />
</AlertDialog.Cancel>
