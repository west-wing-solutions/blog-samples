class InlineImage extends HTMLElement {
  constructor() {
    super();

    // Attach a Shadow DOM root to this element
    this._shadowRoot = this.attachShadow( {
      mode: 'open'
    } );

    // Set up the inner DOM by adding basic styles and markup
    this._shadowRoot.innerHTML = `
      <style>
        :host img {
          width: 100%;
          height: 100%;
        }
        #container {
          position: relative;
        }
        #placeholder, #full {
          transition: opacity 0.3s ease-in-out;
        }
        #full {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      </style>
      <div id="container">
        <img id="placeholder"/>
        <img id="full"/>
      </div>
    `;

  }

  connectedCallback() {
    // Query for the <img> tags
    this._imageEl = this._shadowRoot.querySelector( '#placeholder' );
    this._fullImageEl = this._shadowRoot.querySelector( '#full' );

    // Display the placeholder
    this._imageEl.src = this.getAttribute( 'placeholder' );

    // Start fetching the full image
    this._fullImageEl.src = this.getAttribute( 'src' );

    // Crossfade between the two, as soon as the image has been fetched
    this._fullImageEl.onload = this._onFullImgLoad.bind( this );
  }

  _onFullImgLoad() {
    this._imageEl.style.opacity = 0;
    this._fullImageEl.style.opacity = 1;
  }

  // disconnectedCallback() {}
  // attributeChangedCallback( attrName, oldVal, newVal ) {}
}

customElements.define( 'inline-image', InlineImage );