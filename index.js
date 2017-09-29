var recipes = {
  flour: '1 cup',
  water: '1/2 cup'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, {[key]: value})
}
