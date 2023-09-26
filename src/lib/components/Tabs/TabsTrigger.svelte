<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Tabs } from "bits-ui";

  type $$Props = Tabs.TriggerProps;

  export { className as class };
  export let value: $$Props["value"];

  let className = "";
</script>

<Tabs.Trigger
  class={cn(
    "transition-all",
    "flex",
    "items-center",
    "gap-2",
    "py-3",
    "px-5",
    "border-b-2",
    "border-muted/20",
    "opacity-50",

    "data-[state=active]:border-primary",
    "data-[state=active]:text-primary",
    "data-[state=active]:opacity-100",
    className,
  )}
  {value}
  {...$$restProps}
>
  <slot />
</Tabs.Trigger>
