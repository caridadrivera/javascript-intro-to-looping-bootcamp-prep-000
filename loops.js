// the forLoop is only used when we know the amount of times we will run a code
// the test asked for a loop that starts counting from 0, which is why I made the initialization = 0
// we are dealing with condition statements where if at any point i is 1, we want to ADD a string to the array. (interpolation i?)

function forLoop(array){
  for (let i = 0; i < 25; i++){
   if (i === 1) {
    array.push("I am 1 strange loop.") ; 
    } else {
     array.push('I am 24 strange loops.');
  }
  }
    return array;
}