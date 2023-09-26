<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Slider } from "bits-ui";

  type $$Props = Slider.Props;

  export { className as class };
  export let value: $$Props["value"] = [0];

  let className = "";
</script>

<Slider.Root
  class={cn(
    "relative",
    "flex",
    "w-full",
    "h-2",
    "items-center",
    "bg-muted/5",
    "rounded-lg",
    className,
  )}
  {...$$restProps}
  bind:value
>
  <slot />
</Slider.Root>
