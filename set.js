/*
set like a array but with no order and dose not allow duplicate values

es6 has sets now but they do not offer all the expected functions
*/
let myset =  {

     set: [ ],

    has : function ( e ) {
        return ( this.set.indexOf(e) !== -1 );
    },

    values : function ( ) {
        return this.set;
    },

    add : function ( e ) {

        if( !this.has( e ) ) {

            this.set.push( e );
            return true;

        } 
        return false;

    },

    remove : function ( e ) {

        if( this.has( e ) ) {

            let index = this.set.indexOf( e );
            this.set.splice( index, 1 );
            return true;

        } 
       
        return false;

    }

};
myset.add("testing");
myset.add('one')
console.log(myset.values());
myset.remove("testing");
console.log(myset.values());

//es6 set
console.log("----------es6 set----------------");
let theSet = new Set();
theSet.add(3);
theSet.add(5);
console.log(theSet);
let o = ["one", "two"];
theSet.add(o);
console.log(theSet);
console.log(theSet.has(3));
console.log("size: ",theSet.size);
theSet.delete(3);
theSet.delete(5);
console.log(theSet);
