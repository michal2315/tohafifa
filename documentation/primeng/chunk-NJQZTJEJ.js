import{a as M,b as I,c as b,d as L}from"./chunk-APBUBGZC.js";import{a as G,b as K}from"./chunk-ZYT4LGUE.js";import{a as R,b as q}from"./chunk-2SUSAFZL.js";import{a as _,b as J}from"./chunk-JNUBCW5H.js";import{a as g,b as v}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b as S,f as C,i as F,u as D}from"./chunk-CTI5WBER.js";import"./chunk-EZDHLOD5.js";import{b as j}from"./chunk-FKOOMXTU.js";import{a as x,b as y}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as O}from"./chunk-XCUGNKAG.js";import{a as h,b as N}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as P,h as W}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as Z}from"./chunk-D2XKNHFS.js";import{Eb as m,Fb as e,Gb as i,Hb as p,Qa as r,ca as z,da as B,gb as d,hc as l,mc as u,nc as s,oc as f,sc as U}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Q=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["iconfield-accessibility-doc"]],decls:9,vars:0,template:function(t,n){t&1&&(e(0,"app-docsectiontext")(1,"h3"),l(2,"Screen Reader"),i(),e(3,"p"),l(4,"IconField and InputIcon does not require any roles and attributes."),i(),e(5,"h3"),l(6,"Keyboard Support"),i(),e(7,"p"),l(8,"Components does not include any interactive elements."),i()())},dependencies:[h],encapsulation:2})}return o})();var X=(()=>{class o{code={basic:`<p-iconfield>
    <p-inputicon class="pi pi-search" />
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>
<p-iconfield>
    <input type="text" pInputText />
    <p-inputicon class="pi pi-spinner pi-spin" />
</p-iconfield>`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input type="text" pInputText placeholder="Search" />
    </p-iconfield>
    <p-iconfield>
        <input type="text" pInputText />
        <p-inputicon class="pi pi-spinner pi-spin" />
    </p-iconfield>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'iconfield-basic-demo',
    templateUrl: './iconfield-basic-demo.html',
    standalone: true,
    imports: [InputIcon, IconField, InputTextModule, FormsModule]
})
export class IconfieldBasicDemo {}`};static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["basic-doc"]],decls:26,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Search"],["type","text","pInputText",""],[1,"pi","pi-spinner","pi-spin"],["selector","iconfield-basic-demo",3,"code"]],template:function(t,n){t&1&&(e(0,"app-docsectiontext")(1,"p"),l(2," A group is created by wrapping the input and icon with the "),e(3,"i"),l(4,"IconField"),i(),l(5," component. Each icon is defined as a child of "),e(6,"i"),l(7,"InputIcon"),i(),l(8," component. In addition, position of the icon can be changed using "),e(9,"i"),l(10,"iconPosition"),i(),l(11," property that the default value is "),e(12,"i"),l(13,"right"),i(),l(14," and also "),e(15,"i"),l(16,"left"),i(),l(17," option is available. "),i()(),e(18,"div",0)(19,"p-iconfield"),p(20,"p-inputicon",1)(21,"input",2),i(),e(22,"p-iconfield"),p(23,"input",3)(24,"p-inputicon",4),i()(),p(25,"app-code",5)),t&2&&(r(25),m("code",n.code))},dependencies:[h,y,x,I,M,L,b,v,g],encapsulation:2})}return o})();var Y=(()=>{class o{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
    </p-iconfield>
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
    </p-iconfield>
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
    </p-iconfield>
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-iconfield>
            <p-inputicon class="pi pi-search" />
            <input pInputText id="over_label" [(ngModel)]="value1" autocomplete="off" />
        </p-iconfield>
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-iconfield>
            <p-inputicon class="pi pi-search" />
            <input pInputText id="in_label" [(ngModel)]="value2" autocomplete="off" />
        </p-iconfield>
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-iconfield>
            <p-inputicon class="pi pi-search" />
            <input pInputText id="on_label" [(ngModel)]="value3" autocomplete="off" />
        </p-iconfield>
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'iconfield-float-label-demo',
    templateUrl: './iconfield-float-label-demo.html',
    standalone: true,
    imports: [InputIconModule, IconFieldModule, InputTextModule, FloatLabelModule, FormsModule]
})
export class IconFieldFloatLabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["float-label-doc"]],decls:26,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"pi","pi-search"],["pInputText","","id","over_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["pInputText","","id","in_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],["selector","iconfield-float-label-demo",3,"code"]],template:function(t,n){t&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"FloatLabel visually integrates a label with its form element. Visit "),e(3,"a",0),l(4,"FloatLabel"),i(),l(5," documentation for more information."),i()(),e(6,"div",1)(7,"p-floatlabel")(8,"p-iconfield"),p(9,"p-inputicon",2),e(10,"input",3),f("ngModelChange",function(a){return s(n.value1,a)||(n.value1=a),a}),i()(),e(11,"label",4),l(12,"Over Label"),i()(),e(13,"p-floatlabel",5)(14,"p-iconfield"),p(15,"p-inputicon",2),e(16,"input",6),f("ngModelChange",function(a){return s(n.value2,a)||(n.value2=a),a}),i()(),e(17,"label",7),l(18,"In Label"),i()(),e(19,"p-floatlabel",8)(20,"p-iconfield"),p(21,"p-inputicon",2),e(22,"input",9),f("ngModelChange",function(a){return s(n.value3,a)||(n.value3=a),a}),i()(),e(23,"label",10),l(24,"On Label"),i()()(),p(25,"app-code",11)),t&2&&(r(10),u("ngModel",n.value1),r(6),u("ngModel",n.value2),r(6),u("ngModel",n.value3),r(3),m("code",n.code))},dependencies:[h,y,x,W,P,D,S,C,F,q,R,I,M,L,b,v,g],encapsulation:2})}return o})();var $=(()=>{class o{value;code={basic:`<p-iftalabel>
    <p-iconfield>
        <p-inputicon class="pi pi-user" />
        <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
    </p-iconfield>
    <label for="username">Username</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-iconfield>
            <p-inputicon class="pi pi-user" />
            <input pInputText id="username" [(ngModel)]="value" autocomplete="off" />
        </p-iconfield>
        <label for="username">Username</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'iconfield-ifta-label-demo',
    templateUrl: './iconfield-ifta-label-demo.html',
    standalone: true,
    imports: [InputIconModule, IconFieldModule, InputTextModule, IftaLabelModule, FormsModule]
})
export class IconFieldIftaLabelDemo {
  value: string | undefined;
}`};static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["ifta-label-doc"]],decls:14,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"pi","pi-user"],["pInputText","","id","username","autocomplete","off",3,"ngModelChange","ngModel"],["for","username"],["selector","iconfield-ifta-label-demo",3,"code"]],template:function(t,n){t&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"IftaLabel is used to create infield top aligned labels. Visit "),e(3,"a",0),l(4,"IftaLabel"),i(),l(5," documentation for more information."),i()(),e(6,"div",1)(7,"p-iftalabel")(8,"p-iconfield"),p(9,"p-inputicon",2),e(10,"input",3),f("ngModelChange",function(a){return s(n.value,a)||(n.value=a),a}),i()(),e(11,"label",4),l(12,"Username"),i()()(),p(13,"app-code",5)),t&2&&(r(10),u("ngModel",n.value),r(3),m("code",n.code))},dependencies:[h,y,x,W,P,D,S,C,F,K,G,I,M,L,b,v,g],encapsulation:2})}return o})();var ee=(()=>{class o{code={typescript:`import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';`};static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["icon-field-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,n){t&1&&p(0,"app-code",0),t&2&&m("code",n.code)("hideToggleCode",!0)},dependencies:[y,x],encapsulation:2})}return o})();var oe=(()=>{class o{value1=null;value2=null;value3=null;code={basic:`<p-iconfield>
    <p-inputicon class="pi pi-search" />
    <input pInputText [(ngModel)]="value1" placeholder="Small" pSize="small" />
