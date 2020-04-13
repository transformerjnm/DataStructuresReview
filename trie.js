/*
https://www.youtube.com/watch?v=7XmS8McW_1U

This is a dictonary based trie. each node is a letter and following a path makes a word
*/

let Node = function() {

    //holds all the nodes(chars) following this node(char)
    this.keys = new Map( );
    this.end = false;

    this.setEnd = ( ) => {

        this.end = true;

    };//setEnd

    this.isEnd = ( ) => {

        return this.end;

    };//isEnd

};//node

let Trie = function() {

    //root Node is empty so that we can have any word span off of it
    this.root = new Node();

    this.add = (input, node = this.root) => {

        if ( input.length == 0 )/*nothing left to input */ {

            node.setEnd();
            return;

        } else if ( !node.keys.has( input[ 0 ] ) ) /* dose not have the input character */{

            //add the character to the map
            node.keys.set( input[ 0 ], new Node() );
            //recursion of string minus the first value. 
            //passes the current node index as the node
            return this.add( input.substr( 1 ), node.keys.get( input[ 0 ] ) );

        } else /* has the input charter */ {

            //runs the add function on the next input character
            return this.add( input.substr( 1 ), node.keys.get( iunput[ 0 ] ) );

        };

    };//add function

};//trie object function

let testTrie = new Trie();
testTrie.add( 'hello' );
console.log(testTrie);