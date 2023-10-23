<script lang="ts">
  import { cn } from "$lib"
  import type { IHeadingTag } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLHeadingElement> & {
    tag?: IHeadingTag
  }

  export { className as class }
  export let tag: $$Props["tag"] = "h5"

  let className = ""

  const style = tv({
    base: cn`
      font-bold
    `,
  })
</script>

<svelte:element this={tag} class={cn(style.base, className)} {...$$restProps}>
  <slot />
</svelte:element>
