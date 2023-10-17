<script lang="ts">
  import type { CreateContextMenuProps } from "@melt-ui/svelte";
  import contextMenuCtx from "./ctx";

  type $$Props = CreateContextMenuProps;

  contextMenuCtx.create($$restProps);
</script>

<slot />
