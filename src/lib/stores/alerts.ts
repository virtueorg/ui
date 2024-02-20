import { ALERT_TIMEOUT } from "$lib/index.js"
import type { Alert } from "$lib/types.js"
import { nanoid } from "nanoid"
import { writable } from "svelte/store"

const store = writable<Alert[]>([])

const add = (alert: Alert) => {
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

const remove = (id: Alert["id"]) => {
  store.update($store => {
    return $store.filter(alert => alert.id !== id)
  })
}

export const alerts = {
  ...store,
  add,
  remove,
}
