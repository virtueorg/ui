<script lang="ts">
  import { cn } from "$lib"
  import type { IHeadingTag } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    tag?: IHeadingTag
  }

  export { className as class }
  export let tag: $$Props["tag"] = "h5"

  let className = ""
</script>

<svelte:element this={tag} class={cn(className)} {...$$restProps}>
  <slot />
</svelte:element>
