export default class Maybe<T> {
  private constructor(private value) {}

  private isValueFalsy = () => !this.value && this.value !== 0

  public static of = value => new Maybe(value)
  public static Just = value => new Maybe(value)
  public static Nothing = () => new Maybe(null)

  public bind = fn => (this.isValueFalsy() ? this : fn(this.value))
  public map = fn => (this.isValueFalsy() ? this : new Maybe(fn(this.value)))

  public do = (just, nothing) => {
    this.isValueFalsy() ? nothing() : just(this.value)
    return this
  }

  public valueOrElse = defaultValue =>
    this.isValueFalsy() ? defaultValue : this.value
}
