<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLButtonAttributes & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      flex
      p-4
      rounded-xl
    `,
  })

  const item = ctx.getItem()

  const { elements } = ctx.get()
  const { trigger } = elements

  $: builder = $trigger(item)
</script>

{#if asChild}
  <slot {builder} />
{:else}
  <button type="button" class={cn(style.base, className)} use:melt={builder} {...$$restProps} on:click>
    <slot {builder} />
  </button>
{/if}
