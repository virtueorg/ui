import { createLinkPreview, type CreateLinkPreviewProps, type LinkPreview } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "LinkPreview"

const set = (props: CreateLinkPreviewProps) => {
  const linkPreview = createLinkPreview(props)

  setContext(NAME, linkPreview)

  return linkPreview
}

const get = () => {
  const linkPreview: LinkPreview = getContext(NAME)

  return linkPreview
}

const ctx = {
  set,
  get,
}

export default ctx
