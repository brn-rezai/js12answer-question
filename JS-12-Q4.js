//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

const a = [ 0, 2, 4, 6 ];
let b = 5;

const myFunc = ( arr ) => {
    let k = [];
    for ( let x of arr ) {
        k.push( x + b );
    }

    return console.log( k );


};

myFunc( a );

const person = [ "amir", "rose", "melody", "baran" ];
const [mirzaie1, mirzaie2, mirzaie3, rezaie] = person;
obj = {};
obj[ 'mirzaie1' ] = mirzaie1
obj[ 'mirzaie2' ] = mirzaie2
obj[ 'mirzaie3' ] = mirzaie3
obj['rezaie'] = rezaie

console.log(obj);
