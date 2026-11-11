import{a as b,b as y}from"./chunk-NLZIHUGC.js";import{a as ce,b as fe}from"./chunk-ZYT4LGUE.js";import{a as de,b as ue}from"./chunk-2SUSAFZL.js";import{a as J,b as ge}from"./chunk-JNUBCW5H.js";import"./chunk-66742H4U.js";import{a as q,b as G}from"./chunk-N3SKU25W.js";import{a as K,b as H}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as ee,f as M,g as P,h as te,i as h,j,k as oe,l as ie,p as ae,t as ne,u as S,v as le}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as se}from"./chunk-FKOOMXTU.js";import{a as g,b as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as pe}from"./chunk-XCUGNKAG.js";import{a as k,b as me}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as z,h as V}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as R,fa as O,ha as U,j as re,k as I}from"./chunk-MCW4FHXZ.js";import{za as A}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as B}from"./chunk-D2XKNHFS.js";import{$a as Y,Ab as L,Eb as m,Fb as o,Gb as i,Hb as s,Ob as Z,Qa as r,Sb as N,X as T,aa as Q,ba as X,cc as W,gb as d,hc as a,mc as u,nc as c,oc as f,sc as $,zb as E}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ve=(()=>{class t{code={basic:`<label for="date">Date</label>
<p-inputmask inputId="date"/>

<span id="phone">Phone</span>
<p-inputmask ariaLabelledBy="phone"/>

<p-inputmask ariaLabel="Age"/>`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["input-mask-accessibility-doc"]],decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,e){n&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),a(3,"Screen Reader"),i(),o(4,"p"),a(5," InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),o(6,"i"),a(7,"label"),i(),a(8," tag combined with "),o(9,"i"),a(10,"id"),i(),a(11," prop or using "),o(12,"i"),a(13,"ariaLabelledBy"),i(),a(14,", "),o(15,"i"),a(16,"ariaLabel"),i(),a(17," props. "),i()(),s(18,"app-code",0),o(19,"h3"),a(20,"Keyboard Support"),i(),o(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),a(26,"Key"),i(),o(27,"th"),a(28,"Function"),i()()(),o(29,"tbody")(30,"tr")(31,"td")(32,"i"),a(33,"tab"),i()(),o(34,"td"),a(35,"Moves focus to the input."),i()()()()()()),n&2&&(r(18),m("code",e.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[v,g,k],encapsulation:2})}return t})();var Me=(()=>{class t{value;code={basic:'<p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-basic-demo',
    templateUrl: './input-mask-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskBasicDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["mask","99-999999","placeholder","99-999999",3,"ngModelChange","ngModel"],["selector","input-mask-basic-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"InputMask is used as a controlled input with "),o(3,"i"),a(4,"ngModel"),i(),a(5," properties."),i()(),o(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()(),s(8,"app-code",2)),n&2&&(r(7),u("ngModel",e.value),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();var ke=(()=>{class t{value;code={basic:'<p-inputmask mask="999-99-9999" [(ngModel)]="value" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="999-99-9999" [(ngModel)]="value" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-disabled-demo',
    templateUrl: './input-mask-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskDisabledDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["mask","999-99-9999",3,"ngModelChange","ngModel","disabled"],["selector","input-mask-disabled-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"When "),o(3,"i"),a(4,"disabled"),i(),a(5," is present, the element cannot be edited and focused."),i()(),o(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()(),s(8,"app-code",2)),n&2&&(r(7),u("ngModel",e.value),m("disabled",!0),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();var be=(()=>{class t{value;code={basic:'<p-inputmask mask="99-999999" [(ngModel)]="value" variant="filled" placeholder="99-999999" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="99-999999" [(ngModel)]="value" variant="filled" placeholder="99-999999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-filled-demo',
    templateUrl: './input-mask-filled-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskFilledDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["filled-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["mask","99-999999","variant","filled","placeholder","99-999999",3,"ngModelChange","ngModel"],["selector","input-mask-filled-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Specify the "),o(3,"i"),a(4,"variant"),i(),a(5," property as "),o(6,"i"),a(7,"filled"),i(),a(8," to display the component with a higher visual emphasis than the default "),o(9,"i"),a(10,"outlined"),i(),a(11," style."),i()(),o(12,"div",0)(13,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()(),s(14,"app-code",2)),n&2&&(r(13),u("ngModel",e.value),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();var ye=(()=>{class t{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-inputmask id="over_label" [(ngModel)]="value1" mask="999-99-9999" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-inputmask id="in_label" [(ngModel)]="value2" mask="999-99-9999" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-inputmask id="on_label" [(ngModel)]="value3" mask="999-99-9999" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-inputmask id="over_label" [(ngModel)]="value1" mask="999-99-9999" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-inputmask id="in_label" [(ngModel)]="value2" mask="999-99-9999" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-inputmask id="on_label" [(ngModel)]="value3" mask="999-99-9999" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from "primeng/floatlabel"

@Component({
    selector: 'input-mask-floatlabel-demo',
    templateUrl: './input-mask-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask, FloatLabel]
})
export class InputMaskFloatlabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["floatlabel-doc"]],decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["id","over_label","mask","999-99-9999",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["id","in_label","mask","999-99-9999",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["id","on_label","mask","999-99-9999",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-mask-floatlabel-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"FloatLabel visually integrates a label with its form element. Visit "),o(3,"a",0),a(4,"FloatLabel"),i(),a(5," documentation for more information."),i()(),o(6,"div",1)(7,"p-floatlabel")(8,"p-inputmask",2),f("ngModelChange",function(l){return c(e.value1,l)||(e.value1=l),l}),i(),o(9,"label",3),a(10,"Over Label"),i()(),o(11,"p-floatlabel",4)(12,"p-inputmask",5),f("ngModelChange",function(l){return c(e.value2,l)||(e.value2=l),l}),i(),o(13,"label",6),a(14,"In Label"),i()(),o(15,"p-floatlabel",7)(16,"p-inputmask",8),f("ngModelChange",function(l){return c(e.value3,l)||(e.value3=l),l}),i(),o(17,"label",9),a(18,"On Label"),i()()(),s(19,"app-code",10)),n&2&&(r(8),u("ngModel",e.value1),r(4),u("ngModel",e.value2),r(4),u("ngModel",e.value3),r(3),m("code",e.code))},dependencies:[S,M,h,V,z,y,b,ue,de,v,g,k],encapsulation:2})}return t})();var he=(()=>{class t{value;code={basic:`<p-iftalabel>
    <p-inputmask id="ssn" [(ngModel)]="value" mask="999-99-9999" autocomplete="off" />
    <label for="ssn">SSN</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-inputmask id="ssn" [(ngModel)]="value" mask="999-99-9999" autocomplete="off" />
        <label for="ssn">SSN</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'input-mask-iftalabel-demo',
    templateUrl: './input-mask-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, InputMaskModule, IftaLabelModule]
})
export class InputMaskIftaLabelDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["iftalabel-doc"]],decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["id","ssn","mask","999-99-9999","autocomplete","off",3,"ngModelChange","ngModel"],["for","ssn"],["selector","input-mask-iftalabel-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"IftaLabel is used to create infield top aligned labels. Visit "),o(3,"a",0),a(4,"IftaLabel"),i(),a(5," documentation for more information."),i()(),o(6,"div",1)(7,"p-iftalabel")(8,"p-inputmask",2),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i(),o(9,"label",3),a(10,"SSN"),i()()(),s(11,"app-code",4)),n&2&&(r(8),u("ngModel",e.value),r(3),m("code",e.code))},dependencies:[S,M,h,V,z,y,b,fe,ce,v,g,k],encapsulation:2})}return t})();var Se=(()=>{class t{code={typescript:"import { InputMaskModule } from 'primeng/inputmask';"};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["input-mask-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,e){n&1&&s(0,"app-code",0),n&2&&m("code",e.code)("hideToggleCode",!0)},dependencies:[v,g],encapsulation:2})}return t})();var Ce=(()=>{class t{value1;value2;code={basic:`<p-inputmask [(ngModel)]="value1" mask="99-999999" placeholder="Serial Key" [invalid]="!value1" />
<p-inputmask [(ngModel)]="value2" mask="99-999999" placeholder="Serial Key" [invalid]="!value2" variant="filled" />`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-inputmask [(ngModel)]="value1" mask="99-999999" placeholder="Serial Key" [invalid]="!value1" />
    <p-inputmask [(ngModel)]="value2" mask="99-999999" placeholder="Serial Key" [invalid]="!value2" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-invalid-demo',
    templateUrl: './input-mask-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskInvalidDemo {
    value1: string | undefined;

    value2: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["invalid-doc"]],decls:10,vars:5,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["mask","99-999999","placeholder","Serial Key",3,"ngModelChange","ngModel","invalid"],["mask","99-999999","placeholder","Serial Key","variant","filled",3,"ngModelChange","ngModel","invalid"],["selector","input-mask-invalid-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"The invalid state is applied using the "),o(3,"i"),a(4,"\u2060invalid"),i(),a(5," property to indicate failed validation, which can be integrated with Angular Forms."),i()(),o(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value1,l)||(e.value1=l),l}),i(),o(8,"p-inputmask",2),f("ngModelChange",function(l){return c(e.value2,l)||(e.value2=l),l}),i()(),s(9,"app-code",3)),n&2&&(r(7),u("ngModel",e.value1),m("invalid",!e.value1),r(),u("ngModel",e.value2),m("invalid",!e.value2),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();var xe=(()=>{class t{value1;value2;value3;code={basic:`<span class="font-bold block mb-2">SSN</span>
<p-inputmask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999" />
<span class="font-bold block mb-2">Phone</span>
<p-inputmask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999" />
<span class="font-bold block mb-2">Serial Number</span>
<p-inputmask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <span class="font-bold block mb-2">SSN</span>
        <p-inputmask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999" />
    </div>
    <div class="flex-auto">
        <span class="font-bold block mb-2">Phone</span>
        <p-inputmask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999" />
    </div>
    <div class="flex-auto">
        <span class="font-bold block mb-2">Serial Number</span>
        <p-inputmask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-mask-mask-demo',
    templateUrl: './input-mask-mask-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask, Fluid]
})
export class InputMaskMaskDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["input-mask-mask-demo"]],decls:35,vars:4,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],[1,"font-bold","block","mb-2"],["mask","999-99-9999","placeholder","999-99-9999",3,"ngModelChange","ngModel"],["mask","(999) 999-9999","placeholder","(999) 999-9999",3,"ngModelChange","ngModel"],["mask","a*-999-a999","placeholder","a*-999-a999",3,"ngModelChange","ngModel"],["selector","input-mask-mask-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2," Mask format can be a combination of the following definitions; "),o(3,"i"),a(4,"a"),i(),a(5," for alphabetic characters, "),o(6,"i"),a(7,"9"),i(),a(8," for numeric characters and "),o(9,"i"),a(10,"*"),i(),a(11," for alphanumberic characters. In addition, formatting characters like "),o(12,"i"),a(13,"("),i(),a(14," , "),o(15,"i"),a(16,")"),i(),a(17," , "),o(18,"i"),a(19,"-"),i(),a(20," are also accepted. "),i()(),o(21,"p-fluid",0)(22,"div",1)(23,"span",2),a(24,"SSN"),i(),o(25,"p-inputmask",3),f("ngModelChange",function(l){return c(e.value1,l)||(e.value1=l),l}),i()(),o(26,"div",1)(27,"span",2),a(28,"Phone"),i(),o(29,"p-inputmask",4),f("ngModelChange",function(l){return c(e.value2,l)||(e.value2=l),l}),i()(),o(30,"div",1)(31,"span",2),a(32,"Serial Number"),i(),o(33,"p-inputmask",5),f("ngModelChange",function(l){return c(e.value3,l)||(e.value3=l),l}),i()()(),s(34,"app-code",6)),n&2&&(r(25),u("ngModel",e.value1),r(4),u("ngModel",e.value2),r(4),u("ngModel",e.value3),r(),m("code",e.code))},dependencies:[S,M,h,y,b,I,re,v,g,k],encapsulation:2})}return t})();var De=(()=>{class t{value;code={basic:'<p-inputmask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-optional-demo',
    templateUrl: './input-mask-optional-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskOptionalDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["optional-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["mask","(999) 999-9999? x99999","placeholder","(999) 999-9999? x99999",3,"ngModelChange","ngModel"],["selector","input-mask-optional-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"When the input does not complete the mask definition, it is cleared by default. Use "),o(3,"i"),a(4,"autoClear"),i(),a(5," property to control this behavior. In addition, "),o(6,"i"),a(7,"?"),i(),a(8," is used to mark anything after the question mark optional."),i()(),o(9,"div",0)(10,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()(),s(11,"app-code",2)),n&2&&(r(10),u("ngModel",e.value),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();function Ve(t,Ae){t&1&&(o(0,"p-message",4),a(1,"Serial number is required."),i())}var _e=(()=>{class t{fb;messageService=T(A);items;exampleForm;formSubmitted=!1;constructor(p){this.fb=p,this.exampleForm=this.fb.group({value:["",ee.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(p){let n=this.exampleForm.get(p);return n?.invalid&&(n.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
    <div class="flex flex-col gap-1">
        <p-inputmask mask="99-999999" formControlName="value" placeholder="99-999999" [invalid]="isInvalid('value')" fluid />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 sm:w-56">
        <div class="flex flex-col gap-1">
            <p-inputmask mask="99-999999" formControlName="value" placeholder="99-999999" [invalid]="isInvalid('value')" fluid />
            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'input-mask-reactive-forms-demo',
    templateUrl: './input-mask-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputMaskModule, MessageModule, ToastModule, ButtonModule]
})
export class InputMaskReactiveFormsDemo {
    messageService = inject(MessageService);

