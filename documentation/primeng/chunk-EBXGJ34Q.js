import{a as D,b as Y}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as K}from"./chunk-FKOOMXTU.js";import{a as s}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as N}from"./chunk-XCUGNKAG.js";import{a as m,b as O}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as U,h as W}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as g,ea as G,fa as h,ga as b,ha as c}from"./chunk-MCW4FHXZ.js";import{Ia as z,Ma as _}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as y}from"./chunk-D2XKNHFS.js";import{$a as E,Eb as o,Fb as n,Gb as r,Hb as p,Ib as A,Jb as P,Qa as i,S as k,Sb as j,T as C,Uc as R,Vb as I,Wb as H,X as L,ca as M,da as w,gb as l,hb as T,hc as a,kb as V,oa as x,rc as F,sc as Z}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var $=(()=>{class e{code={basic:`<p-button icon="pi pi-check" aria-label="Submit" />
<p-button icon="pi pi-check" label="Submit" />

<p-button class="youtube p-0" aria-label="Youtube">
    <i class="pi pi-youtube px-2"></i>
    <span class="px-4">Youtube</span>
</p-button>`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-accessibility-doc"]],decls:44,vars:4,consts:[[3,"code","hideToggleCode","hideStackBlitz","hideCodeSandbox"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"h3"),a(2,"Screen Reader"),r(),n(3,"p"),a(4," Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the "),n(5,"i"),a(6,"aria-label"),r(),a(7," prop, if not present "),n(8,"i"),a(9,"label"),r(),a(10," prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use "),n(11,"i"),a(12,"aria-label"),r(),a(13," so that screen readers would be able to read the element properly. "),r()(),p(14,"app-code",0),n(15,"h3"),a(16,"Keyboard Support"),r(),n(17,"div",1)(18,"table",2)(19,"thead")(20,"tr")(21,"th"),a(22,"Key"),r(),n(23,"th"),a(24,"Function"),r()()(),n(25,"tbody")(26,"tr")(27,"td")(28,"i"),a(29,"tab"),r()(),n(30,"td"),a(31,"Moves focus to the button."),r()(),n(32,"tr")(33,"td")(34,"i"),a(35,"enter"),r()(),n(36,"td"),a(37,"Activates the button."),r()(),n(38,"tr")(39,"td")(40,"i"),a(41,"space"),r()(),n(42,"td"),a(43,"Activates the button."),r()()()()()),t&2&&(i(14),o("code",u.code)("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0))},dependencies:[s,m],encapsulation:2})}return e})();var q=(()=>{class e{code={basic:`<p-button label="Emails" badge="2" styleClass="m-0" />
<p-button label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" styleClass="m-0" [outlined]="true" />`,html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-button label="Emails" badge="2" styleClass="m-0" />
    <p-button label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" styleClass="m-0" [outlined]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-badge-demo',
    templateUrl: './button-badge-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonBadgeDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-badge-demo"]],decls:13,vars:2,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Emails","badge","2","styleClass","m-0"],["label","Messages","icon","pi pi-users","badge","2","badgeSeverity","contrast","styleClass","m-0",3,"outlined"],["selector","button-badge-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Buttons have built-in "),n(3,"i"),a(4,"badge"),r(),a(5," support with badge and "),n(6,"i"),a(7,"badgeClass"),r(),a(8," properties."),r()(),n(9,"div",0),p(10,"p-button",1)(11,"p-button",2),r(),p(12,"app-code",3)),t&2&&(i(11),o("outlined",!0),i(),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var J=(()=>{class e{code={basic:'<p-button label="Submit" />',html:`<div class="card flex justify-center">
    <p-button label="Submit" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-basic-demo',
    templateUrl: './button-basic-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonBasicDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-basic-demo"]],decls:9,vars:1,consts:[[1,"card","flex","justify-center"],["label","Submit"],["selector","button-basic-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Text to display on a button is defined with the "),n(3,"i"),a(4,"label"),r(),a(5," property."),r()(),n(6,"div",0),p(7,"p-button",1),r(),p(8,"app-code",2)),t&2&&(i(8),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var Q=`
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`;var ge=`
    ${Q}

    /* For PrimeNG */
    .p-buttongroup p-button:focus .p-button {
        position: relative;
        z-index: 1;
    }

    .p-buttongroup p-button:not(:last-child) .p-button,
    .p-buttongroup p-button:not(:last-child) .p-button:hover {
        border-right: 0 none;
    }

    .p-buttongroup p-button:not(:first-of-type):not(:last-of-type) .p-button {
        border-radius: 0;
    }

    .p-buttongroup p-button:first-of-type:not(:only-of-type) .p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup p-button:last-of-type:not(:only-of-type) .p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }
`,he={root:"p-buttongroup p-component"},S=(()=>{class e extends z{name="buttongroup";style=ge;classes=he;static \u0275fac=(()=>{let d;return function(u){return(d||(d=x(e)))(u||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var De=["*"],B=(()=>{class e extends _{_componentStyle=L(S);static \u0275fac=(()=>{let d;return function(u){return(d||(d=x(e)))(u||e)}})();static \u0275cmp=l({type:e,selectors:[["p-buttonGroup"],["p-buttongroup"],["p-button-group"]],features:[F([S]),V],ngContentSelectors:De,decls:2,vars:0,consts:[["role","group",1,"p-buttongroup","p-component"]],template:function(t,u){t&1&&(I(),A(0,"span",0),H(1),P())},dependencies:[y],encapsulation:2,changeDetection:0})}return e})(),X=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=T({type:e});static \u0275inj=C({imports:[B]})}return e})();var ee=(()=>{class e{code={basic:`<p-buttongroup>
    <p-button label="Save" icon="pi pi-check" />
    <p-button label="Delete" icon="pi pi-trash" />
    <p-button label="Cancel" icon="pi pi-times" />
</p-buttongroup>`,html:`<div class="card flex justify-center">
    <p-buttongroup>
        <p-button label="Save" icon="pi pi-check" />
        <p-button label="Delete" icon="pi pi-trash" />
        <p-button label="Cancel" icon="pi pi-times" />
    </p-buttongroup>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonGroupModule } from 'primeng/buttongroup';

@Component({
    selector: 'button-group-demo',
    templateUrl: './button-group-demo.html',
    standalone: true,
    imports: [ButtonGroupModule]
})
export class ButtonGroupDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-group-demo"]],decls:12,vars:1,consts:[[1,"card","flex","justify-center"],["label","Save","icon","pi pi-check"],["label","Delete","icon","pi pi-trash"],["label","Cancel","icon","pi pi-times"],["selector","button-group-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Multiple buttons are grouped when wrapped inside an element with "),n(3,"i"),a(4,"ButtonGroup"),r(),a(5," component."),r()(),n(6,"div",0)(7,"p-buttongroup"),p(8,"p-button",1)(9,"p-button",2)(10,"p-button",3),r()(),p(11,"app-code",4)),t&2&&(i(11),o("code",u.code))},dependencies:[s,m,X,B,c,b],encapsulation:2})}return e})();var te=(()=>{class e{code={basic:`<button pButton>
    <i class="pi pi-check" pButtonIcon></i>
    <span pButtonLabel>Save</span>
</button>`,html:`<div class="card flex justify-center">
    <button pButton>
        <i class="pi pi-check" pButtonIcon></i>
        <span pButtonLabel>Save</span>
    </button>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-directive-demo',
    templateUrl: './button-directive-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonDirectiveDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-directive-demo"]],decls:18,vars:1,consts:[[1,"card","flex","justify-center"],["pButton",""],["pButtonIcon","",1,"pi","pi-check"],["pButtonLabel",""],["selector","button-directive-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Button can also be used as directive using "),n(3,"i"),a(4,"pButton"),r(),a(5," along with "),n(6,"i"),a(7,"pButtonLabel"),r(),a(8," and "),n(9,"i"),a(10,"pButtonIcon"),r(),a(11," helper directives."),r()(),n(12,"div",0)(13,"button",1),p(14,"i",2),n(15,"span",3),a(16,"Save"),r()()(),p(17,"app-code",4)),t&2&&(i(17),o("code",u.code))},dependencies:[s,m,c,h,g,G],encapsulation:2})}return e})();var oe=(()=>{class e{code={basic:'<p-button label="Submit" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-button label="Submit" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-disabled-demo',
    templateUrl: './button-disabled-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonDisabledDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-disabled-demo"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["label","Submit",3,"disabled"],["selector","button-disabled-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"When "),n(3,"i"),a(4,"disabled"),r(),a(5," is present, the element cannot be edited and focused."),r()(),n(6,"div",0),p(7,"p-button",1),r(),p(8,"app-code",2)),t&2&&(i(7),o("disabled",!0),i(),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var ne=(()=>{class e{code={basic:`<p-button icon="pi pi-home" aria-label="Save" />
<p-button label="Profile" icon="pi pi-user" />
<p-button label="Save" icon="pi pi-check" iconPos="right" />
<p-button label="Search" icon="pi pi-search" iconPos="top" />
<p-button label="Update" icon="pi pi-refresh" iconPos="bottom" />`,html:`<div class="card flex flex-col items-center gap-4">
    <div class="flex flex-wrap gap-4 justify-center">
        <p-button icon="pi pi-home" aria-label="Save" />
        <p-button label="Profile" icon="pi pi-user" />
        <p-button label="Save" icon="pi pi-check" iconPos="right" />
    </div>
    <div class="flex flex-wrap gap-4 justify-center">
        <p-button label="Search" icon="pi pi-search" iconPos="top" />
        <p-button label="Update" icon="pi pi-refresh" iconPos="bottom" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-icons-demo',
    templateUrl: './button-icons-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonIconsDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-icons-demo"]],decls:18,vars:1,consts:[[1,"card","flex","flex-col","items-center","gap-4"],[1,"flex","flex-wrap","gap-4","justify-center"],["icon","pi pi-home","aria-label","Save"],["label","Profile","icon","pi pi-user"],["label","Save","icon","pi pi-check","iconPos","right"],["label","Search","icon","pi pi-search","iconPos","top"],["label","Update","icon","pi pi-refresh","iconPos","bottom"],["selector","button-icons-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Icon of a button is specified with "),n(3,"i"),a(4,"icon"),r(),a(5," property and position is configured using "),n(6,"i"),a(7,"iconPos"),r(),a(8," attribute."),r()(),n(9,"div",0)(10,"div",1),p(11,"p-button",2)(12,"p-button",3)(13,"p-button",4),r(),n(14,"div",1),p(15,"p-button",5)(16,"p-button",6),r()(),p(17,"app-code",7)),t&2&&(i(17),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var ie=(()=>{class e{code={basic:`<p-button icon="pi pi-check" />
<p-button icon="pi pi-bookmark" severity="secondary" />
<p-button icon="pi pi-search" severity="success" />
<p-button icon="pi pi-user" severity="info" />
<p-button icon="pi pi-bell" severity="warn" />
<p-button icon="pi pi-heart" severity="help" />
<p-button icon="pi pi-times" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" [outlined]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" [outlined]="true" />
<p-button icon="pi pi-search" [rounded]="true" severity="success" [outlined]="true" />
<p-button icon="pi pi-user" [rounded]="true" severity="info" [outlined]="true" />
<p-button icon="pi pi-bell" [rounded]="true" severity="warn" [outlined]="true" />
<p-button icon="pi pi-heart" [rounded]="true" severity="help" [outlined]="true" />
<p-button icon="pi pi-times" [rounded]="true" severity="danger" [outlined]="true" />

<p-button icon="pi pi-check" [rounded]="true" [text]="true" [raised]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" [raised]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" [text]="true" [raised]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" [text]="true" [raised]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" [text]="true" [raised]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" [text]="true" [raised]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" [text]="true" [raised]="true" severity="danger" />

<p-button icon="pi pi-check" [rounded]="true" [text]="true" />
<p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" severity="secondary" />
<p-button icon="pi pi-search" [rounded]="true" [text]="true" severity="success" />
<p-button icon="pi pi-user" [rounded]="true" [text]="true" severity="info" />
<p-button icon="pi pi-bell" [rounded]="true" [text]="true" severity="warn" />
<p-button icon="pi pi-heart" [rounded]="true" [text]="true" severity="help" />
<p-button icon="pi pi-times" [rounded]="true" [text]="true" severity="danger" />`,html:`<div class="card">
    <div class="flex justify-center flex-wrap gap-4 mb-6">
        <p-button icon="pi pi-check" />
        <p-button icon="pi pi-bookmark" severity="secondary" />
        <p-button icon="pi pi-search" severity="success" />
        <p-button icon="pi pi-user" severity="info" />
        <p-button icon="pi pi-bell" severity="warn" />
        <p-button icon="pi pi-heart" severity="help" />
        <p-button icon="pi pi-times" severity="danger" />
    </div>
    <div class="flex justify-center flex-wrap gap-4 mb-6">
        <p-button icon="pi pi-check" [rounded]="true" />
        <p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" />
        <p-button icon="pi pi-search" [rounded]="true" severity="success" />
        <p-button icon="pi pi-user" [rounded]="true" severity="info" />
        <p-button icon="pi pi-bell" [rounded]="true" severity="warn" />
        <p-button icon="pi pi-heart" [rounded]="true" severity="help" />
        <p-button icon="pi pi-times" [rounded]="true" severity="danger" />
    </div>
    <div class="flex justify-center flex-wrap gap-4 mb-6">
        <p-button icon="pi pi-check" [rounded]="true" [outlined]="true" />
        <p-button icon="pi pi-bookmark" [rounded]="true" severity="secondary" [outlined]="true" />
        <p-button icon="pi pi-search" [rounded]="true" severity="success" [outlined]="true" />
        <p-button icon="pi pi-user" [rounded]="true" severity="info" [outlined]="true" />
        <p-button icon="pi pi-bell" [rounded]="true" severity="warn" [outlined]="true" />
        <p-button icon="pi pi-heart" [rounded]="true" severity="help" [outlined]="true" />
        <p-button icon="pi pi-times" [rounded]="true" severity="danger" [outlined]="true" />
    </div>
    <div class="flex justify-center flex-wrap gap-4 mb-6">
        <p-button icon="pi pi-check" [rounded]="true" [text]="true" [raised]="true" />
        <p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" [raised]="true" severity="secondary" />
        <p-button icon="pi pi-search" [rounded]="true" [text]="true" [raised]="true" severity="success" />
        <p-button icon="pi pi-user" [rounded]="true" [text]="true" [raised]="true" severity="info" />
        <p-button icon="pi pi-bell" [rounded]="true" [text]="true" [raised]="true" severity="warn" />
        <p-button icon="pi pi-heart" [rounded]="true" [text]="true" [raised]="true" severity="help" />
        <p-button icon="pi pi-times" [rounded]="true" [text]="true" [raised]="true" severity="danger" />
    </div>
    <div class="flex justify-center flex-wrap gap-4 mb-6">
        <p-button icon="pi pi-check" [rounded]="true" [text]="true" />
        <p-button icon="pi pi-bookmark" [rounded]="true" [text]="true" severity="secondary" />
        <p-button icon="pi pi-search" [rounded]="true" [text]="true" severity="success" />
        <p-button icon="pi pi-user" [rounded]="true" [text]="true" severity="info" />
        <p-button icon="pi pi-bell" [rounded]="true" [text]="true" severity="warn" />
        <p-button icon="pi pi-heart" [rounded]="true" [text]="true" severity="help" />
        <p-button icon="pi pi-times" [rounded]="true" [text]="true" severity="danger" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-icon-only-demo',
    templateUrl: './button-icon-only-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonIconOnlyDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-icon-only-demo"]],decls:45,vars:57,consts:[[1,"card"],[1,"flex","justify-center","flex-wrap","gap-4","mb-6"],["icon","pi pi-check"],["icon","pi pi-bookmark","severity","secondary"],["icon","pi pi-search","severity","success"],["icon","pi pi-user","severity","info"],["icon","pi pi-bell","severity","warn"],["icon","pi pi-heart","severity","help"],["icon","pi pi-times","severity","danger"],["icon","pi pi-check",3,"rounded"],["icon","pi pi-bookmark","severity","secondary",3,"rounded"],["icon","pi pi-search","severity","success",3,"rounded"],["icon","pi pi-user","severity","info",3,"rounded"],["icon","pi pi-bell","severity","warn",3,"rounded"],["icon","pi pi-heart","severity","help",3,"rounded"],["icon","pi pi-times","severity","danger",3,"rounded"],["icon","pi pi-check",3,"rounded","outlined"],["icon","pi pi-bookmark","severity","secondary",3,"rounded","outlined"],["icon","pi pi-search","severity","success",3,"rounded","outlined"],["icon","pi pi-user","severity","info",3,"rounded","outlined"],["icon","pi pi-bell","severity","warn",3,"rounded","outlined"],["icon","pi pi-heart","severity","help",3,"rounded","outlined"],["icon","pi pi-times","severity","danger",3,"rounded","outlined"],["icon","pi pi-check",3,"rounded","text","raised"],["icon","pi pi-bookmark","severity","secondary",3,"rounded","text","raised"],["icon","pi pi-search","severity","success",3,"rounded","text","raised"],["icon","pi pi-user","severity","info",3,"rounded","text","raised"],["icon","pi pi-bell","severity","warn",3,"rounded","text","raised"],["icon","pi pi-heart","severity","help",3,"rounded","text","raised"],["icon","pi pi-times","severity","danger",3,"rounded","text","raised"],["icon","pi pi-check",3,"rounded","text"],["icon","pi pi-bookmark","severity","secondary",3,"rounded","text"],["icon","pi pi-search","severity","success",3,"rounded","text"],["icon","pi pi-user","severity","info",3,"rounded","text"],["icon","pi pi-bell","severity","warn",3,"rounded","text"],["icon","pi pi-heart","severity","help",3,"rounded","text"],["icon","pi pi-times","severity","danger",3,"rounded","text"],["selector","button-icon-only-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Buttons can have icons without labels."),r()(),n(3,"div",0)(4,"div",1),p(5,"p-button",2)(6,"p-button",3)(7,"p-button",4)(8,"p-button",5)(9,"p-button",6)(10,"p-button",7)(11,"p-button",8),r(),n(12,"div",1),p(13,"p-button",9)(14,"p-button",10)(15,"p-button",11)(16,"p-button",12)(17,"p-button",13)(18,"p-button",14)(19,"p-button",15),r(),n(20,"div",1),p(21,"p-button",16)(22,"p-button",17)(23,"p-button",18)(24,"p-button",19)(25,"p-button",20)(26,"p-button",21)(27,"p-button",22),r(),n(28,"div",1),p(29,"p-button",23)(30,"p-button",24)(31,"p-button",25)(32,"p-button",26)(33,"p-button",27)(34,"p-button",28)(35,"p-button",29),r(),n(36,"div",1),p(37,"p-button",30)(38,"p-button",31)(39,"p-button",32)(40,"p-button",33)(41,"p-button",34)(42,"p-button",35)(43,"p-button",36),r()(),p(44,"app-code",37)),t&2&&(i(13),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(2),o("rounded",!0)("outlined",!0),i(),o("rounded",!0)("outlined",!0),i(),o("rounded",!0)("outlined",!0),i(),o("rounded",!0)("outlined",!0),i(),o("rounded",!0)("outlined",!0),i(),o("rounded",!0)("outlined",!0),i(),o("rounded",!0)("outlined",!0),i(2),o("rounded",!0)("text",!0)("raised",!0),i(),o("rounded",!0)("text",!0)("raised",!0),i(),o("rounded",!0)("text",!0)("raised",!0),i(),o("rounded",!0)("text",!0)("raised",!0),i(),o("rounded",!0)("text",!0)("raised",!0),i(),o("rounded",!0)("text",!0)("raised",!0),i(),o("rounded",!0)("text",!0)("raised",!0),i(2),o("rounded",!0)("text",!0),i(),o("rounded",!0)("text",!0),i(),o("rounded",!0)("text",!0),i(),o("rounded",!0)("text",!0),i(),o("rounded",!0)("text",!0),i(),o("rounded",!0)("text",!0),i(),o("rounded",!0)("text",!0),i(),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var re=(()=>{class e{code={typescript:"import { ButtonModule } from 'primeng/button';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,u){t&1&&p(0,"app-code",0),t&2&&o("code",u.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var ae=(()=>{class e{code={basic:`<p-button label="Link" link />
<a href="https://angular.dev/" pButton target="_blank" rel="noopener noreferrer">
    <span pButtonLabel>Angular Website</span>
</a>
<a routerLink="/" pButton>
    <span pButtonLabel>Router Link</span>
</a>`,html:`<div class="card flex justify-center gap-4">
    <p-button label="Link" link />
    <a href="https://angular.dev/" pButton target="_blank" rel="noopener noreferrer">
        <span pButtonLabel>Angular Website</span>
    </a>
    <a routerLink="/" pButton>
        <span pButtonLabel>Router Link</span>
    </a>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'button-link-demo',
    templateUrl: './button-link-demo.html',
    standalone: true,
    imports: [ButtonModule, RouterModule]
})
export class ButtonLinkDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-link-demo"]],decls:18,vars:1,consts:[[1,"card","flex","justify-center","gap-4"],["label","Link","link",""],["href","https://angular.dev/","pButton","","target","_blank","rel","noopener noreferrer"],["pButtonLabel",""],["routerLink","/","pButton",""],["selector","button-link-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"A button can be rendered as a link when "),n(3,"i"),a(4,"link"),r(),a(5," property is present, while the "),n(6,"i"),a(7,"pButton"),r(),a(8," directive can be applied on an anchor element to style the link as a button."),r()(),n(9,"div",0),p(10,"p-button",1),n(11,"a",2)(12,"span",3),a(13,"Angular Website"),r()(),n(14,"a",4)(15,"span",3),a(16,"Router Link"),r()()(),p(17,"app-code",5)),t&2&&(i(17),o("code",u.code))},dependencies:[s,m,c,h,b,g,W,U],encapsulation:2})}return e})();var pe=(()=>{class e{cdr;loading=!1;constructor(d){this.cdr=d}load(){this.loading=!0,setTimeout(()=>{this.loading=!1,this.cdr.markForCheck()},2e3)}code={basic:'<p-button label="Search" icon="pi pi-check" [loading]="loading" (onClick)="load()" />',html:`<div class="card flex justify-center gap-4">
    <p-button label="Search" icon="pi pi-check" [loading]="loading" (onClick)="load()" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-loading-demo',
    templateUrl: './button-loading-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonLoadingDemo {
    loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
}`};static \u0275fac=function(t){return new(t||e)(E(R))};static \u0275cmp=l({type:e,selectors:[["button-loading-demo"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center","gap-4"],["label","Search","icon","pi pi-check",3,"onClick","loading"],["selector","button-loading-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Busy state is controlled with the "),n(3,"i"),a(4,"loading"),r(),a(5," property."),r()(),n(6,"div",0)(7,"p-button",1),j("onClick",function(){return u.load()}),r()(),p(8,"app-code",2)),t&2&&(i(7),o("loading",u.loading),i(),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var de=(()=>{class e{code={basic:`<p-button label="Primary" variant="outlined" />
<p-button label="Secondary" variant="outlined" severity="secondary" />
<p-button label="Success" variant="outlined" severity="success" />
<p-button label="Info" variant="outlined" severity="info" />
<p-button label="Warn" variant="outlined" severity="warn" />
<p-button label="Help" variant="outlined" severity="help" />
<p-button label="Danger" variant="outlined" severity="danger" />
<p-button label="Contrast" variant="outlined" severity="contrast" />`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-button label="Primary" variant="outlined" />
    <p-button label="Secondary" variant="outlined" severity="secondary" />
    <p-button label="Success" variant="outlined" severity="success" />
    <p-button label="Info" variant="outlined" severity="info" />
    <p-button label="Warn" variant="outlined" severity="warn" />
    <p-button label="Help" variant="outlined" severity="help" />
    <p-button label="Danger" variant="outlined" severity="danger" />
    <p-button label="Contrast" variant="outlined" severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-outlined-demo',
    templateUrl: './button-outlined-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonOutlinedDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-outlined-demo"]],decls:13,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["label","Primary","variant","outlined"],["label","Secondary","variant","outlined","severity","secondary"],["label","Success","variant","outlined","severity","success"],["label","Info","variant","outlined","severity","info"],["label","Warn","variant","outlined","severity","warn"],["label","Help","variant","outlined","severity","help"],["label","Danger","variant","outlined","severity","danger"],["label","Contrast","variant","outlined","severity","contrast"],["selector","button-outlined-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Outlined buttons display a border without a background initially."),r()(),n(3,"div",0),p(4,"p-button",1)(5,"p-button",2)(6,"p-button",3)(7,"p-button",4)(8,"p-button",5)(9,"p-button",6)(10,"p-button",7)(11,"p-button",8),r(),p(12,"app-code",9)),t&2&&(i(12),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var ue=(()=>{class e{code={basic:`<p-button label="Primary" [raised]="true" />
