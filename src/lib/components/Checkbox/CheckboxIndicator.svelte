<script lang="ts">
  import { MinusIcon, TickIcon } from "$lib/icons";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv } from "tailwind-variants";
  import { Icon } from "../Icon";
  import ctx from "./ctx";

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
  };

  const style = tv({
    base: cn`
      ml-auto
      text-primary
    `,
  });

  export { className as class };
  export let asChild: $$Props["asChild"] = false;

  let className = "";

  const { helpers } = ctx.get();
  const { isChecked, isIndeterminate } = helpers;
</script>

{#if asChild}
  <slot isChecked={$isChecked} isIndeterminate={$isIndeterminate} />
{:else}
  <div class={cn(style.base, className)} {...$$restProps}>
    <slot isChecked={$isChecked} isIndeterminate={$isIndeterminate}>
      {#if $isChecked}
        <Icon>
          <TickIcon />
        </Icon>
      {:else if $isIndeterminate}
        <Icon>
          <MinusIcon />
        </Icon>
      {/if}
    </slot>
  </div>
{/if}
