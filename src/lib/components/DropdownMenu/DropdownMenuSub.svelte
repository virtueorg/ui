<script lang="ts">
  import type { CreateDropdownSubmenuProps } from "@melt-ui/svelte";
  import dropdownMenuCtx from "./ctx";

  type $$Props = CreateDropdownSubmenuProps;

  dropdownMenuCtx.createSub($$restProps);
</script>

<slot />
