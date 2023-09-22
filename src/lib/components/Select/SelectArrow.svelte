<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";

  type $$Props = Select.ArrowProps;

  export { className as class };

  let className = "";
</script>

<Select.Arrow class={cn(className)} {...$$restProps}>
  <slot />
</Select.Arrow>
