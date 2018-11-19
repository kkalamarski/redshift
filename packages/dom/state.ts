export type Update = (state: any, [type, payload]: Action) => any
export type Action = [string, any?]

const listeners: Function[] = []
let state: any
let update: Update

export const registerStore = (up: Update, model: any) => {
  state = model
  update = up

  dispatch(["InitStore"])
}
export const setUpdate = (u: Update) => {
  update = u
}

export const subscribe = (listener: Function) => {
  listeners.push(listener)

  return () => {
    listeners.filter(lis => lis !== listener)
  }
}

export const dispatch = (action: Action) => {
  state = update(state, action)
  console.log(state, action)
  listeners.forEach(listener => listener(state))
}
