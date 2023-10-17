<script lang="ts">
  import type { CreateContextMenuProps } from "@melt-ui/svelte";
  import dropdownMenuCtx from "./ctx";

  type $$Props = CreateContextMenuProps;

  dropdownMenuCtx.create($$restProps);
</script>

<slot />
