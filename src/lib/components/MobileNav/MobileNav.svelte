<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLElement>;

  export { className as class };

  let className = "";
</script>

<nav class={cn("w-full", "bg-muted", "p-2", className)} {...$$restProps}>
  <slot />
</nav>
