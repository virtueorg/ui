<script lang="ts">
  import type { CreateContextSubmenuProps } from "@melt-ui/svelte";
  import contextMenuCtx from "./ctx";

  type $$Props = CreateContextSubmenuProps;

  contextMenuCtx.createSub($$restProps);
</script>

<slot />
