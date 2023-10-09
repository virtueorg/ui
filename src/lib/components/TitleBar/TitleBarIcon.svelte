<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div
  class={cn`
    w-11
    h-11
    flex
    items-center
    justify-center
    rounded-lg
    bg-muted/5
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</div>
