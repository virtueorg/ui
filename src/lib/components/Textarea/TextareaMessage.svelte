<script lang="ts">
  import type { IVariant } from "$lib/types";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: IVariant;
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  let className = "";

  const style = tv({
    base: cn`
      text-sm
    `,
    variants: {
      variant: {
        default: cn`
          text-foreground
        `,
        success: cn`
          text-primary
        `,
        info: cn`
          text-muted
        `,
        warning: cn`
          text-warning
        `,
        error: cn`
          text-error
        `,
      },
    },
  });
</script>

<div class={cn(style.base, style({ variant }), className)} {...$$restProps}>
  <slot />
</div>
