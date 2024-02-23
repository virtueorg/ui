import type { AlertType } from "$lib/index.js"
import { ALERT_TIMEOUT } from "$lib/index.js"
import { nanoid } from "nanoid"
import { writable } from "svelte/store"

const store = writable<AlertType[]>([])

const add = (alert: AlertType) => {
  if (!alert.id) {
    alert.id = nanoid()
  }

  store.update($store => {
    return [...$store, alert]
  })

  setTimeout(() => {
    remove(alert.id)
  }, ALERT_TIMEOUT)
}

const remove = (id: AlertType["id"]) => {
  store.update($store => {
    return $store.filter(alert => alert.id !== id)
  })
}

export const alerts = {
  ...store,
  add,
  remove,
}
