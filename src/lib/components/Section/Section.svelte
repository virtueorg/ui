<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <section class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </section>
{/if}
