<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";

  type $$Props = Select.LabelProps;

  export { className as class };

  let className = "";
</script>

<Select.Label class={cn("text-sm", "text-mutedForeground", className)} {...$$restProps}>
  <slot />
</Select.Label>
