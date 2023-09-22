<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Slider } from "bits-ui";

  type $$Props = Slider.InputProps;

  export { className as class };

  let className = "";
</script>

<Slider.Input class={cn(className)} {...$$restProps}>
  <slot />
</Slider.Input>