    items: any[] | undefined;

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
}`};static \u0275fac=function(n){return new(n||t)(Y(ne))};static \u0275cmp=d({type:t,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","sm:w-56",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["mask","99-999999","formControlName","value","placeholder","99-999999","fluid","",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","input-mask-reactive-forms-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"InputMask can also be used with reactive forms. In this case, the "),o(3,"i"),a(4,"formControlName"),i(),a(5," property is used to bind the component to a form control."),i()(),s(6,"p-toast"),o(7,"div",0)(8,"form",1),N("ngSubmit",function(){return e.onSubmit()}),o(9,"div",2),s(10,"p-inputmask",3),E(11,Ve,2,0,"p-message",4),i(),o(12,"button",5)(13,"span",6),a(14,"Submit"),i()()()(),s(15,"app-code",7)),n&2&&(r(8),m("formGroup",e.exampleForm),r(2),m("invalid",e.isInvalid("value")),r(),L(e.isInvalid("value")?11:-1),r(4),m("code",e.code))},dependencies:[le,j,M,P,oe,ie,y,b,U,O,R,H,K,G,q,I,v,g,k],encapsulation:2})}return t})();var Fe=(()=>{class t{value1;value2;value3;code={basic:`<p-inputmask [(ngModel)]="value1" placeholder="Small" size="small" mask="99-999999" />
<p-inputmask [(ngModel)]="value2" placeholder="Normal" mask="99-999999" />
<p-inputmask [(ngModel)]="value3" placeholder="Large" size="large" mask="99-999999" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-inputmask [(ngModel)]="value1" placeholder="Small" size="small" mask="99-999999" />
    <p-inputmask [(ngModel)]="value2" placeholder="Normal" mask="99-999999" />
    <p-inputmask [(ngModel)]="value3" placeholder="Large" size="large" mask="99-999999" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-sizes-demo',
    templateUrl: './input-mask-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskSizesDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["placeholder","Small","size","small","mask","99-999999",3,"ngModelChange","ngModel"],["placeholder","Normal","mask","99-999999",3,"ngModelChange","ngModel"],["placeholder","Large","size","large","mask","99-999999",3,"ngModelChange","ngModel"],["selector","input-mask-sizes-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"InputMask provides "),o(3,"i"),a(4,"small"),i(),a(5," and "),o(6,"i"),a(7,"large"),i(),a(8," sizes as alternatives to the base."),i()(),o(9,"div",0)(10,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value1,l)||(e.value1=l),l}),i(),o(11,"p-inputmask",2),f("ngModelChange",function(l){return c(e.value2,l)||(e.value2=l),l}),i(),o(12,"p-inputmask",3),f("ngModelChange",function(l){return c(e.value3,l)||(e.value3=l),l}),i()(),s(13,"app-code",4)),n&2&&(r(10),u("ngModel",e.value1),r(),u("ngModel",e.value2),r(),u("ngModel",e.value3),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();var Ie=(()=>{class t{value;code={basic:'<p-inputmask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />',html:`<div class="card flex justify-center">
    <p-inputmask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-slot-char-demo',
    templateUrl: './input-mask-slot-char-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskSlotCharDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["slot-char-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["mask","99/99/9999","placeholder","99/99/9999","slotChar","mm/dd/yyyy",3,"ngModelChange","ngModel"],["selector","input-mask-slot-char-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"Default placeholder for a mask is underscore that can be customized using "),o(3,"i"),a(4,"slotChar"),i(),a(5," property."),i()(),o(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()(),s(8,"app-code",2)),n&2&&(r(7),u("ngModel",e.value),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();function Re(t,Ae){t&1&&(o(0,"p-message",6),a(1,"Serial number is required."),i())}var we=(()=>{class t{messageService=T(A);items=[];value;onSubmit(p){p.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),p.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-inputmask name="serial" mask="99-999999" #serialNumber="ngModel" [(ngModel)]="value" placeholder="99-999999" [invalid]="serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)" required fluid />
        @if (serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
        <div class="flex flex-col gap-1">
            <p-inputmask name="serial" mask="99-999999" #serialNumber="ngModel" [(ngModel)]="value" placeholder="99-999999" [invalid]="serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)" required fluid />
            @if (serialNumber.invalid && (serialNumber.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Serial number is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject} from '@angular/core';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-template-driven-forms-demo',
    templateUrl: './input-mask-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, InputMaskModule, MessageModule, ToastModule, ButtonModule]
})
export class InputMaskTemplateDrivenFormsDoc {
    messageService = inject(MessageService);

