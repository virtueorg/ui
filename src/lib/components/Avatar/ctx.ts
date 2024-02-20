import { createAvatar, type Avatar, type CreateAvatarProps } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Avatar"

const set = (props: CreateAvatarProps) => {
  const avatar = createAvatar(props)

  setContext(NAME, avatar)

  return avatar
}

const get = () => {
  const avatar: Avatar = getContext(NAME)

  return avatar
}

const ctx = {
  set,
  get,
}

export default ctx
