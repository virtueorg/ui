<script>
  import Switch from "$lib/components/Switch/Switch.svelte";
  import SwitchInput from "$lib/components/Switch/SwitchInput.svelte";
  import SwitchThumb from "$lib/components/Switch/SwitchThumb.svelte";
</script>

<div class="p-5">
  <!-- <RadioGroup>
    <RadioGroupItem value="AAA">
      AAA
      <RadioGroupItemIndicator />
    </RadioGroupItem>

    <RadioGroupItem value="BBB">
      BBB
      <RadioGroupItemIndicator />
    </RadioGroupItem>
  </RadioGroup> -->

  <Switch on:click={() => alert("AA")}>
    <SwitchInput>AAA</SwitchInput>
    <SwitchThumb />
  </Switch>
</div>
