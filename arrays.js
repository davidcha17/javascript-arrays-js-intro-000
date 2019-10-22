var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) {
  return [b, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, b) {
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a, b) {
  return [...a, b]
}

function destructivelyAddElementToEndOfArray(a, b) {
  a.push(b)
  return a
}

function accessElementInArray(a, b) {
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a, b) {
  a.shift(b)
  return a
}

function removeElementFromBeginningOfArray(a, b) {
  a = a.slice(1)
  return a
}

function destructivelyRemoveElementFromEndOfArray(a, b){
  a.pop(b)
  return a
}

function removeElementFromEndOfArray(a, b){
  a = a.slice(0, b.length, -1)
  return a
}
