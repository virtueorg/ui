<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { RadioGroup } from "bits-ui";

  type $$Props = RadioGroup.InputProps;

  export { className as class };
  export let value: $$Props["value"] = undefined;

  let className = "";
</script>

<RadioGroup.Input class={cn(className)} {...$$restProps} bind:value>
  <slot />
</RadioGroup.Input>