</p-iconfield>

<p-iconfield>
    <input pInputText [(ngModel)]="value2" placeholder="Normal" />
    <p-inputicon class="pi pi-user" />
</p-iconfield>

<p-iconfield>
    <p-inputicon class="pi pi-lock" />
    <input pInputText [(ngModel)]="value3" placeholder="Large" pSize="large" />
    <p-inputicon class="pi pi-spin pi-spinner" />
</p-iconfield>`,html:`<div class="card flex flex-col items-center gap-4">
    <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input pInputText [(ngModel)]="value1" placeholder="Small" pSize="small" />
    </p-iconfield>

    <p-iconfield>
        <input pInputText [(ngModel)]="value2" placeholder="Normal" />
        <p-inputicon class="pi pi-user" />
    </p-iconfield>

    <p-iconfield>
        <p-inputicon class="pi pi-lock" />
        <input pInputText [(ngModel)]="value3" placeholder="Large" pSize="large" />
        <p-inputicon class="pi pi-spin pi-spinner" />
    </p-iconfield>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'iconfield-sizes-demo',
    templateUrl: './iconfield-sizes-demo.html',
    standalone: true,
    imports: [InputIcon, IconField, InputTextModule, FormsModule]
})
export class IconfieldSizesDemo {}`};static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["sizes-doc"]],decls:15,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],[1,"pi","pi-search"],["pInputText","","placeholder","Small","pSize","small",3,"ngModelChange","ngModel"],["pInputText","","placeholder","Normal",3,"ngModelChange","ngModel"],[1,"pi","pi-user"],[1,"pi","pi-lock"],["pInputText","","placeholder","Large","pSize","large",3,"ngModelChange","ngModel"],[1,"pi","pi-spin","pi-spinner"],["selector","iconfield-sizes-demo",3,"code"]],template:function(t,n){t&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"IconField is compatible with the pSize setting of the input field."),i()(),e(3,"div",0)(4,"p-iconfield"),p(5,"p-inputicon",1),e(6,"input",2),f("ngModelChange",function(a){return s(n.value1,a)||(n.value1=a),a}),i()(),e(7,"p-iconfield")(8,"input",3),f("ngModelChange",function(a){return s(n.value2,a)||(n.value2=a),a}),i(),p(9,"p-inputicon",4),i(),e(10,"p-iconfield"),p(11,"p-inputicon",5),e(12,"input",6),f("ngModelChange",function(a){return s(n.value3,a)||(n.value3=a),a}),i(),p(13,"p-inputicon",7),i()(),p(14,"app-code",8)),t&2&&(r(6),u("ngModel",n.value1),r(2),u("ngModel",n.value2),r(4),u("ngModel",n.value3),r(2),m("code",n.code))},dependencies:[h,y,x,D,S,C,F,I,M,L,b,v,g],encapsulation:2})}return o})();var te=(()=>{class o{code={basic:`<p-iconfield iconPosition="left">
    <p-inputicon>
        <svg width="20" height="20" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
    </p-inputicon>
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>`,html:`<div class="card flex justify-center">
    <p-iconfield iconPosition="left">
    <p-inputicon>
        <svg width="14" height="16" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                fill="var(--p-primary-color)"
            />
            <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                <path
                    d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                    fill="var(--ground-background)"
                />
            </mask>
            <g mask="url(#mask0_1_52)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                    fill="var(--p-primary-color)"
                />
            </g>
            <path
                d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                fill="var(--ground-background)"
            />
            <path
                d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                fill="var(--ground-background)"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                fill="var(--ground-background)"
            />
            <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
            <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                fill="var(--ground-background)"
            />
            <path
                d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                fill="var(--ground-background)"
            />
            <path
                d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                fill="var(--ground-background)"
            />
            <path
                d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                fill="var(--ground-background)"
            />
            <path
                d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                fill="var(--ground-background)"
            />
        </svg>
    </p-inputicon>
    <input type="text" pInputText placeholder="Search" />
