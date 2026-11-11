import{c as q,d as H,f as M,g as Ct,h as V,j as wt,l as It}from"./chunk-YUYJZJA5.js";import{c as D}from"./chunk-AAKCLA3R.js";import{E as xt,J as Tt,W as yt,X as vt,z as bt}from"./chunk-MCW4FHXZ.js";import{Ea as ht,Fa as C,Ia as ft,La as _t,Ma as L,Na as w,a as ct,la as Q,ma as lt,za as dt}from"./chunk-UOUHADUB.js";import{k as pt,m as mt,n as ut,r as gt,w as G}from"./chunk-D2XKNHFS.js";import{$a as K,Ab as T,Eb as i,Fb as f,Gb as _,Hb as p,Lb as et,Mb as nt,Nb as P,Ob as k,Qa as c,S as R,Sb as O,T as Y,Ub as a,V as X,Va as F,Wa as J,X as b,Xb as S,Yc as A,Zb as B,Zc as v,_b as E,aa as u,ba as g,ca as h,fc as ot,gb as z,gc as l,hb as W,hc as Z,ic as st,jc as it,kb as N,lb as tt,mb as y,oa as U,rc as $,tc as j,uc as at,wb as d,wc as rt,zb as x}from"./chunk-O3KMSE75.js";var kt=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }

    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-from {
        opacity: 0;
        transform: translateY(50%);
    }

    .p-toast-message-leave-from {
        max-height: 1000px;
    }

    .p-toast .p-toast-message.p-toast-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin-bottom: 0;
        overflow: hidden;
    }

    .p-toast-message-enter-active {
        transition:
            transform 0.3s,
            opacity 0.3s;
    }

    .p-toast-message-leave-active {
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin-bottom 0.3s;
    }
