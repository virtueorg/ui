import { createTabs, type CreateTabsProps, type Tabs } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "tabs"

const create = (props: CreateTabsProps) => {
  const tabs = createTabs(props)

  setContext(NAME, tabs)

  return tabs
}

const get = () => {
  const tabs: Tabs = getContext(NAME)

  return tabs
}

const ctx = {
  create,
  get,
}

export default ctx
