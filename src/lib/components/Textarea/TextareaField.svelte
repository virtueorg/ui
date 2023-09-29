<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { HTMLTextareaAttributes } from "svelte/elements";

  type $$Props = HTMLTextareaAttributes & {
    hasLabel?: boolean;
  };

  export { className as class };
  export let value: $$Props["value"] = undefined;
  export let hasLabel: $$Props["hasLabel"] = false;

  let className = "";
  let element: HTMLTextAreaElement;

  const autoGrow = () => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };
</script>

<textarea
  class={cn`
    w-full
    p-3
    bg-transparent
    rounded-lg
    resize-none
    ${hasLabel && "pt-8"}
    ${className}
  `}
  {...$$restProps}
  bind:value
  bind:this={element}
  on:input={autoGrow}
/>
