export default class State {
  private constructor(private value) {}

  public static of = (value = {}) => new State(value)

  public set = (key, value) =>
    new State(Object.assign({}, this.value, { [key]: value }))

  public map = fn => new State(fn(this.value))
  public bind = fn => fn(this.value)

  public do = fn => {
    fn(this.value)
    return this
  }

  public get = key => this.value[key]

  public flatten = () => this.value
}
