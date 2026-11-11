import{a as xe,b as we}from"./chunk-ZYT4LGUE.js";import{a as Se,b as _e}from"./chunk-2SUSAFZL.js";import{a as oe,b as Ae}from"./chunk-JNUBCW5H.js";import{a as C,b as M,c as O}from"./chunk-NNIT6LNM.js";import"./chunk-7ZO4CZ3H.js";import{a as te}from"./chunk-5XWBYR75.js";import{b as ye}from"./chunk-T3D2SKKJ.js";import"./chunk-66742H4U.js";import"./chunk-VGTHJBIV.js";import{a as X,b as Z}from"./chunk-N3SKU25W.js";import{a as $,b as ee}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as se,f as y,g as R,h as de,i as S,j as H,k as ce,l as ue,p as fe,t as ge,u as _,v as ve}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as be}from"./chunk-FKOOMXTU.js";import{a as h}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as Me}from"./chunk-XCUGNKAG.js";import{a as b,b as Ce}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as K,h as Y}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as J,fa as Q,ga as he,ha as P}from"./chunk-MCW4FHXZ.js";import{ya as pe,za as U}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as E}from"./chunk-D2XKNHFS.js";import{$a as I,Ab as V,Eb as s,Fb as o,Gb as i,Gc as W,Hb as d,La as ne,Ob as B,Qa as p,Sb as v,X as N,aa as T,ba as F,cc as z,gb as c,gc as G,hc as t,ic as q,ja as ie,jc as le,mb as k,mc as u,nc as f,oc as g,pc as re,rc as ae,sc as me,zb as j}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var De=(()=>{class r{code={basic:`<label for="ac1">Username</label>
<p-autocomplete inputId="ac1"/>

<span id="ac2">Email</span>
<p-autocomplete ariaLabelledBy="ac2" />

<p-autocomplete ariaLabel="City" />`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-accessibility-doc"]],decls:166,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"h3"),t(2,"Screen Reader"),i(),o(3,"p"),t(4," Value to describe the component can either be provided via "),o(5,"i"),t(6,"label"),i(),t(7," tag combined with "),o(8,"i"),t(9,"inputId"),i(),t(10," prop or using "),o(11,"i"),t(12,"ariaLabelledBy"),i(),t(13,", "),o(14,"i"),t(15,"ariaLabel"),i(),t(16," props. The input element has "),o(17,"i"),t(18,"combobox"),i(),t(19," role in addition to "),o(20,"i"),t(21,"aria-autocomplete"),i(),t(22,", "),o(23,"i"),t(24,"aria-haspopup"),i(),t(25," and "),o(26,"i"),t(27,"aria-expanded"),i(),t(28," attributes. The relation between the input and the popup is created with "),o(29,"i"),t(30,"aria-controls"),i(),t(31," and "),o(32,"i"),t(33,"aria-activedescendant"),i(),t(34," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. "),i(),o(35,"p"),t(36,"In multiple mode, chip list uses "),o(37,"i"),t(38,"listbox"),i(),t(39," role whereas each chip has the "),o(40,"i"),t(41,"option"),i(),t(42," role with "),o(43,"i"),t(44,"aria-label"),i(),t(45," set to the label of the chip."),i(),o(46,"p"),t(47," The popup list has an id that refers to the "),o(48,"i"),t(49,"aria-controls"),i(),t(50," attribute of the input element and uses "),o(51,"i"),t(52,"listbox"),i(),t(53," as the role. Each list item has "),o(54,"i"),t(55,"option"),i(),t(56," role and an id to match the "),o(57,"i"),t(58,"aria-activedescendant"),i(),t(59," of the input element. "),i()(),d(60,"app-code",0),o(61,"h3"),t(62,"Keyboard Support"),i(),o(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),t(68,"Key"),i(),o(69,"th"),t(70,"Function"),i()()(),o(71,"tbody")(72,"tr")(73,"td")(74,"i"),t(75,"tab"),i()(),o(76,"td"),t(77,"Moves focus to the input element when popup is not visible. If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element."),i()(),o(78,"tr")(79,"td")(80,"i"),t(81,"up arrow"),i()(),o(82,"td"),t(83,"Highlights the previous item if popup is visible."),i()(),o(84,"tr")(85,"td")(86,"i"),t(87,"down arrow"),i()(),o(88,"td"),t(89,"Highlights the next item if popup is visible."),i()(),o(90,"tr")(91,"td")(92,"i"),t(93,"enter"),i()(),o(94,"td"),t(95,"Selects the highlighted item and closes the popup if popup is visible."),i()(),o(96,"tr")(97,"td")(98,"i"),t(99,"home"),i()(),o(100,"td"),t(101,"Highlights the first item if popup is visible."),i()(),o(102,"tr")(103,"td")(104,"i"),t(105,"end"),i()(),o(106,"td"),t(107,"Highlights the last item if popup is visible."),i()(),o(108,"tr")(109,"td")(110,"i"),t(111,"escape"),i()(),o(112,"td"),t(113,"Hides the popup."),i()()()()(),o(114,"h3"),t(115,"Chips Input Keyboard Support"),i(),o(116,"div",1)(117,"table",2)(118,"thead")(119,"tr")(120,"th"),t(121,"Key"),i(),o(122,"th"),t(123,"Function"),i()()(),o(124,"tbody")(125,"tr")(126,"td")(127,"i"),t(128,"backspace"),i()(),o(129,"td"),t(130,"Deletes the previous chip if the input field is empty."),i()(),o(131,"tr")(132,"td")(133,"i"),t(134,"left arrow"),i()(),o(135,"td"),t(136,"Moves focus to the previous chip if available and input field is empty."),i()()()()(),o(137,"h3"),t(138,"Chip Keyboard Support"),i(),o(139,"div",1)(140,"table",2)(141,"thead")(142,"tr")(143,"th"),t(144,"Key"),i(),o(145,"th"),t(146,"Function"),i()()(),o(147,"tbody")(148,"tr")(149,"td")(150,"i"),t(151,"left arrow"),i()(),o(152,"td"),t(153,"Moves focus to the previous chip if available."),i()(),o(154,"tr")(155,"td")(156,"i"),t(157,"right arrow"),i()(),o(158,"td"),t(159,"Moves focus to the next chip, if there is none then input field receives the focus."),i()(),o(160,"tr")(161,"td")(162,"i"),t(163,"backspace"),i()(),o(164,"td"),t(165,"Deletes the chips and adds focus to the input field."),i()()()()()),l&2&&(p(60),s("code",e.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[b,h],encapsulation:2})}return r})();function et(r,L){if(r&1&&(o(0,"div",5),d(1,"img",6),o(2,"div",7)(3,"span",8),t(4),i(),o(5,"span",9),t(6),i()(),o(7,"span",10),t(8),i()()),r&2){let a=L.$implicit;p(),s("src",re("/_ext/primefaces.org/cdn/primeng/images/demo/product/",a.image),ne)("alt",a.name),p(3),q(a.name),p(2),q(a.category),p(2),le("$",a.price)}}function tt(r,L){if(r&1&&(o(0,"div",11)(1,"span",12),t(2),i(),o(3,"span",13),t(4),i()()),r&2){let a=L.$implicit;p(2),q(a.name),p(2),le("$",a.price)}}var Ee=(()=>{class r{productService;products=ie([]);constructor(a){this.productService=a}ngOnInit(){this.productService.getProductsSmall().then(a=>this.products.set(a))}selectedProducts=ie([]);filteredProducts=[];filterProducts(a){let l=[],e=a.query;for(let m=0;m<this.products().length;m++){let n=this.products()[m];n.name?.toLowerCase().indexOf(e.toLowerCase())==0&&l.push(n)}this.filteredProducts=l}getProductLabel(a){return typeof a=="string"?a:a?.name||""}getProductValue(a){return typeof a=="string"?{name:a,custom:!0}:{id:a.id,name:a.name,price:a.price,quantity:a.quantity}}code={basic:`<p-autocomplete
    [(ngModel)]="selectedProducts"
    [suggestions]="filteredProducts"
    (completeMethod)="filterProducts($event)"
    inputId="advanced-chips"
    [multiple]="true"
    [fluid]="true"
    [typeahead]="false"
    [dropdown]="true"
    [optionLabel]="getProductLabel"
    [optionValue]="getProductValue"
    placeholder="Add products"
>
    <ng-template let-product #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img class="w-12 shrink-0 rounded" src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ product.name }}</span>
                <span class="text-sm text-surface-500 dark:text-surface-400">{{ product.category }}</span>
            </div>
            <span class="font-bold sm:ml-8">\${{ product.price }}</span>
        </div>
    </ng-template>
    <ng-template let-value #chip>
        <div class="flex align-items-center gap-2">
            <span class="font-semibold">{{ value.name }}</span>
            <span class="text-primary text-sm">\${{ value.price }}</span>
        </div>
    </ng-template>
</p-autocomplete>`,html:`<div class="card">
    <p-autocomplete
        [(ngModel)]="selectedProducts"
        [suggestions]="filteredProducts"
        (completeMethod)="filterProducts($event)"
        inputId="advanced-chips"
        [multiple]="true"
        [fluid]="true"
        [typeahead]="false"
        [dropdown]="true"
        [optionLabel]="getProductLabel"
        [optionValue]="getProductValue"
        placeholder="Add products"
    >
        <ng-template let-product #item>
            <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                <img class="w-12 shrink-0 rounded" src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" />
                <div class="flex-1 flex flex-col">
                    <span class="font-medium text-sm">{{ product.name }}</span>
                    <span class="text-sm text-surface-500 dark:text-surface-400">{{ product.category }}</span>
                </div>
                <span class="font-bold sm:ml-8">\${{ product.price }}</span>
            </div>
        </ng-template>
        <ng-template let-value #chip>
            <div class="flex align-items-center gap-2">
                <span class="font-semibold">{{ value.name }}</span>
                <span class="text-primary text-sm">\${{ value.price }}</span>
            </div>
        </ng-template>
    </p-autocomplete>
</div>`,typescript:`import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipModule } from 'primeng/chip';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';

@Component({
    selector: 'autocomplete-advanced-chips-demo',
    templateUrl: './autocomplete-advanced-chips-demo.html',
    standalone: true,
    imports: [CommonModule, FormsModule, AutoCompleteModule, ChipModule],
    providers: [ProductService]
})
export class AutocompleteAdvancedChipsDemo implements OnInit {
    products = signal<Product[]>([]);

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => this.products.set(data));
    }

    selectedProducts = signal<any[]>([]);

    filteredProducts: Product[] = [];

    filterProducts(event: any) {
        let filtered: Product[] = [];
        let query = event.query;

        for (let i = 0; i < this.products().length; i++) {
            let product = this.products()[i];
            if (product.name?.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(product);
            }
        }

        this.filteredProducts = filtered;
    }

    getProductLabel(product: any): string {
        if (typeof product === 'string') {
            return product;
        }
        return product?.name || '';
    }

    getProductValue(product: any): any {
        if (typeof product === 'string') {
            return { name: product, custom: true };
        }
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        };
    }
}`};static \u0275fac=function(l){return new(l||r)(I(te))};static \u0275cmp=c({type:r,selectors:[["advanced-chips-doc"]],features:[ae([te])],decls:16,vars:9,consts:[["item",""],["chip",""],[1,"card"],["inputId","advanced-chips","placeholder","Add products",3,"ngModelChange","completeMethod","ngModel","suggestions","multiple","fluid","typeahead","dropdown","optionLabel","optionValue"],["selector","autocomplete-advanced-chips-demo",3,"code"],[1,"flex","flex-wrap","p-1","items-center","gap-4","w-full"],[1,"w-12","shrink-0","rounded",3,"src","alt"],[1,"flex-1","flex","flex-col"],[1,"font-medium","text-sm"],[1,"text-sm","text-surface-500","dark:text-surface-400"],[1,"font-bold","sm:ml-8"],[1,"flex","align-items-center","gap-2"],[1,"font-semibold"],[1,"text-primary","text-sm"]],template:function(l,e){if(l&1){let m=B();o(0,"app-docsectiontext")(1,"p"),t(2," Advanced chips mode combines "),o(3,"i"),t(4,"optionLabel"),i(),t(5,", "),o(6,"i"),t(7,"optionValue"),i(),t(8," functions with custom templates for a rich user experience. This example demonstrates product selection with images, custom chip templates, and flexible data handling. "),i()(),o(9,"div",2)(10,"p-autocomplete",3),g("ngModelChange",function(x){return T(m),f(e.selectedProducts,x)||(e.selectedProducts=x),F(x)}),v("completeMethod",function(x){return T(m),F(e.filterProducts(x))}),k(11,et,9,6,"ng-template",null,0,W)(13,tt,5,2,"ng-template",null,1,W),i()(),d(15,"app-code",4)}l&2&&(p(10),u("ngModel",e.selectedProducts),s("suggestions",e.filteredProducts)("multiple",!0)("fluid",!0)("typeahead",!1)("dropdown",!0)("optionLabel",e.getProductLabel)("optionValue",e.getProductValue),p(5),s("code",e.code))},dependencies:[E,_,y,S,M,C,ye,b,h],encapsulation:2})}return r})();var Te=(()=>{class r{valueBlur=[];valueTab=[];valueSeparator=[];valueCombined=[];code={basic:`<!-- With Add On Blur -->
<p-autocomplete
    [(ngModel)]="valueBlur"
    multiple
    [typeahead]="false"
    [addOnBlur]="true"
    placeholder="Type and click outside to add..."
