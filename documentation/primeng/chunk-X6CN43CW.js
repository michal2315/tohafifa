import{a as v,b as h}from"./chunk-3Y7QSSKK.js";import{a as U,b as le}from"./chunk-JNUBCW5H.js";import{a as j,b as P}from"./chunk-N3SKU25W.js";import{a as R,b as V}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{d as J,f as b,g as E,h as Q,i as y,j as z,k as X,l as Z,p as $,t as ee,u as S,v as oe}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ne}from"./chunk-FKOOMXTU.js";import{a as p}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ie}from"./chunk-XCUGNKAG.js";import{a as M,b as te}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as N,fa as O,ha as W}from"./chunk-MCW4FHXZ.js";import{za as A}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as F}from"./chunk-D2XKNHFS.js";import{$a as Y,Ab as k,Eb as s,Fb as i,Gb as n,Hb as d,Ob as K,Qa as a,Sb as _,X as w,aa as G,ba as q,cc as I,gb as c,hc as l,mc as u,nc as g,oc as f,sc as H,zb as L}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var re=(()=>{class e{code={basic:`<span id="rememberme">Remember Me</span>
<p-togglebutton ariaLabelledBy="rememberme" />

<p-togglebutton ariaLabel="Remember Me" />`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["toggle-button-accessibility-doc"]],decls:42,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,t){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),n(),i(4,"p"),l(5," ToggleButton component uses an element with "),i(6,"i"),l(7,"button"),n(),l(8," role and updates "),i(9,"i"),l(10,"aria-pressed"),n(),l(11," state for screen readers. Value to describe the component can be defined with "),i(12,"i"),l(13,"ariaLabelledBy"),n(),l(14," or "),i(15,"i"),l(16,"ariaLabel"),n(),l(17," props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state. "),n()(),d(18,"app-code",0),i(19,"h3"),l(20,"Keyboard Support"),n(),i(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),l(26,"Key"),n(),i(27,"th"),l(28,"Function"),n()()(),i(29,"tbody")(30,"tr")(31,"td")(32,"i"),l(33,"tab"),n()(),i(34,"td"),l(35,"Moves focus to the button."),n()(),i(36,"tr")(37,"td")(38,"i"),l(39,"space"),n()(),i(40,"td"),l(41,"Toggles the checked state."),n()()()()()()),o&2&&(a(18),s("code",t.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,M],encapsulation:2})}return e})();var ae=(()=>{class e{checked=!1;code={basic:'<p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" class="w-24" />',html:`<div class="card flex justify-center">
    <p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" class="w-24" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-basic-demo',
    templateUrl: './toggle-button-basic-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonBasicDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["onLabel","On","offLabel","Off",1,"w-24",3,"ngModelChange","ngModel"],["selector","toggle-button-basic-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"Two-way binding to a boolean property is defined using the standard "),i(3,"i"),l(4,"ngModel"),n(),l(5," directive."),n()(),i(6,"div",0)(7,"p-togglebutton",1),f("ngModelChange",function(r){return g(t.checked,r)||(t.checked=r),r}),n()(),d(8,"app-code",2)),o&2&&(a(7),u("ngModel",t.checked),a(),s("code",t.code))},dependencies:[S,b,y,h,v,p,M],encapsulation:2})}return e})();var me=(()=>{class e{checked=!1;code={basic:'<p-togglebutton [(ngModel)]="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-check" offIcon="pi pi-times" onIcon="pi pi-lock" offIcon="pi pi-lock-open" class="w-36" ariaLabel="Do you confirm" />',html:`<div class="card flex justify-center">
    <p-togglebutton [(ngModel)]="checked" onLabel="Locked" offLabel="Unlocked" onIcon="pi pi-check" offIcon="pi pi-times" onIcon="pi pi-lock" offIcon="pi pi-lock-open" class="w-36" ariaLabel="Do you confirm" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-customized-demo',
    templateUrl: './toggle-button-customized-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonCustomizedDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["customized-doc"]],decls:18,vars:2,consts:[[1,"card","flex","justify-center"],["onLabel","Locked","offLabel","Unlocked","onIcon","pi pi-check","offIcon","pi pi-times","onIcon","pi pi-lock","offIcon","pi pi-lock-open","ariaLabel","Do you confirm",1,"w-36",3,"ngModelChange","ngModel"],["selector","toggle-button-customized-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"Icons and Labels can be customized using "),i(3,"i"),l(4,"onLabel"),n(),l(5,", "),i(6,"i"),l(7,"offLabel"),n(),l(8,", "),i(9,"i"),l(10,"onIcon"),n(),l(11," and "),i(12,"i"),l(13,"offIcon"),n(),l(14," properties."),n()(),i(15,"div",0)(16,"p-togglebutton",1),f("ngModelChange",function(r){return g(t.checked,r)||(t.checked=r),r}),n()(),d(17,"app-code",2)),o&2&&(a(16),u("ngModel",t.checked),a(),s("code",t.code))},dependencies:[S,b,y,h,v,p,M],encapsulation:2})}return e})();var se=(()=>{class e{checked=!1;code={basic:'<p-togglebutton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" class="w-full sm:w-40" ariaLabel="Confirmation" />',html:`<div class="card flex justify-center">
    <p-togglebutton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" class="w-full sm:w-40" ariaLabel="Confirmation" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-disabled-demo',
    templateUrl: './toggle-button-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonDisabledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["disabled-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["disabled","true","onIcon","pi pi-check","offIcon","pi pi-times","onLabel","Yes","offLabel","No","ariaLabel","Confirmation",1,"w-full","sm:w-40",3,"ngModelChange","ngModel"],["selector","toggle-button-disabled-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"When "),i(3,"i"),l(4,"disabled"),n(),l(5," is present, the element cannot be edited and focused."),n()(),i(6,"div",0)(7,"p-togglebutton",1),f("ngModelChange",function(r){return g(t.checked,r)||(t.checked=r),r}),n()(),d(8,"app-code",2)),o&2&&(a(7),u("ngModel",t.checked),a(),s("code",t.code))},dependencies:[S,b,y,h,v,p,M],encapsulation:2})}return e})();var de=(()=>{class e{code={typescript:"import { ToggleButtonModule } from 'primeng/togglebutton';"};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["toggle-button-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&d(0,"app-code",0),o&2&&s("code",t.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return e})();var ce=(()=>{class e{checked=!1;code={basic:'<p-togglebutton [(ngModel)]="checked" onIcon="pi pi-check" offIcon="pi pi-times" [invalid]="!checked" class="w-full sm:w-40" aria-label="Confirmation" />',html:`<div class="card flex justify-center">
    <p-togglebutton [(ngModel)]="checked" onIcon="pi pi-check" offIcon="pi pi-times" [invalid]="!checked" class="w-full sm:w-40" aria-label="Confirmation" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-invalid-demo',
    templateUrl: './toggle-button-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButtonModule]
})
export class ToggleButtonInvalidDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["invalid-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["onIcon","pi pi-check","offIcon","pi pi-times","aria-label","Confirmation",1,"w-full","sm:w-40",3,"ngModelChange","ngModel","invalid"],["selector","toggle-button-invalid-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"The invalid state is applied using the "),i(3,"i"),l(4,"\u2060invalid"),n(),l(5," property to indicate failed validation, which can be integrated with Angular Forms."),n()(),i(6,"div",0)(7,"p-togglebutton",1),f("ngModelChange",function(r){return g(t.checked,r)||(t.checked=r),r}),n()(),d(8,"app-code",2)),o&2&&(a(7),u("ngModel",t.checked),s("invalid",!t.checked),a(),s("code",t.code))},dependencies:[S,b,y,h,v,p,M],encapsulation:2})}return e})();function Te(e,Me){e&1&&(i(0,"p-message",4),l(1,"Consent is mandatory."),n())}var pe=(()=>{class e{fb;messageService=w(A);exampleForm;formSubmitted=!1;constructor(m){this.fb=m,this.exampleForm=this.fb.group({checked:["",J.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(m){let o=this.exampleForm.get(m);return o?.invalid&&(o.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-togglebutton name="consent" formControlName="checked" [invalid]="isInvalid('checked')" onLabel="Accept All" offLabel="Reject All" />
        @if (isInvalid('checked')) {
            <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-togglebutton name="consent" formControlName="checked" [invalid]="isInvalid('checked')" onLabel="Accept All" offLabel="Reject All" />
            @if (isInvalid('checked')) {
                <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
            }
        </div>
        <button pButton type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'toggle-button-reactive-forms-demo',
    templateUrl: './toggle-button-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, ToggleButton, MessageModule, MessageService, ButtonModule]
})
export class ToggleButtonReactiveFormsDemo {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            checked: ['', Validators.required]
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
}`};static \u0275fac=function(o){return new(o||e)(Y(ee))};static \u0275cmp=c({type:e,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["name","consent","formControlName","checked","onLabel","Accept All","offLabel","Reject All",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","type","submit"],["pButtonLabel",""],["selector","toggle-button-reactive-forms-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"ToggleButton can also be used with reactive forms. In this case, the "),i(3,"i"),l(4,"formControlName"),n(),l(5," property is used to bind the component to a form control."),n()(),d(6,"p-toast"),i(7,"div",0)(8,"form",1),_("ngSubmit",function(){return t.onSubmit()}),i(9,"div",2),d(10,"p-togglebutton",3),L(11,Te,2,0,"p-message",4),n(),i(12,"button",5)(13,"span",6),l(14,"Submit"),n()()()(),d(15,"app-code",7)),o&2&&(a(8),s("formGroup",t.exampleForm),a(2),s("invalid",t.isInvalid("checked")),a(),k(t.isInvalid("checked")?11:-1),a(4),s("code",t.code))},dependencies:[F,oe,z,b,E,X,Z,h,v,V,R,P,j,W,O,N,p,M],encapsulation:2})}return e})();var ue=(()=>{class e{value1=!1;value2=!1;value3=!1;code={basic:`<p-togglebutton [(ngModel)]="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
<p-togglebutton [(ngModel)]="value2" onLabel="On" offLabel="Off" class="min-w-20" />
<p-togglebutton [(ngModel)]="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-togglebutton [(ngModel)]="value1" onLabel="On" offLabel="Off" size="small" class="min-w-16" />
    <p-togglebutton [(ngModel)]="value2" onLabel="On" offLabel="Off" class="min-w-20" />
    <p-togglebutton [(ngModel)]="value3" onLabel="On" offLabel="Off" size="large" class="min-w-24" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-sizes-demo',
    templateUrl: './toggle-button-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonSizesDemo {
    value1: boolean = false;

    value2: boolean = false;

    value3: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["onLabel","On","offLabel","Off","size","small",1,"min-w-16",3,"ngModelChange","ngModel"],["onLabel","On","offLabel","Off",1,"min-w-20",3,"ngModelChange","ngModel"],["onLabel","On","offLabel","Off","size","large",1,"min-w-24",3,"ngModelChange","ngModel"],["selector","toggle-button-sizes-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"ToggleButton provides "),i(3,"i"),l(4,"small"),n(),l(5," and "),i(6,"i"),l(7,"large"),n(),l(8," sizes as alternatives to the base."),n()(),i(9,"div",0)(10,"p-togglebutton",1),f("ngModelChange",function(r){return g(t.value1,r)||(t.value1=r),r}),n(),i(11,"p-togglebutton",2),f("ngModelChange",function(r){return g(t.value2,r)||(t.value2=r),r}),n(),i(12,"p-togglebutton",3),f("ngModelChange",function(r){return g(t.value3,r)||(t.value3=r),r}),n()(),d(13,"app-code",4)),o&2&&(a(10),u("ngModel",t.value1),a(),u("ngModel",t.value2),a(),u("ngModel",t.value3),a(),s("code",t.code))},dependencies:[S,b,y,h,v,p,M],encapsulation:2})}return e})();function xe(e,Me){e&1&&(i(0,"p-message",6),l(1,"Consent is mandatory."),n())}var ge=(()=>{class e{messageService=w(A);checked;onSubmit(m){m.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),m.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-togglebutton #model="ngModel" [(ngModel)]="checked" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="country" onLabel="Accept All" offLabel="Reject All" required />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-togglebutton #model="ngModel" [(ngModel)]="checked" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="country" onLabel="Accept All" offLabel="Reject All" required />
            @if (model.invalid && (model.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Consent is mandatory.</p-message>
            }
        </div>
        <button pButton type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'toggle-button-template-driven-forms-demo',
    templateUrl: './toggle-button-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButtonModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    checked: boolean;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["model","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","country","onLabel","Accept All","offLabel","Reject All","required","",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","type","submit"],["pButtonLabel",""],["selector","toggle-button-template-driven-forms-demo",3,"code"]],template:function(o,t){if(o&1){let C=K();d(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",2)(3,"form",3,0),_("ngSubmit",function(){G(C);let B=I(4);return q(t.onSubmit(B))}),i(5,"div",4)(6,"p-togglebutton",5,1),f("ngModelChange",function(B){return G(C),g(t.checked,B)||(t.checked=B),q(B)}),n(),L(8,xe,2,0,"p-message",6),n(),i(9,"button",7)(10,"span",8),l(11,"Submit"),n()()()(),d(12,"app-code",9)}if(o&2){let C=I(4),r=I(7);a(6),u("ngModel",t.checked),s("invalid",r.invalid&&(r.touched||C.submitted)),a(2),k(r.invalid&&(r.touched||C.submitted)?8:-1),a(4),s("code",t.code)}},dependencies:[F,S,z,b,E,$,y,Q,h,v,V,R,P,j,W,O,N,p,M],encapsulation:2})}return e})();var fe=(()=>{class e{checked=!1;code={basic:'<p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" fluid />',html:`<div class="card flex justify-center">
    <p-togglebutton [(ngModel)]="checked" onLabel="On" offLabel="Off" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
    selector: 'toggle-button-fluid-demo',
    templateUrl: './toggle-button-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleButton]
})
export class ToggleButtonFluidDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["fluid-doc"]],decls:6,vars:2,consts:[[1,"card","flex","justify-center"],["onLabel","On","offLabel","Off","fluid","",3,"ngModelChange","ngModel"],["selector","toggle-button-fluid-demo",3,"code"]],template:function(o,t){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"The fluid prop makes the component take up the full width of its container when set to true."),n()(),i(3,"div",0)(4,"p-togglebutton",1),f("ngModelChange",function(r){return g(t.checked,r)||(t.checked=r),r}),n()(),d(5,"app-code",2)),o&2&&(a(4),u("ngModel",t.checked),a(),s("code",t.code))},dependencies:[S,b,y,h,v,p,M],encapsulation:2})}return e})();var be=(()=>{class e{checked=!1;docs=[{data:U("ToggleButton"),key:"ToggleButton"}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["togglebutton-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],["onLabel","Yes","offLabel","No","onIcon","pi pi-check","offIcon","pi pi-times",3,"ngModelChange","ngModel"]],template:function(o,t){o&1&&(i(0,"app-docptviewer",0)(1,"p-togglebutton",1),f("ngModelChange",function(r){return g(t.checked,r)||(t.checked=r),r}),n()()),o&2&&(s("docs",t.docs),a(),u("ngModel",t.checked))},dependencies:[F,le,h,v,S,b,y],encapsulation:2})}return e})();var ve=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:be},{id:"pt.doc.togglebutton",label:"ToggleButton PT Options",component:te,data:U("ToggleButton")}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["togglebutton-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,t){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),l(3,"ToggleButton Pass Through"),n()(),d(4,"app-docsection",2),n()),o&2&&(a(4),s("docs",t.docs))},dependencies:[ie],encapsulation:2})}return e})();var De=()=>["ToggleButton"],he=(()=>{class e{ptComponent=ve;docs=[{id:"import",label:"Import",component:de},{id:"basic",label:"Basic",component:ae},{id:"customized",label:"Customized",component:me},{id:"sizes",label:"Sizes",component:ue},{id:"fluid",label:"Fluid",component:fe},{id:"disabled",label:"Disabled",component:se},{id:"invalid",label:"Invalid",component:ce},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:ge},{id:"reactive",label:"Reactive Forms",component:pe}]},{id:"accessibility",label:"Accessibility",component:re}];static \u0275fac=function(o){return new(o||e)};static \u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ToggleButton Component","header","ToggleButton","description","ToggleButton is used to select a boolean value using a button.","themeDocs","togglebutton",3,"docs","apiDocs","ptDocs"]],template:function(o,t){o&1&&d(0,"app-doc",0),o&2&&s("docs",t.docs)("apiDocs",H(3,De))("ptDocs",t.ptComponent)},dependencies:[ne],encapsulation:2})}return e})();var it=[{path:"",component:he}];export{it as default};
