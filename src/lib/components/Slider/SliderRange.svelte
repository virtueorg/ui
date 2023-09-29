<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Slider } from "bits-ui";

  type $$Props = Slider.RangeProps;

  export { className as class };

  let className = "";
</script>

<Slider.Range
  class={cn`
    h-2
    grow
    overflow-hidden
    rounded-full
    bg-primary
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Slider.Range>
