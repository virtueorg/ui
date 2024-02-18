import { createSlider, type CreateSliderProps, type Slider } from "@melt-ui/svelte"
import { getContext, setContext } from "svelte"

const NAME = "Slider"

const set = (props: CreateSliderProps) => {
  const slider = createSlider(props)

  setContext(NAME, slider)

  return slider
}

const get = () => {
  const slider: Slider = getContext(NAME)

  return slider
}

const ctx = {
  set,
  get,
}

export default ctx
