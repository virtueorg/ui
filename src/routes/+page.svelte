<script lang="ts">
  import Avatar from "$lib/components/Avatar/Avatar.svelte";
  import AvatarFallback from "$lib/components/Avatar/AvatarFallback.svelte";
  import AvatarImage from "$lib/components/Avatar/AvatarImage.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import Input from "$lib/components/Input/Input.svelte";
  import InputField from "$lib/components/Input/InputField.svelte";
  import InputLabel from "$lib/components/Input/InputLabel.svelte";
  import InputTrigger from "$lib/components/Input/InputTrigger.svelte";
  import UserIcon from "$lib/icons/UserIcon.svelte";

  let username = "leonardodipace";
</script>

<div class="p-5 flex flex-col gap-5">
  <Input>
    <InputTrigger>
      <InputLabel>Username</InputLabel>
      <InputField type="text" placeholder="Es. leonardodipace" hasLabel bind:value={username} />
    </InputTrigger>
  </Input>

  <Avatar>
    <AvatarImage src="https://www.github.com/{username}.png" alt={username} />
    <AvatarFallback>
      <Icon>
        <UserIcon />
      </Icon>
    </AvatarFallback>
  </Avatar>
</div>
