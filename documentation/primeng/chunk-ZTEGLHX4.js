import{a as L,b as R}from"./chunk-QU6ZZOVJ.js";import{a as s,b as d}from"./chunk-VU4P7THV.js";import{a as S,b as U}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as V}from"./chunk-FKOOMXTU.js";import{a as f,b as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as z}from"./chunk-XCUGNKAG.js";import{a as u,b as k}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as B,ha as O}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as j,w as h}from"./chunk-D2XKNHFS.js";import{Eb as p,Fb as a,Gb as r,Gc as D,Hb as c,Lb as E,Mb as _,Qa as n,Ub as P,fc as y,gb as m,gc as G,hc as o,ic as I,jc as T,mb as w,sc as C,tc as A,uc as F}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var $=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["meter-group-accessibility-doc"]],decls:24,vars:0,template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),r(),a(3,"p"),o(4,"MeterGroup component uses "),a(5,"i"),o(6,"meter"),r(),o(7," role in addition to the "),a(8,"i"),o(9,"aria-valuemin"),r(),o(10,", "),a(11,"i"),o(12,"aria-valuemax"),r(),o(13," and "),a(14,"i"),o(15,"aria-valuenow"),r(),o(16," attributes. Value to describe the component can be defined using "),a(17,"i"),o(18,"aria-labelledby"),r(),o(19," prop."),r(),a(20,"h3"),o(21,"Keyboard Support"),r(),a(22,"p"),o(23,"Component does not include any interactive elements."),r()())},dependencies:[u],encapsulation:2})}return e})();var q=(()=>{class e{value=[{label:"Space used",value:15,color:"var(--p-primary-color)"}];code={basic:'<p-metergroup [value]="value" />',html:`<div class="card">
    <p-metergroup [value]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-basic-demo',
    templateUrl: './meter-group-basic-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupBasicDemo {
    value = [
        { label: 'Space used', value: 15, color: 'var(--p-primary-color)' }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-basic-demo",3,"code"]],template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"MeterGroup requires a "),a(3,"i"),o(4,"value"),r(),o(5," as the data to display where each item in the collection should be a type of "),a(6,"i"),o(7,"MeterItem"),r(),o(8,"."),r()(),a(9,"div",0),c(10,"p-metergroup",1),r(),c(11,"app-code",2)),t&2&&(n(10),p("value",l.value),n(),p("code",l.code))},dependencies:[d,s,v,f,u],encapsulation:2})}return e})();var K=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16,icon:"pi pi-table"},{label:"Messages",color:"#fbbf24",value:8,icon:"pi pi-inbox"},{label:"Media",color:"#60a5fa",value:24,icon:"pi pi-image"},{label:"System",color:"#c084fc",value:10,icon:"pi pi-cog"}];code={basic:'<p-metergroup [value]="value" />',html:`<div class="card">
    <p-metergroup [value]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-icon-demo',
    templateUrl: './meter-group-icon-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupIconDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["icon-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-icon-demo",3,"code"]],template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Icons can be displayed next to the labels instead of the default marker."),r()(),a(3,"div",0),c(4,"p-metergroup",1),r(),c(5,"app-code",2)),t&2&&(n(4),p("value",l.value),n(),p("code",l.code))},dependencies:[d,s,v,f,u],encapsulation:2})}return e})();var N=(()=>{class e{code={typescript:"import { MeterGroupModule } from 'primeng/metergroup';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["meter-group-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&c(0,"app-code",0),t&2&&p("code",l.code)("hideToggleCode",!0)},dependencies:[v,f],encapsulation:2})}return e})();var H=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:'<p-metergroup [value]="value" labelPosition="start" labelOrientation="vertical" />',html:`<div class="card">
    <p-metergroup [value]="value" labelPosition="start" labelOrientation="vertical" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-label-demo',
    templateUrl: './meter-group-label-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupLabelDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["label-doc"]],decls:12,vars:2,consts:[[1,"card"],["labelPosition","start","labelOrientation","vertical",3,"value"],["selector","meter-group-label-demo",3,"code"]],template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2," The position of the labels relative to the meters is defined using the "),a(3,"i"),o(4,"labelPosition"),r(),o(5," property. The default orientation of the labels is horizontal, and the vertical alternative is available through the "),a(6,"i"),o(7,"labelOrientation"),r(),o(8," option. "),r()(),a(9,"div",0),c(10,"p-metergroup",1),r(),c(11,"app-code",2)),t&2&&(n(10),p("value",l.value),n(),p("code",l.code))},dependencies:[d,s,v,f,u],encapsulation:2})}return e})();var J=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:'<p-metergroup [value]="value" [max]="200" />',html:`<div class="card">
<p-metergroup [value]="value" [max]="200" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-min-max-demo',
    templateUrl: './meter-group-min-max-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupMinMaxDemo{

    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["min-max-doc"]],decls:12,vars:3,consts:[[1,"card"],[3,"value","max"],["selector","meter-group-min-max-demo",3,"code"]],template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Boundaries are configured with the "),a(3,"i"),o(4,"min"),r(),o(5," and "),a(6,"i"),o(7,"max"),r(),o(8," values whose defaults are 0 and 100 respectively."),r()(),a(9,"div",0),c(10,"p-metergroup",1),r(),c(11,"app-code",2)),t&2&&(n(10),p("value",l.value)("max",200),n(),p("code",l.code))},dependencies:[d,s,v,f,u],encapsulation:2})}return e})();var Q=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:'<p-metergroup [value]="value" />',html:`<div class="card">
    <p-metergroup [value]="value" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-multiple-demo',
    templateUrl: './meter-group-multiple-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupMultipleDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["multiple-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-multiple-demo",3,"code"]],template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Adding more items to the array displays the meters in a group."),r()(),a(3,"div",0),c(4,"p-metergroup",1),r(),c(5,"app-code",2)),t&2&&(n(4),p("value",l.value),n(),p("code",l.code))},dependencies:[d,s,v,f,u],encapsulation:2})}return e})();var W=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16,icon:"pi pi-table"},{label:"Messages",color:"#fbbf24",value:8,icon:"pi pi-inbox"},{label:"Media",color:"#60a5fa",value:24,icon:"pi pi-image"},{label:"System",color:"#c084fc",value:10,icon:"pi pi-cog"}];docs=[{data:S("MeterGroup"),key:"MeterGroup"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["metergroup-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"value"]],template:function(t,l){t&1&&(a(0,"app-docptviewer",0),c(1,"p-metergroup",1),r()),t&2&&(p("docs",l.docs),n(),p("value",l.value))},dependencies:[h,U,d,s],encapsulation:2})}return e})();var X=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:W},{id:"pt.doc.metergroup",label:"MeterGroup PT Options",component:k,data:S("MeterGroup")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["metergroup-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,l){t&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),o(3,"MeterGroup Pass Through"),r()(),c(4,"app-docsection",2),r()),t&2&&(n(4),p("docs",l.docs))},dependencies:[h,z],encapsulation:2})}return e})();var te=e=>({"background-color":e,color:"#ffffff"}),oe=(e,g)=>({background:e,width:g}),re=e=>({width:e});function ae(e,g){if(e&1&&(E(0),a(1,"p-card",9)(2,"div",10)(3,"div",11)(4,"span",12),o(5),r(),a(6,"span",13),o(7),r()(),a(8,"span",14),c(9,"i"),r()()(),_()),e&2){let i=g.$implicit;n(5),I(i.label),n(2),T("",i.value,"%"),n(),y(A(6,te,i.color1)),n(),G(i.icon)}}function ie(e,g){if(e&1&&(a(0,"div",7),w(1,ae,10,8,"ng-container",8),r()),e&2){let i=P();n(),p("ngForOf",i.value)}}function le(e,g){if(e&1&&c(0,"span"),e&2){let i=g.$implicit,t=g.class,l=g.size;y(F(4,oe,"linear-gradient(to right, "+i.color1+", "+i.color2+")",l)),G(t)}}function ne(e,g){if(e&1&&(a(0,"div",15)(1,"span"),o(2,"Storage"),r(),a(3,"span",16),o(4),r(),a(5,"span",17),o(6,"1TB"),r()()),e&2){let i=g.totalPercent;n(3),y(A(3,re,i+"%")),n(),T("",i,"%")}}function pe(e,g){e&1&&(a(0,"div",18),c(1,"p-button",19)(2,"p-button",20),r()),e&2&&(n(),p("outlined",!0))}var Y=(()=>{class e{value=[{label:"Apps",color1:"#34d399",color2:"#fbbf24",value:25,icon:"pi pi-table"},{label:"Messages",color1:"#fbbf24",color2:"#60a5fa",value:15,icon:"pi pi-inbox"},{label:"Media",color1:"#60a5fa",color2:"#c084fc",value:20,icon:"pi pi-image"},{label:"System",color1:"#c084fc",color2:"#c084fc",value:10,icon:"pi pi-cog"}];code={basic:`<p-metergroup [value]="value" labelPosition="start">
    <ng-template #label>
        <div class="flex flex-wrap gap-4">
            <ng-container *ngFor="let meterItem of value; let index = index">
                <p-card class="flex-1" styleClass="border border-surface shadow-none">
                    <div class="flex justify-between gap-8">
                        <div class="flex flex-col gap-1">
                            <span class="text-surface-500 dark:text-surface-400 text-sm">{{ meterItem.label }}</span>
                            <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                        </div>
                        <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                            <i [class]="meterItem.icon"></i>
                        </span>
                    </div>
                </p-card>
            </ng-container>
        </div>
    </ng-template>
    <ng-template #meter let-value let-class="class" let-width="size">
        <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
    </ng-template>
    <ng-template #start let-totalPercent="totalPercent">
        <div class="flex justify-between mt-4 mb-2 relative">
            <span>Storage</span>
            <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
            <span class="font-medium">1TB</span>
        </div>
    </ng-template>
    <ng-template #end>
        <div class="flex justify-between mt-4">
            <p-button label="Manage Storage" [outlined]="true" size="small" />
            <p-button label="Update Plan" size="small" />
        </div>
    </ng-template>
</p-metergroup>`,html:`<div class="card">
    <p-metergroup [value]="value" labelPosition="start">
        <ng-template #label>
            <div class="flex flex-wrap gap-4">
                <ng-container *ngFor="let meterItem of value; let index = index">
                    <p-card class="flex-1" styleClass="border border-surface shadow-none">
                        <div class="flex justify-between gap-8">
                            <div class="flex flex-col gap-1">
                                <span class="text-surface-500 dark:text-surface-400 text-sm">{{ meterItem.label }}</span>
                                <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                            </div>
                            <span class="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                                <i [class]="meterItem.icon"></i>
                            </span>
                        </div>
                    </p-card>
                </ng-container>
            </div>
        </ng-template>
        <ng-template #meter let-value let-class="class" let-width="size">
            <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
        </ng-template>
        <ng-template #start let-totalPercent="totalPercent">
            <div class="flex justify-between mt-4 mb-2 relative">
                <span>Storage</span>
                <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
                <span class="font-medium">1TB</span>
            </div>
        </ng-template>
        <ng-template #end>
            <div class="flex justify-between mt-4">
                <p-button label="Manage Storage" [outlined]="true" size="small" />
                <p-button label="Update Plan" size="small" />
            </div>
        </ng-template>
    </p-metergroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'meter-group-template-demo',
    templateUrl: './meter-group-template-demo.html',
    standalone: true,
    imports: [MeterGroup, CardModule, ButtonModule, CommonModule]
})
export class MeterGroupTemplateDemo {
    value = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["template-doc"]],decls:14,vars:2,consts:[["label",""],["meter",""],["start",""],["end",""],[1,"card"],["labelPosition","start",3,"value"],["selector","meter-group-template-demo",3,"code"],[1,"flex","flex-wrap","gap-4"],[4,"ngFor","ngForOf"],["styleClass","border border-surface shadow-none",1,"flex-1"],[1,"flex","justify-between","gap-8"],[1,"flex","flex-col","gap-1"],[1,"text-surface-500","dark:text-surface-400","text-sm"],[1,"font-bold","text-lg"],[1,"w-8","h-8","rounded-full","inline-flex","justify-center","items-center","text-center"],[1,"flex","justify-between","mt-4","mb-2","relative"],[1,"absolute","text-right"],[1,"font-medium"],[1,"flex","justify-between","mt-4"],["label","Manage Storage","size","small",3,"outlined"],["label","Update Plan","size","small"]],template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"MeterGroup provides templating support for labels, meter items, and content around the meters."),r()(),a(3,"div",4)(4,"p-metergroup",5),w(5,ie,2,1,"ng-template",null,0,D)(7,le,1,7,"ng-template",null,1,D)(9,ne,7,5,"ng-template",null,2,D)(11,pe,3,1,"ng-template",null,3,D),r()(),c(13,"app-code",6)),t&2&&(n(4),p("value",l.value),n(9),p("code",l.code))},dependencies:[h,j,d,s,R,L,O,B,v,f,u],encapsulation:2})}return e})();var ce=()=>({height:"300px"}),Z=(()=>{class e{value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];code={basic:`<p-metergroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }" />`,html:`<div class="card flex justify-center">
    <p-metergroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MeterGroup } from 'primeng/metergroup';

@Component({
    selector: 'meter-group-vertical-demo',
    templateUrl: './meter-group-vertical-demo.html',
    standalone: true,
    imports: [MeterGroup]
})
export class MeterGroupVerticalDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["vertical-doc"]],decls:15,vars:5,consts:[[1,"card","flex","justify-center"],["orientation","vertical","labelOrientation","vertical",3,"value"],["selector","meter-group-vertical-demo",3,"code"]],template:function(t,l){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Layout of the MeterGroup is configured with the "),a(3,"i"),o(4,"orientation"),r(),o(5," property that accepts either "),a(6,"i"),o(7,"horizontal"),r(),o(8," or "),a(9,"i"),o(10,"vertical"),r(),o(11," as available options."),r()(),a(12,"div",0),c(13,"p-metergroup",1),r(),c(14,"app-code",2)),t&2&&(n(13),y(C(4,ce)),p("value",l.value),n(),p("code",l.code))},dependencies:[d,s,v,f,u],encapsulation:2})}return e})();var me=()=>["MeterGroup"],ee=(()=>{class e{ptComponent=X;docs=[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:q},{id:"multiple",label:"Multiple",component:Q},{id:"icon",label:"Icon",component:K},{id:"label",label:"Label",component:H},{id:"vertical",label:"Vertical",component:Z},{id:"minmax",label:"Min Max",component:J},{id:"template",label:"Template",component:Y},{id:"accessibility",label:"Accessibility",component:$}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular MeterGroup Component","header","MeterGroup","description","MeterGroup displays scalar measurements within a known range.","themeDocs","metergroup",3,"docs","ptDocs","apiDocs"]],template:function(t,l){t&1&&c(0,"app-doc",0),t&2&&p("docs",l.docs)("ptDocs",l.ptComponent)("apiDocs",C(3,me))},dependencies:[V],encapsulation:2})}return e})();var xt=[{path:"",component:ee}];export{xt as default};
