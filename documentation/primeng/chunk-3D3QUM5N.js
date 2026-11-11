import{a as x,b as h}from"./chunk-ZYT4LGUE.js";import{a as S,b as W}from"./chunk-JNUBCW5H.js";import{a as y,b as I}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b,f as v,i as g,u as M}from"./chunk-CTI5WBER.js";import"./chunk-EZDHLOD5.js";import{b as E}from"./chunk-FKOOMXTU.js";import{a as C,b as T}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as P}from"./chunk-XCUGNKAG.js";import{a as D,b as F}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w}from"./chunk-D2XKNHFS.js";import{Eb as p,Fb as n,Gb as i,Hb as s,Qa as d,gb as l,hc as a,mc as c,nc as f,oc as u,sc as _}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var B=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["ifta-label-accessibility-doc"]],decls:9,vars:0,template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"h3"),a(2,"Screen Reader"),i(),n(3,"p"),a(4,"IftaLabel does not require any roles and attributes."),i(),n(5,"h3"),a(6,"Keyboard Support"),i(),n(7,"p"),a(8,"Component does not include any interactive elements."),i()())},dependencies:[D],encapsulation:2})}return e})();var O=(()=>{class e{value;code={basic:`<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <input pInputText id="username" [(ngModel)]="value" />
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ifta-label-basic-demo',
    templateUrl: './ifta-label-basic-demo.html',
    standalone: true,
    imports: [IftaLabelModule, InputTextModule, FormsModule]
})
export class IftaLabelBasicDemo {
    value: string | undefined;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","ifta-label-basic-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"IftaLabel is used by wrapping the input and its label."),i()(),n(3,"div",0)(4,"p-iftalabel")(5,"input",1),u("ngModelChange",function(m){return f(o.value,m)||(o.value=m),m}),i(),n(6,"label",2),a(7,"Username"),i()()(),s(8,"app-code",3)),t&2&&(d(5),c("ngModel",o.value),d(3),p("code",o.code))},dependencies:[D,T,C,M,b,v,g,h,x,I,y],encapsulation:2})}return e})();var k=(()=>{class e{code={typescript:"import { IftaLabelModule } from 'primeng/iftalabel';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["ifta-label-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&s(0,"app-code",0),t&2&&p("code",o.code)("hideToggleCode",!0)},dependencies:[T,C],encapsulation:2})}return e})();var q=(()=>{class e{value;code={basic:`<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" [invalid]="!value" />
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <input pInputText id="username" [(ngModel)]="value" [invalid]="!value" />
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ifta-label-invalid-demo',
    templateUrl: './ifta-label-invalid-demo.html',
    standalone: true,
    imports: [IftaLabelModule, InputTextModule, FormsModule]
})
export class IftaLabelInvalidDemo {
    value: string | undefined;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["invalid-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel","invalid"],["for","username"],["selector","ifta-label-invalid-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"When the form element is invalid, the label is also highlighted."),i()(),n(3,"div",0)(4,"p-iftalabel")(5,"input",1),u("ngModelChange",function(m){return f(o.value,m)||(o.value=m),m}),i(),n(6,"label",2),a(7,"Username"),i()()(),s(8,"app-code",3)),t&2&&(d(5),c("ngModel",o.value),p("invalid",!o.value),d(3),p("code",o.code))},dependencies:[D,T,C,M,b,v,g,h,x,I,y],encapsulation:2})}return e})();var K=(()=>{class e{value="";docs=[{data:S("IftaLabel"),key:"IftaLabel"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["iftalabel-pt-viewer"]],decls:5,vars:2,consts:[[3,"docs"],["type","text","pInputText","",3,"ngModelChange","ngModel"]],template:function(t,o){t&1&&(n(0,"app-docptviewer",0)(1,"p-iftalabel")(2,"input",1),u("ngModelChange",function(m){return f(o.value,m)||(o.value=m),m}),i(),n(3,"label"),a(4,"Username"),i()()()),t&2&&(p("docs",o.docs),d(2),c("ngModel",o.value))},dependencies:[w,M,b,v,g,W,h,x,I,y],encapsulation:2})}return e})();var R=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:K},{id:"pt.doc.iftalabel",label:"IftaLabel PT Options",component:F,data:S("IftaLabel")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["iftalabel-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),a(3,"IftaLabel Pass Through"),i()(),s(4,"app-docsection",2),i()),t&2&&(d(4),p("docs",o.docs))},dependencies:[w,P],encapsulation:2})}return e})();var G=()=>["IftaLabel"],z=(()=>{class e{ptComponent=R;docs=[{id:"import",label:"Import",component:k},{id:"basic",label:"Basic",component:O},{id:"invalid",label:"Invalid",component:q},{id:"accessibility",label:"Accessibility",component:B}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Ifta Label Component","header","IftaLabel","description","IftaLabel is used to create infield top aligned labels.","themeDocs","iftalabel",3,"docs","apiDocs","ptDocs"]],template:function(t,o){t&1&&s(0,"app-doc",0),t&2&&p("docs",o.docs)("apiDocs",_(3,G))("ptDocs",o.ptComponent)},dependencies:[E],encapsulation:2})}return e})();var Ae=[{path:"",component:z}];export{Ae as default};
