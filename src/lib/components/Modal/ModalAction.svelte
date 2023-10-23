<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };
  let className = "";

  const style = tv({
    base: cn`
      text-left
    `,
  });
</script>

{#if asChild}
  <slot />
{:else}
  <button type="button" class={cn(style.base, className)} {...$$restProps} on:click>
    <slot />
  </button>
{/if}
