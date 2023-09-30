<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { AlertDialog } from "bits-ui";

  type $$Props = AlertDialog.TriggerProps;

  export { className as class };

  let className = "";
</script>

<AlertDialog.Trigger
  class={cn`
    text-left
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</AlertDialog.Trigger>
