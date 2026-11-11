import{a as f,b as v}from"./chunk-I7QKC6KT.js";import{a as H,b as se}from"./chunk-JNUBCW5H.js";import{a as z,b as U}from"./chunk-N3SKU25W.js";import{a as K,b as k}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{d as $,f as c,g as I,h as ee,i as M,j as L,k as te,l as ie,p as oe,t as re,u as S,v as ne}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as le}from"./chunk-FKOOMXTU.js";import{a as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as me}from"./chunk-XCUGNKAG.js";import{a as u,b as ae}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as q,fa as O,ha as G}from"./chunk-MCW4FHXZ.js";import{za as _}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as F}from"./chunk-D2XKNHFS.js";import{$a as X,Ab as N,Eb as l,Fb as i,Gb as o,Gc as Q,Hb as p,Ob as A,Qa as m,Sb as W,X as E,aa as R,ba as V,cc as P,gb as d,hc as r,mb as Y,mc as y,nc as b,oc as h,rc as j,sc as Z,zb as B}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var pe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["rating-accessibility-doc"]],decls:61,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(t,n){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),r(3,"Screen Reader"),o(),i(4,"p"),r(5," Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the "),i(6,"a",0),r(7,"locale"),o(),r(8," API via "),i(9,"i"),r(10,"star"),o(),r(11," and "),i(12,"i"),r(13,"stars"),o(),r(14," of the "),i(15,"i"),r(16,"aria"),o(),r(17," property. "),o()(),i(18,"h3"),r(19,"Keyboard Support"),o(),i(20,"p"),r(21,"Keyboard interaction is derived from the native browser handling of radio buttons in a group."),o(),i(22,"div",1)(23,"table",2)(24,"thead")(25,"tr")(26,"th"),r(27,"Key"),o(),i(28,"th"),r(29,"Function"),o()()(),i(30,"tbody")(31,"tr")(32,"td")(33,"i"),r(34,"tab"),o()(),i(35,"td"),r(36,"Moves focus to the star representing the value, if there is none then first star receives the focus."),o()(),i(37,"tr")(38,"td")(39,"span",3)(40,"i",4),r(41,"left arrow"),o(),i(42,"i"),r(43,"up arrow"),o()()(),i(44,"td"),r(45,"Moves focus to the previous star, if there is none then last radio button receives the focus."),o()(),i(46,"tr")(47,"td")(48,"span",3)(49,"i",4),r(50,"right arrow"),o(),i(51,"i"),r(52,"down arrow"),o()()(),i(53,"td"),r(54,"Moves focus to the next star, if there is none then first star receives the focus."),o()(),i(55,"tr")(56,"td")(57,"i"),r(58,"space"),o()(),i(59,"td"),r(60,"If the focused star does not represent the value, changes the value to the star value."),o()()()()()())},dependencies:[u],encapsulation:2})}return e})();var de=(()=>{class e{value;code={basic:'<p-rating [(ngModel)]="value" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-basic-demo',
    templateUrl: './rating-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingBasicDemo {
    value!: number;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","rating-basic-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Two-way value binding is defined using "),i(3,"i"),r(4,"ngModel"),o(),r(5,"."),o()(),i(6,"div",0)(7,"p-rating",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),o()(),p(8,"app-code",2)),t&2&&(m(7),y("ngModel",n.value),m(),l("code",n.code))},dependencies:[S,c,M,v,f,g,u],encapsulation:2})}return e})();var ce=(()=>{class e{value=5;code={basic:'<p-rating [(ngModel)]="value" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-disabled-demo',
    templateUrl: './rating-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingDisabledDemo {
    value: number = 5;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","rating-disabled-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"When "),i(3,"i"),r(4,"disabled"),o(),r(5," is present, a visual hint is applied to indicate that the Knob cannot be interacted with."),o()(),i(6,"div",0)(7,"p-rating",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),o()(),p(8,"app-code",2)),t&2&&(m(7),y("ngModel",n.value),l("disabled",!0),m(),l("code",n.code))},dependencies:[S,c,M,v,f,g,u],encapsulation:2})}return e})();var ue=(()=>{class e{code={typescript:"import { RatingModule } from 'primeng/rating';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["rating-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,n){t&1&&p(0,"app-code",0),t&2&&l("code",n.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return e})();var ge=(()=>{class e{value=5;code={basic:'<p-rating [(ngModel)]="value" [stars]="10" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" [stars]="10" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-number-of-stars-demo',
    templateUrl: './rating-number-of-stars-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingNumberOfStarsDemo {
    value: number = 5;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["number-of-stars-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","stars"],["selector","rating-number-of-stars-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Number of stars to display is defined with "),i(3,"i"),r(4,"stars"),o(),r(5," property."),o()(),i(6,"div",0)(7,"p-rating",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),o()(),p(8,"app-code",2)),t&2&&(m(7),y("ngModel",n.value),l("stars",10),m(),l("code",n.code))},dependencies:[S,c,M,v,f,g,u],encapsulation:2})}return e})();function Fe(e,J){e&1&&(i(0,"p-message",4),r(1,"Value is required."),o())}var fe=(()=>{class e{fb;messageService=E(_);exampleForm;formSubmitted=!1;constructor(a){this.fb=a,this.exampleForm=this.fb.group({ratingValue:[void 0,$.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(a){let t=this.exampleForm.get(a);return t?.invalid&&(t.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-40">
    <div class="flex flex-col items-center gap-2">
        <p-rating formControlName="ratingValue" [invalid]="isInvalid('ratingValue')"/>
        @if (isInvalid('ratingValue')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-40">
        <div class="flex flex-col items-center gap-2">
            <p-rating formControlName="ratingValue" [invalid]="isInvalid('ratingValue')"/>
            @if (isInvalid('ratingValue')) {
                <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';
import { Message } from 'primeng/message';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';

@Component({
    selector: 'rating-reactive-forms-demo',
    templateUrl: './rating-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Rating, Toast, Message, Button]
})
export class RatingReactiveFormsDemo {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            ratingValue: [undefined, Validators.required]
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
}`};static \u0275fac=function(t){return new(t||e)(X(re))};static \u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],features:[j([_])],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-40",3,"ngSubmit","formGroup"],[1,"flex","flex-col","items-center","gap-2"],["formControlName","ratingValue",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","rating-reactive-forms-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"Rating can also be used with reactive forms. In this case, the "),i(3,"i"),r(4,"formControlName"),o(),r(5," property is used to bind the component to a form control."),o()(),p(6,"p-toast"),i(7,"div",0)(8,"form",1),W("ngSubmit",function(){return n.onSubmit()}),i(9,"div",2),p(10,"p-rating",3),B(11,Fe,2,0,"p-message",4),o(),i(12,"button",5)(13,"span",6),r(14,"Submit"),o()()()(),p(15,"app-code",7)),t&2&&(m(8),l("formGroup",n.exampleForm),m(2),l("invalid",n.isInvalid("ratingValue")),m(),N(n.isInvalid("ratingValue")?11:-1),m(4),l("code",n.code))},dependencies:[ne,L,c,I,te,ie,v,f,G,O,q,k,K,U,z,g,u,F],encapsulation:2})}return e})();var ve=(()=>{class e{value=3;code={basic:'<p-rating [(ngModel)]="value" [readonly]="true" />',html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value" [readonly]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-readonly-demo',
    templateUrl: './rating-readonly-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingReadonlyDemo {
    value: number = 3;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["readonly-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","readonly"],["selector","rating-readonly-demo",3,"code"]],template:function(t,n){t&1&&(i(0,"app-docsectiontext")(1,"p"),r(2,"When "),i(3,"i"),r(4,"readonly"),o(),r(5," present, value cannot be edited."),o()(),i(6,"div",0)(7,"p-rating",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),o()(),p(8,"app-code",2)),t&2&&(m(7),y("ngModel",n.value),l("readonly",!0),m(),l("code",n.code))},dependencies:[S,c,M,v,f,g,u],encapsulation:2})}return e})();function we(e,J){e&1&&p(0,"img",5)}function Te(e,J){e&1&&p(0,"img",6)}var ye=(()=>{class e{value;code={basic:`<p-rating [(ngModel)]="value">
    <ng-template #onicon>
        <img src="/_ext/primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24" width="24" />
    </ng-template>
    <ng-template #officon>
        <img src="/_ext/primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
    </ng-template>
</p-rating>`,html:`<div class="card flex justify-center">
    <p-rating [(ngModel)]="value">
        <ng-template #onicon>
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" height="24"  width="24" />
        </ng-template>
        <ng-template #officon>
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" height="24" width="24" />
        </ng-template>
    </p-rating>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
    selector: 'rating-template-demo',
    templateUrl: './rating-template-demo.html',
    standalone: true,
    imports: [FormsModule, Rating]
})
export class RatingTemplateDemo {
    value!: number;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-doc"]],decls:10,vars:2,consts:[["onicon",""],["officon",""],[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","rating-template-demo",3,"code"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png","height","24","width","24"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png","height","24","width","24"]],template:function(t,n){if(t&1){let x=A();i(0,"app-docsectiontext")(1,"p"),r(2,"Templating allows customizing the content where the icon instance is available as the implicit variable."),o()(),i(3,"div",2)(4,"p-rating",3),h("ngModelChange",function(C){return R(x),b(n.value,C)||(n.value=C),V(C)}),Y(5,we,1,0,"ng-template",null,0,Q)(7,Te,1,0,"ng-template",null,1,Q),o()(),p(9,"app-code",4)}t&2&&(m(4),y("ngModel",n.value),m(5),l("code",n.code))},dependencies:[S,c,M,v,f,g,u],encapsulation:2})}return e})();function _e(e,J){e&1&&(i(0,"p-message",6),r(1,"Value is required."),o())}var be=(()=>{class e{messageService=E(_);value;onSubmit(a){a.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),a.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-40">
    <div class="flex flex-col items-center gap-2">
        <p-rating #ratingValue="ngModel" [(ngModel)]="value" required name="ratingValue" [invalid]="ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)"/>
        @if (ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-40">
        <div class="flex flex-col items-center gap-2">
            <p-rating #ratingValue="ngModel" [(ngModel)]="value" required name="ratingValue" [invalid]="ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)"/>
            @if (ratingValue.invalid && (ratingValue.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelect } from 'primeng/multiselect';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';

@Component({
    selector: 'rating-template-driven-forms-demo',
    templateUrl: './rating-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelect, Message, Toast, Button]
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
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-driven-forms-doc"]],features:[j([_])],decls:13,vars:4,consts:[["exampleForm","ngForm"],["ratingValue","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-40",3,"ngSubmit"],[1,"flex","flex-col","items-center","gap-2"],["required","","name","ratingValue",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","multiselect-reactive-forms-demo",3,"code"]],template:function(t,n){if(t&1){let x=A();p(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",2)(3,"form",3,0),W("ngSubmit",function(){R(x);let C=P(4);return V(n.onSubmit(C))}),i(5,"div",4)(6,"p-rating",5,1),h("ngModelChange",function(C){return R(x),b(n.value,C)||(n.value=C),V(C)}),o(),B(8,_e,2,0,"p-message",6),o(),i(9,"button",7)(10,"span",8),r(11,"Submit"),o()()()(),p(12,"app-code",9)}if(t&2){let x=P(4),s=P(7);m(6),y("ngModel",n.value),l("invalid",s.invalid&&(s.touched||x.submitted)),m(2),N(s.invalid&&(s.touched||x.submitted)?8:-1),m(4),l("code",n.code)}},dependencies:[S,L,c,I,oe,M,ee,v,f,G,O,q,k,K,U,z,g,u,F],encapsulation:2})}return e})();var he=(()=>{class e{value=null;docs=[{data:H("Rating"),key:"Rating"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["rating-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"ngModelChange","ngModel"]],template:function(t,n){t&1&&(i(0,"app-docptviewer",0)(1,"p-rating",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),o()()),t&2&&(l("docs",n.docs),m(),y("ngModel",n.value))},dependencies:[F,se,v,f,S,c,M],encapsulation:2})}return e})();var Me=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:he},{id:"pt.doc.rating",label:"Rating PT Options",component:ae,data:H("Rating")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["rating-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),r(3,"Rating Pass Through"),o()(),p(4,"app-docsection",2),o()),t&2&&(m(4),l("docs",n.docs))},dependencies:[F,me],encapsulation:2})}return e})();var Re=()=>["Rating"],Se=(()=>{class e{ptComponent=Me;docs=[{id:"import",label:"Import",component:ue},{id:"basic",label:"Basic",component:de},{id:"numberofstars",label:"Number of Stars",component:ge},{id:"template",label:"Template",component:ye},{id:"readonly",label:"Readonly",component:ve},{id:"disabled",label:"Disabled",component:ce},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:be},{id:"reactive",label:"Reactive Forms",component:fe}]},{id:"accessibility",label:"Accessibility",component:pe}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Rating Component","header","Rating","description","Rating component is a star based selection input.","themeDocs","rating",3,"docs","apiDocs","ptDocs"]],template:function(t,n){t&1&&p(0,"app-doc",0),t&2&&l("docs",n.docs)("apiDocs",Z(3,Re))("ptDocs",n.ptComponent)},dependencies:[le],encapsulation:2})}return e})();var $t=[{path:"",component:Se}];export{$t as default};
