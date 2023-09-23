import type { IAlert } from "$lib/types";
import { ALERT_TIMEOUT } from "$lib/utils/const";
import { nanoid } from "nanoid";
import { writable, type Writable } from "svelte/store";

export const alerts: Writable<IAlert[]> = writable([]);

export const addAlert = (alert: IAlert) => {
  if (!alert.id) {
    alert.id = nanoid();
  }

  alerts.update($alerts => {
    return [...$alerts, alert];
  });

  setTimeout(() => {
    remove(alert.id);
  }, ALERT_TIMEOUT);
};

export const remove = (id: IAlert["id"]) => {
  alerts.update($alerts => {
    return $alerts.filter(alert => alert.id !== id);
  });
};
