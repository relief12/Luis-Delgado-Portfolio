(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},26:function(e,t,n){e.exports=n(42)},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=(n(31),n(9)),i=n(10),s=n(12),u=n(11),m=n(13),d=n(5),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"64px"}},r.a.createElement("h1",null,"Landing Page"))}}]),t}(a.Component),h=n(20),p=n.n(h),g=n(21),E=n.n(g),v=n(22),w=n.n(v),b=n(23),k=n.n(b),O=function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:f}),r.a.createElement(d.a,{path:"/aboutme",component:p.a}),r.a.createElement(d.a,{path:"/contact",component:E.a}),r.a.createElement(d.a,{path:"/projects",component:w.a}),r.a.createElement(d.a,{path:"/resume",component:k.a}))},j=(n(37),function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))}),y=(n(38),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(j,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement("a",{href:"/"},"Luis Delgado")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{href:"/aboutme"},"About me")),r.a.createElement("li",null,r.a.createElement("a",{href:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"/contact"},"Contact me"))))))}),C=(n(39),function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Products")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Users"))))}),N=(n(40),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},n.drawerToggleClickHandler=function(){n.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},n.backdropClickHandler=function(){n.setState({sideDrawerOpen:!1})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(N,{click:this.backdropClickHandler})),r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(y,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(C,{show:this.state.sideDrawerOpen}),";",e,r.a.createElement(O,null))}}]),t}(r.a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var W=n(8);n(41);c.a.render(r.a.createElement(W.a,null,r.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/luis-delgado-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/luis-delgado-portfolio","/service-worker.js");A?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):D(t,e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.62114f1b.chunk.js.map