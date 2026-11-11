import{b as D}from"./chunk-FKOOMXTU.js";import{a as s}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import{a as y,b}from"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as B}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import{Na as x,Oa as g}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as v}from"./chunk-D2XKNHFS.js";import{Eb as i,Fb as c,Gb as d,Hb as r,Lc as u,Qa as m,gb as n,hc as p,ja as l,sc as f}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var C=()=>({"aria-label":"basic-box",class:"bg-primary text-primary-contrast flex items-center justify-center p-4 rounded-lg w-32 font-medium"}),M=(()=>{class e{isActive=l(!1);boxBinding=u(()=>({class:["flex items-center justify-center p-4 rounded-lg select-none w-[7rem] border border-primary font-medium",this.isActive()?"bg-primary text-primary-contrast":"bg-transparent text-primary-600 dark:text-primary-400"],style:{cursor:"pointer",transition:"all 0.3s"},"data-state":this.isActive()?"active":"inactive",onclick:()=>{this.isActive.set(!this.isActive())}}));code={basic:`<div [pBind]="{ 'aria-label': 'basic-box', class: 'bg-primary text-primary-contrast flex items-center justify-center p-4 rounded-lg w-32 font-medium' }">
    Static
</div>

<div [pBind]="boxBinding" pTooltip="Click to change color">
    Dynamic
</div>`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <div [pBind]="{ 'aria-label': 'basic-box', class: 'bg-primary text-primary-contrast flex items-center justify-center p-4 rounded-lg w-32 font-medium' }">
        Static
    </div>

    <div [pBind]="boxBinding" pTooltip="Click to change color">
        Dynamic
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { BindModule } from 'primeng/bind';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'bind-examples-demo',
    templateUrl: './bind-examples-demo.html',
    standalone: true,
    imports: [BindModule, TooltipModule]
})
export class BindExamplesDemo {
    isActive = signal<boolean>(false);

    boxBinding = computed(() => {
        return {
            class: ['flex items-center justify-center p-4 rounded-lg select-none w-[7rem] border border-primary font-medium', this.isActive() ? 'bg-primary text-primary-contrast' : 'bg-transparent text-primary-600 dark:text-primary-400'],
            style: { cursor: 'pointer', transition: 'all 0.3s' },
            'data-state': this.isActive() ? 'active' : 'inactive',
            onclick: () => {
                this.isActive.set(!this.isActive());
            }
        };
    });
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=n({type:e,selectors:[["examples-doc"]],decls:12,vars:4,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],[3,"pBind"],["pTooltip","Click to change color",3,"pBind"],["selector","bind-examples-demo",3,"code"]],template:function(t,o){t&1&&(c(0,"app-docsectiontext")(1,"p"),p(2,"The "),c(3,"i"),p(4,"pBind"),d(),p(5," is a directive that accepts an object of HTML attributes."),d()(),c(6,"div",0)(7,"div",1),p(8,"Static"),d(),c(9,"div",2),p(10,"Dynamic"),d()(),r(11,"app-code",3)),t&2&&(m(7),i("pBind",f(3,C)),m(2),i("pBind",o.boxBinding()),m(2),i("code",o.code))},dependencies:[s,g,x,b,y,v,B],encapsulation:2})}return e})();var T=(()=>{class e{code={typescript:"import { BindModule } from 'primeng/bind'"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=n({type:e,selectors:[["bind-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&r(0,"app-code",0),t&2&&i("code",o.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var A=(()=>{class e{docs=[{id:"bind-import",label:"Import",component:T},{id:"bind-examples",label:"Examples",component:M}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=n({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular Bind Directive","header","Bind","description","The Bind directive dynamically applies DOM element attributes using properties defined in an object.",3,"docs"]],template:function(t,o){t&1&&r(0,"app-doc",0),t&2&&i("docs",o.docs)},dependencies:[D],encapsulation:2})}return e})();var K=[{path:"",component:A}];export{K as default};
