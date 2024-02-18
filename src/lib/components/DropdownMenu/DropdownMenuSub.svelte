<script lang="ts">
  import { type CreateDropdownSubmenuProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateDropdownSubmenuProps

  ctx.setSub($$restProps)
</script>

<slot />
