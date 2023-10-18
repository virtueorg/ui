<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  export { className as class };

  let className = "";
</script>

<div class={cn("FormSubmit", className)} {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  .FormSubmit {
    @appl flex;
    @appl flex-col;
    @appl gap-2;
  }
</style>
