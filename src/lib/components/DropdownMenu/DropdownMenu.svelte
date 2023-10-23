<script lang="ts">
  import type { CreateContextMenuProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateContextMenuProps

  ctx.create($$restProps)
</script>

<slot />
