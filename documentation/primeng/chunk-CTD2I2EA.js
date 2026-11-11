import{a as S,b as C}from"./chunk-N2Z7YVU2.js";import"./chunk-APBUBGZC.js";import{a as Se,b as ve}from"./chunk-ZYT4LGUE.js";import{a as ge,b as ye}from"./chunk-2SUSAFZL.js";import{a as ee,b as he}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import"./chunk-66742H4U.js";import"./chunk-VGTHJBIV.js";import{a as Q,b as X}from"./chunk-N3SKU25W.js";import{a as Z,b as $}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as le,f as y,g as U,h as ne,i as v,j as G,k as ae,l as re,p as se,t as me,u as h,v as ce}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as fe}from"./chunk-FKOOMXTU.js";import{a as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ue}from"./chunk-XCUGNKAG.js";import{a as b,b as pe}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as q,h as J}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as K,fa as H,ga as de,ha as O}from"./chunk-MCW4FHXZ.js";import{za as j}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as ie,w as I}from"./chunk-D2XKNHFS.js";import{$a as te,Ab as W,Eb as r,Fb as t,Gb as o,Gc as F,Hb as c,Ob as N,Qa as m,Sb as z,Ub as Y,X as A,aa as E,ba as T,cc as V,gb as d,gc as R,hc as e,ic as k,mb as P,mc as p,nc as u,oc as f,sc as oe,zb as B}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Ce=(()=>{class l{code={basic:`<span id="dd1">Options</span>
<p-select ariaLabelledBy="dd1"/>

<p-select ariaLabel="Options"/>`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-accessibility-doc"]],decls:209,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,i){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),o(),t(4,"p"),e(5," Value to describe the component can either be provided with "),t(6,"i"),e(7,"ariaLabelledBy"),o(),e(8," or "),t(9,"i"),e(10,"ariaLabel"),o(),e(11," props. The select element has a "),t(12,"i"),e(13,"combobox"),o(),e(14," role in addition to "),t(15,"i"),e(16,"aria-haspopup"),o(),e(17," and "),t(18,"i"),e(19,"aria-expanded"),o(),e(20," attributes. If the editable option is enabled "),t(21,"i"),e(22,"aria-autocomplete"),o(),e(23," is also added. The relation between the combobox and the popup is created with "),t(24,"i"),e(25,"aria-controls"),o(),e(26," and "),t(27,"i"),e(28,"aria-activedescendant"),o(),e(29," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. "),o(),t(30,"p"),e(31," The popup list has an id that refers to the "),t(32,"i"),e(33,"aria-controls"),o(),e(34," attribute of the "),t(35,"i"),e(36,"combobox"),o(),e(37," element and uses "),t(38,"i"),e(39,"listbox"),o(),e(40," as the role. Each list item has an "),t(41,"i"),e(42,"option"),o(),e(43," role, an id to match the "),t(44,"i"),e(45,"aria-activedescendant"),o(),e(46," of the input element along with "),t(47,"i"),e(48,"aria-label"),o(),e(49,", "),t(50,"i"),e(51,"aria-selected"),o(),e(52," and "),t(53,"i"),e(54,"aria-disabled"),o(),e(55," attributes. "),o(),t(56,"p"),e(57,"If filtering is enabled, "),t(58,"i"),e(59,"filterInputProps"),o(),e(60," can be defined to give "),t(61,"i"),e(62,"aria-*"),o(),e(63," props to the filter input element."),o()(),c(64,"app-code",0),t(65,"h3"),e(66,"Closed State Keyboard Support"),o(),t(67,"div",1)(68,"table",2)(69,"thead")(70,"tr")(71,"th"),e(72,"Key"),o(),t(73,"th"),e(74,"Function"),o()()(),t(75,"tbody")(76,"tr")(77,"td")(78,"i"),e(79,"tab"),o()(),t(80,"td"),e(81,"Moves focus to the select element."),o()(),t(82,"tr")(83,"td")(84,"i"),e(85,"space"),o()(),t(86,"td"),e(87,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),o()(),t(88,"tr")(89,"td")(90,"i"),e(91,"down arrow"),o()(),t(92,"td"),e(93,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),o()(),t(94,"tr")(95,"td")(96,"i"),e(97,"up arrow"),o()(),t(98,"td"),e(99,"Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus."),o()()()()(),t(100,"h3"),e(101,"Popup Keyboard Support"),o(),t(102,"div",1)(103,"table",2)(104,"thead")(105,"tr")(106,"th"),e(107,"Key"),o(),t(108,"th"),e(109,"Function"),o()()(),t(110,"tbody")(111,"tr")(112,"td")(113,"i"),e(114,"tab"),o()(),t(115,"td"),e(116,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),o()(),t(117,"tr")(118,"td")(119,"i"),e(120,"shift"),o(),e(121," + "),t(122,"i"),e(123,"tab"),o()(),t(124,"td"),e(125,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),o()(),t(126,"tr")(127,"td")(128,"i"),e(129,"enter"),o()(),t(130,"td"),e(131,"Selects the focused option and closes the popup."),o()(),t(132,"tr")(133,"td")(134,"i"),e(135,"space"),o()(),t(136,"td"),e(137,"Selects the focused option and closes the popup."),o()(),t(138,"tr")(139,"td")(140,"i"),e(141,"escape"),o()(),t(142,"td"),e(143,"Closes the popup, moves focus to the select element."),o()(),t(144,"tr")(145,"td")(146,"i"),e(147,"down arrow"),o()(),t(148,"td"),e(149,"Moves focus to the next option, if there is none then visual focus does not change."),o()(),t(150,"tr")(151,"td")(152,"i"),e(153,"up arrow"),o()(),t(154,"td"),e(155,"Moves focus to the previous option, if there is none then visual focus does not change."),o()(),t(156,"tr")(157,"td")(158,"i"),e(159,"right arrow"),o()(),t(160,"td"),e(161,"If the select is editable, removes the visual focus from the current option and moves input cursor to one character left."),o()(),t(162,"tr")(163,"td")(164,"i"),e(165,"left arrow"),o()(),t(166,"td"),e(167,"If the select is editable, removes the visual focus from the current option and moves input cursor to one character right."),o()(),t(168,"tr")(169,"td")(170,"i"),e(171,"home"),o()(),t(172,"td"),e(173,"If the select is editable, moves input cursor at the end, if not then moves focus to the first option."),o()(),t(174,"tr")(175,"td")(176,"i"),e(177,"end"),o()(),t(178,"td"),e(179,"If the select is editable, moves input cursor at the beginning, if not then moves focus to the last option."),o()(),t(180,"tr")(181,"td")(182,"i"),e(183,"any printable character"),o()(),t(184,"td"),e(185,"Moves focus to the option whose label starts with the characters being typed if select is not editable."),o()()()()(),t(186,"h3"),e(187,"Filter Input Keyboard Support"),o(),t(188,"div",1)(189,"table",2)(190,"thead")(191,"tr")(192,"th"),e(193,"Key"),o(),t(194,"th"),e(195,"Function"),o()()(),t(196,"tbody")(197,"tr")(198,"td")(199,"i"),e(200,"enter"),o()(),t(201,"td"),e(202,"Closes the popup and moves focus to the select element."),o()(),t(203,"tr")(204,"td")(205,"i"),e(206,"escape"),o()(),t(207,"td"),e(208,"Closes the popup and moves focus to the select element."),o()()()()()()),n&2&&(m(64),r("code",i.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[b,g],encapsulation:2})}return l})();var be=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-basic-demo',
    templateUrl: './select-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectBasicDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-basic-demo"]],decls:24,vars:3,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","select-basic-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Select is used as a controlled component with "),t(3,"i"),e(4,"ngModel"),o(),e(5," property along with an "),t(6,"i"),e(7,"options"),o(),e(8," collection. Label and value of an option are defined with the "),t(9,"i"),e(10,"optionLabel"),o(),e(11," and "),t(12,"i"),e(13,"optionValue"),o(),e(14," properties respectively. Note that, when options are simple primitive values such as a string array, no "),t(15,"i"),e(16,"optionLabel"),o(),e(17," and "),t(18,"i"),e(19,"optionValue"),o(),e(20," would be necessary. "),o()(),t(21,"div",0)(22,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(23,"app-code",2)),n&2&&(m(22),r("options",i.cities),p("ngModel",i.selectedCity),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();var we=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" [checkmark]="true" optionLabel="name" [showClear]="true" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-checkmark-demo',
    templateUrl: './select-checkmark-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectCheckmarkDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-checkmark-demo"]],decls:6,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","checkmark","showClear"],["selector","select-checkmark-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"An alternative way to highlight the selected option is displaying a checkmark instead."),o()(),t(3,"div",0)(4,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(5,"app-code",2)),n&2&&(m(4),r("options",i.cities),p("ngModel",i.selectedCity),r("checkmark",!0)("showClear",!0),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();var Me=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" [showClear]="true" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" [showClear]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-clear-icon-demo',
    templateUrl: './select-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectClearIconDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-clear-icon-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","showClear"],["selector","select-clear-icon-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"showClear"),o(),e(5," is enabled, a clear icon is displayed to clear the value."),o()(),t(6,"div",0)(7,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(8,"app-code",2)),n&2&&(m(7),r("options",i.cities),p("ngModel",i.selectedCity),r("showClear",!0),m(),r("code",i.code))},dependencies:[b,g,h,y,v,S],encapsulation:2})}return l})();var xe=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true" class="w-full md:w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-disabled-demo',
    templateUrl: './select-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectDisabledDemo {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-disabled-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","Select a City","optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","disabled"],["selector","select-disabled-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),o(),e(5," is present, the element cannot be edited and focused."),o()(),t(6,"div",0)(7,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(8,"app-code",2)),n&2&&(m(7),r("options",i.cities),p("ngModel",i.selectedCity),r("disabled",!0),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();var Le=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-editable-demo',
    templateUrl: './select-editable-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectEditableDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-editable-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","Select a City","optionLabel","name",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","editable"],["selector","select-editable-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"editable"),o(),e(5," is present, the input can also be entered with typing."),o()(),t(6,"div",0)(7,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(8,"app-code",2)),n&2&&(m(7),r("options",i.cities),p("ngModel",i.selectedCity),r("editable",!0),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();var _e=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" variant="filled" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" variant="filled" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-filled-demo',
    templateUrl: './select-filled-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectFilledDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-filled-demo"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled","optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","select-filled-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),t(3,"i"),e(4,"variant"),o(),e(5," property as "),t(6,"i"),e(7,"filled"),o(),e(8," to display the component with a higher visual emphasis than the default "),t(9,"i"),e(10,"outlined"),o(),e(11," style."),o()(),t(12,"div",0)(13,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(14,"app-code",2)),n&2&&(m(13),r("options",i.cities),p("ngModel",i.selectedCity),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();function Ge(l,D){if(l&1&&(t(0,"div",5),c(1,"img",6),t(2,"div"),e(3),o()()),l&2){let s=D.$implicit,n=Y();m(),R("flag flag-"+n.selectedCountry.code.toLowerCase()),m(2),k(s.name)}}function qe(l,D){if(l&1&&(t(0,"div",5),c(1,"img",6),t(2,"div"),e(3),o()()),l&2){let s=D.$implicit;m(),R("flag flag-"+s.code.toLowerCase()),m(2),k(s.name)}}var De=(()=>{class l{countries;selectedCountry;ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}code={basic:`<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2">
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-select>`,html:`<div class="card flex justify-center">
    <p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" class="w-full md:w-56">
        <ng-template #selectedItem let-selectedOption>
            <div class="flex items-center gap-2">
                <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
                <div>{{ selectedOption.name }}</div>
            </div>
        </ng-template>
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-select>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'select-filter-demo',
    templateUrl: './select-filter-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule]
})
export class SelectFilterDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: string | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-filter-demo"]],decls:13,vars:5,consts:[["selectedItem",""],["item",""],[1,"card","flex","justify-center"],["optionLabel","name","filterBy","name","placeholder","Select a Country",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","filter","showClear"],["selector","select-filter-demo",3,"code"],[1,"flex","items-center","gap-2"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"]],template:function(n,i){if(n&1){let w=N();t(0,"app-docsectiontext")(1,"p"),e(2,"Select provides built-in filtering that is enabled by adding the "),t(3,"i"),e(4,"filter"),o(),e(5," property."),o()(),t(6,"div",2)(7,"p-select",3),f("ngModelChange",function(x){return E(w),u(i.selectedCountry,x)||(i.selectedCountry=x),T(x)}),P(8,Ge,4,3,"ng-template",null,0,F)(10,qe,4,3,"ng-template",null,1,F),o()(),c(12,"app-code",4)}n&2&&(m(7),r("options",i.countries),p("ngModel",i.selectedCountry),r("filter",!0)("showClear",!0),m(5),r("code",i.code))},dependencies:[I,b,g,h,y,v,C,S],encapsulation:2})}return l})();var Ie=(()=>{class l{cities;value1;value2;value3;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-floatlabel class="w-full md:w-56">
    <p-select [(ngModel)]="value1" inputId="over_label" [options]="cities" optionLabel="name" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="in">
    <p-select [(ngModel)]="value2" inputId="in_label" [options]="cities" optionLabel="name" class="w-full" variant="filled" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-56" variant="on">
    <p-select [(ngModel)]="value3" inputId="on_label" [options]="cities" optionLabel="name" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel class="w-full md:w-56">
        <p-select [(ngModel)]="value1" inputId="over_label" [options]="cities" optionLabel="name" class="w-full" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-56" variant="in">
        <p-select [(ngModel)]="value2" inputId="in_label" [options]="cities" optionLabel="name" class="w-full" variant="filled" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-56" variant="on">
        <p-select [(ngModel)]="value3" inputId="on_label" [options]="cities" optionLabel="name" class="w-full" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { FloatLabel } from "primeng/floatlabel"

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-floatlabel-demo',
    templateUrl: './select-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, Select, FloatLabel]
})
export class SelectFloatlabelDemo implements OnInit {
    cities: City[] | undefined;

