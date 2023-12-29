<script lang="ts">
  import { cn } from "$lib"
  import type { CreateSelectProps } from "@melt-ui/svelte"
  import { tv } from "tailwind-variants"
  import ctx from "./ctx"

  type $$Props = CreateSelectProps<string, boolean>

  export let disabled: $$Props["disabled"] = false
  export let forceVisible: $$Props["forceVisible"] = true
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      flex
      flex-col
      gap-2
    `,
    variants: {
      disabled: {
        true: cn`
          opacity-50
        `,
      },
    },
  })

  ctx.create({ ...$$restProps, disabled, forceVisible })
</script>

<div class={cn(style.base, style({ disabled }), className)} {...$$restProps}>
  <slot />
</div>
