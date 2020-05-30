var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
array=chocolateBars
function addElementToBeginningOfArray(){
 array.unshift('foo')
}

function destructivelyAddElementToBeginningOfArray(){
  chocolateBars['foo', 1]
}
