(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841,999],{6950:function(e,t,n){Promise.resolve().then(n.bind(n,2194))},6087:function(e,t,n){"use strict";n.d(t,{default:function(){return o}});var a=n(7437),r=n(7440),s=n(7138),i=n(6463);function o(e){let{absolute:t,className:n="",activeClassName:o="",disabled:l,children:c,...d}=e,u=(0,i.usePathname)(),f=d.href.toString(),h=t?f.split("/")[1]===u.split("/")[1]:u===f;return(f.includes("http")&&(h=!1),l)?(0,a.jsx)("div",{className:(0,r.cn)(n,"cursor-not-allowed"),children:c}):(0,a.jsx)(s.default,{className:(0,r.cn)(n,h&&o),...d,children:c})}},2773:function(e,t,n){"use strict";var a,r;n.d(t,{P:function(){return a}}),(r=a||(a={})).ABOUT="about",r.INSTRUCTIONS="instructions"},2194:function(e,t,n){"use strict";n.d(t,{default:function(){return y}});var a=n(7437),r=n(9526),s=n(6087),i=n(2265),o=n(882),l=n(4446),c=n(7583);let d=o.fC,u=o.xz,f=i.forwardRef((e,t)=>{let{children:n,...r}=e;return(0,a.jsx)(o.VY,{ref:t,...r,children:(0,a.jsx)(l.M,{initial:!1,children:(0,a.jsx)(c.E.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.3,ease:"easeInOut"},children:n})})})});f.displayName="CollapsibleContent";var h=n(7440),m=n(5317),p=n(495),x=n(7592),g=n(6463);function v(e){let{title:t,href:n,items:r,noLink:o,level:b,isSheet:y,basePath:j}=e,N=(0,g.usePathname)(),[w,k]=(0,i.useState)(0==b),S=j?"/".concat(j).concat(n):n;(0,i.useEffect)(()=>{N!==S&&N.includes(S)&&k(!0)},[S,N]),(0,i.useEffect)(()=>{console.log("SubLink ".concat(t," isOpen:"),w)},[w,t]);let C=(0,a.jsx)(s.default,{activeClassName:"text-primary font-medium",href:S,children:t}),P=o?(0,a.jsx)("h4",{className:"font-medium sm:text-sm text-primary",children:t}):y?(0,a.jsx)(m.SheetClose,{asChild:!0,children:C}):C;return r?(0,a.jsx)("div",{className:"flex flex-col gap-1 w-full overflow-hidden",children:(0,a.jsxs)(d,{open:w,onOpenChange:k,children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[P,(0,a.jsx)(u,{asChild:!0,children:(0,a.jsxs)(p.z,{className:"ml-auto mr-3.5 h-6 w-6",variant:"link",size:"icon",children:[(0,a.jsx)(c.E.div,{animate:{rotate:w?180:0},transition:{duration:.3},children:(0,a.jsx)(x.Z,{className:"h-[0.9rem] w-[0.9rem]"})}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle"})]})})]}),(0,a.jsx)(f,{forceMount:!0,children:(0,a.jsx)(l.M,{initial:!1,children:(0,a.jsx)(c.E.div,{initial:"collapsed",animate:w?"open":"collapsed",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.5,ease:[.04,.62,.23,.98]},style:{overflow:"hidden"},children:(0,a.jsx)("div",{className:(0,h.cn)("flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",b>0&&"pl-4 border-l ml-1"),children:null==r?void 0:r.map(e=>{let t={...e,href:"".concat(n).concat(e.href),level:b+1,isSheet:y,basePath:j};return(0,a.jsx)(v,{...t},t.href)})})},"content")})})]})}):(0,a.jsx)("div",{className:"flex flex-col",children:P})}var b=n(2773);function y(e){let{isSheet:t=!1}=e,n=(0,g.usePathname)(),s=Object.values(b.P).find(e=>n.startsWith("/".concat(e)));return s?(0,a.jsx)("div",{className:"flex flex-col gap-3.5 mt-5 pr-2 pb-6",children:r.Z.map((e,n)=>{if(e.basePath===s){let r={...e,level:0,isSheet:t};return(0,a.jsx)(v,{...r},n)}return null})}):null}},495:function(e,t,n){"use strict";n.d(t,{d:function(){return l},z:function(){return c}});var a=n(7437),r=n(2265),s=n(1538),i=n(2218),o=n(7440);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:n,variant:r,size:i,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(l({variant:r,size:i,className:n})),ref:t,...d})});c.displayName="Button"},5317:function(e,t,n){"use strict";n.r(t),n.d(t,{Sheet:function(){return c},SheetClose:function(){return u},SheetContent:function(){return p},SheetDescription:function(){return b},SheetFooter:function(){return g},SheetHeader:function(){return x},SheetOverlay:function(){return h},SheetPortal:function(){return f},SheetTitle:function(){return v},SheetTrigger:function(){return d}});var a=n(7437),r=n(2265),s=n(3304),i=n(2218),o=n(4697),l=n(7440);let c=s.fC,d=s.xz,u=s.x8,f=s.h_,h=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...r,ref:t})});h.displayName=s.aV.displayName;let m=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),p=r.forwardRef((e,t)=>{let{side:n="right",className:r,children:i,...c}=e;return(0,a.jsxs)(f,{children:[(0,a.jsx)(h,{}),(0,a.jsxs)(s.VY,{ref:t,className:(0,l.cn)(m({side:n}),r),...c,children:[i,(0,a.jsxs)(s.x8,{className:"absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,a.jsx)(o.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=s.VY.displayName;let x=e=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...n})};x.displayName="SheetHeader";let g=e=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};g.displayName="SheetFooter";let v=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold text-foreground",n),...r})});v.displayName=s.Dx.displayName;let b=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(s.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",n),...r})});b.displayName=s.dk.displayName},9526:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});let a=[{title:"Getting Started",href:"/getting-started",noLink:!0,basePath:"instructions",items:[{title:"Introduction",href:"/introduction"}]},{title:"About",href:"/about",noLink:!0,basePath:"about"}];a.flatMap(e=>(function e(t){var n;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[],s="".concat(a).concat(t.href);return t.noLink||r.push({title:t.title,href:s,basePath:t.basePath}),null===(n=t.items)||void 0===n||n.forEach(t=>{r.push(...e(t,s))}),r})(e))},7440:function(e,t,n){"use strict";n.d(t,{bp:function(){return o},cn:function(){return i}});var a=n(4839),r=n(6164),s=n(9526);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,a.W)(t))}function o(e){return s.Z.map(t=>(function e(t,n,a,r,s){var i;let o=[],l=!1,c="".concat(a).concat(n.href);return!n.noLink&&n.title.toLowerCase().includes(t.toLowerCase())&&(o.push({...n,items:void 0,href:c}),l=!0),(!s||r<s)&&(null===(i=n.items)||void 0===i||i.forEach(a=>{let i=e(t,a,c,r+1,s);!i.length||l||n.noLink||(o.push({...n,items:void 0,href:c}),l=!0),o.push(...i)})),o})(e,t,"",1,0==e.length?2:void 0)).flat()}}},function(e){e.O(0,[231,605,646,971,23,744],function(){return e(e.s=6950)}),_N_E=e.O()}]);