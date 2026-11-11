import{b as C}from"./chunk-FKOOMXTU.js";import{a as s,b as u}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as c}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as x,h as y}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as v,ha as h}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as g}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as n,Gb as i,Hb as l,Qa as m,gb as p,hc as o}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var S=(()=>{class e{code={command:`# Using npm
npm install primeng @primeuix/themes

# Using yarn
yarn add primeng @primeuix/themes

# Using pnpm
pnpm add primeng @primeuix/themes`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["download-doc"]],decls:7,vars:2,consts:[["href","https://www.npmjs.com/package/primeng"],[3,"code","hideToggleCode"]],template:function(t,d){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"PrimeNG is available for download on the "),n(3,"a",0),o(4,"npm registry"),i(),o(5,"."),i()(),l(6,"app-code",1)),t&2&&(m(6),r("code",d.code)("hideToggleCode",!0))},dependencies:[u,s,c],encapsulation:2})}return e})();var b=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["examples-doc"]],decls:6,vars:0,consts:[["href","https://github.com/primefaces/primeng-examples"]],template:function(t,d){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"An example starter with Angular CLI is available at "),n(3,"a",0),o(4,"GitHub"),i(),o(5,"."),i()())},dependencies:[c],encapsulation:2})}return e})();var A=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["download-doc"]],decls:13,vars:3,consts:[[1,"leading-relaxed"],[1,"doc-link",3,"routerLink"]],template:function(t,d){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Welcome to the Prime UI Ecosystem! Once you have PrimeNG up and running, we recommend exploring the following resources to gain a deeper understanding of the library."),i(),n(3,"ul",0)(4,"li")(5,"a",1),o(6,"Global configuration"),i()(),n(7,"li")(8,"a",1),o(9,"Customization of styles"),i()(),n(10,"li")(11,"a",1),o(12,"Getting support"),i()()()()),t&2&&(m(5),r("routerLink","/configuration"),m(3),r("routerLink","/theming"),m(3),r("routerLink","/support"))},dependencies:[y,x,c],encapsulation:2})}return e})();var w=(()=>{class e{code={typescript:`import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["provider-doc"]],decls:16,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,d){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2,"Add "),n(3,"i"),o(4,"providePrimeNG"),i(),o(5," and "),n(6,"i"),o(7,"provideAnimationsAsync"),i(),o(8," to the list of providers in your "),n(9,"i"),o(10,"app.config.ts"),i(),o(11," and use the "),n(12,"i"),o(13,"theme"),i(),o(14," property to configure a theme such as Aura."),i(),l(15,"app-code",0),i()),t&2&&(m(15),r("code",d.code)("hideToggleCode",!0))},dependencies:[u,s,c],encapsulation:2})}return e})();var E=(()=>{class e{code1={typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-demo',
    templateUrl: './button-demo.html',
    imports: [ButtonModule]
})
export class ButtonDemo {}`};code2={html:'<p-button label="Check" />'};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["usage-doc"]],decls:7,vars:8,consts:[[1,"card","flex","justify-center"],["label","Check"],[1,"block","mb-4",3,"code","hideStackBlitz","hideCodeSandbox","hideToggleCode"],[3,"code","hideStackBlitz","hideCodeSandbox","hideToggleCode"]],template:function(t,d){t&1&&(n(0,"app-docsectiontext")(1,"p"),o(2," Verify your setup by adding a component such as Button. Each component can be imported and registered individually so that you only include what you use for bundle optimization. Import path is available in the documentation of the corresponding component. "),i()(),n(3,"div",0),l(4,"p-button",1),i(),l(5,"app-code",2)(6,"app-code",3)),t&2&&(m(5),r("code",d.code1)("hideStackBlitz",!0)("hideCodeSandbox",!0)("hideToggleCode",!0),m(),r("code",d.code2)("hideStackBlitz",!0)("hideCodeSandbox",!0)("hideToggleCode",!0))},dependencies:[h,v,u,s,c],encapsulation:2})}return e})();var M=(()=>{class e{docs=[{id:"download",label:"Download",component:S},{id:"provider",label:"Provider",component:w},{id:"verify",label:"Verify",component:E},{id:"examples",label:"Example",component:b},{id:"nextsteps",label:"Next Steps",component:A}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Getting Started - PrimeNG","header","Installation","description","Setting up PrimeNG in an Angular CLI project.",3,"docs"]],template:function(t,d){t&1&&l(0,"app-doc",0),t&2&&r("docs",d.docs)},dependencies:[g,C],encapsulation:2})}return e})();var ee=[{path:"",component:M}];export{ee as default};
