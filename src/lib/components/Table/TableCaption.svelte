<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableCaptionElement>;

  export { className as class };

  let className = "";
</script>

<caption class={cn("mt-4", "text-sm", "text-mutedForeground", className)} {...$$restProps}>
  <slot />
</caption>
