<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import dialogCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = dialogCtx.get();
  const { description } = elements;
</script>

{#if asChild}
  <slot builder={$description} />
{:else}
  <div
    class={cn`
    text-sm
    text-muted
    ${className}
  `}
    {...$$restProps}
    use:melt={$description}
  >
    <slot />
  </div>
{/if}
