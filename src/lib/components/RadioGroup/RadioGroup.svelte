<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt, type CreateRadioGroupProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateRadioGroupProps & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-3
    `,
  })

  const { elements } = ctx.set($$restProps)
  const { root } = elements

  $: builder = $root
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
