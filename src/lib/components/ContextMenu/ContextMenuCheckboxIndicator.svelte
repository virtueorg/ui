<script lang="ts">
  import TickIcon from "$lib/icons/TickIcon.svelte";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import Icon from "../Icon/Icon.svelte";
  import contextMenuCtx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { states } = contextMenuCtx.getCheckboxItem();
  const { checked } = states;
</script>

{#if $checked}
  {#if asChild}
    <slot />
  {:else}
    <div class={cn("ContextMenuCheckboxIndicator", className)} {...$$restProps}>
      <slot>
        <Icon>
          <TickIcon />
        </Icon>
      </slot>
    </div>
  {/if}
{/if}

<style lang="postcss">
  .ContextMenuCheckboxIndicator {
    @apply ml-auto;
  }
</style>
