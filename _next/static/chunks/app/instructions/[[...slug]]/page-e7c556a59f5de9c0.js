(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858,952],{1e3:function(e,t,n){Promise.resolve().then(n.bind(n,3025)),Promise.resolve().then(n.bind(n,7208)),Promise.resolve().then(n.bind(n,5273)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23))},3025:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(7437),i=n(2468),o=n(6884),s=n(495),a=n(2265);function u(e){let{content:t}=e,[n,u]=(0,a.useState)(!1);async function c(){await navigator.clipboard.writeText(t),u(!0),setTimeout(()=>{u(!1)},2e3)}return(0,r.jsx)(s.z,{variant:"secondary",className:"border",size:"xs",onClick:c,children:n?(0,r.jsx)(i.Z,{className:"w-3 h-3"}):(0,r.jsx)(o.Z,{className:"w-3 h-3"})})}},7208:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var r=n(7437),i=n(4839),o=n(7138),s=n(2265);function a(e){let{data:t}=e,[n,a]=(0,s.useState)(null),u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{u.current=new IntersectionObserver(e=>{let t=e.find(e=>e.isIntersecting);t&&a(t.target.id)},{root:null,rootMargin:"-20px 0px 0px 0px",threshold:.1});let e=t.map(e=>document.getElementById(e.href.slice(1)));return e.forEach(e=>{e&&u.current&&u.current.observe(e)}),()=>{u.current&&e.forEach(e=>{e&&u.current.unobserve(e)})}},[t]),(0,r.jsx)("div",{className:"flex flex-col gap-2.5 text-sm dark:text-stone-300/85 text-stone-800 ml-0.5",children:t.map(e=>{let{href:t,level:s,text:a}=e;return(0,r.jsx)(o.default,{href:t,className:(0,i.Z)({"pl-0":2==s,"pl-4":3==s,"pl-8 ":4==s,"font-medium text-primary":n==t.slice(1)}),children:a},t)})})}},495:function(e,t,n){"use strict";n.d(t,{d:function(){return u},z:function(){return c}});var r=n(7437),i=n(2265),o=n(1538),s=n(2218),a=n(7440);let u=(0,s.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef((e,t)=>{let{className:n,variant:i,size:s,asChild:c=!1,...l}=e,f=c?o.g7:"button";return(0,r.jsx)(f,{className:(0,a.cn)(u({variant:i,size:s,className:n})),ref:t,...l})});c.displayName="Button"},5273:function(e,t,n){"use strict";n.d(t,{Tabs:function(){return a},TabsContent:function(){return l},TabsList:function(){return u},TabsTrigger:function(){return c}});var r=n(7437),i=n(2265),o=n(2447),s=n(7440);let a=o.fC,u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(o.aV,{ref:t,className:(0,s.cn)("inline-flex h-10 items-center gap-2 text-muted-foreground font-mono -mb-28 w-full border-b",n),...i})});u.displayName=o.aV.displayName;let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(o.xz,{ref:t,className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap px-1.5 py-[0.58rem] text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary border-b-2 border-transparent data-[state=active]:text-foreground font-code",n),...i})});c.displayName=o.xz.displayName;let l=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(o.VY,{ref:t,className:(0,s.cn)("ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ",n),...i})});l.displayName=o.VY.displayName},9526:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=[{title:"Getting Started",href:"/getting-started",noLink:!0,basePath:"instructions",items:[{title:"Introduction",href:"/introduction"}]},{title:"About",href:"/about",noLink:!0,basePath:"about"}];r.flatMap(e=>(function e(t){var n;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=[],o="".concat(r).concat(t.href);return t.noLink||i.push({title:t.title,href:o,basePath:t.basePath}),null===(n=t.items)||void 0===n||n.forEach(t=>{i.push(...e(t,o))}),i})(e))},7440:function(e,t,n){"use strict";n.d(t,{bp:function(){return a},cn:function(){return s}});var r=n(4839),i=n(6164),o=n(9526);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,r.W)(t))}function a(e){return o.Z.map(t=>(function e(t,n,r,i,o){var s;let a=[],u=!1,c="".concat(r).concat(n.href);return!n.noLink&&n.title.toLowerCase().includes(t.toLowerCase())&&(a.push({...n,items:void 0,href:c}),u=!0),(!o||i<o)&&(null===(s=n.items)||void 0===s||s.forEach(r=>{let s=e(t,r,c,i+1,o);!s.length||u||n.noLink||(a.push({...n,items:void 0,href:c}),u=!0),a.push(...s)})),a})(e,t,"",1,0==e.length?2:void 0)).flat()}}},function(e){e.O(0,[231,605,173,345,971,23,744],function(){return e(e.s=1e3)}),_N_E=e.O()}]);