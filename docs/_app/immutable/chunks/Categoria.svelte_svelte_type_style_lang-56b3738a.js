import{O as s}from"./index-02a6647b.js";const t=()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},n={subscribe(e){return t().page.subscribe(e)}};export{n as p};