`;var Bt={root:({instance:e})=>{let{_position:s}=e;return{position:"fixed",top:s==="top-right"||s==="top-left"||s==="top-center"?"20px":s==="center"?"50%":null,right:(s==="top-right"||s==="bottom-right")&&"20px",bottom:(s==="bottom-left"||s==="bottom-right"||s==="bottom-center")&&"20px",left:s==="top-left"||s==="bottom-left"?"20px":s==="center"||s==="top-center"||s==="bottom-center"?"50%":null}}},Et={root:({instance:e})=>["p-toast p-component",`p-toast-${e._position}`],message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},I=(()=>{class e extends ft{name="toast";style=kt;classes=Et;inlineStyles=Bt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=U(e)))(n||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var At=(e,s,t,o)=>({showTransformParams:e,hideTransformParams:s,showTransitionParams:t,hideTransitionParams:o}),Mt=e=>({value:"visible",params:e}),Vt=(e,s)=>({$implicit:e,closeFn:s}),Dt=e=>({$implicit:e});function Ft(e,s){e&1&&P(0)}function zt(e,s){if(e&1&&y(0,Ft,1,0,"ng-container",3),e&2){let t=a();i("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",at(2,Vt,t.message,t.onCloseIconClick))}}function Nt(e,s){if(e&1&&p(0,"span",4),e&2){let t=a(3);l(t.cn(t.cx("messageIcon"),t.message==null?null:t.message.icon)),i("pBind",t.ptm("messageIcon"))}}function Pt(e,s){if(e&1&&(h(),p(0,"svg",11)),e&2){let t=a(4);l(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),d("aria-hidden",!0)}}function Zt(e,s){if(e&1&&(h(),p(0,"svg",12)),e&2){let t=a(4);l(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),d("aria-hidden",!0)}}function $t(e,s){if(e&1&&(h(),p(0,"svg",13)),e&2){let t=a(4);l(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),d("aria-hidden",!0)}}function jt(e,s){if(e&1&&(h(),p(0,"svg",14)),e&2){let t=a(4);l(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),d("aria-hidden",!0)}}function Qt(e,s){if(e&1&&(h(),p(0,"svg",12)),e&2){let t=a(4);l(t.cx("messageIcon")),i("pBind",t.ptm("messageIcon")),d("aria-hidden",!0)}}function Gt(e,s){if(e&1&&x(0,Pt,1,4,":svg:svg",7)(1,Zt,1,4,":svg:svg",8)(2,$t,1,4,":svg:svg",9)(3,jt,1,4,":svg:svg",10)(4,Qt,1,4,":svg:svg",8),e&2){let t,o=a(3);T((t=o.message.severity)==="success"?0:t==="info"?1:t==="error"?2:t==="warn"?3:4)}}function Lt(e,s){if(e&1&&(et(0),x(1,Nt,1,3,"span",2)(2,Gt,5,1),f(3,"div",6)(4,"div",6),Z(5),_(),f(6,"div",6),Z(7),_()(),nt()),e&2){let t=a(2);c(),T(t.message.icon?1:2),c(2),i("pBind",t.ptm("messageText"))("ngClass",t.cx("messageText")),c(),i("pBind",t.ptm("summary"))("ngClass",t.cx("summary")),c(),it(" ",t.message.summary," "),c(),i("pBind",t.ptm("detail"))("ngClass",t.cx("detail")),c(),st(t.message.detail)}}function qt(e,s){e&1&&P(0)}function Ht(e,s){if(e&1&&p(0,"span",4),e&2){let t=a(4);l(t.cn(t.cx("closeIcon"),t.message==null?null:t.message.closeIcon)),i("pBind",t.ptm("closeIcon"))}}function Rt(e,s){if(e&1&&y(0,Ht,1,3,"span",17),e&2){let t=a(3);i("ngIf",t.message.closeIcon)}}function Yt(e,s){if(e&1&&(h(),p(0,"svg",18)),e&2){let t=a(3);l(t.cx("closeIcon")),i("pBind",t.ptm("closeIcon")),d("aria-hidden",!0)}}function Xt(e,s){if(e&1){let t=k();f(0,"div")(1,"button",15),O("click",function(n){u(t);let r=a(2);return g(r.onCloseIconClick(n))})("keydown.enter",function(n){u(t);let r=a(2);return g(r.onCloseIconClick(n))}),x(2,Rt,1,1,"span",2)(3,Yt,1,4,":svg:svg",16),_()()}if(e&2){let t=a(2);c(),i("pBind",t.ptm("closeButton")),d("class",t.cx("closeButton"))("aria-label",t.closeAriaLabel),c(),T(t.message.closeIcon?2:3)}}function Ut(e,s){if(e&1&&(f(0,"div",4),y(1,Lt,8,9,"ng-container",5)(2,qt,1,0,"ng-container",3),x(3,Xt,4,4,"div"),_()),e&2){let t=a();l(t.cn(t.cx("messageContent"),t.message==null?null:t.message.contentStyleClass)),i("pBind",t.ptm("messageContent")),c(),i("ngIf",!t.template),c(),i("ngTemplateOutlet",t.template)("ngTemplateOutletContext",j(7,Dt,t.message)),c(),T((t.message==null?null:t.message.closable)!==!1?3:-1)}}var Jt=["message"],Kt=["headless"];function Wt(e,s){if(e&1){let t=k();f(0,"p-toastItem",1),O("onClose",function(n){u(t);let r=a();return g(r.onMessageClose(n))})("@toastAnimation.start",function(n){u(t);let r=a();return g(r.onAnimationStart(n))})("@toastAnimation.done",function(n){u(t);let r=a();return g(r.onAnimationEnd(n))}),_()}if(e&2){let t=s.$implicit,o=s.index,n=a();i("message",t)("index",o)("life",n.life)("template",n.template||n._template)("headlessTemplate",n.headlessTemplate||n._headlessTemplate)("@toastAnimation",void 0)("showTransformOptions",n.showTransformOptions)("hideTransformOptions",n.hideTransformOptions)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)("pt",n.pt)}}var Ot=new X("TOAST_INSTANCE"),te=(()=>{class e extends L{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;onClose=new F;_componentStyle=b(I);timeout;constructor(t){super(),this.zone=t}onAfterViewInit(){this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.timeout=setTimeout(()=>{this.onClose.emit({index:this.index,message:this.message})},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.initTimeout()}onCloseIconClick=t=>{this.clearTimeout(),this.onClose.emit({index:this.index,message:this.message}),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.clearTimeout()}static \u0275fac=function(o){return new(o||e)(K(J))};static \u0275cmp=z({type:e,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",v],life:[2,"life","life",v],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onClose:"onClose"},features:[$([I]),N],decls:4,vars:13,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"mouseenter","mouseleave","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(o,n){if(o&1){let r=k();f(0,"div",1,0),O("mouseenter",function(){return u(r),g(n.onMouseEnter())})("mouseleave",function(){return u(r),g(n.onMouseLeave())}),x(2,zt,1,5,"ng-container")(3,Ut,4,9,"div",2),_()}o&2&&(l(n.cn(n.cx("message"),n.message==null?null:n.message.styleClass)),i("pBind",n.ptm("message"))("@messageState",j(11,Mt,rt(6,At,n.showTransformOptions,n.hideTransformOptions,n.showTransitionOptions,n.hideTransitionOptions))),d("id",n.message==null?null:n.message.id),c(2),T(n.headlessTemplate?2:3))},dependencies:[G,pt,ut,gt,bt,xt,Tt,yt,vt,C,w],encapsulation:2,data:{animation:[q("messageState",[Ct("visible",M({transform:"translateY(0)",opacity:1})),V("void => *",[M({transform:"{{showTransformParams}}",opacity:0}),H("{{showTransitionParams}}")]),V("* => void",[H("{{hideTransitionParams}}",M({height:0,opacity:0,transform:"{{hideTransformParams}}"}))])])]},changeDetection:0})}return e})(),ee=(()=>{class e extends L{$pcToast=b(Ot,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";breakpoints;onClose=new F;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=b(dt);_componentStyle=b(I);styleElement;id=lt("pn_id_");templates;constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let o=t.filter(n=>this.canAdd(n));this.add(o)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this._template=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._template=t.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let o=this.key===t.key;return o&&this.preventOpenDuplicates&&(o=!this.containsMessage(this.messages,t)),o&&this.preventDuplicates&&(o=!this.containsMessage(this.messagesArchieve,t)),o}containsMessage(t,o){return t?t.find(n=>n.summary===o.summary&&n.detail==o.detail&&n.severity===o.severity)!=null:!1}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.cd.detectChanges()}onAnimationStart(t){t.fromState==="void"&&(this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&D.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal))}onAnimationEnd(t){t.toState==="void"&&this.autoZIndex&&ct(this.messages)&&D.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",Q(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let o in this.breakpoints){let n="";for(let r in this.breakpoints[o])n+=r+":"+this.breakpoints[o][r]+" !important;";t+=`
                    @media screen and (max-width: ${o}) {
                        .p-toast[${this.id}] {
                           ${n}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t),Q(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&D.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=z({type:e,selectors:[["p-toast"]],contentQueries:function(o,n,r){if(o&1&&(S(r,Jt,5),S(r,Kt,5),S(r,ht,4)),o&2){let m;B(m=E())&&(n.template=m.first),B(m=E())&&(n.headlessTemplate=m.first),B(m=E())&&(n.templates=m)}},hostVars:4,hostBindings:function(o,n){o&2&&(ot(n.sx("root")),l(n.cn(n.cx("root"),n.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",A],baseZIndex:[2,"baseZIndex","baseZIndex",v],life:[2,"life","life",v],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",A],preventDuplicates:[2,"preventDuplicates","preventDuplicates",A],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[$([I,{provide:Ot,useExisting:e},{provide:_t,useExisting:e}]),tt([w]),N],decls:1,vars:1,consts:[[3,"message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","pt","onClose",4,"ngFor","ngForOf"],[3,"onClose","message","index","life","template","headlessTemplate","showTransformOptions","hideTransformOptions","showTransitionOptions","hideTransitionOptions","pt"]],template:function(o,n){o&1&&y(0,Wt,1,11,"p-toastItem",0),o&2&&i("ngForOf",n.messages)},dependencies:[G,mt,te,C],encapsulation:2,data:{animation:[q("toastAnimation",[V(":enter, :leave",[It("@*",wt())])])]},changeDetection:0})}return e})(),ke=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=Y({imports:[ee,C,C]})}return e})();export{ee as a,ke as b};
