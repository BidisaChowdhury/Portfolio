import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as store,s as state}from"./mutations2.js";import{d as defineCustomElement$2}from"./sc-icon2.js";const scCartIconCss=":host{display:block;--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}:host:focus-visible .cart{box-shadow:var(--focus-ring)}.cart{position:fixed;bottom:var(--sc-cart-icon-bottom, 30px);right:var(--sc-cart-icon-right, 30px);left:var(--sc-cart-icon-left, auto);top:var(--sc-cart-icon-top, auto);background:var(--sc-cart-icon-background, var(--sc-color-primary-500));border-radius:var(--sc-cart-icon-border-radius, var(--sc-input-border-radius-medium));width:var(--sc-cart-icon-width, 60px);height:var(--sc-cart-icon-height, 60px);color:var(--sc-cart-icon-color, var(--sc-color-primary-text, var(--sc-color-white)));font-family:var(--sc-cart-font-family, var(--sc-input-font-family));font-weight:var(--sc-font-weight-semibold);transition:opacity var(--sc-transition-medium) ease;box-shadow:var(--sc-shadow-small);cursor:pointer}.cart:hover{opacity:0.8}.cart__container{font-size:24px;position:relative;display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.cart__counter{position:absolute;top:-8px;left:auto;bottom:auto;right:-8px;font-size:12px;border-radius:var(--sc-cart-counter-border-radius, 9999px);color:var(--sc-cart-counter-color, var(--sc-color-white));background:var(--sc-cart-counter-background, var(--sc-color-gray-900));box-shadow:var(--sc-cart-icon-box-shadow, var(--sc-shadow-x-large));padding:4px 10px;line-height:18px;z-index:1}",ScCartIcon$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon="shopping-bag"}getItemsCount(){var t,o;const r=null===(o=null===(t=null==state?void 0:state.checkout)||void 0===t?void 0:t.line_items)||void 0===o?void 0:o.data;let e=0;return(r||[]).forEach((t=>{e+=null==t?void 0:t.quantity})),e}toggleCart(){return store.set("cart",{...store.state.cart,open:!store.state.cart.open})}render(){var t,o,r;return(null==state?void 0:state.checkout)&&0!==(null===(r=null===(o=null===(t=null==state?void 0:state.checkout)||void 0===t?void 0:t.line_items)||void 0===o?void 0:o.data)||void 0===r?void 0:r.length)?h("div",{class:{cart:!0},part:"base",onClick:()=>this.toggleCart(),onKeyDown:t=>{"Enter"!==(null==t?void 0:t.code)&&"Space"!==(null==t?void 0:t.code)||(this.toggleCart(),t.preventDefault())},tabIndex:0,role:"button","aria-label":store.state.cart.open?wp.i18n.__("Close Cart Floating Icon","surecart"):wp.i18n.sprintf(wp.i18n.__("Open Cart Floating Icon with %s items","surecart"),this.getItemsCount())},h("div",{class:"cart__container",part:"container"},h("div",{class:{cart__counter:!0}},this.getItemsCount()),h("slot",null,h("sc-icon",{exportparts:"base:icon__base",name:this.icon})))):null}static get style(){return scCartIconCss}},[1,"sc-cart-icon",{icon:[1]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-cart-icon","sc-icon"].forEach((t=>{switch(t){case"sc-cart-icon":customElements.get(t)||customElements.define(t,ScCartIcon$1);break;case"sc-icon":customElements.get(t)||defineCustomElement$2()}}))}const ScCartIcon=ScCartIcon$1,defineCustomElement=defineCustomElement$1;export{ScCartIcon,defineCustomElement};