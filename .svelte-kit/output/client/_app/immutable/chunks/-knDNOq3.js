import{w as p,x as I,H as O,y as S,z as m,A as c,B as R,C as b,D as u,E as H,F as L,G as V,I as C,J as M,K as P,M as Y,O as $,P as j,c as k,q as E,l as q,Q as z}from"./BlcRBTap.js";import{a as B,r as A,h}from"./Bh7AO1rM.js";import{b as F}from"./BoL_NLux.js";const G=["touchstart","touchmove"];function J(t){return G.includes(t)}function X(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function K(t,e){return N(t,e)}function Z(t,e){p(),e.intro=e.intro??!1;const r=e.target,_=E,l=u;try{for(var a=I(r);a&&(a.nodeType!==8||a.data!==O);)a=S(a);if(!a)throw m;c(!0),R(a),b();const d=N(t,{...e,anchor:a});if(u===null||u.nodeType!==8||u.data!==H)throw L(),m;return c(!1),d}catch(d){if(d===m)return e.recover===!1&&V(),p(),C(r),c(!1),K(t,e);throw d}finally{c(_),R(l)}}const i=new Map;function N(t,{target:e,anchor:r,props:_={},events:l,context:a,intro:d=!0}){p();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=J(n);e.addEventListener(n,h,{passive:f});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,T+1)}}};y(M(B)),A.add(y);var g=void 0,D=P(()=>{var o=r??e.appendChild(Y());return $(()=>{if(a){j({});var s=k;s.c=a}l&&(_.$$events=l),E&&F(o,null),g=t(o,_)||{},E&&(q.nodes_end=u),a&&z()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}A.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(g,D),g}let w=new WeakMap;function x(t,e){const r=w.get(t);return r?(w.delete(t),r(e)):Promise.resolve()}export{Z as h,K as m,X as s,x as u};
