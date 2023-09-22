<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { RadioGroup } from "bits-ui";

  type $$Props = RadioGroup.Props;

  export { className as class };
  export let value: $$Props["value"] = undefined;

  let className = "";
</script>

<RadioGroup.Root class={cn("flex", "flex-col", "gap-2", className)} {...$$restProps} bind:value>
  <slot />
</RadioGroup.Root>
