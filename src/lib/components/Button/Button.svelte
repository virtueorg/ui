<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Button } from "bits-ui";
  import { tv, type VariantProps } from "tailwind-variants";

  type $$Props = Button.Props & {
    variant?: VariantProps<typeof buttonVariants>["variant"];
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  const buttonVariants = tv({
    variants: {
      variant: {
        default: cn("bg-transparent", "hover:bg-muted"),
        success: cn("bg-primary", "text-primaryForeground", "hover:bg-primaryHover"),
        info: cn("bg-muted", "text-mutedForeground", "hover:bg-mutedHover"),
        warning: cn("bg-warning", "text-warningForeground", "hover:bg-warningHover"),
        error: cn("bg-error", "text-errorForeground", "hover:bg-errorHover"),
      },
    },
  });

  let className = "";
</script>

<Button.Root
  class={cn(
    "transition-all",
    "p-4",
    "rounded-lg",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",

    "active:scale-95",

    "disabled:bg-muted",
    "disabled:text-mutedForeground",
    "disabled:active:scale-100",
    buttonVariants({ variant }),
    className,
  )}
  {...$$restProps}
>
  <slot />
</Button.Root>
