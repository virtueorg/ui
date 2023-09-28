<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Accordion } from "bits-ui";

  type $$Props = Accordion.Props<boolean>;

  export { className as class };

  let className = "";
</script>

<Accordion.Root class={cn("flex flex-col gap-2", className)} {...$$restProps}>
  <slot />
</Accordion.Root>
