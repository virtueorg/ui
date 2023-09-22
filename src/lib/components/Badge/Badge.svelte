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
        success: cn("bg-primary", "text-primaryForeground"),
        info: cn("bg-muted", "text-mutedForeground"),
        warning: cn("bg-warning", "text-warningForeground"),
        error: cn("bg-error", "text-errorForeground"),
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
