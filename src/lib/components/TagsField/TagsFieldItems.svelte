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
      flex
      gap-2
      flex-wrap
    `,
  })

  const { states } = ctx.get()
  const { tags } = states
</script>

{#if asChild}
  <slot items={$tags} />
{:else}
  <div class={cn(style.base, className)} {...$$restProps}>
    <slot items={$tags} />
  </div>
{/if}
