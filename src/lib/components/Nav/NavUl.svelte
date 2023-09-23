<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLUListElement>;

  export { className as class };

  let className = "";
</script>

<ul class={cn("p-4", "flex", "flex-col", "gap-2", className)} {...$$restProps}>
  <slot />
</ul>
