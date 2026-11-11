import{a as Ne}from"./chunk-J65EHHFF.js";import{c as $e,d as ne,f as oe,h as ae,i as se,k as le}from"./chunk-YUYJZJA5.js";import{c as L}from"./chunk-AAKCLA3R.js";import{$ as Qe,W as He,aa as Xe,d as Fe,e as te,f as ie,ga as Ye}from"./chunk-MCW4FHXZ.js";import{D as K,Ea as Re,Fa as Z,Ga as ee,H as De,Ia as Pe,La as Ae,Ma as Oe,Na as P,_ as N,la as U,ma as J,r as R,s as Y,u as $,x as W}from"./chunk-UOUHADUB.js";import{k as Ee,n as Se,q as Le,r as Be,w as Ve,y as Me}from"./chunk-D2XKNHFS.js";import{Eb as o,Fb as c,Gb as h,Gc as Q,Hb as C,Lb as k,Lc as Ce,Mb as D,Nb as M,Ob as E,Pc as ke,Qa as r,S as pe,Sb as S,T as de,Ub as l,V as me,Va as T,Vb as xe,Wa as ce,Wb as q,X as V,Xb as b,Yb as H,Yc as m,Zb as _,Zc as X,_b as g,aa as u,ba as x,ca as O,cc as be,dc as ve,fc as G,gb as _e,gc as f,hb as ge,hc as ye,ic as Te,kb as he,lb as fe,mb as d,oa as F,rc as ze,tc as we,uc as Ie,wb as ue}from"./chunk-O3KMSE75.js";import{a as j}from"./chunk-GAL4ENT6.js";var Ze=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-dialog-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-dialog-enter-from,
    .p-dialog-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }
