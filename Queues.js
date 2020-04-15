/*

https://www.youtube.com/watch?v=bK7I79hcm08

queues

*/

let Queue = function() {

    this.collection = [];

    //.push can be O(n) due to copy cost which happens due to array size getting bigger. overall runtime of O(n) or, runtime of 0( 1 ) and a an amortized time of O(n)
    this.enqueue = ( element ) => {

        this.collection.push( element );

    }//this.enqueue

    // runtime is O(n)
    this.dequeue = ( element ) => {

        let i =this.collection.indexOf( element );
        this.collection.splice(  i, 1 );

    }//this.dequeue

}//Queue

let testQueue = new Queue();
testQueue.enqueue( 'Bob' );
testQueue.enqueue( 'Jerry' );
console.log( testQueue.collection );
testQueue.dequeue( 'Bob' ); 
console.log( testQueue.collection );
