import{a as De}from"./chunk-J65EHHFF.js";import{c as Ee,d as le,f as oe,h as re}from"./chunk-YUYJZJA5.js";import{c as se}from"./chunk-AAKCLA3R.js";import{A as Ge,B as ne,C as ae,D as Ne,W as Pe,ba as Oe,e as Fe,f as Ae}from"./chunk-MCW4FHXZ.js";import{Ea as Se,Fa as ie,Ia as ke,La as Ve,Ma as L,N as D,Na as x,O as K,Oa as Be,P as we,Q as Te,la as Y,ma as ye,s as X,u as q}from"./chunk-UOUHADUB.js";import{k as Ce,m as J,n as M,q as ee,r as z,w as te,y as F}from"./chunk-D2XKNHFS.js";import{$a as A,Eb as l,Fb as g,Gb as v,Gc as Ie,Hb as I,Lb as P,Mb as O,Nb as ve,Ob as w,Pa as he,Qa as c,S as de,Sb as _,T as ue,Ub as o,V as pe,Va as k,Wc as xe,X as T,Xb as y,Yb as R,Yc as h,Zb as b,Zc as E,_b as f,aa as d,ba as u,ca as B,cc as be,fc as fe,gb as G,gc as p,hb as ge,kb as N,lb as H,mb as m,oa as $,qa as me,rc as Q,sc as _e,tc as j,uc as W,wb as C}from"./chunk-O3KMSE75.js";var Me=`
    .p-galleria {
        overflow: hidden;
        border-style: solid;
        border-width: dt('galleria.border.width');
        border-color: dt('galleria.border.color');
        border-radius: dt('galleria.border.radius');
    }

    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-items-container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-items {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-nav-button {
        position: absolute !important;
        top: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: dt('galleria.nav.button.background');
        color: dt('galleria.nav.button.color');
        width: dt('galleria.nav.button.size');
        height: dt('galleria.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');
        padding: 0;
        user-select: none;
        border: 0 none;
        cursor: pointer;
        outline-color: transparent;
    }

    .p-galleria-nav-button:not(.p-disabled):hover {
        background: dt('galleria.nav.button.hover.background');
        color: dt('galleria.nav.button.hover.color');
    }

    .p-galleria-nav-button:not(.p-disabled):focus-visible {
        box-shadow: dt('galleria.nav.button.focus.ring.shadow');
        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');
        outline-offset: dt('galleria.nav.button.focus.ring.offset');
    }

    .p-galleria-next-icon,
    .p-galleria-prev-icon {
        font-size: dt('galleria.nav.icon.size');
        width: dt('galleria.nav.icon.size');
        height: dt('galleria.nav.icon.size');
    }

    .p-galleria-prev-button {
        border-radius: dt('galleria.nav.button.prev.border.radius');
        left: 0;
    }

    .p-galleria-next-button {
        border-radius: dt('galleria.nav.button.next.border.radius');
        right: 0;
    }

    .p-galleria-prev-button:dir(rtl) {
        left: auto;
        right: 0;
        transform: rotate(180deg);
    }

    .p-galleria-next-button:dir(rtl) {
        right: auto;
        left: 0;
        transform: rotate(180deg);
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-hover-navigators .p-galleria-nav-button {
        pointer-events: none;
        opacity: 0;
        transition: opacity dt('galleria.transition.duration') ease-in-out;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: dt('galleria.caption.background');
        color: dt('galleria.caption.color');
        padding: dt('galleria.caption.padding');
    }

    .p-galleria-thumbnails {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-nav-button {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        margin: 0 dt('galleria.thumbnail.nav.button.gutter');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        background: transparent;
        color: dt('galleria.thumbnail.nav.button.color');
        width: dt('galleria.thumbnail.nav.button.size');
        height: dt('galleria.thumbnail.nav.button.size');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.thumbnail.nav.button.border.radius');
    }

    .p-galleria-thumbnail-nav-button:hover {
        background: dt('galleria.thumbnail.nav.button.hover.background');
        color: dt('galleria.thumbnail.nav.button.hover.color');
    }

    .p-galleria-thumbnail-nav-button:focus-visible {
        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');
        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');
        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');
    }

    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
        font-size: dt('galleria.thumbnail.nav.button.icon.size');
        width: dt('galleria.thumbnail.nav.button.icon.size');
        height: dt('galleria.thumbnail.nav.button.icon.size');
    }

    .p-galleria-thumbnails-content {
        display: flex;
        flex-direction: row;
        background: dt('galleria.thumbnails.content.background');
        padding: dt('galleria.thumbnails.content.padding');
    }

    .p-galleria-thumbnails-viewport {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-items:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail {
        outline-color: transparent;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-right .p-galleria-items-container {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-items-container,
    .p-galleria-thumbnails-top .p-galleria-items-container {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails,
    .p-galleria-thumbnails-top .p-galleria-thumbnails {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,
    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    .p-galleria-indicator-list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('galleria.indicator.list.padding');
        gap: dt('galleria.indicator.list.gap');
        margin: 0;
        list-style: none;
    }

    .p-galleria-indicator-button {
        display: inline-flex;
        align-items: center;
        background: dt('galleria.indicator.button.background');
        width: dt('galleria.indicator.button.width');
        height: dt('galleria.indicator.button.height');
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration'),
            box-shadow dt('galleria.transition.duration');
        outline-color: transparent;
        border-radius: dt('galleria.indicator.button.border.radius');
        margin: 0;
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
    }

    .p-galleria-indicator-button:hover {
        background: dt('galleria.indicator.button.hover.background');
    }

    .p-galleria-indicator-button:focus-visible {
        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');
        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');
        outline-offset: dt('galleria.indicator.button.focus.ring.offset');
    }

    .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.indicator.button.active.background');
    }

    .p-galleria-indicators-left .p-galleria-items-container,
    .p-galleria-indicators-right .p-galleria-items-container {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-items,
    .p-galleria-indicators-top .p-galleria-items {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-top .p-galleria-indicator-list {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicator-list,
    .p-galleria-indicators-right .p-galleria-indicator-list {
        flex-direction: column;
    }

    .p-galleria-inset-indicators .p-galleria-indicator-list {
        position: absolute;
        display: flex;
        z-index: 1;
        background: dt('galleria.inset.indicator.list.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {
        background: dt('galleria.inset.indicator.button.hover.background');
    }

    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
        background: dt('galleria.inset.indicator.button.active.background');
    }

    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close-button {
        position: absolute !important;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: dt('galleria.close.button.gutter');
        background: dt('galleria.close.button.background');
        color: dt('galleria.close.button.color');
        width: dt('galleria.close.button.size');
        height: dt('galleria.close.button.size');
        padding: 0;
        border: none;
        user-select: none;
        cursor: pointer;
        border-radius: dt('galleria.close.button.border.radius');
        outline-color: transparent;
        transition:
            background dt('galleria.transition.duration'),
            color dt('galleria.transition.duration'),
            outline-color dt('galleria.transition.duration');
    }

    .p-galleria-close-icon {
        font-size: dt('galleria.close.button.icon.size');
        width: dt('galleria.close.button.icon.size');
        height: dt('galleria.close.button.icon.size');
    }

    .p-galleria-close-button:hover {
        background: dt('galleria.close.button.hover.background');
        color: dt('galleria.close.button.hover.color');
    }

    .p-galleria-close-button:focus-visible {
        box-shadow: dt('galleria.close.button.focus.ring.shadow');
        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');
        outline-offset: dt('galleria.close.button.focus.ring.offset');
    }

    .p-galleria-mask .p-galleria-nav-button {
        position: fixed;
        top: 50%;
    }

    .p-galleria-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-galleria-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-galleria-enter-from,
    .p-galleria-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-galleria-enter-active .p-galleria-nav-button {
        opacity: 0;
    }

    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
`;var He={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:t})=>{let r=t.galleria.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.galleria.thumbnailsPosition),e=t.galleria.showIndicators&&t.getPositionClass("p-galleria-indicators",t.galleria.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.galleria.fullScreen,"p-galleria-inset-indicators":t.galleria.showIndicatorsOnItem,"p-galleria-hover-navigators":t.galleria.showItemNavigatorsOnHover&&!t.galleria.fullScreen},r,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:r})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(r)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:r,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===r,"p-galleria-thumbnail-item-active":t.isItemActive(r),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===r,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===r}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},V=(()=>{class t extends ke{name="galleria";style=Me;classes=He;static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();var Re=["header"],Qe=["footer"],ze=["indicator"],$e=["caption"],je=["closeicon"],qe=["previousthumbnailicon"],Ke=["nextthumbnailicon"],Ze=["itempreviousicon"],Ue=["itemnexticon"],We=["item"],Xe=["thumbnail"],Ye=["mask"],Je=["container"],et=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),tt=t=>({value:"visible",params:t});function it(t,r){if(t&1){let e=w();g(0,"div",7),_("@animation.start",function(n){d(e);let a=o(3);return u(a.onAnimationStart(n))})("@animation.done",function(n){d(e);let a=o(3);return u(a.onAnimationEnd(n))})("maskHide",function(){d(e);let n=o(3);return u(n.onMaskHide())})("activeItemChange",function(n){d(e);let a=o(3);return u(a.onActiveItemChange(n))}),v()}if(t&2){let e=o(3);l("@animation",j(11,tt,W(8,et,e.showTransitionOptions,e.hideTransitionOptions)))("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)("pt",e.pt())("pFocusTrapDisabled",!e.fullScreen)}}function nt(t,r){if(t&1){let e=w();g(0,"div",5,2),_("click",function(n){d(e);let a=o(2);return u(a.onMaskHide(n))}),m(2,it,1,13,"div",6),v()}if(t&2){let e=o(2);p(e.maskClass),l("pBind",e.ptm("mask"))("ngClass",e.cx("mask")),C("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),c(2),l("ngIf",e.visible)}}function at(t,r){if(t&1&&(g(0,"div",null,1),m(2,nt,3,7,"div",4),v()),t&2){let e=o();c(2),l("ngIf",e.maskVisible)}}function lt(t,r){if(t&1){let e=w();g(0,"div",8),_("activeItemChange",function(n){d(e);let a=o();return u(a.onActiveItemChange(n))}),v()}if(t&2){let e=o();l("pt",e.pt())("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var ot=["closeButton"],rt=()=>({}),st=["pGalleriaContent",""];function ct(t,r){if(t&1&&(B(),I(0,"svg",10)),t&2){let e=o(3);p(e.cx("closeIcon")),l("pBind",e.ptm("closeIcon"))}}function dt(t,r){}function ut(t,r){t&1&&m(0,dt,0,0,"ng-template")}function pt(t,r){if(t&1){let e=w();g(0,"button",7),_("click",function(){d(e);let n=o(2);return u(n.maskHide.emit())}),m(1,ct,1,3,"svg",8)(2,ut,1,0,null,9),v()}if(t&2){let e=o(2);p(e.cx("closeButton")),l("pBind",e.ptm("closeButton")),C("aria-label",e.closeAriaLabel()),c(),l("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),c(),l("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function mt(t,r){if(t&1&&I(0,"div",11),t&2){let e=o(2);p(e.cx("header")),l("templates",e.galleria.templates)("pBind",e.ptm("header"))}}function ht(t,r){if(t&1){let e=w();g(0,"div",12),_("onActiveIndexChange",function(n){d(e);let a=o(2);return u(a.onActiveIndexChange(n))})("stopSlideShow",function(){d(e);let n=o(2);return u(n.stopSlideShow())}),v()}if(t&2){let e=o(2);l("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)("pt",e.pt())}}function gt(t,r){if(t&1&&I(0,"div",13),t&2){let e=o(2);p(e.cx("footer")),l("pBind",e.ptm("footer"))("templates",e.galleria.templates)}}function vt(t,r){if(t&1){let e=w();P(0),m(1,pt,3,6,"button",1)(2,mt,1,4,"div",2),g(3,"div",3)(4,"div",4),_("onActiveIndexChange",function(n){d(e);let a=o();return u(a.onActiveIndexChange(n))})("startSlideShow",function(){d(e);let n=o();return u(n.startSlideShow())})("stopSlideShow",function(){d(e);let n=o();return u(n.stopSlideShow())}),v(),m(5,ht,1,12,"div",5),v(),m(6,gt,1,4,"div",6),O()}if(t&2){let e=o();c(),l("ngIf",e.galleria.fullScreen),c(),l("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),c(),p(e.cx("content")),l("pBind",e.ptm("content")),C("aria-live",e.galleria.autoPlay?"polite":"off"),c(),p(e.cx("itemsContainer")),l("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive)("pt",e.pt()),c(),l("ngIf",e.galleria.showThumbnails),c(),l("ngIf",e.shouldRenderFooter())}}var bt=["pGalleriaItemSlot",""];function ft(t,r){t&1&&ve(0)}function _t(t,r){if(t&1&&(P(0),m(1,ft,1,0,"ng-container",1),O()),t&2){let e=o();c(),l("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var It=["pGalleriaItem",""],xt=t=>({index:t});function wt(t,r){if(t&1&&(B(),I(0,"svg",8)),t&2){let e=o(2);p(e.cx("prevIcon")),l("pBind",e.ptm("prevIcon"))}}function Tt(t,r){}function yt(t,r){t&1&&m(0,Tt,0,0,"ng-template")}function Ct(t,r){if(t&1){let e=w();g(0,"button",5),_("click",function(n){d(e);let a=o();return u(a.navBackward(n))})("focus",function(){d(e);let n=o();return u(n.onButtonFocus("left"))})("blur",function(){d(e);let n=o();return u(n.onButtonBlur("left"))}),m(1,wt,1,3,"svg",6)(2,yt,1,0,null,7),v()}if(t&2){let e=o();p(e.cx("prevButton")),l("pBind",e.ptm("prevButton")),c(),l("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function St(t,r){if(t&1&&(B(),I(0,"svg",10)),t&2){let e=o(2);p(e.cx("nextIcon")),l("pBind",e.ptm("nextIcon"))}}function kt(t,r){}function Vt(t,r){t&1&&m(0,kt,0,0,"ng-template")}function Bt(t,r){if(t&1){let e=w();g(0,"button",5),_("click",function(n){d(e);let a=o();return u(a.navForward(n))})("focus",function(){d(e);let n=o();return u(n.onButtonFocus("right"))})("blur",function(){d(e);let n=o();return u(n.onButtonBlur("right"))}),m(1,St,1,3,"svg",9)(2,Vt,1,0,null,7),v()}if(t&2){let e=o();p(e.cx("nextButton")),l("pBind",e.ptm("nextButton")),c(),l("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),c(),l("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function Ft(t,r){if(t&1&&I(0,"div",11),t&2){let e=o();p(e.cx("caption")),l("pBind",e.ptm("caption"))("item",e.activeItem)("templates",e.templates)}}function At(t,r){if(t&1&&I(0,"button",16),t&2){let e=o().index,i=o(2);p(i.cx("indicatorButton")),l("pBind",i.ptm("indicatorButton",i.getIndicatorPTOptions(e)))}}function Gt(t,r){if(t&1&&(P(0),I(1,"div",17),O()),t&2){let e=o().index,i=o(2);c(),l("index",e)("templates",i.templates)("pBind",i.ptm("item"))}}function Nt(t,r){if(t&1){let e=w();g(0,"li",13),_("click",function(){let n=d(e).index,a=o(2);return u(a.onIndicatorClick(n))})("mouseenter",function(){let n=d(e).index,a=o(2);return u(a.onIndicatorMouseEnter(n))})("keydown",function(n){let a=d(e).index,s=o(2);return u(s.onIndicatorKeyDown(n,a))}),m(1,At,1,3,"button",14)(2,Gt,2,3,"ng-container",15),v()}if(t&2){let e=r.index,i=o(2);p(i.cx("indicator",j(9,xt,e))),l("pBind",i.getIndicatorPTOptions(e))("pBind",i.ptm("indicator",i.getIndicatorPTOptions(e))),C("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e),c(),l("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),c(),l("ngIf",i.indicatorFacet||i.galleria.indicatorTemplate)}}function Pt(t,r){if(t&1&&(g(0,"ul",0),m(1,Nt,3,11,"li",12),v()),t&2){let e=o();p(e.cx("indicatorList")),l("pBind",e.ptm("indicatorList")),c(),l("ngForOf",e.value)}}var Ot=["itemsContainer"],Et=["pGalleriaThumbnails",""],Dt=t=>({height:t}),Mt=(t,r)=>({index:t,activeIndex:r});function Lt(t,r){if(t&1&&(B(),I(0,"svg",11)),t&2){let e=o(3);p(e.cx("thumbnailPrevIcon")),l("pBind",e.ptm("thumbnailPrevIcon"))}}function Ht(t,r){if(t&1&&(B(),I(0,"svg",12)),t&2){let e=o(3);p(e.cx("thumbnailPrevIcon")),l("pBind",e.ptm("thumbnailPrevIcon"))}}function Rt(t,r){if(t&1&&(P(0),m(1,Lt,1,3,"svg",9)(2,Ht,1,3,"svg",10),O()),t&2){let e=o(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function Qt(t,r){}function zt(t,r){t&1&&m(0,Qt,0,0,"ng-template")}function $t(t,r){if(t&1){let e=w();g(0,"button",6),_("click",function(n){d(e);let a=o();return u(a.navBackward(n))}),m(1,Rt,3,2,"ng-container",7)(2,zt,1,0,null,8),v()}if(t&2){let e=o();p(e.cx("thumbnailPrevButton")),l("pBind",e.ptm("thumbnailPrevButton")),C("aria-label",e.ariaPrevButtonLabel()),c(),l("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function jt(t,r){if(t&1){let e=w();g(0,"div",13),_("keydown",function(n){let a=d(e).index,s=o();return u(s.onThumbnailKeydown(n,a))}),g(1,"div",14),_("click",function(){let n=d(e).index,a=o();return u(a.onItemClick(n))})("touchend",function(){let n=d(e).index,a=o();return u(a.onItemClick(n))})("keydown.enter",function(){let n=d(e).index,a=o();return u(a.onItemClick(n))}),I(2,"div",15),v()()}if(t&2){let e=r.$implicit,i=r.index,n=o();p(n.cx("thumbnailItem",W(14,Mt,i,n.activeIndex))),l("pBind",n.ptm("thumbnailItem")),C("aria-selected",n.activeIndex===i)("aria-controls",n.containerId+"_item_"+i),c(),p(n.cx("thumbnail")),l("pBind",n.ptm("thumbnail")),C("tabindex",n.activeIndex===i?0:-1)("aria-current",n.activeIndex===i?"page":void 0)("aria-label",n.ariaPageLabel(i+1)),c(),l("pBind",n.ptm("thumbnailItem"))("item",e)("templates",n.templates)}}function qt(t,r){if(t&1&&(B(),I(0,"svg",18)),t&2){let e=o(3);p(e.cx("thumbnailNextIcon")),l("pBind",e.ptm("thumbnailNextIcon"))}}function Kt(t,r){if(t&1&&(B(),I(0,"svg",19)),t&2){let e=o(3);p(e.cx("thumbnailNextIcon")),l("pBind",e.ptm("thumbnailNextIcon"))}}function Zt(t,r){if(t&1&&(P(0),m(1,qt,1,3,"svg",16)(2,Kt,1,3,"svg",17),O()),t&2){let e=o(2);c(),l("ngIf",!e.isVertical),c(),l("ngIf",e.isVertical)}}function Ut(t,r){}function Wt(t,r){t&1&&m(0,Ut,0,0,"ng-template")}function Xt(t,r){if(t&1){let e=w();g(0,"button",6),_("click",function(n){d(e);let a=o();return u(a.navForward(n))}),m(1,Zt,3,2,"ng-container",7)(2,Wt,1,0,null,8),v()}if(t&2){let e=o();p(e.cx("thumbnailNextButton")),l("pBind",e.ptm("thumbnailNextButton")),C("aria-label",e.ariaNextButtonLabel()),c(),l("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),c(),l("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var Z=new pe("GALLERIA_INSTANCE"),U=(()=>{class t extends L{element;bindDirectiveInstance=T(x,{self:!0});$pcGalleria=T(Z,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new k;visibleChange=new k;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=T(V);templates;constructor(e){super(),this.element=e}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}onChanges(e){e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(e){(!e||e.target===e.currentTarget)&&(this.visible=!1,this.visibleChange.emit(!1))}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onAnimationStart(e){switch(e.toState){case"visible":this.enableModality(),setTimeout(()=>{let i=K(this.container?.nativeElement,'[data-pc-section="closebutton"]');i&&we(i)},25);break;case"void":X(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.disableModality();break}}enableModality(){Fe(),this.cd.markForCheck(),this.mask&&se.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){Ae(),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&se.clear(this.mask.nativeElement)}onDestroy(){this.fullScreen&&q(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(A(me))};static \u0275cmp=G({type:t,selectors:[["p-galleria"]],contentQueries:function(i,n,a){if(i&1&&(y(a,Re,4),y(a,Qe,4),y(a,ze,4),y(a,$e,4),y(a,je,4),y(a,qe,4),y(a,Ke,4),y(a,Ze,4),y(a,Ue,4),y(a,We,4),y(a,Xe,4),y(a,Se,4)),i&2){let s;b(s=f())&&(n.headerTemplate=s.first),b(s=f())&&(n.footerTemplate=s.first),b(s=f())&&(n.indicatorTemplate=s.first),b(s=f())&&(n.captionTemplate=s.first),b(s=f())&&(n._closeIconTemplate=s.first),b(s=f())&&(n._previousThumbnailIconTemplate=s.first),b(s=f())&&(n._nextThumbnailIconTemplate=s.first),b(s=f())&&(n._itemPreviousIconTemplate=s.first),b(s=f())&&(n._itemNextIconTemplate=s.first),b(s=f())&&(n._itemTemplate=s.first),b(s=f())&&(n._thumbnailTemplate=s.first),b(s=f())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(R(Ye,5),R(Je,5)),i&2){let a;b(a=f())&&(n.mask=a.first),b(a=f())&&(n.container=a.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",h],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",E],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",h],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",h],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",h],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",h],circular:[2,"circular","circular",h],autoPlay:[2,"autoPlay","autoPlay",h],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",h],transitionInterval:[2,"transitionInterval","transitionInterval",E],showThumbnails:[2,"showThumbnails","showThumbnails",h],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",h],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",h],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",E],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[Q([V,{provide:Z,useExisting:t},{provide:Ve,useExisting:t}]),H([x]),N],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass","class","click",4,"ngIf"],[3,"click","pBind","ngClass"],["pGalleriaContent","","pFocusTrap","",3,"value","activeIndex","numVisible","ngStyle","fullScreen","pt","pFocusTrapDisabled","maskHide","activeItemChange",4,"ngIf"],["pGalleriaContent","","pFocusTrap","",3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen","pt","pFocusTrapDisabled"],["pGalleriaContent","",3,"activeItemChange","pt","value","activeIndex","numVisible"]],template:function(i,n){if(i&1&&m(0,at,3,1,"div",3)(1,lt,1,4,"ng-template",null,0,Ie),i&2){let a=be(2);l("ngIf",n.fullScreen)("ngIfElse",a)}},dependencies:()=>[Ce,M,ee,De,x,Yt],encapsulation:2,data:{animation:[Ee("animation",[re("void => visible",[oe({transform:"scale(0.7)",opacity:0}),le("{{showTransitionParams}}")]),re("visible => void",[le("{{hideTransitionParams}}",oe({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),Yt=(()=>{class t extends L{galleria;differs;hostName="Galleria";bindDirectiveInstance=T(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new k;activeItemChange=new k;closeButton;_componentStyle=T(V);$pcGalleria=T(Z,{optional:!0,skipSelf:!0})??void 0;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i){super(),this.galleria=e,this.differs=i,this.id=this.galleria.id||ye("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.el.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}onDoCheck(){if(F(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}startSlideShow(){F(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let a=["top","left","bottom","right"].find(s=>s===i);return a?`${e}-${a}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(i){return new(i||t)(A(U),A(xe))};static \u0275cmp=G({type:t,selectors:[["div","pGalleriaContent",""]],viewQuery:function(i,n){if(i&1&&R(ot,5),i&2){let a;b(a=f())&&(n.closeButton=a.first)}},hostVars:7,hostBindings:function(i,n){i&1&&_("fullscreenchange",function(s){return n.handleFullscreenChange(s)},he),i&2&&(C("id",n.id)("role","region"),fe(n.galleria.fullScreen?_e(6,rt):n.galleria.containerStyle),p(n.cn(n.cx("root"),n.galleria==null?null:n.galleria.contentClass)))},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",E],fullScreen:[2,"fullScreen","fullScreen",h]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[Q([V]),H([x]),N],attrs:st,decls:1,vars:1,consts:[[4,"ngIf"],["type","button",3,"pBind","class","click",4,"ngIf"],["pGalleriaItemSlot","","type","header",3,"templates","pBind","class",4,"ngIf"],[3,"pBind"],["pGalleriaItem","",3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive","pt"],["pGalleriaThumbnails","",3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","pt","onActiveIndexChange","stopSlideShow",4,"ngIf"],["pGalleriaItemSlot","","type","footer",3,"pBind","class","templates",4,"ngIf"],["type","button",3,"click","pBind"],["data-p-icon","times",3,"pBind","class",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","times",3,"pBind"],["pGalleriaItemSlot","","type","header",3,"templates","pBind"],["pGalleriaThumbnails","",3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","pt"],["pGalleriaItemSlot","","type","footer",3,"pBind","templates"]],template:function(i,n){i&1&&m(0,vt,7,23,"ng-container",0),i&2&&l("ngIf",n.value&&n.value.length>0)},dependencies:()=>[M,z,Pe,x,ce,Jt,ei],encapsulation:2,changeDetection:0})}return t})(),ce=(()=>{class t extends L{hostName="Galleria";templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=T(U);$pcGalleria=T(Z,{optional:!0,skipSelf:!0})??void 0;set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getTemplateFromQueryList(e){return this.galleria.templates?.find(i=>i.getType()===e)?.template}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.getTemplateFromQueryList("item");break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.getTemplateFromQueryList("caption");break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria._thumbnailTemplate||this.getTemplateFromQueryList("thumbnail");break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.getTemplateFromQueryList("indicator");break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.getTemplateFromQueryList("footer");break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.getTemplateFromQueryList("item")}}type;contentTemplate;context;_item;onAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=$(t)))(n||t)}})();static \u0275cmp=G({type:t,selectors:[["div","pGalleriaItemSlot",""]],inputs:{templates:"templates",index:[2,"index","index",E],item:"item",type:"type"},standalone:!1,features:[N],attrs:bt,decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&m(0,_t,2,2,"ng-container",0),i&2&&l("ngIf",n.shouldRender())},dependencies:[M,z],encapsulation:2,changeDetection:0})}return t})(),Jt=(()=>{class t extends L{galleria;hostName="Galleria";bindDirectiveInstance=T(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("itemsContainer"))}id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new k;stopSlideShow=new k;onActiveIndexChange=new k;_componentStyle=T(V);get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){super(),this.galleria=e}getIndicatorPTOptions(e){return this.ptm("indicator",{context:{highlighted:this.activeIndex===e}})}onChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&(e.stopPropagation(),e.preventDefault())}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber?.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(A(U))};static \u0275cmp=G({type:t,selectors:[["div","pGalleriaItem",""]],inputs:{id:"id",circular:[2,"circular","circular",h],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",h],showIndicators:[2,"showIndicators","showIndicators",h],slideShowActive:[2,"slideShowActive","slideShowActive",h],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",h],autoPlay:[2,"autoPlay","autoPlay",h],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[Q([V]),H([x]),N],attrs:It,decls:6,vars:15,consts:[[3,"pBind"],["type","button","role","navigation","data-pc-group-section","itemnavigator",3,"pBind","class","click","focus","blur",4,"ngIf"],["pGalleriaItemSlot","","role","group",3,"pBind","item","templates","id"],["pGalleriaItemSlot","","type","caption",3,"pBind","class","item","templates",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","role","navigation","data-pc-group-section","itemnavigator",3,"click","focus","blur","pBind"],["data-p-icon","chevron-left",3,"pBind","class",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-left",3,"pBind"],["data-p-icon","chevron-right",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind"],["pGalleriaItemSlot","","type","caption",3,"pBind","item","templates"],["tabindex","0",3,"pBind","class","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","pBind"],["type","button","tabIndex","-1",3,"pBind","class",4,"ngIf"],[4,"ngIf"],["type","button","tabIndex","-1",3,"pBind"],["pGalleriaItemSlot","","type","indicator",3,"index","templates","pBind"]],template:function(i,n){i&1&&(g(0,"div",0),m(1,Ct,3,5,"button",1),I(2,"div",2),m(3,Bt,3,5,"button",1)(4,Ft,1,5,"div",3),v(),m(5,Pt,2,4,"ul",4)),i&2&&(p(n.cx("items")),l("pBind",n.ptm("items")),c(),l("ngIf",n.showItemNavigators),c(),p(n.cx("item")),l("pBind",n.ptm("item"))("item",n.activeItem)("templates",n.templates)("id",n.id+"_item_"+n.activeIndex),C("aria-label",n.ariaSlideNumber(n.activeIndex+1))("aria-roledescription",n.ariaSlideLabel()),c(),l("ngIf",n.showItemNavigators),c(),l("ngIf",n.captionFacet||n.galleria.captionTemplate),c(),l("ngIf",n.showIndicators))},dependencies:[J,M,z,ae,ne,x,ce],encapsulation:2,changeDetection:0})}return t})(),ei=(()=>{class t extends L{galleria;hostName="Galleria";bindDirectiveInstance=T(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("thumbnails"))}containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new k;stopSlideShow=new k;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;_componentStyle=T(V);constructor(e){super(),this.galleria=e}onInit(){F(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}onAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(q(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}onAfterViewInit(){F(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),Y(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,n)=>{let a=i.breakpoint,s=n.breakpoint,S;return a==null&&s!=null?S=-1:a!=null&&s==null?S=1:a==null&&s==null?S=0:typeof a=="string"&&typeof s=="string"?S=a.localeCompare(s,void 0,{numeric:!0}):S=a<s?-1:a>s?1:0,-1*S});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let n=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${n.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/n.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,Y(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(F(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let n=0;n<this.sortedResponsiveOptions.length;n++){let a=this.sortedResponsiveOptions[n];parseInt(a.breakpoint,10)>=e&&(i=a)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let n=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,n=i+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let a=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let n=i+this.totalShiftedItems,a=0;i<this._activeIndex?(a=this.d_numVisible-n-1-this.getMedianItemIndex(),a>0&&-1*this.totalShiftedItems!==0&&this.step(a)):(a=this.getMedianItemIndex()-n,a<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(a)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=D(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=D(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...D(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(s=>Te(s,"data-p-active")===!0),n=K(this.itemsContainer?.nativeElement,'[tabindex="0"]'),a=e.findIndex(s=>s===n?.parentElement);e[a].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...D(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]')],i=K(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(n=>n===i?.parentElement)}changedFocusedIndicator(e,i){let n=D(this.itemsContainer?.nativeElement,'[data-pc-section="thumbnailitem"]');n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(q(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(X(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(F(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(A(U))};static \u0275cmp=G({type:t,selectors:[["div","pGalleriaThumbnails",""]],viewQuery:function(i,n){if(i&1&&R(Ot,5),i&2){let a;b(a=f())&&(n.itemsContainer=a.first)}},hostVars:2,hostBindings:function(i,n){i&2&&p(n.cx("thumbnails"))},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",h],slideShowActive:[2,"slideShowActive","slideShowActive",h],circular:[2,"circular","circular",h],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,features:[Q([V]),H([x]),N],attrs:Et,decls:7,vars:15,consts:[["itemsContainer",""],[3,"pBind"],["type","button","pRipple","","data-pc-group-section","thumbnailnavigator",3,"pBind","class","click",4,"ngIf"],[3,"pBind","ngStyle"],["role","tablist",3,"transitionend","touchstart","touchmove","pBind"],[3,"pBind","class","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","","data-pc-group-section","thumbnailnavigator",3,"click","pBind"],[4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-left",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-up",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-left",3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],[3,"keydown","pBind"],[3,"click","touchend","keydown.enter","pBind"],["pGalleriaItemSlot","","type","thumbnail",3,"pBind","item","templates"],["data-p-icon","chevron-right",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind","class",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind"],["data-p-icon","chevron-down",3,"pBind"]],template:function(i,n){if(i&1){let a=w();g(0,"div",1),m(1,$t,3,6,"button",2),g(2,"div",3)(3,"div",4,0),_("transitionend",function(){return d(a),u(n.onTransitionEnd())})("touchstart",function(S){return d(a),u(n.onTouchStart(S))})("touchmove",function(S){return d(a),u(n.onTouchMove(S))}),m(5,jt,3,17,"div",5),v()(),m(6,Xt,3,6,"button",2),v()}i&2&&(p(n.cx("thumbnailContent")),l("pBind",n.ptm("thumbnailContent")),c(),l("ngIf",n.showThumbnailNavigators),c(),p(n.cx("thumbnailsViewport")),l("pBind",n.ptm("thumbnailsViewport"))("ngStyle",j(13,Dt,n.isVertical?n.contentHeight:"")),c(),p(n.cx("thumbnailItems")),l("pBind",n.ptm("thumbnailItems")),c(2),l("ngForOf",n.value),c(),l("ngIf",n.showThumbnailNavigators))},dependencies:[J,M,z,ee,Oe,ae,Ne,Ge,ne,x,ce],encapsulation:2,changeDetection:0})}return t})(),ji=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ge({type:t});static \u0275inj=ue({imports:[te,ie,Be,te,ie]})}return t})();export{U as a,ji as b};