`;var Ke={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},Ue={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===t.position);return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},e?`p-dialog-${e}`:""]},root:({instance:t})=>["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&t.maximized}],header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:()=>["p-dialog-content"],footer:"p-dialog-footer"},re=(()=>{class t extends Pe{name="dialog";style=Ze;classes=Ue;inlineStyles=Ke;static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275prov=pe({token:t,factory:t.\u0275fac})}return t})();var Je=["header"],je=["content"],qe=["footer"],et=["closeicon"],tt=["maximizeicon"],it=["minimizeicon"],nt=["headless"],ot=["titlebar"],at=["*",[["p-footer"]]],st=["*","p-footer"],lt=(t,s)=>({transform:t,transition:s}),rt=t=>({value:"visible",params:t});function pt(t,s){t&1&&M(0)}function dt(t,s){if(t&1&&(k(0),d(1,pt,1,0,"ng-container",11),D()),t&2){let e=l(3);r(),o("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT)}}function mt(t,s){if(t&1){let e=E();c(0,"div",15),S("mousedown",function(n){u(e);let a=l(4);return x(a.initResize(n))}),h()}if(t&2){let e=l(4);f(e.cx("resizeHandle")),ve("z-index",90),o("pBind",e.ptm("resizeHandle"))}}function ct(t,s){if(t&1&&(c(0,"span",19),ye(1),h()),t&2){let e=l(5);f(e.cx("title")),o("id",e.ariaLabelledBy)("pBind",e.ptm("title")),r(),Te(e.header)}}function _t(t,s){t&1&&M(0)}function gt(t,s){if(t&1&&C(0,"span",23),t&2){let e=l(7);o("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}function ht(t,s){t&1&&(O(),C(0,"svg",26))}function ft(t,s){t&1&&(O(),C(0,"svg",27))}function ut(t,s){if(t&1&&(k(0),d(1,ht,1,0,"svg",24)(2,ft,1,0,"svg",25),D()),t&2){let e=l(7);r(),o("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),r(),o("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT)}}function xt(t,s){}function bt(t,s){t&1&&d(0,xt,0,0,"ng-template")}function vt(t,s){if(t&1&&(k(0),d(1,bt,1,0,null,11),D()),t&2){let e=l(7);r(),o("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT)}}function yt(t,s){}function Tt(t,s){t&1&&d(0,yt,0,0,"ng-template")}function zt(t,s){if(t&1&&(k(0),d(1,Tt,1,0,null,11),D()),t&2){let e=l(7);r(),o("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT)}}function wt(t,s){if(t&1&&d(0,gt,1,1,"span",21)(1,ut,3,2,"ng-container",22)(2,vt,2,1,"ng-container",22)(3,zt,2,1,"ng-container",22),t&2){let e=l(6);o("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),r(),o("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),r(),o("ngIf",!e.maximized),r(),o("ngIf",e.maximized)}}function It(t,s){if(t&1){let e=E();c(0,"p-button",20),S("onClick",function(){u(e);let n=l(5);return x(n.maximize())})("keydown.enter",function(){u(e);let n=l(5);return x(n.maximize())}),d(1,wt,4,4,"ng-template",null,4,Q),h()}if(t&2){let e=l(5);o("pt",e.ptm("pcMaximizeButton"))("styleClass",e.cx("pcMaximizeButton"))("ariaLabel",e.maximized?e.minimizeLabel:e.maximizeLabel)("tabindex",e.maximizable?"0":"-1")("buttonProps",e.maximizeButtonProps)}}function Ct(t,s){if(t&1&&C(0,"span"),t&2){let e=l(8);f(e.closeIcon)}}function kt(t,s){t&1&&(O(),C(0,"svg",30))}function Dt(t,s){if(t&1&&(k(0),d(1,Ct,1,2,"span",28)(2,kt,1,0,"svg",29),D()),t&2){let e=l(7);r(),o("ngIf",e.closeIcon),r(),o("ngIf",!e.closeIcon)}}function Et(t,s){}function St(t,s){t&1&&d(0,Et,0,0,"ng-template")}function Lt(t,s){if(t&1&&(c(0,"span"),d(1,St,1,0,null,11),h()),t&2){let e=l(7);r(),o("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function Bt(t,s){if(t&1&&d(0,Dt,3,2,"ng-container",22)(1,Lt,2,1,"span",22),t&2){let e=l(6);o("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),r(),o("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function Vt(t,s){if(t&1){let e=E();c(0,"p-button",20),S("onClick",function(n){u(e);let a=l(5);return x(a.close(n))})("keydown.enter",function(n){u(e);let a=l(5);return x(a.close(n))}),d(1,Bt,2,2,"ng-template",null,4,Q),h()}if(t&2){let e=l(5);o("pt",e.ptm("pcCloseButton"))("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)}}function Mt(t,s){if(t&1){let e=E();c(0,"div",15,3),S("mousedown",function(n){u(e);let a=l(4);return x(a.initDrag(n))}),d(2,ct,2,5,"span",16)(3,_t,1,0,"ng-container",11),c(4,"div",17),d(5,It,3,5,"p-button",18)(6,Vt,3,5,"p-button",18),h()()}if(t&2){let e=l(4);f(e.cx("header")),o("pBind",e.ptm("header")),r(2),o("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),r(),o("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT),r(),f(e.cx("headerActions")),o("pBind",e.ptm("headerActions")),r(),o("ngIf",e.maximizable),r(),o("ngIf",e.closable)}}function Rt(t,s){t&1&&M(0)}function Pt(t,s){t&1&&M(0)}function At(t,s){if(t&1&&(c(0,"div",17,5),q(2,1),d(3,Pt,1,0,"ng-container",11),h()),t&2){let e=l(4);f(e.cx("footer")),o("pBind",e.ptm("footer")),r(3),o("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT)}}function Ot(t,s){if(t&1&&(d(0,mt,1,5,"div",12)(1,Mt,7,10,"div",13),c(2,"div",7,2),q(4),d(5,Rt,1,0,"ng-container",11),h(),d(6,At,4,4,"div",14)),t&2){let e=l(3);o("ngIf",e.resizable),r(),o("ngIf",e.showHeader),r(),f(e.cn(e.cx("content"),e.contentStyleClass)),o("ngStyle",e.contentStyle)("pBind",e.ptm("content")),r(3),o("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),r(),o("ngIf",e._footerTemplate||e.footerTemplate||e.footerT)}}function Ft(t,s){if(t&1){let e=E();c(0,"div",9,0),S("@animation.start",function(n){u(e);let a=l(2);return x(a.onAnimationStart(n))})("@animation.done",function(n){u(e);let a=l(2);return x(a.onAnimationEnd(n))}),d(2,dt,2,1,"ng-container",10)(3,Ot,7,8,"ng-template",null,1,Q),h()}if(t&2){let e=be(4),i=l(2);G(i.sx("root")),f(i.cn(i.cx("root"),i.styleClass)),o("ngStyle",i.style)("pBind",i.ptm("root"))("pFocusTrapDisabled",i.focusTrap===!1)("@animation",we(16,rt,Ie(13,lt,i.transformOptions,i.transitionOptions))),ue("role",i.role)("aria-labelledby",i.ariaLabelledBy)("aria-modal",!0),r(2),o("ngIf",i._headlessTemplate||i.headlessTemplate||i.headlessT)("ngIfElse",e)}}function Ht(t,s){if(t&1&&(c(0,"div",7),d(1,Ft,5,18,"div",8),h()),t&2){let e=l();G(e.sx("mask")),f(e.cn(e.cx("mask"),e.maskStyleClass)),o("ngStyle",e.maskStyle)("pBind",e.ptm("mask")),r(),o("ngIf",e.visible)}}var Ge=new me("DIALOG_INSTANCE"),Qt=se([oe({transform:"{{transform}}",opacity:0}),ne("{{transition}}")]),Xt=se([ne("{{transition}}",oe({transform:"{{transform}}",opacity:0}))]),Yt=(()=>{class t extends Oe{hostName="";$pcDialog=V(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=V(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}header;draggable=!0;resizable=!0;contentStyle;contentStyleClass;modal=!1;closeOnEscape=!0;dismissableMask=!1;rtl=!1;closable=!0;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=!0;blockScroll=!1;autoZIndex=!0;baseZIndex=0;minX=0;minY=0;focusOnShow=!0;maximizable=!1;keepInViewport=!0;focusTrap=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",variant:"text",rounded:!0};maximizeButtonProps={severity:"secondary",variant:"text",rounded:!0};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(e){e&&(this._style=j({},e),this.originalStyle=e)}get position(){return this._position}set position(e){switch(this._position=e,e){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)";break}}role="dialog";appendTo=ke(void 0);onShow=new T;onHide=new T;visibleChange=new T;onResizeInit=new T;onResizeEnd=new T;onDragEnd=new T;onMaximize=new T;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;$appendTo=Ce(()=>this.appendTo()||this.config.overlayAppendTo());_visible=!1;maskVisible;container;wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=J("pn_id_");_style={};_position="center";originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=V(re);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;zIndexForLayering;get maximizeLabel(){return this.config.getTranslation(ee.ARIA).maximizeLabel}get minimizeLabel(){return this.config.getTranslation(ee.ARIA).minimizeLabel}zone=V(ce);get maskClass(){let i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.modal||this.dismissableMask,[`p-dialog-${i}`]:i}}onInit(){this.breakpoints&&this.createStyle()}templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerT=e.template;break;case"content":this.contentT=e.template;break;case"footer":this.footerT=e.template;break;case"closeicon":this.closeIconT=e.template;break;case"maximizeicon":this.maximizeIconT=e.template;break;case"minimizeicon":this.minimizeIconT=e.template;break;case"headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}})}getAriaLabelledBy(){return this.header!==null?J("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let i=/([\d\.]+)(ms|s)\b/g,n=0,a;for(;(a=i.exec(e))!==null;){let p=parseFloat(a[1]),z=a[2];z==="ms"?n+=p:z==="s"&&(n+=p*1e3)}if(n!==0)return n}_focus(e){if(e){let i=this.parseDurationToMilliseconds(this.transitionOptions),n=Fe.getFocusableElements(e);if(n&&n.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>n[0].focus(),i||5)}),!0}return!1}focus(e=this.contentViewChild?.nativeElement){let i=this._focus(e);i||(i=this._focus(this.footerViewChild?.nativeElement),i||(i=this._focus(this.headerViewChild?.nativeElement),i||this._focus(this.contentViewChild?.nativeElement)))}close(e){this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e)})),this.modal&&te()}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll(".p-dialog-mask-scrollblocker");this.modal&&e&&e.length==1&&ie(),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?te():ie()),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex?(L.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1)):this.zIndexForLayering=L.generateZIndex("modal",(this.baseZIndex??0)+this.config.zIndex.modal)}createStyle(){if(Me(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",U(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),U(this.styleElement,"nonce",this.config?.csp()?.nonce)}}initDrag(e){R(e.target,"p-dialog-maximize-icon")||R(e.target,"p-dialog-header-close-icon")||R(e.target?.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",Y(this.document.body,"p-unselectable-text"))}onDrag(e){if(this.dragging&&this.container){let i=K(this.container),n=N(this.container),a=e.pageX-this.lastPageX,p=e.pageY-this.lastPageY,z=this.container.getBoundingClientRect(),w=getComputedStyle(this.container),I=parseFloat(w.marginLeft),A=parseFloat(w.marginTop),v=z.left+a-I,y=z.top+p-A,B=W();this.container.style.position="fixed",this.keepInViewport?(v>=this.minX&&v+i<B.width&&(this._style.left=`${v}px`,this.lastPageX=e.pageX,this.container.style.left=`${v}px`),y>=this.minY&&y+n<B.height&&(this._style.top=`${y}px`,this.lastPageY=e.pageY,this.container.style.top=`${y}px`)):(this.lastPageX=e.pageX,this.container.style.left=`${v}px`,this.lastPageY=e.pageY,this.container.style.top=`${y}px`)}}endDrag(e){this.dragging&&(this.dragging=!1,$(this.document.body,"p-unselectable-text"),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}center(){this.resetPosition()}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,Y(this.document.body,"p-unselectable-text"),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,a=K(this.container),p=N(this.container),z=N(this.contentViewChild?.nativeElement),w=a+i,I=p+n,A=this.container.style.minWidth,v=this.container.style.minHeight,y=this.container.getBoundingClientRect(),B=W();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(w+=i,I+=n),(!A||w>parseInt(A))&&y.left+w<B.width&&(this._style.width=w+"px",this.container.style.width=this._style.width),(!v||I>parseInt(v))&&y.top+I<B.height&&(this.contentViewChild.nativeElement.style.height=z+I-p+"px",this._style.height&&(this._style.height=I+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,$(this.document.body,"p-unselectable-text"),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this))})}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{if(i.key=="Escape"){let n=L.getCurrent();(parseInt(this.container.style.zIndex)==n||this.zIndexForLayering==n)&&this.close(i)}})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?this.renderer.appendChild(this.document.body,this.wrapper):De(this.$appendTo(),this.wrapper))}restoreAppend(){this.container&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.modal&&this.enableModality(),this.focusOnShow&&this.focus();break;case"void":this.wrapper&&this.modal&&Y(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy(),this.onHide.emit({}),this.cd.markForCheck(),this.maskVisible!==this.visible&&(this.maskVisible=this.visible);break;case"visible":this.onShow.emit({});break}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(this.document.body.style.removeProperty("--scrollbar;-width"),this.maximized=!1),this.modal&&this.disableModality(),R(this.document.body,"p-overflow-hidden")&&$(this.document.body,"p-overflow-hidden"),this.container&&this.autoZIndex&&L.clear(this.container),this.zIndexForLayering&&L.revertZIndex(this.zIndexForLayering),this.container=null,this.wrapper=null,this._style=this.originalStyle?j({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=F(t)))(n||t)}})();static \u0275cmp=_e({type:t,selectors:[["p-dialog"]],contentQueries:function(i,n,a){if(i&1&&(b(a,Je,4),b(a,je,4),b(a,qe,4),b(a,et,4),b(a,tt,4),b(a,it,4),b(a,nt,4),b(a,Re,4)),i&2){let p;_(p=g())&&(n._headerTemplate=p.first),_(p=g())&&(n._contentTemplate=p.first),_(p=g())&&(n._footerTemplate=p.first),_(p=g())&&(n._closeiconTemplate=p.first),_(p=g())&&(n._maximizeiconTemplate=p.first),_(p=g())&&(n._minimizeiconTemplate=p.first),_(p=g())&&(n._headlessTemplate=p.first),_(p=g())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&(H(ot,5),H(je,5),H(qe,5)),i&2){let a;_(a=g())&&(n.headerViewChild=a.first),_(a=g())&&(n.contentViewChild=a.first),_(a=g())&&(n.footerViewChild=a.first)}},inputs:{hostName:"hostName",header:"header",draggable:[2,"draggable","draggable",m],resizable:[2,"resizable","resizable",m],contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",m],closeOnEscape:[2,"closeOnEscape","closeOnEscape",m],dismissableMask:[2,"dismissableMask","dismissableMask",m],rtl:[2,"rtl","rtl",m],closable:[2,"closable","closable",m],breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",m],blockScroll:[2,"blockScroll","blockScroll",m],autoZIndex:[2,"autoZIndex","autoZIndex",m],baseZIndex:[2,"baseZIndex","baseZIndex",X],minX:[2,"minX","minX",X],minY:[2,"minY","minY",X],focusOnShow:[2,"focusOnShow","focusOnShow",m],maximizable:[2,"maximizable","maximizable",m],keepInViewport:[2,"keepInViewport","keepInViewport",m],focusTrap:[2,"focusTrap","focusTrap",m],transitionOptions:"transitionOptions",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",appendTo:[1,"appendTo"],headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[ze([re,{provide:Ge,useExisting:t},{provide:Ae,useExisting:t}]),fe([P]),he],ngContentSelectors:st,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"class","style","ngStyle","pBind",4,"ngIf"],[3,"ngStyle","pBind"],["pFocusTrap","",3,"class","style","ngStyle","pBind","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngStyle","pBind","pFocusTrapDisabled"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"class","pBind","z-index","mousedown",4,"ngIf"],[3,"class","pBind","mousedown",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"mousedown","pBind"],[3,"id","class","pBind",4,"ngIf"],[3,"pBind"],[3,"pt","styleClass","ariaLabel","tabindex","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"id","pBind"],[3,"onClick","keydown.enter","pt","styleClass","ariaLabel","tabindex","buttonProps"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],["data-p-icon","window-maximize",4,"ngIf"],["data-p-icon","window-minimize",4,"ngIf"],["data-p-icon","window-maximize"],["data-p-icon","window-minimize"],[3,"class",4,"ngIf"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(xe(at),d(0,Ht,2,7,"div",6)),i&2&&o("ngIf",n.maskVisible)},dependencies:[Ve,Ee,Se,Be,Le,Ye,Ne,He,Qe,Xe,Z,P],encapsulation:2,data:{animation:[$e("animation",[ae("void => visible",[le(Qt)]),ae("visible => void",[le(Xt)])])]},changeDetection:0})}return t})(),bi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ge({type:t});static \u0275inj=de({imports:[Yt,Z,Z]})}return t})();export{re as a,Yt as b,bi as c};
