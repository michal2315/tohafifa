import{a as y,b as D}from"./chunk-JNUBCW5H.js";import{a as f,b as x}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import"./chunk-CTI5WBER.js";import"./chunk-EZDHLOD5.js";import{b as g}from"./chunk-FKOOMXTU.js";import{a as b}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as F}from"./chunk-XCUGNKAG.js";import{a as v,b as h}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{j as u,k as T}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as s}from"./chunk-D2XKNHFS.js";import{Eb as m,Fb as n,Gb as t,Hb as p,Qa as c,gb as l,hc as o}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var C=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["fluid-accessibility-doc"]],decls:9,vars:0,template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),t(),n(3,"p"),o(4,"Fluid does not require any roles and attributes."),t(),n(5,"h3"),o(6,"Keyboard Support"),t(),n(7,"p"),o(8,"Component does not include any interactive elements."),t()())},dependencies:[v],encapsulation:2})}return e})();var S=(()=>{class e{code={basic:`<div>
    <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
    <input type="text" pInputText id="non-fluid" />
</div>
<div>
    <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
    <input type="text" pInputText id="fluid" fluid />
</div>
<p-fluid>
    <span class="font-bold mb-2 block">Fluid Container</span>
    <div class="grid grid-cols-2 gap-4">
        <div><input type="text" pInputText /></div>
        <div><input type="text" pInputText /></div>
        <div class="col-span-full"><input type="text" pInputText /></div>
        <div><input type="text" pInputText [fluid]="false" placeholder="Non-Fluid" /></div>
    </div>
</p-fluid>`,html:`<div class="card flex flex-col gap-6">
    <div>
        <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
        <input type="text" pInputText id="non-fluid" />
    </div>
    <div>
        <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
        <input type="text" pInputText id="fluid" fluid />
    </div>
    <p-fluid>
        <span class="font-bold mb-2 block">Fluid Container</span>
        <div class="grid grid-cols-2 gap-4">
            <div><input type="text" pInputText /></div>
            <div><input type="text" pInputText /></div>
            <div class="col-span-full"><input type="text" pInputText /></div>
            <div><input type="text" pInputText [fluid]="false" placeholder="Non-Fluid" /></div>
        </div>
    </p-fluid>
</div>`,typescript:`import { Component } from '@angular/core';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'fluid-basic-demo',
    templateUrl: './fluid-basic-demo.html',
    standalone: true,
    imports: [Fluid]
})
export class FluidBasicDemo {

}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["basic-doc"]],decls:48,vars:2,consts:[[1,"card","flex","flex-col","gap-6"],["for","non-fluid",1,"font-bold","mb-2","block"],["type","text","pInputText","","id","non-fluid"],["for","fluid",1,"font-bold","mb-2","block"],["type","text","pInputText","","id","fluid","fluid",""],[1,"font-bold","mb-2","block"],[1,"grid","grid-cols-2","gap-4"],["type","text","pInputText",""],[1,"col-span-full"],["type","text","pInputText","","placeholder","Non-Fluid",3,"fluid"],["selector","fluid-basic-demo",3,"code"]],template:function(i,r){i&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," Components with the "),n(3,"i"),o(4,"fluid"),t(),o(5," option like "),n(6,"i"),o(7,"InputText"),t(),o(8," have the ability to span the full width of their component. Enabling the "),n(9,"i"),o(10,"fluid"),t(),o(11," for each component individually may be cumbersome so wrap the content with "),n(12,"i"),o(13,"Fluid"),t(),o(14," to instead for an easier alternative. "),t(),n(15,"p"),o(16,"Any component that has the "),n(17,"i"),o(18,"fluid"),t(),o(19," property can be nested inside the "),n(20,"i"),o(21,"Fluid"),t(),o(22," component. The "),n(23,"i"),o(24,"fluid"),t(),o(25," property of a child component has higher precedence than the fluid container as shown in the last sample."),t()(),n(26,"div",0)(27,"div")(28,"label",1),o(29,"Non-Fluid"),t(),p(30,"input",2),t(),n(31,"div")(32,"label",3),o(33,"Fluid Prop"),t(),p(34,"input",4),t(),n(35,"p-fluid")(36,"span",5),o(37,"Fluid Container"),t(),n(38,"div",6)(39,"div"),p(40,"input",7),t(),n(41,"div"),p(42,"input",7),t(),n(43,"div",8),p(44,"input",7),t(),n(45,"div"),p(46,"input",9),t()()()(),p(47,"app-code",10)),i&2&&(c(46),m("fluid",!1),c(),m("code",r.code))},dependencies:[b,v,u,x,f],encapsulation:2})}return e})();var E=(()=>{class e{code={typescript:"import { FluidModule } from 'primeng/fluid';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["fluid-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,r){i&1&&p(0,"app-code",0),i&2&&m("code",r.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2})}return e})();var I=(()=>{class e{docs=[{data:y("Fluid"),key:"Fluid"}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["fluid-pt-viewer"]],decls:3,vars:1,consts:[[3,"docs"],["type","text","pInputText",""]],template:function(i,r){i&1&&(n(0,"app-docptviewer",0)(1,"p-fluid"),p(2,"input",1),t()()),i&2&&m("docs",r.docs)},dependencies:[s,D,T,u,x,f],encapsulation:2})}return e})();var w=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:I},{id:"pt.doc.fluid",label:"Fluid PT Options",component:h,data:y("Fluid")}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["fluid-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),o(3,"Fluid Pass Through"),t()(),p(4,"app-docsection",2),t()),i&2&&(c(4),m("docs",r.docs))},dependencies:[s,F],encapsulation:2})}return e})();var M=(()=>{class e{ptComponent=w;docs=[{id:"import",label:"Import",component:E},{id:"basic",label:"Basic",component:S},{id:"accessibility",label:"Accessibility",component:C}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:2,consts:[["docTitle","Angular Fluid Component","header","Fluid","description","Fluid is a layout component to make descendant components span full width of their container.","themeDocs","fluid",3,"docs","ptDocs"]],template:function(i,r){i&1&&p(0,"app-doc",0),i&2&&m("docs",r.docs)("ptDocs",r.ptComponent)},dependencies:[g],encapsulation:2})}return e})();var pe=[{path:"",component:M}];export{pe as default};
