<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLThAttributes } from "svelte/elements";

  type $$Props = HTMLThAttributes;

  export { className as class };

  let className = "";
</script>

<th
  class={cn("p-4", "text-left", "align-middle", "text-muted-foreground", className)}
  {...$$restProps}
>
  <slot />
</th>
