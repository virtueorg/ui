export type IVariant = "default" | "success" | "info" | "warning" | "error"

export type IHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type IAlert = {
  id?: string
  icon?: ConstructorOfATypedSvelteComponent
  title: string
  variant?: IVariant
}
