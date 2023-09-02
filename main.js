(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const n=function(){function t(e,n,r,o,i,u){var s=e.name,a=e.link,c=e.likes,l=e._id,f=e.owner;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=s,this._url=a,this._id=l,this._idOwner=f._id,this._template=n,this._handleImageClick=r,this._handleImageDelete=o,this.setLikes(c),this._handleCardLike=i,this._likeClassDark=u}var n,r;return n=t,(r=[{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementLike=this._element.querySelector(".element__like"),this._elementDelete=this._element.querySelector(".element__delete"),this._elementImage=this._element.querySelector(".element__image"),this._elementLikes=this._element.querySelector(".element__likes"),this.updateCountLikes(),this._setValues(),this._setEventListener(),this._element}},{key:"setLikes",value:function(t){this._likes=t}},{key:"updateCountLikes",value:function(){this._elementLikes.textContent=this._likes.length}},{key:"setDarkLike",value:function(){this._elementLike.classList.add(this._likeClassDark)}},{key:"deleteDarkLike",value:function(){this._elementLike.classList.remove(this._likeClassDark)}},{key:"likeIsDark",value:function(){return this._elementLike.classList.contains(this._likeClassDark)}},{key:"getCardId",value:function(){return this._id}},{key:"getOwnerId",value:function(){return this._idOwner}},{key:"unsetHiddenDelete",value:function(t){this._elementDelete.classList.remove(t)}},{key:"containsMyLike",value:function(t){return this._likes.some((function(e){return e._id===t}))}},{key:"_getTemplate",value:function(){return this._template.querySelector(".element").cloneNode(!0)}},{key:"_setValues",value:function(){this._element.querySelector(".element__title").textContent=this._title,this._elementImage.alt=this._title,this._elementImage.src=this._url}},{key:"_setEventListener",value:function(){var t=this;this._elementLike.addEventListener("click",(function(){t._handleCardLike()})),this._elementDelete.addEventListener("click",(function(){t._handleImageDelete()})),this._elementImage.addEventListener("click",(function(){t._handleImageClick({src:t._url,title:t._title})}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function i(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}const u=function(){function t(e,n){var r,o,u,s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,u=function(){s._buttonElement.classList.add(s._inactiveButtonClass),s._buttonElement.disabled=!0},(o=i(o="_setDisableMod"))in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,this._submitButtonSelector=e.submitButtonSelector,this._inputPopupClass=e.inputPopupClass,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){var t=this;this._inputs=Array.from(this._form.querySelectorAll(this._inputPopupClass)),this._toggleButtonState(),this._inputs.forEach((function(e){e.addEventListener("input",(function(e){return t._validate(e)}))}))}},{key:"resetValidation",value:function(){var t=this;this._setDisableMod(),this._inputs.forEach((function(e){t._hideError(e)}))}},{key:"getInputs",value:function(){return this._inputs}},{key:"_validate",value:function(t){this._checkInputValidity(t),this._toggleButtonState()}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._setDisableMod(this._buttonElement,this._inactiveButtonClass):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_checkInputValidity",value:function(t){var e=t.target;e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_showError",value:function(t,e){t.classList.add(this._inputErrorClass);var n=t.nextElementSibling;n.classList.add(this._errorClass),n.textContent=e}},{key:"_hideError",value:function(t){t.classList.remove(this._inputErrorClass);var e=t.nextElementSibling;e.textContent="",e.classList.remove(this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}const c=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._openedClass=n,this._closeButton=r,this._handleOverlayClick=this._handleOverlayClick.bind(this),this._handleButtonClick=this.close.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add(this._openedClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._openedClass),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this._handleButtonClick),this._popup.addEventListener("click",this._handleOverlayClick,!0)}},{key:"_handleOverlayClick",value:function(t){t.currentTarget==t.target&&(this.close(),t.stopPropagation())}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},p.apply(this,arguments)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r,o,s,a){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(c=i.call(this,t,e,r))._submitCallback=n,c._form=c._popup.querySelector(s),c._inputs=Array.from(c._popup.querySelectorAll(o)),c._submitButton=c._form.querySelector('button[type="submit"]'),c}return e=u,(n=[{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.id]}))}},{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){t[e.id]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;p(h(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues())}))}},{key:"setSubmitTitle",value:function(t){this._submitButton.textContent=t}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);const m=d;function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r,o){var s;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(s=i.call(this,t,e,o))._photoView=n,s._titleView=r,s}return e=u,(n=[{key:"open",value:function(t){_(g(u.prototype),"open",this).call(this),this._photoView.src=t.src,this._photoView.alt=t.title,this._titleView.textContent=t.title}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);const w=S;function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r,o){var s;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(s=i.call(this,t,e,r))._submitCallback=n,s._form=s._popup.querySelector(o),s}return e=u,(n=[{key:"getParams",value:function(){return this._params}},{key:"setParamsPopup",value:function(t){this._params=t}},{key:"resetParamsPopup",value:function(){this._params=void 0}},{key:"setEventListeners",value:function(){var t=this;j(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback()}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(c);const I=L;function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}const D=function(){function t(e,n){var r=e.items,o=e.render;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._render=o,this._container=n,this._items=r}var e,n;return e=t,(n=[{key:"setItems",value:function(t){this._items=t}},{key:"renderElements",value:function(){var t=this;this.clear(),this._items.forEach((function(e){t._render(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}const x=function(){function t(e){var n=e.nameElement,r=e.statusElement,o=e.id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameUser=n,this._statusUser=r,this._id=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{nameUser:this._nameUser.textContent,statusUser:this._statusUser.textContent}}},{key:"setUserInfo",value:function(t){var e=t.nameUser,n=t.statusUser,r=t.id;this._nameUser.textContent=e,this._statusUser.textContent=n,this._id=r}},{key:"getUserId",value:function(){return this._id}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}const A=function(){function t(e){var n=e.url,r=e.cohortId,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._cohortId=r,this._headers=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me"),{headers:this._headers,method:"GET"})}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards"),{headers:this._headers,method:"GET"})}},{key:"saveProfileData",value:function(t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(t)})}},{key:"addNewCard",value:function(t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(t)})}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/").concat(t),{headers:this._headers,method:"DELETE"})}},{key:"setLike",value:function(t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"PUT"})}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/").concat(t,"/likes"),{headers:this._headers,method:"DELETE"})}},{key:"updateAvatar",value:function(t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:t})})}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();var M=document.querySelector("#edit-profile"),N=document.querySelector("form[name=edit-profile]"),H=document.querySelector(".profile__edit-button"),J=document.querySelector("#close-edit-profile"),G=document.querySelector(".profile__name"),z=document.querySelector(".profile__status"),F=document.querySelector(".profile__avatar"),K=document.querySelector(".profile__avatar-area"),Q=document.querySelector("#add-photo"),W=document.querySelector("form[name=add-photo]"),X=document.querySelector(".profile__add-button"),Y=document.querySelector("#close-add-photo"),Z=document.querySelector(".elements__photos"),$=document.querySelector("#edit-avatar"),tt=document.querySelector("form[name=edit-avatar]"),et=document.querySelector("#close-edit-avatar"),nt=document.querySelector("#view-photo"),rt=document.querySelector("#close-view-photo"),ot=document.querySelector(".view__photo"),it=document.querySelector(".view__title"),ut="popup_opened",st=".popup__form",at=document.querySelector("#delete-photo"),ct=at.querySelector(".popup__close-button"),lt={inputPopupClass:".popup__type-input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__type-input_error",errorClass:"popup_input-error_active"},ft=document.querySelector("#template-element").content,pt=new D({items:[],render:function(t){var e=Pt(t);pt.addItem(e)}},Z),yt=new x({nameElement:G,statusElement:z}),ht=yt.getUserId(),dt=new A({url:"https://mesto.nomoreparties.co/v1",cohortId:"cohort-74",headers:{Authorization:"4ca4dfdd-8688-4312-b496-43b033a0044e","Content-Type":"application/json"}}),mt=new I(at,ut,(function(){dt.deleteCard(mt.getParams()).then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(){vt()})).catch((function(t){console.log(t)})).finally((function(){mt.resetParamsPopup(),mt.close()}))}),ct,st);function vt(){dt.getCards().then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(t){pt.setItems(t),pt.renderElements()})).catch((function(t){console.log(t)}))}dt.getUserInfo().then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(t){yt.setUserInfo({nameUser:t.name,statusUser:t.about,id:t._id}),ht=yt.getUserId(),F.src=t.avatar,vt()})).catch((function(t){console.log(t)}));var bt=new u(lt,W);bt.enableValidation();var _t=new m(Q,ut,(function(t){_t.setSubmitTitle("Сохранение ..."),dt.addNewCard({name:t.newPhotoName,link:t.newPhotoLink}).then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(t){var e=Pt(t);pt.addItem(e)})).catch((function(t){console.log(t)})).finally((function(){_t.setSubmitTitle("Сохранить"),_t.close()}))}),Y,lt.inputPopupClass,st),kt=new u(lt,tt);kt.enableValidation();var gt=new m($,ut,(function(t){gt.setSubmitTitle("Сохранение ..."),dt.updateAvatar(t.newAvatarLink).then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(t){F.src=t.avatar})).catch((function(t){console.log(t)})).finally((function(){gt.setSubmitTitle("Сохранить"),gt.close()}))}),et,lt.inputPopupClass,st),St=new u(lt,N);St.enableValidation();var wt=new m(M,ut,(function(t){wt.setSubmitTitle("Сохранение ..."),dt.saveProfileData({name:t.nameUser,about:t.statusUser}).then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(t){yt.setUserInfo({nameUser:t.name,statusUser:t.about})})).catch((function(t){console.log(t)})).finally((function(){wt.setSubmitTitle("Сохранить"),wt.close()}))}),J,lt.inputPopupClass,st),Et=new w(nt,ut,ot,it,rt);function Pt(t){var e=new n(t,ft,(function(t){Et.open(t)}),(function(){mt.setParamsPopup(e.getCardId()),mt.open()}),(function(){e.likeIsDark()?dt.deleteLike(e.getCardId()).then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(t){e.setLikes(t.likes),e.deleteDarkLike(),e.updateCountLikes()})).catch((function(t){console.log(t)})):dt.setLike(e.getCardId()).then((function(t){return!1===t.ok?Promise.reject(new Error(t.statusText)):t.json()})).then((function(t){e.setLikes(t.likes),e.setDarkLike(),e.updateCountLikes()})).catch((function(t){console.log(t)}))}),"element__like_dark"),r=e.generateCard();return e.getOwnerId()===yt.getUserId()&&e.unsetHiddenDelete("element__delete_hidden"),e.containsMyLike(ht)&&e.setDarkLike(),r}H.addEventListener("click",(function(){wt.setInputValues(yt.getUserInfo()),St.resetValidation(),wt.open()})),X.addEventListener("click",(function(){W.reset(),bt.resetValidation(),_t.open()})),K.addEventListener("click",(function(){tt.reset(),kt.resetValidation(),gt.open()})),wt.setEventListeners(),_t.setEventListeners(),gt.setEventListeners(),Et.setEventListeners(),mt.setEventListeners()})();