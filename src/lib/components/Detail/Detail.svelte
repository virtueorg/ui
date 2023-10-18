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

<div class={cn("Detail", variant, className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .Detail {
    @apply flex;
    @apply items-center;
    @apply gap-2;
  }

  .default {
    @apply text-inherit;
  }

  .success {
    @apply text-primary;
  }

  .info {
    @apply text-muted;
  }

  .warning {
    @apply text-warning;
  }

  .error {
    @apply text-error;
  }
</style>
