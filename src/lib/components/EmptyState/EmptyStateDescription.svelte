<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLParagraphElement>;

  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      text-muted
    `,
  });
</script>

<p class={cn(style.base, className)} {...$$restProps}>
  <slot />
</p>
