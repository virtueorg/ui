import { createSelect, type CreateSelectProps, type Select } from "@melt-ui/svelte";
import { nanoid } from "nanoid";
import { getContext, setContext } from "svelte";

const NAME = "select";
const GROUP_NAME = "select-group";
const ITEM_NAME = "select-item";

const create = (props: CreateSelectProps) => {
  const select = createSelect(props);

  setContext(NAME, select);

  return select;
};

const get = () => {
  const select: Select = getContext(NAME);

  return select;
};

const createGroup = () => {
  const id = nanoid();

  setContext(GROUP_NAME, id);

  const { elements } = get();
  const { group } = elements;

  return { group, id };
};

const createItem = (value: string) => {
  const select = get();

  setContext(ITEM_NAME, value);

  return select;
};

const getItem = () => {
  const value: string = getContext(ITEM_NAME);

  return value;
};

const getGroup = () => {
  const id: string = getContext(GROUP_NAME);
  const { elements } = get();
  const { groupLabel } = elements;

  return {
    id,
    groupLabel,
  };
};

const ctx = {
  create,
  get,
  createGroup,
  createItem,
  getItem,
  getGroup,
};

export default ctx;
