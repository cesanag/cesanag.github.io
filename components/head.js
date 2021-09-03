class Head extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&amp;display=swap"
      rel="stylesheet"
    />
    
    `;
  }
}

customElements.define("head-component", Head);