<p-button label="Secondary" [raised]="true" severity="secondary" />
<p-button label="Success" [raised]="true" severity="success" />
<p-button label="Info" [raised]="true" severity="info" />
<p-button label="Warn" [raised]="true" severity="warn" />
<p-button label="Help" [raised]="true" severity="help" />
<p-button label="Danger" [raised]="true" severity="danger" />
<p-button label="Contrast" [raised]="true" severity="contrast" />`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-button label="Primary" [raised]="true" />
    <p-button label="Secondary" [raised]="true" severity="secondary" />
    <p-button label="Success" [raised]="true" severity="success" />
    <p-button label="Info" [raised]="true" severity="info" />
    <p-button label="Warn" [raised]="true" severity="warn" />
    <p-button label="Help" [raised]="true" severity="help" />
    <p-button label="Danger" [raised]="true" severity="danger" />
    <p-button label="Contrast" [raised]="true" severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-raised-demo',
    templateUrl: './button-raised-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonRaisedDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-raised-demo"]],decls:13,vars:9,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["label","Primary",3,"raised"],["label","Secondary","severity","secondary",3,"raised"],["label","Success","severity","success",3,"raised"],["label","Info","severity","info",3,"raised"],["label","Warn","severity","warn",3,"raised"],["label","Help","severity","help",3,"raised"],["label","Danger","severity","danger",3,"raised"],["label","Contrast","severity","contrast",3,"raised"],["selector","button-raised-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Raised buttons display a shadow to indicate elevation."),r()(),n(3,"div",0),p(4,"p-button",1)(5,"p-button",2)(6,"p-button",3)(7,"p-button",4)(8,"p-button",5)(9,"p-button",6)(10,"p-button",7)(11,"p-button",8),r(),p(12,"app-code",9)),t&2&&(i(4),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var le=(()=>{class e{code={basic:`<p-button label="Primary" variant="text" [raised]="true" />
