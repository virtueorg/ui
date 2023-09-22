<script lang="ts">
  import { DotIcon } from "$lib/icons";
  import { DropdownMenu } from "bits-ui";
  import Icon from "../Icon/Icon.svelte";
</script>

<DropdownMenu.RadioIndicator>
  <slot>
    <Icon class="ml-auto">
      <DotIcon />
    </Icon>
  </slot>
</DropdownMenu.RadioIndicator>
