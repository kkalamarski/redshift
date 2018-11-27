export default class Map {
  private constructor() {}

  public static keys = obj => Object.keys(obj)
  public static clone = obj => Object.assign({}, obj)
  public static merge = (obj1, obj2) => Object.assign({}, obj1, obj2)
  public static update = (obj, key, value) =>
    Object.assign({}, obj, { [key]: value })

  public static get = (obj, key) => obj[key]
  public static delete = (obj, key) => {
    const { [key]: removed, ...rest } = obj
    return rest
  }
}
