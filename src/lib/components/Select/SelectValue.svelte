<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";

  type $$Props = Select.ValueProps;

  export { className as class };

  let className = "";
</script>

<Select.Value class={cn("font-bold", className)} {...$$restProps}>
  <slot />
</Select.Value>
