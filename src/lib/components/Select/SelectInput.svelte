<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLInputAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLInputAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"] = undefined
  export { className as class }

  let className = ""

  const { elements } = ctx.get()
  const { hiddenInput } = elements
</script>

{#if asChild}
  <slot builder={$hiddenInput} />
{:else}
  <input class={cn(className)} use:melt={$hiddenInput} {...$$restProps} bind:value />
{/if}
