import{a as v,b}from"./chunk-LAJAK5DB.js";import{a as H,b as se}from"./chunk-JNUBCW5H.js";import{a as G,b as U}from"./chunk-N3SKU25W.js";import{a as O,b as q}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{d as X,f,g as L,h as ee,i as x,j as R,k as oe,l as te,t as ie,u as C,v as ne}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as le}from"./chunk-FKOOMXTU.js";import{a as c,b as u}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as me}from"./chunk-XCUGNKAG.js";import{a as g,b as ae}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as P,fa as V,ga as re,ha as w}from"./chunk-MCW4FHXZ.js";import{za as j}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as I}from"./chunk-D2XKNHFS.js";import{$a as Y,Ab as B,Eb as s,Fb as i,Gb as n,Hb as p,Ob as Z,Qa as m,Sb as T,Ub as N,X as K,aa as J,ba as Q,cc as W,gb as d,hc as t,ic as z,mc as M,nc as y,oc as S,sc as $,zb as A}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var pe=(()=>{class o{code={basic:`<span id="label_number">Number</span>
<p-knob ariaLabelledBy="label_number"/>

<p-knob ariaLabel="Number"/>`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["knob-accessibility-doc"]],decls:84,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(e,r){e&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),n(),i(4,"p"),t(5," Knob element component uses "),i(6,"i"),t(7,"slider"),n(),t(8," role in addition to the "),i(9,"i"),t(10,"aria-valuemin"),n(),t(11,", "),i(12,"i"),t(13,"aria-valuemax"),n(),t(14," and "),i(15,"i"),t(16,"aria-valuenow"),n(),t(17," attributes. Value to describe the component can be defined using "),i(18,"i"),t(19,"ariaLabelledBy"),n(),t(20," and "),i(21,"i"),t(22,"ariaLabel"),n(),t(23," props. "),n()(),p(24,"app-code",0),i(25,"h3"),t(26,"Keyboard Support"),n(),i(27,"div",1)(28,"table",2)(29,"thead")(30,"tr")(31,"th"),t(32,"Key"),n(),i(33,"th"),t(34,"Function"),n()()(),i(35,"tbody")(36,"tr")(37,"td")(38,"i"),t(39,"tab"),n()(),i(40,"td"),t(41,"Moves focus to the slider."),n()(),i(42,"tr")(43,"td")(44,"span",3)(45,"i",4),t(46,"left arrow"),n(),i(47,"i"),t(48,"down arrow"),n()()(),i(49,"td"),t(50,"Decrements the value."),n()(),i(51,"tr")(52,"td")(53,"span",3)(54,"i",4),t(55,"right arrow"),n(),i(56,"i"),t(57,"up arrow"),n()()(),i(58,"td"),t(59,"Increments the value."),n()(),i(60,"tr")(61,"td")(62,"i"),t(63,"home"),n()(),i(64,"td"),t(65,"Set the minimum value."),n()(),i(66,"tr")(67,"td")(68,"i"),t(69,"end"),n()(),i(70,"td"),t(71,"Set the maximum value."),n()(),i(72,"tr")(73,"td")(74,"i"),t(75,"page up"),n()(),i(76,"td"),t(77,"Increments the value by 10 steps."),n()(),i(78,"tr")(79,"td")(80,"i"),t(81,"page down"),n()(),i(82,"td"),t(83,"Decrements the value by 10 steps."),n()()()()()()),e&2&&(m(24),s("code",r.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,c,g],encapsulation:2})}return o})();var de=(()=>{class o{value;code={basic:'<p-knob [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-basic-demo',
    templateUrl: './knob-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobBasicDemo {
    value!: number;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","knob-basic-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Knob is an input component and used with the standard "),i(3,"i"),t(4,"ngModel"),n(),t(5," directive."),n()(),i(6,"div",0)(7,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(8,"app-code",2)),e&2&&(m(7),M("ngModel",r.value),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var ce=(()=>{class o{value=50;code={basic:'<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />',html:`<div class="card flex justify-center">
<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-color-demo',
    templateUrl: './knob-color-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobColorDemo {
    value: number = 50;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["color-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["valueColor","SlateGray","rangeColor","MediumTurquoise",3,"ngModelChange","ngModel"],["selector","knob-color-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Colors are customized with the "),i(3,"i"),t(4,"textColor"),n(),t(5,", "),i(6,"i"),t(7,"rangeColor"),n(),t(8," and "),i(9,"i"),t(10,"valueColor"),n(),t(11," properties."),n()(),i(12,"div",0)(13,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(14,"app-code",2)),e&2&&(m(13),M("ngModel",r.value),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var ue=(()=>{class o{value=75;code={basic:'<p-knob [(ngModel)]="value" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-disabled-demo',
    templateUrl: './knob-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobDisabledDemo {
    value: number = 75;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","knob-disabled-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"disabled"),n(),t(5," is present, a visual hint is applied to indicate that the Knob cannot be interacted with."),n()(),i(6,"div",0)(7,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(8,"app-code",2)),e&2&&(m(7),M("ngModel",r.value),s("disabled",!0),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var fe=(()=>{class o{code={typescript:"import { KnobModule } from 'primeng/knob';"};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["knob-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(e,r){e&1&&p(0,"app-code",0),e&2&&s("code",r.code)("hideToggleCode",!0)},dependencies:[u,c],encapsulation:2})}return o})();var ve=(()=>{class o{value=10;code={basic:'<p-knob [(ngModel)]="value" [min]="-50" [max]="50" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [min]="-50" [max]="50" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-min-max-demo',
    templateUrl: './knob-min-max-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobMinMaxDemo {
    value: number = 10;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["min-max-doc"]],decls:12,vars:4,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","min","max"],["selector","knob-min-max-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Boundaries are configured with the "),i(3,"i"),t(4,"min"),n(),t(5," and "),i(6,"i"),t(7,"max"),n(),t(8," properties whose defaults are 0 and 100 respectively."),n()(),i(9,"div",0)(10,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(11,"app-code",2)),e&2&&(m(10),M("ngModel",r.value),s("min",-50)("max",50),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var be=(()=>{class o{value=0;docs=[{data:H("Knob"),key:"Knob"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["knob-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"ngModelChange","ngModel"]],template:function(e,r){e&1&&(i(0,"app-docptviewer",0)(1,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()()),e&2&&(s("docs",r.docs),m(),M("ngModel",r.value))},dependencies:[I,se,b,v,C,f,x],encapsulation:2})}return o})();var ge=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:be},{id:"pt.doc.knob",label:"Knob PT Options",component:ae,data:H("Knob")}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["knob-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(e,r){e&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),t(3,"Knob Pass Through"),n()(),p(4,"app-docsection",2),n()),e&2&&(m(4),s("docs",r.docs))},dependencies:[I,me],encapsulation:2})}return o})();var ye=(()=>{class o{value=0;code={basic:`<p-knob [(ngModel)]="value" size="150" readonly="true"/>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>`,html:`<div class="card flex flex-col items-center gap-2">
<p-knob [(ngModel)]="value" size="150" readonly="true"/>
<div class="flex gap-2">
    <p-button icon="pi pi-plus" (click)="value = value+1" [disabled]="value >= 100" />
    <p-button icon="pi pi-minus" (click)="value = value-1" [disabled]="value <= 0" />
</div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'knob-reactive-demo',
    templateUrl: './knob-reactive-demo.html',
    standalone: true,
    imports: [FormsModule, Knob, ButtonModule]
})
export class KnobReactiveDemo {
    value: number = 0;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["reactive-doc"]],decls:9,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-2"],["size","150","readonly","true",3,"ngModelChange","ngModel"],[1,"flex","gap-2"],["icon","pi pi-plus",3,"click","disabled"],["icon","pi pi-minus",3,"click","disabled"],["selector","knob-reactive-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Knob can be controlled with custom controls as well."),n()(),i(3,"div",0)(4,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n(),i(5,"div",2)(6,"p-button",3),T("click",function(){return r.value=r.value+1}),n(),i(7,"p-button",4),T("click",function(){return r.value=r.value-1}),n()()(),p(8,"app-code",5)),e&2&&(m(4),M("ngModel",r.value),m(2),s("disabled",r.value>=100),m(),s("disabled",r.value<=0),m(),s("code",r.code))},dependencies:[C,f,x,b,v,w,re,u,c,g],encapsulation:2})}return o})();function Ke(o,Te){if(o&1&&(i(0,"p-message",4),t(1),n()),o&2){let a=N();m(),z(a.getErrorMessage("value"))}}var Se=(()=>{class o{fb;messageService=K(j);items;exampleForm;formSubmitted=!1;constructor(a){this.fb=a,this.exampleForm=this.fb.group({value:[15,[X.min(25),X.max(75)]]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset({value:15}),this.formSubmitted=!1)}getControl(a){return this.exampleForm?.get(a)??null}getErrorMessage(a){let e=this.getControl(a);if(!e||!e.errors)return null;if(e.errors.min)return"Value must be greater than 15.";if(e.errors.max)return"Must be less than 75."}isInvalid(a){let e=this.getControl(a);return e?.invalid&&(e.dirty||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <p-knob formControlName="value" [invalid]="isInvalid('value')" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">{{ getErrorMessage('value') }}</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col items-center gap-1">
            <p-knob formControlName="value" [invalid]="isInvalid('value')" />
            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">{{ getErrorMessage('value') }}</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'knob-reactive-forms-demo',
    templateUrl: './knob-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, KnobModule, MessageModule, ToastModule, ButtonModule]
})
export class KnobReactiveFormsDemo {
    messageService = inject(MessageService);

