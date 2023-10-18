<script lang="ts">
  import Avatar from "$lib/components/Avatar/Avatar.svelte";
  import AvatarFallback from "$lib/components/Avatar/AvatarFallback.svelte";
  import AvatarImage from "$lib/components/Avatar/AvatarImage.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
  import TextField from "$lib/components/TextField/TextField.svelte";
  import TextFieldInput from "$lib/components/TextField/TextFieldInput.svelte";
  import TextFieldLabel from "$lib/components/TextField/TextFieldLabel.svelte";
  import TextFieldTrigger from "$lib/components/TextField/TextFieldTrigger.svelte";
  import UserIcon from "$lib/icons/UserIcon.svelte";

  let username = "leonardodipace";
</script>

<div class="p-5 flex flex-col gap-5">
  <TextField>
    <TextFieldTrigger>
      <TextFieldLabel>Username</TextFieldLabel>
      <TextFieldInput type="text" placeholder="Es. leonardodipace" hasLabel bind:value={username} />
    </TextFieldTrigger>
  </TextField>

  <Avatar>
    <AvatarImage src="https://www.github.com/{username}.png" alt={username} />
    <AvatarFallback>
      <Icon>
        <UserIcon />
      </Icon>
    </AvatarFallback>
  </Avatar>
</div>
