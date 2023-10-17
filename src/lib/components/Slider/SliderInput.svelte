<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLInputAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLInputAttributes;

  export { className as class };

  let className = "";

  const { states } = ctx.get();
  const { value } = states;

  const getValue = (value: number[]) => {
    if (value.length === 1) {
      return value[0];
    }

    return value[1] - value[0];
  };

  $: inputValue = getValue($value);
</script>

<input class={cn(className)} hidden {...$$restProps} value={inputValue} />
