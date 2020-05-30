/**
 
    Merge Sort

    https://www.youtube.com/watch?v=ppNZ4bmrmGs

    sorting by splitting

 */

//divides array in half. then orders each half.
let mergeSort = ( array ) => {

    //see if array can be split
    if (array.length < 2 ) {
        return array;
    }
    //get middle index
        //we floor the value because if their is odd number in array then we will get back a decimal number and we need a integer.
        const middle = Math.floor( array.length / 2 );

    //split array
        const leftSide = array.slice(0, middle);
        const rightSide = array.slice( middle , array.length);
    //use recension to continue splitting
        //keeps calling mergeSort function until array.length < 2+
        /*
            it splits the array down to single values. then it sends the single values to the merge function with then adds the values to the array in order. 
        */
       console.log('split: ', leftSide, rightSide);
        return merge( mergeSort( leftSide ), mergeSort(rightSide ) );



    
}//end of mergeSort

//combines two ordered arrays.
let merge = (left, right) => {
  
    //create new array. this is where o(n) space complexity comes from
        const result = [ ];
    //check if either array is empty
        while( left.length && right.length ) {

            //find lower value
            if( left[ 0 ] <= right[ 0 ] ){

                //add left value
                //left.shift pops the first value (left[0]) out of the array and return that value.
                result.push( left.shift( ) );

            }
            else {

                //add right value
                result.push( right.shift( ) );

            }//if( left[ 0 ] <= right[ 0 ] )
            
        }//while left and right arrays are not empty

        //merge left array
        while( left.length ) { 
            result.push( left.shift( ) );
        }
        //merge right array
        while( right.length ) { 
            result.push( right.shift( ) );
        }
  
    //return result array
    console.log( 'result: ', result );
    return result;

}//end of merge

console.log( mergeSort( [ 110 ,99, 2, 3, 1, 4,15, 12 ] ) );
/**
                visualizing how it works


Start unordered Array [ 110 ,99, 2, 3, 1, 4,15, 12 ]

Split into original left and right halves
split:  Left: [ 110, 99, 2, 3 ] Right: [ 1, 4, 15, 12 ]

splits original left half
split:   First: [ 110, 99 ] Second: [ 2, 3 ]

splits first half of original left
split:  [ 110 ] [ 99 ]

orders the first half of the original left half
result:   [ 99, 110 ]

splits second half of original left
split:   [ 2 ] [ 3 ]

orders second half of original left
result:  [ 2, 3 ]

combines both ordered left halves into one ordered left half
result:   [ 2, 3, 99, 110 ]

Now dose the same for original right half
split:   [ 1, 4 ] [ 15, 12 ]

split:   [ 1 ] [ 4 ]

result:   [ 1, 4 ]

split:   [ 15 ] [ 12 ]

result:   [ 12, 15 ]

result:   [ 1, 4, 12, 15 ]

Combines ordered left and right halves
result:  [ 1, 2, 3, 4, 12, 15, 99, 110 ]

end output: [ 1, 2, 3, 4, 12, 15, 99, 110 ]


 */