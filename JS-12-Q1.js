//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:

function test() {
    let word = [ "Action", "Potential", "Signals" ];

    function p( arr ) {
        for ( let n of arr ) {
            console.log( n );

        }

    }
    p( word );

}

test()


