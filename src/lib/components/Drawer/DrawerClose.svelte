<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";

  type $$Props = Dialog.CloseProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Close class={cn(className)} {...$$restProps}>
  <slot />
</Dialog.Close>
