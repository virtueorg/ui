<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { CreateAvatarProps } from "@melt-ui/svelte";
  import ctx from "./ctx";

  type $$Props = Omit<CreateAvatarProps, "src"> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  ctx.create({
    ...$$restProps,
    src: "",
  });
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn("Avatar", className)} {...$$restProps}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .Avatar {
    @apply w-11;
    @apply h-11;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply bg-muted/5;
    @apply rounded-lg;
    @apply overflow-hidden;
  }
</style>
