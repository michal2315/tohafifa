import{a as ge,b as ve}from"./chunk-ZYT4LGUE.js";import{a as ce,b as fe}from"./chunk-2SUSAFZL.js";import{a as $,b as xe}from"./chunk-JNUBCW5H.js";import{a as Q,b as X}from"./chunk-N3SKU25W.js";import{a as Y,b as Z}from"./chunk-SGEFCG26.js";import{a as y,b as T}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b,d as j,f as M,g as R,h as oe,i as h,j as k,k as ne,l as ae,p as le,q as re,t as me,u as S,v as pe}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ue}from"./chunk-FKOOMXTU.js";import{a as g,b as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as se}from"./chunk-XCUGNKAG.js";import{a as C,b as de}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as G,h as O}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as H,fa as K,ha as J}from"./chunk-MCW4FHXZ.js";import{za as U}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as q}from"./chunk-D2XKNHFS.js";import{$a as ee,Ab as L,Eb as p,Fb as n,Gb as o,Hb as d,Ob as te,Qa as r,Sb as z,Ub as P,X as B,aa as N,ba as V,cc as W,gb as s,hc as a,mc as u,nc as c,oc as f,sc as ie,zb as E}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var be=(()=>{class e{code={basic:`<label for="firstname">Firstname</label>
<input pInputText id="firstname" />

<span id="lastname">Lastname</span>
<input pInputText aria-labelledby="lastname" />

<input pInputText aria-label="Age" />`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["input-text-accessibility-doc"]],decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,t){i&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),a(3,"Screen Reader"),o(),n(4,"p"),a(5," InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),n(6,"i"),a(7,"label"),o(),a(8," tag combined with "),n(9,"i"),a(10,"id"),o(),a(11," prop or using "),n(12,"i"),a(13,"aria-labelledby"),o(),a(14,", "),n(15,"i"),a(16,"aria-label"),o(),a(17," props. "),o()(),d(18,"app-code",0),n(19,"h3"),a(20,"Keyboard Support"),o(),n(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),a(26,"Key"),o(),n(27,"th"),a(28,"Function"),o()()(),n(29,"tbody")(30,"tr")(31,"td")(32,"i"),a(33,"tab"),o()(),n(34,"td"),a(35,"Moves focus to the input."),o()()()()()()),i&2&&(r(18),p("code",t.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[v,g,C],encapsulation:2})}return e})();var Me=(()=>{class e{value;code={basic:'<input type="text" pInputText [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-basic-demo',
    templateUrl: './input-text-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextBasicDemo {
    value: string;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","",3,"ngModelChange","ngModel"],["selector","input-text-basic-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"InputText is used as a controlled input with "),n(3,"i"),a(4,"ngModel"),o(),a(5," property."),o()(),n(6,"div",0)(7,"input",1),f("ngModelChange",function(l){return c(t.value,l)||(t.value=l),l}),o()(),d(8,"app-code",2)),i&2&&(r(7),u("ngModel",t.value),r(),p("code",t.code))},dependencies:[S,b,M,h,T,y,v,g,C],encapsulation:2})}return e})();var ye=(()=>{class e{value="Disabled";code={basic:'<input pInputText [disabled]="true" [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <input pInputText [disabled]="true" [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-disabled-demo',
    templateUrl: './input-text-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextDisabledDemo {
    value: string | undefined = "Disabled"
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["pInputText","",3,"ngModelChange","disabled","ngModel"],["selector","input-text-disabled-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"When "),n(3,"i"),a(4,"disabled"),o(),a(5," is present, the element cannot be edited and focused."),o()(),n(6,"div",0)(7,"input",1),f("ngModelChange",function(l){return c(t.value,l)||(t.value=l),l}),o()(),d(8,"app-code",2)),i&2&&(r(7),p("disabled",!0),u("ngModel",t.value),r(),p("code",t.code))},dependencies:[S,b,M,h,T,y,v,g,C],encapsulation:2})}return e})();var Te=(()=>{class e{value;code={basic:'<input type="text" pInputText [(ngModel)]="value" variant="filled" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText [(ngModel)]="value" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-filled-demo',
    templateUrl: './input-text-filled-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextFilledDemo {
    value: string;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["filled-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","","variant","filled",3,"ngModelChange","ngModel"],["selector","input-text-filled-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Specify the "),n(3,"i"),a(4,"variant"),o(),a(5," property as "),n(6,"i"),a(7,"filled"),o(),a(8," to display the component with a higher visual emphasis than the default "),n(9,"i"),a(10,"outlined"),o(),a(11," style."),o()(),n(12,"div",0)(13,"input",1),f("ngModelChange",function(l){return c(t.value,l)||(t.value=l),l}),o()(),d(14,"app-code",2)),i&2&&(r(13),u("ngModel",t.value),r(),p("code",t.code))},dependencies:[S,b,M,h,T,y,v,g,C],encapsulation:2})}return e})();var he=(()=>{class e{value1;value2;value3;code={basic:`<p-floatlabel>
    <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'input-text-floatlabel-demo',
    templateUrl: './input-text-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, FloatLabel]
})
export class InputTextFloatlabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["floatlabel-doc"]],decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["pInputText","","id","over_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["pInputText","","id","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-text-floatlabel-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2," FloatLabel visually integrates a label with its form element. Visit "),n(3,"a",0),a(4,"FloatLabel"),o(),a(5," documentation for more information. "),o()(),n(6,"div",1)(7,"p-floatlabel")(8,"input",2),f("ngModelChange",function(l){return c(t.value1,l)||(t.value1=l),l}),o(),n(9,"label",3),a(10,"Over Label"),o()(),n(11,"p-floatlabel",4)(12,"input",5),f("ngModelChange",function(l){return c(t.value2,l)||(t.value2=l),l}),o(),n(13,"label",6),a(14,"In Label"),o()(),n(15,"p-floatlabel",7)(16,"input",8),f("ngModelChange",function(l){return c(t.value3,l)||(t.value3=l),l}),o(),n(17,"label",9),a(18,"On Label"),o()()(),d(19,"app-code",10)),i&2&&(r(8),u("ngModel",t.value1),r(4),u("ngModel",t.value2),r(4),u("ngModel",t.value3),r(3),p("code",t.code))},dependencies:[S,b,M,h,T,y,fe,ce,O,G,v,g,C],encapsulation:2})}return e})();var Se=(()=>{class e{value;code={basic:`<div class="flex flex-col gap-2">
    <label for="username">Username</label>
    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-2">
        <label for="username">Username</label>
        <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
        <small id="username-help">Enter your username to reset your password.</small>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-help-text-demo',
    templateUrl: './input-text-help-text-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextHelpTextDemo {
    value: string | undefined;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["helptext-doc"]],decls:14,vars:2,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-2"],["for","username"],["pInputText","","id","username","aria-describedby","username-help",3,"ngModelChange","ngModel"],["id","username-help"],["selector","input-text-help-text-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"An advisory text can be defined with the semantic "),n(3,"i"),a(4,"small"),o(),a(5," tag."),o()(),n(6,"div",0)(7,"div",1)(8,"label",2),a(9,"Username"),o(),n(10,"input",3),f("ngModelChange",function(l){return c(t.value,l)||(t.value=l),l}),o(),n(11,"small",4),a(12,"Enter your username to reset your password."),o()()(),d(13,"app-code",5)),i&2&&(r(10),u("ngModel",t.value),r(3),p("code",t.code))},dependencies:[S,b,M,h,T,y,v,g,C],encapsulation:2})}return e})();var Ce=(()=>{class e{value;code={basic:`<p-iftalabel>
    <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
     <p-iftalabel>
        <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'input-text-iftalabel-demo',
    templateUrl: './input-text-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, IftaLabelModule]
})
export class InputTextIftaLabelDemo {
    value: string | undefined;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["iftalabel-doc"]],decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","input-text-iftalabel-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"IftaLabel is used to create infield top aligned labels. Visit "),n(3,"a",0),a(4,"IftaLabel"),o(),a(5," documentation for more information."),o()(),n(6,"div",1)(7,"p-iftalabel")(8,"input",2),f("ngModelChange",function(l){return c(t.value,l)||(t.value=l),l}),o(),n(9,"label",3),a(10,"Username"),o()()(),d(11,"app-code",4)),i&2&&(r(8),u("ngModel",t.value),r(3),p("code",t.code))},dependencies:[S,b,M,h,T,y,ve,ge,O,G,v,g,C],encapsulation:2})}return e})();var Ie=(()=>{class e{value1;code={typescript:"import { InputTextModule } from 'primeng/inputtext';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["input-text-import-doc"]],decls:1,vars:4,consts:[[3,"hideToggleCode","hideStackBlitz","hideCodeSandbox","code"]],template:function(i,t){i&1&&d(0,"app-code",0),i&2&&p("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0)("code",t.code)},dependencies:[v,g],encapsulation:2})}return e})();var De=(()=>{class e{value1;value2;code={basic:`<input pInputText [(ngModel)]="value1" [invalid]="!value1" placeholder="Name" />
<input pInputText [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Name" />`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <input pInputText [(ngModel)]="value1" [invalid]="!value1" placeholder="Name" />
    <input pInputText [(ngModel)]="value2" [invalid]="!value2" variant="filled" placeholder="Name" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-invalid-demo',
    templateUrl: './input-text-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextInvalidDemo {
    value1: string | undefined;

    value2: string | undefined;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["invalid-doc"]],decls:10,vars:5,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["pInputText","","placeholder","Name",3,"ngModelChange","ngModel","invalid"],["pInputText","","variant","filled","placeholder","Name",3,"ngModelChange","ngModel","invalid"],["selector","input-text-invalid-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"The invalid state is applied using the "),n(3,"i"),a(4,"\u2060invalid"),o(),a(5," property to indicate failed validation, which can be integrated with Angular Forms."),o()(),n(6,"div",0)(7,"input",1),f("ngModelChange",function(l){return c(t.value1,l)||(t.value1=l),l}),o(),n(8,"input",2),f("ngModelChange",function(l){return c(t.value2,l)||(t.value2=l),l}),o()(),d(9,"app-code",3)),i&2&&(r(7),u("ngModel",t.value1),p("invalid",!t.value1),r(),u("ngModel",t.value2),p("invalid",!t.value2),r(),p("code",t.code))},dependencies:[S,b,M,h,T,y,v,g,C],encapsulation:2})}return e})();var _e=(()=>{class e{value=null;docs=[{data:$("InputText"),key:"InputText"}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["inputtext-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],["pInputText","","placeholder","Username",3,"ngModelChange","ngModel"]],template:function(i,t){i&1&&(n(0,"app-docptviewer",0)(1,"input",1),f("ngModelChange",function(l){return c(t.value,l)||(t.value=l),l}),o()()),i&2&&(p("docs",t.docs),r(),u("ngModel",t.value))},dependencies:[q,xe,T,y,S,b,M,h],encapsulation:2})}return e})();var Fe=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:_e},{id:"pt.doc.inputtext",label:"InputText PT Options",component:de,data:$("InputText")}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["inputtext-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,t){i&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),a(3,"InputText Pass Through"),o()(),d(4,"app-docsection",2),o()),i&2&&(r(4),p("docs",t.docs))},dependencies:[q,se],encapsulation:2})}return e})();function Pe(e,A){e&1&&(n(0,"p-message",4),a(1,"Username is required."),o())}function Ue(e,A){e&1&&(n(0,"p-message",4),a(1,"Email is required."),o())}function qe(e,A){e&1&&(n(0,"p-message",4),a(1,"Please enter a valid email."),o())}function je(e,A){if(e&1&&(E(0,Ue,2,0,"p-message",4),E(1,qe,2,0,"p-message",4)),e&2){let m,i,t=P();L(!((m=t.exampleForm.get("email"))==null||m.errors==null)&&m.errors.required?0:-1),r(),L(!((i=t.exampleForm.get("email"))==null||i.errors==null)&&i.errors.email?1:-1)}}var we=(()=>{class e{fb;messageService=B(U);exampleForm;formSubmitted=!1;constructor(m){this.fb=m,this.exampleForm=this.fb.group({username:["",j.required],email:["",[j.required,j.email]]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(m){let i=this.exampleForm.get(m);return i?.invalid&&(i.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <input pInputText type="text" id="username" placeholder="Username" formControlName="username" [invalid]="isInvalid('username')" />
        @if (isInvalid('username')) {
            <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <input pInputText type="email" id="email" placeholder="Email" formControlName="email" [invalid]="isInvalid('email')" />
        @if (isInvalid('email')) {
            @if (exampleForm.get('email')?.errors?.['required']) {
                <p-message severity="error" size="small" variant="simple">Email is required.</p-message>
            }
            @if (exampleForm.get('email')?.errors?.['email']) {
                <p-message severity="error" size="small" variant="simple">Please enter a valid email.</p-message>
            }
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-1">
            <input pInputText type="text" id="username" placeholder="Username" formControlName="username" [invalid]="isInvalid('username')" />
            @if (isInvalid('username')) {
                <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
            }
        </div>
        <div class="flex flex-col gap-1">
            <input pInputText type="email" id="email" placeholder="Email" formControlName="email" [invalid]="isInvalid('email')" />
            @if (isInvalid('email')) {
                @if (exampleForm.get('email')?.errors?.['required']) {
                    <p-message severity="error" size="small" variant="simple">Email is required.</p-message>
                }
                @if (exampleForm.get('email')?.errors?.['email']) {
                    <p-message severity="error" size="small" variant="simple">Please enter a valid email.</p-message>
                }
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'reactive-forms-demo',
    templateUrl: './reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule, ButtonModule, ToastModule, MessageModule]
})
export class ReactiveFormsDemo {
    messageService = inject(MessageService);

    exampleForm: FormGroup;

    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}`};static \u0275fac=function(i){return new(i||e)(ee(me))};static \u0275cmp=s({type:e,selectors:[["reactive-forms-doc"]],decls:13,vars:6,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-full","sm:w-56",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["pInputText","","type","text","id","username","placeholder","Username","formControlName","username",3,"invalid"],["severity","error","size","small","variant","simple"],["pInputText","","type","email","id","email","placeholder","Email","formControlName","email",3,"invalid"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","template-driven-forms-demo",3,"code"]],template:function(i,t){i&1&&(d(0,"p-toast"),n(1,"div",0)(2,"form",1),z("ngSubmit",function(){return t.onSubmit()}),n(3,"div",2),d(4,"input",3),E(5,Pe,2,0,"p-message",4),o(),n(6,"div",2),d(7,"input",5),E(8,je,2,2),o(),n(9,"button",6)(10,"span",7),a(11,"Submit"),o()()()(),d(12,"app-code",8)),i&2&&(r(2),p("formGroup",t.exampleForm),r(2),p("invalid",t.isInvalid("username")),r(),L(t.isInvalid("username")?5:-1),r(2),p("invalid",t.isInvalid("email")),r(),L(t.isInvalid("email")?8:-1),r(4),p("code",t.code))},dependencies:[pe,k,b,M,R,ne,ae,T,y,J,K,H,Z,Y,X,Q,v,g],encapsulation:2})}return e})();var Ee=(()=>{class e{value1;value2;value3;code={basic:`<input pInputText [(ngModel)]="value1" type="text" pSize="small" placeholder="Small" />
<input pInputText [(ngModel)]="value2" type="text" placeholder="Normal" />
<input pInputText [(ngModel)]="value3" type="text" pSize="large" placeholder="Large" />`,html:`<div class="card flex flex-col items-center gap-4 ">
    <input pInputText [(ngModel)]="value1" type="text" pSize="small" placeholder="Small" />
    <input pInputText [(ngModel)]="value2" type="text" placeholder="Normal" />
    <input pInputText [(ngModel)]="value3" type="text" pSize="large" placeholder="Large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'input-text-sizes-demo',
    templateUrl: './input-text-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextSizesDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["pInputText","","type","text","pSize","small","placeholder","Small",3,"ngModelChange","ngModel"],["pInputText","","type","text","placeholder","Normal",3,"ngModelChange","ngModel"],["pInputText","","type","text","pSize","large","placeholder","Large",3,"ngModelChange","ngModel"],["selector","input-text-sizes-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"InputText provides "),n(3,"i"),a(4,"small"),o(),a(5," and "),n(6,"i"),a(7,"large"),o(),a(8," sizes as alternatives to the standard."),o()(),n(9,"div",0)(10,"input",1),f("ngModelChange",function(l){return c(t.value1,l)||(t.value1=l),l}),o(),n(11,"input",2),f("ngModelChange",function(l){return c(t.value2,l)||(t.value2=l),l}),o(),n(12,"input",3),f("ngModelChange",function(l){return c(t.value3,l)||(t.value3=l),l}),o()(),d(13,"app-code",4)),i&2&&(r(10),u("ngModel",t.value1),r(),u("ngModel",t.value2),r(),u("ngModel",t.value3),r(),p("code",t.code))},dependencies:[S,b,M,h,T,y,v,g,C],encapsulation:2})}return e})();function Re(e,A){e&1&&(n(0,"p-message",7),a(1,"Username is required."),o())}function ke(e,A){e&1&&a(0," Email is Required. ")}function Ge(e,A){e&1&&a(0," Please enter a valid email. ")}function Oe(e,A){if(e&1&&(n(0,"p-message",7),E(1,ke,1,0),E(2,Ge,1,0),o()),e&2){P();let m=W(10);r(),L(m.hasError("required")?1:-1),r(),L(m.hasError("email")?2:-1)}}var Le=(()=>{class e{messageService=B(U);user={username:"",email:""};onSubmit(m){m.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),m.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <input pInputText type="text" id="username" placeholder="Username" name="username" [(ngModel)]="user.username" #username="ngModel" [invalid]="username.invalid && (username.touched || exampleForm.submitted)" required />
        @if (username.invalid && (username.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <input pInputText type="email" id="email" name="email" placeholder="Email" [(ngModel)]="user.email" #email="ngModel" required email [invalid]="email.invalid && (email.touched || exampleForm.submitted)" />
        @if (email.invalid && (email.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">
                @if (email.hasError('required')) {
                    Email is Required.
                }
                @if (email.hasError('email')) {
                    Please enter a valid email.
                }
            </p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-1">
            <input pInputText type="text" id="username" placeholder="Username" name="username" [(ngModel)]="user.username" #username="ngModel" [invalid]="username.invalid && (username.touched || exampleForm.submitted)" required />
            @if (username.invalid && (username.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Username is required.</p-message>
            }
        </div>
        <div class="flex flex-col gap-1">
            <input pInputText type="email" id="email" name="email" placeholder="Email" [(ngModel)]="user.email" #email="ngModel" required email [invalid]="email.invalid && (email.touched || exampleForm.submitted)" />
            @if (email.invalid && (email.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">
                    @if (email.hasError('required')) {
                        Email is Required.
                    }
                    @if (email.hasError('email')) {
                        Please enter a valid email.
                    }
                </p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'template-driven-forms-demo',
    templateUrl: './template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, ButtonModule, ToastModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    user = {
        username: '',
        email: ''
    };

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm()
        }
    }
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["template-driven-forms-doc"]],decls:16,vars:7,consts:[["exampleForm","ngForm"],["username","ngModel"],["email","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-full","sm:w-56",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["pInputText","","type","text","id","username","placeholder","Username","name","username","required","",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pInputText","","type","email","id","email","name","email","placeholder","Email","required","","email","",3,"ngModelChange","ngModel","invalid"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","template-driven-forms-demo",3,"code"]],template:function(i,t){if(i&1){let x=te();d(0,"p-toast"),n(1,"div",3)(2,"form",4,0),z("ngSubmit",function(){N(x);let D=W(3);return V(t.onSubmit(D))}),n(4,"div",5)(5,"input",6,1),f("ngModelChange",function(D){return N(x),c(t.user.username,D)||(t.user.username=D),V(D)}),o(),E(7,Re,2,0,"p-message",7),o(),n(8,"div",5)(9,"input",8,2),f("ngModelChange",function(D){return N(x),c(t.user.email,D)||(t.user.email=D),V(D)}),o(),E(11,Oe,3,2,"p-message",7),o(),n(12,"button",9)(13,"span",10),a(14,"Submit"),o()()()(),d(15,"app-code",11)}if(i&2){let x=W(3),l=W(6),D=W(10);r(5),u("ngModel",t.user.username),p("invalid",l.invalid&&(l.touched||x.submitted)),r(2),L(l.invalid&&(l.touched||x.submitted)?7:-1),r(2),u("ngModel",t.user.email),p("invalid",D.invalid&&(D.touched||x.submitted)),r(2),L(D.invalid&&(D.touched||x.submitted)?11:-1),r(4),p("code",t.code)}},dependencies:[S,k,b,M,R,le,re,h,oe,T,y,J,K,H,Z,Y,X,Q,v,g],encapsulation:2})}return e})();var Ae=(()=>{class e{value;code={basic:'<input type="text" pInputText [(ngModel)]="value" fluid />',html:`<div class="card flex justify-center">
    <input type="text" pInputText [(ngModel)]="value" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text-fluid-demo',
    templateUrl: './input-text-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextFluidDemo {
    value: string;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["fluid-doc"]],decls:6,vars:2,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","","fluid","",3,"ngModelChange","ngModel"],["selector","input-text-fluid-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"The fluid prop makes the component take up the full width of its container when set to true."),o()(),n(3,"div",0)(4,"input",1),f("ngModelChange",function(l){return c(t.value,l)||(t.value=l),l}),o()(),d(5,"app-code",2)),i&2&&(r(4),u("ngModel",t.value),r(),p("code",t.code))},dependencies:[S,b,M,h,T,y,v,g,C],encapsulation:2})}return e})();var He=()=>["InputText"],We=(()=>{class e{ptComponent=Fe;docs=[{id:"import",label:"Import",component:Ie},{id:"basic",label:"Basic",component:Me},{id:"floatlabel",label:"Float Label",component:he},{id:"iftalabel",label:"Ifta Label",component:Ce},{id:"sizes",label:"Sizes",component:Ee},{id:"fluid",label:"Fluid",component:Ae},{id:"helptext",label:"Help Text",component:Se},{id:"filled",label:"Filled",component:Te},{id:"disabled",label:"Disabled",component:ye},{id:"invalid",label:"Invalid",component:De},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Le},{id:"reactive",label:"Reactive Forms",component:we}]},{id:"accessibility",label:"Accessibility",component:be}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular InputText Component","header","InputText","description","InputText is an extension to standard input element with theming and keyfiltering.","themeDocs","inputtext",3,"apiDocs","docs","ptDocs"]],template:function(i,t){i&1&&d(0,"app-doc",0),i&2&&p("apiDocs",ie(3,He))("docs",t.docs)("ptDocs",t.ptComponent)},dependencies:[ue],encapsulation:2})}return e})();var ki=[{path:"",component:We}];export{ki as default};
