<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { CreateAvatarProps } from "@melt-ui/svelte";
  import { tv } from "tailwind-variants";
  import ctx from "./ctx";

  type $$Props = Omit<CreateAvatarProps, "src"> & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export { className as class };

  let className = "";

  const style = tv({
    base: cn`
      w-11
      h-11
      flex
      items-center
      justify-center
      bg-muted/5
      rounded-lg
      overflow-hidden
    `,
  });

  ctx.create({
    ...$$restProps,
    src: "",
  });
</script>

{#if asChild}
  <slot />
{:else}
  <div class={cn(style.base, className)} {...$$restProps}>
    <slot />
  </div>
{/if}
