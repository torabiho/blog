(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{50:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},91:function(e){e.exports=JSON.parse('{"fa":"\u0641\u0627","Gallery-toolbar-search-placeholder":"Search for posts","header-main-title":"Colourful code writer","header-sub-title":"...and expert in all other stuff","home":"Home","page2":"Page 2","welcome":"Welcome, {{username}}","change-username":"Change your username:","submit":"Submit","this-is-page2":"This is <strong>page 2</strong>","go-to-home":"Go to <0>the home page</0>","go-to-page2":"Click <0>here</0> to go to page 2, {{username}}"}')},92:function(e){e.exports=JSON.parse('{"home":"Casa","page2":"P\xe1gina 2","welcome":"Bienvenido {{username}}","change-username":"Cambia tu nombre de usuario:","submit":"Enviar","this-is-page2":"Esta es la <strong>p\xe1gina 2</strong>","go-to-home":"Ir a la <0>pagina principal</0>","go-to-page2":"Haga clic <0>aqu\xed</0> para ir a la p\xe1gina 2, {{username}}"}')},93:function(e){e.exports=JSON.parse('{"en":"En","Gallery-toolbar-search-placeholder":"\u062c\u0633\u062a\u062c\u0648","header-main-title":"\u0646\u0648\u06cc\u0633\u0646\u062f\u0647\u200c\u06cc \u06a9\u062f\u0647\u0627\u06cc \u0631\u0646\u06af\u06cc","header-sub-title":"\u0648\u06cc \u062f\u0631 \u0633\u0627\u06cc\u0631 \u0627\u0645\u0648\u0631 \u0646\u06cc\u0632 \u0646\u0638\u0631\u0627\u062a\u06cc \u062f\u0627\u0634\u062a","home":"\u0635\u0641\u062d\u0647\u200c\u06cc \u0627\u0648\u0644","page2":"\u0635\u0641\u062d\u0647\u200c\u06cc \u062f\u0648\u0645","page3":"\u0635\u0641\u062d\u0647\u200c\u06cc \u0633\u0648\u0645","page4":"\u0635\u0641\u062d\u0647\u200c\u06cc \u0686\u0647\u0627\u0631\u0645","page5":"\u0635\u0641\u062d\u0647\u200c\u06cc \u067e\u0646\u062c\u0645","welcome":"\u062e\u0648\u0634 \u0622\u0645\u062f\u06cc {{username}}","change-username":"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u062f","submit":"\u0627\u0631\u0633\u0627\u0644","this-is-page2":"\u0627\u06cc\u0646 <strong>\u0635\u0641\u062d\u0647\u200c\u06cc \u06f2</strong> \u0627\u0633\u062a","go-to-home":"\u0628\u0631\u0648 \u0628\u0647 <0>\u0635\u0641\u062d\u0647\u200c\u06cc \u0646\u062e\u0633\u062a</0>","go-to-page2":"{{username}}\u060c <0>\u0627\u06cc\u0646\u062c\u0627</0> \u06a9\u0644\u06cc\u06a9 \u06a9\u0646 \u062a\u0627 \u0628\u0647 \u0635\u0641\u062d\u0647\u200c\u06cc \u06f2 \u0628\u0631\u0648\u06cc"}')},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(38),s=n.n(c),i=n(13),r=n(2),o=n(4),l=n(39),u=(n(50),n(1)),j=function(e){return"fa"===e?"en":"fa"},b=function(){var e=Object(l.a)(),t=e.t,n=e.i18n;return Object(u.jsx)("div",{className:"language-switch",children:Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",checked:"fa"===n.language,onChange:function(){var e=j(n.language);n.changeLanguage(e),document.documentElement.lang=e}}),Object(u.jsx)("span",{className:"slider",children:t(j(n.language))})]})})},h=(n(57),[{title:"home",link:"/"},{title:"page2",link:"/page2"},{title:"page3",link:"/page3"},{title:"page4",link:"/page4"},{title:"page5",link:"/page5"}]),d=function(){var e=Object(l.a)().t,t=Object(r.f)().pathname,n=Object(a.useState)(!1),c=Object(o.a)(n,2),s=c[0],j=c[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("nav",{className:"menu-container",children:[Object(u.jsx)("input",{id:"click-reciever",type:"checkbox",checked:s,onChange:function(){return j((function(e){return!e}))}}),Object(u.jsx)("span",{className:"hamburger"}),Object(u.jsx)("span",{className:"hamburger"}),Object(u.jsx)("span",{className:"hamburger"}),Object(u.jsx)("ul",{className:"menu__list",children:h.map((function(n,a){return Object(u.jsx)("li",{className:"menu__item ".concat(t===n.link&&"menu__item--current"),children:Object(u.jsx)(i.b,{to:n.link,className:"menu__link",onClick:function(){return j(!1)},children:e(n.title)})},a)}))})]})]})},g=(n(66),n(18)),p=n.n(g),m=n(24),O=n(96),x=n(25),f=n.n(x),v=n.p+"static/media/stamp.5abcd315.png",w=n.p+"static/media/headerBg.3bb3e112.png",k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){var t=window.matchMedia(e);t.matches!==c&&s(t.matches);var n=function(){return s(t.matches)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[c,e]),c},N=(n(87),"active"),S="listView",_="gridView",C=function(e){var t=Object(l.a)().t,n=Object(a.useState)("280"),c=Object(o.a)(n,2),s=c[0],i=c[1],r=k("(min-width: 992px)");return Object(a.useEffect)((function(){r?document.documentElement.style.setProperty("--minRangeValue","".concat(s,"px")):document.documentElement.style.removeProperty("--minRangeValue")}),[s,r]),Object(u.jsxs)("div",{className:"toolbar",children:[Object(u.jsxs)("div",{className:"search-wrapper",children:[Object(u.jsx)("input",{type:"search",autoFocus:r,placeholder:t("Gallery-toolbar-search-placeholder"),onChange:e.onHandleSearch}),Object(u.jsxs)("div",{className:"counter",children:["Total photos: ",Object(u.jsx)("span",{children:e.total})]})]}),Object(u.jsxs)("ul",{className:"view-options",children:[Object(u.jsx)("li",{className:"zoom ".concat(e.view===S?"d-none":""),children:Object(u.jsx)("input",{type:"range",min:"180",max:"380",onChange:function(e){return i(e.target.value)},value:s})}),Object(u.jsx)("li",{className:"show-grid ".concat(e.view===_?N:""),children:Object(u.jsx)("button",{onClick:function(){return e.onSwitchView(_)},disabled:e.view===_,children:Object(u.jsx)("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/grid-view.svg",alt:"grid view"})})}),Object(u.jsx)("li",{className:"show-list ".concat(e.view===S?N:""),children:Object(u.jsx)("button",{onClick:function(){return e.onSwitchView(S)},disabled:e.view===S,children:Object(u.jsx)("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/list-view.svg",alt:"list view"})})})]})]})},y=(n(88),"gridView"),E=function(e){var t=e.data,n=k("(max-width: 576px)"),c=Object(a.useState)(y),s=Object(o.a)(c,2),i=s[0],r=s[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),b=j[0],h=j[1],d=function(e){r(e)};Object(a.useEffect)((function(){n&&d(y)}),[n]);var g=Object(a.useMemo)((function(){return t?t.filter((function(e){return e.title.toLowerCase().includes(b.toLowerCase())})):[]}),[t,b]);return Object(u.jsx)("section",{className:"gallery",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(C,{view:i,onHandleSearch:function(e){h(e.target.value)},onSwitchView:d,total:g.length}),Object(u.jsx)("ol",{className:"image-list ".concat(i===y?"grid-view":"list-view"),children:g.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("figure",{children:[Object(u.jsx)("img",{src:"https://ichef.bbci.co.uk/news/800/cpsprodpb/4543/production/_121113771_gettyimages-1234407816.jpg",alt:e.title}),Object(u.jsxs)("figcaption",{children:[Object(u.jsx)("p",{children:e.title}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:e.link,rel:"noreferrer",target:"_blank",children:e.subtitle})})]})]})},e._id)}))})]})})},L=(n(89),Object(O.a)()((function(e){var t=e.t,n=e.i18n,c=Object(a.useState)("default user"),s=Object(o.a)(c,2),i=(s[0],s[1],Object(a.useState)(null)),r=Object(o.a)(i,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("".concat("https://blog.api.hosseintorabi.com","/api/posts"),{headers:{"Accept-Language":n.language}});case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n.language]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:"header__wrapper",children:[Object(u.jsxs)("div",{className:"header__content",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("p",{className:"header__text",children:t("header-main-title")}),Object(u.jsx)("p",{className:"header__text",children:t("header-sub-title")})]}),Object(u.jsx)("img",{alt:"stamp",src:v,width:"360px"})]}),Object(u.jsx)("img",{alt:"stamp",src:w,className:"header__separator"})]}),Object(u.jsx)(E,{data:l})]})}))),V=n(97),F=Object(O.a)()((function(e){var t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()("".concat("https://blog.api.hosseintorabi.com","/api/posts"),{headers:{"Accept-Language":e.i18n.language}});case 2:n=t.sent,s(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.i18n.language]),Object(a.useMemo)((function(){return Object(u.jsxs)("div",{className:"body",children:[c&&c.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("p",{children:e.title}),Object(u.jsx)("p",{children:e.subtitle})]},e._id)})),Object(u.jsx)("p",{children:Object(u.jsx)(V.a,{children:"this-is-page2"})}),Object(u.jsx)("p",{children:Object(u.jsx)(V.a,{i18nKey:"go-to-home",children:Object(u.jsx)(i.b,{to:"/"})})})]})}),[c])})),P=function(){var e=Object(l.a)().i18n;function t(t){e.changeLanguage(t.target.value),document.documentElement.lang=e.language}return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("button",{onClick:t,value:"en",children:"English"}),Object(u.jsx)("button",{onClick:t,value:"es",children:"Espa\xf1ol"}),Object(u.jsx)("button",{onClick:t,value:"fa",children:"\u0641\u0627\u0631\u0633\u06cc"})]})},z=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:L}),Object(u.jsx)(r.a,{path:"/page2",component:F})]}),Object(u.jsx)(P,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},B=n(21),G=n(45),H=n(12);B.a.use(G.a).use(H.e).init({fallbackLng:"en",detection:{order:["querystring","cookie","localStorage"],lookupQuerystring:"lng",lookupCookie:"next-i18next",lookupLocalStorage:"i18nextLng",caches:["cookie","localStorage"]},resources:{en:{translations:n(91)},es:{translations:n(92)},fa:{translations:n(93)}},react:{bindI18n:"languageChanged",useSuspense:!1},ns:["translations"],defaultNS:"translations"}),B.a.languages=["en","es","fa"],document.documentElement.lang=B.a.language;B.a,n(94);s.a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),J()}},[[95,1,2]]]);
//# sourceMappingURL=main.ccecbccd.chunk.js.map