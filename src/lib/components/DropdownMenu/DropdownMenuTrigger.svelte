<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.TriggerProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.Trigger
  class={cn`
    text-left
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</DropdownMenu.Trigger>
