import { createTabs, type CreateTabsProps, type Tabs } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Tabs"

const set = (props: CreateTabsProps) => {
  const tabs = createTabs(props)

  setContext(NAME, tabs)

  return tabs
}

const get = () => {
  const tabs: Tabs = getContext(NAME)

  return tabs
}

const ctx = {
  set,
  get,
}

export default ctx
