import{a as C,b as q}from"./chunk-JNUBCW5H.js";import{a as E,b as D}from"./chunk-VGTHJBIV.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as F}from"./chunk-FKOOMXTU.js";import{a as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as B}from"./chunk-XCUGNKAG.js";import{a as s,b as P}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as S,ha as O}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w}from"./chunk-D2XKNHFS.js";import{Eb as p,Fb as t,Gb as i,Gc as I,Hb as m,Ob as A,Qa as d,Sb as u,aa as k,ba as _,gb as l,hc as e,jc as V,mb as M,mc as h,nc as x,oc as g,sc as b}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var H=(()=>{class o{id;title;static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Overlay component uses "),t(6,"i"),e(7,"dialog"),i(),e(8," role and since any attribute is passed to the root element you may define attributes like "),t(9,"i"),e(10,"aria-label"),i(),e(11," or "),t(12,"i"),e(13,"aria-labelledby"),i(),e(14," to describe the popup contents. In addition "),t(15,"i"),e(16,"aria-modal"),i(),e(17," is added since focus is kept within the popup. "),i(),t(18,"p"),e(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(20,"i"),e(21,"tabIndex"),i(),e(22," would be necessary. Overlay adds "),t(23,"i"),e(24,"aria-expanded"),i(),e(25," state attribute and "),t(26,"i"),e(27,"aria-controls"),i(),e(28," to the trigger so that the relation between the trigger and the popup is defined. "),i(),t(29,"h3"),e(30,"Overlay Keyboard Support"),i(),t(31,"p"),e(32," When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),t(33,"i"),e(34,"autofocus"),i(),e(35," to an element within the popup. "),i(),t(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),e(41,"Key"),i(),t(42,"th"),e(43,"Function"),i()()(),t(44,"tbody")(45,"tr")(46,"td")(47,"i"),e(48,"tab"),i()(),t(49,"td"),e(50,"Moves focus to the next the focusable element within the popup."),i()(),t(51,"tr")(52,"td")(53,"i"),e(54,"shift"),i(),e(55," + "),t(56,"i"),e(57,"tab"),i()(),t(58,"td"),e(59,"Moves focus to the previous the focusable element within the popup."),i()(),t(60,"tr")(61,"td")(62,"i"),e(63,"escape"),i()(),t(64,"td"),e(65,"Closes the popup and moves focus to the trigger."),i()()()()(),t(66,"h3"),e(67,"Close Button Keyboard Support"),i(),t(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),e(73,"Key"),i(),t(74,"th"),e(75,"Function"),i()()(),t(76,"tbody")(77,"tr")(78,"td")(79,"i"),e(80,"enter"),i()(),t(81,"td"),e(82,"Closes the popup and moves focus to the trigger."),i()(),t(83,"tr")(84,"td")(85,"i"),e(86,"space"),i()(),t(87,"td"),e(88,"Closes the popup and moves focus to the trigger."),i()()()()()()())},dependencies:[s],encapsulation:2})}return o})();var R=(()=>{class o{code={typescript:`
import { OverlayOptions } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

this.primeng.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["appendto-doc"]],decls:4,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Overlay can be mounted into its location, body or DOM element instance using this option."),i()(),m(3,"app-code",0)),n&2&&(d(3),p("code",r.code)("hideToggleCode",!0))},dependencies:[v,s],encapsulation:2})}return o})();var W=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["auto-zindex-doc"]],decls:6,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"autoZIndex"),i(),e(5," determines whether to automatically manage layering. Its default value is 'false'."),i()())},dependencies:[s],encapsulation:2})}return o})();var Z=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["base-zindex-doc"]],decls:6,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"baseZIndex"),i(),e(5," is base zIndex value to use in layering. Its default value is 0."),i()())},dependencies:[s],encapsulation:2})}return o})();var ne=()=>({breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"}),z=(()=>{class o{overlayVisible=!1;toggle(){this.overlayVisible=!this.overlayVisible}code={basic:`<p-button (click)="toggle()" label="Show Overlay"></p-button>
<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
    Content
</p-overlay>`,html:`
<div class="card flex justify-center">
    <p-button (click)="toggle()" label="Show Overlay"></p-button>
    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
        Content
    </p-overlay>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-basic-demo',
    templateUrl: './overlay-basic-demo.html'
})
export class OverlayBasicDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["basic-doc"]],decls:8,vars:4,consts:[[1,"card","flex","justify-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border",3,"visibleChange","visible","responsive"],["selector","overlay-basic-demo",3,"code"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Overlay is a container to display content in an overlay window. All the options mentioned above can be used as props for this component."),i()(),t(3,"div",0)(4,"p-button",1),u("click",function(){return r.toggle()}),i(),t(5,"p-overlay",2),g("visibleChange",function(f){return x(r.overlayVisible,f)||(r.overlayVisible=f),f}),e(6," Content "),i()(),m(7,"app-code",3)),n&2&&(d(5),h("visible",r.overlayVisible),p("responsive",b(3,ne)),d(2),p("code",r.code))},dependencies:[O,S,D,E,v,s],encapsulation:2})}return o})();var U=(()=>{class o{code={typescript:`
import { OverlayOptions, OverlayOnBeforeShowEvent, OverlayOnShowEvent, OverlayOnBeforeHideEvent, OverlayOnHideEvent } from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { AnimationEvent } from '@angular/animations';

this.primeng.overlayOptions: OverlayOptions = {
    onBeforeShow: (event?: OverlayOnBeforeShowEvent) => {};    // Callback to invoke before the overlay is shown.
    onShow: (event?: OverlayOnShowEvent) => {};                // Callback to invoke when the overlay is shown.
    onBeforeHide: (event?: OverlayOnBeforeHideEvent) => {};    // Callback to invoke before the overlay is hidden.
    onHide: (event?: OverlayOnHideEvent) => {};                // Callback to invoke when the overlay is hidden.
    onAnimationStart: (event?: AnimationEvent) => {};          // Callback to invoke when the animation is started.
    onAnimationDone: (event?: AnimationEvent) => {};           // Callback to invoke when the animation is done.
};`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["events-doc"]],decls:2,vars:2,consts:[[1,"py-6"],[3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"section",0),m(1,"app-code",1),i()),n&2&&(d(),p("code",r.code)("hideToggleCode",!0))},dependencies:[v],encapsulation:2})}return o})();var j=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["hide-on-escape-doc"]],decls:9,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"hideOnEscape"),i(),e(5," determines to hide the overlay when escape key pressed. Accepts boolean, default value is "),t(6,"i"),e(7,"false"),i(),e(8,"."),i()())},dependencies:[s],encapsulation:2})}return o})();var K=(()=>{class o{id;title;code={typescript:"import { OverlayModule } from 'primeng/overlay';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&m(0,"app-code",0),n&2&&p("code",r.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return o})();var L=(()=>{class o{code={typescript:`
import { OverlayOptions } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.overlayOptions: OverlayOptions = {
            mode: 'modal'
        };
    }
}`};code2={basic:`import { OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.primeng.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["mode-doc"]],decls:10,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," It has two valid values; "),t(3,"i"),e(4,"overlay"),i(),e(5," and "),t(6,"i"),e(7,"modal"),i(),e(8,". In overlay mode, a container element is opened like overlaypanel or dropdown's panel. In modal mode, the container element behaves like popup. This behaviour is similar to a dialog component. "),i()(),m(9,"app-code",0)),n&2&&(d(9),p("code",r.code)("hideToggleCode",!0))},dependencies:[v,s],encapsulation:2})}return o})();var re=()=>({width:"450px"}),J=(()=>{class o{visible=!1;docs=[{data:C("Overlay"),key:"Overlay"}];toggle(){this.visible=!this.visible}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["overlay-pt-viewer"]],decls:11,vars:5,consts:[[3,"docs"],["label","Show Overlay",3,"click"],[3,"visibleChange","visible","contentStyle"],[1,"flex","flex-col","gap-4","w-full"],[1,"font-medium","text-surface-900","dark:text-surface-0","block","mb-2"],["type","text","placeholder","Email",1,"w-full","p-3","border","border-surface-300","dark:border-surface-600","rounded-md"],[1,"flex","items-center","gap-2"],["label","Save","styleClass","w-full",3,"click"],["label","Close","styleClass","w-full",3,"click","outlined"]],template:function(n,r){n&1&&(t(0,"app-docptviewer",0)(1,"p-button",1),u("click",function(){return r.toggle()}),i(),t(2,"p-overlay",2),g("visibleChange",function(f){return x(r.visible,f)||(r.visible=f),f}),t(3,"div",3)(4,"div")(5,"span",4),e(6,"Share this document"),i(),m(7,"input",5),i(),t(8,"div",6)(9,"p-button",7),u("click",function(){return r.visible=!1}),i(),t(10,"p-button",8),u("click",function(){return r.visible=!1}),i()()()()()),n&2&&(p("docs",r.docs),d(2),h("visible",r.visible),p("contentStyle",b(4,re)),d(8),p("outlined",!0))},dependencies:[w,q,D,E,O,S],encapsulation:2})}return o})();var Q=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:J},{id:"pt.doc.overlay",label:"Overlay PT Options",component:P,data:C("Overlay")}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["overlay-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,r){n&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Overlay Pass Through"),i()(),m(4,"app-docsection",2),i()),n&2&&(d(4),p("docs",r.docs))},dependencies:[w,B],encapsulation:2})}return o})();var X=(()=>{class o{id;title;code={basic:`import { OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

const responsiveOptions: ResponsiveOverlayOptions = {
    // style?: any;                                     // Style of component in given breakpoint or media query
    // styleClass?: string;                             // Style class of component in given breakpoint or media query
    // contentStyle?: any;                              // Style of content in given breakpoint or media query
    // contentStyleClass?: string;                      // Style class of content in given breakpoint or media query
    // breakpoint?: string;                             // Breakpoint required to show component in modal mode. Exp: '640px', '10rem' etc.
    // media?: string;                                  // Media query required to show component in modal mode. Exp: '@media screen and (max-width: 640px)', '@media screen and (min-width: 640px) and (max-width: 900px)' etc.
    // direction?: ResponsiveOverlayDirectionType;      // Direction in which the component will be displayed in modal mode.
    // hideOnEscape?: boolean;                          // Hides overlay when escape key pressed.
}

this.primeng.overlayOptions: OverlayOptions = {
    responsive: responsiveOptions
};`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["responsive-doc"]],inputs:{id:"id",title:"title"},decls:43,vars:2,consts:[[3,"code","hideToggleCode"],[1,"doc-section-description"],[1,"card"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"It is the option used to determine in which mode it should appear according to the given "),t(3,"i"),e(4,"media"),i(),e(5," or "),t(6,"i"),e(7,"breakpoint"),i(),e(8,"."),i()(),m(9,"app-code",0),t(10,"p",1),e(11,"Valid values of the "),t(12,"i"),e(13,"direction"),i(),e(14," property would be;"),i(),t(15,"div",2)(16,"ul")(17,"li"),e(18,"center (default)"),i(),t(19,"li"),e(20,"top"),i(),t(21,"li"),e(22,"top-start"),i(),t(23,"li"),e(24,"top-end"),i(),t(25,"li"),e(26,"bottom"),i(),t(27,"li"),e(28,"bottom-start"),i(),t(29,"li"),e(30,"bottom-end"),i(),t(31,"li"),e(32,"left"),i(),t(33,"li"),e(34,"left-start"),i(),t(35,"li"),e(36,"left-end"),i(),t(37,"li"),e(38,"right"),i(),t(39,"li"),e(40,"right-start"),i(),t(41,"li"),e(42,"right-end"),i()()()),n&2&&(d(9),p("code",r.code)("hideToggleCode",!0))},dependencies:[v,s],encapsulation:2})}return o})();var Y=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["style-doc"]],decls:15,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"style"),i(),e(5," and "),t(6,"i"),e(7,"styleClass"),i(),e(8," are used to define styles that will be added to all overlay components. In addition, it can be used in "),t(9,"i"),e(10,"contentStyle"),i(),e(11," and "),t(12,"i"),e(13,"contentStyleClass"),i(),e(14," classes."),i()())},dependencies:[s],encapsulation:2})}return o})();var $=(()=>{class o{code={basic:`import { OverlayOptions } from 'primeng/api';
import { PrimeNG } from 'primeng/config';

this.primeng.overlayOptions: OverlayOptions = {
    appendTo: 'body'
};`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["target-doc"]],decls:24,vars:0,consts:[[1,"card"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"target"),i(),e(5," is used to detect the element that will be used to position the overlay. Valid values would be;"),i()(),t(6,"div",0)(7,"ul")(8,"li"),e(9,"@prev (default)"),i(),t(10,"li"),e(11,"@next"),i(),t(12,"li"),e(13,"@parent"),i(),t(14,"li"),e(15,"@grandparent"),i(),t(16,"li"),e(17,"Use "),t(18,"em"),e(19,"CSS selector"),i()(),t(20,"li"),e(21,"Use "),t(22,"em"),e(23,"() => HTMLElement"),i()()()())},dependencies:[s],encapsulation:2})}return o})();var ae=()=>({breakpoint:"640px",direction:"bottom",contentStyleClass:"h-20rem"});function le(o,oe){if(o&1&&e(0),o&2){let a=oe.$implicit;V(" Content - ",a.mode," ")}}var ee=(()=>{class o{overlayVisible=!1;toggle(){this.overlayVisible=!this.overlayVisible}code={basic:`<p-button (click)="toggle()" label="Show Overlay"></p-button>
<p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
    <ng-template #content let-option>
        Content - {{option.mode}}
    </ng-template>
</p-overlay>`,html:`
<div class="card flex justify-center">
    <p-button (click)="toggle()" label="Show Overlay"></p-button>
    <p-overlay [(visible)]="overlayVisible" [responsive]="{ breakpoint: '640px', direction: 'bottom', contentStyleClass: 'h-20rem' }" contentStyleClass="p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border">
        <ng-template #content let-option>
            Content - {{option.mode}}
        </ng-template>
    </p-overlay>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'overlay-template-demo',
    templateUrl: './overlay-template-demo.html'
})
export class OverlayTemplateDemo {
    overlayVisible: boolean = false;

    toggle() {
        this.overlayVisible = !this.overlayVisible;
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["overlay-template-demo"]],decls:12,vars:4,consts:[["content",""],[1,"card","flex","justify-center"],["label","Show Overlay",3,"click"],["contentStyleClass","p-6 bg-surface-0 dark:bg-surface-900 shadow rounded-border",3,"visibleChange","visible","responsive"],["selector","overlay-template-demo",3,"code"]],template:function(n,r){if(n&1){let y=A();t(0,"app-docsectiontext")(1,"p"),e(2,"Content can be customized with the "),t(3,"i"),e(4,"content"),i(),e(5," template."),i()(),t(6,"div",1)(7,"p-button",2),u("click",function(){return k(y),_(r.toggle())}),i(),t(8,"p-overlay",3),g("visibleChange",function(T){return k(y),x(r.overlayVisible,T)||(r.overlayVisible=T),_(T)}),M(9,le,1,1,"ng-template",null,0,I),i()(),m(11,"app-code",4)}n&2&&(d(8),h("visible",r.overlayVisible),p("responsive",b(3,ae)),d(3),p("code",r.code))},dependencies:[O,S,D,E,v,s],encapsulation:2})}return o})();var te=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["transition-options-doc"]],decls:9,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Transition options of the show or hide animation. The default value of "),t(3,"i"),e(4,"showTransitionOptions"),i(),e(5," is '.12s cubic-bezier(0, 0, 0.2, 1)' and the default value of "),t(6,"i"),e(7,"hideTransitionOptions"),i(),e(8," is '.1s linear'."),i()())},dependencies:[s],encapsulation:2})}return o})();var pe=()=>["Overlay","OverlayOptions"],ie=(()=>{class o{ptComponent=Q;docs=[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:z},{id:"template",label:"Template",component:ee},{id:"options",label:"Options",children:[{id:"mode",label:"Mode",component:L},{id:"responsive",label:"Responsive",component:X},{id:"append-to",label:"AppendTo",component:R},{id:"target",label:"Target",component:$},{id:"style",label:"Style",component:Y},{id:"base-z-index",label:"BaseZIndex",component:Z},{id:"auto-z-index",label:"AutoZIndex",component:W},{id:"hide-on-escape",label:"HideOnEscape",component:j},{id:"transition-options",label:"ShowTransitionOptions and HideTransitionOptions",component:te},{id:"events",label:"Events",component:U}]},{id:"accessibility",label:"Accessibility",component:H}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=l({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Overlay API - PrimeNG","header","Overlay API","description","This API allows overlay components to be controlled from the PrimeNG. In this way, all overlay components in the application can have the same behavior.","themeDocs","overlay",3,"docs","apiDocs","ptDocs"]],template:function(n,r){n&1&&m(0,"app-doc",0),n&2&&p("docs",r.docs)("apiDocs",b(3,pe))("ptDocs",r.ptComponent)},dependencies:[F],encapsulation:2})}return o})();var St=[{path:"",component:ie}];export{St as default};
