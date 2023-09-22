<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";

  type $$Props = Dialog.PortalProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Portal
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
</Dialog.Portal>
