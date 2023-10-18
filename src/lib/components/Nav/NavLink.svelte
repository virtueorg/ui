<script lang="ts">
  import { navigating, page } from "$app/stores";
  import { SpinnerIcon } from "$lib/icons";
  import { cn } from "$lib/utils/misc";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { Icon } from "../Icon";

  type $$Props = HTMLAnchorAttributes;

  export let href: $$Props["href"] = "";
  export { className as class };

  let className = "";

  $: loading = $navigating?.to?.url.pathname === href;
  $: active = $page.url.pathname === href;
</script>

<a {href} class={cn("NavLink", { active }, className)} {...$$restProps} on:click>
  {#if loading}
    <Icon>
      <SpinnerIcon />
    </Icon>
  {:else}
    <slot />
  {/if}
</a>

<style lang="postcss">
  .NavLink {
    @apply transition-all;
    @apply w-11;
    @apply h-11;
    @apply flex;
    @apply items-center;
    @apply justify-center;
    @apply rounded-lg;
    @apply opacity-50;

    @apply hover:bg-muted/5;
  }

  .active {
    @apply bg-primary/5;
    @apply text-primary;
    @apply opacity-100;

    @apply hover:bg-primary/10;
  }
</style>
