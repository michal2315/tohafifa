import{a as S,b as M}from"./chunk-GNSSP7AO.js";import{a as le,b as ae}from"./chunk-IYEEPUY3.js";import"./chunk-3Y7QSSKK.js";import{a as U,b as pe}from"./chunk-JNUBCW5H.js";import{a as R,b as z}from"./chunk-N3SKU25W.js";import{a as G,b as O}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import{a as re,b as ne}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b as X,d as Y,f as v,g as A,h as Z,i as b,j,k as $,l as ee,p as te,t as ie,u as x,v as oe}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as de}from"./chunk-FKOOMXTU.js";import{a as c}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as se}from"./chunk-XCUGNKAG.js";import{a as y,b as me}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as I,fa as L,ha as P}from"./chunk-MCW4FHXZ.js";import{za as W}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as F}from"./chunk-D2XKNHFS.js";import{$a as K,Ab as B,Eb as s,Fb as e,Gb as t,Hb as d,Ob as H,Qa as a,Sb as V,X as T,aa as q,ba as k,cc as N,fc as J,gb as p,hc as i,mc as u,nc as f,oc as g,sc as Q,zb as E}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ce=(()=>{class o{code={basic:`<span id="label_number">Number</span>
<p-slider ariaLabelledBy="label_number" />

<p-slider ariaLabel="Number" />`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["slider-accessibility-doc"]],decls:87,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(r,n){r&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),t(),e(4,"p"),i(5," Slider element component uses "),e(6,"i"),i(7,"slider"),t(),i(8," role on the handle in addition to the "),e(9,"i"),i(10,"aria-orientation"),t(),i(11,", "),e(12,"i"),i(13,"aria-valuemin"),t(),i(14,", "),e(15,"i"),i(16,"aria-valuemax"),t(),i(17," and "),e(18,"i"),i(19,"aria-valuenow"),t(),i(20," attributes. Value to describe the component can be defined using "),e(21,"i"),i(22,"ariaLabelledBy"),t(),i(23," and "),e(24,"i"),i(25,"ariaLabel"),t(),i(26," props. "),t()(),d(27,"app-code",0),e(28,"h3"),i(29,"Keyboard Support"),t(),e(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),i(35,"Key"),t(),e(36,"th"),i(37,"Function"),t()()(),e(38,"tbody")(39,"tr")(40,"td")(41,"i"),i(42,"tab"),t()(),e(43,"td"),i(44,"Moves focus to the slider."),t()(),e(45,"tr")(46,"td")(47,"span",3)(48,"i",4),i(49,"left arrow"),t(),e(50,"i"),i(51,"up arrow"),t()()(),e(52,"td"),i(53,"Decrements the value."),t()(),e(54,"tr")(55,"td")(56,"span",3)(57,"i",4),i(58,"right arrow"),t(),e(59,"i"),i(60,"down arrow"),t()()(),e(61,"td"),i(62,"Increments the value."),t()(),e(63,"tr")(64,"td")(65,"i"),i(66,"home"),t()(),e(67,"td"),i(68,"Set the minimum value."),t()(),e(69,"tr")(70,"td")(71,"i"),i(72,"end"),t()(),e(73,"td"),i(74,"Set the maximum value."),t()(),e(75,"tr")(76,"td")(77,"i"),i(78,"page up"),t()(),e(79,"td"),i(80,"Increments the value by 10 steps."),t()(),e(81,"tr")(82,"td")(83,"i"),i(84,"page down"),t()(),e(85,"td"),i(86,"Decrements the value by 10 steps."),t()()()()()()),r&2&&(a(27),s("code",n.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[y,c],encapsulation:2})}return o})();var ue=(()=>{class o{value;code={basic:'<p-slider [(ngModel)]="value" class="w-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="value" class="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-basic-demo',
    templateUrl: './slider-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderBasicDemo {
    value!: number;
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[1,"w-56",3,"ngModelChange","ngModel"],["selector","slider-basic-demo",3,"code"]],template:function(r,n){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Two-way binding is defined using the standard "),e(3,"i"),i(4,"ngModel"),t(),i(5," directive."),t()(),e(6,"div",0)(7,"p-slider",1),g("ngModelChange",function(l){return f(n.value,l)||(n.value=l),l}),t()(),d(8,"app-code",2)),r&2&&(a(7),u("ngModel",n.value),a(),s("code",n.code))},dependencies:[x,v,b,M,S,y,c],encapsulation:2})}return o})();var fe=(()=>{class o{filter=0;filterValues=[100,100,0];filterOptions=[{label:"Contrast",value:0},{label:"Brightness",value:1},{label:"Sepia",value:2}];code={basic:`<img alt="user header" class="w-full md:w-80 rounded mb-6" src="/_ext/primefaces.org/cdn/primevue/images/card-vue.jpg" [style]="filterStyle" />
<p-selectbutton [(ngModel)]="filter" [options]="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
<p-slider [(ngModel)]="filterValues[filter]" class="w-56" [min]="0" [max]="200" />`,html:`<div class="card flex justify-center">
    <div class="flex flex-col items-center">
        <img alt="user header" class="w-full md:w-80 rounded mb-6" src="/_ext/primefaces.org/cdn/primevue/images/card-vue.jpg" [style]="filterStyle" />
        <p-selectbutton [(ngModel)]="filter" [options]="filterOptions" optionLabel="label" optionValue="value" class="mb-4" />
        <p-slider [(ngModel)]="filterValues[filter]" class="w-56" [min]="0" [max]="200" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
    selector: 'slider-filter-demo',
    templateUrl: './slider-filter-demo.html',
    standalone: true,
    imports: [FormsModule, SliderModule, SelectButtonModule]
})
export class SliderFilterDemo {
    filter: number = 0;

    filterValues: number[] = [100, 100, 0];

    filterOptions: any = [
        { label: 'Contrast', value: 0 },
        { label: 'Brightness', value: 1 },
        { label: 'Sepia', value: 2 },
    ];

    get filterStyle() {
        return {
            filter: \`contrast(\${this.filterValues[0]}%) brightness(\${this.filterValues[1]}%) sepia(\${this.filterValues[2]}%)\`,
        };
    }
}`};get filterStyle(){return{filter:`contrast(${this.filterValues[0]}%) brightness(${this.filterValues[1]}%) sepia(${this.filterValues[2]}%)`}}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["filter-doc"]],decls:9,vars:8,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","items-center"],["alt","user header","src","/_ext/primefaces.org/cdn/primevue/images/card-vue.jpg",1,"w-full","md:w-80","rounded","mb-6"],["optionLabel","label","optionValue","value",1,"mb-4",3,"ngModelChange","ngModel","options"],[1,"w-56",3,"ngModelChange","ngModel","min","max"],["selector","slider-filter-demo",3,"code"]],template:function(r,n){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Image filter implementation using multiple sliders."),t()(),e(3,"div",0)(4,"div",1),d(5,"img",2),e(6,"p-selectbutton",3),g("ngModelChange",function(l){return f(n.filter,l)||(n.filter=l),l}),t(),e(7,"p-slider",4),g("ngModelChange",function(l){return f(n.filterValues[n.filter],l)||(n.filterValues[n.filter]=l),l}),t()()(),d(8,"app-code",5)),r&2&&(a(5),J(n.filterStyle),a(),u("ngModel",n.filter),s("options",n.filterOptions),a(),u("ngModel",n.filterValues[n.filter]),s("min",0)("max",200),a(),s("code",n.code))},dependencies:[x,v,b,M,S,ae,le,y,c],encapsulation:2})}return o})();var ge=(()=>{class o{code={typescript:"import { SliderModule } from 'primeng/slider';"};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["slider-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,n){r&1&&d(0,"app-code",0),r&2&&s("code",n.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return o})();var ve=(()=>{class o{value=50;code={basic:`<input type="text" pInputText [(ngModel)]="value" class="w-full mb-4"/>
<p-slider [(ngModel)]="value" class="w-full" />`,html:`<div class="card flex justify-center">
    <div>
        <input type="text" pInputText [(ngModel)]="value" class="w-full mb-4"/>
        <p-slider [(ngModel)]="value" class="w-full" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'slider-input-demo',
    templateUrl: './slider-input-demo.html',
    standalone: true,
    imports: [FormsModule, Slider, InputTextModule]
})
export class SliderInputDemo {
    value: number = 50;
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["input-doc"]],decls:8,vars:3,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","",1,"w-full","mb-4",3,"ngModelChange","ngModel"],[1,"w-full",3,"ngModelChange","ngModel"],["selector","slider-input-demo",3,"code"]],template:function(r,n){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Slider is connected to an input field using two-way binding."),t()(),e(3,"div",0)(4,"div")(5,"input",1),g("ngModelChange",function(l){return f(n.value,l)||(n.value=l),l}),t(),e(6,"p-slider",2),g("ngModelChange",function(l){return f(n.value,l)||(n.value=l),l}),t()()(),d(7,"app-code",3)),r&2&&(a(5),u("ngModel",n.value),a(),u("ngModel",n.value),a(),s("code",n.code))},dependencies:[x,X,v,b,M,S,ne,re,y,c],encapsulation:2})}return o})();var Se=(()=>{class o{value;docs=[{data:U("Slider"),key:"Slider"}];static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["slider-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[1,"w-56",3,"ngModelChange","ngModel"]],template:function(r,n){r&1&&(e(0,"app-docptviewer",0)(1,"p-slider",1),g("ngModelChange",function(l){return f(n.value,l)||(n.value=l),l}),t()()),r&2&&(s("docs",n.docs),a(),u("ngModel",n.value))},dependencies:[F,pe,M,S,x,v,b],encapsulation:2})}return o})();var Me=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:Se},{id:"pt.doc.slider",label:"Slider PT Options",component:me,data:U("Slider")}];static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["slider-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(r,n){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),i(3,"Slider Pass Through"),t()(),d(4,"app-docsection",2),t()),r&2&&(a(4),s("docs",n.docs))},dependencies:[se],encapsulation:2})}return o})();var ye=(()=>{class o{rangeValues=[20,80];code={basic:'<p-slider [(ngModel)]="rangeValues" [range]="true" class="w-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="rangeValues" [range]="true" class="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-range-demo',
    templateUrl: './slider-range-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderRangeDemo {
    rangeValues: number[] = [20, 80];
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["range-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[1,"w-56",3,"ngModelChange","ngModel","range"],["selector","slider-range-demo",3,"code"]],template:function(r,n){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"When "),e(3,"i"),i(4,"range"),t(),i(5," property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value."),t()(),e(6,"div",0)(7,"p-slider",1),g("ngModelChange",function(l){return f(n.rangeValues,l)||(n.rangeValues=l),l}),t()(),d(8,"app-code",2)),r&2&&(a(7),u("ngModel",n.rangeValues),s("range",!0),a(),s("code",n.code))},dependencies:[x,v,b,M,S,y,c],encapsulation:2})}return o})();function Ee(o,we){o&1&&(e(0,"p-message",4),i(1,"Must be greater than 25."),t())}var be=(()=>{class o{fb;messageService=T(W);exampleForm;formSubmitted=!1;constructor(m){this.fb=m,this.exampleForm=this.fb.group({value:["",Y.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(m){let r=this.exampleForm.get(m);return r?.invalid&&(r.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-4">
        <p-slider formControlName="value" class="w-56" />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-4">
            <p-slider formControlName="value" class="w-56" />
            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'slider-reactive-forms-demo',
    templateUrl: './slider-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, SliderModule, ToastModule, MessageModule, ButtonModule]
})
export class SliderReactiveFormsDemo {
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
}`};static \u0275fac=function(r){return new(r||o)(K(ie))};static \u0275cmp=p({type:o,selectors:[["reactive-forms-doc"]],decls:16,vars:3,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-4"],["formControlName","value","styleClass","w-56"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","slider-reactive-forms-demo",3,"code"]],template:function(r,n){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Slider can also be used with reactive forms. In this case, the "),e(3,"i"),i(4,"formControlName"),t(),i(5," property is used to bind the component to a form control."),t()(),d(6,"p-toast"),e(7,"div",0)(8,"form",1),V("ngSubmit",function(){return n.onSubmit()}),e(9,"div",2),d(10,"p-slider",3),E(11,Ee,2,0,"p-message",4),t(),e(12,"button",5)(13,"span",6),i(14,"Submit"),t()()()(),d(15,"app-code",7)),r&2&&(a(8),s("formGroup",n.exampleForm),a(3),B(n.isInvalid("value")?11:-1),a(4),s("code",n.code))},dependencies:[F,oe,j,v,A,$,ee,M,S,O,G,z,R,P,L,I,y,c],encapsulation:2})}return o})();var xe=(()=>{class o{value=20;code={basic:'<p-slider [(ngModel)]="value" [step]="20" class="w-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="value" [step]="20" class="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-step-demo',
    templateUrl: './slider-step-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderStepDemo {
    value: number = 20;
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["step-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[1,"w-56",3,"ngModelChange","ngModel","step"],["selector","slider-step-demo",3,"code"]],template:function(r,n){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Size of each movement is defined with the "),e(3,"i"),i(4,"step"),t(),i(5," property."),t()(),e(6,"div",0)(7,"p-slider",1),g("ngModelChange",function(l){return f(n.value,l)||(n.value=l),l}),t()(),d(8,"app-code",2)),r&2&&(a(7),u("ngModel",n.value),s("step",20),a(),s("code",n.code))},dependencies:[x,v,b,M,S,y,c],encapsulation:2})}return o})();function Be(o,we){o&1&&(e(0,"p-message",6),i(1,"Must be greater than 25."),t())}var he=(()=>{class o{messageService=T(W);value;onSubmit(m){m.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),m.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-4">
        <p-slider #model="ngModel" [(ngModel)]="value" class="w-56" required [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="slider" />
        @if (model.invalid && (model.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4">
        <div class="flex flex-col gap-4">
            <p-slider #model="ngModel" [(ngModel)]="value" class="w-56" required [invalid]="model.invalid && (model.touched || exampleForm.submitted)" name="slider" />
            @if (model.invalid && (model.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Must be greater than 25.</p-message>
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
import { SliderModule } from 'primeng/slider';

@Component({
    selector: 'slider-template-driven-forms-demo',
    templateUrl: './slider-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, MessageModule, ToastModule, ButtonModule, SliderModule]
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
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["model","ngModel"],[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","gap-4"],["required","","name","slider",1,"w-56",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","slider-template-driven-forms-demo",3,"code"]],template:function(r,n){if(r&1){let h=H();d(0,"app-docsectiontext")(1,"p-toast"),e(2,"div",2)(3,"form",3,0),V("ngSubmit",function(){q(h);let _=N(4);return k(n.onSubmit(_))}),e(5,"div",4)(6,"p-slider",5,1),g("ngModelChange",function(_){return q(h),f(n.value,_)||(n.value=_),k(_)}),t(),E(8,Be,2,0,"p-message",6),t(),e(9,"button",7)(10,"span",8),i(11,"Submit"),t()()()(),d(12,"app-code",9)}if(r&2){let h=N(4),l=N(7);a(6),u("ngModel",n.value),s("invalid",l.invalid&&(l.touched||h.submitted)),a(2),B(l.invalid&&(l.touched||h.submitted)?8:-1),a(4),s("code",n.code)}},dependencies:[F,x,j,v,A,te,b,Z,M,S,O,G,z,R,P,L,I,y,c],encapsulation:2})}return o})();var Ce=(()=>{class o{value=50;code={basic:'<p-slider [(ngModel)]="value" orientation="vertical" class="h-56" />',html:`<div class="card flex justify-center">
    <p-slider [(ngModel)]="value" orientation="vertical" class="h-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Slider } from 'primeng/slider';

@Component({
    selector: 'slider-vertical-demo',
    templateUrl: './slider-vertical-demo.html',
    standalone: true,
    imports: [FormsModule, Slider]
})
export class SliderVerticalDemo {
    value: number = 50
}`};static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["vertical-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["orientation","vertical",1,"h-56",3,"ngModelChange","ngModel"],["selector","slider-vertical-demo",3,"code"]],template:function(r,n){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Default layout of slider is "),e(3,"i"),i(4,"horizontal"),t(),i(5,", use "),e(6,"i"),i(7,"orientation"),t(),i(8," property for the alternative "),e(9,"i"),i(10,"vertical"),t(),i(11," mode."),t()(),e(12,"div",0)(13,"p-slider",1),g("ngModelChange",function(l){return f(n.value,l)||(n.value=l),l}),t()(),d(14,"app-code",2)),r&2&&(a(13),u("ngModel",n.value),a(),s("code",n.code))},dependencies:[x,v,b,M,S,y,c],encapsulation:2})}return o})();var Ve=()=>["Slider"],De=(()=>{class o{ptComponent=Me;docs=[{id:"import",label:"Import",component:ge},{id:"basic",label:"Basic",component:ue},{id:"input",label:"Input",component:ve},{id:"step",label:"Step",component:xe},{id:"range",label:"Range",component:ye},{id:"filter",label:"Filter",component:fe},{id:"vertical",label:"Vertical",component:Ce},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:he},{id:"reactive",label:"Reactive Forms",component:be}]},{id:"accessibility",label:"Accessibility",component:ce}];static \u0275fac=function(r){return new(r||o)};static \u0275cmp=p({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Slider Component","header","Slider","description","Slider is a component to provide input with a drag handle.","themeDocs","slider",3,"docs","apiDocs","ptDocs"]],template:function(r,n){r&1&&d(0,"app-doc",0),r&2&&s("docs",n.docs)("apiDocs",Q(3,Ve))("ptDocs",n.ptComponent)},dependencies:[de],encapsulation:2})}return o})();var ci=[{path:"",component:De}];export{ci as default};
