import{a as ke,b as Ce}from"./chunk-J65EHHFF.js";import{c as xe,d as A,f as M,h as V,i as Q,k as F}from"./chunk-YUYJZJA5.js";import{c as x}from"./chunk-AAKCLA3R.js";import{W as ge,e as be,f as ye,ga as ve}from"./chunk-MCW4FHXZ.js";import{Ea as fe,Fa as S,H as pe,Ia as ue,La as _e,Ma as we,Na as v,la as O,s as B,u as le}from"./chunk-UOUHADUB.js";import{k as de,n as ce,r as me,w as he}from"./chunk-D2XKNHFS.js";import{Ab as K,Eb as o,Fb as f,Gb as u,Gc as ae,Hb as W,Lb as X,Mb as Y,Nb as g,Ob as I,Qa as p,S as z,Sb as E,T as N,Ub as s,V as Z,Va as T,Vb as U,Wb as J,X as k,Xb as _,Yb as D,Yc as h,Zb as c,Zc as se,_b as m,aa as w,ba as b,ca as j,fc as ee,gb as P,gc as L,hb as q,hc as te,ic as ne,kb as $,lb as G,mb as d,oa as C,rc as ie,tc as re,uc as oe,wb as y,zb as H}from"./chunk-O3KMSE75.js";var Te=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var De=`
    ${Te}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`,Le={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},R=(()=>{class t extends ue{name="drawer";style=De;classes=Le;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var Be=["header"],Oe=["footer"],Ae=["content"],Me=["closeicon"],Ve=["headless"],Qe=["container"],Fe=["closeButton"],Re=["*"],ze=(t,a)=>({transform:t,transition:a}),Ne=t=>({value:"visible",params:t});function Ze(t,a){t&1&&g(0)}function je(t,a){if(t&1&&d(0,Ze,1,0,"ng-container",4),t&2){let e=s(2);o("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Pe(t,a){t&1&&g(0)}function qe(t,a){if(t&1&&(f(0,"div",9),te(1),u()),t&2){let e=s(3);L(e.cx("title")),o("pBind",e.ptm("title")),p(),ne(e.header)}}function $e(t,a){t&1&&(j(),W(0,"svg",12)),t&2&&y("data-pc-section","closeicon")}function Ge(t,a){}function He(t,a){t&1&&d(0,Ge,0,0,"ng-template")}function Ke(t,a){if(t&1&&d(0,$e,1,1,"svg",11)(1,He,1,0,null,4),t&2){let e=s(4);o("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),p(),o("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function We(t,a){if(t&1){let e=I();f(0,"p-button",10),E("onClick",function(n){w(e);let r=s(3);return b(r.close(n))})("keydown.enter",function(n){w(e);let r=s(3);return b(r.close(n))}),d(1,Ke,2,2,"ng-template",null,1,ae),u()}if(t&2){let e=s(3);o("pt",e.ptm("pcCloseButton"))("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),y("data-pc-group-section","iconcontainer")}}function Xe(t,a){t&1&&g(0)}function Ye(t,a){t&1&&g(0)}function Ue(t,a){if(t&1&&(X(0),f(1,"div",5),d(2,Ye,1,0,"ng-container",4),u(),Y()),t&2){let e=s(3);p(),o("pBind",e.ptm("footer"))("ngClass",e.cx("footer")),y("data-pc-section","footer"),p(),o("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Je(t,a){if(t&1&&(f(0,"div",5),d(1,Pe,1,0,"ng-container",4)(2,qe,2,4,"div",6)(3,We,3,5,"p-button",7),u(),f(4,"div",5),J(5),d(6,Xe,1,0,"ng-container",4),u(),d(7,Ue,3,4,"ng-container",8)),t&2){let e=s(2);o("pBind",e.ptm("header"))("ngClass",e.cx("header")),y("data-pc-section","header"),p(),o("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),p(),o("ngIf",e.header),p(),o("ngIf",e.showCloseIcon&&e.closable),p(),o("pBind",e.ptm("content"))("ngClass",e.cx("content")),y("data-pc-section","content"),p(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),p(),o("ngIf",e.footerTemplate||e._footerTemplate)}}function et(t,a){if(t&1){let e=I();f(0,"div",3,0),E("@panelState.start",function(n){w(e);let r=s();return b(r.onAnimationStart(n))})("@panelState.done",function(n){w(e);let r=s();return b(r.onAnimationEnd(n))})("keydown",function(n){w(e);let r=s();return b(r.onKeyDown(n))}),H(2,je,1,1,"ng-container")(3,Je,8,11),u()}if(t&2){let e=s();ee(e.style),L(e.cn(e.cx("root"),e.styleClass)),o("pBind",e.ptm("root"))("@panelState",re(10,Ne,oe(7,ze,e.transformOptions,e.transitionOptions))),p(2),K(e.headlessTemplate||e._headlessTemplate?2:3)}}var Se=new Z("DRAWER_INSTANCE"),tt=Q([M({transform:"{{transform}}",opacity:0}),A("{{transition}}")]),nt=Q([A("{{transition}}",M({transform:"{{transform}}",opacity:0}))]),Ie="translate3d(-100%, 0px, 0px)",it=(()=>{class t extends we{$pcDrawer=k(Se,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=k(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=Ie}header;maskStyle;closable=!0;onShow=new T;onHide=new T;visibleChange=new T;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=Ie;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=k(R);onAfterViewInit(){this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&x.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(O(this.mask,"style",this.getMaskStyle()),O(this.mask,"style",`z-index: ${n}`),B(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&be())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,i])=>`${e}: ${i}`).join("; "):""}disableModality(){this.mask&&(le(this.mask,"p-overlay-mask-enter"),B(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&ye(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),x.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&pe(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===x.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&x.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=P({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,r){if(i&1&&(_(r,Be,4),_(r,Oe,4),_(r,Ae,4),_(r,Me,4),_(r,Ve,4),_(r,fe,4)),i&2){let l;c(l=m())&&(n.headerTemplate=l.first),c(l=m())&&(n.footerTemplate=l.first),c(l=m())&&(n.contentTemplate=l.first),c(l=m())&&(n.closeIconTemplate=l.first),c(l=m())&&(n.headlessTemplate=l.first),c(l=m())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&(D(Qe,5),D(Fe,5)),i&2){let r;c(r=m())&&(n.containerViewChild=r.first),c(r=m())&&(n.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",h],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",h],baseZIndex:[2,"baseZIndex","baseZIndex",se],modal:[2,"modal","modal",h],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",h],showCloseIcon:[2,"showCloseIcon","showCloseIcon",h],closeOnEscape:[2,"closeOnEscape","closeOnEscape",h],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",h]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[ie([R,{provide:Se,useExisting:t},{provide:_e,useExisting:t}]),G([v]),$],ngContentSelectors:Re,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","class","style","keydown",4,"ngIf"],["role","complementary","pFocusTrap","",3,"keydown","pBind"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(U(),d(0,et,4,12,"div",2)),i&2&&o("ngIf",n.visible)},dependencies:[he,de,ce,me,ve,ge,S,v,Ce,ke],encapsulation:2,data:{animation:[xe("panelState",[V("void => visible",[F(tt)]),V("visible => void",[F(nt)])])]},changeDetection:0})}return t})(),At=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=q({type:t});static \u0275inj=N({imports:[it,S,S]})}return t})();export{it as a,At as b};