<p-button label="Secondary" variant="text" [raised]="true" severity="secondary" />
<p-button label="Success" variant="text" [raised]="true" severity="success" />
<p-button label="Info" variant="text" [raised]="true" severity="info" />
<p-button label="Warn" variant="text" [raised]="true" severity="warn" />
<p-button label="Help" variant="text" [raised]="true" severity="help" />
<p-button label="Danger" variant="text" [raised]="true" severity="danger" />
<p-button label="Plain" variant="text" [raised]="true" />`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-button label="Primary" variant="text" [raised]="true" />
    <p-button label="Secondary" variant="text" [raised]="true" severity="secondary" />
    <p-button label="Success" variant="text" [raised]="true" severity="success" />
    <p-button label="Info" variant="text" [raised]="true" severity="info" />
    <p-button label="Warn" variant="text" [raised]="true" severity="warn" />
    <p-button label="Help" variant="text" [raised]="true" severity="help" />
    <p-button label="Danger" variant="text" [raised]="true" severity="danger" />
    <p-button label="Plain" variant="text" [raised]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-raisedtext-demo',
    templateUrl: './button-raisedtext-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonRaisedtextDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-raisedtext-demo"]],decls:13,vars:9,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["label","Primary","variant","text",3,"raised"],["label","Secondary","variant","text","severity","secondary",3,"raised"],["label","Success","variant","text","severity","success",3,"raised"],["label","Info","variant","text","severity","info",3,"raised"],["label","Warn","variant","text","severity","warn",3,"raised"],["label","Help","variant","text","severity","help",3,"raised"],["label","Danger","variant","text","severity","danger",3,"raised"],["label","Plain","variant","text",3,"raised"],["selector","button-raisedtext-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Text buttons can be displayed as raised for elevation."),r()(),n(3,"div",0),p(4,"p-button",1)(5,"p-button",2)(6,"p-button",3)(7,"p-button",4)(8,"p-button",5)(9,"p-button",6)(10,"p-button",7)(11,"p-button",8),r(),p(12,"app-code",9)),t&2&&(i(4),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("raised",!0),i(),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var se=(()=>{class e{code={basic:`<p-button label="Primary" [rounded]="true" />
