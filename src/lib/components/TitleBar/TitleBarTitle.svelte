<script lang="ts">
  import type { AsChildType, HeadingLevelType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLHeadingElement> &
    AsChildType & {
      level?: HeadingLevelType
    }

  export let asChild: $$Props["asChild"] = false
  export let level: $$Props["level"] = "h3"
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      font-bold
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <svelte:element this={level} class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </svelte:element>
{/if}
