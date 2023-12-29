<script lang="ts">
  import type { CreateTooltipProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateTooltipProps

  export let forceVisible: $$Props["forceVisible"] = true

  ctx.create({ ...$$restProps, forceVisible })
</script>

<slot />
