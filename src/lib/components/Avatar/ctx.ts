import {
  createAvatar,
  type Avatar,
  type AvatarElements,
  type CreateAvatarProps,
} from "@melt-ui/svelte";
import { getContext, setContext } from "svelte";

const NAME = "avatar";
const ELEMENT_NAME = "avatar-element";

const create = (props: CreateAvatarProps) => {
  const avatar = createAvatar(props);
  setContext(NAME, avatar);

  return avatar;
};

const get = () => {
  const avatar: Avatar = getContext(NAME);

  return avatar;
};

const setElement = (props: { src: string; alt: string }) => {
  setContext(ELEMENT_NAME, props);

  const avatar = get();
  const { elements } = avatar;
  const { image, fallback } = elements;

  return { image, fallback };
};

const getElement = () => {
  const element: AvatarElements = getContext(ELEMENT_NAME);

  return element;
};

const ctx = {
  create,
  get,
  setElement,
  getElement,
};

export default ctx;
