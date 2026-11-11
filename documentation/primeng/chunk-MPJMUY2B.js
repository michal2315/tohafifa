import{a as g,b as C}from"./chunk-IYEEPUY3.js";import"./chunk-3Y7QSSKK.js";import{a as J,b as pe}from"./chunk-JNUBCW5H.js";import{a as q,b as G}from"./chunk-N3SKU25W.js";import{a as U,b as k}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{d as $,f as v,g as A,h as ee,i as M,j as z,k as te,l as oe,p as ie,t as ne,u as h,v as le}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as se}from"./chunk-FKOOMXTU.js";import{a as y}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as re}from"./chunk-XCUGNKAG.js";import{a as b,b as ae}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as R,fa as I,ha as P}from"./chunk-MCW4FHXZ.js";import{za as N}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as F}from"./chunk-D2XKNHFS.js";import{$a as H,Ab as L,Eb as r,Fb as i,Gb as n,Gc as Z,Hb as u,Ob as W,Qa as s,Sb as V,X as T,aa as w,ba as O,cc as j,gb as m,gc as X,hc as l,mb as Q,mc as c,nc as d,oc as f,sc as Y,zb as E}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var me=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["select-button-accessibility-doc"]],decls:41,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,e){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),n(),i(4,"p"),l(5," The container element that wraps the buttons has a "),i(6,"i"),l(7,"group"),n(),l(8," role whereas each button element uses "),i(9,"i"),l(10,"button"),n(),l(11," role and "),i(12,"i"),l(13,"aria-pressed"),n(),l(14," is updated depending on selection state. Value to describe an option is automatically set using the "),i(15,"i"),l(16,"ariaLabel"),n(),l(17," property that refers to the label of an option so it is still suggested to define a label even the option display consists of presentational content like icons only. "),n()(),i(18,"h3"),l(19,"Keyboard Support"),n(),i(20,"div",0)(21,"table",1)(22,"thead")(23,"tr")(24,"th"),l(25,"Key"),n(),i(26,"th"),l(27,"Function"),n()()(),i(28,"tbody")(29,"tr")(30,"td")(31,"i"),l(32,"tab"),n()(),i(33,"td"),l(34,"Moves focus to the buttons."),n()(),i(35,"tr")(36,"td")(37,"i"),l(38,"space"),n()(),i(39,"td"),l(40,"Toggles the checked state of a button."),n()()()()()())},dependencies:[b],encapsulation:2})}return t})();var ue=(()=>{class t{stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}];value="one-way";code={basic:'<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />',html:`<div class="card flex justify-center">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" aria-labelledby="basic" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-basic-demo',
    templateUrl: './select-button-basic-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonBasicDemo {
    stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

    value: string = 'off';
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["basic-doc"]],decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","label","optionValue","value","aria-labelledby","basic",3,"ngModelChange","options","ngModel"],["selector","select-button-basic-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"SelectButton requires a value to bind and a collection of options."),n()(),i(3,"div",0)(4,"p-selectbutton",1),f("ngModelChange",function(a){return d(e.value,a)||(e.value=a),a}),n()(),u(5,"app-code",2)),o&2&&(s(4),r("options",e.stateOptions),c("ngModel",e.value),s(),r("code",e.code))},dependencies:[h,v,M,C,g,b,y],encapsulation:2})}return t})();var ce=(()=>{class t{stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}];stateOptions2=[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2",constant:!0}];value1="off";value2="Option 1";code={basic:`<p-selectbutton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true" />

<p-selectbutton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant" />`,html:`<div class="card flex justify-center">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true" />
    <p-selectbutton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-disabled-demo',
    templateUrl: './select-button-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonDisabledDemo {
    stateOptions: any[] = [
        { label: 'Off', value: 'off' },
        { label: 'On', value: 'on' }
    ];

    stateOptions2: any[] = [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2', constant: true }
    ];

    value1: string = 'off';

    value2: string = 'Option 1';
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["disabled-doc"]],decls:13,vars:6,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel","disabled"],["optionLabel","label","optionValue","value","optionDisabled","constant",3,"ngModelChange","options","ngModel"],["selector","select-button-disabled-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"When "),i(3,"i"),l(4,"disabled"),n(),l(5," is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the "),i(6,"i"),l(7,"optionDisabled"),n(),l(8," property."),n()(),i(9,"div",0)(10,"p-selectbutton",1),f("ngModelChange",function(a){return d(e.value1,a)||(e.value1=a),a}),n(),i(11,"p-selectbutton",2),f("ngModelChange",function(a){return d(e.value2,a)||(e.value2=a),a}),n()(),u(12,"app-code",3)),o&2&&(s(10),r("options",e.stateOptions),c("ngModel",e.value1),r("disabled",!0),s(),r("options",e.stateOptions2),c("ngModel",e.value2),s(),r("code",e.code))},dependencies:[h,v,M,C,g,b,y],encapsulation:2})}return t})();var de=(()=>{class t{code={typescript:"import { SelectButtonModule } from 'primeng/selectbutton';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["select-button-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,e){o&1&&u(0,"app-code",0),o&2&&r("code",e.code)("hideToggleCode",!0)},dependencies:[y],encapsulation:2})}return t})();var fe=(()=>{class t{stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}];value;code={basic:'<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" [invalid]="value === null" />',html:`<div class="card flex justify-center">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" [invalid]="value === null" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-invalid-demo',
    templateUrl: './select-button-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonInvalidDemo {
    stateOptions: any[] = [
        { label: 'One-Way', value: 'one-way' },
        { label: 'Return', value: 'return' }
    ];

    value: string | undefined;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["invalid-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel","invalid"],["selector","select-button-invalid-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"The invalid state is applied using the "),i(3,"i"),l(4,"\u2060invalid"),n(),l(5," property to indicate failed validation, which can be integrated with Angular Forms."),n()(),i(6,"div",0)(7,"p-selectbutton",1),f("ngModelChange",function(a){return d(e.value,a)||(e.value=a),a}),n()(),u(8,"app-code",2)),o&2&&(s(7),r("options",e.stateOptions),c("ngModel",e.value),r("invalid",e.value===void 0),s(),r("code",e.code))},dependencies:[h,v,M,C,g,b,y],encapsulation:2})}return t})();var ve=(()=>{class t{paymentOptions=[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}];value;code={basic:'<p-selectbutton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value" />',html:`<div class="card flex justify-center">
    <p-selectbutton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-multiple-demo',
    templateUrl: './select-button-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonMultipleDemo {
    value!: number;

    paymentOptions: any[] = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];

}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["multiple-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","optionValue","value",3,"ngModelChange","options","ngModel","multiple"],["selector","select-button-multiple-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"SelectButton allows selecting only one item by default and setting "),i(3,"i"),l(4,"multiple"),n(),l(5," option enables choosing more than one item. In multiple case, model property should be an array."),n()(),i(6,"div",0)(7,"p-selectbutton",1),f("ngModelChange",function(a){return d(e.value,a)||(e.value=a),a}),n()(),u(8,"app-code",2)),o&2&&(s(7),r("options",e.paymentOptions),c("ngModel",e.value),r("multiple",!0),s(),r("code",e.code))},dependencies:[h,v,M,C,g,b,y],encapsulation:2})}return t})();function _e(t,K){t&1&&(i(0,"p-message",4),l(1,"Selection is required"),n())}var ge=(()=>{class t{fb;messageService=T(N);exampleForm;formSubmitted=!1;stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}];constructor(p){this.fb=p,this.exampleForm=this.fb.group({value:["",$.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(p){let o=this.exampleForm.get(p);return o?.invalid&&(o.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-selectbutton [options]="stateOptions" formControlName="value" [invalid]="isInvalid('value')" optionLabel="label" optionValue="value" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Selection is required</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-selectbutton [options]="stateOptions" formControlName="value" [invalid]="isInvalid('value')" optionLabel="label" optionValue="value" />
            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">Selection is required</p-message>
            }
        </div>
        <button pButton type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'select-button-reactive-forms-demo',
    templateUrl: './select-button-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, SelectButtonModule, ButtonModule, ToastModule, MessageModule]
})
export class SelectButtonReactiveFormsDemo implements OnInit {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    stateOptions: any[] = [
        { label: 'One-Way', value: 'one-way' },
        { label: 'Return', value: 'return' }
    ];

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
}`};static \u0275fac=function(o){return new(o||t)(H(ne))};static \u0275cmp=m({type:t,selectors:[["reactive-forms-doc"]],decls:16,vars:5,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","value","optionLabel","label","optionValue","value",3,"options","invalid"],["severity","error","size","small","variant","simple"],["pButton","","type","submit"],["pButtonLabel",""],["selector","select-button-reactive-forms-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"SelectButton can also be used with reactive forms. In this case, the "),i(3,"i"),l(4,"formControlName"),n(),l(5," property is used to bind the component to a form control."),n()(),u(6,"p-toast"),i(7,"div",0)(8,"form",1),V("ngSubmit",function(){return e.onSubmit()}),i(9,"div",2),u(10,"p-selectbutton",3),E(11,_e,2,0,"p-message",4),n(),i(12,"button",5)(13,"span",6),l(14,"Submit"),n()()()(),u(15,"app-code",7)),o&2&&(s(8),r("formGroup",e.exampleForm),s(2),r("options",e.stateOptions)("invalid",e.isInvalid("value")),s(),L(e.isInvalid("value")?11:-1),s(4),r("code",e.code))},dependencies:[le,z,v,A,te,oe,C,g,k,U,P,I,R,G,q,b,y,F],encapsulation:2})}return t})();var be=(()=>{class t{value1;value2="Beginner";value3="Expert";options=[{label:"Beginner",value:"Beginner"},{label:"Expert",value:"Expert"}];code={basic:`<p-selectbutton [(ngModel)]="value1" [options]="options" size="small" />
<p-selectbutton [(ngModel)]="value2" [options]="options" />
<p-selectbutton [(ngModel)]="value3" [options]="options" size="large" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-selectbutton [(ngModel)]="value1" [options]="options" size="small" />
    <p-selectbutton [(ngModel)]="value2" [options]="options" />
    <p-selectbutton [(ngModel)]="value3" [options]="options" size="large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-sizes-demo',
    templateUrl: './select-button-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonSizesDemo {
    value1! : string;

    value2 : string = 'Beginner';

    value3 : string = 'Expert';

    options: any[] = [
        { label: 'Beginner', value: 'Beginner' },
        { label: 'Expert', value: 'Expert' },
    ];
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["sizes-doc"]],decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small",3,"ngModelChange","ngModel","options"],[3,"ngModelChange","ngModel","options"],["size","large",3,"ngModelChange","ngModel","options"],["selector","select-button-sizes-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"SelectButton provides "),i(3,"i"),l(4,"small"),n(),l(5," and "),i(6,"i"),l(7,"large"),n(),l(8," sizes as alternatives to the base."),n()(),i(9,"div",0)(10,"p-selectbutton",1),f("ngModelChange",function(a){return d(e.value1,a)||(e.value1=a),a}),n(),i(11,"p-selectbutton",2),f("ngModelChange",function(a){return d(e.value2,a)||(e.value2=a),a}),n(),i(12,"p-selectbutton",3),f("ngModelChange",function(a){return d(e.value3,a)||(e.value3=a),a}),n()(),u(13,"app-code",4)),o&2&&(s(10),c("ngModel",e.value1),r("options",e.options),s(),c("ngModel",e.value2),r("options",e.options),s(),c("ngModel",e.value3),r("options",e.options),s(),r("code",e.code))},dependencies:[h,v,M,g,b,y],encapsulation:2})}return t})();function we(t,K){if(t&1&&u(0,"i"),t&2){let p=K.$implicit;X(p.icon)}}var ye=(()=>{class t{value;justifyOptions=[{icon:"pi pi-align-left",justify:"Left"},{icon:"pi pi-align-right",justify:"Right"},{icon:"pi pi-align-center",justify:"Center"},{icon:"pi pi-align-justify",justify:"Justify"}];code={basic:`<p-selectbutton [options]="justifyOptions" [(ngModel)]="value" optionLabel="justify">
    <ng-template #item let-item>
        <i [class]="item.icon"></i>
    </ng-template>
</p-selectbutton>`,html:`<div class="card flex justify-center">
    <p-selectbutton [options]="justifyOptions" [(ngModel)]="value" optionLabel="justify">
            <ng-template #item let-item>
                <i [class]="item.icon"></i>
            </ng-template>
    </p-selectbutton>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-template-demo',
    templateUrl: './select-button-template-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButtonModule]
})
export class SelectButtonTemplateDemo {
    value: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-align-left', justify: 'Left' },
        { icon: 'pi pi-align-right', justify: 'Right' },
        { icon: 'pi pi-align-center', justify: 'Center' },
        { icon: 'pi pi-align-justify', justify: 'Justify' }
    ];

}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["template-doc"]],decls:11,vars:3,consts:[["item",""],[1,"card","flex","justify-center"],["optionLabel","justify",3,"ngModelChange","options","ngModel"],["selector","select-button-template-demo",3,"code"]],template:function(o,e){if(o&1){let S=W();i(0,"app-docsectiontext")(1,"p"),l(2,"For custom content support define a template named "),i(3,"i"),l(4,"item"),n(),l(5," where the default local template variable refers to an option."),n()(),i(6,"div",1)(7,"p-selectbutton",2),f("ngModelChange",function(x){return w(S),d(e.value,x)||(e.value=x),O(x)}),Q(8,we,1,2,"ng-template",null,0,Z),n()(),u(10,"app-code",3)}o&2&&(s(7),r("options",e.justifyOptions),c("ngModel",e.value),s(3),r("code",e.code))},dependencies:[h,v,M,g,b,y],encapsulation:2})}return t})();function Oe(t,K){t&1&&(i(0,"p-message",6),l(1,"Selection is required."),n())}var Se=(()=>{class t{messageService=T(N);value;stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}];onSubmit(p){p.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),p.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-selectbutton #model="ngModel" [(ngModel)]="value" [options]="stateOptions" optionLabel="label" optionValue="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" required name="value" />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
        }
    </div>
    <button pButton type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-selectbutton #model="ngModel" [(ngModel)]="value" [options]="stateOptions" optionLabel="label" optionValue="value" [invalid]="model.invalid && (model.touched || exampleForm.submitted)" required name="value" />
            @if (model.invalid && (model.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
            }
        </div>
        <button pButton type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'selectbutton-template-driven-forms-demo',
    templateUrl: './selectbutton-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButtonModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo implements OnInit {
    messageService = inject(MessageService);

    value: any;

    stateOptions: any[] = [
        { label: 'One-Way', value: 'one-way' },
        { label: 'Return', value: 'return' }
    ];

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["template-driven-forms-doc"]],decls:13,vars:5,consts:[["exampleForm","ngForm"],["model","ngModel"],[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["optionLabel","label","optionValue","value","required","","name","value",3,"ngModelChange","ngModel","options","invalid"],["severity","error","size","small","variant","simple"],["pButton","","type","submit"],["pButtonLabel",""],["selector","selectbutton-template-driven-forms-demo",3,"code"]],template:function(o,e){if(o&1){let S=W();u(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",2)(3,"form",3,0),V("ngSubmit",function(){w(S);let x=j(4);return O(e.onSubmit(x))}),i(5,"div",4)(6,"p-selectbutton",5,1),f("ngModelChange",function(x){return w(S),d(e.value,x)||(e.value=x),O(x)}),n(),E(8,Oe,2,0,"p-message",6),n(),i(9,"button",7)(10,"span",8),l(11,"Submit"),n()()()(),u(12,"app-code",9)}if(o&2){let S=j(4),a=j(7);s(6),c("ngModel",e.value),r("options",e.stateOptions)("invalid",a.invalid&&(a.touched||S.submitted)),s(2),L(a.invalid&&(a.touched||S.submitted)?8:-1),s(4),r("code",e.code)}},dependencies:[h,z,v,A,ie,M,ee,g,k,U,P,I,R,G,q,b,y,F],encapsulation:2})}return t})();var Me=(()=>{class t{stateOptions=[{label:"One-Way",value:"one-way"},{label:"Return",value:"return"}];value="one-way";code={basic:'<p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" fluid />',html:`<div class="card">
    <p-selectbutton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
    selector: 'select-button-fluid-demo',
    templateUrl: './select-button-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, SelectButton]
})
export class SelectButtonFluidDemo {
    stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' },{ label: 'Return', value: 'return' }];

    value: string = 'off';
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["fluid-doc"]],decls:6,vars:3,consts:[[1,"card"],["optionLabel","label","optionValue","value","fluid","",3,"ngModelChange","options","ngModel"],["selector","select-button-fluid-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"The fluid prop makes the component take up the full width of its container when set to true."),n()(),i(3,"div",0)(4,"p-selectbutton",1),f("ngModelChange",function(a){return d(e.value,a)||(e.value=a),a}),n()(),u(5,"app-code",2)),o&2&&(s(4),r("options",e.stateOptions),c("ngModel",e.value),s(),r("code",e.code))},dependencies:[h,v,M,C,g,b,y],encapsulation:2})}return t})();var he=(()=>{class t{value="One-Way";options=["One-Way","Return"];docs=[{data:J("SelectButton"),key:"SelectButton"}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["selectbutton-pt-viewer"]],decls:2,vars:3,consts:[[3,"docs"],[3,"ngModelChange","ngModel","options"]],template:function(o,e){o&1&&(i(0,"app-docptviewer",0)(1,"p-selectbutton",1),f("ngModelChange",function(a){return d(e.value,a)||(e.value=a),a}),n()()),o&2&&(r("docs",e.docs),s(),c("ngModel",e.value),r("options",e.options))},dependencies:[F,h,v,M,pe,C,g],encapsulation:2})}return t})();var Ce=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:he},{id:"pt.doc.selectbutton",label:"SelectButton PT Options",component:ae,data:J("SelectButton")}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["selectbutton-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,e){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),l(3,"SelectButton Pass Through"),n()(),u(4,"app-docsection",2),n()),o&2&&(s(4),r("docs",e.docs))},dependencies:[F,re],encapsulation:2})}return t})();var Te=()=>["SelectButton"],De=(()=>{class t{ptComponent=Ce;docs=[{id:"import",label:"Import",component:de},{id:"basic",label:"Basic",component:ue},{id:"multiple",label:"Multiple",component:ve},{id:"template",label:"Template",component:ye},{id:"sizes",label:"Sizes",component:be},{id:"fluid",label:"Fluid",component:Me},{id:"disabled",label:"Disabled",component:ce},{id:"invalid",label:"Invalid",component:fe},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Se},{id:"reactive",label:"Reactive Forms",component:ge}]},{id:"accessibility",label:"Accessibility",component:me}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=m({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular SelectButton Component","header","SelectButton","description","SelectButton is used to choose single or multiple items from a list using buttons.","themeDocs","selectbutton",3,"docs","apiDocs","ptDocs"]],template:function(o,e){o&1&&u(0,"app-doc",0),o&2&&r("docs",e.docs)("apiDocs",Y(3,Te))("ptDocs",e.ptComponent)},dependencies:[se],encapsulation:2})}return t})();var co=[{path:"",component:De}];export{co as default};
