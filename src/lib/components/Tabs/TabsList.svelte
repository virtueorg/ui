<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { list } = elements;
</script>

{#if asChild}
  <slot builder={$list} />
{:else}
  <div class={cn("TabsList", className)} use:melt={$list} {...$$restProps}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .TabsList {
    @apply flex;
    @apply items-center;
    @apply whitespace-nowrap;
    @apply overflow-auto;
  }
</style>
