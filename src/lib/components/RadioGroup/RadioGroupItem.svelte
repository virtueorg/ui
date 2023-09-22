<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { RadioGroup } from "bits-ui";

  type $$Props = RadioGroup.ItemProps;

  export { className as class };
  export let value: $$Props["value"];

  let className = "";
</script>

<RadioGroup.Item
  class={cn(
    "transition-all",
    "flex",
    "items-center",
    "w-full",
    "border",
    "border-muted",
    "bg-muted",
    "text-left",
    "p-3",
    "rounded-lg",

    "hover:bg-mutedHover",
    "hover:border-mutedHover",

    "data-[state=checked]:border-primary",
    className,
  )}
  type="button"
  {value}
  {...$$restProps}
>
  <slot />
</RadioGroup.Item>
