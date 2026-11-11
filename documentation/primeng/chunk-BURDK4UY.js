import{a as p,b as c}from"./chunk-V4AUYDDU.js";import{a as E,b as S}from"./chunk-XSLWLDLT.js";import{a as v,b as q}from"./chunk-JNUBCW5H.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as C}from"./chunk-FKOOMXTU.js";import{a as f}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as F}from"./chunk-XCUGNKAG.js";import{a as u,b as T}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as x}from"./chunk-D2XKNHFS.js";import{Eb as l,Fb as t,Gb as i,Gc as D,Hb as m,Qa as s,gb as a,hc as e,mb as h,sc as y}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var M=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["fieldset-accessibility-doc"]],decls:82,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,d){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Fieldset component uses the semantic "),t(6,"i"),e(7,"fieldset"),i(),e(8," element. When toggleable option is enabled, a clickable element with "),t(9,"i"),e(10,"button"),i(),e(11," role is included inside the "),t(12,"i"),e(13,"legend"),i(),e(14," element, this button has "),t(15,"i"),e(16,"aria-controls"),i(),e(17," to define the id of the content section along with "),t(18,"i"),e(19,"aria-expanded"),i(),e(20," for the visibility state. The value to read the button defaults to the value of the "),t(21,"i"),e(22,"legend"),i(),e(23," property and can be customized by defining an "),t(24,"i"),e(25,"aria-label"),i(),e(26," or "),t(27,"i"),e(28,"aria-labelledby"),i(),e(29," via the "),t(30,"i"),e(31,"toggleButtonProps"),i(),e(32," property. "),i(),t(33,"p"),e(34,"The content uses "),t(35,"i"),e(36,"region"),i(),e(37,", defines an id that matches the "),t(38,"i"),e(39,"aria-controls"),i(),e(40," of the content toggle button and "),t(41,"i"),e(42,"aria-labelledby"),i(),e(43," referring to the id of the header."),i(),t(44,"h3"),e(45,"Content Toggle Button Keyboard Support"),i(),t(46,"div",0)(47,"table",1)(48,"thead")(49,"tr")(50,"th"),e(51,"Key"),i(),t(52,"th"),e(53,"Function"),i()()(),t(54,"tbody")(55,"tr")(56,"td")(57,"i"),e(58,"tab"),i()(),t(59,"td"),e(60,"Moves focus to the next the focusable element in the page tab sequence."),i()(),t(61,"tr")(62,"td")(63,"i"),e(64,"shift"),i(),e(65," + "),t(66,"i"),e(67,"tab"),i()(),t(68,"td"),e(69,"Moves focus to the previous the focusable element in the page tab sequence."),i()(),t(70,"tr")(71,"td")(72,"i"),e(73,"enter"),i()(),t(74,"td"),e(75,"Toggles the visibility of the content."),i()(),t(76,"tr")(77,"td")(78,"i"),e(79,"space"),i()(),t(80,"td"),e(81,"Toggles the visibility of the content."),i()()()()()()())},dependencies:[u],encapsulation:2})}return o})();var A=(()=>{class o{code={basic:`<p-fieldset legend="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>`,html:`<div class="card flex justify-center">
    <p-fieldset legend="Header">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-fieldset>
</div>`,typescript:`import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
    selector: 'fieldset-basic-demo',
    templateUrl: './fieldset-basic-demo.html',
    standalone: true,
    imports: [FieldsetModule]
})
export class FieldsetBasicDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["fieldset-basic-demo"]],decls:11,vars:1,consts:[[1,"card","flex","justify-center"],["legend","Header"],[1,"m-0"],["selector","fieldset-basic-demo",3,"code"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A simple Fieldset is created with a "),t(3,"i"),e(4,"legend"),i(),e(5," property along with the content as children."),i()(),t(6,"div",0)(7,"p-fieldset",1)(8,"p",2),e(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),m(10,"app-code",3)),n&2&&(s(10),l("code",d.code))},dependencies:[c,p,f,u],encapsulation:2})}return o})();var w=(()=>{class o{code={typescript:"import { FieldsetModule } from 'primeng/fieldset';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["fieldset-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,d){n&1&&m(0,"app-code",0),n&2&&l("code",d.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return o})();var P=(()=>{class o{docs=[{data:v("Fieldset"),key:"Fieldset"}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["fieldset-pt-viewer"]],decls:4,vars:2,consts:[[3,"docs"],["legend","Header",3,"toggleable"],[1,"m-0"]],template:function(n,d){n&1&&(t(0,"app-docptviewer",0)(1,"p-fieldset",1)(2,"p",2),e(3," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()()),n&2&&(l("docs",d.docs),s(),l("toggleable",!0))},dependencies:[x,q,c,p],encapsulation:2})}return o})();var L=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:P},{id:"pt.doc.fieldset",label:"Fieldset PT Options",component:T,data:v("Fieldset")}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["fieldset-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,d){n&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Fieldset Pass Through"),i()(),m(4,"app-docsection",2),i()),n&2&&(s(4),l("docs",d.docs))},dependencies:[x,F],encapsulation:2})}return o})();function V(o,j){o&1&&(t(0,"div",4),m(1,"p-avatar",5),t(2,"span",6),e(3,"Amy Elsner"),i()())}var U=(()=>{class o{code={basic:`<p-fieldset>
    <ng-template #header>
        <div class="flex items-center gap-2 px-2">
            <p-avatar
                image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>`,html:`<div class="card">
<p-fieldset>
<ng-template #header>
    <div class="flex items-center gap-2 px-2">
        <p-avatar
            image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
            shape="circle" />
        <span class="font-bold">Amy Elsner</span>
    </div>
</ng-template>
<p class="m-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</p-fieldset>
</div>`,typescript:`import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'fieldset-template-demo',
    templateUrl: './fieldset-template-demo.html',
    standalone: true,
    imports: [FieldsetModule, AvatarModule]
})
export class FieldsetTemplateDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["fieldset-template-demo"]],decls:10,vars:1,consts:[["header",""],[1,"card"],[1,"m-0"],["selector","fieldset-template-demo",3,"code"],[1,"flex","items-center","gap-2","px-2"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Header section can also be defined with custom content instead of primitive values."),i()(),t(3,"div",1)(4,"p-fieldset"),h(5,V,4,0,"ng-template",null,0,D),t(7,"p",2),e(8," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),m(9,"app-code",3)),n&2&&(s(9),l("code",d.code))},dependencies:[c,p,S,E,f,u],encapsulation:2})}return o})();var H=(()=>{class o{code={basic:`<p-fieldset legend="Header" [toggleable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-fieldset>`,html:`<div class="card flex justify-center">
    <p-fieldset legend="Header" [toggleable]="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-fieldset>
</div>`,typescript:`import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
    selector: 'fieldset-toggleable-demo',
    templateUrl: './fieldset-toggleable-demo.html',
    standalone: true,
    imports: [FieldsetModule]
})
export class FieldsetToggleableDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["fieldset-toggleable-demo"]],decls:11,vars:2,consts:[[1,"card","flex","justify-center"],["legend","Header",3,"toggleable"],[2,"margin","0"],["selector","fieldset-toggleable-demo",3,"code"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Content of the fieldset can be expanded and collapsed using "),t(3,"i"),e(4,"toggleable"),i(),e(5," option, default state is defined with collapsed option."),i()(),t(6,"div",0)(7,"p-fieldset",1)(8,"p",2),e(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),m(10,"app-code",3)),n&2&&(s(7),l("toggleable",!0),s(3),l("code",d.code))},dependencies:[f,u,c,p],encapsulation:2})}return o})();var _=()=>["Fieldset"],B=(()=>{class o{docs=[{id:"import",label:"Import",component:w},{id:"basic",label:"Basic",component:A},{id:"toggleable",label:"Toggleable",component:H},{id:"template",label:"Template",component:U},{id:"accessibility",label:"Accessibility",component:M}];ptComponent=L;static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Fieldset Component","header","Fieldset","description","Fieldset is a grouping component with a content toggle feature.","themeDocs","fieldset",3,"docs","apiDocs","ptDocs"]],template:function(n,d){n&1&&m(0,"app-doc",0),n&2&&l("docs",d.docs)("apiDocs",y(3,_))("ptDocs",d.ptComponent)},dependencies:[C],encapsulation:2})}return o})();var Ee=[{path:"",component:B}];export{Ee as default};
