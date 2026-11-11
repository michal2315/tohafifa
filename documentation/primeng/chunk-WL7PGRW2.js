import{a as v,b as A}from"./chunk-JNUBCW5H.js";import{a as s,b as d}from"./chunk-T3D2SKKJ.js";import"./chunk-EZDHLOD5.js";import{b as D}from"./chunk-FKOOMXTU.js";import{a as h}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as C}from"./chunk-XCUGNKAG.js";import{a as f,b as x}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as u}from"./chunk-D2XKNHFS.js";import{Eb as a,Fb as p,Gb as o,Hb as n,Qa as l,gb as r,hc as i,sc as y}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var S=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-accessibility-doc"]],decls:45,vars:0,consts:[[1,"doc-section-description"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,c){t&1&&(p(0,"div")(1,"app-docsectiontext")(2,"div",0)(3,"h3"),i(4,"Screen Reader"),o(),p(5,"p"),i(6," Chip uses the "),p(7,"i"),i(8,"label"),o(),i(9," property as the default "),p(10,"i"),i(11,"aria-label"),o(),i(12,", since any attribute is passed to the root element "),p(13,"i"),i(14,"aria-labelledby"),o(),i(15," or "),p(16,"i"),i(17,"aria-label"),o(),i(18," can be used to override the default behavior. Removable chips have a "),p(19,"i"),i(20,"tabindex"),o(),i(21," and focusable with the tab key. "),o(),p(22,"h3"),i(23,"Keyboard Support"),o(),p(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),i(29,"Key"),o(),p(30,"th"),i(31,"Function"),o()()(),p(32,"tbody")(33,"tr")(34,"td")(35,"i"),i(36,"backspace"),o()(),p(37,"td"),i(38,"Hides removable."),o()(),p(39,"tr")(40,"td")(41,"i"),i(42,"enter"),o()(),p(43,"td"),i(44,"Hides removable."),o()()()()()()()())},dependencies:[f],encapsulation:2})}return e})();var T=(()=>{class e{code={basic:`<p-chip label="Action" />
<p-chip label="Comedy" />
<p-chip label="Mystery" />
<p-chip label="Thriller" [removable]="true" />`,html:`<div class="card flex items-center gap-2 flex-wrap">
    <p-chip label="Action" />
    <p-chip label="Comedy" />
    <p-chip label="Mystery" />
    <p-chip label="Thriller" [removable]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-basic-demo',
    templateUrl: './chip-basic-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-basic-demo"]],decls:18,vars:2,consts:[[1,"card","flex","items-center","gap-2","flex-wrap"],["label","Action"],["label","Comedy"],["label","Mystery"],["label","Thriller",3,"removable"],["selector","chip-basic-demo",3,"code"]],template:function(t,c){t&1&&(p(0,"app-docsectiontext")(1,"p"),i(2," A basic chip with a text is created with the "),p(3,"i"),i(4,"label"),o(),i(5," property. In addition when "),p(6,"i"),i(7,"removable"),o(),i(8," is added, a delete icon is displayed to remove a chip, the optional "),p(9,"i"),i(10,"onRemove"),o(),i(11," event is available to get notified when a chip is hidden. "),o()(),p(12,"div",0),n(13,"p-chip",1)(14,"p-chip",2)(15,"p-chip",3)(16,"p-chip",4),o(),n(17,"app-code",5)),t&2&&(l(16),a("removable",!0),l(),a("code",c.code))},dependencies:[h,f,d,s],encapsulation:2})}return e})();var E=(()=>{class e{code={basic:'<p-chip label="Apple" icon="pi pi-apple" />',html:`<div class="card flex items-center gap-2 flex-wrap">
    <p-chip label="Apple" icon="pi pi-apple" />
    <p-chip label="Facebook" icon="pi pi-facebook" />
    <p-chip label="Google" icon="pi pi-google" />
    <p-chip label="Microsoft" icon="pi pi-microsoft" [removable]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-icon-demo',
    templateUrl: './chip-icon-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipIconDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-icon-demo"]],decls:12,vars:2,consts:[[1,"card","flex","items-center","gap-2","flex-wrap"],["label","Apple","icon","pi pi-apple"],["label","Facebook","icon","pi pi-facebook"],["label","Google","icon","pi pi-google"],["label","Microsoft","icon","pi pi-microsoft",3,"removable"],["selector","chip-icon-demo",3,"code"]],template:function(t,c){t&1&&(p(0,"app-docsectiontext")(1,"p"),i(2,"A font icon next to the label can be displayed with the "),p(3,"i"),i(4,"icon"),o(),i(5," property."),o()(),p(6,"div",0),n(7,"p-chip",1)(8,"p-chip",2)(9,"p-chip",3)(10,"p-chip",4),o(),n(11,"app-code",5)),t&2&&(l(10),a("removable",!0),l(),a("code",c.code))},dependencies:[h,f,d,s],encapsulation:2})}return e})();var w=(()=>{class e{code={basic:`<p-chip label="Amy Elsner" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image" />
