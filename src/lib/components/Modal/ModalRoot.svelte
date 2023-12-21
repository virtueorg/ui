<script lang="ts">
  import type { CreateDialogProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateDialogProps

  export let forceVisible: $$Props["forceVisible"] = true

  ctx.create({ ...$$restProps, forceVisible })
</script>

<slot />
