<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Switch } from "bits-ui";

  type $$Props = Switch.ThumbProps;

  export { className as class };

  let className = "";
</script>

<Switch.Thumb
  class={cn`
    transition-all
    pointer-events-none
    block
    h-5
    w-5
    rounded-full
    bg-background
    shadow-lg
    ring-0

    data-[state=checked]:translate-x-5
    data-[state=unchecked]:translate-x-0
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Switch.Thumb>