<p-button label="Secondary" [rounded]="true" severity="secondary" />
<p-button label="Success" [rounded]="true" severity="success" />
<p-button label="Info" [rounded]="true" severity="info" />
<p-button label="Warn" [rounded]="true" severity="warn" />
<p-button label="Help" [rounded]="true" severity="help" />
<p-button label="Danger" [rounded]="true" severity="danger" />
<p-button label="Contrast" [rounded]="true" severity="contrast" />`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-button label="Primary" [rounded]="true" />
    <p-button label="Secondary" [rounded]="true" severity="secondary" />
    <p-button label="Success" [rounded]="true" severity="success" />
    <p-button label="Info" [rounded]="true" severity="info" />
    <p-button label="Warn" [rounded]="true" severity="warn" />
    <p-button label="Help" [rounded]="true" severity="help" />
    <p-button label="Danger" [rounded]="true" severity="danger" />
    <p-button label="Contrast" [rounded]="true" severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-rounded-demo',
    templateUrl: './button-rounded-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonRoundedDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-rounded-demo"]],decls:13,vars:9,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["label","Primary",3,"rounded"],["label","Secondary","severity","secondary",3,"rounded"],["label","Success","severity","success",3,"rounded"],["label","Info","severity","info",3,"rounded"],["label","Warn","severity","warn",3,"rounded"],["label","Help","severity","help",3,"rounded"],["label","Danger","severity","danger",3,"rounded"],["label","Contrast","severity","contrast",3,"rounded"],["selector","button-rounded-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Rounded buttons have a circular border radius."),r()(),n(3,"div",0),p(4,"p-button",1)(5,"p-button",2)(6,"p-button",3)(7,"p-button",4)(8,"p-button",5)(9,"p-button",6)(10,"p-button",7)(11,"p-button",8),r(),p(12,"app-code",9)),t&2&&(i(4),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("rounded",!0),i(),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var ce=(()=>{class e{code={basic:`<p-button label="Primary" />
