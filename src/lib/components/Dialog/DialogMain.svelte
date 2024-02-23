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
      p-4
      h-full
      overflow-y-auto
    `,
  })
</script>

{#if asChild}
  <slot />
{:else}
  <main class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </main>
{/if}
