/*禁用回调列表中的回调 */
// a sample logging function to be added to a callbacks list
var foo = function( value ){
    console.log( value );
}

var callbacks = $.Callbacks();

// add the above function to the list
callbacks.add( foo );

// fire the items on the list
callbacks.fire( 'foo' ); // outputs: foo

// disable further calls being possible
callbacks.disable();

// attempt to fire with 'foobar' as an argument
callbacks.fire( 'foobar' ); // foobar isn't output