<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      border-b
      border-muted/5
    `,
  })

  const { elements } = ctx.get()
  const { list } = elements

  $: builder = $list
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <div class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </div>
{/if}
