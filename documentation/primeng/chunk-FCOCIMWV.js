import{a as f,b as u}from"./chunk-SYFA2O3J.js";import{a as K,b as se}from"./chunk-JNUBCW5H.js";import{a as G,b as z}from"./chunk-N3SKU25W.js";import{a as U,b as O}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{d as ee,f as g,g as W,h as te,i as b,j as V,k as oe,l as ie,p as re,t as ne,u as y,v as le}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ce}from"./chunk-FKOOMXTU.js";import{a as p}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ae}from"./chunk-XCUGNKAG.js";import{a as h,b as me}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as L,fa as R,ha as q}from"./chunk-MCW4FHXZ.js";import{za as j}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as $,w as C}from"./chunk-D2XKNHFS.js";import{$a as J,Ab as A,Eb as a,Fb as i,Gb as r,Gc as Z,Hb as c,Ob as N,Qa as m,Sb as P,X as E,aa as _,ba as k,cc as I,gb as d,hc as n,mb as Q,mc as v,nc as w,oc as S,sc as X,tc as Y,zb as B}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var de=(()=>{class e{code={basic:`<label for="switch1">Remember Me</label>
<p-toggleswitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<p-toggleswitch ariaLabelledBy="switch2" />

<p-toggleswitch ariaLabel="Remember Me" />`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["toggle-switch-accessibility-doc"]],decls:45,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,o){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),r(),i(4,"p"),n(5," InputSwitch component uses a hidden native checkbox element with "),i(6,"i"),n(7,"switch"),r(),n(8," role internally that is only visible to screen readers. Value to describe the component can either be provided via "),i(9,"i"),n(10,"label"),r(),n(11," tag combined with "),i(12,"i"),n(13,"inputId"),r(),n(14," prop or using "),i(15,"i"),n(16,"ariaLabelledBy"),r(),n(17,", "),i(18,"i"),n(19,"ariaLabel"),r(),n(20," props. "),r()(),c(21,"app-code",0),i(22,"h3"),n(23,"Keyboard Support"),r(),i(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),n(29,"Key"),r(),i(30,"th"),n(31,"Function"),r()()(),i(32,"tbody")(33,"tr")(34,"td")(35,"i"),n(36,"tab"),r()(),i(37,"td"),n(38,"Moves focus to the switch."),r()(),i(39,"tr")(40,"td")(41,"i"),n(42,"space"),r()(),i(43,"td"),n(44,"Toggles the checked state."),r()()()()()()),t&2&&(m(21),a("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[p,h],encapsulation:2})}return e})();var pe=(()=>{class e{checked=!1;code={basic:'<p-toggleswitch [(ngModel)]="checked" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-basic-demo',
    templateUrl: './toggle-switch-basic-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchBasicDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","toggle-switch-basic-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"Two-way value binding is defined using "),i(3,"i"),n(4,"ngModel"),r(),n(5,"."),r()(),i(6,"div",0)(7,"p-toggleswitch",1),S("ngModelChange",function(s){return w(o.checked,s)||(o.checked=s),s}),r()(),c(8,"app-code",2)),t&2&&(m(7),v("ngModel",o.checked),m(),a("code",o.code))},dependencies:[y,g,b,u,f,p,h],encapsulation:2})}return e})();var ge=(()=>{class e{checked=!1;code={basic:'<p-toggleswitch [(ngModel)]="checked" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-disabled-demo',
    templateUrl: './toggle-switch-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchDisabledDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","toggle-switch-disabled-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"When "),i(3,"i"),n(4,"disabled"),r(),n(5," is present, the element cannot be edited and focused."),r()(),i(6,"div",0)(7,"p-toggleswitch",1),S("ngModelChange",function(s){return w(o.checked,s)||(o.checked=s),s}),r()(),c(8,"app-code",2)),t&2&&(m(7),v("ngModel",o.checked),a("disabled",!0),m(),a("code",o.code))},dependencies:[y,g,b,u,f,p,h],encapsulation:2})}return e})();var fe=(()=>{class e{code={typescript:"import { ToggleSwitchModule } from 'primeng/toggleswitch';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["toggle-switch-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&c(0,"app-code",0),t&2&&a("code",o.code)("hideToggleCode",!0)},dependencies:[p],encapsulation:2})}return e})();var ue=(()=>{class e{checked=!1;code={basic:'<p-toggleswitch [(ngModel)]="checked" [invalid]="!checked" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" [invalid]="!checked" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-invalid-demo',
    templateUrl: './toggle-switch-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchInvalidDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["invalid-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","invalid"],["selector","toggle-switch-invalid-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"The invalid state is applied using the "),i(3,"i"),n(4,"\u2060invalid"),r(),n(5," property to indicate failed validation, which can be integrated with Angular Forms."),r()(),i(6,"div",0)(7,"p-toggleswitch",1),S("ngModelChange",function(s){return w(o.checked,s)||(o.checked=s),s}),r()(),c(8,"app-code",2)),t&2&&(m(7),v("ngModel",o.checked),a("invalid",!o.checked),m(),a("code",o.code))},dependencies:[y,g,b,u,f,p,h],encapsulation:2})}return e})();var he=(()=>{class e{checked=!0;code={basic:'<p-toggleswitch [(ngModel)]="checked" />',html:`<div class="card flex justify-center">
    <p-toggleswitch [(ngModel)]="checked" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-preselection-demo',
    templateUrl: './toggle-switch-preselection-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchPreselectionDemo {
    checked: boolean = true;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["preselection-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","toggle-switch-preselection-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"Enabling "),i(3,"i"),n(4,"ngModel"),r(),n(5," property displays the component as active initially."),r()(),i(6,"div",0)(7,"p-toggleswitch",1),S("ngModelChange",function(s){return w(o.checked,s)||(o.checked=s),s}),r()(),c(8,"app-code",2)),t&2&&(m(7),v("ngModel",o.checked),m(),a("code",o.code))},dependencies:[y,g,b,u,f,p,h],encapsulation:2})}return e})();function De(e,H){e&1&&(i(0,"p-message",4),n(1,"Activation is required."),r())}var ve=(()=>{class e{fb;messageService=E(j);exampleForm;formSubmitted=!1;constructor(l){this.fb=l,this.exampleForm=this.fb.group({activation:["",ee.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(l){let t=this.exampleForm.get(l);return t?.invalid&&(t.touched||this.formSubmitted)}code={basic:`<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-48">
        <div class="flex flex-col items-center gap-2">
            <p-toggleswitch name="activation" formControlName="activation" [invalid]="isInvalid('activation')" />
            @if (isInvalid('activation')) {
                <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-48">
        <div class="flex flex-col items-center gap-2">
            <p-toggleswitch name="activation" formControlName="activation" [invalid]="isInvalid('activation')" />
            @if (isInvalid('activation')) {
                <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'toggle-switch-reactive-forms-demo',
    templateUrl: './toggle-switch-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, ToggleSwitchModule, MessageModule, ToastModule, ButtonModule]
})
export class ToggleSwitchReactiveFormsDemo {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            activation: ['', Validators.required]
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
}`};static \u0275fac=function(t){return new(t||e)(J(ne))};static \u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-48",3,"ngSubmit","formGroup"],[1,"flex","flex-col","items-center","gap-2"],["name","activation","formControlName","activation",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","toggle-switch-reactive-forms-demo",3,"code"]],template:function(t,o){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"ToggleSwitch can also be used with reactive forms. In this case, the "),i(3,"i"),n(4,"formControlName"),r(),n(5," property is used to bind the component to a form control."),r()(),c(6,"p-toast"),i(7,"div",0)(8,"form",1),P("ngSubmit",function(){return o.onSubmit()}),i(9,"div",2),c(10,"p-toggleswitch",3),B(11,De,2,0,"p-message",4),r(),i(12,"button",5)(13,"span",6),n(14,"Submit"),r()()()(),c(15,"app-code",7)),t&2&&(m(8),a("formGroup",o.exampleForm),m(2),a("invalid",o.isInvalid("activation")),m(),A(o.isInvalid("activation")?11:-1),m(4),a("code",o.code))},dependencies:[C,le,V,g,W,oe,ie,u,f,O,U,z,G,q,R,L,p,h],encapsulation:2})}return e})();var Fe=e=>["!text-xs","pi",e];function _e(e,H){if(e&1&&c(0,"i",4),e&2){let l=H.checked;a("ngClass",Y(1,Fe,l?"pi-check":"pi-times"))}}var we=(()=>{class e{checked=!1;code={basic:`<p-toggleswitch [(ngModel)]="checked">
    <ng-template #handle let-checked="checked">
        <i [ngClass]="['!text-xs', 'pi', checked ? 'pi-check' : 'pi-times']"></i>
    </ng-template>
</p-toggleswitch>`,html:`<div class="card flex justify-center gap-4">
    <p-toggleswitch [(ngModel)]="checked">
        <ng-template #handle let-checked="checked">
            <i [ngClass]="['!text-xs', 'pi', checked ? 'pi-check' : 'pi-times']"></i>
        </ng-template>
    </p-toggleswitch>
</div>`,typescript:`import { Component } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'toggle-switch-template-demo',
    templateUrl: './toggle-switch-template-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitch]
})
export class ToggleSwitchTemplateDemo {
    checked: boolean = false;
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-doc"]],decls:11,vars:2,consts:[["handle",""],[1,"card","flex","justify-center","gap-4"],[3,"ngModelChange","ngModel"],["selector","toggle-switch-basic-demo",3,"code"],[3,"ngClass"]],template:function(t,o){if(t&1){let M=N();i(0,"app-docsectiontext")(1,"p"),n(2,"The "),i(3,"i"),n(4,"handle"),r(),n(5," template is available to display custom content."),r()(),i(6,"div",1)(7,"p-toggleswitch",2),S("ngModelChange",function(x){return _(M),w(o.checked,x)||(o.checked=x),k(x)}),Q(8,_e,1,3,"ng-template",null,0,Z),r()(),c(10,"app-code",3)}t&2&&(m(7),v("ngModel",o.checked),m(3),a("code",o.code))},dependencies:[C,$,y,g,b,u,f,p,h],encapsulation:2})}return e})();function ke(e,H){e&1&&(i(0,"p-message",6),n(1,"Activation is required."),r())}var Se=(()=>{class e{messageService=E(j);checked;onSubmit(l){l.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),l.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-48">
    <div class="flex flex-col items-center gap-2">
        <p-toggleswitch #model="ngModel" [(ngModel)]="checked" name="activation" [invalid]="model.invalid && exampleForm.submitted" required />
        @if (model.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-48">
        <div class="flex flex-col items-center gap-2">
            <p-toggleswitch #model="ngModel" [(ngModel)]="checked" name="activation" [invalid]="model.invalid && exampleForm.submitted" required />
            @if (model.invalid && exampleForm.submitted) {
                <p-message severity="error" size="small" variant="simple">Activation is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'toggle-switch-template-driven-forms-demo',
    templateUrl: './toggle-switch-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, ToggleSwitchModule, MessageModule, ToastModule, ButtonModule]
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
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["model","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-48",3,"ngSubmit"],[1,"flex","flex-col","items-center","gap-2"],["name","activation","required","",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","toggle-switch-template-driven-forms-demo",3,"code"]],template:function(t,o){if(t&1){let M=N();c(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",2)(3,"form",3,0),P("ngSubmit",function(){_(M);let x=I(4);return k(o.onSubmit(x))}),i(5,"div",4)(6,"p-toggleswitch",5,1),S("ngModelChange",function(x){return _(M),w(o.checked,x)||(o.checked=x),k(x)}),r(),B(8,ke,2,0,"p-message",6),r(),i(9,"button",7)(10,"span",8),n(11,"Submit"),r()()()(),c(12,"app-code",9)}if(t&2){let M=I(4),s=I(7);m(6),v("ngModel",o.checked),a("invalid",s.invalid&&M.submitted),m(2),A(s.invalid&&M.submitted?8:-1),m(4),a("code",o.code)}},dependencies:[C,y,V,g,W,re,b,te,u,f,O,U,z,G,q,R,L,p,h],encapsulation:2})}return e})();var be=(()=>{class e{checked=!1;docs=[{data:K("ToggleSwitch"),key:"ToggleSwitch"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["toggleswitch-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"ngModelChange","ngModel"]],template:function(t,o){t&1&&(i(0,"app-docptviewer",0)(1,"p-toggleswitch",1),S("ngModelChange",function(s){return w(o.checked,s)||(o.checked=s),s}),r()()),t&2&&(a("docs",o.docs),m(),v("ngModel",o.checked))},dependencies:[C,se,u,f,y,g,b],encapsulation:2})}return e})();var ye=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:be},{id:"pt.doc.toggleswitch",label:"ToggleSwitch PT Options",component:me,data:K("ToggleSwitch")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["toggleswitch-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),n(3,"ToggleSwitch Pass Through"),r()(),c(4,"app-docsection",2),r()),t&2&&(m(4),a("docs",o.docs))},dependencies:[ae],encapsulation:2})}return e})();var Ee=()=>["ToggleSwitch"],Me=(()=>{class e{ptComponent=ye;docs=[{id:"import",label:"Import",component:fe},{id:"basic",label:"Basic",component:pe},{id:"preselection",label:"Preselection",component:he},{id:"template",label:"Template",component:we},{id:"disabled",label:"Disabled",component:ge},{id:"invalid",label:"Invalid",component:ue},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Se},{id:"reactive",label:"Reactive Forms",component:ve}]},{id:"accessibility",label:"Accessibility",component:de}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ToggleSwitch Component","header","ToggleSwitch","description","ToggleSwitch is used to select a boolean value.","themeDocs","toggleswitch",3,"docs","apiDocs","ptDocs"]],template:function(t,o){t&1&&c(0,"app-doc",0),t&2&&a("docs",o.docs)("apiDocs",X(3,Ee))("ptDocs",o.ptComponent)},dependencies:[ce],encapsulation:2})}return e})();var io=[{path:"",component:Me}];export{io as default};
