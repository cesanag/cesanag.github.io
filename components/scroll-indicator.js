class ScrollIndicator extends HTMLElement {
  constructor() {
    super();

    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (
        confetti({
          particleCount: 250,
          spread: 200,
          angle: 200,
          origin: { x: 0.97, y: 0 },
          disableForReducedMotion: true,
        })
      ) {
        confetti.reset();
      } else {
        return;
      }
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
      if (scrolled.toFixed() === "100") {
        document.getElementById("myDot").style.opacity = 1;
        confetti({
          particleCount: 250,
          spread: 200,
          angle: 200,
          origin: { x: 0.97, y: 0 },
          disableForReducedMotion: true,
        });
      } else {
        document.getElementById("myDot").style.opacity = 0;
      }
    }
  }

  connectedCallback() {
    this.innerHTML = `

<div class="progress-main">
  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>
      <div class="progress-dot" id="myDot"></div>
      <div id="my-canvas></canvas>
</div>
    `;
  }
}

customElements.define("scrollindicator-component", ScrollIndicator);
