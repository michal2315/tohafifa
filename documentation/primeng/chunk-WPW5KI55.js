import{a as I,b as x,c as h,d as C}from"./chunk-BSUJVOQC.js";import{a as N,b as V}from"./chunk-ZVBSRVPM.js";import{a as X,b as Z}from"./chunk-YIMZONIF.js";import{a as oe,b as te}from"./chunk-N2Z7YVU2.js";import"./chunk-APBUBGZC.js";import{a as $,b as ee}from"./chunk-RTRG5JID.js";import{a as J,b as Q}from"./chunk-47AI6XAB.js";import{a as ue,b as ae}from"./chunk-ZYT4LGUE.js";import{a as ie,b as re}from"./chunk-2SUSAFZL.js";import{a as A,b as le}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import"./chunk-66742H4U.js";import"./chunk-VGTHJBIV.js";import"./chunk-27JIZF5R.js";import{a as v,b as w}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b as G,f as T,i as S,u as _}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ne}from"./chunk-FKOOMXTU.js";import{a as M,b as y}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as pe}from"./chunk-XCUGNKAG.js";import{a as b,b as R}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as P,h as B}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as q,ha as z}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as F}from"./chunk-D2XKNHFS.js";import{Eb as l,Fb as o,Gb as t,Hb as u,Ob as j,Qa as a,Sb as Y,aa as O,ba as K,cc as H,gb as d,hc as r,mc as c,nc as s,oc as g}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var de=(()=>{class p{static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["input-group-accessibility-doc"]],decls:9,vars:0,template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),t(),o(3,"p"),r(4,"InputGroup and InputGroupAddon does not require any roles and attributes."),t(),o(5,"h3"),r(6,"Keyboard Support"),t(),o(7,"p"),r(8,"Component does not include any interactive elements."),t()())},dependencies:[b],encapsulation:2})}return p})();var me=(()=>{class p{text1;text2;number;selectedCity;cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];code={basic:`<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-user"></i>
    </p-inputgroup-addon>
    <input pInputText [(ngModel)]="text1" placeholder="Username" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-inputnumber [(ngModel)]="number" placeholder="Price" />
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>www</p-inputgroup-addon>
    <input pInputText  [(ngModel)]="text2" placeholder="Website" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-map"></i>
    </p-inputgroup-addon>
    <p-select [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" placeholder="City" />
</p-inputgroup>`,html:`<div class="card grid grid-cols-1 md:grid-cols-2 gap-4">
    <p-inputgroup>
        <p-inputgroup-addon>
            <i class="pi pi-user"></i>
        </p-inputgroup-addon>
        <input pInputText [(ngModel)]="text1" placeholder="Username" />
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>$</p-inputgroup-addon>
        <p-inputnumber [(ngModel)]="number" placeholder="Price" />
        <p-inputgroup-addon>.00</p-inputgroup-addon>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>www</p-inputgroup-addon>
        <input pInputText  [(ngModel)]="text2" placeholder="Website" />
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>
            <i class="pi pi-map"></i>
        </p-inputgroup-addon>
        <p-select [(ngModel)]="selectedCity" [options]="cities" optionLabel="name" placeholder="City" />
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'input-group-basic-demo',
    templateUrl: './input-group-basic-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule]
})
export class InputGroupBasicDemo {
    text1: string | undefined;

    text2: string | undefined;

    number: string | undefined;

    selectedCity: City | undefined;

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
}`};static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["basic-doc"]],decls:29,vars:6,consts:[[1,"card","grid","grid-cols-1","md:grid-cols-2","gap-4"],[1,"pi","pi-user"],["pInputText","","placeholder","Username",3,"ngModelChange","ngModel"],["placeholder","Price",3,"ngModelChange","ngModel"],["pInputText","","placeholder","Website",3,"ngModelChange","ngModel"],[1,"pi","pi-map"],["optionLabel","name","placeholder","City",3,"ngModelChange","ngModel","options"],["selector","input-group-basic-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"A group is created by wrapping the input and add-ons with the "),o(3,"i"),r(4,"p-inputgroup"),t(),r(5," component. Each add-on element is defined as a child of "),o(6,"i"),r(7,"p-inputgroup-addon"),t(),r(8," component."),t()(),o(9,"div",0)(10,"p-inputgroup")(11,"p-inputgroup-addon"),u(12,"i",1),t(),o(13,"input",2),g("ngModelChange",function(i){return s(e.text1,i)||(e.text1=i),i}),t()(),o(14,"p-inputgroup")(15,"p-inputgroup-addon"),r(16,"$"),t(),o(17,"p-inputnumber",3),g("ngModelChange",function(i){return s(e.number,i)||(e.number=i),i}),t(),o(18,"p-inputgroup-addon"),r(19,".00"),t()(),o(20,"p-inputgroup")(21,"p-inputgroup-addon"),r(22,"www"),t(),o(23,"input",4),g("ngModelChange",function(i){return s(e.text2,i)||(e.text2=i),i}),t()(),o(24,"p-inputgroup")(25,"p-inputgroup-addon"),u(26,"i",5),t(),o(27,"p-select",6),g("ngModelChange",function(i){return s(e.selectedCity,i)||(e.selectedCity=i),i}),t()()(),u(28,"app-code",7)),n&2&&(a(13),c("ngModel",e.text1),a(4),c("ngModel",e.number),a(6),c("ngModel",e.text2),a(4),c("ngModel",e.selectedCity),l("options",e.cities),a(),l("code",e.code))},dependencies:[b,y,M,_,G,T,S,x,I,C,h,w,v,V,N,te,oe],encapsulation:2})}return p})();var ce=(()=>{class p{items;ngOnInit(){this.items=[{label:"Web Search"},{label:"AI Assistant"},{label:"History"}]}code={basic:`<p-inputgroup>
    <p-button label="Search" />
    <input pInputText placeholder="Keyword" />
</p-inputgroup>

<p-inputgroup>
    <input pInputText placeholder="Keyword" />
    <p-inputgroup-addon>
        <p-button icon="pi pi-search" severity="secondary" variant="text" (click)="menu.toggle($event)" />
    </p-inputgroup-addon>
</p-inputgroup>
<p-menu #menu [model]="items" popup styleClass="!min-w-fit" />

<p-inputgroup>
    <p-inputgroup-addon>
        <p-button icon="pi pi-check" severity="secondary" />
    </p-inputgroup-addon>
    <input pInputText placeholder="Vote" />
    <p-inputgroup-addon>
        <p-button icon="pi pi-times" severity="secondary" />
    </p-inputgroup-addon>
</p-inputgroup>`,html:`<div class="card flex flex-col md:flex-row gap-4">
    <p-inputgroup>
        <p-button label="Search" />
        <input pInputText placeholder="Keyword" />
    </p-inputgroup>

    <p-inputgroup>
        <input pInputText placeholder="Keyword" />
        <p-inputgroup-addon>
            <p-button icon="pi pi-search" severity="secondary" variant="text" (click)="menu.toggle($event)" />
        </p-inputgroup-addon>
    </p-inputgroup>
    <p-menu #menu [model]="items" popup styleClass="!min-w-fit" />

    <p-inputgroup>
        <p-inputgroup-addon>
            <p-button icon="pi pi-check" severity="secondary" />
        </p-inputgroup-addon>
        <input pInputText placeholder="Vote" />
        <p-inputgroup-addon>
            <p-button icon="pi pi-times" severity="secondary" />
        </p-inputgroup-addon>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'input-group-button-demo',
    templateUrl: './input-group-button-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroup, InputGroupAddonModule, InputTextModule, ButtonModule, MenuModule]
})
export class InputGroupButtonDemo {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
    }
}`};static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["button-doc"]],decls:20,vars:2,consts:[["menu",""],[1,"card","flex","flex-col","md:flex-row","gap-4"],["label","Search"],["pInputText","","placeholder","Keyword"],["icon","pi pi-search","severity","secondary","variant","text",3,"click"],["popup","","styleClass","!min-w-fit",3,"model"],["icon","pi pi-check","severity","secondary"],["pInputText","","placeholder","Vote"],["icon","pi pi-times","severity","secondary"],["selector","input-group-button-demo",3,"code"]],template:function(n,e){if(n&1){let f=j();o(0,"app-docsectiontext")(1,"p"),r(2,"Buttons can be placed at either side of an input element."),t()(),o(3,"div",1)(4,"p-inputgroup"),u(5,"p-button",2)(6,"input",3),t(),o(7,"p-inputgroup"),u(8,"input",3),o(9,"p-inputgroup-addon")(10,"p-button",4),Y("click",function(he){O(f);let Ce=H(12);return K(Ce.toggle(he))}),t()()(),u(11,"p-menu",5,0),o(13,"p-inputgroup")(14,"p-inputgroup-addon"),u(15,"p-button",6),t(),u(16,"input",7),o(17,"p-inputgroup-addon"),u(18,"p-button",8),t()()(),u(19,"app-code",9)}n&2&&(a(11),l("model",e.items),a(8),l("code",e.code))},dependencies:[b,y,M,x,I,C,h,w,v,z,q,Q,J],encapsulation:2})}return p})();var se=(()=>{class p{radioValue1=!1;checked1=!1;checked2=!1;category;code={basic:`<p-inputgroup>
    <input type="text" pInputText placeholder="Price" />
    <p-inputgroup-addon>
        <p-radiobutton [(ngModel)]="radioValue1" name="rb1" value="rb1"/>
    </p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon><p-checkbox [(ngModel)]="checked1" [binary]="true"/></p-inputgroup-addon>
    <input type="text" pInputText placeholder="Username" />
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon><p-checkbox [(ngModel)]="checked2" [binary]="true"/></p-inputgroup-addon>
    <input type="text" pInputText placeholder="Website" />
    <p-inputgroup-addon><p-radiobutton name="rb2" value="rb2" [(ngModel)]="category"/></p-inputgroup-addon>
