import{a as w,b as N}from"./chunk-E5PMYDSG.js";import{b as E}from"./chunk-FKOOMXTU.js";import{a as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as D}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as h}from"./chunk-D2XKNHFS.js";import{Eb as o,Fb as s,Gb as i,Hb as c,Lc as C,Qa as n,Sb as m,ec as b,gb as d,gc as u,hc as e,ja as g,sc as l,tc as y,uc as x}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var T=()=>["py-4","px-8","bg-primary text-primary-contrast","font-semibold","rounded-lg"],S=()=>["cursor-pointer","select-none","border"],I=t=>({"bg-primary text-primary-contrast border-primary":t}),j=(t,F)=>["p-4 rounded-lg",t,F],P=()=>["py-4","px-8","bg-primary","text-primary-contrast","font-semibold","rounded-lg"],M=(()=>{class t{active1=g(!1);active2=g(!1);nestedClasses=C(()=>["p-4","rounded-lg",{"bg-primary text-primary-contrast":this.active2()},["cursor-pointer select-none","border",{"bg-primary-100 text-primary-800":!this.active2()},["shadow-sm hover:shadow-lg","transition-all"]]]);toggle1(){this.active1.set(!this.active1())}toggle2(){this.active2.set(!this.active2())}code={basic:`<div class="flex flex-col gap-4">
    <div class="font-semibold">pClass Directive</div>
    <div class="flex flex-wrap items-center gap-4">
        <div pClass="py-4 px-8 border border-surface rounded-lg">String</div>
        <div [pClass]="['py-4', 'px-8', 'bg-primary text-primary-contrast', 'font-semibold', 'rounded-lg']">Array</div>
        <div [pClass]="['p-4 rounded-lg', ['cursor-pointer', 'select-none', 'border'], { 'bg-primary text-primary-contrast border-primary': active1() }]" (click)="toggle1()">Combined</div>
        <div [pClass]="nestedClasses()" (click)="toggle2()">Nested</div>
    </div>
</div>

<div class="flex flex-col gap-4">
    <div class="font-semibold">Native Class Directive</div>
    <div class="flex flex-wrap items-center gap-4">
        <div class="py-4 px-8 border border-surface rounded-lg">String</div>
        <div [class]="['py-4', 'px-8', 'bg-primary', 'text-primary-contrast', 'font-semibold', 'rounded-lg']">Array</div>
        <div
            class="p-4 rounded-lg"
            [class]="['cursor-pointer', 'select-none', 'border']"
            [class.bg-primary]="active1()"
            [class.text-primary-contrast]="active1()"
            [class.border-surface]="active1()"
            [class.border-primary]="active1()"
            (click)="toggle1()"
        >
            Combined
        </div>
    </div>
</div>`,html:`<div class="card">
    <div class="flex justify-between gap-4">
        <div class="flex flex-col gap-4">
            <div class="font-semibold">pClass Directive</div>
            <div class="flex flex-wrap items-center gap-4">
                <div pClass="py-4 px-8 border border-surface rounded-lg">String</div>
                <div [pClass]="['py-4', 'px-8', 'bg-primary text-primary-contrast', 'font-semibold', 'rounded-lg']">Array</div>
                <div [pClass]="['p-4 rounded-lg', ['cursor-pointer', 'select-none', 'border'], { 'bg-primary text-primary-contrast border-primary': active1() }]" (click)="toggle1()">Combined</div>
                <div [pClass]="nestedClasses()" (click)="toggle2()">Nested</div>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="font-semibold">Native Class Directive</div>
            <div class="flex flex-wrap items-center gap-4">
                <div class="py-4 px-8 border border-surface rounded-lg">String</div>
                <div [class]="['py-4', 'px-8', 'bg-primary', 'text-primary-contrast', 'font-semibold', 'rounded-lg']">Array</div>
                <div
                    class="p-4 rounded-lg"
                    [class]="['cursor-pointer', 'select-none', 'border']"
                    [class.bg-primary]="active1()"
                    [class.text-primary-contrast]="active1()"
                    [class.border-surface]="active1()"
                    [class.border-primary]="active1()"
                    (click)="toggle1()"
                >
                    Combined
                </div>
            </div>
        </div>
    </div>
</div>`,typescript:`import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PClassModule } from 'primeng/pclass';

@Component({
    selector: 'classnames-basic-demo',
    templateUrl: './classnames-basic-demo.html',
    standalone: true,
    imports: [ClassNamesModule, CommonModule]
})
export class ClassNamesDemo {
    active1 = signal<boolean>(false);

    active2 = signal<boolean>(false);

    nestedClasses = computed(() => [
        'p-4',
        'rounded-lg',
        {
            'bg-primary text-primary-contrast': this.active2()
        },
        [
            'cursor-pointer select-none',
            'border',
            {
                'bg-primary-100 text-primary-800': !this.active2()
            },
            ['shadow-sm hover:shadow-lg', 'transition-all']
        ]
    ]);

    toggle1() {
        this.active1.set(!this.active1());
    }

    toggle2() {
        this.active2.set(!this.active2());
    }
}`};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=d({type:t,selectors:[["classnames-basic-doc"]],decls:44,vars:25,consts:[["href","https://github.com/tailwindlabs/tailwindcss-intellisense?tab=readme-ov-file#tailwindcssclassattributes","target","_blank","rel","noopener noreferrer"],[1,"card"],[1,"flex","justify-between","gap-4"],[1,"flex","flex-col","gap-4"],[1,"font-semibold"],[1,"flex","flex-wrap","items-center","gap-4"],["pClass","py-4 px-8 border border-surface rounded-lg"],[3,"pClass"],[3,"click","pClass"],[1,"py-4","px-8","border","border-surface","rounded-lg"],[1,"p-4","rounded-lg",3,"click"],["selector","classnames-basic-demo",3,"code"]],template:function(r,a){r&1&&(s(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"pClass"),i(),e(4," directive accepts a "),s(5,"i"),e(6,"string"),i(),e(7,", "),s(8,"i"),e(9,"array"),i(),e(10,", "),s(11,"i"),e(12,"object"),i(),e(13," or any combination of these types with support for nesting. Angular's native class directive does not support combining multiple types with a single directive, nor white-space separated values in a single string. "),i(),s(14,"p"),e(15," Note: For Tailwind Users, it is recommended to use the "),s(16,"a",0),e(17,"classAttributes"),i(),e(18," configuration for intellisense support. "),i()(),s(19,"div",1)(20,"div",2)(21,"div",3)(22,"div",4),e(23,"pClass Directive"),i(),s(24,"div",5)(25,"div",6),e(26,"String"),i(),s(27,"div",7),e(28,"Array"),i(),s(29,"div",8),m("click",function(){return a.toggle1()}),e(30,"Combined"),i(),s(31,"div",8),m("click",function(){return a.toggle2()}),e(32,"Nested"),i()()(),s(33,"div",3)(34,"div",4),e(35,"Native Class Directive"),i(),s(36,"div",5)(37,"div",9),e(38,"String"),i(),s(39,"div"),e(40,"Array"),i(),s(41,"div",10),m("click",function(){return a.toggle1()}),e(42," Combined "),i()()()()(),c(43,"app-code",11)),r&2&&(n(27),o("pClass",l(16,T)),n(2),o("pClass",x(20,j,l(17,S),y(18,I,a.active1()))),n(2),o("pClass",a.nestedClasses()),n(8),u(l(23,P)),n(2),u(l(24,S)),b("bg-primary",a.active1())("text-primary-contrast",a.active1())("border-surface",a.active1())("border-primary",a.active1()),n(2),o("code",a.code))},dependencies:[D,v,N,w,h],encapsulation:2})}return t})();var k=(()=>{class t{code={typescript:"import { ClassNamesModule } from 'primeng/classnames'"};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=d({type:t,selectors:[["classnames-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,a){r&1&&c(0,"app-code",0),r&2&&o("code",a.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return t})();var U=()=>["ClassNames"],A=(()=>{class t{docs=[{id:"import",label:"Import",component:k},{id:"examples",label:"Examples",component:M}];static \u0275fac=function(r){return new(r||t)};static \u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ClassNames Directive","header","ClassNames","description","ClassNames provides extended class binding functionality that is not possible with the native Angular directives.",3,"docs","apiDocs"]],template:function(r,a){r&1&&c(0,"app-doc",0),r&2&&o("docs",a.docs)("apiDocs",l(2,U))},dependencies:[E],encapsulation:2})}return t})();var Z=[{path:"",component:A}];export{Z as default};
