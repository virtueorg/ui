<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";

  type $$Props = AlertDialog.TitleProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Title class={cn("font-bold", className)} {...$$restProps}>
  <slot />
</AlertDialog.Title>
