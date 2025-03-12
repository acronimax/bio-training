const template = document.createElement("template");
template.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Atma&display=swap');

 @property --grayOne {
  syntax: '<color>';
  initial-value: #5b55b1;
  inherits: false;
}

@property --grayTwo {
  syntax: '<color>';
  initial-value: #6c65d3;
  inherits: false;
}

a {
  color: #000;
  font-family: "Atma", system-ui;
  font-weight: 400;
  font-style: normal;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 50px;
  background: linear-gradient(var(--grayOne), var(--grayTwo));
  transition: --grayOne 500ms, --grayTwo 500ms;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

a:hover {
  cursor: pointer;
  --grayOne: #6c65d3;
  --grayTwo: #5b55b1;
  color: #fff;
}
</style>
<a target="_blank" role="link" rel="noopener noreferrer">
  <slot></slot>
</a>
`;

class NeoLink extends HTMLElement {
  constructor() {
    super();
    const font = document.createElement("link");
    font.href = "https://fonts.googleapis.com/css2?family=Atma&display=swap";
    font.rel = "stylesheet"
    document.head.appendChild(font);
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const anchor =  this.shadowRoot.querySelector('a');
    const link = this.getAttribute("link") || "#";
    const label = this.getAttribute('label');
    anchor.setAttribute('href', link);
    anchor.setAttribute('aria-label', `Read more about ${label}`);
  }
}

customElements.define("neo-link", NeoLink);
