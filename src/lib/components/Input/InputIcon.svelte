<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div
  class={cn(
    "absolute",
    "top-0",
    "right-0",
    "h-full",
    "flex",
    "items-center",
    "p-3",
    "text-muted",
    "pointer-events-none",
    className,
  )}
  {...$$restProps}
>
  <slot />
</div>
