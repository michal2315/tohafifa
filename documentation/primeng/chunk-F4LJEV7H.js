import{a as M,b as S}from"./chunk-ZVBSRVPM.js";import{a as ve,b as ye}from"./chunk-ZYT4LGUE.js";import{a as be,b as ge}from"./chunk-2SUSAFZL.js";import{a as ne,b as Me}from"./chunk-JNUBCW5H.js";import"./chunk-66742H4U.js";import{a as Z,b as $}from"./chunk-N3SKU25W.js";import{a as ee,b as te}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as re,f as y,g as J,h as le,i as x,j as Y,k as ae,l as me,p as ue,t as pe,u as C,v as de}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as fe}from"./chunk-FKOOMXTU.js";import{a as g,b as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as se}from"./chunk-XCUGNKAG.js";import{a as h,b as ce}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as H,h as L}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as K,fa as Q,ha as X,j as N,k as E}from"./chunk-MCW4FHXZ.js";import{za as q}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as O}from"./chunk-D2XKNHFS.js";import{$a as oe,Ab as z,Eb as m,Fb as t,Gb as n,Gc as U,Hb as s,Ob as B,Qa as a,Sb as j,X as P,aa as T,ba as W,cc as R,gb as b,hc as i,mb as k,mc as u,nc as p,oc as d,sc as G,zb as V}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Se=(()=>{class r{code={basic:`<label for="price">Price</label>
<p-inputnumber inputId="price" />

<span id="label_number">Number</span>
<p-inputnumber ariaLabelledBy="label_number" />

<p-inputnumber ariaLabel="Number" />

<p-inputnumber ariaDescribedBy="describe" />
<small id="describe">Information</small>`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["input-number-accessibility-doc"]],decls:75,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,e){l&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),n(),t(4,"p"),i(5," Value to describe the component can either be provided via "),t(6,"i"),i(7,"label"),n(),i(8," tag combined with "),t(9,"i"),i(10,"inputId"),n(),i(11," prop or using "),t(12,"i"),i(13,"ariaLabelledBy"),n(),i(14,", "),t(15,"i"),i(16,"ariaLabel"),n(),i(17,", "),t(18,"i"),i(19,"ariaDescribedBy"),n(),i(20," props. The input element uses "),t(21,"i"),i(22,"spinbutton"),n(),i(23," role in addition to the "),t(24,"i"),i(25,"aria-valuemin"),n(),i(26,", "),t(27,"i"),i(28,"aria-valuemax"),n(),i(29," and "),t(30,"i"),i(31,"aria-valuenow"),n(),i(32," attributes. "),n()(),s(33,"app-code",0),t(34,"h3"),i(35,"Keyboard Support"),n(),t(36,"div",1)(37,"table",2)(38,"thead")(39,"tr")(40,"th"),i(41,"Key"),n(),t(42,"th"),i(43,"Function"),n()()(),t(44,"tbody")(45,"tr")(46,"td")(47,"i"),i(48,"tab"),n()(),t(49,"td"),i(50,"Moves focus to the input."),n()(),t(51,"tr")(52,"td")(53,"i"),i(54,"up arrow"),n()(),t(55,"td"),i(56,"Increments the value."),n()(),t(57,"tr")(58,"td")(59,"i"),i(60,"down arrow"),n()(),t(61,"td"),i(62,"Decrements the value."),n()(),t(63,"tr")(64,"td")(65,"i"),i(66,"home"),n()(),t(67,"td"),i(68,"Set the minimum value if provided."),n()(),t(69,"tr")(70,"td")(71,"i"),i(72,"end"),n()(),t(73,"td"),i(74,"Set the maximum value if provided."),n()()()()()()),l&2&&(a(33),m("code",e.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[v,g,h],encapsulation:2})}return r})();function je(r,A){r&1&&s(0,"span",11)}function Re(r,A){r&1&&s(0,"span",12)}var he=(()=>{class r{value1=20;value2=10.5;value3=25;code={basic:`<p-inputnumber [(ngModel)]="value1" [showButtons]="true" inputId="stacked" mode="currency" currency="USD" />
<p-inputnumber [(ngModel)]="value2" mode="decimal" [showButtons]="true" inputId="minmax-buttons" [min]="0" [max]="100" />
<p-inputnumber [(ngModel)]="value3" [showButtons]="true" buttonLayout="horizontal" inputId="horizontal" spinnerMode="horizontal" [step]="0.25" mode="currency" currency="EUR">
    <ng-template #incrementbuttonicon>
        <span class="pi pi-plus"></span>
    </ng-template>
    <ng-template #decrementbuttonicon>
        <span class="pi pi-minus"></span>
    </ng-template>
</p-inputnumber>`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="stacked">
            Stacked
        </label>
        <p-inputnumber [(ngModel)]="value1" [showButtons]="true" inputId="stacked" mode="currency" currency="USD" />
    </div>
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="minmax-buttons">
            Min-Max Boundaries
        </label>
        <p-inputnumber [(ngModel)]="value2" mode="decimal" [showButtons]="true" inputId="minmax-buttons" [min]="0" [max]="100" />
    </div>
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="horizontal">
            Horizontal with Step
        </label>
    <p-inputnumber [(ngModel)]="value3" [showButtons]="true" buttonLayout="horizontal" inputId="horizontal" spinnerMode="horizontal" [step]="0.25" mode="currency" currency="EUR">
        <ng-template #incrementbuttonicon>
            <span class="pi pi-plus"></span>
        </ng-template>
        <ng-template #decrementbuttonicon>
            <span class="pi pi-minus"></span>
        </ng-template>
    </p-inputnumber>
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-buttons-demo',
    templateUrl: './input-number-buttons-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberButtonsDemo {
    value1: number = 20;

    value2: number = 10.5;

    value3: number = 25;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["buttons-doc"]],decls:27,vars:10,consts:[["incrementbuttonicon",""],["decrementbuttonicon",""],[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","stacked",1,"mb-2","block","font-bold"],["inputId","stacked","mode","currency","currency","USD",3,"ngModelChange","ngModel","showButtons"],["for","minmax-buttons",1,"mb-2","block","font-bold"],["mode","decimal","inputId","minmax-buttons",3,"ngModelChange","ngModel","showButtons","min","max"],["for","horizontal",1,"mb-2","block","font-bold"],["buttonLayout","horizontal","inputId","horizontal","spinnerMode","horizontal","mode","currency","currency","EUR",3,"ngModelChange","ngModel","showButtons","step"],["selector","input-number-buttons-demo",3,"code"],[1,"pi","pi-plus"],[1,"pi","pi-minus"]],template:function(l,e){if(l&1){let f=B();t(0,"app-docsectiontext")(1,"p"),i(2," Spinner buttons are enabled using the "),t(3,"i"),i(4,"showButtons"),n(),i(5," options and layout is defined with the "),t(6,"i"),i(7,"buttonLayout"),n(),i(8,'. Default value is "stacked" whereas "horizontal" and "stacked" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard. '),n()(),t(9,"p-fluid",2)(10,"div",3)(11,"label",4),i(12,"Stacked"),n(),t(13,"p-inputnumber",5),d("ngModelChange",function(D){return T(f),p(e.value1,D)||(e.value1=D),W(D)}),n()(),t(14,"div",3)(15,"label",6),i(16,"Min-Max Boundaries"),n(),t(17,"p-inputnumber",7),d("ngModelChange",function(D){return T(f),p(e.value2,D)||(e.value2=D),W(D)}),n()(),t(18,"div",3)(19,"label",8),i(20,"Horizontal with Step"),n(),t(21,"p-inputnumber",9),d("ngModelChange",function(D){return T(f),p(e.value3,D)||(e.value3=D),W(D)}),k(22,je,1,0,"ng-template",null,0,U)(24,Re,1,0,"ng-template",null,1,U),n()()(),s(26,"app-code",10)}l&2&&(a(13),u("ngModel",e.value1),m("showButtons",!0),a(4),u("ngModel",e.value2),m("showButtons",!0)("min",0)("max",100),a(4),u("ngModel",e.value3),m("showButtons",!0)("step",.25),a(5),m("code",e.code))},dependencies:[C,y,x,S,M,E,N,v,g,h],encapsulation:2})}return r})();var xe=(()=>{class r{value;code={basic:'<p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" [showClear]="true" inputStyleClass="w-56" />',html:`<div class="card flex justify-center">
    <p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" [showClear]="true" inputStyleClass="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-clear-icon-demo',
    templateUrl: './input-number-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumberModule]
})
export class InputNumberClearIconDemo {
    value: number | undefined;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["clear-icon-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["inputId","price_input","mode","currency","currency","USD","locale","en-US","inputStyleClass","w-56",3,"ngModelChange","ngModel","showClear"],["selector","input-number-clear-icon-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"When "),t(3,"i"),i(4,"showClear"),n(),i(5," is enabled, a clear icon is displayed to clear the value."),n()(),t(6,"div",0)(7,"p-inputnumber",1),d("ngModelChange",function(o){return p(e.value,o)||(e.value=o),o}),n()(),s(8,"app-code",2)),l&2&&(a(7),u("ngModel",e.value),m("showClear",!0),a(),m("code",e.code))},dependencies:[C,y,x,L,S,M,v,g,h],encapsulation:2})}return r})();var Ce=(()=>{class r{value1=1500;value2=2500;value3=4250;value4=5002;code={basic:`<p-inputnumber [(ngModel)]="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value2" mode="currency"inputId="currency-germany"currency="EUR" locale="de-DE" />
<p-inputnumber [(ngModel)]="value3" mode="currency" inputId="currency-india" currency="INR" currencyDisplay="code" locale="en-IN" />
<p-inputnumber [(ngModel)]="value4" mode="currency" inputId="currency-japan" currency="JPY" locale="jp-JP" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-us">
            United States
        </label>
        <p-inputnumber [(ngModel)]="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-germany">
            Germany
        </label>
        <p-inputnumber [(ngModel)]="value2" mode="currency" inputId="currency-germany" currency="EUR" locale="de-DE" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-india">
            India
        </label>
        <p-inputnumber [(ngModel)]="value3" mode="currency" inputId="currency-india" currency="INR" currencyDisplay="code" locale="en-IN" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-japan">
            Japan
        </label>
        <p-inputnumber [(ngModel)]="value4" mode="currency" inputId="currency-japan" currency="JPY" locale="jp-JP" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-currency-demo',
    templateUrl: './input-number-currency-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberCurrencyDemo {
    value1: number = 1500;

    value2: number = 2500;

    value3: number = 4250;

    value4: number = 5002;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["currency-doc"]],decls:30,vars:5,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","currency-us",1,"block","font-bold","mb-2"],["inputId","currency-us","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","currency-germany",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-germany","currency","EUR","locale","de-DE",3,"ngModelChange","ngModel"],["for","currency-india",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-india","currency","INR","currencyDisplay","code","locale","en-IN",3,"ngModelChange","ngModel"],["for","currency-japan",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-japan","currency","JPY","locale","jp-JP",3,"ngModelChange","ngModel"],["selector","input-number-currency-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2," Currency formatting is specified by setting the "),t(3,"i"),i(4,"mode"),n(),i(5," option to currency and "),t(6,"i"),i(7,"currency"),n(),i(8," property. In addition "),t(9,"i"),i(10,"currencyDisplay"),n(),i(11,' option allows how the currency is displayed, valid values are "symbol" (default) or "code". '),n()(),t(12,"p-fluid",0)(13,"div",1)(14,"label",2),i(15,"United States"),n(),t(16,"p-inputnumber",3),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n()(),t(17,"div",1)(18,"label",4),i(19,"Germany"),n(),t(20,"p-inputnumber",5),d("ngModelChange",function(o){return p(e.value2,o)||(e.value2=o),o}),n()(),t(21,"div",1)(22,"label",6),i(23,"India"),n(),t(24,"p-inputnumber",7),d("ngModelChange",function(o){return p(e.value3,o)||(e.value3=o),o}),n()(),t(25,"div",1)(26,"label",8),i(27,"Japan"),n(),t(28,"p-inputnumber",9),d("ngModelChange",function(o){return p(e.value4,o)||(e.value4=o),o}),n()()(),s(29,"app-code",10)),l&2&&(a(16),u("ngModel",e.value1),a(4),u("ngModel",e.value2),a(4),u("ngModel",e.value3),a(4),u("ngModel",e.value4),a(),m("code",e.code))},dependencies:[C,y,x,S,M,E,N,v,g,h],encapsulation:2})}return r})();var De=(()=>{class r{value1=50;code={basic:'<p-inputnumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1" />',html:`<div class="card flex justify-center">
    <p-inputnumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-disabled-demo',
    templateUrl: './input-number-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberDisabledDemo {
    value1: number = 50;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["inputId","integeronly","prefix","%",3,"ngModelChange","disabled","ngModel"],["selector","input-number-disabled-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"When "),t(3,"i"),i(4,"disabled"),n(),i(5," is present, the element cannot be edited and focused."),n()(),t(6,"div",0)(7,"p-inputnumber",1),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n()(),s(8,"app-code",2)),l&2&&(a(7),m("disabled",!0),u("ngModel",e.value1),a(),m("code",e.code))},dependencies:[C,y,x,S,M,v,g,h],encapsulation:2})}return r})();var _e=(()=>{class r{value1;code={basic:'<p-inputnumber variant="filled" [(ngModel)]="value1" />',html:`<div class="card flex justify-center">
    <p-inputnumber variant="filled" [(ngModel)]="value1" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-filled-demo',
    templateUrl: './input-number-filled-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberFilledDemo {
    value1!: number;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["filled-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel"],["selector","input-number-filled-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Specify the "),t(3,"i"),i(4,"variant"),n(),i(5," property as "),t(6,"i"),i(7,"filled"),n(),i(8," to display the component with a higher visual emphasis than the default "),t(9,"i"),i(10,"outlined"),n(),i(11," style."),n()(),t(12,"div",0)(13,"p-inputnumber",1),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n()(),s(14,"app-code",2)),l&2&&(a(13),u("ngModel",e.value1),a(),m("code",e.code))},dependencies:[C,y,x,S,M,v,g,h],encapsulation:2})}return r})();var Ie=(()=>{class r{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-inputnumber [(ngModel)]="value1" inputId="over_label" mode="currency" currency="USD" locale="en-US" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-inputnumber [(ngModel)]="value2" inputId="in_label" mode="currency" currency="USD" locale="en-US" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-inputnumber [(ngModel)]="value3" inputId="on_label" mode="currency" currency="USD" locale="en-US" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-inputnumber [(ngModel)]="value1" inputId="over_label" mode="currency" currency="USD" locale="en-US" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-inputnumber [(ngModel)]="value2" inputId="in_label" mode="currency" currency="USD" locale="en-US" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-inputnumber [(ngModel)]="value3" inputId="on_label" mode="currency" currency="USD" locale="en-US" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'input-number-float-label-demo',
    templateUrl: './input-number-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, FloatLabel]
})
export class InputNumberFloatLabelDemo {
    value1: number | undefined;

    value2: number | undefined;

    value3: number | undefined;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["float-label-doc"]],decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["inputId","in_label","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["inputId","on_label","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-number-float-label-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2," A floating label appears on top of the input field when focused. Visit "),t(3,"a",0),i(4,"FloatLabel"),n(),i(5," documentation for more information. "),n()(),t(6,"div",1)(7,"p-floatlabel")(8,"p-inputnumber",2),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n(),t(9,"label",3),i(10,"Over Label"),n()(),t(11,"p-floatlabel",4)(12,"p-inputnumber",5),d("ngModelChange",function(o){return p(e.value2,o)||(e.value2=o),o}),n(),t(13,"label",6),i(14,"In Label"),n()(),t(15,"p-floatlabel",7)(16,"p-inputnumber",8),d("ngModelChange",function(o){return p(e.value3,o)||(e.value3=o),o}),n(),t(17,"label",9),i(18,"On Label"),n()()(),s(19,"app-code",10)),l&2&&(a(8),u("ngModel",e.value1),a(4),u("ngModel",e.value2),a(4),u("ngModel",e.value3),a(3),m("code",e.code))},dependencies:[C,y,x,L,H,S,M,ge,be,v,g,h],encapsulation:2})}return r})();var we=(()=>{class r{value;code={basic:'<p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" fluid />',html:`<div class="card">
    <p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-fluid-demo',
    templateUrl: './input-number-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumberModule]
})
export class InputNumberFluidDemo {
    value: number | undefined;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["fluid-doc"]],decls:6,vars:2,consts:[[1,"card"],["inputId","price_input","mode","currency","currency","USD","locale","en-US","fluid","",3,"ngModelChange","ngModel"],["selector","input-number-fluid-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"The fluid prop makes the component take up the full width of its container when set to true."),n()(),t(3,"div",0)(4,"p-inputnumber",1),d("ngModelChange",function(o){return p(e.value,o)||(e.value=o),o}),n()(),s(5,"app-code",2)),l&2&&(a(4),u("ngModel",e.value),a(),m("code",e.code))},dependencies:[C,y,x,L,S,M,v,g,h],encapsulation:2})}return r})();var Fe=(()=>{class r{value;code={basic:`<p-iftalabel>
    <p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" />
    <label for="price_input">Price</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-inputnumber [(ngModel)]="value" inputId="price_input" mode="currency" currency="USD" locale="en-US" />
        <label for="price_input">Price</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'input-number-ifta-label-demo',
    templateUrl: './input-number-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumberModule, IftaLabelModule]
})
export class InputNumberIftaLabelDemo {
    value: number | undefined;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["ifta-label-doc"]],decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","price_input","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","price_input"],["selector","input-number-ifta-label-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"IftaLabel is used to create infield top aligned labels. Visit "),t(3,"a",0),i(4,"IftaLabel"),n(),i(5," documentation for more information."),n()(),t(6,"div",1)(7,"p-iftalabel")(8,"p-inputnumber",2),d("ngModelChange",function(o){return p(e.value,o)||(e.value=o),o}),n(),t(9,"label",3),i(10,"Price"),n()()(),s(11,"app-code",4)),l&2&&(a(8),u("ngModel",e.value),a(3),m("code",e.code))},dependencies:[C,y,x,L,H,S,M,ye,ve,v,g,h],encapsulation:2})}return r})();var Ne=(()=>{class r{code={typescript:"import { InputNumberModule } from 'primeng/inputnumber';"};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["input-number-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,e){l&1&&s(0,"app-code",0),l&2&&m("code",e.code)("hideToggleCode",!0)},dependencies:[v,g],encapsulation:2})}return r})();var Ee=(()=>{class r{value1;value2;code={basic:`<p-inputnumber [(ngModel)]="value1" [invalid]="value1 === undefined" mode="decimal" [minFractionDigits]="2" placeholder="Amount" />
<p-inputnumber [(ngModel)]="value2" [invalid]="value2 === undefined" mode="decimal" [minFractionDigits]="2" variant="filled" placeholder="Amount" />`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-inputnumber [(ngModel)]="value1" [invalid]="value1 === undefined" mode="decimal" [minFractionDigits]="2" placeholder="Amount" />
    <p-inputnumber [(ngModel)]="value2" [invalid]="value2 === undefined" mode="decimal" [minFractionDigits]="2" variant="filled" placeholder="Amount" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-invalid-demo',
    templateUrl: './input-number-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberInvalidDemo {
    value1!: number;

    value2!: number;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["invalid-doc"]],decls:10,vars:7,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["mode","decimal","placeholder","Amount",3,"ngModelChange","ngModel","invalid","minFractionDigits"],["mode","decimal","variant","filled","placeholder","Amount",3,"ngModelChange","ngModel","invalid","minFractionDigits"],["selector","input-number-invalid-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"The invalid state is applied using the "),t(3,"i"),i(4,"\u2060invalid"),n(),i(5," property to indicate failed validation, which can be integrated with Angular Forms."),n()(),t(6,"div",0)(7,"p-inputnumber",1),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n(),t(8,"p-inputnumber",2),d("ngModelChange",function(o){return p(e.value2,o)||(e.value2=o),o}),n()(),s(9,"app-code",3)),l&2&&(a(7),u("ngModel",e.value1),m("invalid",e.value1===void 0)("minFractionDigits",2),a(),u("ngModel",e.value2),m("invalid",e.value2===void 0)("minFractionDigits",2),a(),m("code",e.code))},dependencies:[C,y,x,S,M,v,g,h],encapsulation:2})}return r})();var Te=(()=>{class r{value1=151351;value2=115744;value3=635524;value4=732762;code={basic:`<p-inputnumber [(ngModel)]="value1" inputId="locale-user" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value2" inputId="locale-us" mode="decimal" locale="en-US" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value3" inputId="locale-german" mode="decimal" locale="de-DE" [minFractionDigits]="2" />
<p-inputnumber [(ngModel)]="value4" inputId="locale-indian" mode="decimal" locale="en-IN" [minFractionDigits]="2" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-user">
            User Locale
        </label>
        <p-inputnumber [(ngModel)]="value1" inputId="locale-user" [minFractionDigits]="2" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-us">
            United States Locale
        </label>
        <p-inputnumber [(ngModel)]="value2" inputId="locale-us" mode="decimal" locale="en-US" [minFractionDigits]="2" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-german">
            German Locale
        </label>
        <p-inputnumber [(ngModel)]="value3" inputId="locale-german" mode="decimal" locale="de-DE" [minFractionDigits]="2" />
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-indian">
            Indian Locale
        </label>
        <p-inputnumber [(ngModel)]="value4" inputId="locale-indian" mode="decimal" locale="en-IN" [minFractionDigits]="2" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-locale-demo',
    templateUrl: './input-number-locale-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberLocaleDemo {
    value1: number = 151351;

    value2: number = 115744;

    value3: number = 635524;

    value4: number = 732762;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["locale-doc"]],decls:24,vars:9,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","locale-user",1,"block","font-bold","mb-2"],["inputId","locale-user",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-us",1,"block","font-bold","mb-2"],["inputId","locale-us","mode","decimal","locale","en-US",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-german",1,"block","font-bold","mb-2"],["inputId","locale-german","mode","decimal","locale","de-DE",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-indian",1,"block","font-bold","mb-2"],["inputId","locale-indian","mode","decimal","locale","en-IN",3,"ngModelChange","ngModel","minFractionDigits"],["selector","input-number-locale-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Localization information such as grouping and decimal symbols are defined with the "),t(3,"i"),i(4,"locale"),n(),i(5," property which defaults to the user locale."),n()(),t(6,"p-fluid",0)(7,"div",1)(8,"label",2),i(9,"User Locale"),n(),t(10,"p-inputnumber",3),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n()(),t(11,"div",1)(12,"label",4),i(13,"United States Locale"),n(),t(14,"p-inputnumber",5),d("ngModelChange",function(o){return p(e.value2,o)||(e.value2=o),o}),n()(),t(15,"div",1)(16,"label",6),i(17,"German Locale"),n(),t(18,"p-inputnumber",7),d("ngModelChange",function(o){return p(e.value3,o)||(e.value3=o),o}),n()(),t(19,"div",1)(20,"label",8),i(21,"Indian Locale"),n(),t(22,"p-inputnumber",9),d("ngModelChange",function(o){return p(e.value4,o)||(e.value4=o),o}),n()()(),s(23,"app-code",10)),l&2&&(a(10),u("ngModel",e.value1),m("minFractionDigits",2),a(4),u("ngModel",e.value2),m("minFractionDigits",2),a(4),u("ngModel",e.value3),m("minFractionDigits",2),a(4),u("ngModel",e.value4),m("minFractionDigits",2),a(),m("code",e.code))},dependencies:[C,y,x,S,M,E,N,v,g,h],encapsulation:2})}return r})();var We=(()=>{class r{value1=42723;value2=58151;value3=2351.35;value4=50;code={basic:`<p-inputnumber inputId="integeronly" [(ngModel)]="value1" />
<p-inputnumber [(ngModel)]="value2" mode="decimal" inputId="withoutgrouping" [useGrouping]="false" />
<p-inputnumber [(ngModel)]="value3" inputId="minmaxfraction" mode="decimal" [minFractionDigits]="2" [maxFractionDigits]="5" />
<p-inputnumber [(ngModel)]="value4" inputId="minmax" mode="decimal" [min]="0" [max]="100" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="integeronly">Integer Only</label>
        <p-inputnumber inputId="integeronly" [(ngModel)]="value1" />
    </div>
    <div class="flex-auto">
        <label for="withoutgrouping">Without Grouping</label>
        <p-inputnumber [(ngModel)]="value2" mode="decimal" inputId="withoutgrouping" [useGrouping]="false" />
    </div>
    <div class="flex-auto">
        <label for="minmaxfraction">Min-Max Fraction Digits</label>
        <p-inputnumber [(ngModel)]="value3" inputId="minmaxfraction" mode="decimal" [minFractionDigits]="2" [maxFractionDigits]="5" />
    </div>
    <div class="flex-auto">
        <label for="minmax">Min-Max Boundaries</label>
        <p-inputnumber [(ngModel)]="value4" inputId="minmax" mode="decimal" [min]="0" [max]="100" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-numerals-demo',
    templateUrl: './input-number-numerals-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberNumeralsDemo {
    value1: number = 42723;

    value2: number = 58151;

    value3: number = 2351.35;

    value4: number = 50;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["numerals-doc"]],decls:24,vars:10,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","integeronly",1,"mb-2","font-bold","block"],["inputId","integeronly",3,"ngModelChange","ngModel"],["for","withoutgrouping",1,"mb-2","font-bold","block"],["mode","decimal","inputId","withoutgrouping",3,"ngModelChange","ngModel","useGrouping"],["for","minmaxfraction",1,"mb-2","font-bold","block"],["inputId","minmaxfraction","mode","decimal",3,"ngModelChange","ngModel","minFractionDigits","maxFractionDigits"],["for","minmax",1,"mb-2","font-bold","block"],["inputId","minmax","mode","decimal",3,"ngModelChange","ngModel","min","max"],["selector","input-number-numerals-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"InputNumber is used as a controlled input with "),t(3,"i"),i(4,"ngModel"),n(),i(5," property."),n()(),t(6,"p-fluid",0)(7,"div",1)(8,"label",2),i(9,"Integer Only"),n(),t(10,"p-inputnumber",3),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n()(),t(11,"div",1)(12,"label",4),i(13,"Without Grouping"),n(),t(14,"p-inputnumber",5),d("ngModelChange",function(o){return p(e.value2,o)||(e.value2=o),o}),n()(),t(15,"div",1)(16,"label",6),i(17,"Min-Max Fraction Digits"),n(),t(18,"p-inputnumber",7),d("ngModelChange",function(o){return p(e.value3,o)||(e.value3=o),o}),n()(),t(19,"div",1)(20,"label",8),i(21,"Min-Max Boundaries"),n(),t(22,"p-inputnumber",9),d("ngModelChange",function(o){return p(e.value4,o)||(e.value4=o),o}),n()()(),s(23,"app-code",10)),l&2&&(a(10),u("ngModel",e.value1),a(4),u("ngModel",e.value2),m("useGrouping",!1),a(4),u("ngModel",e.value3),m("minFractionDigits",2)("maxFractionDigits",5),a(4),u("ngModel",e.value4),m("min",0)("max",100),a(),m("code",e.code))},dependencies:[C,y,x,S,M,E,N,v,g,h],encapsulation:2})}return r})();var Le=(()=>{class r{value1=20;value2=50;value3=10;value4=20;code={basic:`<p-inputnumber [(ngModel)]="value1" inputId="mile" suffix=" mi" />
<p-inputnumber [(ngModel)]="value2" inputId="percent" prefix="%" />
<p-inputnumber [(ngModel)]="value3"inputId="expiry" prefix="Expires in " suffix=" days" />
<p-inputnumber [(ngModel)]="value4" prefix="\u2191 " inputId="temperature" suffix="\u2103" [min]="0" [max]="40" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="mile">
            Mile
        </label>
        <p-inputnumber [(ngModel)]="value1" inputId="mile" suffix=" mi" />
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="percent">
            Percent
        </label>
        <p-inputnumber [(ngModel)]="value2" inputId="percent" prefix="%" />
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="expiry">
            Expiry
        </label>
        <p-inputnumber [(ngModel)]="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="temperature">
            Temperature
        </label>
        <p-inputnumber [(ngModel)]="value4" prefix="\u2191 "inputId="temperature" suffix="\u2103" [min]="0" [max]="40" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'input-number-prefix-suffix-demo',
    templateUrl: './input-number-prefix-suffix-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Fluid]
})
export class InputNumberPrefixSuffixDemo {
    value1: number = 20;

    value2: number = 50;

    value3: number = 10;

    value4: number = 20;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["prefix-suffix-doc"]],decls:27,vars:7,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","mile",1,"font-bold","block","mb-2"],["inputId","mile","suffix"," mi",3,"ngModelChange","ngModel"],["for","percent",1,"font-bold","block","mb-2"],["inputId","percent","prefix","%",3,"ngModelChange","ngModel"],["for","expiry",1,"font-bold","block","mb-2"],["inputId","expiry","prefix","Expires in ","suffix"," days",3,"ngModelChange","ngModel"],["for","temperature",1,"font-bold","block","mb-2"],["prefix","\u2191 ","inputId","temperature","suffix","\u2103",3,"ngModelChange","ngModel","min","max"],["selector","input-number-prefix-suffix-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Custom texts e.g. units can be placed before or after the input section with the "),t(3,"i"),i(4,"prefix"),n(),i(5," and "),t(6,"i"),i(7,"suffix"),n(),i(8," properties."),n()(),t(9,"p-fluid",0)(10,"div",1)(11,"label",2),i(12,"Mile"),n(),t(13,"p-inputnumber",3),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n()(),t(14,"div",1)(15,"label",4),i(16,"Percent"),n(),t(17,"p-inputnumber",5),d("ngModelChange",function(o){return p(e.value2,o)||(e.value2=o),o}),n()(),t(18,"div",1)(19,"label",6),i(20,"Expiry"),n(),t(21,"p-inputnumber",7),d("ngModelChange",function(o){return p(e.value3,o)||(e.value3=o),o}),n()(),t(22,"div",1)(23,"label",8),i(24,"Temperature"),n(),t(25,"p-inputnumber",9),d("ngModelChange",function(o){return p(e.value4,o)||(e.value4=o),o}),n()()(),s(26,"app-code",10)),l&2&&(a(13),u("ngModel",e.value1),a(4),u("ngModel",e.value2),a(4),u("ngModel",e.value3),a(4),u("ngModel",e.value4),m("min",0)("max",40),a(),m("code",e.code))},dependencies:[C,y,x,S,M,E,N,v,g,h],encapsulation:2})}return r})();var Be=(()=>{class r{value=20;docs=[{data:ne("InputNumber"),key:"InputNumber"}];static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["inputnumber-pt-viewer"]],decls:2,vars:3,consts:[[3,"docs"],["inputId","stacked-buttons","mode","currency","currency","USD",3,"ngModelChange","ngModel","showButtons"]],template:function(l,e){l&1&&(t(0,"app-docptviewer",0)(1,"p-inputnumber",1),d("ngModelChange",function(o){return p(e.value,o)||(e.value=o),o}),n()()),l&2&&(m("docs",e.docs),a(),u("ngModel",e.value),m("showButtons",!0))},dependencies:[O,Me,S,M,C,y,x],encapsulation:2})}return r})();var Ue=(()=>{class r{docs=[{id:"pt.viewer",label:"Viewer",component:Be},{id:"pt.doc.inputnumber",label:"InputNumber PT Options",component:ce,data:ne("InputNumber")}];static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["inputnumber-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(l,e){l&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),i(3,"InputNumber Pass Through"),n()(),s(4,"app-docsection",2),n()),l&2&&(a(4),m("docs",e.docs))},dependencies:[O,se],encapsulation:2})}return r})();function Ye(r,A){r&1&&(t(0,"p-message",4),i(1,"Number is required."),n())}var Ae=(()=>{class r{fb;messageService=P(q);exampleForm;formSubmitted=!1;constructor(c){this.fb=c,this.exampleForm=this.fb.group({value:[void 0,re.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(c){let l=this.exampleForm.get(c);return l?.invalid&&(l.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputnumber inputId="integeronly" formControlName="value" [invalid]="isInvalid('value')"/>
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-1">
            <p-inputnumber inputId="integeronly" formControlName="value" [invalid]="isInvalid('value')"/>
            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit" class="w-full"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/message';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';

@Component({
    selector: 'input-number-reactive-forms-demo',
    templateUrl: './input-number-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, InputNumber, Message, Button, Toast],
})
export class InputNumberReactiveFormsDemo implements OnInit {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            value: [undefined, Validators.required]
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
}`};static \u0275fac=function(l){return new(l||r)(oe(pe))};static \u0275cmp=b({type:r,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["inputId","integeronly","formControlName","value",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","input-number-reactive-forms-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"InputNumber can also be used with reactive forms. In this case, the "),t(3,"i"),i(4,"formControlName"),n(),i(5," property is used to bind the component to a form control."),n()(),s(6,"p-toast"),t(7,"div",0)(8,"form",1),j("ngSubmit",function(){return e.onSubmit()}),t(9,"div",2),s(10,"p-inputnumber",3),V(11,Ye,2,0,"p-message",4),n(),t(12,"button",5)(13,"span",6),i(14,"Submit"),n()()()(),s(15,"app-code",7)),l&2&&(a(8),m("formGroup",e.exampleForm),a(2),m("invalid",e.isInvalid("value")),a(),z(e.isInvalid("value")?11:-1),a(4),m("code",e.code))},dependencies:[de,Y,y,J,ae,me,S,M,X,Q,K,te,ee,$,Z,v,g,h],encapsulation:2})}return r})();var Pe=(()=>{class r{value1;value2;value3;code={basic:`<p-inputnumber [(ngModel)]="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
<p-inputnumber [(ngModel)]="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-inputnumber [(ngModel)]="value1" size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
    <p-inputnumber [(ngModel)]="value2" placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
    <p-inputnumber [(ngModel)]="value3" size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-sizes-demo',
    templateUrl: './input-number-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberSizesDemo {
    value1!: number;

    value2!: number;

    value3!: number;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["placeholder","Normal","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["size","large","placeholder","Large","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["selector","input-number-sizes-demo",3,"code"]],template:function(l,e){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"InputNumber provides "),t(3,"i"),i(4,"small"),n(),i(5," and "),t(6,"i"),i(7,"large"),n(),i(8," sizes as alternatives to the base."),n()(),t(9,"div",0)(10,"p-inputnumber",1),d("ngModelChange",function(o){return p(e.value1,o)||(e.value1=o),o}),n(),t(11,"p-inputnumber",2),d("ngModelChange",function(o){return p(e.value2,o)||(e.value2=o),o}),n(),t(12,"p-inputnumber",3),d("ngModelChange",function(o){return p(e.value3,o)||(e.value3=o),o}),n()(),s(13,"app-code",4)),l&2&&(a(10),u("ngModel",e.value1),a(),u("ngModel",e.value2),a(),u("ngModel",e.value3),a(),m("code",e.code))},dependencies:[C,y,x,S,M,v,g,h],encapsulation:2})}return r})();function He(r,A){r&1&&(t(0,"p-message",6),i(1,"Number is required."),n())}var ke=(()=>{class r{messageService=P(q);value;onSubmit(c){c.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),c.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-inputnumber inputId="integeronly" #inputValue="ngModel" name="inputValue" [(ngModel)]="value" [invalid]="inputValue.invalid && (inputValue.touched || exampleForm.submitted)" required/>
        @if (inputValue.invalid && (inputValue.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Number is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-inputnumber inputId="integeronly" #inputValue="ngModel" name="inputValue" [(ngModel)]="value" [invalid]="inputValue.invalid && (inputValue.touched || exampleForm.submitted)" required/>
            @if (inputValue.invalid && (inputValue.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Number is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
    selector: 'rating-template-driven-forms-demo',
    templateUrl: './rating-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber, Message, Toast, Button]
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
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["inputValue","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["inputId","integeronly","name","inputValue","required","",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","multiselect-reactive-forms-demo",3,"code"]],template:function(l,e){if(l&1){let f=B();s(0,"app-docsectiontext")(1,"p-toast"),t(2,"div",2)(3,"form",3,0),j("ngSubmit",function(){T(f);let D=R(4);return W(e.onSubmit(D))}),t(5,"div",4)(6,"p-inputnumber",5,1),d("ngModelChange",function(D){return T(f),p(e.value,D)||(e.value=D),W(D)}),n(),V(8,He,2,0,"p-message",6),n(),t(9,"button",7)(10,"span",8),i(11,"Submit"),n()()()(),s(12,"app-code",9)}if(l&2){let f=R(4),o=R(7);a(6),u("ngModel",e.value),m("invalid",o.invalid&&(o.touched||f.submitted)),a(2),z(o.invalid&&(o.touched||f.submitted)?8:-1),a(4),m("code",e.code)}},dependencies:[C,Y,y,J,ue,x,le,S,M,X,Q,K,te,ee,$,Z,v,g,h],encapsulation:2})}return r})();var Ke=()=>({width:"3rem"});function Qe(r,A){r&1&&s(0,"span",5)}function Xe(r,A){r&1&&s(0,"span",6)}var Ve=(()=>{class r{value1=50;code={basic:`<p-inputnumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" [inputStyle]="{ width: '3rem' }">
    <ng-template #incrementbuttonicon>
        <span class="pi pi-plus"></span>
    </ng-template>
    <ng-template #decrementbuttonicon>
        <span class="pi pi-minus"></span>
    </ng-template>
</p-inputnumber>`,html:`<div class="card flex justify-center">
    <p-inputnumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" [inputStyle]="{ width: '3rem' }">
        <ng-template #incrementbuttonicon>
            <span class="pi pi-plus"></span>
        </ng-template>
        <ng-template #decrementbuttonicon>
            <span class="pi pi-minus"></span>
        </ng-template>
    </p-inputnumber>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-number-vertical-demo',
    templateUrl: './input-number-vertical-demo.html',
    standalone: true,
    imports: [FormsModule, InputNumber]
})
export class InputNumberVerticalDemo {
    value1: number = 50;
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["vertical-doc"]],decls:16,vars:5,consts:[["incrementbuttonicon",""],["decrementbuttonicon",""],[1,"card","flex","justify-center"],["buttonLayout","vertical","spinnerMode","vertical","inputId","vertical",3,"ngModelChange","ngModel","showButtons","inputStyle"],["selector","input-number-vertical-demo",3,"code"],[1,"pi","pi-plus"],[1,"pi","pi-minus"]],template:function(l,e){if(l&1){let f=B();t(0,"app-docsectiontext")(1,"p"),i(2,"Buttons can also placed vertically by setting "),t(3,"i"),i(4,"buttonLayout"),n(),i(5," as "),t(6,"i"),i(7,"vertical"),n(),i(8,"."),n()(),t(9,"div",2)(10,"p-inputnumber",3),d("ngModelChange",function(D){return T(f),p(e.value1,D)||(e.value1=D),W(D)}),k(11,Qe,1,0,"ng-template",null,0,U)(13,Xe,1,0,"ng-template",null,1,U),n()(),s(15,"app-code",4)}l&2&&(a(10),u("ngModel",e.value1),m("showButtons",!0)("inputStyle",G(4,Ke)),a(5),m("code",e.code))},dependencies:[C,y,x,S,M,v,g,h],encapsulation:2})}return r})();var Ze=()=>["InputNumber"],ze=(()=>{class r{docs=[{id:"import",label:"Import",component:Ne},{id:"numerals",label:"Numerals",component:We},{id:"locale",label:"Locale",component:Te},{id:"currency",label:"Currency",component:Ce},{id:"prefixsuffix",label:"Prefix & Suffix",component:Le},{id:"buttons",label:"Buttons",component:he},{id:"vertical",label:"Vertical",component:Ve},{id:"floatlabel",label:"Float Label",component:Ie},{id:"iftalabel",label:"Ifta Label",component:Fe},{id:"clearicon",label:"Clear Icon",component:xe},{id:"sizes",label:"Sizes",component:Pe},{id:"fluid",label:"Fluid",component:we},{id:"filled",label:"Filled",component:_e},{id:"disabled",label:"Disabled",component:De},{id:"invalid",label:"Invalid",component:Ee},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:ke},{id:"reactive",label:"Reactive Forms",component:Ae}]},{id:"accessibility",label:"Accessibility",component:Se}];ptComponent=Ue;static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular InputNumber Component","header","InputNumber","description","InputNumber is an input component to provide numerical input.","themeDocs","inputnumber",3,"docs","apiDocs","ptDocs"]],template:function(l,e){l&1&&s(0,"app-doc",0),l&2&&m("docs",e.docs)("apiDocs",G(3,Ze))("ptDocs",e.ptComponent)},dependencies:[fe],encapsulation:2})}return r})();var Ui=[{path:"",component:ze}];export{Ui as default};
