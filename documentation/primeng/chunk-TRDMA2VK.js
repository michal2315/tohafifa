import{a as C,b as h}from"./chunk-E7PBLJHB.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import{b as v}from"./chunk-FKOOMXTU.js";import{a as d}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as c}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as y}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as P,ha as b}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import"./chunk-D2XKNHFS.js";import{Eb as r,Fb as o,Gb as t,Hb as a,Na as f,Qa as p,gb as s,hc as e,sc as g,tc as x}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var S=(()=>{class n{code={typescript:`import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
    providers: [
        providePrimeNG({
            pt: {
                panel: {
                    header: {
                        class: 'bg-primary text-primary-contrast'
                    }
                },
                autocomplete: {
                    pcInputText: {
                        root: 'w-64' // OR { class: 'w-64' }
                    }
                }
            }
        })
    ]
};`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["global-doc"]],decls:16,vars:1,consts:[["hideToggleCode","","importCode","","hideStackBlitz","",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," PassThrough object can also be defined at a global level to apply all components in an application using the "),o(3,"i"),e(4,"providePrimeNG"),t(),e(5," provider. For example, with the configuration here all panel headers have the "),o(6,"i"),e(7,"bg-primary"),t(),e(8," style class and all autocomplete components have a fixed width. These settings can be overridden by a particular component as components "),o(9,"i"),e(10,"pt"),t(),e(11," property has higher precedence over global "),o(12,"i"),e(13,"pt"),t(),e(14," by default. "),t()(),a(15,"app-code",0)),i&2&&(p(15),r("code",l.code))},dependencies:[c,d],encapsulation:2})}return n})();var T=(()=>{class n{code={typescript:`import { Component } from '@angular/core';
import { PassThroughContext } from 'primeng/api';
import { Panel, PanelModule, PanelPassThrough } from 'primeng/panel';

