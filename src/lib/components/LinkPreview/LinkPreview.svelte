<script lang="ts">
  import { type CreateLinkPreviewProps } from "@melt-ui/svelte"
  import ctx from "./ctx.js"

  type $$Props = CreateLinkPreviewProps

  export let forceVisible: $$Props["forceVisible"] = true

  ctx.set({ ...$$restProps, forceVisible })
</script>

<slot />
