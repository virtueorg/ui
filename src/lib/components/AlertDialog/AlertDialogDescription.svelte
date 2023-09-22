<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";

  type $$Props = AlertDialog.DescriptionProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Description class={cn("text-sm", "text-mutedForeground", className)} {...$$restProps}>
  <slot />
</AlertDialog.Description>
