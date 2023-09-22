import { quartOut } from "svelte/easing";

export const TRANSITION_OFFSET = 30;
export const TRANSITION_DURATION = 300;
export const TRANSITION_START = 0.95;
export const TRANSITION_EASE = quartOut;

export const TRANSITION_BASE = {
  duration: TRANSITION_DURATION,
  ease: TRANSITION_EASE,
};

export const TRANSITION_Y_IN = {
  ...TRANSITION_BASE,
  y: TRANSITION_OFFSET,
};

export const TRANSITION_Y_OUT = {
  ...TRANSITION_BASE,
  y: -TRANSITION_OFFSET,
};

export const TRANSITION_X_IN = {
  ...TRANSITION_BASE,
  x: TRANSITION_OFFSET,
};

export const TRANSITION_X_OUT = {
  ...TRANSITION_BASE,
  x: -TRANSITION_OFFSET,
};

export const TRANSITION_SCALE = {
  ...TRANSITION_BASE,
  start: TRANSITION_START,
};
