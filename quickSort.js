/*

Quick sort Algorithm

https://www.youtube.com/watch?v=XE4VP_8Y0BU

*/

quickSort = array => {

    if( array.length === 1 ){
        return array;
    }

    //set pivot as last value in array
    const pivot = array[ array.length - 1 ];
    const leftArray = [];
    const rightArray = [];

    //go though values in array. if value is less than pivot put value in left array else put in right array
    for ( let i = 0; i < array.length -1; i++ ) {

        //left array. value is less
        if ( array[ i ] < pivot ){

            leftArray.push( array[ i ] );

        } else {

            //right array value is greater
            rightArray.push( array[ i ] );

        }

    }//for

    //keep calling this function until all items are sorted. then the function returns the order array.
    if ( leftArray.length > 0 && rightArray.length > 0 ) { 

        //we have a right and left array. (values are in both arrays ). recursion call both arrays
        return [ ...quickSort( leftArray ) , pivot, ...quickSort( rightArray ) ];

    } else if ( leftArray.length > 0 ) {

        //we only have a left array. recursion on left array
        return [ ...quickSort( leftArray ) , pivot ];

    } else {

        //only have a right array recursion on right array
        return [ pivot, ...quickSort( rightArray ) ];

    }//if array.length do some recursion


}//quicksort function

//test array
console.log( quickSort( [ 1, 4, 2, 8, 345, 123, 43, 6543]  ) );