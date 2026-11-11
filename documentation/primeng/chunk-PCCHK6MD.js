import{c as fe,d as E,f as g,g as C,h as V}from"./chunk-YUYJZJA5.js";import{c as _}from"./chunk-AAKCLA3R.js";import{g as ue}from"./chunk-MCW4FHXZ.js";import{Aa as ne,B as G,Ea as ce,Fa as y,H as J,Ia as pe,La as de,Ma as he,Na as h,O as ee,Z as P,fa as te,ga as ie,pa as oe,s as X}from"./chunk-UOUHADUB.js";import{n as re,q as se,r as ae,w as le,y as v}from"./chunk-D2XKNHFS.js";import{Eb as d,Fb as x,Gb as Q,Ob as Y,Pa as z,Qa as w,S as A,Sb as m,T as H,Ub as r,V as B,Va as k,Vb as $,Wa as R,Wb as W,X as l,Xb as T,Yc as b,Zb as S,Zc as U,_b as L,aa as c,ba as p,gb as F,gc as I,hb as Z,kb as N,lb as M,mb as f,oa as u,rc as q,tc as K,uc as O,wb as j}from"./chunk-O3KMSE75.js";var ve=`
.p-popover {
    margin-top: dt('popover.gutter');
    background: dt('popover.background');
    color: dt('popover.color');
    border: 1px solid dt('popover.border.color');
    border-radius: dt('popover.border.radius');
    box-shadow: dt('popover.shadow');
    position: absolute
}

.p-popover-content {
    padding: dt('popover.content.padding');
}

.p-popover-flipped {
    margin-top: calc(dt('popover.gutter') * -1);
    margin-bottom: dt('popover.gutter');
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(dt('popover.gutter') - 2px);
    margin-left: calc(-1 * (dt('popover.gutter') - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.background');
}

.p-popover:before {
    border-width: dt('popover.gutter');
    margin-left: calc(-1 * dt('popover.gutter'));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.border.color');
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: dt('popover.background');
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: dt('popover.border.color');
}

`,ye={root:"p-popover p-component",content:"p-popover-content"},D=(()=>{class i extends pe{name="popover";style=ve;classes=ye;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(i)))(o||i)}})();static \u0275prov=A({token:i,factory:i.\u0275fac})}return i})();var ge=["content"],Ce=["*"],_e=(i,s)=>({showTransitionParams:i,hideTransitionParams:s}),we=(i,s)=>({value:i,params:s}),ke=i=>({closeCallback:i});function xe(i,s){}function Te(i,s){i&1&&f(0,xe,0,0,"ng-template")}function Se(i,s){if(i&1){let e=Y();x(0,"div",1),m("click",function(o){c(e);let n=r();return p(n.onOverlayClick(o))})("@animation.start",function(o){c(e);let n=r();return p(n.onAnimationStart(o))})("@animation.done",function(o){c(e);let n=r();return p(n.onAnimationEnd(o))}),x(1,"div",2),m("click",function(o){c(e);let n=r();return p(n.onContentClick(o))})("mousedown",function(o){c(e);let n=r();return p(n.onContentClick(o))}),W(2),f(3,Te,1,0,null,3),Q()()}if(i&2){let e=r();I(e.cn(e.cx("root"),e.styleClass)),d("pBind",e.ptm("root"))("ngStyle",e.style)("@animation",O(16,we,e.overlayVisible?"open":"close",O(13,_e,e.showTransitionOptions,e.hideTransitionOptions))),j("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),w(),I(e.cx("content")),d("pBind",e.ptm("content")),w(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",K(19,ke,e.onCloseClick.bind(e)))}}var me=new B("POPOVER_INSTANCE"),Le=(()=>{class i extends he{$pcPopover=l(me,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new k;onHide=new k;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=l(D);zone=l(R);overlayService=l(ne);onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(v(this.platformId)&&!this.documentClickListener){let e=te()?"touchstart":"click",t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,t){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,t)&&(this.destroyCallback=()=>{this.show(null,t||e.currentTarget||e.target)}),this.hide()):this.show(e,t))}show(e,t){t&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=t||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let t=e.target;this.selfClick=e.offsetX<t.clientWidth&&e.offsetY<t.clientHeight}hasTargetChanged(e,t){return this.target!=null&&this.target!==(t||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):J(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&_.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),G(this.container,this.target,!1);let e=P(this.container),t=P(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),n=0;e.left<t.left&&(n=t.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(oe("popover.arrow.left").name,`${n}px`),e.top<t.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),X(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.$attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=t=>{this.container&&this.container.contains(t.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&_.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=ee(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!ie()&&this.hide()}bindDocumentResizeListener(){if(v(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){v(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ue(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&_.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(i)))(o||i)}})();static \u0275cmp=F({type:i,selectors:[["p-popover"]],contentQueries:function(t,o,n){if(t&1&&(T(n,ge,4),T(n,ce,4)),t&2){let a;S(a=L())&&(o.contentTemplate=a.first),S(a=L())&&(o.templates=a)}},hostBindings:function(t,o){t&1&&m("keydown.escape",function(a){return o.onEscapeKeydown(a)},z)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",b],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",b],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",U],focusOnShow:[2,"focusOnShow","focusOnShow",b],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[q([D,{provide:me,useExisting:i},{provide:de,useExisting:i}]),M([h]),N],ngContentSelectors:Ce,decls:1,vars:1,consts:[["role","dialog",3,"pBind","class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","pBind","ngStyle"],[3,"click","mousedown","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,o){t&1&&($(),f(0,Se,4,21,"div",0)),t&2&&d("ngIf",o.render)},dependencies:[le,re,ae,se,y,h],encapsulation:2,data:{animation:[fe("animation",[C("void",g({transform:"scaleY(0.8)",opacity:0})),C("close",g({opacity:0})),C("open",g({transform:"translateY(0)",opacity:1})),V("void => open",E("{{showTransitionParams}}")),V("open => close",E("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),Ge=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=H({imports:[Le,y,y]})}return i})();export{Le as a,Ge as b};
