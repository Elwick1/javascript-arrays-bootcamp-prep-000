var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]

function addElementToBeginningOfArray(array, element) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
  return ('addElementToBeginningOfArray', ["foo", + 1])
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
  return ["foo", + 1]
}

function addElementToEndOfArray(array, element) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
  return ('addElementToEndOfArray', [1, "foo"])
}

function destructivelyAddElementToEndOfArray(array, element) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
  return ('destructivelyAddElementToEndOfArray', [1, "foo"])
}

function accessElementInArray(array, index) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
  console.log(accessElementInArray[3])
  return (3)
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
  chocolateBars.shift(3)
  return (2, 3)
}

function removeElementFromBeginningOfArray(array) {
  var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
  chocolateBars.slice(-1)
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    var chocolateBars = ["snickers", "hundred grand", "kitkat" , "skittles"]
    chocolateBars.pop(1,2)
  }
  