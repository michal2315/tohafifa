import{a as x,b as v}from"./chunk-RTRG5JID.js";import{a as $,b as ue}from"./chunk-JNUBCW5H.js";import{a as Q,b as X}from"./chunk-N3SKU25W.js";import{a as Y,b as Z}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{f as h,g as G,h as ae,i as k,j as U,k as le,l as me,t as ce,u as M,v as se}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as fe}from"./chunk-FKOOMXTU.js";import{a as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as pe}from"./chunk-XCUGNKAG.js";import{a as y,b as de}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as q,fa as H,ha as J}from"./chunk-MCW4FHXZ.js";import{za as V}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as re,s as K,w as S}from"./chunk-D2XKNHFS.js";import{$a as ee,Ab as A,Bb as L,Cb as W,Cc as j,Db as N,Dc as R,Eb as c,Fb as i,Gb as n,Hb as s,Ob as I,Qa as m,Sb as P,Ub as z,X as E,aa as w,ba as T,cc as oe,gb as d,hc as r,ic as ie,jc as O,mb as te,mc as p,nc as f,oc as u,sc as ne,zb as B}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ge=(()=>{class t{code={basic:`<label for="chkbox1">Remember Me</label>
<p-checkbox inputId="chkbox1"/>

<span id="chkbox2">Remember Me</span>
<p-checkbox ariaLabelledBy="chkbox2"/>

<p-checkbox ariaLabel="Remember Me"/>`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-accessibility-doc"]],decls:42,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,e){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),r(3,"Screen Reader"),n(),i(4,"p"),r(5," Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via "),i(6,"i"),r(7,"label"),n(),r(8," tag combined with "),i(9,"i"),r(10,"inputId"),n(),r(11," prop or using "),i(12,"i"),r(13,"ariaLabelledBy"),n(),r(14,", "),i(15,"i"),r(16,"ariaLabel"),n(),r(17," props. "),n()(),s(18,"app-code",0),i(19,"h3"),r(20,"Keyboard Support"),n(),i(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),r(26,"Key"),n(),i(27,"th"),r(28,"Function"),n()()(),i(29,"tbody")(30,"tr")(31,"td")(32,"i"),r(33,"tab"),n()(),i(34,"td"),r(35,"Moves focus to the checkbox."),n()(),i(36,"tr")(37,"td")(38,"i"),r(39,"space"),n()(),i(40,"td"),r(41,"Toggles the checked state."),n()()()()()()),o&2&&(m(18),c("code",e.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[g,y],encapsulation:2})}return t})();var be=(()=>{class t{checked=null;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-basic-demo',
    templateUrl: './checkbox-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxBasicDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-basic-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-center","gap-4"],[3,"ngModelChange","ngModel","binary"],["selector","checkbox-basic-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Binary checkbox is used as a controlled input with "),i(3,"i"),r(4,"ngModel"),n(),r(5," and "),i(6,"i"),r(7,"binary"),n(),r(8," properties."),n()(),i(9,"div",0)(10,"p-checkbox",1),u("ngModelChange",function(l){return f(e.checked,l)||(e.checked=l),l}),n()(),s(11,"app-code",2)),o&2&&(m(10),p("ngModel",e.checked),c("binary",!0),m(),c("code",e.code))},dependencies:[M,h,k,v,x,g,y],encapsulation:2})}return t})();var he=(()=>{class t{checked1=!1;checked2=!0;code={basic:`<p-checkbox [(ngModel)]="checked1" [binary]="true" [disabled]="true" />
<p-checkbox [(ngModel)]="checked2" [binary]="true" [disabled]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-checkbox [(ngModel)]="checked1" [binary]="true" [disabled]="true" />
    <p-checkbox [(ngModel)]="checked2" [binary]="true" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-disabled-demo',
    templateUrl: './checkbox-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxDisabledDemo {
    checked1: boolean = false;

    checked2: boolean = true;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-disabled-demo"]],decls:10,vars:7,consts:[[1,"card","flex","justify-center","gap-2"],[3,"ngModelChange","ngModel","binary","disabled"],["selector","checkbox-disabled-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"When "),i(3,"i"),r(4,"disabled"),n(),r(5," is present, the element cannot be edited and focused."),n()(),i(6,"div",0)(7,"p-checkbox",1),u("ngModelChange",function(l){return f(e.checked1,l)||(e.checked1=l),l}),n(),i(8,"p-checkbox",1),u("ngModelChange",function(l){return f(e.checked2,l)||(e.checked2=l),l}),n()(),s(9,"app-code",2)),o&2&&(m(7),p("ngModel",e.checked1),c("binary",!0)("disabled",!0),m(),p("ngModel",e.checked2),c("binary",!0)("disabled",!0),m(),c("code",e.code))},dependencies:[M,h,k,v,x,g,y],encapsulation:2})}return t})();function Ee(t,F){if(t&1){let a=I();i(0,"div",4)(1,"p-checkbox",5),u("ngModelChange",function(e){w(a);let b=z();return f(b.selectedCategories,e)||(b.selectedCategories=e),T(e)}),n(),i(2,"label",6),r(3),n()()}if(t&2){let a=F.$implicit,o=z();m(),c("inputId",a.key)("value",a),p("ngModel",o.selectedCategories),m(),c("for",a.key),m(),O(" ",a.name," ")}}var ve=(()=>{class t{selectedCategories=[];categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];code={basic:`<div *ngFor="let category of categories" class="flex items-center">
    <p-checkbox [inputId]="category.key" name="group" [value]="category" [(ngModel)]="selectedCategories" />
    <label [for]="category.key" class="ml-2"> {{ category.name }} </label>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-4">
        <div *ngFor="let category of categories" class="flex items-center">
            <p-checkbox [inputId]="category.key" name="group" [value]="category" [(ngModel)]="selectedCategories" />
            <label [for]="category.key" class="ml-2"> {{ category.name }} </label>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'checkbox-dynamic-demo',
    templateUrl: './checkbox-dynamic-demo.html',
    standalone: true,
    imports: [FormsModule, CheckboxModule, CommonModule]
})
export class CheckboxDynamicDemo {
    selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' },
    ];

    ngOnInit() {
        this.selectedCategories = [this.categories[1]];
    }
}`};ngOnInit(){this.selectedCategories=[this.categories[1]]}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-dynamic-demo"]],decls:7,vars:2,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4"],["class","flex items-center",4,"ngFor","ngForOf"],["selector","checkbox-dynamic-demo",3,"code"],[1,"flex","items-center"],["name","group",3,"ngModelChange","inputId","value","ngModel"],[1,"ml-2",3,"for"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Checkboxes can be generated using a list of values."),n()(),i(3,"div",0)(4,"div",1),te(5,Ee,4,5,"div",2),n()(),s(6,"app-code",3)),o&2&&(m(5),c("ngForOf",e.categories),m(),c("code",e.code))},dependencies:[S,re,M,h,k,v,x,g,y],encapsulation:2})}return t})();var ye=(()=>{class t{checked=!1;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" variant="filled" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-filled-demo',
    templateUrl: './checkbox-filled-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxFilledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-filled-demo"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel","binary"],["selector","checkbox-filled-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Specify the "),i(3,"i"),r(4,"variant"),n(),r(5," property as "),i(6,"i"),r(7,"filled"),n(),r(8," to display the component with a higher visual emphasis than the default "),i(9,"i"),r(10,"outlined"),n(),r(11," style."),n()(),i(12,"div",0)(13,"p-checkbox",1),u("ngModelChange",function(l){return f(e.checked,l)||(e.checked=l),l}),n()(),s(14,"app-code",2)),o&2&&(m(13),p("ngModel",e.checked),c("binary",!0),m(),c("code",e.code))},dependencies:[M,h,k,v,x,g,y],encapsulation:2})}return t})();var ke=(()=>{class t{code={typescript:"import { CheckboxModule } from 'primeng/checkbox';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,e){o&1&&s(0,"app-code",0),o&2&&c("code",e.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return t})();var Me=(()=>{class t{checked=null;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" [indeterminate]="true" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" [indeterminate]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-indeterminate-demo',
    templateUrl: './checkbox-indeterminate-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxIndeterminateDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-indeterminate-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center","gap-4"],[3,"ngModelChange","ngModel","binary","indeterminate"],["selector","checkbox-indeterminate-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"The "),i(3,"i"),r(4,"indeterminate"),n(),r(5,' state indicates that a checkbox is neither "on" or "off".'),n()(),i(6,"div",0)(7,"p-checkbox",1),u("ngModelChange",function(l){return f(e.checked,l)||(e.checked=l),l}),n()(),s(8,"app-code",2)),o&2&&(m(7),p("ngModel",e.checked),c("binary",!0)("indeterminate",!0),m(),c("code",e.code))},dependencies:[M,h,k,v,x,g,y],encapsulation:2})}return t})();var Ce=(()=>{class t{checked=!1;code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" [invalid]="!checked" />',html:`<div class="card flex justify-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" [invalid]="!checked" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-invalid-demo',
    templateUrl: './checkbox-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxInvalidDemo {
    checked: boolean = false;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-invalid-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","binary","invalid"],["selector","checkbox-invalid-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"The invalid state is applied using the "),i(3,"i"),r(4,"\u2060invalid"),n(),r(5," property to indicate failed validation, which can be integrated with Angular Forms."),n()(),i(6,"div",0)(7,"p-checkbox",1),u("ngModelChange",function(l){return f(e.checked,l)||(e.checked=l),l}),n()(),s(8,"app-code",2)),o&2&&(m(7),p("ngModel",e.checked),c("binary",!0)("invalid",!e.checked),m(),c("code",e.code))},dependencies:[M,h,k,v,x,g,y],encapsulation:2})}return t})();var Se=(()=>{class t{pizza=[];code={basic:`<div class="flex items-center">
    <p-checkbox inputId="ingredient1" name="pizza"value="Cheese" [(ngModel)]="pizza" />
    <label for="ingredient1" class="ml-2"> Cheese </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient2" name="pizza" value="Mushroom" [(ngModel)]="pizza" />
    <label for="ingredient2" class="ml-2"> Mushroom </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient3" name="pizza" value="Pepper" [(ngModel)]="pizza" />
    <label for="ingredient3" class="ml-2"> Pepper </label>
</div>
<div class="flex items-center">
    <p-checkbox inputId="ingredient4" name="pizza" value="Onion" [(ngModel)]="pizza" />
    <label for="ingredient4" class="ml-2"> Onion </label>
</div>`,html:`<div class="card flex justify-center gap-4">
    <div class="flex items-center">
        <p-checkbox inputId="ingredient1" name="pizza"value="Cheese" [(ngModel)]="pizza" />
        <label for="ingredient1" class="ml-2"> Cheese </label>
    </div>
    <div class="flex items-center">
        <p-checkbox inputId="ingredient2" name="pizza" value="Mushroom" [(ngModel)]="pizza" />
        <label for="ingredient2" class="ml-2"> Mushroom </label>
    </div>
    <div class="flex items-center">
        <p-checkbox inputId="ingredient3" name="pizza" value="Pepper" [(ngModel)]="pizza" />
        <label for="ingredient3" class="ml-2"> Pepper </label>
    </div>
    <div class="flex items-center">
        <p-checkbox inputId="ingredient4" name="pizza" value="Onion" [(ngModel)]="pizza" />
        <label for="ingredient4" class="ml-2"> Onion </label>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-multiple-demo',
    templateUrl: './checkbox-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxMultipleDemo {
    pizza: string[] = [];
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-multiple-demo"]],decls:21,vars:5,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],[1,"flex","items-center"],["inputId","ingredient1","name","pizza","value","Cheese",3,"ngModelChange","ngModel"],["for","ingredient1",1,"ml-2"],["inputId","ingredient2","name","pizza","value","Mushroom",3,"ngModelChange","ngModel"],["for","ingredient2",1,"ml-2"],["inputId","ingredient3","name","pizza","value","Pepper",3,"ngModelChange","ngModel"],["for","ingredient3",1,"ml-2"],["inputId","ingredient4","name","pizza","value","Onion",3,"ngModelChange","ngModel"],["for","ingredient4",1,"ml-2"],["selector","checkbox-multiple-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Multiple checkboxes can be grouped together."),n()(),i(3,"div",0)(4,"div",1)(5,"p-checkbox",2),u("ngModelChange",function(l){return f(e.pizza,l)||(e.pizza=l),l}),n(),i(6,"label",3),r(7," Cheese "),n()(),i(8,"div",1)(9,"p-checkbox",4),u("ngModelChange",function(l){return f(e.pizza,l)||(e.pizza=l),l}),n(),i(10,"label",5),r(11," Mushroom "),n()(),i(12,"div",1)(13,"p-checkbox",6),u("ngModelChange",function(l){return f(e.pizza,l)||(e.pizza=l),l}),n(),i(14,"label",7),r(15," Pepper "),n()(),i(16,"div",1)(17,"p-checkbox",8),u("ngModelChange",function(l){return f(e.pizza,l)||(e.pizza=l),l}),n(),i(18,"label",9),r(19," Onion "),n()()(),s(20,"app-code",10)),o&2&&(m(5),p("ngModel",e.pizza),m(4),p("ngModel",e.pizza),m(4),p("ngModel",e.pizza),m(4),p("ngModel",e.pizza),m(3),c("code",e.code))},dependencies:[M,h,k,v,x,g,y],encapsulation:2})}return t})();var _e=(()=>{class t{checked=!1;docs=[{data:$("Checkbox"),key:"Checkbox"}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-pt-viewer"]],decls:2,vars:3,consts:[[3,"docs"],[3,"ngModelChange","ngModel","binary"]],template:function(o,e){o&1&&(i(0,"app-docptviewer",0)(1,"p-checkbox",1),u("ngModelChange",function(l){return f(e.checked,l)||(e.checked=l),l}),n()()),o&2&&(c("docs",e.docs),m(),p("ngModel",e.checked),c("binary",!0))},dependencies:[S,ue,v,x,M,h,k],encapsulation:2})}return t})();var De=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:_e},{id:"pt.doc.checkbox",label:"Checkbox PT Options",component:de,data:$("Checkbox")}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,e){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),r(3,"Checkbox Pass Through"),n()(),s(4,"app-docsection",2),n()),o&2&&(m(4),c("docs",e.docs))},dependencies:[S,pe],encapsulation:2})}return t})();function We(t,F){if(t&1&&(i(0,"div",3),s(1,"p-checkbox",8),i(2,"label",9),r(3),j(4,"titlecase"),n()()),t&2){let a=F.$implicit,o=z();m(),c("formControlName",a)("binary",!0)("inputId",a)("invalid",o.isInvalid(a)),m(),c("for",a),m(),O(" ",R(4,6,a)," ")}}function Ne(t,F){t&1&&(i(0,"p-message",4),r(1," At least one ingredient must be selected. "),n())}var ze=(()=>{class t{fb;messageService=E(V);formSubmitted=!1;exampleForm;constructor(a){this.fb=a,this.exampleForm=this.fb.group({cheese:[!1],mushroom:[!1],pepper:[!1],onion:[!1]},{validators:this.atLeastOneSelectedValidator})}get formKeys(){return Object.keys(this.exampleForm.controls)}atLeastOneSelectedValidator(a){return Object.values(a.controls).some(e=>e.value===!0)?null:{atLeastOneRequired:!0}}hasAnyInvalid(){return this.formSubmitted&&this.exampleForm.hasError("atLeastOneRequired")}isInvalid(a){let o=this.exampleForm.get(a);return this.formSubmitted&&this.exampleForm.hasError("atLeastOneRequired")&&o?.value===!1}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset({cheese:!1,mushroom:!1,pepper:!1,onion:!1}),this.formSubmitted=!1)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-4">
        @for (item of formKeys; track item) {
            <div class="flex items-center gap-2">
                <p-checkbox [formControlName]="item" [binary]="true" [inputId]="item" [invalid]="isInvalid(item)" />
                <label [for]="item"> {{ item | titlecase }} </label>
            </div>
        }
    </div>
    @if (hasAnyInvalid()) {
        <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
    }
    <button pButton severity="secondary" type="submit">
        <span pButtonLabel>Submit</span>
    </button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
            @for (item of formKeys; track item) {
                <div class="flex items-center gap-2">
                    <p-checkbox [formControlName]="item" [binary]="true" [inputId]="item" [invalid]="isInvalid(item)" />
                    <label [for]="item"> {{ item | titlecase }} </label>
                </div>
            }
        </div>
        @if (hasAnyInvalid()) {
            <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
        }
        <button pButton severity="secondary" type="submit">
            <span pButtonLabel>Submit</span>
        </button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'checkbox-reactive-forms-demo',
    templateUrl: './checkbox-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, CheckboxModule, ToastModule, ButtonModule, MessageModule]
})
export class CheckboxReactiveFormsDemo {
    messageService = inject(MessageService);

