<script lang="ts">
  import type { CreateDialogProps } from "@melt-ui/svelte";
  import drawerCtx from "./ctx";

  type $$Props = CreateDialogProps;

  drawerCtx.create($$restProps);
</script>

<slot />
