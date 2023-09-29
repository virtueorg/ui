<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLTableSectionElement>;

  export { className as class };

  let className = "";
</script>

<tfoot
  class={cn`
    bg-primary
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</tfoot>
