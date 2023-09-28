<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLElement>;

  export { className as class };

  let className = "";
</script>

<section class={cn("flex", "flex-col", "gap-2", className)} {...$$restProps}>
  <slot />
</section>
