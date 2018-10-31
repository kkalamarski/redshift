const DOM = {
  find: selector => document.querySelector(selector),
  findAll: selector => Array.from(document.querySelectorAll(selector)),
  mount: (selector, fn) => {
    const el = DOM.find(selector)
  }
}

export default DOM
