(this.webpackJsonpphone_catalog=this.webpackJsonpphone_catalog||[]).push([[0],Array(21).concat([function(e,t,c){},,function(e,t,c){},,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(15),s=c.n(n),a=c(5),i=c(2),r=c(1),o=c.n(r),l=c(4),u=c(3),j=c.n(u),d=(c(21),c(0)),b=o.a.memo((function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],s=function(){window.scrollTo({top:0,behavior:"smooth"}),n(!1)};return Object(d.jsxs)("nav",{className:"nav header__nav",children:[Object(d.jsx)("button",{type:"button",className:j()("nav__burger-button",{"nav__burger-button--closed":c}),onClick:function(){return n(!c)},children:"Menu"}),Object(d.jsxs)("ul",{className:j()("nav__list",{"nav__list--is-visible":c}),children:[Object(d.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return j()("link","nav__link",{"link--is-selected":t})},onClick:s,children:"Home"}),Object(d.jsx)(a.c,{to:"/phones",className:function(e){var t=e.isActive;return j()("link","nav__link",{"link--is-selected":t})},onClick:s,children:"Phones"}),Object(d.jsx)(a.c,{to:"/tablets",className:function(e){var t=e.isActive;return j()("link","nav__link",{"link--is-selected":t})},onClick:s,children:"Tablets"}),Object(d.jsx)(a.c,{to:"/accessories",className:function(e){var t=e.isActive;return j()("link","nav__link",{"link--is-selected":t})},onClick:s,children:"Accessories"}),Object(d.jsxs)("div",{className:"nav__order-block",children:[Object(d.jsx)(a.c,{to:"/cart",className:function(e){var t=e.isActive;return j()("link","nav__link",{"link--is-selected":t})},onClick:s,children:"Cart"}),Object(d.jsx)(a.c,{to:"/favorites",className:function(e){var t=e.isActive;return j()("link","nav__link",{"link--is-selected":t})},onClick:s,children:"Favourites"})]})]})]})})),m=(c(23),c(16)),h=c.n(m),O=(c(35),function(){var e=Object(l.e)(),t=e.search,c=e.pathname,n=Object(a.d)(t),s=Object(i.a)(n,2),o=s[0],u=s[1],j=o.get("query")||"",b=Object(r.useState)(o.get("query")||""),m=Object(i.a)(b,2),O=m[0],p=m[1],_=Object(r.useCallback)(h()((function(e){e?o.set("query",e):o.delete("query"),u(o)}),500),[o,c]),x=function(){o.delete("query"),p("")};return Object(r.useEffect)((function(){t.includes("query")?(p(j),_(j)):x()}),[c]),Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{type:"text",className:"search__input",value:O,onChange:function(e){p(e.target.value),_(e.target.value)},placeholder:"Search in ".concat(c.slice(1),"...")}),O&&Object(d.jsx)("button",{className:"search__button",type:"button",onClick:x,children:"Clear input"})]})}),p=o.a.memo((function(e){var t=e.quantity,c=e.favorites,n=Object(r.useState)(!1),s=Object(i.a)(n,2),o=s[0],u=s[1],m=Object(l.e)().pathname;return Object(r.useEffect)((function(){switch(m){case"/phones":case"/tablets":case"/accessories":case"/favorites":u(!0);break;default:u(!1)}}),[m]),Object(d.jsx)("header",{className:"header App__header",id:"header",children:Object(d.jsxs)("div",{className:"header__nav-block",children:[Object(d.jsxs)("div",{className:"navbar header__navbar",children:[Object(d.jsx)("div",{className:"logo-box header__logo-box logo-box--header",children:Object(d.jsx)(a.b,{to:"/",className:"logo"})}),!m.includes("/cart")&&Object(d.jsx)(b,{})]}),Object(d.jsxs)("div",{className:"order-info header__order-info",children:[o&&Object(d.jsx)("div",{className:"header__search-block",children:Object(d.jsx)(O,{})}),!m.includes("/cart")&&Object(d.jsx)(a.c,{to:"/favorites",className:function(e){var t=e.isActive;return j()("order-info__link",{"order-info__link--is-selected":t})},children:Object(d.jsx)("span",{className:"order-info__item order-info__item--bg-favourites",children:c>0&&Object(d.jsx)("span",{className:"order-info__count",children:c})})}),Object(d.jsx)(a.c,{to:"/cart",className:function(e){var t=e.isActive;return j()("order-info__link",{"order-info__link--is-selected":t})},children:Object(d.jsx)("span",{className:"order-info__item order-info__item--bg-cart",children:t>0&&Object(d.jsx)("span",{className:"order-info__count",children:t})})})]})]})})})),_=(c(36),o.a.memo((function(){return Object(d.jsx)("footer",{className:"footer App__footer",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"footer__nav",children:[Object(d.jsx)("div",{className:"logo-box footer__logo-box",children:Object(d.jsx)(a.b,{to:"/",className:"logo footer__logo"})}),Object(d.jsx)("div",{className:"nav-item footer__nav-item",children:Object(d.jsx)("a",{href:"https://github.com/IvanShulhan",className:"link nav-item__link",children:"github"})}),Object(d.jsx)("div",{className:"nav-item footer__nav-item",children:Object(d.jsxs)("button",{type:"button",className:"link footer__link",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:[Object(d.jsx)("p",{className:"nav-item__link-text",children:"Back to top"}),Object(d.jsx)("span",{className:"icon-box nav-item__icon-box",id:"back-to-top",children:Object(d.jsx)("span",{className:"icon nav-item__icon"})})]})})]})})})}))),x=(c(37),function(){var e=["01","02","03","04"],t=Object(r.useState)(0),c=Object(i.a)(t,2),n=c[0],s=c[1],a=function(){n>=e.length-1?s(0):s((function(e){return e+1}))};return Object(r.useEffect)((function(){var e=setInterval(a,5e3);return function(){clearInterval(e)}}),[n]),Object(d.jsx)("div",{className:"banner home-page__banner",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"banner__content",children:[Object(d.jsxs)("div",{className:"banner-inner banner__banner-inner",children:[Object(d.jsx)("button",{type:"button",className:"banner-inner__button",onClick:function(){s(n>0?function(e){return e-1}:e.length-1)},children:Object(d.jsx)("span",{className:"icon banner-inner__button-icon icon--left"})}),Object(d.jsx)("div",{className:"banner-inner__wrapper",children:Object(d.jsx)("img",{src:"./img/banners/banner".concat(e[n],".png"),alt:"banner",className:"banner-inner__image"})}),Object(d.jsx)("button",{type:"button",className:"banner-inner__button",onClick:a,children:Object(d.jsx)("span",{className:"icon banner-inner__button-icon"})})]}),Object(d.jsx)("ul",{className:"banner__pagination",children:e.map((function(e,t){return Object(d.jsx)("li",{className:"banner__pagination-item",children:Object(d.jsx)("button",{type:"button",className:j()("banner__pagination-button",{"banner__pagination-button--is-active":t===n}),onClick:function(){s(t)},children:"Click to change the picture"})},e)}))})]})})})}),f=(c(38),function(e){var t=e.length,c=e.indexOfStart,n=e.numberOfItems,s=e.setIndexOfStart;return Object(d.jsxs)("div",{className:"pagination",children:[Object(d.jsx)("button",{type:"button",className:j()("pagination-button",{"pagination-button--is-disabled":0===c}),onClick:function(){s(c-1)},children:Object(d.jsx)("div",{className:"icon-box pagination__icon-box",children:Object(d.jsx)("span",{className:j()("icon","icon--left",{"icon--is-disabled":0===c})})})}),Object(d.jsx)("button",{type:"button",className:j()("pagination-button",{"pagination-button--is-disabled":c===t-n}),onClick:function(){s(c+1)},children:Object(d.jsx)("div",{className:"icon-box pagination__icon-box",children:Object(d.jsx)("span",{className:j()("icon",{"icon--is-disabled":c===t-n})})})})]})}),g=c(10),v=c(9),N=(c(39),function(e){var t=e.isLarge,c=e.product,n=JSON.parse(localStorage.getItem("favouritesItems")||"[]").some((function(e){return e.id===c.id})),s=JSON.parse(localStorage.getItem("cartItems")||"[]").some((function(e){return e.id===c.id})),a=Object(r.useContext)(W),i=a.quantity,o=a.setQuantity,l=a.favoriteCount,u=a.setFavouriteCount;return Object(d.jsxs)("div",{className:"control-block",children:[Object(d.jsx)("button",{type:"button",className:j()("button","control-block__button",{"button--is-active":s,"button--is-large":t}),onClick:function(){var e=JSON.parse(localStorage.getItem("cartItems")||"[]");if(e.some((function(e){return e.id===c.id}))){localStorage.setItem("cartItems",JSON.stringify(e.filter((function(e){return e.id!==c.id}))));var t=e.find((function(e){return e.id===c.id}));t&&o(i-t.quantity)}else localStorage.setItem("cartItems",JSON.stringify([].concat(Object(v.a)(e),[{id:c.id,quantity:1,product:c}]))),o(i+1)},children:"Add to cart"}),Object(d.jsx)("button",{type:"button",className:" control-block__button control-block__button--is-transparent",onClick:function(){var e=JSON.parse(localStorage.getItem("favouritesItems")||"[]");e.some((function(e){return e.id===c.id}))?(localStorage.setItem("favouritesItems",JSON.stringify(e.filter((function(e){return e.id!==c.id})))),u(l-1)):(localStorage.setItem("favouritesItems",JSON.stringify([].concat(Object(v.a)(e),[Object(g.a)({},c)]))),u(l+1))},children:Object(d.jsx)("div",{className:j()("icon-box","icon-box--is-big",{"icon-box--is-large":t}),children:Object(d.jsx)("span",{className:j()("icon","icon--heart",{"icon--heart-selected":n})})})})]})}),y=(c(40),function(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(d.jsxs)("li",{className:j()("description__item",{"description__item--large-font-size":c}),children:[Object(d.jsx)("span",{className:"description__char",children:e}),Object(d.jsx)("span",{className:"description__value",children:t||"-"})]})}),k=function(e){var t=e.screen,c=e.capacity,n=e.ram;return Object(d.jsxs)("ul",{className:"description",children:[y("Screen",t),y("Capacity",c),y("RAM",n)]})},S=(c(41),function(e){var t=e.price,c=e.discount,n=e.isBig,s=e.border;return Object(d.jsx)("div",{className:j()("price-block",{"price-block--border-none":!s}),children:c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{className:j()("price-block__price",{"price-block__price--is-big":n}),children:[Math.ceil(t-t/c),"$"]}),Object(d.jsxs)("span",{className:" price-block__price price-block__price--is-old",children:[t,"$"]})]}):Object(d.jsxs)("span",{className:j()("price-block__price",{"price-block__price--is-big":n}),children:[t,"$"]})})}),C=(c(42),o.a.memo((function(e){var t=e.product;return Object(d.jsxs)("div",{className:"product-card",children:[Object(d.jsx)(a.b,{to:"/".concat(t.type,"s/").concat(t.id),className:"product-card__image-box",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(d.jsx)("img",{src:t.imageUrl,alt:t.type,className:"product-card__image"})}),Object(d.jsx)("h3",{className:"product-card__title",children:t.name}),Object(d.jsx)("div",{className:"product-card__price-box",children:Object(d.jsx)(S,{price:t.price,discount:t.discount,isBig:!1,border:!0})}),Object(d.jsx)("div",{className:"product-card__description-box",children:Object(d.jsx)(k,{screen:t.screen,capacity:t.capacity,ram:t.ram})}),Object(d.jsx)("div",{className:"product-card__control-box",children:Object(d.jsx)(N,{product:t,isLarge:!1})})]})}))),I=(c(43),o.a.memo((function(e){var t=e.title,c=e.products,n=Object(r.useState)(0),s=Object(i.a)(n,2),a=s[0],o=s[1],l=Object(r.useState)(4),u=Object(i.a)(l,2),j=u[0],b=u[1],m=function(){var e=window.visualViewport.width;switch(!0){case e>990:b(4);break;case e<=990&&e>768:b(3);break;case e<=768&&e>475:b(2);break;default:b(1)}};return Object(r.useLayoutEffect)((function(){window.addEventListener("resize",m)}),[]),Object(d.jsx)("div",{className:"product-slider",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"block-header product-slider__block-header",children:[Object(d.jsx)("h2",{className:"title product-slider__title",children:t}),Object(d.jsx)(f,{length:c.length,indexOfStart:a,setIndexOfStart:o,numberOfItems:j})]}),Object(d.jsx)("div",{className:"product-slider__inner",children:Object(d.jsx)("ul",{className:"product-slider__list",children:c.slice(a,a+j).map((function(e){return Object(d.jsx)("li",{className:"product-slider__list-item",children:Object(d.jsx)(C,{product:e})},e.id)}))})})]})})}))),w=(c(44),o.a.memo((function(e){var t=e.title,c=e.quantity;return Object(d.jsxs)("div",{className:"category-column shop-by-category__category-column",children:[Object(d.jsx)(a.b,{to:"/".concat(t),className:"category-column__link",children:Object(d.jsx)("img",{src:"./img/category/".concat(t,".png"),alt:t,className:"category-column__image"})}),Object(d.jsxs)("div",{className:"category-column__info",children:[Object(d.jsx)("h4",{className:"category-column__title",children:t}),Object(d.jsx)("span",{className:"category-column__count",children:c?"".concat(c," models"):""})]})]})}))),q=function(e){return fetch("".concat("https://mate-academy.github.io/react_phone-catalog/api/products").concat(e)).then((function(e){if(!e.ok)throw new Error("Something wrong...");return e.json()}))},A=function(){return q(".json")},P=(c(45),function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){A().then(n)}),[]);var s=function(e){return c.filter((function(t){return t.type===e}))},a=Object(r.useMemo)((function(){return s("phone").length}),[c]),o=Object(r.useMemo)((function(){return s("tablet").length}),[c]),l=Object(r.useMemo)((function(){return s("accessories").length}),[c]);return Object(d.jsx)("section",{className:"shop-by-category home-page__shop-by-category",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"block-header shop-by-category__block-header",children:Object(d.jsx)("h2",{className:"title shop-by-category__title",children:"Shop by category"})}),Object(d.jsxs)("div",{className:"shop-by-category__columns",children:[Object(d.jsx)(w,{title:"phones",quantity:a}),Object(d.jsx)(w,{title:"tablets",quantity:o}),Object(d.jsx)(w,{title:"accessories",quantity:l})]})]})})}),M=(c(46),o.a.memo((function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)([]),a=Object(i.a)(s,2),o=a[0],l=a[1];return Object(r.useEffect)((function(){A().then((function(e){return e.filter((function(e){return e.discount>0})).sort((function(e,t){return t.price*(t.discount/100)-e.price*(e.discount/100)}))})).then(n),A().then((function(e){return e.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}))})).then(l)}),[]),Object(d.jsxs)("div",{className:"home-page",children:[Object(d.jsx)(x,{}),Object(d.jsx)("section",{className:"hot-prices home-page__hot-prices",children:Object(d.jsx)(I,{title:"Hot prices",products:c})}),Object(d.jsx)(P,{}),Object(d.jsx)("section",{className:"brand-new home-page__brand-new",children:Object(d.jsx)(I,{title:"Brand new models",products:o})})]})}))),J=(c(47),o.a.memo((function(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("div",{className:"loader__content"})})}))),E=function(e){var t=e.title,c=e.value,n=e.params,s=e.searchParam,a=e.onChange;return Object(d.jsxs)("div",{className:"products__control",children:[Object(d.jsx)("h4",{className:"products__control-title",children:t}),Object(d.jsx)("select",{className:"products__select",value:c,onChange:function(e){return a(s,e)},children:Object.entries(n).map((function(e){return Object(d.jsx)("option",{value:e[0],className:"products__select-option",children:e[1]},e[0])}))})]})},T=(c(48),function(e){var t=e.pages,c=e.currentPage,n=e.onChangeSearchParams;return Object(d.jsxs)("div",{className:"page-pagination",children:[Object(d.jsx)("button",{type:"button",className:j()("pagination-button",{"pagination-button--is-disabled":1===c}),onClick:function(){n("page",c-1),n("perPage",t.length)},children:Object(d.jsx)("div",{className:"icon-box page-pagination__icon-box",children:Object(d.jsx)("span",{className:j()("icon","icon--left",{"icon--is-disabled":1===c})})})}),t.map((function(e){return Object(d.jsx)("div",{className:j()("page-pagination__box",{"page-pagination__box--is-selected":e===c}),children:e},e)})),Object(d.jsx)("button",{type:"button",className:j()("pagination-button",{"pagination-button--is-disabled":c===t[t.length-1]}),onClick:function(){n("page",c+1),n("perPage",t.length)},children:Object(d.jsx)("div",{className:"icon-box page-pagination__icon-box",children:Object(d.jsx)("span",{className:j()("icon","icon--right",{"icon--is-disabled":c===t[t.length-1]})})})})]})}),F=(c(49),function(e){var t=e.products;return Object(d.jsx)("ul",{className:"list",children:t.map((function(e){return Object(d.jsx)("li",{className:"list__item",children:Object(d.jsx)(C,{product:e})},e.id)}))})}),B=(c(50),{age:"Newest",name:"Alphabetically",price:"Cheapest"}),L={all:"All",4:4,8:8,16:16},Q=function(e){var t=e.products,c=Object(l.e)().search,n=Object(a.d)(c),s=Object(i.a)(n,2),o=s[0],u=s[1],j=o.get("sort")||"age",b=o.get("page")||1,m=o.get("itemsOnPage")||"all",h=Math.ceil(t.length/+m),O=Object(r.useMemo)((function(){return Array.from({length:h},(function(e,t){return t+1}))}),[h]),p=Object(r.useMemo)((function(){var e=t.sort((function(e,t){switch(j){case"age":return e.age-t.age;case"name":return e.name.localeCompare(t.name);default:return e.price-t.price}})),c=(+b-1)*+m,n=+b*+m;return"all"===m?e:e.slice(c,n)}),[t,o,m,b]),_=function(e,t){o.set(e,t.target.value),o.set("page","1"),o.delete("page"),o.delete("perPage"),u(o)};return Object(d.jsxs)("div",{className:"products",children:[Object(d.jsxs)("div",{className:"products__controls",children:[Object(d.jsx)(E,{title:"Sort by",value:j,searchParam:"sort",params:B,onChange:_}),Object(d.jsx)(E,{title:"Items on page",value:m,searchParam:"itemsOnPage",params:L,onChange:_})]}),Object(d.jsx)("div",{className:"products__list-box",children:Object(d.jsx)(F,{products:p})}),+m<t.length&&Object(d.jsx)("div",{className:"products__footer",children:Object(d.jsx)(T,{pages:O,currentPage:+b,onChangeSearchParams:function(e,t){o.set(e,t.toString()),u(o)}})})]})},$=(c(51),o.a.memo((function(e){var t=e.title,c=e.subtitle;return Object(d.jsx)("div",{className:"page-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"page-header__content",children:[Object(d.jsx)(a.b,{to:"/",className:"page-header__icon",children:"icon"}),Object(d.jsx)("span",{className:"page-header__arrow",children:"arrow"}),Object(d.jsx)("h4",{className:j()("page-header__title",{"page-header__title--with-subtitle":c}),children:c?Object(d.jsx)(a.b,{className:"page-header__title-link",to:"/".concat(t),children:t}):Object(d.jsx)("span",{className:"page-header__title",children:t})}),c&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"page-header__arrow",children:"arrow"}),Object(d.jsx)("h4",{className:"page-header__title",children:c})]})]})})})}))),R=(c(52),o.a.memo((function(){return Object(d.jsx)("div",{className:"no-search-result",children:Object(d.jsx)("h3",{className:"no-search-result__title",children:"There are no products matching the query"})})}))),z=(c(53),function(e,t){var c,n=null===(c=t.get("query"))||void 0===c?void 0:c.toLowerCase();return n?e.filter((function(e){return e.name.toLowerCase().includes(n)})):Object(v.a)(e)}),H=function(e){var t=e.favouriteCount,c=Object(r.useState)([]),n=Object(i.a)(c,2),s=n[0],o=n[1],l=Object(a.d)(),u=Object(i.a)(l,1)[0],j=Object(r.useMemo)((function(){return z(s,u)}),[u,s]);return Object(r.useEffect)((function(){localStorage.getItem("favouritesItems")&&o(JSON.parse(localStorage.getItem("favouritesItems")||""))}),[t]),Object(d.jsxs)("section",{className:"favourites-page",children:[Object(d.jsx)($,{title:"Favourites"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"title favourites-page__title",children:"Favourites"}),t?Object(d.jsx)("div",{className:"favourites-page__content",children:0===j.length?Object(d.jsx)(R,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{className:"favourites-page__subtitle",children:"".concat(j.length," ").concat(j.length>1?"items":"item")}),Object(d.jsx)("div",{className:"favourites-page__list-box",children:Object(d.jsx)(F,{products:j})})]})}):Object(d.jsx)("h3",{className:"info-text favourites-page__info-text",children:"No products marked as favorites"})]})]})},U=(c(54),function(e){var t=e.type,c=Object(r.useState)(!0),n=Object(i.a)(c,2),s=n[0],o=n[1],l=Object(r.useState)([]),u=Object(i.a)(l,2),j=u[0],b=u[1],m=Object(a.d)(),h=Object(i.a)(m,1)[0],O=Object(r.useMemo)((function(){return z(j,h)}),[h,j]);return Object(r.useEffect)((function(){switch(t){case"Phones":A().then((function(e){return e.filter((function(e){return"phone"===e.type}))})).then(b).then((function(){return o(!1)}));break;case"Tablets":A().then((function(e){return e.filter((function(e){return"tablet"===e.type}))})).then(b).then((function(){return o(!1)}));break;case"Accessories":A().then((function(e){return e.filter((function(e){return"accessorie"===e.type}))})).then(b).then((function(){return o(!1)}))}}),[t]),Object(d.jsxs)("div",{className:"products-page",children:[Object(d.jsx)("div",{className:"products-page__top",children:Object(d.jsx)($,{title:t})}),Object(d.jsx)("section",{className:"products-page__content",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"title products-page__title",children:t}),j.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"products-page__item-quantity",children:"".concat(O.length," ").concat(O.length>1?" models":" model")}),s&&Object(d.jsx)(J,{}),O.length>0?Object(d.jsx)(Q,{products:O}):Object(d.jsx)(R,{})]}):Object(d.jsx)("h3",{className:"info-text favourites-page__info-text",children:"There are no products in this category yet"})]})})]})}),D=(c(55),function(e){var t=e.product,c=Object(r.useState)(0),n=Object(i.a)(c,2),s=n[0],a=n[1];return Object(d.jsxs)("div",{className:"galery",children:[Object(d.jsx)("ul",{className:"galery__list",children:t.images.slice(0,5).map((function(e,c){return Object(d.jsx)("li",{className:"galery__list-item",children:Object(d.jsx)("button",{type:"button",className:j()("galery__list-item-button",{"galery__list-item-button--is-selected":s===c}),onClick:function(){return a(c)},children:Object(d.jsx)("img",{src:e,alt:t.type,className:"galery__image"})})},e)}))}),Object(d.jsx)("div",{className:"galery__selected-image-box",children:Object(d.jsx)("img",{className:"galery__selected-image",src:t.images[s],alt:t.type})})]})}),V=(c(56),o.a.memo((function(){return Object(d.jsxs)("button",{type:"button",className:"back-button",onClick:function(){window.history.back(),window.scrollTo({top:0,behavior:"smooth"})},children:[Object(d.jsx)("span",{className:"back-button__icon"}),"Back"]})}))),Y=(c(57),function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(),a=Object(i.a)(s,2),o=a[0],u=a[1],j=Object(r.useState)(),b=Object(i.a)(j,2),m=b[0],h=b[1],O=Object(r.useState)([]),p=Object(i.a)(O,2),_=p[0],x=p[1],f=Object(l.g)().productId,g=Object(l.e)().pathname.split("/")[1].slice(0,-1);return Object(r.useEffect)((function(){var e;A().then((function(e){return e.find((function(e){return e.id===f}))})).then(u),(e=f,q("/".concat(e,".json"))).then(h).then((function(){return n(!1)})),A().then((function(e){return e.sort((function(){return Math.random()-.5}))})).then(x)}),[f]),Object(d.jsx)(d.Fragment,{children:m&&o?Object(d.jsxs)("section",{className:"product-details",children:[Object(d.jsxs)("div",{className:"product-details__top",children:[Object(d.jsx)($,{title:"".concat(o.type,"s"),subtitle:m.name}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"product-details__nav-button",children:Object(d.jsx)(V,{})})})]}),Object(d.jsxs)("div",{className:"product-details__content",children:[Object(d.jsxs)("div",{className:"container",children:[c&&Object(d.jsx)(J,{}),Object(d.jsx)("h2",{className:"title product-details__title",children:m.name}),Object(d.jsxs)("div",{className:"product-details__columns",children:[Object(d.jsx)("div",{className:"column product-details__column",children:Object(d.jsx)(D,{product:m})}),Object(d.jsxs)("div",{className:"column product-details__column",children:[Object(d.jsxs)("div",{className:"product-info column__product-info",children:[Object(d.jsx)("div",{className:"product-info__variables"}),Object(d.jsxs)("div",{className:"order-block product-info__order-block",children:[Object(d.jsx)("div",{className:"order-block__price-box",children:Object(d.jsx)(S,{price:o.price,discount:o.discount,isBig:!0,border:!1})}),Object(d.jsx)("div",{className:"order-block__control-box",children:Object(d.jsx)(N,{isLarge:!0,product:o})})]}),Object(d.jsx)("div",{className:"info-box product-info__info-box",children:Object(d.jsx)(k,{screen:o.screen,capacity:o.capacity,ram:o.ram})})]}),Object(d.jsxs)("span",{className:"column__product-id",children:["ID:",m.id]})]}),Object(d.jsxs)("div",{className:"column product-details__column",children:[Object(d.jsx)("h3",{className:"column__title",children:"About"}),Object(d.jsx)("p",{className:"column__about-text",children:m.description})]}),Object(d.jsxs)("div",{className:"column product-details__column",children:[Object(d.jsx)("h3",{className:"column__title",children:"Tech specs"}),Object(d.jsxs)("ul",{className:"description column__description",children:[y("Screen",m.display.screenSize,!0),y("Resolution",m.display.screenResolution,!0),y("Processor",m.hardware.cpu,!0),y("RAM",m.storage.ram,!0),y("Build in memory",m.storage.flash,!0),y("Camera",m.camera.primary,!0),y("Cell",m.connectivity.cell,!0)]})]})]})]}),Object(d.jsx)(I,{title:"You may also like",products:_})]})]}):Object(d.jsx)("h3",{className:"info-text product-details__info-text",children:"".concat(g," was not found")})})}),G=(c(58),o.a.memo((function(e){var t=e.productQuantity,c=e.onChangeQuantity,n=Object(r.useState)(!1),s=Object(i.a)(n,2),a=s[0],o=s[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),b=u[0],m=u[1],h=Object(r.useMemo)((function(){return JSON.parse(localStorage.getItem("cartItems")||"")}),[a]),O=Object(r.useMemo)((function(){return h.reduce((function(e,t){var c=t.quantity,n=t.product,s=n.discount,a=n.price;return s?e+c*Math.ceil(a-a/s):e+c*a}),0)}),[h]);Object(r.useEffect)((function(){var e=h.reduce((function(e,t){return e+t.quantity}),0);c(e)}),[h]);var p=function(e,t){localStorage.setItem("cartItems",JSON.stringify(h.map((function(c){return c.id===e?Object(g.a)(Object(g.a)({},c),{},{quantity:"plus"===t?c.quantity+1:c.quantity-1}):c})))),c((function(e){return"plus"===t?e+1:e-1})),o(!a)};return Object(d.jsx)("section",{className:"cart-page",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"cart-page__back-button",children:Object(d.jsx)(V,{})}),Object(d.jsx)("h2",{className:"title cart-page__title",children:"Cart"}),h.length?Object(d.jsxs)("div",{className:"cart-page__columns",children:[Object(d.jsx)("div",{className:"cart-page__column",children:Object(d.jsx)("ul",{className:"cart-page__cards",children:h.map((function(e){var t=e.product;return Object(d.jsxs)("li",{className:"card cart-page__card",children:[Object(d.jsx)("button",{className:"card__button",type:"button",onClick:function(){return t=e.id,localStorage.setItem("cartItems",JSON.stringify(h.filter((function(e){return e.id!==t})))),void o(!a);var t},children:Object(d.jsx)("span",{className:"card__button-icon"})},e.id),Object(d.jsx)("img",{src:t.imageUrl,alt:t.type,className:"card__image"}),Object(d.jsx)("h3",{className:"card__title",children:t.name}),Object(d.jsxs)("div",{className:"card__count-box",children:[Object(d.jsx)("button",{className:j()("count-button","card__count-button",{"count-button--is-disabled":1===e.quantity}),type:"button",onClick:function(){return p(e.id,"minus")},children:Object(d.jsx)("span",{className:" count-button__icon count-button__icon--minus"})}),Object(d.jsx)("span",{className:"card__count",children:e.quantity}),Object(d.jsx)("button",{className:"count-button card__count-button",type:"button",onClick:function(){return p(e.id,"plus")},children:Object(d.jsx)("span",{className:" count-button__icon count-button__icon--plus"})})]}),Object(d.jsx)("div",{className:"card__price-box",children:Object(d.jsxs)("span",{className:"card__price",children:["$",t.discount?Math.ceil(t.price-t.price/t.discount)*e.quantity:t.price*e.quantity]})})]},e.id)}))})}),Object(d.jsx)("div",{className:"cart-page__column",children:Object(d.jsxs)("div",{className:"order-box cart-page__order-box",children:[Object(d.jsxs)("div",{className:"order-box__price",children:["$",O]}),Object(d.jsx)("span",{className:"order-box__text",children:"Total for ".concat(t," ").concat(t>1?"items":"item")}),Object(d.jsx)("button",{type:"button",className:"button button--is-large order-box__button",onClick:function(){m(!0),setTimeout((function(){m(!1)}),3e3)},children:"Checkout"}),Object(d.jsx)("span",{className:"order-box__message",children:b&&"This functionality is not implemented yet"})]})})]}):Object(d.jsx)("h3",{className:"info-text cart-page__info-text",children:"No products added to cart"})]})})}))),K=(c(59),o.a.memo((function(){return Object(d.jsx)("div",{className:"not-found-page",children:Object(d.jsx)("h3",{className:"info-text product-details__info-text",children:"Page not found"})})}))),W=o.a.createContext({quantity:0,setQuantity:function(){},favoriteCount:0,setFavouriteCount:function(){}}),X=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")||"").reduce((function(e,t){return e+t.quantity}),0):0,Z=localStorage.getItem("favouritesItems")?JSON.parse(localStorage.getItem("favouritesItems")||"").length:0,ee=function(){var e=Object(r.useState)(X),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(Z),a=Object(i.a)(s,2),o=a[0],u={quantity:c,setQuantity:n,favoriteCount:o,setFavouriteCount:a[1]};return Object(d.jsxs)("div",{className:"wrapper App",children:[Object(d.jsx)(p,{quantity:c,favorites:o}),Object(d.jsx)(W.Provider,{value:u,children:Object(d.jsx)("main",{className:"main App__main",children:Object(d.jsx)("div",{className:"main__content",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(M,{})}),Object(d.jsx)(l.a,{path:"/phones",element:Object(d.jsx)(U,{type:"Phones"})}),Object(d.jsx)(l.a,{path:"/phones/:productId",element:Object(d.jsx)(Y,{})}),Object(d.jsx)(l.a,{path:"/tablets",element:Object(d.jsx)(U,{type:"Tablets"})}),Object(d.jsx)(l.a,{path:"/tablets/:productId",element:Object(d.jsx)(Y,{})}),Object(d.jsx)(l.a,{path:"/accessories",element:Object(d.jsx)(U,{type:"Accessories"})}),Object(d.jsx)(l.a,{path:"/accessories/:productId",element:Object(d.jsx)(Y,{})}),Object(d.jsx)(l.a,{path:"/cart",element:Object(d.jsx)(G,{productQuantity:c,onChangeQuantity:n})}),Object(d.jsx)(l.a,{path:"/favorites",element:Object(d.jsx)(H,{favouriteCount:o})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)(K,{})})]})})})}),Object(d.jsx)(_,{})]})};s.a.render(Object(d.jsx)(a.a,{children:Object(d.jsx)(ee,{})}),document.getElementById("root"))}]),[[60,1,2]]]);
//# sourceMappingURL=main.4aade153.chunk.js.map