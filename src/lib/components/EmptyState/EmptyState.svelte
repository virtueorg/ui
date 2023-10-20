<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      flex
      flex-col
      items-center
      justify-center
      gap-3
      text-center
    `,
  });
</script>

<div class={cn(style.base, className)} {...$$restProps}>
  <slot />
</div>
