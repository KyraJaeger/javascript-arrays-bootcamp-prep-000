var chocolateBars=[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ]
  
  function addElementToBeginningOfArray(array, element){
   array = [element, ...array] 
  }
  
  function destructivelyAddElementToBeginningOfArray (array, element){
    array [1] = element
  }
  
  