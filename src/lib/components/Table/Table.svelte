<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLTableAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLTableAttributes;

  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      w-full
      min-w-[65rem]
      caption-bottom
      rounded-lg
      overflow-hidden
      table-fixed
    `,
  });
</script>

<div class="w-full overflow-auto">
  <table class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </table>
</div>
