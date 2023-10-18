export type IVariant = "default" | "success" | "info" | "warning" | "error";

export type IAlert = {
  id?: string;
  icon?: ConstructorOfATypedSvelteComponent;
  title: string;
  variant?: IVariant;
};
