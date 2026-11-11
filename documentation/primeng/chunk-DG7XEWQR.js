import{a as Re}from"./chunk-J65EHHFF.js";import{a as H,b as Qe}from"./chunk-JNUBCW5H.js";import"./chunk-D22NEC44.js";import{c as Pe,d as W,f as J,h as X}from"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as Fe}from"./chunk-FKOOMXTU.js";import{a as E,b as z}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as je}from"./chunk-XCUGNKAG.js";import{a as C,b as Le}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as Te,h as q}from"./chunk-BL5WFH5W.js";import{c as Y}from"./chunk-AAKCLA3R.js";import{F as De,M as Be,O as Me,P as Ve,W as Ae,Z as Oe,e as Ee,f as ze}from"./chunk-MCW4FHXZ.js";import{Ea as Ie,Fa as N,H as he,Ia as xe,La as ke,Ma as Se,Na as A,Oa as Ce,P as K,s as ve}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as we,q as be,r as ye,w as V}from"./chunk-D2XKNHFS.js";import{Eb as m,Fb as a,Gb as o,Gc as M,Hb as s,La as $,Lb as R,Lc as ue,Mb as L,Nb as j,Ob as S,Pa as re,Pc as fe,Qa as l,S as ie,Sb as h,T as ne,Ub as d,V as ae,Va as P,X as O,Xb as T,Yb as F,Yc as _e,Zb as w,_b as b,aa as _,ba as v,ca as B,cc as ce,fc as se,gb as u,gc as y,hb as me,hc as r,kb as le,lb as pe,mb as f,oa as oe,rc as de,sc as Q,tc as U,uc as Z,vc as ge,wb as I}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Ne=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["image-accessibility-doc"]],decls:85,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),o(),a(3,"p"),r(4,"The preview button is a native "),a(5,"i"),r(6,"button"),o(),r(7," element with an "),a(8,"i"),r(9,"aria-label"),o(),r(10," that refers to the "),a(11,"i"),r(12,"aria.zoomImage"),o(),r(13," property of the "),a(14,"a",0),r(15,"locale"),o(),r(16," API by default."),o(),a(17,"p"),r(18,"When preview is active, "),a(19,"i"),r(20,"dialog"),o(),r(21," role with "),a(22,"i"),r(23,"aria-modal"),o(),r(24," is applied to the overlay image container."),o(),a(25,"p"),r(26,"Button controls use "),a(27,"i"),r(28,"aria.rotateRight"),o(),r(29,", "),a(30,"i"),r(31,"aria.rotateLeft"),o(),r(32,", "),a(33,"i"),r(34,"aria.zoomIn"),o(),r(35,", "),a(36,"i"),r(37,"aria.zoomOut"),o(),r(38," and "),a(39,"i"),r(40,"aria.close"),o(),r(41," from the "),a(42,"a",0),r(43,"locale"),o(),r(44," API as "),a(45,"i"),r(46,"aria-label"),o(),r(47,"."),o(),a(48,"h3"),r(49,"ButtonBar Keyboard Support"),o(),a(50,"p"),r(51,"When preview is activated, close button receives the initial focus."),o(),a(52,"div",1)(53,"table",2)(54,"thead")(55,"tr")(56,"th"),r(57,"Key"),o(),a(58,"th"),r(59,"Function"),o()()(),a(60,"tbody")(61,"tr")(62,"td")(63,"i"),r(64,"tab"),o()(),a(65,"td"),r(66,"Moves focus through button bar."),o()(),a(67,"tr")(68,"td")(69,"i"),r(70,"enter"),o()(),a(71,"td"),r(72,"Activates the button."),o()(),a(73,"tr")(74,"td")(75,"i"),r(76,"space"),o()(),a(77,"td"),r(78,"Activates the button."),o()(),a(79,"tr")(80,"td")(81,"i"),r(82,"esc"),o()(),a(83,"td"),r(84,"Closes the image preview."),o()()()()()())},dependencies:[C,q],encapsulation:2})}return t})();var qe=`
    .p-image-mask {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-image-preview {
        position: relative;
        display: inline-flex;
        line-height: 0;
    }

    .p-image-preview-mask {
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
        border: 0 none;
        padding: 0;
        cursor: pointer;
        background: transparent;
        color: dt('image.preview.mask.color');
        transition: background dt('image.transition.duration');
    }

    .p-image-preview:hover > .p-image-preview-mask,
    .p-image-preview-mask:focus-visible {
        opacity: 1;
        cursor: pointer;
        background: dt('image.preview.mask.background');
        outline: 0 none;
    }

    .p-image-preview-icon {
        font-size: dt('image.preview.icon.size');
        width: dt('image.preview.icon.size');
        height: dt('image.preview.icon.size');
    }

    .p-image-toolbar {
        position: absolute;
        inset-block-start: dt('image.toolbar.position.top');
        inset-inline-end: dt('image.toolbar.position.right');
        inset-inline-start: dt('image.toolbar.position.left');
        inset-block-end: dt('image.toolbar.position.bottom');
        display: flex;
        z-index: 1;
        padding: dt('image.toolbar.padding');
        background: dt('image.toolbar.background');
        backdrop-filter: blur(dt('image.toolbar.blur'));
        border-color: dt('image.toolbar.border.color');
        border-style: solid;
        border-width: dt('image.toolbar.border.width');
        border-radius: dt('image.toolbar.border.radius');
        gap: dt('image.toolbar.gap');
    }

    .p-image-action {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: dt('image.action.color');
        background: transparent;
        width: dt('image.action.size');
        height: dt('image.action.size');
        margin: 0;
        padding: 0;
        border: 0 none;
        cursor: pointer;
        user-select: none;
        border-radius: dt('image.action.border.radius');
        outline-color: transparent;
        transition:
            background dt('image.transition.duration'),
            color dt('image.transition.duration'),
            outline-color dt('image.transition.duration'),
            box-shadow dt('image.transition.duration');
    }

    .p-image-action:hover {
        color: dt('image.action.hover.color');
        background: dt('image.action.hover.background');
    }

    .p-image-action:focus-visible {
        box-shadow: dt('image.action.focus.ring.shadow');
        outline: dt('image.action.focus.ring.width') dt('image.action.focus.ring.style') dt('image.action.focus.ring.color');
        outline-offset: dt('image.action.focus.ring.offset');
    }

    .p-image-action .p-icon {
        font-size: dt('image.action.icon.size');
        width: dt('image.action.icon.size');
        height: dt('image.action.icon.size');
    }

    .p-image-action.p-disabled {
        pointer-events: auto;
    }

    .p-image-original {
        transition: transform 0.15s;
        max-width: 100vw;
        max-height: 100vh;
    }

    .p-image-original-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-image-original-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-image-original-enter-from,
    .p-image-original-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }
