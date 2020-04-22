/*

implement hash tables from scratch in js

https://www.youtube.com/watch?v=F95z5Wxd9ks


*/

//max is the number of buckets were using in our hash to store values
let hash = ( string, max ) => {

    let hash = 0;

    //for every character in the string add the char Code for each character into the hash
    for ( let i = 0; i < string.length; i++ ) {

        //The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
        hash += string.charCodeAt( i );

    }

    //divide by the number of buckets and retrun the remainder
    return hash % max;

}//hash function

let hashTable = function( ) {

    let storage = [ ];
    //number of buckets in a array
    let storageLimit = 4;


    this.print = ( ) => {

        console.log( storage );

    }//this.print

    this.add = ( key, value ) => {

        let index = hash( key, storageLimit );

        //if nothing is in the storage for the index
        if ( storage[ index ] === undefined ) {

            //set that index to the key value pair
            storage[ index ] = [
                [ key, value ]
            ];

        } else {

            //something was in the index
            let inserted = false;

            //for each index see if the key allready exzist
            for ( let i = 0; i < storage[ index ].length; i++ ) {

                //if the key exzist set update the value
                if ( storage[ index ][ i ][ 0 ] === key ) {

                    storage[ index ][ i ][ 1 ] = value;
                    inserted = true;

                }//if

                //if the key dose not exzist
                if ( inserted === false ) {

                    //push in our new item. creating a linked list at that index with mutiple values.
                    storage[ index ].push( [ key, value ] );

                }

            }//for

        }//else not storage[ index ] === undefined 

    }//this.add

    this.remove = ( key ) => {

        let index = hash( key, storageLimit );

        //if there is only one item in the bucket and the key in that bucket equals our key. then delete the index
        if ( storage[ index ].length === 1 && storage[ index ][ 0 ][ 0 ] === key ) {

            delete storage[ index ];

        } else {
            //mutiple items in the index

            //go though each item in the bucket/index
            for ( var i = 0; i < storage[ index ]; i++ ){

                //if the key of the item in the bucket equals our key then delete that item
                if( storage[ index ][ i ][ 0 ] === key ) {

                    delete storage[ index ][ i ];

                }

            }//for each item in bucket/index

        }//else mutiple items in a index.bucket

    };//this.remove

}//hashTable function

console.log( hash( 'beau', 10 ) );

let testHash = new hashTable();

testHash.add( 'beau', 'person' );
testHash.add( 'fildo', 'dog' );
testHash.add( 'ThatPerson', 'human' );
testHash.print();
testHash.remove( 'beau' );
testHash.print();