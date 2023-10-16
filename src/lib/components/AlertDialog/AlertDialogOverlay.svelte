<script lang="ts">
  import { TRANSITION_BASE } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { fade } from "svelte/transition";
  import dialogCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements, states } = dialogCtx.get();
  const { overlay } = elements;
</script>

{#if asChild}
  <slot builder={$overlay} />
{:else}
  <div
    class={cn`
    absolute
    inset-0
    bg-background/80
    -z-10
    pointer-events-auto
    ${className}
    `}
    {...$$restProps}
    transition:fade={TRANSITION_BASE}
    use:melt={$overlay}
  >
    <slot />
  </div>
{/if}
