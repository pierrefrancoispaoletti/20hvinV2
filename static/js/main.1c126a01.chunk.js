(this["webpackJsonp20hvin-v2-frontend"]=this["webpackJsonp20hvin-v2-frontend"]||[]).push([[0],{56:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(18),i=n.n(c),s=(n(56),n(23)),r=n(4),o=n(100),l=n(102),p=n(30),u=n.n(p),g=n(2),h=function(e){var t=e.product,n=Object(a.useState)([]),c=Object(s.a)(n,2),i=c[0],p=c[1],h=Object(a.useState)(!1),d=Object(s.a)(h,2),j=(d[0],d[1]),m=Object(r.f)().category,f=function(e,t){return e.filter((function(e){return e.link.includes("https://20h20.fr/".concat(t,"/").concat(e.title.rendered.replace(/(-[0-9])/g,"").replace(/([\xe8\xe9])/g,"e").replace(/([\xe0\xc0])/g,"a").replace(/\s/g,"-").replace(/'/g,"").toLowerCase(),"/"))}))};return Object(a.useEffect)((function(){j(!0),u()({method:"get",url:"https://20h20.fr/wp-json/wp/v2/".concat(m,"?page=1"),params:{status:["publish"],per_page:"100",order:"asc"}}).then((function(e){e.headers["x-wp-totalpages"]<2?p(f(e.data,m)):u()({method:"get",url:"https://20h20.fr/wp-json/wp/v2/".concat(m,"?page=2"),params:{status:["publish"],per_page:"100",order:"asc"}}).then((function(t){return p(f(e.data,m).concat(f(t.data,m)))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})).finally((function(){return j(!1)}))}),[m]),Object(g.jsxs)(o.a,{children:[Object(g.jsx)(l.a,{variant:"h2",children:t}),i.sort((function(e,t){return t.meta.prix-e.meta.prix})).map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(l.a,{variant:"h5",style:{display:"flex",justifyContent:"space-between"},children:[e.title.rendered,Object(g.jsxs)(l.a,{variant:"body1",component:"span",children:[e.meta.prix,"\u20ac"]})]}),Object(g.jsx)(l.a,{variant:"body2",component:"p",children:e.content.rendered.replace(/<[^>]*>?/gm,"")})]})}))]})},d=n(103),j=n(27),m=[{categoryName:"pizzas",title:"Pizzas",tags:["Rouge","Blanche"],icon:"./assets/icons/pizza.png"},{categoryName:"pasta",title:"La Pasta",icon:"./20hvinV2/assets/icons/spaguetti.png"},{categoryName:"menu-enfant",title:"Menu Enfant",icon:"./20hvinV2/assets/icons/girl.png"},{categoryName:"cote-mer",title:"Cot\xe9 Mer",icon:"./20hvinV2/assets/icons/fish.png"},{categoryName:"pizzas-sucrees",title:"Pizzas sucr\xe9es",icon:"./20hvinV2/assets/icons/pizza-nutella.png"},{categoryName:"antipasti",title:"Antipasti",icon:"./20hvinV2/assets/icons/antipasto.png"},{categoryName:"douceur",title:"Nos Douceurs du Jour",icon:"./20hvinV2/assets/icons/cupcake.png"},{categoryName:"vins",title:"Vins",tags:["Rouge","Blanc","Ros\xe9","50cl","75cl","Au Verre","Magnum","Muscat"],icon:"./20hvinV2/assets/icons/wine.png"},{categoryName:"champagnes",title:"Champagnes",tags:["Brut","Blanc de Blancs","Ros\xe9","75cl","La Coupe","La Piscine","Magnum"],icon:"./20hvinV2/assets/icons/champagne.png"},{categoryName:"softs",title:"Softs",icon:"./20hvinV2/assets/icons/soft-drink.png"},{categoryName:"cocktails",title:"Cocktails",tags:["Avec Alcool","Sans Alcool"],icon:"./20hvinV2/assets/icons/cocktail.png"},{categoryName:"aperitifs",title:"Aperitifs",icon:"./20hvinV2/assets/icons/aperitive.png"},{categoryName:"digestifs",title:"Digestifs",icon:"./20hvinV2/assets/icons/cognac.svg"},{categoryName:"bieres",title:"Bi\xe8res",icon:"./20hvinV2/assets/icons/beer.png"}],f=function(e){var t=e.setProduct,n=Object(d.a)((function(e){return{nav:{overflowX:"auto",padding:"8px 0px",display:"flex"},ul:{padding:"0px 8px",margin:"auto",display:"flex",alignItems:"flex-start",listStyle:"none"},li:{width:"80px",alignItems:"center",display:"flex",flexDirection:"column",position:"relative"},imgWrapper:{height:"60px",width:"60px",position:"relative"},image:{height:"100%",width:"100%",borderRadius:"50%"},span:{lineHeight:"16px",fontSize:"14px",textAlign:"center",width:"100%"}}}))();return Object(g.jsx)("nav",{className:n.nav,children:Object(g.jsx)("ul",{className:n.ul,children:m.map((function(e){return Object(g.jsx)(j.b,{to:"/produits/".concat(e.categoryName),onClick:function(){return t(e.title)},children:Object(g.jsxs)("li",{className:n.li,children:[Object(g.jsx)("div",{className:n.imgWrapper,children:Object(g.jsx)("img",{className:n.image,src:e.icon,alt:e.categoryName})}),Object(g.jsx)("span",{className:n.span,children:e.title})]})},e.categoryName)}))})})},b=n(106),x=n(104),v=n(105),O=function(){var e=Object(d.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(2)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}))();return Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)(b.a,{position:"static",color:"transparent",children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(l.a,{variant:"h6",className:e.title,children:"Le 20HVin"}),Object(g.jsx)(v.a,{color:"inherit",children:"Me Connecter"})]})})})},y=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(O,{}),Object(g.jsx)(f,{setProduct:c}),Object(g.jsx)(r.c,{children:Object(g.jsx)(r.a,{path:"/produits/:category",children:Object(g.jsx)(h,{product:n})})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};i.a.render(Object(g.jsx)(j.a,{children:Object(g.jsx)(y,{})}),document.getElementById("root")),N()}},[[81,1,2]]]);
//# sourceMappingURL=main.1c126a01.chunk.js.map