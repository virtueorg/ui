<script lang="ts">
  import { Select } from "bits-ui";

  type $$Props = Select.Props;

  export let selected: $$Props["selected"];
</script>

<Select.Root {...$$restProps} bind:selected>
  <slot />
</Select.Root>
