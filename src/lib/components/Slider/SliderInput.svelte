<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import type { HTMLInputAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLInputAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false

  const { states } = ctx.get()
  const { value } = states
</script>

{#if asChild}
  <slot value={$value} />
{:else}
  <input hidden value={$value} {...$$restProps} />
{/if}
