<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLInputAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLInputAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"] = ""
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      p-3
      rounded-xl
      bg-muted/5
      border
      border-muted/5

      placeholder:text-muted/60

      hover:border-muted/10
      hover:bg-muted/10
      
      focus:border-muted/10
      focus:bg-muted/10
    `,
    variants: {
      disabled: {
        true: cn`
          hover:border-muted/5
          hover:bg-muted/5
        `,
      },
      invalid: {
        true: cn`
          text-error
          border-error/5
          bg-error/5

          hover:border-error/10
          hover:bg-error/10
          
          focus:border-error/10
          focus:bg-error/10
        `,
      },
    },
  })

  const { elements, helpers, options } = ctx.get()
  const { input } = elements
  const { isInputValid } = helpers
  const { disabled } = options

  $: builder = $input
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <input
    class={cn(style.base, style({ invalid: !isInputValid(value), disabled: $disabled }), className)}
    use:melt={builder}
    {...$$restProps}
    bind:value
  />
{/if}
