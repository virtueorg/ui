<script lang="ts">
  import { cn } from "$lib"
  import { melt, type CreateDropdownMenuRadioGroupProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = Omit<CreateDropdownMenuRadioGroupProps, "value"> & {
    asChild?: boolean
    value?: string
  }

  export let asChild: $$Props["asChild"] = false
  export let value: $$Props["value"] = ""
  export { className as class }

  let className = ""

  const handleChange: CreateDropdownMenuRadioGroupProps["onValueChange"] = ({ next }) => {
    value = String(next)
    return value
  }

  const { elements } = ctx.createRadioGroup({
    ...$$restProps,
    onValueChange: handleChange,
    defaultValue: value,
  })
  const { radioGroup } = elements
</script>

{#if asChild}
  <slot builder={$radioGroup} />
{:else}
  <div class={cn(className)} use:melt={$radioGroup} {...$$restProps}>
    <slot />
  </div>
{/if}
