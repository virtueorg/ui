<script lang="ts">
  import { TickIcon } from "$lib/icons"
  import { Icon } from "../Icon"
  import ctx from "./ctx"

  const value = ctx.getItem()
  const { helpers } = ctx.get()
  const { isSelected } = helpers
</script>

{#if $isSelected(value)}
  <slot>
    <Icon class="ml-auto text-primary">
      <TickIcon />
    </Icon>
  </slot>
{/if}
