<script lang="ts">
  import { type CreateContextSubmenuProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateContextSubmenuProps

  ctx.setSub($$restProps)
</script>

<slot />
