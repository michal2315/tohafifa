import{a as y,b as h}from"./chunk-MOJPOTLE.js";import"./chunk-APBUBGZC.js";import"./chunk-RTRG5JID.js";import{a as xe,b as we}from"./chunk-ZYT4LGUE.js";import{a as Me,b as Ce}from"./chunk-2SUSAFZL.js";import{a as le,b as Le}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import"./chunk-T3D2SKKJ.js";import"./chunk-VGTHJBIV.js";import{a as $,b as ee}from"./chunk-N3SKU25W.js";import{a as te,b as ie}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as ce,f as b,g as H,h as de,i as C,j as J,k as pe,l as ue,p as fe,t as ge,u as x,v as Se}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as he}from"./chunk-FKOOMXTU.js";import{a as g,b as S}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ye}from"./chunk-XCUGNKAG.js";import{a as v,b as ve}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as Q,h as Y}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as X,fa as Z,ga as be,ha as V}from"./chunk-MCW4FHXZ.js";import{za as W}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as se,q as me,w as R}from"./chunk-D2XKNHFS.js";import{$a as oe,Ab as U,Eb as a,Fb as t,Gb as i,Gc as N,Hb as c,Ob as A,Qa as s,Sb as k,X as j,Yb as ne,Zb as ae,_b as re,aa as F,ba as T,cc as G,gb as d,gc as B,hc as e,ic as O,mb as P,mc as p,nc as u,oc as f,rc as K,sc as q,zb as z}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var _e=(()=>{class o{code={basic:`<span id="dd1">Options</span>
<p-multiselect ariaLabelledBy="dd1"/>

<p-multiselect ariaLabel="Options"/>`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["multi-select-accessibility-doc"]],decls:268,vars:4,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,l){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Value to describe the component can either be provided with "),t(6,"i"),e(7,"ariaLabelledBy"),i(),e(8," or "),t(9,"i"),e(10,"ariaLabel"),i(),e(11," props. The multiselect component has a "),t(12,"i"),e(13,"combobox"),i(),e(14," role in addition to "),t(15,"i"),e(16,"aria-haspopup"),i(),e(17," and "),t(18,"i"),e(19,"aria-expanded"),i(),e(20," attributes. The relation between the combobox and the popup is created with "),t(21,"i"),e(22,"aria-controls"),i(),e(23," attribute that refers to the id of the popup listbox. "),i(),t(24,"p"),e(25,"The popup listbox uses "),t(26,"i"),e(27,"listbox"),i(),e(28," as the role with "),t(29,"i"),e(30,"aria-multiselectable"),i(),e(31," enabled. Each list item has an "),t(32,"i"),e(33,"option"),i(),e(34," role along with "),t(35,"i"),e(36,"aria-label"),i(),e(37,", "),t(38,"i"),e(39,"aria-selected"),i(),e(40," and "),t(41,"i"),e(42,"aria-disabled"),i(),e(43," attributes."),i(),t(44,"p"),e(45," Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the "),t(46,"i"),e(47,"selectAll"),i(),e(48," and "),t(49,"i"),e(50,"unselectAll"),i(),e(51," keys of the "),t(52,"i"),e(53,"aria"),i(),e(54," property from the "),t(55,"a",0),e(56,"locale"),i(),e(57," API. "),i(),t(58,"p"),e(59,"If filtering is enabled, "),t(60,"i"),e(61,"filterInputProps"),i(),e(62," can be defined to give "),t(63,"i"),e(64,"aria-*"),i(),e(65," props to the input element."),i(),t(66,"p"),e(67,"Close button uses "),t(68,"i"),e(69,"close"),i(),e(70," key of the "),t(71,"i"),e(72,"aria"),i(),e(73," property from the "),t(74,"a",0),e(75,"locale"),i(),e(76," API as the "),t(77,"i"),e(78,"aria-label"),i(),e(79," by default, this can be overriden with the "),t(80,"i"),e(81,"closeButtonProps"),i(),e(82,"."),i()(),c(83,"app-code",1),t(84,"h3"),e(85,"Closed State Keyboard Support"),i(),t(86,"div",2)(87,"table",3)(88,"thead")(89,"tr")(90,"th"),e(91,"Key"),i(),t(92,"th"),e(93,"Function"),i()()(),t(94,"tbody")(95,"tr")(96,"td")(97,"i"),e(98,"tab"),i()(),t(99,"td"),e(100,"Moves focus to the multiselect element."),i()(),t(101,"tr")(102,"td")(103,"i"),e(104,"space"),i()(),t(105,"td"),e(106,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(107,"tr")(108,"td")(109,"i"),e(110,"down arrow"),i()(),t(111,"td"),e(112,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(113,"tr")(114,"td")(115,"i"),e(116,"up arrow"),i()(),t(117,"td"),e(118,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()()()()(),t(119,"h3"),e(120,"Popup Keyboard Support"),i(),t(121,"div",2)(122,"table",3)(123,"thead")(124,"tr")(125,"th"),e(126,"Key"),i(),t(127,"th"),e(128,"Function"),i()()(),t(129,"tbody")(130,"tr")(131,"td")(132,"i"),e(133,"tab"),i()(),t(134,"td"),e(135,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),i()(),t(136,"tr")(137,"td")(138,"i"),e(139,"shift"),i(),e(140," + "),t(141,"i"),e(142,"tab"),i()(),t(143,"td"),e(144,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),i()(),t(145,"tr")(146,"td")(147,"i"),e(148,"enter"),i()(),t(149,"td"),e(150,"Toggles the selection state of the focused option."),i()(),t(151,"tr")(152,"td")(153,"i"),e(154,"space"),i()(),t(155,"td"),e(156,"Toggles the selection state of the focused option."),i()(),t(157,"tr")(158,"td")(159,"i"),e(160,"escape"),i()(),t(161,"td"),e(162,"Closes the popup, moves focus to the multiselect element."),i()(),t(163,"tr")(164,"td")(165,"i"),e(166,"down arrow"),i()(),t(167,"td"),e(168,"Moves focus to the next option, if there is none then visual focus does not change."),i()(),t(169,"tr")(170,"td")(171,"i"),e(172,"up arrow"),i()(),t(173,"td"),e(174,"Moves focus to the previous option, if there is none then visual focus does not change."),i()(),t(175,"tr")(176,"td")(177,"i"),e(178,"home"),i()(),t(179,"td"),e(180,"Moves focus to the first option."),i()(),t(181,"tr")(182,"td")(183,"i"),e(184,"end"),i()(),t(185,"td"),e(186,"Moves focus to the last option."),i()(),t(187,"tr")(188,"td")(189,"i"),e(190,"any printable character"),i()(),t(191,"td"),e(192,"Moves focus to the option whose label starts with the characters being typed if dropdown is not editable."),i()()()()(),t(193,"h3"),e(194,"Toggle All Checkbox Keyboard Support"),i(),t(195,"div",2)(196,"table",3)(197,"thead")(198,"tr")(199,"th"),e(200,"Key"),i(),t(201,"th"),e(202,"Function"),i()()(),t(203,"tbody")(204,"tr")(205,"td")(206,"i"),e(207,"space"),i()(),t(208,"td"),e(209,"Toggles the checked state."),i()(),t(210,"tr")(211,"td")(212,"i"),e(213,"escape"),i()(),t(214,"td"),e(215,"Closes the popup."),i()()()()(),t(216,"h3"),e(217,"Filter Input Keyboard Support"),i(),t(218,"div",2)(219,"table",3)(220,"thead")(221,"tr")(222,"th"),e(223,"Key"),i(),t(224,"th"),e(225,"Function"),i()()(),t(226,"tbody")(227,"tr")(228,"td")(229,"i"),e(230,"enter"),i()(),t(231,"td"),e(232,"Closes the popup and moves focus to the multiselect element."),i()(),t(233,"tr")(234,"td")(235,"i"),e(236,"escape"),i()(),t(237,"td"),e(238,"Closes the popup and moves focus to the multiselect element."),i()()()()(),t(239,"h3"),e(240,"Close Button Keyboard Support"),i(),t(241,"div",2)(242,"table",3)(243,"thead")(244,"tr")(245,"th"),e(246,"Key"),i(),t(247,"th"),e(248,"Function"),i()()(),t(249,"tbody")(250,"tr")(251,"td")(252,"i"),e(253,"enter"),i()(),t(254,"td"),e(255,"Closes the popup and moves focus to the multiselect element."),i()(),t(256,"tr")(257,"td")(258,"i"),e(259,"space"),i()(),t(260,"td"),e(261,"Closes the popup and moves focus to the multiselect element."),i()(),t(262,"tr")(263,"td")(264,"i"),e(265,"escape"),i()(),t(266,"td"),e(267,"Closes the popup and moves focus to the multiselect element."),i()()()()()()),n&2&&(s(83),a("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[Y,S,g,v],encapsulation:2})}return o})();var De=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-basic-demo',
    templateUrl: './multi-select-basic-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectBasicDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["basic-doc"]],decls:42,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","maxSelectedLabels"],["selector","multi-select-basic-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," MultiSelect is used as a controlled component with "),t(3,"i"),e(4,"ngModel"),i(),e(5," property along with an "),t(6,"i"),e(7,"options"),i(),e(8," collection. Label and value of an option are defined with the "),t(9,"i"),e(10,"optionLabel"),i(),e(11," and "),t(12,"i"),e(13,"optionValue"),i(),e(14," properties respectively. Default property name for the "),t(15,"i"),e(16,"optionLabel"),i(),e(17," is "),t(18,"i"),e(19,"label"),i(),e(20," and "),t(21,"i"),e(22,"value"),i(),e(23," for the "),t(24,"i"),e(25,"optionValue"),i(),e(26,". If "),t(27,"i"),e(28,"optionValue"),i(),e(29," is omitted and the object has no "),t(30,"i"),e(31,"value"),i(),e(32," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no "),t(33,"i"),e(34,"optionLabel"),i(),e(35," and "),t(36,"i"),e(37,"optionValue"),i(),e(38," would be necessary. "),i()(),t(39,"div",0)(40,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(41,"app-code",2)),n&2&&(s(40),a("options",l.cities),p("ngModel",l.selectedCities),a("maxSelectedLabels",3),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Ee=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" placeholder="Select Cities" optionLabel="name" display="chip" class="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" placeholder="Select Cities" optionLabel="name" display="chip" class="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-chips-demo',
    templateUrl: './multi-select-chips-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectChipsDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["chips-doc"]],decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["placeholder","Select Cities","optionLabel","name","display","chip",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel"],["selector","multi-select-chips-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Selected values are displayed as a comma separated list by default, setting "),t(3,"i"),e(4,"display"),i(),e(5," as "),t(6,"i"),e(7,"chip"),i(),e(8," displays them as chips."),i()(),t(9,"div",0)(10,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(11,"app-code",2)),n&2&&(s(10),a("options",l.cities),p("ngModel",l.selectedCities),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Ie=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [disabled]="true" optionLabel="name" class="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" [disabled]="true" optionLabel="name" class="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-disabled-demo',
    templateUrl: './multi-select-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectDisabledDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["disabled-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","disabled"],["selector","multi-select-disabled-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),i(),e(5," is present, the element cannot be edited and focused."),i()(),t(6,"div",0)(7,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(8,"app-code",2)),n&2&&(s(7),a("options",l.cities),p("ngModel",l.selectedCities),a("disabled",!0),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Fe=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" variant="filled" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" variant="filled" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-filled-demo',
    templateUrl: './multi-select-filled-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectFilledDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["filled-doc"]],decls:15,vars:4,consts:[[1,"card","flex","justify-center"],["variant","filled","optionLabel","name","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","maxSelectedLabels"],["selector","multi-select-filled-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),t(3,"i"),e(4,"variant"),i(),e(5," property as "),t(6,"i"),e(7,"filled"),i(),e(8," to display the component with a higher visual emphasis than the default "),t(9,"i"),e(10,"outlined"),i(),e(11," style."),i()(),t(12,"div",0)(13,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(14,"app-code",2)),n&2&&(s(13),a("options",l.cities),p("ngModel",l.selectedCities),a("maxSelectedLabels",3),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Te=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-filter-demo',
    templateUrl: './multi-select-filter-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectFilterDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["filter-doc"]],decls:9,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","filter","maxSelectedLabels"],["selector","multi-select-filter-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect provides built-in filtering that is enabled by adding the "),t(3,"i"),e(4,"filter"),i(),e(5," property."),i()(),t(6,"div",0)(7,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(8,"app-code",2)),n&2&&(s(7),a("options",l.cities),p("ngModel",l.selectedCities),a("filter",!0)("maxSelectedLabels",3),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Ne=(()=>{class o{cities;value1;value2;value3;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-floatlabel class="w-full md:w-80">
    <p-multiselect id="over_label" [(ngModel)]="value1" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="in">
    <p-multiselect id="in_label" [(ngModel)]="value2" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="on">
    <p-multiselect id="on_label" [(ngModel)]="value3" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel class="w-full md:w-80">
        <p-multiselect id="over_label" [(ngModel)]="value1" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="in">
        <p-multiselect id="in_label" [(ngModel)]="value2" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="on">
        <p-multiselect id="on_label" [(ngModel)]="value3" [options]="cities" optionLabel="name" filter [maxSelectedLabels]="3" class="w-full" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabel } from 'primeng/floatlabel';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-floatlabel-demo',
    templateUrl: './multi-select-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule, FloatLabel]
})
export class MultiSelectFloatlabelDemo implements OnInit {
    cities!: City[];

