<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Progress } from "bits-ui";
  import ProgressLine from "./ProgressLine.svelte";

  type $$Props = Progress.Props;

  export { className as class };
  export let max: $$Props["max"] = 100;
  export let value: $$Props["value"] = 0;

  let className = "";

  $: percentage = (value! * 100) / max!;
</script>

<Progress.Root
  class={cn`
    bg-muted/5
    h-2
    rounded-lg
    overflow-hidden
    ${className}
  `}
  {max}
  {...$$restProps}
>
  <ProgressLine value={percentage} />
</Progress.Root>
