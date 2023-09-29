<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Label } from "bits-ui";

  type $$Props = Label.Props;

  export { className as class };

  let className = "";
</script>

<Label.Root
  class={cn`
    text-sm
    text-muted
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Label.Root>
