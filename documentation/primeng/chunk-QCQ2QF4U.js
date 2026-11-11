import{a as at,b as lt}from"./chunk-XSLWLDLT.js";import{a as se,b as ut}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{a as mt,b as ct}from"./chunk-FKOOMXTU.js";import{a as M,b as C}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import{a as ot,b as Ee}from"./chunk-T7S2JKIR.js";import{a as st}from"./chunk-XCUGNKAG.js";import{a as y,b as rt}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{c as Ue,d as Qe,e as je,h as Se}from"./chunk-BL5WFH5W.js";import{c as we}from"./chunk-AAKCLA3R.js";import{b as Je,ba as re,c as Le,ca as tt,ga as it,ha as nt,q as Xe,s as Ye,w as et}from"./chunk-MCW4FHXZ.js";import{Ea as Ze,Fa as Y,Ia as We,La as Te,Ma as ke,Na as B,O as J,P as Q,a as xe,d as _,ga as ze,j as ve,k as ye,ma as $e,n as He}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as qe,m as Ne,n as X,q as Ge,r as Me,w as P,y as Ce}from"./chunk-D2XKNHFS.js";import{$a as Ae,Ab as Oe,Eb as l,Fb as r,Gb as m,Gc as $,Hb as d,Ka as pe,La as oe,Lb as O,Mb as R,Mc as Ke,Nb as ae,Ob as j,Pb as fe,Qa as c,R as Ve,S as Pe,Sb as N,T as Be,Ub as u,V as ue,Va as H,X as D,Xb as V,Yb as he,Yc as U,Zb as k,Zc as me,_b as L,aa as x,ba as v,ca as F,cc as _e,dc as Re,fc as G,gb as h,gc as f,hb as De,hc as s,ic as z,ja as ie,jc as Ie,kb as de,lb as ge,mb as g,oa as ne,rc as W,sc as Z,tc as le,vb as be,wb as I,zb as Fe}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var pt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mega-menu-accessibility-doc"]],decls:125,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,n){t&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),s(3,"Screen Reader"),m(),r(4,"p"),s(5," MegaMenu component uses the "),r(6,"i"),s(7,"menubar"),m(),s(8," role along with "),r(9,"i"),s(10,"aria-orientation"),m(),s(11," and the value to describe the component can either be provided with "),r(12,"i"),s(13,"aria-labelledby"),m(),s(14," or "),r(15,"i"),s(16,"aria-label"),m(),s(17," props. Each list item has a "),r(18,"i"),s(19,"presentation"),m(),s(20," role whereas anchor elements have a "),r(21,"i"),s(22,"menuitem"),m(),s(23," role with "),r(24,"i"),s(25,"aria-label"),m(),s(26," referring to the label of the item and "),r(27,"i"),s(28,"aria-disabled"),m(),s(29," defined if the item is disabled. A submenu within a MegaMenu uses the "),r(30,"i"),s(31,"menu"),m(),s(32," role with an "),r(33,"i"),s(34,"aria-labelledby"),m(),s(35," defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have "),r(36,"i"),s(37,"aria-haspopup"),m(),s(38,", "),r(39,"i"),s(40,"aria-expanded"),m(),s(41," and "),r(42,"i"),s(43,"aria-controls"),m(),s(44," to define the relation between the item and the submenu. "),m(),r(45,"h3"),s(46,"Keyboard Support"),m(),r(47,"div",0)(48,"table",1)(49,"thead")(50,"tr")(51,"th"),s(52,"Key"),m(),r(53,"th"),s(54,"Function"),m()()(),r(55,"tbody")(56,"tr")(57,"td")(58,"i"),s(59,"tab"),m()(),r(60,"td"),s(61,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),m()(),r(62,"tr")(63,"td")(64,"i"),s(65,"shift"),m(),s(66," + "),r(67,"i"),s(68,"tab"),m()(),r(69,"td"),s(70,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),m()(),r(71,"tr")(72,"td")(73,"i"),s(74,"enter"),m()(),r(75,"td"),s(76,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),m()(),r(77,"tr")(78,"td")(79,"i"),s(80,"space"),m()(),r(81,"td"),s(82,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),m()(),r(83,"tr")(84,"td")(85,"i"),s(86,"escape"),m()(),r(87,"td"),s(88,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),m()(),r(89,"tr")(90,"td")(91,"i"),s(92,"down arrow"),m()(),r(93,"td"),s(94,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu."),m()(),r(95,"tr")(96,"td")(97,"i"),s(98,"up arrow"),m()(),r(99,"td"),s(100,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu."),m()(),r(101,"tr")(102,"td")(103,"i"),s(104,"right arrow"),m()(),r(105,"td"),s(106,"If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group."),m()(),r(107,"tr")(108,"td")(109,"i"),s(110,"left arrow"),m()(),r(111,"td"),s(112,"If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group."),m()(),r(113,"tr")(114,"td")(115,"i"),s(116,"home"),m()(),r(117,"td"),s(118,"Moves focus to the first menuitem within the submenu."),m()(),r(119,"tr")(120,"td")(121,"i"),s(122,"end"),m()(),r(123,"td"),s(124,"Moves focus to the last menuitem within the submenu."),m()()()()()()())},dependencies:[y],encapsulation:2})}return i})();var dt=`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`;var Lt={rootList:({instance:i})=>({"max-height":i.scrollHeight,overflow:"auto"})},wt={root:({instance:i})=>["p-megamenu p-component",{"p-megamenu-mobile":i.queryMatches(),"p-megamenu-mobile-active":i.mobileActive,"p-megamenu-horizontal":i.orientation==="horizontal","p-megamenu-vertical":i.orientation==="vertical"}],start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:({instance:i,processedItem:p})=>["p-megamenu-submenu-label",{"p-disabled":i.isItemDisabled(p)}],item:({instance:i,processedItem:p})=>["p-megamenu-item",i.getItemProp(p,"styleClass"),i.getItemProp(p,"class"),{"p-megamenu-item-active":i.isItemActive(p),"p-focus":i.isItemFocused(p),"p-disabled":i.isItemDisabled(p)}],itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:({instance:i,processedItem:p})=>{let e=i.isItemGroup(p)?p.items.length:0,t;if(i.megaMenu.queryMatches())t="p-megamenu-col-12";else switch(e){case 2:t="p-megamenu-col-6";break;case 3:t="p-megamenu-col-4";break;case 4:t="p-megamenu-col-3";break;case 6:t="p-megamenu-col-2";break;default:t="p-megamenu-col-12";break}return t},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},ce=(()=>{class i extends We{name="megamenu";style=dt;classes=wt;inlineStyles=Lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ne(i)))(n||i)}})();static \u0275prov=Pe({token:i,factory:i.\u0275fac})}return i})();var bt=i=>({processedItem:i}),Pt=()=>({exact:!1}),Bt=i=>({$implicit:i});function At(i,p){if(i&1&&(r(0,"li",5),s(1),m()),i&2){let e=u();G(e.getItemProp(e.submenu,"style")),f(e.cn(e.cx("submenuLabel"),e.getItemProp(e.submenu,"class"))),l("pBind",e.ptm("submenuLabel")),c(),Ie(" ",e.getItemLabel(e.submenu)," ")}}function Dt(i,p){if(i&1&&d(0,"li",8),i&2){let e=u().$implicit,t=u();G(t.getItemProp(e,"style")),f(t.cn(t.cx("separator"),t.getItemProp(e,"class"))),l("pBind",t.ptm("separator")),I("id",t.getItemId(e))}}function Ft(i,p){if(i&1&&d(0,"span",19),i&2){let e=u(4),t=e.$implicit,n=e.index,o=u();f(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),l("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,n,"itemIcon")),I("tabindex",-1)}}function Ot(i,p){if(i&1&&(r(0,"span",20),s(1),m()),i&2){let e=u(4),t=e.$implicit,n=e.index,o=u();f(o.cx("itemLabel")),l("pBind",o.getPTOptions(t,n,"itemLabel")),c(),Ie(" ",o.getItemLabel(t)," ")}}function Rt(i,p){if(i&1&&d(0,"span",21),i&2){let e=u(4),t=e.$implicit,n=e.index,o=u();f(o.cx("itemLabel")),l("innerHTML",o.getItemLabel(t),pe)("pBind",o.getPTOptions(t,n,"itemLabel"))}}function Kt(i,p){if(i&1&&d(0,"p-badge",22),i&2){let e=u(4).$implicit,t=u();f(t.getItemProp(e,"badgeStyleClass")),l("value",t.getItemProp(e,"badge"))}}function Ht(i,p){if(i&1&&(F(),d(0,"svg",26)),i&2){let e=u(6),t=e.$implicit,n=e.index,o=u();f(o.cx("submenuIcon")),l("pBind",o.getPTOptions(t,n,"submenuIcon")),I("aria-hidden",!0)}}function zt(i,p){if(i&1&&(F(),d(0,"svg",28)),i&2){let e=u(7),t=e.$implicit,n=e.index,o=u();f(o.cx("submenuIcon")),l("pBind",o.getPTOptions(t,n,"submenuIcon")),I("aria-hidden",!0)}}function $t(i,p){if(i&1&&g(0,zt,1,4,"svg",27),i&2){let e=u(7);l("ngIf",e.orientation==="vertical")}}function qt(i,p){if(i&1&&(O(0),Fe(1,Ht,1,4,":svg:svg",24)(2,$t,1,1,":svg:svg",25),R()),i&2){let e=u(6);c(),Oe(e.orientation==="horizontal"||e.mobileActive?1:2)}}function Nt(i,p){}function Gt(i,p){i&1&&g(0,Nt,0,0,"ng-template",29),i&2&&be("aria-hidden",!0)}function Zt(i,p){if(i&1&&(O(0),g(1,qt,3,1,"ng-container",11)(2,Gt,1,1,null,23),R()),i&2){let e=u(5);c(),l("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),c(),l("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function Ut(i,p){if(i&1&&(r(0,"a",15),g(1,Ft,1,5,"span",16)(2,Ot,2,4,"span",17)(3,Rt,1,4,"ng-template",null,1,$)(5,Kt,1,3,"p-badge",18)(6,Zt,3,2,"ng-container",11),m()),i&2){let e=_e(4),t=u(3),n=t.$implicit,o=t.index,a=u();f(a.cx("itemLink")),l("target",a.getItemProp(n,"target"))("pBind",a.getPTOptions(n,o,"itemLink")),I("href",a.getItemProp(n,"url"),oe)("data-automationid",a.getItemProp(n,"automationId"))("title",a.getItemProp(n,"title"))("tabindex",-1),c(),l("ngIf",a.getItemProp(n,"icon")),c(),l("ngIf",a.getItemProp(n,"escape"))("ngIfElse",e),c(3),l("ngIf",a.getItemProp(n,"badge")),c(),l("ngIf",a.isItemGroup(n))}}function Qt(i,p){if(i&1&&d(0,"span",19),i&2){let e=u(4),t=e.$implicit,n=e.index,o=u();f(o.cn(o.cx("itemIcon"),o.getItemProp(t,"icon"),o.getItemProp(t,"iconClass"))),l("ngStyle",o.getItemProp(t,"iconStyle"))("pBind",o.getPTOptions(t,n,"itemIcon")),I("tabindex",-1)}}function jt(i,p){if(i&1&&(r(0,"span",20),s(1),m()),i&2){let e=u(4),t=e.$implicit,n=e.index,o=u();f(o.cx("itemLabel")),l("pBind",o.getPTOptions(t,n,"itemLabel")),c(),z(o.getItemLabel(t))}}function Wt(i,p){if(i&1&&d(0,"span",21),i&2){let e=u(4),t=e.$implicit,n=e.index,o=u();f(o.cx("itemLabel")),l("innerHTML",o.getItemLabel(t),pe)("pBind",o.getPTOptions(t,n,"itemLabel"))}}function Jt(i,p){if(i&1&&d(0,"p-badge",32),i&2){let e=u(4).$implicit,t=u();l("styleClass",t.getItemProp(e,"badgeStyleClass"))("value",t.getItemProp(e,"badge"))}}function Xt(i,p){if(i&1&&(F(),d(0,"svg",26)),i&2){let e=u(6),t=e.$implicit,n=e.index,o=u();f(o.cx("submenuIcon")),l("pBind",o.getPTOptions(t,n,"submenuIcon")),I("aria-hidden",!0)}}function Yt(i,p){if(i&1&&(F(),d(0,"svg",28)),i&2){let e=u(6),t=e.$implicit,n=e.index,o=u();f(o.cx("submenuIcon")),l("pBind",o.getPTOptions(t,n,"submenuIcon")),I("aria-hidden",!0)}}function ei(i,p){if(i&1&&(O(0),g(1,Xt,1,4,"svg",33)(2,Yt,1,4,"svg",27),R()),i&2){let e=u(6);c(),l("ngIf",e.orientation==="horizontal"),c(),l("ngIf",e.orientation==="vertical")}}function ti(i,p){}function ii(i,p){i&1&&g(0,ti,0,0,"ng-template",29),i&2&&be("aria-hidden",!0)}function ni(i,p){if(i&1&&(O(0),g(1,ei,3,2,"ng-container",11)(2,ii,1,1,null,23),R()),i&2){let e=u(5);c(),l("ngIf",!e.megaMenu.submenuIconTemplate&&!e.megaMenu._submenuIconTemplate),c(),l("ngTemplateOutlet",e.megaMenu.submenuIconTemplate||e.megaMenu._submenuIconTemplate)}}function oi(i,p){if(i&1&&(r(0,"a",30),g(1,Qt,1,5,"span",16)(2,jt,2,4,"span",17)(3,Wt,1,4,"ng-template",null,2,$)(5,Jt,1,2,"p-badge",31)(6,ni,3,2,"ng-container",11),m()),i&2){let e=_e(4),t=u(3),n=t.$implicit,o=t.index,a=u();f(a.cx("itemLink")),l("routerLink",a.getItemProp(n,"routerLink"))("queryParams",a.getItemProp(n,"queryParams"))("routerLinkActive","p-megamenu-item-link-active")("routerLinkActiveOptions",a.getItemProp(n,"routerLinkActiveOptions")||Z(22,Pt))("target",a.getItemProp(n,"target"))("fragment",a.getItemProp(n,"fragment"))("queryParamsHandling",a.getItemProp(n,"queryParamsHandling"))("preserveFragment",a.getItemProp(n,"preserveFragment"))("skipLocationChange",a.getItemProp(n,"skipLocationChange"))("replaceUrl",a.getItemProp(n,"replaceUrl"))("state",a.getItemProp(n,"state"))("pBind",a.getPTOptions(n,o,"itemLink")),I("data-automationid",a.getItemProp(n,"automationId"))("title",a.getItemProp(n,"title"))("tabindex",-1),c(),l("ngIf",a.getItemProp(n,"icon")),c(),l("ngIf",a.getItemProp(n,"escape"))("ngIfElse",e),c(3),l("ngIf",a.getItemProp(n,"badge")),c(),l("ngIf",a.isItemGroup(n))}}function ai(i,p){if(i&1&&(O(0),g(1,Ut,7,13,"a",13)(2,oi,7,23,"a",14),R()),i&2){let e=u(2).$implicit,t=u();c(),l("ngIf",!t.getItemProp(e,"routerLink")),c(),l("ngIf",t.getItemProp(e,"routerLink"))}}function li(i,p){}function mi(i,p){i&1&&g(0,li,0,0,"ng-template")}function ri(i,p){if(i&1&&(O(0),g(1,mi,1,0,null,34),R()),i&2){let e=u(2).$implicit,t=u();c(),l("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",le(2,Bt,e.item))}}function si(i,p){if(i&1){let e=j();r(0,"ul",37),N("itemClick",function(n){x(e);let o=u(5);return v(o.itemClick.emit(n))})("itemMouseEnter",function(n){x(e);let o=u(5);return v(o.onItemMouseEnter(n))}),m()}if(i&2){let e=p.$implicit,t=u(5);l("id",t.getSubListId(e))("submenu",e)("items",e.items)("itemTemplate",t.itemTemplate)("mobileActive",t.mobileActive)("menuId",t.menuId)("focusedItemId",t.focusedItemId)("level",t.level+1)("root",!1)("pt",t.pt())}}function ci(i,p){if(i&1&&(r(0,"div",20),g(1,si,1,10,"ul",36),m()),i&2){let e=p.$implicit,t=u(3).$implicit,n=u();f(n.cx("column",le(4,bt,t))),l("pBind",n.ptm("column")),c(),l("ngForOf",e)}}function ui(i,p){if(i&1&&(r(0,"div",20)(1,"div",20),g(2,ci,2,6,"div",35),m()()),i&2){let e=u(2).$implicit,t=u();f(t.cx("overlay")),l("pBind",t.ptm("overlay")),c(),f(t.cx("grid")),l("pBind",t.ptm("grid")),c(),l("ngForOf",e.items)}}function pi(i,p){if(i&1){let e=j();r(0,"li",9,0)(2,"div",10),N("click",function(n){x(e);let o=u().$implicit,a=u();return v(a.onItemClick(n,o))})("mouseenter",function(n){x(e);let o=u().$implicit,a=u();return v(a.onItemMouseEnter({$event:n,processedItem:o}))}),g(3,ai,3,2,"ng-container",11)(4,ri,2,4,"ng-container",11),m(),g(5,ui,3,7,"div",12),m()}if(i&2){let e=u(),t=e.$implicit,n=e.index,o=u();f(o.cn(o.cx("item",le(22,bt,t)),o.getItemProp(t,"styleClass"))),l("ngStyle",o.getItemProp(t,"style"))("tooltipOptions",o.getItemProp(t,"tooltipOptions"))("pBind",o.getPTOptions(t,n,"item")),I("id",o.getItemId(t))("data-p-active",o.isItemActive(t))("data-p-focused",o.isItemFocused(t))("data-p-disabled",o.isItemDisabled(t))("aria-label",o.getItemLabel(t))("aria-disabled",o.isItemDisabled(t)||void 0)("aria-haspopup",o.isItemGroup(t)&&!o.getItemProp(t,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(t)?o.isItemActive(t):void 0)("aria-level",o.level+1)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(n)),c(2),f(o.cx("itemContent")),l("pBind",o.getPTOptions(t,n,"itemContent")),c(),l("ngIf",!o.itemTemplate),c(),l("ngIf",o.itemTemplate),c(),l("ngIf",o.isItemVisible(t)&&o.isItemGroup(t))}}function di(i,p){if(i&1&&g(0,Dt,1,6,"li",6)(1,pi,6,24,"li",7),i&2){let e=p.$implicit,t=u();l("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),c(),l("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var gi=["start"],bi=["end"],fi=["menuicon"],hi=["submenuicon"],_i=["item"],Ii=["button"],xi=["buttonicon"],vi=["menubutton"],yi=["rootmenu"];function Mi(i,p){i&1&&ae(0)}function Ci(i,p){if(i&1&&(r(0,"div",6),g(1,Mi,1,0,"ng-container",4),m()),i&2){let e=u();f(e.cx("start")),l("pBind",e.ptm("start")),c(),l("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Si(i,p){if(i&1&&(F(),d(0,"svg",10)),i&2){let e=u(3);l("pBind",e.ptm("buttonIcon"))}}function Ti(i,p){}function ki(i,p){i&1&&g(0,Ti,0,0,"ng-template")}function Li(i,p){if(i&1){let e=j();r(0,"a",8,1),N("click",function(n){x(e);let o=u(2);return v(o.menuButtonClick(n))})("keydown",function(n){x(e);let o=u(2);return v(o.menuButtonKeydown(n))}),g(2,Si,1,1,"svg",9)(3,ki,1,0,null,4),m()}if(i&2){let e=u(2);f(e.cx("button")),l("pBind",e.ptm("button")),I("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),c(2),l("ngIf",!e.buttonIconTemplate&&!e._buttonIconTemplate),c(),l("ngTemplateOutlet",e.buttonIconTemplate||e._buttonIconTemplate)}}function wi(i,p){if(i&1&&(O(0),g(1,Li,4,9,"a",7),R()),i&2){let e=u();c(),l("ngIf",e.model&&e.model.length>0)}}function Ei(i,p){i&1&&ae(0)}function Vi(i,p){i&1&&ae(0)}function Pi(i,p){if(i&1&&(r(0,"div",6),g(1,Vi,1,0,"ng-container",4),m()),i&2){let e=u();f(e.cx("end")),l("pBind",e.ptm("end")),c(),l("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var ft=new ue("MEGAMENU_INSTANCE"),gt=new ue("MEGAMENU_SUB_INSTANCE"),Bi=(()=>{class i extends ke{bindDirectiveInstance=D(B,{self:!0});$pcMegaMenu=D(ft,{optional:!0,skipSelf:!0})??void 0;$pcMegaMenuSub=D(gt,{optional:!0,skipSelf:!0})??void 0;id;items;itemTemplate;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;disabled=!1;orientation;activeItem;submenu;queryMatches=!1;mobileActive=!1;scrollHeight;tabindex=0;root=!1;itemClick=new H;itemMouseEnter=new H;menuFocus=new H;menuBlur=new H;menuKeydown=new H;menuMouseDown=new H;megaMenu=D(Ve(()=>S));_componentStyle=D(ce);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(this.root?"rootList":"submenu"))}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,n=null){return e&&e.item?ye(e.item[t],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getSubListId(e){return`${this.getItemId(e)}_list`}getItemLabel(e){return this.getItemProp(e,"label")}isSubmenuVisible(e){return this.submenu&&!this.root?this.isItemVisible(e):!0}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return _(this.activeItem)?this.activeItem.key===e.key:!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return _(e.items)}getAriaSetSize(){return this.items?.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-(this.items?.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length||0)+1}onItemMouseEnter(e){let{event:t,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:n})}getPTOptions(e,t,n){let o={context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}};return this.ptm(n,o)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ne(i)))(n||i)}})();static \u0275cmp=h({type:i,selectors:[["p-megaMenuSub"],["p-megamenu-sub"],["ul","pMegaMenuSub",""]],hostVars:12,hostBindings:function(t,n){t&1&&N("keydown",function(a){return n.menuKeydown.emit(a)})("focus",function(a){return n.menuFocus.emit(a)})("blur",function(a){return n.menuBlur.emit(a)})("mousedown",function(a){return n.menuMouseDown.emit(a)}),t&2&&(fe("tabIndex",n.tabindex),I("role",n.root?"menubar":"menu")("id",n.id)("aria-orientation",n.orientation)("aria-activedescendant",n.focusedItemId)("data-pc-section",n.root?"rootlist":"submenu"),G(n.sx("rootList")),f(n.root?n.cx("rootList"):n.cx("submenu")),Re("display",n.isSubmenuVisible(n.submenu)?null:"none"))},inputs:{id:"id",items:"items",itemTemplate:"itemTemplate",menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",me],focusedItemId:"focusedItemId",disabled:[2,"disabled","disabled",U],orientation:"orientation",activeItem:"activeItem",submenu:"submenu",queryMatches:[2,"queryMatches","queryMatches",U],mobileActive:[2,"mobileActive","mobileActive",U],scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",me],root:[2,"root","root",U]},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown",menuMouseDown:"menuMouseDown"},features:[W([{provide:gt,useExisting:i},{provide:Te,useExisting:i}]),ge([B]),de],decls:2,vars:2,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","presentation",3,"class","style","pBind",4,"ngIf"],["ngFor","",3,"ngForOf"],["role","presentation",3,"pBind"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","class","tooltipOptions","pBind",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"ngStyle","tooltipOptions","pBind"],[3,"click","mouseenter","pBind"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],["pRipple","",3,"target","class","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"target","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"class","value",4,"ngIf"],[3,"ngStyle","pBind"],[3,"pBind"],[3,"innerHTML","pBind"],[3,"value"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind"],["data-p-icon","angle-right",3,"class","pBind"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"pBind"],[3,"aria-hidden"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"styleClass","value",4,"ngIf"],[3,"styleClass","value"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt","itemClick","itemMouseEnter",4,"ngFor","ngForOf"],["pMegaMenuSub","",3,"itemClick","itemMouseEnter","id","submenu","items","itemTemplate","mobileActive","menuId","focusedItemId","level","root","pt"]],template:function(t,n){t&1&&g(0,At,2,6,"li",3)(1,di,2,2,"ng-template",4),t&2&&(l("ngIf",n.submenu),c(),l("ngForOf",n.items))},dependencies:[i,P,Ne,X,Me,Ge,Se,Qe,je,re,Ee,ot,B,Xe,Ye,Le,Je,Y],encapsulation:2})}return i})(),S=(()=>{class i extends ke{bindDirectiveInstance=D(B,{self:!0});set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;orientation="horizontal";id;ariaLabel;ariaLabelledBy;breakpoint="960px";scrollHeight="20rem";disabled=!1;tabindex=0;startTemplate;endTemplate;menuIconTemplate;submenuIconTemplate;itemTemplate;buttonTemplate;buttonIconTemplate;templates;menubuttonViewChild;rootmenu;_startTemplate;_endTemplate;_menuIconTemplate;_submenuIconTemplate;_itemTemplate;_buttonTemplate;_buttonIconTemplate;outsideClickListener;resizeListener;dirty=!1;focused=!1;activeItem=ie(null);focusedItemInfo=ie({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_model;_componentStyle=D(ce);matchMediaListener;query;queryMatches=ie(!1);mobileActive=!1;get visibleItems(){let e=_(this.activeItem())?this.activeItem():null;return e?e.items.reduce((t,n)=>(n.forEach(o=>{o.items.forEach(a=>{t.push(a)})}),t),[]):this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e?.item&&e.item?.id?e.item.id:_(e.key)?`${this.id}_${e.key}`:null}constructor(){super(),Ke(()=>{let e=this.activeItem();_(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.id=this.id||$e("pn_id_")}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"button":this._buttonTemplate=e.template;break;case"buttonicon":this._buttonIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}bindMatchMediaListener(){if(Ce(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}createProcessedItems(e,t=0,n={},o="",a){let b=[];return e&&e.forEach((T,K)=>{let A=(o!==""?o+"_":"")+(a!==void 0?a+"_":"")+K,q={item:T,index:K,level:t,key:A,parent:n,parentKey:o,columnIndex:a!==void 0?a:n.columnIndex!==void 0?n.columnIndex:K};q.items=t===0&&T.items&&T.items.length>0?T.items.map((Tt,kt)=>this.createProcessedItems(Tt,t+1,q,A,kt)):this.createProcessedItems(T.items,t+1,q,A),b.push(q)}),b}getItemProp(e,t){return e?ye(e[t]):void 0}onItemClick(e){let{originalEvent:t,processedItem:n}=e,o=this.isProcessedItemGroup(n),a=xe(n.parent),b=this.isSelected(n);if(this.dirty=!0,b){let{index:T,key:K,parentKey:A,item:q}=n;this.activeItem.set(null),this.focusedItemInfo.set({index:T,key:K,parentKey:A,item:q}),this.dirty=!a,this.mobileActive||Q(this.rootmenu?.el?.nativeElement,{preventScroll:!0})}else o?this.onItemChange(e):this.hide(t)}onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)}toggle(e){this.mobileActive?(this.mobileActive=!1,we.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,we.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}show(){this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),Q(this.rootmenu?.el.nativeElement)}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n;t===null&&this.queryMatches()?n=this.menubuttonViewChild?.nativeElement:n=J(this.rootmenu?.el?.nativeElement,`li[id="${t}"]`),n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}onItemChange(e){let{processedItem:t,isFocus:n}=e;if(xe(t))return;let{index:o,key:a,parentKey:b,items:T,item:K}=t,A=_(T);A&&this.activeItem.set(t),this.focusedItemInfo.set({index:o,key:a,parentKey:b,item:K}),A&&(this.dirty=!0),n&&Q(this.rootmenu?.el?.nativeElement)}hide(e,t){this.mobileActive&&(this.mobileActive=!1,setTimeout(()=>{Q(this.menubuttonViewChild?.nativeElement),this.scrollInView()},100)),this.activeItem.set(null),this.focusedItemInfo.set({index:-1,key:"",parentKey:"",item:null}),t&&Q(this.rootmenu?.el?.nativeElement),this.dirty=!1}onMenuFocus(e){this.focused=!0;let t=e.relatedTarget;if((!t||!this.el.nativeElement.contains(t))&&this.focusedItemInfo().index===-1&&!this.activeItem()&&!this.dirty){let o=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(o);this.focusedItemInfo.set({index:o,key:a.key,parentKey:a.parentKey,item:a.item})}}onMenuBlur(e){let t=e.relatedTarget;t&&this.el.nativeElement.contains(t)||setTimeout(()=>{let n=this.document.activeElement;n&&this.el.nativeElement.contains(n)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1)})}onMenuMouseDown(e){this.dirty=!0}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&He(e.key)&&this.searchItems(e,e.key);break}}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&_(e.items)}isSelected(e){return _(this.activeItem())?this.activeItem().key===e.key:!1}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&_(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,o=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(a=>this.isItemMatched(a)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(a=>this.isItemMatched(a)),n!==-1&&(o=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemInfo(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}changeFocusedItemInfo(e,t){let n=this.findVisibleItem(t);if(_(n)){let{key:o,parentKey:a,item:b}=n;this.focusedItemInfo.set({index:t,key:o||"",parentKey:a,item:b})}this.scrollInView()}onArrowDownKey(e){if(this.orientation==="horizontal")if(_(this.activeItem())&&this.activeItem().key===this.focusedItemInfo().key){let{key:n,item:o}=this.activeItem();this.focusedItemInfo.set({index:-1,key:"",parentKey:n,item:o})}else{let n=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(n)){let{parentKey:a,key:b,item:T}=n;this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,key:b,parentKey:a,item:T}),this.searchValue=""}}let t=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}onArrowRightKey(e){let t=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(t)){if(this.orientation==="vertical")if(_(this.activeItem())&&this.activeItem().key===t.key)this.focusedItemInfo.set({index:-1,key:"",parentKey:this.activeItem().key,item:t.item});else{let a=this.findVisibleItem(this.focusedItemInfo().index);this.isProccessedItemGroup(a)&&(this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo.set({index:-1,key:a.key,parentKey:a.parentKey,item:a.item}),this.searchValue="")}let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,o)}else{let o=t.columnIndex+1,a=this.visibleItems.findIndex(b=>b.columnIndex===o);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.orientation==="horizontal"){if(this.focusedItemInfo().index!==-1){let t=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(t)&&_(this.activeItem)&&(this.focusedItemInfo().index===0?(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:t.item}),this.activeItem.set(null)):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{let t=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,t),e.preventDefault()}}onArrowLeftKey(e){let t=this.findVisibleItem(this.focusedItemInfo().index);if(this.isProccessedItemGroup(t)){if(this.orientation==="horizontal"){let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,o)}}else{this.orientation==="vertical"&&_(this.activeItem())&&t.columnIndex===0&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,parentKey:this.activeItem().parentKey,item:t.item}),this.activeItem.set(null));let o=t.columnIndex-1,a=this.visibleItems.findIndex(b=>b.columnIndex===o);a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()}onHomeKey(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){_(this.activeItem())&&(this.focusedItemInfo.set({index:this.activeItem().index,key:this.activeItem().key,item:this.activeItem().item}),this.activeItem.set(null)),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.findVisibleItem(this.focusedItemInfo().index);!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=J(this.rootmenu?.el?.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=t&&(J(t,'[data-pc-section="itemlink"]')||J(t,"a,button"));n?n.click():t&&t.click();let o=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(o)&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()}findVisibleItem(e){return _(this.visibleItems)?this.visibleItems[e]:null}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return ve(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?ve(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e}bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{ze()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))}bindOutsideClickListener(){Ce(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{this.el?.nativeElement!==e.target&&!this.el?.nativeElement.contains(e.target)&&this.hide()})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}onDestroy(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["p-megaMenu"],["p-megamenu"],["p-mega-menu"]],contentQueries:function(t,n,o){if(t&1&&(V(o,gi,4),V(o,bi,4),V(o,fi,4),V(o,hi,4),V(o,_i,4),V(o,Ii,4),V(o,xi,4),V(o,Ze,4)),t&2){let a;k(a=L())&&(n.startTemplate=a.first),k(a=L())&&(n.endTemplate=a.first),k(a=L())&&(n.menuIconTemplate=a.first),k(a=L())&&(n.submenuIconTemplate=a.first),k(a=L())&&(n.itemTemplate=a.first),k(a=L())&&(n.buttonTemplate=a.first),k(a=L())&&(n.buttonIconTemplate=a.first),k(a=L())&&(n.templates=a)}},viewQuery:function(t,n){if(t&1&&(he(vi,5),he(yi,5)),t&2){let o;k(o=L())&&(n.menubuttonViewChild=o.first),k(o=L())&&(n.rootmenu=o.first)}},hostVars:3,hostBindings:function(t,n){t&2&&(fe("id",n.id),f(n.cn(n.cx("root"),n.styleClass)))},inputs:{model:"model",styleClass:"styleClass",orientation:"orientation",id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",breakpoint:"breakpoint",scrollHeight:"scrollHeight",disabled:[2,"disabled","disabled",U],tabindex:[2,"tabindex","tabindex",me]},features:[W([ce,{provide:ft,useExisting:i},{provide:Te,useExisting:i}]),ge([B]),de],decls:6,vars:21,consts:[["rootmenu",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],[4,"ngIf"],[4,"ngTemplateOutlet"],["pMegaMenuSub","",3,"itemClick","menuFocus","menuBlur","menuKeydown","menuMouseDown","itemMouseEnter","itemTemplate","items","menuId","root","orientation","ariaLabel","disabled","tabindex","activeItem","level","ariaLabelledBy","focusedItemId","mobileActive","queryMatches","scrollHeight","pt"],[3,"pBind"],["role","button","tabindex","0",3,"class","pBind","click","keydown",4,"ngIf"],["role","button","tabindex","0",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(t,n){if(t&1){let o=j();g(0,Ci,2,4,"div",2)(1,wi,2,1,"ng-container",3)(2,Ei,1,0,"ng-container",4),r(3,"ul",5,0),N("itemClick",function(b){return x(o),v(n.onItemClick(b))})("menuFocus",function(b){return x(o),v(n.onMenuFocus(b))})("menuBlur",function(b){return x(o),v(n.onMenuBlur(b))})("menuKeydown",function(b){return x(o),v(n.onKeyDown(b))})("menuMouseDown",function(b){return x(o),v(n.onMenuMouseDown(b))})("itemMouseEnter",function(b){return x(o),v(n.onItemMouseEnter(b))}),m(),g(5,Pi,2,4,"div",2)}t&2&&(l("ngIf",n.startTemplate||n._startTemplate),c(),l("ngIf",!n.buttonTemplate&&!n._buttonTemplate),c(),l("ngTemplateOutlet",n.buttonTemplate||n._buttonTemplate),c(),l("itemTemplate",n.itemTemplate||n._itemTemplate)("items",n.processedItems)("menuId",n.id)("root",!0)("orientation",n.orientation)("ariaLabel",n.ariaLabel)("disabled",n.disabled)("tabindex",n.disabled?-1:n.tabindex)("activeItem",n.activeItem())("level",0)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("mobileActive",n.mobileActive)("queryMatches",n.queryMatches())("scrollHeight",n.scrollHeight)("pt",n.pt()),I("id",n.id+"_list"),c(2),l("ngIf",n.endTemplate||n._endTemplate))},dependencies:[P,X,Me,Se,Bi,Ee,B,et,Le,Y],encapsulation:2,changeDetection:0})}return i})(),E=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=De({type:i});static \u0275inj=Be({imports:[S,Y,Y]})}return i})();var ht=(()=>{class i{items;ngOnInit(){this.items=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theater",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}]}code={basic:'<p-megamenu [model]="items" />',html:`<div class="card">
    <p-megamenu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';

@Component({
    selector: 'mega-menu-basic-demo',
    templateUrl: './mega-menu-basic-demo.html',
    standalone: true,
    imports: [MegaMenu]
})
export class MegaMenuBasicDemo implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Furniture',
                icon: 'pi pi-box',
                items: [
                    [
                        {
                            label: 'Living Room',
                            items: [
                                { label: 'Accessories' },
                                { label: 'Armchair' },
                                { label: 'Coffee Table' },
                                { label: 'Couch' },
                                { label: 'TV Stand' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Kitchen',
                            items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
                        },
                        {
                            label: 'Bathroom',
                            items: [{ label: 'Accessories' }],
                        },
                    ],
                    [
                        {
                            label: 'Bedroom',
                            items: [
                                { label: 'Bed' },
                                { label: 'Chaise lounge' },
                                { label: 'Cupboard' },
                                { label: 'Dresser' },
                                { label: 'Wardrobe' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Office',
                            items: [
                                { label: 'Bookcase' },
                                { label: 'Cabinet' },
                                { label: 'Chair' },
                                { label: 'Desk' },
                                { label: 'Executive Chair' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Electronics',
                icon: 'pi pi-mobile',
                items: [
                    [
                        {
                            label: 'Computer',
                            items: [
                                { label: 'Monitor' },
                                { label: 'Mouse' },
                                { label: 'Notebook' },
                                { label: 'Keyboard' },
                                { label: 'Printer' },
                                { label: 'Storage' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Home Theater',
                            items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                        },
                    ],
                    [
                        {
                            label: 'Gaming',
                            items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
                        },
                    ],
                    [
                        {
                            label: 'Appliances',
                            items: [
                                { label: 'Coffee Machine' },
                                { label: 'Fridge' },
                                { label: 'Oven' },
                                { label: 'Vaccum Cleaner' },
                                { label: 'Washing Machine' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Sports',
                icon: 'pi pi-clock',
                items: [
                    [
                        {
                            label: 'Football',
                            items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                        },
                    ],
                    [
                        {
                            label: 'Running',
                            items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                        },
                    ],
                    [
                        {
                            label: 'Swimming',
                            items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                        },
                    ],
                    [
                        {
                            label: 'Tennis',
                            items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                        },
                    ],
                ],
            },
        ];
    }
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card"],[3,"model"],["selector","mega-menu-basic-demo",3,"code"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"MegaMenu requires a collection of menuitems as its "),r(3,"i"),s(4,"model"),m(),s(5,"."),m()(),r(6,"div",0),d(7,"p-megamenu",1),m(),d(8,"app-code",2)),t&2&&(c(7),l("model",n.items),c(),l("code",n.code))},dependencies:[E,S,C,M,y],encapsulation:2})}return i})();var _t=(()=>{class i{code={basic:`{
    label: 'Log out',
    icon: 'pi pi-signout',
    command: () => {
        // Callback to run
    }
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["command-doc"]],decls:7,vars:3,consts:[["importCode","",3,"code","hideToggleCode","hideStackBlitz"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"The "),r(3,"i"),s(4,"command"),m(),s(5," property of a menuitem defines the callback to run when an item is activated by click or a key event."),m()(),d(6,"app-code",0)),t&2&&(c(6),l("code",n.code)("hideToggleCode",!0)("hideStackBlitz",!0))},dependencies:[C,M,y],encapsulation:2})}return i})();var It=(()=>{class i{code={typescript:"import { MegaMenuModule } from 'primeng/megamenu';"};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["mega-menu-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,n){t&1&&d(0,"app-code",0),t&2&&l("code",n.code)("hideToggleCode",!0)},dependencies:[C,M],encapsulation:2})}return i})();var xt=(()=>{class i{items=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theater",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}]]}];docs=[{data:se("MegaMenu"),key:"MegaMenu"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["megamenu-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"model"]],template:function(t,n){t&1&&(r(0,"app-docptviewer",0),d(1,"p-megamenu",1),m()),t&2&&(l("docs",n.docs),c(),l("model",n.items))},dependencies:[P,ut,E,S],encapsulation:2})}return i})();var vt=(()=>{class i{docs=[{id:"pt.viewer",label:"Viewer",component:xt},{id:"pt.doc.megamenu",label:"MegaMenu PT Options",component:rt,data:se("MegaMenu")}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["megamenu-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),s(3,"MegaMenu Pass Through"),m()(),d(4,"app-docsection",2),m()),t&2&&(c(4),l("docs",n.docs))},dependencies:[P,st],encapsulation:2})}return i})();var yt=(()=>{class i{router;items;constructor(e){this.router=e}ngOnInit(){this.items=[{label:"Router",icon:"pi pi-palette",items:[[{label:"RouterLink",items:[{label:"Theming",routerLink:"/theming"},{label:"UI Kit",routerLink:"/uikit"}]}]]},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",items:[[{label:"External",items:[{label:"Angular",url:"https://angular.dev/"},{label:"Vite.js",url:"https://vitejs.dev/"}]}]]}]}code={basic:'<p-megamenu [model]="items" />',html:`<div class="card">
    <p-megamenu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { Router } from '@angular/router';

@Component({
    selector: 'mega-menu-router-demo',
    templateUrl: './mega-menu-router-demo.html',
    standalone: true,
    imports: [MegaMenu]
})
export class MegaMenuRouterDemo implements OnInit {
    items: MegaMenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    [
                        {
                            label: 'RouterLink',
                            items: [
                                { label: 'Theming', routerLink: '/theming' },
                                { label: 'UI Kit', routerLink: '/uikit' }
                            ]
                        }
                    ]
                ]
            },
            {
                label: 'Programmatic',
                icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },
            {
                label: 'External',
                icon: 'pi pi-home',
                items: [
                    [
                        {
                            label: 'External',
                            items: [
                                { label: 'Angular', url: 'https://angular.dev/' },
                                {
                                    label: 'Vite.js',
                                    url: 'https://vitejs.dev/'
                                }
                            ]
                        }
                    ]
                ]
            }
        ];
    }
}`};static \u0275fac=function(t){return new(t||i)(Ae(Ue))};static \u0275cmp=h({type:i,selectors:[["router-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"model"],["selector","mega-menu-router-demo",3,"code"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"Menu items support navigation via routerLink, programmatic routing using commands, or external URLs."),m()(),r(3,"div",0),d(4,"p-megamenu",1),m(),d(5,"app-code",2)),t&2&&(c(4),l("model",n.items),c(),l("code",n.code))},dependencies:[E,S,C,M,y],encapsulation:2})}return i})();var Ai=()=>({"border-radius":"3rem",display:"flex"});function Di(i,p){i&1&&(F(),r(0,"svg",6),d(1,"path",7),r(2,"mask",8),d(3,"path",9),m(),r(4,"g",10),d(5,"path",11),m(),d(6,"path",12)(7,"path",13)(8,"path",14)(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21),m())}function Fi(i,p){if(i&1&&(r(0,"a",25),d(1,"i",26),r(2,"span",27),s(3),m()()),i&2){let e=u().$implicit;c(),l("ngClass",e.icon),c(2),z(e.label)}}function Oi(i,p){if(i&1&&(r(0,"a",28)(1,"span",29),d(2,"i",26),m(),r(3,"span",30)(4,"span",31),s(5),m(),r(6,"span",32),s(7),m()()()),i&2){let e=u().$implicit;c(2),l("ngClass",e.icon+" text-lg"),c(3),z(e.label),c(2),z(e.subtext)}}function Ri(i,p){if(i&1&&(r(0,"div",33),d(1,"img",34),r(2,"span"),s(3),m(),d(4,"p-button",35),m()),i&2){let e=u().$implicit;c(),l("src",e.image,oe),c(2),z(e.subtext),c(),l("label",e.label)("outlined",!0)}}function Ki(i,p){if(i&1&&g(0,Fi,4,2,"a",22)(1,Oi,8,3,"a",23)(2,Ri,5,4,"div",24),i&2){let e=p.$implicit;l("ngIf",e.root),c(),l("ngIf",!e.root&&!e.image),c(),l("ngIf",e.image)}}function Hi(i,p){i&1&&d(0,"p-avatar",36)}var Mt=(()=>{class i{items;ngOnInit(){this.items=[{label:"Company",root:!0,items:[[{items:[{label:"Features",icon:"pi pi-list",subtext:"Subtext of item"},{label:"Customers",icon:"pi pi-users",subtext:"Subtext of item"},{label:"Case Studies",icon:"pi pi-file",subtext:"Subtext of item"}]}],[{items:[{label:"Solutions",icon:"pi pi-shield",subtext:"Subtext of item"},{label:"Faq",icon:"pi pi-question",subtext:"Subtext of item"},{label:"Library",icon:"pi pi-search",subtext:"Subtext of item"}]}],[{items:[{label:"Community",icon:"pi pi-comments",subtext:"Subtext of item"},{label:"Rewards",icon:"pi pi-star",subtext:"Subtext of item"},{label:"Investors",icon:"pi pi-globe",subtext:"Subtext of item"}]}],[{items:[{image:"/_ext/primefaces.org/cdn/primeng/images/uikit/uikit-system.png",label:"GET STARTED",subtext:"Build spectacular apps in no time."}]}]]},{label:"Resources",root:!0},{label:"Contact",root:!0}]}code={basic:`<p-megamenu [model]="items" [style]="{ 'border-radius': '3rem', display: 'flex' }" class="p-4 bg-surface-0 dark:bg-surface-900">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item>
        <a *ngIf="item.root" pRipple class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
            <i [ngClass]="item.icon"></i>
            <span class="ml-2">{{ item.label }}</span>
        </a>
        <a *ngIf="!item.root && !item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-2">
            <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                <i [ngClass]="item.icon + ' text-lg'"></i>
            </span>
            <span class="inline-flex flex-col gap-1">
                <span class="font-medium text-lg text-surface-900 dark:text-surface-0">{{ item.label }}</span>
                <span class="whitespace-nowrap">{{ item.subtext }}</span>
            </span>
        </a>
        <div *ngIf="item.image" class="flex flex-col items-start gap-4">
            <img [src]="item.image" alt="megamenu-demo" class="w-full" />
            <span>{{ item.subtext }}</span>
            <p-button [label]="item.label" [outlined]="true"></p-button>
        </div>
    </ng-template>
    <ng-template #end>
        <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
</p-megamenu>`,html:`<div class="card">
    <p-megamenu [model]="items" [style]="{ 'border-radius': '3rem', display: 'flex' }" class="p-4 bg-surface-0 dark:bg-surface-900">
        <ng-template #start>
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                    fill="var(--p-primary-color)"
                />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path
                        d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                        fill="var(--ground-background)"
                    />
                </mask>
                <g mask="url(#mask0_1_52)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                        fill="var(--p-primary-color)"
                    />
                </g>
                <path
                    d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                    fill="var(--ground-background)"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                    fill="var(--ground-background)"
                />
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                    fill="var(--ground-background)"
                />
                <path
                    d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                    fill="var(--ground-background)"
                />
            </svg>
        </ng-template>
        <ng-template #item let-item>
            <a *ngIf="item.root" pRipple class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
                <i [ngClass]="item.icon"></i>
                <span class="ml-2">{{ item.label }}</span>
            </a>
            <a *ngIf="!item.root && !item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-2">
                <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                    <i [ngClass]="item.icon + ' text-lg'"></i>
                </span>
                <span class="inline-flex flex-col gap-1">
                    <span class="font-medium text-lg text-surface-900 dark:text-surface-0">{{ item.label }}</span>
                    <span class="whitespace-nowrap">{{ item.subtext }}</span>
                </span>
            </a>
            <div *ngIf="item.image" class="flex flex-col items-start gap-4">
                <img [src]="item.image" alt="megamenu-demo" class="w-full" />
                <span>{{ item.subtext }}</span>
                <p-button [label]="item.label" [outlined]="true"></p-button>
            </div>
        </ng-template>
        <ng-template #end>
            <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </ng-template>
    </p-megamenu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';


@Component({
    selector: 'mega-menu-template-demo',
    templateUrl: './mega-menu-template-demo.html',
    standalone: true,
    imports: [MegaMenu, ButtonModule, CommonModule, AvatarModule]
})
export class MegaMenuTemplateDemo implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Company',
                root: true,
                items: [
                    [
                        {
                            items: [
                                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [
                                { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                                { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                                { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [
                                { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                                { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                                { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                            ]
                        }
                    ],
                    [
                        {
                            items: [{ image: '/_ext/primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                        }
                    ]
                ]
            },
            {
                label: 'Resources',
                root: true
            },
            {
                label: 'Contact',
                root: true
            }
        ];
    }
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["template-doc"]],decls:15,vars:5,consts:[["start",""],["item",""],["end",""],[1,"card"],[1,"p-4","bg-surface-0","dark:bg-surface-900",3,"model"],["selector","mega-menu-template-demo",3,"code"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["pRipple","","class","flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase","style","border-radius: 2rem",4,"ngIf"],["class","flex items-center p-4 cursor-pointer mb-2 gap-2",4,"ngIf"],["class","flex flex-col items-start gap-4",4,"ngIf"],["pRipple","",1,"flex","items-center","cursor-pointer","px-4","py-2","overflow-hidden","relative","font-semibold","text-lg","uppercase",2,"border-radius","2rem"],[3,"ngClass"],[1,"ml-2"],[1,"flex","items-center","p-4","cursor-pointer","mb-2","gap-2"],[1,"inline-flex","items-center","justify-center","rounded-full","bg-primary","text-primary-contrast","w-12","h-12"],[1,"inline-flex","flex-col","gap-1"],[1,"font-medium","text-lg","text-surface-900","dark:text-surface-0"],[1,"whitespace-nowrap"],[1,"flex","flex-col","items-start","gap-4"],["alt","megamenu-demo",1,"w-full",3,"src"],[3,"label","outlined"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"Custom content can be placed between p-megamenu tags. Megamenu should be "),r(3,"i"),s(4,"horizontal"),m(),s(5," for custom content."),m()(),r(6,"div",3)(7,"p-megamenu",4),g(8,Di,16,0,"ng-template",null,0,$)(10,Ki,3,3,"ng-template",null,1,$)(12,Hi,1,0,"ng-template",null,2,$),m()(),d(14,"app-code",5)),t&2&&(c(7),G(Z(4,Ai)),l("model",n.items),c(7),l("code",n.code))},dependencies:[P,qe,X,E,S,nt,it,lt,at,tt,re,C,M,y],encapsulation:2})}return i})();var Ct=(()=>{class i{items;ngOnInit(){this.items=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theater",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}]}code={basic:'<p-megamenu [model]="items" orientation="vertical" />',html:`<div class="card">
    <p-megamenu [model]="items" orientation="vertical" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';

@Component({
    selector: 'mega-menu-vertical-demo',
    templateUrl: './mega-menu-vertical-demo.html',
    standalone: true,
    imports: [MegaMenu]
})
export class MegaMenuVerticalDemo implements OnInit {
    items: MegaMenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Furniture',
                icon: 'pi pi-box',
                items: [
                    [
                        {
                            label: 'Living Room',
                            items: [
                                { label: 'Accessories' },
                                { label: 'Armchair' },
                                { label: 'Coffee Table' },
                                { label: 'Couch' },
                                { label: 'TV Stand' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Kitchen',
                            items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
                        },
                        {
                            label: 'Bathroom',
                            items: [{ label: 'Accessories' }],
                        },
                    ],
                    [
                        {
                            label: 'Bedroom',
                            items: [
                                { label: 'Bed' },
                                { label: 'Chaise lounge' },
                                { label: 'Cupboard' },
                                { label: 'Dresser' },
                                { label: 'Wardrobe' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Office',
                            items: [
                                { label: 'Bookcase' },
                                { label: 'Cabinet' },
                                { label: 'Chair' },
                                { label: 'Desk' },
                                { label: 'Executive Chair' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Electronics',
                icon: 'pi pi-mobile',
                items: [
                    [
                        {
                            label: 'Computer',
                            items: [
                                { label: 'Monitor' },
                                { label: 'Mouse' },
                                { label: 'Notebook' },
                                { label: 'Keyboard' },
                                { label: 'Printer' },
                                { label: 'Storage' },
                            ],
                        },
                    ],
                    [
                        {
                            label: 'Home Theater',
                            items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
                        },
                    ],
                    [
                        {
                            label: 'Gaming',
                            items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
                        },
                    ],
                    [
                        {
                            label: 'Appliances',
                            items: [
                                { label: 'Coffee Machine' },
                                { label: 'Fridge' },
                                { label: 'Oven' },
                                { label: 'Vaccum Cleaner' },
                                { label: 'Washing Machine' },
                            ],
                        },
                    ],
                ],
            },
            {
                label: 'Sports',
                icon: 'pi pi-clock',
                items: [
                    [
                        {
                            label: 'Football',
                            items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
                        },
                    ],
                    [
                        {
                            label: 'Running',
                            items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
                        },
                    ],
                    [
                        {
                            label: 'Swimming',
                            items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
                        },
                    ],
                    [
                        {
                            label: 'Tennis',
                            items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
                        },
                    ],
                ],
            },
        ];
    }
}`};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["vertical-doc"]],decls:15,vars:2,consts:[[1,"card"],["orientation","vertical",3,"model"],["selector","mega-menu-vertical-demo",3,"code"]],template:function(t,n){t&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"Layout of the MegaMenu is changed with the "),r(3,"i"),s(4,"orientation"),m(),s(5," property that accepts "),r(6,"i"),s(7,"horizontal"),m(),s(8," and "),r(9,"i"),s(10,"vertical"),m(),s(11," as options."),m()(),r(12,"div",0),d(13,"p-megamenu",1),m(),d(14,"app-code",2)),t&2&&(c(13),l("model",n.items),c(),l("code",n.code))},dependencies:[E,S,C,M,y],encapsulation:2})}return i})();var zi=()=>["MegaMenu","MegaMenuItem"],St=(()=>{class i{ptComponent=vt;docs=[{id:"import",label:"Import",component:It},{id:"basic",label:"Basic",component:ht},{id:"vertical",label:"Vertical",component:Ct},{id:"template",label:"Template",component:Mt},{id:"command",label:"Command",component:_t},{id:"router",label:"Router",component:yt},{id:"accessibility",label:"Accessibility",component:pt}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["ng-component"]],features:[W([mt])],decls:1,vars:4,consts:[["docTitle","Angular MegaMenu Component","header","MegaMenu","description","MegaMenu is navigation component that displays submenus together.","themeDocs","megamenu",3,"docs","apiDocs","ptDocs"]],template:function(t,n){t&1&&d(0,"app-doc",0),t&2&&l("docs",n.docs)("apiDocs",Z(3,zi))("ptDocs",n.ptComponent)},dependencies:[ct],styles:["[_nghost-%COMP%]     .p-megamenu-panel{z-index:3}"]})}return i})();var Mo=[{path:"",component:St}];export{Mo as default};
