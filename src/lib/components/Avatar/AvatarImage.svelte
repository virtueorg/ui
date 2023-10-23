<script lang="ts">
  import { cn } from "$lib"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLImgAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLImgAttributes & {
    asChild?: boolean
  }

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

  $: avatar = ctx.getImage(src)
  $: elements = avatar.elements
  $: image = elements.image
</script>

{#if asChild}
  <slot builder={$image} />
{:else}
  <img {src} {alt} class={cn(style.base, className)} use:melt={$image} {...$$restProps} />
{/if}
