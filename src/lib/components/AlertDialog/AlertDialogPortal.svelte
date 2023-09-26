<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";

  type $$Props = AlertDialog.PortalProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Portal
  class={cn(
    "fixed",
    "inset-0",
    "pointer-events-none",
    "flex",
    "items-end",
    "justify-center",
    "z-10",

    "md:items-center",
    className,
  )}
  {...$$restProps}
>
  <slot />
</AlertDialog.Portal>
