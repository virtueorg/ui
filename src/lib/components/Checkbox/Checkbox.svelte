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
    "border-transparent",
    "bg-muted/5",
    "text-left",
    "p-3",
    "rounded-lg",

    "hover:bg-muted/10",

    "data-[state=checked]:border-primary",
    className,
  )}
  type="button"
  {...$$restProps}
  bind:checked
>
  <slot />
</Checkbox.Root>
