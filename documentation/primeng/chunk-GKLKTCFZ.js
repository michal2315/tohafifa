import{a as P,b as w}from"./chunk-E7PBLJHB.js";import{a as E,b as fe}from"./chunk-JNUBCW5H.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ue}from"./chunk-FKOOMXTU.js";import{a as B}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as de}from"./chunk-XCUGNKAG.js";import{a as D,b as pe}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import{c as q}from"./chunk-AAKCLA3R.js";import{ga as v,ha as y}from"./chunk-MCW4FHXZ.js";import{Ea as ce,Fa as U,Ia as ae,La as se,Ma as me,Na as M,t as ne,v as le}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{r as re,w as g,y as T}from"./chunk-D2XKNHFS.js";import{$a as H,Eb as c,Fb as n,Gb as l,Hb as s,Nb as J,Ob as x,Qa as p,S as R,Sb as u,T as Z,Uc as oe,V as N,Vb as W,Wb as X,X as I,Xb as S,Yc as F,Zb as A,Zc as ie,_b as V,aa as b,ba as h,cc as _,gb as a,gc as Y,hb as Q,hc as r,kb as K,lb as z,mb as $,oa as j,rc as ee,sc as te,wb as G}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ke=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["block-ui-accessibility-doc"]],decls:18,vars:0,template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),l(),n(3,"p"),r(4," BlockUI manages "),n(5,"i"),r(6,"aria-busy"),l(),r(7," state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like "),n(8,"i"),r(9,"role"),l(),r(10," and "),n(11,"i"),r(12,"aria-live"),l(),r(13," can be used to define live regions. "),l(),n(14,"h3"),r(15,"Keyboard Support"),l(),n(16,"p"),r(17,"Component does not include any interactive elements."),l()())},dependencies:[D],encapsulation:2})}return e})();var be=`
    .p-blockui {
        position: relative;
    }

    .p-blockui-mask {
        border-radius: dt('blockui.border.radius');
    }

    .p-blockui-mask.p-overlay-mask {
        position: absolute;
    }

    .p-blockui-mask-document.p-overlay-mask {
        position: fixed;
    }
`;var xe={root:({instance:e})=>["p-blockui p-blockui-mask p-overlay-mask",{"p-blockui-mask-document":!e.target}]},O=(()=>{class e extends ae{name="blockui";style=be;classes=xe;static \u0275fac=(()=>{let i;return function(o){return(i||(i=j(e)))(o||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var _e=["content"],Te=["*"];function Ue(e,Pe){e&1&&J(0)}var he=new N("BLOCKUI_INSTANCE"),k=(()=>{class e extends me{$pcBlockUI=I(he,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=I(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}target;autoZIndex=!0;baseZIndex=0;styleClass;get blocked(){return this._blocked}set blocked(i){this.el&&this.el.nativeElement?i?this.block():this.unblock():this._blocked=i}contentTemplate;_blocked=!1;animationEndListener;_componentStyle=I(O);constructor(){super()}onAfterViewInit(){if(this._blocked&&this.block(),this.target&&!this.target.getBlockableElement)throw"Target of BlockUI must implement BlockableUI interface"}_contentTemplate;templates;onAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"content":this.contentTemplate=i.template;break;default:this.contentTemplate=i.template;break}})}block(){T(this.platformId)&&(this._blocked=!0,this.el.nativeElement.style.display="flex",this.target?(this.target.getBlockableElement().appendChild(this.el.nativeElement),this.target.getBlockableElement().style.position="relative"):(this.renderer.appendChild(this.document.body,this.el.nativeElement),ne()),this.autoZIndex&&q.set("modal",this.el.nativeElement,this.baseZIndex+this.config.zIndex.modal))}unblock(){T(this.platformId)&&this.el&&!this.animationEndListener&&this.destroyModal()}destroyModal(){this._blocked=!1,this.el&&T(this.platformId)&&(q.clear(this.el.nativeElement),this.renderer.removeChild(this.el.nativeElement,this.el.nativeElement),le()),this.unbindAnimationEndListener(),this.cd.markForCheck()}unbindAnimationEndListener(){this.animationEndListener&&this.el&&(this.animationEndListener(),this.animationEndListener=null)}onDestroy(){this.unblock(),this.destroyModal()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["p-blockUI"],["p-blockui"],["p-block-ui"]],contentQueries:function(t,o,m){if(t&1&&(S(m,_e,4),S(m,ce,4)),t&2){let d;A(d=V())&&(o.contentTemplate=d.first),A(d=V())&&(o.templates=d)}},hostVars:3,hostBindings:function(t,o){t&2&&(G("aria-busy",o.blocked),Y(o.cn(o.cx("root"),o.styleClass)))},inputs:{target:"target",autoZIndex:[2,"autoZIndex","autoZIndex",F],baseZIndex:[2,"baseZIndex","baseZIndex",ie],styleClass:"styleClass",blocked:[2,"blocked","blocked",F]},features:[ee([O,{provide:he,useExisting:e},{provide:se,useExisting:e}]),z([M]),K],ngContentSelectors:Te,decls:2,vars:1,consts:[[4,"ngTemplateOutlet"]],template:function(t,o){t&1&&(W(),X(0),$(1,Ue,1,0,"ng-container",0)),t&2&&(p(),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate))},dependencies:[g,re,U],encapsulation:2,changeDetection:0})}return e})(),C=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=Q({type:e});static \u0275inj=Z({imports:[k,U,U]})}return e})();var ve=(()=>{class e{blockedPanel=!1;code={basic:`<p-button label="Block" (click)="blockedPanel = true" />
<p-button label="Unblock" (click)="blockedPanel = false" />
<p-blockui [target]="pnl" [blocked]="blockedPanel" />
<p-panel #pnl header="Header" class="mt-6">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-panel>`,html:`<div class="card">
    <p-button label="Block" (click)="blockedPanel = true" />
    <p-button label="Unblock" (click)="blockedPanel = false" />
    <p-blockui [target]="pnl" [blocked]="blockedPanel" />
    <p-panel #pnl header="Header" class="mt-6">
        <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </p-panel>
