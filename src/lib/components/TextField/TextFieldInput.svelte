<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";

  type $$Props = HTMLInputAttributes & {
    hasIcon?: boolean;
    hasLabel?: boolean;
  };

  export { className as class };
  export let value: $$Props["value"] = undefined;
  export let hasIcon: $$Props["hasIcon"] = false;
  export let hasLabel: $$Props["hasLabel"] = false;

  let className = "";

  const style = tv({
    base: cn`
      w-full
      p-3
      bg-transparent
      rounded-lg
    `,
    variants: {
      hasIcon: {
        true: cn`
          pr-11
        `,
      },
      hasLabel: {
        true: cn`
          pt-8
        `,
      },
    },
  });
</script>

<input
  class={cn(style.base, style({ hasIcon, hasLabel }), className)}
  {...$$restProps}
  bind:value
/>

<style lang="postcss">
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
</style>
