class HTMLBlankOpenAnchorElement extends HTMLAnchorElement{
  constructor(){
    super()
  }
  connectedCallback(){
    this.target="_blank"
    this.rel+=" noopener noreferrer"
  }
}
customElements.define('blank-a',HTMLBlankOpenAnchorElement,{extends:'a'})
