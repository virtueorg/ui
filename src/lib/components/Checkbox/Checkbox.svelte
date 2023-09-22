<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Checkbox } from "bits-ui";

  type $$Props = Checkbox.Props;

  export { className as class };
  export let checked: $$Props["checked"] = false;

  let className = "";
</script>

<Checkbox.Root
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
  {...$$restProps}
  bind:checked
>
  <slot />
</Checkbox.Root>
