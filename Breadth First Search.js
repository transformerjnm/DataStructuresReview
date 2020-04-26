/*

Breadth First Search. algorithm for traversing graphs

https://www.youtube.com/watch?v=wu0ckYkltus

*/

//this function outputs key value pairs where the key is the node and the value is the distance from the root node.
function BFS( graph, root ){

    //distances to the root node
    let nodesLen = { };

    //set all the distances by default to Infinity aka unreachable 
    for ( let i = 0; i < graph.length; i++ ) {

        nodesLen[ i ] = Infinity;

    }

    //set the root node distance to 0 instead of infinity
    nodesLen[ root ] = 0;

    let queue = [ root ];
    //keep track of current node we are traversing
    let current;

    //traverse until their is no nodes to traverse
    while ( queue.length != 0 ) {

        //get first node in the queue and remove the node form the queue
        current = queue.shift();

        //get all the nodes connected to the current node represented by 1 for connected 0 for no path
        let curConnected = graph[ current ];
        let neighborIdx = [ ];
        //gets the first connected node index. in our array 1 represents connected 0 represents no path
        //if no node has the index of 1 then idx will be set to -1
        let idx = curConnected.indexOf(1);

        //find all the current connected nodes 
        //while we found a index that equals 1
        while (idx != -1 ) {

            //add the connected indx to or array
            neighborIdx.push( idx );
            //look for another connected node(1) starting at the next position in the array
            idx = curConnected.indexOf( 1, idx + 1 );

        }

        //loop through the connected nodes and get the distance
        for( let j = 0; j < neighborIdx.length; j++ ) {

            //if we have not set the distance from the root node in  the nodeLen
            if ( nodesLen[ neighborIdx[ j ] ] == Infinity ) {

                //set the distance from root for a node
                nodesLen[ neighborIdx[ j ] ] = nodesLen[ current ] + 1;

                //push neighbor to queue so next loop thorough the while loop we will check the neighbor of that node also.
                queue.push( neighborIdx[ j ] );

            }//if not set

        }//for connected nodes        

        

    }//while their is nodes to traverse
    return nodesLen;
};

//adjacency matrix graph 
//each array inside the graph shows which nodes are connected the that node at that index
//0 means not connected 1 means connected
//this graph has no values just connections to each nodes
let exBFSGraph = [

    //node 0
    [ 0, 1, 1, 1, 0 ],
    //node 1
    [ 0, 0, 1, 0, 0 ],
    //node 2
    [ 1, 1, 0, 0, 0 ],
    //node 3
    [ 0, 0, 0, 1, 0 ],
    //node 4
    [ 0, 1, 0, 0, 0 ]

];

//the graph with references to how far each node is from node 0
console.log( BFS( exBFSGraph, 1 ) );