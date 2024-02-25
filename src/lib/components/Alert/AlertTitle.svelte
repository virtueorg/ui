<script lang="ts">
  import type { AsChildType, HeadingLevelType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"

  type $$Props = HTMLAttributes<HTMLHeadingElement> &
    AsChildType & {
      level?: HeadingLevelType
    }

  export let asChild: $$Props["asChild"] = false
  export let level: $$Props["level"] = "h3"
  export { className as class }

  let className = ""
</script>

{#if asChild}
  <slot />
{:else}
  <svelte:element this={level} class={cn(className)} {...$$restProps}>
    <slot />
  </svelte:element>
{/if}
