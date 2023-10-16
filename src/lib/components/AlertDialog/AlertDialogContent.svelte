<script lang="ts">
  import { TRANSITION_Y_IN } from "$lib/utils/const";
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { fly } from "svelte/transition";
  import dialogCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements, states } = dialogCtx.get();
  const { content } = elements;
</script>

{#if asChild}
  <slot builder={$content} />
{:else}
  <div
    class={cn`
    w-full
    bg-muted/5
    pointer-events-auto
    
    md:max-w-lg
    md:rounded-lg
    ${className}
    `}
    transition:fly={TRANSITION_Y_IN}
    {...$$restProps}
    use:melt={$content}
  >
    <slot />
  </div>
{/if}
