import{a as G,b as ke}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as Ie}from"./chunk-FKOOMXTU.js";import{a as C}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import{a as Ce,b as ve}from"./chunk-T7S2JKIR.js";import{a as Be}from"./chunk-XCUGNKAG.js";import{a as y,b as Te}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{c as de,d as Q,e as ue,h as z}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{C as he,I as ye,b as ge,c as xe}from"./chunk-MCW4FHXZ.js";import{Ea as se,Fa as j,Ia as _e,La as be,Ma as fe,Na as M}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as le,n as me,q as ce,r as pe,w as L}from"./chunk-D2XKNHFS.js";import{Ab as X,Eb as n,Fb as p,Gb as c,Gc as h,Hb as s,Ka as O,La as W,Lb as B,Mb as I,Ob as w,Qa as l,S as Z,Sb as A,T as ee,Ub as r,V as te,Va as ie,X as V,Xb as $,Zb as q,_b as N,aa as S,ba as E,ca as D,cc as P,fc as k,gb as b,gc as u,hb as ne,hc as d,ic as R,kb as oe,lb as re,mb as _,oa as H,rc as ae,sc as F,tc as U,wb as T,zb as J}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Le=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["breadcrumb-accessibility-doc"]],decls:24,vars:0,template:function(i,o){i&1&&(p(0,"app-docsectiontext")(1,"h3"),d(2,"Screen Reader"),c(),p(3,"p"),d(4," Breadcrumb uses the "),p(5,"i"),d(6,"nav"),c(),d(7," element and since any attribute is passed to the root implicitly "),p(8,"i"),d(9,"aria-labelledby"),c(),d(10," or "),p(11,"i"),d(12,"aria-label"),c(),d(13," can be used to describe the component. Inside an ordered list is used where the list item separators have "),p(14,"i"),d(15,"aria-hidden"),c(),d(16," to be able to ignored by the screen readers. If the last link represents the current route, "),p(17,"i"),d(18,"aria-current"),c(),d(19,' is added with "page" as the value. '),c(),p(20,"h3"),d(21,"Keyboard Support"),c(),p(22,"p"),d(23,"No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence."),c()())},dependencies:[y],encapsulation:2})}return t})();var Me=`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`;var Ve={root:()=>["p-breadcrumb p-component"],list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:({menuitem:t})=>["p-breadcrumb-item",{"p-disabled":t.disabled}],itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},Y=(()=>{class t extends _e{name="breadcrumb";style=Me;classes=Ve;static \u0275fac=(()=>{let e;return function(o){return(e||(e=H(t)))(o||t)}})();static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})();var $e=["item"],qe=["separator"],Se=t=>({$implicit:t}),Ee=()=>({exact:!1}),Ne=t=>({menuitem:t});function Ue(t,m){}function je(t,m){t&1&&_(0,Ue,0,0,"ng-template")}function Qe(t,m){if(t&1&&_(0,je,1,0,null,9),t&2){let e=r(2);n("ngTemplateOutlet",e.itemTemplate||e._itemTemplate)("ngTemplateOutletContext",U(2,Se,e.home))}}function ze(t,m){if(t&1&&s(0,"span",17),t&2){let e=r(4);u(e.cn(e.cx("itemIcon"),e.home.icon,e.home.iconClass)),n("ngStyle",e.home.iconStyle)("pBind",e.ptm("itemIcon"))}}function Ge(t,m){if(t&1&&(D(),s(0,"svg",18)),t&2){let e=r(4);u(e.cx("itemIcon")),n("pBind",e.ptm("itemIcon"))}}function Ke(t,m){if(t&1&&(p(0,"span",4),d(1),c()),t&2){let e=r(5);u(e.cx("itemLabel")),n("pBind",e.ptm("itemLabel")),l(),R(e.home.label)}}function We(t,m){if(t&1&&s(0,"span",20),t&2){let e=r(5);u(e.cx("itemLabel")),n("innerHTML",e.home.label,O)("pBind",e.ptm("itemLabel"))}}function Je(t,m){if(t&1&&(B(0),_(1,Ke,2,4,"span",19)(2,We,1,4,"ng-template",null,0,h),I()),t&2){let e=P(3),i=r(4);l(),n("ngIf",i.home.escape!==!1)("ngIfElse",e)}}function Xe(t,m){if(t&1&&s(0,"p-badge",21),t&2){let e=r(4);n("value",e.home.badge)("styleClass",e.home.badgeStyleClass)("pBind",e.ptm("badge"))}}function Ye(t,m){if(t&1){let e=w();p(0,"a",12),A("click",function(o){S(e);let a=r(3);return E(a.onClick(o,a.home))}),_(1,ze,1,4,"span",13)(2,Ge,1,3,"svg",14)(3,Je,4,2,"ng-container",15)(4,Xe,1,3,"p-badge",16),c()}if(t&2){let e=r(3);u(e.cx("itemLink")),n("href",e.home.url?e.home.url:null,W)("target",e.home.target)("pBind",e.ptm("itemLink")),T("aria-label",e.homeAriaLabel)("title",e.home.title)("tabindex",e.home.disabled?null:e.home.tabindex||"0")("data-p-id",e.home.automationId),l(),n("ngIf",e.home.icon),l(),n("ngIf",!e.home.icon),l(),n("ngIf",e.home.label),l(),n("ngIf",e.home.badge)}}function Ze(t,m){if(t&1&&s(0,"span",4),t&2){let e=r(4);k(e.home.iconStyle),u(e.cn(e.cx("itemIcon"),e.home.icon,e.home.iconClass)),n("pBind",e.ptm("itemIcon"))}}function et(t,m){if(t&1&&(D(),s(0,"svg",18)),t&2){let e=r(4);u(e.cx("itemIcon")),n("pBind",e.ptm("itemIcon"))}}function tt(t,m){if(t&1&&(p(0,"span",4),d(1),c()),t&2){let e=r(5);u(e.cx("itemLabel")),n("pBind",e.ptm("itemLabel")),l(),R(e.home.label)}}function it(t,m){if(t&1&&s(0,"span",20),t&2){let e=r(5);u(e.cx("itemLabel")),n("innerHTML",e.home.label,O)("pBind",e.ptm("itemLabel"))}}function nt(t,m){if(t&1&&(B(0),_(1,tt,2,4,"span",19)(2,it,1,4,"ng-template",null,1,h),I()),t&2){let e=P(3),i=r(4);l(),n("ngIf",i.home.escape!==!1)("ngIfElse",e)}}function ot(t,m){if(t&1&&s(0,"p-badge",21),t&2){let e=r(4);n("value",e.home.badge)("styleClass",e.home.badgeStyleClass)("pBind",e.ptm("badge"))}}function rt(t,m){if(t&1){let e=w();p(0,"a",22),A("click",function(o){S(e);let a=r(3);return E(a.onClick(o,a.home))}),_(1,Ze,1,5,"span",23)(2,et,1,3,"svg",14)(3,nt,4,2,"ng-container",15)(4,ot,1,3,"p-badge",16),c()}if(t&2){let e=r(3);u(e.cx("itemLink")),n("routerLink",e.home.routerLink)("queryParams",e.home.queryParams)("routerLinkActiveOptions",e.home.routerLinkActiveOptions||F(21,Ee))("target",e.home.target)("fragment",e.home.fragment)("queryParamsHandling",e.home.queryParamsHandling)("preserveFragment",e.home.preserveFragment)("skipLocationChange",e.home.skipLocationChange)("replaceUrl",e.home.replaceUrl)("state",e.home.state)("pBind",e.ptm("itemLink")),T("aria-label",e.homeAriaLabel)("title",e.home.title)("tabindex",e.home.disabled?null:e.home.tabindex||"0")("data-p-id",e.home.automationId),l(),n("ngIf",e.home.icon),l(),n("ngIf",!e.home.icon),l(),n("ngIf",e.home.label),l(),n("ngIf",e.home.badge)}}function at(t,m){if(t&1&&_(0,Ye,5,13,"a",10)(1,rt,5,22,"a",11),t&2){let e=r(2);n("ngIf",!e.home.routerLink),l(),n("ngIf",e.home.routerLink)}}function lt(t,m){if(t&1&&(p(0,"li",8),J(1,Qe,1,4)(2,at,2,2),c()),t&2){let e=r();u(e.cn(e.cx("homeItem"),e.home.styleClass)),n("ngStyle",e.home.style)("tooltipOptions",e.home.tooltipOptions)("pBind",e.ptm("homeItem")),T("id",e.home.id),l(),X(e.itemTemplate||e._itemTemplate?1:2)}}function mt(t,m){if(t&1&&(D(),s(0,"svg",26)),t&2){let e=r(2);n("pBind",e.ptm("separatorIcon"))}}function ct(t,m){}function pt(t,m){t&1&&_(0,ct,0,0,"ng-template")}function st(t,m){if(t&1&&(p(0,"li",4),_(1,mt,1,1,"svg",24)(2,pt,1,0,null,25),c()),t&2){let e=r();u(e.cx("separator")),n("pBind",e.ptm("separator")),l(),n("ngIf",!e.separatorTemplate&&!e._separatorTemplate),l(),n("ngTemplateOutlet",e.separatorTemplate||e._separatorTemplate)}}function dt(t,m){}function ut(t,m){t&1&&_(0,dt,0,0,"ng-template")}function _t(t,m){if(t&1&&_(0,ut,1,0,null,9),t&2){let e=r(2).$implicit,i=r();n("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",U(2,Se,e))}}function bt(t,m){if(t&1&&s(0,"span",4),t&2){let e=r(5),i=e.$implicit,o=e.index,a=r();k(i==null?null:i.iconStyle),u(a.cn(a.cx("itemIcon"),i==null?null:i.icon,i==null?null:i.iconClass)),n("pBind",a.getPTOptions(i,o,"itemIcon"))}}function ft(t,m){if(t&1&&(p(0,"span",4),d(1),c()),t&2){let e=r(6),i=e.$implicit,o=e.index,a=r();u(a.cx("itemLabel")),n("pBind",a.getPTOptions(i,o,"itemLabel")),l(),R(i==null?null:i.label)}}function gt(t,m){if(t&1&&s(0,"span",20),t&2){let e=r(6),i=e.$implicit,o=e.index,a=r();u(a.cx("itemLabel")),n("innerHTML",i==null?null:i.label,O)("pBind",a.getPTOptions(i,o,"itemLabel"))}}function xt(t,m){if(t&1&&(B(0),_(1,ft,2,4,"span",19)(2,gt,1,4,"ng-template",null,2,h),I()),t&2){let e=P(3),i=r(5).$implicit;l(),n("ngIf",(i==null?null:i.escape)!==!1)("ngIfElse",e)}}function ht(t,m){if(t&1&&s(0,"p-badge",21),t&2){let e=r(5),i=e.$implicit,o=e.index,a=r();n("value",i.badge)("styleClass",i==null?null:i.badgeStyleClass)("pBind",a.getPTOptions(i,o,"badge"))}}function yt(t,m){if(t&1&&(B(0),_(1,bt,1,5,"span",23)(2,xt,4,2,"ng-container",15)(3,ht,1,3,"p-badge",16),I()),t&2){let e=r(4).$implicit;l(),n("ngIf",e==null?null:e.icon),l(),n("ngIf",e==null?null:e.label),l(),n("ngIf",e==null?null:e.badge)}}function Ct(t,m){if(t&1){let e=w();p(0,"a",30),A("click",function(o){S(e);let a=r(3).$implicit,f=r();return E(f.onClick(o,a))}),_(1,yt,4,3,"ng-container",15),c()}if(t&2){let e=r(3),i=e.$implicit,o=e.index,a=r();u(a.cx("itemLink")),n("target",i==null?null:i.target)("pBind",a.getPTOptions(i,o,"itemLink")),T("href",i!=null&&i.url?i==null?null:i.url:null,W)("title",i==null?null:i.title)("tabindex",i!=null&&i.disabled?null:(i==null?null:i.tabindex)||"0")("data-p-id",i==null?null:i.automationId),l(),n("ngIf",!a.itemTemplate&&!a._itemTemplate)}}function vt(t,m){if(t&1&&s(0,"span",4),t&2){let e=r(4),i=e.$implicit,o=e.index,a=r();k(i==null?null:i.iconStyle),u(a.cn(a.cx("itemIcon"),i==null?null:i.icon,i==null?null:i.iconClass)),n("pBind",a.getPTOptions(i,o,"itemIcon"))}}function Tt(t,m){if(t&1&&(p(0,"span",4),d(1),c()),t&2){let e=r(5),i=e.$implicit,o=e.index,a=r();u(a.cx("itemLabel")),n("pBind",a.getPTOptions(i,o,"itemLabel")),l(),R(i==null?null:i.label)}}function Bt(t,m){if(t&1&&s(0,"span",20),t&2){let e=r(5),i=e.$implicit,o=e.index,a=r();u(a.cx("itemLabel")),n("innerHTML",i==null?null:i.label,O)("pBind",a.getPTOptions(i,o,"itemLabel"))}}function It(t,m){if(t&1&&(B(0),_(1,Tt,2,4,"span",19)(2,Bt,1,4,"ng-template",null,3,h),I()),t&2){let e=P(3),i=r(4).$implicit;l(),n("ngIf",(i==null?null:i.escape)!==!1)("ngIfElse",e)}}function kt(t,m){if(t&1&&s(0,"p-badge",21),t&2){let e=r(4),i=e.$implicit,o=e.index,a=r();n("value",i.badge)("styleClass",i==null?null:i.badgeStyleClass)("pBind",a.getPTOptions(i,o,"badge"))}}function Lt(t,m){if(t&1){let e=w();p(0,"a",22),A("click",function(o){S(e);let a=r(3).$implicit,f=r();return E(f.onClick(o,a))}),_(1,vt,1,5,"span",23)(2,It,4,2,"ng-container",15)(3,kt,1,3,"p-badge",16),c()}if(t&2){let e=r(3),i=e.$implicit,o=e.index,a=r();u(a.cx("itemLink")),n("routerLink",i==null?null:i.routerLink)("queryParams",i==null?null:i.queryParams)("routerLinkActiveOptions",(i==null?null:i.routerLinkActiveOptions)||F(19,Ee))("target",i==null?null:i.target)("fragment",i==null?null:i.fragment)("queryParamsHandling",i==null?null:i.queryParamsHandling)("preserveFragment",i==null?null:i.preserveFragment)("skipLocationChange",i==null?null:i.skipLocationChange)("replaceUrl",i==null?null:i.replaceUrl)("state",i==null?null:i.state)("pBind",a.getPTOptions(i,o,"itemLink")),T("title",i==null?null:i.title)("tabindex",i!=null&&i.disabled?null:(i==null?null:i.tabindex)||"0")("data-p-id",i==null?null:i.automationId),l(),n("ngIf",i==null?null:i.icon),l(),n("ngIf",i==null?null:i.label),l(),n("ngIf",i==null?null:i.badge)}}function Mt(t,m){if(t&1&&_(0,Ct,2,9,"a",29)(1,Lt,4,20,"a",11),t&2){let e=r(2).$implicit;n("ngIf",!(e!=null&&e.routerLink)),l(),n("ngIf",e==null?null:e.routerLink)}}function St(t,m){if(t&1&&(p(0,"li",28),J(1,_t,1,4)(2,Mt,2,2),c()),t&2){let e=r(),i=e.$implicit,o=e.index,a=r();k(i.style),u(a.cn(a.cx("item",U(8,Ne,i)),i.styleClass)),n("tooltipOptions",i.tooltipOptions)("pBind",a.getPTOptions(i,o,"item")),T("id",i.id),l(),X(a.itemTemplate||a._itemTemplate?1:2)}}function Et(t,m){if(t&1&&(D(),s(0,"svg",26)),t&2){let e=r(3);n("pBind",e.ptm("separatorIcon"))}}function Dt(t,m){}function Ot(t,m){t&1&&_(0,Dt,0,0,"ng-template")}function wt(t,m){if(t&1&&(p(0,"li",4),_(1,Et,1,1,"svg",24)(2,Ot,1,0,null,25),c()),t&2){let e=r(2);u(e.cx("separator")),n("pBind",e.ptm("separator")),l(),n("ngIf",!e.separatorTemplate&&!e._separatorTemplate),l(),n("ngTemplateOutlet",e.separatorTemplate||e._separatorTemplate)}}function At(t,m){if(t&1&&_(0,St,3,10,"li",27)(1,wt,3,5,"li",6),t&2){let e=m.$implicit,i=m.last;n("ngIf",e.visible!==!1),l(),n("ngIf",!i&&e.visible!==!1)}}var Pt=new te("BREADCRUMB_INSTANCE"),x=(()=>{class t extends fe{bindDirectiveInstance=V(M,{self:!0});model;style;styleClass;home;homeAriaLabel;onItemClick=new ie;_componentStyle=V(Y);router=V(de);onClick(e,i){if(i.disabled){e.preventDefault();return}!i.url&&!i.routerLink&&e.preventDefault(),i.command&&i.command({originalEvent:e,item:i}),this.onItemClick.emit({originalEvent:e,item:i})}itemTemplate;separatorTemplate;templates;_separatorTemplate;_itemTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"separator":this._separatorTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}getPTOptions(e,i,o){return this.ptm(o,{context:{item:e,index:i}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=H(t)))(o||t)}})();static \u0275cmp=b({type:t,selectors:[["p-breadcrumb"]],contentQueries:function(i,o,a){if(i&1&&($(a,$e,5),$(a,qe,5),$(a,se,4)),i&2){let f;q(f=N())&&(o.itemTemplate=f.first),q(f=N())&&(o.separatorTemplate=f.first),q(f=N())&&(o.templates=f)}},inputs:{model:"model",style:"style",styleClass:"styleClass",home:"home",homeAriaLabel:"homeAriaLabel"},outputs:{onItemClick:"onItemClick"},features:[ae([Y,{provide:Pt,useExisting:t},{provide:be,useExisting:t}]),re([M]),oe],decls:5,vars:11,consts:[["htmlHomeLabel",""],["htmlHomeRouteLabel",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"pBind"],["pTooltip","",3,"class","ngStyle","tooltipOptions","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],["ngFor","",3,"ngForOf"],["pTooltip","",3,"ngStyle","tooltipOptions","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"href","class","target","pBind","click",4,"ngIf"],["routerLinkActive","p-menuitem-link-active",3,"routerLink","queryParams","routerLinkActiveOptions","class","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind","click",4,"ngIf"],[3,"click","href","target","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],["data-p-icon","home",3,"class","pBind",4,"ngIf"],[4,"ngIf"],[3,"value","styleClass","pBind",4,"ngIf"],[3,"ngStyle","pBind"],["data-p-icon","home",3,"pBind"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"innerHTML","pBind"],[3,"value","styleClass","pBind"],["routerLinkActive","p-menuitem-link-active",3,"click","routerLink","queryParams","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","style","pBind",4,"ngIf"],["data-p-icon","chevron-right",3,"pBind",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right",3,"pBind"],["pTooltip","",3,"class","style","tooltipOptions","pBind",4,"ngIf"],["pTooltip","",3,"tooltipOptions","pBind"],[3,"class","target","pBind","click",4,"ngIf"],[3,"click","target","pBind"]],template:function(i,o){i&1&&(p(0,"nav",4)(1,"ol",4),_(2,lt,3,7,"li",5)(3,st,3,5,"li",6)(4,At,2,2,"ng-template",7),c()()),i&2&&(k(o.style),u(o.cn(o.cx("root"),o.styleClass)),n("pBind",o.ptm("root")),l(),u(o.cx("list")),n("pBind",o.ptm("list")),l(),n("ngIf",o.home&&o.home.visible!==!1),l(),n("ngIf",o.model&&o.home),l(),n("ngForOf",o.model))},dependencies:[L,le,me,pe,ce,z,Q,ue,ve,Ce,M,he,ye,j,xe,ge],encapsulation:2,changeDetection:0})}return t})(),v=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ee({imports:[x,j,j]})}return t})();var De=(()=>{class t{items;home;ngOnInit(){this.items=[{label:"Electronics"},{label:"Computer"},{label:"Accessories"},{label:"Keyboard"},{label:"Wireless"}],this.home={icon:"pi pi-home"}}code={basic:'<p-breadcrumb [model]="items" [home]="home" />',html:`<div class="card flex justify-center">
    <p-breadcrumb [model]="items" [home]="home" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
    selector: 'breadcrumb-basic-demo',
    templateUrl: './breadcrumb-basic-demo.html',
    standalone: true,
    imports: [Breadcrumb]
})
export class BreadcrumbBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Electronics' },
            { label: 'Computer' },
            { label: 'Accessories' },
            { label: 'Keyboard' },
            { label: 'Wireless' }
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["breadcrumb-basic-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-center"],[3,"model","home"],["selector","breadcrumb-basic-demo",3,"code"]],template:function(i,o){i&1&&(p(0,"app-docsectiontext")(1,"p"),d(2,"Breadcrumb provides contextual information about page hierarchy."),c()(),p(3,"div",0),s(4,"p-breadcrumb",1),c(),s(5,"app-code",2)),i&2&&(l(4),n("model",o.items)("home",o.home),l(),n("code",o.code))},dependencies:[v,x,C,y],encapsulation:2})}return t})();var Oe=(()=>{class t{code={typescript:"import { BreadcrumbModule } from 'primeng/breadcrumb';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["breadcrumb-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,o){i&1&&s(0,"app-code",0),i&2&&n("code",o.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2})}return t})();var we=(()=>{class t{items=[{label:"Components"},{label:"Form"},{label:"InputText",routerLink:"/inputtext"}];home={icon:"pi pi-home",routerLink:"/"};code={basic:'<p-breadcrumb [home]="home" [model]="items" />',html:`<div class="card flex justify-center">
    <p-breadcrumb [home]="home" [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'breadcrumb-router-demo',
    templateUrl: './breadcrumb-router-demo.html',
    standalone: true,
    imports: [Breadcrumb, RouterModule]
})
export class BreadcrumbRouterDemo {
    items: MenuItem[] = [{ label: 'Components' }, { label: 'Form' }, { label: 'InputText', routerLink: '/inputtext' }];

    home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["breadcrumb-router-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-center"],[3,"home","model"],["selector","breadcrumb-router-demo",3,"code"]],template:function(i,o){i&1&&(p(0,"app-docsectiontext")(1,"p"),d(2,"Menu items support navigation via routerLink, programmatic routing using commands, or external URLs."),c()(),p(3,"div",0),s(4,"p-breadcrumb",1),c(),s(5,"app-code",2)),i&2&&(l(4),n("home",o.home)("model",o.items),l(),n("code",o.code))},dependencies:[v,x,C,y],encapsulation:2})}return t})();function Rt(t,m){if(t&1&&(p(0,"a",5),s(1,"i"),c()),t&2){let e=m.$implicit;n("routerLink",e.url),l(),u(e.icon)}}function Ft(t,m){t&1&&d(0," / ")}var Ae=(()=>{class t{items;home;ngOnInit(){this.items=[{icon:"pi pi-sitemap"},{icon:"pi pi-book"},{icon:"pi pi-wallet"},{icon:"pi pi-shopping-bag"},{icon:"pi pi-calculator"}],this.home={icon:"pi pi-home"}}code={basic:`<p-breadcrumb [model]="items" [home]="home">
    <ng-template #item let-item>
        <a class="cursor-pointer" [routerLink]="item.url">
            <i [class]="item.icon"></i>
        </a>
    </ng-template>
    <ng-template #separator> / </ng-template>
</p-breadcrumb>`,html:`<div class="card flex justify-center">
    <p-breadcrumb [model]="items" [home]="home">
        <ng-template #item let-item>
            <a class="cursor-pointer" [routerLink]="item.url">
                <i [class]="item.icon"></i>
            </a>
        </ng-template>
        <ng-template #separator> / </ng-template>
    </p-breadcrumb>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'breadcrumb-template-demo',
    templateUrl: './breadcrumb-template-demo.html',
    standalone: true,
    imports: [Breadcrumb, RouterModule]
})
export class BreadcrumbTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }];

        this.home = { icon: 'pi pi-home' };
    }
}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["breadcrumb-template-demo"]],decls:16,vars:3,consts:[["item",""],["separator",""],[1,"card","flex","justify-center"],[3,"model","home"],["selector","breadcrumb-template-demo",3,"code"],[1,"cursor-pointer",3,"routerLink"]],template:function(i,o){i&1&&(p(0,"app-docsectiontext")(1,"p"),d(2,"Custom content can be placed inside the items using the "),p(3,"i"),d(4,"item"),c(),d(5," template. The divider between the items has its own "),p(6,"i"),d(7,"separator"),c(),d(8," template."),c()(),p(9,"div",2)(10,"p-breadcrumb",3),_(11,Rt,2,3,"ng-template",null,0,h)(13,Ft,1,0,"ng-template",null,1,h),c()(),s(15,"app-code",4)),i&2&&(l(10),n("model",o.items)("home",o.home),l(5),n("code",o.code))},dependencies:[v,x,z,Q,C,y],encapsulation:2})}return t})();var Pe=(()=>{class t{items;home;ngOnInit(){this.items=[{label:"Electronics"},{label:"Computer"},{label:"Accessories"},{label:"Keyboard"},{label:"Wireless"}],this.home={icon:"pi pi-home"}}docs=[{data:G("Breadcrumb"),key:"Breadcrumb"}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["breadcrumb-pt-viewer"]],decls:2,vars:3,consts:[[3,"docs"],[3,"model","home"]],template:function(i,o){i&1&&(p(0,"app-docptviewer",0),s(1,"p-breadcrumb",1),c()),i&2&&(n("docs",o.docs),l(),n("model",o.items)("home",o.home))},dependencies:[L,ke,v,x],encapsulation:2})}return t})();var Re=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:Pe},{id:"pt.doc.breadcrumb",label:"Breadcrumb PT Options",component:Te,data:G("Breadcrumb")}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["breadcrumb-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,o){i&1&&(p(0,"div",0)(1,"div",1)(2,"h1"),d(3,"Breadcrumb Pass Through"),c()(),s(4,"app-docsection",2),c()),i&2&&(l(4),n("docs",o.docs))},dependencies:[L,Be],encapsulation:2})}return t})();var Vt=()=>["Breadcrumb","MenuItem"],Fe=(()=>{class t{ptComponent=Re;docs=[{id:"import",label:"Import",component:Oe},{id:"basic",label:"Basic",component:De},{id:"template",label:"Template",component:Ae},{id:"router",label:"Router",component:we},{id:"accessibility",label:"Accessibility",component:Le}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=b({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Breadcrumb Component","header","Breadcrumb","description","Breadcrumb provides contextual information about page hierarchy.","themeDocs","Breadcrumb",3,"docs","apiDocs","ptDocs"]],template:function(i,o){i&1&&s(0,"app-doc",0),i&2&&n("docs",o.docs)("apiDocs",F(3,Vt))("ptDocs",o.ptComponent)},dependencies:[Ie],encapsulation:2})}return t})();var tn=[{path:"",component:Fe}];export{tn as default};
