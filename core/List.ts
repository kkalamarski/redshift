export default class List<T> extends Array<T> {
  private constructor(values) {
    super(values)
  }

  public static of = (...args) => args
  public static head = list => list[0]
  public static tail = list => list.slice(1)
  public static map = (list, mapFn) => list.map(mapFn)
  public static find = (list, find) => list.find(find)
  public static filter = (list, filter) => list.filter(filter)
  public static reduce = (list, reduce, init) => list.map(reduce, init)
}
