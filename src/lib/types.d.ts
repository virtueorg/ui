import type { ComponentProps } from "svelte";
import type { Alert } from "./components";

export type IAlert = {
  id?: string;
  icon?: ConstructorOfATypedSvelteComponent;
  title: string;
  variant?: ComponentProps<Alert>["variant"];
};
