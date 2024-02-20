<script lang="ts">
  import { type CreateDropdownMenuProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateDropdownMenuProps

  export let forceVisible: $$Props["forceVisible"] = true

  ctx.set({ ...$$restProps, forceVisible })
</script>

<slot />
