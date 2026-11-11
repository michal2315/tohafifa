import{a as y,b as M}from"./chunk-5KYETTWG.js";import{a as Z,b as ve}from"./chunk-JNUBCW5H.js";import{a as H,b as J}from"./chunk-N3SKU25W.js";import{a as Q,b as X}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as $,f as v,g as U,h as ie,i as S,j as G,k as ne,l as re,p as pe,r as ae,t as le,u as _,v as me}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ge}from"./chunk-FKOOMXTU.js";import{a as x,b as h}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as fe}from"./chunk-XCUGNKAG.js";import{a as b,b as ce}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as se,h as de}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as Y,fa as K,ga as ue,ha as P}from"./chunk-MCW4FHXZ.js";import{za as q}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as oe,w as A}from"./chunk-D2XKNHFS.js";import{$a as ee,Ab as z,Eb as m,Fb as i,Gb as n,Gc as R,Hb as s,Ob as I,Qa as l,Sb as T,X as N,aa as w,ba as F,cc as j,gb as d,hc as r,mb as V,mc as c,nc as f,oc as g,sc as te,wb as L,zb as W}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ye=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["input-otp-accessibility-doc"]],decls:44,vars:0,consts:[["routerLink","/inputtext"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),r(3,"Screen Reader"),n(),i(4,"p"),r(5,"Input OTP uses a set of InputText components, refer to the "),i(6,"a",0),r(7,"InputText"),n(),r(8," component for more information about the screen reader support."),n()(),i(9,"h3"),r(10,"Keyboard Support"),n(),i(11,"div",1)(12,"table",2)(13,"thead")(14,"tr")(15,"th"),r(16,"Key"),n(),i(17,"th"),r(18,"Function"),n()()(),i(19,"tbody")(20,"tr")(21,"td")(22,"i"),r(23,"tab"),n()(),i(24,"td"),r(25,"Moves focus to the input otp."),n()(),i(26,"tr")(27,"td")(28,"i"),r(29,"right arrow"),n()(),i(30,"td"),r(31,"Moves focus to the next input element."),n()(),i(32,"tr")(33,"td")(34,"i"),r(35,"left arrow"),n()(),i(36,"td"),r(37,"Moves focus to the previous input element."),n()(),i(38,"tr")(39,"td")(40,"i"),r(41,"backspace"),n()(),i(42,"td"),r(43,"Deletes the input and moves focus to the previous input element."),n()()()()()())},dependencies:[de,se,b],encapsulation:2})}return e})();var Me=(()=>{class e{value;code={basic:'<p-inputotp [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-basic-demo',
    templateUrl: './input-otp-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpBasicDemo {
    value : any
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","input-otp-basic-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Two-way value binding is defined using "),i(3,"i"),r(4,"ngModel"),n(),r(5,". The number of characters is defined with the "),i(6,"i"),r(7,"length"),n(),r(8," property, which is set to 4 by default."),n()(),i(9,"div",0)(10,"p-inputotp",1),g("ngModelChange",function(a){return f(o.value,a)||(o.value=a),a}),n()(),s(11,"app-code",2)),t&2&&(l(10),c("ngModel",o.value),l(),m("code",o.code))},dependencies:[_,v,S,M,y,h,x,b],encapsulation:2})}return e})();var be=(()=>{class e{code={typescript:"import { InputOtpModule } from 'primeng/inputotp';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["input-otp-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&s(0,"app-code",0),t&2&&m("code",o.code)("hideToggleCode",!0)},dependencies:[h,x],encapsulation:2})}return e})();var xe=(()=>{class e{value;code={basic:'<p-inputotp [(ngModel)]="value" [integerOnly]="true" />',html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value" [integerOnly]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-integer-only-demo',
    templateUrl: './input-otp-integer-only-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpIntegerOnlyDemo {
    value : any
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["integer-only-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","integerOnly"],["selector","input-otp-integer-only-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"When "),i(3,"i"),r(4,"integerOnly"),n(),r(5," is present, only integers can be accepted as input."),n()(),i(6,"div",0)(7,"p-inputotp",1),g("ngModelChange",function(a){return f(o.value,a)||(o.value=a),a}),n()(),s(8,"app-code",2)),t&2&&(l(7),c("ngModel",o.value),m("integerOnly",!0),l(),m("code",o.code))},dependencies:[_,v,S,M,y,h,x,b],encapsulation:2})}return e})();var he=(()=>{class e{value;code={basic:'<p-inputotp [(ngModel)]="value" [mask]="true" />',html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value" [mask]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-mask-demo',
    templateUrl: './input-otp-mask-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpMaskDemo {
    value: any;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["mask-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","mask"],["selector","input-otp-mask-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Enable the "),i(3,"i"),r(4,"mask"),n(),r(5," option to hide the values in the input fields."),n()(),i(6,"div",0)(7,"p-inputotp",1),g("ngModelChange",function(a){return f(o.value,a)||(o.value=a),a}),n()(),s(8,"app-code",2)),t&2&&(l(7),c("ngModel",o.value),m("mask",!0),l(),m("code",o.code))},dependencies:[_,v,S,M,y,h,x,b],encapsulation:2})}return e})();function Be(e,B){e&1&&(i(0,"p-message",4),r(1,"Passcode is required."),n())}var _e=(()=>{class e{fb;messageService=N(q);exampleForm;formSubmitted=!1;constructor(p){this.fb=p,this.exampleForm=this.fb.group({value:["",[$.required,$.minLength(4)]]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(p){let t=this.exampleForm.get(p);return t?.invalid&&(t.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputotp formControlName="value" [invalid]="isInvalid('value')" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-inputotp formControlName="value" [invalid]="isInvalid('value')" />
            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'input-otp-reactive-forms-demo',
    templateUrl: './input-otp-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputOtpModule, MessageModule, ToastModule, ButtonModule],
    providers: [CountryService]
})
export class InputOtpReactiveFormsDemo implements OnInit {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            value: ['', [Validators.required, Validators.minLength(4)]]
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
}`};static \u0275fac=function(t){return new(t||e)(ee(le))};static \u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","value",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","input-otp-reactive-forms-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"InputOtp can also be used with reactive forms. In this case, the "),i(3,"i"),r(4,"formControlName"),n(),r(5," property is used to bind the component to a form control."),n()(),s(6,"p-toast"),i(7,"div",0)(8,"form",1),T("ngSubmit",function(){return o.onSubmit()}),i(9,"div",2),s(10,"p-inputotp",3),W(11,Be,2,0,"p-message",4),n(),i(12,"button",5)(13,"span",6),r(14,"Submit"),n()()()(),s(15,"app-code",7)),t&2&&(l(8),m("formGroup",o.exampleForm),l(2),m("invalid",o.isInvalid("value")),l(),z(o.isInvalid("value")?11:-1),l(4),m("code",o.code))},dependencies:[me,G,v,U,ne,re,M,y,P,K,Y,X,Q,J,H,h,x,b],encapsulation:2})}return e})();function Ae(e,B){e&1&&(i(0,"div",12),s(1,"i",13),n())}function Pe(e,B){if(e&1){let p=I();i(0,"input",10),T("input",function(o){let u=w(p).events;return F(u.input(o))})("keydown",function(o){let u=w(p).events;return F(u.keydown(o))}),n(),V(1,Ae,2,0,"div",11)}if(e&2){let p=B.$implicit,t=B.index;m("maxLength",1),L("value",p),l(),m("ngIf",t===3)}}var Ce=(()=>{class e{value;code={basic:`<div class="flex flex-col items-center">
    <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
    <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
    <p-inputotp [(ngModel)]="value" [length]="6">
        <ng-template #input let-token let-events="events" let-index="index">
            <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
            <div *ngIf="index === 3" class="px-4">
                <i class="pi pi-minus"></i>
            </div>
        </ng-template>
    </p-inputotp>
    <div class="flex justify-between mt-8 self-stretch">
        <p-button label="Resend Code" [link]="true" class="p-0"/>
        <p-button label="Submit Code"/>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col items-center">
        <div class="font-bold text-xl mb-2">Authenticate Your Account</div>
        <p class="text-muted-color block mb-8">Please enter the code sent to your phone.</p>
        <p-inputotp [(ngModel)]="value" [length]="6">
            <ng-template #input let-token let-events="events" let-index="index">
                <input type="text" [maxLength]="1" (input)="events.input($event)" (keydown)="events.keydown($event)" [attr.value]="token" class="custom-otp-input" />
                <div *ngIf="index === 3" class="px-4">
                    <i class="pi pi-minus"></i>
                </div>
            </ng-template>
        </p-inputotp>
        <div class="flex justify-between mt-8 self-stretch">
            <p-button label="Resend Code" [link]="true" class="p-0"/>
            <p-button label="Submit Code"/>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'input-otp-sample-demo',
    templateUrl: './input-otp-sample-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtpModule, ButtonModule],
    styles: [
        \`
            .p-inputotp {
                gap: 0;
            }

            .custom-otp-input {
                width: 48px;
                height: 48px;
                font-size: 24px;
                appearance: none;
                text-align: center;
                transition: all 0.2s;
                border-radius: 0;
                border: 1px solid var(--p-inputtext-border-color);
                background: transparent;
                outline-offset: -2px;
                outline-color: transparent;
                border-right: 0 none;
                transition: outline-color 0.3s;
                color: var(--p-inputtext-color);
            }

            .custom-otp-input:focus {
                outline: 2px solid var(--p-focus-ring-color);
            }

            .custom-otp-input:first-child,
            .custom-otp-input:nth-child(5) {
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }

            .custom-otp-input:nth-child(3),
            .custom-otp-input:last-child {
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
                border-right-width: 1px;
                border-right-style: solid;
                border-color: var(--p-inputtext-border-color);
            }
        \`
    ],
})
export class InputOtpSampleDemo {
    value: any;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["sample-doc"]],decls:16,vars:4,consts:[["input",""],[1,"card","flex","justify-center"],[1,"flex","flex-col","items-center"],[1,"font-bold","text-xl","mb-2"],[1,"text-muted-color","block","mb-8"],[3,"ngModelChange","ngModel","length"],[1,"flex","justify-between","mt-8","self-stretch"],["label","Resend Code",1,"p-0",3,"link"],["label","Submit Code"],["selector","input-otp-sample-demo",3,"code"],["type","text",1,"custom-otp-input",3,"input","keydown","maxLength"],["class","px-4",4,"ngIf"],[1,"px-4"],[1,"pi","pi-minus"]],template:function(t,o){if(t&1){let u=I();i(0,"app-docsectiontext")(1,"p"),r(2,"A sample UI implementation with templating and additional elements."),n()(),i(3,"div",1)(4,"div",2)(5,"div",3),r(6,"Authenticate Your Account"),n(),i(7,"p",4),r(8,"Please enter the code sent to your phone."),n(),i(9,"p-inputotp",5),g("ngModelChange",function(C){return w(u),f(o.value,C)||(o.value=C),F(C)}),V(10,Pe,2,3,"ng-template",null,0,R),n(),i(12,"div",6),s(13,"p-button",7)(14,"p-button",8),n()()(),s(15,"app-code",9)}t&2&&(l(9),c("ngModel",o.value),m("length",6),l(4),m("link",!0),l(2),m("code",o.code))},dependencies:[A,oe,_,v,S,M,y,P,ue,h,x,b],styles:[".p-inputotp[_ngcontent-%COMP%]{gap:0}.custom-otp-input[_ngcontent-%COMP%]{width:48px;height:48px;font-size:24px;appearance:none;text-align:center;transition:all .2s;border-radius:0;border:1px solid var(--p-inputtext-border-color);background:transparent;outline-offset:-2px;outline-color:transparent;border-right:0 none;transition:outline-color .3s;color:var(--p-inputtext-color)}.custom-otp-input[_ngcontent-%COMP%]:focus{outline:2px solid var(--p-focus-ring-color)}.custom-otp-input[_ngcontent-%COMP%]:first-child, .custom-otp-input[_ngcontent-%COMP%]:nth-child(5){border-top-left-radius:12px;border-bottom-left-radius:12px}.custom-otp-input[_ngcontent-%COMP%]:nth-child(3), .custom-otp-input[_ngcontent-%COMP%]:last-child{border-top-right-radius:12px;border-bottom-right-radius:12px;border-right-width:1px;border-right-style:solid;border-color:var(--p-inputtext-border-color)}"]})}return e})();var De=(()=>{class e{value1;value2;value3;code={basic:`<p-inputotp [(ngModel)]="value1" size="small" />
<p-inputotp [(ngModel)]="value2" />
<p-inputotp [(ngModel)]="value3" size="large" />`,html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value1" size="small" />
    <p-inputotp [(ngModel)]="value2" />
    <p-inputotp [(ngModel)]="value3" size="large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-sizes-demo',
    templateUrl: './input-otp-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtp]
})
export class InputOtpSizesDemo {
    value : any
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],["size","large",3,"ngModelChange","ngModel"],["selector","input-otp-sizes-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"InputOtp provides "),i(3,"i"),r(4,"small"),n(),r(5," and "),i(6,"i"),r(7,"large"),n(),r(8," sizes as alternatives to the base."),n()(),i(9,"div",0)(10,"p-inputotp",1),g("ngModelChange",function(a){return f(o.value1,a)||(o.value1=a),a}),n(),i(11,"p-inputotp",2),g("ngModelChange",function(a){return f(o.value2,a)||(o.value2=a),a}),n(),i(12,"p-inputotp",3),g("ngModelChange",function(a){return f(o.value3,a)||(o.value3=a),a}),n()(),s(13,"app-code",4)),t&2&&(l(10),c("ngModel",o.value1),l(),c("ngModel",o.value2),l(),c("ngModel",o.value3),l(),m("code",o.code))},dependencies:[_,v,S,M,y,h,x,b],encapsulation:2})}return e})();function Ve(e,B){if(e&1){let p=I();i(0,"input",4),T("keydown",function(o){let u=w(p).events;return F(u.keydown(o))})("input",function(o){let u=w(p).events;return F(u.input(o))}),n()}if(e&2){let p=B.$implicit;m("maxLength",1),L("value",p)}}var we=(()=>{class e{value;code={basic:`<p-inputotp [(ngModel)]="value">
    <ng-template #input let-token let-events="events">
        <input class="custom-otp-input" (input)="events.input($event)" (keydown)="events.keydown($event)" type="text" [attr.value]="token" [maxLength]="1" />
    </ng-template>
</p-inputotp>`,html:`<div class="card flex justify-center">
    <p-inputotp [(ngModel)]="value">
        <ng-template #input let-token let-events="events">
            <input class="custom-otp-input" (input)="events.input($event)" (keydown)="events.keydown($event)" type="text" [attr.value]="token" [maxLength]="1" />
        </ng-template>
    </p-inputotp>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-otp-template-demo',
    templateUrl: './input-otp-template-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtpModule],
    styles: [
        \`
        .custom-otp-input {
                width: 40px;
                font-size: 36px;
                border: 0 none;
                appearance: none;
                text-align: center;
                transition: all 0.2s;
                background: transparent;
                border-bottom: 2px solid var(--p-inputtext-border-color);
                border-radius: 0px;
            }

        .custom-otp-input:focus {
                outline: 0 none;
                border-bottom-color: var(--p-primary-color);
        }
        \`
    ],
})

export class InputOtpTemplateDemo {
    value: any;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-doc"]],decls:8,vars:2,consts:[["input",""],[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","input-otp-template-demo",3,"code"],["type","text",1,"custom-otp-input",3,"keydown","input","maxLength"]],template:function(t,o){if(t&1){let u=I();i(0,"app-docsectiontext")(1,"p"),r(2,"Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design."),n()(),i(3,"div",1)(4,"p-inputotp",2),g("ngModelChange",function(C){return w(u),f(o.value,C)||(o.value=C),F(C)}),V(5,Ve,1,2,"ng-template",null,0,R),n()(),s(7,"app-code",3)}t&2&&(l(4),c("ngModel",o.value),l(3),m("code",o.code))},dependencies:[_,v,S,M,y,h,x,b],styles:[".custom-otp-input[_ngcontent-%COMP%]{width:40px;font-size:36px;border:0 none;appearance:none;text-align:center;transition:all .2s;background:transparent;border-bottom:2px solid var(--p-inputtext-border-color);border-radius:0}.custom-otp-input[_ngcontent-%COMP%]:focus{outline:0 none;border-bottom-color:var(--p-primary-color)}"]})}return e})();function Ne(e,B){e&1&&(i(0,"p-message",6),r(1,"Passcode is required."),n())}var Fe=(()=>{class e{messageService=N(q);value;onSubmit(p){p.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),p.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputotp #otpModel="ngModel" [(ngModel)]="value" [invalid]="otpModel.invalid && (otpModel.touched || exampleForm.submitted)" name="value" required [minlength]="4" />

        @if (otpModel.invalid && (otpModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-inputotp #otpModel="ngModel" [(ngModel)]="value" [invalid]="otpModel.invalid && (otpModel.touched || exampleForm.submitted)" name="value" required [minlength]="4" />

            @if (otpModel.invalid && (otpModel.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Passcode is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
    selector: 'input-otp-template-driven-forms-demo',
    templateUrl: './input-otp-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, InputOtpModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo implements OnInit {
    messageService = inject(MessageService);

    value: any;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-driven-forms-doc"]],decls:13,vars:5,consts:[["exampleForm","ngForm"],["otpModel","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","value","required","",3,"ngModelChange","ngModel","invalid","minlength"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","input-otp-template-driven-forms-demo",3,"code"]],template:function(t,o){if(t&1){let u=I();s(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",2)(3,"form",3,0),T("ngSubmit",function(){w(u);let C=j(4);return F(o.onSubmit(C))}),i(5,"div",4)(6,"p-inputotp",5,1),g("ngModelChange",function(C){return w(u),f(o.value,C)||(o.value=C),F(C)}),n(),W(8,Ne,2,0,"p-message",6),n(),i(9,"button",7)(10,"span",8),r(11,"Submit"),n()()()(),s(12,"app-code",9)}if(t&2){let u=j(4),a=j(7);l(6),c("ngModel",o.value),m("invalid",a.invalid&&(a.touched||u.submitted))("minlength",4),l(2),z(a.invalid&&(a.touched||u.submitted)?8:-1),l(4),m("code",o.code)}},dependencies:[_,G,v,U,pe,ae,S,ie,M,y,P,K,Y,X,Q,J,H,h,x,b],encapsulation:2})}return e})();var Ie=(()=>{class e{value;docs=[{data:Z("InputOtp"),key:"InputOtp"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["inputotp-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"ngModelChange","ngModel"]],template:function(t,o){t&1&&(i(0,"app-docptviewer",0)(1,"p-inputotp",1),g("ngModelChange",function(a){return f(o.value,a)||(o.value=a),a}),n()()),t&2&&(m("docs",o.docs),l(),c("ngModel",o.value))},dependencies:[A,_,v,S,ve,M,y],encapsulation:2})}return e})();var Te=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:Ie},{id:"pt.doc.inputotp",label:"InputOtp PT Options",component:ce,data:Z("InputOtp")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["inputotp-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),r(3,"InputOtp Pass Through"),n()(),s(4,"app-docsection",2),n()),t&2&&(l(4),m("docs",o.docs))},dependencies:[A,fe],encapsulation:2})}return e})();var Le=()=>["InputOtp"],Oe=(()=>{class e{ptComponent=Te;docs=[{id:"import",label:"Import",component:be},{id:"basic",label:"Basic",component:Me},{id:"mask",label:"Mask",component:he},{id:"integeronly",label:"Integer Only",component:xe},{id:"sizes",label:"Sizes",component:De},{id:"template",label:"Template",component:we},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Fe},{id:"reactive",label:"Reactive Forms",component:_e}]},{id:"sample",label:"Sample",component:Ce},{id:"accessibility",label:"Accessibility",component:ye}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Otp Input Component","header","InputOtp","description","Input Otp is used to enter one time passwords.","themeDocs","inputotp",3,"docs","ptDocs","apiDocs"]],template:function(t,o){t&1&&s(0,"app-doc",0),t&2&&m("docs",o.docs)("ptDocs",o.ptComponent)("apiDocs",te(3,Le))},dependencies:[ge],encapsulation:2})}return e})();var Mo=[{path:"",component:Oe}];export{Mo as default};
