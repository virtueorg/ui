<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { CreateAvatarProps } from "@melt-ui/svelte";
  import ctx from "./ctx";

  type $$Props = CreateAvatarProps & {
    asChild?: boolean;
  };

  export { className as class };

  export let asChild: $$Props["asChild"] = false;

  let className = "";

  //TODO: IDK why this but this thinky pop up an error

  const { elements } = ctx.create($$restProps);

  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn("Avatar", className)} {...$root} {...$$restProps}>
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
