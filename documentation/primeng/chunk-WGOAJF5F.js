import{b as g}from"./chunk-FKOOMXTU.js";import{a as s}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ba as u,ca as f}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import"./chunk-D2XKNHFS.js";import{Eb as c,Fb as r,Gb as i,Hb as n,Qa as m,gb as p,hc as o}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var x=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ripple-accessibility-doc"]],decls:12,vars:0,template:function(t,l){t&1&&(r(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),i(),r(3,"p"),o(4,"Ripple element has the "),r(5,"i"),o(6,"aria-hidden"),i(),o(7," attribute as true so that it gets ignored by the screen readers."),i(),r(8,"h3"),o(9,"Keyboard Support"),i(),r(10,"p"),o(11,"Component does not include any interactive elements."),i()())},dependencies:[a],encapsulation:2})}return e})();var y=(()=>{class e{code={basic:`<div pRipple class="box" style="border: 1px solid rgba(75, 175, 80, 0.3); --p-ripple-background: rgba(75, 175, 80, 0.3)">
    Green
</div>
<div pRipple class="box" style="border: 1px solid rgba(255, 193, 6, 0.3); --p-ripple-background: rgba(255, 193, 6, 0.3)">
    Orange
</div>
<div pRipple class="box" style="border: 1px solid rgba(156, 39, 176, 0.3); --p-ripple-background: rgba(156, 39, 176, 0.3)">
    Purple
