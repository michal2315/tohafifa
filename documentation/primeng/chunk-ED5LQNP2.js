import{a as E,b as k,c as W,d as N}from"./chunk-APBUBGZC.js";import{a as S,b as B}from"./chunk-RTRG5JID.js";import{a as D,b as w}from"./chunk-J65EHHFF.js";import"./chunk-27JIZF5R.js";import{a as A,b as _}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b as x,f as b,i as T,u as h}from"./chunk-CTI5WBER.js";import{b as P}from"./chunk-FKOOMXTU.js";import{a as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as L}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as v,h as F,ha as I,i as C}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import"./chunk-D2XKNHFS.js";import{Eb as l,Fb as n,Gb as p,Hb as c,Qa as m,gb as a,hc as u,mc as d,nc as s,oc as f,sc as y}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var O=(()=>{class e{name="";email="";accept=!1;code={basic:`<div pFocusTrap class="w-full sm:w-80 flex flex-col gap-6">
    <p-iconfield>
        <p-inputicon>
            <i class="pi pi-user"></i>
        </p-inputicon>
        <input type="text" pInputText id="input" [(ngModel)]="name" type="text" placeholder="Name" [pAutoFocus]="true" [fluid]="true" />
    </p-iconfield>

    <p-iconfield>
        <p-inputicon>
            <i class="pi pi-envelope"> </i>
        </p-inputicon>
        <input type="text" pInputText id="email" [(ngModel)]="email" type="email" placeholder="Email" [fluid]="true" />
    </p-iconfield>

    <div class="flex items-center gap-2">
        <p-checkbox id="accept" [(ngModel)]="accept" name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
    </div>

    <p-button type="submit" label="Submit" class="mt-2" styleClass="w-full" />
</div>`,html:` <div class="card flex justify-center">
    <div pFocusTrap class="w-full sm:w-80 flex flex-col gap-6">
        <p-iconfield>
            <p-inputicon>
                <i class="pi pi-user"></i>
            </p-inputicon>
            <input type="text" pInputText id="input" [(ngModel)]="name" type="text" placeholder="Name" [pAutoFocus]="true" [fluid]="true" />
        </p-iconfield>

        <p-iconfield>
            <p-inputicon>
                <i class="pi pi-envelope"> </i>
            </p-inputicon>
            <input type="text" pInputText id="email" [(ngModel)]="email" type="email" placeholder="Email" [fluid]="true" />
        </p-iconfield>

        <div class="flex items-center gap-2">
            <p-checkbox id="accept" [(ngModel)]="accept" name="accept" value="Accept" />
            <label for="accept">I agree to the terms and conditions.</label>
        </div>

        <p-button type="submit" label="Submit" class="mt-2" styleClass="w-full" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FocusTrapModule } from 'primeng/focustrap';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';

@Component({
    selector: 'focus-trap-basic-demo',
    templateUrl: './focus-trap-basic-demo.html',
    standalone: true,
    imports: [FocusTrapModule, ButtonModule, FormsModule, InputTextModule, CheckboxModule, IconFieldModule, InputIconModule, AutoFocusModule]
})
export class FocusTrapBasicDemo {
    name: string = '';

    email: string = '';

    accept: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["focus-trap-basic-demo"]],decls:22,vars:7,consts:[[1,"card","flex","justify-center"],["pFocusTrap","",1,"w-full","sm:w-80","flex","flex-col","gap-6"],[1,"pi","pi-user"],["type","text","pInputText","","id","input","type","text","placeholder","Name",3,"ngModelChange","ngModel","pAutoFocus","fluid"],[1,"pi","pi-envelope"],["type","text","pInputText","","id","email","type","email","placeholder","Email",3,"ngModelChange","ngModel","fluid"],[1,"flex","items-center","gap-2"],["id","accept","name","accept","value","Accept",3,"ngModelChange","ngModel"],["for","accept"],["type","submit","label","Submit","styleClass","w-full",1,"mt-2"],["selector","focus-trap-basic-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),u(2,"FocusTrap is applied to a container element with the "),n(3,"i"),u(4,"pFocusTrap"),p(),u(5," directive."),p()(),n(6,"div",0)(7,"div",1)(8,"p-iconfield")(9,"p-inputicon"),c(10,"i",2),p(),n(11,"input",3),f("ngModelChange",function(i){return s(o.name,i)||(o.name=i),i}),p()(),n(12,"p-iconfield")(13,"p-inputicon"),c(14,"i",4),p(),n(15,"input",5),f("ngModelChange",function(i){return s(o.email,i)||(o.email=i),i}),p()(),n(16,"div",6)(17,"p-checkbox",7),f("ngModelChange",function(i){return s(o.accept,i)||(o.accept=i),i}),p(),n(18,"label",8),u(19,"I agree to the terms and conditions."),p()(),c(20,"p-button",9),p()(),c(21,"app-code",10)),t&2&&(m(11),d("ngModel",o.name),l("pAutoFocus",!0)("fluid",!0),m(4),d("ngModel",o.email),l("fluid",!0),m(2),d("ngModel",o.accept),m(4),l("code",o.code))},dependencies:[h,x,b,T,g,L,C,F,I,v,B,S,w,D,k,E,N,W,_,A],encapsulation:2})}return e})();var U=(()=>{class e{code={typescript:"import { FocusTrapModule } from 'primeng/focustrap';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["focus-trap-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&c(0,"app-code",0),t&2&&l("code",o.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return e})();var q=()=>["FocusTrap"],V=(()=>{class e{docs=[{id:"import",label:"Import",component:U},{id:"basic",label:"Basic",component:O}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Focus Trap Component","header","Focus Trap","description","Focus Trap keeps focus within a certain DOM element while tabbing.",3,"docs","apiDocs"]],template:function(t,o){t&1&&c(0,"app-doc",0),t&2&&l("docs",o.docs)("apiDocs",y(2,q))},dependencies:[P],encapsulation:2})}return e})();var ge=[{path:"",component:V}];export{ge as default};
