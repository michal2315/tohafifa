import{a as U,b as W}from"./chunk-GNSSP7AO.js";import{a as k,b as O}from"./chunk-E5KER2I6.js";import{a as g,b as f}from"./chunk-JP2RU6K4.js";import"./chunk-ZVBSRVPM.js";import{a as V,b as $}from"./chunk-N2Z7YVU2.js";import"./chunk-APBUBGZC.js";import{a as y,b as q}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import"./chunk-66742H4U.js";import"./chunk-VGTHJBIV.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{f as I,i as L,u as F}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as N}from"./chunk-FKOOMXTU.js";import{a as h}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as z}from"./chunk-XCUGNKAG.js";import{a as u,b as K}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as A,h as j}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as B,ha as J}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as x}from"./chunk-D2XKNHFS.js";import{Eb as p,Fb as o,Gb as t,Hb as l,La as E,Qa as s,Sb as c,fc as M,gb as d,hc as e,kc as C,lc as T,mc as b,nc as D,oc as R,pc as _,sc as P}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var G=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["paginator-accessibility-doc"]],decls:112,vars:0,consts:[["href","/configuration/#locale"],["routerLink","/dropdown"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,i){r&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),o(4,"p"),e(5,"Paginator is placed inside a "),o(6,"i"),e(7,"nav"),t(),e(8," element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below."),t(),o(9,"p"),e(10," First, previous, next and last page navigators elements with "),o(11,"i"),e(12,"aria-label"),t(),e(13," attributes referring to the "),o(14,"i"),e(15,"aria.firstPageLabel"),t(),e(16,", "),o(17,"i"),e(18,"aria.prevPageLabel"),t(),e(19,", "),o(20,"i"),e(21,"aria.nextPageLabel"),t(),e(22," and "),o(23,"i"),e(24,"aria.lastPageLabel"),t(),e(25,"properties of the "),o(26,"a",0),e(27,"locale"),t(),e(28," API respectively. "),t(),o(29,"p"),e(30," Page links are also button elements with an "),o(31,"i"),e(32,"aria-label"),t(),e(33," attribute derived from the "),o(34,"i"),e(35,"aria.pageLabel"),t(),e(36," of the "),o(37,"a",0),e(38,"locale"),t(),e(39," API. Current page is marked with "),o(40,"i"),e(41,"aria-current"),t(),e(42,' set to "page" as well. '),t(),o(43,"p"),e(44,"Current page report uses "),o(45,"i"),e(46,'aria-live="polite"'),t(),e(47," to instruct screen reader about the changes to the pagination state."),t(),o(48,"p"),e(49," Rows per page dropdown internally uses a dropdown component, refer to the "),o(50,"a",1),e(51,"dropdown"),t(),e(52," documentation for accessibility details. Additionally, the dropdown uses an "),o(53,"i"),e(54,"aria-label"),t(),e(55,"from the "),o(56,"i"),e(57,"aria.rowsPerPage"),t(),e(58," property of the "),o(59,"a",0),e(60,"locale"),t(),e(61," API. "),t(),o(62,"p"),e(63,"Jump to page input is an "),o(64,"i"),e(65,"input"),t(),e(66," element with an "),o(67,"i"),e(68,"aria-label"),t(),e(69," that refers to the "),o(70,"i"),e(71,"aria.jumpToPage"),t(),e(72," property of the "),o(73,"a",0),e(74,"locale"),t(),e(75," API."),t(),o(76,"h3"),e(77,"Keyboard Support"),t(),o(78,"div",2)(79,"table",3)(80,"thead")(81,"tr")(82,"th"),e(83,"Key"),t(),o(84,"th"),e(85,"Function"),t()()(),o(86,"tbody")(87,"tr")(88,"td")(89,"i"),e(90,"tab"),t()(),o(91,"td"),e(92,"Moves focus through the paginator elements."),t()(),o(93,"tr")(94,"td")(95,"i"),e(96,"enter"),t()(),o(97,"td"),e(98,"Executes the paginator element action."),t()(),o(99,"tr")(100,"td")(101,"i"),e(102,"space"),t()(),o(103,"td"),e(104,"Executes the paginator element action."),t()()()()(),o(105,"h3"),e(106,"Rows Per Page Dropdown Keyboard Support"),t(),o(107,"p"),e(108,"Refer to the "),o(109,"a",1),e(110,"dropdown"),t(),e(111," documentation for more details about keyboard support."),t()()())},dependencies:[j,A,u],encapsulation:2})}return n})();var ie=()=>[10,20,30],H=(()=>{class n{first=0;rows=10;onPageChange(a){this.first=a.first??0,this.rows=a.rows??10}code={basic:'<p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" />',html:`<div class="card flex justify-center">
    <p-paginator (onPageChange)="onPageChange($event)" [first]="first" [rows]="rows" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-basic-demo',
    templateUrl: './paginator-basic-demo.html',
    standalone: true,
    imports: [PaginatorModule]
})
export class PaginatorBasicDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }
}`};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["basic-doc"]],decls:24,vars:6,consts:[[1,"card","flex","justify-center"],[3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions"],["selector","paginator-basic-demo",3,"code"]],template:function(r,i){r&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Paginator is used as a controlled component with "),o(3,"i"),e(4,"first"),t(),e(5,", "),o(6,"i"),e(7,"rows"),t(),e(8," and "),o(9,"i"),e(10,"onPageChange"),t(),e(11," properties to manage the first index and number of records to display per page. Total number of records need to be with "),o(12,"i"),e(13,"totalRecords"),t(),e(14," property. Default template includes a dropdown to change the "),o(15,"i"),e(16,"rows"),t(),e(17," so "),o(18,"i"),e(19,"rowsPerPageOptions"),t(),e(20," is also necessary for the dropdown options. "),t()(),o(21,"div",0)(22,"p-paginator",1),c("onPageChange",function(m){return i.onPageChange(m)}),t()(),l(23,"app-code",2)),r&2&&(s(22),p("first",i.first)("rows",i.rows)("totalRecords",120)("rowsPerPageOptions",P(5,ie)),s(),p("code",i.code))},dependencies:[f,g,h,u],encapsulation:2})}return n})();var Q=(()=>{class n{first=0;rows=10;onPageChange(a){this.first=a.first??0,this.rows=a.rows??10}code={basic:`<p-paginator
    (onPageChange)="onPageChange($event)"
    [first]="first"
    [rows]="rows"
    [totalRecords]="120"
    [showCurrentPageReport]="true"
    [showPageLinks]="false"
    [showJumpToPageDropdown]="false"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />`,html:`<div class="card flex justify-center">
    <p-paginator
        (onPageChange)="onPageChange($event)"
        [first]="first"
        [rows]="rows"
        [totalRecords]="120"
        [showCurrentPageReport]="true"
        [showPageLinks]="false"
        [showJumpToPageDropdown]="false"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
