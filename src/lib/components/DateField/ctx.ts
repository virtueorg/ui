import { createDateField, type CreateDateFieldProps, type DateField } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "DateField"

const set = (props: CreateDateFieldProps) => {
  const dateField = createDateField(props)

  setContext(NAME, dateField)

  return dateField
}

const get = () => {
  const dateField: DateField = getContext(NAME)

  return dateField
}

const ctx = {
  set,
  get,
}

export default ctx
