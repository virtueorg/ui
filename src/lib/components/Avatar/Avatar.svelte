<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import { type CreateAvatarProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx.js"

  type $$Props = Omit<CreateAvatarProps, "src"> & AsChildType

  export let asChild: $$Props["asChild"] = false
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      w-full
      h-full
      rounded-xl
      overflow-hidden
      inline-flex
      items-center
      justify-center
      border
      border-muted/5
      bg-muted/5
    `,
  })

  ctx.set({ src: "", ...$$restProps })
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </div>
{/if}
