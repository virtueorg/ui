<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAnchorAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAnchorAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export let href: $$Props["href"] = ""
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { trigger } = elements

  $: builder = $trigger
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <a {href} class={cn(className)} use:melt={builder} {...$$restProps}>
    <slot {builder} />
  </a>
{/if}
