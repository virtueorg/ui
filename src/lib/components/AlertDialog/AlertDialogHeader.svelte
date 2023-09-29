<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div
  class={cn`
    p-4
    flex
    flex-col"
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</div>
