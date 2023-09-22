<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";

  type $$Props = Select.InputProps;

  export { className as class };
  export let value: $$Props["value"] = undefined;

  let className = "";
</script>

<Select.Input class={cn(className)} {...$$restProps} bind:value>
  <slot />
</Select.Input>