</p-inputgroup>`,html:`<div class="card flex flex-col md:flex-row gap-4">
    <p-inputgroup>
        <input type="text" pInputText placeholder="Price" />
        <p-inputgroup-addon>
            <p-radiobutton [(ngModel)]="radioValue1" name="rb1" value="rb1"/>
        </p-inputgroup-addon>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon><p-checkbox [(ngModel)]="checked1" [binary]="true"/></p-inputgroup-addon>
        <input type="text" pInputText placeholder="Username" />
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon><p-checkbox [(ngModel)]="checked2" [binary]="true"/></p-inputgroup-addon>
        <input type="text" pInputText placeholder="Website" />
        <p-inputgroup-addon><p-radiobutton name="rb2" value="rb2" [(ngModel)]="category"/></p-inputgroup-addon>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';

@Component({
    selector: 'input-group-checkbox-demo',
    templateUrl: './input-group-checkbox-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroup, InputGroupAddonModule, InputTextModule, Checkbox, RadioButton]
})
export class InputGroupCheckboxDemo {
    radioValue1: boolean = false;

    checked1: boolean = false;

    checked2: boolean = false;

    category: string | undefined;
}`};static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["checkbox-doc"]],decls:19,vars:7,consts:[[1,"card","flex","flex-col","md:flex-row","gap-4"],["type","text","pInputText","","placeholder","Price"],["name","rb1","value","rb1",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","binary"],["type","text","pInputText","","placeholder","Username"],["type","text","pInputText","","placeholder","Website"],["name","rb2","value","rb2",3,"ngModelChange","ngModel"],["selector","input-group-checkbox-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Checkbox and RadioButton components can be combined with an input element under the same group."),t()(),o(3,"div",0)(4,"p-inputgroup"),u(5,"input",1),o(6,"p-inputgroup-addon")(7,"p-radiobutton",2),g("ngModelChange",function(i){return s(e.radioValue1,i)||(e.radioValue1=i),i}),t()()(),o(8,"p-inputgroup")(9,"p-inputgroup-addon")(10,"p-checkbox",3),g("ngModelChange",function(i){return s(e.checked1,i)||(e.checked1=i),i}),t()(),u(11,"input",4),t(),o(12,"p-inputgroup")(13,"p-inputgroup-addon")(14,"p-checkbox",3),g("ngModelChange",function(i){return s(e.checked2,i)||(e.checked2=i),i}),t()(),u(15,"input",5),o(16,"p-inputgroup-addon")(17,"p-radiobutton",6),g("ngModelChange",function(i){return s(e.category,i)||(e.category=i),i}),t()()()(),u(18,"app-code",7)),n&2&&(a(7),c("ngModel",e.radioValue1),a(3),c("ngModel",e.checked1),l("binary",!0),a(4),c("ngModel",e.checked2),l("binary",!0),a(3),c("ngModel",e.category),a(),l("code",e.code))},dependencies:[b,y,M,_,T,S,x,I,C,h,w,v,ee,$,Z,X],encapsulation:2})}return p})();var ge=(()=>{class p{value1;value2;value3;code={basic:`<p-inputgroup>
    <p-inputgroup-addon>
        <i class="pi pi-user"></i>
    </p-inputgroup-addon>
    <p-floatlabel>
        <input pInputText id="over_label" [(ngModel)]="value1" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-floatlabel variant="in">
        <input pInputText id="in_label" [(ngModel)]="value2" />
        <label for="in_label">In Label</label>
    </p-floatlabel>
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>

