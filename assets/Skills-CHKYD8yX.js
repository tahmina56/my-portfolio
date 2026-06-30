var Ft=Object.defineProperty,Pt=Object.defineProperties;var Yt=Object.getOwnPropertyDescriptors;var Lt=Object.getOwnPropertySymbols;var Dt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable;var Ct=(s,l,u)=>l in s?Ft(s,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[l]=u,at=(s,l)=>{for(var u in l||(l={}))Dt.call(l,u)&&Ct(s,u,l[u]);if(Lt)for(var u of Lt(l))qt.call(l,u)&&Ct(s,u,l[u]);return s},ht=(s,l)=>Pt(s,Yt(l));import{t as It,j as v,b as Jt,u as Gt,w as U}from"./index-a0W-aVFY.js";import{r,u as Vt}from"./domegallery-B0J_7U_3.js";import"./vendor-BP0qhIbX.js";const{AWSLight:Ot,Bootstrap:Ut,C:Ht,CPP:Qt,CS:Zt,CSS:Bt,DartLight:Wt,Docker:Kt,Electron:te,ExpressJSLight:ee,FlutterLight:re,GithubLight:ne,GraphQLLight:se,HTML:oe,JavaLight:ae,JavaScript:ie,JQuery:ce,LaTeXLight:le,MaterialUILight:ue,MongoDB:de,NodeJSLight:fe,NotionLight:pe,NpmLight:he,Postman:me,ReactLight:ge,RedisLight:ye,StackOverflowLight:xe,TailwindCSSLight:ve,TensorFlowLight:be,ThreeJSLight:we,TypeScript:Re,UnityLight:ke,VercelLight:$e,ViteLight:Se,Python:Le,Figma:Ce}=It,Te=[{src:ie,alt:"JavaScript"},{src:Re,alt:"TypeScript"},{src:fe,alt:"Node.js"},{src:oe,alt:"HTML"},{src:Bt,alt:"CSS"},{src:ke,alt:"Unity"},{src:ve,alt:"Tailwind CSS"},{src:de,alt:"MongoDB"},{src:ee,alt:"Express.js"},{src:Kt,alt:"Docker"},{src:se,alt:"GraphQL"},{src:ye,alt:"Redis"},{src:Ht,alt:"C"},{src:re,alt:"Flutter"},{src:Wt,alt:"Dart"},{src:ue,alt:"Material UI"},{src:te,alt:"Electron"},{src:be,alt:"TensorFlow"},{src:we,alt:"Three.js"},{src:Se,alt:"Vite"},{src:$e,alt:"Vercel"},{src:Ut,alt:"Bootstrap"},{src:ce,alt:"jQuery"},{src:ae,alt:"Java"},{src:ge,alt:"React"},{src:Zt,alt:"C#"},{src:Ot,alt:"AWS"},{src:ne,alt:"GitHub"},{src:me,alt:"Postman"},{src:Qt,alt:"C++"},{src:he,alt:"npm"},{src:pe,alt:"Notion"},{src:le,alt:"LaTeX"},{src:xe,alt:"Stack Overflow"},{src:Le,alt:"Python"},{src:Ce,alt:"Figma"}],it={maxVerticalRotationDeg:5,dragSensitivity:20,enlargeTransitionMs:300,segments:35},H=(s,l,u)=>Math.min(Math.max(s,l),u),Tt=s=>(s%360+360)%360,Ee=s=>((s+180)%360+360)%360-180,ct=(s,l,u)=>{var d;const z=(d=s.dataset[l])!=null?d:s.getAttribute(`data-${l}`),L=z==null?NaN:parseFloat(z);return Number.isFinite(L)?L:u};function Ae(s,l){const u=Array.from({length:l},(n,a)=>-37+a*2),z=[-4,-2,0,2,4],L=[-3,-1,1,3,5],d=u.flatMap((n,a)=>(a%2===0?z:L).map(P=>({x:n,y:P,sizeX:2,sizeY:2}))),A=d.length;if(s.length===0)return d.map(n=>ht(at({},n),{src:"",alt:""}));s.length>A&&console.warn(`[DomeGallery] Provided image count (${s.length}) exceeds available tiles (${A}). Some images will not be shown.`);const C=s.map(n=>typeof n=="string"?{src:n,alt:""}:{src:n.src||"",alt:n.alt||""}),h=Array.from({length:A},(n,a)=>C[a%C.length]);for(let n=1;n<h.length;n++)if(h[n].src===h[n-1].src){for(let a=n+1;a<h.length;a++)if(h[a].src!==h[n].src){const j=h[n];h[n]=h[a],h[a]=j;break}}return d.map((n,a)=>ht(at({},n),{src:h[a].src,alt:h[a].alt}))}function Me(s,l,u,z,L){const d=360/L/2,A=d*(s+(u-1)/2);return{rotateX:d*(l-(z-1)/2),rotateY:A}}function ze({images:s=Te,fit:l=.5,fitBasis:u="auto",minRadius:z=600,maxRadius:L=1/0,padFactor:d=.25,overlayBlurColor:A="#060010",maxVerticalRotationDeg:C=it.maxVerticalRotationDeg,dragSensitivity:h=it.dragSensitivity,enlargeTransitionMs:n=it.enlargeTransitionMs,segments:a=it.segments,dragDampening:j=2,openedImageWidth:P="400px",openedImageHeight:D="400px",imageBorderRadius:q="30px",openedImageBorderRadius:X="30px",grayscale:_=!1}){const N=r.useRef(null),I=r.useRef(null),mt=r.useRef(null),K=r.useRef(null),tt=r.useRef(null),gt=r.useRef(null),J=r.useRef(null),lt=r.useRef(null),M=r.useRef({x:0,y:0}),ut=r.useRef({x:0,y:0}),Y=r.useRef(null),et=r.useRef(!1),Q=r.useRef(!1),Z=r.useRef(!1),G=r.useRef(null),V=r.useRef("mouse"),rt=r.useRef(null),nt=r.useRef(!1),yt=r.useRef(0),dt=r.useRef(0),st=r.useRef(!1),xt=r.useCallback(()=>{st.current||(st.current=!0,document.body.classList.add("dg-scroll-lock"))},[]),Et=r.useCallback(()=>{var t;st.current&&((t=N.current)==null?void 0:t.getAttribute("data-enlarging"))!=="true"&&(st.current=!1,document.body.classList.remove("dg-scroll-lock"))},[]),At=r.useMemo(()=>Ae(s,a),[s,a]),ot=(t,o)=>{const b=mt.current;b&&(b.style.transform=`translateZ(calc(var(--radius) * -1)) rotateX(${t}deg) rotateY(${o}deg)`)},vt=r.useRef(null);r.useEffect(()=>{const t=N.current;if(!t)return;const o=new ResizeObserver(b=>{var p;const i=b[0].contentRect,f=Math.max(1,i.width),m=Math.max(1,i.height),g=Math.min(f,m),k=Math.max(f,m),$=f/m;let y;switch(u){case"min":y=g;break;case"max":y=k;break;case"width":y=f;break;case"height":y=m;break;default:y=$>=1.3?f:g}let w=y*l;const x=m*1.35;w=Math.min(w,x),w=H(w,z,L),vt.current=Math.round(w);const c=Math.max(8,Math.round(g*d));t.style.setProperty("--radius",`${vt.current}px`),t.style.setProperty("--viewer-pad",`${c}px`),t.style.setProperty("--overlay-blur-color",A),t.style.setProperty("--tile-radius",q),t.style.setProperty("--enlarge-radius",X),t.style.setProperty("--image-filter",_?"grayscale(1)":"none"),ot(M.current.x,M.current.y);const T=(p=tt.current)==null?void 0:p.querySelector(".enlarge");if(T&&K.current&&I.current){const e=K.current.getBoundingClientRect(),S=I.current.getBoundingClientRect();if(P&&D){const R=document.createElement("div");R.style.cssText=`position: absolute; width: ${P}; height: ${D}; visibility: hidden; top: -9999px;`,document.body.appendChild(R);const F=R.getBoundingClientRect();document.body.removeChild(R);const B=e.left-S.left+(e.width-F.width)/2,O=e.top-S.top+(e.height-F.height)/2;Object.assign(T.style,{left:`${B}px`,top:`${O}px`})}else Object.assign(T.style,{left:`${e.left-S.left}px`,top:`${e.top-S.top}px`,width:`${e.width}px`,height:`${e.height}px`})}});return o.observe(t),()=>o.disconnect()},[l,u,z,L,d,A,_,q,X,P,D]),r.useEffect(()=>{ot(M.current.x,M.current.y)},[]);const ft=r.useCallback(()=>{G.current&&(cancelAnimationFrame(G.current),G.current=null)},[]),Mt=r.useCallback((t,o)=>{let i=H(t,-1.4,1.4)*80,f=H(o,-1.4,1.4)*80,m=0;const g=H(j!=null?j:.6,0,1),k=.94+.055*g,$=.015-.01*g,y=Math.round(90+270*g),w=()=>{if(i*=k,f*=k,Math.abs(i)<$&&Math.abs(f)<$){G.current=null;return}if(++m>y){G.current=null;return}const x=H(M.current.x-f/200,-C,C),c=Ee(M.current.y+i/200);M.current={x,y:c},ot(x,c),G.current=requestAnimationFrame(w)};ft(),G.current=requestAnimationFrame(w)},[j,C,ft]);Vt({onDragStart:({event:t})=>{var i,f;if(J.current)return;ft();const o=t;V.current=o.pointerType||"mouse",V.current==="touch"&&o.preventDefault(),V.current==="touch"&&xt(),et.current=!0,Q.current=!1,Z.current=!1,ut.current=at({},M.current),Y.current={x:o.clientX,y:o.clientY};const b=(f=(i=o.target).closest)==null?void 0:f.call(i,".item__image");rt.current=b||null},onDrag:({event:t,last:o,velocity:b=[0,0],direction:i=[0,0],movement:f})=>{if(J.current||!et.current||!Y.current)return;const m=t;V.current==="touch"&&m.preventDefault();const g=m.clientX-Y.current.x,k=m.clientY-Y.current.y;Z.current||g*g+k*k>16&&(Z.current=!0);const $=H(ut.current.x-k/h,-C,C),y=ut.current.y+g/h,w=M.current;if((w.x!==$||w.y!==y)&&(M.current={x:$,y},ot($,y)),o){et.current=!1;let x=!1;if(Y.current){const R=m.clientX-Y.current.x,F=m.clientY-Y.current.y,B=R*R+F*F,O=V.current==="touch"?10:6;B<=O*O&&(x=!0)}const[c,T]=b,[p,e]=i;let S=c*p,E=T*e;if(!x&&Math.abs(S)<.001&&Math.abs(E)<.001&&Array.isArray(f)){const[R,F]=f;S=R/h*.02,E=F/h*.02}!x&&(Math.abs(S)>.005||Math.abs(E)>.005)&&Mt(S,E),Y.current=null,Q.current=!x,x&&rt.current&&!J.current&&pt(rt.current),rt.current=null,Q.current&&setTimeout(()=>Q.current=!1,120),V.current==="touch"&&Et(),Z.current&&(dt.current=performance.now()),Z.current=!1}}},{target:I,eventOptions:{passive:!1}}),r.useEffect(()=>{const t=gt.current;if(!t)return;const o=()=>{var e,S;if(performance.now()-yt.current<250)return;const i=J.current;if(!i)return;const f=i.parentElement,m=(e=tt.current)==null?void 0:e.querySelector(".enlarge");if(!m)return;const g=f.querySelector(".item__image--reference"),k=lt.current;if(!k){m.remove(),g&&g.remove(),f.style.setProperty("--rot-y-delta","0deg"),f.style.setProperty("--rot-x-delta","0deg"),i.style.visibility="",i.style.zIndex="0",J.current=null,(S=N.current)==null||S.removeAttribute("data-enlarging"),nt.current=!1;return}const $=m.getBoundingClientRect(),y=N.current.getBoundingClientRect(),w={left:k.left-y.left,top:k.top-y.top,width:k.width,height:k.height},x={left:$.left-y.left,top:$.top-y.top,width:$.width,height:$.height},c=document.createElement("div");c.className="enlarge-closing",c.style.cssText=`
        position: absolute;
        left: ${x.left}px;
        top: ${x.top}px;
        width: ${x.width}px;
        height: ${x.height}px;
        z-index: 9999;
        border-radius: ${X};
        overflow: hidden;
        box-shadow: none;
        transition: all ${n}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
        filter: ${_?"grayscale(1)":"none"};
      `;const T=m.querySelector("img");if(T){const E=T.cloneNode();E.style.cssText="width: 100%; height: 100%; object-fit: cover;",c.appendChild(E)}m.remove(),N.current.appendChild(c),c.getBoundingClientRect(),requestAnimationFrame(()=>{c.style.left=w.left+"px",c.style.top=w.top+"px",c.style.width=w.width+"px",c.style.height=w.height+"px",c.style.opacity="0"});const p=()=>{c.remove(),lt.current=null,g&&g.remove(),f.style.transition="none",i.style.transition="none",f.style.setProperty("--rot-y-delta","0deg"),f.style.setProperty("--rot-x-delta","0deg"),requestAnimationFrame(()=>{var E;i.style.visibility="",i.style.opacity="0",i.style.zIndex="0",J.current=null,(E=N.current)==null||E.removeAttribute("data-enlarging"),requestAnimationFrame(()=>{f.style.transition="",i.style.transition="opacity 300ms ease-out",requestAnimationFrame(()=>{i.style.opacity="1",setTimeout(()=>{var R;i.style.transition="",i.style.opacity="",nt.current=!1,!et.current&&((R=N.current)==null?void 0:R.getAttribute("data-enlarging"))!=="true"&&document.body.classList.remove("dg-scroll-lock")},300)})})})};c.addEventListener("transitionend",p,{once:!0})};t.addEventListener("click",o);const b=i=>{i.key==="Escape"&&o()};return window.addEventListener("keydown",b),()=>{t.removeEventListener("click",o),window.removeEventListener("keydown",b)}},[n,X,_]);const pt=t=>{var bt,wt;if(Q.current||nt.current)return;nt.current=!0,yt.current=performance.now(),xt();const o=t.parentElement;J.current=t,t.setAttribute("data-focused","true");const b=ct(o,"offsetX",0),i=ct(o,"offsetY",0),f=ct(o,"sizeX",2),m=ct(o,"sizeY",2),g=Me(b,i,f,m,a),k=Tt(g.rotateY),$=Tt(M.current.y);let y=-(k+$)%360;y<-180&&(y+=360);const w=-g.rotateX-M.current.x;o.style.setProperty("--rot-y-delta",`${y}deg`),o.style.setProperty("--rot-x-delta",`${w}deg`);const x=document.createElement("div");x.className="item__image item__image--reference opacity-0",x.style.transform=`rotateX(${-g.rotateX}deg) rotateY(${-g.rotateY}deg)`,o.appendChild(x);const c=x.getBoundingClientRect(),T=I.current.getBoundingClientRect(),p=K.current.getBoundingClientRect();lt.current={left:c.left,top:c.top,width:c.width,height:c.height},t.style.visibility="hidden",t.style.zIndex="0";const e=document.createElement("div");e.className="enlarge",e.style.cssText=`position:absolute; left:${p.left-T.left}px; top:${p.top-T.top}px; width:${p.width}px; height:${p.height}px; opacity:0; z-index:30; will-change:transform,opacity; transform-origin:top left; transition:transform ${n}ms ease, opacity ${n}ms ease; border-radius:${X}; overflow:hidden; box-shadow:none;`;const S=o.dataset.src||((bt=t.querySelector("img"))==null?void 0:bt.src)||"",E=o.dataset.alt||((wt=t.querySelector("img"))==null?void 0:wt.alt)||"",R=document.createElement("img");R.src=S,R.alt=E,R.style.cssText=`width:100%; height:100%; object-fit:cover; filter:${_?"grayscale(1)":"none"};`,e.appendChild(R),tt.current.appendChild(e);const F=c.left-p.left,B=c.top-p.top,O=c.width/p.width,zt=c.height/p.height;if(e.style.transform=`translate(${F}px, ${B}px) scale(${O}, ${zt})`,requestAnimationFrame(()=>{var W;e.style.opacity="1",e.style.transform="translate(0px, 0px) scale(1, 1)",(W=N.current)==null||W.setAttribute("data-enlarging","true")}),P||D){const W=Nt=>{if(Nt.propertyName!=="transform")return;e.removeEventListener("transitionend",W);const jt=e.style.transition;e.style.transition="none";const Rt=P||`${p.width}px`,kt=D||`${p.height}px`;e.style.width=Rt,e.style.height=kt;const $t=e.getBoundingClientRect();e.style.width=p.width+"px",e.style.height=p.height+"px",e.offsetWidth,e.style.transition=`left ${n}ms ease, top ${n}ms ease, width ${n}ms ease, height ${n}ms ease`;const Xt=p.left-T.left+(p.width-$t.width)/2,_t=p.top-T.top+(p.height-$t.height)/2;requestAnimationFrame(()=>{e.style.left=`${Xt}px`,e.style.top=`${_t}px`,e.style.width=Rt,e.style.height=kt});const St=()=>{e.removeEventListener("transitionend",St),e.style.transition=jt};e.addEventListener("transitionend",St,{once:!0})};e.addEventListener("transitionend",W)}};return r.useEffect(()=>()=>{document.body.classList.remove("dg-scroll-lock")},[]),v.jsxs(v.Fragment,{children:[v.jsx("style",{dangerouslySetInnerHTML:{__html:`
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    
    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    
    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg))) 
                 translateZ(var(--radius));
    }
    
    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important;
      pointer-events: all !important;
    }
    
    @media (max-aspect-ratio: 1/1) {
      .viewer-frame {
        height: auto !important;
        width: 100% !important;
      }
    }
    
    // body.dg-scroll-lock {
    //   position: fixed !important;
    //   top: 0;
    //   left: 0;
    //   width: 100% !important;
    //   height: 100% !important;
    //   overflow: hidden !important;
    //   touch-action: none !important;
    //   overscroll-behavior: contain !important;
    // }
    .item__image {
      position: absolute;
      inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .item__image--reference {
      position: absolute;
      inset: 10px;
      pointer-events: none;
    }
  `}}),v.jsx("div",{ref:N,className:"sphere-root relative w-full h-full",style:{"--segments-x":a,"--segments-y":a,"--overlay-blur-color":A,"--tile-radius":q,"--enlarge-radius":X,"--image-filter":_?"grayscale(1)":"none"},children:v.jsxs("main",{ref:I,className:"absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent",style:{touchAction:"none",WebkitUserSelect:"none",maskImage:"radial-gradient(ellipse at center, black 30%, transparent 65%)",WebkitMaskImage:"radial-gradient(ellipse at center, black 30%, transparent 65%)"},children:[v.jsx("div",{className:"stage",children:v.jsx("div",{ref:mt,className:"sphere",children:At.map((t,o)=>v.jsx("div",{className:"sphere-item absolute m-auto","data-src":t.src,"data-alt":t.alt,"data-offset-x":t.x,"data-offset-y":t.y,"data-size-x":t.sizeX,"data-size-y":t.sizeY,style:{"--offset-x":t.x,"--offset-y":t.y,"--item-size-x":t.sizeX,"--item-size-y":t.sizeY,top:"-999px",bottom:"-999px",left:"-999px",right:"-999px"},children:v.jsx("div",{className:"item__image absolute block overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-300",role:"button",tabIndex:0,"aria-label":t.alt||"Открыть изображение",onClick:b=>{performance.now()-dt.current<80||pt(b.currentTarget)},onTouchEnd:b=>{performance.now()-dt.current<80||pt(b.currentTarget)},style:{inset:"10px",borderRadius:`var(--tile-radius, ${q})`,backfaceVisibility:"hidden"},children:v.jsx("img",{src:t.src,draggable:!1,alt:t.alt,className:"w-full h-full object-cover pointer-events-none",style:{backfaceVisibility:"hidden",filter:`var(--image-filter, ${_?"grayscale(1)":"none"})`}})})},`${t.x},${t.y},${o}`))})}),v.jsxs("div",{ref:tt,className:"absolute inset-0 z-20 pointer-events-none flex items-center justify-center",style:{padding:"var(--viewer-pad)"},children:[v.jsx("div",{ref:gt,className:"scrim absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500",style:{background:"rgba(0, 0, 0, 0)",backdropFilter:"none"}}),v.jsx("div",{ref:K,className:"viewer-frame h-full aspect-square flex",style:{borderRadius:`var(--enlarge-radius, ${X})`}})]})]})})]})}const Ye=()=>{var A;const[s,l]=r.useState(.5),u=r.useRef(null),z=r.useRef(null),{isDarkMode:L}=Jt(),d=Gt();return r.useEffect(()=>{const C=()=>{if(!u.current)return;const h=u.current.getBoundingClientRect(),n=window.innerHeight;let a=0;if(h.top<=n&&h.bottom>=0){const q=h.height,X=h.top+q/2,_=n/2,N=Math.abs(X-_),I=n/2+q/2;a=1-N/I,a=Math.max(0,Math.min(1,a)),a=a*a*(3-2*a)}const j=.5,D=j+(1-j)*a;l(D)};return window.addEventListener("scroll",C),C(),()=>{window.removeEventListener("scroll",C)}},[]),v.jsxs("section",{ref:u,id:"skills",className:"min-h-screen py-20 relative",style:{background:((A=d.background.sections)==null?void 0:A.skills)||d.background.gradient,transition:"background 0.3s ease-in-out"},children:[v.jsx("div",{className:"absolute top-0 left-0 right-0 pointer-events-none",style:{height:"300px",background:L?`linear-gradient(180deg, ${d.background.gradientEnd} 0%, transparent 100%)`:`linear-gradient(180deg, ${d.colors.pink[25]} 0%, transparent 100%)`,zIndex:1}}),v.jsxs("div",{className:"container mx-auto px-6 relative",style:{zIndex:2},children:[v.jsx("h2",{className:"text-4xl font-bold text-center mb-12",style:{color:L?d.colors.white:d.colors.pink[500]},children:"Навыки"}),v.jsxs("div",{ref:z,className:"relative w-full",style:{height:"600px",transform:`scale(${s})`,transformOrigin:"center center",willChange:"transform"},children:[v.jsx(ze,{}),v.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:L?`radial-gradient(ellipse at center, transparent 40%, ${U(d.colors.dark[900],.1)} 70%, ${U(d.colors.dark[900],.6)} 90%, ${U(d.colors.dark[900],.8)} 100%)`:`radial-gradient(ellipse at center, transparent 40%, ${U(d.colors.pink[50],.1)} 70%, ${U(d.colors.pink[50],.6)} 90%, ${U(d.colors.pink[50],.8)} 100%)`,maskImage:"radial-gradient(ellipse at center, black 50%, transparent 85%)",WebkitMaskImage:"radial-gradient(ellipse at center, black 50%, transparent 85%)"}})]})]})]})};export{Ye as default};