</div>`,typescript:`import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-current-page-report-demo',
    templateUrl: './paginator-current-page-report-demo.html',
    standalone: true,
    imports: [PaginatorModule]
})
export class PaginatorCurrentPageReportDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }
}`};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["current-page-report-doc"]],decls:19,vars:23,consts:[[1,"mb-6","leading-loose"],[1,"card","flex","justify-center"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showCurrentPageReport","showPageLinks","showJumpToPageDropdown"],["selector","paginator-current-page-report-demo",3,"code"]],template:function(r,i){r&1&&(o(0,"app-docsectiontext")(1,"p"),e(2),t(),o(3,"ul",0)(4,"li"),e(5),t(),o(6,"li"),e(7),t(),o(8,"li"),e(9),t(),o(10,"li"),e(11),t(),o(12,"li"),e(13),t(),o(14,"li"),e(15),t()()(),o(16,"div",1)(17,"p-paginator",2),c("onPageChange",function(m){return i.onPageChange(m)}),t()(),l(18,"app-code",3)),r&2&&(s(2),T("Current page report item in the template displays information about the pagination state. Default value is (","{","currentPage","}"," of ","{","totalPages","}",") whereas available placeholders are the following;"),s(3),C("","{","currentPage","}"),s(2),C("","{","totalPages","}"),s(2),C("","{","rows","}"),s(2),C("","{","first","}"),s(2),C("","{","last","}"),s(2),C("","{","totalRecords","}"),s(2),p("first",i.first)("rows",i.rows)("totalRecords",120)("showCurrentPageReport",!0)("showPageLinks",!1)("showJumpToPageDropdown",!1),s(),p("code",i.code))},dependencies:[f,g,h,u],encapsulation:2})}return n})();var X=(()=>{class n{first=0;rows=10;onPageChange(a){this.first=a.first??0,this.rows=a.rows??10}code={basic:`<p-paginator [first]="first" [rows]="1" [totalRecords]="120" (onPageChange)="onPageChange($event)" [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>
<img src="/_ext/primefaces.org/cdn/primeng/images/demo/nature/nature{{ (first + 1) % 10 }}.jpg" class="max-w-full" />`,html:`
<div class="card flex flex-col gap-4 justify-center items-center">
    <p-paginator [first]="first" [rows]="1" [totalRecords]="120" (onPageChange)="onPageChange($event)" [showJumpToPageDropdown]="true" [showPageLinks]="false"></p-paginator>
    <img src="/_ext/primefaces.org/cdn/primeng/images/demo/nature/nature{{ (first + 1) % 10 }}.jpg" class="max-w-full" />
</div>`,typescript:`
import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'paginator-images-demo',
    templateUrl: './paginator-images-demo.html'
})
export class PaginatorImagesDemo {
    first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }
}`};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["images-doc"]],decls:7,vars:8,consts:[[1,"card","flex","flex-col","gap-4","justify-center","items-center"],[3,"onPageChange","first","rows","totalRecords","showJumpToPageDropdown","showPageLinks"],[1,"max-w-full",3,"src"],["selector","paginator-images-demo",3,"code"]],template:function(r,i){r&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Sample image gallery implementation using paginator."),t()(),o(3,"div",0)(4,"p-paginator",1),c("onPageChange",function(m){return i.onPageChange(m)}),t(),l(5,"img",2),t(),l(6,"app-code",3)),r&2&&(s(4),p("first",i.first)("rows",1)("totalRecords",120)("showJumpToPageDropdown",!0)("showPageLinks",!1),s(),p("src",_("/_ext/primefaces.org/cdn/primeng/images/demo/nature/nature",(i.first+1)%10,".jpg"),E),s(),p("code",i.code))},dependencies:[f,g,h,u],encapsulation:2})}return n})();var Y=(()=>{class n{code={typescript:"import { PaginatorModule } from 'primeng/paginator';"};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["paginator-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,i){r&1&&l(0,"app-code",0),r&2&&p("code",i.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2})}return n})();var ne=()=>[10,20,30],re=()=>({width:"10rem"}),Z=(()=>{class n{first1=0;rows1=10;first2=0;rows2=10;first3=0;rows3=10;totalRecords=120;options=[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:120,value:120}];onPageChange1(a){this.first1=a.first??0,this.rows1=a.rows??10}onPageChange2(a){this.first2=a.first??0,this.rows2=a.rows??10}onPageChange3(a){this.first3=a.first??0,this.rows3=a.rows??10}code={basic:`<div class="flex items-center justify-center">
    <div>
        <p-button icon="pi pi-star" outlined />
    </div>
    <div class="flex-1">
        <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false" />
    </div>
    <div class="justify-end">
        <p-button icon="pi pi-search" />
    </div>
