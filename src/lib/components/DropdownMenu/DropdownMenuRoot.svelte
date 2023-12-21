<script lang="ts">
  import type { CreateContextMenuProps } from "@melt-ui/svelte"
  import ctx from "./ctx"

  type $$Props = CreateContextMenuProps

  export let forceVisible: $$Props["forceVisible"] = true

  ctx.create({ ...$$restProps, forceVisible })
</script>

<slot />
