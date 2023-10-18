<script lang="ts">
  import type { IVariant } from "$lib/types";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLSpanElement> & {
    variant?: IVariant;
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  let className = "";
</script>

<span class={cn("Badge", variant, className)} {...$$restProps}>
  <slot />
</span>

<style lang="postcss">
  .Badge {
    @apply inline-flex;
    @apply items-center;
    @apply gap-2;
    @apply py-2;
    @apply px-3;
    @apply rounded-lg;
  }

  .default {
    @apply bg-transparent;
  }

  .success {
    @apply bg-primary/5;
    @apply text-primary;
  }

  .info {
    @apply bg-muted/5;
    @apply text-muted;
  }

  .warning {
    @apply bg-warning/5;
    @apply text-warning;
  }

  .error {
    @apply bg-error/5;
    @apply text-error;
  }
</style>
