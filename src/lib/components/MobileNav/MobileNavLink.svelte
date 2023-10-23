<script lang="ts">
  import { navigating, page } from "$app/stores"
  import { Icon, SpinnerIcon, cn } from "$lib"
  import type { HTMLAnchorAttributes } from "svelte/elements"
  import { tv } from "tailwind-variants"

  type $$Props = HTMLAnchorAttributes

  export let href: $$Props["href"] = ""
  export { className as class }

  let className = ""

  const style = tv({
    base: cn`
      transition-all
      w-11
      h-11
      inline-flex
      items-center
      justify-center
      rounded-lg
      opacity-50
        
      hover:bg-muted/5
        
      active:scale-95
    `,
    variants: {
      active: {
        true: cn`
          opacity-100
          bg-primary/5
          text-primary
          hover:bg-primary/10
        `,
      },
    },
  })

  $: loading = $navigating?.to?.url.pathname === href
  $: active = $page.url.pathname === href
</script>

<a {href} class={cn(style.base, style({ active }), className)} {...$$restProps} on:click>
  {#if loading}
    <Icon>
      <SpinnerIcon />
    </Icon>
  {:else}
    <slot />
  {/if}
</a>