<p-chip label="Asiya Javayant" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image" />
<p-chip label="Onyama Limba" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image" />
<p-chip label="Xuxue Feng" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true" />`,html:`<div class="card flex items-center gap-2 flex-wrap">
    <p-chip label="Amy Elsner" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" alt="Avatar image" />
    <p-chip label="Asiya Javayant" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" alt="Avatar image" />
    <p-chip label="Onyama Limba" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" alt="Avatar image" />
    <p-chip label="Xuxue Feng" image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" alt="Avatar image" [removable]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-image-demo',
    templateUrl: './chip-image-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipImageDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-image-demo"]],decls:12,vars:2,consts:[[1,"card","flex","items-center","gap-2","flex-wrap"],["label","Amy Elsner","image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","alt","Avatar image"],["label","Asiya Javayant","image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png","alt","Avatar image"],["label","Onyama Limba","image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png","alt","Avatar image"],["label","Xuxue Feng","image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png","alt","Avatar image",3,"removable"],["selector","chip-image-demo",3,"code"]],template:function(t,c){t&1&&(p(0,"app-docsectiontext")(1,"p"),i(2,"The "),p(3,"i"),i(4,"image"),o(),i(5," property is used to display an image like an avatar."),o()(),p(6,"div",0),n(7,"p-chip",1)(8,"p-chip",2)(9,"p-chip",3)(10,"p-chip",4),o(),n(11,"app-code",5)),t&2&&(l(10),a("removable",!0),l(),a("code",c.code))},dependencies:[h,f,d,s],encapsulation:2})}return e})();var M=(()=>{class e{code={typescript:"import { ChipModule } from 'primeng/chip';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,c){t&1&&n(0,"app-code",0),t&2&&a("code",c.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2})}return e})();var I=(()=>{class e{code={basic:`<p-chip class="!py-0 !pl-0 !pr-4">
    <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
        P
    </span>
    <span class="ml-2 font-medium">
        PRIME
    </span>
</p-chip>`,html:`<div class="card">
    <p-chip class="!py-0 !pl-0 !pr-4">
        <span class="bg-primary text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
            P
        </span>
        <span class="ml-2 font-medium">
            PRIME
        </span>
    </p-chip>
</div>`,typescript:`import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
    selector: 'chip-template-demo',
    templateUrl: './chip-template-demo.html',
    standalone: true,
    imports: [Chip]
})
export class ChipTemplateDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-template-demo"]],decls:10,vars:1,consts:[[1,"card"],[1,"!py-0","!pl-0","!pr-4"],[1,"bg-primary","text-primary-contrast","rounded-full","w-8","h-8","flex","items-center","justify-center"],[1,"ml-2","font-medium"],["selector","chip-template-demo",3,"code"]],template:function(t,c){t&1&&(p(0,"app-docsectiontext")(1,"p"),i(2,"Content can easily be customized with the dynamic content instead of using the built-in modes."),o()(),p(3,"div",0)(4,"p-chip",1)(5,"span",2),i(6,"P"),o(),p(7,"span",3),i(8,"PRIME"),o()()(),n(9,"app-code",4)),t&2&&(l(9),a("code",c.code))},dependencies:[h,f,d,s],encapsulation:2})}return e})();var P=(()=>{class e{docs=[{data:v("Chip"),key:"Chip"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-pt-viewer"]],decls:6,vars:2,consts:[[3,"docs"],[1,"flex","flex-wrap","gap-4"],["label","Action"],["label","Comedy"],["label","Mystery"],["label","Thriller",3,"removable"]],template:function(t,c){t&1&&(p(0,"app-docptviewer",0)(1,"div",1),n(2,"p-chip",2)(3,"p-chip",3)(4,"p-chip",4)(5,"p-chip",5),o()()),t&2&&(a("docs",c.docs),l(5),a("removable",!0))},dependencies:[u,A,d,s],encapsulation:2})}return e})();var F=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:P},{id:"pt.doc.chip",label:"Chip PT Options",component:x,data:v("Chip")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["chip-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,c){t&1&&(p(0,"div",0)(1,"div",1)(2,"h1"),i(3,"Chip Pass Through"),o()(),n(4,"app-docsection",2),o()),t&2&&(l(4),a("docs",c.docs))},dependencies:[u,C],encapsulation:2})}return e})();var j=()=>["Chip"],k=(()=>{class e{ptComponent=F;docs=[{id:"import",label:"Import",component:M},{id:"basic",label:"Basic",component:T},{id:"icon",label:"Icon",component:E},{id:"image",label:"Image",component:w},{id:"template",label:"Template",component:I},{id:"accessibility",label:"Accessibility",component:S}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Chip Component","header","Chip","description","Chip represents entities using icons, labels and images.","themeDocs","chip",3,"docs","apiDocs","ptDocs"]],template:function(t,c){t&1&&n(0,"app-doc",0),t&2&&a("docs",c.docs)("apiDocs",y(3,j))("ptDocs",c.ptComponent)},dependencies:[D],encapsulation:2})}return e})();var xe=[{path:"",component:k}];export{xe as default};
