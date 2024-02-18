<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import { type CreateDateFieldProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = CreateDateFieldProps & AsChild

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

  ctx.set($$restProps)
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </div>
{/if}
