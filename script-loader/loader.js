var Loader = {
  loadIf( bool, url ) {
    if ( bool ) return;
    Loader.loadScript( url );
  },
  loadScript( url ) {
    return new Promise( ( resolve, reject ) => {
      var script = document.createElement( 'script' );
      script.src = url;
      script.onerror = reject;
      script.onload = resolve;
      document.body.appendChild( script );
    } );
  }
};

var CUSTOM_ELEMENTS_AVAILABLE = ( "customElements" in window && typeof customElements.define !== "undefined" );

Loader.loadIf( CUSTOM_ELEMENTS_AVAILABLE, '/polyfills/customElements.min.js' );