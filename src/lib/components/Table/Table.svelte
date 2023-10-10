<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLTableAttributes } from "svelte/elements";

  type $$Props = HTMLTableAttributes;

  export { className as class };

  let className = "";
</script>

<div
  class={cn`
    w-full
    overflow-auto
  `}
>
  <table
    class={cn`
      w-full
      min-w-[65rem]
      caption-bottom
      rounded-lg
      overflow-hidden
      table-fixed
      ${className}
    `}
    {...$$restProps}
  >
    <slot />
  </table>
</div>
