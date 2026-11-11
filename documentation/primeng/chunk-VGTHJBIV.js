import{c as me,d as j,f as H,h as Z,i as z,k as N}from"./chunk-YUYJZJA5.js";import{a as m,c as O}from"./chunk-AAKCLA3R.js";import{d as x,g as ye}from"./chunk-MCW4FHXZ.js";import{Aa as se,Ea as he,Fa as b,G as oe,Ia as pe,La as ce,Ma as ve,Na as y,P as M,ga as v,s as V,u as ne}from"./chunk-UOUHADUB.js";import{n as re,r as le,w as ae,y as de}from"./chunk-D2XKNHFS.js";import{$a as T,Eb as l,Fb as S,Gb as E,Lc as ie,Nb as J,Ob as k,Pc as A,Qa as w,S as F,Sb as D,T as Q,Ub as r,V as $,Va as s,Vb as W,Wa as P,Wb as X,X as g,Xb as L,Yb as R,Zb as p,_b as c,aa as d,ba as h,gb as q,gc as I,hb as Y,kb as U,lb as G,mb as _,oa as K,rc as ee,tc as C,vc as te}from"./chunk-O3KMSE75.js";import{a}from"./chunk-GAL4ENT6.js";var _e=`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`,Ce={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},B=(()=>{class t extends pe{name="overlay";style=_e;classes=Ce;static \u0275fac=(()=>{let e;return function(n){return(e||(e=K(t)))(n||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var ue=["content"],be=["overlay"],xe=["*"],Oe=(t,u,e)=>({showTransitionParams:t,hideTransitionParams:u,transform:e}),we=t=>({value:"visible",params:t}),Te=t=>({mode:t}),Se=t=>({$implicit:t});function Ee(t,u){t&1&&J(0)}function ke(t,u){if(t&1){let e=k();S(0,"div",3,1),D("click",function(n){d(e);let o=r(2);return h(o.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){d(e);let o=r(2);return h(o.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){d(e);let o=r(2);return h(o.onOverlayContentAnimationDone(n))}),X(2),_(3,Ee,1,0,"ng-container",4),E()}if(t&2){let e=r(2);I(e.cn(e.cx("content"),e.contentStyleClass)),l("pBind",e.ptm("content"))("@overlayContentAnimation",C(10,we,te(6,Oe,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),w(3),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",C(14,Se,C(12,Te,e.overlayMode)))}}function De(t,u){if(t&1){let e=k();S(0,"div",3,0),D("click",function(){d(e);let n=r();return h(n.onOverlayClick())}),_(2,ke,4,16,"div",2),E()}if(t&2){let e=r();I(e.cn(e.cx("root"),e.styleClass)),l("pBind",e.ptm("root")),w(2),l("ngIf",e.visible)}}var fe=new $("OVERLAY_INSTANCE"),Le=z([H({transform:"{{transform}}",opacity:0}),j("{{showTransitionParams}}")]),Re=z([j("{{hideTransitionParams}}",H({transform:"{{transform}}",opacity:0}))]),Ie=(()=>{class t extends ve{overlayService;zone;$pcOverlay=g(fe,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return m.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return m.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return m.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return m.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=A(void 0);visibleChange=new s;onBeforeShow=new s;onShow=new s;onBeforeHide=new s;onHide=new s;onAnimationStart=new s;onAnimationDone=new s;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=A();$appendTo=ie(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=g(B);bindDirectiveInstance=g(y,{self:!0});documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(de(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return a(a({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return a(a({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return oe(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&M(this.targetEl),this.modal&&V(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&M(this.targetEl),this.modal&&ne(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&x.alignOverlay(this.overlayEl,this.targetEl,this.$appendTo())}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&O.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),x.appendOverlay(this.overlayEl,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo()),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&V(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),x.appendOverlay(this.overlayEl,this.targetEl,this.$appendTo()),O.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ye(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!v()}):!v())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!v()}):!v())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),O.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(i){return new(i||t)(T(se),T(P))};static \u0275cmp=q({type:t,selectors:[["p-overlay"]],contentQueries:function(i,n,o){if(i&1&&(L(o,ue,4),L(o,he,4)),i&2){let f;p(f=c())&&(n.contentTemplate=f.first),p(f=c())&&(n.templates=f)}},viewQuery:function(i,n){if(i&1&&(R(be,5),R(ue,5)),i&2){let o;p(o=c())&&(n.overlayViewChild=o.first),p(o=c())&&(n.contentViewChild=o.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[ee([B,{provide:fe,useExisting:t},{provide:ce,useExisting:t}]),G([y]),U],ngContentSelectors:xe,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"class","pBind","click",4,"ngIf"],[3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(W(),_(0,De,3,4,"div",2)),i&2&&l("ngIf",n.modalVisible)},dependencies:[ae,re,le,b,y],encapsulation:2,data:{animation:[me("overlayContentAnimation",[Z(":enter",[N(Le)]),Z(":leave",[N(Re)])])]},changeDetection:0})}return t})(),nt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Y({type:t});static \u0275inj=Q({imports:[Ie,b,b]})}return t})();export{Ie as a,nt as b};
