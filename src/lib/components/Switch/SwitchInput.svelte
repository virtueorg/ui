<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Switch } from "bits-ui";

  type $$Props = Switch.InputProps;

  export { className as class };
  export let value: $$Props["value"] = undefined;

  let className = "";
</script>

<Switch.Input class={cn(className)} {...$$restProps} bind:value>
  <slot />
</Switch.Input>
