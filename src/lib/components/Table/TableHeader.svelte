<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  export { className as class };

  let className = "";
</script>

<thead class={cn("bg-muted/5 [&>tr]:hover:bg-transparent", className)} {...$$restProps}>
  <slot />
</thead>