<p-button label="Secondary" severity="secondary" />
<p-button label="Success" severity="success" />
<p-button label="Info" severity="info" />
<p-button label="Warn" severity="warn" />
<p-button label="Help" severity="help" />
<p-button label="Danger" severity="danger" />
<p-button label="Contrast" severity="contrast" />`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-button label="Primary" />
    <p-button label="Secondary" severity="secondary" />
    <p-button label="Success" severity="success" />
    <p-button label="Info" severity="info" />
    <p-button label="Warn" severity="warn" />
    <p-button label="Help" severity="help" />
    <p-button label="Danger" severity="danger" />
    <p-button label="Contrast" severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-severity-demo',
    templateUrl: './button-severity-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonSeverityDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-severity-demo"]],decls:13,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["label","Primary"],["label","Secondary","severity","secondary"],["label","Success","severity","success"],["label","Info","severity","info"],["label","Warn","severity","warn"],["label","Help","severity","help"],["label","Danger","severity","danger"],["label","Contrast","severity","contrast"],["selector","button-severity-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Severity defines the type of button."),r()(),n(3,"div",0),p(4,"p-button",1)(5,"p-button",2)(6,"p-button",3)(7,"p-button",4)(8,"p-button",5)(9,"p-button",6)(10,"p-button",7)(11,"p-button",8),r(),p(12,"app-code",9)),t&2&&(i(12),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var me=(()=>{class e{code={basic:`<p-button label="Small" icon="pi pi-check" size="small" />
