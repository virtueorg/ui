<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";

  type $$Props = DropdownMenu.CheckboxItemProps;

  export { className as class };
  export let checked: $$Props["checked"] = false;

  let className = "";
</script>

<DropdownMenu.CheckboxItem
  class={cn`
    transition-all
    flex
    items-center
    gap-2
    rounded-lg
    p-2
    cursor-pointer

    active:scale-95

    hover:bg-muted/5
    ${className}
  `}
  {...$$restProps}
  bind:checked
>
  <slot />
</DropdownMenu.CheckboxItem>
