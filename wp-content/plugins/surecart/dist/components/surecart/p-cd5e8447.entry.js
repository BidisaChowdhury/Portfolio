import{r as t,h as r}from"./p-cc7ce8c7.js";const i=".product-item{text-decoration:none;padding-top:var(--sc-product-item-padding-top);padding-bottom:var(--sc-product-item-padding-bottom);padding-left:var(--sc-product-item-padding-left);padding-right:var(--sc-product-item-padding-right);margin-top:var(--sc-product-item-margin-top);margin-bottom:var(--sc-product-item-margin-bottom);margin-left:var(--sc-product-item-margin-left);margin-right:var(--sc-product-item-margin-right);border:solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);border-radius:var(--sc-product-item-border-radius);color:var(--sc-product-title-text-color);background-color:var(--sc-product-item-background-color);height:100%;box-sizing:border-box;display:grid}";const o=class{constructor(r){t(this,r);this.product=undefined;this.layoutConfig=undefined}render(){var t;return r("a",{href:(t=this.product)===null||t===void 0?void 0:t.permalink,class:{"product-item":true}},this.product&&(this.layoutConfig||[]).map((t=>{var i,o,d,c;const e=t.attributes||{};switch(t.blockName){case"surecart/product-item-title":return r("sc-product-item-title",{part:"title"},(i=this.product)===null||i===void 0?void 0:i.name);case"surecart/product-item-image":return r("sc-product-item-image",{part:"image",product:this.product,sizing:(o=t.attributes)===null||o===void 0?void 0:o.sizing});case"surecart/product-item-price":return r("sc-product-item-price",{part:"price",prices:(d=this.product)===null||d===void 0?void 0:d.prices.data,range:!!(e===null||e===void 0?void 0:e.range),metrics:(c=this.product)===null||c===void 0?void 0:c.metrics});default:return null}})))}};o.style=i;export{o as sc_product_item};
//# sourceMappingURL=p-cd5e8447.entry.js.map