<p-button label="Normal" icon="pi pi-check" />
<p-button label="Large" icon="pi pi-check" size="large" />`,html:`<div class="card flex justify-center flex-wrap gap-4 items-center">
    <p-button label="Small" icon="pi pi-check" size="small" />
    <p-button label="Normal" icon="pi pi-check" />
    <p-button label="Large" icon="pi pi-check" size="large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-sizes-demo',
    templateUrl: './button-sizes-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonSizesDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-sizes-demo"]],decls:14,vars:1,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4","items-center"],["label","Small","icon","pi pi-check","size","small"],["label","Normal","icon","pi pi-check"],["label","Large","icon","pi pi-check","size","large"],["selector","button-sizes-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Button provides "),n(3,"i"),a(4,"small"),r(),a(5," and "),n(6,"i"),a(7,"large"),r(),a(8," sizes as alternatives to the standard."),r()(),n(9,"div",0),p(10,"p-button",1)(11,"p-button",2)(12,"p-button",3),r(),p(13,"app-code",4)),t&2&&(i(13),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var be=(()=>{class e{code={basic:`<p-button [outlined]="true">
    <svg width="35" height="40" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
        <path d="..." fill="var(--primary-color)" />
    </svg>
</p-button>`,html:`<div class="card flex justify-center">
    <p-button [outlined]="true">
    <svg
        width="31"
        height="33"
        viewBox="0 0 31 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="block mx-auto"
    >
        <path
            d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
            fill="var(--p-primary-color)"
        />
        <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
            <path
                d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                fill="var(--ground-background)"
            />
        </mask>
        <g mask="url(#mask0_1_52)">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                fill="var(--p-primary-color)"
            />
        </g>
        <path
            d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
            fill="var(--ground-background)"
        />
        <path
            d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
            fill="var(--ground-background)"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
            fill="var(--ground-background)"
        />
        <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
        <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
            fill="var(--ground-background)"
        />
        <path
            d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
            fill="var(--ground-background)"
        />
        <path
            d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
            fill="var(--ground-background)"
        />
        <path
            d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
            fill="var(--ground-background)"
        />
        <path
            d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
            fill="var(--ground-background)"
        />
    </svg>
    </p-button>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-template-demo',
    templateUrl: './button-template-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonTemplateDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-template-demo"]],decls:22,vars:2,consts:[[1,"card","flex","justify-center"],[3,"outlined"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["selector","button-template-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Custom content inside a button is defined as children."),r()(),n(3,"div",0)(4,"p-button",1),M(),n(5,"svg",2),p(6,"path",3),n(7,"mask",4),p(8,"path",5),r(),n(9,"g",6),p(10,"path",7),r(),p(11,"path",8)(12,"path",9)(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"path",14)(18,"path",15)(19,"path",16)(20,"path",17),r()()(),w(),p(21,"app-code",18)),t&2&&(i(4),o("outlined",!0),i(17),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var ve=(()=>{class e{code={basic:`<p-button label="Primary" variant="text" />
