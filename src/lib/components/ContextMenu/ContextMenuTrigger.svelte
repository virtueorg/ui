<script lang="ts">
  import { cn } from "$lib"
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
      text-left
    `,
  })

  const { elements } = ctx.get()
  const { trigger } = elements
</script>

{#if asChild}
  <slot builder={$trigger} />
{:else}
  <div class={cn(style.base, className)} use:melt={$trigger} {...$$restProps}>
    <slot />
  </div>
{/if}