    items: any[] = [];

    value: any;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["serialNumber","ngModel"],[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4","md:w-56",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","serial","mask","99-999999","placeholder","99-999999","required","","fluid","",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","input-mask-template-driven-forms-demo",3,"code"]],template:function(n,e){if(n&1){let C=Z();s(0,"app-docsectiontext")(1,"p-toast"),o(2,"div",2)(3,"form",3,0),N("ngSubmit",function(){Q(C);let w=W(4);return X(e.onSubmit(w))}),o(5,"div",4)(6,"p-inputmask",5,1),f("ngModelChange",function(w){return Q(C),c(e.value,w)||(e.value=w),X(w)}),i(),E(8,Re,2,0,"p-message",6),i(),o(9,"button",7)(10,"span",8),a(11,"Submit"),i()()()(),s(12,"app-code",9)}if(n&2){let C=W(4),l=W(7);r(6),u("ngModel",e.value),m("invalid",l.invalid&&(l.touched||C.submitted)),r(2),L(l.invalid&&(l.touched||C.submitted)?8:-1),r(4),m("code",e.code)}},dependencies:[S,j,M,P,ae,h,te,y,b,U,O,R,H,K,G,q,I,v,g,k],encapsulation:2})}return t})();var Te=(()=>{class t{value;code={basic:'<p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" fluid />',html:`<div class="card">
    <p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-fluid-demo',
    templateUrl: './input-mask-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskFluidDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["fluid-doc"]],decls:6,vars:2,consts:[[1,"card"],["mask","99-999999","placeholder","99-999999","fluid","",3,"ngModelChange","ngModel"],["selector","input-mask-fluid-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"The fluid prop makes the component take up the full width of its container when set to true."),i()(),o(3,"div",0)(4,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()(),s(5,"app-code",2)),n&2&&(r(4),u("ngModel",e.value),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();var Ee=(()=>{class t{value;code={basic:'<p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" [showClear]="true" />',html:`<div class="card flex justify-center">
    <p-inputmask mask="99-999999" [(ngModel)]="value" placeholder="99-999999" [showClear]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-mask-clear-icon-demo',
    templateUrl: './input-mask-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, InputMask]
})
export class InputMaskClearIconDemo {
    value: string | undefined;
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["clear-icon-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["mask","99-999999","placeholder","99-999999",3,"ngModelChange","ngModel","showClear"],["selector","input-mask-clear-icon-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"When "),o(3,"i"),a(4,"showClear"),i(),a(5," is enabled, a clear icon is displayed to clear the value."),i()(),o(6,"div",0)(7,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()(),s(8,"app-code",2)),n&2&&(r(7),u("ngModel",e.value),m("showClear",!0),r(),m("code",e.code))},dependencies:[S,M,h,y,b,v,g,k],encapsulation:2})}return t})();var Le=(()=>{class t{value=null;docs=[{data:J("InputMask"),key:"InputMask"}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["inputmask-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],["mask","99-999999","placeholder","99-999999",3,"ngModelChange","ngModel"]],template:function(n,e){n&1&&(o(0,"app-docptviewer",0)(1,"p-inputmask",1),f("ngModelChange",function(l){return c(e.value,l)||(e.value=l),l}),i()()),n&2&&(m("docs",e.docs),r(),u("ngModel",e.value))},dependencies:[B,ge,y,b,S,M,h],encapsulation:2})}return t})();var Ne=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:Le},{id:"pt.doc.inputmask",label:"InputMask PT Options",component:me,data:J("InputMask")}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["inputmask-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,e){n&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),a(3,"InputMask Pass Through"),i()(),s(4,"app-docsection",2),i()),n&2&&(r(4),m("docs",e.docs))},dependencies:[B,pe],encapsulation:2})}return t})();var Oe=()=>["InputMask"],We=(()=>{class t{ptComponent=Ne;docs=[{id:"import",label:"Import",component:Se},{id:"basic",label:"Basic",component:Me},{id:"mask",label:"Mask",component:xe},{id:"optional",label:"Optional",component:De},{id:"slotchar",label:"SlotChar",component:Ie},{id:"filled",label:"Filled",component:be},{id:"floatlabel",label:"Float Label",component:ye},{id:"iftalabel",label:"Ifta Label",component:he},{id:"clearicon",label:"Clear Icon",component:Ee},{id:"sizes",label:"Sizes",component:Fe},{id:"fluid",label:"Fluid",component:Te},{id:"disabled",label:"Disabled",component:ke},{id:"invalid",label:"Invalid",component:Ce},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:we},{id:"reactive",label:"Reactive Forms",component:_e}]},{id:"accessibility",label:"Accessibility",component:ve}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular InputMask Component","header","InputMask","description","InputMask component is used to enter input in a certain format such as numeric, date, currency and phone.","themeDocs","inputmask",3,"docs","ptDocs","apiDocs"]],template:function(n,e){n&1&&s(0,"app-doc",0),n&2&&m("docs",e.docs)("ptDocs",e.ptComponent)("apiDocs",$(3,Oe))},dependencies:[se],encapsulation:2})}return t})();var si=[{path:"",component:We}];export{si as default};
