<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Slider } from "bits-ui";

  type $$Props = Slider.ThumbProps;

  export { className as class };

  let className = "";
</script>

<Slider.Thumb
  class={cn(
    "block",
    "h-5",
    "w-5",
    "rounded-lg",
    "bg-primary",

    "disabled:pointer-events-none",
    "disabled:opacity-50",
    className,
  )}
  {...$$restProps}
>
  <slot />
</Slider.Thumb>