    value1: City | undefined;

    value2: City | undefined;

    value3: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-floatlabel-demo"]],decls:20,vars:7,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"w-full","md:w-56"],["inputId","over_label","optionLabel","name",1,"w-full",3,"ngModelChange","ngModel","options"],["for","over_label"],["variant","in",1,"w-full","md:w-56"],["inputId","in_label","optionLabel","name","variant","filled",1,"w-full",3,"ngModelChange","ngModel","options"],["for","in_label"],["variant","on",1,"w-full","md:w-56"],["inputId","on_label","optionLabel","name",1,"w-full",3,"ngModelChange","ngModel","options"],["for","on_label"],["selector","select-floatlabel-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),t(3,"a",0),e(4,"FloatLabel"),o(),e(5," documentation for more information. "),o()(),t(6,"div",1)(7,"p-floatlabel",2)(8,"p-select",3),f("ngModelChange",function(a){return u(i.value1,a)||(i.value1=a),a}),o(),t(9,"label",4),e(10,"Over Label"),o()(),t(11,"p-floatlabel",5)(12,"p-select",6),f("ngModelChange",function(a){return u(i.value2,a)||(i.value2=a),a}),o(),t(13,"label",7),e(14,"In Label"),o()(),t(15,"p-floatlabel",8)(16,"p-select",9),f("ngModelChange",function(a){return u(i.value3,a)||(i.value3=a),a}),o(),t(17,"label",10),e(18,"On Label"),o()()(),c(19,"app-code",11)),n&2&&(m(8),p("ngModel",i.value1),r("options",i.cities),m(4),p("ngModel",i.value2),r("options",i.cities),m(4),p("ngModel",i.value3),r("options",i.cities),m(3),r("code",i.code))},dependencies:[b,g,h,y,v,C,S,ye,ge,J,q],encapsulation:2})}return l})();var Fe=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-fluid-demo',
    templateUrl: './select-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectFluidDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-fluid-demo"]],decls:6,vars:3,consts:[[1,"card"],["optionLabel","name","placeholder","Select a City","fluid","",3,"ngModelChange","options","ngModel"],["selector","select-fluid-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The fluid prop makes the component take up the full width of its container when set to true."),o()(),t(3,"div",0)(4,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(5,"app-code",2)),n&2&&(m(4),r("options",i.cities),p("ngModel",i.selectedCity),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();function Ke(l,D){if(l&1&&(t(0,"div",4),c(1,"img",5),t(2,"span"),e(3),o()()),l&2){let s=D.$implicit;m(),R("mr-2 flag flag-"+s.value),m(2),k(s.label)}}var Ee=(()=>{class l{groupedCities;selectedCity;constructor(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}code={basic:`<p-select [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true" class="w-full md:w-56">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-select>`,html:`<div class="card flex justify-center">
    <p-select [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true" class="w-full md:w-56">
            <ng-template let-group #group>
                <div class="flex items-center">
                    <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value"  style="width: 20px" />
                    <span>{{ group.label }}</span>
                </div>
            </ng-template>
    </p-select>
</div>`,typescript:`import { SelectItemGroup } from 'primeng/api';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
    selector: 'select-group-demo',
    templateUrl: './select-group-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule]
})
export class SelectGroupDemo {
    groupedCities: SelectItemGroup[];

