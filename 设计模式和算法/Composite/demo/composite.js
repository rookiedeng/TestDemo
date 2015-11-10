function ImagesStore( id ){
    this.children = [];
    this.element = document.createElement("div");
    this.element.id = id;
    this.element.className = "imgs-store";
    document.body.appendChild(this.element)
}

ImagesStore.prototype = {
    constructor:ImagesStore,

    add : function( child ){
        this.children.push( child );
        this.element.appendChild( child.getElement() );
    },
    
    remove : function( child ){
        for( var node, i=0; node = this.getChild(i); i++ ){
            if( node === child ){
                this.children.splice( i, 1 );
                break;
            }
            this.element.removeChild( child.getElement() );
        }
    },

    getChild : function( i ){
        return this.children[i];
    },

    show : function(){
        this.element.style.display = 'block';
        for( var node, i=0; node = this.getChild(i); i++ ){
            node.show();
        }
    },

    hide : function(){
        for( var node, i=0; node = this.getChild(i); i++ ){
            node.hide();
        }
        this.element.style.display = 'none';
    },

    getElement : function(){
        return this.element;
    }
}
function ImageItem( src ){
    this.element = document.createElement("img");
    this.element.src = src;
    this.element.style.width="100px";
    this.element.style.height="100px";
    this.element.className = "img-item";
}

ImageItem.prototype = {
    constructor:ImagesStore,

    add : function( child ){
        throw new Error("this is image object, no add function");
    },
    
    remove : function( child ){
        throw new Error("this is image object, no remove function");
    },

    getChild : function( i ){
        throw new Error("this is image object, no getChild function");
    },

    show : function(){
        this.element.style.display = 'block';
    },

    hide : function(){
        this.element.style.display = 'none';
    },

    getElement : function(){
        return this.element;
    }
}
var store = new ImagesStore("first");
store.add( new ImageItem("1.png") );
store.add( new ImageItem("2.png") );
store.show()