    formSubmitted: boolean = false;

    exampleForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group(
            {
                cheese: [false],
                mushroom: [false],
                pepper: [false],
                onion: [false]
            },
            { validators: this.atLeastOneSelectedValidator }
        );
    }

    get formKeys(): string[] {
        return Object.keys(this.exampleForm.controls);
    }

    atLeastOneSelectedValidator(group: FormGroup): { [key: string]: any } | null {
        const anySelected = Object.values(group.controls).some((control) => control.value === true);
        return anySelected ? null : { atLeastOneRequired: true };
    }

    hasAnyInvalid(): boolean {
        return this.formSubmitted && this.exampleForm.hasError('atLeastOneRequired');
    }

    isInvalid(controlName: string): boolean {
        const control = this.exampleForm.get(controlName);
        return this.formSubmitted && this.exampleForm.hasError('atLeastOneRequired') && control?.value === false;
    }

    onSubmit() {
        this.formSubmitted = true;

        if (this.exampleForm.valid) {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Form is submitted',
                life: 3000
            });

            this.exampleForm.reset({
                cheese: false,
                mushroom: false,
                pepper: false,
                onion: false
            });

            this.formSubmitted = false;
        }
    }
}`};static \u0275fac=function(o){return new(o||t)(ee(ce))};static \u0275cmp=d({type:t,selectors:[["reactive-forms-doc"]],decls:17,vars:3,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center","gap-2"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","checkbox-reactive-forms-demo",3,"code"],[3,"formControlName","binary","inputId","invalid"],[3,"for"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Checkbox can also be used with reactive forms. In this case, the "),i(3,"i"),r(4,"formControlName"),n(),r(5," property is used to bind the component to a form control."),n()(),s(6,"p-toast"),i(7,"div",0)(8,"form",1),P("ngSubmit",function(){return e.onSubmit()}),i(9,"div",2),W(10,We,5,8,"div",3,L),n(),B(12,Ne,2,0,"p-message",4),i(13,"button",5)(14,"span",6),r(15,"Submit"),n()()()(),s(16,"app-code",7)),o&2&&(m(8),c("formGroup",e.exampleForm),m(2),N(e.formKeys),m(2),A(e.hasAnyInvalid()?12:-1),m(4),c("code",e.code))},dependencies:[S,se,U,h,G,le,me,v,x,J,H,q,Z,Y,X,Q,g,y,K],encapsulation:2})}return t})();var Fe=(()=>{class t{size=null;code={basic:`<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
    <label for="size_small" class="text-sm">Small</label>
