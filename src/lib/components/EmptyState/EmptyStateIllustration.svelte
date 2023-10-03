<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div
  class={cn`
    w-40
    h-40
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</div>
