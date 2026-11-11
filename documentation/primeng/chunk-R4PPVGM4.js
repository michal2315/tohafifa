import{a as y,b as M}from"./chunk-YIMZONIF.js";import{a as Y,b as ce}from"./chunk-JNUBCW5H.js";import{a as H,b as J}from"./chunk-N3SKU25W.js";import{a as Q,b as X}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{d as ie,f as b,g as V,h as ne,i as h,j as G,k as re,l as ae,t as le,u as S,v as de}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as pe}from"./chunk-FKOOMXTU.js";import{a as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as se}from"./chunk-XCUGNKAG.js";import{a as x,b as me}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as U,fa as q,ha as K}from"./chunk-MCW4FHXZ.js";import{za as z}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as oe,w as D}from"./chunk-D2XKNHFS.js";import{$a as Z,Ab as P,Cb as W,Db as N,Eb as m,Fb as e,Gb as o,Hb as s,Ob as I,Qa as d,Sb as A,Ub as F,X as E,aa as T,ba as R,cc as L,gb as p,hc as n,ic as ee,jc as O,mb as $,mc as u,nc as f,oc as g,rc as j,sc as te,zb as k}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ue=(()=>{class i{code={basic:`<label for="rb1">One</label>
<p-radiobutton inputId="rb1" />

<span id="rb2">Two</span>
<p-radiobutton ariaLabelledBy="rb2" />

<p-radiobutton ariaLabel="Three" />`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["radio-button-accessibility-doc"]],decls:60,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(r,t){r&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),o(),e(4,"p"),n(5," RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via "),e(6,"i"),n(7,"label"),o(),n(8," tag combined with "),e(9,"i"),n(10,"inputId"),o(),n(11," prop or using "),e(12,"i"),n(13,"ariaLabelledBy"),o(),n(14,", "),e(15,"i"),n(16,"ariaLabel"),o(),n(17," props. "),o()(),s(18,"app-code",0),e(19,"h3"),n(20,"Keyboard Support"),o(),e(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),n(26,"Key"),o(),e(27,"th"),n(28,"Function"),o()()(),e(29,"tbody")(30,"tr")(31,"td")(32,"i"),n(33,"tab"),o()(),e(34,"td"),n(35,"Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus."),o()(),e(36,"tr")(37,"td")(38,"span",3)(39,"i",4),n(40,"left arrow"),o(),e(41,"i"),n(42,"up arrow"),o()()(),e(43,"td"),n(44,"Moves focus to the previous radio button, if there is none then last radio button receives the focus."),o()(),e(45,"tr")(46,"td")(47,"span",3)(48,"i",4),n(49,"right arrow"),o(),e(50,"i"),n(51,"down arrow"),o()()(),e(52,"td"),n(53,"Moves focus to the next radio button, if there is none then first radio button receives the focus."),o()(),e(54,"tr")(55,"td")(56,"i"),n(57,"space"),o()(),e(58,"td"),n(59,"If the focused radio button is unchecked, changes the state to checked."),o()()()()()()),r&2&&(d(18),m("code",t.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[v,x],encapsulation:2})}return i})();var fe=(()=>{class i{value=2;code={basic:`<p-radiobutton [(ngModel)]="value" [value]="1" [disabled]="true" />
<p-radiobutton [(ngModel)]="value" [value]="2" [disabled]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-radiobutton [(ngModel)]="value" [value]="1" [disabled]="true" />
    <p-radiobutton [(ngModel)]="value" [value]="2" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-disabled-demo',
    templateUrl: './radio-button-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonDisabledDemo { }`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["disabled-doc"]],decls:10,vars:7,consts:[[1,"card","flex","justify-center","gap-2"],[3,"ngModelChange","ngModel","value","disabled"],["selector","radio-button-disabled-demo",3,"code"]],template:function(r,t){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"When "),e(3,"i"),n(4,"disabled"),o(),n(5," is present, the element cannot be edited and focused."),o()(),e(6,"div",0)(7,"p-radiobutton",1),g("ngModelChange",function(l){return f(t.value,l)||(t.value=l),l}),o(),e(8,"p-radiobutton",1),g("ngModelChange",function(l){return f(t.value,l)||(t.value=l),l}),o()(),s(9,"app-code",2)),r&2&&(d(7),u("ngModel",t.value),m("value",1)("disabled",!0),d(),u("ngModel",t.value),m("value",2)("disabled",!0),d(),m("code",t.code))},dependencies:[S,b,h,M,y,v,x],encapsulation:2})}return i})();function we(i,_){if(i&1){let a=I();e(0,"div",4)(1,"p-radiobutton",5),g("ngModelChange",function(t){T(a);let c=F();return f(c.selectedCategory,t)||(c.selectedCategory=t),R(t)}),o(),e(2,"label",6),n(3),o()()}if(i&2){let a=_.$implicit,r=F();d(),m("inputId",a.key)("value",a),u("ngModel",r.selectedCategory),d(),m("for",a.key),d(),ee(a.name)}}var ge=(()=>{class i{selectedCategory=null;categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];ngOnInit(){this.selectedCategory=this.categories[1]}code={basic:`<div class="flex flex-col gap-4">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radiobutton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory" />
        <label [for]="category.key" class="ml-2">{{ category.name }}</label>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-4">
        <div *ngFor="let category of categories" class="field-checkbox">
            <p-radiobutton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory" />
            <label [for]="category.key" class="ml-2">{{ category.name }}</label>
        </div>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-dynamic-demo',
    templateUrl: './radio-button-dynamic-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonDynamicDemo implements OnInit{
    selectedCategory: any = null;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
}`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["dynamic-doc"]],decls:7,vars:2,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4"],["class","field-checkbox",4,"ngFor","ngForOf"],["selector","radio-button-dynamic-demo",3,"code"],[1,"field-checkbox"],["name","category",3,"ngModelChange","inputId","value","ngModel"],[1,"ml-2",3,"for"]],template:function(r,t){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"RadioButtons can be generated using a list of values."),o()(),e(3,"div",0)(4,"div",1),$(5,we,4,5,"div",2),o()(),s(6,"app-code",3)),r&2&&(d(5),m("ngForOf",t.categories),d(),m("code",t.code))},dependencies:[D,oe,S,b,h,M,y,v,x],encapsulation:2})}return i})();var ve=(()=>{class i{checked=!1;code={basic:'<p-radiobutton [(ngModel)]="checked" variant="filled" />',html:`<div class="card flex justify-center">
    <p-radiobutton [(ngModel)]="checked" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-filled-demo',
    templateUrl: './radio-button-filled-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonFilledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["filled-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel"],["selector","radio-button-filled-demo",3,"code"]],template:function(r,t){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Specify the "),e(3,"i"),n(4,"variant"),o(),n(5," property as "),e(6,"i"),n(7,"filled"),o(),n(8," to display the component with a higher visual emphasis than the default "),e(9,"i"),n(10,"outlined"),o(),n(11," style."),o()(),e(12,"div",0)(13,"p-radiobutton",1),g("ngModelChange",function(l){return f(t.checked,l)||(t.checked=l),l}),o()(),s(14,"app-code",2)),r&2&&(d(13),u("ngModel",t.checked),d(),m("code",t.code))},dependencies:[S,b,h,M,y,v,x],encapsulation:2})}return i})();var be=(()=>{class i{ingredient;code={basic:`<div class="flex flex-wrap gap-4">
    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
        <label for="ingredient3" class="ml-2">Pepper</label>
    </div>

    <div class="flex items-center">
        <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
        <label for="ingredient4" class="ml-2">Onion</label>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-wrap gap-4">
        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1" />
            <label for="ingredient1" class="ml-2">Cheese</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2" />
            <label for="ingredient2" class="ml-2">Mushroom</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3" />
            <label for="ingredient3" class="ml-2">Pepper</label>
        </div>

        <div class="flex items-center">
            <p-radiobutton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4" />
            <label for="ingredient4" class="ml-2">Onion</label>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-group-demo',
    templateUrl: './radio-button-group-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonGroupDemo {
    ingredient!: string;
}`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["group-doc"]],decls:28,vars:5,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center"],["name","pizza","value","Cheese","inputId","ingredient1",3,"ngModelChange","ngModel"],["for","ingredient1",1,"ml-2"],["name","pizza","value","Mushroom","inputId","ingredient2",3,"ngModelChange","ngModel"],["for","ingredient2",1,"ml-2"],["name","pizza","value","Pepper","inputId","ingredient3",3,"ngModelChange","ngModel"],["for","ingredient3",1,"ml-2"],["name","pizza","value","Onion","inputId","ingredient4",3,"ngModelChange","ngModel"],["for","ingredient4",1,"ml-2"],["selector","radio-button-group-demo",3,"code"]],template:function(r,t){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"RadioButton is used as a controlled input with "),e(3,"i"),n(4,"value"),o(),n(5," and "),e(6,"i"),n(7,"ngModel"),o(),n(8," properties."),o()(),e(9,"div",0)(10,"div",1)(11,"div",2)(12,"p-radiobutton",3),g("ngModelChange",function(l){return f(t.ingredient,l)||(t.ingredient=l),l}),o(),e(13,"label",4),n(14,"Cheese"),o()(),e(15,"div",2)(16,"p-radiobutton",5),g("ngModelChange",function(l){return f(t.ingredient,l)||(t.ingredient=l),l}),o(),e(17,"label",6),n(18,"Mushroom"),o()(),e(19,"div",2)(20,"p-radiobutton",7),g("ngModelChange",function(l){return f(t.ingredient,l)||(t.ingredient=l),l}),o(),e(21,"label",8),n(22,"Pepper"),o()(),e(23,"div",2)(24,"p-radiobutton",9),g("ngModelChange",function(l){return f(t.ingredient,l)||(t.ingredient=l),l}),o(),e(25,"label",10),n(26,"Onion"),o()()()(),s(27,"app-code",11)),r&2&&(d(12),u("ngModel",t.ingredient),d(4),u("ngModel",t.ingredient),d(4),u("ngModel",t.ingredient),d(4),u("ngModel",t.ingredient),d(3),m("code",t.code))},dependencies:[S,b,h,M,y,v,x],encapsulation:2})}return i})();var ye=(()=>{class i{code={typescript:"import { RadioButtonModule } from 'primeng/radiobutton';"};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["radio-button-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,t){r&1&&s(0,"app-code",0),r&2&&m("code",t.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return i})();var Me=(()=>{class i{value=!1;code={basic:'<p-radiobutton [(ngModel)]="value" [invalid]="!value"  />',html:`<div class="card flex justify-center">
    <p-radiobutton [(ngModel)]="value" [invalid]="!value"  />
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-invalid-demo',
    templateUrl: './radio-button-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonInvalidDemo {
    value : boolean = false;
}`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["invalid-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","invalid"],["selector","radio-button-invalid-demo",3,"code"]],template:function(r,t){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"The invalid state is applied using the "),e(3,"i"),n(4,"\u2060invalid"),o(),n(5," property to indicate failed validation, which can be integrated with Angular Forms."),o()(),e(6,"div",0)(7,"p-radiobutton",1),g("ngModelChange",function(l){return f(t.value,l)||(t.value=l),l}),o()(),s(8,"app-code",2)),r&2&&(d(7),u("ngModel",t.value),m("invalid",!t.value),d(),m("code",t.code))},dependencies:[S,b,h,M,y,v,x],encapsulation:2})}return i})();var Re=(i,_)=>_.key;function Ie(i,_){if(i&1&&(e(0,"div",3),s(1,"p-radiobutton",8),e(2,"label",9),n(3),o()()),i&2){let a=_.$implicit,r=F();d(),m("inputId",a.key)("value",a)("invalid",r.isInvalid("selectedCategory")),d(),m("for",a.key),d(),O(" ",a.name," ")}}function Ee(i,_){i&1&&(e(0,"p-message",4),n(1," At least one ingredient must be selected. "),o())}var xe=(()=>{class i{fb;messageService=E(z);formSubmitted=!1;exampleForm;categories=[{name:"Cheese",key:"C"},{name:"Mushroom",key:"M"},{name:"Pepper",key:"P"},{name:"Onion",key:"O"}];constructor(a){this.fb=a,this.exampleForm=this.fb.group({selectedCategory:["",ie.required]})}isInvalid(a){return this.exampleForm.get(a)?.invalid&&this.formSubmitted}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-4">
        @for (category of categories; track category) {
            <div class="flex items-center gap-2">
                <p-radiobutton formControlName="selectedCategory" name="selectedCategory" [inputId]="category.key" [value]="category" [invalid]="isInvalid('selectedCategory')" />
                <label [for]="category.key"> {{ category.name }} </label>
            </div>
        }
    </div>
    @if (isInvalid('selectedCategory')) {
        <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
    }
    <button pButton severity="secondary" type="submit">
        <span pButtonLabel>Submit</span>
    </button>
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
            @for (category of categories; track category) {
                <div class="flex items-center gap-2">
                    <p-radiobutton formControlName="selectedCategory" name="selectedCategory" [inputId]="category.key" [value]="category" [invalid]="isInvalid('selectedCategory')" />
                    <label [for]="category.key"> {{ category.name }} </label>
                </div>
            }
        </div>
        @if (isInvalid('selectedCategory')) {
            <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
        }
        <button pButton severity="secondary" type="submit">
            <span pButtonLabel>Submit</span>
        </button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
    selector: 'radio-button-reactive-forms-demo',
    templateUrl: './radio-button-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, RadioButtonModule],
})
export class RadioButtonReactiveFormsDemo implements OnInit {
    messageService = inject(MessageService);

    formSubmitted: boolean = false;

    exampleForm: FormGroup;

    categories: any[] = [
        { name: 'Cheese', key: 'C' },
        { name: 'Mushroom', key: 'M' },
        { name: 'Pepper', key: 'P' },
        { name: 'Onion', key: 'O' }
    ];

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            selectedCategory: ['', Validators.required]
        });
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid &&  this.formSubmitted;
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

            this.exampleForm.reset();

            this.formSubmitted = false;
        }
    }
}`};static \u0275fac=function(r){return new(r||i)(Z(le))};static \u0275cmp=p({type:i,selectors:[["reactive-forms-doc"]],features:[j([z])],decls:17,vars:3,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center","gap-2"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","radio-button-reactive-forms-demo",3,"code"],["formControlName","selectedCategory","name","selectedCategory",3,"inputId","value","invalid"],[3,"for"]],template:function(r,t){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"RadioButton can also be used with reactive forms. In this case, the "),e(3,"i"),n(4,"formControlName"),o(),n(5," property is used to bind the component to a form control."),o()(),s(6,"p-toast"),e(7,"div",0)(8,"form",1),A("ngSubmit",function(){return t.onSubmit()}),e(9,"div",2),W(10,Ie,4,5,"div",3,Re),o(),k(12,Ee,2,0,"p-message",4),e(13,"button",5)(14,"span",6),n(15,"Submit"),o()()()(),s(16,"app-code",7)),r&2&&(d(8),m("formGroup",t.exampleForm),d(2),N(t.categories),d(2),P(t.isInvalid("selectedCategory")?12:-1),d(4),m("code",t.code))},dependencies:[de,G,b,V,re,ae,M,y,K,q,U,X,Q,J,H,v,x,D],encapsulation:2})}return i})();var he=(()=>{class i{size=!1;code={basic:`<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
    </div>
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
    </div>
    <div class="flex items-center gap-2">
        <p-radiobutton [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
            <p-radiobutton [(ngModel)]="size" inputId="size_small" name="size" value="Small" size="small" />
            <label for="size_small" class="text-sm">Small</label>
        </div>
        <div class="flex items-center gap-2">
            <p-radiobutton [(ngModel)]="size" inputId="size_normal" name="size" value="Normal" />
            <label for="size_normal">Normal</label>
        </div>
        <div class="flex items-center gap-2">
            <p-radiobutton [(ngModel)]="size" inputId="size_large" name="size" value="Large" size="large" />
            <label for="size_large" class="text-lg">Large</label>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-sizes-demo',
    templateUrl: './radio-button-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonSizesDemo {
    size: any = false;
}`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["sizes-doc"]],decls:24,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center","gap-2"],["inputId","size_small","name","size","value","Small","size","small",3,"ngModelChange","ngModel"],["for","size_small",1,"text-sm"],["inputId","size_normal","name","size","value","Normal",3,"ngModelChange","ngModel"],["for","size_normal"],["inputId","size_large","name","size","value","Large","size","large",3,"ngModelChange","ngModel"],["for","size_large",1,"text-lg"],["selector","radio-button-sizes-demo",3,"code"]],template:function(r,t){r&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"RadioButton provides "),e(3,"i"),n(4,"small"),o(),n(5," and "),e(6,"i"),n(7,"large"),o(),n(8," sizes as alternatives to the base."),o()(),e(9,"div",0)(10,"div",1)(11,"div",2)(12,"p-radiobutton",3),g("ngModelChange",function(l){return f(t.size,l)||(t.size=l),l}),o(),e(13,"label",4),n(14,"Small"),o()(),e(15,"div",2)(16,"p-radiobutton",5),g("ngModelChange",function(l){return f(t.size,l)||(t.size=l),l}),o(),e(17,"label",6),n(18,"Normal"),o()(),e(19,"div",2)(20,"p-radiobutton",7),g("ngModelChange",function(l){return f(t.size,l)||(t.size=l),l}),o(),e(21,"label",8),n(22,"Large"),o()()()(),s(23,"app-code",9)),r&2&&(d(12),u("ngModel",t.size),d(4),u("ngModel",t.size),d(4),u("ngModel",t.size),d(3),m("code",t.code))},dependencies:[S,b,h,M,y,v,x],encapsulation:2})}return i})();var ke=(i,_)=>_.name;function Pe(i,_){if(i&1){let a=I();e(0,"div",4)(1,"p-radiobutton",9),g("ngModelChange",function(t){T(a);let c=F();return f(c.ingredient,t)||(c.ingredient=t),R(t)}),o(),e(2,"label",10),n(3),o()()}if(i&2){let a=_.$implicit,r=F(),t=L(4);d(),u("ngModel",r.ingredient),m("inputId",a.key)("value",a)("invalid",r.isInvalid(t)),d(),m("for",a.key),d(),O(" ",a.name," ")}}function We(i,_){i&1&&(e(0,"p-message",5),n(1," At least one ingredient must be selected. "),o())}var Se=(()=>{class i{messageService=E(z);formSubmitted=!1;ingredient;categories=[{name:"Cheese",key:"C"},{name:"Mushroom",key:"M"},{name:"Pepper",key:"P"},{name:"Onion",key:"O"}];isInvalid(a){return!this.ingredient&&a.submitted}onSubmit(a){this.isInvalid(a)||(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),a.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-4">
        @for (category of categories; track category.name) {
            <div class="flex items-center gap-2">
                <p-radiobutton [(ngModel)]="ingredient" [inputId]="category.key" [value]="category" [invalid]="isInvalid(exampleForm)" name="ingredient" />
                <label [for]="category.key"> {{ category.name }} </label>
            </div>
        }
    </div>
    @if (isInvalid(exampleForm)) {
        <p-message severity="error" size="small" variant="simple"> At least one ingredient must be selected. </p-message>
    }

    <button pButton severity="secondary" type="submit">
        <span pButtonLabel>Submit</span>
    </button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
            @for (category of categories; track category.name) {
                <div class="flex items-center gap-2">
                    <p-radiobutton [(ngModel)]="ingredient" [inputId]="category.key" [value]="category" [invalid]="isInvalid(exampleForm)" name="ingredient" />
                    <label [for]="category.key"> {{ category.name }} </label>
                </div>
            }
        </div>
        @if (isInvalid(exampleForm)) {
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
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
    selector: 'radio-button-template-driven-forms-demo',
    templateUrl: './radio-button-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, MessageModule, ToastModule, ButtonModule, CommonModule, RadioButtonModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    formSubmitted: boolean = false;

    ingredient!: any;

    categories: any[] = [
        { name: 'Cheese', key: 'C' },
        { name: 'Mushroom', key: 'M' },
        { name: 'Pepper', key: 'P' },
        { name: 'Onion', key: 'O' }
    ];

    isInvalid(form: NgForm) {
        return !this.ingredient && form.submitted;
    }

    onSubmit(form: NgForm) {
        if (!this.isInvalid(form)) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["template-driven-forms-doc"]],features:[j([z])],decls:13,vars:2,consts:[["exampleForm","ngForm"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-wrap","gap-4"],[1,"flex","items-center","gap-2"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","radio-button-template-driven-forms-demo",3,"code"],["name","ingredient",3,"ngModelChange","ngModel","inputId","value","invalid"],[3,"for"]],template:function(r,t){if(r&1){let c=I();s(0,"app-docsectiontext")(1,"p-toast"),e(2,"div",1)(3,"form",2,0),A("ngSubmit",function(){T(c);let Fe=L(4);return R(t.onSubmit(Fe))}),e(5,"div",3),W(6,Pe,4,6,"div",4,ke),o(),k(8,We,2,0,"p-message",5),e(9,"button",6)(10,"span",7),n(11,"Submit"),o()()()(),s(12,"app-code",8)}if(r&2){let c=L(4);d(6),N(t.categories),d(2),P(t.isInvalid(c)?8:-1),d(4),m("code",t.code)}},dependencies:[S,G,b,V,h,ne,M,y,K,q,U,X,Q,J,H,v,x,D],encapsulation:2})}return i})();var Ce=(()=>{class i{value=null;docs=[{data:Y("RadioButton"),key:"RadioButton"}];static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["radiobutton-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],["name","pt-demo","value","1",3,"ngModelChange","ngModel"]],template:function(r,t){r&1&&(e(0,"app-docptviewer",0)(1,"p-radiobutton",1),g("ngModelChange",function(l){return f(t.value,l)||(t.value=l),l}),o()()),r&2&&(m("docs",t.docs),d(),u("ngModel",t.value))},dependencies:[D,ce,M,y,S,b,h],encapsulation:2})}return i})();var _e=(()=>{class i{docs=[{id:"pt.viewer",label:"Viewer",component:Ce},{id:"pt.doc.radiobutton",label:"RadioButton PT Options",component:me,data:Y("RadioButton")}];static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["radiobutton-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(r,t){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),n(3,"RadioButton Pass Through"),o()(),s(4,"app-docsection",2),o()),r&2&&(d(4),m("docs",t.docs))},dependencies:[D,se],encapsulation:2})}return i})();var Ne=()=>["RadioButton"],De=(()=>{class i{ptComponent=_e;docs=[{id:"import",label:"Import",component:ye},{id:"group",label:"Group",component:be},{id:"dynamic",label:"Dynamic",component:ge},{id:"filled",label:"Filled",component:ve},{id:"sizes",label:"Sizes",component:he},{id:"disabled",label:"Disabled",component:fe},{id:"invalid",label:"Invalid",component:Me},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Se},{id:"reactive",label:"Reactive Forms",component:xe}]},{id:"accessibility",label:"Accessibility",component:ue}];static \u0275fac=function(r){return new(r||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular RadioButton Component","header","RadioButton","description","RadioButton is an extension to standard radio button element with theming.","themeDocs","radiobutton",3,"docs","apiDocs","ptDocs"]],template:function(r,t){r&1&&s(0,"app-doc",0),r&2&&m("docs",t.docs)("apiDocs",te(3,Ne))("ptDocs",t.ptComponent)},dependencies:[pe],encapsulation:2})}return i})();var bo=[{path:"",component:De}];export{bo as default};
