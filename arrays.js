var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]

function addElementToBeginningOfArray(array, element) {
  return ('addElementToBeginningOfArray', ["foo", + 1])
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return ('addElementToEndOfArray', [1, "foo"])
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.unshift(element)
  .push(element)
  return ('destructivelyAddElementToEndOfArray', [1, "foo"])
}

function accessElementInArray(array, index) {
  console.log(accessElementInArray[3])
  return (3)
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  chocolateBars.shift(3)
  return (2, 3)
}

function removeElementFromBeginningOfArray(array) {
  chocolateBars.slice(-1)
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
   chocolateBars.pop(3)
    chocolateBars
    return [1,2]
  }
  
  function removeElementFromEndOfArray(array) {
    chocolateBars.pop(3)
    chocolateBars
    return [1,2]
    }
  