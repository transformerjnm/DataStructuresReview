/*

https://www.youtube.com/watch?v=Gj5qBheGOEo

stack data structure

common functions: push, pop, peek, length

palindrome: word that is spelled the same forward and backwards.

*/

/* finds palindrome words using a stack. stack created using js arrays. which is kinda cheating */

//this is the stack
let letters = [];
let word = "racecar";
let rWord = [];

//put letters of word into stack
letters = word.split( '' );

// reverse array
rWord = letters.reverse( );

if( rWord.join( '' ) === word ){

    console.log( "is palindrome" );

} else {

    console.log( "is NOT a palindrome" );

}


//create a stack from scratch

let Stack = function() {

    this.count = 0;
    this.storage = {};

    //add value to end of stack

    this.push = ( value ) => {

        this.storage[this.count] = value;
        this.count++;

    }//this.push

    //removes value at end of stack and returns removed value;
    //runtime O(1)
    this.pop = ( ) => { 

        //stack is empty nothing can be removed
        if ( this.count === 0 ) {

            return undefined;

        } else {

            this.count--;
            let result = this.storage[ this.count ];
            delete this.storage[ this.count ];
            return result;

        }

    }//this.pop

    this.size = () => {

        return this.count;

    }//this.size

    //return value at end of stack
    this.peek = ( ) => {
        
        return this.storage[ ( this.count - 1 ) ];

    }//this.peek


}//stack function object

let newStack = new Stack();

newStack.push( 5 );
newStack.push( 6 );
console.log( newStack.peek( ) );
newStack.pop( );
console.log( newStack.peek( ) );
console.log( newStack.size( ) );
