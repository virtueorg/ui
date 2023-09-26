<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLElement>;

  export { className as class };

  let className = "";
</script>

<nav class={cn("bg-panel", "flex", "flex-col", className)} {...$$restProps}>
  <slot />
</nav>
