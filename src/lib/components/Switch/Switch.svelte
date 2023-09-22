<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Switch } from "bits-ui";

  type $$Props = Switch.Props;

  export { className as class };
  export let checked: $$Props["checked"] = false;

  let className = "";
</script>

<Switch.Root
  class={cn(
    "transition-all",
    "peer",
    "inline-flex",
    "h-6",
    "w-11",
    "shrink-0",
    "cursor-pointer",
    "items-center",
    "rounded-full",
    "border-2",
    "bg-muted",
    "border-transparent",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",

    "data-[state=checked]:bg-primary",
    className,
  )}
  {...$$restProps}
  bind:checked
>
  <slot />
</Switch.Root>
