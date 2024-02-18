<script lang="ts">
  import { type CreateTooltipProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateTooltipProps

  export let forceVisible: $$Props["forceVisible"] = true

  ctx.set({ ...$$restProps, forceVisible })
</script>

<slot />
