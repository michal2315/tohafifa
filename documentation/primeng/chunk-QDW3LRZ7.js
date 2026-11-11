import{a as y,b as x}from"./chunk-3J2EWM7H.js";import{a as v,b as z}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as E}from"./chunk-FKOOMXTU.js";import{a as s}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as h}from"./chunk-XCUGNKAG.js";import{a as c,b as M}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{b as f,c as u,ga as S,ha as C}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as b}from"./chunk-D2XKNHFS.js";import{Eb as l,Fb as i,Gb as a,Hb as n,Qa as m,gb as r,hc as o,sc as B}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var w=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-accessibility-doc"]],decls:15,vars:0,template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),a(),i(3,"p"),o(4," Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, "),i(5,"i"),o(6,"aria-live"),a(),o(7," may be utilized as well. In case badges need to be tabbable, "),i(8,"i"),o(9,"tabIndex"),a(),o(10," can be added to implement custom key handlers. "),a(),i(11,"h3"),o(12,"Keyboard Support"),a(),i(13,"p"),o(14,"Component does not include any interactive elements."),a()())},dependencies:[c],encapsulation:2})}return e})();var T=(()=>{class e{code={basic:'<p-badge value="2" />',html:`<div class="card flex justify-center">
    <p-badge value="2" />
</div>`,typescript:`import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-basic-demo',
    templateUrl: './badge-basic-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-basic-demo"]],decls:9,vars:1,consts:[[1,"card","flex","justify-center"],["value","2"],["selector","badge-basic-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Content of the badge is specified using the "),i(3,"i"),o(4,"value"),a(),o(5," property."),a()(),i(6,"div",0),n(7,"p-badge",1),a(),n(8,"app-code",2)),t&2&&(m(8),l("code",p.code))},dependencies:[u,f,s,c],encapsulation:2})}return e})();var A=(()=>{class e{code={basic:'<p-button label="Emails" icon="pi pi-bell" label="Notifications" badge="2" />',html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-button label="Emails" badge="2" label="Notifications" icon="pi pi-bell" />
    <p-button label="Inbox" icon="pi pi-inbox" badge="2" badgeSeverity="contrast" outlined/>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'badge-button-demo',
    templateUrl: './badge-button-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class BadgeButtonDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-button-demo"]],decls:7,vars:1,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Emails","icon","pi pi-bell","label","Notifications","badge","2"],["label","Inbox","icon","pi pi-inbox","badge","2","badgeSeverity","contrast","outlined",""],["selector","badge-button-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Buttons have built-in support for badges to display a badge inline."),a()(),i(3,"div",0),n(4,"p-button",1)(5,"p-button",2),a(),n(6,"app-code",3)),t&2&&(m(6),l("code",p.code))},dependencies:[C,S,s,c],encapsulation:2})}return e})();var O=(()=>{class e{code={typescript:`import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,p){t&1&&n(0,"app-code",0),t&2&&l("code",p.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var j=(()=>{class e{code={basic:`<p-overlaybadge value="2">
    <i class="pi pi-bell" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge value="4" severity="danger">
    <i class="pi pi-calendar" style="font-size: 2rem"></i>
</p-overlaybadge>
<p-overlaybadge severity="danger">
    <i class="pi pi-envelope" style="font-size: 2rem"></i>
</p-overlaybadge>`,html:`<div class="card flex flex-wrap justify-center gap-6">
    <p-overlaybadge value="2">
        <i class="pi pi-bell" style="font-size: 2rem"></i>
    </p-overlaybadge>
    <p-overlaybadge value="4" severity="danger">
        <i class="pi pi-calendar" style="font-size: 2rem"></i>
    </p-overlaybadge>
    <p-overlaybadge severity="danger">
        <i class="pi pi-envelope" style="font-size: 2rem"></i>
    </p-overlaybadge>
