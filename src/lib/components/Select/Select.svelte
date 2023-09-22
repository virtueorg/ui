<script lang="ts">
  import { Select } from "bits-ui";

  type $$Props = Select.Props;

  let value: unknown;
</script>

<Select.Root {...$$restProps} onSelectedChange={e => (value = e?.value)}>
  <slot {value} />
</Select.Root>
