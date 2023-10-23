<script lang="ts">
  import { Icon, TickIcon } from "$lib"
  import { tv } from "tailwind-variants"

  import { cn } from "$lib"
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
