<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import dialogCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    asChild?: boolean;
  };

  export let level: $$Props["level"] = "h3";
  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = dialogCtx.get();
  const { title } = elements;
</script>

{#if asChild}
  <slot builder={$title} />
{:else}
  <svelte:element
    this={level}
    class={cn("AlertDialogTitle", className)}
    {...$$restProps}
    use:melt={$title}
  >
    <slot />
  </svelte:element>
{/if}

<style lang="postcss">
  .AlertDialogTitle {
    @apply font-bold;
  }
</style>
