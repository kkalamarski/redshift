const List = {
  head: a => a[0],
  tail: a => a.slice(1),
  map: (a, mapFn) => a.map(mapFn),
  find: (a, find) => a.find(find),
  filter: (a, filter) => a.filter(filter),
  reduce: (a, reduce, init) => a.map(reduce, init)
}

export default List
