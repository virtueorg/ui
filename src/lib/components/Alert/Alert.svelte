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
        default: cn`
          bg-panel
        `,
        success: cn`
          bg-primary
          text-background
        `,
        info: cn`
          bg-panel
          text-muted
        `,
        warning: cn`
          bg-warning
          text-background
        `,
        error: cn`
          bg-error
          text-background
        `,
      },
    },
  });

  let className = "";
</script>

<div
  role="alert"
  class={cn`
    rounded-lg
    flex
    items-center
    p-5
    gap-2
    ${alertVariants({ variant })}
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</div>
