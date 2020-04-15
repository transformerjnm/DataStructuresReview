/*

trees and a little about binary serach tree.

brocken one
https://www.youtube.com/watch?v=oSWTXtMglKE

one that might work
https://www.youtube.com/watch?v=6JeuJRqKJrI

binary serach tree
has no auto ordering. so if u enter 10 first then ten is the root. if you then enter 20 and 30. 20 will not become the root the root will stay 10
and the tree will become unbalanced

*/

let Tree = function ( ) {


    let Node = function ( newData ) {

        this.data = newData;
        //left right are pointer to the next node when applicable
        this.data.left = null;
        this.data.right = null;

    }

    this.insert = function( value ) {

        if ( this.data == null ) {

            //if there is no root node then add it
            this.data = new Node( value );

        } else {

            //this function was reqired becouse i could not call this.data.left/right.insert(value) beacuse insert() was undefined for this.data.left/right. 
            let searchTree = ( node ) => {

                //if the value is less than the data go left else go right.
                //go left of data
                if ( value <= node.data ) {
    
                    //if left node is null then add the new value as a Node
                    if ( node.left == null ) {
    
                        node.left = new Node( value );
                        
                    } else /* else rerun the insert funtion on the left node. running the function further down in the tree. */ {

                        searchTree( node.left );
                        //node.left.insert( value );
    
                    }
    
                } else /* go right of data*/{
    
                    //if right node is null then add the new value as a Node
                    if ( node.right == null ) {
    
                        node.right = new Node( value );
    
    
                    } else /* else rerun the insert funtion on the right node. running the function further down in the tree. */ {

                        searchTree( node.right );
                        //node.right.insert( value );
    
                    }
    
                }//end of go left or go right if( value <= data  )
              
                this.data = node;
            }

            //start on root node
            searchTree(this.data);

        }
       
    }//insert function


    this.printInOrder = function( ) {

        //this function was reqired becouse i could not call this.data.left/right.printInOrder() beacuse printInOrder() was undefined for this.data.left/right. 
        let printList = ( node ) => {

            //print left first(lowest number)
            if ( node.left != null ) {

                printList( node.left );
    
            }

            //print middle 
            console.log( node.data );

            //then print right which is the highest
            if ( node.right != null ) { 
    
                printList( node.right );
    
            }

        }//printlist function

        //start printing values
        printList( this.data );
       
    }//printInOrder

}//end of tree object as function


let testTree = new Tree();
testTree.insert( 4 );
testTree.insert( 5 );
testTree.insert( 6 );
testTree.insert( 2 );
// testTree.insert( 'a' );
// testTree.insert( 'ba' );
// testTree.insert( 'dad' );
// testTree.insert( 'c' );
testTree.printInOrder();