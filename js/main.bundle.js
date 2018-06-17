!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Math.floor(Math.random()*e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={},t=[];function n(n){if(e[n])return e[n];var i=new Image;i.onload=function(){e[n]=i,o()&&t.forEach(function(e){e()})},e[n]=!1,i.src=n}function o(){var t=!0;return Object.keys(e).forEach(function(n){Object.prototype.hasOwnProperty.call(e,n)&&!e[n]&&(t=!1)}),t}window.resources={load:function(e){e instanceof Array?e.forEach(function(e){n(e)}):n(e)},get:function(t){return e[t]},onReady:function(e){t.push(e)},isReady:o},console.log("resourseLoad")}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.conditionTaskTranslation={cat:["кот","кошка","котик"],dog:["собака","пес","пёс","собачка"],pen:["ручка"],pencil:["карандаш"],bird:["птица","птичка"],snake:["змея","змей","змейка"],spider:["паук","паучек"],sky:["небо"],sun:["солнце","солнышко"],table:["стол"],paper:["бумага"],book:["книга","книжка"],green:["зеленый","зелёный"],gray:["серый"],red:["красный","красненький"],blue:["синий"],yellow:["желтый"],word:["слово"],mouse:["мышка","мышь","мышенок","мышёнок"],sheep:["овечка","овца"],duck:["утка","уточка"],chicken:["цыпленок","цыплёнок"],horse:["конь","лошадь"],goat:["коза","козачка"],pear:["груша"],banana:["банан"],lemon:["лимон"],tomato:["помидор","помидорка"],beet:["свекла","свёкла"],carrot:["морковь","морковка"],cabbage:["капуста"],potato:["картошка"],eraser:["ластик"],envelope:["конверт"],soup:["суп","супчик"],bread:["хлеб","хлебушек"],cheese:["сыр"],teapot:["чайник"],spoon:["ложка"],knife:["нож","ножик"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(3),r=(o=n(0))&&o.__esModule?o:{default:o},s=function(){function e(t,n,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.question=n,this.condition=o,this.correctAnswer=i,this.answer=a}return i(e,[{key:"addTask",value:function(){var e=document.getElementById("task__question"),t=document.getElementById("task__condition");e.innerHTML=this.question,t.innerHTML=this.condition,this.answer="твой ответ"}},{key:"translation",value:function(){this.type="translation",this.question="Переведи английское слово на русский язык";var e=Object.keys(a.conditionTaskTranslation),t=e.length;this.condition=e[(0,r.default)(t)],this.correctAnswer=a.conditionTaskTranslation[this.condition]}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t,n,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.pos=n,this.sprite=o,this.winner=i||"player",this.points=a||20}return o(e,[{key:"animateHit",value:function(e,t){"player"===this.winner&&(this.pos[0]<t.width-150?this.pos[0]+=200*e:this.pos[0]=0),"enemy"===this.winner&&(this.pos[0]>0?this.pos[0]-=200*e:this.pos[0]=t.width-150)}},{key:"changeAnimateHit",value:function(e){this.pos=e}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t,n,o,i,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t||"Неизвестный герой",this.pos=n,this.sprite=o,this.record=i||0,this.health=a||100,this.isAlive=r||!0}return o(e,[{key:"addPlayerName",value:function(e){var t=document.getElementById("add__player__name").value;""!==t.trim()&&(this.name=t),e.textContent=this.name}},{key:"setLocalsorage",value:function(){localStorage.setItem("player"+Date.now(),this.name+","+this.record)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t,n,o,i,a,r,s,l,d){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.legs=n,this.rightArm=o,this.body=i,this.leftArm=a,this.head=r,this.weapons=s,this.pos=l||[0,5],this.health=d||100,this.isAlive=!0}return o(e,[{key:"addEnemyName",value:function(e){e.textContent=this.name}},{key:"animateEnemy",value:function(e){var t=0;this.pos[1]>0?(this.head.coordinat[1]+=.2*e,this.head.coordinat[0]-=2*e,this.rightArm.coordinat[1]+=3*e,this.rightArm.coordinat[0]+=3*e,this.leftArm.coordinat[1]-=3*e,this.leftArm.coordinat[0]-=3*e,this.weapons.coordinat[1]+=5*e,this.weapons.coordinat[0]+=5*e,this.pos[1]-=1,t++):(this.head.coordinat[1]-=.2*e,this.head.coordinat[0]+=2*e,this.rightArm.coordinat[1]-=3*e,this.rightArm.coordinat[0]-=3*e,this.leftArm.coordinat[1]+=3*e,this.leftArm.coordinat[0]+=3*e,this.weapons.coordinat[1]-=5*e,this.weapons.coordinat[0]-=5*e,this.pos[1]+=1,t--),0===this.pos[1]&&(t<0?this.pos[1]+=100:this.pos[1]-=100)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();(0,((o=n(1))&&o.__esModule?o:{default:o}).default)();var a=function(){function e(t,n,o,i,a,r,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t,this.pos=n,this.size=o,this.speed="number"==typeof i?i:0,this.frames=a,this._index=0,this.coordinat=r,this.dir=s||"horizontal",this.once=l}return i(e,[{key:"update",value:function(e){this._index+=this.speed*e}},{key:"render",value:function(e){var t=void 0;if(this.speed>0){var n=this.frames.length,o=Math.floor(this._index);if(t=this.frames[o%n],this.once&&o>=n)return void(this.done=!0)}else t=0;var i=this.pos[0],a=this.pos[1];"vertical"===this.dir?a+=t*this.size[1]:i+=t*this.size[0],e.drawImage(window.resources.get(this.url),i,a,this.size[0],this.size[1],this.coordinat[0],this.coordinat[1],this.size[0],this.size[1])}}]),e}();t.default=a},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t,n){var o;!function(){var i=window.CustomEvent;function a(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function r(e){e&&e.blur&&e!==document.body&&e.blur()}function s(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function l(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function d(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window)new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]});else{var t,n=!1,o=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),i=function(i){if(i.target===e){var a="DOMNodeRemoved";n|=i.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(t){e.addEventListener(t,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}i&&"object"!=typeof i||((i=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n}).prototype=window.Event.prototype),d.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),c.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}r(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!c.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,c.needsCentering(this.dialog_)?(c.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new i("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var c={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],o=null;try{o=n.cssRules}catch(e){}if(o)for(var i=0;i<o.length;++i){var a=o[i],r=null;try{r=document.querySelectorAll(a.selectorText)}catch(e){}if(r&&s(r,e)){var l=a.style.getPropertyValue("top"),d=a.style.getPropertyValue("bottom");if(l&&"auto"!==l||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(e){return!("absolute"!==window.getComputedStyle(e).position||"auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom||c.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new d(e)},registerDialog:function(e){e.showModal||c.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(e){for(var t,o=0;t=e.removedNodes[o];++o)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))}),n.length&&e(n)}))}};if(c.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},c.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},c.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var o=this.pendingDialogStack[0];o?(o.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},c.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=a(e);){for(var t,n=0;t=this.pendingDialogStack[n];++n)if(t.dialog===e)return 0===n;e=e.parentElement}return!1},c.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),r(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},c.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new i("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(t)&&n.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},c.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach(function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()})},c.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t||(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),0))},c.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},c.dm=new c.DialogManager,c.formSubmitter=null,c.useValue=null,void 0===window.HTMLDialogElement){var u=document.createElement("form");if(u.setAttribute("method","dialog"),"dialog"!==u.method){var h=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(h){var f=h.get;h.get=function(){return l(this)?"dialog":f.call(this)};var p=h.set;h.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):p.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",h)}}document.addEventListener("click",function(e){if(c.formSubmitter=null,c.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&l(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;c.useValue=e.offsetX+","+e.offsetY}a(t)&&(c.formSubmitter=t)}}},!1);var m=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!l(this))return m.call(this);var e=a(this);e&&e.close()},document.addEventListener("submit",function(e){var t=e.target;if(l(t)){e.preventDefault();var n=a(t);if(n){var o=c.formSubmitter;o&&o.form===t?n.close(c.useValue||o.value):n.close(),c.formSubmitter=null}}},!0)}c.forceRegisterDialog=c.forceRegisterDialog,c.registerDialog=c.registerDialog,"amd"in n(9)?void 0===(o=function(){return c}.call(t,n,t,e))||(e.exports=o):"object"==typeof e&&"object"==typeof e.exports?e.exports=c:window.dialogPolyfill=c}()},function(e,t,n){"use strict";var o=u(n(10));n(2);var i=u(n(1)),a=u(n(8)),r=u(n(7)),s=u(n(6)),l=u(n(5)),d=u(n(4)),c=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}(0,i.default)();var h=document.getElementById("start__game"),f=document.getElementById("start__screen"),p=document.getElementById("duil__screen"),m=document.getElementById("player__health__progress"),g=document.getElementById("enemy__health__progress"),v=function(e){e.classList.toggle("remove")},y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},w=document.getElementById("main__state__duel"),b=document.getElementById("block__hit"),_=document.createElement("canvas"),E=_.getContext("2d");_.width=500,_.height=500,w.appendChild(_);var k=document.createElement("canvas"),M=k.getContext("2d");k.width=500,k.height=500,w.appendChild(k);var T=document.createElement("canvas"),D=T.getContext("2d");function x(){_.width=window.innerWidth/2-13,_.height=window.innerHeight-150,k.width=window.innerWidth/2-13,k.height=window.innerHeight-150,T.width=window.innerWidth/2+140}T.width=500,T.height=200,b.appendChild(T),window.addEventListener("resize",x),x(),window.resources.load(["./img/sprite-boy.png","./img/enemies.png","./img/hitFire.png","./img/hitVortex.png","./img/hitHurricane.png","./img/hitSnowfall.png","./img/hitStarfall.png"]);var A=new s.default("Неизвестный герой",[-100,_.height-340],new a.default("./img/sprite-boy.png",[0,0],[220,300],6,[0,1,2,3,4,5,6,7,8,9],[0,0],!0),0,100);console.log(A);var I=["Злая","Ужасная","Вредная","Сопливая","Ворчливая"],S=["Ведьма","Колдунья","Старуха","Разбойница","Страшила"],O=["Пука","Кака","Чиха","Хлюпа","Блин"];function C(){var e=(0,c.default)(I.length),t=(0,c.default)(S.length),n=(0,c.default)(O.length);return I[e]+" "+S[t]+" "+O[n]}var L=document.getElementById("enemy__name"),P=new r.default(C(),new a.default("./img/enemies.png",[227*(0,c.default)(3),900],[227,180],0,[0,1],[k.width-340,k.height-170]),new a.default("./img/enemies.png",[227*(0,c.default)(3),720],[227,180],0,[0,1],[k.width-335,k.height-230]),new a.default("./img/enemies.png",[227*(0,c.default)(3),540],[227,180],0,[0,1],[k.width-340,k.height-230]),new a.default("./img/enemies.png",[227*(0,c.default)(3),360],[227,180],0,[0,1],[k.width-340,k.height-230]),new a.default("./img/enemies.png",[227*(0,c.default)(3),180],[227,180],0,[0,1],[k.width-300,k.height-365]),new a.default("./img/enemies.png",[227*(0,c.default)(3),0],[227,180],0,[0,1],[k.width-335,k.height-280]));P.addEnemyName(L),console.log(P),console.log(m);var H=new d.default,B=new l.default("name",[0,0],new a.default("./img/hitFire.png",[0,0],[129,128],15,[0,1,2,3,4,5,6,7,8,9],[50,50],!0));console.log(B),h.addEventListener("click",function(){v(f),v(p),$=Date.now(),te(),A.addPlayerName(ne),console.log(A.name),V(),Z()});var N=document.getElementById("dialog__modal"),j=document.getElementById("modal__name__player"),F=document.getElementById("modal__name__enemy"),z=document.getElementById("managment__hit"),R=document.getElementById("task__screen"),q=document.getElementById("task__answer"),K=document.getElementById("button__answer");function V(){j.innerHTML=A.name,F.innerHTML=P.name}function Z(){setTimeout(function(){N.showModal()},6e3)}window.dialogPolyfill=o.default,o.default.registerDialog(N);var W=void 0;function X(e,t,n){var o=n.health-e,i=setInterval(function(){if(n.health<=o)clearInterval(i);else{if(n.health>0)return n.health--,t.style.width=n.health+"%",t.innerHTML=1*n.health+"hp",n.health===e&&(n.isAlive=!1),n.health;clearInterval(i)}},260)}N.addEventListener("click",function(e){if(e.target&&e.target.matches("div.hit__icon"))return n=W=e.target.id,console.log(z),z.id=n,console.log("Element clicked!"+W),N.close(),t=W,B.sprite.url="./img/"+t+".png",setTimeout(function(){v(R),H.translation(),H.addTask()},2e3),W;var t,n}),console.log(W);var Y=document.getElementById("screen__score"),G=function(){for(var e=function(){for(var e=[],t=localStorage.length,n=0;n<t;n++)"player"===localStorage.key(n).substr(0,6)&&e.push(localStorage.getItem(localStorage.key(n)).split(","));for(var o=0;o<e.length;o++)e[o][1]=Number(e[o][1]);return function(e){for(var t=e.length,n=0;n<t-1;n++)for(var o=0;o<t-1-n;o++)if(e[o+1][1]>e[o][1]){var i=[e[o],e[o+1]];e[o+1]=i[0],e[o]=i[1]}return e}(e).slice(0,10)}(),t=document.getElementById("records__table"),n=0;n<e.length;n++){var o=document.createElement("tr"),i=document.createElement("td"),a=document.createElement("td"),r=e[n],s=r[0],l=r[1];i.textContent=s,a.textContent=l,o.appendChild(i),o.appendChild(a),t.appendChild(o)}};var U=function(){setTimeout(function(){P.name=C(),P.legs.pos=[227*(0,c.default)(3),900],P.rightArm.pos=[227*(0,c.default)(3),720],P.body.pos=[227*(0,c.default)(3),540],P.leftArm.pos=[227*(0,c.default)(3),360],P.head.pos=[227*(0,c.default)(3),180],P.weapons.pos=[227*(0,c.default)(3),0],P.health=100,P.isAlive=!0,P.addEnemyName(L),g.innerHTML=P.health+"hp",g.style.width=P.health+"%",V(),Z()},6e3)},J=document.getElementById("result__answer"),Q=function(){J.innerHTML="Молодец!",J.classList.toggle("answer__correct")};K.addEventListener("click",function(){v(b),H.answer=q.value.toString(),H.correctAnswer.some(function(e){return e===H.answer})?(console.log("yes"),Q(),J.innerHTML="Молодец!",B.winner="player",B.pos[0]=0,X(B.points,g,P)):(Q(),J.innerHTML="Ошибочка!",B.winner="enemy",B.pos[0]=T.width-150,X(B.points,m,A),console.log(A.health)),q.value="",setTimeout(function(){v(R),J.innerHTML=""},1e3),setTimeout(function(){v(b)},5500),A.isAlive?P.isAlive?Z():(A.record+=1,U()):(A.setLocalsorage(),setTimeout(function(){v(Y)},6500),G(),console.log("game over"))});var $=void 0,ee=void 0;function te(){var e,t=Date.now();(function(e){A.sprite.update(e),B.sprite.update(e)})(ee=(t-$)/1e3),e=A,E.save(),E.translate(e.pos[0],e.pos[1]),E.clearRect(0,0,_.width,_.height),e.sprite.render(E),E.restore(),function(e){M.save(),M.clearRect(0,0,k.width,k.height),e.legs.render(M),e.rightArm.render(M),e.body.render(M),e.leftArm.render(M),e.head.render(M),e.weapons.render(M),M.restore()}(P),function(e){D.save(),D.translate(e.pos[0],e.pos[1]),D.clearRect(0,0,T.width,T.height),e.sprite.render(D),D.restore()}(B),function(e){A.pos[0]<_.width/4?A.pos[0]+=oe*e:(A.sprite.pos=[0,300],A.sprite.frames=[0,1,2,3,4,5],A.sprite.speed=3)}(ee),B.animateHit(ee,T),P.animateEnemy(ee),$=t,y(te)}var ne=document.getElementById("player__name");console.log(A.sprite.url);var oe=100},function(e,t,n){n(11),e.exports=n(2)}]);
//# sourceMappingURL=main.bundle.js.map