`;var Xe={root:({instance:t})=>["p-image p-component",{"p-image-preview":t.preview}],previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:({instance:t})=>["p-image-action p-image-zoom-out-button",{"p-disabled":t.isZoomOutDisabled}],zoomInButton:({instance:t})=>["p-image-action p-image-zoom-in-button",{"p-disabled":t.isZoomInDisabled}],closeButton:"p-image-action p-image-close-button",original:"p-image-original"},ee=(()=>{class t extends xe{name="image";style=qe;classes=Xe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=oe(t)))(n||t)}})();static \u0275prov=ie({token:t,factory:t.\u0275fac})}return t})();var Ye=["indicator"],et=["rotaterighticon"],tt=["rotatelefticon"],it=["zoomouticon"],nt=["zoominicon"],at=["closeicon"],ot=["preview"],rt=["image"],mt=["mask"],lt=["previewButton"],pt=["closeButton"],ct=t=>({errorCallback:t}),st=(t,p)=>({height:t,width:p}),dt=(t,p)=>({showTransitionParams:t,hideTransitionParams:p}),gt=t=>({value:"visible",params:t}),ut=(t,p,e)=>({class:t,style:p,previewCallback:e});function ft(t,p){if(t&1){let e=S();R(0),a(1,"img",8),h("error",function(n){_(e);let c=d();return v(c.imageError(n))}),o(),L()}if(t&2){let e=d();l(),y(e.imageClass),m("ngStyle",e.imageStyle)("pBind",e.ptm("image")),I("src",e.src,$)("srcset",e.srcSet)("sizes",e.sizes)("alt",e.alt)("width",e.width)("height",e.height)("loading",e.loading)}}function _t(t,p){t&1&&j(0)}function vt(t,p){t&1&&j(0)}function ht(t,p){if(t&1&&(R(0),f(1,vt,1,0,"ng-container",11),L()),t&2){let e=d(2);l(),m("ngTemplateOutlet",e.indicatorTemplate||e._indicatorTemplate)}}function wt(t,p){if(t&1&&(B(),s(0,"svg",12)),t&2){let e=d(2);y(e.cx("previewIcon")),m("pBind",e.ptm("previewIcon"))}}function bt(t,p){if(t&1){let e=S();a(0,"button",9,0),h("click",function(){_(e);let n=d();return v(n.onImageClick())}),f(2,ht,2,1,"ng-container",10)(3,wt,1,3,"ng-template",null,1,M),o()}if(t&2){let e=ce(4),i=d();y(i.cx("previewMask")),m("ngStyle",Z(7,st,i.height+"px",i.width+"px"))("pBind",i.ptm("previewMask")),I("aria-label",i.zoomImageAriaLabel),l(2),m("ngIf",i.indicatorTemplate||i._indicatorTemplate)("ngIfElse",e)}}function yt(t,p){t&1&&(B(),s(0,"svg",22))}function It(t,p){}function Tt(t,p){t&1&&f(0,It,0,0,"ng-template")}function xt(t,p){t&1&&(B(),s(0,"svg",23))}function kt(t,p){}function St(t,p){t&1&&f(0,kt,0,0,"ng-template")}function Ct(t,p){t&1&&(B(),s(0,"svg",24))}function Et(t,p){}function zt(t,p){t&1&&f(0,Et,0,0,"ng-template")}function Dt(t,p){t&1&&(B(),s(0,"svg",25))}function Bt(t,p){}function Mt(t,p){t&1&&f(0,Bt,0,0,"ng-template")}function Vt(t,p){t&1&&(B(),s(0,"svg",26))}function At(t,p){}function Ot(t,p){t&1&&f(0,At,0,0,"ng-template")}function Pt(t,p){if(t&1){let e=S();R(0),a(1,"img",27),h("click",function(){_(e);let n=d(3);return v(n.onPreviewImageClick())}),o(),L()}if(t&2){let e=d(3);l(),y(e.cx("original")),m("ngStyle",e.imagePreviewStyle())("pBind",e.ptm("original")),I("src",e.previewImageSrc?e.previewImageSrc:e.src,$)("srcset",e.previewImageSrcSet)("sizes",e.previewImageSizes)}}function Rt(t,p){t&1&&j(0)}function Lt(t,p){if(t&1){let e=S();a(0,"div"),h("@animation.start",function(n){_(e);let c=d(2);return v(c.onAnimationStart(n))})("@animation.done",function(n){_(e);let c=d(2);return v(c.onAnimationEnd(n))}),f(1,Pt,2,7,"ng-container",4)(2,Rt,1,0,"ng-container",5),o()}if(t&2){let e=d(2);m("@animation",U(7,gt,Z(4,dt,e.showTransitionOptions,e.hideTransitionOptions))),l(),m("ngIf",!e.previewTemplate&&!e._previewTemplate),l(),m("ngTemplateOutlet",e.previewTemplate||e._previewTemplate)("ngTemplateOutletContext",ge(9,ut,e.cx("original"),e.imagePreviewStyle(),e.onPreviewImageClick.bind(e)))}}function jt(t,p){if(t&1){let e=S();a(0,"div",13,2),h("click",function(){_(e);let n=d();return v(n.onMaskClick())})("keydown",function(n){_(e);let c=d();return v(c.onMaskKeydown(n))}),a(2,"div",14),h("click",function(n){_(e);let c=d();return v(c.handleToolbarClick(n))}),a(3,"button",15),h("click",function(){_(e);let n=d();return v(n.rotateRight())}),f(4,yt,1,0,"svg",16)(5,Tt,1,0,null,11),o(),a(6,"button",15),h("click",function(){_(e);let n=d();return v(n.rotateLeft())}),f(7,xt,1,0,"svg",17)(8,St,1,0,null,11),o(),a(9,"button",18),h("click",function(){_(e);let n=d();return v(n.zoomOut())}),f(10,Ct,1,0,"svg",19)(11,zt,1,0,null,11),o(),a(12,"button",18),h("click",function(){_(e);let n=d();return v(n.zoomIn())}),f(13,Dt,1,0,"svg",20)(14,Mt,1,0,null,11),o(),a(15,"button",15,3),h("click",function(){_(e);let n=d();return v(n.closePreview())}),f(17,Vt,1,0,"svg",21)(18,Ot,1,0,null,11),o()(),f(19,Lt,3,13,"div",4),o()}if(t&2){let e=d();y(e.cx("mask")),m("pBind",e.ptm("mask")),I("aria-modal",e.maskVisible),l(2),y(e.cx("toolbar")),m("pBind",e.ptm("toolbar")),l(),y(e.cx("rotateRightButton")),m("pBind",e.ptm("rotateRightButton")),I("aria-label",e.rightAriaLabel()),l(),m("ngIf",!e.rotateRightIconTemplate&&!e._rotateRightIconTemplate),l(),m("ngTemplateOutlet",e.rotateRightIconTemplate||e._rotateRightIconTemplate),l(),y(e.cx("rotateLeftButton")),m("pBind",e.ptm("rotateLeftButton")),I("aria-label",e.leftAriaLabel()),l(),m("ngIf",!e.rotateLeftIconTemplate&&!e._rotateLeftIconTemplate),l(),m("ngTemplateOutlet",e.rotateLeftIconTemplate||e._rotateLeftIconTemplate),l(),y(e.cx("zoomOutButton")),m("disabled",e.isZoomOutDisabled)("pBind",e.ptm("zoomOutButton")),I("aria-label",e.zoomOutAriaLabel()),l(),m("ngIf",!e.zoomOutIconTemplate&&!e._zoomOutIconTemplate),l(),m("ngTemplateOutlet",e.zoomOutIconTemplate||e._zoomOutIconTemplate),l(),y(e.cx("zoomInButton")),m("disabled",e.isZoomInDisabled)("pBind",e.ptm("zoomInButton")),I("aria-label",e.zoomInAriaLabel()),l(),m("ngIf",!e.zoomInIconTemplate&&!e._zoomInIconTemplate),l(),m("ngTemplateOutlet",e.zoomInIconTemplate||e._zoomInIconTemplate),l(),y(e.cx("closeButton")),m("pBind",e.ptm("closeButton")),I("aria-label",e.closeAriaLabel()),l(2),m("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),l(),m("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate),l(),m("ngIf",e.previewVisible)}}var He=new ae("IMAGE_INSTANCE"),k=(()=>{class t extends Se{$pcImage=O(He,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=O(A,{self:!0});imageClass;imageStyle;styleClass;src;srcSet;sizes;previewImageSrc;previewImageSrcSet;previewImageSizes;alt;width;height;loading;preview=!1;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";appendTo=fe(void 0);onShow=new P;onHide=new P;onImageError=new P;mask;previewButton;closeButton;indicatorTemplate;rotateRightIconTemplate;rotateLeftIconTemplate;zoomOutIconTemplate;zoomInIconTemplate;closeIconTemplate;previewTemplate;imageTemplate;maskVisible=!1;previewVisible=!1;rotate=0;scale=1;previewClick=!1;container;wrapper;_componentStyle=O(ee);$appendTo=ue(()=>this.appendTo()||this.config.overlayAppendTo());get isZoomOutDisabled(){return this.scale-this.zoomSettings.step<=this.zoomSettings.min}get isZoomInDisabled(){return this.scale+this.zoomSettings.step>=this.zoomSettings.max}zoomSettings={default:1,step:.1,max:1.5,min:.5};constructor(){super()}templates;_indicatorTemplate;_rotateRightIconTemplate;_rotateLeftIconTemplate;_zoomOutIconTemplate;_zoomInIconTemplate;_closeIconTemplate;_imageTemplate;_previewTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"indicator":this._indicatorTemplate=e.template;break;case"rotaterighticon":this._rotateRightIconTemplate=e.template;break;case"rotatelefticon":this._rotateLeftIconTemplate=e.template;break;case"zoomouticon":this._zoomOutIconTemplate=e.template;break;case"zoominicon":this._zoomInIconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"image":this._imageTemplate=e.template;break;case"preview":this._previewTemplate=e.template;break;default:this._indicatorTemplate=e.template;break}})}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0,Ee())}onMaskClick(){this.previewClick||this.closePreview(),this.previewClick=!1}onMaskKeydown(e){switch(e.code){case"Escape":this.onMaskClick(),setTimeout(()=>{K(this.previewButton?.nativeElement)},25),e.preventDefault();break;default:break}}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+this.zoomSettings.step,this.previewClick=!0}zoomOut(){this.scale=this.scale-this.zoomSettings.step,this.previewClick=!0}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.$attrSelector&&this.wrapper?.setAttribute(this.$attrSelector,""),this.appendContainer(),this.moveOnTop(),setTimeout(()=>{K(this.closeButton?.nativeElement)},25);break;case"void":this.wrapper&&ve(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":Y.clear(this.wrapper),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({});break}}moveOnTop(){Y.set("modal",this.wrapper,this.config.zIndex.modal)}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"&&this.wrapper?this.document.body.appendChild(this.wrapper):this.wrapper&&he(this.$appendTo(),this.wrapper))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}get zoomImageAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomImage:void 0}handleToolbarClick(e){e.stopPropagation()}closePreview(){this.previewVisible=!1,this.rotate=0,this.scale=this.zoomSettings.default,ze()}imageError(e){this.onImageError.emit(e)}rightAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateRight:void 0}leftAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateLeft:void 0}zoomInAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomIn:void 0}zoomOutAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomOut:void 0}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onKeydownHandler(e){this.previewVisible&&this.closePreview()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["p-image"]],contentQueries:function(i,n,c){if(i&1&&(T(c,Ye,4),T(c,et,4),T(c,tt,4),T(c,it,4),T(c,nt,4),T(c,at,4),T(c,ot,4),T(c,rt,4),T(c,Ie,4)),i&2){let g;w(g=b())&&(n.indicatorTemplate=g.first),w(g=b())&&(n.rotateRightIconTemplate=g.first),w(g=b())&&(n.rotateLeftIconTemplate=g.first),w(g=b())&&(n.zoomOutIconTemplate=g.first),w(g=b())&&(n.zoomInIconTemplate=g.first),w(g=b())&&(n.closeIconTemplate=g.first),w(g=b())&&(n.previewTemplate=g.first),w(g=b())&&(n.imageTemplate=g.first),w(g=b())&&(n.templates=g)}},viewQuery:function(i,n){if(i&1&&(F(mt,5),F(lt,5),F(pt,5)),i&2){let c;w(c=b())&&(n.mask=c.first),w(c=b())&&(n.previewButton=c.first),w(c=b())&&(n.closeButton=c.first)}},hostVars:2,hostBindings:function(i,n){i&1&&h("keydown.escape",function(g){return n.onKeydownHandler(g)},re),i&2&&y(n.cn(n.cx("root"),n.styleClass))},inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",src:"src",srcSet:"srcSet",sizes:"sizes",previewImageSrc:"previewImageSrc",previewImageSrcSet:"previewImageSrcSet",previewImageSizes:"previewImageSizes",alt:"alt",width:"width",height:"height",loading:"loading",preview:[2,"preview","preview",_e],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",appendTo:[1,"appendTo"]},outputs:{onShow:"onShow",onHide:"onHide",onImageError:"onImageError"},features:[de([ee,{provide:He,useExisting:t},{provide:ke,useExisting:t}]),pe([A]),le],decls:4,vars:7,consts:[["previewButton",""],["defaultTemplate",""],["mask",""],["closeButton",""],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",3,"class","ngStyle","pBind","click",4,"ngIf"],["role","dialog","pFocusTrap","",3,"class","pBind","click","keydown",4,"ngIf"],[3,"error","ngStyle","pBind"],["type","button",3,"click","ngStyle","pBind"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["data-p-icon","eye",3,"pBind"],["role","dialog","pFocusTrap","",3,"click","keydown","pBind"],[3,"click","pBind"],["type","button",3,"click","pBind"],["data-p-icon","refresh",4,"ngIf"],["data-p-icon","undo",4,"ngIf"],["type","button",3,"click","disabled","pBind"],["data-p-icon","search-minus",4,"ngIf"],["data-p-icon","search-plus",4,"ngIf"],["data-p-icon","times",4,"ngIf"],["data-p-icon","refresh"],["data-p-icon","undo"],["data-p-icon","search-minus"],["data-p-icon","search-plus"],["data-p-icon","times"],[3,"click","ngStyle","pBind"]],template:function(i,n){i&1&&f(0,ft,2,11,"ng-container",4)(1,_t,1,0,"ng-container",5)(2,bt,5,10,"button",6)(3,jt,20,40,"div",7),i&2&&(m("ngIf",!n.imageTemplate&&!n._imageTemplate),l(),m("ngTemplateOutlet",n.imageTemplate||n._imageTemplate)("ngTemplateOutletContext",U(5,ct,n.imageError.bind(n))),l(),m("ngIf",n.preview),l(),m("ngIf",n.maskVisible))},dependencies:[V,we,ye,be,Be,De,Oe,Me,Ve,Ae,Re,N,Ce,A],encapsulation:2,data:{animation:[Pe("animation",[X("void => visible",[J({transform:"scale(0.7)",opacity:0}),W("{{showTransitionParams}}")]),X("visible => void",[W("{{hideTransitionParams}}",J({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),D=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=me({type:t});static \u0275inj=ne({imports:[k,N,N]})}return t})();var Ft=()=>["/galleria"],Ge=(()=>{class t{code={basic:'<p-image src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" />',html:`<div class="card flex justify-center">
    <p-image src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Image } from 'primeng/image';

