<script lang="ts">
  import { TickIcon } from "$lib/icons";
  import { RadioGroup } from "bits-ui";
  import { Icon } from "../Icon";
</script>

<RadioGroup.ItemIndicator>
  <slot>
    <Icon class="ml-auto text-primary">
      <TickIcon />
    </Icon>
  </slot>
</RadioGroup.ItemIndicator>
