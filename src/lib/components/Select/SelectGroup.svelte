<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";

  type $$Props = Select.GroupProps;

  export { className as class };

  let className = "";
</script>

<Select.Group
  class={cn`
    p-2
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Select.Group>
