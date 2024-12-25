// ? Question-3: follow these steps:
// todo-1: Write a function that receives an array of numbers
// todo-2: In The function that you created in todo-1, you should create two functions.
// todo-3: the first function displays the first half of the array, and the second function displays the second half of the array..

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function getArr( arr ) {

  function firstArr( arr ) {
    let f = [];
    for ( let i = 0; i < arr.length / 2; i++ ) {
      f.push( arr[ i ] );
    }
    return f;
  }
  function secondArr( arr ) {
    let s = [];
    for ( let j = arr.length / 2; j < arr.length; j++ ) {
      s.push( arr[ j ] );
    }
    return s;
  }
  console.log( firstArr( arr ) );
  console.log( secondArr( arr ) );


}

getArr( numbers );

/*=> output
   [ 1, 2, 3, 4, 5 ]
   [ 6, 7, 8, 9, 10 ]
 */

// !Answer:
