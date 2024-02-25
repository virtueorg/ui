<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLInputAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLInputAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false

  const { elements } = ctx.get()
  const { hiddenInput } = elements

  $: builder = $hiddenInput
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <input use:melt={builder} {...$$restProps} />
{/if}
