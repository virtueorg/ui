<script lang="ts">
  import { type CreateDialogProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateDialogProps

  export let forceVisible: $$Props["forceVisible"] = true

  ctx.set({ ...$$restProps, forceVisible })
</script>

<slot />