<p-inputgroup>
    <p-inputgroup-addon>www</p-inputgroup-addon>
    <p-floatlabel variant="on">
        <input pInputText id="on_label" [(ngModel)]="value3" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</p-inputgroup>`,html:`<div class="card flex flex-col md:items-end md:flex-row gap-4">
    <p-inputgroup>
        <p-inputgroup-addon>
            <i class="pi pi-user"></i>
        </p-inputgroup-addon>
        <p-floatlabel>
            <input pInputText id="over_label" [(ngModel)]="value1" />
            <label for="over_label">Over Label</label>
        </p-floatlabel>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>$</p-inputgroup-addon>
        <p-floatlabel variant="in">
            <input pInputText id="in_label" [(ngModel)]="value2" />
            <label for="in_label">In Label</label>
        </p-floatlabel>
        <p-inputgroup-addon>.00</p-inputgroup-addon>
    </p-inputgroup>

    <p-inputgroup>
        <p-inputgroup-addon>www</p-inputgroup-addon>
        <p-floatlabel variant="on">
            <input pInputText id="on_label" [(ngModel)]="value3" />
            <label for="on_label">On Label</label>
        </p-floatlabel>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'input-group-float-label-demo',
    templateUrl: './input-group-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, FloatLabelModule]
})
export class InputGroupFloatLabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`};static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["float-label-doc"]],decls:31,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-col","md:items-end","md:flex-row","gap-4"],[1,"pi","pi-user"],["pInputText","","id","over_label",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["pInputText","","id","in_label",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["pInputText","","id","on_label",3,"ngModelChange","ngModel"],["for","on_label"],["selector","input-group-float-label-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2," FloatLabel visually integrates a label with its form element. Visit "),o(3,"a",0),r(4,"FloatLabel"),t(),r(5," documentation for more information. "),t()(),o(6,"div",1)(7,"p-inputgroup")(8,"p-inputgroup-addon"),u(9,"i",2),t(),o(10,"p-floatlabel")(11,"input",3),g("ngModelChange",function(i){return s(e.value1,i)||(e.value1=i),i}),t(),o(12,"label",4),r(13,"Over Label"),t()()(),o(14,"p-inputgroup")(15,"p-inputgroup-addon"),r(16,"$"),t(),o(17,"p-floatlabel",5)(18,"input",6),g("ngModelChange",function(i){return s(e.value2,i)||(e.value2=i),i}),t(),o(19,"label",7),r(20,"In Label"),t()(),o(21,"p-inputgroup-addon"),r(22,".00"),t()(),o(23,"p-inputgroup")(24,"p-inputgroup-addon"),r(25,"www"),t(),o(26,"p-floatlabel",8)(27,"input",9),g("ngModelChange",function(i){return s(e.value3,i)||(e.value3=i),i}),t(),o(28,"label",10),r(29,"On Label"),t()()()(),u(30,"app-code",11)),n&2&&(a(11),c("ngModel",e.value1),a(7),c("ngModel",e.value2),a(9),c("ngModel",e.value3),a(3),l("code",e.code))},dependencies:[b,y,M,_,G,T,S,B,P,x,I,C,h,w,v,re,ie],encapsulation:2})}return p})();var fe=(()=>{class p{value=10;code={basic:`<p-inputgroup class="md:!w-80">
    <p-inputgroup-addon>
        <i class="pi pi-shopping-cart"></i>
    </p-inputgroup-addon>
    <p-iftalabel>
        <p-inputnumber [(ngModel)]="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
        <label for="price">Price</label>
    </p-iftalabel>
