import{a as Te,w as Se}from"./chunk-CWZPDHKN.js";import"./chunk-IYEEPUY3.js";import"./chunk-3Y7QSSKK.js";import"./chunk-JP2RU6K4.js";import"./chunk-ZVBSRVPM.js";import"./chunk-YIMZONIF.js";import"./chunk-N2Z7YVU2.js";import"./chunk-APBUBGZC.js";import"./chunk-RTRG5JID.js";import"./chunk-DM7HQYPB.js";import{a as K,b as ke}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import{a as De}from"./chunk-5XWBYR75.js";import"./chunk-66742H4U.js";import"./chunk-VGTHJBIV.js";import"./chunk-27JIZF5R.js";import{a as Ie,b as Ce}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as Me}from"./chunk-FKOOMXTU.js";import{a as v,b as x}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as we}from"./chunk-XCUGNKAG.js";import{a as y,b as Ee}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{h as de}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{W as ye,ba as ve,ea as xe,fa as be,ga as he,h as ge,ha as U,i as _e}from"./chunk-MCW4FHXZ.js";import{Ea as me,Fa as O,Ia as ue,La as fe,Ma as Q,Na as P}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as ce,n as re,r as se,w as E}from"./chunk-D2XKNHFS.js";import{$a as te,Eb as l,Fb as i,Gb as o,Gc as u,Hb as m,Lb as oe,Mb as ae,Nb as G,Ob as T,Qa as r,S as X,Sb as S,T as Y,Ub as g,V as Z,Va as H,Vb as z,Wb as M,X as R,Xb as k,Yc as V,Zb as A,_b as F,aa as C,ba as D,ca as ee,gb as s,gc as j,hb as ne,hc as n,ic as B,kb as L,lb as ie,mb as d,oa as w,rc as pe,sc as le,tc as W,wb as N}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Ae=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["inplace-accessibility-doc"]],decls:80,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,p){a&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),o(),i(4,"p"),n(5,"Inplace component defines "),i(6,"i"),n(7,"aria-live"),o(),n(8,' as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.'),o(),i(9,"p"),n(10," Display element uses "),i(11,"i"),n(12,"button"),o(),n(13," role in view mode by default, "),i(14,"i"),n(15,"displayProps"),o(),n(16," can be used for customizations like adding "),i(17,"i"),n(18,"aria-label"),o(),n(19," or "),i(20,"i"),n(21,"aria-labelledby"),o(),n(22," attributes to describe the content of the view mode or even overriding the default role. "),o(),i(23,"p"),n(24," Closable inplace components displays a button with an "),i(25,"i"),n(26,"aria-label"),o(),n(27," that refers to the "),i(28,"i"),n(29,"aria.close"),o(),n(30," property of the "),i(31,"a",0),n(32,"locale"),o(),n(33," API by default, you may use"),i(34,"i"),n(35,"closeButtonProps"),o(),n(36," to customize the element and override the default "),i(37,"i"),n(38,"aria-label"),o(),n(39,". "),o(),i(40,"h3"),n(41,"View Mode Keyboard Support"),o(),i(42,"div",1)(43,"table",2)(44,"thead")(45,"tr")(46,"th"),n(47,"Key"),o(),i(48,"th"),n(49,"Function"),o()()(),i(50,"tbody")(51,"tr")(52,"td")(53,"i"),n(54,"enter"),o()(),i(55,"td"),n(56,"Switches to content."),o()()()()(),i(57,"h3"),n(58,"Close Button Keyboard Support"),o(),i(59,"div",1)(60,"table",2)(61,"thead")(62,"tr")(63,"th"),n(64,"Key"),o(),i(65,"th"),n(66,"Function"),o()()(),i(67,"tbody")(68,"tr")(69,"td")(70,"i"),n(71,"enter"),o()(),i(72,"td"),n(73,"Switches to display."),o()(),i(74,"tr")(75,"td")(76,"i"),n(77,"space"),o()(),i(78,"td"),n(79,"Switches to display."),o()()()()()()())},dependencies:[y,de],encapsulation:2})}return e})();var Fe=`
    .p-inplace-display {
        display: inline-block;
        cursor: pointer;
        border: 1px solid transparent;
        padding: dt('inplace.padding');
        border-radius: dt('inplace.border.radius');
        transition:
            background dt('inplace.transition.duration'),
            color dt('inplace.transition.duration'),
            outline-color dt('inplace.transition.duration'),
            box-shadow dt('inplace.transition.duration');
        outline-color: transparent;
    }

    .p-inplace-display:not(.p-disabled):hover {
        background: dt('inplace.display.hover.background');
        color: dt('inplace.display.hover.color');
    }

    .p-inplace-display:focus-visible {
        box-shadow: dt('inplace.focus.ring.shadow');
        outline: dt('inplace.focus.ring.width') dt('inplace.focus.ring.style') dt('inplace.focus.ring.color');
        outline-offset: dt('inplace.focus.ring.offset');
    }

    .p-inplace-content {
        display: block;
    }
`;var Qe={root:()=>["p-inplace p-component"],display:({instance:e})=>["p-inplace-display",{"p-disabled":e.disabled}],content:"p-inplace-content"},J=(()=>{class e extends ue{name="inplace";style=Fe;classes=Qe;static \u0275fac=(()=>{let t;return function(p){return(t||(t=w(e)))(p||e)}})();static \u0275prov=X({token:e,factory:e.\u0275fac})}return e})();var Ve=["*"],Ke=["display"],$e=["content"],He=["closeicon"],Ge=[[["","pInplaceDisplay",""]],[["","pInplaceContent",""]]],We=["[pInplaceDisplay]","[pInplaceContent]"],Je=e=>({"p-disabled":e}),Xe=e=>({closeCallback:e});function Ye(e,c){e&1&&G(0)}function Ze(e,c){if(e&1){let t=T();i(0,"div",3),S("click",function(p){C(t);let f=g();return D(f.onActivateClick(p))})("keydown",function(p){C(t);let f=g();return D(f.onKeydown(p))}),M(1),d(2,Ye,1,0,"ng-container",4),o()}if(e&2){let t=g();j(t.cx("display")),l("pBind",t.ptm("display"))("ngClass",W(5,Je,t.disabled)),r(2),l("ngTemplateOutlet",t.displayTemplate||t._displayTemplate)}}function et(e,c){e&1&&G(0)}function tt(e,c){if(e&1){let t=T();i(0,"p-button",10),S("click",function(p){C(t);let f=g(3);return D(f.onDeactivateClick(p))}),o()}if(e&2){let t=g(3);l("pt",t.ptm("pcButton"))("icon",t.closeIcon),N("aria-label",t.closeAriaLabel)}}function nt(e,c){e&1&&(ee(),m(0,"svg",13))}function it(e,c){if(e&1&&d(0,nt,1,0,"svg",12),e&2){let t=g(4);l("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate)}}function ot(e,c){}function at(e,c){e&1&&d(0,ot,0,0,"ng-template")}function pt(e,c){if(e&1){let t=T();i(0,"p-button",11),S("click",function(p){C(t);let f=g(3);return D(f.onDeactivateClick(p))}),d(1,it,1,1,"ng-template",null,0,u)(3,at,1,0,null,4),o()}if(e&2){let t=g(3);l("pt",t.ptm("pcButton")),N("aria-label",t.closeAriaLabel),r(3),l("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function lt(e,c){if(e&1&&(oe(0),d(1,tt,1,3,"p-button",8)(2,pt,4,3,"p-button",9),ae()),e&2){let t=g(2);r(),l("ngIf",t.closeIcon),r(),l("ngIf",!t.closeIcon)}}function ct(e,c){if(e&1&&(i(0,"div",5),M(1,1),d(2,et,1,0,"ng-container",6)(3,lt,3,2,"ng-container",7),o()),e&2){let t=g();j(t.cx("content")),l("pBind",t.ptm("content")),r(2),l("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",W(6,Xe,t.onDeactivateClick.bind(t))),r(),l("ngIf",t.closable)}}var Be=new Z("INPLACE_INSTANCE"),rt=(()=>{class e extends Q{static \u0275fac=(()=>{let t;return function(p){return(t||(t=w(e)))(p||e)}})();static \u0275cmp=s({type:e,selectors:[["p-inplacedisplay"],["p-inplaceDisplay"]],features:[L],ngContentSelectors:Ve,decls:1,vars:0,template:function(a,p){a&1&&(z(),M(0))},dependencies:[E],encapsulation:2})}return e})(),st=(()=>{class e extends Q{static \u0275fac=(()=>{let t;return function(p){return(t||(t=w(e)))(p||e)}})();static \u0275cmp=s({type:e,selectors:[["p-inplacecontent"],["p-inplaceContent"]],features:[L],ngContentSelectors:Ve,decls:1,vars:0,template:function(a,p){a&1&&(z(),M(0))},dependencies:[E],encapsulation:2})}return e})(),_=(()=>{class e extends Q{$pcInplace=R(Be,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=R(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}active=!1;closable=!1;disabled=!1;preventClick;styleClass;closeIcon;closeAriaLabel;onActivate=new H;onDeactivate=new H;hover;displayTemplate;contentTemplate;closeIconTemplate;_componentStyle=R(J);onActivateClick(t){this.preventClick||this.activate(t)}onDeactivateClick(t){this.preventClick||this.deactivate(t)}activate(t){this.disabled||(this.active=!0,this.onActivate.emit(t),this.cd.markForCheck())}deactivate(t){this.disabled||(this.active=!1,this.hover=!1,this.onDeactivate.emit(t),this.cd.markForCheck())}onKeydown(t){t.code==="Enter"&&(this.activate(t),t.preventDefault())}templates;_displayTemplate;_closeIconTemplate;_contentTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"display":this._displayTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(p){return(t||(t=w(e)))(p||e)}})();static \u0275cmp=s({type:e,selectors:[["p-inplace"]],contentQueries:function(a,p,f){if(a&1&&(k(f,Ke,4),k(f,$e,4),k(f,He,4),k(f,me,4)),a&2){let I;A(I=F())&&(p.displayTemplate=I.first),A(I=F())&&(p.contentTemplate=I.first),A(I=F())&&(p.closeIconTemplate=I.first),A(I=F())&&(p.templates=I)}},hostVars:3,hostBindings:function(a,p){a&2&&(N("aria-live","polite"),j(p.cn(p.cx("root"),p.styleClass)))},inputs:{active:[2,"active","active",V],closable:[2,"closable","closable",V],disabled:[2,"disabled","disabled",V],preventClick:[2,"preventClick","preventClick",V],styleClass:"styleClass",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel"},outputs:{onActivate:"onActivate",onDeactivate:"onDeactivate"},features:[pe([J,{provide:Be,useExisting:e},{provide:fe,useExisting:e}]),ie([P]),L],ngContentSelectors:We,decls:2,vars:2,consts:[["icon",""],["tabindex","0","role","button",3,"class","pBind","ngClass","click","keydown",4,"ngIf"],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","pBind","ngClass"],[4,"ngTemplateOutlet"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],["type","button","pRipple","",3,"pt","icon","click",4,"ngIf"],["type","button","pRipple","",3,"pt","click",4,"ngIf"],["type","button","pRipple","",3,"click","pt","icon"],["type","button","pRipple","",3,"click","pt"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(a,p){a&1&&(z(Ge),d(0,Ze,3,7,"div",1)(1,ct,4,8,"div",2)),a&2&&(l("ngIf",!p.active),r(),l("ngIf",p.active))},dependencies:[E,ce,re,se,U,he,ye,O,ve,P],encapsulation:2,changeDetection:0})}return e})(),h=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=ne({type:e});static \u0275inj=Y({imports:[_,st,rt,O,O]})}return e})();function mt(e,c){e&1&&(i(0,"span"),n(1,"View Content"),o())}function dt(e,c){e&1&&(i(0,"p",4),n(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),o())}var Pe=(()=>{class e{code={basic:`<p-inplace>
    <ng-template #display>
        <span>View Content</span>
    </ng-template>
    <ng-template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace>
        <ng-template #display>
            <span>View Content</span>
        </ng-template>
        <ng-template #content>
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';

@Component({
    selector: 'inplace-basic-demo',
    templateUrl: './inplace-basic-demo.html',
    standalone: true,
    imports: [InplaceModule]
})
export class InplaceBasicDemo {}`};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:18,vars:1,consts:[["display",""],["content",""],[1,"card"],["selector","inplace-basic-demo",3,"code"],[1,"m-0"]],template:function(a,p){a&1&&(i(0,"app-docsectiontext")(1,"p")(2,"i"),n(3,"Inplace"),o(),n(4," component requires "),i(5,"i"),n(6,"display"),o(),n(7," and "),i(8,"i"),n(9,"content"),o(),n(10," templates to define the content of each state."),o()(),i(11,"div",2)(12,"p-inplace"),d(13,mt,2,0,"ng-template",null,0,u)(15,dt,2,0,"ng-template",null,1,u),o()(),m(17,"app-code",3)),a&2&&(r(17),l("code",p.code))},dependencies:[y,x,v,h,_],encapsulation:2})}return e})();function ut(e,c){e&1&&(i(0,"span",4),m(1,"span",5),i(2,"span",6),n(3,"View Photo"),o()())}function ft(e,c){e&1&&m(0,"img",7)}var qe=(()=>{class e{code={basic:`<p-inplace>
    <ng-template #display>
        <span class="inline-flex items-center gap-2">
            <span class="pi pi-image" style="vertical-align: middle"></span>
            <span class="ml-2">View Photo</span>
        </span>
    </ng-template>
    <ng-template #content>
        <img
            class="w-full sm:w-80 shadow-md"
            src="/_ext/primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg"
            alt="Nature"
        />
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace>
        <ng-template #display>
            <span class="inline-flex items-center gap-2">
                <span class="pi pi-image" style="vertical-align: middle"></span>
                <span class="ml-2">View Photo</span>
            </span>
        </ng-template>
        <ng-template #content>
            <img
                class="w-full sm:w-80 shadow-md"
                src="/_ext/primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg"
                alt="Nature"
            />
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';

@Component({
    selector: 'inplace-image-demo',
    templateUrl: './inplace-image-demo.html',
    standalone: true,
    imports: [InplaceModule]
})
export class InplaceImageDemo {}`};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["image-doc"]],decls:10,vars:1,consts:[["display",""],["content",""],[1,"card"],["selector","inplace-image-demo",3,"code"],[1,"inline-flex","items-center","gap-2"],[1,"pi","pi-image",2,"vertical-align","middle"],[1,"ml-2"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/galleria/galleria5.jpg","alt","Nature",1,"w-full","sm:w-80","shadow-md"]],template:function(a,p){a&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"Any content such as an image can be placed inside an Inplace."),o()(),i(3,"div",2)(4,"p-inplace"),d(5,ut,4,0,"ng-template",null,0,u)(7,ft,1,0,"ng-template",null,1,u),o()(),m(9,"app-code",3)),a&2&&(r(9),l("code",p.code))},dependencies:[y,x,v,h,_],encapsulation:2})}return e})();var Re=(()=>{class e{code={typescript:"import { InplaceModule } from 'primeng/inplace';"};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["inplace-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,p){a&1&&m(0,"app-code",0),a&2&&l("code",p.code)("hideToggleCode",!0)},dependencies:[x,v],encapsulation:2})}return e})();function gt(e,c){e&1&&(i(0,"span"),n(1,"Click to Edit"),o())}function _t(e,c){if(e&1){let t=T();i(0,"span",4),m(1,"input",5),i(2,"button",6),S("click",function(p){let f=C(t).closeCallback;return D(f(p))}),m(3,"i",7),o()()}e&2&&(r(),l("pAutoFocus",!0))}var Le=(()=>{class e{code={basic:`<p-inplace>
    <ng-template #display>
        <span>Click to Edit</span>
    </ng-template>
    <ng-template #content let-closeCallback="closeCallback">
        <span class="inline-flex gap-2">
            <input type="text" pInputText [pAutoFocus]="true" />
            <button type="button" pButton (click)="closeCallback($event)" text severity="danger">
                <i class="pi pi-times" pButtonIcon></i>
            </button>
        </span>
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace>
        <ng-template #display>
            <span>Click to Edit</span>
        </ng-template>
        <ng-template #content let-closeCallback="closeCallback">
            <span class="inline-flex gap-2">
                <input type="text" pInputText [pAutoFocus]="true" />
                <button type="button" pButton (click)="closeCallback($event)" text severity="danger">
                    <i class="pi pi-times" pButtonIcon></i>
                </button>
            </span>
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
    selector: 'inplace-input-demo',
    templateUrl: './inplace-input-demo.html',
    standalone: true,
    imports: [InplaceModule, InputTextModule, ButtonModule, AutoFocusModule]
})
export class InplaceInputDemo {}`};static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["input-doc"]],decls:13,vars:1,consts:[["display",""],["content",""],[1,"card"],["selector","inplace-input-demo",3,"code"],[1,"inline-flex","gap-2"],["type","text","pInputText","",3,"pAutoFocus"],["type","button","pButton","","text","","severity","danger",3,"click"],["pButtonIcon","",1,"pi","pi-times"]],template:function(a,p){a&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"The "),i(3,"i"),n(4,"closeCallback"),o(),n(5," switches the state back to display mode when called from an event."),o()(),i(6,"div",2)(7,"p-inplace"),d(8,gt,2,0,"ng-template",null,0,u)(10,_t,4,1,"ng-template",null,1,u),o()(),m(12,"app-code",3)),a&2&&(r(12),l("code",p.code))},dependencies:[y,x,v,h,_,Ce,Ie,_e,ge,U,be,xe],encapsulation:2})}return e})();function yt(e,c){e&1&&(i(0,"span"),n(1,"View Data"),o())}function vt(e,c){e&1&&(i(0,"tr")(1,"th"),n(2,"Code"),o(),i(3,"th"),n(4,"Name"),o(),i(5,"th"),n(6,"Category"),o(),i(7,"th"),n(8,"Quantity"),o()())}function xt(e,c){if(e&1&&(i(0,"tr")(1,"td"),n(2),o(),i(3,"td"),n(4),o(),i(5,"td"),n(6),o(),i(7,"td"),n(8),o()()),e&2){let t=c.$implicit;r(2),B(t.code),r(2),B(t.name),r(2),B(t.category),r(2),B(t.quantity)}}function bt(e,c){if(e&1&&(i(0,"p-table",7),d(1,vt,9,0,"ng-template",null,2,u)(3,xt,9,4,"ng-template",null,3,u),o()),e&2){let t=g();l("value",t.products)}}var Ne=(()=>{class e{productService;products;constructor(t){this.productService=t}code={basic:`<p-inplace (onActivate)="loadData()">
    <ng-template #display>
        <span>View Data</span>
    </ng-template>
    <ng-template #content>
        <p-table [value]="products" responsiveLayout="scroll">
            <ng-template #header>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td>{{ product.code }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantity }}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</p-inplace>`,html:`<div class="card">
    <p-inplace (onActivate)="loadData()">
        <ng-template #display>
            <span>View Data</span>
        </ng-template>
        <ng-template #content>
            <p-table [value]="products" responsiveLayout="scroll">
                <ng-template #header>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </ng-template>
                <ng-template #body let-product>
                    <tr>
                        <td>{{ product.code }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </ng-template>
    </p-inplace>
</div>`,typescript:`import { Component } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { InplaceModule } from 'primeng/inplace';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'inplace-lazy-demo',
    templateUrl: './inplace-lazy-demo.html',
    standalone: true,
    imports: [InplaceModule, TableModule],
    providers: [ProductService]
})
export class InplaceLazyDemo {
    products: Product[] | undefined;

    constructor(private productService: ProductService) {}

    loadData() {
        this.productService.getProductsMini().then((products) => (this.products = products));
    }
}`,data:`
/* ProductService */
{
id: '1000',
code: 'f230fh0g3',
name: 'Bamboo Watch',
description: 'Product Description',
image: 'bamboo-watch.jpg',
price: 65,
category: 'Accessories',
quantity: 24,
inventoryStatus: 'INSTOCK',
rating: 5
},
...`,service:["ProductService"]};loadData(){this.productService.getProductsMini().then(t=>this.products=t)}extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
id?: string;
code?: string;
name?: string;
description?: string;
price?: number;
quantity?: number;
inventoryStatus?: string;
category?: string;
image?: string;
rating?: number;
}`}];static \u0275fac=function(a){return new(a||e)(te(De))};static \u0275cmp=s({type:e,selectors:[["lazy-doc"]],decls:13,vars:1,consts:[["display",""],["content",""],["header",""],["body",""],[1,"card"],[3,"onActivate"],["selector","inplace-lazy-demo",3,"code"],["responsiveLayout","scroll",3,"value"]],template:function(a,p){if(a&1){let f=T();i(0,"app-docsectiontext")(1,"p"),n(2,"Using the "),i(3,"i"),n(4,"onActivate"),o(),n(5," event, data can be loaded in a lazy manner before displaying it in a table."),o()(),i(6,"div",4)(7,"p-inplace",5),S("onActivate",function(){return C(f),D(p.loadData())}),d(8,yt,2,0,"ng-template",null,0,u)(10,bt,5,1,"ng-template",null,1,u),o()(),m(12,"app-code",6)}a&2&&(r(12),l("code",p.code))},dependencies:[y,x,v,h,_,Se,Te],encapsulation:2})}return e})();function ht(e,c){e&1&&n(0," View Content ")}function It(e,c){e&1&&(i(0,"p",3),n(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),o())}var ze=(()=>{class e{docs=[{data:K("Inplace"),key:"Inplace"}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["inplace-pt-viewer"]],decls:6,vars:1,consts:[["display",""],["content",""],[3,"docs"],[1,"m-0"]],template:function(a,p){a&1&&(i(0,"app-docptviewer",2)(1,"p-inplace"),d(2,ht,1,0,"ng-template",null,0,u)(4,It,2,0,"ng-template",null,1,u),o()()),a&2&&l("docs",p.docs)},dependencies:[E,ke,h,_],encapsulation:2})}return e})();var je=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:ze},{id:"pt.doc.inplace",label:"Inplace PT Options",component:Ee,data:K("Inplace")}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["inplace-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(a,p){a&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),n(3,"Inplace Pass Through"),o()(),m(4,"app-docsection",2),o()),a&2&&(r(4),l("docs",p.docs))},dependencies:[E,we],encapsulation:2})}return e})();var Ct=()=>["Inplace"],Oe=(()=>{class e{ptComponent=je;docs=[{id:"import",label:"Import",component:Re},{id:"basic",label:"Basic",component:Pe},{id:"input",label:"Input",component:Le},{id:"image",label:"Image",component:qe},{id:"lazy",label:"Lazy",component:Ne},{id:"accessibility",label:"Accessibility",component:Ae}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Inplace Component","header","Inplace","description","Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.","themeDocs","Inplace",3,"docs","ptDocs","apiDocs"]],template:function(a,p){a&1&&m(0,"app-doc",0),a&2&&l("docs",p.docs)("ptDocs",p.ptComponent)("apiDocs",le(3,Ct))},dependencies:[Me],encapsulation:2})}return e})();var Gn=[{path:"",component:Oe}];export{Gn as default};
