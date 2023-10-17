<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import type { CreateAvatarProps } from "@melt-ui/svelte";

  type InvalidAvatarImageProp = "delayMs" | "loadingStatus" | "onLoadingStatusChange";
  type $$Props = Omit<CreateAvatarProps, InvalidAvatarImageProp> & {
    alt: string;
    asChild?: boolean;
  };

  export { className as class };

  export let src: $$Props["src"];
  export let alt: $$Props["alt"];
  export let asChild: $$Props["asChild"] = false;

  let className = "";
  // const elements = getContext("avatar") as Avatar;
  // const { elements } = elements;

  // console.log("dal getContext: ", elements);
</script>

{#if asChild}
  <!-- <slot builder={$image} /> -->
{:else}
  <img {src} {alt} class={cn("AvatarImage", className)} {...$$restProps} />
{/if}

<style lang="postcss">
  .AvatarImage {
    @apply w-full;
    @apply h-full;
    @apply object-cover;
  }
</style>
