<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      relative
      bg-muted/5
      rounded-lg
    `,
  });
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
