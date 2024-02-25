import type { Action } from "svelte/action"

export type VariantType = "default" | "success" | "info" | "warning" | "error"

export type ExtendedVariantType = VariantType | "successFilled" | "infoFilled" | "warningFilled" | "errorFilled"

export type HeadingLevelType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type AsChildType = {
  asChild?: boolean
}

export type BuilderType = {
  action: Action
}

export type BuilderActionsParamsType = {
  builders?: BuilderType[]
}

export type AlertType = {
  id?: string
  variant?: VariantType
  title: string
}