    selectedCity: string | undefined;

    constructor() {
        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-group-demo"]],decls:8,vars:4,consts:[["group",""],[1,"card","flex","justify-center"],["placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","group"],["selector","select-group-demo",3,"code"],[1,"flex","items-center"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(n,i){if(n&1){let w=N();t(0,"app-docsectiontext")(1,"p"),e(2,"Options can be grouped when a nested data structures is provided."),o()(),t(3,"div",1)(4,"p-select",2),f("ngModelChange",function(x){return E(w),u(i.selectedCity,x)||(i.selectedCity=x),T(x)}),P(5,Ke,4,3,"ng-template",null,0,F),o()(),c(7,"app-code",3)}n&2&&(m(4),r("options",i.groupedCities),p("ngModel",i.selectedCity),r("group",!0),m(3),r("code",i.code))},dependencies:[I,b,g,h,y,v,C,S],encapsulation:2})}return l})();var Te=(()=>{class l{cities;selectedCity;code={basic:`<p-iftalabel class="w-full md:w-56">
    <p-select [(ngModel)]="selectedCity" inputId="dd-city" [options]="cities" optionLabel="name" class="w-full" />
    <label for="dd-city">City</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel class="w-full md:w-56">
        <p-select [(ngModel)]="selectedCity" inputId="dd-city" [options]="cities" optionLabel="name" class="w-full" />
        <label for="dd-city">City</label>
    </p-iftalabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-iftalabel-demo',
    templateUrl: './select-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule, IftaLabelModule]
})
export class SelectIftaLabelDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-iftalabel-demo"]],decls:12,vars:3,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"w-full","md:w-56"],["inputId","dd-city","optionLabel","name",1,"w-full",3,"ngModelChange","ngModel","options"],["for","dd-city"],["selector","select-iftalabel-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),t(3,"a",0),e(4,"IftaLabel"),o(),e(5," documentation for more information."),o()(),t(6,"div",1)(7,"p-iftalabel",2)(8,"p-select",3),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o(),t(9,"label",4),e(10,"City"),o()()(),c(11,"app-code",5)),n&2&&(m(8),p("ngModel",i.selectedCity),r("options",i.cities),m(3),r("code",i.code))},dependencies:[b,g,h,y,v,C,S,ve,Se,J,q],encapsulation:2})}return l})();var Ne=(()=>{class l{code={typescript:"import { SelectModule } from 'primeng/select';"};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,i){n&1&&c(0,"app-code",0),n&2&&r("code",i.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return l})();var Re=(()=>{class l{cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];selectedCity1;selectedCity2;value1=!0;value2=!0;code={basic:`<p-select [options]="cities" [(ngModel)]="selectedCity1" optionLabel="name" [showClear]="true" [invalid]="value1" placeholder="Select a City" class="w-full md:w-56" />
<p-select [options]="cities" [(ngModel)]="selectedCity2" optionLabel="name" [showClear]="true" [invalid]="value2" placeholder="Select a City" class="w-full md:w-56" variant="filled"/>`,html:`<div class="card flex justify-center gap-4">
    <p-select [options]="cities" [(ngModel)]="selectedCity1" optionLabel="name" [showClear]="true" [invalid]="value1" placeholder="Select a City" class="w-full md:w-56" />
    <p-select [options]="cities" [(ngModel)]="selectedCity2" optionLabel="name" [showClear]="true" [invalid]="value2" placeholder="Select a City" class="w-full md:w-56" variant="filled"/>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'select-invalid-demo',
    templateUrl: './select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectInvalidDemo {
    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    selectedCity1: City | undefined;

    selectedCity2: City | undefined;

    value1 = true;

    value2 = true;

}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-invalid-demo"]],decls:10,vars:9,consts:[[1,"card","flex","justify-center","gap-4"],["optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","showClear","invalid"],["optionLabel","name","placeholder","Select a City","variant","filled",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","showClear","invalid"],["selector","select-invalid-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The invalid state is applied using the "),t(3,"i"),e(4,"\u2060invalid"),o(),e(5," property to indicate failed validation, which can be integrated with Angular Forms."),o()(),t(6,"div",0)(7,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity1,a)||(i.selectedCity1=a),a}),o(),t(8,"p-select",2),f("ngModelChange",function(a){return u(i.selectedCity2,a)||(i.selectedCity2=a),a}),o()(),c(9,"app-code",3)),n&2&&(m(7),r("options",i.cities),p("ngModel",i.selectedCity1),r("showClear",!0)("invalid",i.value1),m(),r("options",i.cities),p("ngModel",i.selectedCity2),r("showClear",!0)("invalid",i.value2),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();var ke=(()=>{class l{items;selectedItem;loading=!1;loadLazyTimeout=null;options={delay:250,showLoader:!0,lazy:!0,onLazyLoad:this.onLazyLoad.bind(this)};constructor(){this.items=[];for(let s=0;s<1e4;s++)this.items.push({label:"Item "+s,value:"Item "+s})}onLazyLoad(s){this.loading=!0,this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{let{first:n,last:i}=s,w=[...this.items];for(let a=n;a<i;a++)w[a]={label:`Item #${a}`,value:a};this.items=w,this.loading=!1},Math.random()*1e3+250)}code={basic:'<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" [virtualScrollOptions]="options" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" [virtualScrollOptions]="options" class="w-full md:w-56" />
</div>`,typescript:`import { SelectItem } from 'primeng/api';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
    selector: 'select-lazy-virtualscroll-demo',
    templateUrl: './select-lazy-virtualscroll-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectLazyVirtualscrollDemo {
    items: SelectItem[];

    selectedItem: string | undefined;

    loading: boolean = false;

    loadLazyTimeout = null;

    options: ScrollerOptions = {
        delay: 250,
        showLoader: true,
        lazy: true,
        onLazyLoad: this.onLazyLoad.bind(this)
    };

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
    onLazyLoad(event) {
        this.loading = true;

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const items = [...this.items];

            for (let i = first; i < last; i++) {
                items[i] = { label: \`Item #\${i}\`, value: i };
            }

            this.items = items;
            this.loading = false;
        }, Math.random() * 1000 + 250);
    }

}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-lazy-virtualscroll-demo"]],decls:3,vars:6,consts:[[1,"card","flex","justify-center"],["placeholder","Select Item",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","virtualScroll","virtualScrollItemSize","virtualScrollOptions"],["selector","select-lazy-virtualscroll-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"p-select",1),f("ngModelChange",function(a){return u(i.selectedItem,a)||(i.selectedItem=a),a}),o()(),c(2,"app-code",2)),n&2&&(m(),r("options",i.items),p("ngModel",i.selectedItem),r("virtualScroll",!0)("virtualScrollItemSize",38)("virtualScrollOptions",i.options),m(),r("code",i.code))},dependencies:[g,h,y,v,C,S],encapsulation:2})}return l})();var Pe=(()=>{class l{cities;selectedCity;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-select [options]="cities" [(ngModel)]="selectedCity" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="cities" [(ngModel)]="selectedCity" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-loading-state-demo',
    templateUrl: './select-loading-state-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectLoadingStateDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-loading-state-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Loading...",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","loading"],["selector","select-loading-state-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Loading state can be used "),t(3,"i"),e(4,"loading"),o(),e(5," property."),o()(),t(6,"div",0)(7,"p-select",1),f("ngModelChange",function(a){return u(i.selectedCity,a)||(i.selectedCity=a),a}),o()(),c(8,"app-code",2)),n&2&&(m(7),r("options",i.cities),p("ngModel",i.selectedCity),r("loading",!0),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();function He(l,D){if(l&1&&(t(0,"div",3),c(1,"img",4),t(2,"div"),e(3),o()()),l&2){let s=D.$implicit;m(),R("mr-2 flag flag-"+s.code.toLowerCase()),r("alt",s.label),m(2),k(s.label)}}var Oe=(()=>{class l{selectedCity=null;groupedCities=[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}];docs=[{data:ee("Select"),key:"Select"}];static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-pt-viewer"]],decls:4,vars:5,consts:[["group",""],[3,"docs"],["optionLabel","label","optionGroupLabel","label","optionGroupChildren","items","placeholder","Select a City","styleClass","w-full md:w-56","checkmark","",3,"ngModelChange","ngModel","filter","options","showClear"],[1,"flex","items-center"],["src","/_ext/primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",2,"width","18px",3,"alt"]],template:function(n,i){if(n&1){let w=N();t(0,"app-docptviewer",1)(1,"p-select",2),f("ngModelChange",function(x){return E(w),u(i.selectedCity,x)||(i.selectedCity=x),T(x)}),P(2,He,4,4,"ng-template",null,0,F),o()()}n&2&&(r("docs",i.docs),m(),p("ngModel",i.selectedCity),r("filter",!0)("options",i.groupedCities)("showClear",!0))},dependencies:[I,he,C,S,h,y,v],encapsulation:2})}return l})();var Ae=(()=>{class l{docs=[{id:"pt.viewer",label:"Viewer",component:Oe},{id:"pt.doc.select",label:"Select PT Options",component:pe,data:ee("Select")}];static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,i){n&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Select Pass Through"),o()(),c(4,"app-docsection",2),o()),n&2&&(m(4),r("docs",i.docs))},dependencies:[I,ue],encapsulation:2})}return l})();function Ze(l,D){l&1&&(t(0,"p-message",4),e(1,"City is required."),o())}var We=(()=>{class l{fb;messageService=A(j);cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];exampleForm;formSubmitted=!1;constructor(s){this.fb=s,this.exampleForm=this.fb.group({city:["",le.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(s){let n=this.exampleForm.get(s);return n?.invalid&&(n.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <p-select formControlName="selectedCity" [options]="cities" [invalid]="isInvalid('city')" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
        @if (isInvalid('city')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-1">
            <p-select formControlName="selectedCity" [options]="cities" [invalid]="isInvalid('city')" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
            @if (isInvalid('city')) {
                <p-message severity="error" size="small" variant="simple">City is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Select } from 'primeng/select';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-reactive-forms-demo',
    templateUrl: './select-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, Select, Message]
})
export class SelectReactiveFormsDemo implements OnInit {
    messageService = inject(MessageService);

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    exampleForm: FormGroup | undefined;

    formSubmitted = false;

    constructor(private fb: FormBuilder) {
       this.exampleForm = this.fb.group({
          city: ['', Validators.required],
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
}`};static \u0275fac=function(n){return new(n||l)(te(me))};static \u0275cmp=d({type:l,selectors:[["reactive-forms-doc"]],decls:16,vars:5,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-full","sm:w-56",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","city","optionLabel","name","placeholder","Select a City",1,"w-full","md:w-56",3,"options","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","select-reactive-forms-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Select can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),o(),e(5," property is used to bind the component to a form control."),o()(),c(6,"p-toast"),t(7,"div",0)(8,"form",1),z("ngSubmit",function(){return i.onSubmit()}),t(9,"div",2),c(10,"p-select",3),B(11,Ze,2,0,"p-message",4),o(),t(12,"button",5)(13,"span",6),e(14,"Submit"),o()()()(),c(15,"app-code",7)),n&2&&(m(8),r("formGroup",i.exampleForm),m(2),r("options",i.cities)("invalid",i.isInvalid("city")),m(),W(i.isInvalid("city")?11:-1),m(4),r("code",i.code))},dependencies:[I,b,g,ce,G,y,U,ae,re,C,S,$,Z,X,Q,O,H,K],encapsulation:2})}return l})();var ze=(()=>{class l{value1;value2;value3;cities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-select [(ngModel)]="value1" [options]="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
<p-select [(ngModel)]="value2" [options]="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
<p-select [(ngModel)]="value3" [options]="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-select [(ngModel)]="value1" [options]="cities" optionLabel="name" size="small" placeholder="Small" class="w-full md:w-56" />
    <p-select [(ngModel)]="value2" [options]="cities" optionLabel="name" placeholder="Normal" class="w-full md:w-56" />
    <p-select [(ngModel)]="value3" [options]="cities" optionLabel="name" size="large" placeholder="Large" class="w-full md:w-56" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-size-demo',
    templateUrl: './select-size-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule]
})
export class SelectSizeDemo implements OnInit {
    value1: City | undefined;

    value2: City | undefined;

    value3: City | undefined;

    cities: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-size-demo"]],decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["optionLabel","name","size","small","placeholder","Small",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options"],["optionLabel","name","placeholder","Normal",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options"],["optionLabel","name","size","large","placeholder","Large",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options"],["selector","select-size-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Select provides "),t(3,"i"),e(4,"small"),o(),e(5," and "),t(6,"i"),e(7,"large"),o(),e(8," sizes as alternatives to the base."),o()(),t(9,"div",0)(10,"p-select",1),f("ngModelChange",function(a){return u(i.value1,a)||(i.value1=a),a}),o(),t(11,"p-select",2),f("ngModelChange",function(a){return u(i.value2,a)||(i.value2=a),a}),o(),t(12,"p-select",3),f("ngModelChange",function(a){return u(i.value3,a)||(i.value3=a),a}),o()(),c(13,"app-code",4)),n&2&&(m(10),p("ngModel",i.value1),r("options",i.cities),m(),p("ngModel",i.value2),r("options",i.cities),m(),p("ngModel",i.value3),r("options",i.cities),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();function $e(l,D){if(l&1&&(t(0,"div",9),c(1,"img",10),t(2,"div"),e(3),o()()),l&2){let s=Y().$implicit;m(),R("flag flag-"+s.code.toLowerCase()),m(2),k(s.name)}}function et(l,D){if(l&1&&P(0,$e,4,3,"div",8),l&2){let s=D.$implicit;r("ngIf",s)}}function tt(l,D){if(l&1&&(t(0,"div",9),c(1,"img",10),t(2,"div"),e(3),o()()),l&2){let s=D.$implicit;m(),R("flag flag-"+s.code.toLowerCase()),m(2),k(s.name)}}function ot(l,D){l&1&&c(0,"i",11)}function it(l,D){l&1&&(t(0,"div",12),e(1,"Available Countries"),o())}function lt(l,D){l&1&&(t(0,"div",13),c(1,"p-button",14),o())}var Ye=(()=>{class l{countries;selectedCountry;ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}code={basic:`<p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" placeholder="Select a country" class="w-full md:w-56">
    <ng-template #selectedItem let-selectedOption>
        <div class="flex items-center gap-2" *ngIf="selectedOption">
            <img
                src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + selectedOption.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img
                src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                [class]="'flag flag-' + country.code.toLowerCase()"
                style="width: 18px"
            />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #dropdownicon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium p-3">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="p-3">
            <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-select>`,html:`<div class="card flex justify-center">
    <p-select [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" placeholder="Select a country" class="w-full md:w-56">
        <ng-template #selectedItem let-selectedOption>
            <div class="flex items-center gap-2" *ngIf="selectedOption">
                <img
                    src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                    [class]="'flag flag-' + selectedOption.code.toLowerCase()"
                    style="width: 18px"
                />
                <div>{{ selectedOption.name }}</div>
            </div>
        </ng-template>
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img
                    src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                    [class]="'flag flag-' + country.code.toLowerCase()"
                    style="width: 18px"
                />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
        <ng-template #dropdownicon>
            <i class="pi pi-map"></i>
        </ng-template>
        <ng-template #header>
            <div class="font-medium p-3">Available Countries</div>
        </ng-template>
        <ng-template #footer>
            <div class="p-3">
                <p-button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
            </div>
        </ng-template>
    </p-select>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'select-group-demo',
    templateUrl: './select-group-demo.html',
    standalone: true,
    imports: [FormsModule, SelectModule, ButtonModule]
})
export class SelectTemplateDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: string | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-template-demo"]],decls:25,vars:3,consts:[["selectedItem",""],["item",""],["dropdownicon",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select a country",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel"],["selector","select-template-demo",3,"code"],["class","flex items-center gap-2",4,"ngIf"],[1,"flex","items-center","gap-2"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"pi","pi-map"],[1,"font-medium","p-3"],[1,"p-3"],["label","Add New","fluid","","severity","secondary","text","","size","small","icon","pi pi-plus"]],template:function(n,i){if(n&1){let w=N();t(0,"app-docsectiontext")(1,"p"),e(2," Both the selected option and the options list can be templated to provide customizated representation. Use "),t(3,"i"),e(4,"selectedItem"),o(),e(5," template to customize the selected label display and the "),t(6,"i"),e(7,"item"),o(),e(8," template to change the content of the options in the select panel. In addition when grouping is enabled, "),t(9,"i"),e(10,"group"),o(),e(11," template is available to customize the option groups. All templates get the option instance as the default local template variable. "),o()(),t(12,"div",5)(13,"p-select",6),f("ngModelChange",function(x){return E(w),u(i.selectedCountry,x)||(i.selectedCountry=x),T(x)}),P(14,et,1,1,"ng-template",null,0,F)(16,tt,4,3,"ng-template",null,1,F)(18,ot,1,0,"ng-template",null,2,F)(20,it,2,0,"ng-template",null,3,F)(22,lt,2,0,"ng-template",null,4,F),o()(),c(24,"app-code",7)}n&2&&(m(13),r("options",i.countries),p("ngModel",i.selectedCountry),m(11),r("code",i.code))},dependencies:[I,ie,b,g,h,y,v,C,S,O,de],encapsulation:2})}return l})();function nt(l,D){l&1&&(t(0,"p-message",6),e(1,"City is required."),o())}var Ve=(()=>{class l{messageService=A(j);cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];selectedCity;onSubmit(s){s.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),s.resetForm())}code={basic:`<form #exampleForm (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
    <div class="flex flex-col gap-1">
        <p-select #city="ngModel" [(ngModel)]="selectedCity" [options]="cities" [invalid]="city.invalid && (city.touched || exampleForm.submitted)" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" required />
        @if (city.invalid && (city.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-1">
            <p-select #city="ngModel" [(ngModel)]="selectedCity" [options]="cities" [invalid]="city.invalid && (city.touched || exampleForm.submitted)" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" required />
            @if (city.invalid && (city.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">City is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'select-template-driven-forms-demo',
    templateUrl: './select-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, Select, Message, Toast]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    selectedCity: City | undefined;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["template-driven-forms-doc"]],decls:13,vars:5,consts:[["exampleForm","ngForm"],["city","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-full","sm:w-56",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["optionLabel","name","name","city","placeholder","Select a City","required","",1,"w-full","md:w-56",3,"ngModelChange","ngModel","options","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","select-template-driven-forms-demo",3,"code"]],template:function(n,i){if(n&1){let w=N();c(0,"app-docsectiontext")(1,"p-toast"),t(2,"div",2)(3,"form",3,0),z("ngSubmit",function(){E(w);let x=V(4);return T(i.onSubmit(x))}),t(5,"div",4)(6,"p-select",5,1),f("ngModelChange",function(x){return E(w),u(i.selectedCity,x)||(i.selectedCity=x),T(x)}),o(),B(8,nt,2,0,"p-message",6),o(),t(9,"button",7)(10,"span",8),e(11,"Submit"),o()()()(),c(12,"app-code",9)}if(n&2){let w=V(4),a=V(7);m(6),p("ngModel",i.selectedCity),r("options",i.cities)("invalid",a.invalid&&(a.touched||w.submitted)),m(2),W(a.invalid&&(a.touched||w.submitted)?8:-1),m(4),r("code",i.code)}},dependencies:[I,b,g,h,G,y,U,se,v,ne,C,S,$,Z,X,Q,O,H,K],encapsulation:2})}return l})();var je=(()=>{class l{items;selectedItem;constructor(){this.items=[];for(let s=0;s<1e4;s++)this.items.push({label:"Item "+s,value:"Item "+s})}code={basic:'<p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" class="w-full md:w-56" />',html:`<div class="card flex justify-center">
    <p-select [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" class="w-full md:w-56" />
</div>`,typescript:`import { SelectItem } from 'primeng/api';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
    selector: 'select-virtualscroll-demo',
    templateUrl: './select-virtualscroll-demo.html',
    standalone: true,
    imports: [FormsModule, Select]
})
export class SelectVirtualscrollDemo {
    items: SelectItem[];

    selectedItem: string | undefined;

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["select-virtualscroll-demo"]],decls:12,vars:5,consts:[[1,"card","flex","justify-center"],["placeholder","Select Item",1,"w-full","md:w-56",3,"ngModelChange","options","ngModel","virtualScroll","virtualScrollItemSize"],["selector","select-virtualscroll-demo",3,"code"]],template:function(n,i){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),o(),e(5," property to true and defining "),t(6,"i"),e(7,"virtualScrollItemSize"),o(),e(8," to specify the height of an item. "),o()(),t(9,"div",0)(10,"p-select",1),f("ngModelChange",function(a){return u(i.selectedItem,a)||(i.selectedItem=a),a}),o()(),c(11,"app-code",2)),n&2&&(m(10),r("options",i.items),p("ngModel",i.selectedItem),r("virtualScroll",!0)("virtualScrollItemSize",38),m(),r("code",i.code))},dependencies:[b,g,h,y,v,C,S],encapsulation:2})}return l})();var at=()=>["Select"],Ue=(()=>{class l{ptComponent=Ae;docs=[{id:"import",label:"Import",component:Ne},{id:"basic",label:"Basic",component:be},{id:"checkmark",label:"Checkmark",component:we},{id:"editable",label:"Editable",component:Le},{id:"group",label:"Group",component:Ee},{id:"template",label:"Template",component:Ye},{id:"filter",label:"Filter",component:De},{id:"loadingstate",label:"Loading State",component:Pe},{id:"virtualscroll",label:"Virtual Scroll",component:je},{id:"lazyvirtualscroll",label:"Lazy Virtual Scroll",component:ke},{id:"filled",label:"Filled",component:_e},{id:"floatlabel",label:"Float Label",component:Ie},{id:"iftalabel",label:"Ifta Label",component:Te},{id:"clearicon",label:"Clear Icon",component:Me},{id:"sizes",label:"Sizes",component:ze},{id:"fluid",label:"Fluid",component:Fe},{id:"disabled",label:"Disabled",component:xe},{id:"invalid",label:"Invalid",component:Re},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Ve},{id:"reactive",label:"Reactive Forms",component:We}]},{id:"accessibility",label:"Accessibility",component:Ce}];static \u0275fac=function(n){return new(n||l)};static \u0275cmp=d({type:l,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Select Component","header","Select","description","Select is used to choose an item from a collection of options.","themeDocs","select",3,"docs","apiDocs","ptDocs"]],template:function(n,i){n&1&&c(0,"app-doc",0),n&2&&r("docs",i.docs)("apiDocs",oe(3,at))("ptDocs",i.ptComponent)},dependencies:[fe],styles:[".country-item-value[_ngcontent-%COMP%]   img.flag[_ngcontent-%COMP%]{width:17px}p-skeleton[_ngcontent-%COMP%]{width:100%}"]})}return l})();var rl=[{path:"",component:Ue}];export{rl as default};
