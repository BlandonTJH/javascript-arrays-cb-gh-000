var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,element){
 chocolateBars = ["foo",...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,element){
  chocolateBars['foo', 1]
}
