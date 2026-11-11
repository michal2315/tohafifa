import{a as it,b as Ie}from"./chunk-T7S2JKIR.js";import{d as Ge,e as Ue,h as le}from"./chunk-BL5WFH5W.js";import{c as _e}from"./chunk-AAKCLA3R.js";import{b as Xe,ba as nt,c as be,q as Ye,s as et,w as tt}from"./chunk-MCW4FHXZ.js";import{Ea as je,Fa as z,Ia as We,La as Je,Ma as de,Na as B,O as H,Oa as pe,P as E,a as R,d as k,ga as se,j as re,k as ae,ma as qe,n as Ne}from"./chunk-UOUHADUB.js";import{m as Ze,n as me,q as Qe,r as ue,w as ce,y as W}from"./chunk-D2XKNHFS.js";import{$a as L,D as Me,Eb as s,Fb as f,Gb as _,Gc as U,Hb as I,Ka as Y,La as we,Lb as P,Mb as S,Mc as He,Nb as ne,Ob as K,Pb as De,Qa as u,S as q,Sb as O,T as ke,Ub as a,Uc as ze,V as Ce,Va as T,Vb as Ae,Wb as Ve,X as F,Xb as w,Yb as ie,Yc as M,Zb as y,Zc as $,_a as Ee,_b as v,aa as p,ba as b,ca as D,cc as Q,f as ye,fa as Le,fc as j,gb as ee,gc as c,hb as Be,hc as oe,ic as Ke,ja as V,jc as Oe,kb as te,lb as Fe,mb as d,oa as Z,qa as Pe,rc as $e,sc as Re,ua as Se,uc as G,wb as g,x as ve,z as Te}from"./chunk-O3KMSE75.js";import{a as ge,b as xe}from"./chunk-GAL4ENT6.js";var ot=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var mt={submenu:({instance:o,processedItem:m})=>({display:o.isItemActive(m)?"flex":"none"})},ut={root:({instance:o})=>["p-menubar p-component",{"p-menubar-mobile":o.queryMatches(),"p-menubar-mobile-active":o.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:o,processedItem:m})=>["p-menubar-item",{"p-menubar-item-active":o.isItemActive(m),"p-focus":o.isItemFocused(m),"p-disabled":o.isItemDisabled(m)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},J=(()=>{class o extends We{name="menubar";style=ot;classes=ut;inlineStyles=mt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(o)))(n||o)}})();static \u0275prov=q({token:o,factory:o.\u0275fac})}return o})();var at=(o,m)=>({instance:o,processedItem:m}),ct=()=>({exact:!1}),lt=(o,m)=>({$implicit:o,root:m});function dt(o,m){if(o&1&&I(0,"li",6),o&2){let e=a().$implicit,t=a();j(t.getItemProp(e,"style")),c(t.cn(t.cx("separator"),e==null?null:e.styleClass)),s("pBind",t.ptm("separator")),g("id",t.getItemId(e))}}function pt(o,m){if(o&1&&I(0,"span",17),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),s("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),g("tabindex",-1)}}function bt(o,m){if(o&1&&(f(0,"span",18),oe(1),_()),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.cx("itemLabel")),s("id",i.getItemLabelId(t))("pBind",i.getPTOptions(t,n,"itemLabel")),u(),Oe(" ",i.getItemLabel(t)," ")}}function _t(o,m){if(o&1&&I(0,"span",19),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.cx("itemLabel")),s("innerHTML",i.getItemLabel(t),Y)("id",i.getItemLabelId(t))("pBind",i.getPTOptions(t,n,"itemLabel"))}}function It(o,m){if(o&1&&I(0,"p-badge",20),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.getItemProp(t,"badgeStyleClass")),s("value",i.getItemProp(t,"badge"))("pt",i.getPTOptions(t,n,"pcBadge"))}}function ft(o,m){if(o&1&&(D(),I(0,"svg",24)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();c(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function ht(o,m){if(o&1&&(D(),I(0,"svg",25)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();c(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function gt(o,m){if(o&1&&(P(0),d(1,ft,1,3,"svg",22)(2,ht,1,3,"svg",23),S()),o&2){let e=a(6);u(),s("ngIf",e.root),u(),s("ngIf",!e.root)}}function xt(o,m){}function yt(o,m){o&1&&d(0,xt,0,0,"ng-template")}function vt(o,m){if(o&1&&(P(0),d(1,gt,3,2,"ng-container",9)(2,yt,1,0,null,21),S()),o&2){let e=a(5);u(),s("ngIf",!e.submenuiconTemplate),u(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function Tt(o,m){if(o&1&&(f(0,"a",13),d(1,pt,1,5,"span",14)(2,bt,2,5,"span",15)(3,_t,1,5,"ng-template",null,1,U)(5,It,1,4,"p-badge",16)(6,vt,3,2,"ng-container",9),_()),o&2){let e=Q(4),t=a(3),n=t.$implicit,i=t.index,r=a();c(r.cx("itemLink")),s("pBind",r.getPTOptions(n,i,"itemLink")),g("href",r.getItemProp(n,"url"),we)("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("target",r.getItemProp(n,"target"))("tabindex",-1),u(),s("ngIf",r.getItemProp(n,"icon")),u(),s("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),u(3),s("ngIf",r.getItemProp(n,"badge")),u(),s("ngIf",r.isItemGroup(n))}}function Mt(o,m){if(o&1&&I(0,"span",17),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.cn(i.cx("itemIcon"),i.getItemProp(t,"icon"),i.getItemProp(t,"iconClass"))),s("ngStyle",i.getItemProp(t,"iconStyle"))("pBind",i.getPTOptions(t,n,"itemIcon")),g("tabindex",-1)}}function kt(o,m){if(o&1&&(f(0,"span",28),oe(1),_()),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.cx("itemLabel")),s("pBind",i.getPTOptions(t,n,"itemLabel")),u(),Ke(i.getItemLabel(t))}}function Ct(o,m){if(o&1&&I(0,"span",29),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.cx("itemLabel")),s("innerHTML",i.getItemLabel(t),Y)("pBind",i.getPTOptions(t,n,"itemLabel"))}}function Lt(o,m){if(o&1&&I(0,"p-badge",20),o&2){let e=a(4),t=e.$implicit,n=e.index,i=a();c(i.getItemProp(t,"badgeStyleClass")),s("value",i.getItemProp(t,"badge"))("pt",i.getPTOptions(t,n,"pcBadge"))}}function Pt(o,m){if(o&1&&(D(),I(0,"svg",24)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();c(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function St(o,m){if(o&1&&(D(),I(0,"svg",25)),o&2){let e=a(6),t=e.$implicit,n=e.index,i=a();c(i.cx("submenuIcon")),s("pBind",i.getPTOptions(t,n,"submenuIcon"))}}function wt(o,m){if(o&1&&(P(0),d(1,Pt,1,3,"svg",22)(2,St,1,3,"svg",23),S()),o&2){let e=a(6);u(),s("ngIf",e.root),u(),s("ngIf",!e.root)}}function Et(o,m){}function Bt(o,m){o&1&&d(0,Et,0,0,"ng-template")}function Ft(o,m){if(o&1&&(P(0),d(1,wt,3,2,"ng-container",9)(2,Bt,1,0,null,21),S()),o&2){let e=a(5);u(),s("ngIf",!e.submenuiconTemplate),u(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function Dt(o,m){if(o&1&&(f(0,"a",26),d(1,Mt,1,5,"span",14)(2,kt,2,4,"span",27)(3,Ct,1,4,"ng-template",null,2,U)(5,Lt,1,4,"p-badge",16)(6,Ft,3,2,"ng-container",9),_()),o&2){let e=Q(4),t=a(3),n=t.$implicit,i=t.index,r=a();c(r.cx("itemLink")),s("routerLink",r.getItemProp(n,"routerLink"))("queryParams",r.getItemProp(n,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",r.getItemProp(n,"routerLinkActiveOptions")||Re(22,ct))("target",r.getItemProp(n,"target"))("fragment",r.getItemProp(n,"fragment"))("queryParamsHandling",r.getItemProp(n,"queryParamsHandling"))("preserveFragment",r.getItemProp(n,"preserveFragment"))("skipLocationChange",r.getItemProp(n,"skipLocationChange"))("replaceUrl",r.getItemProp(n,"replaceUrl"))("state",r.getItemProp(n,"state"))("pBind",r.getPTOptions(n,i,"itemLink")),g("data-automationid",r.getItemProp(n,"automationId"))("title",r.getItemProp(n,"title"))("tabindex",-1),u(),s("ngIf",r.getItemProp(n,"icon")),u(),s("ngIf",r.getItemProp(n,"escape"))("ngIfElse",e),u(3),s("ngIf",r.getItemProp(n,"badge")),u(),s("ngIf",r.isItemGroup(n))}}function At(o,m){if(o&1&&(P(0),d(1,Tt,7,13,"a",11)(2,Dt,7,23,"a",12),S()),o&2){let e=a(2).$implicit,t=a();u(),s("ngIf",!t.getItemProp(e,"routerLink")),u(),s("ngIf",t.getItemProp(e,"routerLink"))}}function Vt(o,m){}function Kt(o,m){o&1&&d(0,Vt,0,0,"ng-template")}function Ot(o,m){if(o&1&&(P(0),d(1,Kt,1,0,null,30),S()),o&2){let e=a(2).$implicit,t=a();u(),s("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",G(2,lt,e.item,t.root))}}function $t(o,m){if(o&1){let e=K();f(0,"ul",31),O("itemClick",function(n){p(e);let i=a(3);return b(i.itemClick.emit(n))})("itemMouseEnter",function(n){p(e);let i=a(3);return b(i.onItemMouseEnter(n))}),_()}if(o&2){let e=a(2).$implicit,t=a();s("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,G(12,at,t,e)))("pt",t.pt())("pBind",t.ptm("submenu")),g("aria-labelledby",t.getItemLabelId(e))}}function Rt(o,m){if(o&1){let e=K();f(0,"li",7,0)(2,"div",8),O("click",function(n){p(e);let i=a().$implicit,r=a();return b(r.onItemClick(n,i))})("mouseenter",function(n){p(e);let i=a().$implicit,r=a();return b(r.onItemMouseEnter({$event:n,processedItem:i}))}),d(3,At,3,2,"ng-container",9)(4,Ot,2,5,"ng-container",9),_(),d(5,$t,1,15,"ul",10),_()}if(o&2){let e=a(),t=e.$implicit,n=e.index,i=a();j(i.getItemProp(t,"style")),c(i.cn(i.cx("item",G(22,at,i,t)),i.getItemProp(t,"styleClass"))),s("pBind",i.getPTOptions(t,n,"item"))("tooltipOptions",i.getItemProp(t,"tooltipOptions")),g("id",i.getItemId(t))("data-p-highlight",i.isItemActive(t))("data-p-focused",i.isItemFocused(t))("data-p-disabled",i.isItemDisabled(t))("aria-label",i.getItemLabel(t))("aria-disabled",i.isItemDisabled(t)||void 0)("aria-haspopup",i.isItemGroup(t)&&!i.getItemProp(t,"to")?"menu":void 0)("aria-expanded",i.isItemGroup(t)?i.isItemActive(t):void 0)("aria-setsize",i.getAriaSetSize())("aria-posinset",i.getAriaPosInset(n)),u(2),c(i.cx("itemContent")),s("pBind",i.getPTOptions(t,n,"itemContent")),u(),s("ngIf",!i.itemTemplate),u(),s("ngIf",i.itemTemplate),u(),s("ngIf",i.isItemVisible(t)&&i.isItemGroup(t))}}function Ht(o,m){if(o&1&&d(0,dt,1,6,"li",4)(1,Rt,6,25,"li",5),o&2){let e=m.$implicit,t=a();s("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),u(),s("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var zt=["start"],Nt=["end"],qt=["item"],Zt=["menuicon"],Qt=["submenuicon"],jt=["menubutton"],Gt=["rootmenu"],Ut=["*"];function Wt(o,m){o&1&&ne(0)}function Jt(o,m){if(o&1&&(f(0,"div",7),d(1,Wt,1,0,"ng-container",8),_()),o&2){let e=a();c(e.cx("start")),s("pBind",e.ptm("start")),u(),s("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Xt(o,m){if(o&1&&(D(),I(0,"svg",11)),o&2){let e=a(2);s("pBind",e.ptm("buttonIcon"))}}function Yt(o,m){}function en(o,m){o&1&&d(0,Yt,0,0,"ng-template")}function tn(o,m){if(o&1){let e=K();f(0,"a",9,2),O("click",function(n){p(e);let i=a();return b(i.menuButtonClick(n))})("keydown",function(n){p(e);let i=a();return b(i.menuButtonKeydown(n))}),d(2,Xt,1,1,"svg",10)(3,en,1,0,null,8),_()}if(o&2){let e=a();c(e.cx("button")),s("pBind",e.ptm("button")),g("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),u(2),s("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),u(),s("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function nn(o,m){o&1&&ne(0)}function on(o,m){if(o&1&&(f(0,"div",7),d(1,nn,1,0,"ng-container",8),_()),o&2){let e=a();c(e.cx("end")),s("pBind",e.ptm("end")),u(),s("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function rn(o,m){if(o&1&&(f(0,"div"),Ve(1),_()),o&2){let e=a();c(e.cx("end"))}}var rt=new Ce("MENUBAR_INSTANCE"),fe=(()=>{class o{autoHide;autoHideDelay;mouseLeaves=new ye;mouseLeft$=this.mouseLeaves.pipe(Me(()=>ve(this.autoHideDelay)),Te(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||o)};static \u0275prov=q({token:o,factory:o.\u0275fac})}return o})(),an=(()=>{class o extends de{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new T;itemMouseEnter=new T;menuFocus=new T;menuBlur=new T;menuKeydown=new T;mouseLeaveSubscriber;menubarService=F(fe);_componentStyle=F(J);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,n=null){return e&&e.item?ae(e.item[t],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return k(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:n})}}getPTOptions(e,t,n){return this.ptm(n,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Z(o)))(n||o)}})();static \u0275cmp=ee({type:o,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostAttrs:["role","menubar"],hostVars:6,hostBindings:function(t,n){t&2&&(De("id",n.root?n.menuId:null),g("aria-activedescendant",n.focusedItemId),j(n.inlineStyles),c(n.level===0?n.cx("rootList"):n.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",M],autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",$],mobileActive:[2,"mobileActive","mobileActive",M],autoDisplay:[2,"autoDisplay","autoDisplay",M],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",$],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[te],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt",4,"ngIf"],[3,"ngStyle","pBind"],[3,"id","pBind"],[3,"innerHTML","id","pBind"],[3,"value","pt"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind"]],template:function(t,n){t&1&&d(0,Ht,2,2,"ng-template",3),t&2&&s("ngForOf",n.items)},dependencies:[o,ce,Ze,me,ue,Qe,le,Ge,Ue,nt,Ie,it,B,Ye,et,be,Xe,z,pe],encapsulation:2})}return o})(),sn=(()=>{class o extends de{document;platformId;el;renderer;cd;menubarService;$pcMenubar=F(rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=F(B,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new T;onBlur=new T;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=V(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=V([]);number=V(0);focusedItemInfo=V({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=F(J);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${k(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,n,i,r,l){super(),this.document=e,this.platformId=t,this.el=n,this.renderer=i,this.cd=r,this.menubarService=l,He(()=>{let h=this.activeItemPath();k(h)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||qe("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,n={},i=""){let r=[];return e&&e.forEach((l,h)=>{let x=(i!==""?i+"_":"")+h,C={item:l,index:h,level:t,key:x,parent:n,parentKey:i};C.items=this.createProcessedItems(l.items,t+1,C,x),r.push(C)}),r}bindMatchMediaListener(){if(W(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?ae(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:t,processedItem:n}=e,i=this.isProcessedItemGroup(n),r=R(n.parent);if(this.isSelected(n)){let{index:h,key:x,level:C,parentKey:X,item:N}=n;this.activeItemPath.set(this.activeItemPath().filter(A=>x!==A.key&&x.startsWith(A.key))),this.focusedItemInfo.set({index:h,level:C,parentKey:X,item:N}),this.dirty=!r,E(this.rootmenu?.el.nativeElement)}else if(i)this.onItemChange(e);else{let h=r?n:this.activeItemPath().find(x=>x.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,h?h.index:-1),this.mobileActive=!1,E(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){se()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,n=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},n)}changeFocusedItemIndex(e,t){let n=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let i=this.focusedItemInfo();this.focusedItemInfo.set(xe(ge({},i),{item:n.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=H(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:n,isFocus:i}=e;if(R(n))return;let{index:r,key:l,level:h,parentKey:x,items:C,item:X}=n,N=k(C),A=this.activeItemPath().filter(he=>he.parentKey!==x&&he.parentKey!==l);N&&A.push(n),this.focusedItemInfo.set({index:r,level:h,parentKey:x,item:X}),N&&(this.dirty=!0),i&&E(this.rootmenu?.el.nativeElement),!(t==="hover"&&this.queryMatches())&&this.activeItemPath.set(A)}toggle(e){this.mobileActive?(this.mobileActive=!1,_e.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,_e.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{E(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&E(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),E(this.rootmenu?.el.nativeElement)}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let i=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:i?.item})}this.onFocus.emit(e)}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onMenuMouseDown(e){this.dirty=!0}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&Ne(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return k(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&k(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&k(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,i=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(r=>this.isItemMatched(r)),n!==-1&&(i=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?R(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(i=>i.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let i=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(R(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let i=this.activeItemPath().find(r=>r.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:i?i.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let r=this.activeItemPath().filter(l=>l.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],n=t?this.activeItemPath().find(i=>i.key===t.parentKey):null;if(n){this.onItemChange({originalEvent:e,processedItem:n});let i=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(i),e.preventDefault()}else{let i=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=H(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(H(t,'[data-pc-section="itemlink"]')||H(t,"a,button"));n?n.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return re(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?re(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e}bindResizeListener(){W(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{se()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){W(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),n=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);t&&(n?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||o)(L(Le),L(Se),L(Pe),L(Ee),L(ze),L(fe))};static \u0275cmp=ee({type:o,selectors:[["p-menubar"]],contentQueries:function(t,n,i){if(t&1&&(w(i,zt,4),w(i,Nt,4),w(i,qt,4),w(i,Zt,4),w(i,Qt,4),w(i,je,4)),t&2){let r;y(r=v())&&(n.startTemplate=r.first),y(r=v())&&(n.endTemplate=r.first),y(r=v())&&(n.itemTemplate=r.first),y(r=v())&&(n.menuIconTemplate=r.first),y(r=v())&&(n.submenuIconTemplate=r.first),y(r=v())&&(n.templates=r)}},viewQuery:function(t,n){if(t&1&&(ie(jt,5),ie(Gt,5)),t&2){let i;y(i=v())&&(n.menubutton=i.first),y(i=v())&&(n.rootmenu=i.first)}},hostVars:2,hostBindings:function(t,n){t&2&&c(n.cn(n.cx("root"),n.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",$],autoDisplay:[2,"autoDisplay","autoDisplay",M],autoHide:[2,"autoHide","autoHide",M],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",$],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[$e([fe,J,{provide:rt,useExisting:o},{provide:Je,useExisting:o}]),Fe([B]),te],ngContentSelectors:Ut,decls:7,vars:19,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","focus","blur","keydown","itemMouseEnter","mouseleave","mousedown","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,n){if(t&1){let i=K();Ae(),d(0,Jt,2,4,"div",3)(1,tn,4,9,"a",4),f(2,"ul",5,0),O("itemClick",function(l){return p(i),b(n.onItemClick(l))})("focus",function(l){return p(i),b(n.onMenuFocus(l))})("blur",function(l){return p(i),b(n.onMenuBlur(l))})("keydown",function(l){return p(i),b(n.onKeyDown(l))})("itemMouseEnter",function(l){return p(i),b(n.onItemMouseEnter(l))})("mouseleave",function(l){return p(i),b(n.onMouseLeave(l))})("mousedown",function(l){return p(i),b(n.onMenuMouseDown(l))}),_(),d(4,on,2,4,"div",6)(5,rn,2,2,"ng-template",null,1,U)}if(t&2){let i=Q(6);s("ngIf",n.startTemplate||n._startTemplate),u(),s("ngIf",n.model&&n.model.length>0),u(),s("items",n.processedItems)("itemTemplate",n.itemTemplate)("menuId",n.id)("root",!0)("baseZIndex",n.baseZIndex)("autoZIndex",n.autoZIndex)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("focusedItemId",n.focused?n.focusedItemId:void 0)("submenuiconTemplate",n.submenuIconTemplate||n._submenuIconTemplate)("activeItemPath",n.activeItemPath())("pt",n.pt())("pBind",n.ptm("rootList")),g("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),u(2),s("ngIf",n.endTemplate||n._endTemplate)("ngIfElse",i)}},dependencies:[ce,me,ue,le,an,Ie,B,tt,be,z,pe],encapsulation:2,changeDetection:0})}return o})(),qn=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Be({type:o});static \u0275inj=ke({imports:[sn,z,z]})}return o})();export{sn as a,qn as b};