    items: any[] | undefined;

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            value: [15, [Validators.min(25), Validators.max(75)]]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            this.exampleForm.reset({
                value: 15
            });
            this.formSubmitted = false;
        }
    }

    getControl(controlName: string): AbstractControl | null {
        return this.exampleForm?.get(controlName) ?? null;
    }

    getErrorMessage(controlName: string): string | null {
        const control = this.getControl(controlName);
        if (!control || !control.errors) return null;

        if (control.errors['min']) {
            return 'Value must be greater than 15.';
        }

        if (control.errors['max']) {
            return 'Must be less than 75.';
        }
    }

    isInvalid(controlName: string) {
        const control = this.getControl(controlName);
        return control?.invalid && (control.dirty || this.formSubmitted);
    }
}`};static \u0275fac=function(e){return new(e||o)(Y(ie))};static \u0275cmp=d({type:o,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","items-center","gap-1"],["formControlName","value",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","knob-reactive-forms-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Knob can also be used with reactive forms. In this case, the "),i(3,"i"),t(4,"formControlName"),n(),t(5," property is used to bind the component to a form control."),n()(),p(6,"p-toast"),i(7,"div",0)(8,"form",1),T("ngSubmit",function(){return r.onSubmit()}),i(9,"div",2),p(10,"p-knob",3),A(11,Ke,2,1,"p-message",4),n(),i(12,"button",5)(13,"span",6),t(14,"Submit"),n()()()(),p(15,"app-code",7)),e&2&&(m(8),s("formGroup",r.exampleForm),m(2),s("invalid",r.isInvalid("value")),m(),B(r.isInvalid("value")?11:-1),m(4),s("code",r.code))},dependencies:[ne,R,f,L,oe,te,b,v,w,V,P,q,O,U,G,u,c,g],encapsulation:2})}return o})();var xe=(()=>{class o{value=50;code={basic:'<p-knob [(ngModel)]="value" [readonly]="true" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [readonly]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-readonly-demo',
    templateUrl: './knob-readonly-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobReadonlyDemo {
    value: number = 50;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["readonly-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","readonly"],["selector","knob-readonly-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"readonly"),n(),t(5," present, value cannot be edited."),n()(),i(6,"div",0)(7,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(8,"app-code",2)),e&2&&(m(7),M("ngModel",r.value),s("readonly",!0),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var Ce=(()=>{class o{value=60;code={basic:'<p-knob [(ngModel)]="value" [size]="200" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [size]="200" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-size-demo',
    templateUrl: './knob-size-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobSizeDemo {
    value: number = 60;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["size-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","size"],["selector","knob-size-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Diameter of the knob is defined in pixels using the "),i(3,"i"),t(4,"size"),n(),t(5," property."),n()(),i(6,"div",0)(7,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(8,"app-code",2)),e&2&&(m(7),M("ngModel",r.value),s("size",200),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var he=(()=>{class o{value;code={basic:'<p-knob [(ngModel)]="value" [step]="10" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [step]="10" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-step-demo',
    templateUrl: './knob-step-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobStepDemo {
    value!: number;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["step-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","step"],["selector","knob-step-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Size of each movement is defined with the "),i(3,"i"),t(4,"step"),n(),t(5," property."),n()(),i(6,"div",0)(7,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(8,"app-code",2)),e&2&&(m(7),M("ngModel",r.value),s("step",10),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var De=(()=>{class o{value=40;code={basic:'<p-knob [(ngModel)]="value" [strokeWidth]="5" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" [strokeWidth]="5" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-stroke-demo',
    templateUrl: './knob-stroke-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobStrokeDemo {
    value: number = 40;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["stroke-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","strokeWidth"],["selector","knob-stroke-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The border size is specified with the "),i(3,"i"),t(4,"strokeWidth"),n(),t(5," property as a number in pixels."),n()(),i(6,"div",0)(7,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(8,"app-code",2)),e&2&&(m(7),M("ngModel",r.value),s("strokeWidth",5),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();var ke=(()=>{class o{value=60;code={basic:'<p-knob [(ngModel)]="value" valueTemplate="{value}%" />',html:`<div class="card flex justify-center">
    <p-knob [(ngModel)]="value" valueTemplate="{value}%" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
    selector: 'knob-template-demo',
    templateUrl: './knob-template-demo.html',
    standalone: true,
    imports: [FormsModule, Knob]
})
export class KnobTemplateDemo {
    value: number = 60;
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["template-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["valueTemplate","{value}%",3,"ngModelChange","ngModel"],["selector","knob-template-demo",3,"code"]],template:function(e,r){e&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Label is a string template that can be customized with the "),i(3,"i"),t(4,"valueTemplate"),n(),t(5," property having 60 as the placeholder ."),n()(),i(6,"div",0)(7,"p-knob",1),S("ngModelChange",function(l){return y(r.value,l)||(r.value=l),l}),n()(),p(8,"app-code",2)),e&2&&(m(7),M("ngModel",r.value),m(),s("code",r.code))},dependencies:[C,f,x,b,v,u,c,g],encapsulation:2})}return o})();function Ae(o,Te){if(o&1&&(i(0,"p-message",6),t(1),n()),o&2){let a=N(),e=W(7);m(),z(a.getErrorMessage(e))}}var Fe=(()=>{class o{messageService=K(j);value=15;formSubmitted=!1;onSubmit(a){this.formSubmitted=!0,this.isInvalid(a.controls.knob)||(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),a.resetForm({knob:15}),this.formSubmitted=!1)}getErrorMessage(a){let e=a?.value;return e<25?"Value must be greater than 25.":e>75?"Must be less than 75.":null}isInvalid(a){if(!a)return!1;let e=a.value;return(e<25||e>75)&&(this.formSubmitted||a.dirty)}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-1">
        <p-knob #model="ngModel" [(ngModel)]="value" [invalid]="isInvalid(model)" name="knob" />
        @if (isInvalid(model)) {
            <p-message severity="error" size="small" variant="simple">{{ getErrorMessage(model) }}</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
        <div class="flex flex-col items-center gap-1">
            <p-knob #model="ngModel" [(ngModel)]="value" [invalid]="isInvalid(model)" name="knob" />
            @if (isInvalid(model)) {
                <p-message severity="error" size="small" variant="simple">{{ getErrorMessage(model) }}</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';

@Component({
    selector: 'knob-template-driven-forms-demo',
    templateUrl: './knob-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, KnobModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    value: number = 15;

    formSubmitted: boolean = false;

    onSubmit(form: NgForm) {
        this.formSubmitted = true;

        if (!this.isInvalid(form.controls['knob'])) {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Form is submitted',
                life: 3000
            });

            form.resetForm({ knob: 15 });

            this.formSubmitted = false;
        }
    }

    getErrorMessage(control: any): string | null {
        const value = control?.value;

        return value < 25 ? 'Value must be greater than 25.' : value > 75 ? 'Must be less than 75.' : null;
    }

    isInvalid(control: any): boolean {
        if (!control) return false;

        const value = control.value;

        const hasError = value < 25 || value > 75;

        return hasError && (this.formSubmitted || control.dirty);
    }
}`};static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["model","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","items-center","gap-1"],["name","knob",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","autocomplete-template-driven-forms-demo",3,"code"]],template:function(e,r){if(e&1){let h=Z();p(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",2)(3,"form",3,0),T("ngSubmit",function(){J(h);let E=W(4);return Q(r.onSubmit(E))}),i(5,"div",4)(6,"p-knob",5,1),S("ngModelChange",function(E){return J(h),y(r.value,E)||(r.value=E),Q(E)}),n(),A(8,Ae,2,1,"p-message",6),n(),i(9,"button",7)(10,"span",8),t(11,"Submit"),n()()()(),p(12,"app-code",9)}if(e&2){let h=W(7);m(6),M("ngModel",r.value),s("invalid",r.isInvalid(h)),m(2),B(r.isInvalid(h)?8:-1),m(4),s("code",r.code)}},dependencies:[C,R,f,L,x,ee,b,v,w,V,P,q,O,U,G,u,c,g],encapsulation:2})}return o})();var Be=()=>["Knob"],_e=(()=>{class o{docs=[{id:"import",label:"Import",component:fe},{id:"basic",label:"Basic",component:de},{id:"minmax",label:"Min/Max",component:ve},{id:"step",label:"Step",component:he},{id:"template",label:"Template",component:ke},{id:"stroke",label:"Stroke",component:De},{id:"size",label:"Size",component:Ce},{id:"color",label:"Color",component:ce},{id:"reactive",label:"Reactive",component:ye},{id:"readonly",label:"ReadOnly",component:xe},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Fe},{id:"reactiveforms",label:"Reactive Forms",component:Se}]},{id:"disabled",label:"Disabled",component:ue},{id:"accessibility",label:"Accessibility",component:pe}];ptComponent=ge;static \u0275fac=function(e){return new(e||o)};static \u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Knob Component","header","Knob","description","Knob is a form component to define number inputs with a dial.","themeDocs","knob",3,"docs","apiDocs","ptDocs"]],template:function(e,r){e&1&&p(0,"app-doc",0),e&2&&s("docs",r.docs)("apiDocs",$(3,Be))("ptDocs",r.ptComponent)},dependencies:[le],encapsulation:2})}return o})();var Nt=[{path:"",component:_e}];export{Nt as default};
