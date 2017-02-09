/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";var n="animsition",i={init:function(a){a=t.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(t){window.location.href=t}},a),i.settings={timer:!1,data:{inClass:"animsition-in-class",inDuration:"animsition-in-duration",outClass:"animsition-out-class",outDuration:"animsition-out-duration",overlay:"animsition-overlay"},events:{inStart:"animsition.inStart",inEnd:"animsition.inEnd",outStart:"animsition.outStart",outEnd:"animsition.outEnd"}};var o=i.supportCheck.call(this,a);if(!o&&a.browser.length>0&&(!o||!this.length))return"console"in window||(window.console={},window.console.log=function(t){return t}),this.length||console.log("Animsition: Element does not exist on page."),o||console.log("Animsition: Does not support this browser."),i.destroy.call(this);var e=i.optionCheck.call(this,a);return e&&t("."+a.overlayClass).length<=0&&i.addOverlay.call(this,a),a.loading&&t("."+a.loadingClass).length<=0&&i.addLoading.call(this,a),this.each(function(){var o=this,e=t(this),s=t(window),r=t(document),l=e.data(n);l||(a=t.extend({},a),e.data(n,{options:a}),a.timeout&&i.addTimer.call(o),a.onLoadEvent&&s.on("load."+n,function(){i.settings.timer&&clearTimeout(i.settings.timer),i["in"].call(o)}),s.on("pageshow."+n,function(t){t.originalEvent.persisted&&i["in"].call(o)}),s.on("unload."+n,function(){}),r.on("click."+n,a.linkElement,function(n){n.preventDefault();var a=t(this),e=a.attr("href");2===n.which||n.metaKey||n.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&n.ctrlKey?window.open(e,"_blank"):i.out.call(o,a,e)}))})},addOverlay:function(n){t(n.overlayParentElement).prepend('<div class="'+n.overlayClass+'"></div>')},addLoading:function(n){t(n.loadingParentElement).append('<div class="'+n.loadingClass+'">'+n.loadingInner+"</div>")},removeLoading:function(){var i=t(this),a=i.data(n).options,o=t(a.loadingParentElement).children("."+a.loadingClass);o.fadeOut().remove()},addTimer:function(){var a=this,o=t(this),e=o.data(n).options;i.settings.timer=setTimeout(function(){i["in"].call(a),t(window).off("load."+n)},e.timeoutCountdown)},supportCheck:function(n){var i=t(this),a=n.browser,o=a.length,e=!1;0===o&&(e=!0);for(var s=0;o>s;s++)if("string"==typeof i.css(a[s])){e=!0;break}return e},optionCheck:function(n){var a,o=t(this);return a=n.overlay||o.data(i.settings.data.overlay)?!0:!1},animationCheck:function(i,a,o){var e=t(this),s=e.data(n).options,r=typeof i,l=!a&&"number"===r,d=a&&"string"===r&&i.length>0;return l||d?i=i:a&&o?i=s.inClass:!a&&o?i=s.inDuration:a&&!o?i=s.outClass:a||o||(i=s.outDuration),i},"in":function(){var a=this,o=t(this),e=o.data(n).options,s=o.data(i.settings.data.inDuration),r=o.data(i.settings.data.inClass),l=i.animationCheck.call(a,s,!1,!0),d=i.animationCheck.call(a,r,!0,!0),u=i.optionCheck.call(a,e),c=o.data(n).outClass;e.loading&&i.removeLoading.call(a),c&&o.removeClass(c),u?i.inOverlay.call(a,d,l):i.inDefault.call(a,d,l)},inDefault:function(n,a){var o=t(this);o.css({"animation-duration":a+"ms"}).addClass(n).trigger(i.settings.events.inStart).animateCallback(function(){o.removeClass(n).css({opacity:1}).trigger(i.settings.events.inEnd)})},inOverlay:function(a,o){var e=t(this),s=e.data(n).options;e.css({opacity:1}).trigger(i.settings.events.inStart),t(s.overlayParentElement).children("."+s.overlayClass).css({"animation-duration":o+"ms"}).addClass(a).animateCallback(function(){e.trigger(i.settings.events.inEnd)})},out:function(a,o){var e=this,s=t(this),r=s.data(n).options,l=a.data(i.settings.data.outClass),d=s.data(i.settings.data.outClass),u=a.data(i.settings.data.outDuration),c=s.data(i.settings.data.outDuration),m=l?l:d,g=u?u:c,f=i.animationCheck.call(e,m,!0,!1),v=i.animationCheck.call(e,g,!1,!1),h=i.optionCheck.call(e,r);s.data(n).outClass=f,h?i.outOverlay.call(e,f,v,o):i.outDefault.call(e,f,v,o)},outDefault:function(a,o,e){var s=t(this),r=s.data(n).options;s.css({"animation-duration":o+1+"ms"}).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){s.trigger(i.settings.events.outEnd),r.transition(e)})},outOverlay:function(a,o,e){var s=this,r=t(this),l=r.data(n).options,d=r.data(i.settings.data.inClass),u=i.animationCheck.call(s,d,!0,!0);t(l.overlayParentElement).children("."+l.overlayClass).css({"animation-duration":o+1+"ms"}).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){r.trigger(i.settings.events.outEnd),l.transition(e)})},destroy:function(){return this.each(function(){var i=t(this);t(window).off("."+n),i.css({opacity:1}).removeData(n)})}};t.fn.animateCallback=function(n){var i="animationend webkitAnimationEnd";return this.each(function(){var a=t(this);a.on(i,function(){return a.off(i),n.call(this)})})},t.fn.animsition=function(a){return i[a]?i[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void t.error("Method "+a+" does not exist on jQuery."+n):i.init.apply(this,arguments)}});
// jQuery Mask Plugin v1.14.8
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp={scope:{},findInternal:function(a,f,c){a instanceof String&&(a=String(a));for(var l=a.length,g=0;g<l;g++){var b=a[g];if(f.call(c,b,g,a))return{i:g,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,f,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[f]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,f,c,l){if(f){c=$jscomp.global;a=a.split(".");for(l=0;l<a.length-1;l++){var g=a[l];g in c||(c[g]={});c=c[g]}a=a[a.length-1];l=c[a];f=f(l);f!=l&&null!=f&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:f})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6-impl","es3");
(function(a,f,c){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(f||c)})(function(a){var f=function(b,h,e){var d={invalid:[],getCaret:function(){try{var a,n=0,h=b.get(0),e=document.selection,k=h.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-d.val().length),n=a.text.length;else if(k||"0"===k)n=k;return n}catch(A){}},setCaret:function(a){try{if(b.is(":focus")){var p,
d=b.get(0);d.setSelectionRange?d.setSelectionRange(a,a):(p=d.createTextRange(),p.collapse(!0),p.moveEnd("character",a),p.moveStart("character",a),p.select())}}catch(z){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val())}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",d.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",
function(){c===d.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){c=d.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!g.test(d.val())&&d.val("")})},getRegexMask:function(){for(var a=[],b,d,e,k,c=0;c<h.length;c++)(b=m.translation[h.charAt(c)])?(d=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,(b=b.recursive)?(a.push(h.charAt(c)),k={digit:h.charAt(c),pattern:d}):
a.push(e||b?d+"?":d)):a.push(h.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");k&&(a=a.replace(new RegExp("("+k.digit+"(.*"+k.digit+")?)"),"($1)?").replace(new RegExp(k.digit,"g"),k.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var d=b.is("input")?"val":"text";if(0<arguments.length){if(b[d]()!==a)b[d](a);d=b}else d=b[d]();return d},calculateCaretPosition:function(a,d){var h=
d.length,e=b.data("mask-previus-value"),k=e.length;8===b.data("mask-keycode")&&e!==d?a-=d.slice(0,a).length-e.slice(0,a).length:e!==d&&(a=a>=k?h:a+(d.slice(0,a).length-e.slice(0,a).length));return a},behaviour:function(e){e=e||window.event;d.invalid=[];var h=b.data("mask-keycode");if(-1===a.inArray(h,m.byPassKeys)){var h=d.getMasked(),c=d.getCaret();setTimeout(function(a,b){d.setCaret(d.calculateCaretPosition(a,b))},10,c,h);d.val(h);d.setCaret(c);return d.callbacks(e)}},getMasked:function(a,b){var c=
[],p=void 0===b?d.val():b+"",k=0,g=h.length,f=0,l=p.length,n=1,v="push",w=-1,r,u;e.reverse?(v="unshift",n=-1,r=0,k=g-1,f=l-1,u=function(){return-1<k&&-1<f}):(r=g-1,u=function(){return k<g&&f<l});for(var y;u();){var x=h.charAt(k),t=p.charAt(f),q=m.translation[x];if(q)t.match(q.pattern)?(c[v](t),q.recursive&&(-1===w?w=k:k===r&&(k=w-n),r===w&&(k-=n)),k+=n):t===y?y=void 0:q.optional?(k+=n,f-=n):q.fallback?(c[v](q.fallback),k+=n,f-=n):d.invalid.push({p:f,v:t,e:q.pattern}),f+=n;else{if(!a)c[v](x);t===x?
f+=n:y=x;k+=n}}p=h.charAt(r);g!==l+1||m.translation[p]||c.push(p);return c.join("")},callbacks:function(a){var f=d.val(),p=f!==c,g=[f,a,b,e],k=function(a,b,d){"function"===typeof e[a]&&b&&e[a].apply(this,d)};k("onChange",!0===p,g);k("onKeyPress",!0===p,g);k("onComplete",f.length===h.length,g);k("onInvalid",0<d.invalid.length,[f,a,b,d.invalid,e])}};b=a(b);var m=this,c=d.val(),g;h="function"===typeof h?h(d.val(),void 0,b,e):h;m.mask=h;m.options=e;m.remove=function(){var a=d.getCaret();d.destroyEvents();
d.val(m.getCleanVal());d.setCaret(a);return b};m.getCleanVal=function(){return d.getMasked(!0)};m.getMaskedVal=function(a){return d.getMasked(!1,a)};m.init=function(c){c=c||!1;e=e||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,e.translation);m=a.extend(!0,{},m,e);g=d.getRegexMask();if(c)d.events(),d.val(d.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete",
"off");c=0;for(var f=!0;c<h.length;c++){var l=m.translation[h.charAt(c)];if(l&&l.recursive){f=!1;break}}f&&b.attr("maxlength",h.length);d.destroyEvents();d.events();c=d.getCaret();d.val(d.getMasked());d.setCaret(c)}};m.init(!b.is("input"))};a.maskWatchers={};var c=function(){var b=a(this),c={},e=b.attr("data-mask");b.attr("data-mask-reverse")&&(c.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(c.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(c.selectOnFocus=!0);if(l(b,e,c))return b.data("mask",
new f(this,e,c))},l=function(b,c,e){e=e||{};var d=a(b).data("mask"),h=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof c&&(c=c(b)),"object"!==typeof d||h(d.options)!==h(e)||d.mask!==c}catch(u){}},g=function(a){var b=document.createElement("div"),c;a="on"+a;c=a in b;c||(b.setAttribute(a,"return;"),c="function"===typeof b[a]);return c};a.fn.mask=function(b,c){c=c||{};var e=this.selector,d=a.jMaskGlobals,h=d.watchInterval,d=c.watchInputs||d.watchInputs,g=function(){if(l(this,b,
c))return a(this).data("mask",new f(this,b,c))};a(this).each(g);e&&""!==e&&d&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(g)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};
a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(c)};g={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\/28/.test(window.navigator.userAgent)&&g("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};
a.jMaskGlobals=a.jMaskGlobals||{};g=a.jMaskGlobals=a.extend(!0,{},g,a.jMaskGlobals);g.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},g.watchInterval)},window.jQuery,window.Zepto);
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */

