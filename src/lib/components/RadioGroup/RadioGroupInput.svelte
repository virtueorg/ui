<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLInputAttributes } from "svelte/elements"
  import ctx from "./ctx"

  type $$Props = HTMLInputAttributes & AsChild

  export { className as class }
  export let asChild: $$Props["asChild"] = false

  let className = ""

  const { elements } = ctx.get()
  const { hiddenInput } = elements
</script>

{#if asChild}
  <slot builder={$hiddenInput} />
{:else}
  <input use:melt={$hiddenInput} class={cn(className)} {...$$restProps} />
{/if}