</p-inputgroup>`,html:`<div class="card flex justify-center">
    <p-inputgroup class="md:!w-80">
        <p-inputgroup-addon>
            <i class="pi pi-shopping-cart"></i>
        </p-inputgroup-addon>
        <p-iftalabel>
            <p-inputnumber [(ngModel)]="value" inputId="price" mode="currency" currency="USD" locale="en-US" />
            <label for="price">Price</label>
        </p-iftalabel>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'input-group-ifta-label-demo',
    templateUrl: './input-group-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroupModule, InputGroupAddonModule, IftaLabelModule , InputNumberModule]
})
export class InputGroupIftaLabelDemo {
    value: number = 10;
}`};static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["ifta-label-doc"]],decls:15,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"md:!w-80"],[1,"pi","pi-shopping-cart"],["inputId","price","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","price"],["selector","input-group-ifta-label-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"IftaLabel is used to create infield top aligned labels. Visit "),o(3,"a",0),r(4,"IftaLabel"),t(),r(5," documentation for more information."),t()(),o(6,"div",1)(7,"p-inputgroup",2)(8,"p-inputgroup-addon"),u(9,"i",3),t(),o(10,"p-iftalabel")(11,"p-inputnumber",4),g("ngModelChange",function(i){return s(e.value,i)||(e.value=i),i}),t(),o(12,"label",5),r(13,"Price"),t()()()(),u(14,"app-code",6)),n&2&&(a(11),c("ngModel",e.value),a(3),l("code",e.code))},dependencies:[b,y,M,_,T,S,B,P,x,I,C,h,V,N,ae,ue],encapsulation:2})}return p})();var be=(()=>{class p{code={typescript:`import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';`};static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["input-group-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,e){n&1&&u(0,"app-code",0),n&2&&l("code",e.code)("hideToggleCode",!0)},dependencies:[y,M],encapsulation:2})}return p})();var Me=(()=>{class p{code={basic:`<p-inputgroup class="w-full md:!w-[30rem]">
    <p-inputgroup-addon>
        <i class="pi pi-clock"></i>
    </p-inputgroup-addon>
    <p-inputgroup-addon>
        <i class="pi pi-star-fill"></i>
    </p-inputgroup-addon>
    <input type="text" pInputText placeholder="Price" />
    <p-inputgroup-addon>$</p-inputgroup-addon>
    <p-inputgroup-addon>.00</p-inputgroup-addon>
