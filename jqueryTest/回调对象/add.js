// a sample logging function to be added to a callbacks list
var foo = function( value ){
    console.log( 'foo:' + value );
}

// another function to also be added to the list
var bar = function( value ){
    console.log( 'bar:' + value );
}

var callbacks = $.Callbacks();

// add the function 'foo' to the list
callbacks.add( foo );

// fire the items on the list
callbacks.fire( 'hello' );  
// outputs: 'foo: hello'

// add the function 'bar' to the list
callbacks.add( bar );

// fire the items on the list again
callbacks.fire( 'world' );  

// outputs:
// 'foo: world'
// 'bar: world'