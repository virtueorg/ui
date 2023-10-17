<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLInputAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLInputAttributes & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { hiddenInput } = elements;
</script>

{#if asChild}
  <slot builder={$hiddenInput} />
{:else}
  <input class={cn(className)} {...$$restProps} use:melt={$hiddenInput} />
{/if}
