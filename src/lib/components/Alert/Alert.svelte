<script lang="ts">
  import type { IVariant } from "$lib/types";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: IVariant;
  };

  export { className as class };
  export let variant: $$Props["variant"] = "default";

  let className = "";
</script>

<div role="alert" class={cn("Alert", variant, className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .Alert {
    @apply rounded-lg;
    @apply flex;
    @apply items-center;
    @apply p-5;
    @apply gap-2;
  }

  .default {
    @apply bg-panel;
  }

  .success {
    @apply bg-primary;
    @apply text-background;
  }

  .info {
    @apply bg-panel;
    @apply text-muted;
  }

  .warning {
    @apply bg-warning;
    @apply text-background;
  }

  .error {
    @apply bg-error;
    @apply text-background;
  }
</style>
