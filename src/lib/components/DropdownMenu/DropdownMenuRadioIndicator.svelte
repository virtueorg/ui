<script lang="ts">
  import { DotIcon } from "$lib/icons"
  import Icon from "../Icon/Icon.svelte"
  import ctx from "./ctx"

  const { helpers, value } = ctx.getRadioItem()
  const { isChecked } = helpers
</script>

{#if $isChecked(value)}
  <slot>
    <Icon class="ml-auto">
      <DotIcon />
    </Icon>
  </slot>
{/if}