@Component({
    selector: 'image-basic-demo',
    templateUrl: './image-basic-demo.html',
    standalone: true,
    imports: [Image]
})
export class ImageBasicDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["basic-doc"]],decls:11,vars:3,consts:[[3,"routerLink"],[1,"card","flex","justify-center"],["src","/_ext/primefaces.org/cdn/primeng/images/galleria/galleria10.jpg","alt","Image","width","250"],["selector","image-basic-demo",3,"code"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Image is used as the native "),a(3,"i"),r(4,"img"),o(),r(5," element and supports all properties that the native element has. For multiple image, see "),a(6,"a",0),r(7,"Galleria."),o()()(),a(8,"div",1),s(9,"p-image",2),o(),s(10,"app-code",3)),i&2&&(l(6),m("routerLink",Q(2,Ft)),l(4),m("code",n.code))},dependencies:[C,z,E,D,k,q,Te],encapsulation:2})}return t})();var $e=(()=>{class t{code={typescript:"import { ImageModule } from 'primeng/image';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["image-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&s(0,"app-code",0),i&2&&m("code",n.code)("hideToggleCode",!0)},dependencies:[z,E],encapsulation:2})}return t})();var Ue=(()=>{class t{code={basic:'<p-image src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" [preview]="true" />',html:`<div class="card flex justify-center">
    <p-image src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria10.jpg" alt="Image" width="250" [preview]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Image } from 'primeng/image';

@Component({
    selector: 'image-preview-demo',
    templateUrl: './image-preview-demo.html',
    standalone: true,
    imports: [Image]
})
export class ImagePreviewDemo {
}`,service:["PhotoService"]};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["image-preview-demo"]],decls:6,vars:2,consts:[[1,"card","flex","justify-center"],["src","/_ext/primefaces.org/cdn/primeng/images/galleria/galleria10.jpg","alt","Image","width","250",3,"preview"],["selector","image-preview-demo",3,"code"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Preview mode displays a modal layer when the image is clicked that provides transformation options such as rotating and zooming."),o()(),a(3,"div",0),s(4,"p-image",1),o(),s(5,"app-code",2)),i&2&&(l(4),m("preview",!0),l(),m("code",n.code))},dependencies:[C,z,E,D,k],encapsulation:2})}return t})();function Qt(t,p){t&1&&s(0,"i",6)}function Nt(t,p){t&1&&s(0,"img",7)}function qt(t,p){if(t&1){let e=S();a(0,"img",8),h("click",function(){let n=_(e).previewCallback;return v(n())}),o()}if(t&2){let e=p.style;se(e)}}var Ze=(()=>{class t{code={basic:`<p-image src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" [preview]="true" alt="Image" width="250">
    <ng-template #indicator>
        <i class="pi pi-search"></i>
    </ng-template>
    <ng-template #image>
        <img src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" width="250" />
    </ng-template>
    <ng-template #preview let-style="style" let-previewCallback="previewCallback">
        <img src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" [style]="style" (click)="previewCallback()" />
    </ng-template>
</p-image>`,html:`<div class="card flex justify-center">
    <p-image src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" [preview]="true" alt="Image" width="250">
        <ng-template #indicator>
            <i class="pi pi-search"></i>
        </ng-template>
        <ng-template #image>
            <img src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" width="250" />
        </ng-template>
        <ng-template #preview let-style="style" let-previewCallback="previewCallback">
            <img src="/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg" alt="image" [style]="style" (click)="previewCallback()" />
        </ng-template>
    </p-image>
</div>`,typescript:`import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'image-template-demo',
    templateUrl: './image-template-demo.html',
    standalone: true,
    imports: [ImageModule]
})
export class ImageTemplateDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["template-doc"]],decls:15,vars:2,consts:[["indicator",""],["image",""],["preview",""],[1,"card","flex","justify-center"],["src","/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","Image","width","250",3,"preview"],["selector","image-template-demo",3,"code"],[1,"pi","pi-search"],["src","/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","image","width","250"],["src","/_ext/primefaces.org/cdn/primeng/images/galleria/galleria11.jpg","alt","image",3,"click"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"An eye icon is displayed by default when the image is hovered in preview mode. Use the "),a(3,"i"),r(4,"indicator"),o(),r(5," template for custom content."),o()(),a(6,"div",3)(7,"p-image",4),f(8,Qt,1,0,"ng-template",null,0,M)(10,Nt,1,0,"ng-template",null,1,M)(12,qt,1,2,"ng-template",null,2,M),o()(),s(14,"app-code",5)),i&2&&(l(7),m("preview",!0),l(7),m("code",n.code))},dependencies:[C,z,E,D,k],encapsulation:2})}return t})();var Ke=(()=>{class t{docs=[{data:H("Image"),key:"Image"}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["image-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],["src","/_ext/primefaces.org/cdn/primeng/images/galleria/galleria1.jpg","alt","Image","width","250",3,"preview"]],template:function(i,n){i&1&&(a(0,"app-docptviewer",0),s(1,"p-image",1),o()),i&2&&(m("docs",n.docs),l(),m("preview",!0))},dependencies:[V,Qe,D,k],encapsulation:2})}return t})();var We=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:Ke},{id:"pt.doc.image",label:"Image PT Options",component:Le,data:H("Image")}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["image-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),r(3,"Image Pass Through"),o()(),s(4,"app-docsection",2),o()),i&2&&(l(4),m("docs",n.docs))},dependencies:[V,je],encapsulation:2})}return t})();var Ht=()=>["Image"],Je=(()=>{class t{docs=[{id:"import",label:"Import",component:$e},{id:"basic",label:"Basic",component:Ge},{id:"preview",label:"Preview",component:Ue},{id:"template",label:"Template",component:Ze},{id:"accessibility",label:"Accessibility",component:Ne}];ptComponent=We;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=u({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Image Component","header","Image","description","Displays an image with preview and tranformation options.","themeDocs","image",3,"docs","apiDocs","ptDocs"]],template:function(i,n){i&1&&s(0,"app-doc",0),i&2&&m("docs",n.docs)("apiDocs",Q(3,Ht))("ptDocs",n.ptComponent)},dependencies:[Fe],encapsulation:2})}return t})();var cn=[{path:"",component:Je}];export{cn as default};
