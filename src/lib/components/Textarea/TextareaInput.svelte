<script lang="ts">
  import { cn } from "$lib/index.js"
  import type { AsChild } from "$lib/types.js"
  import type { HTMLTextareaAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLTextareaAttributes & AsChild

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"] = ""
  export { className as class }

  let className = ""
  let element: HTMLElement

  const style = tv({
    base: cn`
      transition-all
      p-3
      rounded-xl
      bg-muted/5
      border
      border-muted/5
      resize-none

      placeholder:text-muted/60

      hover:border-muted/10
      hover:bg-muted/10
      
      focus:border-muted/10
      focus:bg-muted/10
    `,
  })

  const autoGrow = () => {
    element.style.height = "auto"
    element.style.height = `${element.scrollHeight}px`
  }
</script>

{#if asChild}
  <slot />
{:else}
  <textarea class={cn(style.base, className)} {...$$restProps} bind:this={element} bind:value on:input={autoGrow} />
{/if}
