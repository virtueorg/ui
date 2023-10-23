<script lang="ts">
  import type { CreateTooltipProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateTooltipProps

  ctx.create($$restProps)
</script>

<slot />
