<script lang="ts">
  import type { CreateDialogProps } from "@melt-ui/svelte";
  import dialogCtx from "./ctx";

  type $$Props = CreateDialogProps;

  dialogCtx.create($$restProps);
</script>

<slot />
