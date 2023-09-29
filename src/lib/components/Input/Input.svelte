<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div
  class={cn`
    relative
    bg-muted/5
    rounded-lg
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</div>
