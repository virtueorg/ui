<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { melt } from "@melt-ui/svelte";
  import type { HTMLImgAttributes } from "svelte/elements";
  import ctx from "./ctx";

  type $$Props = HTMLImgAttributes & {
    asChild?: boolean;
  };

  export let asChild: $$Props["asChild"] = false;
  export let src: $$Props["src"] = "";
  export let alt: $$Props["alt"] = "";
  export { className as class };

  let className = "";

  $: avatar = ctx.getImage(src);
  $: elements = avatar.elements;
  $: image = elements.image;
</script>

{#if asChild}
  <slot builder={$image} />
{:else}
  <img {src} {alt} class={cn("AvatarImage", className)} use:melt={$image} {...$$restProps} />
{/if}

<style lang="postcss">
  .AvatarImage {
    @apply w-full;
    @apply h-full;
    @apply object-cover;
  }
</style>
