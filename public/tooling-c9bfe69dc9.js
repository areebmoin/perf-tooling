!window.addEventListener&&function(e,t,n,o,i,a,r){e.addEventListener=t.addEventListener=n.addEventListener=function(e,t){var n=this;r.unshift([n,e,t,function(e){e.currentTarget=n,e.preventDefault=function(){e.returnValue=!1},e.stopPropagation=function(){e.cancelBubble=!0},e.target=e.srcElement||n,t.call(n,e)}]),this.attachEvent("on"+e,r[0][3])},e.removeEventListener=t.removeEventListener=n.removeEventListener=function(e,t){for(var n,o=0;n=r[o];++o)if(n[0]==this&&n[1]==e&&n[2]==t)return this.detachEvent("on"+e,r.splice(o,1)[0][3])},e.dispatchEvent=t.dispatchEvent=n.dispatchEvent=function(e){return this.fireEvent("on"+e.type,e)}}(Window.prototype,HTMLDocument.prototype,Element.prototype,0,0,0,[]),function(e){e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)}}()}(window),function(e,t,n,o,i,a){function r(t,n){if(n){var o=n.getAttribute("viewBox"),i=e.createDocumentFragment(),a=n.cloneNode(!0);for(o&&t.setAttribute("viewBox",o);a.childNodes.length;)i.appendChild(a.childNodes[0]);t.appendChild(i)}}function l(){var t=this,n=e.createElement("x"),o=t.s;n.innerHTML=t.responseText,t.onload=function(){o.splice(0).map(function(e){r(e[0],n.querySelector("#"+e[1].replace(/(\W)/g,"\\$1")))})},t.onload()}function d(){for(var a;a=t[0];)if(i){var s,u,c=new Image;s=a.getAttribute("xlink:href"),u=(/\?[^#]+/.exec(s)||[""])[0],c.src=s.replace(/\?[^#]+/,"").replace("#",".").replace(/^\./,"")+".png"+u,a.parentNode.replaceChild(c,a)}else{var m=a.parentNode,f=a.getAttribute("xlink:href").split("#"),p=f[0],v=f[1];if(m.removeChild(a),p.length){var g=o[p]=o[p]||new XMLHttpRequest;g.s||(g.s=[],g.open("GET",p),g.onload=l,g.send()),g.s.push([m,v]),4===g.readyState&&g.onload()}else r(m,e.getElementById(v))}n(d)}(i||a)&&d()}(document,document.getElementsByTagName("use"),window.requestAnimationFrame||window.setTimeout,{},/MSIE\s[1-8]\b/.test(navigator.userAgent),/Trident\/[567]\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,document.createElement("svg"),document.createElement("use")),function(e){function t(t,n,o){var i=-1!==navigator.userAgent.indexOf("Firefox")||-1!==navigator.userAgent.indexOf("MSIE")?document.documentElement:document.body,a=i.scrollTop,r=t-a,l=0;n=void 0===n?500:n;var d=function(){l+=20;var t=Math.easeInOutQuad(l,a,r,n);i.scrollTop=t,l<n?e.requestAnimationFrame(d):"function"==typeof o&&o()};d()}Math.easeInOutQuad=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)},Math.easeInCubic=function(e,t,n,o){return t+n*((e/=o)*e*e)},Math.inOutQuintic=function(e,t,n,o){var i=(e/=o)*e,a=i*e;return t+n*(6*a*i+-15*i*i+10*a)},e.animScrollTo=t}(window),function(e){e.perfTooling=e.perfTooling||{},e.perfTooling.features=e.perfTooling.features||{},e.perfTooling.features.history=function(){var t=navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome"))&&(e.history&&"pushState"in e.history)}()}(window),function(){function e(e){function o(){n.main.setAttribute("aria-hidden",!1),n.modal.setAttribute("aria-hidden",!0),n.body.classList.remove("is-locked"),n.modal.classList.remove("is-active"),n.modal.classList.remove("is-loaded"),n.modalContent.innerHTML="",n.body.removeEventListener("keydown",i),n.modal.removeEventListener("click",o),n.closeBtn.removeEventListener("click",o),n.backLink.focus()}function i(e){27===e.which&&(e.preventDefault(),o())}e.data&&e.elements.list&&(n.list=document.querySelector(e.elements.list),n.body.addEventListener("click",function(a){var r="A"===a.target.tagName?a.target:a.target.parentNode;r.dataset&&void 0!==r.dataset.modal&&r.dataset.modalContentId&&(n.backLink=a.target,t(a,e.data,r.title,r.dataset.modalContentId),n.body.addEventListener("keydown",i),n.modal.addEventListener("click",o),n.closeBtn.addEventListener("click",o))}))}function t(e,t,o,i){var a=t.filter(function(e){return e.id===i});a.length&&a[0].html&&(e.preventDefault(),n.main.setAttribute("aria-hidden",!0),n.modalContainer.setAttribute("aria-label",o),n.modal.setAttribute("aria-hidden",!1),n.modal.classList.add("is-active"),n.modalContent.innerHTML=a[0].html,n.tabBtn.href=a[0].url,n.body.classList.add("is-locked"),n.modal.classList.add("is-loaded"),setTimeout(function(){n.modalContainer.focus()},500))}var n={body:document.querySelector("body"),main:document.querySelector("main"),modal:document.getElementById("modal"),modalContainer:document.getElementById("modalContainer"),modalContent:document.getElementById("modalContent"),tabBtn:document.getElementById("modalOpenTab"),closeBtn:document.getElementById("modalClose")};window.perfTooling=window.perfTooling||{},window.perfTooling.components=window.perfTooling.components||{},window.perfTooling.components.modal={init:function(t){e(t)}}}(window),function(e){function t(t){if(t=t||{},t.data&&(t.elements.input&&(i.input=document.querySelector(t.elements.input),setInterval(function(){if(i.input.value!==a){var e=i.input.value.toLowerCase();a=e,clearTimeout(o),n(t.data,a)}},200)),t.elements.list)){i.list=document.querySelector(t.elements.list),i.list.addEventListener("click",function(t){var n=t.target.dataset.fuzzy;n&&i.input&&(t.preventDefault(),i.input.getBoundingClientRect().top<0?e.animScrollTo(i.input.offsetTop,600,function(){i.input.value=n,i.input.dispatchEvent(new KeyboardEvent("keyup"))}):(i.input.value=n,i.input.dispatchEvent(new KeyboardEvent("keyup"))))});const r=new URLSearchParams(e.location.search);i.input.value=r.get("q"),i.input.dispatchEvent(new KeyboardEvent("keyup"))}}function n(t,n){o=e.setTimeout(function(){history.replaceState(null,null,"?q="+n)},2e3);var a=0,r=n.split(" "),l=r.length;t.forEach(function(e){var t=0,n=!0;for(void 0===e.elem&&(e.elem=document.getElementById(e.id));t<l;++t)-1===e.fuzzy.indexOf(r[t])&&(n=!1);n&&++a,e.elem.classList.toggle("is-hidden",!n)}),i.noResultsMsg.classList.toggle("is-hidden",0!==a)}var o,i={noResultsMsg:document.getElementById("noResultMsg")},a="";e.perfTooling=e.perfTooling||{},e.perfTooling.components=e.perfTooling.components||{},e.perfTooling.components.fuzzy={init:function(e){t(e)}}}(window),function(e,t,n){window.addEventListener("load",function(){for(var t=e.querySelectorAll(".contributors a"),n=t.length,o=0;o<n;++o)t[o].innerHTML='<img src="'+t[o].dataset.url+'" width="40" height="40" alt="'+t[o].dataset.login+' on GitHub" class="contributor-avatar">'});var o=e.querySelectorAll(".js-scroll");o.length&&Array.prototype.forEach.call(o,function(t){t.addEventListener("click",function(){window.animScrollTo(e.getElementById(t.href.split("#")[1]).offsetTop,600)})}),void 0!==t&&window.perfTooling.features.history&&(window.perfTooling.components.fuzzy.init({elements:{input:"#fuzzzzzzzzzy",list:".posts"},data:t}),"videos"!==n&&"slides"!==n||window.perfTooling.components.modal.init({elements:{list:".posts"},data:t})),function(){var t=e.querySelector(".nav--main");e.querySelector(".btn--nav").addEventListener("click",function(){t.classList.toggle("nav--open")})}()}(document,window.list,window.type);