</p-iconfield>
</div>`,typescript:`import { Component } from '@angular/core';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'iconfield-template-demo',
    templateUrl: './iconfield-template-demo.html',
    standalone: true,
    imports: [InputIcon, IconField, InputTextModule, FormsModule]
})
export class IconFieldTemplateDemo {}`};static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["template-doc"]],decls:27,vars:1,consts:[[1,"card","flex","justify-center"],["iconPosition","left"],["width","14","height","16","viewBox","0 0 35 40","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["type","text","pInputText","","placeholder","Search"],["selector","iconfield-template-demo",3,"code"]],template:function(t,n){t&1&&(e(0,"app-docsectiontext")(1,"p"),l(2,"An eye icon is displayed by default when the image is hovered in preview mode. Use the "),e(3,"i"),l(4,"indicator"),i(),l(5," template for custom content."),i()(),e(6,"div",0)(7,"p-iconfield",1)(8,"p-inputicon"),z(),e(9,"svg",2),p(10,"path",3),e(11,"mask",4),p(12,"path",5),i(),e(13,"g",6),p(14,"path",7),i(),p(15,"path",8)(16,"path",9)(17,"path",10)(18,"path",11)(19,"path",12)(20,"path",13)(21,"path",14)(22,"path",15)(23,"path",16)(24,"path",17),i()(),B(),p(25,"input",18),i()(),p(26,"app-code",19)),t&2&&(r(26),m("code",n.code))},dependencies:[h,y,x,I,M,L,b,v,g],encapsulation:2})}return o})();var ie=(()=>{class o{value=null;docs=[{data:_("IconField"),key:"IconField"},{data:_("InputIcon"),key:"InputIcon"}];static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["iconfield-pt-viewer"]],decls:4,vars:2,consts:[[3,"docs"],[1,"pi","pi-search"],["pInputText","","placeholder","Search",3,"ngModelChange","ngModel"]],template:function(t,n){t&1&&(e(0,"app-docptviewer",0)(1,"p-iconfield"),p(2,"p-inputicon",1),e(3,"input",2),f("ngModelChange",function(a){return s(n.value,a)||(n.value=a),a}),i()()()),t&2&&(m("docs",n.docs),r(3),u("ngModel",n.value))},dependencies:[Z,D,S,C,F,J,I,M,L,b,v,g],encapsulation:2})}return o})();var ne=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:ie},{id:"pt.doc.iconfield",label:"IconField PT Options",component:N,data:_("IconField")}];static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["iconfield-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,n){t&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),l(3,"IconField Pass Through"),i()(),p(4,"app-docsection",2),i()),t&2&&(r(4),m("docs",n.docs))},dependencies:[Z,O],encapsulation:2})}return o})();var ae=()=>["IconField","InputIcon"],le=(()=>{class o{ptComponent=ne;docs=[{id:"import",label:"Import",component:ee},{id:"basic",label:"Basic",component:X},{id:"template",label:"Template",component:te},{id:"floatlabel",label:"Float Label",component:Y},{id:"iftalabel",label:"Ifta Label",component:$},{id:"sizes",label:"Sizes",component:oe},{id:"accessibility",label:"Accessibility",component:Q}];static \u0275fac=function(t){return new(t||o)};static \u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular IconField Component","header","IconField","description","IconField wraps an input and an icon.","themeDocs","iconfield",3,"docs","ptDocs","apiDocs"]],template:function(t,n){t&1&&p(0,"app-doc",0),t&2&&m("docs",n.docs)("ptDocs",n.ptComponent)("apiDocs",U(3,ae))},dependencies:[j],encapsulation:2})}return o})();var xo=[{path:"",component:le}];export{xo as default};
