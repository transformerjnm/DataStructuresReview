/*

https://www.youtube.com/watch?v=dM_JHpfFITs

Heap represented as an array

to find children node of a node in a Heap array
Left Child: index * 2
Right Child: index * 2 + 1

to find parent node of a node in a Heap array
Parent: index / 2

*/

let minHeap = function( ) {

    this.heap = [null];

    /* runtime would be O( log heap ). worst runtime would be O(heap) i think. it runs until the node we added is greater than its parent. worst case we touch every parent node until we reach the root. each node has two child nodes. so we would only touch half the nodes. unless the entire heap only contains two nodes. then we would have O(heap) as we touched every node in the heap*/
    this.insert = ( num ) => {

        this.heap.push( num );

        //if the heap has three or more nodes then sort it after adding 
        if ( this.heap.length > 2 ) {

            //last index of the heap that has a value
            let lastIndex = this.heap.length - 1;
            

            //if the last node in the heap ( heap[ lastIndex ] ) is less than it's parent node ( Math.floor( lastIndex / 2 ) ] ( Parent = index / 2 ) )move the node up.
            //dose this until it has reached the point that the node's parent is less than the current node or it is the root node.
            while ( this.heap[ lastIndex ] < this.heap[ Math.floor( lastIndex / 2 ) ] ) {

                //if were not at the root node
                if ( lastIndex >= 1 ) {

                    //switch node with parent node using es6 destructuring
                    // parent Node                       , node we inserted  =   node we inserted   , parent Node
                    [ this.heap[ Math.floor( lastIndex / 2 ) ], this.heap[ lastIndex ] = [ this.heap[ lastIndex ] ], this.heap[ Math.floor[ lastIndex / 2 ] ] ];

                    //if parent node is not the root node
                    if ( Math.floor( lastIndex / 2 ) > 1 ) {
                        
                        //set the index to the new index of the node. This is required so that it can continue looping and sorting up in the array/tree 
                        lastIndex = Math.floor( lastIndex / 2 );

                    } else {

                        //stop looping
                        break;

                    }//if parent node is not the root node

                }//if were not at the root node

            }//while ( heap[ lastIndex ] < heap[ Math.floor( lastIndex / 2 ) ] )

        }//if (heap.length > 2 )

    }//this.insert 

    // O(log N) only touches half the nodes
    this.removeSmallest = ( ) => {

        let smallest = this.heap[ 1 ];

        //if we have something to sort
        if ( this.heap.length > 2 ) {

            //set first node to last node.
            this.heap[ 1 ] = this.heap[ this.heap.length - 1 ];
            //remove last node
            this.heap.splice( this.heap.length - 1 );

            //if their is only two nodes
            if ( this.heap.length === 3 ) {

                if ( this.heap[ 1 ] > this.heap[ 2 ] ) {

                    //switch values
                    [ this.heap[ 1 ], this.heap[ 2 ]] = [ this.heap[ 2 ], this.heap[ 1 ] ]; 

                }//if heap[ 1 ] > heap[ 2 ]

                return smallest;

            }//if heap.length === 3 

            let index = 1;
            let left = 2 * index;
            let right = 2 * index + 1;

            //if the current node is bigger than one of its child nodes move it down
            // O(log N)
            while ( this.heap[ index ] >= this.heap[ left ] || this.heap[ index ] >= this.heap[ right ] ) {

                //if left is the smallest child node
                if ( this.heap[ left ] < this.heap[ right ] ) {

                    [ this.heap[ index ], this.heap[ left ] ] = [ this.heap[ left ], this.heap[ index ] ];
                    index = 2 * index;

                } else { 

                    [ this.heap[ index ], this.heap[ right ] ] = [ this.heap[ right ], this.heap[ index ] ]
                    index = 2 * index + 1;

                }//if left is smaller than right

                left = 2 * index;
                right = 2 * index + 1;
                if ( this.heap[ left ] == undefined || this.heap[ right ] == undefined ) {

                    //stop the loop
                    break;

                }//if undefined

            }//while left or right > heap[ index ]

        }/*if heap.length > 2 */ else if ( this.heap.length == 2 ){

            //heap has two nodes no sorting required just remove one
            this.heap.splice( 1, 1 );

        }/* else if heap.length == 2 */ else { 

            return null;

        }//else (1 or less heap.length)

    }//this.removeSmallest


}//min heap function object

let Heap = new minHeap();
Heap.insert( 1 );
Heap.insert( 5 );
Heap.insert( 7 );
Heap.insert( 8 );
console.log( "new heap ", Heap );
Heap.removeSmallest( );
console.log( "Heap minus smallest ", Heap );



