var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+A(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+A(s,l);c+=j(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+A(s,l++),c+=j(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function N(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P={current:null},F={transition:null},ee={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:F,ReactCurrentOwner:C};function I(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,e.act=I,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:N}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},e.unstable_act=I,e.useCallback=function(e,t){return P.current.useCallback(e,t)},e.useContext=function(e){return P.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return P.current.useDeferredValue(e)},e.useEffect=function(e,t){return P.current.useEffect(e,t)},e.useId=function(){return P.current.useId()},e.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return P.current.useMemo(e,t)},e.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},e.useRef=function(e){return P.current.useRef(e)},e.useState=function(e){return P.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return P.current.useTransition()},e.version=`18.3.1`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,M(x);else{var t=n(l);t!==null&&N(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!D());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&N(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function D(){return!(e.unstable_now()-E<T)}function O(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}var k;if(typeof v==`function`)k=function(){v(O)};else if(typeof MessageChannel<`u`){var A=new MessageChannel,j=A.port2;A.port1.onmessage=O,k=function(){j.postMessage(null)}}else k=function(){g(O,0)};function M(e){C=e,S||(S=!0,k())}function N(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,M(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,N(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,M(x))),r},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p(),n=h();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},f={};function m(e){return l.call(f,e)?!0:l.call(d,e)?!1:u.test(e)?f[e]=!0:(d[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),D=Symbol.for(`react.strict_mode`),O=Symbol.for(`react.profiler`),k=Symbol.for(`react.provider`),A=Symbol.for(`react.context`),j=Symbol.for(`react.forward_ref`),M=Symbol.for(`react.suspense`),N=Symbol.for(`react.suspense_list`),P=Symbol.for(`react.memo`),F=Symbol.for(`react.lazy`),ee=Symbol.for(`react.offscreen`),I=Symbol.iterator;function L(e){return typeof e!=`object`||!e?null:(e=I&&e[I]||e[`@@iterator`],typeof e==`function`?e:null)}var R=Object.assign,z;function B(e){if(z===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);z=t&&t[1]||``}return`
`+z+e}var V=!1;function H(e,t){if(!e||V)return``;V=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{V=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?B(e):``}function te(e){switch(e.tag){case 5:return B(e.type);case 16:return B(`Lazy`);case 13:return B(`Suspense`);case 19:return B(`SuspenseList`);case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return``}}function ne(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case O:return`Profiler`;case D:return`StrictMode`;case M:return`Suspense`;case N:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case A:return(e.displayName||`Context`)+`.Consumer`;case k:return(e._context.displayName||`Context`)+`.Provider`;case j:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case P:return t=e.displayName||null,t===null?ne(e.type)||`Memo`:t;case F:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}function re(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ne(t);case 8:return t===D?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function ie(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function oe(e){var t=ae(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function se(e){e._valueTracker||=oe(e)}function ce(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ae(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function le(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ue(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function de(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=ie(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function fe(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function pe(e,t){fe(e,t);var n=ie(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?he(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&he(e,t.type,ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function me(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function he(e,t,n){(t!==`number`||le(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var ge=Array.isArray;function _e(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ie(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ve(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return R({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function ye(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(ge(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:ie(n)}}function be(e,t){var n=ie(t.value),r=ie(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function xe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Se(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ce(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Se(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var we,Te=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(we||=document.createElement(`div`),we.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=we.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ee(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(De).forEach(function(e){Oe.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),De[t]=De[e]})});function ke(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||De.hasOwnProperty(e)&&De[e]?(``+t).trim():t+`px`}function Ae(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=ke(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var je=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(e,t){if(t){if(je[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ne(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Pe=null;function Fe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ie=null,Le=null,Re=null;function ze(e){if(e=Pi(e)){if(typeof Ie!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ii(t),Ie(e.stateNode,e.type,t))}}function Be(e){Le?Re?Re.push(e):Re=[e]:Le=e}function Ve(){if(Le){var e=Le,t=Re;if(Re=Le=null,ze(e),t)for(e=0;e<t.length;e++)ze(t[e])}}function He(e,t){return e(t)}function Ue(){}var We=!1;function Ge(e,t,n){if(We)return e(t,n);We=!0;try{return He(e,t,n)}finally{We=!1,(Le!==null||Re!==null)&&(Ue(),Ve())}}function Ke(e,t){var n=e.stateNode;if(n===null)return null;var i=Ii(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var qe=!1;if(c)try{var Je={};Object.defineProperty(Je,"passive",{get:function(){qe=!0}}),window.addEventListener(`test`,Je,Je),window.removeEventListener(`test`,Je,Je)}catch{qe=!1}function Ye(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var Xe=!1,Ze=null,Qe=!1,$e=null,et={onError:function(e){Xe=!0,Ze=e}};function tt(e,t,n,r,i,a,o,s,c){Xe=!1,Ze=null,Ye.apply(et,arguments)}function nt(e,t,n,i,a,o,s,c,l){if(tt.apply(this,arguments),Xe){if(Xe){var u=Ze;Xe=!1,Ze=null}else throw Error(r(198));Qe||(Qe=!0,$e=u)}}function rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function it(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function at(e){if(rt(e)!==e)throw Error(r(188))}function ot(e){var t=e.alternate;if(!t){if(t=rt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return at(a),e;if(o===i)return at(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function st(e){return e=ot(e),e===null?null:ct(e)}function ct(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ct(e);if(t!==null)return t;e=e.sibling}return null}var lt=n.unstable_scheduleCallback,ut=n.unstable_cancelCallback,U=n.unstable_shouldYield,dt=n.unstable_requestPaint,ft=n.unstable_now,pt=n.unstable_getCurrentPriorityLevel,mt=n.unstable_ImmediatePriority,ht=n.unstable_UserBlockingPriority,gt=n.unstable_NormalPriority,W=n.unstable_LowPriority,_t=n.unstable_IdlePriority,vt=null,yt=null;function bt(e){if(yt&&typeof yt.onCommitFiberRoot==`function`)try{yt.onCommitFiberRoot(vt,e,void 0,(e.current.flags&128)==128)}catch{}}var xt=Math.clz32?Math.clz32:wt,St=Math.log,Ct=Math.LN2;function wt(e){return e>>>=0,e===0?32:31-(St(e)/Ct|0)|0}var Tt=64,Et=4194304;function Dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ot(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Dt(a))):r=Dt(s)}else o=n&~i,o===0?a!==0&&(r=Dt(a)):r=Dt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function kt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-xt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=kt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function jt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Mt(){var e=Tt;return Tt<<=1,!(Tt&4194240)&&(Tt=64),e}function Nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Ft(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function It(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Lt=0;function Rt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zt,Bt,Vt,Ht,Ut,Wt=!1,Gt=[],Kt=null,qt=null,Jt=null,Yt=new Map,Xt=new Map,Zt=[],Qt=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function $t(e,t){switch(e){case`focusin`:case`focusout`:Kt=null;break;case`dragenter`:case`dragleave`:qt=null;break;case`mouseover`:case`mouseout`:Jt=null;break;case`pointerover`:case`pointerout`:Yt.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Xt.delete(t.pointerId)}}function en(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&Bt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tn(e,t,n,r,i){switch(t){case`focusin`:return Kt=en(Kt,e,t,n,r,i),!0;case`dragenter`:return qt=en(qt,e,t,n,r,i),!0;case`mouseover`:return Jt=en(Jt,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Yt.set(a,en(Yt.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Xt.set(a,en(Xt.get(a)||null,e,t,n,r,i)),!0}return!1}function nn(e){var t=Ni(e.target);if(t!==null){var n=rt(t);if(n!==null){if(t=n.tag,t===13){if(t=it(n),t!==null){e.blockedOn=t,Ut(e.priority,function(){Vt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pe=r,n.target.dispatchEvent(r),Pe=null}else return t=Pi(n),t!==null&&Bt(t),e.blockedOn=n,!1;t.shift()}return!0}function an(e,t,n){rn(e)&&n.delete(t)}function on(){Wt=!1,Kt!==null&&rn(Kt)&&(Kt=null),qt!==null&&rn(qt)&&(qt=null),Jt!==null&&rn(Jt)&&(Jt=null),Yt.forEach(an),Xt.forEach(an)}function sn(e,t){e.blockedOn===t&&(e.blockedOn=null,Wt||(Wt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,on)))}function cn(e){function t(t){return sn(t,e)}if(0<Gt.length){sn(Gt[0],e);for(var n=1;n<Gt.length;n++){var r=Gt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&sn(Kt,e),qt!==null&&sn(qt,e),Jt!==null&&sn(Jt,e),Yt.forEach(t),Xt.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)nn(n),n.blockedOn===null&&Zt.shift()}var ln=C.ReactCurrentBatchConfig,un=!0;function dn(e,t,n,r){var i=Lt,a=ln.transition;ln.transition=null;try{Lt=1,pn(e,t,n,r)}finally{Lt=i,ln.transition=a}}function fn(e,t,n,r){var i=Lt,a=ln.transition;ln.transition=null;try{Lt=4,pn(e,t,n,r)}finally{Lt=i,ln.transition=a}}function pn(e,t,n,r){if(un){var i=hn(e,t,n,r);if(i===null)oi(e,t,r,mn,n),$t(e,r);else if(tn(i,e,t,n,r))r.stopPropagation();else if($t(e,r),t&4&&-1<Qt.indexOf(e)){for(;i!==null;){var a=Pi(i);if(a!==null&&zt(a),a=hn(e,t,n,r),a===null&&oi(e,t,r,mn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else oi(e,t,r,null,n)}}var mn=null;function hn(e,t,n,r){if(mn=null,e=Fe(r),e=Ni(e),e!==null){if(t=rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=it(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return mn=e,null}function gn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(pt()){case mt:return 1;case ht:return 4;case gt:case W:return 16;case _t:return 536870912;default:return 16}default:return 16}}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=R({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=R({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(R({},Mn,{dataTransfer:0})),Fn=wn(R({},Dn,{relatedTarget:0})),In=wn(R({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(R({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(R({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(R({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(R({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(R({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(R({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(R({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=[9,13,27,32],Xn=c&&`CompositionEvent`in window,Zn=null;c&&`documentMode`in document&&(Zn=document.documentMode);var Qn=c&&`TextEvent`in window&&!Zn,$n=c&&(!Xn||Zn&&8<Zn&&11>=Zn),er=` `,tr=!1;function G(e,t){switch(e){case`keyup`:return Yn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function K(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var nr=!1;function rr(e,t){switch(e){case`compositionend`:return K(t);case`keypress`:return t.which===32?(tr=!0,er):null;case`textInput`:return e=t.data,e===er&&tr?null:e;default:return null}}function ir(e,t){if(nr)return e===`compositionend`||!Xn&&G(e,t)?(e=bn(),yn=vn=_n=null,nr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return $n&&t.locale!==`ko`?null:t.data;default:return null}}var ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ar[e.type]:t===`textarea`}function sr(e,t,n,r){Be(r),t=ci(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var cr=null,lr=null;function ur(e){ei(e,0)}function dr(e){if(ce(Fi(e)))return e}function fr(e,t){if(e===`change`)return t}var pr=!1;if(c){var mr;if(c){var hr=`oninput`in document;if(!hr){var gr=document.createElement(`div`);gr.setAttribute(`oninput`,`return;`),hr=typeof gr.oninput==`function`}mr=hr}else mr=!1;pr=mr&&(!document.documentMode||9<document.documentMode)}function _r(){cr&&(cr.detachEvent(`onpropertychange`,vr),lr=cr=null)}function vr(e){if(e.propertyName===`value`&&dr(lr)){var t=[];sr(t,lr,e,Fe(e)),Ge(ur,t)}}function yr(e,t,n){e===`focusin`?(_r(),cr=t,lr=n,cr.attachEvent(`onpropertychange`,vr)):e===`focusout`&&_r()}function br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return dr(lr)}function xr(e,t){if(e===`click`)return dr(t)}function Sr(e,t){if(e===`input`||e===`change`)return dr(t)}function Cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var wr=typeof Object.is==`function`?Object.is:Cr;function Tr(e,t){if(wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function Er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dr(e,t){var n=Er(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Er(n)}}function Or(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Or(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kr(){for(var e=window,t=le();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=le(e.document)}return t}function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function jr(e){var t=kr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Or(n.ownerDocument.documentElement,n)){if(r!==null&&Ar(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Dr(n,a);var o=Dr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mr=c&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==le(r)||(r=Nr,`selectionStart`in r&&Ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Tr(Fr,r)||(Fr=r,r=ci(Pr,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};c&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionend`),qr=new Map,Jr=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function Yr(e,t){qr.set(e,t),o(t,[e])}for(var Xr=0;Xr<Jr.length;Xr++){var Zr=Jr[Xr];Yr(Zr.toLowerCase(),`on`+(Zr[0].toUpperCase()+Zr.slice(1)))}Yr(Ur,`onAnimationEnd`),Yr(Wr,`onAnimationIteration`),Yr(Gr,`onAnimationStart`),Yr(`dblclick`,`onDoubleClick`),Yr(`focusin`,`onFocus`),Yr(`focusout`,`onBlur`),Yr(Kr,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Qr=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),q=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(Qr));function $r(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,nt(r,t,void 0,e),e.currentTarget=null}function ei(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;$r(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;$r(i,s,l),a=c}}}if(Qe)throw e=$e,Qe=!1,$e=null,e}function ti(e,t){var n=t[Ai];n===void 0&&(n=t[Ai]=new Set);var r=e+`__bubble`;n.has(r)||(ai(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),ai(n,e,r,t)}var ri=`_reactListening`+Math.random().toString(36).slice(2);function ii(e){if(!e[ri]){e[ri]=!0,i.forEach(function(t){t!==`selectionchange`&&(q.has(t)||ni(t,!1,e),ni(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,ni(`selectionchange`,!1,t))}}function ai(e,t,n,r){switch(gn(t)){case 1:var i=dn;break;case 4:i=fn;break;default:i=pn}n=i.bind(null,t,n,e),i=void 0,!qe||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function oi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ni(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Ge(function(){var r=a,i=Fe(n),o=[];a:{var s=qr.get(e);if(s!==void 0){var c=En,l=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:c=Wn;break;case`focusin`:l=`focus`,c=Fn;break;case`focusout`:l=`blur`,c=Fn;break;case`beforeblur`:case`afterblur`:c=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Kn;break;case Ur:case Wr:case Gr:c=In;break;case Kr:c=qn;break;case`scroll`:c=On;break;case`wheel`:c=Jn;break;case`copy`:case`cut`:case`paste`:c=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Gn}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=Ke(p,f),h!=null&&u.push(si(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Pe&&(l=n.relatedTarget||n.fromElement)&&(Ni(l)||l[ki]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ni(l):null,l!==null&&(d=rt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Nn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Gn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Fi(c),m=l==null?s:Fi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Ni(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=J(m))p++;for(m=0,h=f;h;h=J(h))m++;for(;0<p-m;)u=J(u),p--;for(;0<m-p;)f=J(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=J(u),f=J(f)}u=null}else u=null;c!==null&&li(o,s,c,u,!1),l!==null&&d!==null&&li(o,d,l,u,!0)}}a:{if(s=r?Fi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=fr;else if(or(s)){if(pr)g=Sr;else{g=br;var _=yr}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=xr);if(g&&=g(e,r)){sr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&he(s,`number`,s.value)}switch(_=r?Fi(r):window,e){case`focusin`:(or(_)||_.contentEditable===`true`)&&(Nr=_,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(o,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(o,n,i)}var v;if(Xn)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else nr?G(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&($n&&n.locale!==`ko`&&(nr||y!==`onCompositionStart`?y===`onCompositionEnd`&&nr&&(v=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,nr=!0)),_=ci(r,y),0<_.length&&(y=new Rn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=K(n),v!==null&&(y.data=v)))),(v=Qn?rr(e,n):ir(e,n))&&(r=ci(r,`onBeforeInput`),0<r.length&&(i=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}ei(o,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ci(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ke(e,n),a!=null&&r.unshift(si(e,a,i)),a=Ke(e,t),a!=null&&r.push(si(e,a,i))),e=e.return}return r}function J(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function li(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=Ke(n,a),c!=null&&o.unshift(si(n,c,s))):i||(c=Ke(n,a),c!=null&&o.push(si(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ui=/\r\n?/g,di=/\u0000|\uFFFD/g;function fi(e){return(typeof e==`string`?e:``+e).replace(ui,`
`).replace(di,``)}function pi(e,t,n){if(t=fi(t),fi(e)!==t&&n)throw Error(r(425))}function mi(){}var hi=null,gi=null;function _i(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout==`function`?setTimeout:void 0,yi=typeof clearTimeout==`function`?clearTimeout:void 0,bi=typeof Promise==`function`?Promise:void 0,xi=typeof queueMicrotask==`function`?queueMicrotask:bi===void 0?vi:function(e){return bi.resolve(null).then(e).catch(Si)};function Si(e){setTimeout(function(){throw e})}function Ci(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),cn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);cn(t)}function wi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Ti(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),Di=`__reactFiber$`+Ei,Oi=`__reactProps$`+Ei,ki=`__reactContainer$`+Ei,Ai=`__reactEvents$`+Ei,ji=`__reactListeners$`+Ei,Mi=`__reactHandles$`+Ei;function Ni(e){var t=e[Di];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ki]||n[Di]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ti(e);e!==null;){if(n=e[Di])return n;e=Ti(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[Di]||e[ki],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ii(e){return e[Oi]||null}var Li=[],Ri=-1;function zi(e){return{current:e}}function Bi(e){0>Ri||(e.current=Li[Ri],Li[Ri]=null,Ri--)}function Vi(e,t){Ri++,Li[Ri]=e.current,e.current=t}var Hi={},Ui=zi(Hi),Wi=zi(!1),Gi=Hi;function Ki(e,t){var n=e.type.contextTypes;if(!n)return Hi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qi(e){return e=e.childContextTypes,e!=null}function Ji(){Bi(Wi),Bi(Ui)}function Yi(e,t,n){if(Ui.current!==Hi)throw Error(r(168));Vi(Ui,t),Vi(Wi,n)}function Xi(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,re(e)||`Unknown`,a));return R({},n,i)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hi,Gi=Ui.current,Vi(Ui,e),Vi(Wi,Wi.current),!0}function Qi(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=Xi(e,t,Gi),i.__reactInternalMemoizedMergedChildContext=e,Bi(Wi),Bi(Ui),Vi(Ui,e)):Bi(Wi),Vi(Wi,n)}var $i=null,ea=!1,ta=!1;function na(e){$i===null?$i=[e]:$i.push(e)}function ra(e){ea=!0,na(e)}function ia(){if(!ta&&$i!==null){ta=!0;var e=0,t=Lt;try{var n=$i;for(Lt=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$i=null,ea=!1}catch(t){throw $i!==null&&($i=$i.slice(e+1)),lt(mt,ia),t}finally{Lt=t,ta=!1}}return null}var aa=[],oa=0,sa=null,ca=0,la=[],ua=0,da=null,fa=1,pa=``;function ma(e,t){aa[oa++]=ca,aa[oa++]=sa,sa=e,ca=t}function ha(e,t,n){la[ua++]=fa,la[ua++]=pa,la[ua++]=da,da=e;var r=fa;e=pa;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var a=32-xt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fa=1<<32-xt(t)+i|n<<i|r,pa=a+e}else fa=1<<a|n<<i|r,pa=e}function ga(e){e.return!==null&&(ma(e,1),ha(e,1,0))}function _a(e){for(;e===sa;)sa=aa[--oa],aa[oa]=null,ca=aa[--oa],aa[oa]=null;for(;e===da;)da=la[--ua],la[ua]=null,pa=la[--ua],la[ua]=null,fa=la[--ua],la[ua]=null}var va=null,ya=null,ba=!1,xa=null;function Sa(e,t){var n=Yl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ca(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,va=e,ya=wi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,va=e,ya=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=da===null?null:{id:fa,overflow:pa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,va=e,ya=null,!0);default:return!1}}function wa(e){return!!(e.mode&1)&&!(e.flags&128)}function Ta(e){if(ba){var t=ya;if(t){var n=t;if(!Ca(e,t)){if(wa(e))throw Error(r(418));t=wi(n.nextSibling);var i=va;t&&Ca(e,t)?Sa(i,n):(e.flags=e.flags&-4097|2,ba=!1,va=e)}}else{if(wa(e))throw Error(r(418));e.flags=e.flags&-4097|2,ba=!1,va=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;va=e}function Da(e){if(e!==va)return!1;if(!ba)return Ea(e),ba=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!_i(e.type,e.memoizedProps)),t&&=ya){if(wa(e))throw Oa(),Error(r(418));for(;t;)Sa(e,t),t=wi(t.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ya=wi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ya=null}}else ya=va?wi(e.stateNode.nextSibling):null;return!0}function Oa(){for(var e=ya;e;)e=wi(e.nextSibling)}function ka(){ya=va=null,ba=!1}function Aa(e){xa===null?xa=[e]:xa.push(e)}var ja=C.ReactCurrentBatchConfig;function Ma(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Na(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Pa(e){var t=e._init;return t(e._payload)}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Ql(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=nu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===F&&Pa(i)===t.type)?(r=a(t,n.props),r.ref=Ma(e,t,n),r.return=e,r):(r=$l(n.type,n.key,n.props,null,e.mode,r),r.ref=Ma(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ru(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=eu(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=nu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=$l(t.type,t.key,t.props,null,e.mode,n),n.ref=Ma(e,null,t),n.return=e,n;case T:return t=ru(t,e.mode,n),t.return=e,t;case F:var r=t._init;return f(e,r(t._payload),n)}if(ge(t)||L(t))return t=eu(t,e.mode,n,null),t.return=e,t;Na(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case F:return i=n._init,p(e,t,i(n._payload),r)}if(ge(n)||L(n))return i===null?d(e,t,n,r,null):null;Na(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case F:var a=r._init;return m(e,t,n,a(r._payload),i)}if(ge(r)||L(r))return e=e.get(n)||null,d(t,e,r,i,null);Na(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),ba&&ma(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return ba&&ma(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),ba&&ma(r,h),l}function g(a,s,c,l){var u=L(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),ba&&ma(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return ba&&ma(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),ba&&ma(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===F&&Pa(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Ma(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===E?(r=eu(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=$l(i.type,i.key,i.props,null,e.mode,o),o.ref=Ma(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=ru(i,e.mode,o),r.return=e,e=r}return s(e);case F:return l=i._init,_(e,r,l(i._payload),o)}if(ge(i))return h(e,r,i,o);if(L(i))return g(e,r,i,o);Na(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=nu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ia=Fa(!0),La=Fa(!1),Ra=zi(null),za=null,Ba=null,Va=null;function Ha(){Va=Ba=za=null}function Ua(e){var t=Ra.current;Bi(Ra),e._currentValue=t}function Wa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ga(e,t){za=e,Va=Ba=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fs=!0),e.firstContext=null)}function Ka(e){var t=e._currentValue;if(Va!==e){if(e={context:e,memoizedValue:t,next:null},Ba===null){if(za===null)throw Error(r(308));Ba=e,za.dependencies={lanes:0,firstContext:e}}else Ba=Ba.next=e}return t}var qa=null;function Ja(e){qa===null?qa=[e]:qa.push(e)}function Ya(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ja(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xa(e,r)}function Xa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Za=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $a(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function eo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function to(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Wc&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xa(e,n)}return i=r.interleaved,i===null?(t.next=t,Ja(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xa(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,It(e,n)}}function ro(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;Za=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=R({},d,f);break a;case 2:Za=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Zc|=o,e.lanes=o,e.memoizedState=d}}function ao(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var oo={},so=zi(oo),co=zi(oo),lo=zi(oo);function uo(e){if(e===oo)throw Error(r(174));return e}function fo(e,t){switch(Vi(lo,t),Vi(co,e),Vi(so,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ce(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ce(t,e)}Bi(so),Vi(so,t)}function po(){Bi(so),Bi(co),Bi(lo)}function mo(e){uo(lo.current);var t=uo(so.current),n=Ce(t,e.type);t!==n&&(Vi(co,e),Vi(so,n))}function ho(e){co.current===e&&(Bi(so),Bi(co))}var go=zi(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=[];function yo(){for(var e=0;e<vo.length;e++)vo[e]._workInProgressVersionPrimary=null;vo.length=0}var bo=C.ReactCurrentDispatcher,xo=C.ReactCurrentBatchConfig,So=0,Co=null,wo=null,To=null,Eo=!1,Do=!1,Oo=0,ko=0;function Ao(){throw Error(r(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Mo(e,t,n,i,a,o){if(So=o,Co=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?hs:gs,e=n(i,a),Do){o=0;do{if(Do=!1,Oo=0,25<=o)throw Error(r(301));o+=1,To=wo=null,t.updateQueue=null,bo.current=_s,e=n(i,a)}while(Do)}if(bo.current=ms,t=wo!==null&&wo.next!==null,So=0,To=wo=Co=null,Eo=!1,t)throw Error(r(300));return e}function No(){var e=Oo!==0;return Oo=0,e}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?Co.memoizedState=To=e:To=To.next=e,To}function Fo(){if(wo===null){var e=Co.alternate;e=e===null?null:e.memoizedState}else e=wo.next;var t=To===null?Co.memoizedState:To.next;if(t!==null)To=t,wo=e;else{if(e===null)throw Error(r(310));wo=e,e={memoizedState:wo.memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},To===null?Co.memoizedState=To=e:To=To.next=e}return To}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=wo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((So&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,Co.lanes|=d,Zc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,wr(i,t.memoizedState)||(Fs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Co.lanes|=o,Zc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ro(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);wr(o,t.memoizedState)||(Fs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function zo(){}function Bo(e,t){var n=Co,i=Fo(),a=t(),o=!wr(i.memoizedState,a);if(o&&(i.memoizedState=a,Fs=!0),i=i.queue,Qo(Uo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||To!==null&&To.memoizedState.tag&1){if(n.flags|=2048,qo(9,Ho.bind(null,n,i,a,t),void 0,null),X===null)throw Error(r(349));So&30||Vo(n,t,a)}return a}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Co.updateQueue,t===null?(t={lastEffect:null,stores:null},Co.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch{return!0}}function Go(e){var t=Xa(e,1);t!==null&&_l(t,e,1,-1)}function Ko(e){var t=Po();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=us.bind(null,Co,e),[t.memoizedState,e]}function qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Co.updateQueue,t===null?(t={lastEffect:null,stores:null},Co.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jo(){return Fo().memoizedState}function Yo(e,t,n,r){var i=Po();Co.flags|=e,i.memoizedState=qo(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=void 0;if(wo!==null){var o=wo.memoizedState;if(a=o.destroy,r!==null&&jo(r,o.deps)){i.memoizedState=qo(t,n,a,r);return}}Co.flags|=e,i.memoizedState=qo(1|t,n,a,r)}function Zo(e,t){return Yo(8390656,8,e,t)}function Qo(e,t){return Xo(2048,8,e,t)}function $o(e,t){return Xo(4,2,e,t)}function es(e,t){return Xo(4,4,e,t)}function ts(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ns(e,t,n){return n=n==null?null:n.concat([e]),Xo(4,4,ts.bind(null,t,e),n)}function rs(){}function is(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function as(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function os(e,t,n){return So&21?(wr(n,t)||(n=Mt(),Co.lanes|=n,Zc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fs=!0),e.memoizedState=n)}function ss(e,t){var n=Lt;Lt=n!==0&&4>n?n:4,e(!0);var r=xo.transition;xo.transition={};try{e(!1),t()}finally{Lt=n,xo.transition=r}}function cs(){return Fo().memoizedState}function ls(e,t,n){var r=gl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ds(e))fs(t,n);else if(n=Ya(e,t,n,r),n!==null){var i=hl();_l(n,e,r,i),ps(n,t,r)}}function us(e,t,n){var r=gl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ds(e))fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o)){var c=t.interleaved;c===null?(i.next=i,Ja(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Ya(e,t,i,r),n!==null&&(i=hl(),_l(n,e,r,i),ps(n,t,r))}}function ds(e){var t=e.alternate;return e===Co||t!==null&&t===Co}function fs(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ps(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,It(e,n)}}var ms={readContext:Ka,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useInsertionEffect:Ao,useLayoutEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useMutableSource:Ao,useSyncExternalStore:Ao,useId:Ao,unstable_isNewReconciler:!1},hs={readContext:Ka,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:Ka,useEffect:Zo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Yo(4194308,4,ts.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=Po();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Po();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ls.bind(null,Co,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:Ko,useDebugValue:rs,useDeferredValue:function(e){return Po().memoizedState=e},useTransition:function(){var e=Ko(!1),t=e[0];return e=ss.bind(null,e[1]),Po().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Co,a=Po();if(ba){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),X===null)throw Error(r(349));So&30||Vo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Zo(Uo.bind(null,i,o,e),[e]),i.flags|=2048,qo(9,Ho.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Po(),t=X.identifierPrefix;if(ba){var n=pa,r=fa;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Oo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=ko++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},gs={readContext:Ka,useCallback:is,useContext:Ka,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Lo,useRef:Jo,useState:function(){return Lo(Io)},useDebugValue:rs,useDeferredValue:function(e){return os(Fo(),wo.memoizedState,e)},useTransition:function(){return[Lo(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1},_s={readContext:Ka,useCallback:is,useContext:Ka,useEffect:Qo,useImperativeHandle:ns,useInsertionEffect:$o,useLayoutEffect:es,useMemo:as,useReducer:Ro,useRef:Jo,useState:function(){return Ro(Io)},useDebugValue:rs,useDeferredValue:function(e){var t=Fo();return wo===null?t.memoizedState=e:os(t,wo.memoizedState,e)},useTransition:function(){return[Ro(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:cs,unstable_isNewReconciler:!1};function vs(e,t){if(e&&e.defaultProps){for(var n in t=R({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:R({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bs={isMounted:function(e){return(e=e._reactInternals)?rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=eo(r,i);a.payload=t,n!=null&&(a.callback=n),t=to(e,a,i),t!==null&&(_l(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hl(),i=gl(e),a=eo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=to(e,a,i),t!==null&&(_l(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hl(),r=gl(e),i=eo(n,r);i.tag=2,t!=null&&(i.callback=t),t=to(e,i,r),t!==null&&(_l(t,e,r,n),no(t,e,r))}};function xs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,a):!0}function Ss(e,t,n){var r=!1,i=Hi,a=t.contextType;return typeof a==`object`&&a?a=Ka(a):(i=qi(t)?Gi:Ui.current,r=t.contextTypes,a=(r=r!=null)?Ki(e,i):Hi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Cs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bs.enqueueReplaceState(t,t.state,null)}function ws(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Qa(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ka(a):(a=qi(t)?Gi:Ui.current,i.context=Ki(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(ys(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&bs.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ts(e,t){try{var n=``,r=t;do n+=te(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ds(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Os=typeof WeakMap==`function`?WeakMap:Map;function ks(e,t,n){n=eo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,ol=r),Ds(e,t)},n}function As(e,t,n){n=eo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ds(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ds(e,t),typeof r!=`function`&&(sl===null?sl=new Set([this]):sl.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Os;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Hl.bind(null,e,t,n),t.then(e,e))}function Ms(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=eo(-1,1),t.tag=2,to(n,t,1))),n.lanes|=1),e)}var Ps=C.ReactCurrentOwner,Fs=!1;function Is(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function Ls(e,t,n,r,i){n=n.render;var a=t.ref;return Ga(t,i),r=Mo(e,t,n,r,a,i),n=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(ba&&n&&ga(t),t.flags|=1,Is(e,t,r,i),t.child)}function Rs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Xl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zs(e,t,a,r,i)):(e=$l(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Tr:n,n(o,r)&&e.ref===t.ref)return rc(e,t,i)}return t.flags|=1,e=Ql(a,r),e.ref=t.ref,e.return=t,t.child=e}function zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Tr(a,r)&&e.ref===t.ref){if(Fs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Fs=!0);else return t.lanes=e.lanes,rc(e,t,i)}}return Hs(e,t,n,r,i)}function Bs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vi(Jc,qc),qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Vi(Jc,qc),qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,Vi(Jc,qc),qc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),Vi(Jc,qc),qc|=r;return Is(e,t,i,n),t.child}function Vs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,n,r,i){var a=qi(n)?Gi:Ui.current;return a=Ki(t,a),Ga(t,i),n=Mo(e,t,n,r,a,i),r=No(),e!==null&&!Fs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rc(e,t,i)):(ba&&r&&ga(t),t.flags|=1,Is(e,t,n,i),t.child)}function Us(e,t,n,r,i){if(qi(n)){var a=!0;Zi(t)}else a=!1;if(Ga(t,i),t.stateNode===null)nc(e,t),Ss(t,n,r),ws(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ka(l):(l=qi(n)?Gi:Ui.current,l=Ki(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Cs(t,o,r,l),Za=!1;var f=t.memoizedState;o.state=f,io(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Wi.current||Za?(typeof u==`function`&&(ys(t,n,u,r),c=t.memoizedState),(s=Za||xs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,$a(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:vs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ka(c):(c=qi(n)?Gi:Ui.current,c=Ki(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Cs(t,o,r,c),Za=!1,f=t.memoizedState,o.state=f,io(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Wi.current||Za?(typeof p==`function`&&(ys(t,n,p,r),m=t.memoizedState),(l=Za||xs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ws(e,t,n,r,a,i)}function Ws(e,t,n,r,i,a){Vs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&Qi(t,n,!1),rc(e,t,a);r=t.stateNode,Ps.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ia(t,e.child,null,a),t.child=Ia(t,null,s,a)):Is(e,t,s,a),t.memoizedState=r.state,i&&Qi(t,n,!0),t.child}function Gs(e){var t=e.stateNode;t.pendingContext?Yi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yi(e,t.context,!1),fo(e,t.containerInfo)}function Ks(e,t,n,r,i){return ka(),Aa(i),t.flags|=256,Is(e,t,n,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,t,n){var r=t.pendingProps,i=go.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Vi(go,i&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=tu(o,r,0,null),e=eu(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Js(n),t.memoizedState=qs,e):Xs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ql(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=eu(a,o,n,null),a.flags|=2):a=Ql(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Js(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=qs,r}return a=e.child,e=a.sibling,r=Ql(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=tu({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Zs(e,t,n,r){return r!==null&&Aa(r),Ia(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Es(Error(r(422))),Zs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=tu({mode:`visible`,children:i.children},a,0,null),o=eu(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ia(t,e.child,null,s),t.child.memoizedState=Js(s),t.memoizedState=qs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Zs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Es(o,i,void 0),Zs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Fs||c){if(i=X,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Xa(e,a),_l(i,e,a,-1))}return jl(),i=Es(Error(r(421))),Zs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Wl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ya=wi(a.nextSibling),va=t,ba=!0,xa=null,e!==null&&(la[ua++]=fa,la[ua++]=pa,la[ua++]=da,fa=e.id,pa=e.overflow,da=t),t=Xs(t,i.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wa(e.return,t,n)}function ec(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Is(e,t,r.children,n),r=go.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Vi(go,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ec(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ec(t,!0,n,null,a);break;case`together`:ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Ql(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ql(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ic(e,t,n){switch(t.tag){case 3:Gs(t),ka();break;case 5:mo(t);break;case 1:qi(t.type)&&Zi(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Vi(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Vi(go,go.current&1),e=rc(e,t,n),e===null?null:e.sibling):Ys(e,t,n):(Vi(go,go.current&1),t.flags|=128,null);Vi(go,go.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vi(go,go.current),r)break;return null;case 22:case 23:return t.lanes=0,Bs(e,t,n)}return rc(e,t,n)}var ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},oc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,uo(so.current);var o=null;switch(n){case`input`:i=ue(e,i),r=ue(e,r),o=[];break;case`select`:i=R({},i,{value:void 0}),r=R({},r,{value:void 0}),o=[];break;case`textarea`:i=ve(e,i),r=ve(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=mi)}Me(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&ti(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function cc(e,t){if(!ba)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uc(e,t,n){var i=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lc(t),null;case 1:return qi(t.type)&&Ji(),lc(t),null;case 3:return i=t.stateNode,po(),Bi(Wi),Bi(Ui),yo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xa!==null&&(xl(xa),xa=null))),lc(t),null;case 5:ho(t);var o=uo(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)oc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return lc(t),null}if(e=uo(so.current),Da(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Di]=t,i[Oi]=s,e=!!(t.mode&1),n){case`dialog`:ti(`cancel`,i),ti(`close`,i);break;case`iframe`:case`object`:case`embed`:ti(`load`,i);break;case`video`:case`audio`:for(o=0;o<Qr.length;o++)ti(Qr[o],i);break;case`source`:ti(`error`,i);break;case`img`:case`image`:case`link`:ti(`error`,i),ti(`load`,i);break;case`details`:ti(`toggle`,i);break;case`input`:de(i,s),ti(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},ti(`invalid`,i);break;case`textarea`:ye(i,s),ti(`invalid`,i)}for(var c in Me(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&pi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&pi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&ti(`scroll`,i)}switch(n){case`input`:se(i),me(i,s,!0);break;case`textarea`:se(i),xe(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=mi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Se(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Di]=t,e[Oi]=i,ac(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ne(n,i),n){case`dialog`:ti(`cancel`,e),ti(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:ti(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<Qr.length;o++)ti(Qr[o],e);o=i;break;case`source`:ti(`error`,e),o=i;break;case`img`:case`image`:case`link`:ti(`error`,e),ti(`load`,e),o=i;break;case`details`:ti(`toggle`,e),o=i;break;case`input`:de(e,i),o=ue(e,i),ti(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=R({},i,{value:void 0}),ti(`invalid`,e);break;case`textarea`:ye(e,i),o=ve(e,i),ti(`invalid`,e);break;default:o=i}for(s in Me(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ae(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Te(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Ee(e,u):typeof u==`number`&&Ee(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&ti(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:se(e),me(e,i,!1);break;case`textarea`:se(e),xe(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+ie(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&_e(e,!!i.multiple,i.defaultValue,!0):_e(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=mi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lc(t),null;case 6:if(e&&t.stateNode!=null)sc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=uo(lo.current),uo(so.current),Da(t)){if(i=t.stateNode,n=t.memoizedProps,i[Di]=t,(s=i.nodeValue!==n)&&(e=va,e!==null))switch(e.tag){case 3:pi(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&pi(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Di]=t,t.stateNode=i}return lc(t),null;case 13:if(Bi(go),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ba&&ya!==null&&t.mode&1&&!(t.flags&128))Oa(),ka(),t.flags|=98560,s=!1;else if(s=Da(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Di]=t}else ka(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lc(t),s=!1}else xa!==null&&(xl(xa),xa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||go.current&1?Yc===0&&(Yc=3):jl())),t.updateQueue!==null&&(t.flags|=4),lc(t),null);case 4:return po(),e===null&&ii(t.stateNode.containerInfo),lc(t),null;case 10:return Ua(t.type._context),lc(t),null;case 17:return qi(t.type)&&Ji(),lc(t),null;case 19:if(Bi(go),s=t.memoizedState,s===null)return lc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)cc(s,!1);else{if(Yc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=_o(e),c!==null){for(t.flags|=128,cc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Vi(go,go.current&1|2),t.child}e=e.sibling}s.tail!==null&&ft()>rl&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=_o(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!ba)return lc(t),null}else 2*ft()-s.renderingStartTime>rl&&n!==1073741824&&(t.flags|=128,i=!0,cc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(lc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ft(),t.sibling=null,n=go.current,Vi(go,i?n&1|2:n&1),t);case 22:case 23:return Dl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qc&1073741824&&(lc(t),t.subtreeFlags&6&&(t.flags|=8192)):lc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function dc(e,t){switch(_a(t),t.tag){case 1:return qi(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return po(),Bi(Wi),Bi(Ui),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(Bi(go),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Bi(go),null;case 4:return po(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var fc=!1,pc=!1,mc=typeof WeakSet==`function`?WeakSet:Set,Y=null;function hc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Vl(e,t,n)}else n.current=null}}function gc(e,t,n){try{n()}catch(n){Vl(e,t,n)}}var _c=!1;function vc(e,t){if(hi=un,e=kr(),Ar(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},un=!1,Y=t;Y!==null;)if(t=Y,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:vs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Vl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return h=_c,_c=!1,h}function yc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&gc(t,n,a)}i=i.next}while(i!==r)}}function bc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Sc(e){var t=e.alternate;t!==null&&(e.alternate=null,Sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Di],delete t[Oi],delete t[Ai],delete t[ji],delete t[Mi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function wc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mi));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}var Dc=null,Oc=!1;function kc(e,t,n){for(n=n.child;n!==null;)Ac(e,t,n),n=n.sibling}function Ac(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount==`function`)try{yt.onCommitFiberUnmount(vt,n)}catch{}switch(n.tag){case 5:pc||hc(n,t);case 6:var r=Dc,i=Oc;Dc=null,kc(e,t,n),Dc=r,Oc=i,Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Dc.removeChild(n.stateNode));break;case 18:Dc!==null&&(Oc?(e=Dc,n=n.stateNode,e.nodeType===8?Ci(e.parentNode,n):e.nodeType===1&&Ci(e,n),cn(e)):Ci(Dc,n.stateNode));break;case 4:r=Dc,i=Oc,Dc=n.stateNode.containerInfo,Oc=!0,kc(e,t,n),Dc=r,Oc=i;break;case 0:case 11:case 14:case 15:if(!pc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&gc(n,t,o),i=i.next}while(i!==r)}kc(e,t,n);break;case 1:if(!pc&&(hc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Vl(n,t,e)}kc(e,t,n);break;case 21:kc(e,t,n);break;case 22:n.mode&1?(pc=(r=pc)||n.memoizedState!==null,kc(e,t,n),pc=r):kc(e,t,n);break;default:kc(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mc),t.forEach(function(t){var r=Gl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Mc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Dc=c.stateNode,Oc=!1;break a;case 3:Dc=c.stateNode.containerInfo,Oc=!0;break a;case 4:Dc=c.stateNode.containerInfo,Oc=!0;break a}c=c.return}if(Dc===null)throw Error(r(160));Ac(o,s,a),Dc=null,Oc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Vl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mc(t,e),Pc(e),i&4){try{yc(3,e,e.return),bc(3,e)}catch(t){Vl(e,e.return,t)}try{yc(5,e,e.return)}catch(t){Vl(e,e.return,t)}}break;case 1:Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return);break;case 5:if(Mc(t,e),Pc(e),i&512&&n!==null&&hc(n,n.return),e.flags&32){var a=e.stateNode;try{Ee(a,``)}catch(t){Vl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&fe(a,o),Ne(c,s);var u=Ne(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ae(a,f):d===`dangerouslySetInnerHTML`?Te(a,f):d===`children`?Ee(a,f):S(a,d,f,u)}switch(c){case`input`:pe(a,o);break;case`textarea`:be(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?_e(a,!!o.multiple,o.multiple?[]:``,!1):_e(a,!!o.multiple,o.defaultValue,!0)):_e(a,!!o.multiple,m,!1)}a[Oi]=o}catch(t){Vl(e,e.return,t)}}break;case 6:if(Mc(t,e),Pc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Vl(e,e.return,t)}}break;case 3:if(Mc(t,e),Pc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{cn(t.containerInfo)}catch(t){Vl(e,e.return,t)}break;case 4:Mc(t,e),Pc(e);break;case 13:Mc(t,e),Pc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(nl=ft())),i&4&&jc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pc=(u=pc)||d,Mc(t,e),pc=u):Mc(t,e),Pc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(f=Y=d;Y!==null;){switch(p=Y,m=p.child,p.tag){case 0:case 11:case 14:case 15:yc(4,p,p.return);break;case 1:hc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Vl(i,n,e)}}break;case 5:hc(p,p.return);break;case 22:if(p.memoizedState!==null){Rc(f);continue}}m===null?Rc(f):(m.return=p,Y=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=ke(`display`,s))}catch(t){Vl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Vl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mc(t,e),Pc(e),i&4&&jc(e);break;case 21:break;default:Mc(t,e),Pc(e)}}function Pc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Cc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Ee(a,``),i.flags&=-33),Ec(e,wc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Tc(e,wc(e),o);break;default:throw Error(r(161))}}catch(t){Vl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fc(e,t,n){Y=e,Ic(e,t,n)}function Ic(e,t,n){for(var r=!!(e.mode&1);Y!==null;){var i=Y,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||pc;s=fc;var l=pc;if(fc=o,(pc=c)&&!l)for(Y=i;Y!==null;)o=Y,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?zc(i):(c.return=o,Y=c);for(;a!==null;)Y=a,Ic(a,t,n),a=a.sibling;Y=i,fc=s,pc=l}Lc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Y=a):Lc(e,t,n)}}function Lc(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pc||bc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!pc){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:vs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&ao(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ao(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&cn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}pc||t.flags&512&&xc(t)}catch(e){Vl(t,t.return,e)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Rc(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function zc(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bc(4,t)}catch(e){Vl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Vl(t,i,e)}}var a=t.return;try{xc(t)}catch(e){Vl(t,a,e)}break;case 5:var o=t.return;try{xc(t)}catch(e){Vl(t,o,e)}}}catch(e){Vl(t,t.return,e)}if(t===e){Y=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Y=s;break}Y=t.return}}var Bc=Math.ceil,Vc=C.ReactCurrentDispatcher,Hc=C.ReactCurrentOwner,Uc=C.ReactCurrentBatchConfig,Wc=0,X=null,Gc=null,Kc=0,qc=0,Jc=zi(0),Yc=0,Xc=null,Zc=0,Qc=0,$c=0,el=null,tl=null,nl=0,rl=1/0,il=null,al=!1,ol=null,sl=null,cl=!1,ll=null,ul=0,dl=0,fl=null,pl=-1,ml=0;function hl(){return Wc&6?ft():pl===-1?pl=ft():pl}function gl(e){return e.mode&1?Wc&2&&Kc!==0?Kc&-Kc:ja.transition===null?(e=Lt,e===0?(e=window.event,e=e===void 0?16:gn(e.type),e):e):(ml===0&&(ml=Mt()),ml):1}function _l(e,t,n,i){if(50<dl)throw dl=0,fl=null,Error(r(185));Pt(e,n,i),(!(Wc&2)||e!==X)&&(e===X&&(!(Wc&2)&&(Qc|=n),Yc===4&&Cl(e,Kc)),vl(e,i),n===1&&Wc===0&&!(t.mode&1)&&(rl=ft()+500,ea&&ia()))}function vl(e,t){var n=e.callbackNode;At(e,t);var r=Ot(e,e===X?Kc:0);if(r===0)n!==null&&ut(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ut(n),t===1)e.tag===0?ra(wl.bind(null,e)):na(wl.bind(null,e)),xi(function(){!(Wc&6)&&ia()}),n=null;else{switch(Rt(r)){case 1:n=mt;break;case 4:n=ht;break;case 16:n=gt;break;case 536870912:n=_t;break;default:n=gt}n=ql(n,yl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yl(e,t){if(pl=-1,ml=0,Wc&6)throw Error(r(327));var n=e.callbackNode;if(zl()&&e.callbackNode!==n)return null;var i=Ot(e,e===X?Kc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Ml(e,i);else{t=i;var a=Wc;Wc|=2;var o=Al();(X!==e||Kc!==t)&&(il=null,rl=ft()+500,Ol(e,t));do try{Pl();break}catch(t){kl(e,t)}while(1);Ha(),Vc.current=o,Wc=a,Gc===null?(X=null,Kc=0,t=Yc):t=0}if(t!==0){if(t===2&&(a=jt(e),a!==0&&(i=a,t=bl(e,a))),t===1)throw n=Xc,Ol(e,0),Cl(e,i),vl(e,ft()),n;if(t===6)Cl(e,i);else{if(a=e.current.alternate,!(i&30)&&!Sl(a)&&(t=Ml(e,i),t===2&&(o=jt(e),o!==0&&(i=o,t=bl(e,o))),t===1))throw n=Xc,Ol(e,0),Cl(e,i),vl(e,ft()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Ll(e,tl,il);break;case 3:if(Cl(e,i),(i&130023424)===i&&(t=nl+500-ft(),10<t)){if(Ot(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){hl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=vi(Ll.bind(null,e,tl,il),t);break}Ll(e,tl,il);break;case 4:if(Cl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-xt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bc(i/1960))-i,10<i){e.timeoutHandle=vi(Ll.bind(null,e,tl,il),i);break}Ll(e,tl,il);break;case 5:Ll(e,tl,il);break;default:throw Error(r(329))}}}return vl(e,ft()),e.callbackNode===n?yl.bind(null,e):null}function bl(e,t){var n=el;return e.current.memoizedState.isDehydrated&&(Ol(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=tl,tl=n,t!==null&&xl(t)),e}function xl(e){tl===null?tl=e:tl.push.apply(tl,e)}function Sl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t){for(t&=~$c,t&=~Qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function wl(e){if(Wc&6)throw Error(r(327));zl();var t=Ot(e,0);if(!(t&1))return vl(e,ft()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var i=jt(e);i!==0&&(t=i,n=bl(e,i))}if(n===1)throw n=Xc,Ol(e,0),Cl(e,t),vl(e,ft()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ll(e,tl,il),vl(e,ft()),null}function Tl(e,t){var n=Wc;Wc|=1;try{return e(t)}finally{Wc=n,Wc===0&&(rl=ft()+500,ea&&ia())}}function El(e){ll!==null&&ll.tag===0&&!(Wc&6)&&zl();var t=Wc;Wc|=1;var n=Uc.transition,r=Lt;try{if(Uc.transition=null,Lt=1,e)return e()}finally{Lt=r,Uc.transition=n,Wc=t,!(Wc&6)&&ia()}}function Dl(){qc=Jc.current,Bi(Jc)}function Ol(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yi(n)),Gc!==null)for(n=Gc.return;n!==null;){var r=n;switch(_a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:po(),Bi(Wi),Bi(Ui),yo();break;case 5:ho(r);break;case 4:po();break;case 13:Bi(go);break;case 19:Bi(go);break;case 10:Ua(r.type._context);break;case 22:case 23:Dl()}n=n.return}if(X=e,Gc=e=Ql(e.current,null),Kc=qc=t,Yc=0,Xc=null,$c=Qc=Zc=0,tl=el=null,qa!==null){for(t=0;t<qa.length;t++)if(n=qa[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}qa=null}return e}function kl(e,t){do{var n=Gc;try{if(Ha(),bo.current=ms,Eo){for(var i=Co.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Eo=!1}if(So=0,To=wo=Co=null,Do=!1,Oo=0,Hc.current=null,n===null||n.return===null){Yc=1,Xc=t,Gc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Kc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ms(s);if(m!==null){m.flags&=-257,Ns(m,s,c,o,t),m.mode&1&&js(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){js(o,u,t),jl();break a}l=Error(r(426))}else if(ba&&c.mode&1){var _=Ms(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ns(_,s,c,o,t),Aa(Ts(l,c));break a}}o=l=Ts(l,c),Yc!==4&&(Yc=2),el===null?el=[o]:el.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=ks(o,l,t);ro(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(sl===null||!sl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=As(o,c,t);ro(o,x);break a}}o=o.return}while(o!==null)}Il(n)}catch(e){t=e,Gc===n&&n!==null&&(Gc=n=n.return);continue}break}while(1)}function Al(){var e=Vc.current;return Vc.current=ms,e===null?ms:e}function jl(){(Yc===0||Yc===3||Yc===2)&&(Yc=4),X===null||!(Zc&268435455)&&!(Qc&268435455)||Cl(X,Kc)}function Ml(e,t){var n=Wc;Wc|=2;var i=Al();(X!==e||Kc!==t)&&(il=null,Ol(e,t));do try{Nl();break}catch(t){kl(e,t)}while(1);if(Ha(),Wc=n,Vc.current=i,Gc!==null)throw Error(r(261));return X=null,Kc=0,Yc}function Nl(){for(;Gc!==null;)Fl(Gc)}function Pl(){for(;Gc!==null&&!U();)Fl(Gc)}function Fl(e){var t=Kl(e.alternate,e,qc);e.memoizedProps=e.pendingProps,t===null?Il(e):Gc=t,Hc.current=null}function Il(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dc(n,t),n!==null){n.flags&=32767,Gc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yc=6,Gc=null;return}}else if(n=uc(n,t,qc),n!==null){Gc=n;return}if(t=t.sibling,t!==null){Gc=t;return}Gc=t=e}while(t!==null);Yc===0&&(Yc=5)}function Ll(e,t,n){var r=Lt,i=Uc.transition;try{Uc.transition=null,Lt=1,Rl(e,t,n,r)}finally{Uc.transition=i,Lt=r}return null}function Rl(e,t,n,i){do zl();while(ll!==null);if(Wc&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ft(e,o),e===X&&(Gc=X=null,Kc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,ql(gt,function(){return zl(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=Uc.transition,Uc.transition=null;var s=Lt;Lt=1;var c=Wc;Wc|=4,Hc.current=null,vc(e,n),Nc(n,e),jr(gi),un=!!hi,gi=hi=null,e.current=n,Fc(n,e,a),dt(),Wc=c,Lt=s,Uc.transition=o}else e.current=n;if(cl&&(cl=!1,ll=e,ul=a),o=e.pendingLanes,o===0&&(sl=null),bt(n.stateNode,i),vl(e,ft()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(al)throw al=!1,e=ol,ol=null,e;return ul&1&&e.tag!==0&&zl(),o=e.pendingLanes,o&1?e===fl?dl++:(dl=0,fl=e):dl=0,ia(),null}function zl(){if(ll!==null){var e=Rt(ul),t=Uc.transition,n=Lt;try{if(Uc.transition=null,Lt=16>e?16:e,ll===null)var i=!1;else{if(e=ll,ll=null,ul=0,Wc&6)throw Error(r(331));var a=Wc;for(Wc|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:yc(8,d,o)}var f=d.child;if(f!==null)f.return=d,Y=f;else for(;Y!==null;){d=Y;var p=d.sibling,m=d.return;if(Sc(d),d===u){Y=null;break}if(p!==null){p.return=m,Y=p;break}Y=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else b:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Y=v;break b}Y=o.return}}var y=e.current;for(Y=y;Y!==null;){s=Y;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Y=b;else b:for(s=y;Y!==null;){if(c=Y,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:bc(9,c)}}catch(e){Vl(c,c.return,e)}if(c===s){Y=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Y=x;break b}Y=c.return}}if(Wc=a,ia(),yt&&typeof yt.onPostCommitFiberRoot==`function`)try{yt.onPostCommitFiberRoot(vt,e)}catch{}i=!0}return i}finally{Lt=n,Uc.transition=t}}return!1}function Bl(e,t,n){t=Ts(n,t),t=ks(e,t,1),e=to(e,t,1),t=hl(),e!==null&&(Pt(e,1,t),vl(e,t))}function Vl(e,t,n){if(e.tag===3)Bl(e,e,n);else for(;t!==null;){if(t.tag===3){Bl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(sl===null||!sl.has(r))){e=Ts(n,e),e=As(t,e,1),t=to(t,e,1),e=hl(),t!==null&&(Pt(t,1,e),vl(t,e));break}}t=t.return}}function Hl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=hl(),e.pingedLanes|=e.suspendedLanes&n,X===e&&(Kc&n)===n&&(Yc===4||Yc===3&&(Kc&130023424)===Kc&&500>ft()-nl?Ol(e,0):$c|=n),vl(e,t)}function Ul(e,t){t===0&&(e.mode&1?(t=Et,Et<<=1,!(Et&130023424)&&(Et=4194304)):t=1);var n=hl();e=Xa(e,t),e!==null&&(Pt(e,t,n),vl(e,n))}function Wl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ul(e,n)}function Gl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Ul(e,n)}var Kl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||Wi.current)Fs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Fs=!1,ic(e,t,n);Fs=!!(e.flags&131072)}}else Fs=!1,ba&&t.flags&1048576&&ha(t,ca,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;nc(e,t),e=t.pendingProps;var a=Ki(t,Ui.current);Ga(t,n),a=Mo(null,t,i,e,a,n);var o=No();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qi(i)?(o=!0,Zi(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Qa(t),a.updater=bs,t.stateNode=a,a._reactInternals=t,ws(t,i,e,n),t=Ws(null,t,i,!0,o,n)):(t.tag=0,ba&&o&&ga(t),Is(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(nc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Zl(i),e=vs(i,e),a){case 0:t=Hs(null,t,i,e,n);break a;case 1:t=Us(null,t,i,e,n);break a;case 11:t=Ls(null,t,i,e,n);break a;case 14:t=Rs(null,t,i,vs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Hs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Us(e,t,i,a,n);case 3:a:{if(Gs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,$a(e,t),io(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ts(Error(r(423)),t),t=Ks(e,t,i,n,a);break a}if(i!==a){a=Ts(Error(r(424)),t),t=Ks(e,t,i,n,a);break a}for(ya=wi(t.stateNode.containerInfo.firstChild),va=t,ba=!0,xa=null,n=La(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ka(),i===a){t=rc(e,t,n);break a}Is(e,t,i,n)}t=t.child}return t;case 5:return mo(t),e===null&&Ta(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,_i(i,a)?s=null:o!==null&&_i(i,o)&&(t.flags|=32),Vs(e,t),Is(e,t,s,n),t.child;case 6:return e===null&&Ta(t),null;case 13:return Ys(e,t,n);case 4:return fo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ia(t,null,i,n):Is(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),Ls(e,t,i,a,n);case 7:return Is(e,t,t.pendingProps,n),t.child;case 8:return Is(e,t,t.pendingProps.children,n),t.child;case 12:return Is(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Vi(Ra,i._currentValue),i._currentValue=s,o!==null){if(wr(o.value,s)){if(o.children===a.children&&!Wi.current){t=rc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=eo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wa(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Wa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Is(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Ga(t,n),a=Ka(a),i=i(a),t.flags|=1,Is(e,t,i,n),t.child;case 14:return i=t.type,a=vs(i,t.pendingProps),a=vs(i.type,a),Rs(e,t,i,a,n);case 15:return zs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:vs(i,a),nc(e,t),t.tag=1,qi(i)?(e=!0,Zi(t)):e=!1,Ga(t,n),Ss(t,i,a),ws(t,i,a,n),Ws(null,t,i,!0,e,n);case 19:return tc(e,t,n);case 22:return Bs(e,t,n)}throw Error(r(156,t.tag))};function ql(e,t){return lt(e,t)}function Jl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yl(e,t,n,r){return new Jl(e,t,n,r)}function Xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zl(e){if(typeof e==`function`)return+!!Xl(e);if(e!=null){if(e=e.$$typeof,e===j)return 11;if(e===P)return 14}return 2}function Ql(e,t){var n=e.alternate;return n===null?(n=Yl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $l(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Xl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return eu(n.children,a,o,t);case D:s=8,a|=8;break;case O:return e=Yl(12,n,t,a|2),e.elementType=O,e.lanes=o,e;case M:return e=Yl(13,n,t,a),e.elementType=M,e.lanes=o,e;case N:return e=Yl(19,n,t,a),e.elementType=N,e.lanes=o,e;case ee:return tu(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case k:s=10;break a;case A:s=9;break a;case j:s=11;break a;case P:s=14;break a;case F:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Yl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function eu(e,t,n,r){return e=Yl(7,e,r,t),e.lanes=n,e}function tu(e,t,n,r){return e=Yl(22,e,r,t),e.elementType=ee,e.lanes=n,e.stateNode={isHidden:!1},e}function nu(e,t,n){return e=Yl(6,e,null,t),e.lanes=n,e}function ru(e,t,n){return t=Yl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nt(0),this.expirationTimes=Nt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function au(e,t,n,r,i,a,o,s,c){return e=new iu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Yl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(a),e}function ou(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function su(e){if(!e)return Hi;e=e._reactInternals;a:{if(rt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(qi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(qi(n))return Xi(e,n,t)}return t}function cu(e,t,n,r,i,a,o,s,c){return e=au(n,r,!0,e,i,a,o,s,c),e.context=su(null),n=e.current,r=hl(),i=gl(n),a=eo(r,i),a.callback=t??null,to(n,a,i),e.current.lanes=i,Pt(e,i,r),vl(e,r),e}function lu(e,t,n,r){var i=t.current,a=hl(),o=gl(i);return n=su(n),t.context===null?t.context=n:t.pendingContext=n,t=eo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=to(i,t,o),e!==null&&(_l(e,i,o,a),no(e,i,o)),o}function uu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fu(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function pu(){return null}var mu=typeof reportError==`function`?reportError:function(e){console.error(e)};function hu(e){this._internalRoot=e}gu.prototype.render=hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));lu(e,t,null,null)},gu.prototype.unmount=hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;El(function(){lu(null,e,null,null)}),t[ki]=null}};function gu(e){this._internalRoot=e}gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ht();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&nn(e)}};function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function yu(){}function bu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=uu(o);a.call(e)}}var o=cu(t,r,e,0,null,!1,!1,``,yu);return e._reactRootContainer=o,e[ki]=o.current,ii(e.nodeType===8?e.parentNode:e),El(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=uu(c);s.call(e)}}var c=au(e,0,!1,null,null,!1,!1,``,yu);return e._reactRootContainer=c,e[ki]=c.current,ii(e.nodeType===8?e.parentNode:e),El(function(){lu(t,c,n,r)}),c}function xu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=uu(o);s.call(e)}}lu(t,o,e,i)}else o=bu(n,t,e,i,r);return uu(o)}zt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dt(t.pendingLanes);n!==0&&(It(t,n|1),vl(t,ft()),!(Wc&6)&&(rl=ft()+500,ia()))}break;case 13:El(function(){var t=Xa(e,1);t!==null&&_l(t,e,1,hl())}),fu(e,1)}},Bt=function(e){if(e.tag===13){var t=Xa(e,134217728);t!==null&&_l(t,e,134217728,hl()),fu(e,134217728)}},Vt=function(e){if(e.tag===13){var t=gl(e),n=Xa(e,t);n!==null&&_l(n,e,t,hl()),fu(e,t)}},Ht=function(){return Lt},Ut=function(e,t){var n=Lt;try{return Lt=e,t()}finally{Lt=n}},Ie=function(e,t,n){switch(t){case`input`:if(pe(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ii(i);if(!a)throw Error(r(90));ce(i),pe(i,a)}}}break;case`textarea`:be(e,n);break;case`select`:t=n.value,t!=null&&_e(e,!!n.multiple,t,!1)}},He=Tl,Ue=El;var Su={usingClientEntryPoint:!1,Events:[Pi,Fi,Ii,Be,Ve,Tl]},Cu={findFiberByHostInstance:Ni,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},wu={bundleType:Cu.bundleType,version:Cu.version,rendererPackageName:Cu.rendererPackageName,rendererConfig:Cu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=st(e),e===null?null:e.stateNode},findFiberByHostInstance:Cu.findFiberByHostInstance||pu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{vt=Tu.inject(wu),yt=Tu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Su,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(t))throw Error(r(200));return ou(e,t,null,n)},e.createRoot=function(e,t){if(!_u(e))throw Error(r(299));var n=!1,i=``,a=mu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=au(e,1,!1,null,null,n,!1,i,a),e[ki]=t.current,ii(e.nodeType===8?e.parentNode:e),new hu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=st(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return El(e)},e.hydrate=function(e,t,n){if(!vu(t))throw Error(r(200));return xu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!_u(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=mu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=cu(t,null,e,1,n??null,a,!1,o,s),e[ki]=t.current,ii(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new gu(t)},e.render=function(e,t,n){if(!vu(t))throw Error(r(200));return xu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!vu(e))throw Error(r(40));return e._reactRootContainer?(El(function(){xu(null,null,e,!1,function(){e._reactRootContainer=null,e[ki]=null})}),!0):!1},e.unstable_batchedUpdates=Tl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!vu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return xu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=_();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),y=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.suspense_list`),d=Symbol.for(`react.memo`),f=Symbol.for(`react.lazy`),p=Symbol.for(`react.view_transition`),m=Symbol.for(`react.client.reference`);function h(e){if(typeof e==`object`&&e){var m=e.$$typeof;switch(m){case t:switch(e=e.type,e){case r:case a:case i:case l:case u:case p:return e;default:switch(e&&=e.$$typeof,e){case s:case c:case f:case d:return e;case o:return e;default:return m}}case n:return m}}}e.isValidElementType=function(e){return!!(typeof e==`string`||typeof e==`function`||e===r||e===a||e===i||e===l||e===u||typeof e==`object`&&e&&(e.$$typeof===f||e.$$typeof===d||e.$$typeof===s||e.$$typeof===o||e.$$typeof===c||e.$$typeof===m||e.getModuleId!==void 0))},e.typeOf=h})),b=s(((e,t)=>{t.exports=y()})),x=s(((e,t)=>{t.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var l=a[c];if(!s(l))return!1;var u=e[l],d=t[l];if(i=n?n.call(r,u,d,l):void 0,i===!1||i===void 0&&u!==d)return!1}return!0}})),S=u(p()),C=v(),w=b(),T=u(x());function E(e){function t(e,r,c,l,u){for(var p=0,m=0,h=0,g=0,_,x,C=0,w=0,T,E=T=_=0,D=0,N=0,F=0,I=0,L=c.length,R=L-1,z,B=``,V=``,H=``,te=``,ne;D<L;){if(x=c.charCodeAt(D),D===R&&m+g+h+p!==0&&(m!==0&&(x=m===47?10:47),g=h=p=0,L++,R++),m+g+h+p===0){if(D===R&&(0<N&&(B=B.replace(f,``)),0<B.trim().length)){switch(x){case 32:case 9:case 59:case 13:case 10:break;default:B+=c.charAt(D)}x=59}switch(x){case 123:for(B=B.trim(),_=B.charCodeAt(0),T=1,I=++D;D<L;){switch(x=c.charCodeAt(D)){case 123:T++;break;case 125:T--;break;case 47:switch(x=c.charCodeAt(D+1)){case 42:case 47:a:{for(E=D+1;E<R;++E)switch(c.charCodeAt(E)){case 47:if(x===42&&c.charCodeAt(E-1)===42&&D+2!==E){D=E+1;break a}break;case 10:if(x===47){D=E+1;break a}}D=E}}break;case 91:x++;case 40:x++;case 34:case 39:for(;D++<R&&c.charCodeAt(D)!==x;);}if(T===0)break;D++}switch(T=c.substring(I,D),_===0&&(_=(B=B.replace(d,``).trim()).charCodeAt(0)),_){case 64:switch(0<N&&(B=B.replace(f,``)),x=B.charCodeAt(1),x){case 100:case 109:case 115:case 45:N=r;break;default:N=M}if(T=t(r,N,T,x,u+1),I=T.length,0<P&&(N=n(M,B,F),ne=s(3,T,N,r,k,O,I,x,u,l),B=N.join(``),ne!==void 0&&(I=(T=ne.trim()).length)===0&&(x=0,T=``)),0<I)switch(x){case 115:B=B.replace(S,o);case 100:case 109:case 45:T=B+`{`+T+`}`;break;case 107:B=B.replace(v,`$1 $2`),T=B+`{`+T+`}`,T=j===1||j===2&&a(`@`+T,3)?`@-webkit-`+T+`@`+T:`@`+T;break;default:T=B+T,l===112&&(T=(V+=T,``))}else T=``;break;default:T=t(r,n(r,B,F),T,l,u+1)}H+=T,T=F=N=E=_=0,B=``,x=c.charCodeAt(++D);break;case 125:case 59:if(B=(0<N?B.replace(f,``):B).trim(),1<(I=B.length))switch(E===0&&(_=B.charCodeAt(0),_===45||96<_&&123>_)&&(I=(B=B.replace(` `,`:`)).length),0<P&&(ne=s(1,B,r,e,k,O,V.length,l,u,l))!==void 0&&(I=(B=ne.trim()).length)===0&&(B=`\0\0`),_=B.charCodeAt(0),x=B.charCodeAt(1),_){case 0:break;case 64:if(x===105||x===99){te+=B+c.charAt(D);break}default:B.charCodeAt(I-1)!==58&&(V+=i(B,_,x,B.charCodeAt(2)))}F=N=E=_=0,B=``,x=c.charCodeAt(++D)}}switch(x){case 13:case 10:m===47?m=0:1+_===0&&l!==107&&0<B.length&&(N=1,B+=`\0`),0<P*ee&&s(0,B,r,e,k,O,V.length,l,u,l),O=1,k++;break;case 59:case 125:if(m+g+h+p===0){O++;break}default:switch(O++,z=c.charAt(D),x){case 9:case 32:if(g+p+m===0)switch(C){case 44:case 58:case 9:case 32:z=``;break;default:x!==32&&(z=` `)}break;case 0:z=`\\0`;break;case 12:z=`\\f`;break;case 11:z=`\\v`;break;case 38:g+m+p===0&&(N=F=1,z=`\f`+z);break;case 108:if(g+m+p+A===0&&0<E)switch(D-E){case 2:C===112&&c.charCodeAt(D-3)===58&&(A=C);case 8:w===111&&(A=w)}break;case 58:g+m+p===0&&(E=D);break;case 44:m+h+g+p===0&&(N=1,z+=`\r`);break;case 34:case 39:m===0&&(g=g===x?0:g===0?x:g);break;case 91:g+m+h===0&&p++;break;case 93:g+m+h===0&&p--;break;case 41:g+m+p===0&&h--;break;case 40:if(g+m+p===0){if(_===0)switch(2*C+3*w){case 533:break;default:_=1}h++}break;case 64:m+h+g+p+E+T===0&&(T=1);break;case 42:case 47:if(!(0<g+p+h))switch(m){case 0:switch(2*x+3*c.charCodeAt(D+1)){case 235:m=47;break;case 220:I=D,m=42}break;case 42:x===47&&C===42&&I+2!==D&&(c.charCodeAt(I+2)===33&&(V+=c.substring(I,D+1)),z=``,m=0)}}m===0&&(B+=z)}w=C,C=x,D++}if(I=V.length,0<I){if(N=r,0<P&&(ne=s(2,V,N,e,k,O,I,l,u,l),ne!==void 0&&(V=ne).length===0))return te+V+H;if(V=N.join(`,`)+`{`+V+`}`,j*A!==0){switch(j!==2||a(V,2)||(A=0),A){case 111:V=V.replace(b,`:-moz-$1`)+V;break;case 112:V=V.replace(y,`::-webkit-input-$1`)+V.replace(y,`::-moz-$1`)+V.replace(y,`:-ms-input-$1`)+V}A=0}}return te+V+H}function n(e,t,n){var i=t.trim().split(g);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=o===0?``:e[0]+` `;s<a;++s)t[s]=r(e,t[s],n).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=r(e[l]+` `,i[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(_,`$1`+e.trim());case 58:return e.trim()+t.replace(_,`$1`+e.trim());default:if(0<1*n&&0<t.indexOf(`\f`))return t.replace(_,(e.charCodeAt(0)===58?``:`$1`)+e.trim())}return e+t}function i(e,t,n,r){var o=e+`;`,s=2*t+3*n+4*r;if(s===944){e=o.indexOf(`:`,9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+`;`,j===1||j===2&&a(c,1)?`-webkit-`+c+c:c}if(j===0||j===2&&!a(o,1))return o;switch(s){case 1015:return o.charCodeAt(10)===97?`-webkit-`+o+o:o;case 951:return o.charCodeAt(3)===116?`-webkit-`+o+o:o;case 963:return o.charCodeAt(5)===110?`-webkit-`+o+o:o;case 1009:if(o.charCodeAt(4)!==100)break;case 969:case 942:return`-webkit-`+o+o;case 978:return`-webkit-`+o+`-moz-`+o+o;case 1019:case 983:return`-webkit-`+o+`-moz-`+o+`-ms-`+o+o;case 883:if(o.charCodeAt(8)===45)return`-webkit-`+o+o;if(0<o.indexOf(`image-set(`,11))return o.replace(D,`$1-webkit-$2`)+o;break;case 932:if(o.charCodeAt(4)===45)switch(o.charCodeAt(5)){case 103:return`-webkit-box-`+o.replace(`-grow`,``)+`-webkit-`+o+`-ms-`+o.replace(`grow`,`positive`)+o;case 115:return`-webkit-`+o+`-ms-`+o.replace(`shrink`,`negative`)+o;case 98:return`-webkit-`+o+`-ms-`+o.replace(`basis`,`preferred-size`)+o}return`-webkit-`+o+`-ms-`+o+o;case 964:return`-webkit-`+o+`-ms-flex-`+o+o;case 1023:if(o.charCodeAt(8)!==99)break;return c=o.substring(o.indexOf(`:`,15)).replace(`flex-`,``).replace(`space-between`,`justify`),`-webkit-box-pack`+c+`-webkit-`+o+`-ms-flex-pack`+c+o;case 1005:return m.test(o)?o.replace(p,`:-webkit-`)+o.replace(p,`:-moz-`)+o:o;case 1e3:switch(c=o.substring(13).trim(),t=c.indexOf(`-`)+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(x,`tb`);break;case 232:c=o.replace(x,`tb-rl`);break;case 220:c=o.replace(x,`lr`);break;default:return o}return`-webkit-`+o+`-ms-`+c+o;case 1017:if(o.indexOf(`sticky`,9)===-1)break;case 975:switch(t=(o=e).length-10,c=(o.charCodeAt(t)===33?o.substring(0,t):o).substring(e.indexOf(`:`,7)+1).trim(),s=c.charCodeAt(0)+(c.charCodeAt(7)|0)){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,`-webkit-`+c)+`;`+o;break;case 207:case 102:o=o.replace(c,`-webkit-`+(102<s?`inline-`:``)+`box`)+`;`+o.replace(c,`-webkit-`+c)+`;`+o.replace(c,`-ms-`+c+`box`)+`;`+o}return o+`;`;case 938:if(o.charCodeAt(5)===45)switch(o.charCodeAt(6)){case 105:return c=o.replace(`-items`,``),`-webkit-`+o+`-webkit-box-`+c+`-ms-flex-`+c+o;case 115:return`-webkit-`+o+`-ms-flex-item-`+o.replace(w,``)+o;default:return`-webkit-`+o+`-ms-flex-line-pack`+o.replace(`align-content`,``).replace(w,``)+o}break;case 973:case 989:if(o.charCodeAt(3)!==45||o.charCodeAt(4)===122)break;case 931:case 953:if(!0===E.test(e))return(c=e.substring(e.indexOf(`:`)+1)).charCodeAt(0)===115?i(e.replace(`stretch`,`fill-available`),t,n,r).replace(`:fill-available`,`:stretch`):o.replace(c,`-webkit-`+c)+o.replace(c,`-moz-`+c.replace(`fill-`,``))+o;break;case 962:if(o=`-webkit-`+o+(o.charCodeAt(5)===102?`-ms-`+o:``)+o,n+r===211&&o.charCodeAt(13)===105&&0<o.indexOf(`transform`,10))return o.substring(0,o.indexOf(`;`,27)+1).replace(h,`$1-webkit-$2`)+o}return o}function a(e,t){var n=e.indexOf(t===1?`:`:`{`),r=e.substring(0,t===3?10:n);return n=e.substring(n+1,e.length-1),F(t===2?r.replace(T,`$1`):r,n,t)}function o(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n===t+`;`?`(`+t+`)`:n.replace(C,` or ($1)`).substring(4)}function s(e,t,n,r,i,a,o,s,c,l){for(var d=0,f=t,p;d<P;++d)switch(p=N[d].call(u,e,f,n,r,i,a,o,s,c,l)){case void 0:case!1:case!0:case null:break;default:f=p}if(f!==t)return f}function c(e){switch(e){case void 0:case null:P=N.length=0;break;default:if(typeof e==`function`)N[P++]=e;else if(typeof e==`object`)for(var t=0,n=e.length;t<n;++t)c(e[t]);else ee=!!e|0}return c}function l(e){return e=e.prefix,e!==void 0&&(F=null,e?typeof e==`function`?(j=2,F=e):j=1:j=0),l}function u(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),I=r,r=[I],0<P){var i=s(-1,n,r,r,k,O,0,0,0,0);i!==void 0&&typeof i==`string`&&(n=i)}var a=t(M,r,n,0,0);return 0<P&&(i=s(-2,a,r,r,k,O,a.length,0,0,0),i!==void 0&&(a=i)),I=``,A=0,O=k=1,a}var d=/^\0+/g,f=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,h=/([,: ])(transform)/g,g=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,w=/-self|flex-/g,T=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,D=/([^-])(image-set\()/,O=1,k=1,A=0,j=1,M=[],N=[],P=0,F=null,ee=0,I=``;return u.use=c,u.set=l,e!==void 0&&l(e),u}var D={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function O(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var k=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,A=O(function(e){return k.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),j=s((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),M=s(((e,t)=>{t.exports=j()})),N=u(s(((e,t)=>{var n=M(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}))());function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var F=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ee=function(e){return typeof e==`object`&&!!e&&(e.toString?e.toString():Object.prototype.toString.call(e))===`[object Object]`&&!(0,w.typeOf)(e)},I=Object.freeze([]),L=Object.freeze({});function R(e){return typeof e==`function`}function z(e){return e.displayName||e.name||`Component`}function B(e){return e&&typeof e.styledComponentId==`string`}var V=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,H=typeof window<`u`&&`HTMLElement`in window,te=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:typeof process<`u`&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==``?{}.REACT_APP_SC_DISABLE_SPEEDY!==`false`&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==``&&{}.SC_DISABLE_SPEEDY!==`false`&&{}.SC_DISABLE_SPEEDY)),ne={};function re(e){var t=[...arguments].slice(1);throw Error(`An error occurred. See https://git.io/JUIaE#`+e+` for more information.`+(t.length>0?` Args: `+t.join(`, `):``))}var ie=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&re(16,``+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t=``;if(e>=this.length||this.groupSizes[e]===0)return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+`/*!sc*/
`;return t},e}(),ae=new Map,oe=new Map,se=1,ce=function(e){if(ae.has(e))return ae.get(e);for(;oe.has(se);)se++;var t=se++;return ae.set(e,t),oe.set(t,e),t},le=function(e){return oe.get(e)},ue=function(e,t){t>=se&&(se=t+1),ae.set(e,t),oe.set(t,e)},de=`style[`+V+`][data-styled-version="5.3.11"]`,fe=RegExp(`^`+V+`\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),pe=function(e,t,n){for(var r,i=n.split(`,`),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},me=function(e,t){for(var n=(t.textContent||``).split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(fe);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(ue(l,c),pe(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},he=function(){return typeof __webpack_nonce__<`u`?__webpack_nonce__:null},ge=function(e){var t=document.head,n=e||t,r=document.createElement(`style`),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&r.nodeType===1&&r.hasAttribute(V))return r}}(n),a=i===void 0?null:i.nextSibling;r.setAttribute(V,`active`),r.setAttribute(`data-styled-version`,`5.3.11`);var o=he();return o&&r.setAttribute(`nonce`,o),n.insertBefore(r,a),r},_e=function(){function e(e){var t=this.element=ge(e);t.appendChild(document.createTextNode(``)),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}re(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return t!==void 0&&typeof t.cssText==`string`?t.cssText:``},e}(),ve=function(){function e(e){var t=this.element=ge(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:``},e}(),ye=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:``},e}(),be=H,xe={isServer:!H,useCSSOMInjection:!te},Se=function(){function e(e,t,n){e===void 0&&(e=L),t===void 0&&(t={}),this.options=P({},xe,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&H&&be&&(be=!1,function(e){for(var t=document.querySelectorAll(de),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(V)!==`active`&&(me(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return ce(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(P({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new ye(i):r?new _e(i):new ve(i),new ie(e));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(ce(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ce(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(ce(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r=``,i=0;i<n;i++){var a=le(i);if(a!==void 0){var o=e.names.get(a),s=t.getGroup(i);if(o&&s&&o.size){var c=V+`.g`+i+`[id="`+a+`"]`,l=``;o!==void 0&&o.forEach((function(e){e.length>0&&(l+=e+`,`)})),r+=``+s+c+`{content:"`+l+`"}/*!sc*/
`}}}return r}(this)},e}(),Ce=/(a)(d)/gi,we=function(e){return String.fromCharCode(e+(e>25?39:97))};function Te(e){var t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=we(t%52)+n;return(we(t%52)+n).replace(Ce,`$1-$2`)}var Ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},De=function(e){return Ee(5381,e)};function Oe(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(R(n)&&!B(n))return!1}return!0}var ke=De(`5.3.11`),Ae=function(){function e(e,t,n){this.rules=e,this.staticRulesId=``,this.isStatic=(n===void 0||n.isStatic)&&Oe(e),this.componentId=t,this.baseHash=Ee(ke,t),this.baseStyle=n,Se.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var a=Je(this.rules,e,t,n).join(``),o=Te(Ee(this.baseHash,a)>>>0);if(!t.hasNameForId(r,o)){var s=n(a,`.`+o,void 0,r);t.insertRules(r,o,s)}i.push(o),this.staticRulesId=o}}else{for(var c=this.rules.length,l=Ee(this.baseHash,n.hash),u=``,d=0;d<c;d++){var f=this.rules[d];if(typeof f==`string`)u+=f;else if(f){var p=Je(f,e,t,n),m=Array.isArray(p)?p.join(``):p;l=Ee(l,m+d),u+=m}}if(u){var h=Te(l>>>0);if(!t.hasNameForId(r,h)){var g=n(u,`.`+h,void 0,r);t.insertRules(r,h,g)}i.push(h)}}return i.join(` `)},e}(),je=/^\s*\/\/.*$/gm,Me=[`:`,`[`,`.`,`#`];function Ne(e){var t,n,r,i,a=e===void 0?L:e,o=a.options,s=o===void 0?L:o,c=a.plugins,l=c===void 0?I:c,u=new E(s),d=[],f=function(e){function t(t){if(t)try{e(t+`}`)}catch{}}return function(n,r,i,a,o,s,c,l,u,d){switch(n){case 1:if(u===0&&r.charCodeAt(0)===64)return e(r+`;`),``;break;case 2:if(l===0)return r+`/*|*/`;break;case 3:switch(l){case 102:case 112:return e(i[0]+r),``;default:return r+(d===0?`/*|*/`:``)}case-2:r.split(`/*|*/}`).forEach(t)}}}((function(e){d.push(e)})),p=function(e,r,a){return r===0&&Me.indexOf(a[n.length])!==-1||a.match(i)?e:`.`+t};function m(e,a,o,s){s===void 0&&(s=`&`);var c=e.replace(je,``),l=a&&o?o+` `+a+` { `+c+` }`:c;return t=s,n=a,r=RegExp(`\\`+n+`\\b`,`g`),i=RegExp(`(\\`+n+`\\b){2,}`),u(o||!a?``:a,l)}return u.use([].concat(l,[function(e,t,i){e===2&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,p))},f,function(e){if(e===-2){var t=d;return d=[],t}}])),m.hash=l.length?l.reduce((function(e,t){return t.name||re(15),Ee(e,t.name)}),5381).toString():``,m}var Pe=S.createContext();Pe.Consumer;var Fe=S.createContext(),Ie=(Fe.Consumer,new Se),Le=Ne();function Re(){return(0,S.useContext)(Pe)||Ie}function ze(){return(0,S.useContext)(Fe)||Le}function Be(e){var t=(0,S.useState)(e.stylisPlugins),n=t[0],r=t[1],i=Re(),a=(0,S.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),o=(0,S.useMemo)((function(){return Ne({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return(0,S.useEffect)((function(){(0,T.default)(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]),S.createElement(Pe.Provider,{value:a},S.createElement(Fe.Provider,{value:o},e.children))}var Ve=function(){function e(e,t){var n=this;this.inject=function(e,t){t===void 0&&(t=Le);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,`@keyframes`))},this.toString=function(){return re(12,String(n.name))},this.name=e,this.id=`sc-keyframes-`+e,this.rules=t}return e.prototype.getName=function(e){return e===void 0&&(e=Le),this.name+e.hash},e}(),He=/([A-Z])/,Ue=/([A-Z])/g,We=/^ms-/,Ge=function(e){return`-`+e.toLowerCase()};function Ke(e){return He.test(e)?e.replace(Ue,Ge).replace(We,`-ms-`):e}var qe=function(e){return e==null||!1===e||e===``};function Je(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)(i=Je(e[o],t,n,r))!==``&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(qe(e))return``;if(B(e))return`.`+e.styledComponentId;if(R(e))return typeof(c=e)!=`function`||c.prototype&&c.prototype.isReactComponent||!t?e:Je(e(t),t,n,r);var c;return e instanceof Ve?n?(e.inject(n,r),e.getName(r)):e:ee(e)?function e(t,n){var r,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!qe(t[o])&&(Array.isArray(t[o])&&t[o].isCss||R(t[o])?a.push(Ke(o)+`:`,t[o],`;`):ee(t[o])?a.push.apply(a,e(t[o],o)):a.push(Ke(o)+`: `+(r=o,(i=t[o])==null||typeof i==`boolean`||i===``?``:typeof i!=`number`||i===0||r in D||r.startsWith(`--`)?String(i).trim():i+`px`)+`;`));return n?[n+` {`].concat(a,[`}`]):a}(e):e.toString()}var Ye=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Xe(e){var t=[...arguments].slice(1);return R(e)||ee(e)?Ye(Je(F(I,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]==`string`?e:Ye(Je(F(e,t)))}var Ze=function(e,t,n){return n===void 0&&(n=L),e.theme!==n.theme&&e.theme||t||n.theme},Qe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$e=/(^-|-$)/g;function et(e){return e.replace(Qe,`-`).replace($e,``)}var tt=function(e){return Te(De(e)>>>0)};function nt(e){return typeof e==`string`&&!0}var rt=function(e){return typeof e==`function`||typeof e==`object`&&!!e&&!Array.isArray(e)},it=function(e){return e!==`__proto__`&&e!==`constructor`&&e!==`prototype`};function at(e,t,n){var r=e[n];rt(t)&&rt(r)?ot(r,t):e[n]=t}function ot(e){for(var t=[...arguments].slice(1),n=0,r=t;n<r.length;n++){var i=r[n];if(rt(i))for(var a in i)it(a)&&at(e,i[a],a)}return e}var st=S.createContext();st.Consumer;function ct(e){var t=(0,S.useContext)(st),n=(0,S.useMemo)((function(){return function(e,t){return e?R(e)?e(t):Array.isArray(e)||typeof e!=`object`?re(8):t?P({},t,{},e):e:re(14)}(e.theme,t)}),[e.theme,t]);return e.children?S.createElement(st.Provider,{value:n},e.children):null}var lt={};function ut(e,t,n){var r=B(e),i=!nt(e),a=t.attrs,o=a===void 0?I:a,s=t.componentId,c=s===void 0?function(e,t){var n=typeof e==`string`?et(e):`sc`;lt[n]=(lt[n]||0)+1;var r=n+`-`+tt(`5.3.11`+n+lt[n]);return t?t+`-`+r:r}(t.displayName,t.parentComponentId):s,l=t.displayName,u=l===void 0?function(e){return nt(e)?`styled.`+e:`Styled(`+z(e)+`)`}(e):l,d=t.displayName&&t.componentId?et(t.displayName)+`-`+t.componentId:t.componentId||c,f=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,p=t.shouldForwardProp;r&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(n,r,i){return e.shouldForwardProp(n,r,i)&&t.shouldForwardProp(n,r,i)}:e.shouldForwardProp);var m,h=new Ae(n,d,r?e.componentStyle:void 0),g=h.isStatic&&o.length===0,_=function(e,t){return function(e,t,n,r){var i=e.attrs,a=e.componentStyle,o=e.defaultProps,s=e.foldedComponentIds,c=e.shouldForwardProp,l=e.styledComponentId,u=e.target,d=function(e,t,n){e===void 0&&(e=L);var r=P({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,a,o=e;for(t in R(o)&&(o=o(r)),o)r[t]=i[t]=t===`className`?(n=i[t],a=o[t],n&&a?n+` `+a:n||a):o[t]})),[r,i]}(Ze(t,(0,S.useContext)(st),o)||L,t,i),f=d[0],p=d[1],m=function(e,t,n,r){var i=Re(),a=ze();return t?e.generateAndInjectStyles(L,i,a):e.generateAndInjectStyles(n,i,a)}(a,r,f,void 0),h=n,g=p.$as||t.$as||p.as||t.as||u,_=nt(g),v=p===t?t:P({},t,{},p),y={};for(var b in v)b[0]!==`$`&&b!==`as`&&(b===`forwardedAs`?y.as=v[b]:(c?c(b,A,g):!_||A(b))&&(y[b]=v[b]));return t.style&&p.style!==t.style&&(y.style=P({},t.style,{},p.style)),y.className=Array.prototype.concat(s,l,m===l?null:m,t.className,p.className).filter(Boolean).join(` `),y.ref=h,(0,S.createElement)(g,y)}(m,e,t,g)};return _.displayName=u,(m=S.forwardRef(_)).attrs=f,m.componentStyle=h,m.displayName=u,m.shouldForwardProp=p,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):I,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(e){var r=t.componentId,i=function(e,t){if(e==null)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,[`componentId`]),a=r&&r+`-`+(nt(e)?e:et(z(e)));return ut(e,P({},i,{attrs:f,componentId:a}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?ot({},e.defaultProps,t):t}}),Object.defineProperty(m,"toString",{value:function(){return`.`+m.styledComponentId}}),i&&(0,N.default)(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var U=function(e){return function e(t,n,r){if(r===void 0&&(r=L),!(0,w.isValidElementType)(n))return re(1,String(n));var i=function(){return t(n,r,Xe.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,P({},r,{},i))},i.attrs=function(i){return e(t,n,P({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(ut,e)};`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.textPath.tspan`.split(`.`).forEach((function(e){U[e]=U(e)}));var dt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Oe(e),Se.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(Je(this.rules,t,n,r).join(``),``),a=this.componentId+e;n.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Se.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function ft(e){var t=[...arguments].slice(1),n=Xe.apply(void 0,[e].concat(t)),r=`sc-global-`+tt(JSON.stringify(n)),i=new dt(n,r);function a(e){var t=Re(),n=ze(),a=(0,S.useContext)(st),s=(0,S.useRef)(t.allocateGSInstance(r)).current;return t.server&&o(s,e,t,a,n),(0,S.useLayoutEffect)((function(){if(!t.server)return o(s,e,t,a,n),function(){return i.removeStyles(s,t)}}),[s,e,t,a,n]),null}function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,ne,n,o);else{var s=P({},t,{theme:Ze(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return S.memo(a)}function pt(e){var t=[...arguments].slice(1),n=Xe.apply(void 0,[e].concat(t)).join(``);return new Ve(tt(n),n)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return``;var n=he();return`<style `+[n&&`nonce="`+n+`"`,V+`="true"`,`data-styled-version="5.3.11"`].filter(Boolean).join(` `)+`>`+t+`</style>`},this.getStyleTags=function(){return e.sealed?re(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return re(2);var n=((t={})[V]=``,t[`data-styled-version`]=`5.3.11`,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=he();return r&&(n.nonce=r),[S.createElement(`style`,P({},n,{key:`sc-0-0`}))]},this.seal=function(){e.sealed=!0},this.instance=new Se({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?re(2):S.createElement(Be,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return re(3)},e})();var mt=ft`
* {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
:root                  { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }

:root, body {
  margin: 0;
  padding: 0;
  border: initial;
}

.modal-open {
    overflow: hidden;
    /* Optional: prevents "jitter" if the scrollbar disappears */
    padding-right: var(--scrollbar-width, 0px); 
  }

    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  overflow: -moz-scrollbars-vertical; 
  overflow-y: scroll;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}



/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0; 
   height:calc(100vh-50px); 
  /* overscroll-behavior: none; */
   /* overflow: hidden;
   width: 100vw;
  height: 100vh; */
}

/**
 * Render the main element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
  display: inline !important;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent 'sub' and 'sup' elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from 'fieldset' elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    'fieldset' elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}


/***********************************
  FOOTER CSS
 *******************************************************************************/
footer { 
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ececec; 
}

/***********************************
  PRESORT CSS
 *******************************************************************************/

  /* to speed up react beautiful dnd */
[data-rbd-draggable-id] { will-change: transform, opacity }
/*
[data-rbd-draggable-id] { left: auto !important; top: auto !important; }
*/
  .dragObject {
    -webkit-user-select: none;
    user-select: none;
    display: flex;
  }


  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
/* Overlay fade */
.OverlayFade {
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0,0,0,0.5);
}

.OverlayFade.ReactModal__Overlay--after-open {
  opacity: 1;
}

.OverlayFade.ReactModal__Overlay--before-close {
  opacity: 0;
}

/* Modal content fade */
.ModalContentFade {
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.ModalContentFade.ReactModal__Content--after-open {
  opacity: 1;
  transform: scale(1);
}

.ModalContentFade.ReactModal__Content--before-close {
  opacity: 0;
  transform: scale(0.98);
}

.react-responsive-modal-modal {
  background: white;
  max-width: 700px;
  width: 95vw;
  height: auto;
  max-height: 80vh;
  padding: 15px;
  border-radius: 10px;
  padding-bottom: 20px;
  overflow-y: auto;
  /* overscroll-behavior: contain; */
  -webkit-overflow-scrolling:touch;
}

.modal-open {
    overflow: hidden;
    /* Optional: prevents "jitter" if the scrollbar disappears */
    padding-right: var(--scrollbar-width, 0px); 
  }

@media (max-width: 768px) {
  .react-responsive-modal-container {
    position: fixed;
    max-width: 100dvw;
    height: 100dvh;
    top: 0px;
    left: 0px;
    bottom: 0px;
    overflow: scroll;
    height: -webkit-fill-available;
    -webkit-overflow-scrolling: touch;
}
}

@media (max-width: 768px) {
  .react-responsive-modal-modal {
    width: 95vw;
    padding: 8px;
    min-height: 70vh;
    padding-bottom: 20px;
    /* overflow-y: auto;   */
    /* -webkit-overflow-scrolling:touch; */
    /* Add or override other styles for mobile here */
  }

}

  #cardsDiv{
    grid-column-start: 3;
    overflow: hidden;
    align-self: end;
    height: 275x;
  }
  
  #cards{
    max-height: 200px;
    min-height:140px;
    overflow: hidden;
  }
  
  #completionRatio {
    grid-row-start: 1;
    grid-column-start: 4;
    text-align: center;
    font-weight: bold;
  }

  #negDiv{
    grid-row-start: 3;
    grid-column-start: 2;
    overflow-y: auto;
    background-color: #fee2e2;
    min-height: 300px;
    height: 56vh;
    padding-top: 0px;
    border-top-left-radius: 3px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border: 1px solid lightgray;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 10px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }
  

  #neutralDiv{
    grid-row-start: 3;
    grid-column-start: 3;
    overflow-y: auto;
    background-color: #fef3c7;
    min-height: 300px;
    height: 56vh;
    padding-top: 0px;
    border: 1px solid lightgray;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 10px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }

  }

  #posDiv{
    grid-row-start: 3;
    grid-column-start: 4;
    overflow-y: auto;
    background-color: #dcfce7;
    height: 56vh;
    padding-top: 0px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 3px;
    border: 1px solid lightgray;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 10px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }

  #pos{
    min-height: 52vh;
    border-radius: 3px;
  }

  #neutral{
    min-height: 52vh;
    border-radius: 3px;
  }

  #neg{
    min-height: 52vh;
    border-radius: 3px;
  }
}



/***********************************
  PRESORT CSS  ** IMAGES ** 
 *******************************************************************************/
  #presortFinishedModal  {
  max-width: 380px !important;
  margin-right: 10px !important;
}


#imageGrid .cardsDivImg{
    grid-column-start: 3;
    overflow: hidden;
    padding-top: 10px;
  }



 #imageGrid .cardsDivImg  img {
    width: 100%;
  }

  
  #imageGrid #cards{
    min-height:34vh;
   overflow: hidden;
  }
  

  #imageGrid #completionRatioImg {
    grid-row-start: 1;
    grid-column-start: 4;
    text-align: center;
    font-weight: bold;
  }

  #imageEnlargeInstructionsDiv {
    grid-row-start: 1;
    grid-column-start: 2;
    text-align: center;
  }

  #imageGrid .negDivImg{
    grid-row-start: 3;
    grid-column-start: 2;
    overflow-y: auto;
    background-color: white;
    min-height: 300px;
    height: 50vh;
    padding-top: 5px;
    border-top-left-radius: 3px;
    overflow-x: hidden;
    border-bottom-left-radius: 3px;
    border: 1px solid #aeaeae;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 3px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }
  

  #imageGrid .neutralDivImg{
    grid-row-start: 3;
    grid-column-start: 3;
    overflow-y: auto;
    background-color: white;
    min-height: 300px;
    height: 50vh;
    padding-top: 5px;
    overflow-x: hidden;
    border: 1px solid #aeaeae;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 3px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }

  }

  #imageGrid .posDivImg{
    grid-row-start: 3;
    grid-column-start: 4;
    overflow-y: auto;
    background-color: white;
    height: 50vh;
    padding-top: 5px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid #aeaeae;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 3px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }

  .pos{
    min-height: 25vh;
    border-radius: 3px;
  }

  .neutral{
    min-height: 38vh;
    border-radius: 3px;
  }

  .neg{
    min-height: 38vh;
    border-radius: 3px;
  }

  #imageGrid .cards{
    border-radius: 3px;
    
  }
  
  #imageGrid .cards > :not(:first-child) {
    opacity: 0;
    }
  

/***********************************
  THINNING REFINE - CSS
 *******************************************************************************/
.custom-move-all-modal-height {
      height: 300px; /* Or any desired height, e.g., 80vh for viewport height */
      min-height: 20vh;
    }


/***********************************
  SORT CSS
 *******************************************************************************/
.sortContainer {
  display: flex;
  flex-direction: column;
  margin: 5px;
  background: rgba(0, 0, 0, 0.1);
  min-height: 400px;
  max-height: 800px;
  overflow: auto;
}

.rootDiv {
  background-color: whitesmoke;
  /* background-color: #6a9bc3; */
  padding: 0px, 0px, 10px, 10px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.headersContainer {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: flex-start;
  height: 50px;
  flex-direction: "row-reverse";
}

.greenSortCard {
  display: flex;
  justify-content: center;
  background: lightgreen;
  border: 2px solid gray;
}

.pinkSortCard {
  display: flex;
  justify-content: center;
  background-color: rgba(255, 182, 193, 0.4);
  border: 2px solid gray;
}

.yellowSortCard {
  display: flex;
  justify-content: center;
  background-color: lightgray;
  border: 2px solid gray;
}

/* 
.isPositiveStatement {
  background-color: rgba(199, 246, 199, 0.6);
} */

.sortFooter {
  display: flex;
  flex-direction: row;
  background: #e4e4e4;
  position: fixed;
  left: 0px;
  bottom: 50px !important;
  width: 100%;
  height: 150px;
}

.footerMessageBox {
  flex-basis: 100px;
  padding-right: 5px;
  padding-left: 5px;
  width: 100px;
  height: 100px;
  border: 2px solid lightgray;
  text-align: center;
}

.footerMessageBox p {
  padding: 0px;
  margin-top: 10px;
  font-size: 10px;
  color: #3273dc;
}

.sortEndButton {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
}

.cardSlider {
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: right;
}

.placeholder {
  width: 100px;
  -webkit-animation: placeholderAnimate 3s ease-in;
}

/*

#DroppableContainer > img {
  width: 23.5vw !important;
  height: auto;
}

.imageModal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  img {
  width: 100%;
  height: auto;
  }
}
*/

/***********************************
  POST SORT 
 *******************************************************************************/
.dropdown-heading-value {
  padding-top: 5px;
  min-height: 30px;
}



/***********************************
  IMAGE MODAL CSS
 *******************************************************************************/


  .postSortImageModal169 {
    background: black;
    width: 70vw;
    max-width: none;
   }


  .postSortImageModal43 {
    background: black;
    width: 30vw;
    max-width: none;
   }


   .dualImageModal {
    background: black;
    width: 85vw;
    max-width: none;
   }

   .dualImageOverlay {
    background: black;
    opacity: 0.85;
  }

  /***********************************
  LANDING MODAL CSS
 *******************************************************************************/


  /*
  spinner css
  */

  #loading {
  display: inline-block;
  width: 100px;
  margin-top: 40px;
  height: 100px;
  border: 10px solid lightgray;
  border-radius: 50%;
  border-top-color: #337ab7;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}


@keyframes opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}

@-webkit-keyframes placeholderAnimate {
  100% {
    width: 100%;
  }
  0% {
    width: 0px;
  }
}

`,ht=()=>{let e=!1;return(function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)})(navigator.userAgent||navigator.vendor||window.opera),e},gt=s((e=>{var t=p(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),W=s(((e,t)=>{t.exports=gt()}))(),_t=()=>{let e=ht(),t;return t=e?(0,W.jsx)(bt,{children:`Loading`}):(0,W.jsx)(yt,{children:`Loading`}),(0,W.jsxs)(vt,{children:[t,(0,W.jsx)(`div`,{children:(0,W.jsx)(`div`,{id:`loading`})})]})},vt=U.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
`,yt=U.div`
  font-size: 88px;
  font-style: italic;
  font-weight: bold;
  align-self: center;
  margin-right: 70px;
  margin-top: 40px;
`,bt=U.div`
  font-size: 44px;
  font-style: italic;
  font-weight: bold;
  align-self: center;
  margin-right: 30px;
  margin-top: 40px;
`;function xt(e,t){return xt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},xt(e,t)}function St(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,xt(e,t)}var Ct=s(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),wt=s(((e,t)=>{var n=Ct();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),Tt=s(((e,t)=>{t.exports=wt()()})),Et=u(Tt());function Dt(){return Dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dt.apply(null,arguments)}function Ot(e){return e.charAt(0)===`/`}function kt(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function At(e,t){t===void 0&&(t=``);var n=e&&e.split(`/`)||[],r=t&&t.split(`/`)||[],i=e&&Ot(e),a=t&&Ot(t),o=i||a;if(e&&Ot(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return`/`;var s;if(r.length){var c=r[r.length-1];s=c===`.`||c===`..`||c===``}else s=!1;for(var l=0,u=r.length;u>=0;u--){var d=r[u];d===`.`?kt(r,u):d===`..`?(kt(r,u),l++):l&&(kt(r,u),l--)}if(!o)for(;l--;)r.unshift(`..`);o&&r[0]!==``&&(!r[0]||!Ot(r[0]))&&r.unshift(``);var f=r.join(`/`);return s&&f.substr(-1)!==`/`&&(f+=`/`),f}var jt=`Invariant failed`;function Mt(e,t){if(!e)throw Error(jt)}typeof window<`u`&&window.document&&window.document.createElement;var Nt=s(((e,t)=>{t.exports=Array.isArray||function(e){return Object.prototype.toString.call(e)==`[object Array]`}})),Pt=s(((e,t)=>{var n=Nt();t.exports=v,t.exports.parse=i,t.exports.compile=o,t.exports.tokensToFunction=l,t.exports.tokensToRegExp=_;var r=new RegExp([`(\\\\.)`,`([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))`].join(`|`),`g`);function i(e,t){for(var n=[],i=0,o=0,s=``,c=t&&t.delimiter||`/`,l;(l=r.exec(e))!=null;){var u=l[0],f=l[1],p=l.index;if(s+=e.slice(o,p),o=p+u.length,f){s+=f[1];continue}var m=e[o],h=l[2],g=l[3],_=l[4],v=l[5],y=l[6],b=l[7];s&&=(n.push(s),``);var x=h!=null&&m!=null&&m!==h,S=y===`+`||y===`*`,C=y===`?`||y===`*`,w=h||c,T=_||v,E=h||(typeof n[n.length-1]==`string`?n[n.length-1]:``);n.push({name:g||i++,prefix:h||``,delimiter:w,optional:C,repeat:S,partial:x,asterisk:!!b,pattern:T?d(T):b?`.*`:a(w,E)})}return o<e.length&&(s+=e.substr(o)),s&&n.push(s),n}function a(e,t){return!t||t.indexOf(e)>-1?`[^`+u(e)+`]+?`:u(t)+`|(?:(?!`+u(t)+`)[^`+u(e)+`])+?`}function o(e,t){return l(i(e,t),t)}function s(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return`%`+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return`%`+e.charCodeAt(0).toString(16).toUpperCase()})}function l(e,t){for(var r=Array(e.length),i=0;i<e.length;i++)typeof e[i]==`object`&&(r[i]=RegExp(`^(?:`+e[i].pattern+`)$`,p(t)));return function(t,i){for(var a=``,o=t||{},l=(i||{}).pretty?s:encodeURIComponent,u=0;u<e.length;u++){var d=e[u];if(typeof d==`string`){a+=d;continue}var f=o[d.name],p;if(f==null){if(d.optional){d.partial&&(a+=d.prefix);continue}throw TypeError(`Expected "`+d.name+`" to be defined`)}if(n(f)){if(!d.repeat)throw TypeError(`Expected "`+d.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(f.length===0){if(d.optional)continue;throw TypeError(`Expected "`+d.name+`" to not be empty`)}for(var m=0;m<f.length;m++){if(p=l(f[m]),!r[u].test(p))throw TypeError(`Expected all "`+d.name+`" to match "`+d.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(m===0?d.prefix:d.delimiter)+p}continue}if(p=d.asterisk?c(f):l(f),!r[u].test(p))throw TypeError(`Expected "`+d.name+`" to match "`+d.pattern+`", but received "`+p+`"`);a+=d.prefix+p}return a}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,`\\$1`)}function d(e){return e.replace(/([=!:$\/()])/g,`\\$1`)}function f(e,t){return e.keys=t,e}function p(e){return e&&e.sensitive?``:`i`}function m(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function h(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(v(e[i],t,n).source);return f(RegExp(`(?:`+r.join(`|`)+`)`,p(n)),t)}function g(e,t,n){return _(i(e,n),t,n)}function _(e,t,r){n(t)||(r=t||r,t=[]),r||={};for(var i=r.strict,a=r.end!==!1,o=``,s=0;s<e.length;s++){var c=e[s];if(typeof c==`string`)o+=u(c);else{var l=u(c.prefix),d=`(?:`+c.pattern+`)`;t.push(c),c.repeat&&(d+=`(?:`+l+d+`)*`),d=c.optional?c.partial?l+`(`+d+`)?`:`(?:`+l+`(`+d+`))?`:l+`(`+d+`)`,o+=d}}var m=u(r.delimiter||`/`),h=o.slice(-m.length)===m;return i||(o=(h?o.slice(0,-m.length):o)+`(?:`+m+`(?=$))?`),o+=a?`$`:i&&h?``:`(?=`+m+`|$)`,f(RegExp(`^`+o,p(r)),t)}function v(e,t,r){return n(t)||(r=t||r,t=[]),r||={},e instanceof RegExp?m(e,t):n(e)?h(e,t,r):g(e,t,r)}})),Ft=s((e=>{typeof Symbol==`function`&&Symbol.for})),It=s(((e,t)=>{t.exports=Ft()})),Lt=u(Pt());It();function Rt(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}var zt=1073741823,Bt=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:{};function Vt(){var e=`__global_unique_id__`;return Bt[e]=(Bt[e]||0)+1}function Ht(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}function Ut(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,r){e=n,t.forEach(function(t){return t(e,r)})}}}function Wt(e){return Array.isArray(e)?e[0]:e}function Gt(e,t){var n,r,i=`__create-react-context-`+Vt()+`__`,a=function(e){St(n,e);function n(){var t,n=[...arguments];return t=e.call.apply(e,[this].concat(n))||this,t.emitter=Ut(t.props.value),t}var r=n.prototype;return r.getChildContext=function(){var e;return e={},e[i]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,i;Ht(n,r)?i=0:(i=typeof t==`function`?t(n,r):zt,i|=0,i!==0&&this.emitter.set(e.value,i))}},r.render=function(){return this.props.children},n}(S.Component);a.childContextTypes=(n={},n[i]=Et.default.object.isRequired,n);var o=function(t){St(n,t);function n(){var e,n=[...arguments];return e=t.call.apply(t,[this].concat(n))||this,e.observedBits=void 0,e.state={value:e.getValue()},e.onUpdate=function(t,n){(e.observedBits|0)&n&&e.setState({value:e.getValue()})},e}var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=t??zt},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=e??zt},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():e},r.render=function(){return Wt(this.props.children)(this.state.value)},n}(S.Component);return o.contextTypes=(r={},r[i]=Et.default.object,r),{Provider:a,Consumer:o}}var Kt=S.createContext||Gt,qt=function(e){var t=Kt();return t.displayName=e,t},Jt=qt(`Router-History`),Yt=qt(`Router`),Xt=function(e){St(t,e),t.computeRootMatch=function(e){return{path:`/`,url:`/`,params:{},isExact:e===`/`}};function t(t){var n=e.call(this,t)||this;return n.state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen(function(e){n._pendingLocation=e})),n}var n=t.prototype;return n.componentDidMount=function(){var e=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(t){e._isMounted&&e.setState({location:t})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return S.createElement(Yt.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},S.createElement(Jt.Provider,{children:this.props.children||null,value:this.props.history}))},t}(S.Component);S.Component;var Zt=function(e){St(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(S.Component);function Qt(e){var t=e.message,n=e.when,r=n===void 0||n;return S.createElement(Yt.Consumer,null,function(e){if(!e&&Mt(!1),!r||e.staticContext)return null;var n=e.history.block;return S.createElement(Zt,{onMount:function(e){e.release=n(t)},onUpdate:function(e,r){r.message!==t&&(e.release(),e.release=n(t))},onUnmount:function(e){e.release()},message:t})})}var $t={},en=1e4,tn=0;function nn(e,t){var n=``+t.end+t.strict+t.sensitive,r=$t[n]||($t[n]={});if(r[e])return r[e];var i=[],a={regexp:(0,Lt.default)(e,i,t),keys:i};return tn<en&&(r[e]=a,tn++),a}function rn(e,t){t===void 0&&(t={}),(typeof t==`string`||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,i=n.exact,a=i!==void 0&&i,o=n.strict,s=o!==void 0&&o,c=n.sensitive,l=c!==void 0&&c;return[].concat(r).reduce(function(t,n){if(!n&&n!==``)return null;if(t)return t;var r=nn(n,{end:a,strict:s,sensitive:l}),i=r.regexp,o=r.keys,c=i.exec(e);if(!c)return null;var u=c[0],d=c.slice(1),f=e===u;return a&&!f?null:{path:n,url:n===`/`&&u===``?`/`:u,isExact:f,params:o.reduce(function(e,t,n){return e[t.name]=d[n],e},{})}},null)}function an(e){return S.Children.count(e)===0}var on=function(e){St(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var e=this;return S.createElement(Yt.Consumer,null,function(t){!t&&Mt(!1);var n=e.props.location||t.location,r=e.props.computedMatch?e.props.computedMatch:e.props.path?rn(n.pathname,e.props):t.match,i=Dt({},t,{location:n,match:r}),a=e.props,o=a.children,s=a.component,c=a.render;return Array.isArray(o)&&an(o)&&(o=null),S.createElement(Yt.Provider,{value:i},i.match?o?typeof o==`function`?o(i):o:s?S.createElement(s,i):c?c(i):null:typeof o==`function`?o(i):null)})},t}(S.Component);S.Component;var sn=function(e){St(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.render=function(){var e=this;return S.createElement(Yt.Consumer,null,function(t){!t&&Mt(!1);var n=e.props.location||t.location,r,i;return S.Children.forEach(e.props.children,function(e){if(i==null&&S.isValidElement(e)){r=e;var a=e.props.path||e.props.from;i=a?rn(n.pathname,Dt({},e.props,{path:a})):t.match}}),i?S.cloneElement(r,{location:n,computedMatch:i}):null})},t}(S.Component);function cn(e){var t=`withRouter(`+(e.displayName||e.name)+`)`,n=function(t){var n=t.wrappedComponentRef,r=Rt(t,[`wrappedComponentRef`]);return S.createElement(Yt.Consumer,null,function(t){return!t&&Mt(!1),S.createElement(e,Dt({},r,t,{ref:n}))})};return n.displayName=t,n.WrappedComponent=e,(0,N.default)(n,e)}S.useContext;function ln(e){return e.charAt(0)===`/`?e:`/`+e}function un(e){return e.charAt(0)===`/`?e.substr(1):e}function dn(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&`/?#`.indexOf(e.charAt(t.length))!==-1}function fn(e,t){return dn(e,t)?e.substr(t.length):e}function pn(e){return e.charAt(e.length-1)===`/`?e.slice(0,-1):e}function mn(e){var t=e||`/`,n=``,r=``,i=t.indexOf(`#`);i!==-1&&(r=t.substr(i),t=t.substr(0,i));var a=t.indexOf(`?`);return a!==-1&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:n===`?`?``:n,hash:r===`#`?``:r}}function hn(e){var t=e.pathname,n=e.search,r=e.hash,i=t||`/`;return n&&n!==`?`&&(i+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(i+=r.charAt(0)===`#`?r:`#`+r),i}function gn(e,t,n,r){var i;typeof e==`string`?(i=mn(e),i.state=t):(i=Dt({},e),i.pathname===void 0&&(i.pathname=``),i.search?i.search.charAt(0)!==`?`&&(i.search=`?`+i.search):i.search=``,i.hash?i.hash.charAt(0)!==`#`&&(i.hash=`#`+i.hash):i.hash=``,t!==void 0&&i.state===void 0&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(e){throw e instanceof URIError?URIError(`Pathname "`+i.pathname+`" could not be decoded. This is likely caused by an invalid percent-encoding.`):e}return n&&(i.key=n),r?i.pathname?i.pathname.charAt(0)!==`/`&&(i.pathname=At(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname=`/`),i}function _n(){var e=null;function t(t){return e=t,function(){e===t&&(e=null)}}function n(t,n,r,i){if(e!=null){var a=typeof e==`function`?e(t,n):e;typeof a==`string`?typeof r==`function`?r(a,i):i(!0):i(a!==!1)}else i(!0)}var r=[];function i(e){var t=!0;function n(){t&&e.apply(void 0,arguments)}return r.push(n),function(){t=!1,r=r.filter(function(e){return e!==n})}}function a(){var e=[...arguments];r.forEach(function(t){return t.apply(void 0,e)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:i,notifyListeners:a}}var vn=!!(typeof window<`u`&&window.document&&window.document.createElement);function yn(e,t){t(window.confirm(e))}function bn(){return window.navigator.userAgent.indexOf(`Firefox`)===-1}var xn=`hashchange`,Sn={hashbang:{encodePath:function(e){return e.charAt(0)===`!`?e:`!/`+un(e)},decodePath:function(e){return e.charAt(0)===`!`?e.substr(1):e}},noslash:{encodePath:un,decodePath:ln},slash:{encodePath:ln,decodePath:ln}};function Cn(e){var t=e.indexOf(`#`);return t===-1?e:e.slice(0,t)}function wn(){var e=window.location.href,t=e.indexOf(`#`);return t===-1?``:e.substring(t+1)}function Tn(e){window.location.hash=e}function En(e){window.location.replace(Cn(window.location.href)+`#`+e)}function Dn(e){e===void 0&&(e={}),!vn&&Mt(!1);var t=window.history;bn();var n=e,r=n.getUserConfirmation,i=r===void 0?yn:r,a=n.hashType,o=a===void 0?`slash`:a,s=e.basename?pn(ln(e.basename)):``,c=Sn[o],l=c.encodePath,u=c.decodePath;function d(){var e=u(wn());return s&&(e=fn(e,s)),gn(e)}var f=_n();function p(e){Dt(F,e),F.length=t.length,f.notifyListeners(F.location,F.action)}var m=!1,h=null;function g(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash}function _(){var e=wn(),t=l(e);if(e!==t)En(t);else{var n=d(),r=F.location;if(!m&&g(r,n)||h===hn(n))return;h=null,v(n)}}function v(e){if(m)m=!1,p();else{var t=`POP`;f.confirmTransitionTo(e,t,i,function(n){n?p({action:t,location:e}):y(e)})}}function y(e){var t=F.location,n=C.lastIndexOf(hn(t));n===-1&&(n=0);var r=C.lastIndexOf(hn(e));r===-1&&(r=0);var i=n-r;i&&(m=!0,D(i))}var b=wn(),x=l(b);b!==x&&En(x);var S=d(),C=[hn(S)];function w(e){var t=document.querySelector(`base`),n=``;return t&&t.getAttribute(`href`)&&(n=Cn(window.location.href)),n+`#`+l(s+hn(e))}function T(e,t){var n=`PUSH`,r=gn(e,void 0,void 0,F.location);f.confirmTransitionTo(r,n,i,function(e){if(e){var t=hn(r),i=l(s+t);if(wn()!==i){h=t,Tn(i);var a=C.lastIndexOf(hn(F.location)),o=C.slice(0,a+1);o.push(t),C=o,p({action:n,location:r})}else p()}})}function E(e,t){var n=`REPLACE`,r=gn(e,void 0,void 0,F.location);f.confirmTransitionTo(r,n,i,function(e){if(e){var t=hn(r),i=l(s+t);wn()!==i&&(h=t,En(i));var a=C.indexOf(hn(F.location));a!==-1&&(C[a]=t),p({action:n,location:r})}})}function D(e){t.go(e)}function O(){D(-1)}function k(){D(1)}var A=0;function j(e){A+=e,A===1&&e===1?window.addEventListener(xn,_):A===0&&window.removeEventListener(xn,_)}var M=!1;function N(e){e===void 0&&(e=!1);var t=f.setPrompt(e);return M||=(j(1),!0),function(){return M&&(M=!1,j(-1)),t()}}function P(e){var t=f.appendListener(e);return j(1),function(){j(-1),t()}}var F={length:t.length,action:`POP`,location:S,createHref:w,push:T,replace:E,go:D,goBack:O,goForward:k,block:N,listen:P};return F}S.Component;var On=function(e){St(t,e);function t(){var t,n=[...arguments];return t=e.call.apply(e,[this].concat(n))||this,t.history=Dn(t.props),t}var n=t.prototype;return n.render=function(){return S.createElement(Xt,{history:this.history,children:this.props.children})},t}(S.Component),kn=function(e,t){return typeof e==`function`?e(t):e},An=function(e,t){return typeof e==`string`?gn(e,null,null,t):e},jn=function(e){return e},Mn=S.forwardRef;Mn===void 0&&(Mn=jn);function Nn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var Pn=Mn(function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,a=Rt(e,[`innerRef`,`navigate`,`onClick`]),o=a.target,s=Dt({},a,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}!e.defaultPrevented&&e.button===0&&(!o||o===`_self`)&&!Nn(e)&&(e.preventDefault(),r())}});return s.ref=jn===Mn?n:t||n,S.createElement(`a`,s)}),Fn=Mn(function(e,t){var n=e.component,r=n===void 0?Pn:n,i=e.replace,a=e.to,o=e.innerRef,s=Rt(e,[`component`,`replace`,`to`,`innerRef`]);return S.createElement(Yt.Consumer,null,function(e){!e&&Mt(!1);var n=e.history,c=An(kn(a,e.location),e.location),l=c?n.createHref(c):``,u=Dt({},s,{href:l,navigate:function(){var t=kn(a,e.location),r=hn(e.location)===hn(An(t));(i||r?n.replace:n.push)(t)}});return jn===Mn?u.innerRef=o:u.ref=t||o,S.createElement(r,u)})}),In=function(e){return e},Ln=S.forwardRef;Ln===void 0&&(Ln=In);function Rn(){return[...arguments].filter(function(e){return e}).join(` `)}Ln(function(e,t){var n=e[`aria-current`],r=n===void 0?`page`:n,i=e.activeClassName,a=i===void 0?`active`:i,o=e.activeStyle,s=e.className,c=e.exact,l=e.isActive,u=e.location,d=e.sensitive,f=e.strict,p=e.style,m=e.to,h=e.innerRef,g=Rt(e,[`aria-current`,`activeClassName`,`activeStyle`,`className`,`exact`,`isActive`,`location`,`sensitive`,`strict`,`style`,`to`,`innerRef`]);return S.createElement(Yt.Consumer,null,function(e){!e&&Mt(!1);var n=u||e.location,i=An(kn(m,n),n),_=i.pathname,v=_&&_.replace(/([.+*?=^!:${}()[\]|/\\])/g,`\\$1`),y=v?rn(n.pathname,{path:v,exact:c,sensitive:d,strict:f}):null,b=!!(l?l(y,n):y),x=typeof s==`function`?s(b):s,C=typeof p==`function`?p(b):p;b&&(x=Rn(x,a),C=Dt({},C,o));var w=Dt({"aria-current":b&&r||null,className:x,style:C,to:i},g);return In===Ln?w.innerRef=h:w.ref=t||h,S.createElement(Fn,w)})});var zn=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(e){e.Root=`root`,e.Text=`text`,e.Directive=`directive`,e.Comment=`comment`,e.Script=`script`,e.Style=`style`,e.Tag=`tag`,e.CDATA=`cdata`,e.Doctype=`doctype`})(t=e.ElementType||={});function n(e){return e.type===t.Tag||e.type===t.Script||e.type===t.Style}e.isTag=n,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})),Bn=s((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),n=e&&e.__assign||function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.cloneNode=e.hasChildren=e.isDocument=e.isDirective=e.isComment=e.isText=e.isCDATA=e.isTag=e.Element=e.Document=e.CDATA=e.NodeWithChildren=e.ProcessingInstruction=e.Comment=e.Text=e.DataNode=e.Node=void 0;var r=zn(),i=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return e===void 0&&(e=!1),b(this,e)},e}();e.Node=i;var a=function(e){t(n,e);function n(t){var n=e.call(this)||this;return n.data=t,n}return Object.defineProperty(n.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),n}(i);e.DataNode=a;var o=function(e){t(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=r.ElementType.Text,t}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),n}(a);e.Text=o;var s=function(e){t(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=r.ElementType.Comment,t}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),n}(a);e.Comment=s;var c=function(e){t(n,e);function n(t,n){var i=e.call(this,n)||this;return i.name=t,i.type=r.ElementType.Directive,i}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),n}(a);e.ProcessingInstruction=c;var l=function(e){t(n,e);function n(t){var n=e.call(this)||this;return n.children=t,n}return Object.defineProperty(n.prototype,"firstChild",{get:function(){return this.children[0]??null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),n}(i);e.NodeWithChildren=l;var u=function(e){t(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=r.ElementType.CDATA,t}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),n}(l);e.CDATA=u;var d=function(e){t(n,e);function n(){var t=e!==null&&e.apply(this,arguments)||this;return t.type=r.ElementType.Root,t}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),n}(l);e.Document=d;var f=function(e){t(n,e);function n(t,n,i,a){i===void 0&&(i=[]),a===void 0&&(a=t===`script`?r.ElementType.Script:t===`style`?r.ElementType.Style:r.ElementType.Tag);var o=e.call(this,i)||this;return o.name=t,o.attribs=n,o.type=a,o}return Object.defineProperty(n.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map(function(t){return{name:t,value:e.attribs[t],namespace:e[`x-attribsNamespace`]?.[t],prefix:e[`x-attribsPrefix`]?.[t]}})},enumerable:!1,configurable:!0}),n}(l);e.Element=f;function p(e){return(0,r.isTag)(e)}e.isTag=p;function m(e){return e.type===r.ElementType.CDATA}e.isCDATA=m;function h(e){return e.type===r.ElementType.Text}e.isText=h;function g(e){return e.type===r.ElementType.Comment}e.isComment=g;function _(e){return e.type===r.ElementType.Directive}e.isDirective=_;function v(e){return e.type===r.ElementType.Root}e.isDocument=v;function y(e){return Object.prototype.hasOwnProperty.call(e,`children`)}e.hasChildren=y;function b(e,t){t===void 0&&(t=!1);var r;if(h(e))r=new o(e.data);else if(g(e))r=new s(e.data);else if(p(e)){var i=t?x(e.children):[],a=new f(e.name,n({},e.attribs),i);i.forEach(function(e){return e.parent=a}),e.namespace!=null&&(a.namespace=e.namespace),e[`x-attribsNamespace`]&&(a[`x-attribsNamespace`]=n({},e[`x-attribsNamespace`])),e[`x-attribsPrefix`]&&(a[`x-attribsPrefix`]=n({},e[`x-attribsPrefix`])),r=a}else if(m(e)){var i=t?x(e.children):[],l=new u(i);i.forEach(function(e){return e.parent=l}),r=l}else if(v(e)){var i=t?x(e.children):[],y=new d(i);i.forEach(function(e){return e.parent=y}),e[`x-mode`]&&(y[`x-mode`]=e[`x-mode`]),r=y}else if(_(e)){var b=new c(e.name,e.data);e[`x-name`]!=null&&(b[`x-name`]=e[`x-name`],b[`x-publicId`]=e[`x-publicId`],b[`x-systemId`]=e[`x-systemId`]),r=b}else throw Error(`Not implemented yet: ${e.type}`);return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}e.cloneNode=b;function x(e){for(var t=e.map(function(e){return b(e,!0)}),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}})),Vn=s((e=>{var t=e&&e.__createBinding||(Object.create?(function(e,t,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||(`get`in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}):(function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]})),n=e&&e.__exportStar||function(e,n){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(n,r)&&t(n,e,r)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var r=zn(),i=Bn();n(Bn(),e);var a={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},o=function(){function e(e,t,n){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof t==`function`&&(n=t,t=a),typeof e==`object`&&(t=e,e=void 0),this.callback=e??null,this.options=t??a,this.elementCB=n??null}return e.prototype.onparserinit=function(e){this.parser=e},e.prototype.onreset=function(){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},e.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},e.prototype.onerror=function(e){this.handleCallback(e)},e.prototype.onclosetag=function(){this.lastNode=null;var e=this.tagStack.pop();this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(e)},e.prototype.onopentag=function(e,t){var n=this.options.xmlMode?r.ElementType.Tag:void 0,a=new i.Element(e,t,void 0,n);this.addNode(a),this.tagStack.push(a)},e.prototype.ontext=function(e){var t=this.lastNode;if(t&&t.type===r.ElementType.Text)t.data+=e,this.options.withEndIndices&&(t.endIndex=this.parser.endIndex);else{var n=new i.Text(e);this.addNode(n),this.lastNode=n}},e.prototype.oncomment=function(e){if(this.lastNode&&this.lastNode.type===r.ElementType.Comment){this.lastNode.data+=e;return}var t=new i.Comment(e);this.addNode(t),this.lastNode=t},e.prototype.oncommentend=function(){this.lastNode=null},e.prototype.oncdatastart=function(){var e=new i.Text(``),t=new i.CDATA([e]);this.addNode(t),e.parent=t,this.lastNode=e},e.prototype.oncdataend=function(){this.lastNode=null},e.prototype.onprocessinginstruction=function(e,t){var n=new i.ProcessingInstruction(e,t);this.addNode(n)},e.prototype.handleCallback=function(e){if(typeof this.callback==`function`)this.callback(e,this.dom);else if(e)throw e},e.prototype.addNode=function(e){var t=this.tagStack[this.tagStack.length-1],n=t.children[t.children.length-1];this.options.withStartIndices&&(e.startIndex=this.parser.startIndex),this.options.withEndIndices&&(e.endIndex=this.parser.endIndex),t.children.push(e),n&&(e.prev=n,n.next=e),e.parent=t,this.lastNode=null},e}();e.DomHandler=o,e.default=o})),Hn=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CARRIAGE_RETURN_PLACEHOLDER_REGEX=e.CARRIAGE_RETURN_PLACEHOLDER=e.CARRIAGE_RETURN_REGEX=e.CARRIAGE_RETURN=e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=`animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.linearGradient.radialGradient.textPath`.split(`.`),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(e,t){return e[t.toLowerCase()]=t,e},{}),e.CARRIAGE_RETURN=`\r`,e.CARRIAGE_RETURN_REGEX=new RegExp(e.CARRIAGE_RETURN,`g`),e.CARRIAGE_RETURN_PLACEHOLDER=`__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_${Date.now().toString()}__`,e.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER,`g`)})),Un=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.formatAttributes=i,e.hasOpenTag=o,e.escapeSpecialCharacters=s,e.revertEscapedCharacters=c,e.formatDOM=l;var t=Vn(),n=Hn();function r(e){return n.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function i(e){for(var t={},n=0,r=e.length;n<r;n++){var i=e[n];t[i.name]=i.value}return t}function a(e){return e=e.toLowerCase(),r(e)||e}function o(e,t){var n=`<`+t,r=e.toLowerCase().indexOf(n);if(r===-1)return!1;var i=e[r+n.length];return i===`>`||i===` `||i===`	`||i===`
`||i===`\r`||i===`/`}function s(e){return e.replace(n.CARRIAGE_RETURN_REGEX,n.CARRIAGE_RETURN_PLACEHOLDER)}function c(e){return e.replace(n.CARRIAGE_RETURN_PLACEHOLDER_REGEX,n.CARRIAGE_RETURN)}function l(e,n,r){n===void 0&&(n=null);for(var o=[],s,u=0,d=e.length;u<d;u++){var f=e[u];switch(f.nodeType){case 1:var p=a(f.nodeName);s=new t.Element(p,i(f.attributes)),s.children=l(p===`template`?f.content.childNodes:f.childNodes,s);break;case 3:s=new t.Text(c(f.nodeValue??``));break;case 8:s=new t.Comment(f.nodeValue??``);break;default:continue}var m=o[u-1]??null;m&&(m.next=s),s.parent=n,s.prev=m,s.next=null,o.push(s)}return r&&(s=new t.ProcessingInstruction(r.substring(0,r.indexOf(` `)).toLowerCase(),r),s.next=o[0]??null,s.parent=n,o.unshift(s),o[1]&&(o[1].prev=o[0])),o}})),Wn=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;var t=Un(),n=`html`,r=`head`,i=`body`,a=/<([a-zA-Z]+[0-9]?)/,o=function(e,t){throw Error("This browser does not support `document.implementation.createHTMLDocument`")},s=function(e,t){throw Error("This browser does not support `DOMParser.prototype.parseFromString`")},c=typeof window==`object`&&window.DOMParser;if(typeof c==`function`){var l=new c,u=`text/html`;s=function(e,t){return t&&(e=`<${t}>${e}</${t}>`),l.parseFromString(e,u)},o=s}if(typeof document==`object`&&document.implementation){var d=document.implementation.createHTMLDocument();o=function(e,t){if(t){var n=d.documentElement.querySelector(t);return n&&(n.innerHTML=e),d}return d.documentElement.innerHTML=e,d}}var f=typeof document==`object`&&document.createElement(`template`),p;f&&f.content&&(p=function(e){return f.innerHTML=e,f.content.childNodes});var m=function(){return document.createDocumentFragment().childNodes};function h(e){var c,l;e=(0,t.escapeSpecialCharacters)(e);var u=(a.exec(e)?.[1])?.toLowerCase();switch(u){case n:var d=s(e);if(!(0,t.hasOpenTag)(e,r)){var f=d.querySelector(r);(c=f?.parentNode)==null||c.removeChild(f)}if(!(0,t.hasOpenTag)(e,i)){var f=d.querySelector(i);(l=f?.parentNode)==null||l.removeChild(f)}return d.querySelectorAll(n);case r:case i:var h=o(e).querySelectorAll(u);return(0,t.hasOpenTag)(e,i)&&(0,t.hasOpenTag)(e,r)?h[0].parentNode?.childNodes??m():h;default:if(p)return p(e);var f=o(e,i).querySelector(i);return f?.childNodes??m()}}})),Gn=s((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=t(Wn()),r=Un(),i=/<(![a-zA-Z\s]+)>/;function a(e){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];var t=i.exec(e),a=t?t[1]:void 0;return(0,r.formatDOM)((0,n.default)(e),null,a)}})),Kn=s((e=>{e.SAME=0,e.CAMELCASE=1,e.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":`acceptCharset`,accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:`className`,classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:`htmlFor`,form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":`httpEquiv`,icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":`accentHeight`,accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":`alignmentBaseline`,allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":`arabicForm`,ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":`baselineShift`,baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":`capHeight`,clip:0,clipPath:1,"clip-path":`clipPath`,clipPathUnits:1,clipRule:1,"clip-rule":`clipRule`,color:0,colorInterpolation:1,"color-interpolation":`colorInterpolation`,colorInterpolationFilters:1,"color-interpolation-filters":`colorInterpolationFilters`,colorProfile:1,"color-profile":`colorProfile`,colorRendering:1,"color-rendering":`colorRendering`,contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":`dominantBaseline`,dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":`enableBackground`,end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":`fillOpacity`,fillRule:1,"fill-rule":`fillRule`,filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":`floodOpacity`,floodColor:1,"flood-color":`floodColor`,focusable:0,fontFamily:1,"font-family":`fontFamily`,fontSize:1,"font-size":`fontSize`,fontSizeAdjust:1,"font-size-adjust":`fontSizeAdjust`,fontStretch:1,"font-stretch":`fontStretch`,fontStyle:1,"font-style":`fontStyle`,fontVariant:1,"font-variant":`fontVariant`,fontWeight:1,"font-weight":`fontWeight`,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":`glyphName`,glyphOrientationHorizontal:1,"glyph-orientation-horizontal":`glyphOrientationHorizontal`,glyphOrientationVertical:1,"glyph-orientation-vertical":`glyphOrientationVertical`,glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":`horizAdvX`,horizOriginX:1,"horiz-origin-x":`horizOriginX`,ideographic:0,imageRendering:1,"image-rendering":`imageRendering`,in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":`letterSpacing`,lightingColor:1,"lighting-color":`lightingColor`,limitingConeAngle:1,local:0,markerEnd:1,"marker-end":`markerEnd`,markerHeight:1,markerMid:1,"marker-mid":`markerMid`,markerStart:1,"marker-start":`markerStart`,markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":`overlinePosition`,overlineThickness:1,"overline-thickness":`overlineThickness`,paintOrder:1,"paint-order":`paintOrder`,panose1:0,"panose-1":`panose1`,pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":`pointerEvents`,points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":`renderingIntent`,repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":`shapeRendering`,slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":`stopColor`,stopOpacity:1,"stop-opacity":`stopOpacity`,strikethroughPosition:1,"strikethrough-position":`strikethroughPosition`,strikethroughThickness:1,"strikethrough-thickness":`strikethroughThickness`,string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":`strokeDasharray`,strokeDashoffset:1,"stroke-dashoffset":`strokeDashoffset`,strokeLinecap:1,"stroke-linecap":`strokeLinecap`,strokeLinejoin:1,"stroke-linejoin":`strokeLinejoin`,strokeMiterlimit:1,"stroke-miterlimit":`strokeMiterlimit`,strokeWidth:1,"stroke-width":`strokeWidth`,strokeOpacity:1,"stroke-opacity":`strokeOpacity`,suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":`textAnchor`,textDecoration:1,"text-decoration":`textDecoration`,textLength:1,textRendering:1,"text-rendering":`textRendering`,to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":`underlinePosition`,underlineThickness:1,"underline-thickness":`underlineThickness`,unicode:0,unicodeBidi:1,"unicode-bidi":`unicodeBidi`,unicodeRange:1,"unicode-range":`unicodeRange`,unitsPerEm:1,"units-per-em":`unitsPerEm`,unselectable:0,vAlphabetic:1,"v-alphabetic":`vAlphabetic`,values:0,vectorEffect:1,"vector-effect":`vectorEffect`,version:0,vertAdvY:1,"vert-adv-y":`vertAdvY`,vertOriginX:1,"vert-origin-x":`vertOriginX`,vertOriginY:1,"vert-origin-y":`vertOriginY`,vHanging:1,"v-hanging":`vHanging`,vIdeographic:1,"v-ideographic":`vIdeographic`,viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":`vMathematical`,vocab:0,widths:0,wordSpacing:1,"word-spacing":`wordSpacing`,writingMode:1,"writing-mode":`writingMode`,x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":`xHeight`,xlinkActuate:1,"xlink:actuate":`xlinkActuate`,xlinkArcrole:1,"xlink:arcrole":`xlinkArcrole`,xlinkHref:1,"xlink:href":`xlinkHref`,xlinkRole:1,"xlink:role":`xlinkRole`,xlinkShow:1,"xlink:show":`xlinkShow`,xlinkTitle:1,"xlink:title":`xlinkTitle`,xlinkType:1,"xlink:type":`xlinkType`,xmlBase:1,"xml:base":`xmlBase`,xmlLang:1,"xml:lang":`xmlLang`,xmlns:0,"xml:space":`xmlSpace`,xmlnsXlink:1,"xmlns:xlink":`xmlnsXlink`,xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1}})),qn=s((e=>{var t=0,n=1,r=2,i=3,a=4,o=5,s=6;function c(e){return u.hasOwnProperty(e)?u[e]:null}function l(e,t,n,o,s,c,l){this.acceptsBooleans=t===r||t===i||t===a,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=l}var u={};[`children`,`dangerouslySetInnerHTML`,`defaultValue`,`defaultChecked`,`innerHTML`,`suppressContentEditableWarning`,`suppressHydrationWarning`,`style`].forEach(e=>{u[e]=new l(e,t,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(([e,t])=>{u[e]=new l(e,n,!1,t,null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(e=>{u[e]=new l(e,r,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(e=>{u[e]=new l(e,r,!1,e,null,!1,!1)}),[`allowFullScreen`,`async`,`autoFocus`,`autoPlay`,`controls`,`default`,`defer`,`disabled`,`disablePictureInPicture`,`disableRemotePlayback`,`formNoValidate`,`hidden`,`loop`,`noModule`,`noValidate`,`open`,`playsInline`,`readOnly`,`required`,`reversed`,`scoped`,`seamless`,`itemScope`].forEach(e=>{u[e]=new l(e,i,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(e=>{u[e]=new l(e,i,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(e=>{u[e]=new l(e,a,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(e=>{u[e]=new l(e,s,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(e=>{u[e]=new l(e,o,!1,e.toLowerCase(),null,!1,!1)});var d=/[\-\:]([a-z])/g,f=e=>e[1].toUpperCase();`accent-height.alignment-baseline.arabic-form.baseline-shift.cap-height.clip-path.clip-rule.color-interpolation.color-interpolation-filters.color-profile.color-rendering.dominant-baseline.enable-background.fill-opacity.fill-rule.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.glyph-name.glyph-orientation-horizontal.glyph-orientation-vertical.horiz-adv-x.horiz-origin-x.image-rendering.letter-spacing.lighting-color.marker-end.marker-mid.marker-start.overline-position.overline-thickness.paint-order.panose-1.pointer-events.rendering-intent.shape-rendering.stop-color.stop-opacity.strikethrough-position.strikethrough-thickness.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-anchor.text-decoration.text-rendering.underline-position.underline-thickness.unicode-bidi.unicode-range.units-per-em.v-alphabetic.v-hanging.v-ideographic.v-mathematical.vector-effect.vert-adv-y.vert-origin-x.vert-origin-y.word-spacing.writing-mode.xmlns:xlink.x-height`.split(`.`).forEach(e=>{let t=e.replace(d,f);u[t]=new l(t,n,!1,e,null,!1,!1)}),[`xlink:actuate`,`xlink:arcrole`,`xlink:role`,`xlink:show`,`xlink:title`,`xlink:type`].forEach(e=>{let t=e.replace(d,f);u[t]=new l(t,n,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(e=>{let t=e.replace(d,f);u[t]=new l(t,n,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(e=>{u[e]=new l(e,n,!1,e.toLowerCase(),null,!1,!1)});var p=`xlinkHref`;u[p]=new l(`xlinkHref`,n,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(e=>{u[e]=new l(e,n,!1,e.toLowerCase(),null,!0,!0)});var{CAMELCASE:m,SAME:h,possibleStandardNames:g}=Kn(),_=RegExp.prototype.test.bind(RegExp(`^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`)),v=Object.keys(g).reduce((e,t)=>{let n=g[t];return n===h?e[t]=t:n===m?e[t.toLowerCase()]=t:e[t]=n,e},{});e.BOOLEAN=i,e.BOOLEANISH_STRING=r,e.NUMERIC=o,e.OVERLOADED_BOOLEAN=a,e.POSITIVE_NUMERIC=s,e.RESERVED=t,e.STRING=n,e.getPropertyInfo=c,e.isCustomAttribute=_,e.possibleStandardNames=v})),Jn=s(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g;function u(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,u=1;function f(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(`
`);u=~n?e.length-n:u+e.length}function p(){var e={line:l,column:u};return function(t){return t.position=new m(e),_(),t}}function m(e){this.start=e,this.end={line:l,column:u},this.source=t.source}m.prototype.content=e;function h(n){var r=Error(t.source+`:`+l+`:`+u+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=u,r.source=e,!t.silent)throw r}function g(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function _(){g(i)}function v(e){var t;for(e||=[];t=y();)t!==!1&&e.push(t);return e}function y(){var t=p();if(e.charAt(0)==`/`&&e.charAt(1)==`*`){for(var n=2;e.charAt(n)!=``&&(e.charAt(n)!=`*`||e.charAt(n+1)!=`/`);)++n;if(n+=2,e.charAt(n-1)===``)return h(`End of comment missing`);var r=e.slice(2,n-2);return u+=2,f(r),e=e.slice(n),u+=2,t({type:`comment`,comment:r})}}function b(){var e=p(),t=g(a);if(t){if(y(),!g(o))return h(`property missing ':'`);var r=g(s),i=e({type:`declaration`,property:d(t[0].replace(n,``)),value:r?d(r[0].replace(n,``)):``});return g(c),i}}function x(){var e=[];v(e);for(var t;t=b();)t!==!1&&(e.push(t),v(e));return e}return _(),x()}function d(e){return e?e.replace(l,``):``}t.exports=u})),Yn=s((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=t(Jn());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Xn=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),Zn=s(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(Yn()),r=Xn();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Qn=s((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=void 0,e.isCustomComponent=a,e.setStyleProp=s;var n=p(),r=t(Zn()),i=new Set([`annotation-xml`,`color-profile`,`font-face`,`font-face-src`,`font-face-uri`,`font-face-format`,`font-face-name`,`missing-glyph`]);function a(e,t){return e.includes(`-`)?!i.has(e):!!(t&&typeof t.is==`string`)}var o={reactCompat:!0};function s(e,t){if(typeof e==`string`){if(!e.trim()){t.style={};return}try{t.style=(0,r.default)(e,o)}catch{t.style={}}}}e.PRESERVE_CUSTOM_ATTRIBUTES=Number(n.version.split(`.`)[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set([`tr`,`tbody`,`thead`,`tfoot`,`colgroup`,`table`,`head`,`html`,`frameset`]),e.canTextBeChildOfNode=function(t){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(t.name)},e.returnFirstArg=function(e){return e}})),$n=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var t=qn(),n=Qn(),r=[`checked`,`value`],i=[`input`,`select`,`textarea`],a={reset:!0,submit:!0};function o(e,o){e===void 0&&(e={});var c={},l=!!(e.type&&a[e.type]);for(var u in e){var d=e[u];if((0,t.isCustomAttribute)(u)){c[u]=d;continue}var f=u.toLowerCase(),p=s(f);if(p){var m=(0,t.getPropertyInfo)(p);switch(r.includes(p)&&i.includes(o)&&!l&&(p=s(`default`+f)),c[p]=d,m?.type){case t.BOOLEAN:c[p]=!0;break;case t.OVERLOADED_BOOLEAN:d===``&&(c[p]=!0)}continue}n.PRESERVE_CUSTOM_ATTRIBUTES&&(c[u]=d)}return(0,n.setStyleProp)(e.style,c),c}function s(e){return t.possibleStandardNames[e]}})),er=s((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=p(),r=t($n()),i=Qn(),a={cloneElement:n.cloneElement,createElement:n.createElement,isValidElement:n.isValidElement};function o(e,t){t===void 0&&(t={});for(var n=[],c=typeof t.replace==`function`,l=t.transform??i.returnFirstArg,u=t.library??a,d=u.cloneElement,f=u.createElement,p=u.isValidElement,m=e.length,h=0;h<m;h++){var g=e[h];if(c){var _=t.replace?.call(t,g,h);if(p(_)){m>1&&(_=d(_,{key:_.key??h})),n.push(l(_,g,h));continue}}if(g.type===`text`){var v=!g.data.trim().length;if(v&&g.parent&&!(0,i.canTextBeChildOfNode)(g.parent)||t.trim&&v)continue;n.push(l(g.data,g,h));continue}var y=g,b={};s(y)?((0,i.setStyleProp)(y.attribs.style,y.attribs),b=y.attribs):y.attribs&&(b=(0,r.default)(y.attribs,y.name));var x=void 0;switch(g.type){case`script`:case`style`:g.children[0]&&(b.dangerouslySetInnerHTML={__html:g.children[0].data});break;case`tag`:g.name===`textarea`&&g.children[0]?b.defaultValue=g.children[0].data:g.children?.length&&(x=o(g.children,t));break;default:continue}m>1&&(b.key=h),n.push(l(f(g.name,b,x),g,h))}return n.length===1?n[0]:n}function s(e){return i.PRESERVE_CUSTOM_ATTRIBUTES&&e.type===`tag`&&(0,i.isCustomComponent)(e.name,e.attribs)}})),tr=u(s((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0,e.default=o;var n=t(Gn());e.htmlToDOM=n.default,e.attributesToProps=t($n()).default;var r=t(er());e.domToReact=r.default;var i=Vn();Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return i.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return i.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return i.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return i.Text}});var a={lowerCaseAttributeNames:!1};function o(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);return e?(0,r.default)((0,n.default)(e,t?.htmlparser2??a),t):[]}}))(),1),G=tr.default.default||tr.default,K=e=>{if(e==null)return``;try{return e.includes(`{{{`)===!0?`<div>${`${e}`.replace(/{{{/gi,`<`).replace(/&apos;/gi,`'`).replace(/}}}/gi,`>`).replace(/&quot;/gi,`"`).replace(/&amp;/gi,`&`)}</div>`:e}catch(e){console.log(`There was an error decoding into HTML`),console.error(e)}};function nr(e){var t=(e,t=2)=>(`00`+e).slice(-t);return t(e/36e5|0)+`:`+t(e%36e5/6e4|0)+`:`+t(e%6e4/1e3|0)}var rr=()=>{let e=new Date,t=e.getDate(),n=e.getMonth(),r=e.getFullYear(),i=e.getHours(),a=e.getMinutes(),o=e.getSeconds();return o<10&&(o=`0`+o),a<10&&(a=`0`+a),r+`/`+(n+1)+`/`+t+`@`+i+`:`+a+`:`+o};function ir(e){var t=(e,t=2)=>(`00`+e).slice(-t);return t(e/36e5|0)+`hr, `+t(e%36e5/6e4|0)+`min, `+t(e%6e4/1e3|0)+`sec`}var ar=(e,t,n)=>{let r=`cumulative${t}Duration`,i=`timeOn${n}`,a=`lastAccess${n}`,o=`CumulativeTime${n}`,s=localStorage.getItem(r)||0;s===void 0&&(s=0);let c=+s,l=Date.now()-e+c;localStorage.setItem(r,l);let u=rr();localStorage.setItem(a,u);let d=nr(l);localStorage.setItem(i,d),localStorage.setItem(o,ir(l))},or=s(((e,t)=>{(function(){var e={}.hasOwnProperty;function n(){for(var e=``,t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,r(n)))}return e}function r(t){if(typeof t==`string`||typeof t==`number`)return t;if(typeof t!=`object`)return``;if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes(`[native code]`))return t.toString();var r=``;for(var a in t)e.call(t,a)&&t[a]&&(r=i(r,a));return r}function i(e,t){return t?e?e+` `+t:e+t:e}t!==void 0&&t.exports?(n.default=n,t.exports=n):typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(`classnames`,[],function(){return n}):window.classNames=n})()})),sr=u(_()),cr=u(or());function lr(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var ur=!1;if(typeof window<`u`){var dr={get passive(){ur=!0}};window.addEventListener(`testPassive`,null,dr),window.removeEventListener(`testPassive`,null,dr)}var fr=typeof window<`u`&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform===`MacIntel`&&window.navigator.maxTouchPoints>1),pr=[],mr=!1,hr=-1,gr=void 0,_r=void 0,vr=function(e){return pr.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},yr=function(e){var t=e||window.event;return vr(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},br=function(e){if(_r===void 0){var t=!!e&&e.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(_r=document.body.style.paddingRight,document.body.style.paddingRight=n+`px`)}gr===void 0&&(gr=document.body.style.overflow,document.body.style.overflow=`hidden`)},xr=function(){_r!==void 0&&(document.body.style.paddingRight=_r,_r=void 0),gr!==void 0&&(document.body.style.overflow=gr,gr=void 0)},Sr=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},Cr=function(e,t){var n=e.targetTouches[0].clientY-hr;return vr(e.target)?!1:t&&t.scrollTop===0&&n>0||Sr(t)&&n<0?yr(e):(e.stopPropagation(),!0)},wr=function(e,t){if(!e){console.error(`disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.`);return}if(!pr.some(function(t){return t.targetElement===e})){var n={targetElement:e,options:t||{}};pr=[].concat(lr(pr),[n]),fr?(e.ontouchstart=function(e){e.targetTouches.length===1&&(hr=e.targetTouches[0].clientY)},e.ontouchmove=function(t){t.targetTouches.length===1&&Cr(t,e)},mr||=(document.addEventListener(`touchmove`,yr,ur?{passive:!1}:void 0),!0)):br(t)}},Tr=function(e){if(!e){console.error(`enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.`);return}pr=pr.filter(function(t){return t.targetElement!==e}),fr?(e.ontouchstart=null,e.ontouchmove=null,mr&&pr.length===0&&(document.removeEventListener(`touchmove`,yr,ur?{passive:!1}:void 0),mr=!1)):pr.length||xr()};function Er(e=null){let[t,n]=S.useState(e),{current:r}=S.useRef({current:t});return Object.defineProperty(r,"current",{get:()=>t,set:e=>{Object.is(t,e)||(t=e,n(e))}}),r}function Dr(e,t={isStateful:!0}){let n=Er(null),r=(0,S.useRef)(null),i=t.isStateful?n:r;return S.useEffect(()=>{!e||(typeof e==`function`?e(i.current):e.current=i.current)}),i}function Or(){return Or=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}var kr=function(e){var t=e.classes,n=e.classNames,r=e.styles,i=e.id,a=e.closeIcon,o=e.onClick;return S.createElement(`button`,{id:i,className:(0,cr.default)(t.closeButton,n?.closeButton),style:r?.closeButton,onClick:o,"data-testid":`close-button`},a||S.createElement(`svg`,{className:n?.closeIcon,style:r?.closeIcon,width:28,height:28,viewBox:`0 0 36 36`,"data-testid":`close-icon`},S.createElement(`path`,{d:`M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z`})))},Ar=typeof window<`u`,jr=[`input`,`select`,`textarea`,`a[href]`,`button`,`[tabindex]`,`audio[controls]`,`video[controls]`,`[contenteditable]:not([contenteditable="false"])`];function Mr(e){return e.offsetParent===null||getComputedStyle(e).visibility===`hidden`}function Nr(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}function Pr(e){if(e.tagName!==`INPUT`||e.type!==`radio`||!e.name)return!0;var t=(e.form||e.ownerDocument).querySelectorAll(`input[type="radio"][name="`+e.name+`"]`),n=Nr(t,e.form);return n===e||n===void 0&&t[0]===e}function Fr(e){for(var t=document.activeElement,n=e.querySelectorAll(jr.join(`,`)),r=[],i=0;i<n.length;i++){var a=n[i];(t===a||!a.disabled&&Lr(a)>-1&&!Mr(a)&&Pr(a))&&r.push(a)}return r}function Ir(e,t){if(!(!e||e.key!==`Tab`)){if(!t||!t.contains)return process,!1;if(!t.contains(e.target))return!1;var n=Fr(t),r=n[0],i=n[n.length-1];return e.shiftKey&&e.target===r?(i.focus(),e.preventDefault(),!0):!e.shiftKey&&e.target===i&&(r.focus(),e.preventDefault(),!0)}}function Lr(e){var t=parseInt(e.getAttribute(`tabindex`),10);return isNaN(t)?Rr(e)?0:e.tabIndex:t}function Rr(e){return e.getAttribute(`contentEditable`)}var zr=function(e){var t=e.container,n=e.initialFocusRef,r=(0,S.useRef)();return(0,S.useEffect)(function(){var e=function(e){t?.current&&Ir(e,t.current)};if(Ar&&document.addEventListener(`keydown`,e),Ar&&t?.current){var i=function(){jr.findIndex(function(e){return document.activeElement?.matches(e)})!==-1&&(r.current=document.activeElement)};if(n)i(),requestAnimationFrame(function(){var e;(e=n.current)==null||e.focus()});else{var a=Fr(t.current);a[0]&&(i(),a[0].focus())}}return function(){if(Ar){var t;document.removeEventListener(`keydown`,e),(t=r.current)==null||t.focus()}}},[t,n]),null},Br=[],Vr={add:function(e){Br.push(e)},remove:function(e){Br=Br.filter(function(t){return t!==e})},isTopModal:function(e){return!!Br.length&&Br[Br.length-1]===e}};function Hr(e,t){(0,S.useEffect)(function(){return t&&Vr.add(e),function(){Vr.remove(e)}},[t,e])}var Ur=function(e,t,n,r,i){var a=(0,S.useRef)(null);(0,S.useEffect)(function(){return t&&e.current&&r&&(a.current=e.current,wr(e.current,{reserveScrollBarGap:i})),function(){a.current&&=(Tr(a.current),null)}},[t,n,e,r,i])},Wr={root:`react-responsive-modal-root`,overlay:`react-responsive-modal-overlay`,overlayAnimationIn:`react-responsive-modal-overlay-in`,overlayAnimationOut:`react-responsive-modal-overlay-out`,modalContainer:`react-responsive-modal-container`,modalContainerCenter:`react-responsive-modal-containerCenter`,modal:`react-responsive-modal-modal`,modalAnimationIn:`react-responsive-modal-modal-in`,modalAnimationOut:`react-responsive-modal-modal-out`,closeButton:`react-responsive-modal-closeButton`},Gr=S.forwardRef(function(e,t){var n=e.open,r=e.center,i=e.blockScroll,a=i===void 0||i,o=e.closeOnEsc,s=o===void 0||o,c=e.closeOnOverlayClick,l=c===void 0||c,u=e.container,d=e.showCloseIcon,f=d===void 0||d,p=e.closeIconId,m=e.closeIcon,h=e.focusTrapped,g=h===void 0||h,_=e.initialFocusRef,v=_===void 0?void 0:_,y=e.animationDuration,b=y===void 0?300:y,x=e.classNames,C=e.styles,w=e.role,T=w===void 0?`dialog`:w,E=e.ariaDescribedby,D=e.ariaLabelledby,O=e.containerId,k=e.modalId,A=e.onClose,j=e.onEscKeyDown,M=e.onOverlayClick,N=e.onAnimationEnd,P=e.children,F=e.reserveScrollBarGap,ee=Dr(t),I=(0,S.useRef)(null),L=(0,S.useRef)(null),R=(0,S.useRef)(null);R.current===null&&Ar&&(R.current=document.createElement(`div`));var z=(0,S.useState)(!1),B=z[0],V=z[1];Hr(I,n),Ur(I,n,B,a,F);var H=function(){R.current&&!u&&!document.body.contains(R.current)&&document.body.appendChild(R.current),document.addEventListener(`keydown`,ne)},te=function(){R.current&&!u&&document.body.contains(R.current)&&document.body.removeChild(R.current),document.removeEventListener(`keydown`,ne)},ne=function(e){e.keyCode!==27||!Vr.isTopModal(I)||(j?.(e),s&&A())};(0,S.useEffect)(function(){return function(){B&&te()}},[B]),(0,S.useEffect)(function(){n&&!B&&(V(!0),H())},[n]);var re=function(e){if(L.current===null&&(L.current=!0),!L.current){L.current=null;return}M?.(e),l&&A(),L.current=null},ie=function(){L.current=!1},ae=function(){n||V(!1),N?.()},oe=u||R.current,se=n?x?.overlayAnimationIn??Wr.overlayAnimationIn:x?.overlayAnimationOut??Wr.overlayAnimationOut,ce=n?x?.modalAnimationIn??Wr.modalAnimationIn:x?.modalAnimationOut??Wr.modalAnimationOut;return B&&oe?sr.createPortal(S.createElement(`div`,{className:(0,cr.default)(Wr.root,x?.root),style:C?.root,"data-testid":`root`},S.createElement(`div`,{className:(0,cr.default)(Wr.overlay,x?.overlay),"data-testid":`overlay`,"aria-hidden":!0,style:Or({animation:se+` `+b+`ms`},C?.overlay)}),S.createElement(`div`,{ref:I,id:O,className:(0,cr.default)(Wr.modalContainer,r&&Wr.modalContainerCenter,x?.modalContainer),style:C?.modalContainer,"data-testid":`modal-container`,onClick:re},S.createElement(`div`,{ref:ee,className:(0,cr.default)(Wr.modal,x?.modal),style:Or({animation:ce+` `+b+`ms`},C?.modal),onMouseDown:ie,onMouseUp:ie,onClick:ie,onAnimationEnd:ae,id:k,role:T,"aria-modal":`true`,"aria-labelledby":D,"aria-describedby":E,"data-testid":`modal`,tabIndex:-1},g&&S.createElement(zr,{container:ee,initialFocusRef:v}),P,f&&S.createElement(kr,{classes:Wr,classNames:x,styles:C,closeIcon:m,onClick:A,id:p})))),oe):null});function Kr(e){let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(i!==t){let e=t;t=r?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a=(e,r=i,a=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let o=r(t);function s(){let n=r(t);if(!a(o,n)){let t=o;e(o=n,t)}}return n.add(s),()=>n.delete(s)},o={setState:r,getState:i,subscribe:(e,t,r)=>t||r?a(e,t,r):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(r,i,o),o}var qr=typeof window>`u`||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?S.useEffect:S.useLayoutEffect;function Jr(e){let t=typeof e==`function`?Kr(e):e,n=(e=t.getState,n=Object.is)=>{let[,r]=(0,S.useReducer)(e=>e+1,0),i=t.getState(),a=(0,S.useRef)(i),o=(0,S.useRef)(e),s=(0,S.useRef)(n),c=(0,S.useRef)(!1),l=(0,S.useRef)();l.current===void 0&&(l.current=e(i));let u,d=!1;(a.current!==i||o.current!==e||s.current!==n||c.current)&&(u=e(i),d=!n(l.current,u)),qr(()=>{d&&(l.current=u),a.current=i,o.current=e,s.current=n,c.current=!1});let f=(0,S.useRef)(i);qr(()=>{let e=()=>{try{let e=t.getState(),n=o.current(e);s.current(l.current,n)||(a.current=e,l.current=n,r())}catch{c.current=!0,r()}},n=t.subscribe(e);return t.getState()!==f.current&&e(),n},[]);let p=d?u:l.current;return(0,S.useDebugValue)(p),p};return Object.assign(n,t),n[Symbol.iterator]=function(){console.warn(`[useStore, api] = create() is deprecated and will be removed in v4`);let e=[n,t];return{next(){let t=e.length<=0;return{value:e.shift(),done:t}}}},n}var Yr=e=>({configObj:{},surveyQuestionObjArray:[],requiredAnswersObj:{},setConfigObj:t=>{e(()=>({configObj:t}))},setSurveyQuestionObjArray:t=>{e(()=>({surveyQuestionObjArray:t}))},setRequiredAnswersObj:t=>{e(()=>({requiredAnswersObj:t}))}}),Xr=e=>({langObj:{},setLangObj:t=>{e(()=>({langObj:t}))}}),Zr=e=>({mapObj:{},setMapObj:t=>{e(()=>({mapObj:t}))}}),Qr=e=>({statementsObj:{},columnStatements:{},resetColumnStatements:{},setStatementsObj:t=>{e(()=>({statementsObj:t}))},setColumnStatements:t=>{e(()=>({columnStatements:t}))},setResetColumnStatements:t=>{e(()=>({resetColumnStatements:t}))}}),q=Jr((e,t)=>({...Yr(e,t),...Xr(e,t),...Zr(e,t),...Qr(e,t)})),$r=e=>({displayLocalPartIdWarning1:!1,displayLocalPartIdWarning2:!1,triggerLocalDeleteModal:!1,localParticipantName:``,setLocalParticipantName:t=>{e(()=>({localParticipantName:t}))},setLocalPartIdWarning1:t=>{e(()=>({displayLocalPartIdWarning1:t}))},setLocalPartIdWarning2:t=>{e(()=>({displayLocalPartIdWarning2:t}))},setLocalDeleteModal:t=>{e(()=>({triggerLocalDeleteModal:t}))}}),ei=e=>({triggerPresortModal:!0,presortNoReturn:!1,presortPosCards:[],presortNeuCards:[],presortNegCards:[],presortCards:[],presortSortedStatementsNumInitial:0,presortFinished:!1,triggerPresortFinishedModal:!1,triggerPresortPreventNavModal:!1,results:{},m_PresortResults:[],triggerMobilePresortFinishedModal:!1,mobilePresortFontSize:2,mobilePresortViewSize:42,triggerMobilePresortRedoModal:!1,triggerMobilePresortHelpModal:!0,triggerMobilePresortPreventNavModal:!1,setTriggerMobilePresortPreventNavModal:t=>{e(()=>({triggerMobilePresortPreventNavModal:t}))},setTriggerMobilePresortHelpModal:t=>{e(()=>({triggerMobilePresortHelpModal:t}))},setTriggerMobilePresortRedoModal:t=>{e(()=>({triggerMobilePresortRedoModal:t}))},setm_PresortStatementCount:t=>{e(()=>({m_PresortStatementCount:t}))},setMobilePresortViewSize:t=>{e(()=>({mobilePresortViewSize:t}))},setMobilePresortFontSize:t=>{e(()=>({mobilePresortFontSize:t}))},setTriggerMobilePresortFinishedModal:t=>{e(()=>({triggerMobilePresortFinishedModal:t}))},setm_PresortResults:t=>{e(()=>({m_PresortResults:t}))},setPresortNoReturn:t=>{e(()=>({presortNoReturn:t}))},setPresortPosCards:t=>{e(()=>({presortPosCards:t}))},setPresortNeuCards:t=>{e(()=>({presortNeuCards:t}))},setPresortNegCards:t=>{e(()=>({presortNegCards:t}))},setPresortCards:t=>{e(()=>({presortCards:t}))},setPresortSortedStatementsNumInitial:t=>{e(()=>({presortSortedStatementsNumInitial:t}))},setPresortFinished:t=>{e(()=>({presortFinished:t}))},setTriggerPresortFinishedModal:t=>{e(()=>({triggerPresortFinishedModal:t}))},setTriggerPresortPreventNavModal:t=>{e(()=>({triggerPresortPreventNavModal:t}))},setResults:t=>{e(()=>({results:t}))},setTriggerPresortModal:t=>{e(()=>({triggerPresortModal:t}))}}),ti=e=>({dataLoaded:!1,isLoggedIn:!1,triggerLandingModal:!1,triggerConsentModal:!1,usercode:``,urlUsercode:`not set`,partId:``,localUsercode:``,displayAccessCodeWarning:!1,userInputAccessCode:``,displayLandingContent:!1,triggerSaveBeforeDeleteModal:!1,userInputPartId:``,displayPartIdWarning:!1,displayMobileHelpButton:!0,setDisplayMobileHelpButton:t=>{e(()=>({displayMobileHelpButton:t}))},setTriggerConsentModal:t=>{e(()=>({triggerConsentModal:t}))},setUrlUsercode:t=>{e(()=>({urlUsercode:t}))},setDisplayPartIdWarning:t=>{e(()=>({displayPartIdWarning:t}))},setUserInputPartId:t=>{e(()=>({userInputPartId:t}))},setTriggerSaveBeforeDeleteModal:t=>{e(()=>({triggerSaveBeforeDeleteModal:t}))},setDataLoaded:t=>{e(()=>({dataLoaded:t}))},setIsLoggedIn:t=>{e(()=>({isLoggedIn:t}))},setTriggerLandingModal:t=>{e(()=>({triggerLandingModal:t}))},setUsercode:t=>{e(()=>({usercode:t}))},setPartId:t=>{e(()=>({partId:t}))},setLocalUsercode:t=>{e(()=>({localUsercode:t}))},setDisplayAccessCodeWarning:t=>{e(()=>({displayAccessCodeWarning:t}))},setUserInputAccessCode:t=>{e(()=>({userInputAccessCode:t}))},setDisplayLandingContent:t=>{e(()=>({displayLandingContent:t}))}}),ni=e=>({cardFontSizePresort:5,cardFontSizeSort:5,cardFontSizePostsort:5,currentPage:`landing`,progressScore:10,progressScoreAdditional:0,progressScoreAdditionalSort:0,displayNextButton:!1,minCardHeightSort:40,minCardHeightPostsort:40,setMinCardHeightPostsort:t=>{e(()=>({minCardHeightPostsort:t}))},setMinCardHeightSort:t=>{e(()=>({minCardHeightSort:t}))},setCardFontSizePostsort:t=>{e(()=>({cardFontSizePostsort:t}))},setCardFontSizeSort:t=>{e(()=>({cardFontSizeSort:t}))},setCardFontSizePresort:t=>{e(()=>({cardFontSizePresort:t}))},setCurrentPage:t=>{e(()=>({currentPage:t}))},setProgressScore:t=>{e(()=>({progressScore:t}))},setProgressScoreAdditional:t=>{e(()=>({progressScoreAdditional:t}))},setProgressScoreAdditionalSort:t=>{e(()=>({progressScoreAdditionalSort:t}))},setDisplayNextButton:t=>{e(()=>({displayNextButton:t}))}}),ri=e=>({cardHeightSort:120,cardHeightPostsort:120,columnWidth:100,draggingOverColumnId:``,hasOverloadedColumn:!1,isSortingCards:!0,isSortingFinished:!1,overloadedColumn:``,sortCompleted:!1,sortFinished:!1,sortFinishedModalHasBeenShown:!1,sortCharacteristics:{},topMargin:50,triggerSortModal:!0,triggerSortPreventNavModal:!1,triggerSortOverloadedColumnModal:!1,triggerSortingFinishedModal:!1,sortGridResults:{},bypassSort:!1,bypassPresort:!1,mobileSortFontSize:2,mobileSortViewSize:42,triggerMobileSortSwapModal:!1,triggerMobileSortHelpModal:!0,triggerMobileSortScrollBottomModal:!1,hasScrolledToBottomSort:!1,setHasScrolledToBottomSort:t=>{e(()=>({hasScrolledToBottomSort:t}))},setTriggerMobileSortScrollBottomModal:t=>{e(()=>({triggerMobileSortScrollBottomModal:t}))},setTriggerMobileSortHelpModal:t=>{e(()=>({triggerMobileSortHelpModal:t}))},setTriggerMobileSortSwapModal:t=>{e(()=>({triggerMobileSortSwapModal:t}))},setMobileSortViewSize:t=>{e(()=>({mobileSortViewSize:t}))},setMobileSortFontSize:t=>{e(()=>({mobileSortFontSize:t}))},setBypassPresort:t=>{e(()=>({bypassPresort:t}))},setBypassSort:t=>{e(()=>({bypassSort:t}))},setDraggingOverColumnId:t=>{e(()=>({draggingOverColumnId:t}))},setOverloadedColumn:t=>{e(()=>({overloadedColumn:t}))},setTriggerSortingFinishedModal:t=>{e(()=>({triggerSortingFinishedModal:t}))},setSortGridResults:t=>{e(()=>({sortGridResults:t}))},setColumnWidth:t=>{e(()=>({columnWidth:t}))},setTopMargin:t=>{e(()=>({topMargin:t}))},setIsSortingCards:t=>{e(()=>({isSortingCards:t}))},setSortCompleted:t=>{e(()=>({sortCompleted:t}))},setSortFinished:t=>{e(()=>({sortFinished:t}))},setSortFinishedModalHasBeenShown:t=>{e(()=>({sortFinishedModalHasBeenShown:t}))},setSortCharacteristics:t=>{e(()=>({sortCharacteristics:t}))},setCardHeightSort:t=>{e(()=>({cardHeightSort:t}))},setCardHeightPostsort:t=>{e(()=>({cardHeightPostsort:t}))},setTriggerSortModal:t=>{e(()=>({triggerSortModal:t}))},setIsSortingFinished:t=>{e(()=>({isSortingFinished:t}))},setHasOverloadedColumn:t=>{e(()=>({hasOverloadedColumn:t}))},setTriggerSortPreventNavModal:t=>{e(()=>({triggerSortPreventNavModal:t}))},setTriggerSortOverloadedColumnModal:t=>{e(()=>({triggerSortOverloadedColumnModal:t}))}}),ii=e=>({resultsPostsort:{},statementCommentsObj:{},triggerPostsortModal:!0,postsortCommentCheckObj:{},showPostsortCommentHighlighting:!1,triggerPostsortPreventNavModal:!1,triggerMobilePostsortPreventNavModal:!1,postsortDualImageArray:[],mobilePostsortFontSize:2,mobilePostsortViewSize:72,triggerMobilePostsortHelpModal:!0,setTriggerMobilePostsortHelpModal:t=>{e(()=>({triggerMobilePostsortHelpModal:t}))},setTriggerMobilePostsortPreventNavModal:t=>{e(()=>({triggerMobilePostsortPreventNavModal:t}))},setMobilePostsortViewSize:t=>{e(()=>({mobilePostsortViewSize:t}))},setMobilePostsortFontSize:t=>{e(()=>({mobilePostsortFontSize:t}))},setPostsortDualImageArray:t=>{e(()=>({postsortDualImageArray:t}))},setResultsPostsort:t=>{e(()=>({resultsPostsort:t}))},setStatementCommentsObj:t=>{e(()=>({statementCommentsObj:t}))},setTriggerPostsortModal:t=>{e(()=>({triggerPostsortModal:t}))},setPostsortCommentCheckObj:t=>{e(()=>({postsortCommentCheckObj:t}))},setShowPostsortCommentHighlighting:t=>{e(()=>({showPostsortCommentHighlighting:t}))},setTriggerPostsortPreventNavModal:t=>{e(()=>({triggerPostsortPreventNavModal:t}))}}),ai=e=>({disableRefreshCheck:!1,displaySubmitFallback:!1,displayGoodbyeMessage:!1,triggerLocalSubmitSuccessModal:!1,triggerTransmissionOKModal:!1,triggerTransmissionFailModal:!1,submitFailNumber:0,transmittingData:!1,checkInternetConnection:!1,displayBelowButtonText:!1,setDisplayBelowButtonText:t=>{e(()=>({displayBelowButtonText:t}))},setDisableRefreshCheck:t=>{e(()=>({disableRefreshCheck:t}))},setCheckInternetConnection:t=>{e(()=>({checkInternetConnection:t}))},setTransmittingData:t=>{e(()=>({transmittingData:t}))},setTriggerTransmissionFailModal:t=>{e(()=>({triggerTransmissionFailModal:t}))},setTriggerTransmissionOKModal:t=>{e(()=>({triggerTransmissionOKModal:t}))},setTriggerLocalSubmitSuccessModal:t=>{e(()=>({triggerLocalSubmitSuccessModal:t}))},setDisplaySubmitFallback:t=>{e(()=>({displaySubmitFallback:t}))},setDisplayGoodbyeMessage:t=>{e(()=>({displayGoodbyeMessage:t}))}}),oi=e=>({triggerSurveyModal:!0,resultsSurvey:{},triggerSurveyPreventNavModal:!1,checkRequiredQuestionsComplete:!1,requiredAnswersObj:{},answersStorage:{},triggerMobileSurveyHelpModal:!0,mobileSurveyViewSize:72,setMobileSurveyViewSize:t=>{e(()=>({mobileSurveyViewSize:t}))},setTriggerMobileSurveyHelpModal:t=>{e(()=>({triggerMobileSurveyHelpModal:t}))},setAnswersStorage:t=>{e(()=>({answersStorage:t}))},setTriggerSurveyModal:t=>{e(()=>({triggerSurveyModal:t}))},setResultsSurvey:t=>{e(()=>({resultsSurvey:t}))},setTriggerSurveyPreventNavModal:t=>{e(()=>({triggerSurveyPreventNavModal:t}))},setCheckRequiredQuestionsComplete:t=>{e(()=>({checkRequiredQuestionsComplete:t}))},setRequiredAnswersObj:t=>{e(()=>({requiredAnswersObj:t}))}}),si=e=>({thinningSide:`rightSide`,showConfirmButton:!0,previousColInfo:[],isThinningFinished:!1,isConfirmationFinished:!1,triggerThinningPreventNavModal:!1,triggerConfirmationFinishedModal:!1,isLeftSideFinished:!1,isRightSideFinished:!1,currentSelectMaxValue:0,posSorted:[],negSorted:[],instructionObj:{},targetArray:[],isRightBelowThreshold:!1,isLeftBelowThreshold:!1,currentRightIteration:0,currentLeftIteration:0,isTargetArrayFilled:!1,triggerMobileThinMoveTopModal:!1,triggerMobileThinHelpModal:!0,mobileThinFontSize:2,mobileThinViewSize:68,triggerMobileThinPreventNavModal:!1,triggerMobileThinGuidanceModal:!1,triggerMobileThinScrollBottomModal:!1,triggerThinHelpModal:!0,cardFontSizeThin:12,cardHeightThin:150,setCardHeightThin:t=>{e(()=>({cardHeightThin:t}))},setCardFontSizeThin:t=>{e(()=>({cardFontSizeThin:t}))},setTriggerThinHelpModal:t=>{e(()=>({triggerThinHelpModal:t}))},setTriggerMobileThinScrollBottomModal:t=>{e(()=>({triggerMobileThinScrollBottomModal:t}))},setTriggerMobileThinGuidanceModal:t=>{e(()=>({triggerMobileThinGuidanceModal:t}))},setTriggerMobileThinPreventNavModal:t=>{e(()=>({triggerMobileThinPreventNavModal:t}))},setTriggerMobileThinHelpModal:t=>{e(()=>({triggerMobileThinHelpModal:t}))},setMobileThinViewSize:t=>{e(()=>({mobileThinViewSize:t}))},setMobileThinFontSize:t=>{e(()=>({mobileThinFontSize:t}))},setTriggerMobileThinMoveTopModal:t=>{e(()=>({triggerMobileThinMoveTopModal:t}))},setIsTargetArrayFilled:t=>{e(()=>({isTargetArrayFilled:t}))},setCurrentLeftIteration:t=>{e(()=>({currentLeftIteration:t}))},setCurrentRightIteration:t=>{e(()=>({currentRightIteration:t}))},setIsLeftBelowThreshold:t=>{e(()=>({isLeftBelowThreshold:t}))},setIsRightBelowThreshold:t=>{e(()=>({isRightBelowThreshold:t}))},setTargetArray:t=>{e(()=>({targetArray:t}))},setInstructionObj:t=>{e(()=>({instructionObj:t}))},setPosSorted:t=>{e(()=>({posSorted:t}))},setNegSorted:t=>{e(()=>({negSorted:t}))},setCurrentSelectMaxValue:t=>{e(()=>({currentSelectMaxValue:t}))},setIsLeftSideFinished:t=>{e(()=>({isLeftSideFinished:t}))},setIsRightSideFinished:t=>{e(()=>({isRightSideFinished:t}))},setTriggerConfirmationFinishedModal:t=>{e(()=>({triggerConfirmationModal:t}))},setIsConfirmationFinished:t=>{e(()=>({isConfirmationFinished:t}))},setTriggerThinningPreventNavModal:t=>{e(()=>({triggerThinningPreventNavModal:t}))},setIsThinningFinished:t=>{e(()=>({isThinningFinished:t}))},setPreviousColInfo:t=>{e(()=>({previousColInfo:t}))},setShowConfirmButton:t=>{e(()=>({showConfirmButton:t}))},setThinningSide:t=>{e(()=>({thinningSide:t}))}}),ci=e=>({m_hasScrolledBottom:!1,setM_hasScrolledBottom:t=>{e(()=>({m_hasScrolledBottom:t}))}}),J=Jr((e,t)=>({...si(e,t),...ni(e,t),...$r(e,t),...ti(e,t),...ei(e,t),...ri(e,t),...ii(e,t),...ai(e,t),...oi(e,t),...ci(e,t)})),li=e=>e.langObj,ui=e=>e.triggerLandingModal,di=e=>e.setTriggerLandingModal,fi=()=>{let e=q(li),t=J(ui),n=J(di),r=G(K(e.landingHelpModalHead))||``,i=G(K(e.landingHelpModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(pi,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(mi,{children:i})]})},pi=U.div`
  font-size: 28px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,mi=U.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,hi=e=>e.langObj,gi=e=>{let t=G(K(q(hi).loginSubmitButtonText))||``;return(0,W.jsx)(_i,{tabindex:`0`,type:`submit`,onClick:e.onClick,size:e.size,width:e.width,height:e.height,children:t})},_i=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: ${e=>e.size}; // 1.5em;
  width: ${e=>e.width}; // 200px;
  height: ${e=>e.height}; // 50px;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,vi=e=>e.langObj,yi=e=>e.configObj,bi=e=>e.displayAccessCodeWarning,xi=e=>e.displayPartIdWarning,Si=e=>e.setUserInputPartId,Ci=e=>e.setUserInputAccessCode,wi=e=>e.userInputPartId,Ti=e=>e.userInputAccessCode,Ei=e=>e.setDisplayLandingContent,Di=e=>e.setPartId,Oi=e=>e.setDisplayNextButton,ki=e=>e.setIsLoggedIn,Ai=e=>e.setDisplayAccessCodeWarning,ji=e=>e.setDisplayPartIdWarning,Mi=()=>{let e=q(vi),t=q(yi),n=J(bi),r=J(xi),i=J(Si),a=J(Ci),o=J(wi),s=J(Ti),c=J(Ei),l=J(Di),u=J(Oi),d=J(ki),f=J(Ai),p=J(ji),m=(0,S.useRef)(null),h=(0,S.useRef)(null),g=(0,S.useRef)(null),_=G(K(e.loginWelcomeText))||``,v=G(K(e.loginHeaderText))||``,y=G(K(e.loginPartIdText))||``,b=G(K(e.partIdWarning))||``,x=G(K(e.accessCodeWarning))||``,C=G(K(e.accessInputText))||``,w=e=>{i(e.target.value)},T=e=>{a(e.target.value)};(0,S.useEffect)(()=>{u(!1)},[u]),(0,S.useEffect)(()=>()=>{clearTimeout(m.current),clearTimeout(h.current),clearTimeout(g.current)},[]);let E=()=>{try{let e=o.trim(),n=s.trim(),r=e.length>0,i=n===t.accessCode;if(f(!i),p(!r),i&&r){c(!0),l(e);try{localStorage.setItem(`partId`,e)}catch(e){console.log(e),f(!0),g.current=setTimeout(()=>{f(!1)},5e3);return}u(!0),d(!0);return}u(!1),i||(console.log(`no access code`),m.current=setTimeout(()=>{f(!1)},5e3)),r||(console.log(`no id`),h.current=setTimeout(()=>{p(!1)},5e3))}catch(e){console.log(e)}};return(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(Pi,{children:_}),(0,W.jsxs)(Ni,{onKeyUp:e=>{e.key===`Enter`&&E()},children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h2`,{children:v}),(0,W.jsx)(Fi,{})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:y}),(0,W.jsxs)(Li,{children:[(0,W.jsx)(Ii,{onChange:w,type:`text`,autoFocus:!0,autoCapitalize:`none`}),r&&(0,W.jsx)(Ri,{children:b})]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:C}),(0,W.jsxs)(Li,{children:[(0,W.jsx)(Ii,{onChange:T,type:`text`,autoCapitalize:`none`}),n&&(0,W.jsx)(Ri,{children:x})]})]}),(0,W.jsx)(gi,{onClick:E,size:`1.5em`,width:`200px`,height:`50px`})]})]})},Ni=U.div`
  display: grid;
  grid-template-rows: 23% 28% 28% 1fr;
  margin-top: 50px;
  width: 800px;
  padding: 20px;
  min-height: 400px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
`,Pi=U.div`
  width: 900px;
  font-size: 25px;
  line-height: 1.3em;
  padding-left: 35px;
`,Fi=U.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,Ii=U.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,Li=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Ri=U.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,zi=e=>e.langObj,Bi=e=>e.configObj,Vi=e=>e.displayAccessCodeWarning,Hi=e=>e.displayPartIdWarning,Ui=e=>e.setUserInputPartId,Wi=e=>e.setUserInputAccessCode,Gi=e=>e.userInputPartId,Ki=e=>e.userInputAccessCode,qi=e=>e.setDisplayLandingContent,Ji=e=>e.setPartId,Yi=e=>e.setDisplayNextButton,Xi=e=>e.setIsLoggedIn,Zi=e=>e.setDisplayAccessCodeWarning,Qi=e=>e.setDisplayPartIdWarning,$i=()=>{let e=q(zi),t=q(Bi),n=J(Vi),r=J(Hi),i=J(Ui),a=J(Wi),o=J(Gi),s=J(Ki),c=J(qi),l=J(Ji),u=J(Yi),d=J(Xi),f=J(Zi),p=J(Qi),m=G(K(e.loginWelcomeText))||``,h=G(K(e.loginHeaderText))||``,g=G(K(e.loginPartIdText))||``,_=G(K(e.partIdWarning))||``,v=G(K(e.accessCodeWarning))||``,y=G(K(e.accessInputText))||``;return(0,S.useEffect)(()=>{let e=e=>{if(e.key===`Enter`)try{let e=!1,n=!1,r=t.accessCode;e=o.length>1,s===r&&(n=!0),n&&e?(c(!0),l(o),localStorage.setItem(`partId`,o),u(!0),d(!0)):n===!1?(console.log(`no access code`),f(!0),u(!1),setTimeout(()=>{f(!1)},5e3)):e===!1&&(p(!0),u(!1),console.log(`no id`),setTimeout(()=>{p(!1)},5e3))}catch(e){console.log(e)}};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[c,u,d,t.accessCode,f,s,l,p,o]),(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(ta,{children:m}),(0,W.jsxs)(ea,{children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(oa,{children:h}),(0,W.jsx)(na,{})]}),(0,W.jsxs)(ca,{children:[(0,W.jsx)(sa,{children:g}),(0,W.jsxs)(ia,{children:[(0,W.jsx)(ra,{onChange:e=>{i(e.target.value)},type:`text`,autoCapitalize:`none`,autoFocus:!0}),r&&(0,W.jsx)(aa,{children:_})]})]}),(0,W.jsxs)(la,{children:[(0,W.jsx)(sa,{children:y}),(0,W.jsxs)(ia,{children:[(0,W.jsx)(ra,{onChange:e=>{a(e.target.value)},type:`text`,autoCapitalize:`none`}),n&&(0,W.jsx)(aa,{children:v})]})]}),(0,W.jsx)(gi,{size:`1.0em`,width:`120px`,height:`30px`,onClick:()=>{try{let e=!1,n=!1,r=t.accessCode;e=o.length>1,s===r&&(n=!0),n&&e?(c(!0),l(o),localStorage.setItem(`partId`,o),u(!0),d(!0)):n===!1?(console.log(`no access code`),f(!0),u(!1),setTimeout(()=>{f(!1)},5e3)):e===!1&&(p(!0),u(!1),console.log(`no id`),setTimeout(()=>{p(!1)},5e3))}catch(e){console.log(e)}}})]}),(0,W.jsx)(aa,{})]})},ea=U.div`
  display: grid;
  grid-template-rows: 23% 28% 28% 1fr;
  margin-top: 30px;
  width: 96vw;
  padding: 20px;
  /* min-height: 400px; */
  margin-bottom: 10px;
  border: 2px solid black;
  justify-self: center;
  border-radius: 5px;
  background-color: whitesmoke;
`,ta=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  font-size: 16px;
  line-height: 1.3em;
  /* border: 2px solid red; */
  padding: 10px;
  /* padding-left: 35px; */
`,na=U.hr`
  margin-top: 5px;
  margin-bottom: 5px;
`,ra=U.input`
  margin-top: 5px;
  width: 80vw;
  height: 30px;
  font-size: 1em;
  padding-left: 5px;
`,ia=U.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,aa=U.div`
  color: red;
  font-weight: bold;
  font-size: 1em;
  margin-left: 10px;
`,oa=U.span`
  font-size: 1.1em;
  font-weight: bold;
`,sa=U.span`
  font-size: 0.8em;
  font-weight: bold;
`,ca=U.div`
  height: 140px;
`,la=U.div`
  margin-top: 10px;
  height: 80px;
`,ua=e=>e.langObj,da=e=>e.displayPartIdWarning,fa=e=>e.setUserInputPartId,pa=e=>e.userInputPartId,ma=e=>e.setDisplayLandingContent,ha=e=>e.setPartId,ga=e=>e.setDisplayNextButton,_a=e=>e.setIsLoggedIn,va=e=>e.setDisplayPartIdWarning,ya=()=>{let e=q(ua),t=J(da),n=J(fa),r=J(pa),i=J(ma),a=J(ha),o=J(ga),s=J(_a),c=J(va),l=G(K(e.loginHeaderText))||``,u=G(K(e.loginPartIdText))||``,d=G(K(e.partIdWarning))||``;return(0,S.useEffect)(()=>{o(!1);let e=e=>{if(e.key===`Enter`){let e=!1;r.length>0&&(e=!0,i(!0),a(r),localStorage.setItem(`partId`,r),o(!0),s(!0)),e===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))}};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[i,a,o,s,r,c]),(0,W.jsxs)(ba,{children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(Ea,{children:l}),(0,W.jsx)(xa,{})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(Ta,{children:u}),(0,W.jsxs)(Ca,{children:[(0,W.jsx)(Sa,{onChange:e=>{n(e.target.value)},type:`text`,autoFocus:!0,autoCapitalize:`none`}),t&&(0,W.jsx)(wa,{children:d})]})]}),(0,W.jsx)(gi,{onClick:e=>{let t=!1;r.length>0&&(t=!0,i(!0),a(r),localStorage.setItem(`partId`,r),o(!0),s(!0)),t===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))},size:`1.0em`,width:`100px`,height:`30px`})]})},ba=U.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 90vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 100px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
  border-radius: 5px;
`,xa=U.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,Sa=U.input`
  margin-top: 5px;
  width: 85vw;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,Ca=U.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,wa=U.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,Ta=U.span`
  font-size: 0.9em;
  font-weight: bold;
`,Ea=U.span`
  font-size: 1.5em;
  font-weight: bold;
`,Da=e=>e.langObj,Oa=e=>e.configObj,ka=e=>e.displayAccessCodeWarning,Aa=e=>e.userInputAccessCode,ja=e=>e.setDisplayLandingContent,Ma=e=>e.setDisplayNextButton,Na=e=>e.setIsLoggedIn,Pa=e=>e.setUserInputAccessCode,Fa=e=>e.setDisplayAccessCodeWarning,Ia=()=>{let e=q(Da),t=q(Oa),n=J(ka),r=J(Aa),i=J(ja),a=J(Ma),o=J(Na),s=J(Pa),c=J(Fa),l=G(K(e.loginHeaderText))||``,u=G(K(e.accessInputText))||``,d=G(K(e.accessCodeWarning))||``;return(0,S.useEffect)(()=>{a(!1);let e=e=>{if(e.key===`Enter`){let e=!1,n=t.accessCode;r===n&&(e=!0,i(!0),a(!0),o(!0)),e===!1&&(c(!0),setTimeout(()=>{c(!1)},3e3))}};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[i,a,o,t.accessCode,c,r]),(0,W.jsxs)(La,{children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(Ua,{children:l}),(0,W.jsx)(Ra,{})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(Ha,{children:u}),(0,W.jsx)(`form`,{autoComplete:`none`,children:(0,W.jsxs)(Ba,{children:[(0,W.jsx)(za,{onChange:e=>{s(e.target.value)},type:`text`,autoFocus:!0,autoCapitalize:`none`}),n&&(0,W.jsx)(Va,{children:d})]})})]}),(0,W.jsx)(gi,{onClick:()=>{let e=!1,n=t.accessCode;r===n&&(e=!0,i(!0),a(!0),o(!0)),e===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))},size:`1em`,width:`100px`,height:`30px`})]})},La=U.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 90vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
  border-radius: 5px;
`,Ra=U.hr`
  margin-top: 5px;
  margin-bottom: 30px;
  width: 80vw;
`,za=U.input`
  margin-top: 5px;
  width: 85vw;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,Ba=U.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,Va=U.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,Ha=U.span`
  font-size: 0.9em;
  font-weight: bold;
`,Ua=U.span`
  font-size: 1.4em;
  font-weight: bold;
`,Wa=e=>e.langObj,Ga=e=>e.displayPartIdWarning,Ka=e=>e.setUserInputPartId,qa=e=>e.userInputPartId,Ja=e=>e.setDisplayLandingContent,Ya=e=>e.setPartId,Xa=e=>e.setDisplayNextButton,Za=e=>e.setIsLoggedIn,Qa=e=>e.setDisplayPartIdWarning,$a=()=>{let e=q(Wa),t=J(Ga),n=J(Ka),r=J(qa),i=J(Ja),a=J(Ya),o=J(Xa),s=J(Za),c=J(Qa),l=G(K(e.loginHeaderText))||``,u=G(K(e.loginPartIdText))||``,d=G(K(e.partIdWarning))||``;return(0,S.useEffect)(()=>{let e=e=>{if(e.key===`Enter`){console.log(`Enter`);let e=!1;r.length>0&&(e=!0,i(!0),a(r),localStorage.setItem(`partId`,r),o(!0),s(!0)),e===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))}};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[i,a,o,s,r,c]),(0,W.jsxs)(eo,{children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h2`,{children:l}),(0,W.jsx)(to,{})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:u}),(0,W.jsxs)(ro,{children:[(0,W.jsx)(no,{onChange:e=>{n(e.target.value)},type:`text`,autoFocus:!0}),t&&(0,W.jsx)(io,{children:d})]})]}),(0,W.jsx)(gi,{onClick:()=>{let e=!1;r.length>0&&(e=!0,i(!0),a(r),localStorage.setItem(`partId`,r),o(!0),s(!0)),e===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))},size:`1.5em`,width:`200px`,height:`50px`})]})},eo=U.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 50vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
`,to=U.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,no=U.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,ro=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,io=U.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,ao=e=>e.langObj,oo=e=>e.configObj,so=e=>e.displayAccessCodeWarning,co=e=>e.userInputAccessCode,lo=e=>e.setDisplayLandingContent,uo=e=>e.setDisplayNextButton,fo=e=>e.setIsLoggedIn,po=e=>e.setUserInputAccessCode,mo=e=>e.setDisplayAccessCodeWarning,ho=3e3,go=()=>{let e=q(ao),t=q(oo),n=J(so),r=J(co),i=J(lo),a=J(uo),o=J(fo),s=J(po),c=J(mo),l=(0,S.useRef)(r);(0,S.useEffect)(()=>{l.current=r},[r]);let u=(0,S.useRef)(null),d=G(K(e.loginHeaderText))||``,f=G(K(e.accessInputText))||``,p=G(K(e.accessCodeWarning))||``,m=e=>{s(e.target.value)},h=()=>{let e=t.accessCode;if(l.current===e){i(!0),a(!0),o(!0);return}c(!0),u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{c(!1),u.current=null},ho)};return(0,S.useEffect)(()=>{a(!1);let e=e=>{e.key===`Enter`&&h()};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[a]),(0,S.useEffect)(()=>()=>{u.current&&clearTimeout(u.current)},[]),(0,W.jsxs)(_o,{children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h2`,{children:d}),(0,W.jsx)(vo,{})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:f}),(0,W.jsxs)(bo,{children:[(0,W.jsx)(yo,{onChange:m,type:`text`,autoFocus:!0,"data-testid":`accessCodeInputDiv`}),n&&(0,W.jsx)(xo,{children:p})]})]}),(0,W.jsx)(gi,{"data-testid":`submitButtonAccess`,onClick:h,size:`1.5em`,width:`200px`,height:`50px`})]})},_o=U.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 50vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
`,vo=U.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,yo=U.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,bo=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,xo=U.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`;function So(){var e=window.navigator.userAgent;return e.indexOf(`MSIE `)>0||e.indexOf(`Trident/`)>0}var Co=()=>So(),wo=e=>e.langObj,To=()=>{let e=q(wo),t=G(K(e.ieWarningHeaderText))||``,n=G(K(e.ieWarningText))||``;return(0,W.jsxs)(Eo,{children:[(0,W.jsx)(`div`,{children:(0,W.jsxs)(`center`,{children:[(0,W.jsx)(`h2`,{"data-testid":`warningTextDiv`,children:t}),(0,W.jsx)(Do,{})]})}),(0,W.jsx)(`div`,{children:(0,W.jsx)(Oo,{"data-testid":`warningTextDiv2`,children:(0,W.jsx)(`h3`,{children:n})})})]})},Eo=U.div`
  //  display: grid;
  //   grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 50vw;
  padding: 2vw;
  min-height: 250px;
  margin-bottom: 20px;
  border: 2px solid black;
  justify-self: center;
  background-color: lightgoldenrodyellow;
  border-radius: 50px;
`,Do=U.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,Oo=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`,ko=(e=``)=>{if(e.includes(`?`))return e.split(`=`)[1]},Ao=e=>e.langObj,jo=e=>e.localParticipantName,Mo=e=>e.localUsercode,No=e=>e.setLocalParticipantName,Po=e=>e.setLocalUsercode,Fo=e=>e.setLocalPartIdWarning1,Io=e=>e.setLocalPartIdWarning2,Lo=e=>e.setTriggerLocalSubmitSuccessModal,Ro=e=>e.setResults,zo=e=>e.results,Bo=cn(e=>{let t=q(Ao),n=J(jo),r=J(Mo),i=J(No),a=J(Po),o=J(Fo),s=J(Io),c=J(Lo),l=J(Ro),u=J(zo),d=G(K(t.localStartButtonText))||``,f=(0,S.useCallback)(()=>{let e=!1,t,i;return n.length===0?(t=!1,o(!0)):(o(!1),t=!0,localStorage.setItem(`localParticipantName`,n)),r.length===0?(i=!1,s(!0)):(s(!1),i=!0,localStorage.setItem(`localUsercode`,r)),e=t===!0&&i===!0,e},[o,s,n,r]),{history:p,location:m,match:h,staticContext:g,to:_,onClick:v,...y}=e;return(0,S.useEffect)(()=>{let e=e=>{l(u),e.key===`Enter`&&f()&&p.push(`/presort`)};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[p,f,u,l]),(0,S.useEffect)(()=>{i(``),a(``),o(!1),s(!1)},[o,s,i,a]),(0,W.jsx)(Vo,{...y,onClick:e=>{v&&v(e),f()&&p.push(_),c(!1)},tabindex:`3`,children:d})}),Vo=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Ho=e=>e.langObj,Uo=e=>{let t=G(K(q(Ho).localDeleteButtonText))||``;return(0,W.jsx)(Wo,{tabindex:`0`,type:`submit`,onClick:e.onClick,children:t})},Wo=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 200px;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Go=e=>e.langObj,Ko=e=>{let t=G(K(q(Go).localDownloadButtonText))||``;return(0,W.jsx)(qo,{tabindex:`0`,type:`submit`,onClick:e.onClick,children:t})},qo=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Jo=Object.defineProperty,Yo=Object.getOwnPropertySymbols,Xo=Object.prototype.hasOwnProperty,Zo=Object.prototype.propertyIsEnumerable,Qo=(e,t,n)=>t in e?Jo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$o=(e,t)=>{for(var n in t||={})Xo.call(t,n)&&Qo(e,n,t[n]);if(Yo)for(var n of Yo(t))Zo.call(t,n)&&Qo(e,n,t[n]);return e},es=e=>t=>{try{let n=e(t);return n instanceof Promise?n:{then(e){return es(e)(n)},catch(e){return this}}}catch(e){return{then(e){return this},catch(t){return es(t)(e)}}}},ts=Jr(((e,t)=>(n,r,i)=>{let a=$o({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>$o($o({},t),e)},t);(a.blacklist||a.whitelist)&&console.warn(`The ${a.blacklist?`blacklist`:`whitelist`} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);let o=!1,s=new Set,c=new Set,l;try{l=a.getStorage()}catch{}if(l)l.removeItem||console.warn(`[zustand persist middleware] The given storage for item '${a.name}' does not contain a 'removeItem' method, which will be required in v4.`);else return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},r,i);let u=es(a.serialize),d=()=>{let e=a.partialize($o({},r()));a.whitelist&&Object.keys(e).forEach(t=>{!a.whitelist?.includes(t)&&delete e[t]}),a.blacklist&&a.blacklist.forEach(t=>delete e[t]);let t,n=u({state:e,version:a.version}).then(e=>l.setItem(a.name,e)).catch(e=>{t=e});if(t)throw t;return n},f=i.setState;i.setState=(e,t)=>{f(e,t),d()};let p=e((...e)=>{n(...e),d()},r,i),m,h=()=>{if(!l)return;o=!1,s.forEach(e=>e(r()));let e=a.onRehydrateStorage?.call(a,r())||void 0;return es(l.getItem.bind(l))(a.name).then(e=>{if(e)return a.deserialize(e)}).then(e=>{if(e){if(typeof e.version==`number`&&e.version!==a.version){if(a.migrate)return a.migrate(e.state,e.version);console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`)}else return e.state}}).then(e=>(m=a.merge(e,r()??p),n(m,!0),d())).then(()=>{e?.(m,void 0),o=!0,c.forEach(e=>e(m))}).catch(t=>{e?.(void 0,t)})};return i.persist={setOptions:e=>{a=$o($o({},a),e),e.getStorage&&(l=e.getStorage())},clearStorage:()=>{var e;(e=l?.removeItem)==null||e.call(l,a.name)},rehydrate:()=>h(),hasHydrated:()=>o,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},h(),m||p})(e=>({localStoredQsorts:{},hasDownloadedQsorts:!1,setHasDownloadedQsorts:t=>{e(()=>({hasDownloadedQsorts:t}))},setLocalStoredQsorts:t=>{e(()=>({localStoredQsorts:t}))}}),{name:`sorts-storage`})),ns=e=>e.langObj,rs=e=>e.setLocalDeleteModal,is=e=>e.localStoredQsorts,as=e=>e.setLocalStoredQsorts,os=e=>{let t=J(rs),n=q(ns),r=ts(as),i=ts(is),a=G(K(n.localDeleteButtonText))||``;return(0,W.jsx)(ss,{tabindex:`0`,type:`submit`,onClick:()=>{console.log(`deleted localStorage`);let e=`${new Date().getTime()}`;localStorage.setItem(e,JSON.stringify(i)),r({}),t(!1)},children:a})},ss=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 200px;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  &:hover {
  }

  &:focus {
  }
`,cs=e=>e.langObj,ls=e=>e.triggerLocalDeleteModal,us=e=>e.setLocalDeleteModal,ds=()=>{let e=q(cs),t=J(ls),n=J(us),r=G(K(e.localDeleteModalHead))||``,i=G(K(e.localDeleteModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(fs,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(ps,{children:i}),(0,W.jsx)(ms,{children:(0,W.jsx)(os,{})})]})},fs=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,ps=U.div`
  margin-top: 15px;
`,ms=U.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`,hs=e=>e.langObj,gs=e=>e.triggerSaveBeforeDeleteModal,_s=e=>e.setTriggerSaveBeforeDeleteModal,vs=()=>{let e=q(hs),t=J(gs),n=J(_s),r=G(K(e.localSaveBeforeDeleteModalHeader))||``,i=G(K(e.localSaveBeforeDeleteModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(ys,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(bs,{children:i})]})},ys=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,bs=U.div`
  margin-top: 15px;
`;function xs(e,t){var n=`data:text/json;charset=utf-8,`+encodeURIComponent(JSON.stringify(e)),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,t+`.json`),document.body.appendChild(r),r.click(),r.remove()}var Ss=e=>e.displayLocalPartIdWarning1,Cs=e=>e.setLocalPartIdWarning1,ws=e=>e.displayLocalPartIdWarning2,Ts=e=>e.setLocalPartIdWarning2,Es=e=>e.setLocalDeleteModal,Ds=e=>e.langObj,Os=e=>e.configObj,ks=e=>e.setLocalParticipantName,As=e=>e.setLocalUsercode,js=e=>e.localStoredQsorts,Ms=e=>e.setHasDownloadedQsorts,Ns=e=>e.hasDownloadedQsorts,Ps=e=>e.setTriggerSaveBeforeDeleteModal,Fs=()=>{let e=q(Ds),t=q(Os),n=J(Ss),r=J(Cs),i=J(ws),a=J(Ts),o=J(Es),s=J(ks),c=J(As),l=ts(js),u=ts(Ns),d=ts(Ms),f=J(Ps),p=G(K(e.localHeader))||``,m=G(K(e.partIdText))||``,h=G(K(e.partIdWarning))||``,g=G(K(e.usercodeText))||``,_=G(K(e.localParticipantsText))||``,v=`${G(K(e.storedQsortsHeaderText))||``}: ${Object.keys(l).length} ${_}`;return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(Is,{children:[(0,W.jsx)(ds,{}),(0,W.jsx)(vs,{}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h2`,{children:p}),(0,W.jsx)(Rs,{})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{children:m}),(0,W.jsxs)(Bs,{children:[(0,W.jsx)(zs,{tabindex:`0`,onChange:e=>{s(e.target.value),r(!1)},type:`text`}),n&&(0,W.jsx)(Vs,{children:h})]})]}),(0,W.jsxs)(`div`,{children:[` `,(0,W.jsx)(`h3`,{children:g}),(0,W.jsxs)(Bs,{children:[(0,W.jsx)(zs,{tabindex:`1`,onChange:e=>{c(e.target.value),localStorage.setItem(`urlUsercode`,``),a(!1)},type:`text`}),i&&(0,W.jsx)(Vs,{children:h})]})]}),(0,W.jsx)(Bo,{tabindex:`3`,to:`/presort`})]}),(0,W.jsxs)(Ls,{children:[(0,W.jsx)(Hs,{children:(0,W.jsx)(`div`,{children:v})}),(0,W.jsxs)(Us,{children:[(0,W.jsx)(Uo,{onClick:e=>{u?o(!0):f(!0)},children:`Delete`}),(0,W.jsx)(Ko,{onClick:e=>{let n=t.studyTitle,r=new Date,i=(`0`+r.getFullYear()).slice(-2)+`-`+(`0`+(r.getMonth()+1)).slice(-2)+`-`+r.getDate()+`_`+(`0`+r.getHours()).slice(-2)+`-`+(`0`+r.getMinutes()).slice(-2)+`-`+(`0`+r.getSeconds()).slice(-2),a=n+`_`+i;Object.keys(l).length>0&&xs(l,a),d(!0)},children:`Download`})]})]})]})},Is=U.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-top: 10px;
  width: 70vw;
  padding: 1.5vw;
  min-height: 350px;
  margin-bottom: 0px;
  border: 2px solid black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  justify-self: center;
  background-color: whitesmoke;
`,Ls=U.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 0px;
  width: 70vw;
  padding: 1.5vw;
  min-height: 100px;
  margin-bottom: 100px;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-self: center;
  background-color: whitesmoke;
`,Rs=U.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,zs=U.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,Bs=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Vs=U.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,Hs=U.div`
  font-size: 25px;
  font-weight: bold;
`,Us=U.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Ws=e=>{if(e.length!==0)return Math.ceil((e.length-3)/2)},Gs=s(((e,t)=>{function n(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}t.exports=n})),Ks=s(((e,t)=>{var n=/\s/;function r(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}t.exports=r})),qs=s(((e,t)=>{var n=Ks(),r=/^\s+/;function i(e){return e&&e.slice(0,n(e)+1).replace(r,``)}t.exports=i})),Js=s(((e,t)=>{function n(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}t.exports=n})),Ys=s(((e,t)=>{t.exports=typeof global==`object`&&global&&global.Object===Object&&global})),Xs=s(((e,t)=>{var n=Ys(),r=typeof self==`object`&&self&&self.Object===Object&&self;t.exports=n||r||Function(`return this`)()})),Zs=s(((e,t)=>{t.exports=Xs().Symbol})),Qs=s(((e,t)=>{var n=Zs(),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,o=n?n.toStringTag:void 0;function s(e){var t=i.call(e,o),n=e[o];try{e[o]=void 0;var r=!0}catch{}var s=a.call(e);return r&&(t?e[o]=n:delete e[o]),s}t.exports=s})),$s=s(((e,t)=>{var n=Object.prototype.toString;function r(e){return n.call(e)}t.exports=r})),ec=s(((e,t)=>{var n=Zs(),r=Qs(),i=$s(),a=`[object Null]`,o=`[object Undefined]`,s=n?n.toStringTag:void 0;function c(e){return e==null?e===void 0?o:a:s&&s in Object(e)?r(e):i(e)}t.exports=c})),tc=s(((e,t)=>{function n(e){return typeof e==`object`&&!!e}t.exports=n})),nc=s(((e,t)=>{var n=ec(),r=tc(),i=`[object Symbol]`;function a(e){return typeof e==`symbol`||r(e)&&n(e)==i}t.exports=a})),rc=s(((e,t)=>{var n=qs(),r=Js(),i=nc(),a=NaN,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;function u(e){if(typeof e==`number`)return e;if(i(e))return a;if(r(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=r(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=n(e);var u=s.test(e);return u||c.test(e)?l(e.slice(2),u?2:8):o.test(e)?a:+e}t.exports=u})),ic=s(((e,t)=>{var n=rc(),r=1/0,i=17976931348623157e292;function a(e){return e?(e=n(e),e===r||e===-r?(e<0?-1:1)*i:e===e?e:0):e===0?e:0}t.exports=a})),ac=s(((e,t)=>{var n=ic();function r(e){var t=n(e),r=t%1;return t===t?r?t-r:t:0}t.exports=r})),oc=s(((e,t)=>{var n=Gs(),r=ac();function i(e,t,i){var a=e==null?0:e.length;return a?(t=i||t===void 0?1:r(t),t=a-t,n(e,t<0?0:t,a)):[]}t.exports=i})),sc=s(((e,t)=>{var n=Gs(),r=ac();function i(e,t,i){return e&&e.length?(t=i||t===void 0?1:r(t),n(e,0,t<0?0:t)):[]}t.exports=i})),cc=u(oc(),1),lc=u(sc(),1),uc=(e,t)=>{let n=(0,cc.default)(e,t),r=(0,lc.default)(e,t);return n.reverse(),[r,n]},dc=(e,t)=>{let n=[];return e.forEach((e,r)=>{let i=[];i.push(`column${e}`),i.push(t[r]),n.push(i)}),n};function fc(){let[e,t]=(0,S.useState)(window.screen.orientation.type);return(0,S.useEffect)(()=>{let e=()=>t(window.screen.orientation.type);return window.addEventListener(`orientationchange`,e),()=>window.removeEventListener(`orientationchange`,e)},[]),e}var pc=s(((e,t)=>{function n(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}t.exports=n})),mc=s(((e,t)=>{var n=Math.floor,r=Math.random;function i(e,t){return e+n(r()*(t-e+1))}t.exports=i})),Y=s(((e,t)=>{var n=mc();function r(e,t){var r=-1,i=e.length,a=i-1;for(t=t===void 0?i:t;++r<t;){var o=n(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}t.exports=r})),hc=s(((e,t)=>{var n=pc(),r=Y();function i(e){return r(n(e))}t.exports=i})),gc=s(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}t.exports=n})),_c=s(((e,t)=>{var n=gc();function r(e,t){return n(t,function(t){return e[t]})}t.exports=r})),vc=s(((e,t)=>{function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}t.exports=n})),yc=s(((e,t)=>{var n=ec(),r=tc(),i=`[object Arguments]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),bc=s(((e,t)=>{var n=yc(),r=tc(),i=Object.prototype,a=i.hasOwnProperty,o=i.propertyIsEnumerable;t.exports=n(function(){return arguments}())?n:function(e){return r(e)&&a.call(e,`callee`)&&!o.call(e,`callee`)}})),xc=s(((e,t)=>{t.exports=Array.isArray})),Sc=s(((e,t)=>{function n(){return!1}t.exports=n})),Cc=s(((e,t)=>{var n=Xs(),r=Sc(),i=typeof e==`object`&&e&&!e.nodeType&&e,a=i&&typeof t==`object`&&t&&!t.nodeType&&t,o=a&&a.exports===i?n.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||r})),wc=s(((e,t)=>{var n=/^(?:0|[1-9]\d*)$/;function r(e,t){var r=typeof e;return t??=9007199254740991,!!t&&(r==`number`||r!=`symbol`&&n.test(e))&&e>-1&&e%1==0&&e<t}t.exports=r})),Tc=s(((e,t)=>{function n(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=9007199254740991}t.exports=n})),Ec=s(((e,t)=>{var n=ec(),r=Tc(),i=tc(),a=`[object Arguments]`,o=`[object Array]`,s=`[object Boolean]`,c=`[object Date]`,l=`[object Error]`,u=`[object Function]`,d=`[object Map]`,f=`[object Number]`,p=`[object Object]`,m=`[object RegExp]`,h=`[object Set]`,g=`[object String]`,_=`[object WeakMap]`,v=`[object ArrayBuffer]`,y=`[object DataView]`,b=`[object Float32Array]`,x=`[object Float64Array]`,S=`[object Int8Array]`,C=`[object Int16Array]`,w=`[object Int32Array]`,T=`[object Uint8Array]`,E=`[object Uint8ClampedArray]`,D=`[object Uint16Array]`,O=`[object Uint32Array]`,k={};k[b]=k[x]=k[S]=k[C]=k[w]=k[T]=k[E]=k[D]=k[O]=!0,k[a]=k[o]=k[v]=k[s]=k[y]=k[c]=k[l]=k[u]=k[d]=k[f]=k[p]=k[m]=k[h]=k[g]=k[_]=!1;function A(e){return i(e)&&r(e.length)&&!!k[n(e)]}t.exports=A})),Dc=s(((e,t)=>{function n(e){return function(t){return e(t)}}t.exports=n})),Oc=s(((e,t)=>{var n=Ys(),r=typeof e==`object`&&e&&!e.nodeType&&e,i=r&&typeof t==`object`&&t&&!t.nodeType&&t,a=i&&i.exports===r&&n.process;t.exports=function(){try{return i&&i.require&&i.require(`util`).types||a&&a.binding&&a.binding(`util`)}catch{}}()})),kc=s(((e,t)=>{var n=Ec(),r=Dc(),i=Oc(),a=i&&i.isTypedArray;t.exports=a?r(a):n})),Ac=s(((e,t)=>{var n=vc(),r=bc(),i=xc(),a=Cc(),o=wc(),s=kc(),c=Object.prototype.hasOwnProperty;function l(e,t){var l=i(e),u=!l&&r(e),d=!l&&!u&&a(e),f=!l&&!u&&!d&&s(e),p=l||u||d||f,m=p?n(e.length,String):[],h=m.length;for(var g in e)(t||c.call(e,g))&&!(p&&(g==`length`||d&&(g==`offset`||g==`parent`)||f&&(g==`buffer`||g==`byteLength`||g==`byteOffset`)||o(g,h)))&&m.push(g);return m}t.exports=l})),jc=s(((e,t)=>{var n=Object.prototype;function r(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||n)}t.exports=r})),Mc=s(((e,t)=>{function n(e,t){return function(n){return e(t(n))}}t.exports=n})),Nc=s(((e,t)=>{t.exports=Mc()(Object.keys,Object)})),Pc=s(((e,t)=>{var n=jc(),r=Nc(),i=Object.prototype.hasOwnProperty;function a(e){if(!n(e))return r(e);var t=[];for(var a in Object(e))i.call(e,a)&&a!=`constructor`&&t.push(a);return t}t.exports=a})),Fc=s(((e,t)=>{var n=ec(),r=Js(),i=`[object AsyncFunction]`,a=`[object Function]`,o=`[object GeneratorFunction]`,s=`[object Proxy]`;function c(e){if(!r(e))return!1;var t=n(e);return t==a||t==o||t==i||t==s}t.exports=c})),Ic=s(((e,t)=>{var n=Fc(),r=Tc();function i(e){return e!=null&&r(e.length)&&!n(e)}t.exports=i})),Lc=s(((e,t)=>{var n=Ac(),r=Pc(),i=Ic();function a(e){return i(e)?n(e):r(e)}t.exports=a})),Rc=s(((e,t)=>{var n=_c(),r=Lc();function i(e){return e==null?[]:n(e,r(e))}t.exports=i})),zc=s(((e,t)=>{var n=Y(),r=Rc();function i(e){return n(r(e))}t.exports=i})),Bc=s(((e,t)=>{var n=hc(),r=zc(),i=xc();function a(e){return(i(e)?n:r)(e)}t.exports=a})),Vc=[];for(let e=0;e<256;++e)Vc.push((e+256).toString(16).slice(1));function Hc(e,t=0){return(Vc[e[t+0]]+Vc[e[t+1]]+Vc[e[t+2]]+Vc[e[t+3]]+`-`+Vc[e[t+4]]+Vc[e[t+5]]+`-`+Vc[e[t+6]]+Vc[e[t+7]]+`-`+Vc[e[t+8]]+Vc[e[t+9]]+`-`+Vc[e[t+10]]+Vc[e[t+11]]+Vc[e[t+12]]+Vc[e[t+13]]+Vc[e[t+14]]+Vc[e[t+15]]).toLowerCase()}var Uc=new Uint8Array(16);function Wc(){return crypto.getRandomValues(Uc)}function X(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():Gc(e,t,n)}function Gc(e,t,n){e||={};let r=e.random??e.rng?.()??Wc();if(r.length<16)throw Error(`Random bytes length must be >= 16`);if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n||=0,n<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=r[e];return t}return Hc(r)}var Kc=u(Bc(),1),qc=e=>e.langObj,Jc=e=>e.configObj,Yc=e=>e.dataLoaded,Xc=e=>e.setCurrentPage,Zc=e=>e.setProgressScore,Qc=e=>e.setUrlUsercode,$c=e=>e.displayLandingContent,el=e=>e.setDisplayNextButton,tl=e=>e.mapObj,nl=e=>e.setPostsortCommentCheckObj,rl=e=>e.setCardFontSizeSort,il=e=>e.setCardFontSizePostsort,al=e=>e.setMinCardHeightSort,ol=e=>e.setCardHeightSort,sl=e=>e.setMinCardHeightPostsort,cl=e=>e.statementsObj,ll=()=>{let e=q(qc),t=q(Jc),n=q(tl),r=J(Yc),i=J(Xc),a=J(Zc),o=J(Qc),s=J($c),c=J(el),l=J(nl),u=t.headerBarColor,d=J(rl),f=J(il),p=J(al),m=J(ol),h=J(sl),g=G(K(e.landingHead))||``,_=G(K(e.welcomeText))||``,v=q(cl),y=G(K(e?.mobileWelcomeText))||``,b=G(K(e.screenOrientationText))||``;if(localStorage.getItem(`currentPage`)===`landing`){localStorage.removeItem(`columns`),localStorage.removeItem(`sortColumns`),localStorage.removeItem(`columnStatements`),localStorage.removeItem(`presortSortedCards`),localStorage.removeItem(`HC-requiredCommentsObj`),localStorage.removeItem(`LC-requiredCommentsObj`),localStorage.removeItem(`HC2-requiredCommentsObj`),localStorage.removeItem(`LC2-requiredCommentsObj`),localStorage.removeItem(`cumulativelandingPageDuration`),localStorage.removeItem(`cumulativepostsortPageDuration`),localStorage.removeItem(`cumulativepresortPageDuration`),localStorage.removeItem(`cumulativesortPageDuration`),localStorage.removeItem(`cumulativethinningPageDuration`),localStorage.removeItem(`cumulativesurveyPageDuration`),localStorage.removeItem(`cumulativethinPageDuration`),localStorage.removeItem(`cumulativesubmitPageDuration`),localStorage.removeItem(`lastAccesslandingPage`),localStorage.removeItem(`lastAccesspresortPage`),localStorage.removeItem(`lastAccesssortPage`),localStorage.removeItem(`lastAccesspostsortPage`),localStorage.removeItem(`lastAccesssurveyPage`),localStorage.removeItem(`timeOnlandingPage`),localStorage.removeItem(`timeOnpresortPage`),localStorage.removeItem(`timeOnthinningPage`),localStorage.removeItem(`timeOnsortPage`),localStorage.removeItem(`timeOnpostsortPage`),localStorage.removeItem(`timeOnsurveyPage`),localStorage.removeItem(`resultsPresort`),localStorage.removeItem(`resultsSort`),localStorage.removeItem(`resultsPostsort`),localStorage.removeItem(`resultsSurvey`),localStorage.removeItem(`postsortCommentCardCount`),localStorage.removeItem(`allCommentsObj`),localStorage.removeItem(`newCols`),localStorage.removeItem(`posSortedLocal`),localStorage.removeItem(`negSortedLocal`),localStorage.removeItem(`currentLeftIteration`),localStorage.removeItem(`currentRightIteration`),localStorage.removeItem(`isNotReload`),localStorage.removeItem(`posSorted`),localStorage.removeItem(`negSorted`),localStorage.removeItem(`selectedPosItems`),localStorage.removeItem(`selectedNegItems`),localStorage.removeItem(`m_PresortStatementCount`),localStorage.removeItem(`presortArray2`),localStorage.removeItem(`thinDisplayControllerArray`),localStorage.removeItem(`mobilePresortFontSize`),localStorage.removeItem(`m_SortArray1`),localStorage.removeItem(`selectedPosItems`),localStorage.removeItem(`selectedNegItems`),localStorage.removeItem(`columnStatements`),localStorage.removeItem(`m_FontSizeObject`),localStorage.removeItem(`m_ViewSizeObject`),localStorage.removeItem(`m_FinalThinCols`),localStorage.removeItem(`m_NegRequiredStatesObj`),localStorage.removeItem(`m_PosRequiredStatesObj`),localStorage.removeItem(`CumulativeTimelandingPage`),localStorage.removeItem(`CumulativeTimepresortPage`),localStorage.removeItem(`CumulativeTimethinningPage`),localStorage.removeItem(`CumulativeTimesortPage`),localStorage.removeItem(`CumulativeTimepostsortPage`),localStorage.removeItem(`CumulativeTimesurveyPage`),localStorage.removeItem(`m_ThinDisplayStatements`),localStorage.removeItem(`m_HasDisplayedFirstThinModal`),localStorage.removeItem(`m_PostSortResultsObj`),localStorage.removeItem(`m_PresortResults`),localStorage.removeItem(`m_SortCharacteristicsArray`),localStorage.removeItem(`m_ThinningFinished`),localStorage.removeItem(`m_PresortFinished`),localStorage.removeItem(`m_MinWordCountPostsortObject`),localStorage.removeItem(`m_UnforcedPattern`),localStorage.removeItem(`randomId`),localStorage.removeItem(`m_ThinScrollBottom`),localStorage.removeItem(`m_ViewedBottomSort`),localStorage.removeItem(`m_NeedsToScroll`),localStorage.removeItem(`noResponseCheckArrayHC1`),localStorage.removeItem(`noResponseCheckArrayHC2`),localStorage.removeItem(`noResponseCheckArrayLC1`),localStorage.removeItem(`noResponseCheckArrayLC2`),localStorage.removeItem(`presortArray`),localStorage.removeItem(`resultsSurvey`);for(let e=0;e<v.totalStatements;e++){let t=`m_PostsortComment(s${e+1})`;localStorage.removeItem(t)}t.requiredAnswersObj!==void 0&&(localStorage.setItem(`resultsSurvey`,JSON.stringify(t.requiredAnswersObj)),Object.keys(t.requiredAnswersObj).forEach((e,t)=>{let n=`itemNum${t+1}`;localStorage.removeItem(n),localStorage.removeItem(e)}))}let x=(0,S.useMemo)(()=>[...n.qSortHeaders],[n.qSortHeaders]),C=(0,S.useMemo)(()=>[...n.qSortPattern],[n.qSortPattern]),w=Math.max(...C),T=(window.innerHeight-150)/w;localStorage.setItem(`cardHeightSort`,T),m(T),localStorage.setItem(`m_FontSizeObject`,JSON.stringify({presort:2,thin:2,sort:2,postsort:2})),localStorage.setItem(`m_ViewSizeObject`,JSON.stringify({presort:42,thin:68,sort:72,postsort:72,survey:72})),localStorage.setItem(`allCommentsObj`,JSON.stringify({})),localStorage.setItem(`m_ThinDisplayStatements`,JSON.stringify({display:!0})),localStorage.setItem(`m_PresortResults`,JSON.stringify([])),localStorage.setItem(`m_PresortDisplayStatements`,JSON.stringify({display:!0})),localStorage.setItem(`randomId`,X().substring(0,12)),localStorage.setItem(`m_FinalThinCols`,JSON.stringify([]));let E=v.columnStatements;localStorage.setItem(`newCols`,JSON.stringify(E));let D=ht(),O=fc(),k=(0,S.useRef)(null);(0,S.useEffect)(()=>(k.current=Date.now(),a(10),i(`landing`),localStorage.setItem(`currentPage`,`landing`),()=>{ar(k.current,`landingPage`,`landingPage`)}),[i,a]),(0,S.useEffect)(()=>{localStorage.setItem(`currentLeftIteration`,0),localStorage.setItem(`currentRightIteration`,0),localStorage.setItem(`isNotReload`,`true`),localStorage.setItem(`thinningSide`,`rightSide`);let e=Ws(C),n=dc(x,C);localStorage.setItem(`finalSortColData`,JSON.stringify(n));let r=uc([...n],e),i=[...r[1]],a=[...r[0]];localStorage.setItem(`sortRightArrays`,JSON.stringify(i)),localStorage.setItem(`sortLeftArrays`,JSON.stringify(a)),t.initialScreen===`anonymous`&&c(!0),(t.setDefaultFontSizePresort===`true`||t.setDefaultFontSizePresort===!0)&&localStorage.setItem(`fontSizePresort`,t.defaultFontSizePresort),(t.setDefaultFontSizeSort===`true`||t.setDefaultFontSizeSort===!0)&&localStorage.setItem(`fontSizeSort`,t.defaultFontSizeSort),(t.setMinCardHeightSort===`true`||t.setMinCardHeightSort===!0)&&localStorage.setItem(`cardHeightSort`,t.minCardHeightSort),(t.setDefaultFontSizePostsort===`true`||t.setDefaultFontSizePostsort===!0)&&(f(t.defaultFontSizePostsort),localStorage.setItem(`fontSizePostsort`,t.defaultFontSizePostsort)),(t.setMinCardHeightPostsort===`true`||t.setMinCardHeightPostsort===!0)&&(h(t.minCardHeightPostsort),localStorage.setItem(`cardHeightPostsort`,t.minCardHeightPostsort));let s=ko(window.location.href);if(s==null){let e=localStorage.getItem(`urlUsercode`);e==null||e===`undefined`?(console.log(`no url usercode in storage`),o(`not_set`),localStorage.setItem(`urlUsercode`,`not_set`)):(console.log(`URL usercode from storage: `,e),o(e===`not_set`?`not_set`:`${e} (stored)`))}else{let e=s;e=e.replace(/\/|#/g,``),console.log(`URL usercode: `,e),o(e),localStorage.setItem(`urlUsercode`,e)}},[t,n,c,o,d,f,p,h,x,C,v,w,m]),(0,S.useEffect)(()=>{let e=Object.keys(n.qSortPattern),r=Math.max(...e),i=Math.min(...e),a=r-1,o=i+1,s=n.qSortPattern[r],c=n.qSortPattern[a],u=n.qSortPattern[i],d=n.qSortPattern[o],f=t.showSecondPosColumn,p=t.showSecondNegColumn,m={};for(let e=0;e<s;e++){let t=`hc-${e}`;m[t]=!1}for(let e=0;e<u;e++){let t=`lc-${e}`;m[t]=!1}if(f===`true`||f===!0)for(let e=0;e<c;e++){let t=`hc2-${e}`;m[t]=!1}if(p===`true`||p===!0)for(let e=0;e<d;e++){let t=`lc2-${e}`;m[t]=!1}l(m)},[n,t,l]);let A=!1,j=!1,M=!1;if(D&&O===`landscape-primary`)return(0,W.jsx)(vl,{children:(0,W.jsx)(`h1`,{children:b})});if(t.setupTarget===`local`)return(0,W.jsx)(W.Fragment,{children:r&&(0,W.jsx)(fl,{children:(0,W.jsx)(Fs,{})})});{let e=t.initialScreen;e===`anonymous`&&(s=!0),e===`partId-access`&&s===!1&&(A=!0),e===`partId`&&s===!1&&(j=!0),e===`access`&&s===!1&&(M=!0);let n=Co();return n&&(s=!1,A=!1,M=!1,j=!1),(t.useMobileMode===!0||t.useMobileMode===`true`)&&(localStorage.setItem(`presortArray`,JSON.stringify((0,Kc.default)(v?.columnStatements?.statementList))),D)?(console.log(`Mobile detected`),(0,W.jsx)(S.Fragment,{children:r&&(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(_l,{background:u,children:g}),(0,W.jsxs)(pl,{children:[A&&(0,W.jsx)($i,{}),j&&(0,W.jsx)(ya,{}),M&&(0,W.jsx)(Ia,{}),s&&(0,W.jsx)(hl,{children:(0,W.jsx)(`div`,{children:y})})]})]})})):(0,W.jsx)(S.Fragment,{children:r&&(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(gl,{background:u,children:g}),(0,W.jsx)(fi,{}),(0,W.jsxs)(fl,{children:[n&&(0,W.jsx)(To,{}),A&&(0,W.jsx)(Mi,{}),j&&(0,W.jsx)($a,{}),M&&(0,W.jsx)(go,{}),s&&(0,W.jsx)(ml,{children:(0,W.jsx)(`div`,{children:_})})]})]})})}},ul=pt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,dl=pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,fl=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  padding-top: 50px;
  transition: 0.3s ease all;
  margin-top: 50px;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  iframe {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,pl=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  padding-top: 50px;
  transition: 0.3s ease all;
  margin-top: 20px;
  /* border: 2px solid red; */
  color: ${e=>e.theme.mobileText};

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  iframe {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,ml=U.div`
  display: flex;
  width: 75vw;
  font-size: 1.25em;
  visibility: ${e=>e.view?`hidden`:`visible`};
  animation: ${e=>e.view?dl:ul} 0.5s linear;
  transition: visibility 0.5s linear;
  justify-content: center;
  align-items: center;
`,hl=U.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: 100%;
  font-size: 4.1vw;
  visibility: ${e=>e.view?`hidden`:`visible`};
  animation: ${e=>e.view?dl:ul} 0.5s linear;
  transition: visibility 0.5s linear;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};

  iframe {
    width: 84vw;
    height: 47.2vw;
  }
`,gl=U.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 8px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
`,_l=U.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 8px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  position: fixed;
  top: 0;
`,vl=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};
  width: 100vw;
  height: 100vh;
`,yl=e=>{if(!e)return{cjk:0,nonCJK:0,totalWords:0};let t=/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uFF66-\uFF9F]/g,n=e.match(t)||[],r=e.replace(t,` `).split(/\s+/).filter(Boolean),i=r.length+n.length;return{cjk:n.length,nonCJK:r.length,totalWords:i}};function bl(e,t,{minWordCountRequired:n,minWordCountValue:r}){return e.filter(e=>{let i=t[e];return!i||i.length===0?!0:n?yl(i).totalWords<=r:!1})}var xl=e=>{try{let t=String(e);return t=t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`).replace(/\//g,`&#x2F;`).replace(/[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F]/g,``),t}catch(e){console.log(`There was an error sanitizing User Input`),console.error(e)}},Sl=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_23)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M68.0556 55.5556C71.8909 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8909 36.1111 68.0556 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0556 55.5556Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M65.2361 77.4417C65.2055 77.3194 62.0555 65.2778 50 65.2778C37.9444 65.2778 34.7944 77.3194 34.7639 77.4417C34.6167 78.0333 34.8861 78.6389 35.4083 78.9528C35.9305 79.2639 36.6111 79.1917 37.0639 78.7861C37.0889 78.7639 39.8778 76.3889 50 76.3889C59.9722 76.3889 62.825 78.6944 62.9333 78.7861C63.1972 79.0361 63.5417 79.1667 63.8889 79.1667C64.1222 79.1667 64.3583 79.1083 64.5722 78.9889C65.1167 78.6778 65.3889 78.0472 65.2361 77.4417Z`,fill:`#664500`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_23`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),Cl=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_2_11)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M70.7917 82.9972C70.6667 82.5 67.5472 70.8333 50 70.8333C32.45 70.8333 29.3333 82.5 29.2083 82.9972C29.0556 83.6 29.3278 84.225 29.8667 84.5361C30.4083 84.8389 31.0861 84.7556 31.5333 84.3222C31.5861 84.2694 36.9611 79.1667 50 79.1667C63.0389 79.1667 68.4167 84.2694 68.4667 84.3194C68.7333 84.5833 69.0889 84.7222 69.4444 84.7222C69.6778 84.7222 69.9139 84.6639 70.1278 84.5444C70.6722 84.2333 70.9444 83.6028 70.7917 82.9972ZM43.6305 48.0361C34.5889 38.9944 20.0583 38.8889 19.4444 38.8889C17.9111 38.8889 16.6694 40.1306 16.6694 41.6611C16.6667 43.1944 17.9083 44.4389 19.4417 44.4444C19.5222 44.4444 24.7889 44.5056 30.5056 46.4917C28.8583 48.2694 27.7778 51.0306 27.7778 54.1667C27.7778 59.5389 30.8861 63.8889 34.7222 63.8889C38.5583 63.8889 41.6667 59.5389 41.6667 54.1667C41.6667 53.6833 41.6139 53.2222 41.5639 52.7583C41.6 52.7583 41.6333 52.7778 41.6667 52.7778C42.3778 52.7778 43.0889 52.5056 43.6305 51.9639C44.7167 50.8778 44.7167 49.1222 43.6305 48.0361ZM80.5556 38.8889C79.9417 38.8889 65.4139 38.9944 56.3694 48.0361C55.2833 49.1222 55.2833 50.8778 56.3694 51.9639C56.9111 52.5056 57.6222 52.7778 58.3333 52.7778C58.3694 52.7778 58.4 52.7583 58.4333 52.7583C58.3889 53.2222 58.3333 53.6833 58.3333 54.1667C58.3333 59.5389 61.4417 63.8889 65.2778 63.8889C69.1139 63.8889 72.2222 59.5389 72.2222 54.1667C72.2222 51.0306 71.1417 48.2694 69.4944 46.4917C75.2111 44.5056 80.4778 44.4444 80.5611 44.4444C82.0917 44.4389 83.3333 43.1944 83.3306 41.6611C83.3278 40.1306 82.0889 38.8889 80.5556 38.8889Z`,fill:`#664500`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_2_11`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),wl=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_1_3)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z`,fill:`#DA2F47`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M70.7917 82.9972C70.6667 82.5 67.5472 70.8333 50 70.8333C32.45 70.8333 29.3333 82.5 29.2083 82.9972C29.0556 83.6 29.3278 84.225 29.8667 84.5361C30.4083 84.8389 31.0861 84.7556 31.5333 84.3222C31.5861 84.2694 36.9611 79.1667 50 79.1667C63.0389 79.1667 68.4167 84.2694 68.4667 84.3194C68.7333 84.5833 69.0889 84.7222 69.4445 84.7222C69.6778 84.7222 69.9139 84.6639 70.1278 84.5444C70.6722 84.2333 70.9445 83.6028 70.7917 82.9972ZM43.6306 48.0361C34.5889 38.9944 20.0583 38.8889 19.4444 38.8889C17.9111 38.8889 16.6694 40.1306 16.6694 41.6611C16.6667 43.1944 17.9083 44.4389 19.4417 44.4444C19.5222 44.4444 24.7889 44.5056 30.5056 46.4917C28.8583 48.2694 27.7778 51.0306 27.7778 54.1667C27.7778 59.5389 30.8861 63.8889 34.7222 63.8889C38.5583 63.8889 41.6667 59.5389 41.6667 54.1667C41.6667 53.6833 41.6139 53.2222 41.5639 52.7583C41.6 52.7583 41.6333 52.7778 41.6667 52.7778C42.3778 52.7778 43.0889 52.5056 43.6306 51.9639C44.7167 50.8778 44.7167 49.1222 43.6306 48.0361ZM80.5556 38.8889C79.9417 38.8889 65.4139 38.9944 56.3694 48.0361C55.2833 49.1222 55.2833 50.8778 56.3694 51.9639C56.9111 52.5056 57.6222 52.7778 58.3333 52.7778C58.3694 52.7778 58.4 52.7583 58.4333 52.7583C58.3889 53.2222 58.3333 53.6833 58.3333 54.1667C58.3333 59.5389 61.4417 63.8889 65.2778 63.8889C69.1139 63.8889 72.2222 59.5389 72.2222 54.1667C72.2222 51.0306 71.1417 48.2694 69.4944 46.4917C75.2111 44.5056 80.4778 44.4444 80.5611 44.4444C82.0917 44.4389 83.3333 43.1944 83.3306 41.6611C83.3278 40.1306 82.0889 38.8889 80.5556 38.8889Z`,fill:`#292F33`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_1_3`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),Tl=(e,t,n)=>{let r=Array.isArray(t)?t[0]:t,i=typeof r==`string`?r.replace(/^column/,``):``,a=(e?.qSortHeaders||[]).indexOf(i),o=``;e?.colTextLabelsArray&&a>=0&&(o=e.colTextLabelsArray[a]||``);let s=``;if(e?.useColLabelNumsPostsort&&a>=0){let t=e?.qSortHeaderNumbers?.[a];t!==void 0&&(s=`${n} ${+t>0?`+`:``}${t}`)}let c,l=e?.columnHeadersColorsArray;return l&&a>=0&&(c=l[a]),{columnLabel:o,columnNum:s,backgroundColor:c,columnIndex:a}},El=e=>e.postsortCommentCheckObj,Dl=e=>e.setPostsortCommentCheckObj,Ol=e=>e.configObj,kl=e=>e.showPostsortCommentHighlighting,Al=e=>e.postsortDualImageArray,jl=e=>e.setPostsortDualImageArray,Ml=e=>e.mapObj,Nl=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(!1),c=JSON.parse(localStorage.getItem(`sortColumns`)),l=J(El),u=J(Dl),d=q(Ol),f=J(kl),p=J(Al),m=J(jl),h=q(Ml),{height:g,width:_,cardFontSize:v,disagreeObj:y}=e,b=c.vCols[y.columnDisplay],{placeholder:x,placedOn:C}=y,w=y.columnDisplay,[T,E]=(0,S.useState)(()=>new Set),D=d.useImages;D===`false`&&(D=!1),D===`true`&&(D=!0);let O=d.minWordCountValuePostsort||0,k=d.requireMinCommentLength||!1,A=b?.length??0;(0,S.useEffect)(()=>{if(!f)return;let e=JSON.parse(localStorage.getItem(`allCommentsObj`))||{},t=Array.from({length:A},(e,t)=>`textArea-${w}_${t+1}`);E(new Set(bl(t,e,{minWordCountRequired:k,minWordCountValue:O})))},[f,A,w,k,O]),(0,S.useEffect)(()=>{if(!e.lowCards)return;let t=e.lowCards.map((e,t)=>`${w}_${t}: ${e.id}`);localStorage.setItem(`noResponseCheckArrayLC1`,JSON.stringify(t))},[e.lowCards,w]);let{columnLabel:j,columnNum:M,backgroundColor:N}=Tl(h,y.columnDisplay,C),P=e=>{if(e[0]===`emoji5Array`||e[0]===`emoji4Array`)return(0,W.jsx)(wl,{},`emojiN5`);if(e[0]===`emoji3Array`)return(0,W.jsx)(Cl,{},`emojiN3`);if(e[0]===`emoji2Array`)return(0,W.jsx)(Sl,{},`emojiN2`)},F=!0,ee,I=h.useColLabelNumsPostsort[0];I!=null&&(ee=I!==!1&&I!==`false`);let L,R=h.useColLabelTextPostsort[0];R!=null&&(L=R!==!1&&R!==`false`);let z,B=h.useColLabelEmojiPostsort[0];B!=null&&(z=B!==!1&&B!==`false`);let V=(0,W.jsxs)(Vl,{children:[z&&(0,W.jsx)(Bl,{children:P(h.emojiArrayType)}),L&&(0,W.jsx)(Hl,{children:j}),ee&&(0,W.jsx)(Ul,{children:M}),z&&(0,W.jsx)(Bl,{children:P(h.emojiArrayType)})]}),H=e=>{e.detail===2&&(e.shiftKey?(p.push(e.target.src),m(p),p.length===2&&s(!0)):(a(e.target.src),r(!0)))},te=(e,n)=>{let r=JSON.parse(localStorage.getItem(`resultsPostsort`))||{},i=JSON.parse(localStorage.getItem(`allCommentsObj`))||{};e.target.value.length>0?(l[`lc-${n}`]=!0,u(l)):(l[`lc-${n}`]=!1,u(l));let a=c.vCols[y.columnDisplay],o=e.target.id,s=e.target.value,d=`${w}_${n}`;a.map(e=>{if(e.id===o){let t=xl(s.replace(/\n/g,` `).replace(/,/g,` `).trim());e.comment=t,t.length>0?(r[d]=`(${e.id}): ${t}`,i[d]=`(${e.id}): ${t}`,i[`textArea-${w}_${n+1}`]=`${t}`):(e.comment=``,r[d]=`(${e.id}): no response`,i[d]=`(${e.id}): no response`,i[`textArea-${w}_${n+1}`]=``)}return e});let f=`textArea-${w}_${n+1}`,p=bl([f],i,{minWordCountRequired:k,minWordCountValue:O}).length>0;E(e=>{let t=new Set(e);return p?t.add(f):t.delete(f),t}),t.setItem(`allCommentsObj`,JSON.stringify(i)),t.setItem(`resultsPostsort`,JSON.stringify(r))};return b?b.map((e,t)=>{let a=G(`<div>${K(e.statement)}</div>`),c=(JSON.parse(localStorage.getItem(`allCommentsObj`))||{})[`textArea-${w}_${+t+1}`]||``;return d.useImages===!0&&(a=G(`<img src="${e.element.props.src}" style="pointer-events: all" alt=${e.element.props.alt} />`)),(d.postsortCommentsRequired===`true`||d.postsortCommentsRequired===!0)&&f===!0&&(F=!T.has(`textArea-${w}_${t+1}`)),(0,W.jsxs)(Pl,{children:[(0,W.jsx)(Gr,{open:n,center:!0,onClose:()=>r(!1),classNames:{modal:`${d.imageFormat}`,overlay:`dualImageOverlay`},children:(0,W.jsx)(`img`,{src:i,width:`100%`,height:`auto`,alt:`modalImage`})}),(0,W.jsxs)(Gr,{open:o,center:!0,onClose:()=>{s(!1),m([])},classNames:{overlay:`dualImageOverlay`,modal:`dualImageModal`},children:[(0,W.jsx)(`img`,{src:p[0],width:`49.5%`,height:`auto`,alt:`modalImage`}),(0,W.jsx)(`img`,{src:p[1],width:`49.5%`,height:`auto`,style:{marginLeft:`1%`},alt:`modalImage2`})]}),(0,W.jsx)(Fl,{cardFontSize:v,backgroundColor:N,children:V}),(0,W.jsxs)(Il,{children:[D?(0,W.jsx)(zl,{cardFontSize:v,width:_,height:g,cardColor:e.cardColor,onClick:t=>H(t,e.element.props.src),children:a}):(0,W.jsx)(zl,{cardFontSize:v,width:_,height:g,cardColor:e.cardColor,children:a}),(0,W.jsx)(Rl,{children:(0,W.jsx)(Ll,{bgColor:F,border:F,"data-gramm_editor":`false`,height:g,cardFontSize:v,id:e.id,placeholder:x,defaultValue:c,onChange:e=>{te(e,t)}})})]})]},e.statement)}):null},Pl=U.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,Fl=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  color: black;
  text-align: center;
  font-size: ${e=>`${e.cardFontSize}px`};
  height: 1.5em;
`,Il=U.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,Ll=U.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?`whitesmoke`:`rgba(253, 224, 71, .5)`};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?`none`:`dashed 3px black`};
`,Rl=U.div`
  padding-top: 3px;
  width: 100%;
`,zl=U.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  // max-width: ${e=>`${e.width}px;`};
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: 2px solid black;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,Bl=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,Vl=U.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,Hl=U.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
  text-align: center;
  /* font-size: 1vw; */
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,Ul=U.span`
  font-weight: bold;
  padding-top: 3px;

  font-size: clamp(1rem, 1vw, 1.5rem);
  /* font-size: 16px; */
  line-height: 1;
`,Wl=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_18)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M68.0555 55.5556C71.8908 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8908 36.1111 68.0555 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0555 55.5556Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M33.3333 77.7778C38.8889 63.8889 69.4445 63.8889 69.4445 69.4444C69.4445 72.2222 47.2222 66.6667 33.3333 77.7778Z`,fill:`#664500`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_18`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),Gl=e=>e.postsortCommentCheckObj,Kl=e=>e.setPostsortCommentCheckObj,ql=e=>e.configObj,Jl=e=>e.showPostsortCommentHighlighting,Yl=e=>e.postsortDualImageArray,Xl=e=>e.setPostsortDualImageArray,Zl=e=>e.mapObj,Ql=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(!1),c=JSON.parse(localStorage.getItem(`sortColumns`)),l=J(Gl),u=J(Kl),d=q(ql),f=J(Jl),p=J(Yl),m=J(Xl),h=q(Zl),{height:g,width:_,cardFontSize:v,disagreeObj:y}=e,b=c.vCols[y.columnDisplay2],{placeholder:x,placedOn:C}=y,w=y.columnDisplay2,[T,E]=(0,S.useState)(()=>new Set),D=d.useImages;D===`false`&&(D=!1),D===`true`&&(D=!0);let O=d.minWordCountValuePostsort||0,k=d.requireMinCommentLength||!1,A=b?.length??0;(0,S.useEffect)(()=>{if(!f)return;let e=JSON.parse(localStorage.getItem(`allCommentsObj`))||{},t=Array.from({length:A},(e,t)=>`textArea-${w}_${t+1}`);E(new Set(bl(t,e,{minWordCountRequired:k,minWordCountValue:O})))},[f,A,w,k,O]),(0,S.useEffect)(()=>{if(!e.lowCards2)return;let t=e.lowCards2.map((e,t)=>`${w}_${t}: ${e.id}`);localStorage.setItem(`noResponseCheckArrayLC2`,JSON.stringify(t))},[e.lowCards2,w]);let{columnLabel:j,columnNum:M,backgroundColor:N}=Tl(h,y.columnDisplay2,C),P=e=>{if(e[0]===`emoji5Array`||e[0]===`emoji4Array`)return(0,W.jsx)(Cl,{},`emojiN3`);if(e[0]===`emoji3Array`)return(0,W.jsx)(Sl,{},`emojiN2`);if(e[0]===`emoji2Array`)return(0,W.jsx)(Wl,{},`emojiN1`)},F,ee=h.useColLabelNumsPostsort[0];ee!=null&&(F=ee!==!1&&ee!==`false`);let I,L=h.useColLabelTextPostsort[0];L!=null&&(I=L!==!1&&L!==`false`);let R,z=h.useColLabelEmojiPostsort[0];z!=null&&(R=z!==!1&&z!==`false`);let B=(0,W.jsxs)(ou,{children:[R&&(0,W.jsx)(au,{children:P(h.emojiArrayType)}),I&&(0,W.jsx)(su,{children:j}),F&&(0,W.jsx)(cu,{children:M}),R&&(0,W.jsx)(au,{children:P(h.emojiArrayType)})]}),V=e=>{e.detail===2&&(e.shiftKey?(p.push(e.target.src),m(p),p.length===2&&s(!0)):(a(e.target.src),r(!0)))},H=(e,n)=>{let r=JSON.parse(localStorage.getItem(`resultsPostsort`))||{},i=JSON.parse(localStorage.getItem(`allCommentsObj`))||{};e.target.value.length>0?(l[`lc2-${n}`]=!0,u(l)):(l[`lc2-${n}`]=!1,u(l));let a=[...c.vCols[y.columnDisplay2]],o=e.target.id,s=e.target.value,d=`${w}_${n}`;a.map(e=>{if(e.id===o){let t=xl(s.replace(/\n/g,` `).replace(/,/g,` `).trim());e.comment=t,t.length>0?(r[d]=`(${e.id}): ${t}`,i[d]=`(${e.id}): ${t}`,i[`textArea-${w}_${n+1}`]=`${t}`):(e.comment=``,r[d]=`(${e.id}): no response`,i[d]=`(${e.id}): no response`,i[`textArea-${w}_${n+1}`]=``)}return e});let f=`textArea-${w}_${n+1}`,p=bl([f],i,{minWordCountRequired:k,minWordCountValue:O}).length>0;E(e=>{let t=new Set(e);return p?t.add(f):t.delete(f),t}),t.setItem(`allCommentsObj`,JSON.stringify(i)),t.setItem(`resultsPostsort`,JSON.stringify(r))};return b?b.map((e,t)=>{let a=G(`<div>${K(e.statement)}</div>`),c=(JSON.parse(localStorage.getItem(`allCommentsObj`))||{})[`textArea-${w}_${+t+1}`]||``;d.useImages===!0&&(a=G(`<img src="${e.element.props.src}" style="pointer-events: all" alt=${e.element.props.alt} />`));let l=!0;return(d.postsortCommentsRequired===`true`||d.postsortCommentsRequired===!0)&&f===!0&&(l=!T.has(`textArea-${w}_${t+1}`)),(0,W.jsxs)($l,{children:[(0,W.jsx)(Gr,{open:n,center:!0,onClose:()=>r(!1),classNames:{modal:`${d.imageFormat}`,overlay:`dualImageOverlay`},children:(0,W.jsx)(`img`,{src:i,width:`100%`,height:`auto`,alt:`modalImage`})}),(0,W.jsxs)(Gr,{open:o,center:!0,onClose:()=>{s(!1),m([])},classNames:{overlay:`dualImageOverlay`,modal:`dualImageModal`},children:[(0,W.jsx)(`img`,{src:p[0],width:`49.5%`,height:`auto`,alt:`modalImage`}),(0,W.jsx)(`img`,{src:p[1],width:`49.5%`,height:`auto`,style:{marginLeft:`1%`},alt:`modalImage2`})]}),(0,W.jsx)(eu,{cardFontSize:v,backgroundColor:N,children:B}),(0,W.jsxs)(tu,{children:[D?(0,W.jsx)(iu,{cardFontSize:v,width:_,height:g,cardColor:e.cardColor,onClick:t=>V(t,e.element.props.src),children:a}):(0,W.jsx)(iu,{cardFontSize:v,width:_,height:g,cardColor:e.cardColor,children:a}),(0,W.jsx)(ru,{children:(0,W.jsx)(nu,{bgColor:l,border:l,"data-gramm_editor":`false`,id:e.id,height:g,cardFontSize:v,className:`commentTextArea`,placeholder:x,defaultValue:c,onChange:e=>{H(e,t)}})})]})]},e.statement)}):null},$l=U.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,eu=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: lightpink;
  font-size: ${e=>`${e.cardFontSize}px`};
  color: black;
  text-align: center;
  height: 1.5em;
`,tu=U.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,nu=U.textarea`
  padding: 10px;
  background-color: ${e=>e.bgColor?`whitesmoke`:`rgba(253, 224, 71, .5)`};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?`none`:`dashed 3px black`};
`,ru=U.div`
  padding-top: 3px;
  width: 100%;
`,iu=U.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,au=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,ou=U.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,su=U.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
  text-align: center;
  /* font-size: 1vw; */
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,cu=U.span`
  font-weight: bold;
  padding-top: 3px;

  font-size: clamp(1rem, 1vw, 1.5rem);
  /* font-size: 16px; */
  line-height: 1;
`,lu=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_33)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M19.4444 63.8889C27.1151 63.8889 33.3333 57.6706 33.3333 50C33.3333 42.3294 27.1151 36.1111 19.4444 36.1111C11.7738 36.1111 5.55556 42.3294 5.55556 50C5.55556 57.6706 11.7738 63.8889 19.4444 63.8889Z`,fill:`#FF7892`}),(0,W.jsx)(`path`,{d:`M80.5555 63.8889C88.2262 63.8889 94.4444 57.6706 94.4444 50C94.4444 42.3294 88.2262 36.1111 80.5555 36.1111C72.8849 36.1111 66.6667 42.3294 66.6667 50C66.6667 57.6706 72.8849 63.8889 80.5555 63.8889Z`,fill:`#FF7892`}),(0,W.jsx)(`path`,{d:`M75.9306 60.0805C75.4361 59.6333 74.6972 59.6055 74.1667 60C74.0583 60.0805 63.2722 68.0555 50 68.0555C36.7611 68.0555 25.9389 60.0805 25.8333 60C25.3028 59.6055 24.5639 59.6389 24.0695 60.0805C23.5778 60.525 23.4667 61.2583 23.8083 61.825C24.1667 62.4222 32.7445 76.3889 50 76.3889C67.2556 76.3889 75.8361 62.4222 76.1917 61.825C76.5333 61.2555 76.425 60.525 75.9306 60.0805ZM22.2195 41.6667C21.8028 41.6667 21.3778 41.5722 20.9806 41.3722C19.6083 40.6861 19.0528 39.0167 19.7389 37.6444C19.8833 37.3555 23.4 30.5555 33.3333 30.5555C43.2695 30.5555 46.7833 37.3583 46.9278 37.6472C47.6139 39.0194 47.0583 40.6889 45.6861 41.375C44.3195 42.0555 42.6722 41.5111 41.975 40.1639C41.8556 39.9417 39.6695 36.1111 33.3333 36.1111C26.8972 36.1111 24.725 40.0917 24.7056 40.1305C24.2195 41.1055 23.2389 41.6667 22.2195 41.6667ZM77.7806 41.6667C76.7611 41.6667 75.7806 41.1055 75.2917 40.1305C75.2222 40.0028 73.0528 36.1111 66.6667 36.1111C60.2806 36.1111 58.1111 40.0028 58.0222 40.1667C57.3 41.5028 55.6361 42.0278 54.2861 41.3333C52.9389 40.6333 52.3917 39.0028 53.0695 37.6444C53.2139 37.3583 56.7306 30.5555 66.6667 30.5555C76.6028 30.5555 80.1195 37.3583 80.2639 37.6472C80.95 39.0194 80.3945 40.6889 79.0222 41.375C78.6222 41.5722 78.1972 41.6667 77.7806 41.6667Z`,fill:`#664500`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_33`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),uu=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_38)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M31.9444 50C35.7798 50 38.8889 43.1599 38.8889 34.7222C38.8889 26.2846 35.7798 19.4445 31.9444 19.4445C28.1091 19.4445 25 26.2846 25 34.7222C25 43.1599 28.1091 50 31.9444 50Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M68.0556 50C71.8909 50 75 43.1599 75 34.7222C75 26.2846 71.8909 19.4445 68.0556 19.4445C64.2202 19.4445 61.1111 26.2846 61.1111 34.7222C61.1111 43.1599 64.2202 50 68.0556 50Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M50 61.1111C39.9361 61.1111 33.2583 59.9389 25 58.3333C23.1139 57.9694 19.4445 58.3333 19.4445 63.8889C19.4445 75 32.2083 88.8889 50 88.8889C67.7889 88.8889 80.5556 75 80.5556 63.8889C80.5556 58.3333 76.8861 57.9666 75 58.3333C66.7417 59.9389 60.0639 61.1111 50 61.1111Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M25 63.8889C25 63.8889 33.3333 66.6667 50 66.6667C66.6667 66.6667 75 63.8889 75 63.8889C75 63.8889 69.4444 75 50 75C30.5556 75 25 63.8889 25 63.8889Z`,fill:`white`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_38`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),du=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_49)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M50 58.3333C39.9361 58.3333 33.2583 57.1611 25 55.5555C23.1139 55.1917 19.4445 55.5555 19.4445 61.1111C19.4445 72.2222 32.2083 86.1111 50 86.1111C67.7889 86.1111 80.5556 72.2222 80.5556 61.1111C80.5556 55.5555 76.8861 55.1889 75 55.5555C66.7417 57.1611 60.0639 58.3333 50 58.3333Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M25 61.1111C25 61.1111 33.3333 63.8889 50 63.8889C66.6667 63.8889 75 61.1111 75 61.1111C75 61.1111 69.4444 72.2222 50 72.2222C30.5556 72.2222 25 61.1111 25 61.1111Z`,fill:`white`}),(0,W.jsx)(`path`,{d:`M43.5611 12.2583L30.9445 14.4833L24.4445 2.66945C23.7278 1.36667 22.2556 0.66945 20.8 0.925005C19.3361 1.18334 18.1972 2.34445 17.9695 3.81112L15.9 17.1361L3.28335 19.3611C1.79724 19.6222 0.650013 20.8195 0.447235 22.3167C0.244458 23.8139 1.03335 25.2695 2.40001 25.9195L13.7056 31.2861L11.6278 44.6528C11.3972 46.1417 12.1528 47.6083 13.4972 48.2889C13.9945 48.5389 14.5278 48.6583 15.0583 48.6583C15.9667 48.6583 16.8639 48.3028 17.5333 47.625L27.2889 37.7333L39.8389 43.6917C41.2 44.3361 42.8222 44.0333 43.8556 42.9361C44.8889 41.8389 45.0945 40.2028 44.3695 38.8833L37.8472 27.0278L46.6389 18.1167C47.7 17.0417 47.9417 15.4028 47.2417 14.0639C46.5361 12.725 45.0389 12 43.5611 12.2583ZM56.4389 12.2583L69.0556 14.4833L75.5556 2.66945C76.2722 1.36667 77.7445 0.66945 79.2 0.925005C80.6611 1.18334 81.8 2.34445 82.0278 3.81112L84.0972 17.1361L96.7139 19.3611C98.2028 19.6222 99.35 20.8167 99.55 22.3139C99.75 23.8111 98.9639 25.2667 97.5972 25.9167L86.2917 31.2833L88.3695 44.65C88.6 46.1389 87.8445 47.6056 86.5 48.2861C86.0028 48.5361 85.4695 48.6556 84.9389 48.6556C84.0306 48.6556 83.1333 48.3 82.4639 47.6222L72.7083 37.7306L60.1583 43.6889C58.7972 44.3333 57.175 44.0306 56.1417 42.9333C55.1083 41.8361 54.9028 40.2 55.6278 38.8806L62.15 27.0278L53.3583 18.1167C52.2972 17.0417 52.0556 15.4028 52.7556 14.0639C53.4639 12.725 54.9611 12 56.4389 12.2583Z`,fill:`#E95F28`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_49`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),fu=e=>e.postsortCommentCheckObj,pu=e=>e.setPostsortCommentCheckObj,mu=e=>e.configObj,hu=e=>e.mapObj,gu=e=>e.showPostsortCommentHighlighting,_u=e=>e.postsortDualImageArray,vu=e=>e.setPostsortDualImageArray,yu=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(!1),c=JSON.parse(localStorage.getItem(`sortColumns`)),l=J(fu),u=J(pu),d=q(mu),f=q(hu),p=J(gu),m=J(_u),h=J(vu),{agreeObj:g,cardFontSize:_,width:v,height:y}=e,b=c?.vCols[g.columnDisplay],{placeholder:x,placedOn:C}=g,w=g.columnDisplay,[T,E]=(0,S.useState)(()=>new Set),D=d.useImages;D===`false`&&(D=!1),D===`true`&&(D=!0);let O=d.minWordCountValuePostsort||0,k=d.requireMinCommentLength||!1,A=b?.length??0;(0,S.useEffect)(()=>{if(!p)return;let e=JSON.parse(localStorage.getItem(`allCommentsObj`))||{},t=Array.from({length:A},(e,t)=>`textArea-${w}_${t+1}`);E(new Set(bl(t,e,{minWordCountRequired:k,minWordCountValue:O})))},[p,A,w,k,O]),(0,S.useEffect)(()=>{if(!e.highCards)return;let t=e.highCards.map((e,t)=>`${w}_${t}: ${e.id}`);localStorage.setItem(`noResponseCheckArrayHC1`,JSON.stringify(t))},[e.highCards,w]);let{columnLabel:j,columnNum:M,backgroundColor:N}=Tl(f,g.columnDisplay,C),P=e=>{if(e[0]===`emoji5Array`||e[0]===`emoji4Array`)return(0,W.jsx)(du,{},`emoji5`);if(e[0]===`emoji3Array`)return(0,W.jsx)(uu,{},`emoji3`);if(e[0]===`emoji2Array`)return(0,W.jsx)(lu,{},`emoji2`)},F=!0,ee,I=f.useColLabelNumsPostsort[0];I!=null&&(ee=I!==!1&&I!==`false`);let L,R=f.useColLabelTextPostsort[0];R!=null&&(L=R!==!1&&R!==`false`);let z,B=f.useColLabelEmojiPostsort[0];B!=null&&(z=B!==!1&&B!==`false`);let V=(0,W.jsxs)(Du,{children:[z&&(0,W.jsx)(Eu,{children:P(f.emojiArrayType)}),L&&(0,W.jsx)(Ou,{children:j}),ee&&(0,W.jsx)(ku,{children:M}),z&&(0,W.jsx)(Eu,{children:P(f.emojiArrayType)})]}),H=e=>{e.target&&e.detail===2&&(e.shiftKey?(m.push(e.target.src),h(m),m.length===2&&s(!0)):(a(e.target.src),r(!0)))},te=(e,n)=>{e.preventDefault();let r=JSON.parse(localStorage.getItem(`resultsPostsort`))||{},i=JSON.parse(localStorage.getItem(`allCommentsObj`))||{};e.target.value.length>0?(l[`hc-${n}`]=!0,u(l)):(l[`hc-${n}`]=!1,u(l));let a=c.vCols[g.columnDisplay],o=e.target.id,s=e.target.value,d=`${w}_${+n}`;a.map(e=>{if(e.id===o){let t=xl(s.replace(/\n/g,` `).replace(/,/g,` `).trim());e.comment=t,t.length>0?(r[d]=`(${e.id}): ${t}`,i[d]=`(${e.id}): ${t}`,i[`textArea-${w}_${n+1}`]=`${t}`):(e.comment=``,r[d]=`(${e.id}): no response`,i[d]=`(${e.id}): no response`,i[`textArea-${w}_${n+1}`]=``)}return e});let f=`textArea-${w}_${n+1}`,p=bl([f],i,{minWordCountRequired:k,minWordCountValue:O}).length>0;E(e=>{let t=new Set(e);return p?t.add(f):t.delete(f),t}),t.setItem(`allCommentsObj`,JSON.stringify(i)),t.setItem(`resultsPostsort`,JSON.stringify(r))};return b?b.map((e,t)=>{let a=G(`<div>${K(e.statement)}</div>`),c=(JSON.parse(localStorage.getItem(`allCommentsObj`))||{})[`textArea-${w}_${+t+1}`];return d.useImages===!0&&(a=G(`<img src="${e.element.props.src}" style="pointer-events: all" alt=${e.element.props.alt} />`)),(d.postsortCommentsRequired===`true`||d.postsortCommentsRequired===!0)&&p===!0&&(F=!T.has(`textArea-${w}_${t+1}`)),(0,W.jsxs)(bu,{id:`postSortImageModal`,children:[(0,W.jsx)(Gr,{open:n,center:!0,onClose:()=>r(!1),classNames:{modal:`${d.imageFormat}`,overlay:`dualImageOverlay`},children:(0,W.jsx)(`img`,{src:i,width:`100%`,height:`auto`,alt:`modalImage`})}),(0,W.jsxs)(Gr,{open:o,center:!0,onClose:()=>{s(!1),h([])},classNames:{overlay:`dualImageOverlay`,modal:`dualImageModal`},children:[(0,W.jsx)(`img`,{src:m[0],width:`49.5%`,height:`auto`,alt:`modalImage`}),(0,W.jsx)(`img`,{src:m[1],width:`49.5%`,height:`auto`,style:{marginLeft:`1%`},alt:`modalImage2`})]}),(0,W.jsxs)(xu,{cardFontSize:_,backgroundColor:N,children:[V,` `]}),(0,W.jsxs)(Su,{children:[D?(0,W.jsx)(Tu,{cardFontSize:_,width:v,height:y,cardColor:e.cardColor,onClick:t=>H(t,e.element.props.src),children:a}):(0,W.jsx)(Tu,{cardFontSize:_,width:v,height:y,cardColor:e.cardColor,children:a}),(0,W.jsx)(wu,{children:(0,W.jsx)(Cu,{bgColor:F,border:F,"data-gramm_editor":`false`,height:y,cardFontSize:_,id:e.id,placeholder:x,defaultValue:c,onChange:e=>{te(e,t)}})})]})]},e.statement)}):null},bu=U.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,xu=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding-top: 3px; */
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  font-size: ${e=>`${e.cardFontSize}px`};
  color: black;
  text-align: center;
  height: 1.5em;
`,Su=U.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,Cu=U.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?`whitesmoke`:`rgba(253, 224, 71, .5)`};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?`none`:`dashed 3px black`};
`,wu=U.div`
  padding-top: 3px;
  width: 100%;
`,Tu=U.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  //max-width: ${e=>e.useImages?`none`:`${e.width}px;`};
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  border: 2px solid darkslategray;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,Eu=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,Du=U.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,Ou=U.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-weight: bold;
  font-size: clamp(1rem, 1vw, 1.5rem);
  user-select: none;

  text-align: center;
  line-height: 0.8rem;
`,ku=U.span`
  font-weight: bold;
  padding-top: 3px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  line-height: 1;
`,Au=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_28)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M29.2083 65.6139C29.3333 66.1111 32.4528 77.7778 50 77.7778C67.55 77.7778 70.6667 66.1111 70.7917 65.6139C70.9444 65.0111 70.6722 64.3861 70.1333 64.075C69.5917 63.7667 68.9139 63.8583 68.4667 64.2889C68.4139 64.3417 63.0389 69.4444 50 69.4444C36.9611 69.4444 31.5833 64.3417 31.5333 64.2917C31.2667 64.0278 30.9111 63.8889 30.5556 63.8889C30.3222 63.8889 30.0861 63.9472 29.8722 64.0667C29.3278 64.3778 29.0556 65.0083 29.2083 65.6139Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M33.3333 47.2222C37.1686 47.2222 40.2778 42.8694 40.2778 37.5C40.2778 32.1306 37.1686 27.7778 33.3333 27.7778C29.498 27.7778 26.3889 32.1306 26.3889 37.5C26.3889 42.8694 29.498 47.2222 33.3333 47.2222Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M66.6667 47.2222C70.502 47.2222 73.6111 42.8694 73.6111 37.5C73.6111 32.1306 70.502 27.7778 66.6667 27.7778C62.8314 27.7778 59.7222 32.1306 59.7222 37.5C59.7222 42.8694 62.8314 47.2222 66.6667 47.2222Z`,fill:`#664500`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_28`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),ju=e=>e.postsortCommentCheckObj,Mu=e=>e.setPostsortCommentCheckObj,Nu=e=>e.configObj,Pu=e=>e.showPostsortCommentHighlighting,Fu=e=>e.postsortDualImageArray,Iu=e=>e.setPostsortDualImageArray,Lu=e=>e.mapObj,Ru=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},[n,r]=(0,S.useState)(!1),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)(!1),c=JSON.parse(localStorage.getItem(`sortColumns`)),l=J(ju),u=J(Mu),d=q(Nu),f=J(Pu),p=J(Fu),m=J(Iu),h=q(Lu),{height:g,width:_,agreeObj:v,cardFontSize:y}=e,b=c.vCols[v.columnDisplay2],{placeholder:x,placedOn:C}=v,w=v.columnDisplay2,[T,E]=(0,S.useState)(()=>new Set),D=d.useImages;D===`false`&&(D=!1),D===`true`&&(D=!0);let O=d.minWordCountValuePostsort||0,k=d.requireMinCommentLength||!1,A=b?.length??0;(0,S.useEffect)(()=>{if(!f)return;let e=JSON.parse(localStorage.getItem(`allCommentsObj`))||{},t=Array.from({length:A},(e,t)=>`textArea-${w}_${t+1}`);E(new Set(bl(t,e,{minWordCountRequired:k,minWordCountValue:O})))},[f,A,w,k,O]),(0,S.useEffect)(()=>{if(!e.highCards2)return;let t=e.highCards2.map((e,t)=>`${w}_${t}: ${e.id}`);localStorage.setItem(`noResponseCheckArrayHC2`,JSON.stringify(t))},[e.highCards2,w]);let{columnLabel:j,columnNum:M,backgroundColor:N}=Tl(h,v.columnDisplay2,C),P=e=>{if(e[0]===`emoji5Array`)return(0,W.jsx)(du,{},`emoji5`);if(e[0]===`emoji4Array`)return(0,W.jsx)(uu,{},`emoji3`);if(e[0]===`emoji3Array`)return(0,W.jsx)(lu,{},`emoji2`);if(e[0]===`emoji2Array`)return(0,W.jsx)(Au,{},`emoji1`)},F=!0,ee,I=h.useColLabelNumsPostsort[0];I!=null&&(ee=I!==!1&&I!==`false`);let L,R=h.useColLabelTextPostsort[0];R!=null&&(L=R!==!1&&R!==`false`);let z,B=h.useColLabelEmojiPostsort[0];B!=null&&(z=B!==!1&&B!==`false`);let V=(0,W.jsxs)(Ku,{children:[z&&(0,W.jsx)(Gu,{children:P(h.emojiArrayType)}),L&&(0,W.jsx)(qu,{children:j}),ee&&(0,W.jsx)(Ju,{children:M}),z&&(0,W.jsx)(Gu,{children:P(h.emojiArrayType)})]}),H=e=>{e.detail===2&&(e.shiftKey?(p.push(e.target.src),m(p),p.length===2&&s(!0)):(a(e.target.src),r(!0)))},te=(e,n)=>{let r=JSON.parse(localStorage.getItem(`resultsPostsort`))||{},i=JSON.parse(localStorage.getItem(`allCommentsObj`))||{};e.target.value.length>0?(l[`hc2-${n}`]=!0,u(l)):(l[`hc2-${n}`]=!1,u(l));let a=c?.vCols[v.columnDisplay2],o=e.target.id,s=e.target.value,d=`${w}_${+n}`;a.map(e=>{if(e.id===o){let t=xl(s.replace(/\n/g,` `).replace(/,/g,` `).trim());e.comment=t,t.length>0?(r[d]=`(${e.id}): ${t}`,i[d]=`(${e.id}): ${t}`,i[`textArea-${w}_${n+1}`]=`${t}`):(e.comment=``,r[d]=`(${e.id}): no response`,i[d]=`(${e.id}): no response`,i[`textArea-${w}_${n+1}`]=``)}return e});let f=`textArea-${w}_${n+1}`,p=bl([f],i,{minWordCountRequired:k,minWordCountValue:O}).length>0;E(e=>{let t=new Set(e);return p?t.add(f):t.delete(f),t}),t.setItem(`allCommentsObj`,JSON.stringify(i)),t.setItem(`resultsPostsort`,JSON.stringify(r))};return b?b.map((e,t)=>{let a=G(`<div>${K(e.statement)}</div>`),c=(JSON.parse(localStorage.getItem(`allCommentsObj`))||{})[`textArea-${w}_${+t+1}`]||``;return d.useImages===!0&&(a=G(`<img src="${e.element.props.src}" style="pointer-events: all" alt=${e.element.props.alt} />`)),(d.postsortCommentsRequired===`true`||d.postsortCommentsRequired===!0)&&f===!0&&(F=!T.has(`textArea-${w}_${t+1}`)),(0,W.jsxs)(zu,{children:[(0,W.jsx)(Gr,{open:n,center:!0,onClose:()=>r(!1),classNames:{modal:`${d.imageFormat}`,overlay:`dualImageOverlay`},children:(0,W.jsx)(`img`,{src:i,width:`100%`,height:`auto`,alt:`modalImage`})}),(0,W.jsxs)(Gr,{open:o,center:!0,onClose:()=>{s(!1),m([])},classNames:{overlay:`dualImageOverlay`,modal:`dualImageModal`},children:[(0,W.jsx)(`img`,{src:p[0],width:`49.5%`,height:`auto`,alt:`modalImage`}),(0,W.jsx)(`img`,{src:p[1],width:`49.5%`,height:`auto`,style:{marginLeft:`1%`},alt:`modalImage2`})]}),(0,W.jsx)(Bu,{cardFontSize:y,backgroundColor:N,children:V}),(0,W.jsxs)(Vu,{children:[D?(0,W.jsx)(Wu,{cardFontSize:y,width:_,height:g,cardColor:e.cardColor,onClick:t=>H(t,e.element.props.src),children:a}):(0,W.jsx)(Wu,{cardFontSize:y,width:_,height:g,cardColor:e.cardColor,children:a}),(0,W.jsx)(Uu,{children:(0,W.jsx)(Hu,{bgColor:F,border:F,"data-gramm_editor":`false`,height:g,cardFontSize:y,id:e.id,placeholder:x,defaultValue:c,onChange:e=>{te(e,t)}})})]})]},e.statement)}):null},zu=U.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,Bu=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  color: black;
  text-align: center;
  font-size: ${e=>`${e.cardFontSize}px`};
  height: 1.5em;
`,Vu=U.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,Hu=U.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?`whitesmoke`:`rgba(253, 224, 71, .5)`};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?`none`:`dashed 3px black`};
`,Uu=U.div`
  padding-top: 3px;
  width: 100%;
`,Wu=U.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  // max-width: ${e=>`${e.width}px;`};
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  border: 2px solid black;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,Gu=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,Ku=U.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,qu=U.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
  text-align: center;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,Ju=U.span`
  font-weight: bold;
  padding-top: 3px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  line-height: 1;
`,Yu=e=>e.langObj,Xu=e=>e.triggerPostsortModal,Zu=e=>e.setTriggerPostsortModal,Qu=()=>{let e=q(Yu),t=J(Xu),n=J(Zu),r=G(K(e.postsortModalHead))||``,i=G(K(e.postsortModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)($u,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(ed,{children:i})]})},$u=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,ed=U.div`
  margin-top: 15px;
`,td=()=>{(0,S.useEffect)(()=>(window.addEventListener(`beforeunload`,e),()=>{window.removeEventListener(`beforeunload`,e)}),[]);let e=e=>{var t=`o/`;return(e||window.event).returnValue=t,t};return(0,W.jsx)(S.Fragment,{children:(0,W.jsx)(Qt,{when:!1,message:()=>`Are you sure you want to leave this page?`})})},nd=e=>e.langObj,rd=e=>e.triggerPostsortPreventNavModal,id=e=>e.setTriggerPostsortPreventNavModal,ad=()=>{let e=q(nd),t=J(rd),n=J(id),r=G(K(e.postsortPreventNavModalHead))||``,i=G(K(e.postsortPreventNavModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(od,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(sd,{children:i})]})},od=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;
  color: ${e=>e.theme.mobileText};

  hr {
    color: black;
  }
`,sd=U.div`
  margin-top: 15px;
  color: ${e=>e.theme.mobileText};
`;function cd(e,t){let n=Object.keys(e.postsortConvertObj),r=n.pop(),i=n.pop(),a=n.shift(),o=n.shift(),s=[r,a];return t.showSecondPosColumn&&s.push(i),t.showSecondNegColumn&&s.push(o),{agreeColDisp1:r,agreeColDisp2:i,disagreeColDisp1:a,disagreeColDisp2:o,requiredColumns:s}}var ld=e=>e.langObj,ud=e=>e.configObj,dd=e=>e.mapObj,fd=e=>e.setProgressScore,pd=e=>e.cardHeightPostsort,md=e=>e.cardFontSizePostsort,hd=e=>e.setCurrentPage,gd=e=>e.setDisplayNextButton,_d=()=>{let e=(0,S.useRef)(null),t=q(ld),n=q(dd),r=q(ud),i=J(fd),a=J(pd),o=J(md),s=J(hd),c=J(gd),l=JSON.parse(localStorage.getItem(`columnStatements`)),u=+JSON.parse(localStorage.getItem(`fontSizePostsort`)),d=+JSON.parse(localStorage.getItem(`cardHeightPostsort`));u&&(o=u),d&&(a=d),c(!0);let f=r.headerBarColor,p=G(K(t.postsortInstructions))||``;(0,S.useEffect)(()=>{let t=e.current.childNodes.length;localStorage.setItem(`postsortCommentCardCount`,t-1)});let m=(0,S.useRef)(null);(0,S.useEffect)(()=>(m.current=Date.now(),(async()=>{await s(`postsort`),localStorage.setItem(`currentPage`,`postsort`),await i(50)})(),()=>{ar(m.current,`postsortPage`,`postsortPage`)}),[s,i]);let h=G(K(t.postsortHeader))||``,g=G(K(t.postsortAgreement))||``,_=G(K(t.postsortPlacedOn))||``,v=G(K(t.postsortDisagreement))||``,y=t.placeholder,{agreeColDisp1:b,agreeColDisp2:x,disagreeColDisp1:C,disagreeColDisp2:w}=cd(n,r),T=b,E=x,D=r.showSecondPosColumn,O=C,k=w,A=r.showSecondNegColumn,j={};j.agreeText=g,j.columnDisplay=[T],j.columnDisplay2=[E],j.displaySecondColumn=D,j.placeholder=y,j.placedOn=_;let M={};M.disagreeText=v,M.columnDisplay=[O],M.columnDisplay2=[k],M.displaySecondColumn=A,M.placeholder=y,M.placedOn=_;let N=l?.vCols[j.columnDisplay],P=l?.vCols[j.columnDisplay2],F=l?.vCols[M.columnDisplay],ee=l?.vCols[M.columnDisplay2];return(0,W.jsxs)(`div`,{children:[(0,W.jsx)(td,{}),(0,W.jsx)(Qu,{}),(0,W.jsx)(ad,{}),(0,W.jsx)(yd,{background:f,children:h}),(0,W.jsxs)(vd,{ref:e,children:[(0,W.jsx)(bd,{children:p}),(0,W.jsx)(yu,{agreeObj:j,height:a,cardFontSize:o,width:250,highCards:N}),j.displaySecondColumn&&(0,W.jsx)(Ru,{agreeObj:j,height:a,cardFontSize:o,width:250,highCards2:P}),M.displaySecondColumn&&(0,W.jsx)(Ql,{disagreeObj:M,height:a,cardFontSize:o,width:250,lowCards2:ee}),(0,W.jsx)(Nl,{disagreeObj:M,height:a,cardFontSize:o,width:250,lowCards:F})]})]})},vd=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 150px;
  margin-top: 50px;
`,yd=U.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
`,bd=U.div`
  display: flex;
  justify-self: center;
  align-self: center;
  margin-top: 30px;
  text-align: center;
  user-select: none;
  color: black;
  font-size: 2vh;
  font-weight: normal;
  max-width: 1100px;
`,xd=s(((e,t)=>{function n(){this.__data__=[],this.size=0}t.exports=n})),Sd=s(((e,t)=>{function n(e,t){return e===t||e!==e&&t!==t}t.exports=n})),Cd=s(((e,t)=>{var n=Sd();function r(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}t.exports=r})),wd=s(((e,t)=>{var n=Cd(),r=Array.prototype.splice;function i(e){var t=this.__data__,i=n(t,e);return i<0?!1:(i==t.length-1?t.pop():r.call(t,i,1),--this.size,!0)}t.exports=i})),Td=s(((e,t)=>{var n=Cd();function r(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}t.exports=r})),Ed=s(((e,t)=>{var n=Cd();function r(e){return n(this.__data__,e)>-1}t.exports=r})),Dd=s(((e,t)=>{var n=Cd();function r(e,t){var r=this.__data__,i=n(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}t.exports=r})),Od=s(((e,t)=>{var n=xd(),r=wd(),i=Td(),a=Ed(),o=Dd();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),kd=s(((e,t)=>{var n=Od();function r(){this.__data__=new n,this.size=0}t.exports=r})),Ad=s(((e,t)=>{function n(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}t.exports=n})),jd=s(((e,t)=>{function n(e){return this.__data__.get(e)}t.exports=n})),Md=s(((e,t)=>{function n(e){return this.__data__.has(e)}t.exports=n})),Nd=s(((e,t)=>{t.exports=Xs()[`__core-js_shared__`]})),Pd=s(((e,t)=>{var n=Nd(),r=function(){var e=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function i(e){return!!r&&r in e}t.exports=i})),Fd=s(((e,t)=>{var n=Function.prototype.toString;function r(e){if(e!=null){try{return n.call(e)}catch{}try{return e+``}catch{}}return``}t.exports=r})),Id=s(((e,t)=>{var n=Fc(),r=Pd(),i=Js(),a=Fd(),o=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,d=l.hasOwnProperty,f=RegExp(`^`+u.call(d).replace(o,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function p(e){return!i(e)||r(e)?!1:(n(e)?f:s).test(a(e))}t.exports=p})),Ld=s(((e,t)=>{function n(e,t){return e?.[t]}t.exports=n})),Rd=s(((e,t)=>{var n=Id(),r=Ld();function i(e,t){var i=r(e,t);return n(i)?i:void 0}t.exports=i})),zd=s(((e,t)=>{t.exports=Rd()(Xs(),`Map`)})),Bd=s(((e,t)=>{t.exports=Rd()(Object,`create`)})),Vd=s(((e,t)=>{var n=Bd();function r(){this.__data__=n?n(null):{},this.size=0}t.exports=r})),Hd=s(((e,t)=>{function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}t.exports=n})),Ud=s(((e,t)=>{var n=Bd(),r=`__lodash_hash_undefined__`,i=Object.prototype.hasOwnProperty;function a(e){var t=this.__data__;if(n){var a=t[e];return a===r?void 0:a}return i.call(t,e)?t[e]:void 0}t.exports=a})),Wd=s(((e,t)=>{var n=Bd(),r=Object.prototype.hasOwnProperty;function i(e){var t=this.__data__;return n?t[e]!==void 0:r.call(t,e)}t.exports=i})),Gd=s(((e,t)=>{var n=Bd(),r=`__lodash_hash_undefined__`;function i(e,t){var i=this.__data__;return this.size+=+!this.has(e),i[e]=n&&t===void 0?r:t,this}t.exports=i})),Kd=s(((e,t)=>{var n=Vd(),r=Hd(),i=Ud(),a=Wd(),o=Gd();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),qd=s(((e,t)=>{var n=Kd(),r=Od(),i=zd();function a(){this.size=0,this.__data__={hash:new n,map:new(i||r),string:new n}}t.exports=a})),Jd=s(((e,t)=>{function n(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}t.exports=n})),Yd=s(((e,t)=>{var n=Jd();function r(e,t){var r=e.__data__;return n(t)?r[typeof t==`string`?`string`:`hash`]:r.map}t.exports=r})),Xd=s(((e,t)=>{var n=Yd();function r(e){var t=n(this,e).delete(e);return this.size-=+!!t,t}t.exports=r})),Zd=s(((e,t)=>{var n=Yd();function r(e){return n(this,e).get(e)}t.exports=r})),Qd=s(((e,t)=>{var n=Yd();function r(e){return n(this,e).has(e)}t.exports=r})),$d=s(((e,t)=>{var n=Yd();function r(e,t){var r=n(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}t.exports=r})),ef=s(((e,t)=>{var n=qd(),r=Xd(),i=Zd(),a=Qd(),o=$d();function s(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=n,s.prototype.delete=r,s.prototype.get=i,s.prototype.has=a,s.prototype.set=o,t.exports=s})),tf=s(((e,t)=>{var n=Od(),r=zd(),i=ef(),a=200;function o(e,t){var o=this.__data__;if(o instanceof n){var s=o.__data__;if(!r||s.length<a-1)return s.push([e,t]),this.size=++o.size,this;o=this.__data__=new i(s)}return o.set(e,t),this.size=o.size,this}t.exports=o})),nf=s(((e,t)=>{var n=Od(),r=kd(),i=Ad(),a=jd(),o=Md(),s=tf();function c(e){var t=this.__data__=new n(e);this.size=t.size}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,t.exports=c})),rf=s(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}t.exports=n})),af=s(((e,t)=>{var n=Rd();t.exports=function(){try{var e=n(Object,`defineProperty`);return e({},``,{}),e}catch{}}()})),of=s(((e,t)=>{var n=af();function r(e,t,r){t==`__proto__`&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}t.exports=r})),sf=s(((e,t)=>{var n=of(),r=Sd(),i=Object.prototype.hasOwnProperty;function a(e,t,a){var o=e[t];(!(i.call(e,t)&&r(o,a))||a===void 0&&!(t in e))&&n(e,t,a)}t.exports=a})),cf=s(((e,t)=>{var n=sf(),r=of();function i(e,t,i,a){var o=!i;i||={};for(var s=-1,c=t.length;++s<c;){var l=t[s],u=a?a(i[l],e[l],l,i,e):void 0;u===void 0&&(u=e[l]),o?r(i,l,u):n(i,l,u)}return i}t.exports=i})),lf=s(((e,t)=>{var n=cf(),r=Lc();function i(e,t){return e&&n(t,r(t),e)}t.exports=i})),uf=s(((e,t)=>{function n(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}t.exports=n})),df=s(((e,t)=>{var n=Js(),r=jc(),i=uf(),a=Object.prototype.hasOwnProperty;function o(e){if(!n(e))return i(e);var t=r(e),o=[];for(var s in e)s==`constructor`&&(t||!a.call(e,s))||o.push(s);return o}t.exports=o})),ff=s(((e,t)=>{var n=Ac(),r=df(),i=Ic();function a(e){return i(e)?n(e,!0):r(e)}t.exports=a})),pf=s(((e,t)=>{var n=cf(),r=ff();function i(e,t){return e&&n(t,r(t),e)}t.exports=i})),mf=s(((e,t)=>{var n=Xs(),r=typeof e==`object`&&e&&!e.nodeType&&e,i=r&&typeof t==`object`&&t&&!t.nodeType&&t,a=i&&i.exports===r?n.Buffer:void 0,o=a?a.allocUnsafe:void 0;function s(e,t){if(t)return e.slice();var n=e.length,r=o?o(n):new e.constructor(n);return e.copy(r),r}t.exports=s})),hf=s(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}t.exports=n})),gf=s(((e,t)=>{function n(){return[]}t.exports=n})),_f=s(((e,t)=>{var n=hf(),r=gf(),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;t.exports=a?function(e){return e==null?[]:(e=Object(e),n(a(e),function(t){return i.call(e,t)}))}:r})),vf=s(((e,t)=>{var n=cf(),r=_f();function i(e,t){return n(e,r(e),t)}t.exports=i})),yf=s(((e,t)=>{function n(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}t.exports=n})),bf=s(((e,t)=>{t.exports=Mc()(Object.getPrototypeOf,Object)})),xf=s(((e,t)=>{var n=yf(),r=bf(),i=_f(),a=gf();t.exports=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,i(e)),e=r(e);return t}:a})),Sf=s(((e,t)=>{var n=cf(),r=xf();function i(e,t){return n(e,r(e),t)}t.exports=i})),Cf=s(((e,t)=>{var n=yf(),r=xc();function i(e,t,i){var a=t(e);return r(e)?a:n(a,i(e))}t.exports=i})),wf=s(((e,t)=>{var n=Cf(),r=_f(),i=Lc();function a(e){return n(e,i,r)}t.exports=a})),Tf=s(((e,t)=>{var n=Cf(),r=xf(),i=ff();function a(e){return n(e,i,r)}t.exports=a})),Ef=s(((e,t)=>{t.exports=Rd()(Xs(),`DataView`)})),Df=s(((e,t)=>{t.exports=Rd()(Xs(),`Promise`)})),Of=s(((e,t)=>{t.exports=Rd()(Xs(),`Set`)})),kf=s(((e,t)=>{t.exports=Rd()(Xs(),`WeakMap`)})),Af=s(((e,t)=>{var n=Ef(),r=zd(),i=Df(),a=Of(),o=kf(),s=ec(),c=Fd(),l=`[object Map]`,u=`[object Object]`,d=`[object Promise]`,f=`[object Set]`,p=`[object WeakMap]`,m=`[object DataView]`,h=c(n),g=c(r),_=c(i),v=c(a),y=c(o),b=s;(n&&b(new n(new ArrayBuffer(1)))!=m||r&&b(new r)!=l||i&&b(i.resolve())!=d||a&&b(new a)!=f||o&&b(new o)!=p)&&(b=function(e){var t=s(e),n=t==u?e.constructor:void 0,r=n?c(n):``;if(r)switch(r){case h:return m;case g:return l;case _:return d;case v:return f;case y:return p}return t}),t.exports=b})),jf=s(((e,t)=>{var n=Object.prototype.hasOwnProperty;function r(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]==`string`&&n.call(e,`index`)&&(r.index=e.index,r.input=e.input),r}t.exports=r})),Mf=s(((e,t)=>{t.exports=Xs().Uint8Array})),Nf=s(((e,t)=>{var n=Mf();function r(e){var t=new e.constructor(e.byteLength);return new n(t).set(new n(e)),t}t.exports=r})),Pf=s(((e,t)=>{var n=Nf();function r(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}t.exports=r})),Ff=s(((e,t)=>{var n=/\w*$/;function r(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}t.exports=r})),If=s(((e,t)=>{var n=Zs(),r=n?n.prototype:void 0,i=r?r.valueOf:void 0;function a(e){return i?Object(i.call(e)):{}}t.exports=a})),Lf=s(((e,t)=>{var n=Nf();function r(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}t.exports=r})),Rf=s(((e,t)=>{var n=Nf(),r=Pf(),i=Ff(),a=If(),o=Lf(),s=`[object Boolean]`,c=`[object Date]`,l=`[object Map]`,u=`[object Number]`,d=`[object RegExp]`,f=`[object Set]`,p=`[object String]`,m=`[object Symbol]`,h=`[object ArrayBuffer]`,g=`[object DataView]`,_=`[object Float32Array]`,v=`[object Float64Array]`,y=`[object Int8Array]`,b=`[object Int16Array]`,x=`[object Int32Array]`,S=`[object Uint8Array]`,C=`[object Uint8ClampedArray]`,w=`[object Uint16Array]`,T=`[object Uint32Array]`;function E(e,t,E){var D=e.constructor;switch(t){case h:return n(e);case s:case c:return new D(+e);case g:return r(e,E);case _:case v:case y:case b:case x:case S:case C:case w:case T:return o(e,E);case l:return new D;case u:case p:return new D(e);case d:return i(e);case f:return new D;case m:return a(e)}}t.exports=E})),zf=s(((e,t)=>{var n=Js(),r=Object.create;t.exports=function(){function e(){}return function(t){if(!n(t))return{};if(r)return r(t);e.prototype=t;var i=new e;return e.prototype=void 0,i}}()})),Bf=s(((e,t)=>{var n=zf(),r=bf(),i=jc();function a(e){return typeof e.constructor==`function`&&!i(e)?n(r(e)):{}}t.exports=a})),Vf=s(((e,t)=>{var n=Af(),r=tc(),i=`[object Map]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),Hf=s(((e,t)=>{var n=Vf(),r=Dc(),i=Oc(),a=i&&i.isMap;t.exports=a?r(a):n})),Uf=s(((e,t)=>{var n=Af(),r=tc(),i=`[object Set]`;function a(e){return r(e)&&n(e)==i}t.exports=a})),Wf=s(((e,t)=>{var n=Uf(),r=Dc(),i=Oc(),a=i&&i.isSet;t.exports=a?r(a):n})),Gf=s(((e,t)=>{var n=nf(),r=rf(),i=sf(),a=lf(),o=pf(),s=mf(),c=pc(),l=vf(),u=Sf(),d=wf(),f=Tf(),p=Af(),m=jf(),h=Rf(),g=Bf(),_=xc(),v=Cc(),y=Hf(),b=Js(),x=Wf(),S=Lc(),C=ff(),w=1,T=2,E=4,D=`[object Arguments]`,O=`[object Array]`,k=`[object Boolean]`,A=`[object Date]`,j=`[object Error]`,M=`[object Function]`,N=`[object GeneratorFunction]`,P=`[object Map]`,F=`[object Number]`,ee=`[object Object]`,I=`[object RegExp]`,L=`[object Set]`,R=`[object String]`,z=`[object Symbol]`,B=`[object WeakMap]`,V=`[object ArrayBuffer]`,H=`[object DataView]`,te=`[object Float32Array]`,ne=`[object Float64Array]`,re=`[object Int8Array]`,ie=`[object Int16Array]`,ae=`[object Int32Array]`,oe=`[object Uint8Array]`,se=`[object Uint8ClampedArray]`,ce=`[object Uint16Array]`,le=`[object Uint32Array]`,ue={};ue[D]=ue[O]=ue[V]=ue[H]=ue[k]=ue[A]=ue[te]=ue[ne]=ue[re]=ue[ie]=ue[ae]=ue[P]=ue[F]=ue[ee]=ue[I]=ue[L]=ue[R]=ue[z]=ue[oe]=ue[se]=ue[ce]=ue[le]=!0,ue[j]=ue[M]=ue[B]=!1;function de(e,t,O,k,A,j){var P,F=t&w,I=t&T,L=t&E;if(O&&(P=A?O(e,k,A,j):O(e)),P!==void 0)return P;if(!b(e))return e;var R=_(e);if(R){if(P=m(e),!F)return c(e,P)}else{var z=p(e),B=z==M||z==N;if(v(e))return s(e,F);if(z==ee||z==D||B&&!A){if(P=I||B?{}:g(e),!F)return I?u(e,o(P,e)):l(e,a(P,e))}else{if(!ue[z])return A?e:{};P=h(e,z,F)}}j||=new n;var V=j.get(e);if(V)return V;j.set(e,P),x(e)?e.forEach(function(n){P.add(de(n,t,O,n,e,j))}):y(e)&&e.forEach(function(n,r){P.set(r,de(n,t,O,r,e,j))});var H=R?void 0:(L?I?f:d:I?C:S)(e);return r(H||e,function(n,r){H&&(r=n,n=e[r]),i(P,r,de(n,t,O,r,e,j))}),P}t.exports=de})),Kf=u(s(((e,t)=>{var n=Gf(),r=1,i=4;function a(e){return n(e,r|i)}t.exports=a}))(),1),qf=()=>{let e=e=>e.langObj,t=e=>e.triggerPresortModal,n=e=>e.setTriggerPresortModal,r=q(e),i=J(t),a=J(n),o=()=>{a(!1)},s=G(K(r.presortModalHead))||``,c=G(K(r.presortModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:i,onClose:o,center:!0,children:[(0,W.jsx)(Jf,{children:s}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(Yf,{children:c})]})},Jf=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Yf=U.div`
  margin-top: 15px;
`;function Xf(e){if(Array.isArray(e))return e}function Zf(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Qf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function $f(e,t){if(e){if(typeof e==`string`)return Qf(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qf(e,t):void 0}}function ep(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tp(e,t){return Xf(e)||Zf(e,t)||$f(e,t)||ep()}function np(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function rp(e){"@babel/helpers - typeof";return rp=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},rp(e)}function ip(e,t){if(rp(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(rp(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ap(e){var t=ip(e,`string`);return rp(t)==`symbol`?t:t+``}function op(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ap(r.key),r)}}function sp(e,t,n){return t&&op(e.prototype,t),n&&op(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function cp(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function lp(e,t){if(t&&(rp(t)==`object`||typeof t==`function`))return t;if(t!==void 0)throw TypeError(`Derived constructors may only return object or undefined`);return cp(e)}function up(e){return up=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},up(e)}function dp(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function`);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xt(e,t)}function fp(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}function pp(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(pp=function(){return!!e})()}function mp(e,t,n){if(pp())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&xt(i,n.prototype),i}function hp(e){var t=typeof Map==`function`?new Map:void 0;return hp=function(e){if(e===null||!fp(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return mp(e,arguments,up(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),xt(n,e)},hp(e)}function gp(e,t,n){return t=up(t),lp(e,_p()?Reflect.construct(t,n||[],up(e).constructor):t.apply(e,n))}function _p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_p=function(){return!!e})()}var vp=!0,yp=`Invariant failed`,bp=function(e){function t(e){var n;return np(this,t),n=gp(this,t),n.message=e,n}return dp(t,e),sp(t,[{key:`toString`,value:function(){return this.message}}])}(hp(Error));function xp(e,t){if(!e)throw vp?new bp(yp):new bp(`${yp}: ${t||``}`)}var Sp=(0,S.createContext)(null);function Cp(){var e=(0,S.useContext)(Sp);return xp(e!==null,`Unable to find DragDropContext context`),e}function wp(e){var t=e.children,n=e.contextId,r=e.getDragState,i=e.startKeyboardDrag,a=e.droppableRegistry,o=(0,S.useMemo)(function(){return{contextId:n,getDragState:r,startKeyboardDrag:i,droppableRegistry:a}},[n,r,i,a]);return S.createElement(Sp.Provider,{value:o},t)}function Tp(e){return{margin:window.getComputedStyle(e).margin,rect:e.getBoundingClientRect()}}function Ep(){var e=Cp().getDragState,t=e();return t.isDragging?t.draggableDimensions:null}var Dp=function(){};function Op(){var e=Dp;return{setCleanupFn:function(t){e=t},runCleanupFn:function(){e(),e=Dp}}}function kp(){var e=tp((0,S.useState)(Op),1)[0];return(0,S.useEffect)(function(){return e.runCleanupFn},[e.runCleanupFn]),e}var Ap={draggable:{contextId:`data-rbd-draggable-context-id`,id:`data-rbd-draggable-id`},dragHandle:{contextId:`data-rbd-drag-handle-context-id`,draggableId:`data-rbd-drag-handle-draggable-id`},droppable:{contextId:`data-rbd-droppable-context-id`,id:`data-rbd-droppable-id`},placeholder:{contextId:`data-rbd-placeholder-context-id`}},jp={draggable:{droppableId:`data-rbd-draggable-droppable-id`,index:`data-rbd-draggable-index`},dropIndicator:`data-rbd-drop-indicator`,droppable:{direction:`data-rbd-droppable-direction`,type:`data-rbd-droppable-type`}};function Mp(e,t){var n=e.getAttribute(t);return xp(n!==null,`Expected '${t}' to be present`),n}function Np(e,t){for(var n=0,r=Object.entries(t);n<r.length;n++){var i=tp(r[n],2),a=i[0],o=i[1];e.setAttribute(a,o)}return function(){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];e.removeAttribute(i)}}}function Pp(){return[...arguments].map(function(e){var t=e.attribute,n=e.value;return n?`[${t}="${CSS.escape(n)}"]`:`[${t}]`}).join(``)}function Fp(){var e=Pp.apply(void 0,arguments);return document.querySelector(e)}function Ip(){var e=Pp.apply(void 0,arguments);return Array.from(document.querySelectorAll(e))}function Lp(){var e=Fp.apply(void 0,arguments);return xp(e,`There is a matching HTMLElement for selector `+Pp.apply(void 0,arguments)),e}function Rp(e){var t=e.contextId,n=e.draggableId;return Fp({attribute:Ap.dragHandle.contextId,value:t},{attribute:Ap.dragHandle.draggableId,value:n})}function zp(e){if(getComputedStyle(e).position===`absolute`)return e;var t=e.parentElement;return t instanceof HTMLElement?zp(t):null}function Bp(e){var t=e.element;return e.mode===`standard`?t:zp(t)??t}function Vp(){window.dispatchEvent(new DragEvent(`dragend`))}function Hp(e,t){if(e==null)return{};var n,r,i=Rt(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Z(e,t,n){return(t=ap(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Wp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Up(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Up(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Gp={top:function(e,t){return Math.abs(t.y-e.top)},right:function(e,t){return Math.abs(e.right-t.x)},bottom:function(e,t){return Math.abs(e.bottom-t.y)},left:function(e,t){return Math.abs(t.x-e.left)}},Kp=Symbol(`closestEdge`);function qp(e,t){var n=t.element,r=t.input,i=t.allowedEdges,a={x:r.clientX,y:r.clientY},o=n.getBoundingClientRect(),s=i.map(function(e){return{edge:e,value:Gp[e](o,a)}}).sort(function(e,t){return e.value-t.value})[0]?.edge??null;return Wp(Wp({},e),{},Z({},Kp,s))}function Jp(e){return e[Kp]??null}var Yp=Symbol(`DraggableData`);function Xp(e){return e[Yp]===!0}function Zp(e){var t=e.draggableId,n=e.droppableId,r=e.getIndex,i=e.contextId,a=e.type;return(0,S.useMemo)(function(){return Z(Z(Z(Z(Z(Z({},Yp,!0),`draggableId`,t),`droppableId`,n),`getIndex`,r),`contextId`,i),`type`,a)},[t,n,r,i,a])}var Qp=Symbol(`DroppableData`);function $p(e){return e[Qp]===!0}function em(e){var t=e.contextId,n=e.droppableId,r=e.getIsDropDisabled;return(0,S.useMemo)(function(){return Z(Z(Z(Z({},Qp,!0),`contextId`,t),`droppableId`,n),`getIsDropDisabled`,r)},[t,n,r])}function tm(e){var t=e.droppableId,n=e.contextId;return Ip({attribute:Ap.draggable.contextId,value:n},{attribute:jp.draggable.droppableId,value:t})}var nm=[`droppableId`,`getIndex`],rm=[`contextId`,`droppableId`];function im(e){var t=e.droppableId,n=e.getIndex,r=Hp(e,nm),i=n(),a=Jp(r);return(a===`bottom`||a===`right`)&&(i+=1),{droppableId:t,index:i}}function am(e){var t=e.contextId,n=e.droppableId,r=Hp(e,rm),i=tm({contextId:t,droppableId:n});if(i.length===0)return{droppableId:n,index:0};var a=Jp(r);return a===`top`||a===`left`?{droppableId:n,index:0}:{droppableId:n,index:i.reduce(function(e,t){var n=parseInt(Mp(t,jp.draggable.index),10);return Math.max(e,n)},0)+1}}function om(e){var t=e.dropTargets;if(t.length===0)return null;var n=t[0];return Xp(n.data)?im(n.data):$p(n.data)?am(n.data):null}function sm(e,t){return e?.droppableId===t?.droppableId&&e?.index===t?.index}function cm(){var e=new Map,t=function(t){var n=t.droppableId;return e.get(n)??null},n=null;return{getEntry:t,register:function(t){var r;return e.set(t.droppableId,t),(r=n)==null||r(t),function(){e.delete(t.droppableId)}},setUpdateListener:function(e){n=e}}}function lm(){return tp((0,S.useState)(cm),1)[0]}var um=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bind=void 0;function t(e,t){var n=t.type,r=t.listener,i=t.options;return e.addEventListener(n,r,i),function(){e.removeEventListener(n,r,i)}}e.bind=t})),dm=s((e=>{var t=e&&e.__assign||function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.bindAll=void 0;var n=um();function r(e){if(e!==void 0)return typeof e==`boolean`?{capture:e}:e}function i(e,n){return n==null?e:t(t({},e),{options:t(t({},r(n)),r(e.options))})}function a(e,t,r){var a=t.map(function(t){var a=i(t,r);return(0,n.bind)(e,a)});return function(){a.forEach(function(e){return e()})}}e.bindAll=a})),fm=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bindAll=e.bind=void 0;var t=um();Object.defineProperty(e,"bind",{enumerable:!0,get:function(){return t.bind}});var n=dm();Object.defineProperty(e,"bindAll",{enumerable:!0,get:function(){return n.bindAll}})}));function pm(){var e=[...arguments];return function(){e.forEach(function(e){return e()})}}var mm=`data-pdnd-honey-pot`;function hm(e){return e instanceof Element&&e.hasAttribute(`data-pdnd-honey-pot`)}function gm(e){var t=tp(document.elementsFromPoint(e.x,e.y),2),n=t[0],r=t[1];return n?hm(n)?r??null:n:null}var _m=2147483647,vm={inset:`unset`,border:`none`,padding:0,margin:0,overflow:`visible`,color:`inherit`,background:`transparent`,width:`auto`,height:`auto`};function ym(e){var t=null;return function(){if(!t){var n=[...arguments];t={result:e.apply(this,n)}}return t.result}}var bm=ym(function(){return typeof HTMLElement<`u`&&typeof HTMLElement.prototype.showPopover==`function`}),xm=fm();function Sm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Cm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Sm(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var wm=2,Tm=wm/2;function Em(e){return{x:Math.floor(e.x),y:Math.floor(e.y)}}function Dm(e){return{x:e.x-Tm,y:e.y-Tm}}function Om(e){return{x:Math.max(e.x,0),y:Math.max(e.y,0)}}function km(e){return{x:Math.min(e.x,window.innerWidth-wm),y:Math.min(e.y,window.innerHeight-wm)}}function Am(e){var t=e.client,n=km(Om(Dm(Em(t))));return DOMRect.fromRect({x:n.x,y:n.y,width:wm,height:wm})}function jm(e){var t=e.clientRect;return{left:`${t.left}px`,top:`${t.top}px`,width:`${t.width}px`,height:`${t.height}px`}}function Mm(e){var t=e.client,n=e.clientRect;return t.x>=n.x&&t.x<=n.x+n.width&&t.y>=n.y&&t.y<=n.y+n.height}function Nm(e){var t=e.initial,n=document.createElement(`div`);n.setAttribute(mm,`true`),bm()&&n.setAttribute(`popover`,`manual`);var r=Am({client:t});Object.assign(n.style,Cm(Cm({position:`fixed`},bm()?vm:{zIndex:_m}),{},{backgroundColor:`transparent`,padding:0,margin:0,boxSizing:`border-box`,pointerEvents:`auto`},jm({clientRect:r}))),document.body.appendChild(n),bm()&&n.showPopover();var i=(0,xm.bind)(window,{type:`pointermove`,listener:function(e){r=Am({client:{x:e.clientX,y:e.clientY}}),Object.assign(n.style,jm({clientRect:r}))},options:{capture:!0}});return function(e){var t=e.current;if(i(),Mm({client:t,clientRect:r})){n.remove();return}function a(){o(),n.remove()}var o=(0,xm.bindAll)(window,[{type:`pointerdown`,listener:a},{type:`pointermove`,listener:a},{type:`focusin`,listener:a},{type:`focusout`,listener:a},{type:`dragstart`,listener:a},{type:`dragenter`,listener:a},{type:`dragover`,listener:a}],{capture:!0})}}function Pm(){var e=null;function t(){return e=null,(0,xm.bind)(window,{type:`pointermove`,listener:function(t){e={x:t.clientX,y:t.clientY}},options:{capture:!0}})}function n(){var t=null;return function(n){var r=n.eventName,i=n.payload;if(r===`onDragStart`){var a=i.location.initial.input;t=Nm({initial:e??{x:a.clientX,y:a.clientY}})}if(r===`onDrop`){var o,s=i.location.current.input;(o=t)==null||o({current:{x:s.clientX,y:s.clientY}}),t=null,e=null}}}return{bindEvents:t,getOnPostDispatch:n}}function Fm(e){if(Array.isArray(e))return Qf(e)}function Im(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Lm(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rm(e){return Fm(e)||Im(e)||$f(e)||Lm()}var zm=ym(function(){return navigator.userAgent.includes(`Firefox`)}),Bm=ym(function(){var e=navigator.userAgent;return e.includes(`AppleWebKit`)&&!e.includes(`Chrome`)}),Vm={isLeavingWindow:Symbol(`leaving`),isEnteringWindow:Symbol(`entering`)};function Hm(e){var t=e.dragLeave;return Bm()?t.hasOwnProperty(Vm.isLeavingWindow):!1}(function(){if(typeof window>`u`||!Bm())return;function e(){return{enterCount:0,isOverWindow:!1}}var t=e();function n(){t=e()}(0,xm.bindAll)(window,[{type:`dragstart`,listener:function(){t.enterCount=0,t.isOverWindow=!0}},{type:`drop`,listener:n},{type:`dragend`,listener:n},{type:`dragenter`,listener:function(e){!t.isOverWindow&&t.enterCount===0&&(e[Vm.isEnteringWindow]=!0),t.isOverWindow=!0,t.enterCount++}},{type:`dragleave`,listener:function(e){t.enterCount--,t.isOverWindow&&t.enterCount===0&&(e[Vm.isLeavingWindow]=!0,t.isOverWindow=!1)}}],{capture:!0})})();function Um(e){return`nodeName`in e}function Wm(e){return Um(e)&&e.ownerDocument!==document}function Gm(e){var t=e.dragLeave,n=t.type,r=t.relatedTarget;return n===`dragleave`?Bm()?Hm({dragLeave:t}):r==null?!0:zm()?Wm(r):r instanceof HTMLIFrameElement:!1}function Km(e){var t=e.onDragEnd;return[{type:`pointermove`,listener:function(){var e=0;return function(){if(e<20){e++;return}t()}}()},{type:`pointerdown`,listener:t}]}function qm(e){return{altKey:e.altKey,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY}}var Jm=function(e){var t=[],n=null,r=function(){t=[...arguments],!n&&(n=requestAnimationFrame(function(){n=null,e.apply(void 0,t)}))};return r.cancel=function(){n&&=(cancelAnimationFrame(n),null)},r}(function(e){return e()}),Ym=function(){var e=null;function t(t){e={frameId:requestAnimationFrame(function(){e=null,t()}),fn:t}}function n(){e&&=(cancelAnimationFrame(e.frameId),e.fn(),null)}return{schedule:t,flush:n}}();function Xm(e){var t=e.source,n=e.initial,r=e.dispatchEvent,i={dropTargets:[]};function a(e){r(e),i={dropTargets:e.payload.location.current.dropTargets}}return{start:function(e){var r=e.nativeSetDragImage,o={current:n,previous:i,initial:n};a({eventName:`onGenerateDragPreview`,payload:{source:t,location:o,nativeSetDragImage:r}}),Ym.schedule(function(){a({eventName:`onDragStart`,payload:{source:t,location:o}})})},dragUpdate:function(e){var r=e.current;Ym.flush(),Jm.cancel(),a({eventName:`onDropTargetChange`,payload:{source:t,location:{initial:n,previous:i,current:r}}})},drag:function(e){var r=e.current;Jm(function(){Ym.flush(),a({eventName:`onDrag`,payload:{source:t,location:{initial:n,previous:i,current:r}}})})},drop:function(e){var r=e.current,o=e.updatedSourcePayload;Ym.flush(),Jm.cancel(),a({eventName:`onDrop`,payload:{source:o??t,location:{current:r,previous:i,initial:n}}})}}}var Zm={isActive:!1};function Qm(){return!Zm.isActive}function $m(e){return e.dataTransfer?e.dataTransfer.setDragImage.bind(e.dataTransfer):null}function eh(e){var t=e.current,n=e.next;if(t.length!==n.length)return!0;for(var r=0;r<t.length;r++)if(t[r].element!==n[r].element)return!0;return!1}function th(e){var t=e.event,n=e.dragType,r=e.getDropTargetsOver,i=e.dispatchEvent;if(!Qm())return;var a=rh({event:t,dragType:n,getDropTargetsOver:r});Zm.isActive=!0;var o={current:a};nh({event:t,current:a.dropTargets});var s=Xm({source:n.payload,dispatchEvent:i,initial:a});function c(e){var t=eh({current:o.current.dropTargets,next:e.dropTargets});o.current=e,t&&s.dragUpdate({current:o.current})}function l(e){var t=qm(e),i=r({target:hm(e.target)?gm({x:t.clientX,y:t.clientY}):e.target,input:t,source:n.payload,current:o.current.dropTargets});i.length&&(e.preventDefault(),nh({event:e,current:i})),c({dropTargets:i,input:t})}function u(){o.current.dropTargets.length&&c({dropTargets:[],input:o.current.input}),s.drop({current:o.current,updatedSourcePayload:null}),d()}function d(){Zm.isActive=!1,f()}var f=(0,xm.bindAll)(window,[{type:`dragover`,listener:function(e){l(e),s.drag({current:o.current})}},{type:`dragenter`,listener:l},{type:`dragleave`,listener:function(e){Gm({dragLeave:e})&&(c({input:o.current.input,dropTargets:[]}),n.startedFrom===`external`&&u())}},{type:`drop`,listener:function(e){if(o.current={dropTargets:o.current.dropTargets,input:qm(e)},!o.current.dropTargets.length){u();return}e.preventDefault(),nh({event:e,current:o.current.dropTargets}),s.drop({current:o.current,updatedSourcePayload:n.type===`external`?n.getDropPayload(e):null}),d()}},{type:`dragend`,listener:function(e){o.current={dropTargets:o.current.dropTargets,input:qm(e)},u()}}].concat(Rm(Km({onDragEnd:u}))),{capture:!0});s.start({nativeSetDragImage:$m(t)})}function nh(e){var t=e.event,n=e.current[0]?.dropEffect;n!=null&&t.dataTransfer&&(t.dataTransfer.dropEffect=n)}function rh(e){var t=e.event,n=e.dragType,r=e.getDropTargetsOver,i=qm(t);return n.startedFrom===`external`?{input:i,dropTargets:[]}:{input:i,dropTargets:r({input:i,source:n.payload,target:t.target,current:[]})}}var ih={canStart:Qm,start:th},ah=new Map;function oh(e){var t=e.typeKey,n=e.mount,r=ah.get(t);if(r)return r.usageCount++,r;var i={typeKey:t,unmount:n(),usageCount:1};return ah.set(t,i),i}function sh(e){var t=oh(e);return function(){t.usageCount--,!(t.usageCount>0)&&(t.unmount(),ah.delete(e.typeKey))}}function ch(e,t){var n=t.attribute,r=t.value;return e.setAttribute(n,r),function(){return e.removeAttribute(n)}}function lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function uh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?lh(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lh(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function dh(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=fh(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function fh(e,t){if(e){if(typeof e==`string`)return ph(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ph(e,t):void 0}}function ph(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function mh(e){return e.slice(0).reverse()}function hh(e){var t=e.typeKey,n=e.defaultDropEffect,r=new WeakMap,i=`data-drop-target-for-${t}`,a=`[${i}]`;function o(e){return r.set(e.element,e),function(){return r.delete(e.element)}}function s(e){return ym(pm(ch(e.element,{attribute:i,value:`true`}),o(e)))}function c(e){var t=e.source,i=e.target,o=e.input,s=e.result,l=s===void 0?[]:s;if(i==null)return l;if(!(i instanceof Element))return i instanceof Node?c({source:t,target:i.parentElement,input:o,result:l}):l;var u=i.closest(a);if(u==null)return l;var d=r.get(u);if(d==null)return l;var f={input:o,source:t,element:d.element};if(d.canDrop&&!d.canDrop(f))return c({source:t,target:d.element.parentElement,input:o,result:l});var p=d.getData?.call(d,f)??{},m=d.getDropEffect?.call(d,f)??n,h={data:p,element:d.element,dropEffect:m,isActiveDueToStickiness:!1};return c({source:t,target:d.element.parentElement,input:o,result:[].concat(Rm(l),[h])})}function l(e){var t=e.eventName,n=e.payload,i=dh(n.location.current.dropTargets),a;try{for(i.s();!(a=i.n()).done;){var o,s=a.value,c=r.get(s.element),l=uh(uh({},n),{},{self:s});c==null||(o=c[t])==null||o.call(c,l)}}catch(e){i.e(e)}finally{i.f()}}var u={onGenerateDragPreview:l,onDrag:l,onDragStart:l,onDrop:l,onDropTargetChange:function(e){var t=e.payload,n=new Set(t.location.current.dropTargets.map(function(e){return e.element})),i=new Set,a=dh(t.location.previous.dropTargets),o;try{for(a.s();!(o=a.n()).done;){var s,c=o.value;i.add(c.element);var l=r.get(c.element),u=n.has(c.element),d=uh(uh({},t),{},{self:c});if(l==null||(s=l.onDropTargetChange)==null||s.call(l,d),!u){var f;l==null||(f=l.onDragLeave)==null||f.call(l,d)}}}catch(e){a.e(e)}finally{a.f()}var p=dh(t.location.current.dropTargets),m;try{for(p.s();!(m=p.n()).done;){var h,g,_=m.value;if(!i.has(_.element)){var v=uh(uh({},t),{},{self:_}),y=r.get(_.element);y==null||(h=y.onDropTargetChange)==null||h.call(y,v),y==null||(g=y.onDragEnter)==null||g.call(y,v)}}}catch(e){p.e(e)}finally{p.f()}}};function d(e){u[e.eventName](e)}function f(e){var t=e.source,n=e.target,i=e.input,a=e.current,o=c({source:t,target:n,input:i});if(o.length>=a.length)return o;for(var s=mh(a),l=mh(o),u=[],d=0;d<s.length;d++){var f,p=s[d],m=l[d];if(m!=null){u.push(m);continue}var h=u[d-1],g=s[d-1];if(h?.element!==g?.element)break;var _=r.get(p.element);if(!_)break;var v={input:i,source:t,element:_.element};if(_.canDrop&&!_.canDrop(v)||!((f=_.getIsSticky)!=null&&f.call(_,v)))break;u.push(uh(uh({},p),{},{isActiveDueToStickiness:!0}))}return mh(u)}return{dropTargetForConsumers:s,getIsOver:f,dispatchEvent:d}}function gh(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=_h(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function _h(e,t){if(e){if(typeof e==`string`)return vh(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vh(e,t):void 0}}function vh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function yh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function bh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?yh(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yh(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function xh(){var e=new Set,t=null;function n(e){t&&(!e.canMonitor||e.canMonitor(t.canMonitorArgs))&&t.active.add(e)}function r(r){var i=bh({},r);e.add(i),n(i);function a(){e.delete(i),t&&t.active.delete(i)}return ym(a)}function i(r){var i=r.eventName,a=r.payload;if(i===`onGenerateDragPreview`){t={canMonitorArgs:{initial:a.location.initial,source:a.source},active:new Set};var o=gh(e),s;try{for(o.s();!(s=o.n()).done;){var c=s.value;n(c)}}catch(e){o.e(e)}finally{o.f()}}if(t){for(var l=Array.from(t.active),u=0,d=l;u<d.length;u++){var f=d[u];if(t.active.has(f)){var p;(p=f[i])==null||p.call(f,a)}}i===`onDrop`&&(t.active.clear(),t=null)}}return{dispatchEvent:i,monitorForConsumers:r}}function Sh(e){var t=e.typeKey,n=e.mount,r=e.dispatchEventToSource,i=e.onPostDispatch,a=e.defaultDropEffect,o=xh(),s=hh({typeKey:t,defaultDropEffect:a});function c(e){r?.(e),s.dispatchEvent(e),o.dispatchEvent(e),i?.(e)}function l(e){var t=e.event,n=e.dragType;ih.start({event:t,dragType:n,getDropTargetsOver:s.getIsOver,dispatchEvent:c})}function u(){function e(){return n({canStart:ih.canStart,start:l})}return sh({typeKey:t,mount:e})}return{registerUsage:u,dropTarget:s.dropTargetForConsumers,monitor:o.monitorForConsumers}}var Ch=ym(function(){return navigator.userAgent.toLocaleLowerCase().includes(`android`)}),wh=`pdnd:android-fallback`,Th=`text/plain`,Eh=`application/vnd.pdnd`,Dh=new WeakMap;function Oh(e){return Dh.set(e.element,e),function(){Dh.delete(e.element)}}var kh=Pm(),Ah=Sh({typeKey:`element`,defaultDropEffect:`move`,mount:function(e){return pm(kh.bindEvents(),(0,xm.bind)(document,{type:`dragstart`,listener:function(t){if(e.canStart(t)&&!t.defaultPrevented&&t.dataTransfer){var n=t.target;if(n instanceof HTMLElement){var r=Dh.get(n);if(r){var i=qm(t),a={element:r.element,dragHandle:r.dragHandle??null,input:i};if(r.canDrag&&!r.canDrag(a)){t.preventDefault();return}if(r.dragHandle){var o=gm({x:i.clientX,y:i.clientY});if(!r.dragHandle.contains(o)){t.preventDefault();return}}var s=r.getInitialDataForExternal?.call(r,a)??null;if(s)for(var c=0,l=Object.entries(s);c<l.length;c++){var u=tp(l[c],2),d=u[0],f=u[1];t.dataTransfer.setData(d,f??``)}Ch()&&!t.dataTransfer.types.includes(`text/plain`)&&!t.dataTransfer.types.includes(`text/uri-list`)&&t.dataTransfer.setData(Th,wh),t.dataTransfer.setData(Eh,``);var p={type:`element`,payload:{element:r.element,dragHandle:r.dragHandle??null,data:r.getInitialData?.call(r,a)??{}},startedFrom:`internal`};e.start({event:t,dragType:p})}}}}}))},dispatchEventToSource:function(e){var t,n,r=e.eventName,i=e.payload;(t=Dh.get(i.source.element))==null||(n=t[r])==null||n.call(t,i)},onPostDispatch:kh.getOnPostDispatch()}),jh=Ah.dropTarget,Mh=Ah.monitor;function Nh(e){return ym(pm(Ah.registerUsage(),Oh(e),ch(e.element,{attribute:`draggable`,value:`true`})))}function Ph(e,t,n){return t=up(t),lp(e,Fh()?Reflect.construct(t,n||[],up(e).constructor):t.apply(e,n))}function Fh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Fh=function(){return!!e})()}function Ih(e){var t=e.children,n=e.dragController,r=(0,S.useRef)(!1),i=(0,S.useCallback)(function(e){var t=n.getDragState();t.isDragging&&(t.mode===`FLUID`&&Vp(),t.mode===`SNAP`&&n.stopDrag({reason:`CANCEL`}),e.error instanceof bp&&e.preventDefault())},[n]);return(0,S.useEffect)(function(){return pm(Mh({onDragStart:function(){r.current=!0},onDrop:function(){r.current=!1}}),(0,xm.bind)(window,{type:`error`,listener:i}))},[i]),t}var Lh=function(e){function t(){return np(this,t),Ph(this,t,arguments)}return dp(t,e),sp(t,[{key:`componentDidCatch`,value:function(e){if(!(e instanceof bp))throw e}},{key:`render`,value:function(){return S.createElement(Ih,{contextId:this.props.contextId,dragController:this.props.dragController},this.props.children)}}],[{key:`getDerivedStateFromError`,value:function(){}}])}(S.Component);function Rh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function zh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Rh(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rh(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Bh(e){var t=e.start,n=e.target;if(n===null)return null;var r=t.droppableId===n.droppableId,i=n.index>t.index;return r&&i?zh(zh({},n),{},{index:n.index-1}):zh({},n)}function Vh(e){return`rbd-lift-instruction-${e}`}function Hh(e){var t=e.contextId,n=e.text;(0,S.useEffect)(function(){var e=Vh(t),r=document.createElement(`div`);return r.id=e,r.textContent=n,Object.assign(r.style,{display:`none`}),document.body.appendChild(r),function(){r.remove()}},[t,n])}function Uh(e){var t=getComputedStyle(e),n=t.overflowX,r=t.overflowY;if(n===`scroll`||n===`auto`||r===`scroll`||r===`auto`)return e;var i=e.parentElement;return i===null?null:Uh(i)}function Wh(e){var t=e.contextId,n=e.type;return Ip({attribute:Ap.droppable.contextId,value:t},{attribute:jp.droppable.type,value:n})}function Gh(e){var t=e.droppableId,n=e.type,r=e.isMovingForward,i=e.contextId,a=e.droppableRegistry,o=Wh({contextId:i,type:n}),s=o.findIndex(function(e){return Mp(e,Ap.droppable.id)===t}),c=o.filter(function(e,t){return r?t>s:t<s}).filter(function(e){var t=Mp(e,Ap.droppable.id),n=a.getEntry({droppableId:t});return n&&!n.isDropDisabled});return(r?c.at(0):c.at(-1))??null}function Kh(e,t){return t?Fp({attribute:Ap.draggable.contextId,value:e},{attribute:jp.draggable.droppableId,value:t.droppableId},{attribute:jp.draggable.index,value:String(t.index)}):null}function qh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Jh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qh(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qh(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Yh(e){var t=Uh(e);t&&t.scrollTo(0,0)}var Xh={mainAxis:{prev:function(e,t){var n=t.dragController;e.preventDefault();var r=n.getDragState();xp(r.isDragging);var i=r.sourceLocation,a=r.targetLocation;if(a&&a.index!==0){var o=Jh(Jh({},a),{},{index:a.index-1});sm(i,Bh({start:i,target:o}))&&(o.index=a.index-2),n.updateDrag({targetLocation:o})}},next:function(e,t){var n=t.dragController,r=t.contextId;e.preventDefault();var i=n.getDragState();xp(i.isDragging);var a=i.sourceLocation,o=i.targetLocation;if(o){var s=Kh(r,o);if(!(!sm(a,o)&&!s)){var c=Jh(Jh({},o),{},{index:o.index+1});sm(a,Bh({start:a,target:c}))&&(c.index=o.index+2),n.updateDrag({targetLocation:c})}}}},crossAxis:{prev:function(e,t){var n=t.dragController,r=t.droppableRegistry,i=t.contextId;e.preventDefault();var a=n.getDragState();xp(a.isDragging);var o=a.targetLocation,s=a.type;if(o){var c=Gh({droppableId:o.droppableId,type:s,isMovingForward:!1,contextId:i,droppableRegistry:r});if(c){Yh(c);var l={droppableId:Mp(c,Ap.droppable.id),index:0};n.updateDrag({targetLocation:l})}}},next:function(e,t){var n=t.dragController,r=t.droppableRegistry,i=t.contextId;e.preventDefault();var a=n.getDragState();xp(a.isDragging);var o=a.targetLocation,s=a.type;if(o){var c=Gh({droppableId:o.droppableId,type:s,isMovingForward:!0,contextId:i,droppableRegistry:r});if(c){Yh(c);var l={droppableId:Mp(c,Ap.droppable.id),index:0};n.updateDrag({targetLocation:l})}}}}};function Zh(e){e.preventDefault()}var Qh={PageUp:Zh,PageDown:Zh,Home:Zh,End:Zh,Enter:Zh,Tab:Zh},$h={vertical:Jh(Jh({},Qh),{},{ArrowUp:Xh.mainAxis.prev,ArrowDown:Xh.mainAxis.next,ArrowLeft:Xh.crossAxis.prev,ArrowRight:Xh.crossAxis.next}),horizontal:Jh(Jh({},Qh),{},{ArrowUp:Xh.crossAxis.prev,ArrowDown:Xh.crossAxis.next,ArrowLeft:Xh.mainAxis.prev,ArrowRight:Xh.mainAxis.next})};function eg(e){var t=e.dragController,n=e.droppableRegistry,r=e.contextId,i=e.setKeyboardCleanupFn;return{startKeyboardDrag:(0,S.useCallback)(function(e){var a=e.event,o=e.draggableId,s=e.type,c=e.getSourceLocation,l=e.sourceElement;t.startDrag({draggableId:o,type:s,getSourceLocation:c,sourceElement:l,mode:`SNAP`});var u=c(),d=Mp(Lp({attribute:Ap.droppable.id,value:u.droppableId}),jp.droppable.direction);xp(d===`vertical`||d===`horizontal`);function f(){t.stopDrag({reason:`CANCEL`})}var p=[`mousedown`,`mouseup`,`click`,`touchstart`,`resize`,`wheel`,`visibilitychange`].map(function(e){return{type:e,listener:f}});i((0,xm.bindAll)(window,[{type:`keydown`,listener:function(e){var i,o;if(e!==a&&t.getDragState().isDragging){if(e.key===` `){e.preventDefault(),t.stopDrag({reason:`DROP`});return}if(e.key===`Escape`){e.preventDefault(),t.stopDrag({reason:`CANCEL`});return}(i=(o=$h[d])[e.key])==null||i.call(o,e,{dragController:t,droppableRegistry:n,contextId:r})}}}].concat(Rm(p))))},[r,t,n,i])}}var tg=function(e){return function(t){return e===t}},ng=tg(`scroll`),rg=tg(`auto`),ig=function(e,t){return t(e.overflowX)||t(e.overflowY)},ag=function(e){var t=window.getComputedStyle(e),n={overflowX:t.overflowX,overflowY:t.overflowY};return ig(n,ng)||ig(n,rg)},og=function(e){return!e||e===document.body||e===document.documentElement?null:ag(e)?e:og(e.parentElement)},sg=function(e){var t=e.top,n=e.right,r=e.bottom,i=e.left;return{top:t,right:n,bottom:r,left:i,width:n-i,height:r-t,x:i,y:t,center:{x:(n+i)/2,y:(r+t)/2}}},cg=function(e){var t=e.closestScrollable,n=t.getBoundingClientRect(),r={x:t.scrollLeft,y:t.scrollTop};return{container:sg(n),scroll:{current:r,max:{x:t.scrollWidth-t.clientWidth,y:t.scrollHeight-t.clientHeight}}}},lg={x:0,y:0},ug=function(e){return function(t){return{x:e(t.x),y:e(t.y)}}},dg=function(e,t){return e.x===t.x&&e.y===t.y},fg=function(e,t){return{x:e.x+t.x,y:e.y+t.y}},pg=function(e,t){return{x:e.x-t.x,y:e.y-t.y}},mg=ug(function(e){return e===0?0:e>0?1:-1}),hg=function(){var e=function(e,t){return e<0?e:e>t?e-t:0};return function(t){var n=t.current,r=t.max,i=t.change,a=fg(n,i),o={x:e(a.x,r.x),y:e(a.y,r.y)};return dg(o,lg)?null:o}}(),gg=function(e){var t=e.max,n=e.current,r=e.change,i={x:Math.max(n.x,t.x),y:Math.max(n.y,t.y)},a=mg(r),o=hg({max:i,current:n,change:a});return!o||a.x!==0&&o.x===0||a.y!==0&&o.y===0},_g=function(e,t){return gg({current:e.scroll.current,max:e.scroll.max,change:t})},vg=function(e,t){return gg({current:e.scroll.current,max:e.scroll.max,change:t})},yg={direction:`vertical`,start:`top`,end:`bottom`,size:`height`,scrollAxis:`scrollTop`},bg={direction:`horizontal`,start:`left`,end:`right`,size:`width`,scrollAxis:`scrollLeft`};bg.direction,yg.direction;var xg={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return e**2},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},Sg=function(e,t){return{startScrollingFrom:e[t.size]*xg.startFromPercentage,maxScrollValueAt:e[t.size]*xg.maxScrollAtPercentage}},Cg=function(e){var t=e.startOfRange,n=e.endOfRange,r=e.current,i=n-t;return i===0?0:(r-t)/i},wg=xg.durationDampening.accelerateAt,Tg=xg.durationDampening.stopDampeningAt,Eg=function(e,t){var n=t,r=Tg,i=Date.now()-n;if(i>=Tg)return e;if(i<wg)return 1;var a=Cg({startOfRange:wg,endOfRange:r,current:i}),o=e*xg.ease(a);return Math.ceil(o)},Dg=function(e,t){if(e>t.startScrollingFrom)return 0;if(e<=t.maxScrollValueAt)return xg.maxPixelScroll;if(e===t.startScrollingFrom)return 1;var n=1-Cg({startOfRange:t.maxScrollValueAt,endOfRange:t.startScrollingFrom,current:e}),r=xg.maxPixelScroll*xg.ease(n);return Math.ceil(r)},Og=function(e){var t=e.distanceToEdge,n=e.thresholds,r=e.dragStartTime,i=e.shouldUseTimeDampening,a=Dg(t,n);return a===0?0:i?Math.max(Eg(a,r),1):a},kg=(function(e){var t=e.container,n=e.distanceToEdges,r=e.dragStartTime,i=e.axis,a=e.shouldUseTimeDampening,o=Sg(t,i);return n[i.end]<n[i.start]?Og({distanceToEdge:n[i.end],thresholds:o,dragStartTime:r,shouldUseTimeDampening:a}):-1*Og({distanceToEdge:n[i.start],thresholds:o,dragStartTime:r,shouldUseTimeDampening:a})}),Ag=ug(function(e){return e===0?0:e}),jg=(function(e){var t=e.dragStartTime,n=e.container,r=e.center,i=e.shouldUseTimeDampening,a={top:r.y-n.top,right:n.right-r.x,bottom:n.bottom-r.y,left:r.x-n.left},o=kg({container:n,distanceToEdges:a,dragStartTime:t,axis:yg,shouldUseTimeDampening:i}),s=Ag({x:kg({container:n,distanceToEdges:a,dragStartTime:t,axis:bg,shouldUseTimeDampening:i}),y:o});return dg(s,lg)?null:s}),Mg=(function(e){var t=e.scrollable,n=e.center,r=e.dragStartTime,i=e.shouldUseTimeDampening,a=jg({dragStartTime:r,container:t.container,center:n,shouldUseTimeDampening:i});return a&&vg(t,a)?a:null}),Ng=(function(e){var t=e.viewport,n=e.center,r=e.dragStartTime,i=e.shouldUseTimeDampening,a=jg({dragStartTime:r,container:t.container,center:n,shouldUseTimeDampening:i});return a&&_g(t,a)?a:null}),Pg=(function(e){var t=e.scrollHeight,n=e.scrollWidth,r=e.height,i=e.width,a=pg({x:n,y:t},{x:i,y:r});return{x:Math.max(0,a.x),y:Math.max(0,a.y)}}),Fg=(function(){var e=document.documentElement;return Pg({scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,width:e.clientWidth,height:e.clientHeight})}),Ig=(function(){return{x:window.pageXOffset,y:window.pageYOffset}}),Lg=(function(){var e=Ig(),t=Fg(),n=e.y,r=e.x,i=document.documentElement,a=i.clientWidth,o=i.clientHeight;return{container:sg({top:n,left:r,right:r+a,bottom:n+o}),scroll:{current:e,max:t}}}),Rg=function(e){var t=e.input,n=e.dragStartTime,r=e.shouldUseTimeDampening,i=e.scrollElement,a=e.scrollWindow,o=e.behavior,s=function(){var e=Lg(),i=Ng({dragStartTime:n,viewport:e,center:{x:t.clientX+e.scroll.current.x,y:t.clientY+e.scroll.current.y},shouldUseTimeDampening:r});return i?(a(i),!0):!1},c=function(){var e=og(gm({x:t.clientX,y:t.clientY}));if(!e)return!1;var a=Mg({dragStartTime:n,scrollable:cg({closestScrollable:e}),center:{x:t.clientX,y:t.clientY},shouldUseTimeDampening:r});return a?(i(e,a),!0):!1};o===`container-only`&&c(),o===`window-only`&&s(),o===`container-then-window`&&(c()||s()),o===`window-then-container`&&(s()||c())},zg=function(e,t){e.scrollBy(t.x,t.y)},Bg=function(e){window.scrollBy(e.x,e.y)},Vg=function(){var e=null;function t(t){e!=null&&Rg({input:e.latestInput,dragStartTime:e.dragStartTime,shouldUseTimeDampening:e.shouldUseTimeDampening,behavior:e.behavior,scrollElement:t??zg,scrollWindow:t??Bg})}function n(){e&&(e.loopFrameId=requestAnimationFrame(function(){t(),n()}))}var r=function(r){var i=r.input,a=r.behavior,o=a===void 0?`window-then-container`:a;e={dragStartTime:Date.now(),latestInput:i,loopFrameId:null,shouldUseTimeDampening:!1,behavior:o},t(function(){e&&(e.shouldUseTimeDampening=!0)}),n()};function i(t){var n=t.input;e&&(e.latestInput=n)}return{start:r,updateInput:i,stop:function(){e&&=(e.loopFrameId&&cancelAnimationFrame(e.loopFrameId),null)}}}();function Hg(e){e.defaultPrevented||(e.dataTransfer&&(e.dataTransfer.dropEffect=`move`),e.preventDefault())}var Ug=null;function Wg(){Gg(),Ug=(0,xm.bindAll)(window,[{type:`dragover`,listener:Hg},{type:`dragenter`,listener:Hg},{type:`drop`,listener:function(e){e.preventDefault(),Gg()}},{type:`dragend`,listener:Gg}].concat(Rm(Km({onDragEnd:Gg}))),{capture:!1})}function Gg(){var e;(e=Ug)==null||e(),Ug=null}function Kg(){if(window.event?.type===`drop`){var e;(e=window.event)==null||e.preventDefault()}Gg()}var qg={start:Wg,stop:Kg};function Jg(e){var t=e.dragController,n=e.contextId,r=(0,S.useCallback)(function(e){t.updateDrag({targetLocation:om(e.current)})},[t]);(0,S.useEffect)(function(){return Mh({canMonitor:function(e){var t=e.initial,r=e.source;if(!Xp(r.data)||r.data.contextId!==n)return!1;var i=t.dropTargets.find(function(e){return $p(e.data)});return!i||i.data.contextId===n},onDragStart:function(e){var n=e.location,r=e.source;Vg.start({input:n.current.input}),qg.start();var i=r.data;xp(Xp(i));var a=i.draggableId,o=i.droppableId,s=i.getIndex,c=i.type;t.startDrag({draggableId:a,type:c,getSourceLocation:function(){return{droppableId:o,index:s()}},sourceElement:r.element,mode:`FLUID`})},onDrag:function(e){var t=e.location;Vg.updateInput({input:t.current.input}),r(t)},onDropTargetChange:function(e){var t=e.location;r(t)},onDrop:function(){Vg.stop(),qg.stop(),t.stopDrag({reason:`DROP`})}})},[t,n,r])}var Yg=typeof window<`u`?S.useLayoutEffect:S.useEffect,Xg=`data-rbd-style-context-id`;function Zg(e){var t=e.selector,n=e.styles;return`${t} { ${Object.entries(n).map(function(e){var t=tp(e,2);return`${t[0]}: ${t[1]};`}).join(` `)} }`}function Qg(e){return Zg({selector:`[${Ap.dragHandle.contextId}="${e}"]`,styles:{cursor:`grab`,"-webkit-touch-callout":`none`}})}function $g(e){var t=e.contextId,n=e.nonce,r=document.createElement(`style`);return n&&r.setAttribute(`nonce`,n),r.setAttribute(Xg,t),document.head.appendChild(r),r}function e_(e){var t=e.contextId,n=e.nonce,r=$g({contextId:t,nonce:n});return r.textContent=Qg(t),function(){r.remove()}}function t_(e){var t=e.contextId,n=e.nonce;Yg(function(){return e_({contextId:t,nonce:n})},[t,n])}var n_=function(){return typeof sr.unstable_batchedUpdates==`function`&&(sr.version===void 0||sr.version.startsWith(`16`))?sr.unstable_batchedUpdates:function(e){return e()}}();function r_(e){n_(e)}function i_(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=a_(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function a_(e,t){if(e){if(typeof e==`string`)return o_(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o_(e,t):void 0}}function o_(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function s_(){return{onPendingDragStart:[],onPrePendingDragUpdate:[],onPendingDragUpdate:[],onBeforeDragEnd:[]}}function c_(){var e=s_();return{addResponder:function(t,n){return e[t].push(n),function(){e[t]=e[t].filter(function(e){return e!==n})}},dispatch:function(t,n){r_(function(){var r=i_(e[t]),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;a(n)}}catch(e){r.e(e)}finally{r.f()}})}}}function l_(){return tp((0,S.useState)(c_),1)[0]}var u_=(0,S.createContext)(null);function d_(e){var t=e.children,n=e.lifecycle,r=(0,S.useCallback)(function(e){for(var t=[],r=0,i=Object.entries(e);r<i.length;r++){var a=i[r],o=tp(a,2),s=o[0],c=o[1];t.push(n.addResponder(s,c))}return pm.apply(void 0,t)},[n]);return S.createElement(u_.Provider,{value:r},t)}function f_(){var e=(0,S.useContext)(u_);return xp(e!==null,`useLifecycle() should only be called inside of a <DragDropContext />`),e}var p_=null,m_=`1px`,h_={width:m_,height:m_,padding:`0`,position:`absolute`,border:`0`,clip:`rect(${m_}, ${m_}, ${m_}, ${m_})`,overflow:`hidden`,whiteSpace:`nowrap`,marginTop:`-${m_}`,pointerEvents:`none`};function g_(){var e=document.createElement(`div`);return e.setAttribute(`role`,`alert`),Object.assign(e.style,h_),document.body.append(e),e}function __(){return p_===null&&(p_=g_()),p_}function v_(e){var t=__();t.textContent=e}function y_(e){return e.index+1}var b_={onDragStart:function(e){var t=e.source;return`You have lifted an item in position ${y_(t)}.`},onDragUpdate:function(e){var t=e.source,n=e.destination;if(!n)return`You are currently not dragging over a droppable area.`;var r=y_(t),i=y_(n);return t.droppableId===n.droppableId?`You have moved the item from position ${r} to position ${i}.`:`You have moved the item from position ${r} in list ${t.droppableId} to list ${n.droppableId} in position ${i}.`},onDragEnd:function(e){var t=e.source,n=e.destination,r=e.reason,i=y_(t);if(r===`CANCEL`)return`Movement cancelled. The item has returned to its starting position of ${i}.`;if(!n)return`The item has been dropped while not over a droppable location. The item has returned to its starting position of ${i}.`;var a=y_(n);return t.droppableId===n.droppableId?`You have dropped the item. It has moved from position ${i} to ${a}.`:`You have dropped the item. It has moved from position ${i} in list ${t.droppableId} to position ${a} in list ${n.droppableId}.`}};function x_(e,t){return b_[e](t)}function S_(e,t){var n=null,r={announce:function(e){n=e}};function i(){return n??x_(e,t)}return{provided:r,getMessage:i}}var C_=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,w_={status:`idle`};function T_(){var e=w_,t=function(t){e.status===`idle`&&(e={status:`pending`,timeoutId:setTimeout(n,0),items:[]}),e.items.push(t)},n=function(){if(e.status!==`idle`){clearTimeout(e.timeoutId);var t=Array.from(e.items);e=w_,r_(function(){t.forEach(function(e){return e()})})}};return{schedule:t,flush:n}}function E_(){return tp((0,S.useState)(T_),1)[0]}var D_=0;function O_(){return`${D_++}`}function k_(e){var t=Bp(e);return{top:t.offsetTop,left:t.offsetLeft}}function A_(e){var t=e.children,n=e.dragHandleUsageInstructions,r=n===void 0?C_:n,i=e.nonce,a=e.onBeforeCapture,o=e.onBeforeDragStart,s=e.onDragStart,c=e.onDragUpdate,l=e.onDragEnd,u=tp((0,S.useState)(O_),1)[0];Hh({contextId:u,text:r});var d=l_(),f=E_(),p=f.schedule,m=f.flush,h=(0,S.useRef)({isDragging:!1}),g=(0,S.useCallback)(function(){return h.current},[]),_=lm(),v=(0,S.useCallback)(function(e){for(var t=e.droppableId,n=_.getEntry({droppableId:t});n!==null&&n.isDropDisabled;){var r=n.parentDroppableId;n=r?_.getEntry({droppableId:r}):null}return n===null?null:{droppableId:n.droppableId,index:0}},[_]);(0,S.useEffect)(function(){return function(){g().isDragging&&Vp()}},[g]);var y=(0,S.useCallback)(function(e){var t=e.targetLocation,n=e.isImmediate,r=n!==void 0&&n;if(!h.current.isDragging)return;var i=h.current,a=i.prevDestination,o=i.draggableId,s=i.type,l=i.sourceLocation,u=Bh({start:l,target:t});if(sm(a,u))return;Object.assign(h.current,{prevDestination:u,sourceLocation:l,targetLocation:t});var f={mode:h.current.mode,draggableId:o,type:s,source:l,destination:u,combine:null},m=t?_.getEntry({droppableId:t.droppableId}):null;d.dispatch(`onPrePendingDragUpdate`,{update:f,targetLocation:t}),d.dispatch(`onPendingDragUpdate`,{update:f,targetLocation:t,droppable:m});function g(){var e=S_(`onDragUpdate`,f),t=e.provided,n=e.getMessage;c?.(f,t),v_(n())}r?g():p(g)},[_,d,c,p]),b=(0,S.useCallback)(function(e){var t=e.draggableId,n=e.type,r=e.getSourceLocation,i=e.sourceElement,c=e.mode;if(!h.current.isDragging){a?.({draggableId:t,mode:c});var l={mode:c,draggableId:t,type:n,source:r()},u=document.activeElement,f=u instanceof HTMLElement&&u.hasAttribute(Ap.dragHandle.draggableId)?Mp(u,Ap.dragHandle.draggableId):null,m=l.source.droppableId,g=_.getEntry({droppableId:m});xp(g,`should have entry for droppable '${m}'`),h.current={isDragging:!0,mode:c,draggableDimensions:Tp(i),restoreFocusTo:f,draggableId:t,type:n,prevDestination:l.source,sourceLocation:l.source,targetLocation:l.source,draggableInitialOffsetInSourceDroppable:k_({element:i,mode:g.mode})},o?.(l),d.dispatch(`onPendingDragStart`,{start:l,droppable:g}),p(function(){var e={mode:c,draggableId:t,type:n,source:r()},i=S_(`onDragStart`,e),a=i.provided,o=i.getMessage;s?.(e,a),v_(o()),p(function(){var t=e.source.droppableId,n=_.getEntry({droppableId:t});n!=null&&n.isDropDisabled&&y({targetLocation:v({droppableId:t}),isImmediate:!0})})})}},[_,v,d,a,o,s,p,y]),x=kp(),C=(0,S.useCallback)(function(e){var t=e.reason;if(h.current.isDragging){x.runCleanupFn(),t===`CANCEL`&&y({targetLocation:null});var n=h.current,r=n.mode,i=n.restoreFocusTo,a=n.sourceLocation,o=n.targetLocation,s=n.type,c=n.draggableId;h.current={isDragging:!1},m();var f=Bh({start:a,target:o}),p={reason:f===null?`CANCEL`:`DROP`,type:s,source:a,destination:f,mode:r,draggableId:c,combine:null};d.dispatch(`onBeforeDragEnd`,{draggableId:c});var g=S_(`onDragEnd`,p),_=g.provided,v=g.getMessage;l(p,_),v_(v()),i&&requestAnimationFrame(function(){var e=Rp({contextId:u,draggableId:c});e&&e.focus()})}},[u,m,x,d,l,y]),w=(0,S.useMemo)(function(){return{getDragState:g,startDrag:b,updateDrag:y,stopDrag:C}},[g,b,C,y]);Jg({dragController:w,contextId:u});var T=eg({dragController:w,droppableRegistry:_,contextId:u,setKeyboardCleanupFn:x.setCleanupFn}).startKeyboardDrag,E=(0,S.useCallback)(function(e){var t=h.current;t.isDragging&&e.isDropDisabled&&e.droppableId===t.targetLocation?.droppableId&&y({targetLocation:v({droppableId:e.droppableId})})},[v,y]);return _.setUpdateListener(E),t_({contextId:u,nonce:i}),S.createElement(Lh,{contextId:u,dragController:w},S.createElement(d_,{lifecycle:d},S.createElement(wp,{contextId:u,getDragState:g,startKeyboardDrag:T,droppableRegistry:_},t)))}var j_=function(){if(typeof window>`u`)return null;var e=new Image;return e.src=`data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`,e}();function M_(e){var t=e.nativeSetDragImage;t&&j_&&t(j_,0,0)}var N_=(0,S.createContext)(null),P_=N_.Provider;function F_(){var e=(0,S.useContext)(N_);return xp(e,`Missing <Droppable /> parent`),e}function I_(){var e=(0,S.useContext)(N_);return e?e.droppableId:null}function L_(e){var t=e.elementRef,n=e.data,r=e.direction,i=e.contextId,a=e.isDropDisabled,o=e.type;(0,S.useEffect)(function(){var e=t.current;return xp(e instanceof HTMLElement),jh({element:e,getIsSticky:function(){return!0},canDrop:function(e){var t=e.source;return!Xp(t.data)||a?!1:t.data.type===o&&t.data.contextId===i},getData:function(t){var i=t.input;return qp(n,{element:e,input:i,allowedEdges:r===`vertical`?[`top`,`bottom`]:[`left`,`right`]})}})},[n,r,i,a,o,t])}function R_(){return{startKeyboardDrag:Cp().startKeyboardDrag}}function z_(){return Fp({attribute:jp.dropIndicator})}function B_(e){return Fp({attribute:Ap.placeholder.contextId,value:e})}function V_(e){var t=(0,S.useRef)(e);return(0,S.useEffect)(function(){t.current=e},[e]),(0,S.useCallback)(function(){return t.current},[])}var H_={dragging:5e3};function U_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?U_(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var G_={transform:void 0,transition:void 0},K_={position:`fixed`,top:0,left:0,boxSizing:`border-box`,transition:`none`,zIndex:H_.dragging,opacity:.75,pointerEvents:`none`};function q_(e){var t=e.draggableDimensions,n=e.previewOffset,r=t.rect,i=r.left+n.x,a=r.top+n.y,o=i===0&&a===0;return W_(W_({},K_),{},{transform:o?void 0:`translate(${i}px, ${a}px)`,width:r.width,height:r.height})}function J_(e){var t=e.draggableDimensions,n=e.draggableState;return n.type!==`dragging`||!n.previewOffset||!t?G_:q_({draggableDimensions:t,previewOffset:n.previewOffset})}var Y_={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function X_(e,t){if(t==null)return!1;if(Y_[t.tagName.toLowerCase()])return!0;var n=t.getAttribute(`contenteditable`);return n===`true`||n===``||t!==e&&X_(e,t.parentElement)}function Z_(e,t){var n=t.target;return n instanceof HTMLElement&&X_(e,n)}function Q_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Q_(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ev=(0,S.memo)((0,S.forwardRef)(function(e,t){var n=e.style,r=Ep(),i=Cp().contextId,a=Z({},Ap.placeholder.contextId,i),o=(0,S.useMemo)(function(){if(r){var e=r.margin,t=r.rect;return $_({boxSizing:`border-box`,width:t.width,height:t.height,margin:e},n)}},[r,n]);return S.createElement(`div`,Dt({ref:t,style:o},a))})),tv={vertical:{mainAxis:{name:`y`,offset:`offsetTop`,length:`offsetHeight`,scrollOffset:`scrollTop`,forwardEdge:`bottom`,overflow:`overflowY`,style:{length:`height`,transform:`translateY`}},crossAxis:{name:`x`,offset:`offsetLeft`,length:`offsetWidth`,style:{length:`width`,offset:`left`}}},horizontal:{mainAxis:{name:`x`,offset:`offsetLeft`,length:`offsetWidth`,scrollOffset:`scrollLeft`,forwardEdge:`right`,overflow:`overflowX`,style:{length:`width`,transform:`translateX`}},crossAxis:{name:`y`,offset:`offsetTop`,length:`offsetHeight`,style:{length:`height`,offset:`top`}}}};function nv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function rv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?nv(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nv(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var iv={type:`idle`,draggingOver:null};function av(e){return{type:`hiding`,draggingOver:null,mode:e}}var ov={initial:function(e){var t=tv[e.direction],n=t.mainAxis,r=t.crossAxis;return Z(Z({},n.name,0),r.name,24)},home:function(e){var t=e.droppable.direction,n=e.placeholderRect,r=e.draggableDimensions;xp(n,`the placeholder should exist if in home position`);var i={x:n.x-r.rect.x,y:n.y-r.rect.y},a=tv[t],o=a.mainAxis,s=a.crossAxis;return Z(Z({},o.name,i[o.name]),s.name,i[s.name]+24)},away:function(e){var t=e.droppable.direction,n=e.dropIndicatorRect,r=e.draggableDimensions;xp(n,`the drop indicator should exist if in away position`);var i={x:n.x-r.rect.x,y:n.y-r.rect.y},a=tv[t],o=a.mainAxis,s=a.crossAxis;return Z(Z({},o.name,i[o.name]-.5*r.rect[o.style.length]),s.name,i[s.name]+24)}};function sv(e,t){var n=t.update,r=t.droppable,i=t.draggableDimensions,a=t.placeholderRect,o=t.dropIndicatorRect;if(!r||!i)return e;var s={droppable:r,draggableDimensions:i,placeholderRect:a,dropIndicatorRect:o},c=sm(n.source,n.destination??null)?ov.home(s):ov.away(s);return c?rv(rv({},e),{},{previewOffset:c}):e}function cv(e,t){var n=t.start,r=t.previewOffset;return xp(e.type===`idle`,`The draggable is idle.`),{type:`dragging`,draggingOver:n.source.droppableId,location:null,start:n.source,draggableId:n.draggableId,mode:n.mode,previewOffset:r}}function lv(e,t){if(t.type===`START_POINTER_DRAG`)return cv(e,rv(rv({},t.payload),{},{previewOffset:{x:0,y:0}}));if(t.type===`START_KEYBOARD_DRAG`){var n=t.payload,r=n.draggableDimensions,i=n.droppable;return cv(e,rv(rv({},t.payload),{},{previewOffset:ov.initial({draggableDimensions:r,direction:i.direction})}))}if(t.type===`UPDATE_DRAG`){xp(e.type===`dragging`,`The draggable is dragging.`);var a=t.payload.update,o=a.destination?a.destination.droppableId:null;return o===e.draggingOver?e:rv(rv({},e),{},{draggingOver:o})}if(t.type===`UPDATE_POINTER_PREVIEW`){xp(e.type===`dragging`,`The draggable is dragging.`);var s=t.payload.pointerLocation;return rv(rv({},e),{},{previewOffset:{x:s.current.input.clientX-s.initial.input.clientX,y:s.current.input.clientY-s.initial.input.clientY}})}return t.type===`UPDATE_KEYBOARD_PREVIEW`?(xp(e.type===`dragging`,`The draggable is dragging.`),e.type===`dragging`?sv(e,t.payload):e):t.type===`DROP`?(xp(e.type===`dragging`,`The draggable is dragging.`),iv):t.type===`START_HIDING`?(xp(e.type===`idle`||e.type===`hiding`),av(t.payload.mode)):t.type===`STOP_HIDING`?(xp(e.type===`hiding`),iv):e}function uv(e){var t=e.draggingOver,n=e.isClone,r=e.isDragging,i=e.mode;return(0,S.useMemo)(function(){return{isClone:n,isDragging:r,draggingOver:t,mode:i,isDropAnimating:!1,dropAnimation:null,combineWith:null,combineTargetFor:null}},[t,n,r,i])}var dv=function(){};function fv(e){var t=e.children,n=e.draggableId,r=e.index,i=e.isDragDisabled,a=i!==void 0&&i,o=e.disableInteractiveElementBlocking,s=o!==void 0&&o,c=F_(),l=c.direction,u=c.droppableId,d=c.type,f=c.mode,p=Cp(),m=p.contextId,h=p.getDragState,g=(0,S.useRef)(null),_=(0,S.useRef)(null),v=kp(),y=v.setCleanupFn,b=v.runCleanupFn,x=(0,S.useCallback)(function(e){g.current&&b(),e&&y(Np(e,Z(Z({},jp.draggable.droppableId,u),jp.draggable.index,String(r)))),g.current=e,_.current=Rp({contextId:m,draggableId:n})},[m,n,u,r,b,y]),C=V_(r),w=tp((0,S.useReducer)(lv,iv),2),T=w[0],E=w[1],D=Zp({draggableId:n,droppableId:u,getIndex:C,contextId:m,type:d}),O=T.type===`dragging`,k=T.type===`hiding`,A=F_(),j=A.shouldRenderCloneWhileDragging,M=A.isDropDisabled,N=f_(),P=R_().startKeyboardDrag;(0,S.useEffect)(function(){if(T.type===`idle`&&!a){var e=g.current;Mt(e instanceof HTMLElement);var t=_.current;return Mt(t instanceof HTMLElement),(0,xm.bindAll)(t,[{type:`keydown`,listener:function(t){if(t.key===` `){if(t.defaultPrevented||!s&&Z_(e,t))return;t.preventDefault(),P({event:t,draggableId:n,type:d,getSourceLocation:function(){return{droppableId:u,index:C()}},sourceElement:e})}}}])}},[s,n,u,C,a,P,T.type,d]),(0,S.useEffect)(function(){if(!k&&!a){var e=g.current;xp(e instanceof HTMLElement);var t=_.current;return xp(t instanceof HTMLElement),Nh({canDrag:function(e){var n=e.input;return n.ctrlKey||n.metaKey||n.shiftKey||n.altKey?!1:s?!O:!X_(t,gm({x:n.clientX,y:n.clientY}))},element:e,dragHandle:t,getInitialData:function(){return D},onGenerateDragPreview:M_})}},[D,s,a,O,k]);var F=T.type!==`idle`&&f===`standard`,ee=(0,S.useRef)(null);L_({elementRef:F?ee:g,data:D,direction:l,contextId:m,isDropDisabled:M,type:d});var I=(0,S.useRef)(!0);(0,S.useEffect)(function(){return I.current=!0,function(){I.current=!1}},[]),(0,S.useEffect)(function(){var e=h();j&&e.isDragging&&e.draggableId===D.draggableId&&E({type:`START_HIDING`,payload:{mode:e.mode}})},[D.draggableId,h,j]);var L=Ep();(0,S.useEffect)(function(){return j?N({onPendingDragStart:function(e){var t=e.start;D.draggableId===t.draggableId&&E({type:`START_HIDING`,payload:{mode:t.mode}})},onBeforeDragEnd:function(e){e.draggableId===D.draggableId&&E({type:`STOP_HIDING`})}}):pm(N({onPendingDragStart:function(e){var t=e.start,n=e.droppable;if(D.draggableId===t.draggableId){if(t.mode===`FLUID`)return E({type:`START_POINTER_DRAG`,payload:{start:t}});if(t.mode===`SNAP`){var r=h();return xp(r.isDragging&&r.draggableDimensions),E({type:`START_KEYBOARD_DRAG`,payload:{start:t,draggableDimensions:r.draggableDimensions,droppable:n}})}}},onPendingDragUpdate:function(e){var t=e.update,n=e.droppable;D.draggableId===t.draggableId&&(E({type:`UPDATE_DRAG`,payload:{update:t}}),t.mode===`SNAP`&&queueMicrotask(function(){if(h().isDragging){var e=B_(m),r=e?e.getBoundingClientRect():null,i=z_();E({type:`UPDATE_KEYBOARD_PREVIEW`,payload:{update:t,draggableDimensions:L,droppable:n,placeholderRect:r,dropIndicatorRect:i?i.getBoundingClientRect():null}})}}))},onBeforeDragEnd:function(e){e.draggableId===D.draggableId&&(xp(I.current,`isMounted onBeforeDragEnd`),E({type:`DROP`}))}}),Mh({canMonitor:function(e){var t=e.source;return Xp(t.data)?t.data.contextId===D.contextId&&t.data.draggableId===D.draggableId:!1},onDrag:function(e){var t=e.location;E({type:`UPDATE_POINTER_PREVIEW`,payload:{pointerLocation:t}})}}))},[D.draggableId,D.contextId,N,j,l,m,L,h]);var R=(0,S.useMemo)(function(){return{draggableProps:Z(Z(Z({},Ap.draggable.contextId,m),Ap.draggable.id,n),`style`,J_({draggableDimensions:L,draggableState:T})),dragHandleProps:Z(Z(Z(Z(Z({role:`button`,"aria-describedby":Vh(m)},Ap.dragHandle.contextId,m),Ap.dragHandle.draggableId,n),`tabIndex`,0),`draggable`,!1),`onDragStart`,dv),innerRef:x}},[m,n,L,T,x]),z=uv({draggingOver:T.draggingOver,isClone:!1,isDragging:O,mode:O?T.mode:null}),B=(0,S.useMemo)(function(){return{draggableId:n,type:d,source:{droppableId:u,index:r}}},[n,u,r,d]);return S.createElement(S.Fragment,null,k?null:t(R,z,B),F&&S.createElement(ev,{ref:ee}))}function pv(){return document.body}function mv(e){var t=e.children,n=e.droppableId,r=e.type,i=e.draggableId,a=e.index,o=e.draggingOver,s=e.style,c=e.getContainerForClone,l=c===void 0?pv:c,u=e.mode,d=Cp().contextId,f=(0,S.useCallback)(function(e){e&&Rp({contextId:d,draggableId:i})?.focus()},[d,i]),p=(0,S.useMemo)(function(){return{innerRef:f,draggableProps:Z(Z(Z({},Ap.draggable.contextId,d),Ap.draggable.id,i),`style`,s),dragHandleProps:Z(Z(Z(Z(Z({role:`button`,"aria-describedby":Vh(d)},Ap.dragHandle.contextId,d),Ap.dragHandle.draggableId,i),`tabIndex`,0),`draggable`,!1),`onDragStart`,function(){})}},[d,i,f,s]),m=uv({draggingOver:o,isClone:!0,isDragging:!0,mode:u}),h=(0,S.useMemo)(function(){return{draggableId:i,type:r,source:{droppableId:n,index:a}}},[i,n,a,r]);return(0,sr.createPortal)(t(p,m,h),l())}function hv(e){var t=e.children,n=e.droppableId,r=e.type,i=e.getContainerForClone,a=Cp(),o=a.contextId,s=a.getDragState,c=Ep(),l=tp((0,S.useReducer)(lv,iv),2),u=l[0],d=l[1],f=f_();if((0,S.useEffect)(function(){return pm(f({onPendingDragStart:function(e){var t=e.start,r=e.droppable;if(n===t.source.droppableId){if(t.mode===`FLUID`)return d({type:`START_POINTER_DRAG`,payload:{start:t}});if(t.mode===`SNAP`){var i=s();return xp(i.isDragging&&i.draggableDimensions),d({type:`START_KEYBOARD_DRAG`,payload:{start:t,draggableDimensions:i.draggableDimensions,droppable:r}})}}},onPendingDragUpdate:function(e){var t=e.update,n=e.droppable;u.type===`dragging`&&u.draggableId===t.draggableId&&(d({type:`UPDATE_DRAG`,payload:{update:t}}),t.mode===`SNAP`&&queueMicrotask(function(){if(s().isDragging){var e=B_(o),r=e?e.getBoundingClientRect():null,i=z_();d({type:`UPDATE_KEYBOARD_PREVIEW`,payload:{update:t,draggableDimensions:c,droppable:n,placeholderRect:r,dropIndicatorRect:i?i.getBoundingClientRect():null}})}}))},onBeforeDragEnd:function(e){var t=e.draggableId;u.type===`dragging`&&t===u.draggableId&&d({type:`DROP`})}}),Mh({canMonitor:function(e){var t=e.source;return Xp(t.data)?t.data.contextId===o&&t.data.droppableId===n:!1},onDrag:function(e){var t=e.location;d({type:`UPDATE_POINTER_PREVIEW`,payload:{pointerLocation:t}})}}))},[n,o,f,u,c,s]),u.type!==`dragging`)return null;var p=J_({draggableDimensions:c,draggableState:u});return S.createElement(mv,{droppableId:n,type:r,draggableId:u.draggableId,index:u.start.index,draggingOver:u.draggingOver,mode:u.mode,style:p,getContainerForClone:i},t)}function gv(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function _v(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}var vv=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(_v(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=gv(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode?.removeChild(e)}),this.tags=[],this.ctr=0},e}(),yv=`-ms-`,bv=`-moz-`,xv=`-webkit-`,Sv=`comm`,Cv=`rule`,wv=`decl`,Tv=`@import`,Ev=`@keyframes`,Dv=`@layer`,Ov=Math.abs,kv=String.fromCharCode,Av=Object.assign;function jv(e,t){return Iv(e,0)^45?(((t<<2^Iv(e,0))<<2^Iv(e,1))<<2^Iv(e,2))<<2^Iv(e,3):0}function Mv(e){return e.trim()}function Nv(e,t){return(e=t.exec(e))?e[0]:e}function Pv(e,t,n){return e.replace(t,n)}function Fv(e,t){return e.indexOf(t)}function Iv(e,t){return e.charCodeAt(t)|0}function Lv(e,t,n){return e.slice(t,n)}function Rv(e){return e.length}function zv(e){return e.length}function Bv(e,t){return t.push(e),e}function Vv(e,t){return e.map(t).join(``)}var Hv=1,Uv=1,Wv=0,Gv=0,Kv=0,qv=``;function Jv(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Hv,column:Uv,length:o,return:``}}function Yv(e,t){return Av(Jv(``,null,null,``,null,null,0),e,{length:-e.length},t)}function Xv(){return Kv}function Zv(){return Kv=Gv>0?Iv(qv,--Gv):0,Uv--,Kv===10&&(Uv=1,Hv--),Kv}function Qv(){return Kv=Gv<Wv?Iv(qv,Gv++):0,Uv++,Kv===10&&(Uv=1,Hv++),Kv}function $v(){return Iv(qv,Gv)}function ey(){return Gv}function ty(e,t){return Lv(qv,e,t)}function ny(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ry(e){return Hv=Uv=1,Wv=Rv(qv=e),Gv=0,[]}function iy(e){return qv=``,e}function ay(e){return Mv(ty(Gv-1,cy(e===91?e+2:e===40?e+1:e)))}function oy(e){for(;(Kv=$v())&&Kv<33;)Qv();return ny(e)>2||ny(Kv)>3?``:` `}function sy(e,t){for(;--t&&Qv()&&!(Kv<48||Kv>102||Kv>57&&Kv<65||Kv>70&&Kv<97););return ty(e,ey()+(t<6&&$v()==32&&Qv()==32))}function cy(e){for(;Qv();)switch(Kv){case e:return Gv;case 34:case 39:e!==34&&e!==39&&cy(Kv);break;case 40:e===41&&cy(e);break;case 92:Qv();break}return Gv}function ly(e,t){for(;Qv()&&e+Kv!==57&&(e+Kv!==84||$v()!==47););return`/*`+ty(t,Gv-1)+`*`+kv(e===47?e:Qv())}function uy(e){for(;!ny($v());)Qv();return ty(e,Gv)}function dy(e){return iy(fy(``,null,null,null,[``],e=ry(e),0,[0],e))}function fy(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=Qv()){case 40:if(m!=108&&Iv(C,d-1)==58){Fv(C+=Pv(ay(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:C+=ay(v);break;case 9:case 10:case 13:case 32:C+=oy(m);break;case 92:C+=sy(ey()-1,7);continue;case 47:switch($v()){case 42:case 47:Bv(my(ly(Qv(),ey()),t,n),c);break;default:C+=`/`}break;case 123*h:s[l++]=Rv(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=Pv(C,/\f/g,``)),p>0&&Rv(C)-d&&Bv(p>32?hy(C+`;`,r,n,d-1):hy(Pv(C,` `,``)+`;`,r,n,d-2),c);break;case 59:C+=`;`;default:if(Bv(S=py(C,t,n,l,u,i,s,y,b=[],x=[],d),a),v===123){if(u===0)fy(C,t,S,S,b,a,d,s,x);else switch(f===99&&Iv(C,3)===110?100:f){case 100:case 108:case 109:case 115:fy(e,S,S,r&&Bv(py(e,S,S,0,0,i,s,y,i,b=[],d),x),i,x,d,s,r?b:x);break;default:fy(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+Rv(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Zv()==125)continue}switch(C+=kv(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(Rv(C)-1)*_,_=1;break;case 64:$v()===45&&(C+=ay(Qv())),f=$v(),u=d=Rv(y=C+=uy(ey())),v++;break;case 45:m===45&&Rv(C)==2&&(h=0)}}return a}function py(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=zv(f),m=0,h=0,g=0;m<r;++m)for(var _=0,v=Lv(e,d+1,d=Ov(h=o[m])),y=e;_<p;++_)(y=Mv(h>0?f[_]+` `+v:Pv(v,/&\f/g,f[_])))&&(c[g++]=y);return Jv(e,t,n,i===0?Cv:s,c,l,u)}function my(e,t,n){return Jv(e,t,n,Sv,kv(Xv()),Lv(e,2,-2),0)}function hy(e,t,n,r){return Jv(e,t,n,wv,Lv(e,0,r),Lv(e,r+1,-1),r)}function gy(e,t){for(var n=``,r=zv(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function _y(e,t,n,r){switch(e.type){case Dv:if(e.children.length)break;case Tv:case wv:return e.return=e.return||e.value;case Sv:return``;case Ev:return e.return=e.value+`{`+gy(e.children,r)+`}`;case Cv:e.value=e.props.join(`,`)}return Rv(n=gy(e.children,r))?e.return=e.value+`{`+n+`}`:``}function vy(e){var t=zv(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function yy(e){return function(t){t.root||(t=t.return)&&e(t)}}var by=function(e,t,n){for(var r=0,i=0;r=i,i=$v(),r===38&&i===12&&(t[n]=1),!ny(i);)Qv();return ty(e,Gv)},xy=function(e,t){var n=-1,r=44;do switch(ny(r)){case 0:r===38&&$v()===12&&(t[n]=1),e[n]+=by(Gv-1,t,n);break;case 2:e[n]+=ay(r);break;case 4:if(r===44){e[++n]=$v()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=kv(r)}while(r=Qv());return e},Sy=function(e,t){return iy(xy(ry(e),t))},Cy=new WeakMap,wy=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Cy.get(n))&&!r){Cy.set(e,!0);for(var i=[],a=Sy(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},Ty=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}};function Ey(e,t){switch(jv(e,t)){case 5103:return xv+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xv+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xv+e+bv+e+yv+e+e;case 6828:case 4268:return xv+e+yv+e+e;case 6165:return xv+e+yv+`flex-`+e+e;case 5187:return xv+e+Pv(e,/(\w+).+(:[^]+)/,xv+`box-$1$2`+yv+`flex-$1$2`)+e;case 5443:return xv+e+yv+`flex-item-`+Pv(e,/flex-|-self/,``)+e;case 4675:return xv+e+yv+`flex-line-pack`+Pv(e,/align-content|flex-|-self/,``)+e;case 5548:return xv+e+yv+Pv(e,`shrink`,`negative`)+e;case 5292:return xv+e+yv+Pv(e,`basis`,`preferred-size`)+e;case 6060:return xv+`box-`+Pv(e,`-grow`,``)+xv+e+yv+Pv(e,`grow`,`positive`)+e;case 4554:return xv+Pv(e,/([^-])(transform)/g,`$1`+xv+`$2`)+e;case 6187:return Pv(Pv(Pv(e,/(zoom-|grab)/,xv+`$1`),/(image-set)/,xv+`$1`),e,``)+e;case 5495:case 3959:return Pv(e,/(image-set\([^]*)/,xv+"$1$`$1");case 4968:return Pv(Pv(e,/(.+:)(flex-)?(.*)/,xv+`box-pack:$3`+yv+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+xv+e+e;case 4095:case 3583:case 4068:case 2532:return Pv(e,/(.+)-inline(.+)/,xv+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rv(e)-1-t>6)switch(Iv(e,t+1)){case 109:if(Iv(e,t+4)!==45)break;case 102:return Pv(e,/(.+:)(.+)-([^]+)/,`$1`+xv+`$2-$3$1`+bv+(Iv(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Fv(e,`stretch`)?Ey(Pv(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(Iv(e,t+1)!==115)break;case 6444:switch(Iv(e,Rv(e)-3-(~Fv(e,`!important`)&&10))){case 107:return Pv(e,`:`,`:`+xv)+e;case 101:return Pv(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+xv+(Iv(e,14)===45?`inline-`:``)+`box$3$1`+xv+`$2$3$1`+yv+`$2box$3`)+e}break;case 5936:switch(Iv(e,t+11)){case 114:return xv+e+yv+Pv(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return xv+e+yv+Pv(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return xv+e+yv+Pv(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return xv+e+yv+e+e}return e}var Dy=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wv:e.return=Ey(e.value,e.length);break;case Ev:return gy([Yv(e,{value:Pv(e.value,`@`,`@`+xv)})],r);case Cv:if(e.length)return Vv(e.props,function(t){switch(Nv(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return gy([Yv(e,{props:[Pv(t,/:(read-\w+)/,`:`+bv+`$1`)]})],r);case`::placeholder`:return gy([Yv(e,{props:[Pv(t,/:(plac\w+)/,`:`+xv+`input-$1`)]}),Yv(e,{props:[Pv(t,/:(plac\w+)/,`:`+bv+`$1`)]}),Yv(e,{props:[Pv(t,/:(plac\w+)/,yv+`input-$1`)]})],r)}return``})}}],Oy=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||Dy,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[wy,Ty],l,u=[_y,yy(function(e){l.insert(e)})],d=vy(c.concat(r,u)),f=function(e){return gy(dy(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new vv({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p};function ky(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?n&&(r+=n+` `):t.push(e[n]+`;`)}),r}var Ay=function(e,t,n){var r=e.key+`-`+t.name;n===!1&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},jy=function(e,t,n){Ay(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}};function My(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Ny={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Py=/[A-Z]|^ms/g,Fy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Iy=function(e){return e.charCodeAt(1)===45},Ly=function(e){return e!=null&&typeof e!=`boolean`},Ry=O(function(e){return Iy(e)?e:e.replace(Py,`-$&`).toLowerCase()}),zy=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Fy,function(e,t,n){return Uy={name:t,styles:n,next:Uy},t})}return Ny[e]!==1&&!Iy(e)&&typeof t==`number`&&t!==0?t+`px`:t};function By(e,t,n){if(n==null)return``;var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case`boolean`:return``;case`object`:var i=n;if(i.anim===1)return Uy={name:i.name,styles:i.styles,next:Uy},i.name;var a=n;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Uy={name:o.name,styles:o.styles,next:Uy},o=o.next;return a.styles+`;`}return Vy(e,t,n);case`function`:if(e!==void 0){var s=Uy,c=n(e);return Uy=s,By(e,t,c)}}var l=n;if(t==null)return l;var u=t[l];return u===void 0?l:u}function Vy(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=By(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`){var s=o;t!=null&&t[s]!==void 0?r+=a+`{`+t[s]+`}`:Ly(s)&&(r+=Ry(a)+`:`+zy(a,s)+`;`)}else if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var c=0;c<o.length;c++)Ly(o[c])&&(r+=Ry(a)+`:`+zy(a,o[c])+`;`);else{var l=By(e,t,o);switch(a){case`animation`:case`animationName`:r+=Ry(a)+`:`+l+`;`;break;default:r+=a+`{`+l+`}`}}}return r}var Hy=/label:\s*([^\s;{]+)\s*(;|$)/g,Uy;function Wy(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Uy=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=By(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=By(n,t,e[o]),r&&(i+=a[o]);Hy.lastIndex=0;for(var s=``,c;(c=Hy.exec(i))!==null;)s+=`-`+c[1];return{name:My(i)+s,styles:i,next:Uy}}var Gy=function(e){return e()},Ky=S.useInsertionEffect?S.useInsertionEffect:!1,qy=Ky||Gy;Ky||S.useLayoutEffect;var Jy=S.createContext(typeof HTMLElement<`u`?Oy({key:`css`}):null);Jy.Provider;var Yy=function(e){return(0,S.forwardRef)(function(t,n){return e(t,(0,S.useContext)(Jy),n)})},Xy=S.createContext({}),Zy={}.hasOwnProperty,Qy=`__EMOTION_TYPE_PLEASE_DO_NOT_USE__`,$y=function(e,t){var n={};for(var r in t)Zy.call(t,r)&&(n[r]=t[r]);return n[Qy]=e,n},eb=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Ay(t,n,r),qy(function(){return jy(t,n,r)}),null},tb=Yy(function(e,t,n){var r=e.css;typeof r==`string`&&t.registered[r]!==void 0&&(r=t.registered[r]);var i=e[Qy],a=[r],o=``;typeof e.className==`string`?o=ky(t.registered,a,e.className):e.className!=null&&(o=e.className+` `);var s=Wy(a,void 0,S.useContext(Xy));o+=t.key+`-`+s.name;var c={};for(var l in e)Zy.call(e,l)&&l!==`css`&&l!==Qy&&(c[l]=e[l]);return c.className=o,n&&(c.ref=n),S.createElement(S.Fragment,null,S.createElement(eb,{cache:t,serialized:s,isStringTag:typeof i==`string`}),S.createElement(i,c))}),nb=function(e,t){var n=arguments;if(t==null||!Zy.call(t,`css`))return S.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=tb,i[1]=$y(e,t);for(var a=2;a<r;a++)i[a]=n[a];return S.createElement.apply(null,i)};(function(e){var t;t||=e.JSX||={}})(nb||={});function rb(){return Wy([...arguments])}var ib={horizontal:{rect:{start:`left`,end:`right`}},vertical:{rect:{start:`top`,end:`bottom`}}};function ab(e){var t=e.a,n=e.b,r=ib[e.direction].rect;return Math.max(t[r.start],n[r.start])-Math.min(t[r.end],n[r.end])}function ob(e){return Mp(e,jp.draggable.droppableId)}function sb(e){var t=Mp(e,jp.draggable.index),n=parseInt(t);return xp(Number.isInteger(n),`invalid index: '${n}' is not an integer`),n}function cb(e){var t=e.element,n=e.where,r=e.direction,i=e.contextId,a=ob(t),o=sb(t),s=o-1,c=o+1,l=Kh(i,{droppableId:a,index:n===`before`?s:c});if(l===null){var u=getComputedStyle(t),d=u.marginTop,f=u.marginRight,p=u.marginBottom,m=u.marginLeft;return r===`horizontal`?parseFloat(m)+parseFloat(f):parseFloat(d)+parseFloat(p)}return ab({direction:r,a:t.getBoundingClientRect(),b:l.getBoundingClientRect()})}function lb(e){var t=e.element,n=e.where,r=e.direction,i=e.contextId,a=cb({element:t,where:n,direction:r,contextId:i});return n===`before`?-a/2:a/2}function ub(e){var t=e.element,n=e.isForwardEdge,r=e.mode,i=e.direction,a=e.contextId,o=tv[i],s=o.mainAxis,c=o.crossAxis,l=Bp({element:t,mode:r}),u=lb({element:t,where:n?`after`:`before`,direction:i,contextId:a}),d=l[s.offset]-1;return{mainAxis:{offset:(n?d+t[s.length]:d)+u},crossAxis:{offset:l[c.offset],length:l[c.length]}}}function db(e){var t=e.element,n=tv[e.direction],r=n.mainAxis,i=n.crossAxis;return{mainAxis:{offset:t[r.offset]-1+t[r.length]/2},crossAxis:{offset:t[i.offset],length:t[i.length]}}}function fb(e){var t=e.element,n=tv[e.direction].mainAxis,r=Uh(t);return!r||getComputedStyle(r).position!==`static`?0:r[n.offset]}function pb(e){var t=e.droppableId,n=e.direction;return{mainAxis:{offset:fb({element:Lp({attribute:Ap.droppable.id,value:t}),direction:n})},crossAxis:{offset:0,length:`100%`}}}function mb(e){var t=e.targetLocation,n=e.isInHomeLocation,r=e.direction,i=e.mode,a=e.contextId;if(n){var o=B_(a);return o?db({element:o,direction:r}):null}if(t.index===0){var s=Kh(a,t);return s?ub({element:s,isForwardEdge:!1,mode:i,direction:r,contextId:a}):pb({droppableId:t.droppableId,direction:r})}var c=Kh(a,{droppableId:t.droppableId,index:t.index-1});return c?ub({element:c,isForwardEdge:!0,mode:i,direction:r,contextId:a}):null}var hb=4,gb=rb({background:`var(--ds-border-brand, #1868DB)`,scrollMarginTop:hb,scrollMarginBottom:hb+1}),_b=rb({position:`absolute`,top:0,left:0}),vb=rb({opacity:0}),yb={horizontal:rb({width:2,height:`100%`,marginLeft:-2}),vertical:rb({width:`100%`,height:2,marginTop:-2})};function bb(e){var t=e.direction,n=e.dimensions,r=e.indicatorOffset;if(n===null)return{opacity:0};var i=tv[t],a=i.mainAxis,o=i.crossAxis;return Z(Z({transform:`${a.style.transform}(${n.mainAxis.offset-r}px)`},o.style.length,n.crossAxis.length),o.style.offset,n.crossAxis.offset)}var xb=Z({},jp.dropIndicator,``),Sb=function(e){var t=e.direction,n=e.mode,r=Cp(),i=r.contextId,a=r.getDragState,o=(0,S.useRef)(null),s=tp((0,S.useState)(null),2),c=s[0],l=s[1],u=tp((0,S.useState)(!1),2),d=u[0],f=u[1],p=f_(),m=(0,S.useCallback)(function(e){var r=e.targetLocation,a=e.source,o=e.destination;if(!r)return l(null);var s=sm(a,o);return f(s),l(mb({targetLocation:r,isInHomeLocation:s,direction:t,mode:n,contextId:i}))},[i,t,n]);(0,S.useLayoutEffect)(function(){var e=a();if(e.isDragging){var t=e.targetLocation,n=e.sourceLocation;return m({targetLocation:t,destination:Bh({start:n,target:t}),source:n}),p({onPrePendingDragUpdate:function(e){var t=e.update,n=e.targetLocation,r=t.destination,i=r===void 0?null:r,a=t.source;m({targetLocation:n,source:a,destination:i})}})}},[i,t,a,n,p,m]),(0,S.useLayoutEffect)(function(){if(c!==null){var e=a();if(!(!e.isDragging||e.mode!==`SNAP`)){var t=o.current;xp(t instanceof HTMLElement),t.scrollIntoView({block:`nearest`})}}},[c,a]);var h=tv[t].mainAxis,g=bb({direction:t,dimensions:c,indicatorOffset:o.current?o.current[h.offset]:0}),_=n===`virtual`;return nb(`div`,Dt({ref:o,css:[gb,yb[t],_&&_b,d&&vb],style:g},xb))};function Cb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function wb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Cb(Object(n),!0).forEach(function(t){Z(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cb(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Tb={draggingFromThisWith:null,draggingOverWith:null,isDraggingOver:!1};function Eb(e,t){if(t.type===`DRAG_START`){var n=t.payload,r=n.droppableId,i=n.start,a=i.draggableId,o=i.source,s=o.droppableId===r,c=s?a:null,l=o.droppableId===r?a:null;return wb(wb({},e),{},{isDraggingOver:s,draggingFromThisWith:l,draggingOverWith:c})}if(t.type===`DRAG_UPDATE`){var u=t.payload,d=u.droppableId,f=u.update,p=f.destination,m=p===void 0?null:p,h=f.draggableId,g=f.source,_=m?.droppableId===d,v=_?h:null,y=g.droppableId===d?h:null;return wb(wb({},e),{},{isDraggingOver:_,draggingFromThisWith:y,draggingOverWith:v})}return t.type===`DRAG_CLEAR`?Tb:e}function Db(e){var t=e.draggableId,n=e.droppableId,r=e.type,i=e.direction,a=e.isDropDisabled,o=(0,S.useRef)(null),s=Cp(),c=s.contextId,l=s.getDragState,u=l();xp(u.isDragging,`The virtual placeholder should only be rendered during a drag`),L_({elementRef:o,data:Zp({draggableId:t,droppableId:n,getIndex:(0,S.useCallback)(function(){return u.sourceLocation.index},[u.sourceLocation.index]),contextId:c,type:r}),direction:i,contextId:c,isDropDisabled:a,type:r});var d=(0,S.useMemo)(function(){return{position:`absolute`,top:u.draggableInitialOffsetInSourceDroppable.top,left:u.draggableInitialOffsetInSourceDroppable.left,margin:0}},[u.draggableInitialOffsetInSourceDroppable.left,u.draggableInitialOffsetInSourceDroppable.top]);return S.createElement(ev,{ref:o,style:d})}function Ob(e){var t=e.children,n=e.droppableId,r=e.type,i=r===void 0?`DEFAULT`:r,a=e.direction,o=a===void 0?`vertical`:a,s=e.mode,c=s===void 0?`standard`:s,l=e.renderClone,u=e.getContainerForClone,d=e.isDropDisabled,f=d!==void 0&&d,p=V_(f),m=Cp(),h=m.contextId,g=m.droppableRegistry,_=em({contextId:h,droppableId:n,getIsDropDisabled:p}),v=(0,S.useRef)(null),y=(0,S.useCallback)(function(e){e&&Np(e,Z(Z(Z(Z({},jp.droppable.type,i),jp.droppable.direction,o),Ap.droppable.id,n),Ap.droppable.contextId,h)),v.current=e},[h,o,n,i]),b=tp((0,S.useReducer)(Eb,Tb),2),x=b[0],C=b[1],w=x.draggingFromThisWith,T=x.draggingOverWith,E=x.isDraggingOver,D=I_();(0,S.useEffect)(function(){var e=v.current;return Mt(e instanceof HTMLElement,"innerRef must provide an `HTMLElement`"),pm(g.register({droppableId:n,type:i,isDropDisabled:f,parentDroppableId:D,element:e,direction:o,mode:c}),jh({element:e,getData:function(t){var n=t.input;return qp(_,{element:e,input:n,allowedEdges:o===`vertical`?[`top`,`bottom`]:[`left`,`right`]})},canDrop:function(e){var t=e.source;return!Xp(t.data)||f?!1:t.data.contextId===h&&t.data.type===i},onDragLeave:function(){C({type:`DRAG_CLEAR`})}}))},[_,n,h,f,i,g,D,o,c]);var O=f_();(0,S.useEffect)(function(){function e(e){var t=e.type===i,r=e.destination?.droppableId===n;return t&&(!E&&r||E&&!r)}return O({onPendingDragStart:function(t){var r=t.start;e({destination:r.source,type:r.type})&&C({type:`DRAG_START`,payload:{droppableId:n,start:r}})},onPendingDragUpdate:function(t){var r=t.update;e(r)&&C({type:`DRAG_UPDATE`,payload:{droppableId:n,update:r}})},onBeforeDragEnd:function(){C({type:`DRAG_CLEAR`})}})},[n,E,O,i]);var k=(0,S.useMemo)(function(){return E?S.createElement(Sb,{direction:o,mode:c}):null},[o,E,c]),A=(0,S.useMemo)(function(){return{innerRef:y,droppableProps:Z(Z({},Ap.droppable.contextId,h),Ap.droppable.id,n),placeholder:c===`standard`?k:null}},[h,k,n,c,y]),j=(0,S.useMemo)(function(){return{draggingFromThisWith:w,draggingOverWith:T,isDraggingOver:E,isUsingPlaceholder:E}},[w,T,E]),M=v.current,N=E&&c===`virtual`&&M;Yg(function(){if(N&&window.getComputedStyle(M).position===`static`){var e=M.style.position;return M.style.position=`relative`,function(){M.style.position=e}}},[M,N]);var P=!!l,F=(0,S.useMemo)(function(){return{direction:o,droppableId:n,shouldRenderCloneWhileDragging:P,isDropDisabled:f,type:i,mode:c}},[o,n,P,f,i,c]),ee=w&&c===`virtual`&&M;return S.createElement(P_,{value:F},t(A,j),N&&(0,sr.createPortal)(k,M),ee&&(0,sr.createPortal)(S.createElement(Db,{droppableId:n,draggableId:w,type:i,direction:o,isDropDisabled:f}),M),l&&S.createElement(hv,{droppableId:n,type:i,getContainerForClone:u},l))}function kb(e,t){let[n,r]=(0,S.useState)(()=>{try{let n=window.localStorage.getItem(e);if(n===null){let n=t instanceof Function?t():t;return window.localStorage.setItem(e,JSON.stringify(n)),n}return JSON.parse(n)}catch(e){return console.log(e),t instanceof Function?t():t}});return[n,t=>{try{let i=t instanceof Function?t(n):t;r(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(e){console.log(e)}}]}var Ab=(e,t,n,r)=>{try{let i=n.length,a=r.length,o=Math.max(i,a),s=[];for(let i=0;i<o;i++){let a={},o={};+n?.[i]?.[1]<e&&(a={targetCol:n?.[i]?.[0],maxNum:+n?.[i]?.[1],side:`right`,iteration:i+1},s.push(a),e-=n?.[i]?.[1]),+r?.[i]?.[1]<t&&(o={targetCol:r?.[i]?.[0],maxNum:+r?.[i]?.[1],side:`left`,iteration:i+1},s.push(o),t-=r?.[i]?.[1])}return s}catch(e){console.error(e),alert(`There was an error calculating the thin display controller array. Please contact the developer`)}},jb=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_1_6)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M55.5583 36.1111C55.4055 36.1111 55.2555 36.1 55.1 36.0722C53.5861 35.8194 52.5639 34.3889 52.8167 32.875C53.9083 26.3083 59.9555 13.8889 75 13.8889C76.5361 13.8889 77.7778 15.1333 77.7778 16.6667C77.7778 18.2 76.5361 19.4444 75 19.4444C60.8472 19.4444 58.3917 33.2056 58.2944 33.7917C58.0694 35.1472 56.8917 36.1111 55.5583 36.1111ZM44.4417 36.1111C43.1111 36.1111 41.9361 35.1528 41.7055 33.7972C41.6028 33.2139 39.0528 19.4444 25 19.4444C23.4667 19.4444 22.2222 18.2 22.2222 16.6667C22.2222 15.1333 23.4667 13.8889 25 13.8889C40.0444 13.8889 46.0889 26.3083 47.1833 32.875C47.4361 34.3889 46.4139 35.8194 44.9 36.0722C44.7472 36.1 44.5917 36.1111 44.4417 36.1111ZM31.6944 49.7C25.2083 49.7 20.9444 46.9306 20.6833 46.7556C19.4083 45.9056 19.0639 44.1806 19.9139 42.9028C20.7639 41.625 22.4861 41.2778 23.7667 42.1333C24.0417 42.3111 30.9944 46.6778 40.4278 41.9611C41.8028 41.275 43.4694 41.8333 44.1555 43.2028C44.8417 44.575 44.2861 46.2444 42.9139 46.9306C38.7611 49.0028 34.9472 49.7 31.6944 49.7ZM68.3083 49.7C65.0528 49.7 61.2389 49.0028 57.0917 46.9278C55.7194 46.2417 55.1639 44.5722 55.85 43.2C56.5389 41.8278 58.2055 41.2722 59.5778 41.9583C69.0222 46.6806 75.9639 42.3083 76.2555 42.1222C77.5333 41.2944 79.2583 41.65 80.0944 42.925C80.9333 44.2 80.5917 45.9083 79.3222 46.7556C79.0555 46.9306 74.7917 49.7 68.3083 49.7ZM72.225 75C71.3778 75 70.5472 74.6167 70 73.8889C69.9306 73.7944 62.2722 63.8889 50 63.8889C37.7305 63.8889 30.0722 73.7944 29.9944 73.8972C29.0694 75.1139 27.325 75.3556 26.1055 74.4361C24.8833 73.5139 24.6361 71.7806 25.5555 70.5556C25.9305 70.0556 34.8944 58.3333 50 58.3333C65.1055 58.3333 74.0694 70.0583 74.4444 70.5556C75.3667 71.7806 75.1167 73.5222 73.8889 74.4417C73.3889 74.8194 72.8055 75 72.225 75Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M42.7528 55.7778C41.4944 55.2361 40.0333 55.7028 39.3111 56.8611L25.4222 79.0833C24.8889 79.9417 24.8583 81.0194 25.35 81.9028C25.8389 82.7861 26.7667 83.3333 27.7778 83.3333H36.1111C37.3861 83.3333 38.4972 82.4667 38.8055 81.2278L44.3611 59.0056C44.6917 57.6833 44.0111 56.3111 42.7528 55.7778ZM74.5778 79.0833L60.6889 56.8611C59.9611 55.7 58.5028 55.2389 57.25 55.7778C55.9917 56.3111 55.3083 57.6833 55.6417 59.0056L61.1972 81.2278C61.5055 82.4667 62.6139 83.3333 63.8889 83.3333H72.2222C73.2305 83.3333 74.1611 82.7861 74.6528 81.9C75.1417 81.0194 75.1139 79.9389 74.5778 79.0833Z`,fill:`#F5F8FA`}),(0,W.jsx)(`path`,{d:`M88.8389 83.8278C88.8472 83.6611 88.8889 83.5028 88.8889 83.3333C88.8889 78.7333 85.1556 75 80.5556 75C77.7028 75 75.1889 76.4389 73.6861 78.625C72.3806 78.0833 70.9472 77.7778 69.4444 77.7778C63.3083 77.7778 58.3333 82.7528 58.3333 88.8889C58.3333 95.025 63.3083 100 69.4444 100C73.2361 100 76.5778 98.0917 78.5833 95.1917C79.9167 98.025 82.7722 100 86.1111 100C90.7139 100 94.4445 96.2694 94.4445 91.6667C94.4445 88.0222 92.0945 84.9611 88.8389 83.8278ZM30.5556 77.7778C29.05 77.7778 27.6222 78.0833 26.3139 78.625C24.8111 76.4389 22.2972 75 19.4444 75C14.8444 75 11.1111 78.7333 11.1111 83.3333C11.1111 83.5028 11.15 83.6611 11.1611 83.8278C7.90556 84.9611 5.55556 88.0222 5.55556 91.6667C5.55556 96.2694 9.28611 100 13.8889 100C17.2278 100 20.0861 98.025 21.4139 95.1917C23.4222 98.0917 26.7611 100 30.5556 100C36.6917 100 41.6667 95.025 41.6667 88.8889C41.6667 82.7528 36.6917 77.7778 30.5556 77.7778Z`,fill:`#E1E8ED`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_1_6`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),Mb=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_14)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M68.0556 55.5556C71.8909 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8909 36.1111 68.0556 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0556 55.5556Z`,fill:`#664500`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_14`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),Nb=e=>(0,W.jsxs)(`svg`,{width:100,height:100,viewBox:`0 0 100 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsxs)(`g`,{clipPath:`url(#clip0_3_44)`,children:[(0,W.jsx)(`path`,{d:`M50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z`,fill:`#FFCC4D`,stroke:`black`,strokeWidth:5}),(0,W.jsx)(`path`,{d:`M44.4444 47.1056C43.2806 47.1056 42.1972 46.3695 41.8083 45.2056C41.2444 43.5417 38.9806 38.7722 36.1111 38.7722C33.1611 38.7722 30.8667 43.8472 30.4139 45.2056C29.9278 46.6583 28.3639 47.45 26.9 46.9611C25.4444 46.4778 24.6583 44.9028 25.1444 43.4472C25.4917 42.4 28.7667 33.2139 36.1139 33.2139C43.4611 33.2139 46.7333 42.4 47.0833 43.4472C47.5694 44.9028 46.7833 46.4778 45.3278 46.9611C45.0333 47.0611 44.7361 47.1056 44.4444 47.1056ZM72.2222 47.1056C71.0583 47.1056 69.975 46.3695 69.5889 45.2056C69.025 43.5417 66.7583 38.7722 63.8889 38.7722C60.9389 38.7722 58.6417 43.8472 58.1889 45.2056C57.7028 46.6583 56.1444 47.45 54.675 46.9611C53.2222 46.4778 52.4333 44.9028 52.9194 43.4472C53.2667 42.4 56.5417 33.2139 63.8861 33.2139C71.2306 33.2139 74.5056 42.4 74.8528 43.4472C75.3389 44.9028 74.5528 46.4778 73.0972 46.9611C72.8083 47.0611 72.5139 47.1056 72.2222 47.1056ZM75.9306 57.475C75.4361 57.0278 74.6972 57 74.1667 57.3945C74.0583 57.475 63.2722 65.45 50 65.45C36.7611 65.45 25.9389 57.475 25.8333 57.3945C25.3028 57 24.5639 57.0333 24.0694 57.475C23.5778 57.9195 23.4667 58.6528 23.8083 59.2195C24.1667 59.8167 32.7444 73.7833 50 73.7833C67.2556 73.7833 75.8361 59.8167 76.1917 59.2195C76.5333 58.65 76.425 57.9222 75.9306 57.475Z`,fill:`#664500`}),(0,W.jsx)(`path`,{d:`M58.9695 10.9639C58.9695 11.6306 59.0528 12.275 59.1972 12.8972C60.3778 20.2389 68.5417 27.9833 74.3917 30.1111C79.0167 28.4306 85.075 23.2333 87.9972 17.5028C82.1945 10.725 74.6111 5.51945 65.9722 2.60834C61.9945 3.32223 58.9695 6.78056 58.9695 10.9639ZM38.175 80.7722C38.3333 80.1 38.425 79.4 38.425 78.6778C38.425 73.5861 34.2972 69.4583 29.2056 69.4583C26.1139 69.4583 23.3889 70.9833 21.7139 73.3167C20.0417 70.9861 17.3139 69.4583 14.2222 69.4583C10.775 69.4583 7.80278 71.3722 6.22223 74.175C11.2889 83.3278 19.1389 90.7222 28.6333 95.2139C33.1806 91.4611 37.3306 86.0278 38.175 80.7722ZM95.2806 71.2278C94.4972 68.5889 92.0806 66.6528 89.1861 66.6528C87.0445 66.6528 85.1556 67.7083 83.9972 69.325C82.8389 67.7083 80.95 66.6528 78.8083 66.6528C75.2806 66.6528 72.4222 69.5111 72.4222 73.0389C72.4222 73.5389 72.4861 74.0222 72.5945 74.4889C73.4472 79.7806 79.1167 85.3111 83.4528 87.1583C88.3861 82.7139 92.4278 77.3056 95.2806 71.2278Z`,fill:`#FFAC33`}),(0,W.jsx)(`path`,{d:`M93.4028 9.08055C93.4028 4.38055 89.5917 0.57222 84.8945 0.57222C82.0417 0.57222 79.525 1.98055 77.9806 4.13333C76.4361 1.98055 73.9194 0.57222 71.0667 0.57222C66.3667 0.57222 62.5583 4.38055 62.5583 9.08055C62.5583 9.74722 62.6417 10.3917 62.7861 11.0139C63.9695 18.3556 72.1306 26.1 77.9806 28.2278C83.8306 26.1 91.9917 18.3556 93.1722 11.0167C93.3195 10.3917 93.4028 9.74722 93.4028 9.08055ZM33.9111 78.9111C33.9111 73.8195 29.7833 69.6917 24.6917 69.6917C21.6 69.6917 18.875 71.2167 17.2 73.55C15.5278 71.2167 12.8 69.6917 9.70834 69.6917C4.61667 69.6917 0.488892 73.8195 0.488892 78.9111C0.488892 79.6333 0.580558 80.3306 0.736114 81.0056C2.01667 88.9583 10.8583 97.35 17.1972 99.6556C23.5361 97.3528 32.3778 88.9611 33.6583 81.0083C33.8194 80.3306 33.9111 79.6306 33.9111 78.9111ZM99.8556 72.575C99.8556 69.0472 96.9972 66.1889 93.4695 66.1889C91.3278 66.1889 89.4389 67.2444 88.2806 68.8611C87.1222 67.2444 85.2333 66.1889 83.0917 66.1889C79.5639 66.1889 76.7056 69.0472 76.7056 72.575C76.7056 73.075 76.7695 73.5583 76.8778 74.025C77.7639 79.5333 83.8889 85.3472 88.2806 86.9417C92.6695 85.3472 98.7972 79.5333 99.6806 74.025C99.7917 73.5583 99.8556 73.075 99.8556 72.575Z`,fill:`#DD2E44`})]}),(0,W.jsx)(`defs`,{children:(0,W.jsx)(`clipPath`,{id:`clip0_3_44`,children:(0,W.jsx)(`rect`,{width:100,height:100,fill:`white`})})})]}),Pb=e=>e.langObj,Fb=e=>e.configObj,Ib=e=>e.mapObj,Lb=e=>e.statementsObj,Rb=e=>e.columnStatements,zb=e=>e.presortSortedStatementsNumInitial,Bb=e=>e.setPresortFinished,Vb=e=>e.setTriggerPresortFinishedModal,Hb=e=>e.results,Ub=e=>e.setResults,Wb=e=>e.setProgressScoreAdditional,Gb=e=>e.setPosSorted,Kb=e=>e.setNegSorted;function qb(e){let t=q(Pb),n=q(Fb),r=q(Ib),i=q(Lb),a=q(Rb),o=J(zb),s=J(Bb),c=J(Vb),l=J(Hb),u=J(Ub),d=J(Wb),f=J(Gb),p=J(Kb),m=G(K(t.presortStatements))||``,h=G(K(t.presortDisagreement))||``,g=G(K(t.presortAgreement))||``,_=G(K(t.presortNeutral))||``,v=G(K(t.presortOnPageInstructions))||``,y=[(0,W.jsx)(wl,{},`emojiN5`),(0,W.jsx)(jb,{},`emojiN4`),(0,W.jsx)(Cl,{},`emojiN3`),(0,W.jsx)(Sl,{},`emojiN2`),(0,W.jsx)(Wl,{},`emojiN1`),(0,W.jsx)(Mb,{},`emoji0`),(0,W.jsx)(Au,{},`emoji1`),(0,W.jsx)(lu,{},`emoji2`),(0,W.jsx)(uu,{},`emoji3`),(0,W.jsx)(Nb,{},`emoji4`),(0,W.jsx)(du,{},`emoji5`)],b=r.useColLabelEmojiPresort[0];b=b!==!1&&b!==`false`;let[x,C]=(0,S.useState)(o),w=`${e.cardFontSize}px`,T=n.defaultFontColor,E=a.statementList.length,[D,O]=kb(`columns`,{cards:{name:m,items:[...e.statements],id:`cards`},neg:{name:h,items:[],id:`neg`},neutral:{name:_,items:[],id:`neutral`},pos:{name:g,id:`pos`,items:[]}}),k=333,A=111;n.sortDirection===`negative`&&(k=111,A=333);let j=(0,S.useCallback)((e,t,r)=>{if(!e.destination||e.destination.droppableId===`cards`)return;let{source:o,destination:s}=e,c=[...a.statementList],l=e.destination.droppableId,u=e.draggableId;for(let e=0;e<c.length;e++)c[e].id===u&&(l===`neg`&&(c[e].divColor=`isNegativeStatement`,c[e].cardColor=`pinkSortCard`,c[e].pinkChecked=!0,c[e].yellowChecked=!1,c[e].greenChecked=!1,c[e].sortValue=k,c[e].psValue=-2),l===`neutral`&&(c[e].divColor=`isUncertainStatement`,c[e].cardColor=`yellowSortCard`,c[e].pinkChecked=!1,c[e].yellowChecked=!0,c[e].greenChecked=!1,c[e].psValue=0,c[e].sortValue=222),l===`pos`&&(c[e].divColor=`isPositiveStatement`,c[e].cardColor=`greenSortCard`,c[e].pinkChecked=!1,c[e].yellowChecked=!1,c[e].greenChecked=!0,c[e].sortValue=A,c[e].psValue=2));for(let e=0;e<c.length;e++)c[e].listIndex=e+1;if(a.statementList=[...c],localStorage.setItem(`columnStatements`,JSON.stringify(a)),o.droppableId!==s.droppableId)try{let e=t[o.droppableId],a=t[s.droppableId],c=[...e.items],l=[...a.items],[u]=c.splice(o.index,1);a.id===`pos`&&(u.backgroundColor=n.greenCardColor),a.id===`neg`&&(u.backgroundColor=n.pinkCardColor),a.id===`neutral`&&(u.backgroundColor=n.yellowCardColor),l.splice(s.index,0,u),r({...t,[o.droppableId]:{...e,items:c},[s.droppableId]:{...a,items:l}});let f;if(e.id===`cards`){f=i.totalStatements-e.items.length+1,C(f);let t=(f/i.totalStatements*30).toFixed();d(t)}}catch(e){console.log(e)}else try{let e=t[o.droppableId],n=[...e.items],[i]=n.splice(o.index,1);n.splice(s.index,0,i),r({...t,[o.droppableId]:{...e,items:n}})}catch(e){console.log(e)}},[n,a,i,d,A,k]);(0,S.useEffect)(()=>{let e=e=>{let t;if(e.key===`1`||e.key===1)t=`neg`;else if(e.key===`2`||e.key===2)t=`neutral`;else if(e.key===`3`||e.key===3)t=`pos`;else return;if(D.cards.items.length>0){let e={draggableId:D.cards.items[0].id,type:`DEFAULT`,source:{index:0,droppableId:`cards`},reason:`DROP`,mode:`FLUID`,destination:{droppableId:t,index:0},combine:null};j(e,D,O)}};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[j,O,D]),(0,S.useEffect)(()=>{let e=``,t=``,n=``;D.pos.items[0]&&D.pos.items.forEach(t=>{e+=t.statementNum+`,`}),D.neutral.items[0]&&D.neutral.items.forEach(e=>{t+=e.statementNum+`,`}),D.neg.items[0]&&D.neg.items.forEach(e=>{n+=e.statementNum+`,`});let r={...l,npos:D.pos.items.length,posStateNums:e,nneu:D.neutral.items.length,neuStateNums:t,nneg:D.neg.items.length,negStateNums:n};u(r),localStorage.setItem(`resultsPresort`,JSON.stringify(r))},[D]),(0,S.useEffect)(()=>{if(D.cards.items.length===0){s(!0),c(!0);let e=JSON.parse(localStorage.getItem(`columnStatements`));localStorage.setItem(`newCols`,JSON.stringify(e));let t=[],n=[],r=[];if(e!==null){r=[...e.statementList],r.forEach(e=>(e.selected=!1,e.selectedPos=!1,e.selectedNeg=!1,e)),t=r.filter(e=>e.sortValue===A),f(t),localStorage.setItem(`posSorted`,JSON.stringify([...t])),n=r.filter(e=>e.sortValue===k),p(n),localStorage.setItem(`negSorted`,JSON.stringify([...n]));let i=JSON.parse(localStorage.getItem(`sortRightArrays`)),a=JSON.parse(localStorage.getItem(`sortLeftArrays`)),o=t.length,s=n.length,c=Ab(o,s,i,a);localStorage.setItem(`thinDisplayControllerArray`,JSON.stringify(c))}}},[D.cards.items.length,s,c,f,p,A,k]);let M=(e,t)=>{switch(e){case`cards`:return t?`#e6f3ff`:`#f8fafc`;case`neg`:return t?`#fef7f7`:`#fee2e2`;case`neutral`:return t?`#fefdf8`:`#fef3c7`;case`pos`:return t?`#f7fef7`:`#dcfce7`;default:return`#ffffff`}};return(0,W.jsxs)(Zb,{id:`statementsGrid`,children:[(0,W.jsx)(nx,{id:`imageEnlargeInstructionsDiv`,children:(0,W.jsx)(`div`,{children:v})}),(0,W.jsxs)(tx,{id:`completionRatio`,children:[x,`/`,E]}),(0,W.jsxs)(Jb,{id:`negColumnHeader`,children:[(0,W.jsxs)(`div`,{id:`negHeader`,children:[b?(0,W.jsx)(ax,{children:y[+r.presortEmojiNegativeIndex]}):null,D.neg.name,b?(0,W.jsx)(ax,{children:y[+r.presortEmojiNegativeIndex]}):null]}),(0,W.jsx)(ix,{children:(0,W.jsx)(`div`,{children:t.press1})})]}),(0,W.jsxs)(Yb,{id:`neutralColumnHeader`,children:[(0,W.jsxs)(`div`,{id:`neuHeader`,children:[b?(0,W.jsx)(ax,{children:y[+r.presortEmojiNeutralIndex]}):null,D.neutral.name,b?(0,W.jsx)(ax,{children:y[+r.presortEmojiNeutralIndex]}):null]}),(0,W.jsx)(ix,{children:(0,W.jsx)(`div`,{children:t.press2})})]}),(0,W.jsxs)(Xb,{id:`posColumnHeader`,children:[(0,W.jsxs)(`div`,{id:`posHeader`,children:[b?(0,W.jsx)(ax,{children:y[+r.presortEmojiPositiveIndex]}):null,D.pos.name,b?(0,W.jsx)(ax,{children:y[+r.presortEmojiPositiveIndex]}):null]}),(0,W.jsx)(ix,{children:(0,W.jsx)(`div`,{children:t.press3})})]}),(0,W.jsx)(A_,{onDragEnd:e=>j(e,D,O),children:Object.entries(D).map(([e,t])=>(0,W.jsx)(rx,{id:`${e}Div`,className:`${e}Div`,children:(0,W.jsx)(ex,{children:(0,W.jsx)(Ob,{droppableId:e,className:e,children:(n,r)=>(0,W.jsxs)(Qb,{...n.droppableProps,ref:n.innerRef,id:e,className:e,columnType:e,isDraggingOver:r.isDraggingOver,style:{background:M(e,r.isDraggingOver)},children:[t.items.map((e,t)=>{let n=G(`<div>${K(e.statement)}</div>`);return(0,W.jsx)(fv,{id:e.id,draggableId:e.id,index:t,className:`dragObject`,children:(t,r)=>(0,W.jsx)($b,{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,style:{userSelect:`none`,padding:6,margin:`0 0 8px 0`,width:`100%`,height:180,overflow:`hidden`,fontSize:w,filter:r.isDragging?`brightness(0.85)`:`brightness(1.00)`,boxShadow:r.isDragging?`0 8px 16px rgba(0, 0, 0, 0.2)`:`0 2px 4px rgba(0, 0, 0, 0.1)`,backgroundColor:e.backgroundColor,color:T,...t.draggableProps.style},children:n})},e.id)}),n.placeholder]})},e)})},e))})]})}var Jb=U.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  #negHeader {
    display: flex;
    gap: 10px;
    outline: 1px solid #fca5a5;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(135deg, #fecaca, #f87171); */
    background: #fee2e2;
    color: #7f1d1d;
    min-width: 60%;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);
  }
`,Yb=U.div`
  display: flex;
  flex-direction: column;

  align-self: center;
  grid-column-start: 3;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  #neuHeader {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    outline: 1px solid #fbbf24;
    /* background: linear-gradient(135deg, #fde68a, #fbbf24); */
    background: #fef3c7;
    color: #78350f;
    min-width: 60%;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(245, 158, 11, 0.2);
  }
`,Xb=U.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 4;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  #posHeader {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(135deg, #bbf7d0, #34d399); */
    background: #dcfce7;
    color: #064e3b;
    min-width: 60%;
    padding: 8px 12px;
    border-radius: 8px;
    outline: 1px solid #34d399;
    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
  }
`,Zb=U.div`
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 55px;
  display: grid;
  min-height: calc(100vh-100px);
  grid-template-rows: 30vh 85px 58vh;
  grid-template-columns: 0.25fr 1.5fr 1.5fr 1.5fr 0.25fr;
  row-gap: 3px;
  column-gap: 15px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,Qb=U.div`
  padding: 12px;
  width: 100%;
  min-height: 400px;
  border-radius: 12px;
  transition: all 0.2s ease;
  position: relative;

  ${e=>e.columnType===`cards`&&`
    box-shadow: inset 0 0 20px rgba(59, 130, 246, 0.05);
  `}

  ${e=>e.columnType===`neg`&&`
    box-shadow: inset 0 0 20px rgba(239, 68, 68, 0.05);
  `}
  
  ${e=>e.columnType===`neutral`&&`
    box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.05);
  `}
  
  ${e=>e.columnType===`pos`&&`
    box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.05);
  `}
`,$b=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  width: 27.8vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Explicit properties (rather than "all") so only the visual cues we
     actually change ease in/out; layout properties like width/height are
     left alone, and it's slightly cheaper for the browser to animate. */
  transition:
    box-shadow 0.2s ease,
    filter 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`,ex=U.div`
  margin: 4px;
  img {
    max-width: 98%;
    max-height: 98%;
    padding: 0px;
  }
`,tx=U.div`
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 60px;
  font-size: 60px;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,nx=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  margin-bottom: 16px;
  font-size: 16px;
  padding: 10px;
  padding-bottom: 15px;
  width: 100%;
  /* height: 19.8vh; */
  height: 180px;
  /* background: linear-gradient(135deg, #f0f9ff, #e0f2fe); */
  border-radius: 12px;
  // border-left: 4px solid #0ea5e9;
  color: #0c4a6e;
  /* box-shadow: 0 2px 4px rgba(14, 165, 233, 0.1); */
`,rx=U.div`
  margin: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ix=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 2px;
  background-color: #f2f2f2;
  border-radius: 5px;
  font-size: 12px;
  border: 1px solid darkgray;
  width: 150px;
  text-align: center;
  height: 20px;
`,ax=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,ox=e=>e.langObj,sx=e=>e.triggerPresortPreventNavModal,cx=e=>e.setTriggerPresortPreventNavModal,lx=()=>{let e=q(ox),t=J(sx),n=J(cx),r=G(K(e.presortPreventNavModalHead))||``,i=G(K(e.presortPreventNavModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(ux,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(dx,{children:i})]})},ux=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,dx=U.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,fx=e=>e.langObj,px=e=>e.triggerPresortFinishedModal,mx=e=>e.setTriggerPresortFinishedModal,hx=()=>{let e=q(fx),t=J(px),n=J(mx),r=G(K(e.presortFinishedModalHead))||``,i=G(K(e.presortFinishedModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(gx,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(_x,{children:i})]})},gx=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,_x=U.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,vx=e=>e.langObj,yx=e=>e.configObj,bx=e=>e.setCurrentPage,xx=()=>{let e=q(vx),t=q(yx),n=J(bx),r=t.headerBarColor,i=G(K(e.stepCompleteMessage))||``,a=G(K(e.titleBarText))||``;return(0,S.useEffect)(()=>{n(`presort`)},[n]),(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(Sx,{background:r,children:a}),(0,W.jsx)(Cx,{children:(0,W.jsx)(wx,{children:i})})]})},Sx=U.div`
  width: calc(100vw-4px);
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
`,Cx=U.div`
  display: flex;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,wx=U.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vw;
  justify-content: center;
  align-items: center;
  font-size: calc(14px + 1.5vw);
  text-align: center;
  color: black;
`,Tx=e=>e.langObj,Ex=e=>e.configObj,Dx=e=>e.setCurrentPage,Ox=()=>{let e=q(Tx),t=q(Ex),n=J(Dx),r=t.headerBarColor,i=G(K(e.logInFirst)),a=G(K(e.titleBarText));return(0,S.useEffect)(()=>{n(`presort`)},[n]),(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(kx,{background:r,children:a}),(0,W.jsx)(Ax,{children:(0,W.jsx)(jx,{children:i})})]})},kx=U.div`
  width: calc(100vw-4px);
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
`,Ax=U.div`
  display: flex;
  min-height: 800px;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,jx=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 85vw;
  font-size: 1.35em;
  padding: 25px;
  align-self: center;
`,Mx=e=>e.langObj,Nx=e=>e.configObj,Px=e=>e.statementsObj,Fx=e=>e.columnStatements,Ix=e=>e.setPresortFinished,Lx=e=>e.setTriggerPresortFinishedModal,Rx=e=>e.results,zx=e=>e.setResults,Bx=e=>e.setProgressScoreAdditional;function Vx(e){let t=q(Mx),n=q(Nx),r=q(Px),i=q(Fx),a=J(Ix),o=J(Lx),s=J(Rx),c=J(zx),l=J(Bx),u=`24vw`;n.imageFormat===`postSortImageModal43`&&(u=`20vw`);let d=G(K(t.presortStatements))||``,f=G(K(t.presortDisagreement))||``,p=G(K(t.presortAgreement))||``,m=G(K(t.presortNeutral))||``,h=G(K(t.presortImageSortInstructions))||``,[g,_]=kb(`presortSortedCards`,0),[v,y]=(0,S.useState)(!1),[b,x]=(0,S.useState)(``),[C,w]=(0,S.useState)([]),[T,E]=(0,S.useState)(!1),D=e=>{e.detail===2&&(e.shiftKey?(C.push(e.target.src),w(C),C.length===2&&E(!0)):(x(e.target.src),y(!0)))},O=i.imagesList.length,k=`${e.cardFontSize}px`,A=n.defaultFontColor,[j,M]=kb(`columns`,{cards:{name:d,items:[...i.imagesList],id:`cards`},neg:{name:f,items:[],id:`neg`},neutral:{name:m,items:[],id:`neutral`},pos:{name:p,id:`pos`,items:[]}}),N=333,P=111;n.sortDirection===`negative`&&(N=111,P=333);let F=(0,S.useCallback)((e,t,a)=>{if(!e.destination||e.destination.droppableId===`cards`)return;let{source:o,destination:s}=e,c=[...i.imagesList],u=e.destination.droppableId,d=e.draggableId;for(let e=0;e<c.length;e++)c[e].id===d&&(u===`neg`&&(c[e].divColor=`isNegativeStatement`,c[e].cardColor=`pinkSortCard`,c[e].pinkChecked=!0,c[e].yellowChecked=!1,c[e].greenChecked=!1,c[e].sortValue=N),u===`neutral`&&(c[e].divColor=`isUncertainStatement`,c[e].cardColor=`yellowSortCard`,c[e].pinkChecked=!1,c[e].yellowChecked=!0,c[e].greenChecked=!1,c[e].sortValue=222),u===`pos`&&(c[e].divColor=`isPositiveStatement`,c[e].cardColor=`greenSortCard`,c[e].pinkChecked=!1,c[e].yellowChecked=!1,c[e].greenChecked=!0,c[e].sortValue=P));for(let e=0;e<c.length;e++)c[e].listIndex=e+1;if(i.imagesList=[...c],localStorage.setItem(`columnStatements`,JSON.stringify(i)),o.droppableId!==s.droppableId)try{let e=t[o.droppableId],i=t[s.droppableId],c=[...e.items],u=[...i.items],[d]=c.splice(o.index,1);i.id===`pos`&&(d.backgroundColor=n.greenCardColor),i.id===`neg`&&(d.backgroundColor=n.pinkCardColor),i.id===`neutral`&&(d.backgroundColor=n.yellowCardColor),u.splice(s.index,0,d),a({...t,[o.droppableId]:{...e,items:c},[s.droppableId]:{...i,items:u}});let f;if(e.id===`cards`){f=O-e.items.length+1,_(f);let t=(f/r.totalStatements*30).toFixed();l(t)}}catch(e){console.log(e)}else try{let e=t[o.droppableId],n=[...e.items],[r]=n.splice(o.index,1);n.splice(s.index,0,r),a({...t,[o.droppableId]:{...e,items:n}})}catch(e){console.log(e)}},[n,i,r,l,O,P,N,_]);return(0,S.useEffect)(()=>{let e=e=>{let t;if(e.key===`1`||e.key===1)t=`neg`;else if(e.key===`2`||e.key===2)t=`neutral`;else if(e.key===`3`||e.key===3)t=`pos`;else return;if(j.cards.items.length>0){let e={draggableId:j.cards.items[0].id,type:`DEFAULT`,source:{index:0,droppableId:`cards`},reason:`DROP`,mode:`FLUID`,destination:{droppableId:t,index:0},combine:null};F(e,j,M)}};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[F,j,M]),(0,S.useEffect)(()=>{let e=``,t=``,n=``;j.pos.items.forEach(t=>{j.pos.items[0]&&(e+=t.statementNum+`,`)}),j.neutral.items[0]&&j.neutral.items.forEach(e=>{t+=e.statementNum+`,`}),j.neg.items[0]&&j.neg.items.forEach(e=>{n+=e.statementNum+`,`});let r=s;r.npos=j.pos.items.length,r.posStateNums=e,r.nneu=j.neutral.items.length,r.neuStateNums=t,r.nneg=j.neg.items.length,r.negStateNums=n,c(r),localStorage.setItem(`resultsPresort`,JSON.stringify(r))},[j,s,c]),(0,S.useEffect)(()=>{j.cards.items.length===0&&(a(!0),o(!0))},[j.cards.items.length,a,o]),(0,W.jsxs)(Gx,{id:`imageGrid`,children:[(0,W.jsx)(Yx,{id:`imageEnlargeInstructionsDiv`,children:(0,W.jsx)(`div`,{children:h})}),(0,W.jsxs)(Jx,{id:`completionRatioImg`,children:[g,`/`,O]}),(0,W.jsx)(Hx,{id:`negDivImg`,children:(0,W.jsx)(`div`,{children:j.neg.name})}),(0,W.jsx)(Ux,{id:`negDivImg`,children:(0,W.jsx)(`div`,{children:j.neutral.name})}),(0,W.jsx)(Wx,{id:`negDivImg`,children:(0,W.jsx)(`div`,{children:j.pos.name})}),(0,W.jsx)(Gr,{open:v,center:!0,onClose:()=>y(!1),classNames:{modal:`${n.imageFormat}`,overlay:`dualImageOverlay`},children:(0,W.jsx)(`img`,{src:b,width:`100%`,height:`auto`,alt:`modalImage`})}),(0,W.jsxs)(Gr,{open:T,center:!0,onClose:()=>{E(!1),w([])},classNames:{overlay:`dualImageOverlay`,modal:`dualImageModal`},children:[(0,W.jsx)(`img`,{src:C[0],width:`49.5%`,height:`auto`,alt:`modalImage`}),(0,W.jsx)(`img`,{src:C[1],width:`49.5%`,height:`auto`,style:{marginLeft:`1%`},alt:`modalImage2`})]}),(0,W.jsx)(A_,{onDragEnd:e=>F(e,j,M),children:Object.entries(j).map(([e,t])=>(0,W.jsx)(Xx,{id:`${e}Div`,className:`${e}DivImg`,children:(0,W.jsx)(qx,{children:(0,W.jsx)(Ob,{droppableId:e,className:e,children:(n,r)=>(0,W.jsxs)(`div`,{...n.droppableProps,ref:n.innerRef,id:e,className:e,style:{background:r.isDraggingOver?`lightblue`:`white`,padding:4,width:`100%`,height:`auto`},children:[t.items.map((e,t)=>(0,W.jsx)(fv,{id:e.id,draggableId:e.id,index:t,className:`dragObject`,children:(t,n)=>(0,W.jsx)(Kx,{id:`DroppableContainer`,ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,imageWidth:u,style:{userSelect:`none`,padding:2,margin:`0 0 8px 0`,overflow:`hidden`,fontSize:k,filter:n.isDragging?`brightness(0.85)`:`brightness(1.00)`,backgroundColor:(n.isDragging,e.backgroundColor),color:A,...t.draggableProps.style},onClick:t=>D(t,e.element.props.src),children:(0,W.jsx)(`img`,{src:e.element.props.src,alt:e.element.props.alt})})},e.id)),n.placeholder]})},e)})},e))})]})}var Hx=U.div`
  display: flex;
  grid-column-start: 2;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  div {
    display: flex;
    outline: 1px solid #a8a8a8;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 182, 193, 0.4);
    min-width: 50%;
    padding: 2px;
    border-radius: 5px;
  }
`,Ux=U.div`
  display: flex;
  align-self: center;
  grid-column-start: 3;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid #a8a8a8;
    background-color: lightgray;
    min-width: 50%;
    padding: 2px;
    border-radius: 5px;
  }
`,Wx=U.div`
  display: flex;
  grid-column-start: 4;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(199, 246, 199, 0.6);
    min-width: 50%;
    padding: 2px;
    border-radius: 5px;
    outline: 1px solid #a8a8a8;
  }
`,Gx=U.div`
  padding-top: 10px;
  margin-top: 25px;
  margin-bottom: 55px;
  display: grid;
  height: calc(100vh-100px);
  grid-template-rows: 34h 25px 1fr;
  grid-template-columns: 0.25fr 1.5fr 1.5fr 1.5fr 0.25fr;
  row-gap: 3px;
  column-gap: 15px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,Kx=U.div`
  background-color: "#83cafe";
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2px;
  width: 27.8vw;
  // margin-left: 15px;
  // border: 1px solid #a8a8a8;
  img {
    width: ${e=>e.imageWidth} !important;
    height: auto;
    border: 1px solid black;
  }
`,qx=U.div`
  margin: 4px;
  border: 2px solid green;
  img {
    object-fit: contain;
    padding: 0px;
  }
`,Jx=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 60px;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
`,Yx=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 16px;
  padding-left: 3px;
  padding-right: 3px;
  width: 100%;
`,Xx=U.div`
  display: flex;
  flex-direction: "column";
  margin: 4px;
  width: 100%;
  border: 2px solid blue;
`,Zx=e=>e.langObj,Qx=e=>e.configObj,$x=e=>e.statementsObj,eS=e=>e.cardFontSizePresort,tS=e=>e.isLoggedIn,nS=e=>e.setCurrentPage,rS=e=>e.setProgressScore,iS=e=>e.presortNoReturn,aS=e=>e.resetColumnStatements,oS=e=>e.setDisplayNextButton,sS=()=>{let e=q(Zx),t=q(Qx),n=q($x),r=J(eS),i=q(tS),a=J(nS),o=J(rS),s=J(iS),c=q(aS),l=J(oS),u=+localStorage.getItem(`fontSizePresort`);u&&(r=u);let d=t.initialScreen!==`anonymous`&&i===!1;(0,S.useEffect)(()=>{!d&&!s&&l(!0)},[d,s,l]);let f=(0,S.useRef)(null);(0,S.useEffect)(()=>(f.current=Date.now(),(async()=>{await a(`presort`),localStorage.setItem(`currentPage`,`presort`),await o(15)})(),()=>{ar(f.current,`presortPage`,`presortPage`)}),[a,o]);let p=n.columnStatements;t.setupTarget===`local`&&(p=JSON.parse(JSON.stringify(c)));let m=t.headerBarColor,h=t.initialScreen,g=(0,Kf.default)(p.statementList),_=t.useImages,v=G(K(e.titleBarText))||``;return h!==`anonymous`&&i===!1?(0,W.jsx)(Ox,{}):s?(0,W.jsx)(xx,{}):(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(td,{}),(0,W.jsx)(qf,{}),(0,W.jsx)(hx,{}),(0,W.jsx)(lx,{}),(0,W.jsx)(cS,{background:m,children:v}),_?(0,W.jsx)(Vx,{cardFontSize:r}):(0,W.jsx)(qb,{statements:g,cardFontSize:r})]})},cS=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  min-height: 50px;
  background-color: ${e=>e.background};
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  z-index: 999;
  top: 0;
`,lS=s(((e,t)=>{function n(e){return this.__data__.set(e,`__lodash_hash_undefined__`),this}t.exports=n})),uS=s(((e,t)=>{function n(e){return this.__data__.has(e)}t.exports=n})),dS=s(((e,t)=>{var n=ef(),r=lS(),i=uS();function a(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}a.prototype.add=a.prototype.push=r,a.prototype.has=i,t.exports=a})),fS=s(((e,t)=>{function n(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}t.exports=n})),pS=s(((e,t)=>{function n(e,t){return e.has(t)}t.exports=n})),mS=s(((e,t)=>{var n=dS(),r=fS(),i=pS(),a=1,o=2;function s(e,t,s,c,l,u){var d=s&a,f=e.length,p=t.length;if(f!=p&&!(d&&p>f))return!1;var m=u.get(e),h=u.get(t);if(m&&h)return m==t&&h==e;var g=-1,_=!0,v=s&o?new n:void 0;for(u.set(e,t),u.set(t,e);++g<f;){var y=e[g],b=t[g];if(c)var x=d?c(b,y,g,t,e,u):c(y,b,g,e,t,u);if(x!==void 0){if(x)continue;_=!1;break}if(v){if(!r(t,function(e,t){if(!i(v,t)&&(y===e||l(y,e,s,c,u)))return v.push(t)})){_=!1;break}}else if(!(y===b||l(y,b,s,c,u))){_=!1;break}}return u.delete(e),u.delete(t),_}t.exports=s})),hS=s(((e,t)=>{function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}t.exports=n})),gS=s(((e,t)=>{function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}t.exports=n})),_S=s(((e,t)=>{var n=Zs(),r=Mf(),i=Sd(),a=mS(),o=hS(),s=gS(),c=1,l=2,u=`[object Boolean]`,d=`[object Date]`,f=`[object Error]`,p=`[object Map]`,m=`[object Number]`,h=`[object RegExp]`,g=`[object Set]`,_=`[object String]`,v=`[object Symbol]`,y=`[object ArrayBuffer]`,b=`[object DataView]`,x=n?n.prototype:void 0,S=x?x.valueOf:void 0;function C(e,t,n,x,C,w,T){switch(n){case b:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case y:return!(e.byteLength!=t.byteLength||!w(new r(e),new r(t)));case u:case d:case m:return i(+e,+t);case f:return e.name==t.name&&e.message==t.message;case h:case _:return e==t+``;case p:var E=o;case g:var D=x&c;if(E||=s,e.size!=t.size&&!D)return!1;var O=T.get(e);if(O)return O==t;x|=l,T.set(e,t);var k=a(E(e),E(t),x,C,w,T);return T.delete(e),k;case v:if(S)return S.call(e)==S.call(t)}return!1}t.exports=C})),vS=s(((e,t)=>{var n=wf(),r=1,i=Object.prototype.hasOwnProperty;function a(e,t,a,o,s,c){var l=a&r,u=n(e),d=u.length;if(d!=n(t).length&&!l)return!1;for(var f=d;f--;){var p=u[f];if(!(l?p in t:i.call(t,p)))return!1}var m=c.get(e),h=c.get(t);if(m&&h)return m==t&&h==e;var g=!0;c.set(e,t),c.set(t,e);for(var _=l;++f<d;){p=u[f];var v=e[p],y=t[p];if(o)var b=l?o(y,v,p,t,e,c):o(v,y,p,e,t,c);if(!(b===void 0?v===y||s(v,y,a,o,c):b)){g=!1;break}_||=p==`constructor`}if(g&&!_){var x=e.constructor,S=t.constructor;x!=S&&`constructor`in e&&`constructor`in t&&!(typeof x==`function`&&x instanceof x&&typeof S==`function`&&S instanceof S)&&(g=!1)}return c.delete(e),c.delete(t),g}t.exports=a})),yS=s(((e,t)=>{var n=nf(),r=mS(),i=_S(),a=vS(),o=Af(),s=xc(),c=Cc(),l=kc(),u=1,d=`[object Arguments]`,f=`[object Array]`,p=`[object Object]`,m=Object.prototype.hasOwnProperty;function h(e,t,h,g,_,v){var y=s(e),b=s(t),x=y?f:o(e),S=b?f:o(t);x=x==d?p:x,S=S==d?p:S;var C=x==p,w=S==p,T=x==S;if(T&&c(e)){if(!c(t))return!1;y=!0,C=!1}if(T&&!C)return v||=new n,y||l(e)?r(e,t,h,g,_,v):i(e,t,x,h,g,_,v);if(!(h&u)){var E=C&&m.call(e,`__wrapped__`),D=w&&m.call(t,`__wrapped__`);if(E||D){var O=E?e.value():e,k=D?t.value():t;return v||=new n,_(O,k,h,g,v)}}return T?(v||=new n,a(e,t,h,g,_,v)):!1}t.exports=h})),bS=s(((e,t)=>{var n=yS(),r=tc();function i(e,t,a,o,s){return e===t?!0:e==null||t==null||!r(e)&&!r(t)?e!==e&&t!==t:n(e,t,a,o,i,s)}t.exports=i})),xS=u(s(((e,t)=>{var n=bS();function r(e,t){return n(e,t)}t.exports=r}))(),1),SS=(e,t,n,r,i)=>{if(t===!0){let t=[];e.forEach(function(e,n){if(+e>+r[n])return t.push(i[n]),J.setState({sortCompleted:!1}),J.setState({overloadedColumn:i[n]}),J.setState({hasOverloadedColumn:!0}),J.setState({isSortingCards:!0}),null}),t.length===0&&(J.setState({hasOverloadedColumn:!1}),J.setState({isSortingCards:!1}))}let a=e.reduce(function(e,t){return e+t});J.setState({numSortedStatements:a}),t===!1&&(a===n?(J.setState({sortCompleted:!0}),J.setState({isSortingCards:!1})):(J.setState({sortCompleted:!1}),J.setState({isSortingCards:!0})))},CS=(e,t,n,r,i,a,o,s,c)=>{let{qSortPattern:l,qSortHeaders:u,forcedSorts:d}=o,[f]=e.splice(n.index,1);t.splice(r.index,0,f);let p={};p[n.droppableId]=[...e],p[r.droppableId]=[...t],J.setState({result:p});let m=[];for(let e=0;e<u.length;e++){let t=i.vCols[`column${u[e]}`];m.push(t.length)}let h=[...l].map(e=>+e),g=[...m],_=(0,xS.default)(m,h);return SS(g,d,a,l,c),s===!1?_===!0?(J.setState({hasOverloadedColumn:!1}),J.setState({sortCompleted:!0}),console.log(`sorting complete`),J.setState({isSortingCards:!1}),J.setState({isSortingFinished:!0})):(J.setState({hasOverloadedColumn:!0}),J.setState({sortCompleted:!1}),J.setState({isSortingCards:!0}),i.statementList.length===0?J.setState({isSortingFinished:!0}):J.setState({isSortingFinished:!1})):i.statementList.length===0?(J.setState({hasOverloadedColumn:!1}),J.setState({sortCompleted:!0}),console.log(`sorting complete`),J.setState({isSortingCards:!1}),J.setState({isSortingFinished:!0})):(J.setState({sortCompleted:!1}),J.setState({isSortingCards:!0}),J.setState({hasOverloadedColumn:!1}),J.setState({isSortingFinished:!1})),null},wS=(e,t,n,r)=>{try{if(e===`statements`)return r;let i=[...r.vCols[e]],[a]=i.splice(t,1);return i.splice(n,0,a),r.vCols[e]=[...i],{...r}}catch(e){return console.error(e),r}},TS=(e,t,n,r,i,a,o,s,c,l)=>({userSelect:`none`,padding:`5px`,margin:`1px`,lineHeight:`1.3em`,fontSize:i,color:l,height:r,width:n,display:`flex`,justifyContent:`center`,alignItems:`center`,borderBottom:`1.5px solid darkgray`,filter:e?`brightness(0.85)`:`brightness(1.00)`,zIndex:`-1`,textAlign:`center`,background:e?`#ffffff`:`transparent`,...t}),ES=(e,t,n,r,i)=>{let a;return a=n!==!0||t.columnStatementsArray.length<=t.maxCards,{background:e?`lightblue`:a?i:`#F4BB44`,maxWidth:r,marginTop:0,marginRight:0,marginBottom:0,paddingBottom:0,minHeight:t.minHeight-12,borderRadius:`2px`,borderTop:`0px solid lightgray`,borderRight:a?`1px solid lightgray`:`3px dashed black`,borderLeft:a?`1px solid lightgray`:`3px dashed black`,borderBottom:a?`1px solid whitesmoke`:`3px dashed black`}},DS=({isDraggingOver:e,columnId:t,sortValue:n})=>((0,S.useEffect)(()=>{e&&J.setState({draggingOverColumnId:t,currentSortValue:n})},[e,t,n]),null),OS=S.memo(e=>{let{forcedSorts:t,columnWidth:n,cardHeight:r,columnId:i,sortValue:a,columnStatementsArray:o,columnColor:s,cardFontSize:c,greenCardColor:l,yellowCardColor:u,pinkCardColor:d,fontColor:f}=e;return(0,W.jsx)(kS,{id:`sortColumnsDiv`,children:(0,W.jsx)(Ob,{id:`ColDroppable`,droppableId:i,direction:`vertical`,children:(p,m)=>(0,W.jsxs)(AS,{id:`DroppableColDiv`,ref:p.innerRef,style:ES(m.isDraggingOver,e,t,n,s,r),children:[(0,W.jsx)(DS,{isDraggingOver:m.isDraggingOver,columnId:i,sortValue:a}),o.map((e,t)=>{let i=G(`<div>${K(e.statement)}</div>`);return(0,W.jsx)(fv,{draggableId:e.id,cardColor:e.cardColor,index:t,children:(t,a)=>(0,W.jsx)(jS,{id:`StatementDiv`,ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,cardHeight:r,fontSize:c,style:TS(a.isDragging,t.draggableProps.style,n,r,c,`${e.cardColor}`,l,u,d,f),children:i})},e.id)}),p.placeholder]})})})}),kS=U.div`
  display: flex;
  flex-direction: column;
`,AS=U.div`
  justify-items: center;
`,jS=U.div`
  display: flex;
  width: 96%;
  margin-left: 2%;
  margin-bottom: 5px !important;
  height: ${e=>`${e.cardHeight}px`};
  font-size: calc(${e=>e.fontSize}px + 1.3vw);
  justify-content: center;
`,MS=(e,t,n,r,i)=>{try{if(e.destination!==null){let t=/column/gi,a=/N/gi,o=e.destination.droppableId;o=o.replace(t,``),o=o.replace(a,`-`);let s=parseInt(o,10);i[e.draggableId]=s,Object.keys(i).length;let c={};return c.isSortingFinished=!0,c.results=n,c.sortFinishedModalHasBeenShown=r,c.triggerSortingFinishedModal=!1,c.sortGridResults=i,c}}catch(e){console.error(e),console.log(`there was an error in calculateDragResults`)}},NS=e=>e.configObj,PS=e=>e.mapObj,FS=e=>e.statementsObj,IS=e=>e.setIsSortingCards,LS=e=>e.setSortCompleted,RS=e=>e.setProgressScoreAdditionalSort,zS=e=>e.results,BS=e=>e.sortFinishedModalHasBeenShown,VS=e=>e.sortGridResults,HS=e=>e.setIsSortingFinished,US=e=>e.setResults,WS=e=>e.setTriggerSortingFinishedModal,GS=e=>e.setSortGridResults,KS=e=>{let t=q(NS),n=q(PS),r=q(FS),i=J(IS),a=J(LS),o=J(RS),s=J(zS),c=J(BS),l=J(VS),u=J(HS),d=J(US),f=J(WS),p=J(GS),m=t.greenCardColor,h=t.yellowCardColor,g=t.pinkCardColor,_=[...n.qSortHeaders],v=[...n.qSortHeaderNumbers],y=[...n.columnColorsArray],b=[...n.columnHeadersColorsArray],x=[...n.qSortPattern],S=e.cardHeight,C=JSON.parse(localStorage.getItem(`columnStatements`));C===null&&(C=[]);let[w,T]=kb(`sortColumns`,C),E=+r.totalStatements,D={};D.qSortPattern=[...n.qSortPattern],D.qSortHeaders=[...n.qSortHeaders],D.forcedSorts=t.warnOverloadedColumn,D.qSortHeaderNumbers=[...n.qSortHeaderNumbers];let O=D,k=t.allowUnforcedSorts,A=e=>{try{let t=MS({...e},E,s,c,l);u(t.sortFinished),d(t.results),p(t.sortGridResults);let{source:n,destination:m}=e;if(!m)return;if(n.droppableId===m.droppableId){let e=wS(n.droppableId,n.index,m.index,w);T(e)}else{let e,t;e=n.droppableId===`statements`?w.statementList:w.vCols[n.droppableId],t=m.droppableId===`statements`?w.statementList:w.vCols[m.droppableId],CS(e,t,n,m,w,E,O,k,v),T({...w});let s=localStorage.getItem(`hasShownSortFinModal`);w.statementList.length===0?(i(!1),a(!0),s===`false`&&(localStorage.setItem(`hasShownSortFinModal`,!0),f(!0))):(localStorage.setItem(`hasShownSortFinModal`,!1),i(!0),a(!1));let c=r.totalStatements,l=((c-w.statementList.length)/c*30).toFixed();o(l)}}catch(e){console.log(e.message)}},j=e.cardFontSize,M=e.fontColor,N=_.map((n,r)=>{let i=`column${_[r]}`,a=v[r],o=y[r];return(0,W.jsx)(OS,{minHeight:x[r]*(+S+8),maxCards:x[r],columnId:i,columnStatementsArray:w.vCols[i],forcedSorts:t.warnOverloadedColumn,columnWidth:e.columnWidth,cardHeight:+S,sortValue:a,columnColor:o,cardFontSize:j,qSortHeaderNumber:v[r],columnHeadersColor:b[r],greenCardColor:m,yellowCardColor:h,pinkCardColor:g,fontColor:M},i)});return(0,W.jsx)(A_,{onDragEnd:A,children:(0,W.jsx)(`div`,{className:`rootDiv`,children:N})})},qS=(e,t,n,r,i,a,o,s,c,l)=>{let u;return a===`greenSortCard`&&(u=o),a===`yellowSortCard`&&(u=s),a===`pinkSortCard`&&(u=c),{userSelect:`none`,lineHeight:`1.3em`,fontSize:i,maxHeight:r,color:l,borderRadius:`5px`,filter:e?`brightness(0.85)`:`brightness(1.00)`,zIndex:`-1`,textAlign:`center`,background:e?u:`whitesmoke`,...t}},JS=(e,t,n,r,i,a)=>{let o;return o=n!==!0||t.columnStatementsArray.length<=t.maxCards,e&&J.setState({draggingOverColumnId:t.columnId}),{background:e?`lightblue`:o?i:`orange`,padding:`5px 0px 0px 0px`,justifyContent:`center`,width:r+13,marginTop:0,marginRight:0,minHeight:t.minHeight-10,borderRadius:`2px`,outline:o?`1px solid #d8d8d8`:`2px dashed black`,outlineOffset:`-1px`}},YS=S.memo(e=>{let{forcedSorts:t,columnWidth:n,cardHeight:r,columnId:i,sortValue:a,columnStatementsArray:o,columnColor:s,cardFontSize:c,greenCardColor:l,yellowCardColor:u,pinkCardColor:d,fontColor:f,handleOpenImageModal:p}=e;return(0,W.jsx)(XS,{id:`sortColumnsDiv`,children:(0,W.jsx)(Ob,{id:`ColDroppable`,droppableId:i,direction:`vertical`,children:(m,h)=>(h.isDraggingOver&&(J.setState({draggingOverColumnId:i}),J.setState({currentSortValue:a})),(0,W.jsxs)(ZS,{id:`DroppableColDiv`,ref:m.innerRef,style:JS(h.isDraggingOver,e,t,n,s,r),children:[o.map((e,t)=>(0,W.jsx)(fv,{draggableId:e.id,cardColor:e.cardColor,index:t,children:(t,i)=>(0,W.jsx)(QS,{id:`imageDiv`,ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,onClick:t=>p(t,e.element.props.src),style:qS(i.isDragging,t.draggableProps.style,n,r,c,`${e.cardColor}`,l,u,d,f),children:(0,W.jsx)(`img`,{src:e.element.props.src,alt:e.element.props.alt,style:{border:`1px solid black`}})})},e.id)),m.placeholder]}))})})}),XS=U.div`
  display: flex;
  flex-direction: column;
`,ZS=U.div`
  justify-items: center;
`,QS=U.div`
  display: flex;
  width: 96%;
  margin-left: 2%;
  margin-bottom: 5px !important;
  height: ${e=>`${e.cardHeight}px`};
  justify-content: center;

  img {
    max-width: 96%;
    max-height: 96%;
    object-fit: contain;
  }
`,$S=(e,t,n)=>({background:e?`lightblue`:`#e4e4e4`,display:`flex`,flexDirection:`row`,flexWrap:`nowrap`,width:`100vw`,paddingRight:`20px`,minHeight:t,overflowX:`scroll`,direction:n,scrollBehavior:`smooth`}),eC=(e,t,n,r,i,a,o,s,c,l,u)=>{let d=n,f=r;return isNaN(+d)&&(d=999),(f===`undefined`||f===`yellowSortCard`)&&(f=c),f===`pinkSortCard`&&(f=l),f===`greenSortCard`&&(f=s),{userSelect:`none`,WebkitUserSelect:`none`,lineHeight:`1.3em`,fontSize:o,color:u,height:a,minWidth:i,maxWidth:i,paddingRight:2,paddingLeft:2,borderRadius:`5px`,touchAction:`manipulation`,marginBottom:5,marginTop:5,marginRight:`2px`,marginLeft:`2px`,display:`flex`,alignItems:`center`,textAlign:`center`,order:d,filter:e?`brightness(0.85)`:`brightness(1.00)`,background:f,...t}},tC=(e,t,n,r,i)=>{try{let a=!1,o=!1;if(e.destination!==null){let s=/column/gi,c=/N/gi,l=e.destination.droppableId;l=l.replace(s,``),l=l.replace(c,`-`);let u=parseInt(l,10);i[e.draggableId]=u;let d=Object.keys(i),f=!1;if(d.length===t){let e=``;for(let n=0;n<t;n++){let t=i[`image${n+1}`];isNaN(t)&&(f=!0),e+=`${t}|`}f===!0?a=!1:(a=!0,e.charAt(e.length-1)===`|`&&(e=e.substring(0,e.length-1)),n.sort=e,localStorage.setItem(`resultsSort`,JSON.stringify(e)),r===!1&&(r=!0,o=!0))}let p={};return p.isSortingFinished=a,p.results=n,p.sortFinishedModalHasBeenShown=r,p.triggerSortingFinishedModal=o,p.sortGridResults=i,p}}catch(e){console.error(e),console.log(`there was an error in calculateDragResults`)}},nC=e=>e.configObj,rC=e=>e.mapObj,iC=e=>e.setIsSortingCards,aC=e=>e.setSortCompleted,oC=e=>e.setProgressScoreAdditionalSort,sC=e=>e.results,cC=e=>e.sortFinishedModalHasBeenShown,lC=e=>e.sortGridResults,uC=e=>e.setIsSortingFinished,dC=e=>e.setResults,fC=e=>e.setTriggerSortingFinishedModal,pC=e=>e.setSortGridResults,mC=e=>{let t=q(nC),n=q(rC),r=J(iC),i=J(aC),a=J(oC),o=J(sC),s=J(cC),c=J(lC),l=J(uC),u=J(dC),d=J(fC),f=J(pC),p=t.greenCardColor,m=t.yellowCardColor,h=t.pinkCardColor,g=[...n.qSortHeaders],_=[...n.qSortHeaderNumbers],v=[...n.columnColorsArray],y=[...n.columnHeadersColorsArray],b=[...n.qSortPattern],x=JSON.parse(localStorage.getItem(`columnStatements`));x===null&&(x=[]);let[C,w]=(0,S.useState)(!1),[T,E]=(0,S.useState)(``),[D,O]=(0,S.useState)([]),[k,A]=(0,S.useState)(!1),[j,M]=kb(`sortColumns`,x),N=e.columnWidth,P=+t.numImages,F={};F.qSortPattern=[...n.qSortPattern],F.qSortHeaders=[...n.qSortHeaders],F.forcedSorts=t.warnOverloadedColumn,F.qSortHeaderNumbers=[...n.qSortHeaderNumbers];let ee=F,I=t.allowUnforcedSorts,L=`rtl`;t.sortDirection===`negative`&&(L=`ltr`);let R=(e,t)=>{e.detail===2&&(e.shiftKey?(D.push(e.target.src),O(D),D.length===2&&A(!0)):(E(e.target.src),w(!0)))},z=e=>{try{let n=tC({...e},P,o,s,c);l(n.sortFinished),u(n.results),f(n.sortGridResults);let{source:p,destination:m}=e;if(!m)return;if(p.droppableId===m.droppableId){let e=wS(p.droppableId,p.index,m.index,j);M(e)}else{let e,n;e=p.droppableId===`statements`?j.imagesList:j.vCols[p.droppableId],n=m.droppableId===`statements`?j.imagesList:j.vCols[m.droppableId],CS(e,n,p,m,j,P,ee,I,_),M(j);let o=localStorage.getItem(`hasShownSortFinModal`);j.imagesList.length===0?(r(!1),i(!0),o===`false`&&(localStorage.setItem(`hasShownSortFinModal`,!0),d(!0))):(localStorage.setItem(`hasShownSortFinModal`,!1),r(!0),i(!1));let s=t.numImages,c=((s-j.imagesList.length)/s*30).toFixed();a(c)}}catch(e){console.log(e.message)}},B=e.cardFontSize,V=e.fontColor,H=j.imagesList,te=g.map((n,r,i)=>{let a=`column${g[r]}`,o=_[r],s=v[r];return(0,W.jsx)(YS,{minHeight:b[r]*(+e.cardHeight+8),maxCards:b[r],columnId:a,columnStatementsArray:j.vCols[a],forcedSorts:t.warnOverloadedColumn,columnWidth:e.columnWidth,cardHeight:+e.cardHeight,sortValue:o,columnColor:s,cardFontSize:B,qSortHeaderNumber:_[r],columnHeadersColor:y[r],greenCardColor:p,yellowCardColor:m,pinkCardColor:h,fontColor:V,handleOpenImageModal:R},a)}),ne=S.memo(e=>e.statements.map((t,n)=>(0,W.jsx)(fv,{draggableId:t.id,index:n,sortValue:t.sortValue,cardColor:t.cardColor,className:`droppableCards`,children:(n,r)=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(vC,{ref:n.innerRef,className:`${t.cardColor}`,...n.draggableProps,...n.dragHandleProps,onClick:e=>R(e,t.element.props.src),style:eC(r.isDragging,n.draggableProps.style,`${t.sortValue}`,`${t.cardColor}`,N,e.cardHeight,B,p,m,h,V),children:(0,W.jsx)(`img`,{src:t.element.props.src,alt:t.element.props.alt})}),n.placeholder]})},t.id)));return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Gr,{open:C,center:!0,onClose:()=>w(!1),classNames:{modal:`${t.imageFormat}`,overlay:`dualImageOverlay`},children:(0,W.jsx)(`img`,{src:T,width:`100%`,height:`auto`,alt:`modalImage`})}),(0,W.jsxs)(Gr,{open:k,center:!0,onClose:()=>{A(!1),O([])},classNames:{overlay:`dualImageOverlay`,modal:`dualImageModal`},children:[(0,W.jsx)(`img`,{src:D[0],width:`49.5%`,height:`auto`,alt:`modalImage`}),(0,W.jsx)(`img`,{src:D[1],width:`49.5%`,height:`auto`,style:{marginLeft:`1%`},alt:`modalImage2`})]}),(0,W.jsx)(A_,{onDragEnd:z,children:(0,W.jsxs)(`div`,{className:`rootDiv`,children:[te,(0,W.jsx)(hC,{id:`SortFooterDiv`,children:(0,W.jsx)(gC,{id:`CardSlider`,children:(0,W.jsx)(Ob,{id:`Droppable`,droppableId:`statements`,direction:`horizontal`,style:{maxWidth:`100vw`},children:(t,n)=>(0,W.jsxs)(_C,{id:`HorizontalFeederDiv`,ref:t.innerRef,style:$S(n.isDraggingOver,50,L),children:[(0,W.jsx)(ne,{statements:H,cardHeight:e.cardHeight,provided:t}),(0,W.jsxs)(`span`,{style:{display:`none`},children:[` `,t.placeholder]})]})})})})]})})]})},hC=U.div`
  background: #e4e4e4;
  padding-right: 10px;
  position: fixed;
  left: 0px;
  bottom: 50px;
  width: 100vw;
  height: ${e=>`${+e.cardHeight+20}px;`};
`,gC=U.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
`,_C=U.div``,vC=U.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,yC=e=>e.langObj,bC=e=>e.triggerSortModal,xC=e=>e.setTriggerSortModal,SC=()=>{let e=q(yC),t=J(bC),n=J(xC),r=G(K(e.sortHelpModalHead)),i=G(K(e.sortHelpModalText));return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(CC,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(wC,{children:i})]})},CC=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,wC=U.div`
  margin-top: 15px;
`,TC=e=>e.langObj,EC=e=>e.triggerSortingFinishedModal,DC=e=>e.setTriggerSortingFinishedModal,OC=()=>{let e=q(TC),t=J(EC),n=J(DC),r=G(K(e.sortingCompleteModalHead))||``,i=G(K(e.sortingCompleteModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(kC,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(AC,{children:i})]})},kC=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,AC=U.div`
  margin-top: 15px;
`,jC=e=>e.langObj,MC=e=>e.triggerSortPreventNavModal,NC=e=>e.setTriggerSortPreventNavModal,PC=()=>{let e=q(jC),t=J(MC),n=J(NC),r=G(K(e.sortPreventNavModalHead))||``,i=G(K(e.sortPreventNavModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(FC,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(IC,{children:i})]})},FC=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,IC=U.div`
  margin-top: 15px;
`,LC=e=>e.langObj,RC=e=>e.triggerSortOverloadedColumnModal,zC=e=>e.setTriggerSortOverloadedColumnModal,BC=()=>{let e=q(LC),t=J(RC),n=J(zC),r=G(K(e.sortOverloadedColumnModalHead))||``,i=G(K(e.sortOverloadedColumnModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(VC,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(HC,{children:i})]})},VC=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,HC=U.div`
  margin-top: 15px;
`,UC=e=>e.mapObj,WC=e=>{let t=q(UC),n=[(0,W.jsx)(wl,{},X()),(0,W.jsx)(jb,{},X()),(0,W.jsx)(Cl,{},X()),(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X()),(0,W.jsx)(uu,{},X()),(0,W.jsx)(Nb,{},X()),(0,W.jsx)(du,{},X())],r=[(0,W.jsx)(wl,{},X()),(0,W.jsx)(Cl,{},X()),(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X()),(0,W.jsx)(uu,{},X()),(0,W.jsx)(du,{},X())],i=[(0,W.jsx)(Cl,{},X()),(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X()),(0,W.jsx)(uu,{},X())],a=[(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X())],o=[];t.emojiArrayType&&(t.emojiArrayType[0]===`emoji5Array`&&(o=[...n]),t.emojiArrayType[0]===`emoji4Array`&&(o=[...r]),t.emojiArrayType[0]===`emoji3Array`&&(o=[...i]),t.emojiArrayType[0]===`emoji2Array`&&(o=[...a]));let s=[...t.qSortHeaderNumbers],c=[...t.columnHeadersColorsArray],l=+e.columnWidth,u=[...t.colTextLabelsArray],d,f=t.useColLabelNums[0];(f!==void 0||f!==null)&&(d=f!==!1&&f!==`false`);let p,m=t.useColLabelText[0];(m!==void 0||m!==null)&&(p=m!==!1&&m!==`false`);let h,g=t.useColLabelEmoji[0];return(g!==void 0||g!==null)&&(h=g!==!1&&g!==`false`),(0,W.jsx)(GC,{id:`colorBarDivContainer`,children:s.map((e,t)=>(0,W.jsx)(KC,{width:l,color:c[t],count:c.length,children:(0,W.jsxs)(qC,{children:[h&&(0,W.jsx)(YC,{children:o[t]}),(0,W.jsxs)(ZC,{children:[d&&(0,W.jsx)(JC,{children:e}),p&&(0,W.jsx)(XC,{children:u[t]})]}),h&&(0,W.jsx)(YC,{children:o[t]})]})},X()))})},GC=U.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  /* background-color: #d8d8d8; */
  margin-bottom: 0px;
  /* border-right: 1px solid whitesmoke;
  border-left: 1px solid whitesmoke; */
  height: 28px;
`,KC=U.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* gap: 6px; */
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${e=>e.color};
  width: ${e=>+e.width}px;
  /* width: calc(99.1vw / ${e=>e.count}); */
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  height: 50px;
  border-bottom: 1.5px solid black;
`,qC=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
  /* height: 100%; */
`,JC=U.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,YC=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* svg {
    width: 100%;
    height: 100%;
  } */
`,XC=U.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 0.75vw;
  text-align: center;
  line-height: 0.95rem;
`,ZC=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* outline: 1px solid blue; */
  width: 96%;
  /* max-width: 80%; */
`;function QC(e,t){let n,r=(...r)=>{clearTimeout(n),n=setTimeout(()=>{n=null,e.apply(this,r)},t)};return r.cancel=()=>clearTimeout(n),r}var $C=e=>e.langObj,ew=e=>e.configObj,tw=e=>e.mapObj,nw=e=>e.cardFontSizeSort,rw=e=>e.topMargin,iw=e=>e.setPresortNoReturn,aw=e=>e.setCurrentPage,ow=e=>e.setTopMargin,sw=e=>e.setDisplayNextButton,cw=e=>e.cardHeightSort,lw=()=>{let e=q($C),t=q(tw),n=q(ew),r=n.useImages,i=J(nw),a=J(rw),o=J(iw),s=J(aw),c=J(ow),l=J(sw),u=[...t.qSortPattern],d=J(cw),f=+localStorage.getItem(`cardHeightSort`),p=+localStorage.getItem(`fontSizeSort`);f&&(d=f),p&&(i=p);let[m,h]=(0,S.useState)({height:window.innerHeight,width:document.body.clientWidth}),[g,_]=(0,S.useState)(150);l(!0);let v=n.headerBarColor,y=n.defaultFontColor,b=G(K(e.sortDisagreement))||``,x=G(K(e.sortAgreement))||``,C=G(K(e.condOfInst))||``,w=u.length,T=(0,S.useMemo)(()=>w>12?170:w>10?145:w>8?120:w>6?96:w>0?70:0,[w]);(0,S.useEffect)(()=>{let e=u.length>0?m.width/u.length:0;_(e);let t=QC(function(){h({height:window.innerHeight,width:document.body.clientWidth})},200);return window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t),t.cancel()}},[m,u.length,T]),(0,S.useEffect)(()=>{let e=+JSON.parse(localStorage.getItem(`sortGridMarginTop`)),t=document.getElementById(`sortTitleBarContainer`);if(!t)return;let n=t.clientHeight+20;n=+JSON.stringify(n);let r=setTimeout(()=>{e===n?c(+e):(c(n),localStorage.setItem(`sortGridMarginTop`,JSON.stringify(n)))},50);return()=>clearTimeout(r)},[C,n.condOfInstFontSize,c]);let E=(0,S.useRef)(null);return(0,S.useEffect)(()=>(E.current=Date.now(),(async()=>{await o(!0),await s(`sort`),localStorage.setItem(`currentPage`,`sort`)})(),()=>{ar(E.current,`sortPage`,`sortPage`)}),[o,s]),(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(td,{}),(0,W.jsx)(SC,{}),(0,W.jsx)(PC,{}),(0,W.jsx)(OC,{}),(0,W.jsx)(BC,{}),(0,W.jsxs)(uw,{id:`sortTitleBarContainer`,children:[(0,W.jsxs)(dw,{id:`sortTitleBar`,background:v,children:[(0,W.jsx)(mw,{children:b}),(0,W.jsx)(fw,{fontSize:n.condOfInstFontSize,children:C}),(0,W.jsx)(pw,{children:x})]}),(0,W.jsx)(WC,{columnWidth:g})]}),(0,W.jsx)(hw,{marginTop:a,children:r?(0,W.jsx)(mC,{id:`sortGridImages`,dimensions:m,cardFontSize:i,fontColor:y,columnWidth:g,cardHeight:d}):(0,W.jsx)(KS,{id:`sortGridDiv`,dimensions:m,cardFontSize:i,fontColor:y,columnWidth:g,cardHeight:d})})]})},uw=U.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: fixed;
  top: 0;

  z-index: 999;
`,dw=U.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-bottom: 5px;
  display: inline-grid;
  grid-template-columns: 15% 1fr 15%;
  color: black;
  font-weight: bold;
  background-color: ${e=>e.background};
`,fw=U.div`
  color: white;
  max-width: 80vw;
  font-size: ${e=>`${e.fontSize}px`};
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  align-self: end;
`,pw=U.div`
  font-size: 22px;
  align-self: end;
  justify-self: end;
  color: white;
  padding-bottom: 5px;
  margin-right: 20px;
`,mw=U.div`
  font-size: 22px;
  align-self: end;
  justify-self: start;
  color: white;
  padding-bottom: 5px;
`,hw=U.div`
  margin-top: ${e=>`${e.marginTop}px`};
  margin-bottom: 250px;
  /* background-color: #83cafe; */
`,gw=(e,t,n)=>{e={...e};let r={},i=t.qSortPattern,a=t.qSortHeaders,o=a.map(e=>parseInt(e.replace(`N`,`-`))),s=Math.min(...o),c=+i[i.length-1],l=+a[a.length-1].replace(`N`,``),u=+i[i.length-2],d=+a[a.length-2].replace(`N`,``),f=+i[0],p=Math.abs(+a[0].replace(`N`,``)),m=+i[1],h=Math.abs(+a[1].replace(`N`,``)),g=JSON.parse(localStorage.getItem(`noResponseCheckArrayHC1`))||[],_=JSON.parse(localStorage.getItem(`noResponseCheckArrayHC2`))||[],v=JSON.parse(localStorage.getItem(`noResponseCheckArrayLC1`))||[],y=[...JSON.parse(localStorage.getItem(`noResponseCheckArrayLC2`))||[],...v,..._,...g],b={};y.forEach(e=>{let t=e.split(`:`),n=t[0].trim(),r=t[1].trim();b[n]=r});let x=c;for(let t=0;t<x;t++){let n=`column${l}_${t}`;Object.prototype.hasOwnProperty.call(e,n)||(e[n]=`(${b[n]}): no response`)}if(n.showSecondPosColumn===!0){let t=u;for(let n=0;n<t;n++){let t=`column${d}_${n}`;Object.prototype.hasOwnProperty.call(e,t)||(e[t]=`(${b[t]}): no response`)}}if(s<0){if(n.showSecondNegColumn===!0){let t=m;for(let n=0;n<t;n++){let t=`columnN${h}_${n}`;Object.prototype.hasOwnProperty.call(e,t)||(e[t]=`(${b[t]}): no response`)}}let t=f;for(let n=0;n<t;n++){let t=`columnN${p}_${n}`;Object.prototype.hasOwnProperty.call(e,t)||(e[t]=`(${b[t]}): no response`)}}let S=Object.keys(e);S.sort();for(let t=0;t<S.length;t++)r[S[t]]=e[S[t]];return r},_w=e=>e.langObj,vw=e=>e.triggerTransmissionOKModal,yw=e=>e.setTriggerTransmissionOKModal,bw=e=>e.setDisplayGoodbyeMessage,xw=()=>{let e=q(_w),t=J(vw),n=J(yw),r=J(bw),i=G(K(e.transferOkModalHeader))||``,a=G(K(e.transferOkModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1),r(!0)},center:!0,children:[(0,W.jsx)(Sw,{children:i}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(Cw,{children:a})]})},Sw=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;
  text-align: center;
  margin-top: 25px;

  hr {
    color: black;
  }
`,Cw=U.div`
  margin-top: 15px;
  text-align: center;
`,ww=e=>e.langObj,Tw=e=>e.triggerTransmissionFailModal,Ew=e=>e.setTriggerTransmissionFailModal,Dw=()=>{let e=q(ww),t=J(Tw),n=J(Ew),r=G(K(e.transferFailModalHeader))||``,i=G(K(e.transferFailModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(Ow,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(kw,{children:i})]})},Ow=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,kw=U.div`
  margin-top: 15px;
`,Aw=e=>e.setLocalStoredQsorts,jw=e=>e.localStoredQsorts,Mw=e=>e.setHasDownloadedQsorts,Nw=e=>e.setTriggerLocalSubmitSuccessModal,Pw=e=>e.surveyQuestionObjArray,Fw=e=>e.langObj,Iw=e=>{let t=q(Fw),n=ts(Aw),r=ts(jw),i=ts(Mw),a=J(Nw),o=q(Pw),s=G(K(t.localSaveDataButton))||``,c=t=>{t.preventDefault(),t.target.disabled=!0;try{let t=localStorage.getItem(`localParticipantName`),s=localStorage.getItem(`localUsercode`),c=JSON.parse(JSON.stringify(e.results));c.partId=t,c.usercode=s;let l=X().substring(0,8);r[l]=c,n(r),localStorage.removeItem(`cumulativelandingPageDuration`),localStorage.removeItem(`cumulativepresortPageDuration`),localStorage.removeItem(`cumulativesortPageDuration`),localStorage.removeItem(`cumulativepostsortPageDuration`),localStorage.removeItem(`cumulativesurveyPageDuration`),localStorage.removeItem(`lastAccesslandingPage`),localStorage.removeItem(`lastAccesspresortPage`),localStorage.removeItem(`lastAccesssortPage`),localStorage.removeItem(`lastAccesspostsortPage`),localStorage.removeItem(`lastAccesssurveyPage`),localStorage.removeItem(`timeOnlandingPage`),localStorage.removeItem(`timeOnpresortPage`),localStorage.removeItem(`timeOnsortPage`),localStorage.removeItem(`timeOnpostsortPage`),localStorage.removeItem(`timeOnsurveyPage`),localStorage.removeItem(`resultsSurvey`),localStorage.removeItem(`resultsSort`),localStorage.removeItem(`resultsPresort`),localStorage.removeItem(`resultsPostsort`),localStorage.removeItem(`HC-requiredCommentsObj`),localStorage.removeItem(`HC2-requiredCommentsObj`),localStorage.removeItem(`LC-requiredCommentsObj`),localStorage.removeItem(`LC2-requiredCommentsObj`),localStorage.removeItem(`postsortCommentCardCount`),localStorage.removeItem(`allCommentsObj`),localStorage.removeItem(`localParticipantName`),localStorage.removeItem(`localUsercode`),o.forEach(e=>{localStorage.removeItem(e.id)}),a(!0),i(!1)}catch{t.target.disabled=!1}};return(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(xw,{}),(0,W.jsx)(Dw,{}),(0,W.jsx)(Lw,{tabindex:`0`,onClick:e=>c(e),children:s})]})},Lw=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Rw=e=>e.langObj,zw=e=>e.setPresortNoReturn,Bw=e=>e.setColumnStatements,Vw=e=>e.resetColumnStatements,Hw=cn(e=>{let t=q(Rw),n=J(zw),r=q(Bw),i=q(Vw),a=(0,Kf.default)(i),o=G(K(t.returnToLocalPanelButtonText))||``,{history:s,onClick:c}=e,l=async function(e){await new Promise((e,t)=>window.location.reload())};return(0,W.jsx)(S.Fragment,{children:(0,W.jsx)(Uw,{onClick:e=>{c&&c(e),n(!1),r(a),s.push(`/`),l()},children:o})})}),Uw=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Ww=e=>e.langObj,Gw=e=>e.triggerLocalSubmitSuccessModal,Kw=()=>{let e=q(Ww),t=J(Gw),n=G(K(e.localSubmitSuccessModalHeader))||``,r=G(K(e.localSubmitSuccessModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{},center:!0,children:[(0,W.jsx)(qw,{children:n}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(Jw,{children:r}),(0,W.jsx)(Yw,{children:(0,W.jsx)(Hw,{})})]})},qw=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Jw=U.div`
  margin-top: 15px;
`,Yw=U.div`
  display: flex;
  justify-content: flex-end;
`,Xw=(e,t,n)=>{if(!e||Object.keys(e).length===0)return;let r=Object.keys(e.vCols),i=[],a=[],o=[],s=[];t&&(a=(t?.posStateNums??``).toString().split(`,`).filter(Boolean),o=(t?.neuStateNums??``).toString().split(`,`).filter(Boolean),s=(t?.negStateNums??``).toString().split(`,`).filter(Boolean));for(let t=0;t<r.length;t++){let n=e?.vCols[r[t]],c=r[t];c=c.replace(/column/gi,``),c=c.replace(/N/gi,`-`);let l=parseInt(c,10);for(let e=0;e<n.length;e++){let t={},r=n[e].statementNum.toString();t.statement=parseInt(n[e].statementNum,10),t.sortValue=l;let c=`error`;a.includes(r)?c=`p`:o.includes(r)?c=`u`:s.includes(r)&&(c=`n`),t.presortVal=c,i.push(t)}}i.sort((e,t)=>e.statement-t.statement);let c=``,l=``;for(let e=0;e<i.length;e++)c+=`${i[e].sortValue}|`,l+=`${i[e].statement}*${i[e].presortVal}*${i[e].sortValue}|`;return c.charAt(c.length-1)===`|`&&(c=c.substring(0,c.length-1)),l.charAt(l.length-1)===`|`&&(l=l.substring(0,l.length-1)),n===!0||n===`true`?{sort:c,presortTrace:l}:{sort:c}},Zw=(e,t)=>{if(!e||!e.vCols||Object.keys(e.vCols).length===0)return;let n=Object.keys(e.vCols),r=[],i=[],a=[],o=[];t&&(i=(t?.posStateNums??``).toString().split(`,`).filter(Boolean),a=(t?.neuStateNums??``).toString().split(`,`).filter(Boolean),o=(t?.negStateNums??``).toString().split(`,`).filter(Boolean));for(let s=0;s<n.length;s++){let c=e?.vCols[n[s]],l=n[s];l=l.replace(/column/gi,``),l=l.replace(/N/gi,`-`);let u=parseInt(l,10);for(let e=0;e<c.length;e++){let n={},s=parseInt(c[e].statementNum,10),l=c[e].statementNum.toString();n.statement=s,n.sortValue=u;let d;if(t)d=i.includes(l)?`p`:a.includes(l)?`u`:o.includes(l)?`n`:`error`;else{let t=Number(c[e].psValue);d=t>0?`p`:t===0?`u`:t<0?`n`:`error`}n.presortVal=d,r.push(n)}}r.sort((e,t)=>e.statement-t.statement);let s=``,c=``;for(let e=0;e<r.length;e++)s+=`${r[e].sortValue}|`,c+=`${r[e].statement}*${r[e].presortVal}*${r[e].sortValue}|`;return s.charAt(s.length-1)===`|`&&(s=s.substring(0,s.length-1)),c.charAt(c.length-1)===`|`&&(c=c.substring(0,c.length-1)),{r20:`sort: ${s}`,r21:`presortTrace: ${c}`}},Qw=()=>{try{let e=JSON.parse(localStorage.getItem(`resultsPresort`)),t={},n=e?.npos;isNaN(n)&&(n=0);let r=e?.nneu;isNaN(r)&&(r=0);let i=e?.nneg;return isNaN(i)&&(i=0),t.npos=n,t.posStateNums=e?.posStateNums||[],t.nneu=r,t.neuStateNums=e?.neuStateNums||[],t.nneg=i,t.negStateNums=e?.negStateNums||[],t}catch(e){return console.log(e),{}}};function $w(e,t){return function(){return e.apply(t,arguments)}}var{toString:eT}=Object.prototype,{getPrototypeOf:tT}=Object,{iterator:nT,toStringTag:rT}=Symbol,iT=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),aT=(e,t)=>{let n=e,r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),iT(n,t))return!0;n=tT(n)}return!1},oT=(e,t)=>e!=null&&aT(e,t)?e[t]:void 0,sT=(e=>t=>{let n=eT.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),cT=e=>(e=e.toLowerCase(),t=>sT(t)===e),lT=e=>t=>typeof t===e,{isArray:uT}=Array,dT=lT(`undefined`);function fT(e){return e!==null&&!dT(e)&&e.constructor!==null&&!dT(e.constructor)&&gT(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var pT=cT(`ArrayBuffer`);function mT(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&pT(e.buffer),t}var hT=lT(`string`),gT=lT(`function`),_T=lT(`number`),vT=e=>typeof e==`object`&&!!e,yT=e=>e===!0||e===!1,bT=e=>{if(!vT(e))return!1;let t=tT(e);return(t===null||t===Object.prototype||tT(t)===null)&&!aT(e,rT)&&!aT(e,nT)},xT=e=>{if(!vT(e)||fT(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},ST=cT(`Date`),CT=cT(`File`),wT=e=>!!(e&&e.uri!==void 0),TT=e=>e&&e.getParts!==void 0,ET=cT(`Blob`),DT=cT(`FileList`),OT=cT(`Set`),kT=e=>vT(e)&&gT(e.pipe);function AT(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var jT=AT(),MT=jT.FormData===void 0?void 0:jT.FormData,NT=e=>{if(!e)return!1;if(MT&&e instanceof MT)return!0;let t=tT(e);if(!t||t===Object.prototype||!gT(e.append))return!1;let n=sT(e);return n===`formdata`||n===`object`&&gT(e.toString)&&e.toString()===`[object FormData]`},PT=cT(`URLSearchParams`),[FT,IT,LT,RT]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(cT),zT=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function BT(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),uT(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(fT(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function VT(e,t){if(fT(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var HT=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,UT=e=>!dT(e)&&e!==HT;function WT(...e){let{caseless:t,skipUndefined:n}=UT(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&VT(r,i)||i,o=iT(r,a)?r[a]:void 0;bT(o)&&bT(e)?r[a]=WT(o,e):bT(e)?r[a]=WT({},e):uT(e)?r[a]=e.slice():(!n||!dT(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||fT(n)||(BT(n,i),typeof n!=`object`||uT(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];nE.call(n,t)&&i(n[t],t)}}return r}var GT=(e,t,n,{allOwnKeys:r}={})=>(BT(t,(t,r)=>{n&&gT(t)?Object.defineProperty(e,r,{__proto__:null,value:$w(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),KT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),qT=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},JT=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-->0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&tT(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},YT=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},XT=e=>{if(!e)return null;if(uT(e))return e;let t=e.length;if(!_T(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},ZT=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&tT(Uint8Array)),QT=(e,t)=>{let n=(e&&e[nT]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},$T=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},eE=cT(`HTMLFormElement`),tE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:nE}=Object.prototype,rE=cT(`RegExp`),iE=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};BT(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},aE=e=>{iE(e,(t,n)=>{if(gT(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(gT(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},oE=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return uT(e)?r(e):r(String(e).split(t)),n},sE=()=>{},cE=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function lE(e){return!!(e&&gT(e.append)&&e[rT]===`FormData`&&e[nT])}var uE=e=>{let t=new WeakSet,n=e=>{if(vT(e)){if(t.has(e))return;if(fT(e))return e;if(!(`toJSON`in e)){t.add(e);let r;if(OT(e)){r=[];for(let t of e){let e=n(t);!dT(e)&&r.push(e)}}else r=uT(e)?[]:{},BT(e,(e,t)=>{let i=n(e);!dT(i)&&(r[t]=i)});return t.delete(e),r}}return e};return n(e)},dE=cT(`AsyncFunction`),fE=e=>e&&(vT(e)||gT(e))&&gT(e.then)&&gT(e.catch),pE=((e,t)=>e?setImmediate:t?((e,t)=>(HT.addEventListener(`message`,({source:n,data:r})=>{n===HT&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),HT.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,gT(HT.postMessage)),mE=typeof queueMicrotask<`u`?queueMicrotask.bind(HT):typeof process<`u`&&process.nextTick||pE,hE=e=>e!=null&&gT(e[nT]),Q={isArray:uT,isArrayBuffer:pT,isBuffer:fT,isFormData:NT,isArrayBufferView:mT,isString:hT,isNumber:_T,isBoolean:yT,isObject:vT,isPlainObject:bT,isEmptyObject:xT,isReadableStream:FT,isRequest:IT,isResponse:LT,isHeaders:RT,isUndefined:dT,isDate:ST,isFile:CT,isReactNativeBlob:wT,isReactNative:TT,isBlob:ET,isRegExp:rE,isFunction:gT,isStream:kT,isURLSearchParams:PT,isTypedArray:ZT,isFileList:DT,forEach:BT,merge:WT,extend:GT,trim:zT,stripBOM:KT,inherits:qT,toFlatObject:JT,kindOf:sT,kindOfTest:cT,endsWith:YT,toArray:XT,forEachEntry:QT,matchAll:$T,isHTMLForm:eE,hasOwnProperty:iT,hasOwnProp:iT,hasOwnInPrototypeChain:aT,getSafeProp:oT,reduceDescriptors:iE,freezeMethods:aE,toObjectSet:oE,toCamelCase:tE,noop:sE,toFiniteNumber:cE,findKey:VT,global:HT,isContextDefined:UT,isSpecCompliantForm:lE,toJSONObject:uE,isAsyncFn:dE,isThenable:fE,setImmediate:pE,asap:mE,isIterable:hE,isSafeIterable:e=>e!=null&&aT(e,nT)&&hE(e)},gE=Q.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),_E=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim();let a=Q.hasOwnProp(t,n);!n||a&&Q.hasOwnProp(gE,n)||(n===`set-cookie`?a?t[n].push(r):t[n]=[r]:t[n]=a?t[n]+`, `+r:r)}),t};function vE(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var yE=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),bE=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function xE(e,t){return Q.isArray(e)?e.map(e=>xE(e,t)):vE(String(e).replace(t,``))}var SE=e=>xE(e,yE),CE=e=>xE(e,bE);function wE(e){let t=Object.create(null);return Q.forEach(e.toJSON(),(e,n)=>{t[n]=CE(e)}),t}var TE=Symbol(`internals`);function EE(e){return e&&String(e).trim().toLowerCase()}function DE(e){return e===!1||e==null?e:Q.isArray(e)?e.map(DE):SE(String(e))}function OE(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var kE=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function AE(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}function jE(e){let t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let n=``;for(let r=1;r<t;r++){let i=e.charCodeAt(r);if(i===34||i===92&&(r+=1,r>=t))return e;n+=e[r]}return n}function ME(e){let t=Object.create(null),n=String(e),r=0,i=!1,a=!1;function o(e){let i=AE(n.slice(r,e)),a=i.indexOf(`=`);if(a<1)return;let o=AE(i.slice(0,a));if(!kE.test(o))return;let s=o.toLowerCase();if(s===`__proto__`||s===`constructor`||s===`prototype`)return;let c=AE(i.slice(a+1));t[s]=jE(c)}for(let e=0;e<n.length;e++){let t=n.charCodeAt(e);i?a?a=!1:t===92?a=!0:t===34&&(i=!1):t===34?i=!0:(t===44||t===59)&&(o(e),r=e+1)}return o(n.length),t}var NE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function PE(e,t,n,r,i){if(Q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),Q.isString(t)){if(Q.isString(r))return t.indexOf(r)!==-1;if(Q.isRegExp(r))return r.test(t)}}function FE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function IE(e,t){let n=Q.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var LE=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=EE(t);if(!i)return;let a=Q.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=DE(e))}let a=(e,t)=>Q.forEach(e,(e,n)=>i(e,n,t));if(Q.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(Q.isString(e)&&(e=e.trim())&&!NE(e))a(_E(e),t);else if(Q.isObject(e)&&Q.isSafeIterable(e)){let n=Object.create(null),r,i;for(let t of e){if(!Q.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);i=t[0],Q.hasOwnProp(n,i)?(r=n[i],n[i]=Q.isArray(r)?[...r,t[1]]:[r,t[1]]):n[i]=t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=EE(e),e){let n=Q.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return OE(e);if(Q.isFunction(t))return t.call(this,e,n);if(Q.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=EE(e),e){let n=Q.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||PE(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=EE(e),e){let i=Q.findKey(n,e);i&&(!t||PE(n,n[i],i,t))&&(delete n[i],r=!0)}}return Q.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||PE(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return Q.forEach(this,(r,i)=>{let a=Q.findKey(n,i);if(a){t[a]=DE(r),delete t[i];return}let o=e?FE(i):String(i).trim();o!==i&&delete t[i],t[o]=DE(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return Q.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&Q.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){let e=this.get(`set-cookie`);return Q.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return ME(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[TE]=this[TE]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=EE(e);t[r]||(IE(n,e),t[r]=!0)}return Q.isArray(e)?e.forEach(r):r(e),this}};LE.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),Q.reduceDescriptors(LE.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),Q.freezeMethods(LE);var RE=`[REDACTED ****]`;function zE(e){if(Q.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(Q.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function BE(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||Q.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof LE&&(e=e.toJSON()),r.push(e);let t;if(Q.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);Q.isUndefined(r)||(t[n]=r)});else{if(!Q.isPlainObject(e)&&zE(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?RE:i(a);Q.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}function VE(e){try{return String(e)}catch{return``}}function HE(e){return e.errors.map(e=>{try{return e&&e.message?VE(e.message):VE(e)}catch{return``}}).filter(Boolean).join(`; `)||e.name||`AggregateError`}var $=class e extends Error{static from(t,n,r,i,a,o){let s=t.message;!s&&Q.isArray(t.errors)&&t.errors.length&&(s=HE(t));let c=new e(s,n||t.code,r,i,a);return Object.defineProperty(c,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),o&&Object.assign(c,o),c}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&Q.hasOwnProp(e,`redact`)?e.redact:void 0,n=Q.isArray(t)&&t.length>0?BE(e,t):Q.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};$.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,$.ERR_BAD_OPTION=`ERR_BAD_OPTION`,$.ECONNABORTED=`ECONNABORTED`,$.ETIMEDOUT=`ETIMEDOUT`,$.ECONNREFUSED=`ECONNREFUSED`,$.ERR_NETWORK=`ERR_NETWORK`,$.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,$.ERR_DEPRECATED=`ERR_DEPRECATED`,$.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,$.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,$.ERR_CANCELED=`ERR_CANCELED`,$.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,$.ERR_INVALID_URL=`ERR_INVALID_URL`,$.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function UE(e){return Q.isPlainObject(e)||Q.isArray(e)}function WE(e){return Q.endsWith(e,`[]`)?e.slice(0,-2):e}function GE(e,t,n){return e?e.concat(t).map(function(e,t){return e=WE(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function KE(e){return Q.isArray(e)&&!e.some(UE)}var qE=Q.toFlatObject(Q,{},null,function(e){return/^is[A-Z]/.test(e)});function JE(e,t,n){if(!Q.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=Q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Q.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||m,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&Q.isSpecCompliantForm(t),u=[];if(!Q.isFunction(i))throw TypeError(`visitor must be a function`);function d(e){if(e===null)return``;if(Q.isDate(e))return e.toISOString();if(Q.isBoolean(e))return e.toString();if(!l&&Q.isBlob(e))throw new $(`Blob is not supported. Use a Buffer instead.`);if(Q.isArrayBuffer(e)||Q.isTypedArray(e)){if(l&&typeof s==`function`)return new s([e]);throw new $(`Blob is not supported. Use a Buffer instead.`,$.ERR_NOT_SUPPORT)}return e}function f(e){if(e>c)throw new $(`Object is too deeply nested (`+e+` levels). Max depth: `+c,$.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(e,t){if(c===1/0)return JSON.stringify(e);let n=[];return JSON.stringify(e,function(e,r){if(!Q.isObject(r))return r;for(;n.length&&n[n.length-1]!==this;)n.pop();return n.push(r),f(t+n.length-1),r})}function m(e,n,i){let s=e;if(Q.isReactNative(t)&&Q.isReactNativeBlob(e))return t.append(GE(i,n,a),d(e)),!1;if(e&&!i&&typeof e==`object`){if(Q.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=p(e,1);else if(Q.isArray(e)&&KE(e)||(Q.isFileList(e)||Q.endsWith(n,`[]`))&&(s=Q.toArray(e)))return n=WE(n),s.forEach(function(e,r){!(Q.isUndefined(e)||e===null)&&t.append(o===!0?GE([n],r,a):o===null?n:n+`[]`,d(e))}),!1}return UE(e)?!0:(t.append(GE(i,n,a),d(e)),!1)}let h=Object.assign(qE,{defaultVisitor:m,convertValue:d,isVisitable:UE});function g(e,n,r=0){if(!Q.isUndefined(e)){if(f(r),u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),Q.forEach(e,function(e,a){(!(Q.isUndefined(e)||e===null)&&i.call(t,e,Q.isString(a)?a.trim():a,n,h))===!0&&g(e,n?n.concat(a):[a],r+1)}),u.pop()}}if(!Q.isObject(e))throw TypeError(`data must be an object`);return g(e),t}function YE(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function XE(e,t){this._pairs=[],e&&JE(e,this,t)}var ZE=XE.prototype;ZE.append=function(e,t){this._pairs.push([e,t])},ZE.toString=function(e){let t=e?t=>e.call(this,t,YE):YE;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function QE(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function $E(e,t,n){if(!t)return e;e||=``;let r=Q.isFunction(n)?{serialize:n}:n,i=Q.getSafeProp(r,`encode`)||QE,a=Q.getSafeProp(r,`serialize`),o;if(o=a?a(t,r):Q.isURLSearchParams(t)?t.toString():new XE(t,r).toString(i),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var eD=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){Q.forEach(this.handlers,function(t){t!==null&&e(t)})}},tD={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},nD={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:XE,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},rD=c({hasBrowserEnv:()=>iD,hasStandardBrowserEnv:()=>oD,hasStandardBrowserWebWorkerEnv:()=>sD,navigator:()=>aD,origin:()=>cD}),iD=typeof window<`u`&&typeof document<`u`,aD=typeof navigator==`object`&&navigator||void 0,oD=iD&&(!aD||[`ReactNative`,`NativeScript`,`NS`].indexOf(aD.product)<0),sD=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,cD=iD&&window.location.href||`http://localhost`,lD={...rD,...nD};function uD(e,t){return JE(e,new lD.classes.URLSearchParams,{visitor:function(e,t,n,r){return lD.isNode&&Q.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}var dD=100;function fD(e){if(e>dD)throw new $(`FormData field is too deeply nested (`+e+` levels). Max depth: `+dD,$.ERR_FORM_DATA_DEPTH_EXCEEDED)}function pD(e){let t=[],n=/[^.[\]]+|\[([^.[\]]*)]/g,r;for(;(r=n.exec(e))!==null;)fD(t.length),t.push(r[0]===`[]`?``:r[1]||r[0]);return t}function mD(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function hD(e){function t(e,n,r,i){fD(i);let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&Q.isArray(r)?r.length:a,s?(Q.hasOwnProp(r,a)?r[a]=Q.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!Q.hasOwnProp(r,a)||!Q.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&Q.isArray(r[a])&&(r[a]=mD(r[a])),!o)}if(Q.isFormData(e)&&Q.isFunction(e.entries)){let n={};return Q.forEachEntry(e,(e,r)=>{t(pD(e),r,n,0)}),n}return null}var gD=(e,t)=>e!=null&&Q.hasOwnProp(e,t)?e[t]:void 0;function _D(e,t,n){if(Q.isString(e))try{return(t||JSON.parse)(e),Q.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var vD={transitional:tD,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=Q.isObject(e);if(i&&Q.isHTMLForm(e)&&(e=new FormData(e)),Q.isFormData(e))return r?JSON.stringify(hD(e)):e;if(Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)||Q.isReadableStream(e))return e;if(Q.isArrayBufferView(e))return e.buffer;if(Q.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=gD(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return uD(e,t).toString();if((a=Q.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=gD(this,`env`),r=n&&n.FormData;return JE(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),_D(e)):e}],transformResponse:[function(e){let t=gD(this,`transitional`)||vD.transitional,n=t&&t.forcedJSONParsing,r=gD(this,`responseType`),i=r===`json`;if(Q.isResponse(e)||Q.isReadableStream(e))return e;if(e&&Q.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,gD(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?$.from(e,$.ERR_BAD_RESPONSE,this,null,gD(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:lD.classes.FormData,Blob:lD.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};Q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{vD.headers[e]={}});function yD(e,t){let n=this||vD,r=t||n,i=LE.from(r.headers),a=r.data;return Q.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function bD(e){return!!(e&&e.__CANCEL__)}var xD=class extends ${constructor(e,t,n){super(e??`canceled`,$.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function SD(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new $(`Request failed with status code `+n.status,n.status>=400&&n.status<500?$.ERR_BAD_REQUEST:$.ERR_BAD_RESPONSE,n.config,n.request,n))}function CD(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function wD(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function TD(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var ED=(e,t,n=3)=>{let r=0,i=wD(50,250);return TD(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=Math.max(0,o==null?a:Math.min(a,o)),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},DD=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},OD=(e,t=Q.asap)=>(...n)=>t(()=>e(...n)),kD=lD.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,lD.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(lD.origin),lD.navigator&&/(msie|trident)/i.test(lD.navigator.userAgent)):()=>!0,AD=lD.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];Q.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),Q.isString(r)&&s.push(`path=${r}`),Q.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),Q.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function jD(e){return typeof e==`string`&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function MD(e,t){if(!t)return e;let n=e.length;for(;n>0&&e.charCodeAt(n-1)===47;)n--;return e.slice(0,n)+`/`+t.replace(/^\/+/,``)}var ND=/^https?:(?!\/\/)/i,PD=/[\t\n\r]/g;function FD(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function ID(e){return FD(e).replace(PD,``)}function LD(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,n=``)=>`${t}${n}${RE}`)}function RD(e){let t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${RE}@`),n=t.indexOf(`#`),r=(n===-1?t:t.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${RE}`);return n===-1?r:`${r}#${LD(t.slice(n+1))}`}function zD(e,t){if(typeof e==`string`){let n=ID(e);if(ND.test(n))throw new $(`Invalid URL ${JSON.stringify(RD(n))}: missing "//" after protocol`,$.ERR_INVALID_URL,t)}}function BD(e,t,n,r){zD(t,r);let i=!jD(t);return e&&(i||n===!1)?(zD(e,r),MD(e,t)):t}var VD=e=>e instanceof LE?{...e}:e,HD=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function UD(e,t){e||={},t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return Q.isPlainObject(e)&&Q.isPlainObject(t)?Q.merge.call({caseless:r},e,t):Q.isPlainObject(t)?Q.merge({},t):Q.isArray(t)?t.slice():t}function i(e,t,n,i){if(!Q.isUndefined(t))return r(e,t,n,i);if(!Q.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!Q.isUndefined(t))return r(void 0,t)}function o(e,t){if(!Q.isUndefined(t))return r(void 0,t);if(!Q.isUndefined(e))return r(void 0,e)}function s(n){let r=Q.hasOwnProp(t,`transitional`)?t.transitional:void 0;if(!Q.isUndefined(r)){if(Q.isPlainObject(r)){if(Q.hasOwnProp(r,n))return r[n]}else return}let i=Q.hasOwnProp(e,`transitional`)?e.transitional:void 0;if(Q.isPlainObject(i)&&Q.hasOwnProp(i,n))return i[n]}function c(n,i,a){if(Q.hasOwnProp(t,a))return r(n,i);if(Q.hasOwnProp(e,a))return r(void 0,n)}let l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(VD(e),VD(t),n,!0)};return Q.forEach(HD({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=Q.hasOwnProp(l,r)?l[r]:i,o=a(Q.hasOwnProp(e,r)?e[r]:void 0,Q.hasOwnProp(t,r)?t[r]:void 0,r);Q.isUndefined(o)&&a!==c||(n[r]=o)}),Q.hasOwnProp(t,`validateStatus`)&&Q.isUndefined(t.validateStatus)&&s(`validateStatusUndefinedResolves`)===!1&&(Q.hasOwnProp(e,`validateStatus`)?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}var WD=[`content-type`,`content-length`];function GD(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t||{}).forEach(([t,n])=>{WD.includes(t.toLowerCase())&&e.set(t,n)})}var KD=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function qD(e){let t=UD({},e),n=e=>Q.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=LE.from(s),t.url=$E(BD(l,d,u,t),n(`params`),n(`paramsSerializer`)),c){let t=Q.getSafeProp(c,`username`)||``,n=Q.getSafeProp(c,`password`)||``;try{s.set(`Authorization`,`Basic `+btoa(t+`:`+(n?KD(n):``)))}catch(t){throw $.from(t,$.ERR_BAD_OPTION_VALUE,e)}}if(Q.isFormData(r)&&(lD.hasStandardBrowserEnv||lD.hasStandardBrowserWebWorkerEnv||Q.isReactNative(r)?s.setContentType(void 0):Q.isFunction(r.getHeaders)&&GD(s,r.getHeaders(),n(`formDataHeaderPolicy`))),lD.hasStandardBrowserEnv&&(Q.isFunction(i)&&(i=i(t)),i===!0||i==null&&kD(t.url))){let e=a&&o&&AD.read(o);e&&s.set(a,e)}return t}var JD=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=qD(e),i=r.data,a=LE.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=LE.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());SD(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new $(`Request aborted`,$.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new $(t&&t.message?t.message:`Network Error`,$.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||tD;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new $(t,i.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&Q.forEach(wE(a),function(e,t){h.setRequestHeader(t,e)}),Q.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=ED(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=ED(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new xD(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=CD(r.url);if(_&&!lD.protocols.includes(_)){n(new $(`Unsupported protocol `+_+`:`,$.ERR_BAD_REQUEST,e)),m();return}h.send(i||null)})},YD=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof $?t:new xD(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new $(`timeout of ${t}ms exceeded`,$.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>{if(!r){if(e.aborted){i.call(e);return}e.addEventListener(`abort`,i,{once:!0})}});let{signal:s}=n;return s.unsubscribe=()=>Q.asap(o),s},XD=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},ZD=async function*(e,t){for await(let n of QD(e))yield*XD(n,t)},QD=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},$D=(e,t,n,r)=>{let i=ZD(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},eO=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,tO=(e,t,n)=>t+2<n&&eO(e.charCodeAt(t+1))&&eO(e.charCodeAt(t+2)),nO=e=>e<=57?e-48:(e&223)-55,rO=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,iO=e=>e===9||e===10||e===12||e===13||e===32,aO=e=>{let t=Math.floor(e/4),n=e%4;return t*3+(n===2?1:n===3?2:0)},oO=e=>{let t=e.length,n=0;return t>0&&e.charCodeAt(t-1)===61&&(n++,t>1&&e.charCodeAt(t-2)===61&&n++),Math.floor((t-n)*3/4)},sO=e=>{let t=e.length,n=0,r=0,i=!1;for(let a=0;a<t;a++){let o=e.charCodeAt(a);if(o===37&&tO(e,a,t)&&(o=nO(e.charCodeAt(a+1))*16+nO(e.charCodeAt(a+2)),a+=2),!iO(o)){if(o===61){r++;continue}if(!rO(o)||r>0){i=!0;continue}n++}}return i||r>2||r>0&&(n+r)%4!=0||n%4==1?oO(e):aO(n)},cO=(e,t)=>{if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let n=e.indexOf(`,`);if(n<0)return 0;let r=e.slice(5,n),i=e.slice(n+1);if(/;base64/i.test(r))return t(i);let a=0;for(let e=0,t=i.length;e<t;e++){let n=i.charCodeAt(e);if(n===37&&tO(i,e,t))a+=1,e+=2;else if(n<128)a+=1;else if(n<2048)a+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=i.charCodeAt(e+1);t>=56320&&t<=57343?(a+=4,e++):a+=3}else a+=3}return a};function lO(e){let t=typeof e==`string`?e.indexOf(`#`):-1;return cO(t===-1?e:e.slice(0,t),sO)}var uO=`1.19.0`,dO=65536,{isFunction:fO}=Q,pO=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),mO=e=>{if(!Q.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},hO=(e,...t)=>{try{return!!e(...t)}catch{return!1}},gO=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},_O=e=>{let t=Q.global!==void 0&&Q.global!==null?Q.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=Q.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?fO(i):typeof fetch==`function`,c=fO(a),l=fO(o);if(!s)return!1;let u=s&&fO(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&hO(()=>{let e=!1,t=new a(lD.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&hO(()=>Q.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new $(`Response type '${e}' is not supported`,$.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(Q.isBlob(e))return e.size;if(Q.isSpecCompliantForm(e))return(await new a(lD.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(Q.isArrayBufferView(e)||Q.isArrayBuffer(e))return e.byteLength;if(Q.isURLSearchParams(e)&&(e+=``),Q.isString(e))return(await d(e)).byteLength},g=async(e,t)=>Q.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:d,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:b,headers:x,withCredentials:S=`same-origin`,fetchOptions:C,maxContentLength:w,maxBodyLength:T}=qD(e),E=Q.isNumber(w)&&w>-1,D=Q.isNumber(T)&&T>-1,O=t=>Q.hasOwnProp(e,t)?e[t]:void 0,k=i||fetch;b=b?(b+``).toLowerCase():`text`;let A=YD([l,d&&d.toAbortSignal()],_),j=null,M=A&&A.unsubscribe&&(()=>{A.unsubscribe()}),N,P=null,F=()=>new $(`Request body larger than maxBodyLength limit`,$.ERR_BAD_REQUEST,e,j);try{let i,l=O(`auth`);if(l&&(i={username:Q.getSafeProp(l,`username`)||``,password:Q.getSafeProp(l,`password`)||``}),gO(t)){let e=new URL(t,lD.origin);!i&&(e.username||e.password)&&(i={username:mO(e.username),password:mO(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(x.delete(`authorization`),x.set(`Authorization`,`Basic `+btoa(pO((i.username||``)+`:`+(i.password||``))))),E&&typeof t==`string`&&t.startsWith(`data:`)&&lO(t)>w)throw new $(`maxContentLength size of `+w+` exceeded`,$.ERR_BAD_RESPONSE,e,j);if(D&&n!==`get`&&n!==`head`){let e=await h(s);if(typeof e==`number`&&isFinite(e)&&(N=e,e>T))throw F()}let d=D&&(Q.isReadableStream(s)||Q.isStream(s)),_=(e,t,n)=>$D(e,dO,e=>{if(D&&e>T)throw P=F();t&&t(e)},n);if(f&&n!==`get`&&n!==`head`&&(y||d)){if(N??=await g(x,s),N!==0||d){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(Q.isFormData(s)&&(n=e.headers.get(`content-type`))&&x.setContentType(n),e.body){let[t,n]=y&&DD(N,ED(OD(y)))||[];s=_(e.body,t,n)}}}else if(d&&!c&&u&&n!==`get`&&n!==`head`)s=_(s);else if(d&&c&&!f&&n!==`get`&&n!==`head`)throw new $(`Stream request bodies are not supported by the current fetch implementation`,$.ERR_NOT_SUPPORT,e,j);Q.isString(S)||(S=S?`include`:`omit`);let ee=c&&`credentials`in a.prototype;if(Q.isFormData(s)){let e=x.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&x.delete(`content-type`)}x.set(`User-Agent`,`axios/`+uO,!1);let I={...C,signal:A,method:n.toUpperCase(),headers:wE(x.normalize()),body:s,duplex:`half`,credentials:ee?S:void 0};j=c&&new a(t,I);let L=await(c?k(j,C):k(t,I)),R=LE.from(L.headers);if(E){let t=Q.toFiniteNumber(R.getContentLength());if(t!=null&&t>w)throw new $(`maxContentLength size of `+w+` exceeded`,$.ERR_BAD_RESPONSE,e,j)}let z=p&&(b===`stream`||b===`response`);if(p&&L.body&&(v||E||z&&M)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=L[e]});let n=Q.toFiniteNumber(R.getContentLength()),[r,i]=v&&DD(n,ED(OD(v),!0))||[],a=0;L=new o($D(L.body,dO,t=>{if(E&&(a=t,a>w))throw new $(`maxContentLength size of `+w+` exceeded`,$.ERR_BAD_RESPONSE,e,j);r&&r(t)},()=>{i&&i(),M&&M()}),t)}b||=`text`;let B=await m[Q.findKey(m,b)||`text`](L,e);if(E&&!p&&!z){let t;if(B!=null&&(typeof B.byteLength==`number`?t=B.byteLength:typeof B.size==`number`?t=B.size:typeof B==`string`&&(t=typeof r==`function`?new r().encode(B).byteLength:B.length)),typeof t==`number`&&t>w)throw new $(`maxContentLength size of `+w+` exceeded`,$.ERR_BAD_RESPONSE,e,j)}return!z&&M&&M(),await new Promise((t,n)=>{SD(t,n,{data:B,headers:LE.from(L.headers),status:L.status,statusText:L.statusText,config:e,request:j})})}catch(t){if(M&&M(),A&&A.aborted&&A.reason instanceof $){let n=A.reason;throw n.config=e,j&&(n.request=j),t!==n&&Object.defineProperty(n,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),n}if(P)throw j&&!P.request&&(P.request=j),P;if(t instanceof $)throw j&&!t.request&&(t.request=j),t;if(t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)){let n=new $(`Network Error`,$.ERR_NETWORK,e,j,t&&t.response);throw Object.defineProperty(n,"cause",{__proto__:null,value:t.cause||t,writable:!0,enumerable:!1,configurable:!0}),n}throw $.from(t,t&&t.code,e,j,t&&t.response)}}},vO=new Map,yO=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=vO;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:_O(t)),l=c;return c};yO();var bO={http:null,xhr:JD,fetch:{get:yO}};Q.forEach(bO,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var xO=e=>`- ${e}`,SO=e=>Q.isFunction(e)||e===null||e===!1;function CO(e,t){e=Q.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!SO(r)&&(i=bO[(n=String(r)).toLowerCase()],i===void 0))throw new $(`Unknown adapter '${n}'`);if(i&&(Q.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new $(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(xO).join(`
`):` `+xO(e[0]):`as no adapter specified`),$.ERR_NOT_SUPPORT)}return i}var wO={getAdapter:CO,adapters:bO};function TO(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xD(null,e)}function EO(e){return TO(e),e.headers=LE.from(e.headers),e.data=yD.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),wO.getAdapter(e.adapter||vD.adapter,e)(e).then(function(t){TO(e),e.response=t;try{t.data=yD.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=LE.from(t.headers),t},function(t){if(!bD(t)&&(TO(e),t&&t.response)){e.response=t.response;try{t.response.data=yD.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=LE.from(t.response.headers)}return Promise.reject(t)})}var DO={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{DO[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var OO={};DO.transitional=function(e,t,n){function r(e,t){return`[Axios v`+uO+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new $(r(i,` has been removed`+(t?` in `+t:``)),$.ERR_DEPRECATED);return t&&!OO[i]&&(OO[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}},DO.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function kO(e,t,n){if(typeof e!=`object`||!e)throw new $(`options must be an object`,$.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new $(`option `+a+` must be `+n,$.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $(`Unknown option `+a,$.ERR_BAD_OPTION)}}var AO={assertOptions:kO,validators:DO},jO=AO.validators,MO=class{constructor(e){this.defaults=e||{},this.interceptors={request:new eD,response:new eD}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=UD(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&AO.assertOptions(n,{silentJSONParsing:jO.transitional(jO.boolean),forcedJSONParsing:jO.transitional(jO.boolean),clarifyTimeoutError:jO.transitional(jO.boolean),legacyInterceptorReqResOrdering:jO.transitional(jO.boolean),advertiseZstdAcceptEncoding:jO.transitional(jO.boolean),validateStatusUndefinedResolves:jO.transitional(jO.boolean)},!1),r!=null&&(Q.isFunction(r)?t.paramsSerializer={serialize:r}:AO.assertOptions(r,{encode:jO.function,serialize:jO.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),AO.assertOptions(t,{baseUrl:jO.spelling(`baseURL`),withXsrfToken:jO.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&Q.merge(i.common,i[t.method]);i&&Q.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=LE.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||tD;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[EO.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e?e(f):f}catch(e){if(!t){l=Promise.reject(e);break}try{let n=t.call(this,e);Q.isThenable(n)&&(l=Promise.resolve(n).then(()=>EO.call(this,f)))}catch(e){l=Promise.reject(e)}break}}if(!l)try{l=EO.call(this,f)}catch(e){l=Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=UD(this.defaults,e),$E(BD(e.baseURL,e.url,e.allowAbsoluteUrls,e),e.params,e.paramsSerializer)}};Q.forEach([`delete`,`get`,`head`,`options`],function(e){MO.prototype[e]=function(t,n){return this.request(UD(n||{},{method:e,url:t,data:n&&Q.hasOwnProp(n,`data`)?n.data:void 0}))}}),Q.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(UD(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}MO.prototype[e]=t(),e!==`query`&&(MO.prototype[e+`Form`]=t(!0))});var NO=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new xD(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function PO(e){return function(t){return e.apply(null,t)}}function FO(e){return Q.isObject(e)&&e.isAxiosError===!0}var IO={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(IO).forEach(([e,t])=>{IO[t]=e});function LO(e){let t=new MO(e),n=$w(MO.prototype.request,t);return Q.extend(n,MO.prototype,t,{allOwnKeys:!0}),Q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return LO(UD(e,t))},n}var RO=LO(vD);RO.Axios=MO,RO.CanceledError=xD,RO.CancelToken=NO,RO.isCancel=bD,RO.VERSION=uO,RO.toFormData=JE,RO.AxiosError=$,RO.Cancel=RO.CanceledError,RO.all=function(e){return Promise.all(e)},RO.spread=PO,RO.isAxiosError=FO,RO.mergeConfig=UD,RO.AxiosHeaders=LE,RO.formToJSON=e=>hD(Q.isHTMLForm(e)?new FormData(e):e),RO.getAdapter=wO.getAdapter,RO.HttpStatusCode=IO,RO.default=RO;var zO=e=>e.langObj,BO=e=>{let t=q(zO),n=G(K(t.copiedText))||``,r=G(K(t.copyTextError))||``,[i,a]=(0,S.useState)(``),o=(0,S.useRef)(null);(0,S.useEffect)(()=>()=>{o.current&&clearTimeout(o.current)},[]);async function s(){try{let t=``;if(e.type===`results`)for(let[n,r]of Object.entries(e.content))t+=`${n}: ${r} * `;else t=e.content;await navigator.clipboard.writeText(t),a(`success`)}catch(e){a(`error`),console.error(`Failed to copy: `,e)}finally{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{a(``),o.current=null},3e3)}}return(0,W.jsxs)(HO,{children:[(0,W.jsx)(VO,{tabIndex:0,onClick:()=>{s().then(()=>{console.log(`copied to clipboard`)})},children:e.text}),(0,W.jsxs)(UO,{"aria-live":`polite`,children:[i===`success`&&n,i===`error`&&r]})]})},VO=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${({theme:e})=>e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
`,HO=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`,UO=U.div`
  font-size: 1.5em;
  font-weight: bold;
  height: 50px;
  min-width: 200px;
  /* border: 1px solid #2e6da4; */
`,WO=e=>e.langObj,GO=e=>e.configObj,KO=e=>e.setDisableRefreshCheck,qO=e=>{let t=q(WO),n=q(GO),r=J(KO),i=G(K(t.defaultEmailClientFail))||``,a=G(K(t.submitFailMessage))||``,o=G(K(t.submitFailMessage2))||``,s=G(K(t.submitFailMessage3))||``,c=G(K(t.unableToConnect))||``,[l,u]=(0,S.useState)(a),d=e.results;n.emailAddress;let f=G(K(t.btnTransferEmail))||``,p=t=>{t.preventDefault();let n=Object.entries(e.results).map(([e,t])=>`${e}: ${t}`).join(`
`),r=new Blob([n],{type:`text/plain`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`my_Q-sort_results.txt`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},m=r=>{r.preventDefault(),u(i);let a=``;for(let[t,n]of Object.entries(e.results))a+=`${t}:| ${n} | `;navigator.userAgent.toLowerCase().indexOf(`chrome`)>-1?window.open(`mailto:${n.emailAddress}?subject=${t.emailSubjectText}`):window.location.href=`mailto:${n.emailAddress}?subject=${t.emailSubjectText}`};return(0,S.useEffect)(()=>{r(!0)},[r]),(0,W.jsxs)(QO,{children:[(0,W.jsx)(YO,{children:c}),(0,W.jsx)(ZO,{children:o}),(0,W.jsx)(BO,{type:`results`,content:d,text:t.clipboardResults}),l,(0,W.jsx)(JO,{tabindex:`0`,onClick:e=>m(e),children:f}),(0,W.jsx)(ZO,{children:s}),(0,W.jsx)(XO,{onClick:e=>p(e),children:t.downloadResultsButtonText})]})},JO=U.button`
  display: flex;
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,YO=U.div`
  text-align: center;
  width: 70%;
  font-weight: bold;
  font-size: 2.2em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`,XO=U.button`
  border-color: #2e6da4;
  color: white;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
`,ZO=U.div`
  text-align: center;
  width: 70%;
`,QO=U.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-size: 1.4em;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`,$O=e=>e.langObj,ek=e=>e.transmittingData,tk=e=>e.setTransmittingData,nk=e=>e.checkInternetConnection,rk=e=>e.setCheckInternetConnection,ik=e=>e.configObj,ak=e=>e.setDisplayGoodbyeMessage,ok=e=>e.setDisplayBelowButtonText,sk=e=>{let t=q($O),n=J(ek),r=J(tk),i=J(nk),a=J(rk),o=q(ik),s=J(ak),c=G(K(t.checkInternetMessage))||``,l=J(ok),u=G(K(t.btnTransfer))||``,[d,f]=(0,S.useState)(0),p=t=>{t.preventDefault(),l(!0),r(!0),a(!1);let n=setTimeout(()=>{r(!1),a(!0),l(!1)},1e4);console.log(JSON.stringify(e.results,null,2));let i=o.baserowToken,c=o.baserowDatabaseIdNumber;if(i==null){console.log(`Baserow token is not set`);return}RO({method:`POST`,url:`https://api.baserow.io/api/database/rows/table/${c}/?user_field_names=true`,headers:{Authorization:`Token ${i}`,"Content-Type":`application/json`},data:e.results}).then(e=>{console.log(e),clearTimeout(n),r(!1),a(!1),s(!0)}).catch(t=>{console.log(t),clearTimeout(n),r(!1),a(!0),l(!1),f(e=>e+1),d+1>=2&&(console.log(`Baserow submission failed twice, showing fallback`),e.setShowText(!1))}),console.log(`submission processed`)};return(0,S.useEffect)(()=>{d>=2&&a(!1)},[d,a]),(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(td,{}),n?(0,W.jsx)(lk,{}):d<2?(0,W.jsx)(ck,{type:`button`,tabIndex:0,onClick:e=>p(e),disabled:n,children:u}):null,i&&(0,W.jsx)(uk,{children:c}),d>=2&&(0,W.jsx)(dk,{children:(0,W.jsx)(qO,{results:e.results})})]})},ck=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,lk=U.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #337ab7;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`,uk=U.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 1.2em;
  text-align: center;
  background-color: #ffc067;
  padding: 5px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-weight: bold;
`,dk=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 0.8em;
  text-align: center;
  background-color: #ffc067;
  margin-bottom: 30px;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
`,fk=()=>{try{let e=JSON.parse(localStorage.getItem(`resultsPresort`)),t={},n=e?.npos;isNaN(n)&&(n=0);let r=e?.nneu;isNaN(r)&&(r=0);let i=e?.nneg;return isNaN(i)&&(i=0),t.r14=`(numPos): ${n}`,t.r15=`(numNeu): ${r}`,t.r16=`(numNeg): ${i}`,t.r17=`(pos): ${e?.posStateNums||[]}`,t.r18=`(neu): ${e?.neuStateNums||[]}`,t.r19=`(neg): ${e?.negStateNums||[]}`,t}catch(e){return console.log(e),{}}},pk=e=>e.langObj,mk=e=>e.configObj,hk=e=>e.mapObj,gk=e=>e.setCurrentPage,_k=e=>e.displayGoodbyeMessage,vk=e=>e.displayBelowButtonText,yk=(e,t={})=>{try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(`Invalid JSON in localStorage: ${e}`,n),t}},bk=()=>{let e=q(pk),t=q(mk),n=q(hk),r=J(gk),i=J(_k),a=localStorage.getItem(`urlUsercode`)||``,o=J(vk),s=yk(`resultsSurvey`),[c,l]=(0,S.useState)(!0),[u,d]=(0,S.useState)({consent:`00:00:00`,landing:`00:00:00`,presort:`00:00:00`,thinning:`00:00:00`,sort:`00:00:00`,postsort:`00:00:00`,survey:`00:00:00`});(0,S.useEffect)(()=>{let e=(e,t=`00:00:00`)=>{let n=localStorage.getItem(e);return n===null?t:n},n={consent:e(`timeOnconsentPage`),landing:e(`timeOnlandingPage`),presort:e(`timeOnpresortPage`),thinning:e(`timeOnthinningPage`),sort:e(`timeOnsortPage`),postsort:e(`timeOnpostsortPage`),survey:e(`timeOnsurveyPage`)};(t.showConsentPage===!1||t.showConsentPage===`false`)&&(n.consent=`n/a`),(t.showPostsort===!1||t.showPostsort===`false`)&&(n.postsort=`n/a`),(t.showSurvey===!1||t.showSurvey===`false`)&&(n.survey=`n/a`),d(n)},[t]),(0,S.useEffect)(()=>{r(`submit`),localStorage.setItem(`currentPage`,`submit`)},[r]);let f=G(K(e.transferTextAbove))||``,p=G(K(e.transferTextBelow))||``,m=G(K(e.goodbyeMessage))||``,h=G(K(e.linkedProjectMessage))||``,g=K(e.linkedProjectBtnMessage)||``,_=G(K(e.transferHead))||``,v=yk(`resultsPresort`),y=yk(`sortColumns`),b=t.headerBarColor,x=rr(),C=(0,S.useMemo)(()=>{let e={},r={},i=localStorage.getItem(`randomId`);i||(i=X(),localStorage.setItem(`randomId`,i));let a=localStorage.getItem(`partId`)||`no part ID`,o=localStorage.getItem(`usercode`)||`no usercode set`,c=t.creationDate||`unknown date`;e.projectName=t.studyTitle,e.partId=a,e.randomId=i,e.urlUsercode=o,r.r1=t.studyTitle?`(projectName): ${t.studyTitle} - ${c}`:`(projectName): my Q study - ${c}`,r.r2=`(randomId): ${i}`,r.r3=`(partId): ${a}`,r.r4=`(urlUsercode): ${o}`,r.r5=`(dateTime): ${x}`,r.r6=`(desktop/mobile): desktop`,r.r7=`(timeOnConsentPage): ${u.consent}`,r.r8=`(timeOnWelcomePage): ${u.landing}`,r.r9=`(timeOnPresortPage): ${u.presort}`,r.r10=`(timeOnRefinePage): ${u.thinning}`,r.r11=`(timeOnSortPage): ${u.sort}`,r.r12=`(timeOnPostsortPage): ${u.postsort}`,r.r13=`(timeOnSurveyPage): ${u.survey}`;let l=Qw(),d=fk();e={...e,...l},r={...r,...d};let f=22;if(t.showPostsort){let i=gw(yk(`resultsPostsort`),n,t),a=e=>{let t=e.match(/^column(N)?(\d+)_(\d+)$/);if(!t)return{colNum:0,idx:0};let[,n,r,i]=t;return{colNum:n?-Number(r):Number(r),idx:Number(i)}},o=Object.fromEntries(Object.entries(i).sort(([e],[t])=>{let n=a(e),r=a(t);return r.colNum===n.colNum?n.idx-r.idx:r.colNum-n.colNum})),s=Object.keys(o);for(let t=0;t<s.length;t++){let n=s[t].split(`_`);e[n[0]]=o[s[t]],r[`r${f}`]=`${n[0]}: ${o[s[t]]}`,f++}}if(t.showSurvey&&s!==void 0){e={...e,...s};let t=Object.keys(s);for(let e=0;e<t.length;e++)r[`r${f}`]=`${t[e]}: ${s[t[e]]}`,f++}return{transmissionResults:e,baserowResults:r}},[t,n,u,s,x]),w,T;Object.keys(y).length!==0&&Object.keys(v).length!==0&&(w=Xw({...y},{...v},t.traceSorts),T=Zw({...y},{...v}));let E={...C.transmissionResults,...w},D={...C.baserowResults,...T};for(let e in E)(E[e]===null||E[e]===void 0)&&(E[e]=`no data`);return i===!0?t.linkToSecondProject===!0?(0,W.jsxs)(wk,{children:[h,(0,W.jsx)(`a`,{id:`secondProjectLink`,href:`${t.secondProjectUrl}/#/?usercode=${a}`,style:{targetNew:`tab`,textDecoration:`none`},children:(0,W.jsx)(Tk,{children:g})})]}):(0,W.jsx)(S.Fragment,{children:(0,W.jsx)(wk,{children:m})}):t.setupTarget===`local`?(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(xk,{background:b,children:_}),(0,W.jsx)(Kw,{}),(0,W.jsx)(Sk,{children:(0,W.jsx)(Iw,{results:E})})]}):(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(xk,{background:b,children:_}),(0,W.jsxs)(Sk,{children:[c&&(0,W.jsx)(Ck,{children:f}),(0,W.jsx)(sk,{results:D,setShowText:l}),o&&(0,W.jsx)(Ck,{children:p})]})]})},xk=U.div`
  width: calc(100vw - 4px);
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
`,Sk=U.div`
  display: flex;
  min-height: 600px;
  width: calc(100vw - 4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Ck=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 1.2em;
  width: 75vw;
  font-size: 1.35em;
  padding: 25px;
  align-self: center;
`,wk=U.div`
  display: flex;
  width: calc(100vw - 20px);
  height: calc(100vh - 50px);
  font-size: 22px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Tk=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 75px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
  a {
    text-decoration: none;
  }
`,Ek=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},n=`itemNum${e.opts.itemNum}`,r=e.check,i=G(K(e?.opts?.label))||``,a=G(K(e?.opts?.placeholder))||``,o=G(K(e?.opts?.note))||``,s=!0;(o.length<1||o===``)&&(s=!1);let[c,l]=kb(n,``),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=n=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=n.target.value,a=i.length;if((e.opts.restricted===`true`||e.opts.restricted===!0)&&(i=i.replace(/\D/g,``)),(e.opts.limited===`true`||e.opts.limited===!0)&&i.length>+e.opts.limitLength&&(i=i.substring(0,+e.opts.limitLength)),l(i),a>0){let t=xl(i);r[`itemNum${e.opts.itemNum}`]=t}else e.opts.required===!0||e.opts.required===`true`?r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:r[`itemNum${e.opts.itemNum}`]=`no response`;t.setItem(`resultsSurvey`,JSON.stringify(r))};return(0,S.useEffect)(()=>{let t=!1;c.length>0&&c!==``&&(t=!0),r===!0&&t<1&&e.opts.required===!0?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[r,c,e]),s?(0,W.jsxs)(Dk,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Ok,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(kk,{id:`noteText`,children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsx)(Ak,{type:`text`,value:c,placeholder:a,onChange:f})]}):(0,W.jsxs)(Dk,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Ok,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(Ak,{type:`text`,value:c,placeholder:a,onChange:f})]})},Dk=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Ok=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 50px;
  font-size: 18px;
  text-align: center;
  width: 100%;
  border-radius: 3px;
  background-color: lightgray;
`,kk=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Ak=U.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,jk=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},n=`itemNum${e.opts.itemNum}`,r=e.check,i=G(K(e.opts.label))||``,a=G(K(e.opts.note))||``,o=G(K(e.opts.placeholder))||``,s=!0;(a.length<1||a===``)&&(s=!1);let[c,l]=kb(n,``),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=n=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=n.target.value;if(l(i),i.length>0){let t=xl(i);r[`itemNum${e.opts.itemNum}`]=t}else e.opts.required===!0||e.opts.required===`true`?r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:r[`itemNum${e.opts.itemNum}`]=`no response`;t.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1;return c.length>0&&c!==``&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&r===!0&&p<1?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[r,c,p,e.opts.required]),s?(0,W.jsxs)(Mk,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Nk,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(Pk,{children:a}),(0,W.jsx)(Fk,{value:c,placeholder:o,onChange:f})]}):(0,W.jsxs)(Mk,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Nk,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(Fk,{value:c,placeholder:o,onChange:f})]})},Mk=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: whitesmoke;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Nk=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Pk=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Fk=U.textarea`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 0px;
  height: 150px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding: 5px;
`,Ik=e=>{let t=e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t=t.map(e=>e.trim()),t},n=e.opts.id,r=e.check,i=G(K(e.opts.label))||``,a=G(K(e.opts.note))||``,o=t(e.opts.options),s=!0;(a.length<1||a===``)&&(s=!1);let c=e.opts.other;c=c===`true`||c===!0;let l=o.length-1,[u,d]=kb(n,``),[f,p]=(0,S.useState)(!0),[m,h]=(0,S.useState)(`no input`),[g,_]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),v=({label:e,value:t,checked:n,setter:r})=>(0,W.jsx)(`label`,{children:(0,W.jsxs)(Vk,{children:[(0,W.jsx)(`input`,{type:`radio`,checked:n===t,onChange:()=>r(t),value:t}),(0,W.jsx)(Bk,{children:(0,W.jsx)(`div`,{children:e})})]})}),y=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));+t.target.value==+l&&c===!0?m===``?n[`itemNum${e.opts.itemNum}`]=`${+t.target.value+1}-no input`:n[`itemNum${e.opts.itemNum}`]=`${+t.target.value+1}-${m}`:n[`itemNum${e.opts.itemNum}`]=+t.target.value+1,+t.target.value==+l?p(!1):p(!0),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},b=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));t.target.value===``?n[`itemNum${e.opts.itemNum}`]=`${+l+1}-no input`:n[`itemNum${e.opts.itemNum}`]=`${+l+1}-${xl(t.target.value.trim())}`,h(xl(t.target.value.trim())),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},x=!1;u.length===0&&(x=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&r===!0&&x?_({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):_({bgColor:`whitesmoke`,border:`none`})},[r,x,e.opts.required]);let C=()=>{let e=o.map((e,t)=>(0,W.jsx)(`div`,{children:(0,W.jsx)(v,{value:t,checked:u,label:e,setter:d})},X()));return(0,W.jsx)(`div`,{children:e})};return s?(0,W.jsxs)(Lk,{bgColor:g.bgColor,border:g.border,children:[(0,W.jsx)(Rk,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(Hk,{children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(zk,{children:[(0,W.jsx)(`div`,{onChange:e=>y(e),children:(0,W.jsx)(C,{})}),c&&(0,W.jsx)(Uk,{disabled:f,onChange:e=>b(e)})]})]}):(0,W.jsxs)(Lk,{bgColor:g.bgColor,border:g.border,children:[(0,W.jsx)(Rk,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsxs)(zk,{onChange:e=>y(e),children:[(0,W.jsx)(C,{}),c&&(0,W.jsx)(Uk,{onChange:e=>b(e)})]})]})},Lk=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Rk=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,zk=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0px 20px 20px 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 100px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Bk=U.div`
  padding-left: 5px;
`,Vk=U.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`,Hk=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Uk=U.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`;function Wk(e,{insertAt:t}={}){if(!e||typeof document>`u`)return;let n=document.head||document.getElementsByTagName(`head`)[0],r=document.createElement(`style`);r.type=`text/css`,t===`top`&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}Wk(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline-offset:-1px;outline-color:var(--rmsc-primary)}.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;font-size:1em}.rmsc .search input:focus{background:var(--rmsc-hover)}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);var Gk={allItemsAreSelected:`All items are selected.`,clearSearch:`Clear Search`,clearSelected:`Clear Selected`,noOptions:`No options`,search:`Search`,selectAll:`Select All`,selectAllFiltered:`Select All (Filtered)`,selectSomeItems:`Select...`,create:`Create`},Kk={value:[],hasSelectAll:!0,className:`multi-select`,debounceDuration:200,options:[]},qk=S.createContext({}),Jk=({props:e,children:t})=>{let[n,r]=(0,S.useState)(e.options);return(0,S.useEffect)(()=>{r(e.options)},[e.options]),(0,W.jsx)(qk.Provider,{value:{t:t=>e.overrideStrings?.[t]||Gk[t],...Kk,...e,options:n,setOptions:r},children:t})},Yk=()=>S.useContext(qk);function Xk(e,t){let n=(0,S.useRef)(!1);(0,S.useEffect)(()=>{n.current?e():n.current=!0},t)}var Zk={when:!0,eventTypes:[`keydown`]};function Qk(e,t,n){let r=(0,S.useMemo)(()=>Array.isArray(e)?e:[e],[e]),i=Object.assign({},Zk,n),{when:a,eventTypes:o}=i,s=(0,S.useRef)(t),{target:c}=i;(0,S.useEffect)(()=>{s.current=t});let l=(0,S.useCallback)(e=>{r.some(t=>e.key===t||e.code===t)&&s.current(e)},[r]);(0,S.useEffect)(()=>{if(a&&typeof window<`u`){let e=c?c.current:window;return o.forEach(t=>{e&&e.addEventListener(t,l)}),()=>{o.forEach(t=>{e&&e.removeEventListener(t,l)})}}},[a,o,r,c,t])}var $k={ARROW_DOWN:`ArrowDown`,ARROW_UP:`ArrowUp`,ENTER:`Enter`,ESCAPE:`Escape`,SPACE:`Space`},eA=(e,t)=>{let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{e.apply(null,r)},t)}};function tA(e,t){return t?e.filter(({label:e,value:n})=>e!=null&&n!=null&&e.toLowerCase().includes(t.toLowerCase())):e}var nA=()=>(0,W.jsxs)(`svg`,{width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`dropdown-search-clear-icon gray`,children:[(0,W.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,W.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),rA=({checked:e,option:t,onClick:n,disabled:r})=>(0,W.jsxs)(`div`,{className:`item-renderer ${r?`disabled`:``}`,children:[(0,W.jsx)(`input`,{type:`checkbox`,onChange:n,checked:e,tabIndex:-1,disabled:r}),(0,W.jsx)(`span`,{children:t.label})]}),iA=({itemRenderer:e=rA,option:t,checked:n,tabIndex:r,disabled:i,onSelectionChanged:a,onClick:o})=>{let s=(0,S.useRef)(),c=e=>{l(),e.preventDefault()},l=()=>{i||a(!n)};return Qk([$k.ENTER,$k.SPACE],c,{target:s}),(0,W.jsx)(`label`,{className:`select-item ${n?`selected`:``}`,role:`option`,"aria-selected":n,tabIndex:r,ref:s,children:(0,W.jsx)(e,{option:t,checked:n,onClick:e=>{l(),o(e)},disabled:i})})},aA=({options:e,onClick:t,skipIndex:n})=>{let{disabled:r,value:i,onChange:a,ItemRenderer:o}=Yk(),s=(e,t)=>{r||a(t?[...i,e]:i.filter(t=>t.value!==e.value))};return(0,W.jsx)(W.Fragment,{children:e.map((e,a)=>{let c=a+n;return(0,W.jsx)(`li`,{children:(0,W.jsx)(iA,{tabIndex:c,option:e,onSelectionChanged:t=>s(e,t),checked:!!i.find(t=>t.value===e.value),onClick:e=>t(e,c),itemRenderer:o,disabled:e.disabled||r})},e?.key||a)})})},oA=()=>{let{t:e,onChange:t,options:n,setOptions:r,value:i,filterOptions:a,ItemRenderer:o,disabled:s,disableSearch:c,hasSelectAll:l,ClearIcon:u,debounceDuration:d,isCreatable:f,onCreateOption:p}=Yk(),m=(0,S.useRef)(),h=(0,S.useRef)(),[g,_]=(0,S.useState)(``),[v,y]=(0,S.useState)(n),[b,x]=(0,S.useState)(``),[C,w]=(0,S.useState)(0),T=(0,S.useCallback)(eA(e=>x(e),d),[]),E=(0,S.useMemo)(()=>{let e=0;return c||(e+=1),l&&(e+=1),e},[c,l]),D={label:e(g?`selectAllFiltered`:`selectAll`),value:``},O=e=>{let t=v.filter(e=>!e.disabled).map(e=>e.value);if(e){let e=[...i.map(e=>e.value),...t];return(a?v:n).filter(t=>e.includes(t.value))}return i.filter(e=>!t.includes(e.value))},k=e=>{let n=O(e);t(n)},A=e=>{T(e.target.value),_(e.target.value),w(0)},j=()=>{var e;x(``),_(``),(e=h?.current)==null||e.focus()},M=e=>w(e);Qk([$k.ARROW_DOWN,$k.ARROW_UP],e=>{switch(e.code){case $k.ARROW_UP:ee(-1);break;case $k.ARROW_DOWN:ee(1);break;default:return}e.stopPropagation(),e.preventDefault()},{target:m});let N=()=>{w(0)},P=async()=>{let e={label:g,value:g,__isNew__:!0};p&&(e=await p(g)),r([e,...n]),j(),t([...i,e])},F=async()=>a?await a(n,b):tA(n,b),ee=e=>{let t=C+e;t=Math.max(0,t),t=Math.min(t,n.length+Math.max(E-1,0)),w(t)};(0,S.useEffect)(()=>{var e;(e=(m?.current)?.querySelector(`[tabIndex='${C}']`))==null||e.focus()},[C]);let[I,L]=(0,S.useMemo)(()=>{let e=v.filter(e=>!e.disabled);return[e.every(e=>i.findIndex(t=>t.value===e.value)!==-1),e.length!==0]},[v,i]);(0,S.useEffect)(()=>{F().then(y)},[b,n]);let R=(0,S.useRef)();Qk([$k.ENTER],P,{target:R});let z=f&&g&&!v.some(e=>e?.value===g);return(0,W.jsxs)(`div`,{className:`select-panel`,role:`listbox`,ref:m,children:[!c&&(0,W.jsxs)(`div`,{className:`search`,children:[(0,W.jsx)(`input`,{placeholder:e(`search`),type:`text`,"aria-describedby":e(`search`),onChange:A,onFocus:N,value:g,ref:h,tabIndex:0}),(0,W.jsx)(`button`,{type:`button`,className:`search-clear-button`,hidden:!g,onClick:j,"aria-label":e(`clearSearch`),children:u||(0,W.jsx)(nA,{})})]}),(0,W.jsxs)(`ul`,{className:`options`,children:[l&&L&&(0,W.jsx)(iA,{tabIndex:E===1?0:1,checked:I,option:D,onSelectionChanged:k,onClick:()=>M(1),itemRenderer:o,disabled:s}),v.length?(0,W.jsx)(aA,{skipIndex:E,options:v,onClick:(e,t)=>M(t)}):z?(0,W.jsx)(`li`,{onClick:P,className:`select-item creatable`,tabIndex:1,ref:R,children:`${e(`create`)} "${g}"`}):(0,W.jsx)(`li`,{className:`no-options`,children:e(`noOptions`)})]})]})},sA=({expanded:e})=>(0,W.jsx)(`svg`,{width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`dropdown-heading-dropdown-arrow gray`,children:(0,W.jsx)(`path`,{d:e?`M18 15 12 9 6 15`:`M6 9L12 15 18 9`})}),cA=()=>{let{t:e,value:t,options:n,valueRenderer:r}=Yk(),i=t.length===0,a=t.length===n.length,o=r&&r(t,n);return i?(0,W.jsx)(`span`,{className:`gray`,children:o||e(`selectSomeItems`)}):(0,W.jsx)(`span`,{children:o||(a?e(`allItemsAreSelected`):t.map(e=>e.label).join(`, `))})},lA=({size:e=24})=>(0,W.jsx)(`span`,{style:{width:e,marginRight:`0.2rem`},children:(0,W.jsx)(`svg`,{width:e,height:e,className:`spinner`,viewBox:`0 0 50 50`,style:{display:`inline`,verticalAlign:`middle`},children:(0,W.jsx)(`circle`,{cx:`25`,cy:`25`,r:`20`,fill:`none`,className:`path`})})}),uA=()=>{let{t:e,onMenuToggle:t,ArrowRenderer:n,shouldToggleOnHover:r,isLoading:i,disabled:a,onChange:o,labelledBy:s,value:c,isOpen:l,defaultIsOpen:u,ClearSelectedIcon:d,closeOnChangedValue:f}=Yk();(0,S.useEffect)(()=>{f&&g(!1)},[c]);let[p,m]=(0,S.useState)(!0),[h,g]=(0,S.useState)(u),[_,v]=(0,S.useState)(!1),y=n||sA,b=(0,S.useRef)();Xk(()=>{t&&t(h)},[h]),(0,S.useEffect)(()=>{u===void 0&&typeof l==`boolean`&&(m(!1),g(l))},[l]),Qk([$k.ENTER,$k.ARROW_DOWN,$k.SPACE,$k.ESCAPE],e=>{var t;[`text`,`button`].includes(e.target.type)&&[$k.SPACE,$k.ENTER].includes(e.code)||(p&&(e.code===$k.ESCAPE?(g(!1),(t=b?.current)==null||t.focus()):g(!0)),e.preventDefault())},{target:b});let x=e=>{p&&r&&g(e)};return(0,W.jsxs)(`div`,{tabIndex:0,className:`dropdown-container`,"aria-labelledby":s,"aria-expanded":h,"aria-readonly":!0,"aria-disabled":a,ref:b,onFocus:()=>!_&&v(!0),onBlur:e=>{!e.currentTarget.contains(e.relatedTarget)&&p&&(v(!1),g(!1))},onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[(0,W.jsxs)(`div`,{className:`dropdown-heading`,onClick:()=>{p&&g(i||a?!1:!h)},children:[(0,W.jsx)(`div`,{className:`dropdown-heading-value`,children:(0,W.jsx)(cA,{})}),i&&(0,W.jsx)(lA,{}),c.length>0&&d!==null&&(0,W.jsx)(`button`,{type:`button`,className:`clear-selected-button`,onClick:e=>{e.stopPropagation(),o([]),p&&g(!1)},disabled:a,"aria-label":e(`clearSelected`),children:d||(0,W.jsx)(nA,{})}),(0,W.jsx)(y,{expanded:h})]}),h&&(0,W.jsx)(`div`,{className:`dropdown-content`,children:(0,W.jsx)(`div`,{className:`panel-content`,children:(0,W.jsx)(oA,{})})})]})},dA=e=>(0,W.jsx)(Jk,{props:e,children:(0,W.jsx)(`div`,{className:`rmsc ${e.className||`multi-select`}`,children:(0,W.jsx)(uA,{})})}),fA=s(((e,t)=>{var n=Zs(),r=bc(),i=xc(),a=n?n.isConcatSpreadable:void 0;function o(e){return i(e)||r(e)||!!(a&&e&&e[a])}t.exports=o})),pA=s(((e,t)=>{var n=yf(),r=fA();function i(e,t,a,o,s){var c=-1,l=e.length;for(a||=r,s||=[];++c<l;){var u=e[c];t>0&&a(u)?t>1?i(u,t-1,a,o,s):n(s,u):o||(s[s.length]=u)}return s}t.exports=i})),mA=u(s(((e,t)=>{var n=pA();function r(e){return e!=null&&e.length?n(e,1):[]}t.exports=r}))(),1),hA=e=>{let t=e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t.map(e=>{e.replace(/\s/g,``);let t={};return t.label=G(K(e)),t.value=e,t})},n=e.check,r=e.opts.id,i=G(K(e.opts.label))||``,a=e.opts.options.split(`;;;`)||[];a=a.map(e=>G(K(e.trim())));let o=G(K(e.opts.note))||``,s=!0;(o.length<1||o===``)&&(s=!1);let[c,l]=kb(r,[]),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`))||{};l(t);let r=(0,mA.default)(a);if(t.length!==0){let i=``;for(let e=0;e<t.length;e++){let n=t[e].value.trim(),a=r.indexOf(n);i+=e===0?a+1:`,`+(a+1)}n[`itemNum${e.opts.itemNum}`]=i}else e.opts.required===!0||e.opts.required===`true`?n[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:n[`itemNum${e.opts.itemNum}`]=`no response`;localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},p=!1;return c.length>0&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&n===!0&&p===!1?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[n,p,e.opts.required]),s?(0,W.jsxs)(gA,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(_A,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(vA,{id:`noteText`,children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsx)(dA,{className:`multiselect`,options:t(e.opts.options),labelledBy:`Select`,onChange:f,value:c})]}):(0,W.jsxs)(gA,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(_A,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(dA,{className:`multiselect`,options:t(e.opts.options),labelledBy:`Select`,onChange:f,value:c})]})},gA=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 125px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;

  .multiselect {
    font-size: 16px;
    line-height: 1.1em;
  }
`,_A=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,vA=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,yA=s(((e,t)=>{function n(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}t.exports=n})),bA=s(((e,t)=>{function n(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}t.exports=n})),xA=s(((e,t)=>{t.exports=bA()()})),SA=s(((e,t)=>{var n=xA(),r=Lc();function i(e,t){return e&&n(e,t,r)}t.exports=i})),CA=s(((e,t)=>{var n=Ic();function r(e,t){return function(r,i){if(r==null)return r;if(!n(r))return e(r,i);for(var a=r.length,o=t?a:-1,s=Object(r);(t?o--:++o<a)&&i(s[o],o,s)!==!1;);return r}}t.exports=r})),wA=s(((e,t)=>{var n=SA();t.exports=CA()(n)})),TA=s(((e,t)=>{var n=wA();function r(e,t,r,i){return n(e,function(e,n,a){t(i,e,r(e),a)}),i}t.exports=r})),EA=s(((e,t)=>{var n=nf(),r=bS(),i=1,a=2;function o(e,t,o,s){var c=o.length,l=c,u=!s;if(e==null)return!l;for(e=Object(e);c--;){var d=o[c];if(u&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++c<l;){d=o[c];var f=d[0],p=e[f],m=d[1];if(u&&d[2]){if(p===void 0&&!(f in e))return!1}else{var h=new n;if(s)var g=s(p,m,f,e,t,h);if(!(g===void 0?r(m,p,i|a,s,h):g))return!1}}return!0}t.exports=o})),DA=s(((e,t)=>{var n=Js();function r(e){return e===e&&!n(e)}t.exports=r})),OA=s(((e,t)=>{var n=DA(),r=Lc();function i(e){for(var t=r(e),i=t.length;i--;){var a=t[i],o=e[a];t[i]=[a,o,n(o)]}return t}t.exports=i})),kA=s(((e,t)=>{function n(e,t){return function(n){return n!=null&&n[e]===t&&(t!==void 0||e in Object(n))}}t.exports=n})),AA=s(((e,t)=>{var n=EA(),r=OA(),i=kA();function a(e){var t=r(e);return t.length==1&&t[0][2]?i(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}t.exports=a})),jA=s(((e,t)=>{var n=xc(),r=nc(),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;function o(e,t){if(n(e))return!1;var o=typeof e;return o==`number`||o==`symbol`||o==`boolean`||e==null||r(e)?!0:a.test(e)||!i.test(e)||t!=null&&e in Object(t)}t.exports=o})),MA=s(((e,t)=>{var n=ef(),r=`Expected a function`;function i(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(r);var a=function(){var n=arguments,r=t?t.apply(this,n):n[0],i=a.cache;if(i.has(r))return i.get(r);var o=e.apply(this,n);return a.cache=i.set(r,o)||i,o};return a.cache=new(i.Cache||n),a}i.Cache=n,t.exports=i})),NA=s(((e,t)=>{var n=MA(),r=500;function i(e){var t=n(e,function(e){return i.size===r&&i.clear(),e}),i=t.cache;return t}t.exports=i})),PA=s(((e,t)=>{var n=NA(),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g;t.exports=n(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(r,function(e,n,r,a){t.push(r?a.replace(i,`$1`):n||e)}),t})})),FA=s(((e,t)=>{var n=Zs(),r=gc(),i=xc(),a=nc(),o=1/0,s=n?n.prototype:void 0,c=s?s.toString:void 0;function l(e){if(typeof e==`string`)return e;if(i(e))return r(e,l)+``;if(a(e))return c?c.call(e):``;var t=e+``;return t==`0`&&1/e==-o?`-0`:t}t.exports=l})),IA=s(((e,t)=>{var n=FA();function r(e){return e==null?``:n(e)}t.exports=r})),LA=s(((e,t)=>{var n=xc(),r=jA(),i=PA(),a=IA();function o(e,t){return n(e)?e:r(e,t)?[e]:i(a(e))}t.exports=o})),RA=s(((e,t)=>{var n=nc(),r=1/0;function i(e){if(typeof e==`string`||n(e))return e;var t=e+``;return t==`0`&&1/e==-r?`-0`:t}t.exports=i})),zA=s(((e,t)=>{var n=LA(),r=RA();function i(e,t){t=n(t,e);for(var i=0,a=t.length;e!=null&&i<a;)e=e[r(t[i++])];return i&&i==a?e:void 0}t.exports=i})),BA=s(((e,t)=>{var n=zA();function r(e,t,r){var i=e==null?void 0:n(e,t);return i===void 0?r:i}t.exports=r})),VA=s(((e,t)=>{function n(e,t){return e!=null&&t in Object(e)}t.exports=n})),HA=s(((e,t)=>{var n=LA(),r=bc(),i=xc(),a=wc(),o=Tc(),s=RA();function c(e,t,c){t=n(t,e);for(var l=-1,u=t.length,d=!1;++l<u;){var f=s(t[l]);if(!(d=e!=null&&c(e,f)))break;e=e[f]}return d||++l!=u?d:(u=e==null?0:e.length,!!u&&o(u)&&a(f,u)&&(i(e)||r(e)))}t.exports=c})),UA=s(((e,t)=>{var n=VA(),r=HA();function i(e,t){return e!=null&&r(e,t,n)}t.exports=i})),WA=s(((e,t)=>{var n=bS(),r=BA(),i=UA(),a=jA(),o=DA(),s=kA(),c=RA(),l=1,u=2;function d(e,t){return a(e)&&o(t)?s(c(e),t):function(a){var o=r(a,e);return o===void 0&&o===t?i(a,e):n(t,o,l|u)}}t.exports=d})),GA=s(((e,t)=>{function n(e){return e}t.exports=n})),KA=s(((e,t)=>{function n(e){return function(t){return t?.[e]}}t.exports=n})),qA=s(((e,t)=>{var n=zA();function r(e){return function(t){return n(t,e)}}t.exports=r})),JA=s(((e,t)=>{var n=KA(),r=qA(),i=jA(),a=RA();function o(e){return i(e)?n(a(e)):r(e)}t.exports=o})),YA=s(((e,t)=>{var n=AA(),r=WA(),i=GA(),a=xc(),o=JA();function s(e){return typeof e==`function`?e:e==null?i:typeof e==`object`?a(e)?r(e[0],e[1]):n(e):o(e)}t.exports=s})),XA=s(((e,t)=>{var n=yA(),r=TA(),i=YA(),a=xc();function o(e,t){return function(o,s){var c=a(o)?n:r,l=t?t():{};return c(o,e,i(s,2),l)}}t.exports=o})),ZA=u(s(((e,t)=>{var n=of(),r=XA(),i=Object.prototype.hasOwnProperty;t.exports=r(function(e,t,r){i.call(e,r)?++e[r]:n(e,r,1)})}))(),1),QA=e=>{let t={},n=e=>{let n=e.split(`;;;`);return n=n.filter(function(e){return e}),n.map(e=>t[e]=!1),n},r=e.check,i=n(e.opts.options),a=i.length,o=`question${e.opts.itemNum}`,s=e.opts.id,c=G(K(e.opts.label))||``,l=G(K(e.opts.note))||``,u=!0;(l.length<1||l===``)&&(u=!1);let d=e.opts.other;d=d===`true`||d===!0;let[f,p]=kb(s,Array(i.length).fill(!1)),[m,h]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),[g,_]=(0,S.useState)(`no input`),[v,y]=(0,S.useState)(!0),[b,x]=(0,S.useState)([]),C=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));t=parseInt(t,10),t===a-1?y(!1):y(!0);let r=f.map((e,n)=>n===t?!e:e);p(r);let i=r.reduce((e=``,t,n)=>t===!0?e+(n+1).toString()+`,`:e,``);i.charAt(i.length-1)===`,`&&(i=i.substr(0,i.length-1)),x(i);let o=i.split(`,`);+o[o.length-1]==+a&&d===!0?g===``?n[`itemNum${e.opts.itemNum}`]=`${i}-no input`:n[`itemNum${e.opts.itemNum}`]=`${i}-${g}`:n[`itemNum${e.opts.itemNum}`]=i,i===``&&(e.opts.required===!0||e.opts.required===`true`?n[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:n[`itemNum${e.opts.itemNum}`]=`no response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},w=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`)),r=`no input`;if(t.target.value!==``){r=xl(t.target.value.trim());let i=`${b}-${r}`;n[`itemNum${e.opts.itemNum}`]=i}else{let t=`${b}-no input`;n[`itemNum${e.opts.itemNum}`]=t}_(()=>xl(t.target.value.trim())),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},T=!1,E=(0,mA.default)([...f]);return((0,ZA.default)(E)[!0]||0)===0&&(T=!0),(0,S.useEffect)(()=>((e.opts.required===!0||e.opts.required===`true`)&&r===!0&&T?h({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):h({bgColor:`whitesmoke`,border:`none`}),()=>{}),[r,T,e.opts.required,a,g,e.opts.itemNum]),u?(0,W.jsxs)($A,{bgColor:m.bgColor,border:m.border,children:[(0,W.jsx)(ej,{children:(0,W.jsx)(`div`,{children:c})}),(0,W.jsx)(nj,{id:`noteText`,children:(0,W.jsx)(`div`,{children:l})}),(0,W.jsxs)(tj,{children:[i.map((e,t)=>(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`input`,{id:`${e}-${t}`,type:`checkbox`,value:e,name:o,checked:f[t],onChange:()=>C(t)}),(0,W.jsx)(`label`,{htmlFor:`${e}-${t}`,children:e})]},X())),d&&(0,W.jsx)(rj,{disabled:v,onChange:e=>w(e)})]})]}):(0,W.jsxs)($A,{bgColor:m.bgColor,border:m.border,children:[(0,W.jsx)(ej,{children:(0,W.jsx)(`div`,{children:c})}),(0,W.jsxs)(tj,{children:[i.map((e,t)=>(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`input`,{id:`${e}-${t}`,type:`checkbox`,value:e,name:o,checked:f[t],onChange:()=>C(t)}),(0,W.jsx)(`label`,{htmlFor:`${e}-${t}`,children:e})]},X())),d&&(0,W.jsx)(rj,{disabled:v,onChange:e=>w(e)})]})]})},$A=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 150px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,ej=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,tj=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 120px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,nj=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,rj=U.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,ij=e=>{let t=e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t.length===0&&(t=[``,``]),t},n=t(e.opts.options),r=e.check,i=n.length,a=`itemNum${e.opts.itemNum}`,o=G(K(e.opts.label))||``,s=G(K(e.opts.note))||``,c=!0;(s.length<1||s===``)&&(c=!1);let[l,u]=kb(a,Array.from({length:i},()=>Array.from({length:2},()=>!1))),[d,f]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),p=t(e.opts.scale),m=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=l.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});u(a);let o=l.length,s=(0,mA.default)([...a]),c=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=e[0]?`1`:`2`;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,c!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},h=!1,g=l.length,_=(0,mA.default)([...l]);((0,ZA.default)(_)[!0]||0)<g&&(h=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&r===!0&&h?f({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):f({bgColor:`whitesmoke`,border:`none`})},[r,h,e.opts.required]);let v=()=>{let t=n.map((t,n)=>{let r=G(K(t))||``;return(0,W.jsxs)(cj,{indexVal:n,children:[(0,W.jsx)(fj,{children:r},X()),(0,W.jsx)(dj,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>m(n,0,e),checked:l[n][0]},X()),(0,W.jsx)(dj,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>m(n,1,e),checked:l[n][1]},X())]},X())});return(0,W.jsx)(`div`,{children:t})};return c?(0,W.jsxs)(aj,{bgColor:d.bgColor,border:d.border,children:[(0,W.jsx)(oj,{children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsx)(pj,{id:`noteText`,children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsxs)(sj,{children:[(0,W.jsxs)(lj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(uj,{children:(0,W.jsx)(`div`,{children:G(K(p[0]))})}),(0,W.jsx)(uj,{children:(0,W.jsx)(`div`,{children:G(K(p[1]))})})]}),(0,W.jsx)(v,{})]})]}):(0,W.jsxs)(aj,{bgColor:d.bgColor,border:d.border,children:[(0,W.jsx)(oj,{children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsxs)(sj,{children:[(0,W.jsxs)(lj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(uj,{children:(0,W.jsx)(`div`,{children:G(K(p[0]))})}),(0,W.jsx)(uj,{children:(0,W.jsx)(`div`,{children:G(K(p[1]))})})]}),(0,W.jsx)(v,{})]})]})},aj=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,oj=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,sj=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,cj=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 100px 100px 1fr;
  margin-bottom: 17px;
  padding-left: 5px;
  padding-bottom: 8px;
  height: 40px;
  align-items: end;
  justify-items: left;
  // align-items: left;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,lj=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 100px 100px 1fr;
  margin-bottom: 7px;
`,uj=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,dj=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  justify-items: center;
  align-items: center;
`,fj=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,pj=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,mj=e=>{let t=(e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t})(e.opts.options),n=t.length,r=`itemNum${e.opts.itemNum}`,i=e.check,a=G(K(e.opts.note))||``,o=!0;(a.length<1||a===``)&&(o=!1);let s=G(K(e.opts.label))||``,[c,l]=kb(r,Array.from({length:n},()=>Array.from({length:5},()=>!1))),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=c.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});l(a);let o=c.length,s=(0,mA.default)([...a]),u=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=a[t].indexOf(!0)+1;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,u!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1,m=c.length,h=(0,mA.default)([...c]);((0,ZA.default)(h)[!0]||0)<m&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&i===!0&&p?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[i,p,e.opts.required]);let g=()=>{let n=t.map((t,n)=>{let r=G(K(t));return(0,W.jsxs)(vj,{indexVal:n,children:[(0,W.jsx)(Sj,{children:r},X()),(0,W.jsx)(bj,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,0,e),checked:c[n][0]},X()),(0,W.jsx)(bj,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,1,e),checked:c[n][1]},X()),(0,W.jsx)(bj,{id:`Q3-${n}`,type:`radio`,value:3,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,2,e),checked:c[n][2]},X()),(0,W.jsx)(bj,{id:`Q4-${n}`,type:`radio`,value:4,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,3,e),checked:c[n][3]},X()),(0,W.jsx)(bj,{id:`Q5-${n}`,type:`radio`,value:5,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,4,e),checked:c[n][4]},X())]},X())});return(0,W.jsx)(`div`,{children:n})};return o?(0,W.jsxs)(hj,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(gj,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsx)(Cj,{id:`noteText`,children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(_j,{children:[(0,W.jsxs)(yj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(xj,{children:`1`}),(0,W.jsx)(xj,{children:`2`}),(0,W.jsx)(xj,{children:`3`}),(0,W.jsx)(xj,{children:`4`}),(0,W.jsx)(xj,{children:`5`})]}),(0,W.jsx)(g,{})]})]}):(0,W.jsxs)(hj,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(gj,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsxs)(_j,{children:[(0,W.jsxs)(yj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(xj,{children:`1`}),(0,W.jsx)(xj,{children:`2`}),(0,W.jsx)(xj,{children:`3`}),(0,W.jsx)(xj,{children:`4`}),(0,W.jsx)(xj,{children:`5`})]}),(0,W.jsx)(g,{})]})]})},hj=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,gj=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,_j=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,vj=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 50px 50px 50px 50px 50px 1fr;
  margin-bottom: 17px;
  padding-bottom: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  font-size: 16px;
  align-items: end;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,yj=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 50px 50px 50px 50px 50px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,bj=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,xj=U.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,Sj=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Cj=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,wj=e=>{let t=(e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t})(e.opts.options),n=t.length,r=`itemNum${e.opts.itemNum}`,i=e.check,a=G(K(e.opts.note))||``,o=!0;(a.length<1||a===``)&&(o=!1);let s=G(K(e.opts.label))||``,[c,l]=kb(r,Array.from({length:n},()=>Array.from({length:7},()=>!1))),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=c.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});l(a);let o=c.length,s=(0,mA.default)([...a]),u=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=a[t].indexOf(!0)+1;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,u!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1,m=c.length,h=(0,mA.default)([...c]);((0,ZA.default)(h)[!0]||0)<m&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&i===!0&&p?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[i,p,e.opts.required]);let g=()=>{let n=t.map((t,n)=>{let r=G(K(t));return(0,W.jsxs)(Oj,{indexVal:n,children:[(0,W.jsx)(Mj,{children:r},X()),(0,W.jsx)(Aj,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,0,e),checked:c[n][0]},X()),(0,W.jsx)(Aj,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,1,e),checked:c[n][1]},X()),(0,W.jsx)(Aj,{id:`Q3-${n}`,type:`radio`,value:3,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,2,e),checked:c[n][2]},X()),(0,W.jsx)(Aj,{id:`Q4-${n}`,type:`radio`,value:4,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,3,e),checked:c[n][3]},X()),(0,W.jsx)(Aj,{id:`Q5-${n}`,type:`radio`,value:5,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,4,e),checked:c[n][4]},X()),(0,W.jsx)(Aj,{id:`Q6-${n}`,type:`radio`,value:6,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,5,e),checked:c[n][5]},X()),(0,W.jsx)(Aj,{id:`Q7-${n}`,type:`radio`,value:7,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,6,e),checked:c[n][6]},X())]},X())});return(0,W.jsx)(`div`,{children:n})};return o?(0,W.jsxs)(Tj,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Ej,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsx)(Nj,{id:`noteText`,children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(Dj,{children:[(0,W.jsxs)(kj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(jj,{children:`1`}),(0,W.jsx)(jj,{children:`2`}),(0,W.jsx)(jj,{children:`3`}),(0,W.jsx)(jj,{children:`4`}),(0,W.jsx)(jj,{children:`5`}),(0,W.jsx)(jj,{children:`6`}),(0,W.jsx)(jj,{children:`7`})]}),(0,W.jsx)(g,{})]})]}):(0,W.jsxs)(Tj,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Ej,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsxs)(Dj,{children:[(0,W.jsxs)(kj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(jj,{children:`1`}),(0,W.jsx)(jj,{children:`2`}),(0,W.jsx)(jj,{children:`3`}),(0,W.jsx)(jj,{children:`4`}),(0,W.jsx)(jj,{children:`5`}),(0,W.jsx)(jj,{children:`6`}),(0,W.jsx)(jj,{children:`7`})]}),(0,W.jsx)(g,{})]})]})},Tj=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Ej=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Dj=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Oj=U.div`
  display: inline-grid;
  grid-template-columns:
    minmax(30%, 1000px)
    50px 50px 50px 50px 50px 50px 50px 1fr;
  margin-bottom: 17px;
  padding-bottom: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  font-size: 16px;
  align-items: end;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,kj=U.div`
  display: inline-grid;
  grid-template-columns:
    minmax(30%, 1000px)
    50px 50px 50px 50px 50px 50px 50px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,Aj=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,jj=U.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,Mj=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Nj=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Pj=e=>{let t=(e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t})(e.opts.options),n=t.length,r=`itemNum${e.opts.itemNum}`,i=e.check,a=G(K(e.opts.label))||``,o=G(K(e.opts.note))||``,s=!0;(o.length<1||o===``)&&(s=!1);let[c,l]=kb(r,Array.from({length:n},()=>Array.from({length:10},()=>!1))),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=c.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});l(a);let o=c.length,s=(0,mA.default)([...a]),u=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=a[t].indexOf(!0)+1;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,u!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1,m=c.length,h=(0,mA.default)([...c]);((0,ZA.default)(h)[!0]||0)<m&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&i===!0&&p?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[i,p,e.opts.required]);let g=()=>{let n=t.map((t,n)=>{let r=G(K(t));return(0,W.jsxs)(Rj,{indexVal:n,children:[(0,W.jsx)(Hj,{children:r},X()),(0,W.jsx)(Vj,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,0,e),checked:c[n][0]},X()),(0,W.jsx)(Vj,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,1,e),checked:c[n][1]},X()),(0,W.jsx)(Vj,{id:`Q3-${n}`,type:`radio`,value:3,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,2,e),checked:c[n][2]},X()),(0,W.jsx)(Vj,{id:`Q4-${n}`,type:`radio`,value:4,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,3,e),checked:c[n][3]},X()),(0,W.jsx)(Vj,{id:`Q5-${n}`,type:`radio`,value:5,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,4,e),checked:c[n][4]},X()),(0,W.jsx)(Vj,{id:`Q6-${n}`,type:`radio`,value:6,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,5,e),checked:c[n][5]},X()),(0,W.jsx)(Vj,{id:`Q7-${n}`,type:`radio`,value:7,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,6,e),checked:c[n][6]},X()),(0,W.jsx)(Vj,{id:`Q8-${n}`,type:`radio`,value:8,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,7,e),checked:c[n][7]},X()),(0,W.jsx)(Vj,{id:`Q9-${n}`,type:`radio`,value:9,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,8,e),checked:c[n][8]},X()),(0,W.jsx)(Vj,{id:`Q10-${n}`,type:`radio`,value:10,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,9,e),checked:c[n][9]},X())]},X())});return(0,W.jsx)(`div`,{children:n})};return s?(0,W.jsxs)(Fj,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Ij,{children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsx)(Uj,{id:`noteText`,children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsxs)(Lj,{children:[(0,W.jsxs)(zj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(Bj,{children:`1`}),(0,W.jsx)(Bj,{children:`2`}),(0,W.jsx)(Bj,{children:`3`}),(0,W.jsx)(Bj,{children:`4`}),(0,W.jsx)(Bj,{children:`5`}),(0,W.jsx)(Bj,{children:`6`}),(0,W.jsx)(Bj,{children:`7`}),(0,W.jsx)(Bj,{children:`8`}),(0,W.jsx)(Bj,{children:`9`}),(0,W.jsx)(Bj,{children:`10`})]}),(0,W.jsx)(g,{})]})]}):(0,W.jsxs)(Fj,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(Ij,{children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(Lj,{children:[(0,W.jsxs)(zj,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(Bj,{children:`1`}),(0,W.jsx)(Bj,{children:`2`}),(0,W.jsx)(Bj,{children:`3`}),(0,W.jsx)(Bj,{children:`4`}),(0,W.jsx)(Bj,{children:`5`}),(0,W.jsx)(Bj,{children:`6`}),(0,W.jsx)(Bj,{children:`7`}),(0,W.jsx)(Bj,{children:`8`}),(0,W.jsx)(Bj,{children:`9`}),(0,W.jsx)(Bj,{children:`10`})]}),(0,W.jsx)(g,{})]})]})},Fj=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Ij=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Lj=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Rj=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 1fr;
  margin-bottom: 17px;
  font-size: 16px;
  align-items: end;
  padding-bottom: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  border-radius: 3px;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,zj=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,Bj=U.div`
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: center;
`,Vj=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  padding-left: 3px;
`,Hj=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Uj=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Wj=e=>{let t=e.check,n=`itemNum${e.opts.itemNum}`,r=G(K(e.opts.label))||``,[i,a]=kb(n,``),[o,s]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),c=(e=>e.split(`;;;`))(e.opts.scale),l=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));n[`itemNum${e.opts.itemNum}`]=+t.target.value+1,localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},u=!1;i.length===0&&(u=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&t===!0&&u?s({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):s({bgColor:`whitesmoke`,border:`none`})},[t,u,e.opts.required]);let d=c.map(e=>(0,W.jsx)(Xj,{children:(0,W.jsx)(`div`,{children:G(K(e))})},X())),f=({value:e,checked:t,setter:n})=>(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(`input`,{type:`radio`,checked:t===e,onChange:()=>n(e),value:e})});return(0,W.jsxs)(Gj,{bgColor:o.bgColor,border:o.border,children:[(0,W.jsx)(Kj,{children:(0,W.jsx)(`div`,{children:r})}),(0,W.jsxs)(qj,{className:`radioContainer`,children:[(0,W.jsx)(Yj,{className:`ratingTitle`,cols:c.length,children:d}),(0,W.jsx)(()=>{let e=c.map((e,t)=>(0,W.jsx)(Zj,{className:`radioButtons`,onChange:e=>l(e),children:(0,W.jsx)(f,{className:`radioInput`,value:t,checked:i,setter:a})},X()));return(0,W.jsx)(Jj,{className:`buttonContainer`,cols:c.length,children:e})},{})]})]})},Gj=U.div`
  width: 90vw;
  padding: 12px 20px 0px 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 170px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Kj=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,qj=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 10px 20px 0px 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  label {
    margin-left: 8px;
  }
`,Jj=U.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
  margin-bottom: 3px;
  justify-items: center;
  align-items: center;
`,Yj=U.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
`,Xj=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,Zj=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-bottom: 5px;
  padding: 5px;
  width: 25px;
  input {
    height: 1.5em;
    width: 20px;
  }
`,Qj=e=>{(0,S.useEffect)(()=>{let t=JSON.parse(localStorage.getItem(`resultsSurvey`));t[`itemNum${e.opts.itemNum}`]=`info. - na`},[e.opts.itemNum]);let t=G(K(e.opts.options))||``;return(0,W.jsx)($j,{children:(0,W.jsx)(eM,{backgroundColor:e.opts.background,children:(0,W.jsx)(`div`,{children:t})})})},$j=U.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  background-color: whitesmoke;
  min-height: 50px;
`,eM=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 50px;
  font-size: 18px;
  text-align: center;
  background-color: ${e=>e.backgroundColor||`lightgray`};
  width: 100%;
  border-radius: 3px;
`,tM=e=>e.langObj,nM=e=>e.triggerSurveyPreventNavModal,rM=e=>e.setTriggerSurveyPreventNavModal,iM=()=>{let e=q(tM),t=J(nM),n=J(rM),r=G(K(e.surveyPreventNavModalHead))||``,i=G(K(e.surveyPreventNavModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(aM,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(oM,{children:i})]})},aM=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,oM=U.div`
  margin-top: 15px;
`,sM=e=>e.langObj,cM=e=>e.triggerSurveyModal,lM=e=>e.setTriggerSurveyModal,uM=()=>{let e=q(sM),t=J(cM),n=J(lM),r=G(K(e.surveyModalHead))||``,i=G(K(e.surveyModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(dM,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(fM,{children:i})]})},dM=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,fM=U.div`
  margin-top: 15px;
  font-weight: normal;
`,pM=e=>e.langObj,mM=e=>e.configObj,hM=e=>e.surveyQuestionObjArray,gM=e=>e.requiredAnswersObj,_M=e=>e.setRequiredAnswersObj,vM=e=>e.setCurrentPage,yM=e=>e.checkRequiredQuestionsComplete,bM=e=>e.setDisplayNextButton,xM=()=>{let e=q(mM),t=q(pM),n=q(gM),r=q(hM),i=q(_M),a=J(vM),o=J(yM),s=J(bM),c=e.headerBarColor,l=r,u=G(K(t.surveyHeader))||``;s(!0),(0,S.useEffect)(()=>{let e=Object.keys(n);for(let t=0;t<e.length;t++)n[e[t]]=`no response`;i(n)},[i,n]);let d=(0,S.useRef)(null);return(0,S.useEffect)(()=>(d.current=Date.now(),(async()=>{await a(`survey`),localStorage.setItem(`currentPage`,`survey`)})(),()=>{ar(d.current,`surveyPage`,`surveyPage`)}),[a]),(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(td,{}),(0,W.jsx)(uM,{}),(0,W.jsx)(iM,{}),(0,W.jsx)(CM,{background:c,children:u}),(0,W.jsx)(SM,{children:(0,W.jsx)(()=>l?l.map(e=>e.type===`text`?(0,W.jsx)(Ek,{check:o,opts:e},X()):e.type===`textarea`?(0,W.jsx)(jk,{check:o,opts:e},X()):e.type===`radio`?(0,W.jsx)(Ik,{check:o,opts:e},X()):e.type===`select`?(0,W.jsx)(hA,{check:o,opts:e},X()):e.type===`checkbox`?(0,W.jsx)(QA,{check:o,opts:e},X()):e.type===`rating2`?(0,W.jsx)(ij,{check:o,opts:e},X()):e.type===`likert`?(0,W.jsx)(Wj,{check:o,opts:e},X()):e.type===`rating5`?(0,W.jsx)(mj,{check:o,opts:e},X()):e.type===`rating7`?(0,W.jsx)(wj,{check:o,opts:e},X()):e.type===`rating10`?(0,W.jsx)(Pj,{check:o,opts:e},X()):e.type===`information`?(0,W.jsx)(Qj,{opts:e},X()):null):(0,W.jsx)(wM,{children:`No questions added.`}),{})})]})},SM=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
  margin-top: 50px;
`,CM=U.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
  z-index: 9999;
`,wM=U.div`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`,TM=s(((e,t)=>{function n(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}t.exports=n})),EM=s(((e,t)=>{var n=zA(),r=Gs();function i(e,t){return t.length<2?e:n(e,r(t,0,-1))}t.exports=i})),DM=s(((e,t)=>{var n=LA(),r=TM(),i=EM(),a=RA(),o=Object.prototype.hasOwnProperty;function s(e,t){t=n(t,e);var s=-1,c=t.length;if(!c)return!0;for(;++s<c;){var l=a(t[s]);if(l===`__proto__`&&!o.call(e,`__proto__`)||(l===`constructor`||l===`prototype`)&&s<c-1)return!1}var u=i(e,t);return u==null||delete u[a(r(t))]}t.exports=s})),OM=s(((e,t)=>{var n=DM(),r=wc(),i=Array.prototype.splice;function a(e,t){for(var a=e?t.length:0,o=a-1;a--;){var s=t[a];if(a==o||s!==c){var c=s;r(s)?i.call(e,s,1):n(e,s)}}return e}t.exports=a})),kM=u(s(((e,t)=>{var n=YA(),r=OM();function i(e,t){var i=[];if(!(e&&e.length))return i;var a=-1,o=[],s=e.length;for(t=n(t,3);++a<s;){var c=e[a];t(c,a,e)&&(i.push(c),o.push(a))}return r(e,o),i}t.exports=i}))(),1),AM=(e,t)=>{e.statementList=(0,Kc.default)(e.statementList);let n=e.statementList.filter(e=>e.pinkChecked===!0),r=e.statementList.filter(e=>e.yellowChecked===!0),i=e.statementList.filter(e=>e.greenChecked===!0),a=0,o=0,s=0,c=0,l=0,u=0;for(;n.length>0&&a<50;)t.forEach(t=>{let r=t[0],i=t[1];if(e.vCols[r].length<i)do{if(n.length>0){let t=n.pop();if(t){let n=t.id;e.vCols[r].unshift(t),(0,kM.default)(e.statementList,e=>e.id===n)}}o+=1}while(n.length>0&&e.vCols[r].length<i&&o<50);a+=1});for(;r.length>0&&s<50;)t.forEach(t=>{let n=t[0],i=t[1];if(e.vCols[n].length<i)do{if(r.length>0){let t=r.pop();if(t){let r=t.id;e.vCols[n].push(t),(0,kM.default)(e.statementList,e=>e.id===r)}}c+=1}while(r.length>0&&e.vCols[n].length<i&&c<50);s+=1});for(;i.length>0&&l<50;)t.forEach(t=>{let n=t[0],r=t[1];if(e.vCols[n].length<r)do{if(i.length>0){let t=i.pop();if(t){let r=t.id;e.vCols[n].unshift(t),(0,kM.default)(e.statementList,e=>e.id===r)}}u+=1}while(i.length>0&&e.vCols[n].length<r&&u<50);l+=1});return e},jM=e=>e.langObj,MM=e=>e.triggerConfirmationFinishedModal,NM=e=>e.setTriggerConfirmationFinishedModal,PM=()=>{let e=q(jM),t=J(MM),n=J(NM),r=G(K(e.thinningConfirmModalHead))||``,i=G(K(e.thinningConfirmModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(FM,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(IM,{children:i})]})},FM=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,IM=U.div`
  margin-top: 15px;
`,LM=e=>e.langObj,RM=e=>e.triggerThinningPreventNavModal,zM=e=>e.setTriggerThinningPreventNavModal,BM=()=>{let e=q(LM),t=J(RM),n=J(zM),r=G(K(e.thinningPreventNavModalHead))||``,i=G(K(e.thinningPreventNavModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(VM,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(HM,{children:i})]})},VM=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,HM=U.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,UM=e=>e.langObj,WM=e=>{let t=q(UM),n=G(K(t.numStatementsToSelect))||``,r=G(K(t.currentlySelectedNumber))||``;return(0,W.jsxs)(GM,{children:[(0,W.jsxs)(JM,{children:[e.part1,e.part2,e.part3]}),(0,W.jsxs)(KM,{maxNum:e.maxNum,selectedNum:e.selectedNum,children:[`${n}: ${e.maxNum}`,` `]}),(0,W.jsxs)(qM,{maxNum:e.maxNum,selectedNum:e.selectedNum,children:[`${r}: ${e.selectedNum}`,` `]})]})},GM=U.div`
  display: flex;
  flex-direction: column;
  width: 54vw;
  font-size: clamp(1.6rem, 1.35vw, 5rem);

  justify-content: center;
  align-items: center;
  // font-size: 1.6vw;
  font-weight: normal;
  text-align: center;
  color: black;
`,KM=U.span`
  width: 40vw;
  background-color: ${e=>e.selectedNum===e.maxNum?`white`:`rgb(249, 249, 0)`};
  padding: 5px;
  margin-top: 30px;
  font-style: italic;
  font-size: clamp(1.3rem, 1.35vw, 5rem);

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`,qM=U.span`
  width: 40vw;
  background-color: ${e=>e.selectedNum===e.maxNum?`white`:e.selectedNum>e.maxNum?`#ff8080`:`rgb(249, 249, 0)`};
  padding: 5px;
  margin-top: 0px;
  font-style: italic;
  font-size: clamp(1.3rem, 1.35vw, 5rem);

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`,JM=U.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  gap: 30px;
  width: 54vw;
  justify-content: center;
  align-items: center;
  font-size: clamp(1.6rem, 1.35vw, 5rem);
  font-weight: normal;
  text-align: center;
  color: black;

  div {
    width: 50vw;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`,YM=e=>{let t=JSON.parse(localStorage.getItem(`newCols`));e.forEach(e=>{let n=e.id,r=e.targetcol;t.statementList.forEach(e=>{e.id===n&&(t.vCols[r].push(e),(0,kM.default)(t.statementList,e=>e.id===n))})}),localStorage.setItem(`newCols`,JSON.stringify(t))},XM=e=>{console.log(`selectedPosItems`,e);let t=JSON.parse(localStorage.getItem(`newCols`));e.forEach(e=>{let n=e.id,r=e.targetcol;console.log(`objId`,n),console.log(`targetcol`,r),t.statementList.forEach(e=>{e.id===n&&(t.vCols[r].push(e),(0,kM.default)(t.statementList,e=>e.id===n))})}),localStorage.setItem(`newCols`,JSON.stringify(t))},ZM=e=>e.langObj,QM=e=>e.triggerThinHelpModal,$M=e=>e.setTriggerThinHelpModal,eN=()=>{let e=q(ZM),t=J(QM),n=J($M),r=G(K(e.thinningHelpModalHead)),i=G(K(e.thinningHelpModalText));return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,children:[(0,W.jsx)(tN,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(nN,{children:i})]})},tN=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,nN=U.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,rN=e=>e.langObj,iN=e=>e.configObj,aN=e=>e.setProgressScore,oN=e=>e.setCurrentPage,sN=e=>e.setDisplayNextButton,cN=e=>e.setIsThinningFinished,lN=e=>e.isLeftSideFinished,uN=e=>e.isRightSideFinished,dN=e=>e.cardFontSizeThin,fN=e=>e.cardHeightThin;function pN(e,t){try{let n=window.localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch(e){return console.log(e),t}}var mN=()=>{let e=q(rN),t=q(iN),n=J(aN),r=J(oN),i=J(sN),a=J(cN),o=J(lN),s=J(uN),c=J(dN),l=J(fN),u=G(K(e.initialInstructionPart1))||``,d=G(K(e.initialInstructionPartNeg1))||``,f=G(K(e.initialInstructionPartNeg2))||``,p=G(K(e.initialInstructionPart2))||``,m=G(K(e.initialInstructionPart3))||``,h=G(K(e.thinPageTitle))||``,g=G(K(e.thinPageSubmitButton))||``,_=G(K(e.finalInstructions))||``;(0,S.useEffect)(()=>{let e=e=>{(s===!1||o===!1)&&(e.preventDefault(),e.returnValue=``)};return window.addEventListener(`beforeunload`,e),()=>{window.removeEventListener(`beforeunload`,e)}},[o,s]);let[v,y]=kb(`selectedNegItems`,pN(`negSorted`,[])),[b,x]=kb(`selectedPosItems`,pN(`posSorted`,[])),[C,w]=kb(`thinDisplayControllerArray`,pN(`thinDisplayControllerArray`,[])),T=(0,S.useRef)({part1:``,part2:``,part3:``}),E=(0,S.useRef)(!1),D;C[0]?.side===`right`&&(C[0]?.iteration===1&&(T.current={part1:u,part2:``,part3:m}),C[0]?.iteration>1&&(T.current={part1:``,part2:p,part3:m}),D=[...b]),C[0]?.side===`left`&&(C[0]?.iteration===1&&(T.current={part1:d,part2:``,part3:m}),C[0]?.iteration>1&&(T.current={part1:``,part2:f,part3:m}),D=[...v]);let O=C.length>0,k=e=>{let t=e.currentTarget.getAttribute(`data-targetcol`),n=e.currentTarget.dataset.id,r=D.map(e=>e.id===n?{...e,targetcol:t,selected:!e.selected}:e);C[0]?.side===`right`&&x(r),C[0]?.side===`left`&&y(r)},A=()=>{if(C[0]?.side===`right`){let e=b.filter(e=>e.selected===!0),t=b.filter(e=>e.selected!==!0);localStorage.setItem(`posSorted`,JSON.stringify(t)),XM(e);let n=C.slice(1);w(n),x(t);return}if(C[0]?.side===`left`){let e=v.filter(e=>e.selected===!0),t=v.filter(e=>e.selected!==!0);localStorage.setItem(`negSorted`,JSON.stringify(t)),YM(e);let n=C.slice(1);w(n),y(t);return}},j=0,M=Math.min(C[0]?.maxNum??0,(D||[]).length),N=(0,S.useRef)(null);(0,S.useEffect)(()=>(N.current=Date.now(),(async()=>{await r(`thin`),localStorage.setItem(`currentPage`,`thin`),await n(35)})(),()=>{ar(N.current,`thinningPage`,`thinningPage`)}),[r,n]),(0,S.useEffect)(()=>{i(!0)},[C,i]),(0,S.useEffect)(()=>{if(C.length===0&&!E.current){E.current=!0;let e=pN(`finalSortColData`,null),t=AM(pN(`newCols`,null),e);localStorage.setItem(`columnStatements`,JSON.stringify(t));let n=setTimeout(()=>{a(!0)},50);return()=>clearTimeout(n)}},[C,a]);let P=(D||[]).map(e=>(e.selected===!0&&(j+=1),(0,W.jsx)(wN,{onClick:k,id:e.id,side:C[0]?.side,fontSize:c,cardHeight:l,color:e.color,selected:e.selected,"data-targetcol":C[0]?.targetCol,"data-max":M,"data-selected":e.selected,"data-id":e.id,children:e.statement},e.id)));return O===!0?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(td,{}),(0,W.jsx)(PM,{}),(0,W.jsx)(BM,{}),(0,W.jsx)(eN,{}),(0,W.jsx)(_N,{background:t.headerBarColor,children:(0,W.jsx)(vN,{children:h})}),(0,W.jsx)(yN,{children:(0,W.jsxs)(bN,{children:[(0,W.jsxs)(xN,{children:[(0,W.jsx)(WM,{part1:T.current.part1,part2:T.current.part2,part3:T.current.part3,maxNum:M,selectedNum:j}),(0,W.jsx)(SN,{onClick:A,disabled:j!==M,isActive:j===M,children:g})]}),(0,W.jsx)(CN,{children:P})]})})]}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(td,{}),(0,W.jsx)(PM,{}),(0,W.jsx)(BM,{}),(0,W.jsx)(eN,{}),(0,W.jsx)(_N,{background:t.headerBarColor,children:(0,W.jsx)(vN,{children:h})}),(0,W.jsx)(yN,{children:(0,W.jsx)(TN,{children:(0,W.jsx)(EN,{children:_})})})]})},hN={right:{accent:`#16a34a`,accentSoft:`#22c55e`,bg:`linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)`},left:{accent:`#dc2626`,accentSoft:`#f97316`,bg:`linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)`},neutral:{accent:`#94a3b8`,accentSoft:`#cbd5e1`,bg:`linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)`}},gN=e=>hN[e]||hN.neutral,_N=U.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.background};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
  }
`,vN=U.h1`
  color: white;
  font-weight: 700;
  font-size: clamp(1.2rem, 4vw, 1.75rem);
  margin: 0;
  padding: 1rem 1.5rem;
  text-align: center;
  letter-spacing: -0.025em;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`,yN=U.main`
  padding-top: 60px; /* Account for fixed header */
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`,bN=U.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`,xN=U.section`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`,SN=U.button`
  background: ${e=>e.isActive?`linear-gradient(135deg, #367ab7 0%, #367ab7 100%)`:`linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)`};
  color: ${e=>e.isActive?`white`:`#6b7280`};
  border: none;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${e=>e.isActive?`pointer`:`not-allowed`};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 140px;
  box-shadow: ${e=>e.isActive?`0 4px 14px 0 rgba(54,122,183,1, 0.3)`:`0 2px 4px 0 rgba(0, 0, 0, 0.05)`};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${e=>e.isActive?`0 8px 25px 0 rgba(54,122,183,1, 0.4)`:`0 4px 12px 0 rgba(0, 0, 0, 0.1)`};
  }

  /* FIX: give :active a distinct, "pressed" feel instead of repeating
     the same translateY(-2px) used on :hover. */
  &:active:not(:disabled) {
    transform: translateY(0) scale(0.97);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.5rem;
    font-size: 1rem;
    min-width: 120px;
  }
`,CN=U.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0;
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.5rem;
  }
`,wN=U.div`
  background: ${e=>e.selected?`#fef9c3`:gN(e.side).bg};
  border: 2px solid
    ${e=>e.selected?`#eab308`:gN(e.side).accentSoft};
  border-radius: 12px;
  padding: 1rem;
  height: ${e=>Math.max(e.cardHeight||120,120)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${e=>e.fontSize||14}px;
  font-weight: 500;
  color: #1f2937;
  line-height: 1.4;
  overflow: hidden;
  position: relative;

  /* Selected state reads as a colored ring + soft fill rather than a
     flat saturated yellow block, so it stays legible against the
     pastel side colors instead of clashing with them. */
  box-shadow: ${e=>e.selected?`0 0 0 2px rgba(234, 179, 8, 0.35)`:`none`};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: ${e=>e.selected?`#ca8a04`:gN(e.side).accent};
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    height: ${e=>Math.max((e.cardHeight||120)*.9,100)}px;
    border-radius: 8px;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,TN=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,EN=U.div`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  text-align: center;
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: #1f2937;
  line-height: 1.6;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }
`,DN=class extends S.Component{render(){return(0,W.jsxs)(ON,{children:[` `,(0,W.jsx)(`h1`,{children:`404`}),` `,(0,W.jsx)(`p`,{children:`Page doesn't exist`})]})}},ON=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`,kN=e=>Array.isArray(e)?e:[e].filter(Boolean),AN=(e,t=``)=>e?._text??t,jN=(e,t,n=``)=>e?._attributes?.[t]??n,MN=(e,t=!1)=>{if(e==null)return t;if(typeof e==`boolean`)return e;try{let n=JSON.parse(e);return typeof n==`boolean`?n:t}catch(e){return console.log(e),t}},NN=(e,t=``)=>e?.elements?.[0]?.text??t,PN=(e,t,n=``)=>e?.attributes?.[t]??n,FN=e=>{let t=e.elements[0].elements,n={},r=[];n.configFileVersion=NN(t.find(e=>e.attributes?.id===`configFileVersion`));let i=[];for(let e=0;e<t.length;e++){let r=t[e],a=r.attributes?.id;if(a===`survey`){i.push([...r.elements]);continue}if(!(`elements`in r)||[`columnHeadersColorsArray`,`columnColorsArray`,`qSortHeaderNumbers`,`qSortHeaders`,`qSortPattern`].includes(a))continue;let o=r.elements?.[0]?.text;o===`true`?o=!0:o===`false`?o=!1:o!==void 0&&o!==``&&!isNaN(o)&&(o=+o),n[a]=o}let a={};if(i.length>0){r=i.map((e,t)=>{let n=`itemNum${t+1}`,r=e[0],i=PN(r,`type`),o=MN(PN(r,`required`,`false`));a[n]=o?`no-*?*-response`:i===`information`?`info - n.a.`:`no response`;let s={id:n,itemNum:t+1,type:i,hasBeenAnswered:!1};switch(i){case`information`:return{...s,background:PN(r,`bg`),options:NN(e[1])};case`text`:return{...s,required:o,label:NN(e[1]),note:NN(e[2]),limitLength:PN(r,`limitLength`,`999`),restricted:PN(r,`restricted`,`false`),limited:PN(r,`limited`,`false`),placeholder:NN(e[3])};case`textarea`:return{...s,required:PN(r,`required`,`false`),label:NN(e[1]),note:NN(e[2]),placeholder:NN(e[3])};case`radio`:return{...s,required:o,other:MN(PN(r,`other`,`false`)),label:NN(e[1]),note:NN(e[2]),options:NN(r)};case`select`:return{...s,required:PN(r,`required`,`false`),label:NN(e[1]),options:NN(r),note:NN(e[2])};case`checkbox`:return{...s,required:MN(PN(r,`required`,`false`)),other:MN(PN(r,`other`,`false`)),label:NN(e[1]),options:NN(r),note:NN(e[2])};case`rating2`:return{...s,required:PN(r,`required`,`false`),label:NN(e[1]),scale:PN(r,`scale`,`Yes;;;No`),options:NN(r),note:NN(e[2])};case`likert`:return{...s,required:PN(r,`required`,`false`),label:NN(e[1]),scale:PN(r,`scale`,`Strongly Disagree;;;Disagree;;;Neutral;;;Agree;;;Strongly Agree`),options:NN(r)};case`rating5`:case`rating7`:case`rating10`:return{...s,required:PN(r,`required`,`false`),label:NN(e[1]),options:NN(r),note:NN(e[2])};default:return console.warn(`Unknown survey question type: "${i}" (item ${t+1})`),s}});let e;try{e=JSON.parse(localStorage.getItem(`resultsSurvey`))}catch(t){console.error(`Failed to parse stored resultsSurvey:`,t),e=null}e||(localStorage.setItem(`resultsSurvey`,JSON.stringify(a)),localStorage.setItem(`resultsSurveyArchive`,JSON.stringify(a))),n.requiredAnswersObj=a}return{requiredAnswersObj:a,configObj:n,surveyQuestionObjArray:r,shuffleCards:n?.shuffleCards}},IN=e=>{let t={},n=e.map,r={},i=[],a=kN(e?.map?.info).find(e=>jN(e,`id`)===`mapFileVersion`);a||console.warn(`processMapXMLData: no <info id="mapFileVersion"> element found in map.xml`),t.mapFileVersion=AN(a);let o=kN(n.column);for(let e=0;e<o.length;e++){let t=o[e],n=jN(t,`id`),a=parseInt(n,10);Number.isNaN(a)&&console.warn(`processMapXMLData: column at position ${e} has a non-numeric or missing "id" attribute`);let s=a<0?`columnN${Math.abs(a)}`:`column${a}`;r[s]=[],i.push({colNum:e+1,label:n,colour:`#${jN(t,`colour`)}`,numCards:AN(t)})}t.colInfoArray=i;let s=kN(e?.map?.item),c=s.find(e=>jN(e,`id`)===`qSortPattern`);c||console.warn(`processMapXMLData: no <item id="qSortPattern"> element found in map.xml`);let l=AN(c);t.qSortPattern=l?l.split(`,`).map(e=>+e):[];for(let e=0;e<s.length;e++){let n=s[e],r=jN(n,`id`),i=AN(n,``);if(!r){console.warn(`processMapXMLData: item at position ${e} is missing an "id" attribute`);continue}t[r]=i.includes(`,`)?i.split(`,`):[i]}let u={},d=t.qSortHeaders??[],f=t.qSortHeaderNumbers??[];!t.qSortHeaders||!t.qSortHeaderNumbers?console.warn(`processMapXMLData: qSortHeaders or qSortHeaderNumbers missing — postsortConvertObj may be incomplete`):d.length!==f.length&&console.warn(`processMapXMLData: qSortHeaders and qSortHeaderNumbers have different lengths`);for(let e=0;e<d.length;e++){let t=`column${d[e]}`;u[t]=f[e]}return t.postsortConvertObj=u,{vColsObj:r,mapObj:t}},LN=e=>{let t={},n=kN(e?.language?.info).find(e=>jN(e,`id`)===`languageFileVersion`);n||console.warn(`processLanguageXMLData: no <info id="languageFileVersion"> element found in language.xml`),t.langFileVersion=AN(n);let r=kN(e?.language?.item);for(let e=0;e<r.length;e++){let n=r[e],i=jN(n,`id`);if(!i){console.warn(`processLanguageXMLData: item at position ${e} is missing an "id" attribute`);continue}t[i]=AN(n)}return t},RN=(e,t,n)=>{let r=kN(e?.statements?.statement);r.length===0&&console.warn(`processStatementsXMLData: no <statement> elements found in statements.xml`);let i=new Set,a=r.map((e,t)=>{let n=e?._attributes?.id,r=e?._text?.trim()??``;return n===void 0&&console.warn(`processStatementsXMLData: statement at position ${t} is missing an "id" attribute`),r===``&&console.warn(`processStatementsXMLData: statement id="${n}" has no text content`),i.has(n)&&console.warn(`processStatementsXMLData: duplicate statement id "${n}" found`),i.add(n),{id:`s${n}`,statementNum:n,divColor:`isUncertainStatement`,cardColor:`yellowSortCard`,pinkChecked:!1,yellowChecked:!0,greenChecked:!1,sortValue:222,backgroundColor:`#e0e0e0`,statement:r}});t===!0&&(a=(0,Kc.default)(a));let o={vCols:n,statementList:a};return localStorage.setItem(`hasBeenLoaded`,`true`),{columnStatements:o,totalStatements:a.length}},zN=u(Rc(),1),BN=e=>e.configObj,VN=e=>e.mapObj,HN=e=>e.presortFinished,UN=e=>e.setTriggerPresortPreventNavModal,WN=e=>e.currentPage,GN=e=>e.setCheckRequiredQuestionsComplete,KN=e=>e.setTriggerSurveyPreventNavModal,qN=e=>e.isSortingFinished,JN=e=>e.hasOverloadedColumn,YN=e=>e.setTriggerSortPreventNavModal,XN=e=>e.setTriggerSortOverloadedColumnModal,ZN=e=>e.columnStatements,QN=e=>e.setResults,$N=e=>e.setShowPostsortCommentHighlighting,eP=e=>e.setTriggerPostsortPreventNavModal,tP=e=>e.isThinningFinished,nP=e=>e.setTriggerThinningPreventNavModal,rP=e=>e.partId,iP=e=>{let t,n=q(BN),r=q(VN),i=J(HN),a=J(UN),o=J(WN),s=J(GN),c=J(KN),l=J(qN),u=J(JN),d=J(YN),f=J(XN),p=q(ZN),m=J(QN),h=J($N),g=J(eP),_=J(tP),v=J(nP),y=n.allowUnforcedSorts,b=n.postsortCommentsRequired,x=J(rP),S=[];try{S=JSON.parse(localStorage.getItem(`sortColumns`))||[]}catch(e){console.error(`JSON parsing failed:`,e.message);return}let{history:C,to:w=`/`,onClick:T=()=>{},...E}=e,D=(e,t)=>{let i=Xw(p);if(o===`presort`)return t!==!1||(a(!0),!1);if(o===`landing`&&n.initialScreen===`partId`)return console.log(x),x!=null&&x!==``;if(o===`thin`)return _!==!1||(console.log(`thin`),v(!0),!1);if(o===`sort`)return l===!1?S?.imagesList?.length===0?e===!0?(m(i),d(!1),!0):u===!0?(d(!1),f(!0),!1):(m(i),d(!1),!0):(d(!0),!1):e===!0?(d(!1),!0):u===!0?(d(!1),f(!0),!1):(d(!1),!0);if(o===`postsort`){if(b===!0||b===`true`){let e=JSON.parse(localStorage.getItem(`allCommentsObj`))||{},t=JSON.parse(localStorage.getItem(`columnStatements`))?.vCols||{},i=n.requireMinCommentLength===!0||n.requireMinCommentLength===`true`,a=n.minWordCountValuePostsort||0,{requiredColumns:o}=cd(r,n),s=new Set(o);if(bl(Object.entries(t).filter(([e])=>s.has(e)).flatMap(([e,t])=>t.map((t,n)=>`textArea-${e}_${n+1}`)),e,{minWordCountRequired:i,minWordCountValue:a}).length>0)return h(!0),g(!0),!1}return!0}if(o===`survey`){let e=JSON.parse(localStorage.getItem(`resultsSurvey`));return!(0,zN.default)(e).includes(`no-*?*-response`)||(s(!0),c(!0),!1)}return!0};return(0,W.jsx)(oP,{...E,onClick:e=>{T&&T(e),t=D(y,i),t&&C.push(w)},tabindex:`0`})},aP=cn(iP);iP.propTypes={to:Et.default.string,onClick:Et.default.func,history:Et.default.object.isRequired,location:Et.default.object,match:Et.default.object,staticContext:Et.default.object,rest:Et.default.object};var oP=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,sP=e=>e.langObj,cP=e=>e.cardFontSizeSort,lP=e=>e.setCardFontSizeSort,uP=e=>e.cardFontSizePresort,dP=e=>e.setCardFontSizePresort,fP=e=>e.cardFontSizePostsort,pP=e=>e.setCardFontSizePostsort,mP=e=>e.currentPage,hP=e=>e.setCardFontSizeThin,gP=e=>e.cardFontSizeThin,_P=()=>{let e=q(sP),t=J(cP),n=J(fP),r=J(uP),i=G(K(e.fontSizeText))||``,a=J(lP),o=J(mP),s=+localStorage.getItem(`fontSizeSort`),c=+localStorage.getItem(`fontSizePostsort`),l=+localStorage.getItem(`fontSizePresort`),u=J(pP),d=J(dP),f=J(hP),p=J(gP);return l&&o===`presort`&&(r=l),s&&o===`sort`&&(t=s),c&&o===`postsort`&&(n=c),(0,W.jsxs)(yP,{"data-testid":`FooterFontSizerDiv`,children:[(0,W.jsx)(bP,{children:i}),(0,W.jsx)(vP,{"data-testid":`FooterFontSizerNeg`,padBottom:`0.4em`,onClick:()=>{if(console.log(`decreaseFontSize`),o===`presort`){let e=r-1;e<1&&(e=1),localStorage.setItem(`fontSizePresort`,JSON.stringify(e)),d(e)}if(o===`thin`){let e=p-1;e<1&&(e=1),localStorage.setItem(`fontSizeThin`,JSON.stringify(e)),f(e)}if(o===`sort`){let e=t-1;e<1&&(e=1),localStorage.setItem(`fontSizeSort`,JSON.stringify(e)),a(e)}if(o===`postsort`){let e=n-1;e<1&&(e=1),localStorage.setItem(`fontSizePostsort`,JSON.stringify(e)),u(e)}},children:`-`}),(0,W.jsx)(vP,{"data-testid":`FooterFontSizerPos`,padBottom:`0.25em`,onClick:()=>{if(o===`presort`){let e=r+1;localStorage.setItem(`fontSizePresort`,JSON.stringify(e)),d(e)}if(o===`thin`){let e=p+1;localStorage.setItem(`fontSizeThin`,JSON.stringify(e)),f(e)}if(o===`sort`){let e=t+1;localStorage.setItem(`fontSizeSort`,JSON.stringify(e)),a(e)}if(o===`postsort`){let e=n+1;localStorage.setItem(`fontSizePostsort`,JSON.stringify(e)),u(e)}},children:`+`})]})},vP=U.button`
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  margin: 0 3px 0 3px;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 30px;
  width: 35px;

  border-radius: 3px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,yP=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`,bP=U.div`
  font-size: 16px;
  user-select: none;
`,xP=e=>e.langObj,SP=e=>e.cardHeightSort,CP=e=>e.setCardHeightSort,wP=e=>e.cardHeightPostsort,TP=e=>e.setCardHeightPostsort,EP=e=>e.currentPage,DP=e=>e.setCardHeightThin,OP=e=>e.cardHeightThin,kP=()=>{let e=q(xP),t=J(SP),n=localStorage.getItem(`cardHeightSort`),r=J(wP),i=localStorage.getItem(`cardHeightPostsort`),a=J(EP),o=J(CP),s=J(TP),c=J(DP),l=J(OP),u=localStorage.getItem(`cardHeightThin`);u&&(l=u),n&&(t=n),i&&(r=i);let d=G(K(e.cardHeightText))||``;return(0,W.jsxs)(jP,{"data-testid":`CardHeightSizerDiv`,children:[(0,W.jsx)(MP,{children:d}),(0,W.jsx)(AP,{"data-testid":`cardHeightSizerNeg`,padBottom:`0.4em`,onClick:()=>{if(a===`thin`){let e=l-5;e<10&&(e=10),localStorage.setItem(`cardHeightThin`,JSON.stringify(e)),c(e)}if(a===`sort`){let e=t-2;e<10&&(e=10),localStorage.setItem(`cardHeightSort`,JSON.stringify(e)),o(e)}if(a===`postsort`){let e=r-2;e<10&&(e=10),localStorage.setItem(`cardHeightPostsort`,JSON.stringify(e)),s(e)}},children:`-`}),(0,W.jsx)(AP,{"data-testid":`cardHeightSizerPlus`,padBottom:`0.25em`,onClick:()=>{if(a===`thin`){let e=+l+5;localStorage.setItem(`cardHeightThin`,JSON.stringify(e)),c(e)}if(a===`sort`){let e=+t+2;localStorage.setItem(`cardHeightSort`,JSON.stringify(e)),o(e)}if(a===`postsort`){let e=+r+2;localStorage.setItem(`cardHeightPostsort`,JSON.stringify(e)),s(e)}},children:`+`})]})},AP=U.button`
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  margin: 0 3px 0 3px;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 30px;
  width: 35px;
  border-radius: 3px;
  text-decoration: none;
  user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
`,jP=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 15px;
`,MP=U.div`
  font-size: 16px;
  user-select: none;
`,NP=e=>{let t;if(e===`landing`)return t=10,t;if(e===`consent`)return t=15,t;if(e===`presort`)return t=20,t;if(e===`thin`)return t=40,t;if(e===`sort`)return t=60,t;if(e===`postsort`)return t=80,t;if(e===`survey`)return t=90,t;if(e===`submit`)return t=100,t},PP=e=>e.langObj,FP=e=>e.configObj,IP=e=>e.currentPage,LP=e=>e.setTriggerLandingModal,RP=e=>e.setTriggerPresortModal,zP=e=>e.setTriggerSortModal,BP=e=>e.setTriggerPostsortModal,VP=e=>e.setTriggerSurveyModal,HP=e=>e.setTriggerSubmitModal,UP=e=>e.setTriggerConsentModal,WP=e=>e.setTriggerThinHelpModal,GP=()=>{let e=q(PP),t=q(FP),n=J(IP),r=J(LP),i=J(RP),a=J(zP),o=J(BP),s=J(VP),c=J(HP),l=J(UP),u=J(WP),d=G(K(e.btnHelp))||``;n===`landing`&&(d=G(K(e.btnHelpLanding))||``),n===`consent`&&(d=G(K(e.btnHelpConsent))||``);let f=()=>{console.log(`currentPage`,n),n===`landing`&&r(!0),n===`consent`&&l(!0),n===`presort`&&i(!0),n===`thin`&&u(!0),n===`sort`&&a(!0),n===`postsort`&&o(!0),n===`survey`&&s(!0),n===`submit`&&c(!0)};return n===`consent`?t.showConsentPageHelpModal===!0?(0,W.jsx)(KP,{"data-testid":`helpButtonDiv`,tabindex:`0`,onClick:f,children:d}):null:(0,W.jsx)(KP,{"data-testid":`helpButtonDiv`,tabindex:`0`,onClick:f,children:d})},KP=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  justify-self: right;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,qP=(e,t,n,r,i)=>e===`consent`?r===!0?`/landing`:`/presort`:e===`landing`?`/presort`:e===`presort`?i===!0?`/thin`:`/sort`:e===`thin`?`/sort`:e===`sort`?t===!0?`/postsort`:n===!0?`/survey`:`/submit`:e===`postsort`?n===!0?`/survey`:`/submit`:e===`survey`?`/submit`:e===`submit`?`/`:`/nopagefound`,JP=cn(e=>{let{history:t,to:n,onClick:r,...i}=e;return(0,W.jsx)(YP,{...i,onClick:e=>{r&&r(e),t.push(n)},tabindex:`0`})}),YP=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,XP=e=>e.langObj,ZP=e=>e.configObj,QP=e=>e.displayNextButton,$P=e=>e.currentPage,eF=e=>e.localUsercode,tF=()=>{let e=q(XP),t=q(ZP),n=J(QP),r=J($P),i=J(eF),a=!0,o=!0,s=!0,c=!0,l,u=e.postsortBackButtonText;l=!!(r===`postsort`&&t.showBackButton);let d=G(K(`{{{center}}}{{{img src="./logo/logo.png" height="40" width="250" /}}}{{{/center}}}`)),f;if(f=r===`landing`?G(K(e.btnNextLanding))||``:r===`consent`?G(K(e.btnNextConsent))||``:G(K(e.btnNext))||``,r===`sort`&&t.setupTarget===`local`){let e=i,n=t.studyTitle,r=new Date,a=r.getFullYear()+`-`+(r.getMonth()+1)+`-`+r.getDate(),o=r.getHours()+`:`+r.getMinutes()+`:`+r.getSeconds();d=`${e} - ${n} - ${a+` `+o}`}let p=t.showPostsort,m=t.showSurvey,h=t.useImages,g=t.showConsentPage,_=t.useThinProcess,v=!0,y=NP(r);v=r!==`consent`,r===`submit`&&(n=!1),t.setupTarget===`local`&&r===`landing`&&(n=!1,s=!1),r===`submit`&&(s=!1),r===`presort`&&(t.useImages===!0?(a=!1,o=!1):(a=!0,o=!1)),r===`sort`&&(h===!0?(a=!0,o=!0,c=!1):(a=!0,o=!0,c=!0)),(r===`landing`||r===`survey`||r===`submit`||r===`consent`)&&(a=!1);let b=(0,W.jsxs)(S.Fragment,{children:[s&&(0,W.jsx)(GP,{}),a&&(0,W.jsxs)(rF,{children:[c&&(0,W.jsx)(_P,{"data-testid":`fontSizer`}),o&&(0,W.jsx)(kP,{"data-testid":`cardHeightSizer`})]}),(0,W.jsx)(iF,{children:v&&(0,W.jsxs)(`div`,{style:{position:`relative`,width:`100px`,height:`25px`},children:[(0,W.jsx)(`progress`,{value:y,max:`100`,style:{width:`100%`,height:`100%`,display:`block`,overflow:`hidden`,outline:`2px solid #ccc`}}),(0,W.jsxs)(`span`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,fontSize:`13px`,fontWeight:`bold`,color:y>50?`#ffffff`:`#333333`,pointerEvents:`none`},children:[y,`%`]})]})})]}),x=qP(r,p,m,g,_);return(0,W.jsxs)(nF,{children:[(0,W.jsx)(aF,{children:d}),(0,W.jsx)(oF,{children:b}),(0,W.jsxs)(sF,{children:[l&&(0,W.jsx)(JP,{to:`/sort`,children:u}),n&&(0,W.jsx)(aP,{"data-testid":`nextButton`,to:x,children:f})]})]})},nF=U.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid lightgray;

  display: inline-grid;
  grid-template-columns: 16% 1fr 16%;
  align-items: center;
`,rF=U.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
`,iF=U.div`
  align-self: center;
  justify-self: center;
  margin-left: 25px;

  /* Force cross-browser styles down into the child progress element */
  progress {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
  }

  /* 1. Sets the background container track color (the unfilled space) */
  progress::-webkit-progress-bar {
    background-color: #e0e0de;
    border-radius: 8px;
  }
  progress {
    background-color: #e0e0de;
    border-radius: 8px;
  }

  /* 2. Forces the fill color to #337ab7 on Webkit (Chrome, Safari, Edge) */
  progress::-webkit-progress-value {
    background-color: #337ab7 !important;
    border-radius: 8px;
  }

  /* 3. Forces the fill color to #337ab7 on Mozilla Firefox */
  progress::-moz-progress-bar {
    background-color: #337ab7 !important;
    border-radius: 8px;
  }
`,aF=U.div`
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  justify-self: start;
  align-self: center;
  text-align: center;
`,oF=U.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,sF=U.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`,cF=s(((e,t)=>{t.exports={}})),lF=s((e=>{(function(e){e.parser=function(e,t){return new n(e,t)},e.SAXParser=n,e.SAXStream=u,e.createStream=c,e.MAX_BUFFER_LENGTH=65536;var t=[`comment`,`sgmlDecl`,`textNode`,`tagName`,`doctype`,`procInstName`,`procInstBody`,`entity`,`attribName`,`attribValue`,`cdata`,`script`];e.EVENTS=[`text`,`processinginstruction`,`sgmldeclaration`,`doctype`,`comment`,`opentagstart`,`attribute`,`opentag`,`closetag`,`opencdata`,`cdata`,`closecdata`,`error`,`end`,`ready`,`script`,`opennamespace`,`closenamespace`];function n(t,r){if(!(this instanceof n))return new n(t,r);var a=this;i(a),a.q=a.c=``,a.bufferCheckPosition=e.MAX_BUFFER_LENGTH,a.encoding=null,a.opt=r||{},a.opt.lowercase=a.opt.lowercase||a.opt.lowercasetags,a.looseCase=a.opt.lowercase?`toLowerCase`:`toUpperCase`,a.opt.maxEntityCount=a.opt.maxEntityCount||512,a.opt.maxEntityDepth=a.opt.maxEntityDepth||4,a.entityCount=a.entityDepth=0,a.tags=[],a.closed=a.closedRoot=a.sawRoot=!1,a.tag=a.error=null,a.strict=!!t,a.noscript=!!(t||a.opt.noscript),a.state=T.BEGIN,a.strictEntities=a.opt.strictEntities,a.ENTITIES=a.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),a.attribList=[],a.opt.xmlns&&(a.ns=Object.create(h)),a.opt.unquotedAttributeValues===void 0&&(a.opt.unquotedAttributeValues=!t),a.trackPosition=a.opt.position!==!1,a.trackPosition&&(a.position=a.line=a.column=0),D(a,`onready`)}Object.create||(Object.create=function(e){function t(){}return t.prototype=e,new t}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t});function r(n){for(var r=Math.max(e.MAX_BUFFER_LENGTH,10),i=0,a=0,o=t.length;a<o;a++){var s=n[t[a]].length;if(s>r)switch(t[a]){case`textNode`:N(n);break;case`cdata`:M(n,`oncdata`,n.cdata),n.cdata=``;break;case`script`:M(n,`onscript`,n.script),n.script=``;break;default:F(n,`Max buffer length exceeded: `+t[a])}i=Math.max(i,s)}n.bufferCheckPosition=e.MAX_BUFFER_LENGTH-i+n.position}function i(e){for(var n=0,r=t.length;n<r;n++)e[t[n]]=``}function a(e){N(e),e.cdata!==``&&(M(e,`oncdata`,e.cdata),e.cdata=``),e.script!==``&&(M(e,`onscript`,e.script),e.script=``)}n.prototype={end:function(){ee(this)},write:ie,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var o;try{o=cF().Stream}catch{o=function(){}}o||=function(){};var s=e.EVENTS.filter(function(e){return e!==`error`&&e!==`end`});function c(e,t){return new u(e,t)}function l(e,t){if(e.length>=2){if(e[0]===255&&e[1]===254)return`utf-16le`;if(e[0]===254&&e[1]===255)return`utf-16be`}return e.length>=3&&e[0]===239&&e[1]===187&&e[2]===191?`utf8`:e.length>=4?e[0]===60&&e[1]===0&&e[2]===63&&e[3]===0?`utf-16le`:e[0]===0&&e[1]===60&&e[2]===0&&e[3]===63?`utf-16be`:`utf8`:t?`utf8`:null}function u(e,t){if(!(this instanceof u))return new u(e,t);o.apply(this),this._parser=new n(e,t),this.writable=!0,this.readable=!0;var r=this;this._parser.onend=function(){r.emit(`end`)},this._parser.onerror=function(e){r.emit(`error`,e),r._parser.error=null},this._decoder=null,this._decoderBuffer=null,s.forEach(function(e){Object.defineProperty(r,`on`+e,{get:function(){return r._parser[`on`+e]},set:function(t){if(!t)return r.removeAllListeners(e),r._parser[`on`+e]=t,t;r.on(e,t)},enumerable:!0,configurable:!1})})}u.prototype=Object.create(o.prototype,{constructor:{value:u}}),u.prototype._decodeBuffer=function(e,t){if(this._decoderBuffer&&=(e=Buffer.concat([this._decoderBuffer,e]),null),!this._decoder){var n=l(e,t);if(!n)return this._decoderBuffer=e,``;this._parser.encoding=n,this._decoder=new TextDecoder(n)}return this._decoder.decode(e,{stream:!t})},u.prototype.write=function(e){if(typeof Buffer==`function`&&typeof Buffer.isBuffer==`function`&&Buffer.isBuffer(e))e=this._decodeBuffer(e,!1);else if(this._decoderBuffer){var t=this._decodeBuffer(Buffer.alloc(0),!0);t&&(this._parser.write(t),this.emit(`data`,t))}return this._parser.write(e.toString()),this.emit(`data`,e),!0},u.prototype.end=function(e){if(e&&e.length&&this.write(e),this._decoderBuffer){var t=this._decodeBuffer(Buffer.alloc(0),!0);t&&(this._parser.write(t),this.emit(`data`,t))}else if(this._decoder){var n=this._decoder.decode();n&&(this._parser.write(n),this.emit(`data`,n))}return this._parser.end(),!0},u.prototype.on=function(e,t){var n=this;return!n._parser[`on`+e]&&s.indexOf(e)!==-1&&(n._parser[`on`+e]=function(){var t=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);t.splice(0,0,e),n.emit.apply(n,t)}),o.prototype.on.call(n,e,t)};var d=/^\[CDATA\[$/i,f=/^DOCTYPE$/i,p=`http://www.w3.org/XML/1998/namespace`,m=`http://www.w3.org/2000/xmlns/`,h={xml:p,xmlns:m},g=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,_=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,v=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,y=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function b(e){return e===` `||e===`
`||e===`\r`||e===`	`}function x(e){return e===`"`||e===`'`}function S(e){return e===`>`||b(e)}function C(e,t){return e.test(t)}function w(e,t){return!C(e,t)}var T=0;for(var E in e.STATE={BEGIN:T++,BEGIN_WHITESPACE:T++,TEXT:T++,TEXT_ENTITY:T++,OPEN_WAKA:T++,SGML_DECL:T++,SGML_DECL_QUOTED:T++,DOCTYPE:T++,DOCTYPE_QUOTED:T++,DOCTYPE_DTD:T++,DOCTYPE_DTD_QUOTED:T++,COMMENT_STARTING:T++,COMMENT:T++,COMMENT_ENDING:T++,COMMENT_ENDED:T++,CDATA:T++,CDATA_ENDING:T++,CDATA_ENDING_2:T++,PROC_INST:T++,PROC_INST_BODY:T++,PROC_INST_ENDING:T++,OPEN_TAG:T++,OPEN_TAG_SLASH:T++,ATTRIB:T++,ATTRIB_NAME:T++,ATTRIB_NAME_SAW_WHITE:T++,ATTRIB_VALUE:T++,ATTRIB_VALUE_QUOTED:T++,ATTRIB_VALUE_CLOSED:T++,ATTRIB_VALUE_UNQUOTED:T++,ATTRIB_VALUE_ENTITY_Q:T++,ATTRIB_VALUE_ENTITY_U:T++,CLOSE_TAG:T++,CLOSE_TAG_SAW_WHITE:T++,SCRIPT:T++,SCRIPT_ENDING:T++},e.XML_ENTITIES=Object.assign(Object.create(null),{amp:`&`,gt:`>`,lt:`<`,quot:`"`,apos:`'`}),e.ENTITIES=Object.assign(Object.create(null),{amp:`&`,gt:`>`,lt:`<`,quot:`"`,apos:`'`,AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}),Object.keys(e.ENTITIES).forEach(function(t){var n=e.ENTITIES[t],r=typeof n==`number`?String.fromCharCode(n):n;e.ENTITIES[t]=r}),e.STATE)e.STATE[e.STATE[E]]=E;T=e.STATE;function D(e,t,n){e[t]&&e[t](n)}function O(e){var t=e&&e.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);return t?t[2]:null}function k(e){return e?e.toLowerCase().replace(/[^a-z0-9]/g,``):null}function A(e,t){let n=k(e),r=k(t);return!n||!r?!0:r===`utf16`?n===`utf16le`||n===`utf16be`:n===r}function j(e,t){if(!(!e.strict||!e.encoding||!t||t.name!==`xml`)){var n=O(t.body);n&&!A(e.encoding,n)&&I(e,`XML declaration encoding `+n+` does not match detected stream encoding `+e.encoding.toUpperCase())}}function M(e,t,n){e.textNode&&N(e),D(e,t,n)}function N(e){e.textNode=P(e.opt,e.textNode),e.textNode&&D(e,`ontext`,e.textNode),e.textNode=``}function P(e,t){return e.trim&&(t=t.trim()),e.normalize&&(t=t.replace(/\s+/g,` `)),t}function F(e,t){return N(e),e.trackPosition&&(t+=`
Line: `+e.line+`
Column: `+e.column+`
Char: `+e.c),t=Error(t),e.error=t,D(e,`onerror`,t),e}function ee(e){return e.sawRoot&&!e.closedRoot&&I(e,`Unclosed root tag`),e.state!==T.BEGIN&&e.state!==T.BEGIN_WHITESPACE&&e.state!==T.TEXT&&F(e,`Unexpected end`),N(e),e.c=``,e.closed=!0,D(e,`onend`),n.call(e,e.strict,e.opt),e}function I(e,t){if(typeof e!=`object`||!(e instanceof n))throw Error(`bad call to strictFail`);e.strict&&F(e,t)}function L(e){e.strict||(e.tagName=e.tagName[e.looseCase]());var t=e.tags[e.tags.length-1]||e,n=e.tag={name:e.tagName,attributes:{}};e.opt.xmlns&&(n.ns=t.ns),e.attribList.length=0,M(e,`onopentagstart`,n)}function R(e,t){var n=e.indexOf(`:`)<0?[``,e]:e.split(`:`),r=n[0],i=n[1];return t&&e===`xmlns`&&(r=`xmlns`,i=``),{prefix:r,local:i}}function z(e){if(e.strict||(e.attribName=e.attribName[e.looseCase]()),e.attribList.indexOf(e.attribName)!==-1||e.tag.attributes.hasOwnProperty(e.attribName)){e.attribName=e.attribValue=``;return}if(e.opt.xmlns){var t=R(e.attribName,!0),n=t.prefix,r=t.local;if(n===`xmlns`){if(r===`xml`&&e.attribValue!==p)I(e,`xml: prefix must be bound to `+p+`
Actual: `+e.attribValue);else if(r===`xmlns`&&e.attribValue!==m)I(e,`xmlns: prefix must be bound to `+m+`
Actual: `+e.attribValue);else{var i=e.tag,a=e.tags[e.tags.length-1]||e;i.ns===a.ns&&(i.ns=Object.create(a.ns)),i.ns[r]=e.attribValue}}e.attribList.push([e.attribName,e.attribValue])}else e.tag.attributes[e.attribName]=e.attribValue,M(e,`onattribute`,{name:e.attribName,value:e.attribValue});e.attribName=e.attribValue=``}function B(e,t){if(e.opt.xmlns){var n=e.tag,r=R(e.tagName);n.prefix=r.prefix,n.local=r.local,n.uri=n.ns[r.prefix]||``,n.prefix&&!n.uri&&(I(e,`Unbound namespace prefix: `+JSON.stringify(e.tagName)),n.uri=r.prefix);var i=e.tags[e.tags.length-1]||e;n.ns&&i.ns!==n.ns&&Object.keys(n.ns).forEach(function(t){M(e,`onopennamespace`,{prefix:t,uri:n.ns[t]})});for(var a=0,o=e.attribList.length;a<o;a++){var s=e.attribList[a],c=s[0],l=s[1],u=R(c,!0),d=u.prefix,f=u.local,p=d===``?``:n.ns[d]||``,m={name:c,value:l,prefix:d,local:f,uri:p};d&&d!==`xmlns`&&!p&&(I(e,`Unbound namespace prefix: `+JSON.stringify(d)),m.uri=d),e.tag.attributes[c]=m,M(e,`onattribute`,m)}e.attribList.length=0}e.tag.isSelfClosing=!!t,e.sawRoot=!0,e.tags.push(e.tag),M(e,`onopentag`,e.tag),t||(e.state=!e.noscript&&e.tagName.toLowerCase()===`script`?T.SCRIPT:T.TEXT,e.tag=null,e.tagName=``),e.attribName=e.attribValue=``,e.attribList.length=0}function V(e){if(!e.tagName){I(e,`Weird empty close tag.`),e.textNode+=`</>`,e.state=T.TEXT;return}if(e.script){if(e.tagName!==`script`){e.script+=`</`+e.tagName+`>`,e.tagName=``,e.state=T.SCRIPT;return}M(e,`onscript`,e.script),e.script=``}var t=e.tags.length,n=e.tagName;e.strict||(n=n[e.looseCase]());for(var r=n;t--&&e.tags[t].name!==r;)I(e,`Unexpected close tag`);if(t<0){I(e,`Unmatched closing tag: `+e.tagName),e.textNode+=`</`+e.tagName+`>`,e.state=T.TEXT;return}e.tagName=n;for(var i=e.tags.length;i-->t;){var a=e.tag=e.tags.pop();e.tagName=e.tag.name,M(e,`onclosetag`,e.tagName);var o={};for(var s in a.ns)o[s]=a.ns[s];var c=e.tags[e.tags.length-1]||e;e.opt.xmlns&&a.ns!==c.ns&&Object.keys(a.ns).forEach(function(t){var n=a.ns[t];M(e,`onclosenamespace`,{prefix:t,uri:n})})}t===0&&(e.closedRoot=!0),e.tagName=e.attribValue=e.attribName=``,e.attribList.length=0,e.state=T.TEXT}function H(e){var t=e.entity,n=t.toLowerCase(),r,i=``;return e.ENTITIES[t]?e.ENTITIES[t]:e.ENTITIES[n]?e.ENTITIES[n]:(t=n,t.charAt(0)===`#`&&(t.charAt(1)===`x`?(t=t.slice(2),r=parseInt(t,16),i=r.toString(16)):(t=t.slice(1),r=parseInt(t,10),i=r.toString(10))),t=t.replace(/^0+/,``),isNaN(r)||i.toLowerCase()!==t||r<0||r>1114111||!te(r)?(I(e,`Invalid character entity`),`&`+e.entity+`;`):String.fromCodePoint(r))}function te(e){return e===9||e===10||e===13||e>=32&&e<=55295||e>=57344&&e<=65533||e>=65536&&e<=1114111}function ne(e,t){t===`<`?(e.state=T.OPEN_WAKA,e.startTagPosition=e.position):b(t)||(I(e,`Non-whitespace before first tag.`),e.textNode=t,e.state=T.TEXT)}function re(e,t){var n=``;return t<e.length&&(n=e.charAt(t)),n}function ie(t){var n=this;if(this.error)throw this.error;if(n.closed)return F(n,`Cannot write after close. Assign an onready handler.`);if(t===null)return ee(n);typeof t==`object`&&(t=t.toString());for(var i=0,a=``;a=re(t,i++),n.c=a,a;)switch(n.trackPosition&&(n.position++,a===`
`?(n.line++,n.column=0):n.column++),n.state){case T.BEGIN:if(n.state=T.BEGIN_WHITESPACE,a===`﻿`)continue;ne(n,a);continue;case T.BEGIN_WHITESPACE:ne(n,a);continue;case T.TEXT:if(n.sawRoot&&!n.closedRoot){for(var o=i-1;a&&a!==`<`&&a!==`&`;)a=re(t,i++),a&&n.trackPosition&&(n.position++,a===`
`?(n.line++,n.column=0):n.column++);n.textNode+=t.substring(o,i-1)}a===`<`&&!(n.sawRoot&&n.closedRoot&&!n.strict)?(n.state=T.OPEN_WAKA,n.startTagPosition=n.position):(!b(a)&&(!n.sawRoot||n.closedRoot)&&I(n,`Text data outside of root node.`),a===`&`?n.state=T.TEXT_ENTITY:n.textNode+=a);continue;case T.SCRIPT:a===`<`?n.state=T.SCRIPT_ENDING:n.script+=a;continue;case T.SCRIPT_ENDING:a===`/`?n.state=T.CLOSE_TAG:(n.script+=`<`+a,n.state=T.SCRIPT);continue;case T.OPEN_WAKA:if(a===`!`)n.state=T.SGML_DECL,n.sgmlDecl=``;else if(!b(a)){if(C(g,a))n.state=T.OPEN_TAG,n.tagName=a;else if(a===`/`)n.state=T.CLOSE_TAG,n.tagName=``;else if(a===`?`)n.state=T.PROC_INST,n.procInstName=n.procInstBody=``;else{if(I(n,`Unencoded <`),n.startTagPosition+1<n.position){var s=n.position-n.startTagPosition;a=Array(s).join(` `)+a}n.textNode+=`<`+a,n.state=T.TEXT}}continue;case T.SGML_DECL:if(n.sgmlDecl+a===`--`){n.state=T.COMMENT,n.comment=``,n.sgmlDecl=``;continue}n.doctype&&n.doctype!==!0&&n.sgmlDecl?(n.state=T.DOCTYPE_DTD,n.doctype+=`<!`+n.sgmlDecl+a,n.sgmlDecl=``):d.test(n.sgmlDecl+a)?(M(n,`onopencdata`),n.state=T.CDATA,n.sgmlDecl=``,n.cdata=``):f.test(n.sgmlDecl+a)?(n.state=T.DOCTYPE,(n.doctype||n.sawRoot)&&I(n,`Inappropriately located doctype declaration`),n.doctype=``,n.sgmlDecl=``):a===`>`?(M(n,`onsgmldeclaration`,n.sgmlDecl),n.sgmlDecl=``,n.state=T.TEXT):(x(a)&&(n.state=T.SGML_DECL_QUOTED),n.sgmlDecl+=a);continue;case T.SGML_DECL_QUOTED:a===n.q&&(n.state=T.SGML_DECL,n.q=``),n.sgmlDecl+=a;continue;case T.DOCTYPE:a===`>`?(n.state=T.TEXT,M(n,`ondoctype`,n.doctype),n.doctype=!0):(n.doctype+=a,a===`[`?n.state=T.DOCTYPE_DTD:x(a)&&(n.state=T.DOCTYPE_QUOTED,n.q=a));continue;case T.DOCTYPE_QUOTED:n.doctype+=a,a===n.q&&(n.q=``,n.state=T.DOCTYPE);continue;case T.DOCTYPE_DTD:a===`]`?(n.doctype+=a,n.state=T.DOCTYPE):a===`<`?(n.state=T.OPEN_WAKA,n.startTagPosition=n.position):x(a)?(n.doctype+=a,n.state=T.DOCTYPE_DTD_QUOTED,n.q=a):n.doctype+=a;continue;case T.DOCTYPE_DTD_QUOTED:n.doctype+=a,a===n.q&&(n.state=T.DOCTYPE_DTD,n.q=``);continue;case T.COMMENT:a===`-`?n.state=T.COMMENT_ENDING:n.comment+=a;continue;case T.COMMENT_ENDING:a===`-`?(n.state=T.COMMENT_ENDED,n.comment=P(n.opt,n.comment),n.comment&&M(n,`oncomment`,n.comment),n.comment=``):(n.comment+=`-`+a,n.state=T.COMMENT);continue;case T.COMMENT_ENDED:a===`>`?n.state=n.doctype&&n.doctype!==!0?T.DOCTYPE_DTD:T.TEXT:(I(n,`Malformed comment`),n.comment+=`--`+a,n.state=T.COMMENT);continue;case T.CDATA:for(var o=i-1;a&&a!==`]`;)a=re(t,i++),a&&n.trackPosition&&(n.position++,a===`
`?(n.line++,n.column=0):n.column++);n.cdata+=t.substring(o,i-1),a===`]`&&(n.state=T.CDATA_ENDING);continue;case T.CDATA_ENDING:a===`]`?n.state=T.CDATA_ENDING_2:(n.cdata+=`]`+a,n.state=T.CDATA);continue;case T.CDATA_ENDING_2:a===`>`?(n.cdata&&M(n,`oncdata`,n.cdata),M(n,`onclosecdata`),n.cdata=``,n.state=T.TEXT):a===`]`?n.cdata+=`]`:(n.cdata+=`]]`+a,n.state=T.CDATA);continue;case T.PROC_INST:a===`?`?n.state=T.PROC_INST_ENDING:b(a)?n.state=T.PROC_INST_BODY:n.procInstName+=a;continue;case T.PROC_INST_BODY:if(!n.procInstBody&&b(a))continue;a===`?`?n.state=T.PROC_INST_ENDING:n.procInstBody+=a;continue;case T.PROC_INST_ENDING:if(a===`>`){let e={name:n.procInstName,body:n.procInstBody};j(n,e),M(n,`onprocessinginstruction`,e),n.procInstName=n.procInstBody=``,n.state=T.TEXT}else n.procInstBody+=`?`+a,n.state=T.PROC_INST_BODY;continue;case T.OPEN_TAG:C(_,a)?n.tagName+=a:(L(n),a===`>`?B(n):a===`/`?n.state=T.OPEN_TAG_SLASH:(b(a)||I(n,`Invalid character in tag name`),n.state=T.ATTRIB));continue;case T.OPEN_TAG_SLASH:a===`>`?(B(n,!0),V(n)):(I(n,`Forward-slash in opening tag not followed by >`),n.state=T.ATTRIB);continue;case T.ATTRIB:if(b(a))continue;a===`>`?B(n):a===`/`?n.state=T.OPEN_TAG_SLASH:C(g,a)?(n.attribName=a,n.attribValue=``,n.state=T.ATTRIB_NAME):I(n,`Invalid attribute name`);continue;case T.ATTRIB_NAME:a===`=`?n.state=T.ATTRIB_VALUE:a===`>`?(I(n,`Attribute without value`),n.attribValue=n.attribName,z(n),B(n)):b(a)?n.state=T.ATTRIB_NAME_SAW_WHITE:C(_,a)?n.attribName+=a:I(n,`Invalid attribute name`);continue;case T.ATTRIB_NAME_SAW_WHITE:if(a===`=`)n.state=T.ATTRIB_VALUE;else if(b(a))continue;else I(n,`Attribute without value`),n.tag.attributes[n.attribName]=``,n.attribValue=``,M(n,`onattribute`,{name:n.attribName,value:``}),n.attribName=``,a===`>`?B(n):C(g,a)?(n.attribName=a,n.state=T.ATTRIB_NAME):(I(n,`Invalid attribute name`),n.state=T.ATTRIB);continue;case T.ATTRIB_VALUE:if(b(a))continue;x(a)?(n.q=a,n.state=T.ATTRIB_VALUE_QUOTED):(n.opt.unquotedAttributeValues||F(n,`Unquoted attribute value`),n.state=T.ATTRIB_VALUE_UNQUOTED,n.attribValue=a);continue;case T.ATTRIB_VALUE_QUOTED:if(a!==n.q){a===`&`?n.state=T.ATTRIB_VALUE_ENTITY_Q:n.attribValue+=a;continue}z(n),n.q=``,n.state=T.ATTRIB_VALUE_CLOSED;continue;case T.ATTRIB_VALUE_CLOSED:b(a)?n.state=T.ATTRIB:a===`>`?B(n):a===`/`?n.state=T.OPEN_TAG_SLASH:C(g,a)?(I(n,`No whitespace between attributes`),n.attribName=a,n.attribValue=``,n.state=T.ATTRIB_NAME):I(n,`Invalid attribute name`);continue;case T.ATTRIB_VALUE_UNQUOTED:if(!S(a)){a===`&`?n.state=T.ATTRIB_VALUE_ENTITY_U:n.attribValue+=a;continue}z(n),a===`>`?B(n):n.state=T.ATTRIB;continue;case T.CLOSE_TAG:if(n.tagName)a===`>`?V(n):C(_,a)?n.tagName+=a:n.script?(n.script+=`</`+n.tagName+a,n.tagName=``,n.state=T.SCRIPT):(b(a)||I(n,`Invalid tagname in closing tag`),n.state=T.CLOSE_TAG_SAW_WHITE);else{if(b(a))continue;w(g,a)?n.script?(n.script+=`</`+a,n.state=T.SCRIPT):I(n,`Invalid tagname in closing tag.`):n.tagName=a}continue;case T.CLOSE_TAG_SAW_WHITE:if(b(a))continue;a===`>`?V(n):I(n,`Invalid characters in closing tag`);continue;case T.TEXT_ENTITY:case T.ATTRIB_VALUE_ENTITY_Q:case T.ATTRIB_VALUE_ENTITY_U:var c,l;switch(n.state){case T.TEXT_ENTITY:c=T.TEXT,l=`textNode`;break;case T.ATTRIB_VALUE_ENTITY_Q:c=T.ATTRIB_VALUE_QUOTED,l=`attribValue`;break;case T.ATTRIB_VALUE_ENTITY_U:c=T.ATTRIB_VALUE_UNQUOTED,l=`attribValue`}if(a===`;`){var u=H(n);n.opt.unparsedEntities&&!Object.values(e.XML_ENTITIES).includes(u)?((n.entityCount+=1)>n.opt.maxEntityCount&&F(n,`Parsed entity count exceeds max entity count`),(n.entityDepth+=1)>n.opt.maxEntityDepth&&F(n,`Parsed entity depth exceeds max entity depth`),n.entity=``,n.state=c,n.write(u),--n.entityDepth):(n[l]+=u,n.entity=``,n.state=c)}else C(n.entity.length?y:v,a)?n.entity+=a:(I(n,`Invalid character in entity name`),n[l]+=`&`+n.entity+a,n.entity=``,n.state=c);continue;default:throw Error(n,`Unknown state: `+n.state)}return n.position>=n.bufferCheckPosition&&r(n),n}String.fromCodePoint||(function(){var e=String.fromCharCode,t=Math.floor,n=function(){var n=16384,r=[],i,a,o=-1,s=arguments.length;if(!s)return``;for(var c=``;++o<s;){var l=Number(arguments[o]);if(!isFinite(l)||l<0||l>1114111||t(l)!==l)throw RangeError(`Invalid code point: `+l);l<=65535?r.push(l):(l-=65536,i=(l>>10)+55296,a=l%1024+56320,r.push(i,a)),(o+1===s||r.length>n)&&(c+=e.apply(null,r),r.length=0)}return c};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:n,configurable:!0,writable:!0}):String.fromCodePoint=n})()})(e===void 0?e.sax={}:e)})),uF=s(((e,t)=>{t.exports={isArray:function(e){return Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)===`[object Array]`}}})),dF=s(((e,t)=>{var n=uF().isArray;t.exports={copyOptions:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},ensureFlagExists:function(e,t){(!(e in t)||typeof t[e]!=`boolean`)&&(t[e]=!1)},ensureSpacesExists:function(e){(!(`spaces`in e)||typeof e.spaces!=`number`&&typeof e.spaces!=`string`)&&(e.spaces=0)},ensureAlwaysArrayExists:function(e){(!(`alwaysArray`in e)||typeof e.alwaysArray!=`boolean`&&!n(e.alwaysArray))&&(e.alwaysArray=!1)},ensureKeyExists:function(e,t){(!(e+`Key`in t)||typeof t[e+`Key`]!=`string`)&&(t[e+`Key`]=t.compact?`_`+e:e)},checkFnExists:function(e,t){return e+`Fn`in t}}})),fF=s(((e,t)=>{var n=lF(),r={on:function(){},parse:function(){}},i=dF(),a=uF().isArray,o,s=!0,c;function l(e){return o=i.copyOptions(e),i.ensureFlagExists(`ignoreDeclaration`,o),i.ensureFlagExists(`ignoreInstruction`,o),i.ensureFlagExists(`ignoreAttributes`,o),i.ensureFlagExists(`ignoreText`,o),i.ensureFlagExists(`ignoreComment`,o),i.ensureFlagExists(`ignoreCdata`,o),i.ensureFlagExists(`ignoreDoctype`,o),i.ensureFlagExists(`compact`,o),i.ensureFlagExists(`alwaysChildren`,o),i.ensureFlagExists(`addParent`,o),i.ensureFlagExists(`trim`,o),i.ensureFlagExists(`nativeType`,o),i.ensureFlagExists(`nativeTypeAttributes`,o),i.ensureFlagExists(`sanitize`,o),i.ensureFlagExists(`instructionHasAttributes`,o),i.ensureFlagExists(`captureSpacesBetweenElements`,o),i.ensureAlwaysArrayExists(o),i.ensureKeyExists(`declaration`,o),i.ensureKeyExists(`instruction`,o),i.ensureKeyExists(`attributes`,o),i.ensureKeyExists(`text`,o),i.ensureKeyExists(`comment`,o),i.ensureKeyExists(`cdata`,o),i.ensureKeyExists(`doctype`,o),i.ensureKeyExists(`type`,o),i.ensureKeyExists(`name`,o),i.ensureKeyExists(`elements`,o),i.ensureKeyExists(`parent`,o),i.checkFnExists(`doctype`,o),i.checkFnExists(`instruction`,o),i.checkFnExists(`cdata`,o),i.checkFnExists(`comment`,o),i.checkFnExists(`text`,o),i.checkFnExists(`instructionName`,o),i.checkFnExists(`elementName`,o),i.checkFnExists(`attributeName`,o),i.checkFnExists(`attributeValue`,o),i.checkFnExists(`attributes`,o),o}function u(e){var t=Number(e);if(!isNaN(t))return t;var n=e.toLowerCase();return n===`true`||n!==`false`&&e}function d(e,t){var n;if(o.compact){if(!c[o[e+`Key`]]&&(a(o.alwaysArray)?o.alwaysArray.indexOf(o[e+`Key`])!==-1:o.alwaysArray)&&(c[o[e+`Key`]]=[]),c[o[e+`Key`]]&&!a(c[o[e+`Key`]])&&(c[o[e+`Key`]]=[c[o[e+`Key`]]]),e+`Fn`in o&&typeof t==`string`&&(t=o[e+`Fn`](t,c)),e===`instruction`&&(`instructionFn`in o||`instructionNameFn`in o)){for(n in t)if(t.hasOwnProperty(n)){if(`instructionFn`in o)t[n]=o.instructionFn(t[n],n,c);else{var r=t[n];delete t[n],t[o.instructionNameFn(n,r,c)]=r}}}a(c[o[e+`Key`]])?c[o[e+`Key`]].push(t):c[o[e+`Key`]]=t}else{c[o.elementsKey]||(c[o.elementsKey]=[]);var i={};if(i[o.typeKey]=e,e===`instruction`){for(n in t)if(t.hasOwnProperty(n))break;i[o.nameKey]=`instructionNameFn`in o?o.instructionNameFn(n,t,c):n,o.instructionHasAttributes?(i[o.attributesKey]=t[n][o.attributesKey],`instructionFn`in o&&(i[o.attributesKey]=o.instructionFn(i[o.attributesKey],n,c))):(`instructionFn`in o&&(t[n]=o.instructionFn(t[n],n,c)),i[o.instructionKey]=t[n])}else e+`Fn`in o&&(t=o[e+`Fn`](t,c)),i[o[e+`Key`]]=t;o.addParent&&(i[o.parentKey]=c),c[o.elementsKey].push(i)}}function f(e){if(`attributesFn`in o&&e&&(e=o.attributesFn(e,c)),(o.trim||`attributeValueFn`in o||`attributeNameFn`in o||o.nativeTypeAttributes)&&e){for(var t in e)if(e.hasOwnProperty(t)&&(o.trim&&(e[t]=e[t].trim()),o.nativeTypeAttributes&&(e[t]=u(e[t])),`attributeValueFn`in o&&(e[t]=o.attributeValueFn(e[t],t,c)),`attributeNameFn`in o)){var n=e[t];delete e[t],e[o.attributeNameFn(t,e[t],c)]=n}}return e}function p(e){var t={};if(e.body&&(e.name.toLowerCase()===`xml`||o.instructionHasAttributes)){for(var n=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,r;(r=n.exec(e.body))!==null;)t[r[1]]=r[2]||r[3]||r[4];t=f(t)}if(e.name.toLowerCase()===`xml`){if(o.ignoreDeclaration)return;c[o.declarationKey]={},Object.keys(t).length&&(c[o.declarationKey][o.attributesKey]=t),o.addParent&&(c[o.declarationKey][o.parentKey]=c)}else{if(o.ignoreInstruction)return;o.trim&&(e.body=e.body.trim());var i={};o.instructionHasAttributes&&Object.keys(t).length?(i[e.name]={},i[e.name][o.attributesKey]=t):i[e.name]=e.body,d(`instruction`,i)}}function m(e,t){var n;if(typeof e==`object`&&(t=e.attributes,e=e.name),t=f(t),`elementNameFn`in o&&(e=o.elementNameFn(e,c)),o.compact){if(n={},!o.ignoreAttributes&&t&&Object.keys(t).length)for(var r in n[o.attributesKey]={},t)t.hasOwnProperty(r)&&(n[o.attributesKey][r]=t[r]);!(e in c)&&(a(o.alwaysArray)?o.alwaysArray.indexOf(e)!==-1:o.alwaysArray)&&(c[e]=[]),c[e]&&!a(c[e])&&(c[e]=[c[e]]),a(c[e])?c[e].push(n):c[e]=n}else c[o.elementsKey]||(c[o.elementsKey]=[]),n={},n[o.typeKey]=`element`,n[o.nameKey]=e,!o.ignoreAttributes&&t&&Object.keys(t).length&&(n[o.attributesKey]=t),o.alwaysChildren&&(n[o.elementsKey]=[]),c[o.elementsKey].push(n);n[o.parentKey]=c,c=n}function h(e){o.ignoreText||!e.trim()&&!o.captureSpacesBetweenElements||(o.trim&&(e=e.trim()),o.nativeType&&(e=u(e)),o.sanitize&&(e=e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)),d(`text`,e))}function g(e){o.ignoreComment||(o.trim&&(e=e.trim()),d(`comment`,e))}function _(e){var t=c[o.parentKey];o.addParent||delete c[o.parentKey],c=t}function v(e){o.ignoreCdata||(o.trim&&(e=e.trim()),d(`cdata`,e))}function y(e){o.ignoreDoctype||(e=e.replace(/^ /,``),o.trim&&(e=e.trim()),d(`doctype`,e))}function b(e){e.note=e}t.exports=function(e,t){var i=s?n.parser(!0,{}):i=new r.Parser(`UTF-8`),a={};if(c=a,o=l(t),s?(i.opt={strictEntities:!0},i.onopentag=m,i.ontext=h,i.oncomment=g,i.onclosetag=_,i.onerror=b,i.oncdata=v,i.ondoctype=y,i.onprocessinginstruction=p):(i.on(`startElement`,m),i.on(`text`,h),i.on(`comment`,g),i.on(`endElement`,_),i.on(`error`,b)),s)i.write(e).close();else if(!i.parse(e))throw Error(`XML parsing error: `+i.getError());if(a[o.elementsKey]){var u=a[o.elementsKey];delete a[o.elementsKey],a[o.elementsKey]=u,delete a.text}return a}})),pF=s(((e,t)=>{var n=dF(),r=fF();function i(e){var t=n.copyOptions(e);return n.ensureSpacesExists(t),t}t.exports=function(e,t){var n=i(t),a=r(e,n),o,s=`compact`in n&&n.compact?`_parent`:`parent`;return o=`addParent`in n&&n.addParent?JSON.stringify(a,function(e,t){return e===s?`_`:t},n.spaces):JSON.stringify(a,null,n.spaces),o.replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`)}})),mF=s(((e,t)=>{var n=dF(),r=uF().isArray,i,a;function o(e){var t=n.copyOptions(e);return n.ensureFlagExists(`ignoreDeclaration`,t),n.ensureFlagExists(`ignoreInstruction`,t),n.ensureFlagExists(`ignoreAttributes`,t),n.ensureFlagExists(`ignoreText`,t),n.ensureFlagExists(`ignoreComment`,t),n.ensureFlagExists(`ignoreCdata`,t),n.ensureFlagExists(`ignoreDoctype`,t),n.ensureFlagExists(`compact`,t),n.ensureFlagExists(`indentText`,t),n.ensureFlagExists(`indentCdata`,t),n.ensureFlagExists(`indentAttributes`,t),n.ensureFlagExists(`indentInstruction`,t),n.ensureFlagExists(`fullTagEmptyElement`,t),n.ensureFlagExists(`noQuotesForNativeAttributes`,t),n.ensureSpacesExists(t),typeof t.spaces==`number`&&(t.spaces=Array(t.spaces+1).join(` `)),n.ensureKeyExists(`declaration`,t),n.ensureKeyExists(`instruction`,t),n.ensureKeyExists(`attributes`,t),n.ensureKeyExists(`text`,t),n.ensureKeyExists(`comment`,t),n.ensureKeyExists(`cdata`,t),n.ensureKeyExists(`doctype`,t),n.ensureKeyExists(`type`,t),n.ensureKeyExists(`name`,t),n.ensureKeyExists(`elements`,t),n.checkFnExists(`doctype`,t),n.checkFnExists(`instruction`,t),n.checkFnExists(`cdata`,t),n.checkFnExists(`comment`,t),n.checkFnExists(`text`,t),n.checkFnExists(`instructionName`,t),n.checkFnExists(`elementName`,t),n.checkFnExists(`attributeName`,t),n.checkFnExists(`attributeValue`,t),n.checkFnExists(`attributes`,t),n.checkFnExists(`fullTagEmptyElement`,t),t}function s(e,t,n){return(!n&&e.spaces?`
`:``)+Array(t+1).join(e.spaces)}function c(e,t,n){if(t.ignoreAttributes)return``;`attributesFn`in t&&(e=t.attributesFn(e,a,i));var r,o,c,l,u=[];for(r in e)e.hasOwnProperty(r)&&e[r]!==null&&e[r]!==void 0&&(l=t.noQuotesForNativeAttributes&&typeof e[r]!=`string`?``:`"`,o=``+e[r],o=o.replace(/"/g,`&quot;`),c=`attributeNameFn`in t?t.attributeNameFn(r,o,a,i):r,u.push(t.spaces&&t.indentAttributes?s(t,n+1,!1):` `),u.push(c+`=`+l+(`attributeValueFn`in t?t.attributeValueFn(o,r,a,i):o)+l));return e&&Object.keys(e).length&&t.spaces&&t.indentAttributes&&u.push(s(t,n,!1)),u.join(``)}function l(e,t,n){return i=e,a=`xml`,t.ignoreDeclaration?``:`<?xml`+c(e[t.attributesKey],t,n)+`?>`}function u(e,t,n){if(t.ignoreInstruction)return``;for(var r in e)if(e.hasOwnProperty(r))break;var o=`instructionNameFn`in t?t.instructionNameFn(r,e[r],a,i):r;if(typeof e[r]==`object`)return i=e,a=o,`<?`+o+c(e[r][t.attributesKey],t,n)+`?>`;var s=e[r]?e[r]:``;return`instructionFn`in t&&(s=t.instructionFn(s,r,a,i)),`<?`+o+(s?` `+s:``)+`?>`}function d(e,t){return t.ignoreComment?``:`<!--`+(`commentFn`in t?t.commentFn(e,a,i):e)+`-->`}function f(e,t){return t.ignoreCdata?``:`<![CDATA[`+(`cdataFn`in t?t.cdataFn(e,a,i):e.replace(`]]>`,`]]]]><![CDATA[>`))+`]]>`}function p(e,t){return t.ignoreDoctype?``:`<!DOCTYPE `+(`doctypeFn`in t?t.doctypeFn(e,a,i):e)+`>`}function m(e,t){return t.ignoreText?``:(e=``+e,e=e.replace(/&amp;/g,`&`),e=e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),`textFn`in t?t.textFn(e,a,i):e)}function h(e,t){var n;if(e.elements&&e.elements.length)for(n=0;n<e.elements.length;++n)switch(e.elements[n][t.typeKey]){case`text`:if(t.indentText)return!0;break;case`cdata`:if(t.indentCdata)return!0;break;case`instruction`:if(t.indentInstruction)return!0;break;case`doctype`:case`comment`:case`element`:return!0;default:return!0}return!1}function g(e,t,n){i=e,a=e.name;var r=[],o=`elementNameFn`in t?t.elementNameFn(e.name,e):e.name;r.push(`<`+o),e[t.attributesKey]&&r.push(c(e[t.attributesKey],t,n));var s=e[t.elementsKey]&&e[t.elementsKey].length||e[t.attributesKey]&&e[t.attributesKey][`xml:space`]===`preserve`;return s||=`fullTagEmptyElementFn`in t?t.fullTagEmptyElementFn(e.name,e):t.fullTagEmptyElement,s?(r.push(`>`),e[t.elementsKey]&&e[t.elementsKey].length&&(r.push(_(e[t.elementsKey],t,n+1)),i=e,a=e.name),r.push(t.spaces&&h(e,t)?`
`+Array(n+1).join(t.spaces):``),r.push(`</`+o+`>`)):r.push(`/>`),r.join(``)}function _(e,t,n,r){return e.reduce(function(e,i){var a=s(t,n,r&&!e);switch(i.type){case`element`:return e+a+g(i,t,n);case`comment`:return e+a+d(i[t.commentKey],t);case`doctype`:return e+a+p(i[t.doctypeKey],t);case`cdata`:return e+(t.indentCdata?a:``)+f(i[t.cdataKey],t);case`text`:return e+(t.indentText?a:``)+m(i[t.textKey],t);case`instruction`:var o={};return o[i[t.nameKey]]=i[t.attributesKey]?i:i[t.instructionKey],e+(t.indentInstruction?a:``)+u(o,t,n)}},``)}function v(e,t,n){for(var r in e)if(e.hasOwnProperty(r))switch(r){case t.parentKey:case t.attributesKey:break;case t.textKey:if(t.indentText||n)return!0;break;case t.cdataKey:if(t.indentCdata||n)return!0;break;case t.instructionKey:if(t.indentInstruction||n)return!0;break;case t.doctypeKey:case t.commentKey:return!0;default:return!0}return!1}function y(e,t,n,r,o){i=e,a=t;var l=`elementNameFn`in n?n.elementNameFn(t,e):t;if(e==null||e===``)return`fullTagEmptyElementFn`in n&&n.fullTagEmptyElementFn(t,e)||n.fullTagEmptyElement?`<`+l+`></`+l+`>`:`<`+l+`/>`;var u=[];if(t){if(u.push(`<`+l),typeof e!=`object`)return u.push(`>`+m(e,n)+`</`+l+`>`),u.join(``);e[n.attributesKey]&&u.push(c(e[n.attributesKey],n,r));var d=v(e,n,!0)||e[n.attributesKey]&&e[n.attributesKey][`xml:space`]===`preserve`;if(d||=`fullTagEmptyElementFn`in n?n.fullTagEmptyElementFn(t,e):n.fullTagEmptyElement,d)u.push(`>`);else return u.push(`/>`),u.join(``)}return u.push(b(e,n,r+1,!1)),i=e,a=t,t&&u.push((o?s(n,r,!1):``)+`</`+l+`>`),u.join(``)}function b(e,t,n,i){var a,o,c,h=[];for(o in e)if(e.hasOwnProperty(o))for(c=r(e[o])?e[o]:[e[o]],a=0;a<c.length;++a){switch(o){case t.declarationKey:h.push(l(c[a],t,n));break;case t.instructionKey:h.push((t.indentInstruction?s(t,n,i):``)+u(c[a],t,n));break;case t.attributesKey:case t.parentKey:break;case t.textKey:h.push((t.indentText?s(t,n,i):``)+m(c[a],t));break;case t.cdataKey:h.push((t.indentCdata?s(t,n,i):``)+f(c[a],t));break;case t.doctypeKey:h.push(s(t,n,i)+p(c[a],t));break;case t.commentKey:h.push(s(t,n,i)+d(c[a],t));break;default:h.push(s(t,n,i)+y(c[a],o,t,n,v(c[a],t)))}i&&=!h.length}return h.join(``)}t.exports=function(e,t){t=o(t);var n=[];return i=e,a=`_root_`,t.compact?n.push(b(e,t,0,!0)):(e[t.declarationKey]&&n.push(l(e[t.declarationKey],t,0)),e[t.elementsKey]&&e[t.elementsKey].length&&n.push(_(e[t.elementsKey],t,0,!n.length))),n.join(``)}})),hF=s(((e,t)=>{var n=mF();t.exports=function(e,t){e instanceof Buffer&&(e=e.toString());var r=null;if(typeof e==`string`)try{r=JSON.parse(e)}catch{throw Error(`The JSON structure is invalid`)}else r=e;return n(r,t)}})),gF=u(s(((e,t)=>{t.exports={xml2js:fF(),xml2json:pF(),js2xml:mF(),json2xml:hF()}}))(),1),_F=e=>e.langObj,vF=e=>e.triggerConsentModal,yF=e=>e.setTriggerConsentModal,bF=()=>{let e=q(_F),t=J(vF),n=J(yF),r=G(K(e.consentHelpModalHead))||``,i=G(K(e.consentHelpModalText))||``;return(0,W.jsxs)(Gr,{className:`customModal`,open:t,onClose:()=>{n(!1)},center:!0,"data-testid":`consentModalDiv`,children:[(0,W.jsx)(xF,{children:r}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(SF,{children:i})]})},xF=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,SF=U.div`
  margin-top: 15px;
`,CF=e=>e.langObj,wF=e=>e.configObj,TF=()=>{let e=q(CF),t=q(wF).headerBarColor,n=G(K(e.consentTitleBarText))||``;return(0,W.jsx)(EF,{"data-testid":`ConsentTitleBarDiv`,background:t,children:n})},EF=U.div`
  width: 100%;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
`,DF=e=>e.langObj,OF=e=>e.configObj,kF=e=>e.setProgressScore,AF=e=>e.setCurrentPage,jF=e=>e.setDisplayNextButton,MF=e=>e.setUrlUsercode,NF=()=>{let e=q(DF),t=q(OF),n=J(kF),r=J(AF),i=J(jF),a=J(MF),o=G(K(e.consentText))||``,s=(0,S.useRef)(null);return(0,S.useEffect)(()=>(i(!0),s.current=Date.now(),(async()=>{await r(`consent`),localStorage.setItem(`currentPage`,`consent`),await n(15)})(),()=>{ar(s.current,`consentPage`,`consentPage`)}),[r,n,i]),(0,S.useEffect)(()=>{let e=ko(window.location.href);if(e==null){let e=localStorage.getItem(`urlUsercode`);e==null||e===`undefined`?(console.log(`no url usercode in storage`),a(`not_set`),localStorage.setItem(`urlUsercode`,`not_set`)):(console.log(`URL usercode from storage: `,e),a(e===`not_set`?`not_set`:`${e} (stored)`))}else{let t=e;t=t.replace(/\/|#/g,``),console.log(`URL usercode: `,t),a(t),localStorage.setItem(`urlUsercode`,t)}},[a,t]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(bF,{}),(0,W.jsx)(td,{}),(0,W.jsx)(TF,{}),(0,W.jsx)(PF,{"data-testid":`ConsentPageDiv`,children:(0,W.jsx)(`div`,{children:o})})]})},PF=U.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 90px;
  margin-bottom: 70px;
  transition: 0.3s ease all;
  margin-top: 70px;
  overflow-y: auto;
  width: 98vw;
  font-size: 1.2em;
  height: calc(100vh - 80px);
  /* border: 3px solid red; */
  -webkit-overflow-scrolling: touch;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  iframe {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,FF=e=>e.configObj,IF=e=>e.presortFinished,LF=e=>e.setTriggerMobilePresortPreventNavModal,RF=e=>e.currentPage,zF=e=>e.setCheckRequiredQuestionsComplete,BF=e=>e.setTriggerSurveyPreventNavModal,VF=e=>e.setShowPostsortCommentHighlighting,HF=e=>e.setTriggerMobilePostsortPreventNavModal,UF=e=>e.setTriggerMobileThinPreventNavModal,WF=e=>e.hasScrolledToBottomSort,GF=e=>e.setTriggerMobileSortScrollBottomModal,KF=e=>e.partId,qF=cn(e=>{let t,n=q(FF),r=J(IF),i=J(LF),a=J(RF),o=J(zF),s=J(BF),c=J(VF),l=J(HF),u=J(UF),d=J(WF),f=J(GF),p=J(KF),m=n.allowUnforcedSorts,h=n.postsortCommentsRequired,{history:g,to:_,onClick:v,...y}=e,b=()=>{let e=localStorage.getItem(`m_PresortFinished`);if(a===`presort`)return e===`true`||e===!0?(i(!1),localStorage.setItem(`m_PresortDisplayStatements`,JSON.stringify({display:!1})),!0):(i(!0),!1);if(a===`landing`&&n.initialScreen===`partId`||a===`landing`&&n.initialScreen===`partId-access`)return console.log(p),p!=null&&p!==``;if(a===`thin`)return localStorage.getItem(`m_ThinningFinished`)===`true`||(u(!0),!1);if(a===`sort`)return d!==!1||(f(!0),!1);if(a===`postsort`){let e=JSON.parse(localStorage.getItem(`m_MinWordCountPostsortObject`));return!Object.values(e).includes(!1)||h!==!0||(c(!0),l(!0),!1)}if(a===`survey`){let e=JSON.parse(localStorage.getItem(`resultsSurvey`));return!(0,zN.default)(e).includes(`no-*?*-response`)||(o(!0),s(!0),!1)}return!0};return(0,W.jsx)(JF,{...y,width:e.width,onClick:e=>{v&&v(e),t=b(m,r),t&&g.push(_)},tabindex:`0`})}),JF=U.button`
  display: flex;
  justify-content: center;
  border-color: #2e6da4;
  color: white;
  font-size: 1.5vh;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: ${e=>`${e.width}px;`};
  height: 28px;
  /* margin-right: 2vw; */
  align-items: center;
  user-select: none;

  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  /* &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  } */
`,YF=e=>e.langObj,XF=e=>e.currentPage,ZF=e=>e.setMobilePresortFontSize,QF=e=>e.setMobileThinFontSize,$F=e=>e.setMobileSortFontSize,eI=e=>e.setMobilePostsortFontSize,tI=()=>{let e=q(YF),t=J(XF),n=J(ZF),r=J(QF),i=J($F),a=J(eI),[o,s]=kb(`m_FontSizeObject`,{presort:2,thin:2,sort:2,postsort:2}),c=G(K(e.mobileTextSize))||``;return(0,W.jsxs)(iI,{children:[(0,W.jsx)(rI,{padBottom:`0.3em`,onClick:()=>{if(t===`presort`){let e=o.presort-.1;e=e.toPrecision(2);let t={...o,presort:e};s(t),n(e)}if(t===`thin`){let e=o.thin-.1;e=e.toPrecision(2);let t={...o,thin:e};s(t),r(e)}if(t===`sort`){let e=o.sort-.1;e=e.toPrecision(2);let t={...o,sort:e};s(t),i(e)}if(t===`postsort`){let e=o.postsort-.1;e=e.toPrecision(2);let t={...o,postsort:e};s(t),a(e)}},children:`-`}),(0,W.jsx)(aI,{children:c}),(0,W.jsx)(nI,{padBottom:`0.25em`,onClick:()=>{if(t===`presort`){let e=+o.presort+.1;e=e.toPrecision(2);let t={...o,presort:e};s(t),n(e)}if(t===`thin`){let e=+o.thin+.1;e=e.toPrecision(2);let t={...o,thin:e};s(t),r(e)}if(t===`sort`){let e=+o.sort+.1;e=e.toPrecision(2);let t={...o,sort:e};s(t),i(e)}if(t===`postsort`){let e=+o.postsort+.1;e=e.toPrecision(2);let t={...o,postsort:e};s(t),a(e)}},children:`+`})]})},nI=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  /* color: black; */
  font-size: 1.4em;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 30px;
  outline: 1px solid #36454f;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  user-select: none;
  border: 0px;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,rI=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-weight: bold;
  /* color: black; */
  font-size: 1.4em;
  /* font-weight: bold; */
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 30px;
  outline: 1px solid #36454f;
  user-select: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 0px;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,iI=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`,aI=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 5px;
  outline: 1px solid #36454f;
  width: 60px;
`,oI=e=>e.langObj,sI=e=>e.currentPage,cI=e=>e.setMobilePresortViewSize,lI=e=>e.setMobileThinViewSize,uI=e=>e.setMobileSortViewSize,dI=e=>e.setMobilePostsortViewSize,fI=e=>e.setMobileSurveyViewSize,pI=()=>{let e=q(oI),t=J(sI),n=J(cI),r=J(lI),i=J(uI),a=J(dI),o=J(fI),[s,c]=kb(`m_ViewSizeObject`,{presort:42,thin:68,sort:72,postsort:42,survey:72}),l=G(K(e.mobileViewSize))||``;return(0,W.jsxs)(gI,{children:[(0,W.jsx)(hI,{padBottom:`0.3em`,onClick:()=>{if(t===`presort`){let e=s.presort-2;e=e.toPrecision(4);let t={...s,presort:e};c(t),n(e)}if(t===`thin`){let e=s.thin-2;e=e.toPrecision(4);let t={...s,thin:e};c(t),r(e)}if(t===`sort`){let e=s.sort-2;e=e.toPrecision(4);let t={...s,sort:e};c(t),i(e)}if(t===`postsort`){let e=s.postsort-2;e=e.toPrecision(4);let t={...s,postsort:e};c(t),a(e)}if(t===`survey`){let e=s.survey-2;e=e.toPrecision(4);let t={...s,survey:e};c(t),o(e)}},children:`-`}),(0,W.jsx)(_I,{children:l}),(0,W.jsx)(mI,{padBottom:`0.25em`,onClick:()=>{if(t===`presort`){let e=+s.presort+2;e=e.toPrecision(4);let t={...s,presort:e};c(t),n(e)}if(t===`thin`){let e=+s.thin+2;e=e.toPrecision(4);let t={...s,thin:e};c(t),r(e)}if(t===`sort`){let e=+s.sort+2;e=e.toPrecision(4);let t={...s,sort:e};c(t),i(e)}if(t===`postsort`){let e=+s.postsort+2;e=e.toPrecision(4);let t={...s,postsort:e};c(t),a(e)}if(t===`survey`){let e=+s.survey+2;e=e.toPrecision(4);let t={...s,survey:e};c(t),o(e)}},children:`+`})]})},mI=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  /* color: black; */
  font-size: 1.4em;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 35px;
  outline: 1px solid #36454f;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  user-select: none;
  border: 0px;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,hI=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  font-weight: bold;
  color: white;
  /* color: black; */
  font-size: 1.4em;
  /* font-weight: bold; */
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 35px;
  outline: 1px solid #36454f;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 0px;
  user-select: none;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,gI=U.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  user-select: none;
`,_I=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  outline: 1px solid #36454f;
  user-select: none;
`,vI=cn(e=>{let{history:t,to:n,onClick:r,...i}=e;return(0,W.jsx)(yI,{...i,onClick:e=>{r&&r(e),t.push(n)},tabindex:`0`})}),yI=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  padding-right: 0.8em;
  padding-left: 0.8em;
  justify-self: right;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,bI=e=>e.langObj,xI=e=>e.configObj,SI=e=>e.currentPage,CI=e=>e.localUsercode,wI=e=>e.displayNextButton,TI=()=>{let e=q(bI),t=q(xI),n=J(SI),r=J(CI),i=J(wI),a=!0,o=!1,s=!0,c=!1,l=60,u=``,d=t.showPostsort,f=t.showSurvey,p=t.showConsentPage,m=t.useThinProcess,h=fc(),g=G(K(`{{{center}}}{{{img src="./logo/logo.png" height="20" width="125" /}}}{{{/center}}}`));n===`landing`?(l=60,u=G(K(e.btnNextLanding))||``):n===`consent`?(l=180,u=G(K(e.btnNextConsent))||``):u=G(K(e.btnNext))||``;let _=G(K(e.postsortBackButtonText))||``;if(n===`sort`&&t.setupTarget===`local`){let e=r,n=t.studyTitle,i=new Date,a=i.getFullYear()+`-`+(i.getMonth()+1)+`-`+i.getDate(),o=i.getHours()+`:`+i.getMinutes()+`:`+i.getSeconds();g=`${e} - ${n} - ${a+` `+o}`}(n===`submit`||n===`landing`||n===`consent`)&&(o=!0),(n===`landing`||n===`consent`||n===`thin`||n===`postsort`||n===`survey`||n===`sort`||n===`presort`)&&(c=!0);let v=!1;n===`survey`&&(v=!0),t.setupTarget===`local`&&n===`landing`&&(c=!1),n===`landing`&&(c=i),(n===`submit`||n===`landing`||n===`consent`)&&(a=!1,s=!1),n===`survey`&&(a=!1,s=!0),n===`postsort`&&(o=!1);let y=qP(n,d,f,p,m);return h===`landscape-primary`?null:(0,W.jsxs)(EI,{"data-testid":`mobileFooterDiv`,children:[o&&(0,W.jsx)(DI,{"data-testid":`logoDiv`,children:g}),v&&(0,W.jsx)(vI,{to:`/postsort`,children:_}),a&&(0,W.jsx)(tI,{"data-testid":`mobileFooterFontSizerComp`}),s&&(0,W.jsx)(pI,{"data-testid":`mobileFooterViewSizerComp`}),c&&(0,W.jsx)(qF,{"data-testid":`mobileFooterNextButton`,width:l,to:y,children:u})]})},EI=U.footer`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 98%;
  height: 35px;
  box-sizing: border-box;
  border-top: 1px solid lightgray;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  user-select: none;
`,DI=U.div`
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  justify-self: start;
  align-self: center;
  text-align: center;
`,OI=e=>e.mobilePresortFontSize,kI=e=>e.langObj,AI=e=>{let t=J(OI),n=q(kI),r=G(K(n?.mobilePresortEvaluationsComplete))||``,i=e.statement||r;return i??=n?.mobilePresortEvaluationsComplete,(0,W.jsx)(jI,{"data-testid":`MobileStatementBoxDiv`,color:e.backgroundColor,fontSize:+t,children:i})};AI.propTypes={backgroundColor:Et.default.string.isRequired,fontSize:Et.default.number.isRequired,statement:Et.default.string};var jI=U.div`
  display: flex;
  align-self: center;
  justify-self: center;
  background-color: ${e=>e.color};
  width: 80vw;
  height: fit-content;
  min-height: 14vh;
  font-size: ${e=>`${e.fontSize}vh`};
  color: ${e=>e.theme.mobileText};
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  text-align: center;
  padding: 15px 10px 15px 10px;
  border: 1px solid #36454f;
`,MI=e=>(0,W.jsx)(NI,{color:e.color,value:e.value,text:e.text,onTouchStart:e.onClick,child:e.child,children:e.child}),NI=U.div`
  display: flex;
  background-color: ${e=>e.color};
  width: 80vw;
  height: 8vw;
  font-size: 6vw;
  font-weight: bold;
  padding-top: 2px;
  padding-bottom: 1px;
  padding-right: 0px;
  color: ${e=>e.theme.mobileText};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 1px solid #36454f;
  border-radius: 1.5px;
  user-select: none;
  &:active {
    /* background-color: #36454f; */
    opacity: 0.5;
    outline: 1px solid #36454f;
  }
`,PI=e=>(0,W.jsxs)(`svg`,{width:115,height:100,viewBox:`0 0 115 100`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsx)(`path`,{d:`M24 50C24 41.891 26.4046 33.964 30.9097 27.2216C35.4149 20.4792 41.8182 15.2241 49.31 12.1209C56.8017 9.01775 65.0455 8.20581 72.9987 9.7878C80.9519 11.3698 88.2574 15.2747 93.9914 21.0086C99.7253 26.7426 103.63 34.0481 105.212 42.0013C106.794 49.9545 105.982 58.1983 102.879 65.69C99.7759 73.1818 94.5208 79.5851 87.7784 84.0903C81.036 88.5954 73.109 91 65 91`,stroke:`#999999`,strokeWidth:18,strokeLinecap:`round`}),(0,W.jsx)(`path`,{d:`M28 75L52.2487 36.8182H3.75129L28 75Z`,fill:`#999999`})]}),FI=e=>e.mobilePresortFontSize,II=e=>e.mobilePresortViewSize,LI=e=>{let t=J(FI),n=JSON.parse(localStorage.getItem(`m_FontSizeObject`)).presort,r=JSON.parse(localStorage.getItem(`m_ViewSizeObject`)).presort,i=J(II),a=e.statements.map(r=>(0,W.jsx)(zI,{fontSize:t===+n?+t:+n,color:r.color,children:(0,W.jsxs)(`div`,{children:[(0,W.jsx)(BI,{"data-id":r.id,"data-statement":r.statement,onClick:e.onClick,children:(0,W.jsx)(PI,{style:{float:`left`,height:`14px`,width:`14px`,pointerEvents:`none`}})}),r.statement]})},X()));return(0,W.jsx)(RI,{viewSize:i===+r?i:r,children:a})},RI=U.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #e5e5e5;
  width: 90vw;
  height: ${e=>`${e.viewSize}vh`};
  font-size: 1.1vh;
  align-items: center;
  gap: 15px;
  justify-content: center;
  border-radius: 3px;
  text-align: center;
  overflow-x: none;
  overflow-y: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border: 1px solid #36454f;
  color: ${e=>e.theme.mobileText};
`,zI=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  width: 80vw;
  min-height: 8vh;
  font-size: ${e=>`${e.fontSize}vh`};
  border-radius: 3px;
  text-align: center;
  outline: 1px solid #36454f;
  padding: 5px;
`,BI=U.div`
  float: left;
  width: 14px;
  height: 14px;
  margin-right: 5px;
`,VI=e=>{if(e===4)return`#31C48D`;if(e===3)return`#84E1BC`;if(e===2)return`#BCF0DA`;if(e===1)return`#DEF7EC`;if(e===0)return`#F3F4F6`;if(e===-1)return`#FDE8E8`;if(e===-2)return`#FBD5D5`;if(e===-3)return`#F8B4B4`;if(e===-4)return`#F98080`},HI=s(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var n=`none`,r=`contents`,i=/^(input|select|textarea|button|object|iframe)$/;function a(e,t){return t.getPropertyValue(`overflow`)!==`visible`||e.scrollWidth<=0&&e.scrollHeight<=0}function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var i=window.getComputedStyle(e),o=i.getPropertyValue(`display`);return t?o!==r&&a(e,i):o===n}catch{return console.warn(`Failed to inspect element style`),!1}}function s(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),o(t))return!1;t=t.parentNode}return!0}function c(e,t){var n=e.nodeName.toLowerCase();return(i.test(n)&&!e.disabled||n===`a`&&e.href||t)&&s(e)}function l(e){var t=e.getAttribute(`tabindex`);t===null&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&c(e,!n)}function u(e){return[].slice.call(e.querySelectorAll(`*`),0).reduce(function(e,t){return e.concat(t.shadowRoot?u(t.shadowRoot):[t])},[]).filter(l)}t.exports=e.default})),UI=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resetState=o,e.log=s,e.handleBlur=c,e.handleFocus=l,e.markForFocusLater=u,e.returnFocus=d,e.popWithoutFocus=f,e.setupScopedFocus=p,e.teardownScopedFocus=m;var t=n(HI());function n(e){return e&&e.__esModule?e:{default:e}}var r=[],i=null,a=!1;function o(){r=[]}function s(){}function c(){a=!0}function l(){if(a){if(a=!1,!i)return;setTimeout(function(){i.contains(document.activeElement)||((0,t.default)(i)[0]||i).focus()},0)}}function u(){r.push(document.activeElement)}function d(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=null;try{r.length!==0&&(t=r.pop(),t.focus({preventScroll:e}));return}catch{console.warn([`You tried to return focus to`,t,`but it is not in the DOM anymore`].join(` `))}}function f(){r.length>0&&r.pop()}function p(e){i=e,window.addEventListener?(window.addEventListener(`blur`,c,!1),document.addEventListener(`focus`,l,!0)):(window.attachEvent(`onBlur`,c),document.attachEvent(`onFocus`,l))}function m(){i=null,window.addEventListener?(window.removeEventListener(`blur`,c),document.removeEventListener(`focus`,l)):(window.detachEvent(`onBlur`,c),document.detachEvent(`onFocus`,l))}})),WI=s(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=r(HI());function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return e.activeElement.shadowRoot?i(e.activeElement.shadowRoot):e.activeElement}function a(e,t){var r=(0,n.default)(e);if(!r.length){t.preventDefault();return}var a=void 0,o=t.shiftKey,s=r[0],c=r[r.length-1],l=i();if(e===l){if(!o)return;a=c}if(c===l&&!o&&(a=s),s===l&&o&&(a=c),a){t.preventDefault(),a.focus();return}var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(u!=null&&u[1]!=`Chrome`&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null){var d=r.indexOf(l);if(d>-1&&(d+=o?-1:1),a=r[d],a===void 0){t.preventDefault(),a=o?c:s,a.focus();return}t.preventDefault(),a.focus()}}t.exports=e.default})),GI=s(((e,t)=>{t.exports=function(){}})),KI=s(((e,t)=>{(function(){var e=!!(typeof window<`u`&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<`u`,canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};typeof define==`function`&&typeof define.amd==`object`&&define.amd?define(function(){return n}):t!==void 0&&t.exports?t.exports=n:window.ExecutionEnvironment=n})()})),qI=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.canUseDOM=e.SafeNodeList=e.SafeHTMLCollection=void 0;var t=n(KI());function n(e){return e&&e.__esModule?e:{default:e}}var r=t.default,i=r.canUseDOM?window.HTMLElement:{};e.SafeHTMLCollection=r.canUseDOM?window.HTMLCollection:{},e.SafeNodeList=r.canUseDOM?window.NodeList:{},e.canUseDOM=r.canUseDOM,e.default=i})),JI=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resetState=a,e.log=o,e.assertNodeList=s,e.setElement=c,e.validateElement=l,e.hide=u,e.show=d,e.documentNotReadyOrSSRTesting=f;var t=r(GI()),n=qI();function r(e){return e&&e.__esModule?e:{default:e}}var i=null;function a(){i&&(i.removeAttribute?i.removeAttribute(`aria-hidden`):i.length==null?document.querySelectorAll(i).forEach(function(e){return e.removeAttribute(`aria-hidden`)}):i.forEach(function(e){return e.removeAttribute(`aria-hidden`)})),i=null}function o(){}function s(e,t){if(!e||!e.length)throw Error(`react-modal: No elements were found for selector `+t+`.`)}function c(e){var t=e;if(typeof t==`string`&&n.canUseDOM){var r=document.querySelectorAll(t);s(r,t),t=r}return i=t||i,i}function l(e){var n=e||i;return n?Array.isArray(n)||n instanceof HTMLCollection||n instanceof NodeList?n:[n]:((0,t.default)(!1,[`react-modal: App element is not defined.`,"Please use `Modal.setAppElement(el)` or set `appElement={el}`.",`This is needed so screen readers don't see main content`,`when modal is opened. It is not recommended, but you can opt-out`,"by setting `ariaHideApp={false}`."].join(` `)),[])}function u(e){var t=!0,n=!1,r=void 0;try{for(var i=l(e)[Symbol.iterator](),a;!(t=(a=i.next()).done);t=!0)a.value.setAttribute(`aria-hidden`,`true`)}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function d(e){var t=!0,n=!1,r=void 0;try{for(var i=l(e)[Symbol.iterator](),a;!(t=(a=i.next()).done);t=!0)a.value.removeAttribute(`aria-hidden`)}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}}function f(){i=null}})),YI=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resetState=i,e.log=a;var t={},n={};function r(e,t){e.classList.remove(t)}function i(){var e=document.getElementsByTagName(`html`)[0];for(var i in t)r(e,t[i]);var a=document.body;for(var o in n)r(a,n[o]);t={},n={}}function a(){}var o=function(e,t){return e[t]||(e[t]=0),e[t]+=1,t},s=function(e,t){return e[t]&&--e[t],t},c=function(e,t,n){n.forEach(function(n){o(t,n),e.add(n)})},l=function(e,t,n){n.forEach(function(n){s(t,n),t[n]===0&&e.remove(n)})};e.add=function(e,r){return c(e.classList,e.nodeName.toLowerCase()==`html`?t:n,r.split(` `))},e.remove=function(e,r){return l(e.classList,e.nodeName.toLowerCase()==`html`?t:n,r.split(` `))}})),XI=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.log=i,e.resetState=a;function t(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}var n=function e(){var n=this;t(this,e),this.register=function(e){n.openInstances.indexOf(e)===-1&&(n.openInstances.push(e),n.emit(`register`))},this.deregister=function(e){var t=n.openInstances.indexOf(e);t!==-1&&(n.openInstances.splice(t,1),n.emit(`deregister`))},this.subscribe=function(e){n.subscribers.push(e)},this.emit=function(e){n.subscribers.forEach(function(t){return t(e,n.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},r=new n;function i(){console.log(`portalOpenInstances ----------`),console.log(r.openInstances.length),r.openInstances.forEach(function(e){return console.log(e)}),console.log(`end portalOpenInstances ----------`)}function a(){r=new n}e.default=r})),ZI=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resetState=o,e.log=s;var t=n(XI());function n(e){return e&&e.__esModule?e:{default:e}}var r=void 0,i=void 0,a=[];function o(){for(var e=[r,i],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}r=i=null,a=[]}function s(){console.log(`bodyTrap ----------`),console.log(a.length);for(var e=[r,i],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log(`edn bodyTrap ----------`)}function c(){a.length!==0&&a[a.length-1].focusContent()}function l(e,t){!r&&!i&&(r=document.createElement(`div`),r.setAttribute(`data-react-modal-body-trap`,``),r.style.position=`absolute`,r.style.opacity=`0`,r.setAttribute(`tabindex`,`0`),r.addEventListener(`focus`,c),i=r.cloneNode(),i.addEventListener(`focus`,c)),a=t,a.length>0?(document.body.firstChild!==r&&document.body.insertBefore(r,document.body.firstChild),document.body.lastChild!==i&&document.body.appendChild(i)):(r.parentElement&&r.parentElement.removeChild(r),i.parentElement&&i.parentElement.removeChild(i))}t.default.subscribe(l)})),QI=s(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=p(),o=g(Tt()),s=h(UI()),c=g(WI()),l=h(JI()),u=h(YI()),d=qI(),f=g(d),m=g(XI());ZI();function h(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function v(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function y(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b={overlay:`ReactModal__Overlay`,content:`ReactModal__Content`},x=function(e){return e.code===`Tab`||e.keyCode===9},S=function(e){return e.code===`Escape`||e.keyCode===27},C=0,w=function(e){y(t,e);function t(e){_(this,t);var n=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,r=e.ariaHideApp,i=e.htmlOpenClassName,a=e.bodyOpenClassName,o=e.parentSelector,c=o&&o().ownerDocument||document;a&&u.remove(c.body,a),i&&u.remove(c.getElementsByTagName(`html`)[0],i),r&&C>0&&(--C,C===0&&l.show(t)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(s.returnFocus(n.props.preventScroll),s.teardownScopedFocus()):s.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(s.setupScopedFocus(n.node),s.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){x(e)&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&S(e)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){!n.props.shouldCloseOnOverlayClick&&e.target==n.overlay&&e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var i=(t===void 0?`undefined`:r(t))===`object`?t:{base:b[e],afterOpen:b[e]+`--after-open`,beforeClose:b[e]+`--before-close`},a=i.base;return n.state.afterOpen&&(a=a+` `+i.afterOpen),n.state.beforeClose&&(a=a+` `+i.beforeClose),typeof t==`string`&&t?a+` `+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce(function(n,r){return n[e+`-`+r]=t[r],n},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return i(t,[{key:`componentDidMount`,value:function(){this.props.isOpen&&this.open()}},{key:`componentDidUpdate`,value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:`componentWillUnmount`,value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:`beforeOpen`,value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,i=e.bodyOpenClassName,a=e.parentSelector,o=a&&a().ownerDocument||document;i&&u.add(o.body,i),r&&u.add(o.getElementsByTagName(`html`)[0],r),n&&(C+=1,l.hide(t)),m.default.register(this)}},{key:`render`,value:function(){var e=this.props,t=e.id,r=e.className,i=e.overlayClassName,a=e.defaultStyles,o=e.children,s=r?{}:a.content,c=i?{}:a.overlay;if(this.shouldBeClosed())return null;var l={ref:this.setOverlayRef,className:this.buildClassName(`overlay`,i),style:n({},c,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=n({id:t,ref:this.setContentRef,style:n({},s,this.props.style.content),className:this.buildClassName(`content`,r),tabIndex:`-1`,onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject(`aria`,n({modal:!0},this.props.aria)),this.attributesFromObject(`data`,this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(u,o);return this.props.overlayElement(l,d)}}]),t}(a.Component);w.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},w.propTypes={isOpen:o.default.bool.isRequired,defaultStyles:o.default.shape({content:o.default.object,overlay:o.default.object}),style:o.default.shape({content:o.default.object,overlay:o.default.object}),className:o.default.oneOfType([o.default.string,o.default.object]),overlayClassName:o.default.oneOfType([o.default.string,o.default.object]),parentSelector:o.default.func,bodyOpenClassName:o.default.string,htmlOpenClassName:o.default.string,ariaHideApp:o.default.bool,appElement:o.default.oneOfType([o.default.instanceOf(f.default),o.default.instanceOf(d.SafeHTMLCollection),o.default.instanceOf(d.SafeNodeList),o.default.arrayOf(o.default.instanceOf(f.default))]),onAfterOpen:o.default.func,onAfterClose:o.default.func,onRequestClose:o.default.func,closeTimeoutMS:o.default.number,shouldFocusAfterRender:o.default.bool,shouldCloseOnOverlayClick:o.default.bool,shouldReturnFocusAfterClose:o.default.bool,preventScroll:o.default.bool,role:o.default.string,contentLabel:o.default.string,aria:o.default.object,data:o.default.object,children:o.default.node,shouldCloseOnEsc:o.default.bool,overlayRef:o.default.func,contentRef:o.default.func,id:o.default.string,overlayElement:o.default.func,contentElement:o.default.func,testId:o.default.string},e.default=w,t.exports=e.default})),$I=c({polyfill:()=>rL});function eL(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function tL(e){function t(t){return this.constructor.getDerivedStateFromProps(e,t)??null}this.setState(t.bind(this))}function nL(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function rL(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error(`Can only polyfill class components`);if(typeof e.getDerivedStateFromProps!=`function`&&typeof t.getSnapshotBeforeUpdate!=`function`)return e;var n=null,r=null,i=null;if(typeof t.componentWillMount==`function`?n=`componentWillMount`:typeof t.UNSAFE_componentWillMount==`function`&&(n=`UNSAFE_componentWillMount`),typeof t.componentWillReceiveProps==`function`?r=`componentWillReceiveProps`:typeof t.UNSAFE_componentWillReceiveProps==`function`&&(r=`UNSAFE_componentWillReceiveProps`),typeof t.componentWillUpdate==`function`?i=`componentWillUpdate`:typeof t.UNSAFE_componentWillUpdate==`function`&&(i=`UNSAFE_componentWillUpdate`),n!==null||r!==null||i!==null){var a=e.displayName||e.name,o=typeof e.getDerivedStateFromProps==`function`?`getDerivedStateFromProps()`:`getSnapshotBeforeUpdate()`;throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+a+` uses `+o+` but also contains the following legacy lifecycles:`+(n===null?``:`
  `+n)+(r===null?``:`
  `+r)+(i===null?``:`
  `+i)+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps==`function`&&(t.componentWillMount=eL,t.componentWillReceiveProps=tL),typeof t.getSnapshotBeforeUpdate==`function`){if(typeof t.componentDidUpdate!=`function`)throw Error(`Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype`);t.componentWillUpdate=nL;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,r)}}return e}var iL=o((()=>{eL.__suppressDeprecationWarning=!0,tL.__suppressDeprecationWarning=!0,nL.__suppressDeprecationWarning=!0})),aL=s((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bodyOpenClassName=e.portalClassName=void 0;var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=p(),i=h(r),a=h(_()),o=h(Tt()),s=h(QI()),c=m(JI()),l=qI(),u=h(l),f=(iL(),d($I));function m(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function v(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e}function y(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=e.portalClassName=`ReactModalPortal`,x=e.bodyOpenClassName=`ReactModal__Body--open`,S=l.canUseDOM&&a.default.createPortal!==void 0,C=function(e){return document.createElement(e)},w=function(){return S?a.default.createPortal:a.default.unstable_renderSubtreeIntoContainer};function T(e){return e()}var E=function(e){y(r,e);function r(){var e,n,o,c;g(this,r);var l=[...arguments];return c=(n=(o=v(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),o),o.removePortal=function(){!S&&a.default.unmountComponentAtNode(o.node);var e=T(o.props.parentSelector);e&&e.contains(o.node)?e.removeChild(o.node):console.warn(`React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.`)},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var n=w()(o,i.default.createElement(s.default,t({defaultStyles:r.defaultStyles},e)),o.node);o.portalRef(n)},n),v(o,c)}return n(r,[{key:`componentDidMount`,value:function(){l.canUseDOM&&(S||(this.node=C(`div`)),this.node.className=this.props.portalClassName,T(this.props.parentSelector).appendChild(this.node),!S&&this.renderPortal(this.props))}},{key:`getSnapshotBeforeUpdate`,value:function(e){return{prevParent:T(e.parentSelector),nextParent:T(this.props.parentSelector)}}},{key:`componentDidUpdate`,value:function(e,t,n){if(l.canUseDOM){var r=this.props,i=r.isOpen,a=r.portalClassName;e.portalClassName!==a&&(this.node.className=a);var o=n.prevParent,s=n.nextParent;s!==o&&(o.removeChild(this.node),s.appendChild(this.node)),!(!e.isOpen&&!i)&&!S&&this.renderPortal(this.props)}}},{key:`componentWillUnmount`,value:function(){if(!(!l.canUseDOM||!this.node||!this.portal)){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:`render`,value:function(){return!l.canUseDOM||!S?null:(!this.node&&S&&(this.node=C(`div`)),w()(i.default.createElement(s.default,t({ref:this.portalRef,defaultStyles:r.defaultStyles},this.props)),this.node))}}],[{key:`setAppElement`,value:function(e){c.setElement(e)}}]),r}(r.Component);E.propTypes={isOpen:o.default.bool.isRequired,style:o.default.shape({content:o.default.object,overlay:o.default.object}),portalClassName:o.default.string,bodyOpenClassName:o.default.string,htmlOpenClassName:o.default.string,className:o.default.oneOfType([o.default.string,o.default.shape({base:o.default.string.isRequired,afterOpen:o.default.string.isRequired,beforeClose:o.default.string.isRequired})]),overlayClassName:o.default.oneOfType([o.default.string,o.default.shape({base:o.default.string.isRequired,afterOpen:o.default.string.isRequired,beforeClose:o.default.string.isRequired})]),appElement:o.default.oneOfType([o.default.instanceOf(u.default),o.default.instanceOf(l.SafeHTMLCollection),o.default.instanceOf(l.SafeNodeList),o.default.arrayOf(o.default.instanceOf(u.default))]),onAfterOpen:o.default.func,onRequestClose:o.default.func,closeTimeoutMS:o.default.number,ariaHideApp:o.default.bool,shouldFocusAfterRender:o.default.bool,shouldCloseOnOverlayClick:o.default.bool,shouldReturnFocusAfterClose:o.default.bool,preventScroll:o.default.bool,parentSelector:o.default.func,aria:o.default.object,data:o.default.object,role:o.default.string,contentLabel:o.default.string,shouldCloseOnEsc:o.default.bool,overlayRef:o.default.func,contentRef:o.default.func,id:o.default.string,overlayElement:o.default.func,contentElement:o.default.func},E.defaultProps={isOpen:!1,portalClassName:b,bodyOpenClassName:x,role:`dialog`,ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return i.default.createElement(`div`,e,t)},contentElement:function(e,t){return i.default.createElement(`div`,e,t)}},E.defaultStyles={overlay:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(255, 255, 255, 0.75)`},content:{position:`absolute`,top:`40px`,left:`40px`,right:`40px`,bottom:`40px`,border:`1px solid #ccc`,background:`#fff`,overflow:`auto`,WebkitOverflowScrolling:`touch`,borderRadius:`4px`,outline:`none`,padding:`20px`}},(0,f.polyfill)(E),e.default=E})),oL=s(((e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(aL());function r(e){return e&&e.__esModule?e:{default:e}}e.default=n.default,t.exports=e.default})),sL=s(((e,t)=>{var n=Xs();t.exports=function(){return n.Date.now()}})),cL=s(((e,t)=>{var n=Js(),r=sL(),i=rc(),a=`Expected a function`,o=Math.max,s=Math.min;function c(e,t,c){var l,u,d,f,p,m,h=0,g=!1,_=!1,v=!0;if(typeof e!=`function`)throw TypeError(a);t=i(t)||0,n(c)&&(g=!!c.leading,_=`maxWait`in c,d=_?o(i(c.maxWait)||0,t):d,v=`trailing`in c?!!c.trailing:v);function y(t){var n=l,r=u;return l=u=void 0,h=t,f=e.apply(r,n),f}function b(e){return h=e,p=setTimeout(C,t),g?y(e):f}function x(e){var n=e-m,r=e-h,i=t-n;return _?s(i,d-r):i}function S(e){var n=e-m,r=e-h;return m===void 0||n>=t||n<0||_&&r>=d}function C(){var e=r();if(S(e))return w(e);p=setTimeout(C,x(e))}function w(e){return p=void 0,v&&l?y(e):(l=u=void 0,f)}function T(){p!==void 0&&clearTimeout(p),h=0,l=m=u=p=void 0}function E(){return p===void 0?f:w(r())}function D(){var e=r(),n=S(e);if(l=arguments,u=this,m=e,n){if(p===void 0)return b(m);if(_)return clearTimeout(p),p=setTimeout(C,t),y(m)}return p===void 0&&(p=setTimeout(C,t)),f}return D.cancel=T,D.flush=E,D}t.exports=c})),lL=u(oL(),1),uL=u(cL(),1),dL=e=>e.setM_hasScrolledBottom,fL=e=>e.m_hasScrolledBottom,pL=e=>{let t=e.trigger,n=e.setTrigger,r=J(dL),i=J(fL),a=(0,S.useRef)(null),o=e.head,s=e.text,c=(0,S.useCallback)((0,uL.default)(e=>{let t=e.target,n=Math.ceil(t.scrollTop+t.clientHeight);Math.ceil(t.scrollHeight)-n<=20?i||r(!0):i&&r(!1)},50),[i,r,20]),l=()=>{n(!1),r(!1)};return(0,W.jsx)(lL.default,{id:`presortHelpModal`,isOpen:t,onClose:l,style:{content:{position:`absolute`,top:`50%`,left:`50%`,right:`auto`,bottom:`auto`,marginRight:`-50%`,transform:`translate(-50%, -50%)`,padding:`0`,border:`none`,background:`transparent`,width:`90%`,maxWidth:`500px`,height:`auto`,maxHeight:`85vh`,display:`flex`,flexDirection:`column`,overflow:`visible`},overlay:{backgroundColor:`rgba(0, 0, 0, 0.75)`,zIndex:1e3}},ariaHideApp:!1,bodyOpenClassName:`modal-open`,children:(0,W.jsxs)(mL,{children:[(0,W.jsx)(xL,{children:(0,W.jsx)(bL,{onClick:l,children:`X`})}),(0,W.jsxs)(hL,{children:[o,(0,W.jsx)(`hr`,{})]}),(0,W.jsxs)(gL,{children:[(0,W.jsxs)(_L,{ref:a,onScroll:c,children:[s,(0,W.jsx)(vL,{})]}),(0,W.jsx)(yL,{$isAtBottom:i})]})]})})},mL=U.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;

  /* This ensures the container shrinks to fit short text, 
     but stops growing at the max-height set by ReactModal */
  height: 100%;
  max-height: 85vh;

  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
`,hL=U.div`
  flex-shrink: 0;
  width: 100%;
  padding: 5px 20px 15px 20px;
  color: black;
  font-weight: 600;
  font-size: 20px;

  hr {
    margin-top: 15px;
    border: 0;
    border-top: 1px solid #eee;
  }
`,gL=U.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0; /* CRITICAL: Allows flex child to scroll properly */
  flex-grow: 1; /* Fills the rest of the modal height */
`,_L=U.div`
  /* We removed position: absolute. 
     Now it acts like a normal block that overflows when it gets too big */
  overflow-y: auto;
  padding: 0 20px;

  /* Mobile momentum scrolling */
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overscroll-behavior-y: contain;
  -webkit-overflow-scrolling: touch;

  color: ${e=>e.theme.mobileText||`#444`};
  line-height: 1.6;

  /* Hide scrollbars */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`,vL=U.div`
  height: 60px; /* Ensures the last line of text isn't hidden behind the fade */
  width: 100%;
  flex-shrink: 0;
`,yL=U.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  opacity: ${e=>+!e.$isAtBottom};
  z-index: 2;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,bL=U.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-bottom-left-radius: 12px;
  width: 50px;
  height: 44px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #cc0000;
  }
`,xL=U.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,SL=e=>e.langObj,CL=e=>e.mapObj,wL=e=>e.triggerMobilePresortRedoModal,TL=e=>e.setTriggerMobilePresortRedoModal,EL=e=>e.mobilePresortFontSize,DL=e=>{let t=q(SL),n=q(CL),r=J(wL),i=J(TL),a=G(K(t.mobilePresortRedoModalHead))||``,o=J(EL),s=n.useColLabelEmojiPresort,[c,l]=(0,S.useState)({backgroundColor:`#e5e5e5`,value:0}),u=()=>{l({backgroundColor:`#BCF0DA`,value:2})},d=()=>{l({backgroundColor:`#FBD5D5`,value:-2})},f=()=>{l({backgroundColor:`#F3F4F6`,value:0})},p=G(K(t.mobilePresortRedoModalConfirmButton))||``,m=G(K(t.mobileModalButtonCancel))||``,h=G(K(t.mobilePresortAssignLeft))||``,g=G(K(t.mobilePresortAssignRight))||``,_=()=>{l({backgroundColor:`#e5e5e5`,value:0}),i(!1)},v=s[0]===`true`?(0,W.jsxs)(NL,{children:[(0,W.jsx)(MI,{id:`-2`,value:-2,color:`#FBD5D5`,onClick:d,child:(0,W.jsxs)(LL,{children:[` `,(0,W.jsx)(Cl,{}),` `]})}),(0,W.jsx)(MI,{id:`0`,value:0,color:`#F3F4F6`,onClick:f,child:(0,W.jsxs)(LL,{children:[` `,(0,W.jsx)(Mb,{}),` `]})}),(0,W.jsx)(MI,{id:`2`,value:2,color:`#BCF0DA`,onClick:u,child:(0,W.jsxs)(LL,{children:[` `,(0,W.jsx)(uu,{}),` `]})})]}):(0,W.jsxs)(NL,{children:[(0,W.jsx)(MI,{id:`-2`,value:-2,color:`#FBD5D5`,child:(0,W.jsx)(`div`,{children:`-`}),onClick:d}),(0,W.jsx)(MI,{id:`0`,value:0,child:(0,W.jsx)(`div`,{children:`?`}),color:`#F3F4F6`,onClick:f}),(0,W.jsx)(MI,{id:`2`,value:2,child:(0,W.jsx)(`div`,{children:`+`}),color:`#BCF0DA`,onClick:u})]});return(0,W.jsxs)(lL.default,{isOpen:r,onClose:_,center:!0,style:{content:{display:`flex`,justifySelf:`center`,flexDirection:`column`,alignItems:`center`,backgroundColor:`#ffffff`,borderRadius:`10px`,padding:`0px`,paddingBottom:`10px`,width:`90vw`,maxHeight:`60vh`,overflowY:`scroll`,WebkitOverflowScrolling:`touch`}},overlayClassName:`Overlay`,children:[(0,W.jsx)(IL,{children:(0,W.jsx)(FL,{onClick:_,children:`X`})}),(0,W.jsx)(OL,{children:a}),(0,W.jsx)(`hr`,{}),(0,W.jsx)(kL,{children:``}),(0,W.jsx)(AI,{backgroundColor:c.backgroundColor,statement:e.statement.current.statement,fontSize:+o}),(0,W.jsxs)(ML,{children:[(0,W.jsx)(PL,{children:h}),(0,W.jsx)(PL,{children:g})]}),v,(0,W.jsxs)(AL,{children:[(0,W.jsx)(jL,{onClick:_,children:m}),(0,W.jsx)(jL,{onClick:()=>{e.clickFunction(c.value),_()},children:p})]})]})};DL.propTypes={clickFunction:Et.default.func.isRequired,statement:Et.default.object.isRequired};var OL=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,kL=U.div`
  margin-top: 15px;
`,AL=U.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  margin-top: 30px;
  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    background-color: white;
    color: ${e=>e.theme.mobileText};
    font-weight: bold;
    font-size: 1.2rem;
  }
`,jL=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  background-color: #dedede;
  color: ${e=>e.theme.mobileText};
  font-weight: bold;
  font-size: 1.2rem;
`,ML=U.div`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  width: 85vw;
  min-height: 6vh;
  margin-top: 5px;
  align-items: flex-end;
  font-size: 2.5vh;
`,NL=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 85vw;
  height: 30px;
  justify-self: center;
`,PL=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  width: 28vw;
`,FL=U.button`
  background-color: red;
  float: right;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 40px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`,IL=U.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0px;
`,LL=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,RL=e=>(0,W.jsxs)(`svg`,{width:150,height:155,viewBox:`0 0 150 155`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsx)(`circle`,{cx:75,cy:76,r:70,stroke:`white`,strokeWidth:10}),(0,W.jsxs)(`mask`,{id:`path-2-outside-1_320_30`,maskUnits:`userSpaceOnUse`,x:48,y:28,width:56,height:98,fill:`black`,children:[(0,W.jsx)(`rect`,{fill:`white`,x:48,y:28,width:56,height:98}),(0,W.jsx)(`path`,{d:`M67.8182 97.8182V97.2727C67.8788 91.4848 68.4848 86.8788 69.6364 83.4545C70.7879 80.0303 72.4242 77.2576 74.5455 75.1364C76.6667 73.0152 79.2121 71.0606 82.1818 69.2727C83.9697 68.1818 85.5758 66.8939 87 65.4091C88.4242 63.8939 89.5455 62.1515 90.3636 60.1818C91.2121 58.2121 91.6364 56.0303 91.6364 53.6364C91.6364 50.6667 90.9394 48.0909 89.5455 45.9091C88.1515 43.7273 86.2879 42.0455 83.9545 40.8636C81.6212 39.6818 79.0303 39.0909 76.1818 39.0909C73.697 39.0909 71.303 39.6061 69 40.6364C66.697 41.6667 64.7727 43.2879 63.2273 45.5C61.6818 47.7121 60.7879 50.6061 60.5455 54.1818H49.0909C49.3333 49.0303 50.6667 44.6212 53.0909 40.9545C55.5455 37.2879 58.7727 34.4848 62.7727 32.5454C66.803 30.6061 71.2727 29.6364 76.1818 29.6364C81.5152 29.6364 86.1515 30.697 90.0909 32.8182C94.0606 34.9394 97.1212 37.8485 99.2727 41.5454C101.455 45.2424 102.545 49.4545 102.545 54.1818C102.545 57.5151 102.03 60.5303 101 63.2273C100 65.9242 98.5455 68.3333 96.6364 70.4545C94.7576 72.5758 92.4849 74.4545 89.8182 76.0909C87.1515 77.7576 85.0152 79.5152 83.4091 81.3636C81.803 83.1818 80.6364 85.3485 79.9091 87.8636C79.1818 90.3788 78.7879 93.5152 78.7273 97.2727V97.8182H67.8182ZM73.6364 124.727C71.3939 124.727 69.4697 123.924 67.8636 122.318C66.2576 120.712 65.4545 118.788 65.4545 116.545C65.4545 114.303 66.2576 112.379 67.8636 110.773C69.4697 109.167 71.3939 108.364 73.6364 108.364C75.8788 108.364 77.803 109.167 79.4091 110.773C81.0152 112.379 81.8182 114.303 81.8182 116.545C81.8182 118.03 81.4394 119.394 80.6818 120.636C79.9545 121.879 78.9697 122.879 77.7273 123.636C76.5152 124.364 75.1515 124.727 73.6364 124.727Z`})]}),(0,W.jsx)(`path`,{d:`M67.8182 97.8182V97.2727C67.8788 91.4848 68.4848 86.8788 69.6364 83.4545C70.7879 80.0303 72.4242 77.2576 74.5455 75.1364C76.6667 73.0152 79.2121 71.0606 82.1818 69.2727C83.9697 68.1818 85.5758 66.8939 87 65.4091C88.4242 63.8939 89.5455 62.1515 90.3636 60.1818C91.2121 58.2121 91.6364 56.0303 91.6364 53.6364C91.6364 50.6667 90.9394 48.0909 89.5455 45.9091C88.1515 43.7273 86.2879 42.0455 83.9545 40.8636C81.6212 39.6818 79.0303 39.0909 76.1818 39.0909C73.697 39.0909 71.303 39.6061 69 40.6364C66.697 41.6667 64.7727 43.2879 63.2273 45.5C61.6818 47.7121 60.7879 50.6061 60.5455 54.1818H49.0909C49.3333 49.0303 50.6667 44.6212 53.0909 40.9545C55.5455 37.2879 58.7727 34.4848 62.7727 32.5454C66.803 30.6061 71.2727 29.6364 76.1818 29.6364C81.5152 29.6364 86.1515 30.697 90.0909 32.8182C94.0606 34.9394 97.1212 37.8485 99.2727 41.5454C101.455 45.2424 102.545 49.4545 102.545 54.1818C102.545 57.5151 102.03 60.5303 101 63.2273C100 65.9242 98.5455 68.3333 96.6364 70.4545C94.7576 72.5758 92.4849 74.4545 89.8182 76.0909C87.1515 77.7576 85.0152 79.5152 83.4091 81.3636C81.803 83.1818 80.6364 85.3485 79.9091 87.8636C79.1818 90.3788 78.7879 93.5152 78.7273 97.2727V97.8182H67.8182ZM73.6364 124.727C71.3939 124.727 69.4697 123.924 67.8636 122.318C66.2576 120.712 65.4545 118.788 65.4545 116.545C65.4545 114.303 66.2576 112.379 67.8636 110.773C69.4697 109.167 71.3939 108.364 73.6364 108.364C75.8788 108.364 77.803 109.167 79.4091 110.773C81.0152 112.379 81.8182 114.303 81.8182 116.545C81.8182 118.03 81.4394 119.394 80.6818 120.636C79.9545 121.879 78.9697 122.879 77.7273 123.636C76.5152 124.364 75.1515 124.727 73.6364 124.727Z`,fill:`white`}),(0,W.jsx)(`path`,{d:`M67.8182 97.8182H66.8182V98.8182H67.8182V97.8182ZM67.8182 97.2727L66.8182 97.2623V97.2727H67.8182ZM69.6364 83.4545L68.6885 83.1358L68.6885 83.1358L69.6364 83.4545ZM74.5455 75.1364L75.2526 75.8435L75.2526 75.8435L74.5455 75.1364ZM82.1818 69.2727L82.6976 70.1295L82.7027 70.1264L82.1818 69.2727ZM87 65.4091L87.7217 66.1013L87.7286 66.094L87 65.4091ZM90.3636 60.1818L89.4451 59.7862L89.4401 59.7982L90.3636 60.1818ZM69 40.6364L68.5916 39.7235L68.5916 39.7235L69 40.6364ZM63.2273 45.5L64.047 46.0727L64.047 46.0727L63.2273 45.5ZM60.5455 54.1818V55.1818H61.48L61.5432 54.2495L60.5455 54.1818ZM49.0909 54.1818L48.092 54.1348L48.0427 55.1818H49.0909V54.1818ZM53.0909 40.9545L52.2599 40.3983L52.2567 40.403L53.0909 40.9545ZM62.7727 32.5454L62.3391 31.6443L62.3365 31.6456L62.7727 32.5454ZM90.0909 32.8182L89.6168 33.6987L89.6196 33.7002L90.0909 32.8182ZM99.2727 41.5454L98.4084 42.0484L98.4115 42.0537L99.2727 41.5454ZM101 63.2273L100.066 62.8704L100.062 62.8796L101 63.2273ZM96.6364 70.4545L95.893 69.7856L95.8878 69.7915L96.6364 70.4545ZM89.8182 76.0909L89.2952 75.2386L89.2882 75.2429L89.8182 76.0909ZM83.4091 81.3636L84.1586 82.0257L84.164 82.0195L83.4091 81.3636ZM78.7273 97.2727L77.7274 97.2566L77.7273 97.2647V97.2727H78.7273ZM78.7273 97.8182V98.8182H79.7273V97.8182H78.7273ZM67.8636 122.318L68.5707 121.611L68.5707 121.611L67.8636 122.318ZM67.8636 110.773L68.5707 111.48L68.5707 111.48L67.8636 110.773ZM80.6818 120.636L79.828 120.116L79.8233 120.123L79.8188 120.131L80.6818 120.636ZM77.7273 123.636L78.2418 124.494L78.2479 124.49L77.7273 123.636ZM68.8182 97.8182V97.2727H66.8182V97.8182H68.8182ZM68.8181 97.2832C68.8782 91.5451 69.48 87.0567 70.5842 83.7733L68.6885 83.1358C67.4897 86.7008 66.8794 91.4246 66.8182 97.2623L68.8181 97.2832ZM70.5842 83.7733C71.6965 80.4658 73.2606 77.8355 75.2526 75.8435L73.8383 74.4293C71.5879 76.6797 69.8793 79.5948 68.6885 83.1358L70.5842 83.7733ZM75.2526 75.8435C77.3082 73.7878 79.787 71.8817 82.6976 70.1294L81.666 68.416C78.6372 70.2395 76.0251 72.2425 73.8383 74.4293L75.2526 75.8435ZM82.7027 70.1264C84.5628 68.9913 86.2367 67.6495 87.7217 66.1013L86.2783 64.7169C84.9148 66.1384 83.3765 67.3723 81.661 68.4191L82.7027 70.1264ZM87.7286 66.094C89.2376 64.4887 90.4239 62.6436 91.2871 60.5654L89.4401 59.7982C88.667 61.6595 87.6109 63.2992 86.2714 64.7242L87.7286 66.094ZM91.282 60.5774C92.1903 58.469 92.6364 56.1505 92.6364 53.6364H90.6364C90.6364 55.9101 90.234 57.9552 89.4452 59.7862L91.282 60.5774ZM92.6364 53.6364C92.6364 50.5046 91.8993 47.7359 90.3882 45.3707L88.7028 46.4475C89.9795 48.4459 90.6364 50.8287 90.6364 53.6364H92.6364ZM90.3882 45.3707C88.8969 43.0365 86.8976 41.2333 84.4064 39.9715L83.5027 41.7557C85.6782 42.8576 87.4062 44.418 88.7028 46.4475L90.3882 45.3707ZM84.4064 39.9715C81.9208 38.7126 79.173 38.0909 76.1818 38.0909V40.0909C78.8876 40.0909 81.3216 40.651 83.5027 41.7557L84.4064 39.9715ZM76.1818 38.0909C73.554 38.0909 71.0211 38.6367 68.5916 39.7235L69.4084 41.5492C71.585 40.5754 73.8399 40.0909 76.1818 40.0909V38.0909ZM68.5916 39.7235C66.1116 40.833 64.0493 42.5774 62.4075 44.9273L64.047 46.0727C65.4962 43.9984 67.2823 42.5003 69.4084 41.5492L68.5916 39.7235ZM62.4075 44.9273C60.7291 47.3297 59.7985 50.4149 59.5477 54.1142L61.5432 54.2495C61.7772 50.7973 62.6345 48.0945 64.047 46.0727L62.4075 44.9273ZM60.5455 53.1818H49.0909V55.1818H60.5455V53.1818ZM50.0898 54.2288C50.3252 49.2257 51.6162 44.9982 53.9251 41.5061L52.2567 40.403C49.7171 44.2443 48.3414 48.8349 48.092 54.1348L50.0898 54.2288ZM53.9219 41.5108C56.2769 37.9928 59.3675 35.3078 63.209 33.4453L62.3365 31.6456C58.178 33.6619 54.814 36.5829 52.2599 40.3983L53.9219 41.5108ZM63.2063 33.4465C67.0886 31.5784 71.408 30.6364 76.1818 30.6364V28.6364C71.1374 28.6364 66.5175 29.6337 62.3391 31.6443L63.2063 33.4465ZM76.1818 30.6364C81.3814 30.6364 85.8487 31.6697 89.6168 33.6986L90.565 31.9377C86.4543 29.7243 81.649 28.6364 76.1818 28.6364V30.6364ZM89.6196 33.7002C93.4346 35.7387 96.3552 38.5204 98.4084 42.0484L100.137 41.0425C97.8872 37.1766 94.6866 34.1401 90.5622 31.9362L89.6196 33.7002ZM98.4115 42.0537C100.493 45.5814 101.545 49.6147 101.545 54.1818H103.545C103.545 49.2944 102.416 44.9034 100.134 41.0372L98.4115 42.0537ZM101.545 54.1818C101.545 57.4118 101.046 60.3035 100.066 62.8704L101.934 63.5841C103.014 60.7571 103.545 57.6185 103.545 54.1818H101.545ZM100.062 62.8796C99.1059 65.4591 97.717 67.759 95.8931 69.7856L97.3797 71.1235C99.3739 68.9077 100.894 66.3893 101.938 63.5749L100.062 62.8796ZM95.8878 69.7915C94.0808 71.8316 91.8864 73.6485 89.2952 75.2386L90.3412 76.9432C93.0833 75.2606 95.4343 73.3199 97.385 71.1176L95.8878 69.7915ZM89.2882 75.2429C86.56 76.948 84.3407 78.7667 82.6542 80.7078L84.164 82.0195C85.6896 80.2636 87.743 78.5671 90.3482 76.9389L89.2882 75.2429ZM82.6596 80.7016C80.948 82.6393 79.7135 84.94 78.9484 87.5859L80.8697 88.1414C81.5592 85.7569 82.6581 83.7244 84.1586 82.0257L82.6596 80.7016ZM78.9484 87.5859C78.1885 90.2142 77.7889 93.4454 77.7274 97.2566L79.7271 97.2889C79.7869 93.5849 80.1752 90.5434 80.8697 88.1414L78.9484 87.5859ZM77.7273 97.2727V97.8182H79.7273V97.2727H77.7273ZM78.7273 96.8182H67.8182V98.8182H78.7273V96.8182ZM73.6364 123.727C71.663 123.727 69.992 123.032 68.5707 121.611L67.1565 123.025C68.9474 124.816 71.1249 125.727 73.6364 125.727V123.727ZM68.5707 121.611C67.1495 120.19 66.4545 118.519 66.4545 116.545H64.4545C64.4545 119.057 65.3656 121.234 67.1565 123.025L68.5707 121.611ZM66.4545 116.545C66.4545 114.572 67.1495 112.901 68.5707 111.48L67.1565 110.066C65.3656 111.857 64.4545 114.034 64.4545 116.545H66.4545ZM68.5707 111.48C69.992 110.059 71.663 109.364 73.6364 109.364V107.364C71.1249 107.364 68.9474 108.275 67.1565 110.066L68.5707 111.48ZM73.6364 109.364C75.6098 109.364 77.2807 110.059 78.702 111.48L80.1162 110.066C78.3253 108.275 76.1478 107.364 73.6364 107.364V109.364ZM78.702 111.48C80.1232 112.901 80.8182 114.572 80.8182 116.545H82.8182C82.8182 114.034 81.9071 111.857 80.1162 110.066L78.702 111.48ZM80.8182 116.545C80.8182 117.851 80.4879 119.033 79.828 120.116L81.5356 121.157C82.3908 119.754 82.8182 118.21 82.8182 116.545H80.8182ZM79.8188 120.131C79.176 121.229 78.3095 122.11 77.2067 122.783L78.2479 124.49C79.6299 123.647 80.7331 122.528 81.5448 121.142L79.8188 120.131ZM77.2128 122.779C76.1673 123.406 74.9838 123.727 73.6364 123.727V125.727C75.3192 125.727 76.863 125.321 78.2418 124.494L77.2128 122.779Z`,fill:`white`,mask:`url(#path-2-outside-1_320_30)`})]}),zL=e=>e.langObj,BL=e=>e.configObj,VL=e=>e.mapObj,HL=e=>e.statementsObj,UL=e=>e.isLoggedIn,WL=e=>e.setCurrentPage,GL=e=>e.setProgressScore,KL=e=>e.resetColumnStatements,qL=e=>e.setTriggerMobilePresortFinishedModal,JL=e=>e.setPresortFinished,YL=e=>e.mobilePresortFontSize,XL=e=>e.setTriggerMobilePresortRedoModal,ZL=e=>e.setTriggerMobilePresortHelpModal,QL=e=>e.triggerMobilePresortHelpModal,$L=e=>e.triggerMobilePresortFinishedModal,eR=e=>e.setTriggerMobilePresortFinishedModal,tR=e=>e.triggerMobilePresortPreventNavModal,nR=e=>e.setTriggerMobilePresortPreventNavModal,rR=()=>{let e=q(zL),t=q(BL),n=q(VL),r=q(HL),i=q(UL),a=J(WL),o=J(GL),s=q(KL),c=J(JL),l=J(YL),u=J(XL),d=J(qL),f=J(QL),p=J(ZL),m=J($L),h=J(eR),g=n.useColLabelEmojiPresort,_=[(0,W.jsx)(wl,{},`emojiN5`),(0,W.jsx)(jb,{},`emojiN4`),(0,W.jsx)(Cl,{},`emojiN3`),(0,W.jsx)(Sl,{},`emojiN2`),(0,W.jsx)(Wl,{},`emojiN1`),(0,W.jsx)(Mb,{},`emoji0`),(0,W.jsx)(Au,{},`emoji1`),(0,W.jsx)(lu,{},`emoji2`),(0,W.jsx)(uu,{},`emoji3`),(0,W.jsx)(Nb,{},`emoji4`),(0,W.jsx)(du,{},`emoji5`)],v=G(K(e.mobilePresortConditionsOfInstruction))||``,y=G(K(e.mobilePresortCompletedLabel))||``,b=G(K(e.mobilePresortAssignLeft))||``,x=G(K(e.mobilePresortAssignRight))||``,C=G(K(e.mobilePresortProcessCompleteMessage))||``,w=G(K(e.screenOrientationText))||``,T=G(K(e.expandViewMessage))||``,E=G(K(e.mobilePresortHelpModalHead))||``,D=G(K(e.mobilePresortHelpModalText))||``,O=J(tR),k=J(nR),A=G(K(e.mobilePresortPreventNavModalHead))||``,j=G(K(e.mobilePresortPreventNavModalText))||``,M=G(K(e.mobilePresortFinishedModalHead))||``,N=G(K(e.mobilePresortFinishedModalText))||``,[P,F]=kb(`presortArray2`,[...JSON.parse(localStorage.getItem(`presortArray`)??`[]`)||[]]),[ee,I]=kb(`m_PresortStatementCount`,0),[L,R]=kb(`m_PresortResults`,JSON.parse(localStorage.getItem(`m_PresortResults`)??`[]`)||[]),z=fc(),B=(0,S.useRef)({id:``,statement:``}),V=(0,S.useRef)(null);(0,S.useEffect)(()=>(V.current=Date.now(),(async()=>{await a(`presort`),localStorage.setItem(`currentPage`,`presort`),await o(20)})(),()=>{ar(V.current,`presortPage`,`presortPage`)}),[a,o]);let H=r.columnStatements;t.setupTarget===`local`&&(H=JSON.parse(JSON.stringify(s)));let te=t.initialScreen,ne=()=>{p(!0)},re=e=>{u(!0),B.current.id=e.target.dataset.id,B.current.statement=e.target.dataset.statement},ie=()=>{ce(-2),navigator.vibrate&&navigator.vibrate(100)},ae=()=>{ce(0),navigator.vibrate&&navigator.vibrate(100)},oe=()=>{ce(2),navigator.vibrate&&navigator.vibrate(100)},se=e=>{u(!1);let t=L.map(t=>t.id===B.current.id?{...t,psValue:e,color:VI(e),pinkChecked:e<0,yellowChecked:e===0,greenChecked:e>0}:t);t.sort((e,t)=>{let n=+e.id.slice(1),r=+t.id.slice(1);return e.psValue===t.psValue?n-r:t.psValue-e.psValue}),R(t);let n=t.filter(e=>+e.psValue>0),r=t.filter(e=>+e.psValue<0);localStorage.setItem(`selectedPosItems`,JSON.stringify(n)),localStorage.setItem(`selectedNegItems`,JSON.stringify(r));let i=JSON.parse(localStorage.getItem(`sortRightArrays`)),a=JSON.parse(localStorage.getItem(`sortLeftArrays`)),o=n.length,s=r.length;Ab(o,s,i,a)},ce=(0,S.useCallback)(e=>{try{if(P.length>0){let t=[...P],n={...t.shift()},r=ee+1;F(t),I(r),e>0?(n.pinkChecked=!1,n.yellowChecked=!1,n.greenChecked=!0):e<0?(n.pinkChecked=!0,n.yellowChecked=!1,n.greenChecked=!1):(n.pinkChecked=!1,n.yellowChecked=!0,n.greenChecked=!1),n.psValue=e,n.color=VI(e);let i=[...L,{...n}];i.sort((e,t)=>{let n=+e.id.slice(1),r=+t.id.slice(1);return e.psValue===t.psValue?n-r:t.psValue-e.psValue}),R(i);let a=i.filter(e=>+e.psValue>0),o=i.filter(e=>+e.psValue<0);if(localStorage.setItem(`selectedPosItems`,JSON.stringify(a)),localStorage.setItem(`selectedNegItems`,JSON.stringify(o)),t.length===0){let e=JSON.parse(localStorage.getItem(`sortRightArrays`)),t=JSON.parse(localStorage.getItem(`sortLeftArrays`)),n=JSON.parse(localStorage.getItem(`newCols`)),r=a.length,s=o.length,c=Ab(r,s,e,t);localStorage.setItem(`thinDisplayControllerArray`,JSON.stringify(c)),n.statementList=i,localStorage.setItem(`newCols`,JSON.stringify(n)),d(!0),localStorage.setItem(`m_PresortFinished`,`true`)}}}catch(e){console.error(e)}},[P,ee,L,F,I,R,d]);(0,S.useEffect)(()=>{let e=e=>{if(e.key===`1`||e.key===1)ce(-2);else if(e.key===`2`||e.key===2)ce(0);else if(e.key===`3`||e.key===3)ce(2);else return};return window.addEventListener(`keyup`,e),()=>window.removeEventListener(`keyup`,e)},[ce]);let le=(0,S.useRef)(!1);if((0,S.useEffect)(()=>{if(P.length===0&&!le.current){le.current=!0;let e=setTimeout(()=>c(!0),100);return()=>clearTimeout(e)}},[P.length,c]),te!==`anonymous`&&i===!1)return(0,W.jsx)(Ox,{});if(z===`landscape-primary`)return(0,W.jsx)(cR,{children:(0,W.jsx)(`h1`,{children:w})});let ue=H.statementList.length,de=JSON.parse(localStorage.getItem(`m_PresortDisplayStatements`)??`{}`)||{},fe=g[0]===`true`?(0,W.jsxs)(oR,{children:[(0,W.jsx)(MI,{id:`-2`,value:-2,color:`#FBD5D5`,onClick:ie,"data-testid":`value-button-neg1`,child:(0,W.jsx)(gR,{children:(0,W.jsx)(gR,{children:_[+n.presortEmojiNegativeIndex]})})}),(0,W.jsx)(MI,{id:`0`,value:0,color:`#F3F4F6`,onClick:ae,"data-testid":`value-button-neu1`,child:(0,W.jsx)(gR,{children:(0,W.jsx)(gR,{children:_[+n.presortEmojiNeutralIndex]})})}),(0,W.jsx)(MI,{id:`2`,value:2,color:`#BCF0DA`,onClick:oe,"data-testid":`value-button-pos1`,child:(0,W.jsx)(gR,{children:(0,W.jsx)(gR,{children:_[+n.presortEmojiPositiveIndex]})})})]}):(0,W.jsxs)(oR,{children:[(0,W.jsx)(MI,{id:`-2`,value:-2,color:`#FBD5D5`,child:(0,W.jsx)(`div`,{children:`-`}),onClick:ie,"data-testid":`value-button-neg2`}),(0,W.jsx)(MI,{id:`0`,value:0,child:(0,W.jsx)(`div`,{children:`?`}),color:`#F3F4F6`,onClick:ae,"data-testid":`value-button-neu2`}),(0,W.jsx)(MI,{id:`2`,value:2,child:(0,W.jsx)(`div`,{children:`+`}),color:`#BCF0DA`,onClick:oe,"data-testid":`value-button-pos2`})]});return(0,W.jsxs)(aR,{children:[(0,W.jsxs)(hR,{children:[(0,W.jsx)(pL,{head:E,text:D,trigger:f,setTrigger:p,showArrow:!0,height:`450px`}),(0,W.jsx)(DL,{clickFunction:se,statement:B}),(0,W.jsx)(pL,{head:A,text:j,trigger:O,setTrigger:k,showArrow:!1,height:`150px`}),(0,W.jsx)(pL,{head:M,text:N,trigger:m,setTrigger:h,showArrow:!1,height:`300px`})]}),(0,W.jsxs)(iR,{background:t.headerBarColor,children:[v,(0,W.jsx)(fR,{onClick:ne,children:(0,W.jsx)(RL,{})})]}),de.display?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(AI,{fontSize:+l,statement:P?.[0]?.statement,backgroundColor:`#e5e5e5`}),(0,W.jsxs)(lR,{children:[(0,W.jsx)(uR,{children:b}),(0,W.jsx)(dR,{children:`${ee} / ${ue}`}),(0,W.jsx)(uR,{children:x})]}),fe,(0,W.jsx)(sR,{children:y}),(0,W.jsx)(LI,{statements:L,onClick:re}),(0,W.jsx)(mR,{children:T})]}):(0,W.jsx)(pR,{children:(0,W.jsx)(`p`,{children:C})})]})},iR=U.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  padding-bottom: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
  margin-bottom: 10px;
`,aR=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,oR=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 85vw;
  height: 30px;
  justify-self: center;
`,sR=U.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  font-size: 2.5vh;
  padding-left: 2.5vw;
  color: ${e=>e.theme.mobileText};
`,cR=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,lR=U.div`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  width: 85vw;
  min-height: 6vh;
  margin-top: 5px;
  align-items: flex-end;
  font-size: 2.5vh;
`,uR=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  width: 28vw;
`,dR=U.div`
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 28vw;
  height: 7vh;
  color: ${e=>e.theme.mobileText};
`,fR=U.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,pR=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3.5vh;
  font-weight: bold;
  min-height: 30vh;
  margin-top: 30px;
  width: 80vw;
  color: ${e=>e.theme.mobileText};
  font-size: 22px;
`,mR=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,hR=U.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,gR=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,_R=e=>(0,W.jsxs)(`svg`,{width:25,height:41,viewBox:`0 0 25 41`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsx)(`path`,{d:`M25 27L12.6289 40.4021L1.90735e-06 27L5.92784 27L12.6289 33.701L19.0722 27H25Z`,fill:`#899499`,fillOpacity:.5}),(0,W.jsx)(`path`,{d:`M25 18L12.6289 31.4021L1.90735e-06 18L5.92784 18L12.6289 24.701L19.0722 18H25Z`,fill:`#899499`,fillOpacity:.4}),(0,W.jsx)(`path`,{d:`M25 9.00001L12.6289 22.4021L1.90735e-06 9.00001L5.92784 9.00001L12.6289 15.701L19.0722 9.00001H25Z`,fill:`#899499`,fillOpacity:.3}),(0,W.jsx)(`path`,{d:`M25 7.62939e-06L12.6289 13.4021L1.90735e-06 7.62939e-06L5.92784 7.62939e-06L12.6289 6.70104L19.0722 7.62939e-06H25Z`,fill:`#899499`,fillOpacity:.2})]}),vR=e=>(0,W.jsxs)(`svg`,{width:25,height:41,viewBox:`0 0 25 41`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsx)(`path`,{d:`M0 13.4021L12.3711 0L25 13.4021H19.0722L12.3711 6.70103L5.92783 13.4021H0Z`,fill:`#899499`,fillOpacity:.5}),(0,W.jsx)(`path`,{d:`M0 22.4021L12.3711 9L25 22.4021H19.0722L12.3711 15.701L5.92783 22.4021H0Z`,fill:`#899499`,fillOpacity:.4}),(0,W.jsx)(`path`,{d:`M0 31.4021L12.3711 18L25 31.4021H19.0722L12.3711 24.701L5.92783 31.4021H0Z`,fill:`#899499`,fillOpacity:.3}),(0,W.jsx)(`path`,{d:`M0 40.4021L12.3711 27L25 40.4021H19.0722L12.3711 33.701L5.92783 40.4021H0Z`,fill:`#899499`,fillOpacity:.2})]}),yR=e=>e.langObj,bR=e=>{let t=G(K(q(yR).mobileThinSelectedText))||``,n=e.selected||0,r=e.required||0;return(0,W.jsx)(xR,{selected:n,required:r,children:(0,W.jsx)(`p`,{children:`${t}: ${n} / ${r}`})})},xR=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 34px;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  border: 0.5px solid #d3d3d3;
  user-select: none;
  font-size: 1.2em;
  color: ${e=>e.theme.mobileText};

  p {
    font-size: 1.2rem;
    color: ${e=>e.theme.mobileText};
    font-weight: normal;
  }
  background-color: ${e=>e.selected===e.required&&e.selected>0?`#BCF0DA`:e.selected>e.required?`#FFC5D3`:`white`};
`,SR=e=>e.langObj,CR=e=>e.triggerMobileThinMoveTopModal,wR=e=>e.setTriggerMobileThinMoveTopModal,TR=({onClick:e})=>{let t=q(SR),n=J(CR),r=J(wR),i=G(K(t.moveTopMobileHead))||``,a=G(K(t.moveAllTopMobileText))||``,o=G(K(t.moveTopMobileButtonOK))||``,s=G(K(t.mobileModalButtonCancel))||``,c=()=>{r(!1)};return(0,W.jsx)(Gr,{open:n,onClose:c,center:!0,closeIcon:(0,W.jsx)(IR,{children:(0,W.jsx)(LR,{onClick:c,"aria-label":`Close modal`,children:`×`})}),classNames:{modal:`custom-move-all-modal-height`,overlay:`mobile-thin-modal-overlay`},styles:{overlay:{backgroundColor:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(4px)`,display:`flex`,alignItems:`center`,justifyContent:`center`}},children:(0,W.jsxs)(ER,{"data-testid":`mobileThinMoveTopModalDiv`,children:[(0,W.jsxs)(DR,{children:[(0,W.jsx)(OR,{children:i}),(0,W.jsx)(kR,{})]}),(0,W.jsxs)(AR,{children:[(0,W.jsx)(jR,{children:a}),(0,W.jsxs)(MR,{children:[(0,W.jsx)(PR,{onClick:c,children:s}),(0,W.jsx)(FR,{onClick:()=>{e?.(),c()},children:o})]})]})]})})},ER=U.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  height: 100%;
  max-height: 40vh;
  min-height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,DR=U.header`
  padding: 16px 20px 0 20px;
  text-align: center;
  background: white;
  flex-shrink: 0;
`,OR=U.h2`
  margin: 0 0 12px 0;
  font-size: clamp(1.1rem, 4vw, 1.3rem);
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
`,kR=U.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
  margin: 0 -20px;
`,AR=U.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 20px 20px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  min-height: 0;
`,jR=U.div`
  font-size: clamp(1rem, 3.5vw, 1.125rem);
  line-height: 1.6;
  color: #4b5563;
  text-align: center;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,MR=U.div`
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 280px;
`,NR=U.button`
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`,PR=U(NR)`
  background: #f3f4f6;
  color: #6b7280;
  border: 1px solid #d1d5db;

  &:hover:not(:disabled) {
    background: #e5e7eb;
    color: #4b5563;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,FR=U(NR)`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
`,IR=U.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`,LR=U.div`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 12px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);

  &:hover {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 2px solid #fca5a5;
    outline-offset: 2px;
  }
`,RR=(e,t)=>(e.forEach(e=>{let n=e.id,r=e.targetcol;t.statementList.forEach(e=>{e.id===n&&(t.vCols[r].push(e),(0,kM.default)(t.statementList,e=>e.id===n))})}),t),zR=(e,t)=>(e.forEach(e=>{let n=e.id,r=e.targetcol;t.statementList.forEach(e=>{e.id===n&&(t.vCols[r].push(e),(0,kM.default)(t.statementList,e=>e.id===n))})}),t);function BR({nativeEvent:e}){return window.TouchEvent?e instanceof TouchEvent:`touches`in e}function VR(e){return e.nativeEvent instanceof MouseEvent}function HR(e,t={}){let{threshold:n=400,onStart:r,onFinish:i,onCancel:a}=t,o=S.useRef(!1),s=S.useRef(!1),c=S.useRef();return S.useMemo(()=>{if(typeof e!=`function`)return{};let t=t=>{!VR(t)&&!BR(t)||(r&&r(t),s.current=!0,c.current=setTimeout(()=>{e(t),o.current=!0},n))},l=e=>{!VR(e)&&!BR(e)||(o.current?i&&i(e):s.current&&a&&a(e),o.current=!1,s.current=!1,c.current&&window.clearTimeout(c.current))},u={onMouseDown:t,onMouseUp:l,onMouseLeave:l},d={onTouchStart:t,onTouchEnd:l};return{...u,...d}},[e,n,a,i,r])}var UR=e=>e.langObj,WR=e=>e.configObj,GR=e=>e.showConfirmButton,KR=e=>e.setCurrentPage,qR=e=>e.setProgressScore,JR=e=>e.setTriggerMobileThinMoveTopModal,YR=e=>e.mobileThinFontSize,XR=e=>e.mobileThinViewSize,ZR=e=>e.setTriggerMobileThinHelpModal,QR=e=>e.setTriggerMobileThinGuidanceModal,$R=e=>e.setTriggerMobileThinScrollBottomModal,ez=e=>e.triggerMobileThinHelpModal,tz=e=>e.setTriggerMobileThinHelpModal,nz=e=>e.triggerMobileThinPreventNavModal,rz=e=>e.setTriggerMobileThinPreventNavModal,iz=e=>e.triggerMobileThinScrollBottomModal,az=e=>e.setTriggerMobileThinScrollBottomModal,oz=e=>e.triggerMobileThinGuidanceModal,sz=e=>e.setTriggerMobileThinGuidanceModal,cz=()=>{let e=q(UR),t=q(WR),n=J(GR),r=J(KR),i=J(qR),a=J(JR),o=J(YR),s=J(XR),c=J(ZR),l=J(QR),u=t.thinGuidanceModalMaxIterations,d=J($R),f=G(K(e.mobileThinHelpModalText))||``,p=J(ez),m=J(tz),h=J(nz),g=J(rz),_=J(iz),v=J(az),y=J(oz),b=J(sz),x=G(K(e.mobileThinProcessCompleteMessage))||``,C=G(K(e.mobileGuidanceModalRight1Header))||``,w=G(K(e.mobileGuidanceModalRight1Text))||``,T=G(K(e.mobileGuidanceModalRight2Header))||``,E=G(K(e.mobileGuidanceModalRight2Text))||``,D=G(K(e.mobileGuidanceModalLeft1Header))||``,O=G(K(e.mobileGuidanceModalLeft1Text))||``,k=G(K(e.mobileGuidanceModalLeft2Header))||``,A=G(K(e.mobileGuidanceModalLeft2Text))||``,j=G(K(e.mobileThinConditionsOfInstruction))||``,M=G(K(e.screenOrientationText))||``,N=G(K(e.mobileThinSubmitButtonText))||``,P=G(K(e.expandViewMessage))||``,F=G(K(e.thinningPreventNavModalHead))||``,ee=G(K(e.thinningPreventNavModalText))||``,I=G(K(e.mobileThinScrollBottomModalHead))||``,L=G(K(e.mobileThinScrollBottomModalText))||``,[R,z]=kb(`selectedNegItems`,JSON.parse(localStorage.getItem(`selectedNegItems`))),[B,V]=kb(`selectedPosItems`,JSON.parse(localStorage.getItem(`selectedPosItems`))),[H,te]=kb(`thinDisplayControllerArray`,JSON.parse(localStorage.getItem(`thinDisplayControllerArray`))),[ne,re]=(0,S.useState)(!1),ie=(0,S.useRef)({id:``,statement:``,color:``,direction:``}),ae=(0,S.useRef)(null),oe=(0,S.useRef)({header:``,text:``}),se=fc(),ce=(0,S.useRef)(null);(0,S.useEffect)(()=>(ce.current=Date.now(),(async()=>{await r(`thin`),localStorage.setItem(`currentPage`,`thin`),await i(20)})(),()=>{ar(ce.current,`thinningPage`,`thinningPage`)}),[r,i]),(0,S.useEffect)(()=>{ae.current&&(ae.current.scrollTop=0)},[]);let le=HR(e=>{ie.current={id:e.target.dataset.id,statement:e.target.dataset.statement,color:e.target.dataset.color,direction:e.target.dataset.direction},a(!0)},{threshold:1e3}),ue=(0,S.useCallback)((0,uL.default)(e=>{let t=e.target,n=t.scrollTop;t.scrollHeight-(n+t.clientHeight)<=150&&re(!0)},100),[150]),de,fe=0;if(H[0]?.side===`right`&&(H[0]?.iteration===1&&(oe.current={header:C,text:w}),H[0]?.iteration>1&&(oe.current={header:T,text:E}),de=[...B]),H[0]?.side===`left`&&(H[0]?.iteration===1&&(oe.current={header:D,text:O}),H[0]?.iteration>1&&(oe.current={header:k,text:A}),de=[...R]),H.length===0){de=[];let e=AM(JSON.parse(localStorage.getItem(`newCols`)),JSON.parse(localStorage.getItem(`finalSortColData`))),t=JSON.parse(localStorage.getItem(`finalSortColData`)).reverse(),n=[];t.forEach(t=>{let r=e.vCols[t[0]];n.push(...r)}),n.forEach(e=>{e.selected=!1}),localStorage.setItem(`m_ThinDisplayStatements`,JSON.stringify({display:!1})),localStorage.setItem(`m_ThinningFinished`,`true`),localStorage.setItem(`m_FinalThinCols`,JSON.stringify(n)),localStorage.setItem(`columnStatements`,JSON.stringify(e))}let pe=JSON.parse(localStorage.getItem(`m_ViewSizeObject`)).thin,me=JSON.parse(localStorage.getItem(`m_FontSizeObject`)).thin,he=()=>{c(!0)},ge=e=>{let t=e.target.getAttribute(`data-targetcol`);de.forEach(n=>{n.id===e.target.dataset.id&&(n.targetcol=t,n.selected=!n.selected),n.color=n.selected===!0?`lightyellow`:VI(+n.psValue)}),H[0]?.side===`right`&&V([...de]),H[0]?.side===`left`&&z([...de])},_e=e=>{let t=de.findIndex(t=>t.id===e.target.dataset.id);if(t===0)return;let n=de[t];de[t]=de[t-1],de[t-1]=n,H[0]?.side===`right`&&V([...de]),H[0]?.side===`left`&&z([...de])},ve=e=>{let t=de.findIndex(t=>t.id===e.target.dataset.id);if(t>=de.length-1)return;let n=de[t];de[t]=de[t+1],de[t+1]=n,H[0]?.side===`right`&&V([...de]),H[0]?.side===`left`&&z([...de])},ye=()=>{let e=ae.current,t;if(e&&(t=e.scrollHeight>e.clientHeight),t===!0&&ne===!1){d(!0);return}if(re(!1),H[0]?.side===`right`){let e=B.filter(e=>e.selected===!0),t=B.filter(e=>e.selected!==!0),n=RR(e,JSON.parse(localStorage.getItem(`newCols`)));localStorage.setItem(`newCols`,JSON.stringify(n)),H.shift(),te([...H]),V([...t]),H[0]?.iteration<=u&&l(!0);return}if(H[0]?.side===`left`){let e=R.filter(e=>e.selected===!0),t=R.filter(e=>e.selected!==!0),n=zR(e,JSON.parse(localStorage.getItem(`newCols`)));localStorage.setItem(`newCols`,JSON.stringify(n)),H.shift(),te([...H]),z([...t]),H[0]?.iteration<=u&&l(!0);return}},be=()=>{de.forEach((e,t)=>{if(e.selected===!0){let e=de.splice(t,1);de.unshift(e[0])}H[0]?.side===`right`&&V([...de]),H[0]?.side===`left`&&z([...de])}),a(!1)};if(se===`landscape-primary`)return(0,W.jsx)(bz,{children:(0,W.jsx)(`h1`,{children:M})});let xe=(de||[]).map(e=>(e.selected===!0&&fe++,(0,W.jsxs)(gz,{children:[(0,W.jsx)(hz,{"data-id":e.id,"data-statement":e.statement,"data-color":e.color,"data-direction":`down`,onClick:ve,children:(0,W.jsx)(_R,{style:{pointerEvents:`none`,opacity:`0.75`}})}),(0,W.jsx)(pz,{onClick:ge,id:e.id,color:e.color,fontSize:o===+me?o:me,"data-targetcol":H[0]?.targetCol,"data-max":H[0]?.maxNum,"data-selected":e.selected,"data-id":e.id,"data-direction":`allTop`,children:e.statement},X()),(0,W.jsx)(mz,{"data-id":e.id,...le,"data-statement":e.statement,"data-color":e.color,"data-direction":`up`,onClick:_e,children:(0,W.jsx)(vR,{style:{pointerEvents:`none`,opacity:`0.75`}})})]},X()))),Se=JSON.parse(localStorage.getItem(`m_ThinDisplayStatements`));return(0,W.jsxs)(dz,{children:[(0,W.jsx)(TR,{cardId:ie,onClick:be}),(0,W.jsx)(pL,{head:oe.current.header,text:oe.current.text,trigger:y,setTrigger:b,showArrow:!1,height:`250px`}),(0,W.jsx)(pL,{head:oe.current.header,text:f,trigger:p,setTrigger:m,showArrow:!0,height:`450px`}),(0,W.jsx)(pL,{head:I,text:L,trigger:_,setTrigger:v,showArrow:!1,height:`150px`}),(0,W.jsx)(pL,{head:F,text:ee,trigger:h,setTrigger:g,showArrow:!1,height:`150px`}),(0,W.jsxs)(uz,{background:t.headerBarColor,children:[j,(0,W.jsx)(vz,{onClick:he,children:(0,W.jsx)(RL,{})})]}),(0,W.jsxs)(_z,{children:[(0,W.jsx)(bR,{selected:fe,required:H[0]?.maxNum}),n&&(0,W.jsx)(fz,{onClick:ye,disabled:fe!==H[0]?.maxNum,fontColor:fe===H[0]?.maxNum?`white`:`#3645f`,color:fe===H[0]?.maxNum?`#337ab7`:`#d3d3d3`,children:N})]}),Se.display?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(lz,{onScroll:ue,ref:ae,viewSize:s===+pe?s:pe,children:xe}),(0,W.jsx)(xz,{children:P})]}):(0,W.jsx)(yz,{children:(0,W.jsx)(`div`,{children:x})})]})},lz=U.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #e5e5e5;
  width: 96vw;
  height: ${e=>`${e.viewSize}vh`};
  border-radius: 3px;
  text-align: center;
  color: ${e=>e.theme.mobileText};
  overflow-x: none;
  overflow-y: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border: 1px solid darkgray;
  user-select: none;
`,uz=U.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  margin-bottom: 10px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,dz=U.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  /* gap: 5px; */
  align-items: center;
  width: 100vw;
  height: 100vh;
`,fz=U.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  color: ${e=>e.fontColor};
  font-size: 1.2em;
  font-weight: normal;
  padding: 0.25em 0.5em;
  height: 34px;
  min-width: 115px;
  text-decoration: none;
  border: 0px;
  border: 1px solid gray;
  border-radius: 3px;
  user-select: none;
`,pz=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  width: 86%;
  min-height: 8vh;
  font-size: ${e=>`${e.fontSize}vh`};
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
`,mz=U.button`
  display: flex;
  width: 10vw;
  background-color: #e5e5e5;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,hz=U.button`
  width: 10vw;
  background-color: #e5e5e5;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,gz=U.div`
  display: flex;
  align-items: stretch;
  min-height: 10vh;
  flex-direction: row;
  width: 96%;
`,_z=U.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 50px;
  gap: 55px;
  user-select: none;
`,vz=U.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,yz=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3.5vh;
  font-weight: bold;
  min-height: 30vh;
  margin-top: 30px;
  width: 80vw;
  color: ${e=>e.theme.mobileText};
  font-size: 22px;
`,bz=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${e=>e.theme.mobileText};
`,xz=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,Sz=e=>(0,W.jsxs)(`svg`,{width:143,height:143,viewBox:`0 0 143 143`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,W.jsx)(`path`,{d:`M104.535 38.0672C113.35 46.8814 118.301 58.8361 118.301 71.3013C118.301 83.7664 113.35 95.7211 104.535 104.535`,stroke:`black`,strokeWidth:6}),(0,W.jsx)(`path`,{d:`M93.7758 27.6163L99.5194 47.5916L113.947 32.6298L93.7758 27.6163Z`,fill:`black`}),(0,W.jsx)(`path`,{d:`M35.2972 101.512C27.2848 91.9633 23.3937 79.6226 24.4802 67.2049C25.5666 54.7871 31.5414 43.3096 41.0903 35.2971`,stroke:`black`,strokeWidth:6}),(0,W.jsx)(`path`,{d:`M45.1049 112.861L41.1241 92.4613L25.4477 106.109L45.1049 112.861Z`,fill:`black`})]}),Cz=e=>{let t=(0,S.useMemo)(()=>({emoji5Array:[(0,W.jsx)(wl,{},X()),(0,W.jsx)(jb,{},X()),(0,W.jsx)(Cl,{},X()),(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X()),(0,W.jsx)(uu,{},X()),(0,W.jsx)(Nb,{},X()),(0,W.jsx)(du,{},X())],emoji4Array:[(0,W.jsx)(wl,{},X()),(0,W.jsx)(Cl,{},X()),(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X()),(0,W.jsx)(uu,{},X()),(0,W.jsx)(du,{},X())],emoji3Array:[(0,W.jsx)(Cl,{},X()),(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X()),(0,W.jsx)(uu,{},X())],emoji2Array:[(0,W.jsx)(Sl,{},X()),(0,W.jsx)(Wl,{},X()),(0,W.jsx)(Mb,{},X()),(0,W.jsx)(Au,{},X()),(0,W.jsx)(lu,{},X())]}),[]);return{displayArray:(0,S.useMemo)(()=>{let n=e?.emojiArrayType?.[0];return n&&t[n]||[]},[e,t])}},wz=e=>e.langObj,Tz=e=>e.mapObj,Ez=e=>e.triggerMobileSortSwapModal,Dz=e=>e.setTriggerMobileSortSwapModal,Oz=e=>{let t=q(wz),n=q(Tz),r=J(Ez),i=J(Dz),a=[...n.qSortHeaderNumbers],{displayArray:o}=Cz(n),[s,c]=(0,S.useState)(!1),l=(0,S.useRef)(null),u=G(K(t.mobileSortSwapModalHead))||``,d=G(K(t.mobileSortSwapModalConfirmButton))||``,f=G(K(t.mobileModalButtonCancel))||``,p=G(K(t.mobileSortSwapModalSuccessMessage))||``;if((0,S.useEffect)(()=>()=>{l.current&&clearTimeout(l.current)},[]),!e.targetArray||e.targetArray.length===0)return;let m=[...e.targetArray],h=n.useColLabelNums[0],g=h!==!1&&h!==`false`,_=n.useColLabelText[0],v=_!==!1&&_!==`false`,y=n.useColLabelEmoji[0],b=y!==!1&&y!==`false`,x=null,C=null;if(m.length===2){m.sort((e,t)=>parseFloat(String(t.groupNumber).replace(`+`,``))-parseFloat(String(e.groupNumber).replace(`+`,``)));let e=m[0],t=m[1],n=e?.groupNumber??``,r=t?.groupNumber??``;n=n.replace(`+`,``),r=r.replace(`+`,``);let i=a.indexOf(n),s=a.indexOf(r);x=o[i],C=o[s]}m?.length>0&&+m?.[0]?.index>+m?.[1]?.index&&(m=m.reverse());let w=()=>{l.current&&=(clearTimeout(l.current),null),i(!1),e.clearSelected(),c(!1)};return(0,W.jsx)(Lz,{children:(0,W.jsxs)(lL.default,{id:`sortSwapModal`,isOpen:r,onRequestClose:w,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,style:{content:{display:`flex`,justifySelf:`center`,flexDirection:`column`,alignItems:`center`,backgroundColor:`#ffffff`,borderRadius:`10px`,padding:`0px`,width:`90vw`,height:`fit-content`,maxHeight:`80vh`,paddingBottom:`10px`,WebkitOverflowScrolling:`touch`}},overlayClassName:`Overlay`,ariaHideApp:!1,children:[(0,W.jsx)(Iz,{children:(0,W.jsx)(Fz,{onClick:w,children:`X`})}),(0,W.jsx)(Uz,{children:s?(0,W.jsx)(Hz,{children:p}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(kz,{children:[u,(0,W.jsx)(`hr`,{})]}),(0,W.jsxs)(Mz,{color:m[0]?.color,fontSize:m[0]?.fontSize,children:[(0,W.jsx)(Nz,{children:(0,W.jsxs)(Rz,{children:[b&&(0,W.jsx)(zz,{children:x}),g&&(0,W.jsx)(Bz,{children:m[0]?.groupNumber}),v&&(0,W.jsx)(Vz,{children:m[0]?.header}),b&&(0,W.jsx)(zz,{children:x})]})}),(0,W.jsx)(Pz,{color:m[0]?.color,children:m[0]?.statement})]}),(0,W.jsx)(Sz,{style:{display:`flex`,justifySelf:`center`,height:`50px`}}),(0,W.jsxs)(Mz,{id:`StatementBox`,color:m[1]?.color,fontSize:m[1]?.fontSize,children:[(0,W.jsx)(Nz,{id:`NumberContainer`,children:(0,W.jsxs)(Rz,{id:`ContentWrapper`,children:[b&&(0,W.jsx)(zz,{children:C}),g&&(0,W.jsx)(Bz,{children:m[1]?.groupNumber}),v&&(0,W.jsx)(Vz,{children:m[1]?.header}),b&&(0,W.jsx)(zz,{children:C})]})}),(0,W.jsx)(Pz,{id:`CardDiv`,color:m[1]?.color,children:m[1]?.statement})]}),(0,W.jsxs)(Az,{children:[(0,W.jsx)(jz,{color:`#FBD5D5`,onClick:w,children:f}),(0,W.jsx)(jz,{color:`#BCF0DA`,onClick:()=>{e.handleStatementSwap(m[0].index,m[1].index),c(!0),l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{w()},2e3)},children:d})]})]})})]})})},kz=U.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 20px 0px 10px 0px;
  margin-bottom: 20px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${e=>e.theme.mobileText};
  hr {
    color: black;
  }
`,Az=U.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  margin-top: 30px;
  border-radius: 3px;
`,jz=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  color: ${e=>e.theme.mobileText};
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`,Mz=U.div`
  display: flex;
  align-self: center;
  justify-self: center;
  position: relative;
  /* background-color: #e5e5e5; */
  background-color: ${e=>e.color};
  width: 80vw;
  height: fit-content;
  min-height: 14vh;
  font-size: ${e=>`${e.fontSize}vh`};
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  text-align: center;
  /* padding: 15px 10px 15px 10px; */
  border: 1px solid black;
`,Nz=U.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 4px;
  padding-bottom: 5px;
  /* color: ${e=>e.theme.mobileText}; */
  background-color: ${e=>e.color};

  height: 25px;
  font-size: 14px;
  padding-bottom: 3px;
  outline: 1px solid black;
`,Pz=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 78px;
  margin-top: 25px;
  background-color: ${e=>e.color};
  border-radius: 3px;
  text-align: center;
  padding: 15px 10px 15px 10px;
`,Fz=U.button`
  background-color: red;
  float: right;
  color: white;
  border: none;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  width: 40px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`,Iz=U.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0px;
`,Lz=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,Rz=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
  /* height: 100%; */
`,zz=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2.5px;
  width: 20px;
  height: 20px;
  /* svg {
    width: 100%;
    height: 100%;
  } */
`,Bz=U.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,Vz=U.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,Hz=U.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: clamp(1rem, 6vw, 10rem);
  /* font-size: 6vw; */
  text-align: center;
  line-height: 1.4rem;
  margin-top: 30px;
  margin-bottom: 30px;
`,Uz=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,Wz=({background:e,conditionsOfInstruction:t,onHelpClick:n})=>(0,W.jsxs)(Gz,{background:e,children:[t,(0,W.jsx)(Kz,{onClick:n,children:(0,W.jsx)(RL,{})})]}),Gz=U.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,Kz=U.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,qz=({item:e,fontSize:t,onCardSelected:n,onClickUp:r,onClickDown:i})=>(0,W.jsxs)(Jz,{children:[(0,W.jsx)(Zz,{id:e.id,onClick:i,color:e.characteristics.color,children:(0,W.jsx)(_R,{style:{pointerEvents:`none`,opacity:`0.95`}})}),(0,W.jsx)(Yz,{onClick:n,id:e.id,fontSize:t,color:e.selected?`lightyellow`:e.characteristics.color,children:(0,W.jsx)(`div`,{"data-index":e.externalIndex,"data-id":e.id,"data-color":e.characteristics.color,"data-group_num":e.characteristics.value,"data-statement_text":e.statement,"data-font_size":t,"data-header":e.characteristics.header,children:e.statement})},X()),(0,W.jsx)(Xz,{id:e.id,onClick:r,color:e.characteristics.color,children:(0,W.jsx)(vR,{style:{pointerEvents:`none`,opacity:`0.95`}})})]},X()),Jz=U.div`
  display: flex;
  align-items: stretch;
  min-height: 10vh;
  flex-direction: row;
  user-select: none;
  width: 96%;
`,Yz=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  position: relative;
  width: 80%;
  min-height: 10vh;
  font-size: ${e=>`${e.fontSize}vh`};
  text-align: center;
  color: ${e=>e.theme.mobileText};
  border: 1px solid #36454f;
  border-radius: 8px;
  padding: 5px;
  -webkit-transition: background-color 300ms linear;
  -moz-transition: background-color 300ms linear;
  -o-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  transition: all 300ms linear;
  user-select: none;
`,Xz=U.button`
  display: flex;
  width: 10vw;
  background-color: ${e=>e.color};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,Zz=U.button`
  width: 10vw;
  background-color: ${e=>e.color};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,Qz=({items:e,header:t,color:n,mobileSortFontSize:r,persistedMobileSortFontSize:i,onCardSelected:a,onClickUp:o,onClickDown:s})=>{let c=e.map(e=>(0,W.jsx)(qz,{item:e,fontSize:r===+i?r:i,onCardSelected:a,onClickUp:o,onClickDown:s},X()));return(0,W.jsxs)($z,{color:n,children:[(0,W.jsx)(eB,{margins:{top:10,bottom:0},children:t}),c,(0,W.jsx)(eB,{margins:{top:0,bottom:10},children:t})]})},$z=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
  min-height: 80px;
  background-color: ${e=>e.color};
  border-radius: 3px;
  text-align: center;
  border: 0.5px solid black;
`,eB=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-top: ${e=>`${e.margins.top}px`};
  margin-bottom: ${e=>`${e.margins.bottom}px`};
  padding: 5px;
  width: 90%;
  min-height: 20px;
  font-size: 20px;
  color: ${e=>e.theme.mobileText};
  border-radius: 5px;
`,tB=({partitionArray:e,characteristicsArray:t,mobileColHeaders:n,mobileSortFontSize:r,mobileSortViewSize:i,persistedMobileSortFontSize:a,persistedMobileSortViewSize:o,onCardSelected:s,onClickUp:c,onClickDown:l,onScroll:u})=>{let d=[],f=-1;return(e||[]).map((e,i)=>{let o=(e||[]).map(e=>(f++,{...e,externalIndex:f,characteristics:t[f]}));d.push((0,W.jsx)(Qz,{items:o,header:n[i],color:t[f]?.color,mobileSortFontSize:r,persistedMobileSortFontSize:a,onCardSelected:s,onClickUp:c,onClickDown:l},X()))}),(0,W.jsx)(nB,{onScroll:u,viewSize:i===+o?i:o,children:d})},nB=U.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 96vw;
  height: ${e=>`${e.viewSize}vh`};
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  border-radius: 3px;
  text-align: center;
  overflow-x: none;
  overflow-y: auto;
`,rB=({text:e})=>(0,W.jsx)(iB,{children:(0,W.jsx)(`h1`,{children:e})}),iB=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,aB=({text:e})=>(0,W.jsx)(oB,{children:e}),oB=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,sB=({color:e,shouldDisplayEmojis:t,shouldDisplayNums:n,shouldDisplayText:r,emoji:i=null,value:a,textHeader:o})=>(0,W.jsx)(cB,{color:e,children:(0,W.jsxs)(lB,{children:[t&&(0,W.jsx)(dB,{children:i}),(0,W.jsxs)(pB,{children:[n&&(0,W.jsx)(uB,{children:a}),r&&(0,W.jsx)(fB,{children:o})]}),t&&(0,W.jsx)(dB,{children:i})]})}),cB=U.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${e=>e.color};
  width: 100%;
`,lB=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
`,uB=U.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,dB=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,fB=U.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 4vw;
  text-align: center;
  line-height: 0.8rem;
`,pB=U.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`,mB=e=>e.setTriggerMobileSortSwapModal,hB=(e,t,n)=>{let r=J(mB),i=(0,S.useRef)([]),a=n.allowUnforcedSorts,[o,s]=kb(`m_SortArray1`,[...JSON.parse(localStorage.getItem(`m_FinalThinCols`))]),[c,l]=kb(`m_UnforcedPattern`,[...e.qSortPattern.reverse().map(e=>+e)]),u=(0,S.useMemo)(()=>a?[...c]:[...e.qSortPattern].reverse().map(e=>+e),[a,c,e]),d=(0,S.useMemo)(()=>{let e=[...u],t=[],n=0,r=[...o];return e.forEach(e=>{t.push(r.slice(n,n+e)),n+=e}),t},[u,o]),f=(0,S.useMemo)(()=>{let t=[...e.qSortHeaderNumbers].reverse();return t=t.map(e=>e>0?`+${e}`:e),t},[e]);return{sortArray1:o,targetArray:i,partitionArray:d,characteristicsArray:(0,S.useMemo)(()=>{let t=[...e.columnHeadersColorsArray].reverse(),n=[...e.colTextLabelsArray].reverse(),r=[...u],i=[];return r.forEach((e,r)=>{let a={};for(let o=0;o<e;o++)a.color=t[r],a.value=f[r],a.header=n[r],i.push({...a})}),localStorage.setItem(`m_SortCharacteristicsArray`,JSON.stringify(i)),i},[e,f,u]),mobileColHeaders:(0,S.useMemo)(()=>{let n=[...e.qSortHeaderNumbers],r=[...e.columnHeadersColorsArray],i=[...e.colTextLabelsArray],a=e.useColLabelNums?.[0]!==!1&&e.useColLabelNums?.[0]!==`false`,o=e.useColLabelText?.[0]!==!1&&e.useColLabelText?.[0]!==`false`,s=e.useColLabelEmoji?.[0]!==!1&&e.useColLabelEmoji?.[0]!==`false`;return n.map((e,n)=>(0,W.jsx)(sB,{color:r[n],shouldDisplayEmojis:s,shouldDisplayNums:a,shouldDisplayText:o,emoji:t[n],value:e,textHeader:i[n]},X())).reverse()},[e,t]),handleCardSelected:e=>{try{if(i.length===2||e.target.dataset.id===void 0)return;if(o.forEach(t=>{t.id===e.target.dataset.id&&(t.selected=!t.selected)}),s([...o]),i.current[0]?.id===e.target.dataset.id){i.current=[];return}let t={id:e.target.dataset.id,statement:e.target.dataset.statement_text,color:e.target.dataset.color,index:e.target.dataset.index,groupNumber:e.target.dataset.group_num,fontSize:e.target.dataset.font_size,header:e.target.dataset.header};i.current=[...i.current,t],i.current.length>=2&&r(!0)}catch(e){console.error(e)}},handleStatementSwap:(e,t)=>{[o[e],o[t]]=[o[t],o[e]],s([...o])},clearSelected:()=>{o.forEach(e=>{e.selected=!1}),s([...o]),i.current=[]},handleOnClickUp:e=>{let t=o.findIndex(t=>t.id===e.target.id);if(t===0)return;let n=d.findIndex(t=>t.some(t=>t.id===e.target.id)),r=d[n].findIndex(t=>t.id===e.target.id);if(a&&r===0)c[n-1]=c[n-1]+1,c[n]=c[n]-1,l([...c]);else{let e=o[t];o[t]=o[t-1],o[t-1]=e}s([...o])},handleOnClickDown:e=>{let t=o.findIndex(t=>t.id===e.target.id);if(t>=o.length-1)return;let n=d.findIndex(t=>t.some(t=>t.id===e.target.id)),r=d[n].findIndex(t=>t.id===e.target.id);if(a&&r===d[n].length-1)c[n+1]=c[n+1]+1,c[n]=c[n]-1,l([...c]);else{let e=o[t];o[t]=o[t+1],o[t+1]=e}s([...o])}}},gB=e=>(0,S.useMemo)(()=>({conditionsOfInstruction:G(K(e.mobileSortConditionsOfInstruction))||``,screenOrientationText:G(K(e.screenOrientationText))||``,expandViewMessage:G(K(e.expandViewMessage))||``,helpModalHead:G(K(e.mobileSortHelpModalHead))||``,helpModalText:G(K(e.mobileSortHelpModalText))||``,scrollBottomModalHead:G(K(e.mobileSortScrollBottomModalHead))||``,scrollBottomModalText:G(K(e.mobileSortScrollBottomModalText))||``}),[e]),_B=e=>e.setCurrentPage,vB=e=>e.setProgressScore,yB=e=>e.mapObj,bB=e=>e.configObj,xB=e=>e.mobileSortFontSize,SB=e=>e.mobileSortViewSize,CB=e=>e.langObj,wB=e=>e.setTriggerMobileSortHelpModal,TB=e=>e.setHasScrolledToBottomSort,EB=e=>e.triggerMobileSortHelpModal,DB=e=>e.setTriggerMobileSortHelpModal,OB=e=>e.triggerMobileSortScrollBottomModal,kB=e=>e.setTriggerMobileSortScrollBottomModal,AB=()=>{let e=J(_B),t=J(vB),n=q(yB),r=q(CB),i=q(bB),a=J(xB),o=J(SB),s=J(wB),c=J(TB),l=J(EB),u=J(DB),d=J(OB),f=J(kB),p=fc(),{displayArray:m}=Cz(n),h=gB(r),{sortArray1:g,targetArray:_,partitionArray:v,characteristicsArray:y,mobileColHeaders:b,handleCardSelected:x,handleStatementSwap:C,clearSelected:w,handleOnClickUp:T,handleOnClickDown:E}=hB(n,m,i),D=JSON.parse(localStorage.getItem(`m_FontSizeObject`)).sort,O=JSON.parse(localStorage.getItem(`m_ViewSizeObject`)).sort,k=(0,S.useRef)(null);(0,S.useEffect)(()=>(k.current=Date.now(),(async()=>{await e(`sort`),localStorage.setItem(`currentPage`,`sort`),await t(20)})(),()=>{ar(k.current,`sortPage`,`sortPage`)}),[e,t]);let A=()=>{s(!0)},j=(0,S.useCallback)((0,uL.default)(e=>{let t=e.target,n=t.scrollTop;t.scrollHeight-(n+t.clientHeight)<=100&&c(!0)},100),[c]);return p===`landscape-primary`?(0,W.jsx)(rB,{text:h.screenOrientationText}):(0,W.jsxs)(jB,{children:[(0,W.jsx)(Wz,{background:i.headerBarColor,conditionsOfInstruction:h.conditionsOfInstruction,onHelpClick:A}),(0,W.jsx)(pL,{head:h.helpModalHead,text:h.helpModalText,trigger:l,setTrigger:u,showArrow:!0,height:`450px`}),(0,W.jsx)(pL,{head:h.scrollBottomModalHead,text:h.scrollBottomModalText,trigger:d,setTrigger:f,showArrow:!1,height:`150px`}),(0,W.jsx)(Oz,{clearSelected:w,targetArray:_.current,handleStatementSwap:C}),(0,W.jsx)(tB,{partitionArray:v,characteristicsArray:y,mobileColHeaders:b,sortArray1:g,mobileSortFontSize:a,mobileSortViewSize:o,persistedMobileSortFontSize:D,persistedMobileSortViewSize:O,onCardSelected:x,onClickUp:T,onClickDown:E,onScroll:j}),(0,W.jsx)(aB,{text:h.expandViewMessage})]})},jB=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,MB=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},n=`itemNum${e.opts.itemNum}`,r=e.check,i=G(K(e.opts.label))||``,a=G(K(e.opts.placeholder))||``,o=G(K(e.opts.note))||``,s=!0;(o.length<1||o===``)&&(s=!1);let[c,l]=kb(n,``),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=n=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=n.target.value,a=i.length;if((e.opts.restricted===`true`||e.opts.restricted===!0)&&(i=i.replace(/\D/g,``)),(e.opts.limited===`true`||e.opts.limited===!0)&&i.length>+e.opts.limitLength&&(i=i.substring(0,+e.opts.limitLength)),l(i),a>0){let t=xl(i);r[`itemNum${e.opts.itemNum}`]=t}else e.opts.required===!0||e.opts.required===`true`?r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:r[`itemNum${e.opts.itemNum}`]=`no response`;t.setItem(`resultsSurvey`,JSON.stringify(r))};return(0,S.useEffect)(()=>{let t=!1;c.length>0&&c!==``&&(t=!0),r===!0&&t<1&&e.opts.required===!0?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[r,c,e]),s?(0,W.jsxs)(NB,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(PB,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(FB,{id:`noteText`,children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsx)(IB,{type:`text`,value:c,placeholder:a,onChange:f})]}):(0,W.jsxs)(NB,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(PB,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(IB,{type:`text`,value:c,placeholder:a,onChange:f})]})},NB=U.div`
  width: 98%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  max-width: 1300px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
  color: ${e=>e.theme.mobileText};
`,PB=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  width: 100%;
  border-radius: 3px;
  background-color: lightgray;
`,FB=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,IB=U.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 30px;
  font-size: 12px;
  background-color: white;
  color: ${e=>e.theme.mobileText};
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,LB=e=>{let t={async setItem(e,t){return await null,localStorage.setItem(e,t)}},n=`itemNum${e.opts.itemNum}`,r=e.check,i=G(K(e.opts.label))||``,a=G(K(e.opts.note))||``,o=G(K(e.opts.placeholder))||``,s=!0;(a.length<1||a===``)&&(s=!1);let[c,l]=kb(n,``),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=n=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=n.target.value;if(l(i),i.length>0){let t=xl(i);r[`itemNum${e.opts.itemNum}`]=t}else e.opts.required===!0||e.opts.required===`true`?r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:r[`itemNum${e.opts.itemNum}`]=`no response`;t.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1;return c.length>0&&c!==``&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&r===!0&&p<1?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[r,c,p,e.opts.required]),s?(0,W.jsxs)(RB,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(zB,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(BB,{children:a}),(0,W.jsx)(VB,{value:c,placeholder:o,onChange:f})]}):(0,W.jsxs)(RB,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(zB,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(VB,{value:c,placeholder:o,onChange:f,height:`350`})]})},RB=U.div`
  width: 98%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: whitesmoke;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,zB=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,BB=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,VB=U.textarea`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 0px;
  min-height: 120px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding: 5px;
`,HB=e=>{let t=e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t=t.map(e=>e.trim()),t},n=e.opts.id,r=e.check,i=G(K(e.opts.label))||``,a=G(K(e.opts.note))||``,o=t(e.opts.options),s=!0;(a.length<1||a===``)&&(s=!1);let c=e.opts.other;c=c===`true`||c===!0;let l=o.length-1,[u,d]=kb(n,``),[f,p]=(0,S.useState)(!0),[m,h]=(0,S.useState)(`no input`),[g,_]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),v=({label:e,value:t,checked:n,setter:r})=>(0,W.jsx)(`label`,{children:(0,W.jsxs)(qB,{children:[(0,W.jsx)(`input`,{type:`radio`,checked:n===t,onChange:()=>r(t),value:t}),(0,W.jsx)(KB,{children:(0,W.jsx)(`div`,{children:e})})]})}),y=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));+t.target.value==+l&&c===!0?m===``?n[`itemNum${e.opts.itemNum}`]=`${+t.target.value+1}-no input`:n[`itemNum${e.opts.itemNum}`]=`${+t.target.value+1}-${m}`:n[`itemNum${e.opts.itemNum}`]=+t.target.value+1,+t.target.value==+l?p(!1):p(!0),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},b=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));t.target.value===``?n[`itemNum${e.opts.itemNum}`]=`${+l+1}-no input`:n[`itemNum${e.opts.itemNum}`]=`${+l+1}-${xl(t.target.value.trim())}`,h(xl(t.target.value.trim())),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},x=!1;u.length===0&&(x=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&r===!0&&x?_({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):_({bgColor:`whitesmoke`,border:`none`})},[r,x,e.opts.required]);let C=()=>{let e=o.map((e,t)=>(0,W.jsx)(`div`,{children:(0,W.jsx)(v,{value:t,checked:u,label:e,setter:d})},X()));return(0,W.jsx)(`div`,{children:e})};return s?(0,W.jsxs)(UB,{bgColor:g.bgColor,border:g.border,children:[(0,W.jsx)(WB,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(JB,{children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(GB,{children:[(0,W.jsx)(XB,{onChange:e=>y(e),children:(0,W.jsx)(C,{})}),c&&(0,W.jsx)(YB,{disabled:f,onChange:e=>b(e)})]})]}):(0,W.jsxs)(UB,{bgColor:g.bgColor,border:g.border,children:[(0,W.jsx)(WB,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsxs)(GB,{onChange:e=>y(e),children:[(0,W.jsx)(C,{}),c&&(0,W.jsx)(YB,{onChange:e=>b(e)})]})]})},UB=U.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,WB=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,GB=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0px 20px 20px 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 100px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 2px;
  }

  label {
    margin-left: 8px;
  }
`,KB=U.div`
  padding-left: 5px;
`,qB=U.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 15px;
`,JB=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,YB=U.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 40px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,XB=U.div`
  margin-bottom: 5px;
`,ZB=e=>{let t=e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t.map(e=>{e.replace(/\s/g,``);let t={};return t.label=G(K(e)),t.value=e,t})},n=e.check,r=e.opts.id,i=G(K(e.opts.label))||``,a=e.opts.options.split(`;;;`)||[];a=a.map(e=>G(K(e.trim())));let o=G(K(e.opts.note))||``,s=!0;(o.length<1||o===``)&&(s=!1);let[c,l]=kb(r,[]),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`))||{};l(t);let r=(0,mA.default)(a);if(t.length!==0){let i=``;for(let e=0;e<t.length;e++){let n=t[e].value.trim(),a=r.indexOf(n);i+=e===0?a+1:`,`+(a+1)}n[`itemNum${e.opts.itemNum}`]=i}else e.opts.required===!0||e.opts.required===`true`?n[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:n[`itemNum${e.opts.itemNum}`]=`no response`;localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},p=!1;return c.length>0&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&n===!0&&p===!1?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[n,p,e.opts.required]),s?(0,W.jsxs)(QB,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)($B,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(eV,{id:`noteText`,children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsx)(dA,{className:`multiselect`,options:t(e.opts.options),labelledBy:`Select`,onChange:f,value:c})]}):(0,W.jsxs)(QB,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)($B,{children:(0,W.jsx)(`div`,{children:i})}),(0,W.jsx)(dA,{className:`multiselect`,options:t(e.opts.options),labelledBy:`Select`,onChange:f,value:c})]})},QB=U.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 125px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;

  .multiselect {
    font-size: 12px;
    line-height: 1.1em;
  }
`,$B=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,eV=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,tV=e=>{let t={},n=e=>{let n=(e||``).split(`;;;`);return n=n.filter(function(e){return e}),(n||[]).map(e=>t[e]=!1),n},r=e.check,i=n(e.opts.options),a=i.length,o=`question${e.opts.itemNum}`,s=e.opts.id,c=G(K(e.opts.label))||``,l=G(K(e.opts.note))||``,u=!0;(l.length<1||l===``)&&(u=!1);let d=e.opts.other;d=d===`true`||d===!0;let[f,p]=kb(s,Array(i.length).fill(!1)),[m,h]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),[g,_]=(0,S.useState)(`no input`),[v,y]=(0,S.useState)(!0),[b,x]=(0,S.useState)([]),C=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));t=parseInt(t,10),t===a-1?y(!1):y(!0);let r=f.map((e,n)=>n===t?!e:e);p(r);let i=r.reduce((e=``,t,n)=>t===!0?e+(n+1).toString()+`,`:e,``);i.charAt(i.length-1)===`,`&&(i=i.substr(0,i.length-1)),x(i);let o=i.split(`,`);+o[o.length-1]==+a&&d===!0?g===``?n[`itemNum${e.opts.itemNum}`]=`${i}-no input`:n[`itemNum${e.opts.itemNum}`]=`${i}-${g}`:n[`itemNum${e.opts.itemNum}`]=i,i===``&&(e.opts.required===!0||e.opts.required===`true`?n[`itemNum${e.opts.itemNum}`]=`no-*?*-response`:n[`itemNum${e.opts.itemNum}`]=`no response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},w=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`)),r=`no input`;if(t.target.value!==``){r=xl(t.target.value.trim());let i=`${b}-${r}`;n[`itemNum${e.opts.itemNum}`]=i}else{let t=`${b}-no input`;n[`itemNum${e.opts.itemNum}`]=t}_(()=>xl(t.target.value.trim())),localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},T=!1,E=(0,mA.default)([...f]);return((0,ZA.default)(E)[!0]||0)===0&&(T=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&r===!0&&T?h({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):h({bgColor:`whitesmoke`,border:`none`})},[r,T,e.opts.required]),u?(0,W.jsxs)(nV,{bgColor:m.bgColor,border:m.border,children:[(0,W.jsx)(rV,{children:(0,W.jsx)(`div`,{children:c})}),(0,W.jsx)(aV,{id:`noteText`,children:(0,W.jsx)(`div`,{children:l})}),(0,W.jsxs)(iV,{children:[i.map((e,t)=>(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`input`,{id:`${e}-${t}`,type:`checkbox`,value:e,name:o,checked:f[t],onChange:()=>C(t)}),(0,W.jsx)(`label`,{htmlFor:`${e}-${t}`,children:e})]},X())),d&&(0,W.jsx)(oV,{disabled:v,onChange:e=>w(e)})]})]}):(0,W.jsxs)(nV,{bgColor:m.bgColor,border:m.border,children:[(0,W.jsx)(rV,{children:(0,W.jsx)(`div`,{children:c})}),(0,W.jsxs)(iV,{children:[i.map((e,t)=>(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`input`,{id:`${e}-${t}`,type:`checkbox`,value:e,name:o,checked:f[t],onChange:()=>C(t)}),(0,W.jsx)(`label`,{htmlFor:`${e}-${t}`,children:e})]},X())),d&&(0,W.jsx)(oV,{disabled:v,onChange:e=>w(e)})]})]})},nV=U.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,rV=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,iV=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 120px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,aV=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,oV=U.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 40px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,sV=e=>{let t=e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t.length===0&&(t=[``,``]),t},n=t(e.opts.options),r=e.check,i=n.length,a=`itemNum${e.opts.itemNum}`,o=G(K(e.opts.label))||``,s=G(K(e.opts.note))||``,c=!0;(s.length<1||s===``)&&(c=!1);let[l,u]=kb(a,Array.from({length:i},()=>Array.from({length:2},()=>!1))),[d,f]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),p=t(e.opts.scale),m=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=l.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});u(a);let o=l.length,s=(0,mA.default)([...a]),c=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=e[0]?`1`:`2`;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,c!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},h=!1,g=l.length,_=(0,mA.default)([...l]);((0,ZA.default)(_)[!0]||0)<g&&(h=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&r===!0&&h?f({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):f({bgColor:`whitesmoke`,border:`none`})},[r,h,e.opts.required]);let v=()=>{let t=n.map((t,n)=>{let r=G(K(t))||``;return(0,W.jsxs)(dV,{indexVal:n,children:[(0,W.jsx)(hV,{children:r},X()),(0,W.jsx)(mV,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>m(n,0,e),checked:l[n][0]},X()),(0,W.jsx)(mV,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>m(n,1,e),checked:l[n][1]},X())]},X())});return(0,W.jsx)(`div`,{children:t})};return c?(0,W.jsxs)(cV,{bgColor:d.bgColor,border:d.border,children:[(0,W.jsx)(lV,{children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsx)(gV,{id:`noteText`,children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsxs)(uV,{children:[(0,W.jsxs)(fV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(pV,{children:(0,W.jsx)(`div`,{children:G(K(p[0]))})}),(0,W.jsx)(pV,{children:(0,W.jsx)(`div`,{children:G(K(p[1]))})})]}),(0,W.jsx)(v,{})]})]}):(0,W.jsxs)(cV,{bgColor:d.bgColor,border:d.border,children:[(0,W.jsx)(lV,{children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsxs)(uV,{children:[(0,W.jsxs)(fV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(pV,{children:(0,W.jsx)(`div`,{children:G(K(p[0]))})}),(0,W.jsx)(pV,{children:(0,W.jsx)(`div`,{children:G(K(p[1]))})})]}),(0,W.jsx)(v,{})]})]})},cV=U.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,lV=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,uV=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 30px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,dV=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 60px 60px 1fr;
  margin-bottom: 17px;
  padding-left: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  height: auto;
  align-items: end;
  justify-items: left;
  // align-items: left;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,fV=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 60px 60px 1fr;
  margin-bottom: 7px;
  margin-right: 7px;
`,pV=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,mV=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  justify-items: center;
  align-items: center;
`,hV=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,gV=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,_V=e=>{let t=(e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t})(e.opts.options),n=t.length,r=`itemNum${e.opts.itemNum}`,i=e.check,a=G(K(e.opts.note))||``,o=!0;(a.length<1||a===``)&&(o=!1);let s=G(K(e.opts.label))||``,[c,l]=kb(r,Array.from({length:n},()=>Array.from({length:5},()=>!1))),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=c.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});l(a);let o=c.length,s=(0,mA.default)([...a]),u=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=a[t].indexOf(!0)+1;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,u!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1,m=c.length,h=(0,mA.default)([...c]);((0,ZA.default)(h)[!0]||0)<m&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&i===!0&&p?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[i,p,e.opts.required]);let g=()=>{let n=t.map((t,n)=>{let r=G(K(t));return(0,W.jsxs)(xV,{indexVal:n,children:[(0,W.jsx)(TV,{children:r},X()),(0,W.jsx)(CV,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,0,e),checked:c[n][0]},X()),(0,W.jsx)(CV,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,1,e),checked:c[n][1]},X()),(0,W.jsx)(CV,{id:`Q3-${n}`,type:`radio`,value:3,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,2,e),checked:c[n][2]},X()),(0,W.jsx)(CV,{id:`Q4-${n}`,type:`radio`,value:4,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,3,e),checked:c[n][3]},X()),(0,W.jsx)(CV,{id:`Q5-${n}`,type:`radio`,value:5,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,4,e),checked:c[n][4]},X())]},X())});return(0,W.jsx)(`div`,{children:n})};return o?(0,W.jsxs)(vV,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(yV,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsx)(EV,{id:`noteText`,children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(bV,{children:[(0,W.jsxs)(SV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(wV,{children:`1`}),(0,W.jsx)(wV,{children:`2`}),(0,W.jsx)(wV,{children:`3`}),(0,W.jsx)(wV,{children:`4`}),(0,W.jsx)(wV,{children:`5`})]}),(0,W.jsx)(g,{})]})]}):(0,W.jsxs)(vV,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(yV,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsxs)(bV,{children:[(0,W.jsxs)(SV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(wV,{children:`1`}),(0,W.jsx)(wV,{children:`2`}),(0,W.jsx)(wV,{children:`3`}),(0,W.jsx)(wV,{children:`4`}),(0,W.jsx)(wV,{children:`5`})]}),(0,W.jsx)(g,{})]})]})},vV=U.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,yV=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,bV=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,xV=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 30px 30px 30px 30px 30px 1fr;
  margin-bottom: 17px;
  padding-bottom: 8px;
  padding-top: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  font-size: 12px;
  height: auto;
  align-items: end;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,SV=U.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 30px 30px 30px 30px 30px 1fr;
  margin-bottom: 7px;
  margin-right: 4px;
  align-items: end;
`,CV=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,wV=U.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,TV=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,EV=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,DV=e=>{let t=(e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t})(e.opts.options),n=t.length,r=`itemNum${e.opts.itemNum}`,i=e.check,a=G(K(e.opts.note))||``,o=!0;(a.length<1||a===``)&&(o=!1);let s=G(K(e.opts.label))||``,[c,l]=kb(r,Array.from({length:n},()=>Array.from({length:7},()=>!1))),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=c.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});l(a);let o=c.length,s=(0,mA.default)([...a]),u=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=a[t].indexOf(!0)+1;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,u!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1,m=c.length,h=(0,mA.default)([...c]);((0,ZA.default)(h)[!0]||0)<m&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&i===!0&&p?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[i,p,e.opts.required]);let g=()=>{let n=t.map((t,n)=>{let r=G(K(t));return(0,W.jsxs)(jV,{indexVal:n,children:[(0,W.jsx)(FV,{children:r},X()),(0,W.jsx)(NV,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,0,e),checked:c[n][0]},X()),(0,W.jsx)(NV,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,1,e),checked:c[n][1]},X()),(0,W.jsx)(NV,{id:`Q3-${n}`,type:`radio`,value:3,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,2,e),checked:c[n][2]},X()),(0,W.jsx)(NV,{id:`Q4-${n}`,type:`radio`,value:4,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,3,e),checked:c[n][3]},X()),(0,W.jsx)(NV,{id:`Q5-${n}`,type:`radio`,value:5,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,4,e),checked:c[n][4]},X()),(0,W.jsx)(NV,{id:`Q6-${n}`,type:`radio`,value:6,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,5,e),checked:c[n][5]},X()),(0,W.jsx)(NV,{id:`Q7-${n}`,type:`radio`,value:7,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,6,e),checked:c[n][6]},X())]},X())});return(0,W.jsx)(`div`,{children:n})};return o?(0,W.jsxs)(OV,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(kV,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsx)(IV,{id:`noteText`,children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(AV,{children:[(0,W.jsxs)(MV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(PV,{children:`1`}),(0,W.jsx)(PV,{children:`2`}),(0,W.jsx)(PV,{children:`3`}),(0,W.jsx)(PV,{children:`4`}),(0,W.jsx)(PV,{children:`5`}),(0,W.jsx)(PV,{children:`6`}),(0,W.jsx)(PV,{children:`7`})]}),(0,W.jsx)(g,{})]})]}):(0,W.jsxs)(OV,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(kV,{children:(0,W.jsx)(`div`,{children:s})}),(0,W.jsxs)(AV,{children:[(0,W.jsxs)(MV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(PV,{children:`1`}),(0,W.jsx)(PV,{children:`2`}),(0,W.jsx)(PV,{children:`3`}),(0,W.jsx)(PV,{children:`4`}),(0,W.jsx)(PV,{children:`5`}),(0,W.jsx)(PV,{children:`6`}),(0,W.jsx)(PV,{children:`7`})]}),(0,W.jsx)(g,{})]})]})},OV=U.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,kV=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,AV=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,jV=U.div`
  display: inline-grid;
  grid-template-columns:
    minmax(30%, 1000px)
    24px 24px 24px 24px 24px 24px 24px 1fr;
  margin-bottom: 17px;
  padding-bottom: 8px;
  padding-top: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  font-size: 12px;
  height: auto;
  align-items: end;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,MV=U.div`
  display: inline-grid;
  grid-template-columns:
    minmax(30%, 1000px)
    24px 24px 24px 24px 24px 24px 24px 1fr;
  margin-bottom: 7px;
  margin-right: 4px;
  align-items: end;
`,NV=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,PV=U.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,FV=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,IV=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,LV=e=>{let t=(e=>{let t=e.split(`;;;`);return t=t.filter(function(e){return e}),t})(e.opts.options),n=t.length,r=`itemNum${e.opts.itemNum}`,i=e.check,a=G(K(e.opts.label))||``,o=G(K(e.opts.note))||``,s=!0;(o.length<1||o===``)&&(s=!1);let[c,l]=kb(r,Array.from({length:n},()=>Array.from({length:10},()=>!1))),[u,d]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),f=(t,n)=>{let r=JSON.parse(localStorage.getItem(`resultsSurvey`)),i=[],a=c.map(function(e,r){return t===r?(e.map(function(e,t){return n===t?(i.push(!0),null):(i.push(!1),null)}),i):e});l(a);let o=c.length,s=(0,mA.default)([...a]),u=(0,ZA.default)(s)[!0]||0,d=``;a.forEach((e,t)=>{let n=a[t].indexOf(!0)+1;e.includes(!0)||(n=`nr`),d+=t===0?n:`,`+n}),r[`itemNum${e.opts.itemNum}`]=d,u!==o&&(e.opts.required===!0||e.opts.required===`true`)&&(r[`itemNum${e.opts.itemNum}`]=`no-*?*-response`),localStorage.setItem(`resultsSurvey`,JSON.stringify(r))},p=!1,m=c.length,h=(0,mA.default)([...c]);((0,ZA.default)(h)[!0]||0)<m&&(p=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&i===!0&&p?d({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):d({bgColor:`whitesmoke`,border:`none`})},[i,p,e.opts.required]);let g=()=>{let n=t.map((t,n)=>{let r=G(K(t));return(0,W.jsxs)(VV,{indexVal:n,children:[(0,W.jsx)(GV,{children:r},X()),(0,W.jsx)(WV,{id:`Q-${n}`,type:`radio`,value:1,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,0,e),checked:c[n][0]},X()),(0,W.jsx)(WV,{id:`Q2-${n}`,type:`radio`,value:2,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,1,e),checked:c[n][1]},X()),(0,W.jsx)(WV,{id:`Q3-${n}`,type:`radio`,value:3,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,2,e),checked:c[n][2]},X()),(0,W.jsx)(WV,{id:`Q4-${n}`,type:`radio`,value:4,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,3,e),checked:c[n][3]},X()),(0,W.jsx)(WV,{id:`Q5-${n}`,type:`radio`,value:5,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,4,e),checked:c[n][4]},X()),(0,W.jsx)(WV,{id:`Q6-${n}`,type:`radio`,value:6,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,5,e),checked:c[n][5]},X()),(0,W.jsx)(WV,{id:`Q7-${n}`,type:`radio`,value:7,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,6,e),checked:c[n][6]},X()),(0,W.jsx)(WV,{id:`Q8-${n}`,type:`radio`,value:8,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,7,e),checked:c[n][7]},X()),(0,W.jsx)(WV,{id:`Q9-${n}`,type:`radio`,value:9,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,8,e),checked:c[n][8]},X()),(0,W.jsx)(WV,{id:`Q10-${n}`,type:`radio`,value:10,name:`itemNum${e.opts.itemNum}-${n+1}`,onChange:e=>f(n,9,e),checked:c[n][9]},X())]},X())});return(0,W.jsx)(`div`,{children:n})};return s?(0,W.jsxs)(RV,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(zV,{children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsx)(KV,{id:`noteText`,children:(0,W.jsx)(`div`,{children:o})}),(0,W.jsxs)(BV,{children:[(0,W.jsxs)(HV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(UV,{children:`1`}),(0,W.jsx)(UV,{children:`2`}),(0,W.jsx)(UV,{children:`3`}),(0,W.jsx)(UV,{children:`4`}),(0,W.jsx)(UV,{children:`5`}),(0,W.jsx)(UV,{children:`6`}),(0,W.jsx)(UV,{children:`7`}),(0,W.jsx)(UV,{children:`8`}),(0,W.jsx)(UV,{children:`9`}),(0,W.jsx)(UV,{children:`10`})]}),(0,W.jsx)(g,{})]})]}):(0,W.jsxs)(RV,{bgColor:u.bgColor,border:u.border,children:[(0,W.jsx)(zV,{children:(0,W.jsx)(`div`,{children:a})}),(0,W.jsxs)(BV,{children:[(0,W.jsxs)(HV,{children:[(0,W.jsx)(`div`,{}),(0,W.jsx)(UV,{children:`1`}),(0,W.jsx)(UV,{children:`2`}),(0,W.jsx)(UV,{children:`3`}),(0,W.jsx)(UV,{children:`4`}),(0,W.jsx)(UV,{children:`5`}),(0,W.jsx)(UV,{children:`6`}),(0,W.jsx)(UV,{children:`7`}),(0,W.jsx)(UV,{children:`8`}),(0,W.jsx)(UV,{children:`9`}),(0,W.jsx)(UV,{children:`10`})]}),(0,W.jsx)(g,{})]})]})},RV=U.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,zV=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,BV=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,VV=U.div`
  display: inline-grid;
  grid-template-columns:
    minmax(30%, 1000px)
    14px 14px 14px 14px 14px 14px 14px 14px 14px 14px 1fr;
  margin-bottom: 17px;
  font-size: 9.5px;
  align-items: end;
  padding-bottom: 8px;
  padding-top: 8px;
  height: auto;
  background-color: ${e=>e.indexVal%2?`white`:`#ececec`};
  border-radius: 3px;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
  span {
    font-size: 12px;
  }
`,HV=U.div`
  display: inline-grid;
  grid-template-columns:
    minmax(30%, 1000px)
    14px 14px 14px 14px 14px 14px 14px 14px 14px 14px 1fr;
  margin-bottom: 7px;
  margin-right: 6px;
  align-items: end;
  font-size: 11px;
`,UV=U.div`
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: center;
  font-size: 8px;
`,WV=U.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  padding-left: 3px;
`,GV=U.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,KV=U.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,qV=e=>{let t=e.check,n=`itemNum${e.opts.itemNum}`,r=G(K(e.opts.label))||``,[i,a]=kb(n,``),[o,s]=(0,S.useState)({bgColor:`whitesmoke`,border:`none`}),c=(e=>e.split(`;;;`))(e.opts.scale),l=t=>{let n=JSON.parse(localStorage.getItem(`resultsSurvey`));n[`itemNum${e.opts.itemNum}`]=+t.target.value+1,localStorage.setItem(`resultsSurvey`,JSON.stringify(n))},u=!1;i.length===0&&(u=!0),(0,S.useEffect)(()=>{(e.opts.required===!0||e.opts.required===`true`)&&t===!0&&u?s({bgColor:`rgba(253, 224, 71, .5)`,border:`3px dashed black`}):s({bgColor:`whitesmoke`,border:`none`})},[t,u,e.opts.required]);let d=c.map(e=>(0,W.jsx)($V,{children:(0,W.jsx)(`div`,{children:G(K(e))})},X())),f=({value:e,checked:t,setter:n})=>(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(`input`,{type:`radio`,checked:t===e,onChange:()=>n(e),value:e})});return(0,W.jsxs)(JV,{bgColor:o.bgColor,border:o.border,children:[(0,W.jsx)(YV,{children:(0,W.jsx)(`div`,{children:r})}),(0,W.jsxs)(XV,{className:`radioContainer`,children:[(0,W.jsx)(QV,{className:`ratingTitle`,cols:c.length,children:d}),(0,W.jsx)(()=>{let e=c.map((e,t)=>(0,W.jsx)(eH,{className:`radioButtons`,onChange:e=>l(e),children:(0,W.jsx)(f,{className:`radioInput`,value:t,checked:i,setter:a})},X()));return(0,W.jsx)(ZV,{className:`buttonContainer`,cols:c.length,children:e})},{})]})]})},JV=U.div`
  width: 90%;
  padding: 12px 20px 0px 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 170px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,YV=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,XV=U.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 10px 20px 0px 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  label {
    margin-left: 8px;
  }
`,ZV=U.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
  margin-bottom: 3px;
  justify-items: center;
  align-items: center;
`,QV=U.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
`,$V=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,eH=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-bottom: 5px;
  padding: 5px;
  width: 25px;
  input {
    height: 1.5em;
    width: 20px;
  }
`,tH=e=>{(0,S.useEffect)(()=>{let t=JSON.parse(localStorage.getItem(`resultsSurvey`));t[`itemNum${e.opts.itemNum}`]=`info. - na`},[e.opts.itemNum]);let t=G(K(e.opts.options))||``;return(0,W.jsx)(nH,{children:(0,W.jsx)(rH,{backgroundColor:e.opts.background,children:(0,W.jsx)(`div`,{children:t})})})},nH=U.div`
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 1300px;
  background-color: whitesmoke;
  min-height: 50px;
  margin-bottom: 20px;
  color: ${e=>e.theme.mobileText};
`,rH=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 50px;
  font-size: 14px;
  text-align: center;
  background-color: ${e=>e.backgroundColor||`lightgray`};
  width: 100%;
  border-radius: 3px;
`,iH=e=>e.setCurrentPage,aH=e=>e.setProgressScore,oH=e=>e.langObj,sH=e=>e.configObj,cH=e=>e.surveyQuestionObjArray,lH=e=>e.requiredAnswersObj,uH=e=>e.setRequiredAnswersObj,dH=e=>e.checkRequiredQuestionsComplete,fH=e=>e.setTriggerMobileSurveyHelpModal,pH=e=>e.mobileSurveyViewSize,mH=e=>e.triggerMobileSurveyHelpModal,hH=e=>e.setTriggerMobileSurveyHelpModal,gH=e=>e.triggerSurveyPreventNavModal,_H=e=>e.setTriggerSurveyPreventNavModal,vH=()=>{let e=J(iH),t=J(aH),n=q(sH),r=q(oH),i=q(lH),a=q(cH),o=q(uH),s=J(dH),c=J(fH),l=J(pH),u=J(mH),d=J(hH),f=J(gH),p=J(_H),m=n.headerBarColor,h=a,g=G(K(r.surveyHeader))||``,_=G(K(r.screenOrientationText))||``,v=G(K(r.expandViewMessage))||``,y=G(K(r.mobileSurveyHelpModalHead))||``,b=G(K(r.mobileSurveyHelpModalText))||``,x=G(K(r.surveyPreventNavModalHead))||``,C=G(K(r.surveyPreventNavModalText))||``,w=JSON.parse(localStorage.getItem(`m_ViewSizeObject`)).survey,T=fc();(0,S.useEffect)(()=>{let e=Object.keys(i);for(let t=0;t<e.length;t++)i[e[t]]=`no response`;o(i)},[o,i]);let E=(0,S.useRef)(null);return(0,S.useEffect)(()=>(E.current=Date.now(),(async()=>{await e(`survey`),localStorage.setItem(`currentPage`,`survey`),await t(20)})(),()=>{ar(E.current,`surveyPage`,`surveyPage`)}),[e,t]),T===`landscape-primary`?(0,W.jsx)(CH,{children:(0,W.jsx)(`h1`,{children:_})}):(0,W.jsxs)(TH,{children:[(0,W.jsxs)(bH,{background:m,children:[g,(0,W.jsx)(SH,{onClick:()=>{c(!0)},children:(0,W.jsx)(RL,{})})]}),(0,W.jsx)(pL,{trigger:f,setTrigger:p,head:x,text:C,showArrow:!1,height:`150px`}),(0,W.jsx)(pL,{trigger:u,setTrigger:d,head:y,text:b,showArrow:!1,height:`250px`}),(0,W.jsx)(xH,{viewSize:l===+w?l:w,children:(0,W.jsx)(()=>h?(h||[]).map(e=>e.type===`text`?(0,W.jsx)(MB,{check:s,opts:e},X()):e.type===`textarea`?(0,W.jsx)(LB,{check:s,opts:e},X()):e.type===`radio`?(0,W.jsx)(HB,{check:s,opts:e},X()):e.type===`checkbox`?(0,W.jsx)(tV,{check:s,opts:e},X()):e.type===`select`?(0,W.jsx)(ZB,{check:s,opts:e},X()):e.type===`likert`?(0,W.jsx)(qV,{check:s,opts:e},X()):e.type===`rating2`?(0,W.jsx)(sV,{check:s,opts:e},X()):e.type===`rating5`?(0,W.jsx)(_V,{check:s,opts:e},X()):e.type===`rating7`?(0,W.jsx)(DV,{check:s,opts:e},X()):e.type===`rating10`?(0,W.jsx)(LV,{check:s,opts:e},X()):e.type===`information`?(0,W.jsx)(tH,{opts:e},X()):null):(0,W.jsx)(yH,{children:`No questions added.`}),{})}),(0,W.jsx)(wH,{children:v})]})},yH=U.div`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`,bH=U.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,xH=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  padding-bottom: 20px;
  width: 98%;
  /* height: 80vh; */
  height: ${e=>`${e.viewSize}vh`};

  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: ${e=>e.theme.mobileText};
`,SH=U.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,CH=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${e=>e.theme.mobileText};
`,wH=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,TH=U.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
  /* justify-content: center; */
  align-items: center;
`,EH=(e,t)=>{let n,r=(...r)=>{n&&clearTimeout(n),n=setTimeout(()=>{n=null,e(...r)},t)};return r.cancel=()=>{n&&=(clearTimeout(n),null)},r},DH=({onChange:e,delay:t=50,statementId:n,sortValue:r,commentId:i,side:a,minWordCountNumber:o,highlight:s,highlightObject:c,required:l,placeholder:u,id:d,...f})=>{let[p,m]=kb(d,``),h=(0,S.useRef)(e);(0,S.useEffect)(()=>{h.current=e},[e]);let g=(0,S.useRef)(null);return g.current===null&&(g.current=EH((...e)=>{h.current(...e)},t)),(0,S.useEffect)(()=>()=>{g.current.cancel()},[]),(0,S.useEffect)(()=>{g.current({target:{value:p,statementId:n,minWordCountNumber:o,highlight:s,id:d,sortValue:r,commentId:i,side:a}})},[p]),(0,W.jsx)(OH,{value:p,placeholder:u,"data-id":n,onChange:e=>{m(e.target.value)},minWordCountNumber:o,highlighting:s,highlightObject:c,required:l,statementId:n,...f})},OH=U.textarea.withConfig({shouldForwardProp:e=>![`minWordCountNumber`,`highlighting`,`highlightObject`,`statementId`].includes(e)})`
  box-sizing: border-box;
  padding: 5px;
  min-height: 12vh;
  width: 80vw;
  outline: 1px solid #36454f;
  border: none;
  color: ${e=>e.theme.mobileText};
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${e=>e.highlightObject[e.statementId]===!0?`whitesmoke`:e.required&&e.highlighting?`rgba(253, 224, 71, .5)`:`whitesmoke`};
`,kH=e=>e.setCurrentPage,AH=e=>e.setProgressScore,jH=e=>e.langObj,MH=e=>e.configObj,NH=e=>e.mapObj,PH=e=>e.mobilePostsortFontSize,FH=e=>e.mobilePostsortViewSize,IH=e=>e.showPostsortCommentHighlighting,LH=e=>e.setTriggerMobilePostsortHelpModal,RH=e=>e.triggerMobilePostsortHelpModal,zH=e=>e.setTriggerMobilePostsortHelpModal,BH=e=>e.triggerMobilePostsortPreventNavModal,VH=e=>e.setTriggerMobilePostsortPreventNavModal,HH=()=>{let e=J(kH),t=J(AH),n=q(jH),r=q(NH),i=q(MH),a=J(PH),o=i.postsortCommentsRequired,s=J(IH),c=J(LH),l=J(RH),u=J(zH),d=J(BH),f=J(VH),p=G(K(n.mobilePostsortSortbarText))||``,m=G(K(n.postsortAgreement))||``,h=G(K(n.postsortDisagreement))||``,g=n.placeholder,_=G(K(n.screenOrientationText))||``,v=G(K(n.expandViewMessage))||``,y=G(K(n.mobilePostsortHelpModalHead))||``,b=G(K(n.mobilePostsortHelpModalText))||``,x=G(K(n.mobilePostsortPreventNavModalHead))||``,C=G(K(n.mobilePostsortPreventNavModalText))||``,w=Cz(r),T=(0,S.useMemo)(()=>[...r.qSortHeaderNumbers],[r]),E=(0,S.useMemo)(()=>[...w.displayArray],[w]),{posEmojiArray:D,negEmojiArray:O,posNumValues:k,negNumValues:A}=(0,S.useMemo)(()=>{let e=[],t=[],n=[],a=[],o=[...r.qSortPattern],s=i.showSecondPosColumn,c=i.showSecondNegColumn,l=o[0],u=o[o.length-1],d=o[1],f=o[o.length-2],p=E[E.length-1],m=E[E.length-2],h=E[0],g=E[1];for(let t=0;t<l;t++)e.push(p),n.push(T[T.length-1].toString());for(let e=0;e<u;e++)t.push(h),a.push(T[0].toString());if(s===!0||s===`true`)for(let t=0;t<d;t++)e.push(m),n.push(T[T.length-2].toString());if(c===!0||c===`true`)for(let e=0;e<f;e++)t.unshift(g),a.unshift(T[1].toString());return{posEmojiArray:e,negEmojiArray:t,posNumValues:n,negNumValues:a}},[r,i,E,T]),j=i.minWordCountValuePostsort||0,M=i.requireMinCommentLength||!1,N;N=M?j:1.5;let P,F=r.useColLabelNumsPostsort[0];(F!==void 0||F!==null)&&(P=F!==!1&&F!==`false`);let ee,I=r.useColLabelTextPostsort[0];(I!==void 0||I!==null)&&(ee=I!==!1&&I!==`false`);let L,R=r.useColLabelEmojiPostsort[0];(R!==void 0||R!==null)&&(L=R!==!1&&R!==`false`);let z=(0,S.useMemo)(()=>{let e={},t=[...JSON.parse(localStorage.getItem(`m_SortArray1`))||[]],n=JSON.parse(localStorage.getItem(`m_SortCharacteristicsArray`)),a=i.showSecondPosColumn,o=i.showSecondNegColumn,s=[...r.qSortPattern],c=s[0],l=s[s.length-1],u=s[1],d=s[s.length-2];(a===!0||a===`true`)&&(c=+c+ +u),(o===!0||o===`true`)&&(l=+l+ +d);let f=t.slice(0,c),p=t.slice(-l),m=n.slice(-l),h={},g={};return f.forEach((e,t)=>{e.sortValue=n[t].value,e.header=n[t].header,e.color=n[t].color,h[e.id]=``}),p.forEach((e,t)=>{e.sortValue=m[t].value,e.header=m[t].header,e.color=m[t].color,g[e.id]=``}),localStorage.setItem(`m_PostSortResultsObj`,JSON.stringify(e)),[f,p,h,g]},[r.qSortPattern,i]),B=JSON.parse(localStorage.getItem(`m_FontSizeObject`)).postsort,V=JSON.parse(localStorage.getItem(`m_ViewSizeObject`)).postsort,H=J(FH),[te,ne]=kb(`m_PosRequiredStatesObj`,z[2]),[re,ie]=kb(`m_NegRequiredStatesObj`,z[3]),[ae,oe]=kb(`m_MinWordCountPostsortObject`,{}),se=fc(),ce=(0,S.useRef)(null);(0,S.useEffect)(()=>(ce.current=Date.now(),(async()=>{await e(`postsort`),localStorage.setItem(`currentPage`,`postsort`),await t(20)})(),()=>{ar(ce.current,`postsortPage`,`postsortPage`)}),[e,t]);let le=()=>{c(!0)},ue=e=>{let t=JSON.parse(localStorage.getItem(`m_PostSortResultsObj`)),n=JSON.parse(localStorage.getItem(`resultsPostsort`))||{};n??={};let r=xl(e.target.value),i=yl(r).totalWords,a=e.target.sortValue.replace(`+`,``).replace(`-`,`N`);e.target.side===`positive`&&(t[`column${a}:(${e.target.commentId})`]=r,te[e.target.statementId]=r,ne(te),o&&i<N?(ae[e.target.statementId]=!1,oe(ae)):(ae[e.target.statementId]=!0,oe(ae))),e.target.side===`negative`&&(t[`column${a}:(${e.target.commentId})`]=r,re[e.target.statementId]=r,ie(re),o&&i<N?(ae[e.target.statementId]=!1,oe(ae)):(ae[e.target.statementId]=!0,oe(ae))),localStorage.setItem(`m_PostSortResultsObj`,JSON.stringify(t)),localStorage.setItem(`resultsPostsort`,JSON.stringify(t))};if(se===`landscape-primary`)return(0,W.jsx)(JH,{children:(0,W.jsx)(`h1`,{children:_})});let de=z[0].map((e,t)=>(0,W.jsxs)(`div`,{children:[(0,W.jsxs)(KH,{fontSize:`2`,color:e.color,card:e,index:t,sortValue:e.sortValue,commentId:e.id,agree:m,disagree:h,children:[(0,W.jsxs)(ZH,{children:[L&&(0,W.jsx)($H,{children:D[t]}),(0,W.jsxs)(tU,{children:[P&&(0,W.jsx)(QH,{children:`+`+k[t]}),ee&&(0,W.jsx)(eU,{children:e.header})]}),L&&(0,W.jsx)($H,{children:D[t]})]}),(0,W.jsx)(XH,{children:e.statement})]}),(0,W.jsx)(DH,{delay:500,id:`m_PostsortComment(${e.id})`,placeholder:g,required:o,index:t,commentId:e.id,sortValue:e.sortValue,onChange:ue,statementId:e.id,side:`positive`,minWordCountNumber:N,highlight:s,highlightObject:ae})]},X())),fe=z[1].map((e,t)=>(0,W.jsxs)(`div`,{children:[(0,W.jsxs)(KH,{card:e,color:e.color,index:t,agree:m,commentId:e.id,sortValue:e.sortValue,disagree:h,children:[(0,W.jsxs)(ZH,{children:[L&&(0,W.jsx)($H,{children:O[t]}),(0,W.jsxs)(tU,{children:[P&&(0,W.jsx)(QH,{children:A[t]}),ee&&(0,W.jsx)(eU,{children:e.header})]}),L&&(0,W.jsx)($H,{children:O[t]})]}),(0,W.jsx)(XH,{children:e.statement})]}),(0,W.jsx)(DH,{onChange:ue,delay:500,id:`m_PostsortComment(${e.id})`,placeholder:g,index:t,required:o,sortValue:e.sortValue,commentId:e.id,side:`negative`,statementId:e.id,minWordCountNumber:N,highlight:s,highlightObject:ae})]},X()));return(0,W.jsxs)(qH,{children:[(0,W.jsxs)(UH,{background:i.headerBarColor,children:[p,(0,W.jsx)(WH,{onClick:le,children:(0,W.jsx)(RL,{})})]}),(0,W.jsx)(pL,{head:x,text:C,trigger:d,setTrigger:f,showArrow:!1,height:`150px`}),(0,W.jsx)(pL,{head:y,text:b,trigger:l,setTrigger:u,showArrow:!1,height:`150px`}),(0,W.jsxs)(GH,{viewSize:H===+V?H:V,fontSize:a===+B?a:B,children:[de,fe]}),(0,W.jsx)(YH,{children:v})]})},UH=U.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,WH=U.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,GH=U.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  font-size: ${e=>`${e.fontSize}vh`};
  color: ${e=>e.theme.mobileText};
  background-color: #e5e5e5;
  width: 90vw;
  height: ${e=>`${e.viewSize}vh`};
  align-items: center;
  border-radius: 3px;
  text-align: center;
  overflow-x: none;
  overflow-y: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border: 1px solid black;
`,KH=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  box-sizing: border-box;
  background-color: ${e=>e.color};
  width: 80vw;
  min-height: 8vh;
  /* font-size: ${e=>`${e.fontSize}vh`}; */
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  text-align: center;
  outline: 1px solid black;
  padding: 5px;
`,qH=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,JH=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};
  width: 100vw;
  height: 100vh;
`,YH=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,XH=U.div`
  background-color: lightgray;
  border-radius: 3px;
  padding: 5px;
  outline: 1px solid darkgray;
`,ZH=U.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
`,QH=U.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,$H=U.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,eU=U.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 4vw;
  text-align: center;
  line-height: 0.8rem;
`,tU=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`,nU=e=>e.langObj,rU=e=>e.configObj,iU=e=>e.setDisableRefreshCheck,aU=e=>{let t=q(nU),n=q(rU),r=J(iU),i=G(K(t.defaultEmailClientFail))||``,a=G(K(t.submitFailMessage))||``,o=G(K(t.submitFailMessage2))||``,s=G(K(t.submitFailMessage3))||``,c=G(K(t.unableToConnect))||``,[l,u]=(0,S.useState)(a),d=e.results;n.emailAddress;let f=G(K(t.btnTransferEmail))||``,p=t=>{t.preventDefault();let n=Object.entries(e.results).map(([e,t])=>`${e}: ${t}`).join(`
`),r=new Blob([n],{type:`text/plain`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`my_Q-sort_results.txt`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},m=t=>{t.preventDefault(),u(i);let r=``;for(let[t,n]of Object.entries(e.results))r+=`${t}:| ${n} | `;console.log(JSON.stringify(r,null,2)),navigator.userAgent.toLowerCase().indexOf(`chrome`)>-1?window.open(`mailto:${n.emailAddress}?subject=${n.emailSubjectLine}`):window.location.href=`mailto:${n.emailAddress}?subject=${n.emailSubjectLine}`};return(0,S.useEffect)(()=>{r(!0)},[r]),(0,W.jsxs)(uU,{children:[(0,W.jsx)(sU,{children:c}),(0,W.jsx)(cU,{children:o}),(0,W.jsx)(BO,{type:`results`,content:d,text:t.clipboardResults}),l,(0,W.jsx)(oU,{tabindex:`0`,onClick:e=>m(e),children:f}),(0,W.jsx)(cU,{children:s}),(0,W.jsx)(lU,{onClick:e=>p(e),children:t.downloadResultsButtonText})]})},oU=U.button`
  display: flex;
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,sU=U.div`
  text-align: center;
  width: 70%;
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 65vw;
  font-size: 1.35em;
  align-self: center;
`;var cU=U.div`
  margin-top: 10px;
  text-align: center;
  width: 70%;
`,lU=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: ${({theme:e})=>e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
`,uU=U.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4em;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`;var dU=e=>e.langObj,fU=e=>e.transmittingData,pU=e=>e.setTransmittingData,mU=e=>e.checkInternetConnection,hU=e=>e.setCheckInternetConnection,gU=e=>e.configObj,_U=e=>e.setDisplayGoodbyeMessage,vU=e=>e.setDisplayBelowButtonText,yU=e=>{let t=q(dU),n=J(fU),r=J(pU),i=J(mU),a=J(hU),o=q(gU),s=J(_U),c=G(K(t.checkInternetMessage))||``,l=J(vU),u=G(K(t.btnTransfer))||``,[d,f]=(0,S.useState)(0),p=(0,S.useRef)(null),m=(0,S.useRef)(null);(0,S.useEffect)(()=>()=>{p.current&&clearTimeout(p.current),m.current&&clearTimeout(m.current)},[]),(0,S.useEffect)(()=>{d>1&&a(!1)},[d,a]);let h=t=>{t.preventDefault(),l(!0),r(!0),a(!1);let n=setTimeout(()=>{r(!1),a(!0),l(!1)},1e4),i=o.baserowToken,c=o.baserowDatabaseIdNumber;if(i==null){console.log(`Baserow token is not set`);return}if(c==null){console.log(`Baserow database id is not set`);return}RO({method:`POST`,url:`https://api.baserow.io/api/database/rows/table/${c}/?user_field_names=true`,headers:{Authorization:`Token ${i}`,"Content-Type":`application/json`},data:e.results}).then(()=>{clearTimeout(p.current),r(!1),a(!1),s(!0)}).catch(t=>{console.log(t),clearTimeout(n),r(!1),a(!0),l(!1),f(e=>e+1),d+1>=2&&(console.log(`Baserow submission failed twice, showing fallback`),e.setShowText(!1))})};return(0,W.jsxs)(S.Fragment,{children:[(0,W.jsx)(td,{}),n?(0,W.jsx)(xU,{}):d<2?(0,W.jsx)(bU,{tabIndex:`0`,disabled:n,onClick:e=>h(e),children:u}):null,i&&(0,W.jsx)(SU,{children:c}),d>1&&(0,W.jsx)(CU,{children:(0,W.jsx)(aU,{results:e.results})})]})},bU=U.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,xU=U.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #337ab7;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`,SU=U.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 0.9em;
  text-align: center;
  background-color: #ffc067;
  padding: 5px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-weight: bold;
`,CU=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 0.8em;
  text-align: center;
  background-color: #ffc067;
  margin-bottom: 30px;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
`,wU=(e,t)=>{let n=``,r=``;return e.forEach((e,n)=>{e.sortValue=t[n].value.replace(`+`,``),e.number=+e.statementNum}),e.sort((e,t)=>e.number-t.number),e.forEach(e=>{e.psValue>0&&(e.presortVal=`p`),e.psValue===0&&(e.presortVal=`u`),e.psValue<0&&(e.presortVal=`n`),n+=`${e.sortValue}|`,r+=`${e.statementNum}*${e.presortVal}*${e.sortValue}|`}),n.charAt(n.length-1)===`|`&&(n=n.substring(0,n.length-1)),r.charAt(r.length-1)===`|`&&(r=r.substring(0,r.length-1)),{r20:`sort: ${n}`,r21:`presortTrace: ${r}`}},TU=e=>{let t=0,n=0,r=0,i=``,a=``,o=``;return e.forEach(e=>{e.psValue>0?(t++,i+=e.statementNum+`,`):e.psValue<0?(n++,a+=e.statementNum+`,`):(r++,o+=e.statementNum+`,`)}),{npos:t,nneg:n,nneu:r,posStateNums:i.slice(0,-1),negStateNums:a.slice(0,-1),neuStateNums:o.slice(0,-1)}},EU=e=>e.setCurrentPage,DU=e=>e.setProgressScore,OU=e=>e.langObj,kU=e=>e.configObj,AU=e=>e.displayGoodbyeMessage,jU=()=>{let e=J(EU),t=J(DU),n=q(OU),r=q(kU),i=rr(),a=JSON.parse(localStorage.getItem(`m_SortArray1`)),o=J(AU),[s,c]=(0,S.useState)(!0),[l,u]=(0,S.useState)({consent:`00:00:00`,landing:`00:00:00`,presort:`00:00:00`,thinning:`00:00:00`,sort:`00:00:00`,postsort:`00:00:00`,survey:`00:00:00`});(0,S.useEffect)(()=>{let e=(e,t=`00:00:00`)=>{let n=localStorage.getItem(e);return n===null?t:n},t={consent:e(`timeOnconsentPage`),landing:e(`timeOnlandingPage`),presort:e(`timeOnpresortPage`),thinning:e(`timeOnthinningPage`),sort:e(`timeOnsortPage`),postsort:e(`timeOnpostsortPage`),survey:e(`timeOnsurveyPage`)};(r.showConsentPage===!1||r.showConsentPage===`false`)&&(t.consent=`n/a`),(r.showPostsort===!1||r.showPostsort===`false`)&&(t.postsort=`n/a`),(r.showSurvey===!1||r.showSurvey===`false`)&&(t.survey=`n/a`),u(t)},[r]);let d=G(K(n.mobileSortTitleBar)),f=G(K(n.transferTextAbove))||``,p=G(K(n.transferTextBelow))||``,m=G(K(n.goodbyeMessage))||``,h=G(K(n.screenOrientationText))||``,g=JSON.parse(localStorage.getItem(`m_PresortResults`))||{},_=JSON.parse(localStorage.getItem(`columnStatements`))||{},v=JSON.parse(localStorage.getItem(`m_SortCharacteristicsArray`)),y=TU(g);localStorage.setItem(`resultsPresort`,JSON.stringify(y));let b=fc();(0,S.useEffect)(()=>{let n=Date.now();return(async()=>{await e(`submit`),localStorage.setItem(`currentPage`,`submit`),await t(20)})(),()=>{ar(n,`submitPage`,`submitPage`)}},[e,t]);let x={},C=JSON.parse(localStorage.getItem(`resultsSurvey`));C===void 0&&(C={});let w=localStorage.getItem(`randomId`)||X(),T=localStorage.getItem(`partId`)||`no part ID`,E=localStorage.getItem(`usercode`)||`no usercode set`,D=r.creationDate||`unknown date`;x.r1=r.studyTitle?`(projectName): ${r.studyTitle} - ${D}`:`(projectName): my Q study - ${D}`,x.r2=`(randomId): ${w}`,x.r3=`(partId): ${T}`,x.r4=`(urlUsercode): ${E}`,x.r5=`(dateTime): ${i}`,x.r6=`(desktop/mobile): mobile`,x.r7=`(timeOnConsentPage): ${l.consent}`,x.r8=`(timeOnWelcomePage): ${l.landing}`,x.r9=`(timeOnPresortPage): ${l.presort}`,x.r10=`(timeOnRefinePage): ${l.thinning}`,x.r11=`(timeOnSortPage): ${l.sort}`,x.r12=`(timeOnPostsortPage): ${l.postsort}`,x.r13=`(timeOnSurveyPage): ${l.survey}`;try{let e=fk();x={...x,...e}}catch(e){console.log(e),alert(`4: `+e.message)}let O=22;try{if(r.showPostsort){let e=JSON.parse(localStorage.getItem(`resultsPostsort`))||{},t=e=>{let t=e.match(/^column(N)?(\d+)_(\d+)$/);if(!t)return{colNum:0,idx:0};let[,n,r,i]=t;return{colNum:n?-Number(r):Number(r),idx:Number(i)}},n=Object.fromEntries(Object.entries(e).sort(([e],[n])=>{let r=t(e),i=t(n);return i.colNum===r.colNum?r.idx-i.idx:i.colNum-r.colNum})),r=Object.keys(n);for(let e=0;e<r.length;e++){if(r[e].substring(0,9)===`textArea-`)continue;let t=n[r[e]];t===``&&(t=` no response`),x[`r${O}`]=`${r[e]}: ${t}`,O++}}}catch(e){console.log(e),alert(`5: `+e.message)}try{if(r.showSurvey&&C!==void 0){let e=Object.keys(C);for(let t=0;t<e.length;t++)x[`r${O}`]=`${e[t]}: ${C[e[t]]}`,O++}}catch(e){console.log(e),alert(`6: `+e.message)}let k;try{Object.keys(_).length!==0&&_!==void 0&&Object.keys(y).length!==0&&y!==void 0&&(k=wU([...a],[...v]))}catch(e){console.log(e),alert(`7: `+e.message)}try{x={...x,...k}}catch(e){console.log(e),alert(`8: `+e.message)}return console.log(JSON.stringify(x,null,2)),b===`landscape-primary`?(0,W.jsx)(RU,{children:(0,W.jsx)(`h1`,{children:h})}):o===!0?r.linkToSecondProject===!0?(0,W.jsxs)(LU,{children:[n.linkedProjectMessage,(0,W.jsx)(`a`,{id:`secondProjectLink`,href:`${r.secondProjectUrl}/#/?usercode=${r.urlUsercode}`,style:{targetNew:`tab`,textDecoration:`none`},children:(0,W.jsx)(BU,{children:n.linkedProjectBtnMessage})})]}):(0,W.jsx)(IU,{children:(0,W.jsx)(LU,{children:m})}):(0,W.jsxs)(zU,{children:[(0,W.jsx)(NU,{background:r.headerBarColor,children:d}),(0,W.jsxs)(MU,{children:[s&&(0,W.jsx)(PU,{children:f}),(0,W.jsx)(yU,{results:x,setShowText:c}),s&&(0,W.jsx)(FU,{children:p})]})]})},MU=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 96vw;
  margin-top: 10px;
  min-height: 80vh;
  user-select: none;
  background-color: #f3f4f6;
  color: ${e=>e.theme.mobileText};
`,NU=U.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,PU=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  font-size: 15px;
  padding: 25px;
  align-self: center;
`,FU=U.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  font-size: 14px;
  padding: 10px;
  align-self: center;
`,IU=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,LU=U.div`
  display: flex;
  justify-self: center;
  width: 80vw;
  height: calc(100vh - 50px);
  text-align: center;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${e=>e.theme.mobileText};
`,RU=U.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,zU=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 90vh; /* Set desired max height */
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;

  /* Optional: Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,BU=U.button`
  grid-area: b;
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: fit-content;
  height: 50px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,VU=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,HU=e=>{if(typeof e!=`string`)throw TypeError(`Invalid argument expected string`);let t=e.match(VU);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},UU=e=>e===`*`||e===`x`||e===`X`,WU=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},GU=(e,t)=>typeof e==typeof t?[e,t]:[String(e),String(t)],KU=(e,t)=>{if(UU(e)||UU(t))return 0;let[n,r]=GU(WU(e),WU(t));return n>r?1:n<r?-1:0},qU=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){let r=KU(e[n]||`0`,t[n]||`0`);if(r!==0)return r}return 0},JU=(e,t)=>{let n=HU(e),r=HU(t),i=n.pop(),a=r.pop(),o=qU(n,r);return o===0?i&&a?qU(i.split(`.`),a.split(`.`)):i||a?i?-1:1:0:o},YU=(e,t,n)=>{QU(n);let r=JU(e,t);return XU[n].includes(r)},XU={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},ZU=Object.keys(XU),QU=e=>{if(typeof e!=`string`)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(ZU.indexOf(e)===-1)throw Error(`Invalid operator, expected one of ${ZU.join(`|`)}`)},$U=(e,t)=>{if(t=t.replace(/([><=]+)\s+/g,`$1`),t.includes(`||`))return t.split(`||`).some(t=>$U(e,t));if(t.includes(` - `)){let[n,r]=t.split(` - `,2);return $U(e,`>=${n} <=${r}`)}if(t.includes(` `))return t.trim().replace(/\s{2,}/g,` `).split(` `).every(t=>$U(e,t));let n=t.match(/^([<>=~^]+)/),r=n?n[1]:`=`;if(r!==`^`&&r!==`~`)return YU(e,t,r);let[i,a,o,,s]=HU(e),[c,l,u,,d]=HU(t),f=[i,a,o],p=[c,l??`x`,u??`x`];if(d&&(!s||qU(f,p)!==0||qU(s.split(`.`),d.split(`.`))===-1))return!1;let m=p.findIndex(e=>e!==`0`)+1,h=r===`~`?2:m>1?m:1;return qU(f.slice(0,h),p.slice(0,h))===0&&qU(f.slice(h),p.slice(h))!==-1},eW=e=>e.langObj,tW=()=>{let e=q(eW);return(0,W.jsxs)(nW,{children:[(0,W.jsx)(`h1`,{children:e.preventMobileTitle}),(0,W.jsx)(`p`,{children:e.preventMobileMessage})]})},nW=U.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
`,rW=U.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  background-color: lightpink;
  border-color: #ffeaa7;
  color: black;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  position: sticky;
  top: 0;
  z-index: 10;
`,iW=U.button`
  background-color: white;
  border: none;
  color: black;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 0.25rem;
  &:hover {
    background-color: #ffd700;
  }
`,aW=({files:e,onDismiss:t})=>e.length===0?null:(0,W.jsxs)(rW,{role:`alert`,children:[(0,W.jsx)(`h1`,{children:`Setup Error!`}),(0,W.jsxs)(`p`,{children:[`The following settings file`,e.length>1?`s are`:` is`,` `,`out-of-date:`,(0,W.jsxs)(`b`,{children:[` `,e.map(e=>e.label).join(`, `),`. `]}),(0,W.jsx)(`br`,{}),(0,W.jsx)(`br`,{}),`Please re-import into the Quince Configurator to update to the latest version.`]}),(0,W.jsx)(iW,{onClick:t,children:`Dismiss`})]}),oW=e=>e.setConfigObj,sW=e=>e.setLangObj,cW=e=>e.setMapObj,lW=e=>e.setStatementsObj,uW=e=>e.setColumnStatements,dW=e=>e.setResetColumnStatements,fW=e=>e.setSurveyQuestionObjArray,pW=e=>e.setRequiredAnswersObj,mW=e=>e.setDataLoaded,hW=e=>e.configObj,gW=e=>e.langObj,_W=e=>e.mapObj;function vW(){let e=q(oW),t=q(sW),n=q(cW),r=q(lW),i=q(uW),a=q(dW),o=q(fW),s=q(pW),c=J(mW),l=q(hW),u=q(gW),d=q(_W),[f,p]=(0,S.useState)(!0),[m,h]=(0,S.useState)(null),[g,_]=(0,S.useState)([]),v=async e=>{try{return(await RO.get(e,{"Content-Type":`application/xml; charset=utf-8`})).data}catch(t){throw Error(`Failed to load ${e}: ${t.message}`)}};(0,S.useEffect)(()=>{(async()=>{try{let[l,u,d]=await Promise.all([v(`./settings/language.xml`),v(`./settings/config.xml`),v(`./settings/map.xml`)]),f=LN(gF.default.xml2js(l,{compact:!0,ignoreComment:!0,spaces:4}));t(f);let{shuffleCards:p,configObj:m,surveyQuestionObjArray:h,requiredAnswersObj:g}=FN(gF.default.xml2js(u,{compact:!1,ignoreComment:!0,spaces:2}));e(m),o(h),s(g);let _=[];if(m.useImages===!0){for(let e=0;e<m.numImages;e++)_.push({backgroundColor:`white`,element:(0,W.jsx)(`img`,{src:`/settings/images/image${e+1}.${m.imageFileType}`,alt:`image${e+1}`,className:`dragObject`}),cardColor:`yellowSortCard`,divColor:`isUncertainStatement`,pinkChecked:!1,yellowChecked:!0,greenChecked:!1,sortValue:222,id:`image${e+1}`,statement:`image${e+1}`,statementNum:`${e+1}`});m.shuffleCards===!0&&(_=(0,Kc.default)(_))}let{vColsObj:y,mapObj:b}=IN(gF.default.xml2js(d,{compact:!0,ignoreComment:!0,spaces:4}));n(b);let x=await v(`./settings/statements.xml`),S=RN(gF.default.xml2js(x,{compact:!0,ignoreComment:!0,spaces:4}),p,y);S.columnStatements.imagesList=_,i(S.columnStatements),a((0,Kf.default)(S.columnStatements)),r(S),c(!0)}catch(e){console.error(`Failed to load settings files:`,e),h(e)}finally{p(!1)}})()},[e,t,r,i,s,o,n,c,a]);let y=[{key:`language`,label:`language.xml`,version:u.langFileVersion||``},{key:`config`,label:`config.xml`,version:l.configFileVersion||``},{key:`map`,label:`map.xml`,version:d.mapFileVersion||``}];return(0,S.useEffect)(()=>{if(f)return;let e=y.filter(({version:e})=>{try{return!$U(e,`>=1.0.9 <1.0.10`)}catch(e){return console.error(`Error checking version:`,e),!0}});e.length>0&&_(e)},[f]),f?(0,W.jsx)(_t,{}):m?(0,W.jsxs)(`div`,{className:`App`,children:[(0,W.jsx)(`h1`,{children:`Unable to load configuration`}),(0,W.jsx)(`p`,{children:m.message}),(0,W.jsx)(`p`,{children:`Please check that your settings files are present and correctly formatted, then reload the page.`})]}):(l.useMobileMode===!0||l.useMobileMode===`true`)&&ht()?(console.log(`Mobile Mode`),l.preventMobileAccess===!0||l.preventMobileAccess===`true`?(0,W.jsx)(`div`,{className:`App`,children:(0,W.jsx)(On,{children:(0,W.jsx)(sn,{children:(0,W.jsx)(on,{exact:!0,path:`/`,component:tW})})})}):l.showConsentPage===!0||l.showConsentPage===`true`?(0,W.jsxs)(`div`,{className:`App`,children:[(0,W.jsx)(aW,{files:g,onDismiss:()=>_([])}),(0,W.jsxs)(On,{children:[(0,W.jsxs)(sn,{children:[(0,W.jsx)(on,{exact:!0,path:`/`,component:NF}),(0,W.jsx)(on,{exact:!0,path:`/presort`,component:rR}),(0,W.jsx)(on,{exact:!0,path:`/thin`,component:cz}),(0,W.jsx)(on,{exact:!0,path:`/sort`,component:AB}),(0,W.jsx)(on,{exact:!0,path:`/postsort`,component:HH}),(0,W.jsx)(on,{exact:!0,path:`/survey`,component:vH}),(0,W.jsx)(on,{exact:!0,path:`/submit`,component:jU}),(0,W.jsx)(on,{exact:!0,path:`/landing`,component:ll}),(0,W.jsx)(on,{component:DN})]}),(0,W.jsx)(S.Suspense,{children:(0,W.jsx)(TI,{})})]})]}):(0,W.jsxs)(`div`,{className:`App`,children:[(0,W.jsx)(aW,{files:g,onDismiss:()=>_([])}),(0,W.jsxs)(On,{children:[(0,W.jsxs)(sn,{children:[(0,W.jsx)(on,{exact:!0,path:`/`,component:ll}),(0,W.jsx)(on,{exact:!0,path:`/presort`,component:rR}),(0,W.jsx)(on,{exact:!0,path:`/thin`,component:cz}),(0,W.jsx)(on,{exact:!0,path:`/sort`,component:AB}),(0,W.jsx)(on,{exact:!0,path:`/postsort`,component:HH}),(0,W.jsx)(on,{exact:!0,path:`/survey`,component:vH}),(0,W.jsx)(on,{exact:!0,path:`/submit`,component:jU}),(0,W.jsx)(on,{component:DN})]}),(0,W.jsx)(S.Suspense,{children:(0,W.jsx)(TI,{})})]})]})):l.showConsentPage===!0||l.showConsentPage===`true`?(0,W.jsxs)(`div`,{className:`App`,children:[(0,W.jsx)(aW,{files:g,onDismiss:()=>_([])}),(0,W.jsxs)(On,{children:[(0,W.jsxs)(sn,{children:[(0,W.jsx)(on,{exact:!0,path:`/`,component:NF}),(0,W.jsx)(on,{exact:!0,path:`/presort`,component:sS}),(0,W.jsx)(on,{exact:!0,path:`/thin`,component:mN}),(0,W.jsx)(on,{exact:!0,path:`/sort`,component:lw}),(0,W.jsx)(on,{exact:!0,path:`/postsort`,component:_d}),(0,W.jsx)(on,{exact:!0,path:`/survey`,component:xM}),(0,W.jsx)(on,{exact:!0,path:`/submit`,component:bk}),(0,W.jsx)(on,{exact:!0,path:`/landing`,component:ll}),(0,W.jsx)(on,{component:DN})]}),(0,W.jsx)(S.Suspense,{children:(0,W.jsx)(tF,{})})]})]}):(0,W.jsxs)(`div`,{className:`App`,children:[(0,W.jsx)(aW,{files:g,onDismiss:()=>_([])}),(0,W.jsxs)(On,{children:[(0,W.jsxs)(sn,{children:[(0,W.jsx)(on,{exact:!0,path:`/`,component:ll}),(0,W.jsx)(on,{exact:!0,path:`/presort`,component:sS}),(0,W.jsx)(on,{exact:!0,path:`/thin`,component:mN}),(0,W.jsx)(on,{exact:!0,path:`/sort`,component:lw}),(0,W.jsx)(on,{exact:!0,path:`/postsort`,component:_d}),(0,W.jsx)(on,{exact:!0,path:`/survey`,component:xM}),(0,W.jsx)(on,{exact:!0,path:`/submit`,component:bk}),(0,W.jsx)(on,{component:DN})]}),(0,W.jsxs)(S.Suspense,{children:[(0,W.jsx)(aW,{files:g,onDismiss:()=>_([])}),(0,W.jsx)(tF,{})]})]})]})}(0,C.createRoot)(document.getElementById(`root`)).render((0,W.jsx)(S.Suspense,{fallback:(0,W.jsx)(_t,{}),children:(0,W.jsxs)(ct,{theme:{primary:`#337ab7`,secondary:`#285f8f`,focus:`#63a0d4`,mobileText:`#36454f`,mobileBorder:`#36454f`},children:[(0,W.jsx)(mt,{}),(0,W.jsx)(vW,{})]})}));