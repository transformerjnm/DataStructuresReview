/*

Quick sort Algorithm

https://www.youtube.com/watch?v=XE4VP_8Y0BU

*/

quickSort = array => {

    if( array.length === 1 ){
        return array;
    }

    //set pivot as last value
    const pivot = array[ array.length - 1 ];
    const leftArray = [];
    const rightArray = [];

    //go though values in array. if value is less than pivot put value in left array else put in right array
    for ( let i = 0; i < array.length -1; i++ ) {

        if ( array[ i ] < pivot ){

            leftArray.push( array[ i ] );

        } else {

            rightArray.push( array[ i ] );

        }

    }//for

    //keep calling this function until all items are sorted. then the function returns the order array.
    if ( leftArray.length > 0 && rightArray.length > 0 ) { 

        return [ ...quickSort( leftArray ) , pivot, ...quickSort( rightArray ) ];

    } else if ( leftArray.length > 0 ) {

        return [ ...quickSort( leftArray ) , pivot ];

    } else {

        return [ pivot, ...quickSort( rightArray ) ];

    }


}

//test array
console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 6543]));