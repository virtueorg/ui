<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLUListElement>;

  export { className as class };

  let className = "";
</script>

<ul
  class={cn`
    p-2
    flex
    items-center
    justify-between
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</ul>
