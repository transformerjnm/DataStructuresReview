/*

    Depth First Search

    https://www.youtube.com/watch?v=7fujbpJ0LB4

    DFS is suppose to backtrack ones it finds a dead end and this one dose not. not sure if this is a true DFS. 
*/

//undirected adjacency list graph. 
let Node1 = { Name: "Node1", connection: [ 1, 2 ], visited: false };
let Node2 = { Name: "Node2", connection: [ 0 ], visited: false };
let Node3 = { Name: "Node3", connection: [ 2 ], visited: false };
let Graph = [ Node1, Node2, Node3]

//print all nodes connected to a given node in a graph by depth first Search
DFSPrint = ( start_node ) => {

    console.log( Graph[start_node].Name +  " has a path to your starting node." )
    

    //if we have looped back to the original node stop.
    if ( Graph[ start_node ].visited === true ){
        return;
    }

    //mark the current node as visited
    Graph[ start_node ].visited = true;

    //get the connected child nodes for the current node
    let children = Graph[ start_node ].connection;

    //recursion on every child
    children.forEach( (child) => {
      
        DFSPrint( child );

    });

};//DFS Print
DFSPrint(0);
