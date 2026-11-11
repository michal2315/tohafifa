import{a as wt}from"./chunk-J65EHHFF.js";import{c as Pt,d as D,f as M,g as V,h as N}from"./chunk-YUYJZJA5.js";import{c as H}from"./chunk-AAKCLA3R.js";import{g as It,ga as jt,ha as Et}from"./chunk-MCW4FHXZ.js";import{Aa as _t,B as mt,Ea as yt,Fa as w,Ga as A,Ia as vt,La as Ct,Ma as Tt,Na as T,P as F,Z as z,fa as ut,ga as ft,s as lt,va as dt}from"./chunk-UOUHADUB.js";import{n as ht,q as bt,r as gt,w as xt}from"./chunk-D2XKNHFS.js";import{$a as u,Eb as o,Fb as f,Gb as d,Gc as _,Hb as j,Lb as S,Mb as R,Nb as L,Ob as E,Pa as J,Qa as l,S as q,Sb as C,T as U,Ub as c,Uc as pt,V as $,Va as k,X as I,Xb as g,Yc as at,Zb as x,Zc as st,_a as G,_b as y,aa as h,ba as b,cc as O,fa as K,gb as X,gc as m,hb as tt,hc as it,ic as ot,kb as et,lb as nt,mb as s,oa as Y,qa as W,rc as rt,tc as P,uc as ct,wb as B}from"./chunk-O3KMSE75.js";var kt=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirmpopup-leave-to {
        opacity: 0;
    }

    .p-confirmpopup-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirmpopup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`;var Ot={root:()=>["p-confirmpopup p-component"],content:"p-confirmpopup-content",icon:({instance:e})=>["p-confirmpopup-icon",e.confirmation?.icon],message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},Q=(()=>{class e extends vt{name="confirmpopup";style=kt;classes=Ot;static \u0275fac=(()=>{let t;return function(i){return(t||(t=Y(e)))(i||e)}})();static \u0275prov=q({token:e,factory:e.\u0275fac})}return e})();var Ft=["content"],zt=["accepticon"],At=["rejecticon"],Dt=["headless"],Mt=(e,r)=>({showTransitionParams:e,hideTransitionParams:r}),Vt=e=>({value:"open",params:e}),St=e=>({$implicit:e});function Nt(e,r){e&1&&L(0)}function Ht(e,r){if(e&1&&(S(0),s(1,Nt,1,0,"ng-container",9),R()),e&2){let t=c(2);l(),o("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)("ngTemplateOutletContext",P(2,St,t.confirmation))}}function Qt(e,r){e&1&&L(0)}function Zt(e,r){if(e&1&&(S(0),s(1,Qt,1,0,"ng-container",9),R()),e&2){let t=c(3);l(),o("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",P(2,St,t.confirmation))}}function qt(e,r){if(e&1&&j(0,"i",10),e&2){let t=c(4);m(t.cx("icon")),o("pBind",t.ptm("icon"))}}function Ut(e,r){if(e&1&&(s(0,qt,1,3,"i",13),f(1,"span",10),it(2),d()),e&2){let t=c(3);o("ngIf",t.confirmation==null?null:t.confirmation.icon),l(),m(t.cx("message")),o("pBind",t.ptm("message")),l(),ot(t.confirmation==null?null:t.confirmation.message)}}function $t(e,r){if(e&1&&j(0,"i"),e&2){let t=c(5);m(t.confirmation==null?null:t.confirmation.rejectIcon)}}function Kt(e,r){}function Yt(e,r){e&1&&s(0,Kt,0,0,"ng-template",null,4,_)}function Wt(e,r){if(e&1&&s(0,$t,1,2,"i",15)(1,Yt,2,0,null,16),e&2){let t=c(4);o("ngIf",t.confirmation==null?null:t.confirmation.rejectIcon)("ngIfElse",t.rejecticon),l(),o("ngTemplateOutlet",t.rejectIconTemplate||t._rejectIconTemplate)}}function Jt(e,r){if(e&1){let t=E();f(0,"p-button",14),C("onClick",function(){h(t);let i=c(3);return b(i.onReject())}),s(1,Wt,2,3,"ng-template",null,3,_),d()}if(e&2){let t=c(3);m(t.cx("pcRejectButton")),o("label",t.rejectButtonLabel)("pt",t.ptm("pcRejectButton"))("styleClass",t.confirmation==null?null:t.confirmation.rejectButtonStyleClass)("size",(t.confirmation==null||t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.size)||"small")("text",(t.confirmation==null||t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.text)||!1)("buttonProps",t.getRejectButtonProps())("autofocus",t.autoFocusReject),B("aria-label",t.rejectButtonLabel)}}function Gt(e,r){if(e&1&&j(0,"i"),e&2){let t=c(5);m(t.confirmation==null?null:t.confirmation.acceptIcon)}}function Xt(e,r){}function te(e,r){e&1&&s(0,Xt,0,0,"ng-template",null,5,_)}function ee(e,r){if(e&1&&s(0,Gt,1,2,"i",15)(1,te,2,0,null,16),e&2){let t=c(4);o("ngIf",t.confirmation==null?null:t.confirmation.acceptIcon)("ngIfElse",t.accepticontemplate),l(),o("ngTemplateOutlet",t.acceptIconTemplate||t._acceptIconTemplate)}}function ne(e,r){if(e&1){let t=E();f(0,"p-button",17),C("onClick",function(){h(t);let i=c(3);return b(i.onAccept())}),s(1,ee,2,3,"ng-template",null,3,_),d()}if(e&2){let t=c(3);m(t.cx("pcAcceptButton")),o("label",t.acceptButtonLabel)("pt",t.ptm("pcAcceptButton"))("styleClass",t.confirmation==null?null:t.confirmation.acceptButtonStyleClass)("size",(t.confirmation==null||t.confirmation.acceptButtonProps==null?null:t.confirmation.acceptButtonProps.size)||"small")("buttonProps",t.getAcceptButtonProps())("autofocus",t.autoFocusAccept),B("aria-label",t.acceptButtonLabel)}}function ie(e,r){if(e&1&&(f(0,"div",10,1),s(2,Zt,2,4,"ng-container",8)(3,Ut,3,5,"ng-template",null,2,_),d(),f(5,"div",10),s(6,Jt,3,10,"p-button",11)(7,ne,3,9,"p-button",12),d()),e&2){let t=O(4),n=c(2);m(n.cx("content")),o("pBind",n.ptm("content")),l(2),o("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",t),l(3),m(n.cx("footer")),o("pBind",n.ptm("footer")),l(),o("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),l(),o("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function oe(e,r){if(e&1){let t=E();f(0,"div",7),C("click",function(i){h(t);let p=c();return b(p.onOverlayClick(i))})("@animation.start",function(i){h(t);let p=c();return b(p.onAnimationStart(i))})("@animation.done",function(i){h(t);let p=c();return b(p.onAnimationEnd(i))}),s(1,Ht,2,4,"ng-container",8)(2,ie,8,10,"ng-template",null,0,_),d()}if(e&2){let t=O(3),n=c();m(n.cn(n.cx("root"),n.styleClass)),o("pBind",n.ptm("root"))("ngStyle",n.style)("@animation",P(10,Vt,ct(7,Mt,n.showTransitionOptions,n.hideTransitionOptions))),l(),o("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",t)}}var Bt=new $("CONFIRMPOPUP_INSTANCE"),re=(()=>{class e extends Tt{el;confirmationService;renderer;cd;overlayService;document;$pcConfirmPopup=I(Bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=I(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(t){this._visible=t,this.cd.markForCheck()}container;subscription;confirmation;autoFocusAccept=!1;autoFocusReject=!1;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=I(Q);constructor(t,n,i,p,a,Rt){super(),this.el=t,this.confirmationService=n,this.renderer=i,this.cd=p,this.overlayService=a,this.document=Rt,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(v=>{if(!v){this.hide();return}v.key===this.key&&(this.confirmation=v,Object.keys(v).forEach(Z=>{this[Z]=v[Z]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new k,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new k,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"rejecticon":this._rejectIconTemplate=t.template;break;case"accepticon":this._acceptIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break}})}option(t,n){let i=this;if(i.hasOwnProperty(t))return n?i[n]:i[t]}onEscapeKeydown(t){this.confirmation&&this.confirmation.closeOnEscape!==!1&&this.onReject()}onAnimationStart(t){t.toState==="open"&&(this.container=t.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners(),this.autoFocusAccept=this.defaultFocus===void 0||this.defaultFocus==="accept",this.autoFocusReject=this.defaultFocus==="reject")}onAnimationEnd(t){switch(t.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}align(){if(this.autoZIndex&&H.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation||!this.confirmation.target)return;mt(this.container,this.confirmation?.target,!1);let t=z(this.container),n=z(this.confirmation?.target),i=0;t&&n&&t.left<n.left&&(i=n.left-t.left),this.container&&this.container.style.setProperty("--p-confirmpopup-arrow-left",`${i}px`),t&&n&&t.top<n.top&&lt(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(),F(this.confirmation?.target)}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide(),F(this.confirmation?.target)}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let t=ut()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,t,i=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let p=this.confirmation.target;this.container!==i.target&&!this.container?.contains(i.target)&&p!==i.target&&!p.contains(i.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!ft()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new It(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&H.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(A.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(A.REJECT)}onDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||e)(u(W),u(dt),u(G),u(pt),u(_t),u(K))};static \u0275cmp=X({type:e,selectors:[["p-confirmpopup"]],contentQueries:function(n,i,p){if(n&1&&(g(p,Ft,4),g(p,zt,4),g(p,At,4),g(p,Dt,4),g(p,yt,4)),n&2){let a;x(a=y())&&(i.contentTemplate=a.first),x(a=y())&&(i.acceptIconTemplate=a.first),x(a=y())&&(i.rejectIconTemplate=a.first),x(a=y())&&(i.headlessTemplate=a.first),x(a=y())&&(i.templates=a)}},hostBindings:function(n,i){n&1&&C("keydown.Escape",function(a){return i.onEscapeKeydown(a)},J)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",at],baseZIndex:[2,"baseZIndex","baseZIndex",st],style:"style",styleClass:"styleClass",visible:"visible"},features:[rt([Q,{provide:Bt,useExisting:e},{provide:Ct,useExisting:e}]),nt([T]),et],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["icon",""],["rejecticon",""],["accepticontemplate",""],["pFocusTrap","","role","alertdialog",3,"pBind","class","ngStyle","click",4,"ngIf"],["pFocusTrap","","role","alertdialog",3,"click","pBind","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],["type","button",3,"label","pt","class","styleClass","size","text","buttonProps","autofocus","onClick",4,"ngIf"],["type","button",3,"label","pt","class","styleClass","size","buttonProps","autofocus","onClick",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button",3,"onClick","label","pt","styleClass","size","text","buttonProps","autofocus"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","pt","styleClass","size","buttonProps","autofocus"]],template:function(n,i){n&1&&s(0,oe,4,12,"div",6),n&2&&o("ngIf",i.visible)},dependencies:[xt,ht,gt,bt,w,Et,jt,wt,T],encapsulation:2,data:{animation:[Pt("animation",[V("void",M({transform:"scaleY(0.8)",opacity:0})),V("open",M({transform:"translateY(0)",opacity:1})),N("void => open",D("{{showTransitionParams}}")),N("open => void",D("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),ze=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=tt({type:e});static \u0275inj=U({imports:[re,w,w]})}return e})();export{re as a,ze as b};
