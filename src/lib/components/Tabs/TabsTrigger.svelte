<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = Omit<HTMLButtonAttributes, "disabled"> & {
    asChild?: boolean;
    value: string;
    disabled?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export let value: $$Props["value"];
  export let disabled: $$Props["disabled"] = false;
  export { className as class };

  let className = "";

  const { elements } = ctx.get();
  const { trigger } = elements;
</script>

{#if asChild}
  <slot builder={$trigger({ value, disabled })} />
{:else}
  <button
    type="button"
    class={cn("TabsTrigger", className)}
    use:melt={$trigger({ value, disabled })}
    {...$$restProps}
  >
    <slot />
  </button>
{/if}

<style lang="postcss">
  .TabsTrigger {
    @apply transition-all;
    @apply flex;
    @apply items-center;
    @apply gap-2;
    @apply py-3;
    @apply px-5;
    @apply border-b-2;
    @apply border-muted/20;
    @apply opacity-50;
    @apply text-left;

    @apply data-[state=active]:border-primary;
    @apply data-[state=active]:text-primary;
    @apply data-[state=active]:opacity-100;
  }
</style>
