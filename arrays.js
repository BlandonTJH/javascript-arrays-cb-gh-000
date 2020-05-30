var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
 chocolateBars.unshift('foo')
 chocolateBars
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift("foo")
}