/>

<!-- With Add On Tab -->
<p-autocomplete
    [(ngModel)]="valueTab"
    multiple
    [typeahead]="false"
    [addOnTab]="true"
    placeholder="Type and press Tab to add..."
/>

<!-- With Separator -->
<p-autocomplete
    [(ngModel)]="valueSeparator"
    multiple
    [typeahead]="false"
    separator=","
    placeholder="Type items separated by comma..."
/>

<!-- Combined Features -->
<p-autocomplete
    [(ngModel)]="valueCombined"
    multiple
    [typeahead]="false"
    [addOnBlur]="true"
    [addOnTab]="true"
    separator=","
    placeholder="Use Tab, Blur, or Comma to add items..."
/>`,html:`<div class="card">
    <label for="chips-blur" class="font-bold mb-2 block">With Add On Blur</label>
    <p-autocomplete
        [(ngModel)]="valueBlur"
        inputId="chips-blur"
        multiple
        fluid
        [typeahead]="false"
        [addOnBlur]="true"
        placeholder="Type and click outside to add..."
    />

    <label for="chips-tab" class="font-bold mt-8 mb-2 block">With Add On Tab</label>
    <p-autocomplete
        [(ngModel)]="valueTab"
        inputId="chips-tab"
        multiple
        fluid
        [typeahead]="false"
        [addOnTab]="true"
        placeholder="Type and press Tab to add..."
    />

    <label for="chips-separator" class="font-bold mt-8 mb-2 block">With Separator (Comma)</label>
    <p-autocomplete
        [(ngModel)]="valueSeparator"
        inputId="chips-separator"
        multiple
        fluid
        [typeahead]="false"
        separator=","
        placeholder="Type items separated by comma..."
    />

    <label for="chips-combined" class="font-bold mt-8 mb-2 block">Combined Features</label>
    <p-autocomplete
        [(ngModel)]="valueCombined"
        inputId="chips-combined"
        multiple
        fluid
        [typeahead]="false"
        [addOnBlur]="true"
        [addOnTab]="true"
        separator=","
        placeholder="Use Tab, Blur, or Comma to add items..."
    />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
    selector: 'autocomplete-basic-chips-demo',
    templateUrl: './autocomplete-basic-chips-demo.html',
    standalone: true,
    imports: [FormsModule, AutoCompleteModule]
})
export class AutocompleteBasicChipsDemo {
    valueBlur: any[] = [];
    valueTab: any[] = [];
    valueSeparator: any[] = [];
    valueCombined: any[] = [];
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["basic-chips-doc"]],decls:32,vars:13,consts:[[1,"card"],["for","chips-blur",1,"font-bold","mb-2","block"],["inputId","chips-blur","multiple","","fluid","","placeholder","Type and click outside to add...",3,"ngModelChange","ngModel","typeahead","addOnBlur"],["for","chips-tab",1,"font-bold","mt-8","mb-2","block"],["inputId","chips-tab","multiple","","fluid","","placeholder","Type and press Tab to add...",3,"ngModelChange","ngModel","typeahead","addOnTab"],["for","chips-separator",1,"font-bold","mt-8","mb-2","block"],["inputId","chips-separator","multiple","","fluid","","separator",",","placeholder","Type items separated by comma...",3,"ngModelChange","ngModel","typeahead"],["for","chips-combined",1,"font-bold","mt-8","mb-2","block"],["inputId","chips-combined","multiple","","fluid","","separator",",","placeholder","Use Tab, Blur, or Comma to add items...",3,"ngModelChange","ngModel","typeahead","addOnBlur","addOnTab"],["selector","autocomplete-basic-chips-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," When "),o(3,"i"),t(4,"typeahead"),i(),t(5," is disabled and "),o(6,"i"),t(7,"multiple"),i(),t(8," is enabled, AutoComplete can work like a chips component. Various features allow flexible item addition: use "),o(9,"i"),t(10,"addOnBlur"),i(),t(11," to add items when the input loses focus, "),o(12,"i"),t(13,"addOnTab"),i(),t(14," to add items with the Tab key, and "),o(15,"i"),t(16,"separator"),i(),t(17," to define characters for adding multiple items at once. "),i()(),o(18,"div",0)(19,"label",1),t(20,"With Add On Blur"),i(),o(21,"p-autocomplete",2),g("ngModelChange",function(n){return f(e.valueBlur,n)||(e.valueBlur=n),n}),i(),o(22,"label",3),t(23,"With Add On Tab"),i(),o(24,"p-autocomplete",4),g("ngModelChange",function(n){return f(e.valueTab,n)||(e.valueTab=n),n}),i(),o(25,"label",5),t(26,"With Separator (Comma)"),i(),o(27,"p-autocomplete",6),g("ngModelChange",function(n){return f(e.valueSeparator,n)||(e.valueSeparator=n),n}),i(),o(28,"label",7),t(29,"Combined Features"),i(),o(30,"p-autocomplete",8),g("ngModelChange",function(n){return f(e.valueCombined,n)||(e.valueCombined=n),n}),i()(),d(31,"app-code",9)),l&2&&(p(21),u("ngModel",e.valueBlur),s("typeahead",!1)("addOnBlur",!0),p(3),u("ngModel",e.valueTab),s("typeahead",!1)("addOnTab",!0),p(3),u("ngModel",e.valueSeparator),s("typeahead",!1),p(3),u("ngModel",e.valueCombined),s("typeahead",!1)("addOnBlur",!0)("addOnTab",!0),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var Fe=(()=>{class r{items=[];value;code={basic:'<p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-basic-demo',
    templateUrl: './autocomplete-basic-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteBasicDemo {
    items: any[] = [];

    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["basic-doc"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-basic-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," AutoComplete uses "),o(3,"i"),t(4,"ngModel"),i(),t(5," for two-way binding, requires a list of suggestions and a "),o(6,"i"),t(7,"completeMethod"),i(),t(8," to query for the results. The completeMethod gets the query text as "),o(9,"i"),t(10,"event.query"),i(),t(11," property and should update the suggestions with the search results. "),i()(),o(12,"div",0)(13,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.value,n)||(e.value=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(14,"app-code",2)),l&2&&(p(13),u("ngModel",e.value),s("suggestions",e.items),p(),s("code",e.code))},dependencies:[E,_,y,S,M,C,b,h],encapsulation:2})}return r})();var Ie=(()=>{class r{items=[];value;code={basic:'<p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" [showClear]="true" inputStyleClass="w-56" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" [showClear]="true" inputStyleClass="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-clear-icon-demo',
    templateUrl: './autocomplete-clear-icon-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteClearIconDemo {
    items: any[] = [];

    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["clear-icon-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["inputStyleClass","w-56",3,"ngModelChange","completeMethod","ngModel","suggestions","showClear"],["selector","autocomplete-clear-icon-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"When "),o(3,"i"),t(4,"showClear"),i(),t(5," is enabled, a clear icon is displayed to clear the value."),i()(),o(6,"div",0)(7,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.value,n)||(e.value=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(8,"app-code",2)),l&2&&(p(7),u("ngModel",e.value),s("suggestions",e.items)("showClear",!0),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var Le=(()=>{class r{items;selectedItem;suggestions;search(a){this.suggestions=[...Array(10).keys()].map(l=>a.query+"-"+l)}code={basic:'<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" placeholder="Disabled" (completeMethod)="search($event)" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" placeholder="Disabled" (completeMethod)="search($event)" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-disabled-demo',
    templateUrl: './autocomplete-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteDisabledDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["disabled-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","Disabled",3,"ngModelChange","completeMethod","ngModel","suggestions","disabled"],["selector","autocomplete-disabled-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"When "),o(3,"i"),t(4,"disabled"),i(),t(5," is present, the element cannot be edited and focused."),i()(),o(6,"div",0)(7,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.selectedItem,n)||(e.selectedItem=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(8,"app-code",2)),l&2&&(p(7),u("ngModel",e.selectedItem),s("suggestions",e.suggestions)("disabled",!0),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var We=(()=>{class r{items;value;code={basic:'<p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="search($event)" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="value" [dropdown]="true" [suggestions]="items" (completeMethod)="search($event)" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-dropdown-demo',
    templateUrl: './autocomplete-dropdown-demo.html',
    standalone:true,
    imports: [FormsModule, AutoCompleteModule]
})
export class AutocompleteDropdownDemo {
    items: any[] | undefined;

    value: any;

    search(event: AutoCompleteCompleteEvent) {
    let _items = [...Array(10).keys()];

    this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
    }
}`};search(a){let l=[...Array(10).keys()];this.items=a.query?[...Array(10).keys()].map(e=>a.query+"-"+e):l}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["dropdown-doc"]],decls:24,vars:4,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","completeMethod","ngModel","dropdown","suggestions"],["selector","autocomplete-dropdown-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," Enabling "),o(3,"i"),t(4,"dropdown"),i(),t(5," property displays a button next to the input field where click behavior of the button is defined using "),o(6,"i"),t(7,"dropdownMode"),i(),t(8," property that takes "),o(9,"strong"),t(10,"blank"),i(),t(11," or "),o(12,"strong"),t(13,"current"),i(),t(14," as possible values. "),o(15,"i"),t(16,"blank"),i(),t(17," is the default mode to send a query with an empty string whereas "),o(18,"i"),t(19,"current"),i(),t(20," setting sends a query with the current value of the input. "),i()(),o(21,"div",0)(22,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.value,n)||(e.value=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(23,"app-code",2)),l&2&&(p(22),u("ngModel",e.value),s("dropdown",!0)("suggestions",e.items),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var Be=(()=>{class r{items;selectedItem;suggestions;search(a){this.suggestions=[...Array(10).keys()].map(l=>a.query+"-"+l)}code={basic:'<p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" variant="filled" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-filled-demo',
    templateUrl: './autocomplete-filled-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteFilledDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["filled-doc"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-filled-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Specify the "),o(3,"i"),t(4,"variant"),i(),t(5," property as "),o(6,"i"),t(7,"filled"),i(),t(8," to display the component with a higher visual emphasis than the default "),o(9,"i"),t(10,"outlined"),i(),t(11," style."),i()(),o(12,"div",0)(13,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.selectedItem,n)||(e.selectedItem=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(14,"app-code",2)),l&2&&(p(13),u("ngModel",e.selectedItem),s("suggestions",e.suggestions),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var qe=(()=>{class r{value1;value2;value3;items;code={basic:`<p-floatlabel>
    <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search($event)" inputId="over_label" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search($event)" inputId="in_label" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search($event)" inputId="on_label" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search($event)" inputId="over_label" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search($event)" inputId="in_label" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search($event)" inputId="on_label" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { FloatLabel } from 'primeng/floatlabel';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-float-label-demo',
    templateUrl: './autocomplete-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete, FloatLabel]
})
export class AutocompleteFloatLabelDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;

    items: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["float-label-doc"]],decls:20,vars:7,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","over_label"],["variant","in"],["inputId","in_label",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","in_label"],["variant","on"],["inputId","on_label",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","on_label"],["selector","autocomplete-float-label-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," A floating label appears on top of the input field when focused. Visit "),o(3,"a",0),t(4,"FloatLabel"),i(),t(5," documentation for more information. "),i()(),o(6,"div",1)(7,"p-floatlabel")(8,"p-autocomplete",2),g("ngModelChange",function(n){return f(e.value1,n)||(e.value1=n),n}),v("completeMethod",function(n){return e.search(n)}),i(),o(9,"label",3),t(10,"Over Label"),i()(),o(11,"p-floatlabel",4)(12,"p-autocomplete",5),g("ngModelChange",function(n){return f(e.value2,n)||(e.value2=n),n}),v("completeMethod",function(n){return e.search(n)}),i(),o(13,"label",6),t(14,"In Label"),i()(),o(15,"p-floatlabel",7)(16,"p-autocomplete",8),g("ngModelChange",function(n){return f(e.value3,n)||(e.value3=n),n}),v("completeMethod",function(n){return e.search(n)}),i(),o(17,"label",9),t(18,"On Label"),i()()(),d(19,"app-code",10)),l&2&&(p(8),u("ngModel",e.value1),s("suggestions",e.items),p(4),u("ngModel",e.value2),s("suggestions",e.items),p(4),u("ngModel",e.value3),s("suggestions",e.items),p(3),s("code",e.code))},dependencies:[_,y,S,M,C,_e,Se,Y,K,b,h],encapsulation:2})}return r})();var ke=(()=>{class r{items=[];value;code={basic:'<p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" fluid />',html:`<div class="card">
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-fluid-demo',
    templateUrl: './autocomplete-fluid-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteFluidDemo {
    items: any[] = [];

    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["fluid-doc"]],decls:6,vars:3,consts:[[1,"card"],["fluid","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-fluid-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"The fluid prop makes the component take up the full width of its container when set to true."),i()(),o(3,"div",0)(4,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.value,n)||(e.value=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(5,"app-code",2)),l&2&&(p(4),u("ngModel",e.value),s("suggestions",e.items),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var Oe=(()=>{class r{countryService;id;title;countries;selectedCountry;filteredCountries;constructor(a){this.countryService=a}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let l=[],e=a.query;for(let m=0;m<this.countries.length;m++){let n=this.countries[m];n.name.toLowerCase().indexOf(e.toLowerCase())==0&&l.push(n)}this.filteredCountries=l}code={basic:'<p-autocomplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { CountryService } from '@/service/countryservice';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-force-selection-demo',
    templateUrl: './autocomplete-force-selection-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete],
    providers: [CountryService]
})
export class AutocompleteForceSelectionDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`};static \u0275fac=function(l){return new(l||r)(I(O))};static \u0275cmp=c({type:r,selectors:[["force-selection-doc"]],inputs:{id:"id",title:"title"},decls:6,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name",3,"ngModelChange","completeMethod","ngModel","forceSelection","suggestions"],["selector","autocomplete-force-selection-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions."),i()(),o(3,"div",0)(4,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.selectedCountry,n)||(e.selectedCountry=n),n}),v("completeMethod",function(n){return e.filterCountry(n)}),i()(),d(5,"app-code",2)),l&2&&(p(4),u("ngModel",e.selectedCountry),s("forceSelection",!0)("suggestions",e.filteredCountries),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();function it(r,L){if(r&1&&(o(0,"div",4),d(1,"img",5),o(2,"span"),t(3),i()()),r&2){let a=L.$implicit;p(),G("mr-2 flag flag-"+a.value),p(2),q(a.label)}}var Ne=(()=>{class r{filterService;selectedCity;filteredGroups;groupedCities;constructor(a){this.filterService=a}ngOnInit(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}filterGroupedCity(a){let l=a.query,e=[];for(let m of this.groupedCities){let n=this.filterService.filter(m.items,["label"],l,"contains");n&&n.length&&e.push({label:m.label,value:m.value,items:n})}this.filteredGroups=e}code={basic:`<p-autocomplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-autocomplete>`,html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
        <ng-template let-group #group>
            <div class="flex items-center">
                <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-autocomplete>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FilterService, SelectItemGroup } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-grouped-demo',
    templateUrl: './autocomplete-grouped-demo.html',
    standalone: true,
    imports: [AutoComplete, FormsModule],
  })
export class AutocompleteGroupedDemo implements OnInit {
    selectedCity: any;

    filteredGroups: any[] | undefined;

    groupedCities: SelectItemGroup[] | undefined;

    constructor(private filterService: FilterService) { }

    ngOnInit() {
        this.groupedCities = [
            {
                label: 'Germany', value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA', value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan', value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }

    filterGroupedCity(event: AutoCompleteCompleteEvent) {
        let query = event.query;
        let filteredGroups = [];

        for (let optgroup of this.groupedCities) {
            let filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, "contains");
            if (filteredSubOptions && filteredSubOptions.length) {
                filteredGroups.push({
                    label: optgroup.label,
                    value: optgroup.value,
                    items: filteredSubOptions
                });
            }
        }

        this.filteredGroups = filteredGroups;
    }
}`};static \u0275fac=function(l){return new(l||r)(I(pe))};static \u0275cmp=c({type:r,selectors:[["grouped-doc"]],decls:17,vars:4,consts:[["group",""],[1,"card","flex","justify-center"],["placeholder","Hint: type 'a'",3,"ngModelChange","completeMethod","ngModel","group","suggestions"],["selector","autocomplete-grouped-demo",3,"code"],[1,"flex","items-center"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(l,e){if(l&1){let m=B();o(0,"app-docsectiontext")(1,"p"),t(2,"Option grouping is enabled when "),o(3,"i"),t(4,"group"),i(),t(5," property is set to "),o(6,"i"),t(7,"true"),i(),t(8,". "),o(9,"i"),t(10,"group"),i(),t(11," template is available to customize the option groups. All templates get the option instance as the default local template variable."),i()(),o(12,"div",1)(13,"p-autocomplete",2),g("ngModelChange",function(x){return T(m),f(e.selectedCity,x)||(e.selectedCity=x),F(x)}),v("completeMethod",function(x){return T(m),F(e.filterGroupedCity(x))}),k(14,it,4,3,"ng-template",null,0,W),i()(),d(16,"app-code",3)}l&2&&(p(13),u("ngModel",e.selectedCity),s("group",!0)("suggestions",e.filteredGroups),p(3),s("code",e.code))},dependencies:[E,_,y,S,M,C,b,h],encapsulation:2})}return r})();var je=(()=>{class r{items;value;code={basic:`<p-iftalabel>
    <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" inputId="ac" />
    <label for="ac">Identifier</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-autocomplete [(ngModel)]="value" [suggestions]="items" (completeMethod)="search($event)" inputId="ac" />
        <label for="ac">Identifier</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { IftaLabelModule } from 'primeng/iftalabel';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-ifta-label-demo',
    templateUrl: './autocomplete-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, AutoCompleteModule, IftaLabelModule]
})
export class AutocompleteIftaLabelDemo {
    items: any[] | undefined;

    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`};search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["ifta-label-doc"]],decls:12,vars:3,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","ac",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","ac"],["selector","autocomplete-ifta-label-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"IftaLabel is used to create infield top aligned labels. Visit "),o(3,"a",0),t(4,"IftaLabel"),i(),t(5," documentation for more information."),i()(),o(6,"div",1)(7,"p-iftalabel")(8,"p-autocomplete",2),g("ngModelChange",function(n){return f(e.value,n)||(e.value=n),n}),v("completeMethod",function(n){return e.search(n)}),i(),o(9,"label",3),t(10,"Identifier"),i()()(),d(11,"app-code",4)),l&2&&(p(8),u("ngModel",e.value),s("suggestions",e.items),p(3),s("code",e.code))},dependencies:[_,y,S,M,C,we,xe,Y,K,b,h],encapsulation:2})}return r})();var Ve=(()=>{class r{code={typescript:"import { AutoCompleteModule } from 'primeng/autocomplete';"};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,e){l&1&&d(0,"app-code",0),l&2&&s("code",e.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2})}return r})();var ze=(()=>{class r{value1;value2;suggestions;search(a){this.suggestions=[...Array(10).keys()].map(l=>a.query+"-"+l)}code={basic:`<p-autocomplete [(ngModel)]="value1" [suggestions]="suggestions" [invalid]="!value1" (completeMethod)="search($event)" placeholder="Code" />
<p-autocomplete [(ngModel)]="value2" [suggestions]="suggestions" [invalid]="!value2" (completeMethod)="search($event)" variant="filled" placeholder="Code" />`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-autocomplete [(ngModel)]="value1" [suggestions]="suggestions" [invalid]="!value1" (completeMethod)="search($event)" placeholder="Code" />
    <p-autocomplete [(ngModel)]="value2" [suggestions]="suggestions" [invalid]="!value2" (completeMethod)="search($event)" variant="filled" placeholder="Code" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-invalid-demo',
    templateUrl: './autocomplete-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteInvalidDemo {

    value1: any;

    value2: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["invalid-doc"]],decls:10,vars:7,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["placeholder","Code",3,"ngModelChange","completeMethod","ngModel","suggestions","invalid"],["variant","filled","placeholder","Code",3,"ngModelChange","completeMethod","ngModel","suggestions","invalid"],["selector","autocomplete-invalid-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"The invalid state is applied using the "),o(3,"i"),t(4,"\u2060invalid"),i(),t(5," property to indicate failed validation, which can be integrated with Angular Forms."),i()(),o(6,"div",0)(7,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.value1,n)||(e.value1=n),n}),v("completeMethod",function(n){return e.search(n)}),i(),o(8,"p-autocomplete",2),g("ngModelChange",function(n){return f(e.value2,n)||(e.value2=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(9,"app-code",3)),l&2&&(p(7),u("ngModel",e.value1),s("suggestions",e.suggestions)("invalid",!e.value1),p(),u("ngModel",e.value2),s("suggestions",e.suggestions)("invalid",!e.value2),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var Ge=(()=>{class r{value1;value2;items;search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}code={basic:`<label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
<p-autocomplete [(ngModel)]="value1" inputId="multiple-ac-1" multiple fluid [suggestions]="items" (completeMethod)="search($event)" />

<label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
<p-autocomplete [(ngModel)]="value2" inputId="multiple-ac-2" multiple fluid (completeMethod)="search($event)" [typeahead]="false" />`,html:`<div class="card">
    <label for="multiple-ac-1" class="font-bold mb-2 block">With Typeahead</label>
    <p-autocomplete [(ngModel)]="value1" inputId="multiple-ac-1" multiple fluid [suggestions]="items" (completeMethod)="search($event)" />

    <label for="multiple-ac-2" class="font-bold mt-8 mb-2 block">Without Typeahead</label>
    <p-autocomplete [(ngModel)]="value2" inputId="multiple-ac-2" multiple fluid (completeMethod)="search($event)" [typeahead]="false" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-multiple-demo',
    templateUrl: './autocomplete-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteMultipleDemo {
    value1: any[] | undefined;

    value2: any[] | undefined;

    items: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-multiple-demo"]],decls:14,vars:5,consts:[[1,"card"],["for","multiple-ac-1",1,"font-bold","mb-2","block"],["inputId","multiple-ac-1","multiple","","fluid","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","multiple-ac-2",1,"font-bold","mt-8","mb-2","block"],["inputId","multiple-ac-2","multiple","","fluid","",3,"ngModelChange","completeMethod","ngModel","typeahead"],["selector","autocomplete-multiple-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Multiple mode is enabled using "),o(3,"i"),t(4,"multiple"),i(),t(5," property used to select more than one value from the autocomplete. In this case, value reference should be an array."),i()(),o(6,"div",0)(7,"label",1),t(8,"With Typeahead"),i(),o(9,"p-autocomplete",2),g("ngModelChange",function(n){return f(e.value1,n)||(e.value1=n),n}),v("completeMethod",function(n){return e.search(n)}),i(),o(10,"label",3),t(11,"Without Typeahead"),i(),o(12,"p-autocomplete",4),g("ngModelChange",function(n){return f(e.value2,n)||(e.value2=n),n}),v("completeMethod",function(n){return e.search(n)}),i()(),d(13,"app-code",5)),l&2&&(p(9),u("ngModel",e.value1),s("suggestions",e.items),p(3),u("ngModel",e.value2),s("typeahead",!1),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var Ue=(()=>{class r{countryService;countries;selectedCountry;filteredCountries;constructor(a){this.countryService=a}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let l=[],e=a.query;for(let m=0;m<this.countries.length;m++){let n=this.countries[m];n.name.toLowerCase().indexOf(e.toLowerCase())==0&&l.push(n)}this.filteredCountries=l}code={basic:'<p-autocomplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { CountryService } from '@/service/countryservice';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-objects-demo',
    templateUrl: './autocomplete-objects-demo.html',
    standalone: true,
    imports: [AutoComplete, FormsModule],
    providers: [CountryService]

})
export class AutocompleteObjectsDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`};static \u0275fac=function(l){return new(l||r)(I(O))};static \u0275cmp=c({type:r,selectors:[["autocomplete-objects-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","name",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-objects-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," AutoComplete can also work with objects using the "),o(3,"i"),t(4,"optionLabel"),i(),t(5," property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as "),o(6,"i"),t(7,'{name: "United States", code:"USA"}'),i(),t(8,". "),i()(),o(9,"div",0)(10,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.selectedCountry,n)||(e.selectedCountry=n),n}),v("completeMethod",function(n){return e.filterCountry(n)}),i()(),d(11,"app-code",2)),l&2&&(p(10),u("ngModel",e.selectedCountry),s("suggestions",e.filteredCountries),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var Re=(()=>{class r{value="";items=[];docs=[{data:oe("AutoComplete"),key:"AutoComplete"}];search(a){let l=a.query;this.items=l?Array.from({length:10},(e,m)=>`${l}-${m}`):Array.from({length:10},(e,m)=>String(m))}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-pt-viewer"]],decls:2,vars:4,consts:[[3,"docs"],["appendTo","self",3,"ngModelChange","completeMethod","ngModel","dropdown","suggestions"]],template:function(l,e){l&1&&(o(0,"app-docptviewer",0)(1,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.value,n)||(e.value=n),n}),v("completeMethod",function(n){return e.search(n)}),i()()),l&2&&(s("docs",e.docs),p(),u("ngModel",e.value),s("dropdown",!0)("suggestions",e.items))},dependencies:[E,Ae,M,C,_,y,S],encapsulation:2})}return r})();var He=(()=>{class r{docs=[{id:"pt.viewer",label:"Viewer",component:Re},{id:"pt.doc.autocomplete",label:"AutoComplete PT Options",component:Ce,data:oe("AutoComplete")}];static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(l,e){l&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),t(3,"AutoComplete Pass Through"),i()(),d(4,"app-docsection",2),i()),l&2&&(p(4),s("docs",e.docs))},dependencies:[E,Me],encapsulation:2})}return r})();function rt(r,L){r&1&&(o(0,"p-message",4),t(1,"Value is required."),i())}var Ye=(()=>{class r{fb;messageService=N(U);items;exampleForm;formSubmitted=!1;constructor(a){this.fb=a,this.exampleForm=this.fb.group({value:["",se.required]})}search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(a){let l=this.exampleForm.get(a);return l?.invalid&&(l.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-autocomplete formControlName="value" [suggestions]="items" [invalid]="isInvalid('value')" (completeMethod)="search($event)" fluid />
        @if (isInvalid('value')) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex justify-center flex-col gap-4 md:w-56">
        <div class="flex flex-col gap-1">
            <p-autocomplete formControlName="value" [suggestions]="items" [invalid]="isInvalid('value')" (completeMethod)="search($event)" fluid />
            @if (isInvalid('value')) {
                <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-reactive-forms-demo',
    templateUrl: './autocomplete-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, AutoCompleteModule, MessageModule, ToastModule, ButtonModule],
})
export class AutocompleteReactiveFormsDemo {
    messageService = inject(MessageService);

    items: any[] | undefined;

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            value: ['', Validators.required]
        });
    }

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
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
}`};static \u0275fac=function(l){return new(l||r)(I(ge))};static \u0275cmp=c({type:r,selectors:[["reactive-forms-doc"]],decls:16,vars:5,consts:[[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4","md:w-56",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","value","fluid","",3,"completeMethod","suggestions","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","autocomplete-reactive-forms-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"AutoComplete can also be used with reactive forms. In this case, the "),o(3,"i"),t(4,"formControlName"),i(),t(5," property is used to bind the component to a form control."),i()(),d(6,"p-toast"),o(7,"div",0)(8,"form",1),v("ngSubmit",function(){return e.onSubmit()}),o(9,"div",2)(10,"p-autocomplete",3),v("completeMethod",function(n){return e.search(n)}),i(),j(11,rt,2,0,"p-message",4),i(),o(12,"button",5)(13,"span",6),t(14,"Submit"),i()()()(),d(15,"app-code",7)),l&2&&(p(8),s("formGroup",e.exampleForm),p(2),s("suggestions",e.items)("invalid",e.isInvalid("value")),p(),V(e.isInvalid("value")?11:-1),p(4),s("code",e.code))},dependencies:[ve,H,y,R,ce,ue,M,C,ee,$,Z,X,P,Q,J,E,b,h],encapsulation:2})}return r})();var Je=(()=>{class r{items;value1;value2;value3;code={basic:`<p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search()" size="small" placeholder="Small" dropdown />
<p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search()" placeholder="Normal" dropdown />
<p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search()" size="large" placeholder="Large" dropdown />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-autocomplete [(ngModel)]="value1" [suggestions]="items" (completeMethod)="search()" size="small" placeholder="Small" dropdown />
    <p-autocomplete [(ngModel)]="value2" [suggestions]="items" (completeMethod)="search()" placeholder="Normal" dropdown />
    <p-autocomplete [(ngModel)]="value3" [suggestions]="items" (completeMethod)="search()" size="large" placeholder="Large" dropdown />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'autocomplete-size-demo',
    templateUrl: './autocomplete-size-demo.html',
    imports: [AutoComplete, FormsModule],
    standalone: true,
})
export class AutocompleteSizesDemo {
    items: any[] | undefined;

    value1: any;

    value2: any;

    value3: any;

    search() {
        this.items = [];
    }

}`};search(){this.items=[]}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["sizes-doc"]],decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small","dropdown","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["placeholder","Normal","dropdown","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["size","large","placeholder","Large","dropdown","",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-sizes-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"AutoComplete provides "),o(3,"i"),t(4,"small"),i(),t(5," and "),o(6,"i"),t(7,"large"),i(),t(8," sizes as alternatives to the base."),i()(),o(9,"div",0)(10,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.value1,n)||(e.value1=n),n}),v("completeMethod",function(){return e.search()}),i(),o(11,"p-autocomplete",2),g("ngModelChange",function(n){return f(e.value2,n)||(e.value2=n),n}),v("completeMethod",function(){return e.search()}),i(),o(12,"p-autocomplete",3),g("ngModelChange",function(n){return f(e.value3,n)||(e.value3=n),n}),v("completeMethod",function(){return e.search()}),i()(),d(13,"app-code",4)),l&2&&(p(10),u("ngModel",e.value1),s("suggestions",e.items),p(),u("ngModel",e.value2),s("suggestions",e.items),p(),u("ngModel",e.value3),s("suggestions",e.items),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();function at(r,L){if(r&1&&(o(0,"div",6),d(1,"img",7),o(2,"div"),t(3),i()()),r&2){let a=L.$implicit;p(),G("flag flag-"+a.code.toLowerCase()),p(2),q(a.name)}}function mt(r,L){r&1&&(o(0,"div",8),t(1,"Available Countries"),i())}function pt(r,L){r&1&&(o(0,"div",9),d(1,"p-button",10),i())}var Qe=(()=>{class r{countryService;countries;selectedCountryAdvanced;filteredCountries;constructor(a){this.countryService=a}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let l=[],e=a.query;for(let m=0;m<this.countries.length;m++){let n=this.countries[m];n.name.toLowerCase().indexOf(e.toLowerCase())==0&&l.push(n)}this.filteredCountries=l}code={basic:`<p-autocomplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 py-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-autocomplete>`,html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" optionLabel="name">
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
        <ng-template #header>
            <div class="font-medium px-3 py-2">Available Countries</div>
        </ng-template>
        <ng-template #footer>
            <div class="px-3 py-3">
                <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
            </div>
        </ng-template>
    </p-autocomplete>
</div>`,typescript:`import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { CountryService } from '@/service/countryservice';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-template-demo',
    templateUrl: './autocomplete-template-demo.html',
    standalone: true,
    imports: [FormsModule, AutoCompleteModule, ButtonModule],
    providers: [CountryService]
})
export class AutocompleteTemplateDemo {
    countries: any[] | undefined;

    selectedCountryAdvanced: any[] | undefined;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`};static \u0275fac=function(l){return new(l||r)(I(O))};static \u0275cmp=c({type:r,selectors:[["autocomplete-template-demo"]],decls:12,vars:3,consts:[["item",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["optionLabel","name",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"font-medium","px-3","py-2"],[1,"px-3","py-3"],["label","Add New","fluid","","severity","secondary","text","","size","small","icon","pi pi-plus"]],template:function(l,e){if(l&1){let m=B();o(0,"app-docsectiontext")(1,"p"),t(2,"AutoComplete offers multiple templates for customization through templating."),i()(),o(3,"div",3)(4,"p-autocomplete",4),g("ngModelChange",function(x){return T(m),f(e.selectedCountryAdvanced,x)||(e.selectedCountryAdvanced=x),F(x)}),v("completeMethod",function(x){return T(m),F(e.filterCountry(x))}),k(5,at,4,3,"ng-template",null,0,W)(7,mt,2,0,"ng-template",null,1,W)(9,pt,2,0,"ng-template",null,2,W),i()(),d(11,"app-code",5)}l&2&&(p(4),u("ngModel",e.selectedCountryAdvanced),s("suggestions",e.filteredCountries),p(7),s("code",e.code))},dependencies:[E,_,y,S,M,C,P,he,b,h],encapsulation:2})}return r})();function st(r,L){r&1&&(o(0,"p-message",6),t(1,"Value is required."),i())}var Xe=(()=>{class r{messageService=N(U);items=[];value;search(a){this.items=[...Array(10).keys()].map(l=>a.query+"-"+l)}onSubmit(a){a.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),a.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-autocomplete
            #val="ngModel"
            [(ngModel)]="value"
            [suggestions]="items"
            [invalid]="val.invalid && (val.touched || exampleForm.submitted)"
            name="val"
            (completeMethod)="search($event)"
            required
            fluid
        />
        @if (val.invalid && (val.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 w-full md:w-56">
        <div class="flex flex-col gap-1">
            <p-autocomplete
                #val="ngModel"
                [(ngModel)]="value"
                [suggestions]="items"
                [invalid]="val.invalid && (val.touched || exampleForm.submitted)"
                name="val"
                (completeMethod)="search($event)"
                required
                fluid
            />
            @if (val.invalid && (val.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Value is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'autocomplete-template-driven-forms-demo',
    templateUrl: './autocomplete-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, AutoCompleteModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    items: any[] = [];

    value: any;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["template-driven-forms-doc"]],decls:13,vars:5,consts:[["exampleForm","ngForm"],["val","ngModel"],[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4","md:w-56",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","val","required","","fluid","",3,"ngModelChange","completeMethod","ngModel","suggestions","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","autocomplete-template-driven-forms-demo",3,"code"]],template:function(l,e){if(l&1){let m=B();d(0,"app-docsectiontext")(1,"p-toast"),o(2,"div",2)(3,"form",3,0),v("ngSubmit",function(){T(m);let x=z(4);return F(e.onSubmit(x))}),o(5,"div",4)(6,"p-autocomplete",5,1),g("ngModelChange",function(x){return T(m),f(e.value,x)||(e.value=x),F(x)}),v("completeMethod",function(x){return T(m),F(e.search(x))}),i(),j(8,st,2,0,"p-message",6),i(),o(9,"button",7)(10,"span",8),t(11,"Submit"),i()()()(),d(12,"app-code",9)}if(l&2){let m=z(4),n=z(7);p(6),u("ngModel",e.value),s("suggestions",e.items)("invalid",n.invalid&&(n.touched||m.submitted)),p(2),V(n.invalid&&(n.touched||m.submitted)?8:-1),p(4),s("code",e.code)}},dependencies:[E,_,H,y,R,fe,S,de,M,C,ee,$,Z,X,P,Q,J,b,h],encapsulation:2})}return r})();var Ze=(()=>{class r{selectedItem;filteredItems;items;filterItems(a){let l=[],e=a.query;for(let m=0;m<this.items.length;m++){let n=this.items[m];n.label.toLowerCase().indexOf(e.toLowerCase())==0&&l.push(n)}this.filteredItems=l}ngOnInit(){this.items=[];for(let a=0;a<1e4;a++)this.items.push({label:"Item "+a,value:"Item "+a})}code={basic:'<p-autocomplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" optionLabel="label" [dropdown]="true" />',html:`<div class="card flex justify-center">
    <p-autocomplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" optionLabel="label" [dropdown]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-virtual-scroll-demo',
    templateUrl: './autocomplete-virtual-scroll-demo.html',
    standalone: true,
    imports: [FormsModule, AutoComplete]
})
export class AutocompleteVirtualScrollDemo {
    selectedItem: any;

    filteredItems: any[] | undefined;

    items: any[] | undefined;

    filterItems(event: AutoCompleteCompleteEvent) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.items as any[]).length; i++) {
            let item = (this.items as any[])[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(item);
            }
        }

        this.filteredItems = filtered;
    }

    ngOnInit() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
}`};static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["autocomplete-virtual-scroll-demo"]],decls:15,vars:6,consts:[[1,"card","flex","justify-center"],["optionLabel","label",3,"ngModelChange","completeMethod","ngModel","virtualScroll","suggestions","virtualScrollItemSize","dropdown"],["selector","autocomplete-virtual-scroll-demo",3,"code"]],template:function(l,e){l&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," Virtual scrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable virtual scrolling to avoid performance issues. Usage is simple as setting "),o(3,"i"),t(4,"virtualScroll"),i(),t(5," property to "),o(6,"i"),t(7,"true"),i(),t(8," and defining "),o(9,"i"),t(10,"virtualScrollItemSize"),i(),t(11," to specify the height of an item. "),i()(),o(12,"div",0)(13,"p-autocomplete",1),g("ngModelChange",function(n){return f(e.selectedItem,n)||(e.selectedItem=n),n}),v("completeMethod",function(n){return e.filterItems(n)}),i()(),d(14,"app-code",2)),l&2&&(p(13),u("ngModel",e.selectedItem),s("virtualScroll",!0)("suggestions",e.filteredItems)("virtualScrollItemSize",34)("dropdown",!0),p(),s("code",e.code))},dependencies:[_,y,S,M,C,b,h],encapsulation:2})}return r})();var dt=()=>["AutoComplete"],$e=(()=>{class r{ptComponent=He;docs=[{id:"import",label:"Import",component:Ve},{id:"basic",label:"Basic",component:Fe},{id:"dropdown",label:"Dropdown",component:We},{id:"objects",label:"Objects",component:Ue},{id:"template",label:"Template",component:Qe},{id:"group",label:"Group",component:Ne},{id:"forceselection",label:"Force Selection",component:Oe},{id:"virtualscroll",label:"Virtual Scroll",component:Ze},{id:"multiple",label:"Multiple",component:Ge},{id:"chips",label:"Chips",children:[{id:"basicchips",label:"Basic",component:Te},{id:"advancedchips",label:"Advanced",component:Ee}]},{id:"floatlabel",label:"Float Label",component:qe},{id:"iftalabel",label:"Ifta Label",component:je},{id:"clearicon",label:"Clear Icon",component:Ie},{id:"sizes",label:"Sizes",component:Je},{id:"fluid",label:"Fluid",component:ke},{id:"filled",label:"Filled",component:Be},{id:"disabled",label:"Disabled",component:Le},{id:"invalid",label:"Invalid",component:ze},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Xe},{id:"reactive",label:"Reactive Forms",component:Ye}]},{id:"accessibility",label:"Accessibility",component:De}];static \u0275fac=function(l){return new(l||r)};static \u0275cmp=c({type:r,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular AutoComplete Component","header","AutoComplete","description","AutoComplete is an input component that provides real-time suggestions when being typed.","themeDocs","AutoComplete",3,"docs","apiDocs","ptDocs"]],template:function(l,e){l&1&&d(0,"app-doc",0),l&2&&s("docs",e.docs)("apiDocs",me(3,dt))("ptDocs",e.ptComponent)},dependencies:[be],encapsulation:2,changeDetection:0})}return r})();var xl=[{path:"",component:$e}];export{xl as default};
