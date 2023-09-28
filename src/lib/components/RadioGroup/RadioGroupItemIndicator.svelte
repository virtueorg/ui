<script lang="ts">
  import { TickIcon } from "$lib/icons";
  import { cn } from "$lib/utils/misc";
  import { RadioGroup } from "bits-ui";
  import { Icon } from "../Icon";
</script>

<RadioGroup.ItemIndicator>
  <slot>
    <Icon class={cn("ml-auto text-primary")}>
      <TickIcon />
    </Icon>
  </slot>
</RadioGroup.ItemIndicator>
