class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    document.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      false
    );

    this.innerHTML = `
<div class="navbar" id="desktop">
        <div>
        <h1>Gabriele Cesana</h1>
        <p class="grey">Creative Front End React Developer && Digital media producer. Likes tech, art, design, social psychology.</p>
        </div>
        <div>
            <div class="navbar--links">
                <ul>
                    <li><a href="/index.html">Intro</a></li>
                    <li><a href="/work.html">Lavoro</a></li>
                    <li><a href="/knowledge.html">Conoscenze & Educazione</a></li>
                    <li><a href="/books.html">Libri</a></li>
                  
                    </ul>
            </div>
        </div>

    
    </div>

    <div class="navbar--mobile" id="mobile">
            <a style="color: black; text-decoration: none" href="index.html" class="navbar--logo">
                  <b>Gabriele Cesana</b>
            </a>
    
            <div
                id="navbar--menu-burger"
                onClick="toggleDropdownMenu()"
                class="navbar--menu-burger">
            </div>
    
    
            <div id="navbar--menu-dropdown" 
                class="navbar--menu-dropdown navbar--menu-is-visible">
                    <a href="index.html">
                        Intro
                    </a>
                    <a href="work.html">
                        Lavoro
                    </a>
                    <a href="knowledge.html">
                        Conoscenze & Educazione
                    </a>
                    <a href="books.html">
                        Libri
                    </a>

                    
            </div>
        
        </div>

    `;
  }
}
// MenuBurger

function toggleDropdownMenu() {
  let menuDropdown = document.querySelector("#navbar--menu-dropdown");
  menuDropdown.classList.toggle("navbar--menu-is-visible");
  menuDropdown.style.zIndex = "999";
}

customElements.define("navbar-component", Navbar);