var recipes = {
  flour: '1 cup',
  water: '1/2 cup'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object[key] = value
  return newObject
}
