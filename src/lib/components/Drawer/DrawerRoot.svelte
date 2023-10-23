<script lang="ts">
  import type { CreateDialogProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateDialogProps

  ctx.create($$restProps)
</script>

<slot />
