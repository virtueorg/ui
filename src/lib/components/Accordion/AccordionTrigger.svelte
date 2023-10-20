<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      w-full
      text-left
      p-4
      flex
      items-center
      justify-between
    `,
  });

  const item = ctx.getItem();
  const { elements } = ctx.get();
  const { trigger } = elements;
</script>

{#if asChild}
  <slot builder={$trigger(item)} />
{:else}
  <button
    type="button"
    class={cn(style.base, className)}
    use:melt={$trigger(item)}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if}
