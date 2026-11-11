import{a as D,b as h}from"./chunk-2SUSAFZL.js";import{a as w,b as U}from"./chunk-JNUBCW5H.js";import{a as y,b as T}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b as v,f as b,i as g,u as M}from"./chunk-CTI5WBER.js";import"./chunk-EZDHLOD5.js";import{b as V}from"./chunk-FKOOMXTU.js";import{a as C}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as P}from"./chunk-XCUGNKAG.js";import{a as x,b as W}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as _}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as a,Gb as l,Hb as u,Qa as p,gb as m,hc as n,mc as s,nc as c,oc as f,sc as A}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var B=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["float-label-accessibility-doc"]],decls:9,vars:0,template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),l(),a(3,"p"),n(4,"FloatLabel does not require any roles and attributes."),l(),a(5,"h3"),n(6,"Keyboard Support"),l(),a(7,"p"),n(8,"Component does not include any interactive elements."),l()())},dependencies:[x],encapsulation:2})}return e})();var N=(()=>{class e{value;code={basic:`<p-floatlabel>
    <input id="username" pInputText [(ngModel)]="value" />
    <label for="username">Username</label>
</p-floatlabel>`,html:`<div class="card flex justify-center">
    <p-floatlabel>
        <input id="username" pInputText [(ngModel)]="value" />
        <label for="username">Username</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'float-label-basic-demo',
    templateUrl: './float-label-basic-demo.html',
    standalone: true,
    imports: [FloatLabelModule, InputTextModule, FormsModule]
})
export class FloatLabelBasicDemo {
    value: string | undefined;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["id","username","pInputText","","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","float-label-basic-demo",3,"code"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"FloatLabel is used by wrapping the input and its label."),l()(),a(3,"div",0)(4,"p-floatlabel")(5,"input",1),f("ngModelChange",function(i){return c(t.value,i)||(t.value=i),i}),l(),a(6,"label",2),n(7,"Username"),l()()(),u(8,"app-code",3)),o&2&&(p(5),s("ngModel",t.value),p(3),r("code",t.code))},dependencies:[M,v,b,g,C,x,h,D,T,y],encapsulation:2})}return e})();var j=(()=>{class e{code={typescript:"import { FloatLabelModule } from 'primeng/floatlabel';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["float-label-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&u(0,"app-code",0),o&2&&r("code",t.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2})}return e})();var O=(()=>{class e{value1;value2;value3;code={basic:`<p-floatlabel>
    <input pInputText id="value1" [(ngModel)]="value1" [invalid]="!value1" autocomplete="off" />
    <label for="value1">Username</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="value2" [(ngModel)]="value2" [invalid]="!value2" autocomplete="off" />
    <label for="value2">Username</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="value3" [(ngModel)]="value3" [invalid]="!value3" autocomplete="off" />
    <label for="value3">Username</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <input pInputText id="value1" [(ngModel)]="value1" [invalid]="!value1" autocomplete="off" />
        <label for="value1">Username</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <input pInputText id="value2" [(ngModel)]="value2" [invalid]="!value2" autocomplete="off" />
        <label for="value2">Username</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <input pInputText id="value3" [(ngModel)]="value3" [invalid]="!value3" autocomplete="off" />
        <label for="value3">Username</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'float-label-invalid-demo',
    templateUrl: './float-label-invalid-demo.html',
    standalone: true,
    imports: [FloatLabelModule, InputTextModule, FormsModule]
})
export class FloatLabelInvalidDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["invalid-doc"]],decls:17,vars:7,consts:[[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["pInputText","","id","value1","autocomplete","off",3,"ngModelChange","ngModel","invalid"],["for","value1"],["variant","in"],["pInputText","","id","value2","autocomplete","off",3,"ngModelChange","ngModel","invalid"],["for","value2"],["variant","on"],["pInputText","","id","value3","autocomplete","off",3,"ngModelChange","ngModel","invalid"],["for","value3"],["selector","float-label-invalid-demo",3,"code"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"When the form element is invalid, the label is also highlighted."),l()(),a(3,"div",0)(4,"p-floatlabel")(5,"input",1),f("ngModelChange",function(i){return c(t.value1,i)||(t.value1=i),i}),l(),a(6,"label",2),n(7,"Username"),l()(),a(8,"p-floatlabel",3)(9,"input",4),f("ngModelChange",function(i){return c(t.value2,i)||(t.value2=i),i}),l(),a(10,"label",5),n(11,"Username"),l()(),a(12,"p-floatlabel",6)(13,"input",7),f("ngModelChange",function(i){return c(t.value3,i)||(t.value3=i),i}),l(),a(14,"label",8),n(15,"Username"),l()()(),u(16,"app-code",9)),o&2&&(p(5),s("ngModel",t.value1),r("invalid",!t.value1),p(4),s("ngModel",t.value2),r("invalid",!t.value2),p(4),s("ngModel",t.value3),r("invalid",!t.value3),p(3),r("code",t.code))},dependencies:[M,v,b,g,C,x,h,D,T,y],encapsulation:2})}return e})();var k=(()=>{class e{value1;value2;code={basic:`<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel variant="in">
        <input pInputText id="in_label" [(ngModel)]="value1" autocomplete="off" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <input pInputText id="on_label" [(ngModel)]="value2" autocomplete="off" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'float-label-variants-demo',
    templateUrl: './float-label-variants-demo.html',
    standalone: true,
    imports: [FloatLabelModule, InputTextModule, FormsModule]
})
export class FloatLabelVariantsDemo {
    value1: string | undefined;

    value2: string | undefined;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["variants-doc"]],decls:25,vars:3,consts:[[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["variant","in"],["pInputText","","id","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","float-label-variants-demo",3,"code"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),n(2,"The "),a(3,"i"),n(4,"variant"),l(),n(5," property defines the position of the label. Default value is "),a(6,"i"),n(7,"over"),l(),n(8,", whereas "),a(9,"i"),n(10,"in"),l(),n(11," and "),a(12,"i"),n(13,"on"),l(),n(14," are the alternatives."),l()(),a(15,"div",0)(16,"p-floatlabel",1)(17,"input",2),f("ngModelChange",function(i){return c(t.value1,i)||(t.value1=i),i}),l(),a(18,"label",3),n(19,"In Label"),l()(),a(20,"p-floatlabel",4)(21,"input",5),f("ngModelChange",function(i){return c(t.value2,i)||(t.value2=i),i}),l(),a(22,"label",6),n(23,"On Label"),l()()(),u(24,"app-code",7)),o&2&&(p(17),s("ngModel",t.value1),p(4),s("ngModel",t.value2),p(3),r("code",t.code))},dependencies:[M,v,b,g,C,x,h,D,T,y],encapsulation:2})}return e})();var q=(()=>{class e{value=null;docs=[{data:w("FloatLabel"),key:"FloatLabel"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["floatlabel-pt-viewer"]],decls:5,vars:2,consts:[[3,"docs"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"]],template:function(o,t){o&1&&(a(0,"app-docptviewer",0)(1,"p-floatlabel")(2,"input",1),f("ngModelChange",function(i){return c(t.value,i)||(t.value=i),i}),l(),a(3,"label",2),n(4,"Username"),l()()()),o&2&&(r("docs",t.docs),p(2),s("ngModel",t.value))},dependencies:[_,M,v,b,g,U,h,D,T,y],encapsulation:2})}return e})();var K=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:q},{id:"pt.doc.floatlabel",label:"FloatLabel PT Options",component:W,data:w("FloatLabel")}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["floatlabel-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,t){o&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),n(3,"FloatLabel Pass Through"),l()(),u(4,"app-docsection",2),l()),o&2&&(p(4),r("docs",t.docs))},dependencies:[_,P],encapsulation:2})}return e})();var z=()=>["FloatLabel"],R=(()=>{class e{ptComponent=K;docs=[{id:"import",label:"Import",component:j},{id:"basic",label:"Basic",component:N},{id:"variants",label:"Variants",component:k},{id:"invalid",label:"Invalid",component:O},{id:"accessibility",label:"Accessibility",component:B}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Float Label Component","header","FloatLabel","description","FloatLabel appears on top of the input field when focused.","themeDocs","floatlabel",3,"docs","ptDocs","apiDocs"]],template:function(o,t){o&1&&u(0,"app-doc",0),o&2&&r("docs",t.docs)("ptDocs",t.ptComponent)("apiDocs",A(3,z))},dependencies:[V],encapsulation:2})}return e})();var Ve=[{path:"",component:R}];export{Ve as default};
