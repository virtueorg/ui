import { createAvatar, type Avatar, type CreateAvatarProps } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "avatar"

const create = (props: CreateAvatarProps) => {
  const avatar = createAvatar(props)

  setContext(NAME, avatar)

  return avatar
}

const get = () => {
  const avatar: Avatar = getContext(NAME)

  return avatar
}

const getImage = (src?: string | null) => {
  const avatar: Avatar = getContext(NAME)

  if (src) {
    avatar.options.src.set(src)
  } else {
    avatar.options.src.set("")
  }

  return avatar
}

const ctx = {
  create,
  get,
  getImage,
}

export default ctx
