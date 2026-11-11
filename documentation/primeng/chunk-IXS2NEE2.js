import{B as At,C as Mt,ba as it,ca as St}from"./chunk-MCW4FHXZ.js";import{A as lt,D as Nt,Ea as kt,Fa as nt,Ia as w,La as C,Ma as N,Na as r,O as Dt,Oa as p,P as It,Q as $,Z as ct,ba as q,f as tt,ma as Et}from"./chunk-UOUHADUB.js";import{r as et,w as S,y as W}from"./chunk-D2XKNHFS.js";import{$b as yt,Ab as P,Eb as y,Fb as H,Gb as J,Gc as xt,Hb as X,Lc as c,Mc as Bt,Nb as K,Ob as Y,Pb as gt,Pc as B,Qa as D,R as F,Rc as wt,S as f,Sb as O,T as mt,Tc as z,Ub as I,V as m,Vb as T,Wb as _,X as a,Xb as Z,Yb as j,Yc as A,Zb as E,Zc as Ct,_b as k,aa as U,ba as G,bc as Tt,ca as st,cc as _t,gb as v,gc as d,hb as ht,ja as Q,kb as h,lb as g,mb as R,oa as l,qa as vt,rc as x,wb as b,zb as L}from"./chunk-O3KMSE75.js";var Qt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},dt=(()=>{class e extends w{name="tablist";classes=Qt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Ft=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var Ht={root:({instance:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable()}]},pt=(()=>{class e extends w{name="tabs";style=Ft;classes=Ht;static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Kt={root:({instance:e})=>["p-tab",{"p-tab-active":e.active(),"p-disabled":e.disabled()}]},bt=(()=>{class e extends w{name="tab";classes=Kt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var $t=["*"],Lt=new m("TAB_INSTANCE"),Pt=(()=>{class e extends N{$pcTab=a(Lt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=z();disabled=B(!1,{transform:A});pcTabs=a(F(()=>V));pcTabList=a(F(()=>at));el=a(vt);_componentStyle=a(bt);ripple=c(()=>this.config.ripple());id=c(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=c(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=c(()=>tt(this.pcTabs.value(),this.value()));tabindex=c(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.disabled()||this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.disabled()||this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?$(n,"data-p-disabled")||$(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?$(n,"data-p-disabled")||$(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){It(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){W(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&O("focus",function(s){return n.onFocus(s)})("click",function(s){return n.onClick(s)})("keydown",function(s){return n.onKeyDown(s)}),i&2&&(b("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),d(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[x([bt,{provide:Lt,useExisting:e},{provide:C,useExisting:e}]),g([it,r]),h],ngContentSelectors:$t,decls:1,vars:0,template:function(i,n){i&1&&(T(),_(0))},dependencies:[S,nt,p],encapsulation:2,changeDetection:0})}return e})();var qt={root:({instance:e})=>["p-tabpanel",{"p-tabpanel-active":e.active()}]},ut=(()=>{class e extends w{name="tabpanel";classes=qt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Wt=["content"],Ut=["*"];function Gt(e,u){e&1&&_(0)}function Jt(e,u){e&1&&K(0)}function Xt(e,u){if(e&1&&R(0,Jt,1,0,"ng-container",1),e&2){let t=I(),i=_t(1);y("ngTemplateOutlet",t.content()?t.content():i)}}var Vt=new m("TABPANEL_INSTANCE"),tn=(()=>{class e extends N{$pcTabPanel=a(Vt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(r,{self:!0});pcTabs=a(F(()=>V));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=B(!1,{transform:A});value=z(void 0);content=wt("content");id=c(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=c(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=c(()=>tt(this.pcTabs.value(),this.value()));isLazyEnabled=c(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=c(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=a(ut);static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tabpanel"]],contentQueries:function(i,n,o){i&1&&yt(o,n.content,Wt,5),i&2&&Tt()},hostVars:7,hostBindings:function(i,n){i&2&&(gt("hidden",!n.active()),b("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),d(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[x([ut,{provide:Vt,useExisting:e},{provide:C,useExisting:e}]),g([r]),h],ngContentSelectors:Ut,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(T(),R(0,Gt,1,0,"ng-template",null,0,xt),L(2,Xt,1,1,"ng-container")),i&2&&(D(2),P(n.shouldRender()?2:-1))},dependencies:[et,p],encapsulation:2,changeDetection:0})}return e})();var Yt={root:"p-tabpanels"},ft=(()=>{class e extends w{name="tabpanels";classes=Yt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Zt=["*"],Rt=new m("TABPANELS_INSTANCE"),Ot=(()=>{class e extends N{$pcTabPanels=a(Rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(r,{self:!0});_componentStyle=a(ft);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(b("role","presentation"),d(n.cx("root")))},features:[x([ft,{provide:Rt,useExisting:e},{provide:C,useExisting:e}]),g([r]),h],ngContentSelectors:Zt,decls:1,vars:0,template:function(i,n){i&1&&(T(),_(0))},dependencies:[S,p],encapsulation:2,changeDetection:0})}return e})();var te=["*"],jt=new m("TABS_INSTANCE"),V=(()=>{class e extends N{$pcTabs=a(jt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=z(void 0);scrollable=B(!1,{transform:A});lazy=B(!1,{transform:A});selectOnFocus=B(!1,{transform:A});showNavigators=B(!0,{transform:A});tabindex=B(0,{transform:Ct});id=Q(Et("pn_id_"));_componentStyle=a(pt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=l(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(b("id",n.id()),d(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[x([pt,{provide:jt,useExisting:e},{provide:C,useExisting:e}]),g([r]),h],ngContentSelectors:te,decls:1,vars:0,template:function(i,n){i&1&&(T(),_(0))},dependencies:[S,p],encapsulation:2,changeDetection:0})}return e})(),En=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ht({type:e});static \u0275inj=mt({imports:[V,Ot,at,Pt,p,p]})}return e})();var ee=["previcon"],ne=["nexticon"],ie=["content"],oe=["prevButton"],ae=["nextButton"],re=["inkbar"],se=["tabs"],le=["*"];function ce(e,u){e&1&&K(0)}function de(e,u){if(e&1&&R(0,ce,1,0,"ng-container",11),e&2){let t=I(2);y("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function pe(e,u){e&1&&(st(),X(0,"svg",10))}function be(e,u){if(e&1){let t=Y();H(0,"button",9,3),O("click",function(){U(t);let n=I();return G(n.onPrevButtonClick())}),L(2,de,1,1,"ng-container")(3,pe,1,0,":svg:svg",10),J()}if(e&2){let t=I();d(t.cx("prevButton")),y("pBind",t.ptm("prevButton")),b("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),D(2),P(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function ue(e,u){e&1&&K(0)}function fe(e,u){if(e&1&&R(0,ue,1,0,"ng-container",11),e&2){let t=I(2);y("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function me(e,u){e&1&&(st(),X(0,"svg",12))}function ve(e,u){if(e&1){let t=Y();H(0,"button",9,4),O("click",function(){U(t);let n=I();return G(n.onNextButtonClick())}),L(2,fe,1,1,"ng-container")(3,me,1,0,":svg:svg",12),J()}if(e&2){let t=I();d(t.cx("nextButton")),y("pBind",t.ptm("nextButton")),b("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),D(2),P(t.nextIconTemplate||t._nextIconTemplate?2:3)}}var zt=new m("TABLIST_INSTANCE"),at=(()=>{class e extends N{$pcTabList=a(zt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=a(F(()=>V));isPrevButtonEnabled=Q(!1);isNextButtonEnabled=Q(!1);resizeObserver;showNavigators=c(()=>this.pcTabs.showNavigators());tabindex=c(()=>this.pcTabs.tabindex());scrollable=c(()=>this.pcTabs.scrollable());_componentStyle=a(dt);constructor(){super(),Bt(()=>{this.pcTabs.value(),W(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&W(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=q(t),n=Math.abs(t.scrollLeft)-i,o=n<=0?0:n;t.scrollLeft=lt(t)?-1*o:o}onNextButtonClick(){let t=this.content.nativeElement,i=q(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,o=t.scrollWidth-i,s=n>=o?o:n;t.scrollLeft=lt(t)?-1*s:s}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:o}=t,s=Math.abs(t.scrollLeft),rt=q(t);this.isPrevButtonEnabled.set(s!==0),this.isNextButtonEnabled.set(i.offsetWidth>=o&&Math.abs(s-n+rt)>1)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,o=Dt(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=Nt(o)+"px",i.style.left=ct(o).left-ct(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,o)=>o?n+q(o):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=v({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,o){if(i&1&&(Z(o,ee,4),Z(o,ne,4),Z(o,kt,4)),i&2){let s;E(s=k())&&(n.prevIconTemplate=s.first),E(s=k())&&(n.nextIconTemplate=s.first),E(s=k())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(j(ie,5),j(oe,5),j(ae,5),j(re,5),j(se,5)),i&2){let o;E(o=k())&&(n.content=o.first),E(o=k())&&(n.prevButton=o.first),E(o=k())&&(n.nextButton=o.first),E(o=k())&&(n.inkbar=o.first),E(o=k())&&(n.tabs=o.first)}},hostVars:2,hostBindings:function(i,n){i&2&&d(n.cx("root"))},features:[x([dt,{provide:zt,useExisting:e},{provide:C,useExisting:e}]),g([r]),h],ngContentSelectors:le,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let o=Y();T(),L(0,be,4,7,"button",5),H(1,"div",6,0),O("scroll",function(rt){return U(o),G(n.onScroll(rt))}),H(3,"div",7,1),_(5),X(6,"span",8,2),J()(),L(8,ve,4,7,"button",5)}i&2&&(P(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),D(),d(n.cx("content")),y("pBind",n.ptm("content")),D(2),d(n.cx("tabList")),y("pBind",n.ptm("tabList")),D(3),d(n.cx("activeBar")),y("pBind",n.ptm("activeBar")),D(2),P(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[S,et,At,Mt,St,it,nt,p,r],encapsulation:2,changeDetection:0})}return e})();export{at as a,Pt as b,tn as c,Ot as d,V as e,En as f};
