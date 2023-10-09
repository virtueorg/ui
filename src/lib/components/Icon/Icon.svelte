<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: VariantProps<typeof iconVariants>["variant"];
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  const iconVariants = tv({
    variants: {
      variant: {
        default: cn`
          bg-transparent
          text-inherit
        `,
        success: cn`
          bg-primary/5
          text-primary
        `,
        info: cn`
          bg-muted/5
          text-muted
        `,
        warning: cn`
          bg-warning/5
          text-warning
        `,
        error: cn`
          bg-error/5
          text-error
        `,
      },
    },
  });

  let className = "";
</script>

<div
  class={cn`
    w-5
    h-5
    ${iconVariants({ variant })}
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</div>
