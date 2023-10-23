<script lang="ts">
  import { cn } from "$lib"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
  }

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { arrow } = elements
</script>

{#if asChild}
  <slot builder={$arrow} />
{:else}
  <div class={cn(className)} use:melt={$arrow} {...$$restProps} />
{/if}
