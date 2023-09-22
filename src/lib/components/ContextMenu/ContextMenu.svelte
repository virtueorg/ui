<script lang="ts">
  import { ContextMenu } from "bits-ui";

  type $$Props = ContextMenu.Props;
</script>

<ContextMenu.Root {...$$restProps}>
  <slot />
</ContextMenu.Root>
