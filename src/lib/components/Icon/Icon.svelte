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

<div class={cn("Icon", variant, className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .Icon {
    @apply w-5;
    @apply h-5;
    @apply shrink-0;
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
