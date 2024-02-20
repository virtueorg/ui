<script lang="ts">
  import type { AsChild } from "$lib/types.js"
  import type { HTMLInputAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLInputAttributes & AsChild

  export let asChild: $$Props["asChild"] = false

  const { states } = ctx.get()
  const { value } = states
</script>

{#if asChild}
  <slot value={$value} />
{:else}
  <input hidden value={$value} {...$$restProps} />
{/if}
