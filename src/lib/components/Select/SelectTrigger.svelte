<script lang="ts">
  import { ChevronDownIcon } from "$lib/icons";
  import { cn } from "$lib/utils/misc";
  import { Select } from "bits-ui";
  import { Icon } from "../Icon";

  type $$Props = Select.TriggerProps;

  export { className as class };

  let className = "";
</script>

<Select.Trigger
  class={cn(
    "w-full text-left p-3 bg-muted/5 rounded-lg flex items-center justify-between",
    className,
  )}
  {...$$restProps}
>
  <div>
    <slot />
  </div>

  <Icon>
    <ChevronDownIcon />
  </Icon>
</Select.Trigger>
