<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.RadioGroupProps;

  export { className as class };
  export let value: $$Props["value"] = undefined;

  let className = "";
</script>

<ContextMenu.RadioGroup class={cn(className)} {...$$restProps} bind:value>
  <slot />
</ContextMenu.RadioGroup>