@Component({
    selector: 'panel-pt-demo',
    template: \`
        <p-panel header="Header" [pt]="pt">
            Content
        </p-panel>
    \`,
    standalone: true,
    imports: [PanelModule]
})
export class PanelPtDemo {
   pt: PanelPassThrough<Panel> = {
        header: (context: PassThroughContext<Panel>) => {
            const instance = context.instance;
            const element = instance.el;

            return {
                id: 'myPanelHeader',
                'data-custom': 'prime',
                style: {
                    userSelect: 'none'
                },
                class: [{ 'overflow-hidden': instance.toggleable }, '!text-white font-bold !p-0 !bg-transparent !border-none']
            };
        }
    };
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["instance-doc"]],decls:7,vars:1,consts:[["hideToggleCode","","importCode","","hideStackBlitz","",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"In cases where you need to access the UI Component instance, define a component passthrough type that exposes the component instance or a function that receives a "),o(3,"i"),e(4,"PassThroughContext"),t(),e(5," as parameter."),t()(),a(6,"app-code",0)),i&2&&(p(6),r("code",l.code))},dependencies:[c,d],encapsulation:2})}return n})();var D=(()=>{class n{pt={root:"!border !border-transparent !rounded-2xl !p-4 !bg-gradient-to-br !from-indigo-600 !to-indigo-400",header:{id:"myPanelHeader","data-custom":"prime",style:{userSelect:"none"},class:["!text-white font-bold !p-0 !bg-transparent !border-none"],onclick:()=>{console.log("Header Clicked")}},content:{class:"!text-white dark:text-primary-200 !p-0 mt-2 !font-medium"},title:"text-xl"};code={typescript:`import { Component } from '@angular/core';
import { Panel, PanelModule, PanelPassThrough } from 'primeng/panel';

@Component({
    selector: 'panel-pt-demo',
    templateUrl: \`
        <p-panel header="Header" [pt]="pt">
            ...
        </p-panel>
    \`,
    standalone: true,
    imports: [PanelModule]
})
export class PanelPtDemo {
     pt: PanelPassThrough<Panel> = {
        root: '!border !border-transparent !rounded-2xl !p-4 !bg-gradient-to-br !from-indigo-600 !to-indigo-400',
        header: {
            id: 'myPanelHeader',
            'data-custom': 'prime',
            style: {
                userSelect: 'none'
            },
            class: ['!text-white font-bold !p-0 !bg-transparent !border-none'],
            onclick: () => {
                console.log('Header Clicked');
            }
        },
        content: { class: '!text-white dark:text-primary-200 !p-0 mt-2 !font-medium' },
        title: 'text-xl'
    };
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["introduction-doc"]],decls:33,vars:3,consts:[[1,"video-container","mb-4"],["width","560","height","315","src",f`https://www.youtube.com/embed/ehHZ2ip8RXQ?si=wwA09dwLdQ1DNl7I`,"frameborder","0","allowfullscreen",""],[3,"routerLink"],[1,"card"],["header","PT Panel",3,"pt"],[1,"m-0"],["selector","panel-pt-demo","hideToggleCode","","importCode","","hideStackBlitz","",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," In traditional 3rd party UI libraries, users are limited to the API provided by component author. This API commonly consists of inputs, outputs, and content projection. Whenever a requirement emerges for a new customization option in the API, the component author needs to develop and publish it with a new release. "),t(),o(3,"p"),e(4," Vision of PrimeTek is "),o(5,"i"),e(6,'"Your Components, Not Ours"'),t(),e(7,". The pass through feature is a key element to implement this vision by exposing the component internals in order to apply arbitrary attributes and listeners to the DOM elements. The primary advantage of this approach is that it frees you from being restricted by the main component API. We recommend considering the pass-through feature whenever you need to tailor a component that lacks a built-in feature for your specific requirement. "),t(),o(8,"p"),e(9," Each component has a special "),o(10,"i"),e(11,"pt"),t(),e(12," property to define an object with keys corresponding to the available DOM elements. A value of a key can either be a string, an object or a function to define the arbitrary properties such as styling, aria, data-* or custom attributes for the element. If the value is a string or a function that returns a string, it serves as a shorthand for a style class definition. Every component documentation has a dedicated segment to document the available section names in the interactive PT Viewer. "),t(),o(13,"div",0),a(14,"iframe",1),t(),o(15,"h3"),e(16,"Panel Example"),t(),o(17,"p"),e(18," In this example, a Panel is customized with various options through "),o(19,"i"),e(20,"pt"),t(),e(21,". The styling is overriden with Tailwind CSS and header receives custom attributes along with a click event. The attributes passed to the header are not available in the component API, thanks to PassThrough feature, this is no longer an issue as you are not limited to the component api. Note that, you may avoid the "),o(22,"i"),e(23,"!"),t(),e(24," based overrides in Tailwind classes if you setup CSS Layers with PrimeNG. Visit the "),o(25,"a",2),e(26,"Override"),t(),e(27," section at Tailwind integration for examples. "),t()(),o(28,"div",3)(29,"p-panel",4)(30,"p",5),e(31," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),t()()(),a(32,"app-code",6)),i&2&&(p(25),r("routerLink","/tailwind"),p(4),r("pt",l.pt),p(3),r("code",l.code))},dependencies:[c,d,h,C,y],encapsulation:2})}return n})();var E=(()=>{class n{code={typescript:`import { Component } from '@angular/core';
import { Panel, PanelModule, PanelPassThrough } from 'primeng/panel';

@Component({
    template: \`
        <p-panel header="Header" [pt]="pt">
            Content
        </p-panel>
    \`,
    standalone: true,
    imports: [PanelModule]
})
export class PanelPtDemo {
   pt: PanelPassThrough<Panel> = {
        hooks: {
            onInit: () => {
                //panel ngOnInit
            },
            onDestroy: () => {
                //panel ngOnDestroy
            }
        }
    };
}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["life-cycle-doc"]],decls:34,vars:1,consts:[["hideToggleCode","","importCode","","hideStackBlitz","",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Lifecycle hooks of components are exposed as pass through using the "),o(3,"i"),e(4,"hooks"),t(),e(5," property so that callback functions can be registered. Available callbacks are "),o(6,"i"),e(7,"onBeforeInit"),t(),e(8,", "),o(9,"i"),e(10,"onInit"),t(),e(11,", "),o(12,"i"),e(13,"onChanges"),t(),e(14,", "),o(15,"i"),e(16,"onDoCheck"),t(),e(17,", "),o(18,"i"),e(19,"onAfterContentInit"),t(),e(20,", "),o(21,"i"),e(22,"onAfterContentChecked"),t(),e(23,", "),o(24,"i"),e(25,"onAfterViewInit"),t(),e(26,", "),o(27,"i"),e(28,"onAfterViewChecked"),t(),e(29," and "),o(30,"i"),e(31,"onDestroy"),t(),e(32,". Refer to the Angular documentation for detailed information about lifecycle hooks. "),t()(),a(33,"app-code",0)),i&2&&(p(33),r("code",l.code))},dependencies:[c,d],encapsulation:2})}return n})();var A=()=>({root:"!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black"}),I=n=>({root:"!px-4 !py-3",icon:"!text-xl !text-violet-500 dark:!text-violet-400",label:"!text-lg !text-violet-500 dark:!text-violet-400",pcBadge:n}),w=(()=>{class n{code={basic:`<p-button
    type="button"
    label="Messages"
    icon="pi pi-inbox"
    badge="2"
    variant="outlined"
    severity="secondary"
    [pt]="{
        root: '!px-4 !py-3',
        icon: '!text-xl !text-violet-500 dark:!text-violet-400',
        label: '!text-lg !text-violet-500 dark:!text-violet-400',
        pcBadge: {
            root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
        }
    }"
/>`,html:`<div class="card flex justify-center">
    <p-button
        type="button"
        label="Messages"
        icon="pi pi-inbox"
        badge="2"
        variant="outlined"
        severity="secondary"
        [pt]="{
            root: '!px-4 !py-3',
            icon: '!text-xl !text-violet-500 dark:!text-violet-400',
            label: '!text-lg !text-violet-500 dark:!text-violet-400',
            pcBadge: {
                root: '!bg-violet-500 dark:!bg-violet-400 !text-white dark:!text-black'
            }
        }"
    />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'pc-prefix-demo',
    templateUrl: './pc-prefix-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class PcPrefixDemo {}`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["pc-prefix-doc"]],decls:15,vars:5,consts:[[1,"card","flex","justify-center"],["type","button","label","Messages","icon","pi pi-inbox","badge","2","variant","outlined","severity","secondary",3,"pt"],["selector","pc-prefix-demo",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," A UI component may also use other UI components, in this case section names are prefixed with "),o(3,"i"),e(4,"pc"),t(),e(5," (Prime Component) to denote the PrimeNG component begin used. This distinguishes components from standard DOM elements and indicating the necessity for a nested structure. For example, the "),o(6,"i"),e(7,"badge"),t(),e(8," section is identified as "),o(9,"i"),e(10,"pcBadge"),t(),e(11," because the button component incorporates the badge component internally. "),t()(),o(12,"div",0),a(13,"p-button",1),t(),a(14,"app-code",2)),i&2&&(p(13),r("pt",x(3,I,g(2,A))),p(),r("code",l.code))},dependencies:[c,d,h,b,P],encapsulation:2})}return n})();var k=(()=>{class n{codeGlobal={typescript:`import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
    providers: [
        providePrimeNG({
            pt: {
                panel: {
                    header: {
                        'data-custom': 'acme-panel',
                        class: 'bg-primary text-primary-contrast'
                    },
                    content: 'font-medium'
                }
            }
        })
    ]
};`};codeComponent={typescript:`import { Component } from '@angular/core';
import { Panel, PanelModule, PanelPassThrough } from 'primeng/panel';

@Component({
    selector: 'panel-pt-demo',
    template: \`
        <p-panel [pt]="pt">
            Content
        </p-panel>
    \`,
    standalone: true,
    imports: [PanelModule]
})
export class PanelPtDemo {
    pt: PanelPassThrough<Panel> = {
        header: {
            class: 'border border-primary'
        }
    };
}

// Output:
// panel.header.data-custom => 'acme-panel'
// panel.header.class => 'border border-primary'
// panel.content.class => 'font-medium'`};codeComponentTrueTrue={typescript:`import { Component } from '@angular/core';
import { Panel, PanelModule, PanelPassThrough } from 'primeng/panel';

@Component({
    selector: 'panel-pt-demo',
    template: \`
        <p-panel [pt]="pt" [ptOptions]="{mergeSections: true, mergeProps: true}">
            Content
        </p-panel>
    \`,
    standalone: true,
    imports: [PanelModule]
})
export class PanelPtDemo {
    pt: PanelPassThrough<Panel> = {
        header: {
            class: 'bg-primary text-primary-contrast'
        }
    };
}

// Output:
// panel.header.data-custom => 'acme-panel'
// panel.header.class => 'bg-primary text-primary-contrast border border-primary'
// panel.content.class => 'font-medium'`};codeComponentFalseTrue={typescript:`import { Component } from '@angular/core';
import { Panel, PanelModule, PanelPassThrough } from 'primeng/panel';

@Component({
    selector: 'panel-pt-demo',
    template: \`
        <p-panel [pt]="pt" [ptOptions]="{mergeSections: false, mergeProps: true}">
            Content
        </p-panel>
    \`,
    standalone: true,
    imports: [PanelModule]
})
export class PanelPtDemo {
    pt: PanelPassThrough<Panel> = {
        header: {
            class: 'bg-primary text-primary-contrast'
        }
    };
}

// Output:
// panel.header.class => 'bg-primary text-primary-contrast border border-primary'`};codeComponentFalseFalse={typescript:`import { Component } from '@angular/core';
import { Panel, PanelModule, PanelPassThrough } from 'primeng/panel';

@Component({
    selector: 'panel-pt-demo',
    template: \`
        <p-panel [pt]="pt" [ptOptions]="{mergeSections: false, mergeProps: false}">
            Content
        </p-panel>
    \`,
    standalone: true,
    imports: [PanelModule]
})
export class PanelPtDemo {
    pt: PanelPassThrough<Panel> = {
        header: {
            class: 'bg-primary text-primary-contrast'
        }
    };
}

// Output:
// panel.header.class => 'border border-primary'`};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["use-pt-doc"]],decls:41,vars:5,consts:[[1,"mt-4"],["hideToggleCode","","importCode","","hideStackBlitz","",3,"code"]],template:function(i,l){i&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"The "),o(3,"i"),e(4,"\u2060ptOptions"),t(),e(5," property determines how a component's local PassThrough configuration merges with the global PT configuration, as demonstrated in the following examples using both global and component-level settings."),t(),o(6,"p",0),e(7," The "),o(8,"i"),e(9,"mergeSections"),t(),e(10," defines whether the sections from the main configuration gets added and the "),o(11,"i"),e(12,"mergeProps"),t(),e(13," controls whether to override or merge the defined props. Defaults are "),o(14,"i"),e(15,"true"),t(),e(16," for "),o(17,"i"),e(18,"mergeSections"),t(),e(19," and "),o(20,"i"),e(21,"false"),t(),e(22," for "),o(23,"i"),e(24,"mergeProps"),t(),e(25,". "),t(),o(26,"h3"),e(27,"Global Configuration"),t(),a(28,"app-code",1),o(29,"h3"),e(30,"mergeSections: true, mergeProps: false (default)"),t(),a(31,"app-code",1),o(32,"h3"),e(33,"mergeSections: true, mergeProps: true"),t(),a(34,"app-code",1),o(35,"h3"),e(36,"mergeSections: false, mergeProps: true"),t(),a(37,"app-code",1),o(38,"h3"),e(39,"mergeSections: false, mergeProps: false"),t(),a(40,"app-code",1),t()),i&2&&(p(28),r("code",l.codeGlobal),p(3),r("code",l.codeComponent),p(3),r("code",l.codeComponentTrueTrue),p(3),r("code",l.codeComponentFalseTrue),p(3),r("code",l.codeComponentFalseFalse))},dependencies:[c,d],encapsulation:2})}return n})();var M=(()=>{class n{docs=[{id:"introduction",label:"Introduction",component:D},{id:"pc-prefix",label:"PC Prefix",component:w},{id:"instance",label:"Instance",component:T},{id:"life-cycle",label:"Lifecycle",component:E},{id:"global",label:"Global",component:S},{id:"ptoptions",label:"PT Options",component:k}];static \u0275fac=function(i){return new(i||n)};static \u0275cmp=s({type:n,selectors:[["passthrough"]],decls:1,vars:1,consts:[["docTitle","PrimeNG - Pass Through","header","Pass Through","description","The Pass Through attributes is an API to customize the internal DOM Structure of the components.",3,"docs"]],template:function(i,l){i&1&&a(0,"app-doc",0),i&2&&r("docs",l.docs)},dependencies:[v],encapsulation:2})}return n})();var ce=[{path:"",component:M}];export{ce as default};
