import{a as M,b}from"./chunk-H3G2323E.js";import{a as se,b as de}from"./chunk-E5KER2I6.js";import{a as ge,b as ve}from"./chunk-ZYT4LGUE.js";import{a as ue,b as fe}from"./chunk-2SUSAFZL.js";import{a as Q,b as we}from"./chunk-JNUBCW5H.js";import"./chunk-66742H4U.js";import{a as O,b as K}from"./chunk-N3SKU25W.js";import{a as H,b as J}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as oe,f as v,g as j,h as te,i as y,j as z,k as ae,l as ie,p as re,t as le,u as h,v as ne}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ce}from"./chunk-FKOOMXTU.js";import{a as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as pe}from"./chunk-XCUGNKAG.js";import{a as w,b as me}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as V,h as R}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as U,fa as q,ha as G}from"./chunk-MCW4FHXZ.js";import{za as F}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as N}from"./chunk-D2XKNHFS.js";import{$a as Z,Ab as W,Eb as s,Fb as a,Gb as i,Gc as Y,Hb as m,Ob as A,Qa as n,Sb as I,X as L,aa as P,ba as T,cc as k,gb as p,hc as t,mb as $,mc as c,nc as u,oc as f,rc as B,sc as ee,zb as E}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Me=(()=>{class e{code={basic:`<label for="pwd1">Password</label>
<p-password inputId="pwd1" />

<span id="pwd2">Password</span>
<p-password ariaLabelledBy="pwd2" />

<p-password ariaLabel="Password" />`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["password-accessibility-doc"]],decls:45,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,o){r&1&&(a(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),a(4,"p"),t(5," Value to describe the component can either be provided via "),a(6,"i"),t(7,"label"),i(),t(8," tag combined with "),a(9,"i"),t(10,"id"),i(),t(11," prop or using "),a(12,"i"),t(13,"ariaLabelledBy"),i(),t(14,", "),a(15,"i"),t(16,"ariaLabel"),i(),t(17," props. Screen reader is notified about the changes to the strength of the password using a section that has "),a(18,"i"),t(19,"aria-live"),i(),t(20," while typing. "),i()(),m(21,"app-code",0),a(22,"h3"),t(23,"Keyboard Support"),i(),a(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),t(29,"Key"),i(),a(30,"th"),t(31,"Function"),i()()(),a(32,"tbody")(33,"tr")(34,"td")(35,"i"),t(36,"tab"),i()(),a(37,"td"),t(38,"Moves focus to the input."),i()(),a(39,"tr")(40,"td")(41,"i"),t(42,"escape"),i()(),a(43,"td"),t(44,"Hides the strength meter if open."),i()()()()()()),r&2&&(n(21),s("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[g,w],encapsulation:2})}return e})();var be=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" [feedback]="false" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [feedback]="false" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-basic-demo',
    templateUrl: './password-basic-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordBasicDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["basic-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel","feedback"],["selector","password-basic-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Two-way value binding is defined using "),a(3,"i"),t(4,"ngModel"),i(),t(5,"."),i()(),a(6,"div",0)(7,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(8,"app-code",2)),r&2&&(n(7),c("ngModel",o.value),s("feedback",!1),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var ye=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" [disabled]="true" placeholder="Disabled" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [disabled]="true" placeholder="Disabled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-disabled-demo',
    templateUrl: './password-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordDisabledDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["placeholder","Disabled","autocomplete","off",3,"ngModelChange","ngModel","disabled"],["selector","password-disabled-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"When "),a(3,"i"),t(4,"disabled"),i(),t(5," is present, the element cannot be edited and focused."),i()(),a(6,"div",0)(7,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(8,"app-code",2)),r&2&&(n(7),c("ngModel",o.value),s("disabled",!0),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var he=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" [feedback]="false" variant="filled" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [feedback]="false" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-filled-demo',
    templateUrl: './password-filled-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordFilledDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["filled-doc"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled","autocomplete","off",3,"ngModelChange","ngModel","feedback"],["selector","password-filled-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Specify the "),a(3,"i"),t(4,"variant"),i(),t(5," property as "),a(6,"i"),t(7,"filled"),i(),t(8," to display the component with a higher visual emphasis than the default "),a(9,"i"),t(10,"outlined"),i(),t(11," style."),i()(),a(12,"div",0)(13,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(14,"app-code",2)),r&2&&(n(13),c("ngModel",o.value),s("feedback",!1),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var Se=(()=>{class e{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-password [(ngModel)]="value1" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-password [(ngModel)]="value2" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-password [(ngModel)]="value3" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-password [(ngModel)]="value1" inputId="over_label" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-password [(ngModel)]="value2" inputId="in_label" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-password [(ngModel)]="value3" inputId="on_label" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'password-floatlabel-demo',
    templateUrl: './password-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, FloatLabelModule]
})
export class PasswordFloatlabelDemo {
    value1!: string;

    value2!: string;

    value3!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["floatlabel-doc"]],decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["inputId","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["inputId","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","password-floatlabel-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2," A floating label appears on top of the input field when focused. Visit "),a(3,"a",0),t(4,"FloatLabel"),i(),t(5," documentation for more information. "),i()(),a(6,"div",1)(7,"p-floatlabel")(8,"p-password",2),f("ngModelChange",function(l){return u(o.value1,l)||(o.value1=l),l}),i(),a(9,"label",3),t(10,"Over Label"),i()(),a(11,"p-floatlabel",4)(12,"p-password",5),f("ngModelChange",function(l){return u(o.value2,l)||(o.value2=l),l}),i(),a(13,"label",6),t(14,"In Label"),i()(),a(15,"p-floatlabel",7)(16,"p-password",8),f("ngModelChange",function(l){return u(o.value3,l)||(o.value3=l),l}),i(),a(17,"label",9),t(18,"On Label"),i()()(),m(19,"app-code",10)),r&2&&(n(8),c("ngModel",o.value1),n(4),c("ngModel",o.value2),n(4),c("ngModel",o.value3),n(3),s("code",o.code))},dependencies:[h,v,y,R,V,b,M,fe,ue,g,w],encapsulation:2})}return e})();var Ce=(()=>{class e{value;code={basic:`<p-iftalabel>
    <p-password [(ngModel)]="value" inputId="password" />
    <label for="password">Password</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-password [(ngModel)]="value" inputId="password" />
        <label for="password">Password</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'password-iftalabel-demo',
    templateUrl: './password-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, IftaLabelModule]
})
export class PasswordIftaLabelDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["iftalabel-doc"]],decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","password","autocomplete","off",3,"ngModelChange","ngModel"],["for","password"],["selector","password-iftalabel-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"IftaLabel is used to create infield top aligned labels. Visit "),a(3,"a",0),t(4,"IftaLabel"),i(),t(5," documentation for more information."),i()(),a(6,"div",1)(7,"p-iftalabel")(8,"p-password",2),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i(),a(9,"label",3),t(10,"Password"),i()()(),m(11,"app-code",4)),r&2&&(n(8),c("ngModel",o.value),n(3),s("code",o.code))},dependencies:[h,v,y,R,V,b,M,ve,ge,g,w],encapsulation:2})}return e})();var xe=(()=>{class e{code={typescript:"import { PasswordModule } from 'primeng/password';"};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["password-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,o){r&1&&m(0,"app-code",0),r&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return e})();var De=(()=>{class e{value1;value2;code={basic:`<p-password [(ngModel)]="value1" [invalid]="!value1" placeholder="Password" />
<p-password [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Password" />`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-password [(ngModel)]="value1" [invalid]="!value1" placeholder="Password" />
    <p-password [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Password" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-invalid-demo',
    templateUrl: './password-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordInvalidDemo {
    value1!: string;

    value2!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["invalid-doc"]],decls:10,vars:5,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["placeholder","Password",3,"ngModelChange","ngModel","invalid"],["variant","filled","placeholder","Password",3,"ngModelChange","ngModel","invalid"],["selector","password-invalid-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"The invalid state is applied using the "),a(3,"i"),t(4,"\u2060invalid"),i(),t(5," property to indicate failed validation, which can be integrated with Angular Forms."),i()(),a(6,"div",0)(7,"p-password",1),f("ngModelChange",function(l){return u(o.value1,l)||(o.value1=l),l}),i(),a(8,"p-password",2),f("ngModelChange",function(l){return u(o.value2,l)||(o.value2=l),l}),i()(),m(9,"app-code",3)),r&2&&(n(7),c("ngModel",o.value1),s("invalid",!o.value1),n(),c("ngModel",o.value2),s("invalid",!o.value2),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var _e=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-locale-demo',
    templateUrl: './password-locale-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordLocaleDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["locale-doc"]],decls:20,vars:2,consts:[["href","/configuration/#locale"],[1,"card","flex","justify-center"],["promptLabel","Choose a password","weakLabel","Too simple","mediumLabel","Average complexity","strongLabel","Complex password","autocomplete","off",3,"ngModelChange","ngModel"],["selector","password-locale-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2," Labels are translated at component level by "),a(3,"i"),t(4,"promptLabel"),i(),t(5,", "),a(6,"i"),t(7,"weakLabel"),i(),t(8,", "),a(9,"i"),t(10,"mediumLabel"),i(),t(11," and "),a(12,"i"),t(13,"strongLabel"),i(),t(14," properties. In order to apply global translations for all Password components in the application, refer to the "),a(15,"a",0),t(16,"locale"),i()()(),a(17,"div",1)(18,"p-password",2),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(19,"app-code",3)),r&2&&(n(18),c("ngModel",o.value),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var Fe=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-meter-demo',
    templateUrl: './password-meter-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordMeterDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["meter-doc"]],decls:6,vars:2,consts:[[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel"],["selector","password-meter-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Strength meter is displayed as a popup while a value is being entered."),i()(),a(3,"div",0)(4,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(5,"app-code",2)),r&2&&(n(4),c("ngModel",o.value),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();function Ue(e,X){e&1&&(a(0,"p-message",4),t(1,"Password is required."),i())}var Pe=(()=>{class e{fb;messageService=L(F);exampleForm;formSubmitted=!1;constructor(d){this.fb=d,this.exampleForm=this.fb.group({value:["",oe.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(d){let r=this.exampleForm.get(d);return r?.invalid&&(r.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-password formControlName="value" [invalid]="isInvalid('value')" [feedback]="false" autocomplete="off" fluid />

        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
        <div class="flex flex-col gap-1">
            <p-password formControlName="value" [invalid]="isInvalid('value')" [feedback]="false" autocomplete="off" fluid />

            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'password-reactive-forms-demo',
    templateUrl: './password-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, PasswordModule, MessageModule, ToastModule, ButtonModule]
})
export class PasswordReactiveFormsDemo {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            value: ['', Validators.required]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}`};static \u0275fac=function(r){return new(r||e)(Z(le))};static \u0275cmp=p({type:e,selectors:[["reactive-forms-doc"]],features:[B([F])],decls:16,vars:5,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","sm:w-56",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","value","autocomplete","off","fluid","",3,"invalid","feedback"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","password-reactive-forms-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Password can also be used with reactive forms. In this case, the "),a(3,"i"),t(4,"formControlName"),i(),t(5," property is used to bind the component to a form control."),i()(),m(6,"p-toast"),a(7,"div",0)(8,"form",1),I("ngSubmit",function(){return o.onSubmit()}),a(9,"div",2),m(10,"p-password",3),E(11,Ue,2,0,"p-message",4),i(),a(12,"button",5)(13,"span",6),t(14,"Submit"),i()()()(),m(15,"app-code",7)),r&2&&(n(8),s("formGroup",o.exampleForm),n(2),s("invalid",o.isInvalid("value"))("feedback",!1),n(),W(o.isInvalid("value")?11:-1),n(4),s("code",o.code))},dependencies:[ne,z,v,j,ae,ie,b,M,G,q,U,J,H,K,O,g,w],encapsulation:2})}return e})();var Te=(()=>{class e{value1;value2;value3;code={basic:`<p-password [(ngModel)]="value1" type="text" size="small" placeholder="Small" />
<p-password [(ngModel)]="value2" type="text" placeholder="Normal" />
<p-password [(ngModel)]="value3" type="text" size="large" placeholder="Large" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-password [(ngModel)]="value1" type="text" size="small" placeholder="Small" />
    <p-password [(ngModel)]="value2" type="text" placeholder="Normal" />
    <p-password [(ngModel)]="value3" type="text" size="large" placeholder="Large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-sizes-demo',
    templateUrl: './password-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordSizesDemo {
    value1: string;

    value2: string;

    value3: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["type","text","size","small","placeholder","Small",3,"ngModelChange","ngModel"],["type","text","placeholder","Normal",3,"ngModelChange","ngModel"],["type","text","size","large","placeholder","Large",3,"ngModelChange","ngModel"],["selector","password-sizes-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"Password provides "),a(3,"i"),t(4,"small"),i(),t(5," and "),a(6,"i"),t(7,"large"),i(),t(8," sizes as alternatives to the base."),i()(),a(9,"div",0)(10,"p-password",1),f("ngModelChange",function(l){return u(o.value1,l)||(o.value1=l),l}),i(),a(11,"p-password",2),f("ngModelChange",function(l){return u(o.value2,l)||(o.value2=l),l}),i(),a(12,"p-password",3),f("ngModelChange",function(l){return u(o.value3,l)||(o.value3=l),l}),i()(),m(13,"app-code",4)),r&2&&(n(10),c("ngModel",o.value1),n(),c("ngModel",o.value2),n(),c("ngModel",o.value3),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();function qe(e,X){e&1&&(a(0,"div",5),t(1,"Reset Password"),i())}function Ge(e,X){e&1&&(m(0,"p-divider"),a(1,"ul",6)(2,"li"),t(3,"At least one lowercase"),i(),a(4,"li"),t(5,"At least one uppercase"),i(),a(6,"li"),t(7,"At least one numeric"),i(),a(8,"li"),t(9,"Minimum 8 characters"),i()())}var Le=(()=>{class e{value;code={basic:`<p-password [(ngModel)]="value" autocomplete="off">
    <ng-template #header>
        <div class="font-semibold text-xm mb-4">Reset Password</div>
    </ng-template>
    <ng-template #footer>
        <p-divider />
        <ul class="pl-2 my-0 leading-normal">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </ng-template>
</p-password>`,html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" autocomplete="off">
        <ng-template #header>
            <div class="font-semibold text-xm mb-4">Reset Password</div>
        </ng-template>
        <ng-template #footer>
            <p-divider />
            <ul class="pl-2 my-0 leading-normal">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </ng-template>
    </p-password>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'password-template-demo',
    templateUrl: './password-template-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, DividerModule]
})
export class PasswordTemplateDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["template-doc"]],decls:19,vars:2,consts:[["header",""],["footer",""],[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel"],["selector","password-template-demo",3,"code"],[1,"font-semibold","text-xm","mb-4"],[1,"pl-2","my-0","leading-normal","text-sm"]],template:function(r,o){if(r&1){let S=A();a(0,"app-docsectiontext")(1,"p"),t(2,"3 templates are included to customize the overlay. These are "),a(3,"i"),t(4,"header"),i(),t(5,", "),a(6,"i"),t(7,"content"),i(),t(8," and "),a(9,"i"),t(10,"footer"),i(),t(11,". Note that content overrides the default meter."),i()(),a(12,"div",2)(13,"p-password",3),f("ngModelChange",function(_){return P(S),u(o.value,_)||(o.value=_),T(_)}),$(14,qe,2,0,"ng-template",null,0,Y)(16,Ge,10,0,"ng-template",null,1,Y),i()(),m(18,"app-code",4)}r&2&&(n(13),c("ngModel",o.value),n(5),s("code",o.code))},dependencies:[h,v,y,b,M,de,se,g,w],encapsulation:2})}return e})();function Oe(e,X){e&1&&(a(0,"p-message",6),t(1,"Password is required."),i())}var Ee=(()=>{class e{messageService=L(F);value;onSubmit(d){d.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),d.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-password #model="ngModel" [(ngModel)]="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="password" [feedback]="false" autocomplete="off" required fluid />

        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
        <div class="flex flex-col gap-1">
            <p-password #model="ngModel" [(ngModel)]="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="password" [feedback]="false" autocomplete="off" required fluid />

            @if (model.invalid && (model.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Password is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'password-template-driven-forms-demo',
    templateUrl: './password-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    value: any;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["template-driven-forms-doc"]],features:[B([F])],decls:13,vars:5,consts:[["exampleForm","ngForm"],["model","ngModel"],[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4","md:w-56",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","password","autocomplete","off","required","","fluid","",3,"ngModelChange","ngModel","invalid","feedback"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","password-template-driven-forms-demo",3,"code"]],template:function(r,o){if(r&1){let S=A();m(0,"app-docsectiontext")(1,"p-toast"),a(2,"div",2)(3,"form",3,0),I("ngSubmit",function(){P(S);let _=k(4);return T(o.onSubmit(_))}),a(5,"div",4)(6,"p-password",5,1),f("ngModelChange",function(_){return P(S),u(o.value,_)||(o.value=_),T(_)}),i(),E(8,Oe,2,0,"p-message",6),i(),a(9,"button",7)(10,"span",8),t(11,"Submit"),i()()()(),m(12,"app-code",9)}if(r&2){let S=k(4),l=k(7);n(6),c("ngModel",o.value),s("invalid",l.invalid&&(l.touched||S.submitted))("feedback",!1),n(2),W(l.invalid&&(l.touched||S.submitted)?8:-1),n(4),s("code",o.code)}},dependencies:[h,z,v,j,re,y,te,b,M,G,q,U,J,H,K,O,g,w],encapsulation:2})}return e})();var We=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" [toggleMask]="true" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [toggleMask]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-toggle-mask-demo',
    templateUrl: './password-toggle-mask-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordToggleMaskDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["togglemask-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["autocomplete","off",3,"ngModelChange","ngModel","toggleMask"],["selector","password-toggle-mask-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"When "),a(3,"i"),t(4,"toggleMask"),i(),t(5," is present, an icon is displayed to show the value as plain text."),i()(),a(6,"div",0)(7,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(8,"app-code",2)),r&2&&(n(7),c("ngModel",o.value),s("toggleMask",!0),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var Ae=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" [feedback]="false" fluid />',html:`<div class="card">
    <p-password [(ngModel)]="value" [feedback]="false" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-fluid-demo',
    templateUrl: './password-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordFluidDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["fluid-doc"]],decls:6,vars:3,consts:[[1,"card"],["autocomplete","off","fluid","",3,"ngModelChange","ngModel","feedback"],["selector","password-fluid-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"The fluid prop makes the component take up the full width of its container when set to true."),i()(),a(3,"div",0)(4,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(5,"app-code",2)),r&2&&(n(4),c("ngModel",o.value),s("feedback",!1),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var Ie=(()=>{class e{value;code={basic:'<p-password [(ngModel)]="value" [feedback]="false" autocomplete="off" [showClear]="true" inputStyleClass="w-56" />',html:`<div class="card flex justify-center">
    <p-password [(ngModel)]="value" [feedback]="false" autocomplete="off" [showClear]="true" inputStyleClass="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-clear-icon-demo',
    templateUrl: './password-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordClearIconDemo {
    value!: string;
}`};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["clear-icon-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["autocomplete","off","inputStyleClass","w-56",3,"ngModelChange","ngModel","feedback","showClear"],["selector","password-clear-icon-demo",3,"code"]],template:function(r,o){r&1&&(a(0,"app-docsectiontext")(1,"p"),t(2,"When "),a(3,"i"),t(4,"showClear"),i(),t(5," is enabled, a clear icon is displayed to clear the value."),i()(),a(6,"div",0)(7,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()(),m(8,"app-code",2)),r&2&&(n(7),c("ngModel",o.value),s("feedback",!1)("showClear",!0),n(),s("code",o.code))},dependencies:[h,v,y,b,M,g,w],encapsulation:2})}return e})();var ke=(()=>{class e{value=null;docs=[{data:Q("Password"),key:"Password"}];static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["password-pt-viewer"]],decls:2,vars:3,consts:[[3,"docs"],[3,"ngModelChange","ngModel","toggleMask"]],template:function(r,o){r&1&&(a(0,"app-docptviewer",0)(1,"p-password",1),f("ngModelChange",function(l){return u(o.value,l)||(o.value=l),l}),i()()),r&2&&(s("docs",o.docs),n(),c("ngModel",o.value),s("toggleMask",!0))},dependencies:[N,we,b,M,h,v,y],encapsulation:2})}return e})();var Be=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:ke},{id:"pt.doc.password",label:"Password PT Options",component:me,data:Q("Password")}];static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["password-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),t(3,"Password Pass Through"),i()(),m(4,"app-docsection",2),i()),r&2&&(n(4),s("docs",o.docs))},dependencies:[N,pe],encapsulation:2})}return e})();var Ke=()=>["Password","PasswordDirective"],Ne=(()=>{class e{ptComponent=Be;docs=[{id:"import",label:"Import",component:xe},{id:"basic",label:"Basic",component:be},{id:"meter",label:"Meter",component:Fe},{id:"locale",label:"Locale",component:_e},{id:"togglemask",label:"Toggle Mask",component:We},{id:"template",label:"Template",component:Le},{id:"floatlabel",label:"Float Label",component:Se},{id:"iftalabel",label:"Ifta Label",component:Ce},{id:"clearicon",label:"Clear Icon",component:Ie},{id:"sizes",label:"Sizes",component:Te},{id:"fluid",label:"Fluid",component:Ae},{id:"filled",label:"Filled",component:he},{id:"disabled",label:"Disabled",component:ye},{id:"invalid",label:"Invalid",component:De},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Ee},{id:"reactive",label:"Reactive Forms",component:Pe}]},{id:"accessibility",label:"Accessibility",component:Me}];static \u0275fac=function(r){return new(r||e)};static \u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Password Component","header","Password","description","Password displays strength indicator for password fields.","themeDocs","password",3,"docs","apiDocs","ptDocs"]],template:function(r,o){r&1&&m(0,"app-doc",0),r&2&&s("docs",o.docs)("apiDocs",ee(3,Ke))("ptDocs",o.ptComponent)},dependencies:[ce],encapsulation:2})}return e})();var Ma=[{path:"",component:Ne}];export{Ma as default};
