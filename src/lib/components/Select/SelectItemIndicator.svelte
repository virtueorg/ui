<script lang="ts">
  import { Icon, TickIcon } from "$lib"
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
