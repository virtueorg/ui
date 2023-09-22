<script lang="ts">
  import { TickIcon } from "$lib/icons";
  import { Select } from "bits-ui";
  import { Icon } from "../Icon";
</script>

<Select.ItemIndicator>
  <slot>
    <Icon class="ml-auto text-primary">
      <TickIcon />
    </Icon>
  </slot>
</Select.ItemIndicator>
