<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt, type CreateTabsProps } from "@melt-ui/svelte";
  import ctx from "./ctx";

  type $$Props = CreateTabsProps & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.create($$restProps);
  const { root } = elements;
</script>

{#if asChild}
  <slot builder={$root} />
{:else}
  <div class={cn(className)} {...$$restProps} use:melt={$root}>
    <slot />
  </div>
{/if}