</div>`,html:`<div class="flex justify-center gap-2">
    <div pRipple class="box" style="border: 1px solid rgba(75, 175, 80, 0.3); --p-ripple-background: rgba(75, 175, 80, 0.3)">
        Green
    </div>
    <div pRipple class="box" style="border: 1px solid rgba(255, 193, 6, 0.3); --p-ripple-background: rgba(255, 193, 6, 0.3)">
        Orange
    </div>
    <div pRipple class="box" style="border: 1px solid rgba(156, 39, 176, 0.3); --p-ripple-background: rgba(156, 39, 176, 0.3)">
        Purple
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'ripple-custom-demo',
    templateUrl: './ripple-custom-demo.html',
    standalone: true,
    imports: [Ripple],
    styles: [
        \` :host {
                .box {
                    padding: 2rem;
                    border-radius: 10px;
                    width: 110px;
                    text-align: center;
                }
            }\`
    ],
})
export class RippleCustomDemo {
}`,scss:`:host {
            .box {
                padding: 2rem;
                border-radius: 10px;
                width: 110px;
                text-align: center;
            }
        }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["custom-doc"]],decls:17,vars:1,consts:[[1,"card","flex","flex-col","gap-4","items-center"],[1,"mx-1","h-8","w-8","rounded-border","inline-flex","items-center","justify-center","bg-primary","text-primary-contrast"],[1,"pi","pi-palette"],[1,"flex","justify-center","gap-2"],["pRipple","",1,"box",2,"border","1px solid rgba(75, 175, 80, 0.3)","--p-ripple-background","rgba(75, 175, 80, 0.3)"],["pRipple","",1,"box",2,"border","1px solid rgba(255, 193, 6, 0.3)","--p-ripple-background","rgba(255, 193, 6, 0.3)"],["pRipple","",1,"box",2,"border","1px solid rgba(156, 39, 176, 0.3)","--p-ripple-background","rgba(156, 39, 176, 0.3)"],["selector","ripple-custom-demo",3,"code"]],template:function(t,l){t&1&&(r(0,"app-docsectiontext")(1,"p"),o(2,"Styling Demo Content."),i()(),r(3,"div",0)(4,"span"),o(5,"Ripple option at the "),r(6,"span",1),n(7,"i",2),i(),o(8," configurator needs to be turned on for the demo."),i(),r(9,"div",3)(10,"div",4),o(11,"Green"),i(),r(12,"div",5),o(13,"Orange"),i(),r(14,"div",6),o(15,"Purple"),i()()(),n(16,"app-code",7)),t&2&&(m(16),c("code",l.code))},dependencies:[f,u,s,a],styles:["[_nghost-%COMP%]   .box[_ngcontent-%COMP%]{padding:2rem;border-radius:10px;width:110px;text-align:center}"]})}return e})();var v=(()=>{class e{code={basic:'<div pRipple class="ripple-box">Default</div>',html:`<div class="card flex flex-col items-center gap-4">
    <div pRipple class="ripple-box">Default</div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'ripple-default-demo',
    templateUrl: './ripple-default-demo.html',
    styles: [
        \` :host {
                .ripple-box {
                    display: flex;
                    user-select: none;
                    justify-content: center;
                    align-items: center;
                    padding: 3rem;
                    font-weight: bold;
                    background: var(--p-content-background);
                    border: 1px solid var(--p-content-border-color);
                    border-radius: var(--p-content-border-radius);
                }
            }\`
    ],
    standalone: true,
    imports: [Ripple]
})
export class RippleDefaultDemo {
}`,scss:`:host {
                .ripple-box {
                    display: flex;
                    user-select: none;
                    justify-content: center;
                    align-items: center;
                    padding: 3rem;
                    font-weight: bold;
                    background: var(--p-content-background);
                    border: 1px solid var(--p-content-border-color);
                    border-radius: var(--p-content-border-radius);
                }
            }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["default-doc"]],decls:12,vars:1,consts:[[1,"card","flex","flex-col","items-center","gap-4"],[1,"mx-1","h-8","w-8","rounded-border","inline-flex","items-center","justify-center","bg-primary","text-primary-contrast"],[1,"pi","pi-palette"],["pRipple","",1,"ripple-box"],["selector","ripple-default-demo",3,"code"]],template:function(t,l){t&1&&(r(0,"app-docsectiontext")(1,"p"),o(2,"Default Demo Content."),i()(),r(3,"div",0)(4,"span"),o(5,"Ripple option at the "),r(6,"span",1),n(7,"i",2),i(),o(8," configurator needs to be turned on for the demo."),i(),r(9,"div",3),o(10,"Default"),i()(),n(11,"app-code",4)),t&2&&(m(11),c("code",l.code))},dependencies:[f,u,s,a],styles:["[_nghost-%COMP%]   .ripple-box[_ngcontent-%COMP%]{display:flex;-webkit-user-select:none;user-select:none;justify-content:center;align-items:center;padding:3rem;font-weight:700;background:var(--p-content-background);border:1px solid var(--p-content-border-color);border-radius:var(--p-content-border-radius)}"]})}return e})();var h=(()=>{class e{code={typescript:"import { RippleModule } from 'primeng/ripple';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ripple-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&n(0,"app-code",0),t&2&&c("code",l.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var D=(()=>{class e{docs=[{id:"import",label:"Import",component:h},{id:"default",label:"Default",component:v},{id:"custom",label:"Custom",component:y},{id:"accessibility",label:"Accessibility",component:x}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular Ripple Component","header","Ripple","description","Ripple directive adds ripple effect to the host element.","themeDocs","ripple",3,"docs"]],template:function(t,l){t&1&&n(0,"app-doc",0),t&2&&c("docs",l.docs)},dependencies:[g],styles:["[_nghost-%COMP%]     .card-container .card{width:75px;height:75px;display:flex;align-items:center;justify-content:center;margin-right:1rem;-webkit-user-select:none;user-select:none;padding:0}[_nghost-%COMP%]     .card-container .card.primary-box{background-color:var(--primary-color);padding:0;color:var(--primary-color-text)}[_nghost-%COMP%]     .card-container .card.styled-box-green .p-ink{background:#4baf504d}[_nghost-%COMP%]     .card-container .card.styled-box-orange .p-ink{background:#ffc1064d}[_nghost-%COMP%]     .card-container .card.styled-box-purple .p-ink{background:#9c27b04d}[_nghost-%COMP%]     .card-container .card:last-child{margin-right:0}"]})}return e})();var B=[{path:"",component:D}];export{B as default};
