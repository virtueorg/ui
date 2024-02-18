<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLImgAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLImgAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export let src: $$Props["src"] = ""
  export let alt: $$Props["alt"] = ""
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      h-full
      object-cover
    `,
  })

  const { elements, options } = ctx.get()
  const { image } = elements

  $: options.src.set(src || "")
  $: builder = $image
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <img {src} {alt} class={cn(style.base, className)} use:melt={builder} {...$$restProps} />
{/if}