</div>

<div class="flex items-center justify-end">
    <span class="mx-1 text-color">Items per page: </span>
    <p-select [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0" />
    <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true"
        currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false" ></p-paginator>
</div>

<div class="flex items-center justify-start">
    <div class="flex justify-center items-center gap-4">
        <span>Items per page: </span>
        <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30" />
    </div>
    <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords" [showFirstLastIcon]="false"
        [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}" ></p-paginator>
</div>`,html:`<div class="card flex flex-col gap-4">
    <div class="flex items-center justify-center">
        <div>
            <p-button icon="pi pi-star" outlined />
        </div>
        <div class="flex-1">
            <p-paginator (onPageChange)="onPageChange1($event)" [first]="first1" [rows]="rows1" [totalRecords]="120" [rowsPerPageOptions]="[10, 20, 30]" [showFirstLastIcon]="false" />
        </div>
        <div class="justify-end">
            <p-button icon="pi pi-search" />
        </div>
    </div>
    <p-divider />
    <div class="flex items-center justify-end">
        <span class="mx-1 text-color">Items per page: </span>
        <p-select [options]="options" optionLabel="label" optionValue="value" [(ngModel)]="rows2" (ngModelChange)="first2 = 0" />
        <p-paginator [first]="first2" [rows]="rows2" [totalRecords]="120" (onPageChange)="onPageChange2($event)" [showCurrentPageReport]="true"
            currentPageReportTemplate="{first} - {last} of {totalRecords}" [showPageLinks]="false" [showFirstLastIcon]="false"></p-paginator>
    </div>
    <p-divider />
    <div class="flex items-center justify-start">
        <div class="flex justify-center items-center gap-4">
            <span>Items per page: </span>
            <p-slider [(ngModel)]="rows3" (ngModelChange)="first3 = 0" [style]="{ width: '10rem' }" [min]="10" [max]="120" [step]="30" />
        </div>
        <p-paginator (onPageChange)="onPageChange3($event)" [first]="first3" [rows]="rows3" [totalRecords]="totalRecords"
            [showFirstLastIcon]="false" [showCurrentPageReport]="true" currentPageReportTemplate="{first} - {last} of {totalRecords}"></p-paginator>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Slider } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'paginator-template-demo',
    templateUrl: './paginator-template-demo.html',
    standalone: true,
    imports: [PaginatorModule, ButtonModule, DividerModule, Slider, FormsModule]
})
export class PaginatorTemplateDemo {
    first1: number = 0;

