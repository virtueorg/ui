<script lang="ts">
  import ChevronRightIcon from "$lib/icons/ChevronRightIcon.svelte";
  import { cn } from "$lib/utils/misc";
  import { DropdownMenu } from "bits-ui";
  import Icon from "../Icon/Icon.svelte";

  type $$Props = DropdownMenu.SubTriggerProps;

  export { className as class };

  let className = "";
</script>

<DropdownMenu.SubTrigger
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
>
  <slot />

  <Icon class="ml-auto">
    <ChevronRightIcon />
  </Icon>
</DropdownMenu.SubTrigger>
