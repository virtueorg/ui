<script lang="ts">
  import { DotIcon } from "$lib/icons";
  import { ContextMenu } from "bits-ui";
  import Icon from "../Icon/Icon.svelte";
</script>

<ContextMenu.RadioIndicator>
  <slot>
    <Icon class="ml-auto">
      <DotIcon />
    </Icon>
  </slot>
</ContextMenu.RadioIndicator>
