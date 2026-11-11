import{a as u,b as f}from"./chunk-63F6ZX3Z.js";import{a as de,b as pe}from"./chunk-ZYT4LGUE.js";import{a as se,b as me}from"./chunk-2SUSAFZL.js";import{a as J,b as ce}from"./chunk-JNUBCW5H.js";import{a as k,b as O}from"./chunk-N3SKU25W.js";import{a as K,b as H}from"./chunk-SGEFCG26.js";import"./chunk-W2A7AHXD.js";import{b as M,d as Z,f as y,g as V,h as $,i as S,j as R,k as ee,l as te,p as oe,t as ae,u as h,v as re}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ne}from"./chunk-FKOOMXTU.js";import{a as c}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as le}from"./chunk-XCUGNKAG.js";import{a as x,b as ie}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as j,h as P}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as G,fa as q,ha as U}from"./chunk-MCW4FHXZ.js";import{za as N}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as F}from"./chunk-D2XKNHFS.js";import{$a as Q,Ab as B,Eb as s,Fb as a,Gb as r,Hb as d,Ob as X,Qa as n,Sb as W,X as E,aa as z,ba as L,cc as A,gb as p,hc as i,mc as v,nc as g,oc as b,sc as Y,zb as I}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ue=(()=>{class e{code={basic:`<label for="address1">Address 1</label>
<textarea pTextarea id="address1"></textarea>

<span id="address2">Address 2</span>
<textarea pTextarea aria-labelledby="address2"></textarea>

<textarea pTextarea aria-label="Address Details"></textarea>`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["text-area-accessibility-doc"]],decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){t&1&&(a(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),r(),a(4,"p"),i(5," Textarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via "),a(6,"i"),i(7,"label"),r(),i(8," tag combined with "),a(9,"i"),i(10,"id"),r(),i(11," prop or using "),a(12,"i"),i(13,"aria-labelledby"),r(),i(14,", "),a(15,"i"),i(16,"aria-label"),r(),i(17," props. "),r()(),d(18,"app-code",0),a(19,"h3"),i(20,"Keyboard Support"),r(),a(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),i(26,"Key"),r(),a(27,"th"),i(28,"Function"),r()()(),a(29,"tbody")(30,"tr")(31,"td")(32,"i"),i(33,"tab"),r()(),a(34,"td"),i(35,"Moves focus to the input."),r()()()()()()),t&2&&(n(18),s("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[c,x],encapsulation:2})}return e})();var fe=(()=>{class e{code={basic:'<textarea rows="5"cols="30" pTextarea [autoResize]="true"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea [autoResize]="true"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-auto-resize-demo',
    templateUrl: './input-textarea-auto-resize-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})
export class InputTextareaAutoResizeDemo {
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["autoresize-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"autoResize"],["selector","input-textarea-auto-resize-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"When "),a(3,"i"),i(4,"autoResize"),r(),i(5," is enabled, textarea grows instead of displaying a scrollbar."),r()(),a(6,"div",0),d(7,"textarea",1),r(),d(8,"app-code",2)),t&2&&(n(7),s("autoResize",!0),n(),s("code",o.code))},dependencies:[c,x,f,u],encapsulation:2})}return e})();var xe=(()=>{class e{value;code={basic:'<textarea rows="5" cols="30" pTextarea [(ngModel)]="value"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea  [(ngModel)]="value"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-basic-demo',
    templateUrl: './input-textarea-basic-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaBasicDemo {
    value!: string;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"ngModelChange","ngModel"],["selector","input-textarea-basic-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"Textarea is applied to an input field with "),a(3,"i"),i(4,"pTextarea"),r(),i(5," directive."),r()(),a(6,"div",0)(7,"textarea",1),b("ngModelChange",function(l){return g(o.value,l)||(o.value=l),l}),r()(),d(8,"app-code",2)),t&2&&(n(7),v("ngModel",o.value),n(),s("code",o.code))},dependencies:[h,M,y,S,c,x,f,u],encapsulation:2})}return e})();var ve=(()=>{class e{code={basic:'<textarea rows="5"cols="30" pTextarea [disabled]="true"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea [disabled]="true"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-disabled-demo',
    templateUrl: './input-textarea-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})
export class InputTextareaDisabledDemo {
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["disabled-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"disabled"],["selector","input-textarea-disabled-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"When "),a(3,"i"),i(4,"disabled"),r(),i(5," is present, the element cannot be edited and focused."),r()(),a(6,"div",0),d(7,"textarea",1),r(),d(8,"app-code",2)),t&2&&(n(7),s("disabled",!0),n(),s("code",o.code))},dependencies:[c,x,f,u],encapsulation:2})}return e})();var ge=(()=>{class e{value;code={basic:'<textarea [(ngModel)]="value" variant="filled" rows="5" cols="30" pTextarea></textarea>',html:`<div class="card flex justify-center">
    <textarea [(ngModel)]="value" variant="filled" rows="5" cols="30" pTextarea></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-filled-demo',
    templateUrl: './input-textarea-filled-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaFilledDemo {
    value!: string;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["filled-doc"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","",3,"ngModelChange","ngModel","variant"],["selector","input-textarea-filled-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"Specify the "),a(3,"i"),i(4,"variant"),r(),i(5," property as "),a(6,"i"),i(7,"filled"),r(),i(8," to display the component with a higher visual emphasis than the default "),a(9,"i"),i(10,"outlined"),r(),i(11," style."),r()(),a(12,"div",0)(13,"textarea",1),b("ngModelChange",function(l){return g(o.value,l)||(o.value=l),l}),r()(),d(14,"app-code",2)),t&2&&(n(13),v("ngModel",o.value),s("variant","filled"),n(),s("code",o.code))},dependencies:[h,M,y,S,c,x,f,u],encapsulation:2})}return e})();var be=(()=>{class e{value1="";value2="";value3="";code={basic:`<p-floatlabel>
    <textarea pTextarea id="over_label" [(ngModel)]="value1" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <textarea pTextarea id="in_label" [(ngModel)]="value2" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <textarea pTextarea id="on_label" [(ngModel)]="value3" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-stretch gap-4">
    <p-floatlabel>
        <textarea pTextarea id="over_label" [(ngModel)]="value1" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <textarea pTextarea id="in_label" [(ngModel)]="value2" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <textarea pTextarea id="on_label" [(ngModel)]="value3" rows="5" cols="30" style="resize: none" class="h-full"></textarea>
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: ': 'input-textarea-floatlabel-demo',
    templateUrl: './: 'input-textarea-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule, FloatLabel]
})
export class TextareaFloatlabelDemo {
    value1: string = '';

    value2: string = '';

    value3: string = '';
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["floatlabel-doc"]],decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-stretch","gap-4"],["pTextarea","","id","over_label","rows","5","cols","30",1,"h-full",2,"resize","none",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["pTextarea","","id","in_label","rows","5","cols","30",1,"h-full",2,"resize","none",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pTextarea","","id","on_label","rows","5","cols","30",1,"h-full",2,"resize","none",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-textarea-floatlabel-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2," A floating label appears on top of the input field when focused. Visit "),a(3,"a",0),i(4,"FloatLabel"),r(),i(5," documentation for more information. "),r()(),a(6,"div",1)(7,"p-floatlabel")(8,"textarea",2),b("ngModelChange",function(l){return g(o.value1,l)||(o.value1=l),l}),r(),a(9,"label",3),i(10,"Over Label"),r()(),a(11,"p-floatlabel",4)(12,"textarea",5),b("ngModelChange",function(l){return g(o.value2,l)||(o.value2=l),l}),r(),a(13,"label",6),i(14,"In Label"),r()(),a(15,"p-floatlabel",7)(16,"textarea",8),b("ngModelChange",function(l){return g(o.value3,l)||(o.value3=l),l}),r(),a(17,"label",9),i(18,"On Label"),r()()(),d(19,"app-code",10)),t&2&&(n(8),v("ngModel",o.value1),n(4),v("ngModel",o.value2),n(4),v("ngModel",o.value3),n(3),s("code",o.code))},dependencies:[h,M,y,S,P,j,c,x,me,se,f,u],encapsulation:2})}return e})();var Me=(()=>{class e{value="";code={basic:`<p-iftalabel>
    <textarea pTextarea id="description" [(ngModel)]="value" rows="5" cols="30" style="resize: none"></textarea>
    <label for="description">Description</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <textarea pTextarea id="description" [(ngModel)]="value" rows="5" cols="30" style="resize: none"></textarea>
        <label for="description">Description</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: ': 'input-textarea-iftalabel-demo',
    templateUrl: './: 'input-textarea-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextareaModule, IftaLabelModule]
})
export class TextareaIftaLabelDemo {
    value: string = '';
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["iftalabel-doc"]],decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["pTextarea","","id","description","rows","5","cols","30",2,"resize","none",3,"ngModelChange","ngModel"],["for","description"],["selector","input-textarea-iftalabel-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"IftaLabel is used to create infield top aligned labels. Visit "),a(3,"a",0),i(4,"IftaLabel"),r(),i(5," documentation for more information."),r()(),a(6,"div",1)(7,"p-iftalabel")(8,"textarea",2),b("ngModelChange",function(l){return g(o.value,l)||(o.value=l),l}),r(),a(9,"label",3),i(10,"Description"),r()()(),d(11,"app-code",4)),t&2&&(n(8),v("ngModel",o.value),n(3),s("code",o.code))},dependencies:[h,M,y,S,P,j,c,x,pe,de,f,u],encapsulation:2})}return e})();var ye=(()=>{class e{code={typescript:"import { TextareaModule } from 'primeng/textarea';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["text-area-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&d(0,"app-code",0),t&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return e})();var Te=(()=>{class e{value;code={basic:'<textarea rows="5" cols="30" pTextarea [(ngModel)]="value" [invalid]="!value" placeholder="Address"></textarea>',html:`<div class="card flex justify-center">
    <textarea rows="5" cols="30" pTextarea [(ngModel)]="value" [invalid]="!value" placeholder="Address"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-invalid-demo',
    templateUrl: './input-textarea-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})
export class InputTextareaInvalidDemo {
    value!: string;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["invalid-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["rows","5","cols","30","pTextarea","","placeholder","Address",3,"ngModelChange","ngModel","invalid"],["selector","input-textarea-invalid-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"The invalid state is applied using the "),a(3,"i"),i(4,"\u2060invalid"),r(),i(5," property to indicate failed validation, which can be integrated with Angular Forms."),r()(),a(6,"div",0)(7,"textarea",1),b("ngModelChange",function(l){return g(o.value,l)||(o.value=l),l}),r()(),d(8,"app-code",2)),t&2&&(n(7),v("ngModel",o.value),s("invalid",!o.value),n(),s("code",o.code))},dependencies:[h,M,y,S,c,x,f,u],encapsulation:2})}return e})();function Be(e,Ae){e&1&&(a(0,"p-message",4),i(1,"Address is required.."),r())}var Se=(()=>{class e{fb;messageService=E(N);items;exampleForm;formSubmitted=!1;constructor(m){this.fb=m,this.exampleForm=this.fb.group({address:["",Z.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(m){let t=this.exampleForm.get(m);return t?.invalid&&(t.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('address')"></textarea>
        @if (isInvalid('address')) {
            <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('address')"></textarea>
            @if (isInvalid('address')) {
                <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'input-textarea-reactive-forms-demo',
    templateUrl: './input-textarea-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, TextareaModule, ButtonModule, MessageModule, ToastModule],
})
export class InputTextareaReactiveFormsDemo {
    messageService = inject(MessageService);

    items: any[] | undefined;

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            address: ['', Validators.required]
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
}`};static \u0275fac=function(t){return new(t||e)(Q(ae))};static \u0275cmp=p({type:e,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["rows","5","cols","30","pTextarea","","formControlName","address",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","input-textarea-reactive-forms-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"Textarea can also be used with reactive forms. In this case, the "),a(3,"i"),i(4,"formControlName"),r(),i(5," property is used to bind the component to a form control."),r()(),d(6,"p-toast"),a(7,"div",0)(8,"form",1),W("ngSubmit",function(){return o.onSubmit()}),a(9,"div",2),d(10,"textarea",3),I(11,Be,2,0,"p-message",4),r(),a(12,"button",5)(13,"span",6),i(14,"Submit"),r()()()(),d(15,"app-code",7)),t&2&&(n(8),s("formGroup",o.exampleForm),n(2),s("invalid",o.isInvalid("address")),n(),B(o.isInvalid("address")?11:-1),n(4),s("code",o.code))},dependencies:[F,re,R,M,y,V,ee,te,c,x,U,q,G,O,k,f,u,H,K],encapsulation:2})}return e})();var he=(()=>{class e{value1;value2;value3;code={basic:`<textarea pTextarea [(ngModel)]="value1" pSize="small" placeholder="Small" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value2" placeholder="Normal" rows="3"></textarea>
<textarea pTextarea [(ngModel)]="value3" pSize="large" placeholder="Large" rows="3"></textarea>`,html:`<div class="card flex flex-col items-center gap-4">
    <textarea pTextarea [(ngModel)]="value1" pSize="small" placeholder="Small" rows="3"></textarea>
    <textarea pTextarea [(ngModel)]="value2" placeholder="Normal" rows="3"></textarea>
    <textarea pTextarea [(ngModel)]="value3" pSize="large" placeholder="Large" rows="3"></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-sizes-demo',
    templateUrl: './input-textarea-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaSizesDemo {
    value1!: string;

    value2!: string;

    value3!: string;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["pTextarea","","pSize","small","placeholder","Small","rows","3",3,"ngModelChange","ngModel"],["pTextarea","","placeholder","Normal","rows","3",3,"ngModelChange","ngModel"],["pTextarea","","pSize","large","placeholder","Large","rows","3",3,"ngModelChange","ngModel"],["selector","input-textarea-basic-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"Textarea provides "),a(3,"i"),i(4,"small"),r(),i(5," and "),a(6,"i"),i(7,"large"),r(),i(8," sizes as alternatives to the base."),r()(),a(9,"div",0)(10,"textarea",1),b("ngModelChange",function(l){return g(o.value1,l)||(o.value1=l),l}),r(),a(11,"textarea",2),b("ngModelChange",function(l){return g(o.value2,l)||(o.value2=l),l}),r(),a(12,"textarea",3),b("ngModelChange",function(l){return g(o.value3,l)||(o.value3=l),l}),r()(),d(13,"app-code",4)),t&2&&(n(10),v("ngModel",o.value1),n(),v("ngModel",o.value2),n(),v("ngModel",o.value3),n(),s("code",o.code))},dependencies:[h,M,y,S,c,x,f,u],encapsulation:2})}return e})();function We(e,Ae){e&1&&(a(0,"p-message",6),i(1,"Address is required."),r())}var De=(()=>{class e{messageService=E(N);items=[];value;onSubmit(m){m.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),m.resetForm())}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('adress')"></textarea>
        @if (isInvalid('adress')) {
            <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <textarea rows="5" cols="30" pTextarea formControlName="adress" [invalid]="isInvalid('adress')"></textarea>
            @if (isInvalid('adress')) {
                <p-message severity="error" size="small" variant="simple">Address is required..</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'input-textarea-template-driven-forms-demo',
    templateUrl: './input-textarea-template-driven-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, TextareaModule, ButtonModule, MessageModule, ToastModule],
})
export class TemplateDrivenFormsDoc {
    messageService = inject(MessageService);

    items: any[] | undefined;

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            adress: ['', Validators.required]
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
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["address","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","address","rows","5","cols","30","pTextarea","","required","",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","input-textarea-reactive-forms-demo",3,"code"]],template:function(t,o){if(t&1){let T=X();d(0,"app-docsectiontext")(1,"p-toast"),a(2,"div",2)(3,"form",3,0),W("ngSubmit",function(){z(T);let _=A(4);return L(o.onSubmit(_))})("ngSubmit",function(){z(T);let _=A(4);return L(o.onSubmit(_))}),a(5,"div",4)(6,"textarea",5,1),b("ngModelChange",function(_){return z(T),g(o.value,_)||(o.value=_),L(_)}),r(),I(8,We,2,0,"p-message",6),r(),a(9,"button",7)(10,"span",8),i(11,"Submit"),r()()()(),d(12,"app-code",9)}if(t&2){let T=A(4),l=A(7);n(6),v("ngModel",o.value),s("invalid",l.invalid&&(l.touched||T.submitted)),n(2),B(l.invalid&&(l.touched||T.submitted)?8:-1),n(4),s("code",o.code)}},dependencies:[F,h,R,M,y,V,oe,S,$,c,x,U,q,G,O,k,f,u,H,K],encapsulation:2})}return e})();var Ce=(()=>{class e{value;code={basic:'<textarea rows="5" cols="30" pTextarea [(ngModel)]="value" fluid></textarea>',html:`<div class="card">
    <textarea rows="5" cols="30" pTextarea  [(ngModel)]="value" fluid></textarea>
</div>`,typescript:`import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-textarea-fluid-demo',
    templateUrl: './input-textarea-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, TextareaModule]
})

export class InputTextareaFluidDemo {
    value!: string;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["fluid-doc"]],decls:6,vars:2,consts:[[1,"card"],["rows","5","cols","30","pTextarea","","fluid","",3,"ngModelChange","ngModel"],["selector","input-textarea-fluid-demo",3,"code"]],template:function(t,o){t&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"The fluid prop makes the component take up the full width of its container when set to true."),r()(),a(3,"div",0)(4,"textarea",1),b("ngModelChange",function(l){return g(o.value,l)||(o.value=l),l}),r()(),d(5,"app-code",2)),t&2&&(n(4),v("ngModel",o.value),n(),s("code",o.code))},dependencies:[h,M,y,S,c,x,f,u],encapsulation:2})}return e})();var we=(()=>{class e{value=null;docs=[{data:J("Textarea"),key:"Textarea"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["textarea-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],["pTextarea","","rows","5","cols","30",2,"resize","none",3,"ngModelChange","ngModel"]],template:function(t,o){t&1&&(a(0,"app-docptviewer",0)(1,"textarea",1),b("ngModelChange",function(l){return g(o.value,l)||(o.value=l),l}),r()()),t&2&&(s("docs",o.docs),n(),v("ngModel",o.value))},dependencies:[F,ce,f,u,h,M,y,S],encapsulation:2})}return e})();var Fe=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:we},{id:"pt.doc.textarea",label:"Textarea PT Options",component:ie,data:J("Textarea")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["textarea-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,o){t&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),i(3,"Textarea Pass Through"),r()(),d(4,"app-docsection",2),r()),t&2&&(n(4),s("docs",o.docs))},dependencies:[F,le],encapsulation:2})}return e})();var Ne=()=>["Textarea"],_e=(()=>{class e{ptComponent=Fe;docs=[{id:"import",label:"Import",component:ye},{id:"basic",label:"Basic",component:xe},{id:"autoresize",label:"AutoResize",component:fe},{id:"floatlabel",label:"Float Label",component:be},{id:"iftalabel",label:"Ifta Label",component:Me},{id:"sizes",label:"Sizes",component:he},{id:"fluid",label:"Fluid",component:Ce},{id:"filled",label:"Filled",component:ge},{id:"disabled",label:"Disabled",component:ve},{id:"invalid",label:"Invalid",component:Te},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:De},{id:"reactive",label:"Reactive Forms",component:Se}]},{id:"accessibility",label:"Accessibility",component:ue}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Textarea Component","header","Textarea","description","Textarea adds styling and autoResize functionality to standard textarea element.","themeDocs","textearea",3,"docs","apiDocs","ptDocs"]],template:function(t,o){t&1&&d(0,"app-doc",0),t&2&&s("docs",o.docs)("apiDocs",Y(3,Ne))("ptDocs",o.ptComponent)},dependencies:[ne],encapsulation:2})}return e})();var No=[{path:"",component:_e}];export{No as default};
