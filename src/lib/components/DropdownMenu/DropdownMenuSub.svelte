<script lang="ts">
  import type { CreateDropdownSubmenuProps } from "@melt-ui/svelte";
  import ctx from "./ctx";

  type $$Props = CreateDropdownSubmenuProps;

  ctx.createSub($$restProps);
</script>

<slot />
