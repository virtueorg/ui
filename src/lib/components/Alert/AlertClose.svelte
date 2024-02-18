<script lang="ts">
  import { cn } from "$lib/index.js"
  import alerts from "$lib/stores/alerts.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      ml-auto
    `,
  })

  const alert = ctx.get()

  const removeAlert = () => {
    alerts.remove(alert.id)
  }
</script>

{#if asChild}
  <slot />
{:else}
  <button type="button" class={cn(style.base, className)} {...$$restProps} on:click={removeAlert}>
    <slot />
  </button>
{/if}
