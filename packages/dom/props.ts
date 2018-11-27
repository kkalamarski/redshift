import { dispatch } from "./state"

export const isEventProp = (name: string) => {
  return /^on/.test(name)
}

const extractEventName = (name: string) => {
  return name.slice(2).toLowerCase()
}

export const addEventListeners = ($target: any, props: any) => {
  Object.keys(props).forEach(name => {
    if (isEventProp(name)) {
      const body = props[name]
      $target.addEventListener(extractEventName(name), (e: any) =>
        dispatch(body(e))
      )
    }
  })
}

export const updateProps = (
  $target: any,
  newProps: any,
  oldProps: any = { name: undefined }
) => {
  const props = Object.assign({}, newProps, oldProps)
  Object.keys(props).forEach(name => {
    updateProp($target, name, newProps[name], oldProps[name])
  })
}

export const updateProp = (
  $target: any,
  name: any,
  newVal: any,
  oldVal: any
) => {
  if (!newVal) {
    removeProp($target, name, oldVal)
  } else if (!oldVal || newVal !== oldVal) {
    setProp($target, name, newVal)
  }
}

export const setProp = ($target: any, name: any, value: any) => {
  if (isCustomProp(name)) {
    return
  } else if (typeof value === "boolean") {
    setBooleanProp($target, name, value)
  } else {
    $target.setAttribute(name, value)
  }
}

export const setProps = ($target: any, props: any) => {
  Object.keys(props).forEach(name => {
    setProp($target, name, props[name])
  })
}

export const setBooleanProp = ($target: any, name: any, value: any) => {
  if (value) {
    $target.setAttribute(name, value)
    $target[name] = true
  } else {
    $target[name] = false
  }
}

export const isCustomProp = (name: string) => {
  return isEventProp(name) || name === "forceUpdate"
}

export const removeBooleanProp = ($target: any, name: string) => {
  $target.removeAttribute(name)
  $target[name] = false
}

export const removeProp = ($target: any, name: string, value: boolean) => {
  if (isCustomProp(name)) {
    return
  } else if (name === "className") {
    $target.removeAttribute("class")
  } else if (typeof value === "boolean") {
    removeBooleanProp($target, name)
  } else {
    $target.removeAttribute(name)
  }
}
