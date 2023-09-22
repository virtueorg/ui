<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLTdAttributes } from "svelte/elements";

  type $$Props = HTMLTdAttributes;

  export { className as class };

  let className = "";
</script>

<td class={cn("p-4", "align-middle", className)} {...$$restProps}>
  <slot />
</td>