    value1!: City[];

    value2!: City[];

    value3!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["floatlabel-doc"]],decls:20,vars:10,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"w-full","md:w-80"],["id","over_label","optionLabel","name","filter","",1,"w-full",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["for","over_label"],["variant","in",1,"w-full","md:w-80"],["id","in_label","optionLabel","name","filter","",1,"w-full",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["for","in_label"],["variant","on",1,"w-full","md:w-80"],["id","on_label","optionLabel","name","filter","",1,"w-full",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["for","on_label"],["selector","multi-select-floatlabel-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),t(3,"a",0),e(4,"FloatLabel"),i(),e(5," documentation for more information. "),i()(),t(6,"div",1)(7,"p-floatlabel",2)(8,"p-multiselect",3),f("ngModelChange",function(r){return u(l.value1,r)||(l.value1=r),r}),i(),t(9,"label",4),e(10,"Over Label"),i()(),t(11,"p-floatlabel",5)(12,"p-multiselect",6),f("ngModelChange",function(r){return u(l.value2,r)||(l.value2=r),r}),i(),t(13,"label",7),e(14,"In Label"),i()(),t(15,"p-floatlabel",8)(16,"p-multiselect",9),f("ngModelChange",function(r){return u(l.value3,r)||(l.value3=r),r}),i(),t(17,"label",10),e(18,"On Label"),i()()(),c(19,"app-code",11)),n&2&&(s(8),p("ngModel",l.value1),a("options",l.cities)("maxSelectedLabels",3),s(4),p("ngModel",l.value2),a("options",l.cities)("maxSelectedLabels",3),s(4),p("ngModel",l.value3),a("options",l.cities)("maxSelectedLabels",3),s(3),a("code",l.code))},dependencies:[x,b,C,Y,Q,h,y,Ce,Me,S,g,v],encapsulation:2})}return o})();function Qe(o,I){if(o&1&&(t(0,"div",4),c(1,"img",5),t(2,"span"),e(3),i()()),o&2){let m=I.$implicit;s(),B("mr-2 flag flag-"+m.value),s(2),O(m.label)}}var Ae=(()=>{class o{groupedCities;selectedCities;constructor(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}code={basic:`<p-multiselect [options]="groupedCities" [group]="true" [(ngModel)]="selectedCities" placeholder="Select Cities" scrollHeight="250px" display="chip" class="w-full md:w-80">
    <ng-template let-group #group>
        <div class="flex items-center">
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-multiselect>`,html:`<div class="card flex justify-center">
    <p-multiselect [options]="groupedCities" [group]="true" [(ngModel)]="selectedCities" placeholder="Select Cities" scrollHeight="250px" display="chip" class="w-full md:w-80">
        <ng-template let-group #group>
            <div class="flex items-center">
                <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-multiselect>
</div>`,typescript:`import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-group-demo',
    templateUrl: './multi-select-group-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectGroupDemo {
    groupedCities!: SelectItemGroup[];

    selectedCities!: City[];

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
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["group-doc"]],decls:8,vars:4,consts:[["group",""],[1,"card","flex","justify-center"],["placeholder","Select Cities","scrollHeight","250px","display","chip",1,"w-full","md:w-80",3,"ngModelChange","options","group","ngModel"],["selector","multi-select-group-demo",3,"code"],[1,"flex","items-center"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(n,l){if(n&1){let M=A();t(0,"app-docsectiontext")(1,"p"),e(2,"Options can be grouped when a nested data structures is provided."),i()(),t(3,"div",1)(4,"p-multiselect",2),f("ngModelChange",function(w){return F(M),u(l.selectedCities,w)||(l.selectedCities=w),T(w)}),P(5,Qe,4,3,"ng-template",null,0,N),i()(),c(7,"app-code",3)}n&2&&(s(4),a("options",l.groupedCities)("group",!0),p("ngModel",l.selectedCities),s(3),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Re=(()=>{class o{cities;selectedCities;code={basic:`<p-iftalabel class="w-full md:w-80">
    <p-multiselect [(ngModel)]="selectedCities" inputId="ms_cities" [options]="cities" optionLabel="name" [filter]="true" [maxSelectedLabels]="3" class="w-full" />
    <label for="ms_cities">Cities</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel class="w-full md:w-80">
        <p-multiselect [(ngModel)]="selectedCities" inputId="ms_cities" [options]="cities" optionLabel="name" [filter]="true" [maxSelectedLabels]="3" class="w-full" />
        <label for="ms_cities">Cities</label>
    </p-iftalabel>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { IftaLabelModule } from 'primeng/iftalabel';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-iftalabel-demo',
    templateUrl: './multi-select-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule, IftaLabelModule]
})
export class MultiSelectIftalabelDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
    }
}`};ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["iftalabel-doc"]],decls:12,vars:5,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"w-full","md:w-80"],["inputId","ms_cities","optionLabel","name",1,"w-full",3,"ngModelChange","ngModel","options","filter","maxSelectedLabels"],["for","ms_cities"],["selector","multi-select-iftalabel-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),t(3,"a",0),e(4,"IftaLabel"),i(),e(5," documentation for more information."),i()(),t(6,"div",1)(7,"p-iftalabel",2)(8,"p-multiselect",3),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i(),t(9,"label",4),e(10,"Cities"),i()()(),c(11,"app-code",5)),n&2&&(s(8),p("ngModel",l.selectedCities),a("options",l.cities)("filter",!0)("maxSelectedLabels",3),s(3),a("code",l.code))},dependencies:[x,b,C,Y,Q,h,y,we,xe,S,g,v],encapsulation:2})}return o})();var Pe=(()=>{class o{code={typescript:"import { MultiSelectModule } from 'primeng/multiselect';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["multi-select-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&c(0,"app-code",0),n&2&&a("code",l.code)("hideToggleCode",!0)},dependencies:[S,g],encapsulation:2})}return o})();var ke=(()=>{class o{value1=!0;value2=!0;cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];selectedCities1;selectedCities2;code={basic:`<p-multiselect [options]="cities" [(ngModel)]="selectedCities1" [invalid]="value1" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
<p-multiselect [options]="cities" [(ngModel)]="selectedCities2" [invalid]="value2" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" variant="filled" />`,html:`<div class="card flex justify-center gap-4">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities1" [invalid]="value1" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" />
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities2" [invalid]="value2" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-invalid-demo',
    templateUrl: './multi-select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectInvalidDemo {
    value1: boolean = true;

    value2: boolean = true;

    cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    selectedCities1!: City[];

    selectedCities2!: City[];
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["invalid-doc"]],decls:10,vars:9,consts:[[1,"card","flex","justify-center","gap-4"],["optionLabel","name","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","invalid","maxSelectedLabels"],["optionLabel","name","placeholder","Select Cities","variant","filled",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","invalid","maxSelectedLabels"],["selector","multi-select-invalid-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The invalid state is applied using the "),t(3,"i"),e(4,"\u2060invalid"),i(),e(5," property to indicate failed validation, which can be integrated with Angular Forms."),i()(),t(6,"div",0)(7,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities1,r)||(l.selectedCities1=r),r}),i(),t(8,"p-multiselect",2),f("ngModelChange",function(r){return u(l.selectedCities2,r)||(l.selectedCities2=r),r}),i()(),c(9,"app-code",3)),n&2&&(s(7),a("options",l.cities),p("ngModel",l.selectedCities1),a("invalid",l.value1)("maxSelectedLabels",3),s(),a("options",l.cities),p("ngModel",l.selectedCities2),a("invalid",l.value2)("maxSelectedLabels",3),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Be=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-80" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" [loading]="true" optionLabel="name" placeholder="Loading..." class="w-full md:w-80" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-loading-state-demo',
    templateUrl: './multi-select-loading-state-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectLoadingStateDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["loading-state-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Loading...",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","loading"],["selector","multi-select-loading-state-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Loading state can be used "),t(3,"i"),e(4,"loading"),i(),e(5," property."),i()(),t(6,"div",0)(7,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(8,"app-code",2)),n&2&&(s(7),a("options",l.cities),p("ngModel",l.selectedCities),a("loading",!0),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();function $e(o,I){o&1&&(t(0,"p-message",4),e(1,"City is required."),i())}var We=(()=>{class o{fb;messageService=j(W);cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];exampleForm;formSubmitted=!1;constructor(m){this.fb=m,this.exampleForm=this.fb.group({city:["",ce.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(m){let n=this.exampleForm.get(m);return n?.invalid&&(n.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex justify-center flex-col gap-4 w-full md:w-80">
    <div class="flex flex-col gap-1">
        <p-multiselect [options]="cities" formControlName="city" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" [fluid]="true" [invalid]="isInvalid('city')" />
        @if (isInvalid('city')) {
            <p-message severity="error" size="small" variant="simple">City is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex justify-center flex-col gap-4 w-full md:w-80">
        <div class="flex flex-col gap-1">
            <p-multiselect [options]="cities" formControlName="city" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" [fluid]="true" [invalid]="isInvalid('city')" />
            @if (isInvalid('city')) {
                <p-message severity="error" size="small" variant="simple">City is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import {Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/message';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-reactive-forms-demo',
    templateUrl: './multi-select-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, MultiSelectModule, Message, Button, Toast]
})
export class MultiSelectReactiveFormsDemo implements OnInit {
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
            city: ['', Validators.required]
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
}`};static \u0275fac=function(n){return new(n||o)(oe(ge))};static \u0275cmp=d({type:o,selectors:[["reactive-forms-doc"]],features:[K([W])],decls:16,vars:7,consts:[[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4","w-full","md:w-80",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","city","optionLabel","name","placeholder","Select Cities",3,"options","maxSelectedLabels","fluid","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","multi-select-reactive-forms-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),c(6,"p-toast"),t(7,"div",0)(8,"form",1),k("ngSubmit",function(){return l.onSubmit()}),t(9,"div",2),c(10,"p-multiselect",3),z(11,$e,2,0,"p-message",4),i(),t(12,"button",5)(13,"span",6),e(14,"Submit"),i()()()(),c(15,"app-code",7)),n&2&&(s(8),a("formGroup",l.exampleForm),s(2),a("options",l.cities)("maxSelectedLabels",3)("fluid",!0)("invalid",l.isInvalid("city")),s(),U(l.isInvalid("city")?11:-1),s(4),a("code",l.code))},dependencies:[Se,J,b,H,pe,ue,h,y,V,Z,X,ie,te,ee,$,S,g,v,R],encapsulation:2})}return o})();var Ye=(()=>{class o{cities;value1;value2;value3;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:`<p-multiselect [(ngModel)]="value1" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" size="small" placeholder="Small" />
<p-multiselect [(ngModel)]="value2" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" placeholder="Normal" />
<p-multiselect [(ngModel)]="value3" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" size="large" placeholder="Large" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-multiselect [(ngModel)]="value1" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" size="small" placeholder="Small" />
    <p-multiselect [(ngModel)]="value2" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" placeholder="Normal" />
    <p-multiselect [(ngModel)]="value3" [options]="cities" optionLabel="name" [maxSelectedLabels]="3" class="w-full md:w-80" size="large" placeholder="Large" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-sizes-demo',
    templateUrl: './multi-select-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectSizesDemo implements OnInit {

    cities!: City[];

    value1: any[];

    value2: any[];

    value3: any[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["sizes-doc"]],decls:14,vars:10,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["optionLabel","name","size","small","placeholder","Small",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["optionLabel","name","placeholder","Normal",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["optionLabel","name","size","large","placeholder","Large",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","maxSelectedLabels"],["selector","multi-select-sizes-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect provides "),t(3,"i"),e(4,"small"),i(),e(5," and "),t(6,"i"),e(7,"large"),i(),e(8," sizes as alternatives to the base."),i()(),t(9,"div",0)(10,"p-multiselect",1),f("ngModelChange",function(r){return u(l.value1,r)||(l.value1=r),r}),i(),t(11,"p-multiselect",2),f("ngModelChange",function(r){return u(l.value2,r)||(l.value2=r),r}),i(),t(12,"p-multiselect",3),f("ngModelChange",function(r){return u(l.value3,r)||(l.value3=r),r}),i()(),c(13,"app-code",4)),n&2&&(s(10),p("ngModel",l.value1),a("options",l.cities)("maxSelectedLabels",3),s(),p("ngModel",l.value2),a("options",l.cities)("maxSelectedLabels",3),s(),p("ngModel",l.value3),a("options",l.cities)("maxSelectedLabels",3),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();function et(o,I){if(o&1&&(t(0,"div",8),c(1,"img",9),t(2,"div"),e(3),i()()),o&2){let m=I.$implicit;s(),B("flag flag-"+m.code.toLowerCase()),s(2),O(m.name)}}function tt(o,I){o&1&&c(0,"i",10)}function it(o,I){o&1&&c(0,"i",11)}function lt(o,I){o&1&&(t(0,"div",12),e(1,"Available Countries"),i())}function ot(o,I){o&1&&(t(0,"div",13),c(1,"p-button",14)(2,"p-button",15),i())}var Ve=(()=>{class o{countries;selectedCountries;ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}code={basic:`<p-multiselect [options]="countries" [(ngModel)]="selectedCountries" placeholder="Select Countries" optionLabel="name" class="w-full md:w-80" display="chip">
    <ng-template let-country #item>
        <div class="flex items-center gap-2">
            <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
    <ng-template #dropdownicon>
        <i class="pi pi-map"></i>
    </ng-template>
    <ng-template #filtericon>
        <i class="pi pi-map-marker"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </ng-template>
    <ng-template #footer>
        <div class="p-3 flex justify-between">
            <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
            <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-times" />
        </div>
    </ng-template>
</p-multiselect>`,html:`<div class="card flex justify-center">
    <p-multiselect [options]="countries" [(ngModel)]="selectedCountries" placeholder="Select Countries" optionLabel="name" class="w-full md:w-80" display="chip">
        <ng-template let-country #item>
            <div class="flex items-center gap-2">
                <img src="/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
        <ng-template #dropdownicon>
            <i class="pi pi-map"></i>
        </ng-template>
        <ng-template #filtericon>
            <i class="pi pi-map-marker"></i>
        </ng-template>
        <ng-template #header>
            <div class="font-medium px-3 py-2">Available Countries</div>
        </ng-template>
        <ng-template #footer>
            <div class="p-3 flex justify-between">
                <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
                <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-times" />
            </div>
        </ng-template>
    </p-multiselect>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'multi-select-template-demo',
    templateUrl: './multi-select-template-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule, ButtonModule]
})
export class MultiSelectTemplateDemo implements OnInit {
    countries!: Country[];

    selectedCountries!: Country[];

    constructor() {
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
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["template-doc"]],decls:22,vars:3,consts:[["item",""],["dropdownicon",""],["filtericon",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["placeholder","Select Countries","optionLabel","name","display","chip",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel"],["selector","multi-select-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"pi","pi-map"],[1,"pi","pi-map-marker"],[1,"font-medium","px-3","py-2"],[1,"p-3","flex","justify-between"],["label","Add New","severity","secondary","text","","size","small","icon","pi pi-plus"],["label","Remove All","severity","danger","text","","size","small","icon","pi pi-times"]],template:function(n,l){if(n&1){let M=A();t(0,"app-docsectiontext")(1,"p"),e(2,"Available options and the selected options support customization with "),t(3,"i"),e(4,"item"),i(),e(5," and "),t(6,"i"),e(7,"selecteditems"),i(),e(8," templates respectively. In addition, header, footer and filter sections can be templated as well."),i()(),t(9,"div",5)(10,"p-multiselect",6),f("ngModelChange",function(w){return F(M),u(l.selectedCountries,w)||(l.selectedCountries=w),T(w)}),P(11,et,4,3,"ng-template",null,0,N)(13,tt,1,0,"ng-template",null,1,N)(15,it,1,0,"ng-template",null,2,N)(17,lt,2,0,"ng-template",null,3,N)(19,ot,3,0,"ng-template",null,4,N),i()(),c(21,"app-code",7)}n&2&&(s(10),a("options",l.countries),p("ngModel",l.selectedCountries),s(11),a("code",l.code))},dependencies:[x,b,C,h,y,V,be,S,g,v],encapsulation:2})}return o})();function nt(o,I){o&1&&(t(0,"p-message",6),e(1,"City is required."),i())}var je=(()=>{class o{messageService=j(W);cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];selectedCity;onSubmit(m){m.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),m.resetForm())}code={basic:`<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 w-full md:w-80">
        <div class="flex flex-col gap-1">
            <p-multiselect
                #city="ngModel"
                [(ngModel)]="selectedCity"
                [options]="cities"
                optionLabel="name"
                name="city"
                placeholder="Select Cities"
                [maxSelectedLabels]="3"
                [invalid]="city.invalid && (city.touched || exampleForm.submitted)"
                fluid
                required
            />
            @if (city.invalid && (city.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">City is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 w-full md:w-80">
        <div class="flex flex-col gap-1">
            <p-multiselect
                #city="ngModel"
                [(ngModel)]="selectedCity"
                [options]="cities"
                optionLabel="name"
                name="city"
                placeholder="Select Cities"
                [maxSelectedLabels]="3"
                [invalid]="city.invalid && (city.touched || exampleForm.submitted)"
                fluid
                required
            />
            @if (city.invalid && (city.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">City is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelect } from 'primeng/multiselect';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'multi-select-template-driven-forms-demo',
    templateUrl: './multi-select-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelect, Message, Toast]
})
export class TemplateDrivenFormsDemo{
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
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["template-driven-forms-doc"]],features:[K([W])],decls:13,vars:6,consts:[["exampleForm","ngForm"],["city","ngModel"],[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4","w-full","md:w-80",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["optionLabel","name","name","city","placeholder","Select Cities","fluid","","required","",3,"ngModelChange","ngModel","options","maxSelectedLabels","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","multiselect-reactive-forms-demo",3,"code"]],template:function(n,l){if(n&1){let M=A();c(0,"app-docsectiontext")(1,"p-toast"),t(2,"div",2)(3,"form",3,0),k("ngSubmit",function(){F(M);let w=G(4);return T(l.onSubmit(w))}),t(5,"div",4)(6,"p-multiselect",5,1),f("ngModelChange",function(w){return F(M),u(l.selectedCity,w)||(l.selectedCity=w),T(w)}),i(),z(8,nt,2,0,"p-message",6),i(),t(9,"button",7)(10,"span",8),e(11,"Submit"),i()()()(),c(12,"app-code",9)}if(n&2){let M=G(4),r=G(7);s(6),p("ngModel",l.selectedCity),a("options",l.cities)("maxSelectedLabels",3)("invalid",r.invalid&&(r.touched||M.submitted)),s(2),U(r.invalid&&(r.touched||M.submitted)?8:-1),s(4),a("code",l.code)}},dependencies:[x,J,b,H,fe,C,de,h,y,V,Z,X,ie,te,ee,$,S,g,v,R],encapsulation:2})}return o})();var at=["ms"],rt=()=>({color:"var(--text-color)"});function st(o,I){o&1&&c(0,"i",7)}function mt(o,I){o&1&&c(0,"i",8),o&2&&a("ngStyle",q(1,rt))}function ct(o,I){if(o&1&&P(0,st,1,0,"i",5)(1,mt,1,2,"i",6),o&2){let m=I.checked,n=I.partialSelected;a("ngIf",m),s(),a("ngIf",n)}}var ze=(()=>{class o{ms;items=Array.from({length:1e5},(m,n)=>({label:`Item #${n}`,value:n}));selectedItems;selectAll=!1;onSelectAllChange(m){this.selectedItems=m.checked?[...this.ms.visibleOptions()]:[],this.selectAll=m.checked}code={basic:`<p-multiselect [options]="items" [showToggleAll]="true" [selectAll]="selectAll" [(ngModel)]="selectedItems" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="43" placeholder="Select Cities" (onSelectAllChange)="onSelectAllChange($event)" [maxSelectedLabels]="3" class="w-full md:w-80" #ms>
    <ng-template #headercheckboxicon let-allSelected let-partialSelected="partialSelected">
        <i class="pi pi-check" *ngIf="allSelected"></i>
        <i class="pi pi-minus" *ngIf="partialSelected" [ngStyle]="{ color: 'var(--text-color)' }"></i>
    </ng-template>
</p-multiselect>`,html:`<div class="card flex justify-center">
    <p-multiselect [options]="items" [showToggleAll]="true" [selectAll]="selectAll" [(ngModel)]="selectedItems" optionLabel="label" [virtualScroll]="true" [virtualScrollItemSize]="43" placeholder="Select Cities" (onSelectAllChange)="onSelectAllChange($event)" [maxSelectedLabels]="3" class="w-full md:w-80" #ms>
        <ng-template #headercheckboxicon let-allSelected let-partialSelected="partialSelected">
            <i class="pi pi-check" *ngIf="allSelected"></i>
            <i class="pi pi-minus" *ngIf="partialSelected" [ngStyle]="{ color: 'var(--text-color)' }"></i>
        </ng-template>
    </p-multiselect>
</div>`,typescript:`import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiSelect } from 'primeng/multiselect';

@Component({
    selector: 'multi-select-virtual-scroll-demo',
    templateUrl: './multi-select-virtual-scroll-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectVirtualScrollDemo {
    @ViewChild('ms') ms: MultiSelect;

    items = Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))

    selectedItems!: any[];

    selectAll: boolean = false;

    onSelectAllChange(event) {
        this.selectedItems = event.checked ? [...this.ms.visibleOptions()] : [];
        this.selectAll = event.checked;
    }

}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["virtual-scroll-doc"]],viewQuery:function(n,l){if(n&1&&ne(at,5),n&2){let M;ae(M=re())&&(l.ms=M.first)}},decls:15,vars:8,consts:[["ms",""],["headercheckboxicon",""],[1,"card","flex","justify-center"],["optionLabel","label","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","onSelectAllChange","options","showToggleAll","selectAll","ngModel","virtualScroll","virtualScrollItemSize","maxSelectedLabels"],["selector","multi-select-virtual-scroll-demo",3,"code"],["class","pi pi-check",4,"ngIf"],["class","pi pi-minus",3,"ngStyle",4,"ngIf"],[1,"pi","pi-check"],[1,"pi","pi-minus",3,"ngStyle"]],template:function(n,l){if(n&1){let M=A();t(0,"app-docsectiontext")(1,"p"),e(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),i(),e(5," property to true and defining "),t(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," to specify the height of an item. "),i()(),t(9,"div",2)(10,"p-multiselect",3,0),f("ngModelChange",function(w){return F(M),u(l.selectedItems,w)||(l.selectedItems=w),T(w)}),k("onSelectAllChange",function(w){return F(M),T(l.onSelectAllChange(w))}),P(12,ct,2,2,"ng-template",null,1,N),i()(),c(14,"app-code",4)}n&2&&(s(10),a("options",l.items)("showToggleAll",!0)("selectAll",l.selectAll),p("ngModel",l.selectedItems),a("virtualScroll",!0)("virtualScrollItemSize",43)("maxSelectedLabels",3),s(4),a("code",l.code))},dependencies:[R,se,me,x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Ue=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" [showClear]="true" />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" class="w-full md:w-80" [showClear]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-clear-icon-demo',
    templateUrl: './multi-select-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectClearIconDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["clear-icon-doc"]],decls:9,vars:5,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","options","ngModel","maxSelectedLabels","showClear"],["selector","multi-select-clear-icon-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"showClear"),i(),e(5," is enabled, a clear icon is displayed to clear the value."),i()(),t(6,"div",0)(7,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(8,"app-code",2)),n&2&&(s(7),a("options",l.cities),p("ngModel",l.selectedCities),a("maxSelectedLabels",3)("showClear",!0),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();var Ge=(()=>{class o{cities;selectedCities;ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}code={basic:'<p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" fluid />',html:`<div class="card flex justify-center">
    <p-multiselect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" placeholder="Select Cities" [maxSelectedLabels]="3" fluid />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-fluid-demo',
    templateUrl: './multi-select-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, MultiSelectModule]
})
export class MultiSelectFluidDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["fluid-doc"]],decls:6,vars:4,consts:[[1,"card","flex","justify-center"],["optionLabel","name","placeholder","Select Cities","fluid","",3,"ngModelChange","options","ngModel","maxSelectedLabels"],["selector","multi-select-fluid-demo",3,"code"]],template:function(n,l){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The fluid prop makes the component take up the full width of its container when set to true."),i()(),t(3,"div",0)(4,"p-multiselect",1),f("ngModelChange",function(r){return u(l.selectedCities,r)||(l.selectedCities=r),r}),i()(),c(5,"app-code",2)),n&2&&(s(4),a("options",l.cities),p("ngModel",l.selectedCities),a("maxSelectedLabels",3),s(),a("code",l.code))},dependencies:[x,b,C,h,y,S,g,v],encapsulation:2})}return o})();function dt(o,I){if(o&1&&(t(0,"div",3),c(1,"img",4),t(2,"div"),e(3),i()()),o&2){let m=I.$implicit;s(),B("flag flag-"+m.code.toLowerCase()+" mr-2"),a("alt",m.label),s(2),O(m.label)}}var Ke=(()=>{class o{selectedCities=null;groupedCities=[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}];docs=[{data:le("MultiSelect"),key:"MultiSelect"}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["multiselect-pt-viewer"]],decls:4,vars:5,consts:[["group",""],[3,"docs"],["optionLabel","label","optionGroupLabel","label","optionGroupChildren","items","display","chip","placeholder","Select Cities",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","filter","showClear"],[1,"flex","items-center"],["src","/_ext/primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",2,"width","18px",3,"alt"]],template:function(n,l){if(n&1){let M=A();t(0,"app-docptviewer",1)(1,"p-multiselect",2),f("ngModelChange",function(w){return F(M),u(l.selectedCities,w)||(l.selectedCities=w),T(w)}),P(2,dt,4,4,"ng-template",null,0,N),i()()}n&2&&(a("docs",l.docs),s(),p("ngModel",l.selectedCities),a("options",l.groupedCities)("filter",!0)("showClear",!0))},dependencies:[R,Le,h,y,x,b,C],encapsulation:2})}return o})();var qe=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:Ke},{id:"pt.doc.multiselect",label:"MultiSelect PT Options",component:ve,data:le("MultiSelect")}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["multiselect-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,l){n&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),e(3,"MultiSelect Pass Through"),i()(),c(4,"app-docsection",2),i()),n&2&&(s(4),a("docs",l.docs))},dependencies:[R,ye],encapsulation:2})}return o})();var pt=()=>["MultiSelect"],He=(()=>{class o{ptComponent=qe;docs=[{id:"import",label:"Import",component:Pe},{id:"basic",label:"Basic",component:De},{id:"chips",label:"Chips",component:Ee},{id:"group",label:"Group",component:Ae},{id:"template",label:"Template",component:Ve},{id:"filter",label:"Filter",component:Te},{id:"loadingstate",label:"Loading State",component:Be},{id:"virtualscroll",label:"VirtualScroll",component:ze},{id:"floatlabel",label:"Float Label",component:Ne},{id:"iftalabel",label:"Ifta Label",component:Re},{id:"clearicon",label:"Clear Icon",component:Ue},{id:"sizes",label:"Sizes",component:Ye},{id:"fluid",label:"Fluid",component:Ge},{id:"filled",label:"Filled",component:Fe},{id:"disabled",label:"Disabled",component:Ie},{id:"invalid",label:"Invalid",component:ke},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:je},{id:"reactive",label:"Reactive Forms",component:We}]},{id:"accessibility",label:"Accessibility",component:_e}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular MultiSelect Component","header","MultiSelect","description","MultiSelect is used to select multiple items from a collection.","themeDocs","multiselect",3,"docs","apiDocs","ptDocs"]],template:function(n,l){n&1&&c(0,"app-doc",0),n&2&&a("docs",l.docs)("apiDocs",q(3,pt))("ptDocs",l.ptComponent)},dependencies:[he],encapsulation:2})}return o})();var $l=[{path:"",component:He}];export{$l as default};
