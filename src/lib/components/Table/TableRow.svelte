<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  export { className as class };

  let className = "";
</script>

<tr
  class={cn("transition-all", "hover:bg-mutedHover", "even:bg-muted", className)}
  {...$$restProps}
>
  <slot />
</tr>
