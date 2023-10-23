<script lang="ts">
  import { cn } from "$lib/utils/misc"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
  }

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      items-center
      whitespace-nowrap
      overflow-auto
    `,
  })

  const { elements } = ctx.get()
  const { list } = elements
</script>

{#if asChild}
  <slot builder={$list} />
{:else}
  <div class={cn(style.base, className)} use:melt={$list} {...$$restProps}>
    <slot />
  </div>
{/if}
