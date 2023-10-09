<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: VariantProps<typeof detailVariants>["variant"];
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  const detailVariants = tv({
    variants: {
      variant: {
        default: cn`
          text-inherit
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

  let className = "";
</script>

<div
  class={cn`
    flex
    items-center
    gap-2
    ${detailVariants({ variant })}
    ${className}

  `}
  {...$$restProps}
>
  <slot />
</div>
