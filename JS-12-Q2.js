// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:

function outerFunc() {
    let nums = [ 12, 2 ];
    function innerFunc( arr ) {
        console.log( `${ arr[ 0 ] } * ${ arr[ 1 ] } = ${ arr[ 0 ] * arr[ 1 ] }` );

    }
    innerFunc( nums );
}

outerFunc();