import{a as C,b as y}from"./chunk-QU6ZZOVJ.js";import{a as h,b as M}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as _}from"./chunk-FKOOMXTU.js";import{a as s}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as A}from"./chunk-XCUGNKAG.js";import{a as v,b as S}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{fa as q,ga as T,ha as D}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as n,Gb as i,Gc as c,Hb as a,Qa as m,fc as x,gb as d,hc as o,mb as f,sc as g}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var E=(()=>{class e{code={html:`<p-card role="region">
    Content
</p-card>`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["card-accessibility-doc"]],decls:20,vars:2,consts:[[1,"doc-section-description"],["href","https://www.w3.org/TR/wai-aria/#landmark","alt","Landmark Roles"],[3,"code","hideToggleCode"]],template:function(t,p){t&1&&(n(0,"app-docsectiontext")(1,"div",0)(2,"h3"),o(3,"Screen Reader"),i(),n(4,"p"),o(5," A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require to use one of the "),n(6,"a",1),o(7,"landmark"),i(),o(8," roles like "),n(9,"i"),o(10,"region"),i(),o(11,", you may use the "),n(12,"i"),o(13,"role"),i(),o(14," property. "),i(),a(15,"app-code",2),n(16,"h3"),o(17,"Keyboard Support"),i(),n(18,"p"),o(19,"Component does not include any interactive elements."),i()()()),t&2&&(m(15),r("code",p.code)("hideToggleCode",!0))},dependencies:[s,v],encapsulation:2})}return e})();var k=()=>({width:"25rem",overflow:"hidden"});function O(e,u){e&1&&a(0,"img",6)}function z(e,u){e&1&&o(0," Advanced Card ")}function U(e,u){e&1&&o(0," Card subtitle ")}function H(e,u){e&1&&(n(0,"div",7),a(1,"p-button",8)(2,"p-button",9),i()),e&2&&(m(),r("outlined",!0))}var B=(()=>{class e{code={basic:`<p-card [style]="{ width: '25rem', overflow: 'hidden' }">
    <ng-template #header>
        <img alt="Card" class="w-full" src="/_ext/primefaces.org/cdn/primeng/images/card-ng.jpg" />
    </ng-template>
    <ng-template #title> Advanced Card </ng-template>
    <ng-template #subtitle> Card subtitle </ng-template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
    <ng-template #footer>
        <div class="flex gap-4 mt-1">
            <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
            <p-button label="Save" class="w-full" styleClass="w-full" />
        </div>
    </ng-template>
</p-card>`,html:`<div class="mb-4 p-8 flex items-center justify-center">
    <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
        <ng-template #header>
            <img alt="Card" class="w-full" src="/_ext/primefaces.org/cdn/primeng/images/card-ng.jpg" />
        </ng-template>
        <ng-template #title> Advanced Card </ng-template>
        <ng-template #subtitle> Card subtitle </ng-template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
        <ng-template #footer>
            <div class="flex gap-4 mt-1">
                <p-button label="Cancel" severity="secondary" class="w-full" [outlined]="true" styleClass="w-full" />
                <p-button label="Save" class="w-full" styleClass="w-full" />
            </div>
        </ng-template>
    </p-card>
</div>`,typescript:`import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'card-advanced-demo',
    templateUrl: './card-advanced-demo.html',
    standalone: true,
    imports: [CardModule, ButtonModule]
})
export class CardAdvancedDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["card-advanced-demo"]],decls:25,vars:4,consts:[["header",""],["title",""],["subtitle",""],["footer",""],[1,"mb-4","p-8","flex","items-center","justify-center"],["selector","card-advanced-demo",3,"code"],["alt","Card","src","/_ext/primefaces.org/cdn/primeng/images/card-ng.jpg",1,"w-full"],[1,"flex","gap-4","mt-1"],["label","Cancel","severity","secondary","styleClass","w-full",1,"w-full",3,"outlined"],["label","Save","styleClass","w-full",1,"w-full"]],template:function(t,p){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Card content can be customized further with "),n(3,"i"),o(4,"subHeader"),i(),o(5,", "),n(6,"i"),o(7,"header"),i(),o(8," and "),n(9,"i"),o(10,"footer"),i(),o(11," properties."),i()(),n(12,"div",4)(13,"p-card"),f(14,O,1,0,"ng-template",null,0,c)(16,z,1,0,"ng-template",null,1,c)(18,U,1,0,"ng-template",null,2,c),n(20,"p"),o(21," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),i(),f(22,H,3,1,"ng-template",null,3,c),i()(),a(24,"app-code",5)),t&2&&(m(13),x(g(3,k)),m(11),r("code",p.code))},dependencies:[s,v,D,T,y,C],encapsulation:2})}return e})();var F=(()=>{class e{code={basic:`<p-card header="Simple Card">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-card>`,html:`<div class="mb-4 p-8">
    <p-card header="Simple Card">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </p-card>
</div>`,typescript:`import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'card-basic-demo',
    templateUrl: './card-basic-demo.html',
    standalone: true,
    imports: [CardModule]
})
export class CardBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["card-basic-demo"]],decls:11,vars:1,consts:[[1,"mb-4","p-8"],["header","Simple Card"],[1,"m-0"],["selector","card-basic-demo",3,"code"]],template:function(t,p){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"A simple Card is created with a "),n(3,"i"),o(4,"header"),i(),o(5," property along with the content as children."),i()(),n(6,"div",0)(7,"p-card",1)(8,"p",2),o(9," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),i()()(),a(10,"app-code",3)),t&2&&(m(10),r("code",p.code))},dependencies:[s,v,y,C],encapsulation:2})}return e})();var I=(()=>{class e{code={typescript:"import { CardModule } from 'primeng/card';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["card-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,p){t&1&&a(0,"app-code",0),t&2&&r("code",p.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var K=()=>({width:"25rem"});function G(e,u){e&1&&o(0,"Advanced Card")}function J(e,u){e&1&&o(0,"Card subtitle")}function N(e,u){e&1&&(n(0,"div",5),a(1,"button",6)(2,"button",7),i()),e&2&&(m(),r("outlined",!0))}var R=(()=>{class e{docs=[{data:h("Card"),key:"Card"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["card-pt-viewer"]],decls:10,vars:4,consts:[["title",""],["subtitle",""],["footer",""],[3,"docs"],[1,"m-0"],[1,"flex","gap-4","mt-1"],["pButton","","label","Cancel","severity","secondary",1,"w-full",3,"outlined"],["pButton","","label","Save",1,"w-full"]],template:function(t,p){t&1&&(n(0,"app-docptviewer",3)(1,"p-card"),f(2,G,1,0,"ng-template",null,0,c)(4,J,1,0,"ng-template",null,1,c),n(6,"p",4),o(7," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),i(),f(8,N,3,1,"ng-template",null,2,c),i()()),t&2&&(r("docs",p.docs),m(),x(g(3,K)))},dependencies:[w,M,y,C,D,q],encapsulation:2})}return e})();var L=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:R},{id:"pt.doc.card",label:"Card PT Options",component:S,data:h("Card")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["card-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,p){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),o(3,"Card Pass Through"),i()(),a(4,"app-docsection",2),i()),t&2&&(m(4),r("docs",p.docs))},dependencies:[w,A],encapsulation:2})}return e})();var Q=()=>["Card"],V=(()=>{class e{docs=[{id:"import",label:"Import",component:I},{id:"basic",label:"Basic",component:F},{id:"advanced",label:"Advanced",component:B},{id:"accessibility",label:"Accessibility",component:E}];ptComponent=L;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Card Component","header","Card","description","Card is a flexible container component.","themeDocs","Card",3,"docs","apiDocs","ptDocs"]],template:function(t,p){t&1&&a(0,"app-doc",0),t&2&&r("docs",p.docs)("apiDocs",g(3,Q))("ptDocs",p.ptComponent)},dependencies:[_],encapsulation:2})}return e})();var _e=[{path:"",component:V}];export{_e as default};