</div>`,typescript:`import { Component } from '@angular/core';
import { BlockUI } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'block-ui-basic-demo',
    templateUrl: './block-ui-basic-demo.html',
    standalone: true,
    imports: [BlockUI, ButtonModule, PanelModule, Ripple]
})
export class BlockUiBasicDemo {
    blockedPanel: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["block-ui-basic-demo"]],decls:15,vars:3,consts:[["pnl",""],[1,"card"],["label","Block",3,"click"],["label","Unblock",3,"click"],[3,"target","blocked"],["header","Header",1,"mt-6"],[1,"m-0"],["selector","block-ui-basic-demo",3,"code"]],template:function(t,o){if(t&1){let m=x();n(0,"app-docsectiontext")(1,"p"),r(2,"The element to block should be placed as a child of BlockUI and "),n(3,"i"),r(4,"blocked"),l(),r(5," property is required to control the state."),l()(),n(6,"div",1)(7,"p-button",2),u("click",function(){return b(m),h(o.blockedPanel=!0)}),l(),n(8,"p-button",3),u("click",function(){return b(m),h(o.blockedPanel=!1)}),l(),s(9,"p-blockui",4),n(10,"p-panel",5,0)(12,"p",6),r(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),l()()(),s(14,"app-code",7)}if(t&2){let m=_(11);p(9),c("target",m)("blocked",o.blockedPanel),p(5),c("code",o.code)}},dependencies:[C,k,y,v,w,P,B,D],encapsulation:2})}return e})();var ye=(()=>{class e{cd;blockedDocument=!1;constructor(i){this.cd=i}blockDocument(){this.blockedDocument=!0,setTimeout(()=>{this.blockedDocument=!1,this.cd.markForCheck()},3e3)}code={basic:'<p-blockui [blocked]="blockedDocument" />',html:`<div class="card">
    <p-blockui [blocked]="blockedDocument" />
    <p-button label="Block" (click)="blockDocument()" />
</div>`,typescript:`import { Component, ChangeDetectorRef } from '@angular/core';
import { BlockUI } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'block-ui-document-demo',
    templateUrl: './block-ui-document-demo.html',
    standalone: true,
    imports: [BlockUI, ButtonModule, Ripple]
})
export class BlockUiDocumentDemo {
    blockedDocument: boolean = false;

    constructor(private cd: ChangeDetectorRef) {}

    blockDocument() {
        this.blockedDocument = true;
        setTimeout(() => {
            this.blockedDocument = false;
            this.cd.markForCheck();
        }, 3000);
    }

}`};static \u0275fac=function(t){return new(t||e)(H(oe))};static \u0275cmp=a({type:e,selectors:[["block-ui-document-demo"]],decls:7,vars:2,consts:[[1,"card"],[3,"blocked"],["label","Block",3,"click"],["selector","block-ui-document-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"If the target element is not specified, BlockUI blocks the document by default."),l()(),n(3,"div",0),s(4,"p-blockui",1),n(5,"p-button",2),u("click",function(){return o.blockDocument()}),l()(),s(6,"app-code",3)),t&2&&(p(4),c("blocked",o.blockedDocument),p(2),c("code",o.code))},dependencies:[C,k,y,v,B,D],encapsulation:2})}return e})();var De=(()=>{class e{code={typescript:"import { BlockUIModule } from 'primeng/blockui';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["block-ui-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&s(0,"app-code",0),t&2&&c("code",o.code)("hideToggleCode",!0)},dependencies:[B],encapsulation:2})}return e})();var Be=(()=>{class e{blocked=!1;docs=[{data:E("BlockUI"),key:"BlockUI"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["blockui-pt-viewer"]],decls:10,vars:3,consts:[["pnl",""],[3,"docs"],[1,"flex","flex-col","gap-4"],[1,"flex","gap-2"],["label","Block",3,"click"],["label","Unblock",3,"click"],[3,"target","blocked"],["header","Header"],[1,"m-0"]],template:function(t,o){if(t&1){let m=x();n(0,"app-docptviewer",1)(1,"div",2)(2,"div",3)(3,"p-button",4),u("click",function(){return b(m),h(o.blocked=!0)}),l(),n(4,"p-button",5),u("click",function(){return b(m),h(o.blocked=!1)}),l()(),s(5,"p-blockui",6),n(6,"p-panel",7,0)(8,"p",8),r(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "),l()()()()}if(t&2){let m=_(7);c("docs",o.docs),p(5),c("target",m)("blocked",o.blocked)}},dependencies:[g,fe,C,k,y,v,w,P],encapsulation:2})}return e})();var Ce=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:Be},{id:"pt.doc.blockui",label:"BlockUI PT Options",component:pe,data:E("BlockUI")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["blockui-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),r(3,"BlockUI Pass Through"),l()(),s(4,"app-docsection",2),l()),t&2&&(p(4),c("docs",o.docs))},dependencies:[g,de],encapsulation:2})}return e})();var Ee=()=>["BlockUI"],Ie=(()=>{class e{ptComponent=Ce;blockedPanel=!1;blockedDocument=!1;docs=[{id:"import",label:"Import",component:De},{id:"basic",label:"Basic",component:ve},{id:"document",label:"Document",component:ye},{id:"accessibility",label:"Accessibility",component:ke}];blockDocument(){this.blockedDocument=!0,setTimeout(()=>{this.blockedDocument=!1},3e3)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular BlockUI Component","header","BlockUI","description","BlockUI can either block other components or the whole page.","themeDocs","BlockUI",3,"docs","apiDocs","ptDocs"]],template:function(t,o){t&1&&s(0,"app-doc",0),t&2&&c("docs",o.docs)("apiDocs",te(3,Ee))("ptDocs",o.ptComponent)},dependencies:[ue],styles:["[_nghost-%COMP%]     button{margin-right:.25em}[_nghost-%COMP%]     .p-overlay-mask-enter .pi.pi-lock{animation:_ngcontent-%COMP%_enter .15s forwards}[_nghost-%COMP%]     .p-overlay-mask-leave .pi.pi-lock{animation:_ngcontent-%COMP%_leave .15s forwards}@keyframes _ngcontent-%COMP%_enter{0%{color:transparent}to{color:var(--text-color)}}@keyframes _ngcontent-%COMP%_leave{0%{color:var(--text-color)}to{color:transparent}}"]})}return e})();var Lt=[{path:"",component:Ie}];export{Lt as default};