</div>
<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
    <label for="size_normal">Normal</label>
</div>
<div class="flex items-center gap-2">
    <p-checkbox [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
    <label for="size_large" class="text-lg">Large</label>
</div>`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <div class="flex items-center gap-2">
        <p-checkbox [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <p-checkbox [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <p-checkbox [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';

@Component({
    selector: 'checkbox-sizes-demo',
    templateUrl: './checkbox-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, Checkbox]
})
export class CheckboxSizesDemo {
    size: any = null;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["checkbox-sizes-demo"]],decls:23,vars:4,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],[1,"flex","items-center","gap-2"],["inputId","size_small","name","size","value","Small","size","small",3,"ngModelChange","ngModel"],["for","size_small",1,"text-sm"],["inputId","size_normal","name","size","value","Normal",3,"ngModelChange","ngModel"],["for","size_normal"],["inputId","size_large","name","size","value","Large","size","large",3,"ngModelChange","ngModel"],["for","size_large",1,"text-lg"],["selector","checkbox-sizes-demo",3,"code"]],template:function(o,e){o&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Checkbox provides "),i(3,"i"),r(4,"small"),n(),r(5," and "),i(6,"i"),r(7,"large"),n(),r(8," sizes as alternatives to the base."),n()(),i(9,"div",0)(10,"div",1)(11,"p-checkbox",2),u("ngModelChange",function(l){return f(e.size,l)||(e.size=l),l}),n(),i(12,"label",3),r(13,"Small"),n()(),i(14,"div",1)(15,"p-checkbox",4),u("ngModelChange",function(l){return f(e.size,l)||(e.size=l),l}),n(),i(16,"label",5),r(17,"Normal"),n()(),i(18,"div",1)(19,"p-checkbox",6),u("ngModelChange",function(l){return f(e.size,l)||(e.size=l),l}),n(),i(20,"label",7),r(21,"Large"),n()()(),s(22,"app-code",8)),o&2&&(m(11),p("ngModel",e.size),m(4),p("ngModel",e.size),m(4),p("ngModel",e.size),m(3),c("code",e.code))},dependencies:[M,h,k,v,x,g,y],encapsulation:2})}return t})();function Pe(t,F){if(t&1){let a=I();i(0,"div",4)(1,"p-checkbox",9),u("ngModelChange",function(e){let b=w(a).$implicit,l=z();return f(l.formModel[b],e)||(l.formModel[b]=e),T(e)}),n(),i(2,"label",10),r(3),j(4,"titlecase"),n()()}if(t&2){let a=F.$implicit,o=z();m(),c("inputId",a)("name",a),p("ngModel",o.formModel[a]),c("binary",!0)("invalid",o.isInvalid()),m(),c("for",a),m(),ie(R(4,7,a))}}function Oe(t,F){t&1&&(i(0,"p-message",5),r(1," At least one ingredient must be selected. "),n())}var we=(()=>{class t{messageService=E(V);formSubmitted=!1;formModel={cheese:!1,mushroom:!1,pepper:!1,onion:!1};get formKeys(){return Object.keys(this.formModel)}isInvalid(){return this.formSubmitted&&!this.isAtLeastOneSelected()}isAtLeastOneSelected(){return Object.values(this.formModel).some(a=>a===!0)}onSubmit(a){this.formSubmitted=!0,this.isAtLeastOneSelected()&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.formModel={cheese:!1,mushroom:!1,pepper:!1,onion:!1},a.resetForm(this.formModel),this.formSubmitted=!1)}code={basic:`<form #form="ngForm" (ngSubmit)="onSubmit(form)" class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-4">
        @for (item of formKeys; track item) {
            <div class="flex items-center gap-2">
                <p-checkbox [inputId]="item" [name]="item" [(ngModel)]="formModel[item]" [binary]="true" [invalid]="isInvalid()"></p-checkbox>
                <label [for]="item">{{ item | titlecase }}</label>
            </div>
        }
    </div>
    @if (isInvalid()) {
        <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
    }

    <button pButton severity="secondary" type="submit">
        <span pButtonLabel>Submit</span>
    </button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #form="ngForm" (ngSubmit)="onSubmit(form)" class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
            @for (item of formKeys; track item) {
                <div class="flex items-center gap-2">
                    <p-checkbox [inputId]="item" [name]="item" [(ngModel)]="formModel[item]" [binary]="true" [invalid]="isInvalid()"></p-checkbox>
                    <label [for]="item">{{ item | titlecase }}</label>
                </div>
            }
        </div>
        @if (isInvalid()) {
            <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
        }

        <button pButton severity="secondary" type="submit">
            <span pButtonLabel>Submit</span>
        </button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'checkbox-template-driven-forms-demo',
    templateUrl: './checkbox-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, CheckboxModule, MessageModule, ToastModule, ButtonModule, CommonModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    formSubmitted: boolean = false;

    formModel = {
        cheese: false,
        mushroom: false,
        pepper: false,
        onion: false
    };

    get formKeys(): string[] {
        return Object.keys(this.formModel);
    }

    isInvalid(): boolean {
        return this.formSubmitted && !this.isAtLeastOneSelected();
    }

    isAtLeastOneSelected(): boolean {
        return Object.values(this.formModel).some((value) => value === true);
    }

    onSubmit(form: NgForm) {
        this.formSubmitted = true;

        if (this.isAtLeastOneSelected()) {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Form is submitted',
                life: 3000
            });

            this.formModel = {
                cheese: false,
                mushroom: false,
                pepper: false,
                onion: false
            };
            form.resetForm(this.formModel);

            this.formSubmitted = false;
        }
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["template-driven-forms-doc"]],decls:13,vars:2,consts:[["form","ngForm"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center","gap-2"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","checkbox-template-driven-forms-demo",3,"code"],[3,"ngModelChange","inputId","name","ngModel","binary","invalid"],[3,"for"]],template:function(o,e){if(o&1){let b=I();s(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",1)(3,"form",2,0),P("ngSubmit",function(){w(b);let Ie=oe(4);return T(e.onSubmit(Ie))}),i(5,"div",3),W(6,Pe,5,9,"div",4,L),n(),B(8,Oe,2,0,"p-message",5),i(9,"button",6)(10,"span",7),r(11,"Submit"),n()()()(),s(12,"app-code",8)}o&2&&(m(6),N(e.formKeys),m(2),A(e.isInvalid()?8:-1),m(4),c("code",e.code))},dependencies:[S,M,U,h,G,k,ae,v,x,J,H,q,Z,Y,X,Q,g,y,K],encapsulation:2})}return t})();var je=()=>["Checkbox"],Te=(()=>{class t{ptComponent=De;docs=[{id:"import",label:"Import",component:ke},{id:"basic",label:"Basic",component:be},{id:"indeterminate",label:"Indeterminate",component:Me},{id:"group",label:"Group",component:Se},{id:"dynamic",label:"Dynamic",component:ve},{id:"filled",label:"Filled",component:ye},{id:"sizes",label:"Sizes",component:Fe},{id:"disabled",label:"Disabled",component:he},{id:"invalid",label:"Invalid",component:Ce},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:we},{id:"reactive",label:"Reactive Forms",component:ze}]},{id:"accessibility",label:"Accessibility",component:ge}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Checkbox Component","header","Checkbox","description","Checkbox is an extension to standard checkbox element with theming.","themeDocs","checkbox",3,"docs","apiDocs","ptDocs"]],template:function(o,e){o&1&&s(0,"app-doc",0),o&2&&c("docs",e.docs)("apiDocs",ne(3,je))("ptDocs",e.ptComponent)},dependencies:[fe],encapsulation:2})}return t})();var Io=[{path:"",component:Te}];export{Io as default};