</div>`,typescript:`import { Component } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
    selector: 'badge-overlay-demo',
    templateUrl: './badge-overlay-demo.html',
    standalone: true,
    imports: [OverlayBadgeModule]
})
export class BadgeOverlayDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-overlay-demo"]],decls:14,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-6"],["value","2"],[1,"pi","pi-bell",2,"font-size","2rem"],["value","4","severity","danger"],[1,"pi","pi-calendar",2,"font-size","2rem"],["severity","danger"],[1,"pi","pi-envelope",2,"font-size","2rem"],["selector","badge-overlay-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"A badge can be added to any element by encapsulating the content with the "),i(3,"i"),o(4,"OverlayBadge"),a(),o(5," component."),a()(),i(6,"div",0)(7,"p-overlaybadge",1),n(8,"i",2),a(),i(9,"p-overlaybadge",3),n(10,"i",4),a(),i(11,"p-overlaybadge",5),n(12,"i",6),a()(),n(13,"app-code",7)),t&2&&(m(13),l("code",p.code))},dependencies:[x,y,s,c],encapsulation:2})}return e})();var F=(()=>{class e{code={basic:'<p-badge [value]="2" severity="success" />',html:`<div class="card flex justify-center gap-2">
    <p-badge [value]="2" severity="success" />
    <p-badge [value]="9" severity="info" />
    <p-badge [value]="3" severity="warn" />
    <p-badge [value]="9" severity="danger" />
</div>`,typescript:`import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-severity-demo',
    templateUrl: './badge-severity-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeSeverityDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-severity-demo"]],decls:23,vars:1,consts:[[1,"card","flex","justify-center","gap-2"],["value","2"],["value","6","severity","secondary"],["value","8","severity","success"],["value","4","severity","info"],["value","9","severity","warn"],["value","3","severity","danger"],["value","5","severity","contrast"],["selector","badge-severity-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Severity defines the color of the badge, possible values are "),i(3,"i"),o(4,"success"),a(),o(5,", "),i(6,"i"),o(7,"info"),a(),o(8,", "),i(9,"i"),o(10,"warn"),a(),o(11," and "),i(12,"i"),o(13,"danger"),a()()(),i(14,"div",0),n(15,"p-badge",1)(16,"p-badge",2)(17,"p-badge",3)(18,"p-badge",4)(19,"p-badge",5)(20,"p-badge",6)(21,"p-badge",7),a(),n(22,"app-code",8)),t&2&&(m(22),l("code",p.code))},dependencies:[u,f,s,c],encapsulation:2})}return e})();var P=(()=>{class e{code={basic:'<p-badge value="8" badgeSize="xlarge" severity="success" />',html:`<div class="card flex justify-center gap-1">
        <p-badge value="8" badgeSize="xlarge" severity="success" />
        <p-badge value="6" badgeSize="large" severity="warn" />
        <p-badge value="4" badgeSize="small" severity="info" />
        <p-badge value="2" />
</div>`,typescript:`import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'badge-size-demo',
    templateUrl: './badge-size-demo.html',
    standalone: true,
    imports: [BadgeModule]
})
export class BadgeSizeDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-size-demo"]],decls:21,vars:1,consts:[[1,"card","flex","justify-center","gap-1","items-end"],["value","8","badgeSize","xlarge","severity","success"],["value","6","badgeSize","large","severity","warn"],["value","4","severity","info"],["value","2","badgeSize","small"],["selector","badge-size-demo",3,"code"]],template:function(t,p){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Badge sizes are adjusted with the "),i(3,"i"),o(4,"badgeSize"),a(),o(5," property that accepts "),i(6,"i"),o(7,"small"),a(),o(8,", "),i(9,"i"),o(10,"large"),a(),o(11," and "),i(12,"i"),o(13,"xlarge"),a(),o(14," as the possible alternatives to the default size. Currently sizes only apply to component mode."),a()(),i(15,"div",0),n(16,"p-badge",1)(17,"p-badge",2)(18,"p-badge",3)(19,"p-badge",4),a(),n(20,"app-code",5)),t&2&&(m(20),l("code",p.code))},dependencies:[u,f,s,c],encapsulation:2})}return e})();var I=(()=>{class e{docs=[{data:v("Badge"),key:"Badge"},{data:v("OverlayBadge"),key:"OverlayBadge"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-pt-viewer"]],decls:5,vars:1,consts:[[3,"docs"],[1,"flex","flex-wrap","gap-8"],["value","2"],["value","3"],[1,"pi","pi-bell",2,"font-size","2rem"]],template:function(t,p){t&1&&(i(0,"app-docptviewer",0)(1,"div",1),n(2,"p-badge",2),i(3,"p-overlaybadge",3),n(4,"i",4),a()()()),t&2&&l("docs",p.docs)},dependencies:[b,z,u,f,x,y],encapsulation:2})}return e})();var U=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:I},{id:"pt.doc.badge",label:"Badge PT Options",component:M,data:v("Badge")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["badge-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,p){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),o(3,"Badge Pass Through"),a()(),n(4,"app-docsection",2),a()),t&2&&(m(4),l("docs",p.docs))},dependencies:[b,h],encapsulation:2})}return e})();var N=()=>["Badge","BadgeDirective"],V=(()=>{class e{ptComponent=U;docs=[{id:"import",label:"Import",component:O},{id:"basic",label:"Basic",component:T},{id:"severity",label:"Severity",component:F},{id:"size",label:"Size",component:P},{id:"overlay",label:"Overlay",component:j},{id:"button",label:"Button",component:A},{id:"accessibility",label:"Accessibility",component:w}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Badge Component","header","Badge","description","Badge is a small status indicator for another element.","themeDocs","Badge",3,"docs","apiDocs","ptDocs"]],template:function(t,p){t&1&&n(0,"app-doc",0),t&2&&l("docs",p.docs)("apiDocs",B(3,N))("ptDocs",p.ptComponent)},dependencies:[E],encapsulation:2})}return e})();var Fe=[{path:"",component:V}];export{Fe as default};
