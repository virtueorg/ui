<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      absolute
      top-0
      left-0
      h-full
      bg-primary
      rounded-xl
    `,
  })

  const { states, options } = ctx.get()
  const { value } = states
  const { max } = options

  $: percentage = ($value! * 100) / $max
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(style.base, className)} style="width: {percentage}%" {...$$restProps}>
    <slot />
  </div>
{/if}
