<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      fixed
      inset-0
      flex
      items-end
      justify-center

      md:items-center
      md:p-4
    `,
  })

  const { elements, states } = ctx.get()
  const { portalled } = elements
  const { open } = states

  $: builder = $portalled
</script>

{#if $open}
  {#if asChild}
    <slot {builder} />
  {:else}
    <div class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
      <slot {builder} />
    </div>
  {/if}
{/if}
