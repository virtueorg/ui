import { createPinInput, type CreatePinInputProps, type PinInput } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "PinField"

const set = (props: CreatePinInputProps) => {
  const pinField = createPinInput(props)

  setContext(NAME, pinField)

  return pinField
}

const get = () => {
  const pinField: PinInput = getContext(NAME)

  return pinField
}

const ctx = {
  set,
  get,
}

export default ctx
