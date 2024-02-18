<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt, type TabsTriggerProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = Exclude<TabsTriggerProps, string> & AsChild

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export let disabled: $$Props["disabled"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      px-4
      py-3
      border-b
      border-transparent
      opacity-50
      -mb-px

      hover:opacity-100
      hover:border-muted/10
    `,
    variants: {
      active: {
        true: cn`
          border-primary
          text-primary
          opacity-100

          hover:border-primary
        `,
      },
      disabled: {
        true: cn`
          hover:opacity-50
          hover:border-transparent
        `,
      },
    },
  })

  const { elements, states } = ctx.get()
  const { trigger } = elements
  const { value: currentValue } = states

  $: builder = $trigger({ value, disabled })
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button
    type="button"
    {disabled}
    class={cn(style.base, style({ active: value === $currentValue, disabled: disabled }), className)}
    use:melt={builder}
    {...$$restProps}
    on:click
  >
    <slot {builder} />
  </button>
{/if}
