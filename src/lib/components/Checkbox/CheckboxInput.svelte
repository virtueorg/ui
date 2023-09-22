<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Checkbox } from "bits-ui";

  type $$Props = Checkbox.InputProps;

  export { className as class };

  let className = "";
</script>

<Checkbox.Input class={cn(className)} {...$$restProps}>
  <slot />
</Checkbox.Input>