</p-inputgroup>`,html:`<div class="card flex justify-center">
    <p-inputgroup class="w-full md:!w-[30rem]">
        <p-inputgroup-addon>
            <i class="pi pi-clock"></i>
        </p-inputgroup-addon>
        <p-inputgroup-addon>
            <i class="pi pi-star-fill"></i>
        </p-inputgroup-addon>
        <input type="text" pInputText placeholder="Price" />
        <p-inputgroup-addon>$</p-inputgroup-addon>
        <p-inputgroup-addon>.00</p-inputgroup-addon>
    </p-inputgroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'input-group-multiple-demo',
    templateUrl: './input-group-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, InputGroup, InputGroupAddonModule, InputTextModule]
})
export class InputGroupMultipleDemo {
}`};static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["multiple-doc"]],decls:15,vars:1,consts:[[1,"card","flex","justify-center"],[1,"w-full","md:!w-[30rem]"],[1,"pi","pi-clock"],[1,"pi","pi-star-fill"],["type","text","pInputText","","placeholder","Price"],["selector","input-group-multiple-demo",3,"code"]],template:function(n,e){n&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Multiple add-ons can be placed inside the same group."),t()(),o(3,"div",0)(4,"p-inputgroup",1)(5,"p-inputgroup-addon"),u(6,"i",2),t(),o(7,"p-inputgroup-addon"),u(8,"i",3),t(),u(9,"input",4),o(10,"p-inputgroup-addon"),r(11,"$"),t(),o(12,"p-inputgroup-addon"),r(13,".00"),t()()(),u(14,"app-code",5)),n&2&&(a(14),l("code",e.code))},dependencies:[b,y,M,x,I,C,h,w,v],encapsulation:2})}return p})();var ye=(()=>{class p{value=null;docs=[{data:A("InputGroup"),key:"InputGroup"},{data:A("InputGroupAddon"),key:"InputGroupAddon"}];static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["inputgroup-pt-viewer"]],decls:5,vars:2,consts:[[3,"docs"],[1,"pi","pi-user"],["pInputText","","placeholder","Username",3,"ngModelChange","ngModel"]],template:function(n,e){n&1&&(o(0,"app-docptviewer",0)(1,"p-inputgroup")(2,"p-inputgroup-addon"),u(3,"i",1),t(),o(4,"input",2),g("ngModelChange",function(i){return s(e.value,i)||(e.value=i),i}),t()()()),n&2&&(l("docs",e.docs),a(4),c("ngModel",e.value))},dependencies:[F,le,x,I,C,h,w,v,_,G,T,S],encapsulation:2})}return p})();var Ie=(()=>{class p{docs=[{id:"pt.viewer",label:"Viewer",component:ye},{id:"pt.doc.inputgroup",label:"InputGroup PT Options",component:R,data:A("InputGroup")},{id:"pt.doc.inputgroupaddon",label:"InputGroupAddon PT Options",component:R,data:A("InputGroupAddon")}];static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["inputgroup-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,e){n&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),r(3,"InputGroup Pass Through"),t()(),u(4,"app-docsection",2),t()),n&2&&(a(4),l("docs",e.docs))},dependencies:[F,pe],encapsulation:2})}return p})();var xe=(()=>{class p{ptComponent=Ie;docs=[{id:"import",label:"Import",component:be},{id:"basic",label:"Basic",component:me},{id:"multiple",label:"Multiple",component:Me},{id:"button",label:"Button",component:ce},{id:"checkbox",label:"Checkbox & Radio",component:se},{id:"floatlabel",label:"Float Label",component:ge},{id:"iftalabel",label:"Ifta Label",component:fe},{id:"accessibility",label:"Accessibility",component:de}];static \u0275fac=function(n){return new(n||p)};static \u0275cmp=d({type:p,selectors:[["ng-component"]],decls:1,vars:2,consts:[["docTitle","Angular InputGroup Component","header","InputGroup","description","Text, icon, buttons and other content can be grouped next to an input.","themeDocs","inputgroup",3,"docs","ptDocs"]],template:function(n,e){n&1&&u(0,"app-doc",0),n&2&&l("docs",e.docs)("ptDocs",e.ptComponent)},dependencies:[ne],encapsulation:2})}return p})();var nt=[{path:"",component:xe}];export{nt as default};
