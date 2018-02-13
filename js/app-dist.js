"use strict";function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,o){for(var e=0;e<o.length;e++){var i=o[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(o,e,i){return e&&t(o.prototype,e),i&&t(o,i),o}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=t(require("jquery")):t(jQuery)}(function(t){var o=function(t,o){return t.css({"background-position":"center "+-o+"px"})},e=function(t,o){return t.css({"background-position":-o+"px center"})},i=function(t,o){return t.css({"-webkit-transform":"translateY("+o+"px)","-moz-transform":"translateY("+o+"px)",transform:"translateY("+o+"px)",transition:"transform linear","will-change":"transform"})},n=function(t,o){return t.css({"-webkit-transform":"translateX("+o+"px)","-moz-transform":"translateX("+o+"px)",transform:"translateX("+o+"px)",transition:"transform linear","will-change":"transform"})};t.fn.paroller=function(r){var s=t(window).height(),a=t(document).height();r=t.extend({factor:0,type:"background",direction:"vertical"},r);return this.each(function(){var l=!1,c=t(this),f=c.offset().top,u=c.outerHeight(),d=c.data("paroller-factor"),h=c.data("paroller-type"),p=c.data("paroller-direction"),m=d||r.factor,v=h||r.type,w=p||r.direction,b=Math.round(f*m),y=Math.round((f-s/2+u)*m);"background"==v?"vertical"==w?o(c,b):"horizontal"==w&&e(c,b):"foreground"==v&&("vertical"==w?i(c,y):"horizontal"==w&&n(c,y));var g=function(){l=!1};t(window).on("scroll",function(){if(!l){var r=t(this).scrollTop();a=t(document).height(),b=Math.round((f-r)*m),y=Math.round((f-s/2+u-r)*m),"background"==v?"vertical"==w?o(c,b):"horizontal"==w&&e(c,b):"foreground"==v&&a>=r&&("vertical"==w?i(c,y):"horizontal"==w&&n(c,y)),window.requestAnimationFrame(g),l=!0}}).trigger("scroll")})}}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){function o(o){return!o.nodeName||-1!==t.inArray(o.nodeName.toLowerCase(),["iframe","#document","html","body"])}function e(o){return t.isFunction(o)||t.isPlainObject(o)?o:{top:o,left:o}}var i=t.scrollTo=function(o,e,i){return t(window).scrollTo(o,e,i)};return i.defaults={axis:"xy",duration:0,limit:!0},t.fn.scrollTo=function(n,r,s){"object"===(void 0===r?"undefined":_typeof(r))&&(s=r,r=0),"function"==typeof s&&(s={onAfter:s}),"max"===n&&(n=9e9),s=t.extend({},i.defaults,s),r=r||s.duration;var a=s.queue&&1<s.axis.length;return a&&(r/=2),s.offset=e(s.offset),s.over=e(s.over),this.each(function(){function l(o){var e=t.extend({},s,{queue:!0,duration:r,complete:o&&function(){o.call(u,h,s)}});d.animate(p,e)}if(null!==n){var c,f=o(this),u=f?this.contentWindow||window:this,d=t(u),h=n,p={};switch(void 0===h?"undefined":_typeof(h)){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(h)){h=e(h);break}h=f?t(h):t(h,u);case"object":if(0===h.length)return;(h.is||h.style)&&(c=(h=t(h)).offset())}var m=t.isFunction(s.offset)&&s.offset(u,h)||s.offset;t.each(s.axis.split(""),function(t,o){var e="x"===o?"Left":"Top",n=e.toLowerCase(),r="scroll"+e,v=d[r](),w=i.max(u,o);c?(p[r]=c[n]+(f?0:v-d.offset()[n]),s.margin&&(p[r]-=parseInt(h.css("margin"+e),10)||0,p[r]-=parseInt(h.css("border"+e+"Width"),10)||0),p[r]+=m[n]||0,s.over[n]&&(p[r]+=h["x"===o?"width":"height"]()*s.over[n])):(e=h[n],p[r]=e.slice&&"%"===e.slice(-1)?parseFloat(e)/100*w:e),s.limit&&/^\d+$/.test(p[r])&&(p[r]=0>=p[r]?0:Math.min(p[r],w)),!t&&1<s.axis.length&&(v===p[r]?p={}:a&&(l(s.onAfterFirst),p={}))}),l(s.onAfter)}})},i.max=function(e,i){var n="scroll"+(r="x"===i?"Width":"Height");if(!o(e))return e[n]-t(e)[r.toLowerCase()]();var r="client"+r,s=(a=e.ownerDocument||e.document).documentElement,a=a.body;return Math.max(s[n],a[n])-Math.min(s[r],a[r])},t.Tween.propHooks.scrollLeft=t.Tween.propHooks.scrollTop={get:function(o){return t(o.elem)[o.prop]()},set:function(o){var e=this.get(o);if(o.options.interrupt&&o._last&&o._last!==e)return t(o.elem).stop();var i=Math.round(o.now);e!==i&&(t(o.elem)[o.prop](i),o._last=this.get(o))}},i});var Loader=function t(){var o=this;_classCallCheck(this,t),this.bindEvents=function(){o.window.ready(o.hideLoader)},this.hideLoader=function(){var t=o,e=setTimeout(function(){t.loader.addClass("loader--inactive"),clearTimeout(e)},1e3)},this.loader=$(".loader"),this.window=$(window),this.bindEvents()},Hero=function t(){_classCallCheck(this,t),this.bindEvents=function(){},this.hero=$(".hero"),this.bindEvents()},Portfolio=function(){function t(){var o=this;_classCallCheck(this,t),this.bindEvents=function(){var t=o;o.showMore.click(o.showSubContent),o.portfolioLiveTrigger.click(function(o){o.preventDefault();var e=$(this),i=t.getPorfolioItem(e);t.displayPortfolioItem(i)}),o.btnBack.click(o.goBack.bind(o))},this.showSubContent=function(){o.portfolioSub.slideToggle(),o.isSubVisible?o.showMore.text("Show more"):o.showMore.text("Show less"),o.isSubVisible=!o.isSubVisible},this.displayPortfolioItem=function(t){o.iframe.attr("src",t),o.sectionMain.addClass("section-main--inactive"),o.hero.addClass("hero--inactive"),o.sectionPortfolioViewer.addClass("section-portfolio-viewer--active"),o.html.addClass("u-overflow-vertical-hidden");var e=setTimeout(function(){$.scrollTo(0,500),clearTimeout(e)},500)},this.portfolioMain=$(".portfolio__content-main"),this.showMore=$(".portfolio__show-more"),this.portfolioSub=$(".portfolio__content-sub"),this.isSubVisible=!1,this.portfolioLiveTrigger=$(".portfolio__item-cta__link--live"),this.baseUrl="http://andresliu.xyz/portfolio/",this.sectionMain=$(".section-main"),this.sectionPortfolioViewer=$(".section-portfolio-viewer"),this.hero=$(".hero"),this.btnBack=$(".section-portfolio-viewer__back"),this.iframe=$(".portfolio-viewer"),this.html=$("html"),this.bindEvents()}return _createClass(t,[{key:"getPorfolioItem",value:function(t){var o=t.parents(".portfolio__item").attr("data-portfolio");return this.baseUrl+o}},{key:"goBack",value:function(){this.sectionMain.removeClass("section-main--inactive"),this.hero.removeClass("hero--inactive"),this.sectionPortfolioViewer.removeClass("section-portfolio-viewer--active"),this.html.removeClass("u-overflow-vertical-hidden")}}]),t}(),loader=new Loader,hero=new Hero,portfolio=new Portfolio;
//# sourceMappingURL=app-dist.js.map