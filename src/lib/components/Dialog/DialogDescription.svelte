<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Dialog } from "bits-ui";

  type $$Props = Dialog.DescriptionProps;

  export { className as class };

  let className = "";
</script>

<Dialog.Description
  class={cn`
    text-sm
    text-muted
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Dialog.Description>
