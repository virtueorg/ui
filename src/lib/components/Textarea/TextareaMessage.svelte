<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: VariantProps<typeof inputMessageVariants>["variant"];
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  const inputMessageVariants = tv({
    variants: {
      variant: {
        default: cn("text-foreground"),
        success: cn("text-primary"),
        info: cn("text-mutedForeground"),
        warning: cn("text-warning"),
        error: cn("text-error"),
      },
    },
  });

  let className = "";
</script>

<div class={cn("text-sm", inputMessageVariants({ variant }), className)} {...$$restProps}>
  <slot />
</div>
