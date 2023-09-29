<script lang="ts">
  import { cn } from "$lib/utils/misc";
  import { Avatar } from "bits-ui";

  type $$Props = Avatar.FallbackProps;

  export { className as class };

  let className = "";
</script>

<Avatar.Fallback
  class={cn`
    text-muted
    ${className}
  `}
  {...$$restProps}
>
  <slot />
</Avatar.Fallback>
