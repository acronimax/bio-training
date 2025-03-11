const template = document.createElement("template");
template.innerHTML = `
<style>
 @property --grayOne {
  syntax: '<color>';
  initial-value: #cacaca;
  inherits: false;
}

@property --grayTwo {
  syntax: '<color>';
  initial-value: #f0f0f0;
  inherits: false;
}

a {
  color: #000;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 50px;
  background: linear-gradient(var(--grayOne), var(--grayTwo));
  transition: --grayOne 600ms, --grayTwo 600ms;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

a:hover {
  cursor: pointer;
  --grayOne: #f0f0f0;
  --grayTwo: #cacaca;
}
</style>
<a target="_blank" role="link" rel="noopener noreferrer"></a>
`;

class NeoLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const anchor =  this.shadowRoot.querySelector('a');
    const link = this.getAttribute("link") || "#";
    const text = this.getAttribute('text');
    anchor.setAttribute('href', link);
    anchor.append(text)

    console.log('shadows', this.shadowRoot.querySelector('a'));
  }
}

customElements.define("neo-link", NeoLink);
