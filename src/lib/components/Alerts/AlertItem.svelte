<script lang="ts">
  import { CloseIcon } from "$lib/icons"
  import { removeAlert } from "$lib/stores/alerts"
  import type { IAlert } from "$lib/types"
  import { Alert, AlertAction, AlertIcon, AlertTitle } from "../Alert"
  import { Button } from "../Button"
  import { Icon } from "../Icon"

  export let alert: IAlert
</script>

<Alert variant={alert.variant}>
  {#if alert.icon}
    <AlertIcon>
      <Icon>
        <svelte:component this={alert.icon} />
      </Icon>
    </AlertIcon>
  {/if}

  <AlertTitle>
    {alert.title}
  </AlertTitle>

  <AlertAction>
    <Button class="p-1" variant={alert.variant} on:click={() => removeAlert(alert.id)}>
      <Icon>
        <CloseIcon />
      </Icon>
    </Button>
  </AlertAction>
</Alert>
