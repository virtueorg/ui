<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";

  type $$Props = Dialog.TriggerProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Trigger class={cn(className)} {...$$restProps}>
  <slot />
</Dialog.Trigger>
