<script lang="ts">
  import type { AsChildType } from "$lib/index.js"
  import { cn } from "$lib/index.js"
  import type { HTMLAttributes } from "svelte/elements"
  import ctx from "./ctx.js"

  type $$Props = HTMLAttributes<HTMLDivElement> &
    AsChildType & {
      placeholder?: string
    }

  export let asChild: $$Props["asChild"] = false
  export let placeholder: $$Props["placeholder"] = ""
  export { className as class }

  let className = ""

  const { states } = ctx.get()
  const { selectedLabel } = states
</script>

{#if asChild}
  <slot selectedLabel={$selectedLabel} />
{:else}
  <div class={cn(className)} {...$$restProps}>
    {$selectedLabel || placeholder}
  </div>
{/if}
