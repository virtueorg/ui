<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChild & {
      value: string
    }

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"]
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { content } = elements
</script>

{#if asChild}
  <slot builder={$content(value)} />
{:else}
  <div class={cn(className)} use:melt={$content(value)} {...$$restProps}>
    <slot />
  </div>
{/if}
