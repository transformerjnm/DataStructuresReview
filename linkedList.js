/*

guide/resources
https://www.youtube.com/watch?v=9YddVVsdG5A
linked list
*/

function linkedList() {
    
    let length = 0;
    let head = null;

    //can be called to create a node for the linked list.
    var Node = function( nodeElement ) {

        //the nodes element is the value of the node.
        this.element = nodeElement;
        //next is the referance to the next node in the list
        this.next = null;

    };

    //returns size of the linked list
    this.size = function( ) { 

        return length;

    };

    //add a new node to the list
    // O( n )
    this.add = function( element ) { 

        var node = new Node( element );
        //if there is no head(head is the first node in the list)
        if( head === null ){

            //head is equal to the node we just created
            head = node;

        } else {

            //current node is set the the first node in the list (head)
            let currentNode = head;
            //if there is a node after this node set current node to it. this goes to the end of the linked List.
            while( currentNode.next ) {

                 currentNode = currentNode.next;

            }
            //current node is the last node in the list so now set the next property to the new node.
            currentNode.next = node;

      }
      //once we have added a new node the length of the linked list had increased.
      length++;

    };//end of this.add

    // O( n )
    this.printNodes = function( ) {

        currentNode = head;

        //if there is another node
        while( currentNode.next ){

            //print the current node 
            console.log( currentNode.element );
            //set current node to next node
            currentNode = currentNode.next;

        }

        //print the last node in the list
        console.log( currentNode.element );

    }//end of this.printNodes

}//end of linkedList

let newlist = new linkedList();
newlist.add( 'hi' );
newlist.add( 'world' );
newlist.add( 'three' );
console.log(newlist.size());
newlist.printNodes();