<p-button label="Secondary" variant="text" severity="secondary" />
<p-button label="Success" variant="text" severity="success" />
<p-button label="Info" variant="text" severity="info" />
<p-button label="Warn" variant="text" severity="warn" />
<p-button label="Help" variant="text" severity="help" />
<p-button label="Danger" variant="text" severity="danger" />
<p-button label="Plain" variant="text" />`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-button label="Primary" variant="text" />
    <p-button label="Secondary" variant="text" severity="secondary" />
    <p-button label="Success" variant="text" severity="success" />
    <p-button label="Info" variant="text" severity="info" />
    <p-button label="Warn" variant="text" severity="warn" />
    <p-button label="Help" variant="text" severity="help" />
    <p-button label="Danger" variant="text" severity="danger" />
    <p-button label="Plain" variant="text" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-text-demo',
    templateUrl: './button-text-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonTextDemo { }`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-text-demo"]],decls:13,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["label","Primary","variant","text"],["label","Secondary","variant","text","severity","secondary"],["label","Success","variant","text","severity","success"],["label","Info","variant","text","severity","info"],["label","Warn","variant","text","severity","warn"],["label","Help","variant","text","severity","help"],["label","Danger","variant","text","severity","danger"],["label","Plain","variant","text"],["selector","button-text-demo",3,"code"]],template:function(t,u){t&1&&(n(0,"app-docsectiontext")(1,"p"),a(2,"Text buttons are displayed as textual elements."),r()(),n(3,"div",0),p(4,"p-button",1)(5,"p-button",2)(6,"p-button",3)(7,"p-button",4)(8,"p-button",5)(9,"p-button",6)(10,"p-button",7)(11,"p-button",8),r(),p(12,"app-code",9)),t&2&&(i(12),o("code",u.code))},dependencies:[s,m,c,b],encapsulation:2})}return e})();var fe=(()=>{class e{docs=[{data:D("Button"),key:"Button"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-pt-viewer"]],decls:2,vars:1,consts:[[3,"docs"],["label","Profile","icon","pi pi-user","severity","secondary","badge","2","badgeSeverity","contrast"]],template:function(t,u){t&1&&(n(0,"app-docptviewer",0),p(1,"p-button",1),r()),t&2&&o("docs",u.docs)},dependencies:[y,Y,c,b],encapsulation:2})}return e})();var ye=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:fe},{id:"pt.doc.button",label:"Button PT Options",component:O,data:D("Button")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["button-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,u){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),a(3,"Button Pass Through"),r()(),p(4,"app-docsection",2),r()),t&2&&(i(4),o("docs",u.docs))},dependencies:[y,N],encapsulation:2})}return e})();var Be=()=>["Button","ButtonDirective"],xe=(()=>{class e{ptComponent=ye;docs=[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:J},{id:"directive",label:"Directive",component:te},{id:"link",label:"Link",component:ae},{id:"icons",label:"Icons",component:ne},{id:"loading",label:"Loading",component:pe},{id:"severity",label:"Severity",component:ce},{id:"disabled",label:"Disabled",component:oe},{id:"raised",label:"Raised",component:ue},{id:"rounded",label:"Rounded",component:se},{id:"text",label:"Text",component:ve},{id:"raisedtext",label:"Raised Text",component:le},{id:"outlined",label:"Outlined",component:de},{id:"icononly",label:"Icon Only",component:ie},{id:"badge",label:"Badge",component:q},{id:"buttongroup",label:"Button Group",component:ee},{id:"sizes",label:"Sizes",component:me},{id:"template",label:"Template",component:be},{id:"accessibility",label:"Accessibility",component:$}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Button Component","header","Button","description","Button is an extension to standard button element with icons and theming.","themeDocs","button",3,"docs","apiDocs","ptDocs"]],template:function(t,u){t&1&&p(0,"app-doc",0),t&2&&o("docs",u.docs)("apiDocs",Z(3,Be))("ptDocs",u.ptComponent)},dependencies:[K],encapsulation:2})}return e})();var zo=[{path:"",component:xe}];export{zo as default};
