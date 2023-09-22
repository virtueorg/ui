<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.RadioGroupProps;

  export { className as class };
  export let value: $$Props["value"] = undefined;

  let className = "";
</script>

<DropdownMenu.RadioGroup class={cn(className)} {...$$restProps} bind:value>
  <slot />
</DropdownMenu.RadioGroup>
