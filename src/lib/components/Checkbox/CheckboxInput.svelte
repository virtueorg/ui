<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLInputAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLInputAttributes & {
    asChild?: boolean;
  };

  export { className as class };

  let className = "";
  export let asChild: $$Props["asChild"] = false;

  const { helpers, options } = ctx.get();
  const { isChecked } = helpers;
  const { disabled } = options;
</script>

{#if asChild}
  <slot isChecked={$isChecked} disabled={$disabled} />
{:else}
  <input hidden class={cn(className)} value={$isChecked} disabled={$disabled} {...$$restProps} />
{/if}
