<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: VariantProps<typeof alertVariants>["variant"];
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  const alertVariants = tv({
    variants: {
      variant: {
        default: cn("bg-muted"),
        success: cn("bg-primary", "text-primaryForeground"),
        info: cn("bg-muted", "text-mutedForeground"),
        warning: cn("bg-warning", "text-warningForeground"),
        error: cn("bg-error", "text-errorForeground"),
      },
    },
  });

  let className = "";
</script>

<div
  role="alert"
  class={cn(
    "rounded-lg",
    "flex",
    "items-center",
    "p-4",
    "gap-2",
    alertVariants({ variant }),
    className,
  )}
  {...$$restProps}
>
  <slot />
</div>
