import{M as T,E as N,c,g as D,h as v,N as Q,m as U,O as H,P as X,Q as Y,R as G}from"./index.4957902a.js";const J=e=>T(N(e)),W=e=>T(e);function Z(e,t){return e!==void 0&&e()||t}function he(e,t){if(e!==void 0){const r=e();if(r!=null)return r.slice()}return t}function C(e,t){return e!==void 0?t.concat(e()):t}function ee(e){return e.appContext.config.globalProperties.$router!==void 0}function ye(e){return e.isUnmounted===!0||e.isDeactivated===!0}function O(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function L(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function te(e,t){for(const r in t){const n=t[r],i=e[r];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((u,o)=>u!==i[o]))return!1}return!0}function P(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function ne(e,t){return Array.isArray(e)===!0?P(e,t):Array.isArray(t)===!0?P(t,e):e===t}function re(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(ne(e[r],t[r])===!1)return!1;return!0}const ke={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function xe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=D(),{props:n,proxy:i,emit:u}=r,o=ee(r),s=c(()=>n.disable!==!0&&n.href!==void 0),g=t===!0?c(()=>o===!0&&n.disable!==!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>o===!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),f=c(()=>g.value===!0?E(n.to):null),a=c(()=>f.value!==null),d=c(()=>s.value===!0||a.value===!0),y=c(()=>n.type==="a"||d.value===!0?"a":n.tag||e||"div"),m=c(()=>s.value===!0?{href:n.href,target:n.target}:a.value===!0?{href:f.value.href,target:n.target}:{}),k=c(()=>{if(a.value===!1)return-1;const{matched:l}=f.value,{length:p}=l,x=l[p-1];if(x===void 0)return-1;const $=i.$route.matched;if($.length===0)return-1;const b=$.findIndex(L.bind(null,x));if(b>-1)return b;const A=O(l[p-2]);return p>1&&O(x)===A&&$[$.length-1].path!==A?$.findIndex(L.bind(null,l[p-2])):b}),h=c(()=>a.value===!0&&k.value!==-1&&te(i.$route.params,f.value.params)),S=c(()=>h.value===!0&&k.value===i.$route.matched.length-1&&re(i.$route.params,f.value.params)),q=c(()=>a.value===!0?S.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":h.value===!0?` ${n.activeClass}`:"":"");function E(l){try{return i.$router.resolve(l)}catch{}return null}function R(l,{returnRouterError:p,to:x=n.to,replace:$=n.replace}={}){if(n.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||n.target==="_blank")return Promise.resolve(!1);l.preventDefault();const b=i.$router[$===!0?"replace":"push"](x);return p===!0?b:b.then(()=>{}).catch(()=>{})}function _(l){if(a.value===!0){const p=x=>R(l,x);u("click",l,p),l.defaultPrevented!==!0&&p()}else u("click",l)}return{hasRouterLink:a,hasHrefLink:s,hasLink:d,linkTag:y,resolvedLink:f,linkIsActive:h,linkIsExactActive:S,linkClass:q,linkAttrs:m,getLink:E,navigateToRouterLink:R,navigateOnClick:_}}const se={xs:18,sm:24,md:32,lg:38,xl:46},ie={size:String};function oe(e,t=se){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const B="0 0 24 24",M=e=>e,w=e=>`ionicons ${e}`,K={"mdi-":e=>`mdi ${e}`,"icon-":M,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":w,"ion-ios":w,"ion-logo":w,"iconfont ":M,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},V={o_:"-outlined",r_:"-round",s_:"-sharp"},F={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},ae=new RegExp("^("+Object.keys(K).join("|")+")"),ue=new RegExp("^("+Object.keys(V).join("|")+")"),j=new RegExp("^("+Object.keys(F).join("|")+")"),le=/^[Mm]\s?[-+]?\.?\d/,ce=/^img:/,fe=/^svguse:/,de=/^ion-/,pe=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var $e=J({name:"QIcon",props:{...ie,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=D(),n=oe(e),i=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let o,s=e.name;if(s==="none"||!s)return{none:!0};if(r.iconMapFn!==null){const a=r.iconMapFn(s);if(a!==void 0)if(a.icon!==void 0){if(s=a.icon,s==="none"||!s)return{none:!0}}else return{cls:a.cls,content:a.content!==void 0?a.content:" "}}if(le.test(s)===!0){const[a,d=B]=s.split("|");return{svg:!0,viewBox:d,nodes:a.split("&&").map(y=>{const[m,k,h]=y.split("@@");return v("path",{style:k,d:m,transform:h})})}}if(ce.test(s)===!0)return{img:!0,src:s.substring(4)};if(fe.test(s)===!0){const[a,d=B]=s.split("|");return{svguse:!0,src:a.substring(7),viewBox:d}}let g=" ";const f=s.match(ae);if(f!==null)o=K[f[1]](s);else if(pe.test(s)===!0)o=s;else if(de.test(s)===!0)o=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${s.substring(3)}`;else if(j.test(s)===!0){o="notranslate material-symbols";const a=s.match(j);a!==null&&(s=s.substring(6),o+=F[a[1]]),g=s}else{o="notranslate material-icons";const a=s.match(ue);a!==null&&(s=s.substring(2),o+=V[a[1]]),g=s}return{cls:o,content:g}});return()=>{const o={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,o,Z(t.default)):u.value.img===!0?v("span",o,C(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",o,C(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",o,C(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(o.class+=" "+u.value.cls),v(e.tag,o,C(t.default,[u.value.content])))}}});function ve(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function be(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Q(e);if(t)return t.$el||t}function me(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function z(e,t,r,n){r.modifiers.stop===!0&&Y(e);const i=r.modifiers.color;let u=r.modifiers.center;u=u===!0||n===!0;const o=document.createElement("span"),s=document.createElement("span"),g=G(e),{left:f,top:a,width:d,height:y}=t.getBoundingClientRect(),m=Math.sqrt(d*d+y*y),k=m/2,h=`${(d-m)/2}px`,S=u?h:`${g.left-f-k}px`,q=`${(y-m)/2}px`,E=u?q:`${g.top-a-k}px`;s.className="q-ripple__inner",ve(s,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${S},${E},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(s),t.appendChild(o);const R=()=>{o.remove(),clearTimeout(_)};r.abort.push(R);let _=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${h},${q},0) scale3d(1,1,1)`,s.style.opacity=.2,_=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,_=setTimeout(()=>{o.remove(),r.abort.splice(r.abort.indexOf(R),1)},275)},250)},50)}function I(e,{modifiers:t,value:r,arg:n}){const i=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Re=W({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&z(i,e,n,i.qKeyEvent===!0)},keystart:me(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&U(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&z(i,e,n,!0)},300)};I(n,t),e.__qripple=n,H(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&I(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),X(t,"main"),delete e._qripple)}});export{$e as Q,Re as R,C as a,xe as b,J as c,he as d,ve as e,se as f,be as g,Z as h,ie as i,oe as j,ke as u,ye as v};
