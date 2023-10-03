<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div
  class={cn`
    flex
    flex-col
    items-center
    justify-center
    gap-3
    text-center
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</div>
