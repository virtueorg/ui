<script lang="ts">
  import { cn } from "$lib"
  import type { HTMLTextareaAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLTextareaAttributes & {
    hasLabel?: boolean
  }

  export { className as class }
  export let disabled: $$Props["disabled"] = false
  export let value: $$Props["value"] = undefined
  export let hasLabel: $$Props["hasLabel"] = false

  let className = ""
  let element: HTMLTextAreaElement

  const style = tv({
    base: cn`
      w-full
      p-3
      bg-transparent
      rounded-lg
      resize-none
    `,
    variants: {
      hasLabel: {
        true: cn`
          pt-8
        `,
      },
      disabled: {
        true: cn`
          opacity-50
          cursor-not-allowed
        `,
      },
    },
  })

  const autoGrow = () => {
    element.style.height = "auto"
    element.style.height = element.scrollHeight + "px"
  }
</script>

<textarea
  class={cn(style.base, style({ hasLabel, disabled: disabled || false }), className)}
  {disabled}
  {...$$restProps}
  bind:value
  bind:this={element}
  on:input={autoGrow}
/>
