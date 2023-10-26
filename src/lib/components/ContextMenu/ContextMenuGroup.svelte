<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import { melt } from "@melt-ui/svelte"
  import type { HTMLAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      p-2
    `,
  })

  const { group, id } = ctx.createGroup()
</script>

{#if asChild}
  <slot builder={$group(id)} />
{:else}
  <div class={cn(style.base, className)} use:melt={$group(id)} {...$$restProps}>
    <slot />
  </div>
{/if}
