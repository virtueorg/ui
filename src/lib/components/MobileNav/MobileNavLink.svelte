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

<a
  {href}
  class={cn(
    "transition-all",
    "w-11",
    "h-11",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-lg",
    "opacity-50",

    "hover:bg-mutedHover",

    "active:scale-95",
    active && "opacity-100 bg-primary text-primaryForeground hover:bg-primaryHover",
    className,
  )}
  {...$$restProps}
  on:click
>
  {#if loading}
    <Icon>
      <SpinnerIcon />
    </Icon>
  {:else}
    <slot />
  {/if}
</a>
