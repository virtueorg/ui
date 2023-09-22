<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";

  type $$Props = Dialog.TitleProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Title class={cn("font-bold", className)} {...$$restProps}>
  <slot />
</Dialog.Title>