;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
 * validate.js 0.11.1
 * http://validatejs.org/
 * (c) 2013-2015 Nicklas Ansman, 2013 Wrapp
 * validate.js may be freely distributed under the MIT license.
*/


(function(a,b,c){"use strict";var d=function(a,b,c){c=e.extend({},e.options,c);var f,g,h=e.runValidations(a,b,c);for(f in h)for(g in h[f])if(e.isPromise(h[f][g]))throw new Error("Use validate.async if you want support for promises");return d.processValidationResults(h,c)},e=d;e.extend=function(a){return[].slice.call(arguments,1).forEach(function(b){for(var c in b)a[c]=b[c]}),a},e.extend(d,{version:{major:0,minor:11,patch:1,metadata:null,toString:function(){var a=e.format("%{major}.%{minor}.%{patch}",e.version);return e.isEmpty(e.version.metadata)||(a+="+"+e.version.metadata),a}},Promise:"undefined"!=typeof Promise?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(a,b,c){var d,f,g,h,i,j,k,l=[];(e.isDomElement(a)||e.isJqueryElement(a))&&(a=e.collectFormValues(a));for(d in b){g=e.getDeepObjectValue(a,d),h=e.result(b[d],g,a,d,c,b);for(f in h){if(i=e.validators[f],!i)throw k=e.format("Unknown validator %{name}",{name:f}),new Error(k);j=h[f],j=e.result(j,g,a,d,c,b),j&&l.push({attribute:d,value:g,validator:f,globalOptions:c,attributes:a,options:j,error:i.call(i,g,j,d,a,c)})}}return l},processValidationResults:function(a,b){a=e.pruneEmptyErrors(a,b),a=e.expandMultipleErrors(a,b),a=e.convertErrorMessages(a,b);var c=b.format||"grouped";if("function"!=typeof e.formatters[c])throw new Error(e.format("Unknown format %{format}",b));return a=e.formatters[c](a),e.isEmpty(a)?void 0:a},async:function(a,b,c){c=e.extend({},e.async.options,c);var d=c.wrapErrors||function(a){return a};c.cleanAttributes!==!1&&(a=e.cleanAttributes(a,b));var f=e.runValidations(a,b,c);return new e.Promise(function(g,h){e.waitForResults(f).then(function(){var i=e.processValidationResults(f,c);i?h(new d(i,c,a,b)):g(a)},function(a){h(a)})})},single:function(a,b,c){return c=e.extend({},e.single.options,c,{format:"flat",fullMessages:!1}),e({single:a},{single:b},c)},waitForResults:function(a){return a.reduce(function(a,b){return e.isPromise(b.error)?a.then(function(){return b.error.then(function(a){b.error=a||null})}):a},new e.Promise(function(a){a()}))},result:function(a){var b=[].slice.call(arguments,1);return"function"==typeof a&&(a=a.apply(null,b)),a},isNumber:function(a){return"number"==typeof a&&!isNaN(a)},isFunction:function(a){return"function"==typeof a},isInteger:function(a){return e.isNumber(a)&&a%1===0},isBoolean:function(a){return"boolean"==typeof a},isObject:function(a){return a===Object(a)},isDate:function(a){return a instanceof Date},isDefined:function(a){return null!==a&&void 0!==a},isPromise:function(a){return!!a&&e.isFunction(a.then)},isJqueryElement:function(a){return a&&e.isString(a.jquery)},isDomElement:function(a){return a&&a.querySelectorAll&&a.querySelector?e.isObject(document)&&a===document?!0:"object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName:!1},isEmpty:function(a){var b;if(!e.isDefined(a))return!0;if(e.isFunction(a))return!1;if(e.isString(a))return e.EMPTY_STRING_REGEXP.test(a);if(e.isArray(a))return 0===a.length;if(e.isDate(a))return!1;if(e.isObject(a)){for(b in a)return!1;return!0}return!1},format:e.extend(function(a,b){return e.isString(a)?a.replace(e.format.FORMAT_REGEXP,function(a,c,d){return"%"===c?"%{"+d+"}":String(b[d])}):a},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(a){return e.isNumber(a)?100*a%1===0?""+a:parseFloat(Math.round(100*a)/100).toFixed(2):e.isArray(a)?a.map(function(a){return e.prettify(a)}).join(", "):e.isObject(a)?a.toString():(a=""+a,a.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(a,b,c){return""+b+" "+c.toLowerCase()}).toLowerCase())},stringifyValue:function(a){return e.prettify(a)},isString:function(a){return"string"==typeof a},isArray:function(a){return"[object Array]"==={}.toString.call(a)},isHash:function(a){return e.isObject(a)&&!e.isArray(a)&&!e.isFunction(a)},contains:function(a,b){return e.isDefined(a)?e.isArray(a)?-1!==a.indexOf(b):b in a:!1},unique:function(a){return e.isArray(a)?a.filter(function(a,b,c){return c.indexOf(a)==b}):a},forEachKeyInKeypath:function(a,b,c){if(e.isString(b)){var d,f="",g=!1;for(d=0;d<b.length;++d)switch(b[d]){case".":g?(g=!1,f+="."):(a=c(a,f,!1),f="");break;case"\\":g?(g=!1,f+="\\"):g=!0;break;default:g=!1,f+=b[d]}return c(a,f,!0)}},getDeepObjectValue:function(a,b){return e.isObject(a)?e.forEachKeyInKeypath(a,b,function(a,b){return e.isObject(a)?a[b]:void 0}):void 0},collectFormValues:function(a,b){var c,d,f,g,h,i,j={};if(e.isJqueryElement(a)&&(a=a[0]),!a)return j;for(b=b||{},g=a.querySelectorAll("input[name], textarea[name]"),c=0;c<g.length;++c)f=g.item(c),e.isDefined(f.getAttribute("data-ignored"))||(i=e.sanitizeFormValue(f.value,b),"number"===f.type?i=i?+i:null:"checkbox"===f.type?f.attributes.value?f.checked||(i=j[f.name]||null):i=f.checked:"radio"===f.type&&(f.checked||(i=j[f.name]||null)),j[f.name]=i);for(g=a.querySelectorAll("select[name]"),c=0;c<g.length;++c){if(f=g.item(c),f.multiple){i=[];for(d in f.options)h=f.options[d],h.selected&&i.push(e.sanitizeFormValue(h.value,b))}else i=e.sanitizeFormValue(f.options[f.selectedIndex].value,b);j[f.name]=i}return j},sanitizeFormValue:function(a,b){return b.trim&&e.isString(a)&&(a=a.trim()),b.nullify!==!1&&""===a?null:a},capitalize:function(a){return e.isString(a)?a[0].toUpperCase()+a.slice(1):a},pruneEmptyErrors:function(a){return a.filter(function(a){return!e.isEmpty(a.error)})},expandMultipleErrors:function(a){var b=[];return a.forEach(function(a){e.isArray(a.error)?a.error.forEach(function(c){b.push(e.extend({},a,{error:c}))}):b.push(a)}),b},convertErrorMessages:function(a,b){b=b||{};var c=[];return a.forEach(function(a){var d=e.result(a.error,a.value,a.attribute,a.options,a.attributes,a.globalOptions);return e.isString(d)?("^"===d[0]?d=d.slice(1):b.fullMessages!==!1&&(d=e.capitalize(e.prettify(a.attribute))+" "+d),d=d.replace(/\\\^/g,"^"),d=e.format(d,{value:e.stringifyValue(a.value)}),void c.push(e.extend({},a,{error:d}))):void c.push(a)}),c},groupErrorsByAttribute:function(a){var b={};return a.forEach(function(a){var c=b[a.attribute];c?c.push(a):b[a.attribute]=[a]}),b},flattenErrorsToArray:function(a){return a.map(function(a){return a.error}).filter(function(a,b,c){return c.indexOf(a)===b})},cleanAttributes:function(a,b){function c(a,b,c){return e.isObject(a[b])?a[b]:a[b]=c?!0:{}}function d(a){var b,d={};for(b in a)a[b]&&e.forEachKeyInKeypath(d,b,c);return d}function f(a,b){if(!e.isObject(a))return a;var c,d,g=e.extend({},a);for(d in a)c=b[d],e.isObject(c)?g[d]=f(g[d],c):c||delete g[d];return g}return e.isObject(b)&&e.isObject(a)?(b=d(b),f(a,b)):{}},exposeModule:function(a,b,c,d,e){c?(d&&d.exports&&(c=d.exports=a),c.validate=a):(b.validate=a,a.isFunction(e)&&e.amd&&e([],function(){return a}))},warn:function(a){"undefined"!=typeof console&&console.warn&&console.warn("[validate.js] "+a)},error:function(a){"undefined"!=typeof console&&console.error&&console.error("[validate.js] "+a)}}),d.validators={presence:function(a,b){return b=e.extend({},this.options,b),(b.allowEmpty?!e.isDefined(a):e.isEmpty(a))?b.message||this.message||"can't be blank":void 0},length:function(a,b,c){if(e.isDefined(a)){b=e.extend({},this.options,b);var d,f=b.is,g=b.maximum,h=b.minimum,i=b.tokenizer||function(a){return a},j=[];a=i(a);var k=a.length;return e.isNumber(k)?(e.isNumber(f)&&k!==f&&(d=b.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)",j.push(e.format(d,{count:f}))),e.isNumber(h)&&h>k&&(d=b.tooShort||this.tooShort||"is too short (minimum is %{count} characters)",j.push(e.format(d,{count:h}))),e.isNumber(g)&&k>g&&(d=b.tooLong||this.tooLong||"is too long (maximum is %{count} characters)",j.push(e.format(d,{count:g}))),j.length>0?b.message||j:void 0):(e.error(e.format("Attribute %{attr} has a non numeric value for `length`",{attr:c})),b.message||this.notValid||"has an incorrect length")}},numericality:function(a,b){if(e.isDefined(a)){b=e.extend({},this.options,b);var c,d,f=[],g={greaterThan:function(a,b){return a>b},greaterThanOrEqualTo:function(a,b){return a>=b},equalTo:function(a,b){return a===b},lessThan:function(a,b){return b>a},lessThanOrEqualTo:function(a,b){return b>=a},divisibleBy:function(a,b){return a%b===0}};if(e.isString(a)&&b.strict){var h="^(0|[1-9]\\d*)";if(b.onlyInteger||(h+="(\\.\\d+)?"),h+="$",!new RegExp(h).test(a))return b.message||b.notValid||this.notValid||this.message||"must be a valid number"}if(b.noStrings!==!0&&e.isString(a)&&!e.isEmpty(a)&&(a=+a),!e.isNumber(a))return b.message||b.notValid||this.notValid||this.message||"is not a number";if(b.onlyInteger&&!e.isInteger(a))return b.message||b.notInteger||this.notInteger||this.message||"must be an integer";for(c in g)if(d=b[c],e.isNumber(d)&&!g[c](a,d)){var i="not"+e.capitalize(c),j=b[i]||this[i]||this.message||"must be %{type} %{count}";f.push(e.format(j,{count:d,type:e.prettify(c)}))}return b.odd&&a%2!==1&&f.push(b.notOdd||this.notOdd||this.message||"must be odd"),b.even&&a%2!==0&&f.push(b.notEven||this.notEven||this.message||"must be even"),f.length?b.message||f:void 0}},datetime:e.extend(function(a,b){if(!e.isFunction(this.parse)||!e.isFunction(this.format))throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");if(e.isDefined(a)){b=e.extend({},this.options,b);var c,d=[],f=b.earliest?this.parse(b.earliest,b):NaN,g=b.latest?this.parse(b.latest,b):NaN;return a=this.parse(a,b),isNaN(a)||b.dateOnly&&a%864e5!==0?(c=b.notValid||b.message||this.notValid||"must be a valid date",e.format(c,{value:arguments[0]})):(!isNaN(f)&&f>a&&(c=b.tooEarly||b.message||this.tooEarly||"must be no earlier than %{date}",c=e.format(c,{value:this.format(a,b),date:this.format(f,b)}),d.push(c)),!isNaN(g)&&a>g&&(c=b.tooLate||b.message||this.tooLate||"must be no later than %{date}",c=e.format(c,{date:this.format(g,b),value:this.format(a,b)}),d.push(c)),d.length?e.unique(d):void 0)}},{parse:null,format:null}),date:function(a,b){return b=e.extend({},b,{dateOnly:!0}),e.validators.datetime.call(e.validators.datetime,a,b)},format:function(a,b){(e.isString(b)||b instanceof RegExp)&&(b={pattern:b}),b=e.extend({},this.options,b);var c,d=b.message||this.message||"is invalid",f=b.pattern;return e.isDefined(a)?e.isString(a)?(e.isString(f)&&(f=new RegExp(b.pattern,b.flags)),c=f.exec(a),c&&c[0].length==a.length?void 0:d):d:void 0},inclusion:function(a,b){if(e.isDefined(a)&&(e.isArray(b)&&(b={within:b}),b=e.extend({},this.options,b),!e.contains(b.within,a))){var c=b.message||this.message||"^%{value} is not included in the list";return e.format(c,{value:a})}},exclusion:function(a,b){if(e.isDefined(a)&&(e.isArray(b)&&(b={within:b}),b=e.extend({},this.options,b),e.contains(b.within,a))){var c=b.message||this.message||"^%{value} is restricted";return e.format(c,{value:a})}},email:e.extend(function(a,b){b=e.extend({},this.options,b);var c=b.message||this.message||"is not a valid email";if(e.isDefined(a))return e.isString(a)&&this.PATTERN.exec(a)?void 0:c},{PATTERN:/^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i}),equality:function(a,b,c,d){if(e.isDefined(a)){e.isString(b)&&(b={attribute:b}),b=e.extend({},this.options,b);var f=b.message||this.message||"is not equal to %{attribute}";if(e.isEmpty(b.attribute)||!e.isString(b.attribute))throw new Error("The attribute must be a non empty string");var g=e.getDeepObjectValue(d,b.attribute),h=b.comparator||function(a,b){return a===b};return h(a,g,b,c,d)?void 0:e.format(f,{attribute:e.prettify(b.attribute)})}},url:function(a,b){if(e.isDefined(a)){b=e.extend({},this.options,b);var c=b.message||this.message||"is not a valid url",d=b.schemes||this.schemes||["http","https"],f=b.allowLocal||this.allowLocal||!1;if(!e.isString(a))return c;var g="^(?:(?:"+d.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:",h="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";f?h+="?":g+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",g+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+h+")(?::\\d{2,5})?(?:[/?#]\\S*)?$";var i=new RegExp(g,"i");return i.exec(a)?void 0:c}}},d.formatters={detailed:function(a){return a},flat:e.flattenErrorsToArray,grouped:function(a){var b;a=e.groupErrorsByAttribute(a);for(b in a)a[b]=e.flattenErrorsToArray(a[b]);return a},constraint:function(a){var b;a=e.groupErrorsByAttribute(a);for(b in a)a[b]=a[b].map(function(a){return a.validator}).sort();return a}},d.exposeModule(d,this,a,b,c)}).call(this,"undefined"!=typeof exports?exports:null,"undefined"!=typeof module?module:null,"undefined"!=typeof define?define:null);
//# sourceMappingURL=validate.min.map
;
// Don't use 'isReady' event since we only want this run once
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'flip-in-x-fr',
    outClass: 'flip-out-x-fr',
    inDuration: 1500,
    outDuration: 1500,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
var isAnimating = false,
  newLocation = '';
  firstLoad = false;

$(document).on('isReady', function(event){

  //trigger smooth transition from the actual page to the new one
  $('main').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href');
    //if the page is not already being animated - trigger animation
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });

  //detect the 'popstate' event - e.g. user clicking the back button
  $(window).on('popstate', function() {
    if( firstLoad ) {
      /*
      Safari emits a popstate event on page load - check if firstLoad is true before animating
      if it's false - the page has just been loaded
      */
      var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded
        newPage = newPageArray[newPageArray.length - 1];

      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
  });

  function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      loadNewContent(url, bool);
      newLocation = url;
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    //if browser doesn't support CSS transitions
    if( !transitionsSupported() ) {
      loadNewContent(url, bool);
      newLocation = url;
    }
  }

  function loadNewContent(url, bool) {
    url = ('' == url) ? 'index.html' : url;
    var newSection = 'cd-'+url.replace('.html', '');
    var section = $('<div class="cd-main-content '+newSection+'"></div>');

    section.load(url+' .cd-main-content > *', function(event){
      // load new content and replace <main> content with the new one
      $('main').html(section);
      //if browser doesn't support CSS transitions - dont wait for the end of transitions
      var delay = ( transitionsSupported() ) ? 1200 : 0;
      setTimeout(function(){
        //wait for the end of the transition on the loading bar before revealing the new content
        ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;

        // Notify DOM change
        $(document).trigger('isReady')
      }, delay);

      if(url!=window.location && bool){
        //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({path: url},'',url);
      }
    });
  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});
// We need to use a custom ready event because the DOM changes during the animsition transition.
// Here's where we trigger it the first time.
$(document).ready(function () { $(this).trigger('isReady') })
;
$(document).on('isReady', function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});
$("document").on('isReady', function() {
  $(".slider").rangeslider();
});

$.fn.rangeslider = function(options) {
  var obj = this;
  var defautValue = obj.attr("value");
  obj.wrap("<span class='range-slider'></span>");
  obj.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'><span class='bar-value'>$0</span></span></span>");
  obj.attr("oninput", "updateSlider(this)");
  updateSlider(this);
  return obj;
};

function updateSlider(passObj) {
  var obj = $(passObj);
  var value = obj.val();
  var min = obj.attr("min");
  var max = obj.attr("max");
  var range = Math.round(max - min);
  var percentage = Math.round((value - min) * 100 / range);
  var nextObj = obj.next();
  nextObj.find("span.bar-btn").css("left", percentage + "%");
  nextObj.find("span.bar > span").css("width", percentage + "%");
  nextObj.find("span.bar-btn > span").text(value);
};
//jQuery plugin
(function( $ ) {

   $.fn.uploader = function( options ) {
     var settings = $.extend({
       MessageAreaText: "No files selected.",
       DefaultErrorMessage: "Unable to open this file.",
       BadTypeErrorMessage: "We cannot accept this file type at this time.",
       acceptedFileTypes: ['pdf', 'jpg', 'gif', 'jpeg', 'bmp', 'tif', 'tiff', 'png', 'xps', 'doc', 'docx',
        'fax', 'wmp', 'ico', 'txt', 'cs', 'rtf', 'xls', 'xlsx']
     }, options );

     var uploadId = 1;
     //update the messaging
      $('.file-uploader__message-area p').text(options.MessageAreaText || settings.MessageAreaText);

     //create and add the file list and the hidden input list
     var fileList = $('<ul class="file-list"></ul>');
     var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
     $('.file-uploader__message-area').after(fileList);
     $('.file-list').after(hiddenInputs);

    //when choosing a file, add the name to the list and copy the file input into the hidden inputs
     $('.file-chooser__input').on('change', function(){
        var file = $('.file-chooser__input').val();
        var fileName = (file.match(/([^\\\/]+)$/)[0]);

       //clear any error condition
       $('.file-chooser').removeClass('error');
       $('.error-message').remove();

       //validate the file
       var check = checkFile(fileName);
       if(check === "valid") {

         // move the 'real' one to hidden list
         $('.hidden-inputs').append($('.file-chooser__input'));

         //insert a clone after the hiddens (copy the event handlers too)
         $('.file-chooser').append($('.file-chooser__input').clone({ withDataAndEvents: true}));

         //add the name and a remove button to the file-list
         $('.file-list').append('<li style="display: none;"><span class="file-list__name">' + fileName + '</span><button class="removal-button" data-uploadid="'+ uploadId +'"></button></li>');
         $('.file-list').find("li:last").show(800);

         //removal button handler
         $('.removal-button').on('click', function(e){
           e.preventDefault();

           //remove the corresponding hidden input
           $('.hidden-inputs input[data-uploadid="'+ $(this).data('uploadid') +'"]').remove();

           //remove the name from file-list that corresponds to the button clicked
           $(this).parent().hide("puff").delay(10).queue(function(){$(this).remove();});

           //if the list is now empty, change the text back
           if($('.file-list li').length === 0) {
             $('.file-uploader__message-area').text(options.MessageAreaText || settings.MessageAreaText);
           }
         });

         //so the event handler works on the new "real" one
         $('.hidden-inputs .file-chooser__input').removeClass('file-chooser__input').attr('data-uploadId', uploadId);

         //update the message area
         $('.file-uploader__message-area').text(options.MessageAreaTextWithFiles || settings.MessageAreaTextWithFiles);

         uploadId++;

       } else {
         //indicate that the file is not ok
         $('.file-chooser').addClass("error");
         var errorText = options.DefaultErrorMessage || settings.DefaultErrorMessage;

         if(check === "badFileName") {
           errorText = options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
         }

         $('.file-chooser__input').after('<p class="error-message">'+ errorText +'</p>');
       }
     });

     var checkFile = function(fileName) {
       var accepted          = "invalid",
           acceptedFileTypes = this.acceptedFileTypes || settings.acceptedFileTypes,
           regex;

       for ( var i = 0; i < acceptedFileTypes.length; i++ ) {
         regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

         if ( regex.test(fileName) ) {
           accepted = "valid";
           break;
         } else {
           accepted = "badFileName";
         }
       }

       return accepted;
    };
  };
}( jQuery ));

//init
$(document).on('isReady', function(){
  $('.fileUploader').uploader({
    MessageAreaText: "Upload 3 banks statements"
  });
});
// Save data from fieldset
// Callback should be called with (response, error)

function saveData(fieldset, callback) {
  var fieldsetID = $(fieldset).attr('id')
  console.log('Saving data from fieldset with id: ' + fieldsetID)
  // SAVE DATA HERE
  callback({}, null)
}
;
// saveData() is defined in save-data.js

$(document).on('isReady', function() {
  //jQuery time
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function(){
    if(animating || $(this).hasClass('disabled')) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //save data of current fieldset
    saveData(current_fs, function(res, err) {
      if (err) {
        // handle error
      }
      // If successful:
      
      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = (now * 50)+"%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({'transform': 'scale('+scale+')'});
          next_fs.css({'left': left, 'opacity': opacity});
        },
        duration: 800,
        complete: function(){
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });
    })
  });

  $(".previous").click(function(){
    if(animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = ((1-now) * 50)+"%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({'left': left});
        previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
      },
      duration: 800,
      complete: function(){
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });

  $(".submit").click(function(){
    return false;
  })
});

// Tiny form library for validating things
// Aka reinventing the wheel 101

// Utility function to check existence
function exists (prop) { return prop }

var VForms = function (constraints, masks) {

  var elements = {}

  /* FIELD */

  elements.Field = function (field) {
    // Instance variables
    var self = this
    this.field = $(field) // Field element
    this.input = this.field.find('input').first() // Input element
    this.property = this.input.attr('name') // Data property to validate

    // Keep track of whether the input has been interacted with
    this.dirty = false
    this.input.on('change', function () { 
      self.dirty = true 
      self.validate()
    })

    // Add span for error messages
    this.messageSpan = $('<span>').addClass('error-message').insertAfter(this.input)
    
    // Mask field if mask exists
    this.mask = masks[this.property]
    if (this.mask) this.input.mask(this.mask)

    // Validation function - returns null (no error) or error message
    this.validate = function () {
      var toValidate = {} // Object that will be validated
      var value = this.mask ? this.input.cleanVal() : this.input.val() // Unmask value if necessary
      toValidate[this.property] = value
      var errors = validate(toValidate, constraints)
      var message = (errors && errors[this.property]) ? errors[this.property][0] : null
      this.setErrorState(message)
      return message
    }

    // Update UI for errors
    this.setErrorState = function (message) {
      if (!this.dirty) return
      this.field.toggleClass('error', message !== null)
      this.messageSpan.text(message)
    }

    // Pass onchange to input 
    this.onChange = function (handler) {
      return this.input.on('input', handler)
    }
  }

  /* FORM */

  elements.Form = function (fieldset) {
    // Instance variables
    var self = this
    this.fieldset = $(fieldset) // Fieldset element
    this.nextButton = this.fieldset.find('[name="next"]').first() // "Next" button
    var fieldElements = this.fieldset.find('field').toArray()

    // For each field elemtent, create Field object
    this.fields = fieldElements.map(function(field) {
      var fieldObject = new elements.Field(field)
      // Bind validations to changes
      fieldObject.onChange(function () { self.validate() })
      return fieldObject
    })

    // If there are fields, deactivate button until validations are passed
    if (this.fields.length) this.nextButton.addClass('disabled')

    // Validation function - validates all fields
    this.validate = function () {
      var messages = this.fields.map(function (field) {
        return field.validate()
      }).filter(exists)
      this.setErrorState(messages)
    }

    // Update UI for errors
    this.setErrorState = function (messages) {
      this.nextButton.toggleClass('disabled', messages.length > 0)
    }
  }

  return elements
}
;
// VForms is defined in validated-forms.js

var constraints = {
  cardNumber: {
    presence: true,
    length: { is: 16 }
  },
  companyName: {
    presence: true
  },
  phone: {
    presence: true,
    length: { is: 10 }
  },
  email: {
    presence: true,
    email: true
  },
  fullName: {
    presence: true
  },
  title: {
    presence: true
  },
  street: {
    presence: true
  },
  city: {
    presence: true
  },
  state: {
    presence: true
  },
  start: {
    presence: true
  },
  zipCode: {
    presence: true,
    length: { is: 5 }
  },
  birthDate: {
    presence: true
  },
  yearFounded: {
    presence: true,
    length: { is: 4 },
    numericality: {
      onlyInteger: true,
      // Allow 1800 - present year
      greaterThanOrEqualTo: 1600,
      lessThanOrEqualTo: new Date().getFullYear()
    }
  },
  numberOfEmployees: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 1
    }
  },
  SSN: {
    presence: true,
    length: { is: 9 }
  },
  annualRevenue: {
    presence: true,
    numericality: {
      greaterThanOrEqualTo: 0
    }
  },
  ein: {
    presence: true,
    numericality: {
      greaterThanOrEqualTo: 0
    }
  },
  corporationType: {
    presence: true
  },
  personalIncome: {
    presence: true,
    numericality: {
      greaterThanOrEqualTo: 0
    }
  }
}

var masks = {
  cardNumber: '0000-0000-0000-0000',
  phone: '(000) 000-0000',
  SSN: '000 00 0000',
  zipCode: '00000',
  yearFounded: '0000'
}

$(document).on('isReady', function () {
  // Intitialize VForms with validation constraints and masks
  var formCreator = new VForms(constraints, masks)
  // Add validations to each fieldset
  var forms = $('fieldset').toArray().map(function (fieldset) {
    return new formCreator.Form(fieldset)
  })
})
;









// vv Order matters for these





;
