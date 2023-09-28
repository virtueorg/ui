<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";

  type $$Props = Select.ItemProps;

  export { className as class };
  export let value: $$Props["value"];

  let className = "";
</script>

<Select.Item
  class={cn(
    "transition-all flex items-center gap-2 rounded-lg p-2 border border-transparent cursor-pointer",

    "active:scale-95",

    "hover:bg-muted/5",

    "data-[selected]:border-primary",
    className,
  )}
  {value}
  {...$$restProps}
>
  <slot />
</Select.Item>
