<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    variant?: VariantProps<typeof badgeVariants>["variant"];
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  const badgeVariants = tv({
    variants: {
      variant: {
        default: cn("bg-transparent"),
        success: cn("bg-primary/5", "text-primary"),
        info: cn("bg-muted/5", "text-muted"),
        warning: cn("bg-warning/5", "text-warning"),
        error: cn("bg-error/5", "text-error"),
      },
    },
  });

  let className = "";
</script>

<span
  class={cn(
    "inline-flex",
    "items-center",
    "gap-2",
    "py-2",
    "px-3",
    "rounded-lg",
    badgeVariants({ variant }),
    className,
  )}
  {...$$restProps}
>
  <slot />
</span>
