<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";

  type $$Props = AlertDialog.ActionProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Action class={cn(className)} {...$$restProps} on:click>
  <slot />
</AlertDialog.Action>
