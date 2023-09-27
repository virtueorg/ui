<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  export { className as class };

  let className = "";
</script>

<tr
  class={cn("transition-all", "even:bg-muted/5", "hover:bg-muted/10", className)}
  {...$$restProps}
>
  <slot />
</tr>
