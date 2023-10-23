<script lang="ts">
  import type { CreateContextSubmenuProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateContextSubmenuProps

  ctx.createSub($$restProps)
</script>

<slot />
