<script lang="ts">
  import { TickIcon } from "$lib/icons"
  import { tv } from "tailwind-variants"
  import { Icon } from "../Icon"

  import { cn } from "$lib/utils"
  import ctx from "./ctx"

  const style = tv({
    base: cn`
      ml-auto 
      text-primary
    `,
  })

  const { helpers, value } = ctx.getItem()
  const { isChecked } = helpers
</script>

{#if $isChecked(value)}
  <slot>
    <Icon class={style.base}>
      <TickIcon />
    </Icon>
  </slot>
{/if}
