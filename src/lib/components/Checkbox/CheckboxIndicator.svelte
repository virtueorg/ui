<script lang="ts">
  import { cn } from "$lib"
  import type { AsChild } from "$lib/types"
  import type { HTMLAttributes } from "svelte/elements"
  import { scale } from "svelte/transition"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = HTMLAttributes<HTMLDivElement> & AsChild

  const style = tv({
    base: cn`
      ml-auto
      text-primary
    `,
  })

  export { className as class }
  export let asChild: $$Props["asChild"] = false

  let className = ""

  const { helpers } = ctx.get()
  const { isChecked } = helpers
</script>

{#if $isChecked}
  {#if asChild}
    <slot />
  {:else}
    <div class={cn(style.base, className)} {...$$restProps} transition:scale|global>
      <slot />
    </div>
  {/if}
{/if}
