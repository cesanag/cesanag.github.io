class Paywall extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
   <div class="paywall--card">
          <a><b>Pagina protetta</b> <img class="icon" src="img/lock.svg" /></a>
          <p class="grey">Beep, boop. Indentificarsi, prego.</p>
          <form for="paywall">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
          </form>
        </div>

       
    `;
  }
}

customElements.define("paywall-component", Paywall);
