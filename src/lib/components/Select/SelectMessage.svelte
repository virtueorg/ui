<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: VariantProps<typeof selectMessageVariants>["variant"];
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  const selectMessageVariants = tv({
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

  let className = "";
</script>

<div class={cn("SelectMessage", selectMessageVariants({ variant }), className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .SelectMessage {
    @apply text-sm;
  }
</style>
