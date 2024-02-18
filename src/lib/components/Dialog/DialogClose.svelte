<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { close } = elements

  $: builder = $close
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button type="button" class={cn(className)} use:melt={builder} {...$$restProps} on:click>
    <slot {builder} />
  </button>
{/if}
