import type { Action } from "svelte/action"

export type Variant = "default" | "success" | "info" | "warning" | "error"

export type ExtendedVariant = Variant | "successFilled" | "infoFilled" | "warningFilled" | "errorFilled"

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type AsChild = {
  asChild?: boolean
}

export type Builder = {
  action: Action
}

export type BuilderActionsParams = {
  builders: Builder[]
}

export type Alert = {
  id?: string
  variant?: Variant
  title: string
}
