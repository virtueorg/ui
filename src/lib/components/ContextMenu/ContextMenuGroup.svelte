<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import contextMenuCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { group, id } = contextMenuCtx.createGroup();
</script>

{#if asChild}
  <slot builder={$group(id)} />
{:else}
  <div
    class={cn`
    p-2 
    ${className}
    `}
    {...$$restProps}
    use:melt={$group(id)}
  >
    <slot />
  </div>
{/if}
