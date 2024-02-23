<script lang="ts">
  import type { AsChildType, HeadingLevelType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLHeadingElement> &
    AsChildType & {
      level?: HeadingLevelType
    }

  export let asChild: $$Props["asChild"] = false
  export let level: $$Props["level"] = "h3"
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      font-bold
    `,
  })

  const { elements } = ctx.get()
  const { title } = elements

  $: builder = $title
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <svelte:element this={level} class={cn(style.base, className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </svelte:element>
{/if}
