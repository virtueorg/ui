<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.GroupProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.Group
  class={cn`
    p-2
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</DropdownMenu.Group>