    rows1: number = 10;

    first2: number = 0;

    rows2: number = 10;

    first3: number = 0;

    rows3: number = 10;

    totalRecords: number = 120;

    options = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 120, value: 120 }
    ];

    onPageChange1(event: PaginatorState) {
        this.first1 = event.first ?? 0;
        this.rows1 = event.rows ?? 10;
    }

    onPageChange2(event: PaginatorState) {
        this.first2 = event.first ?? 0;
        this.rows2 = event.rows ?? 10;
    }

    onPageChange3(event: PaginatorState) {
        this.first3 = event.first ?? 0;
        this.rows3 = event.rows ?? 10;
    }
}`};static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["template-doc"]],decls:25,vars:27,consts:[[1,"card","flex","flex-col","gap-4"],[1,"flex","items-center","justify-center"],["icon","pi pi-star","outlined",""],[1,"flex-1"],[3,"onPageChange","first","rows","totalRecords","rowsPerPageOptions","showFirstLastIcon"],[1,"justify-end"],["icon","pi pi-search"],[1,"flex","items-center","justify-end"],[1,"mx-1","text-color"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],["currentPageReportTemplate","{first} - {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showCurrentPageReport","showPageLinks","showFirstLastIcon"],[1,"flex","items-center","justify-start"],[1,"flex","justify-center","items-center","gap-4"],[3,"ngModelChange","ngModel","min","max","step"],["currentPageReportTemplate","{first} - {last} of {totalRecords}",3,"onPageChange","first","rows","totalRecords","showFirstLastIcon","showCurrentPageReport"],["selector","paginator-template-demo",3,"code"]],template:function(r,i){r&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Templating allows overriding the default content of the UI elements by defining callbacks using the element name."),t()(),o(3,"div",0)(4,"div",1)(5,"div"),l(6,"p-button",2),t(),o(7,"div",3)(8,"p-paginator",4),c("onPageChange",function(m){return i.onPageChange1(m)}),t()(),o(9,"div",5),l(10,"p-button",6),t()(),l(11,"p-divider"),o(12,"div",7)(13,"span",8),e(14,"Items per page: "),t(),o(15,"p-select",9),R("ngModelChange",function(m){return D(i.rows2,m)||(i.rows2=m),m}),c("ngModelChange",function(){return i.first2=0}),t(),o(16,"p-paginator",10),c("onPageChange",function(m){return i.onPageChange2(m)}),t()(),l(17,"p-divider"),o(18,"div",11)(19,"div",12)(20,"span"),e(21,"Items per page: "),t(),o(22,"p-slider",13),R("ngModelChange",function(m){return D(i.rows3,m)||(i.rows3=m),m}),c("ngModelChange",function(){return i.first3=0}),t()(),o(23,"p-paginator",14),c("onPageChange",function(m){return i.onPageChange3(m)}),t()()(),l(24,"app-code",15)),r&2&&(s(8),p("first",i.first1)("rows",i.rows1)("totalRecords",120)("rowsPerPageOptions",P(25,ne))("showFirstLastIcon",!1),s(7),p("options",i.options),b("ngModel",i.rows2),s(),p("first",i.first2)("rows",i.rows2)("totalRecords",120)("showCurrentPageReport",!0)("showPageLinks",!1)("showFirstLastIcon",!1),s(6),M(P(26,re)),b("ngModel",i.rows3),p("min",10)("max",120)("step",30),s(),p("first",i.first3)("rows",i.rows3)("totalRecords",i.totalRecords)("showFirstLastIcon",!1)("showCurrentPageReport",!0),s(),p("code",i.code))},dependencies:[f,g,J,B,O,k,$,V,W,U,F,I,L,h,u],encapsulation:2})}return n})();var ae=()=>[10,20,30],ee=(()=>{class n{docs=[{data:y("Paginator"),key:"Paginator"}];static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["paginator-pt-viewer"]],decls:3,vars:5,consts:[[3,"docs"],[1,"w-full"],[3,"rows","totalRecords","rowsPerPageOptions"]],template:function(r,i){r&1&&(o(0,"app-docptviewer",0)(1,"div",1),l(2,"p-paginator",2),t()()),r&2&&(p("docs",i.docs),s(2),p("rows",10)("totalRecords",120)("rowsPerPageOptions",P(4,ae)))},dependencies:[x,q,f,g],encapsulation:2})}return n})();var te=(()=>{class n{docs=[{id:"pt.viewer",label:"Viewer",component:ee},{id:"pt.doc.paginator",label:"Paginator PT Options",component:K,data:y("Paginator")}];static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["paginator-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(r,i){r&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Paginator Pass Through"),t()(),l(4,"app-docsection",2),t()),r&2&&(s(4),p("docs",i.docs))},dependencies:[x,z],encapsulation:2})}return n})();var se=()=>["Paginator"],oe=(()=>{class n{ptComponent=te;docs=[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:H},{id:"template",label:"Template",component:Z},{id:"current-page-report",label:"Current Page Report",component:Q},{id:"images",label:"Images",component:X},{id:"accessibility",label:"Accessibility",component:G}];static \u0275fac=function(r){return new(r||n)};static \u0275cmp=d({type:n,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Paginator Component","header","Paginator","description","Paginator displays data in paged format and provides navigation between pages.","themeDocs","paginator",3,"docs","apiDocs","ptDocs"]],template:function(r,i){r&1&&l(0,"app-doc",0),r&2&&p("docs",i.docs)("apiDocs",P(3,se))("ptDocs",i.ptComponent)},dependencies:[N],styles:[".image-gallery[_ngcontent-%COMP%]{text-align:center;padding:1rem}"]})}return n})();var at=[{path:"",component:oe}];export{at as default};
