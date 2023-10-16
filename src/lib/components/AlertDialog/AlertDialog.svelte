<script lang="ts">
  import type { CreateDialogProps } from "@melt-ui/svelte";
  import alertDialogCtx from "./ctx";

  type $$Props = CreateDialogProps;

  alertDialogCtx.create($$restProps);
</script>

<slot />
