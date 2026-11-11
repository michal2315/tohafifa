import{a as N,b as H}from"./chunk-NLZIHUGC.js";import{a as j,b as V}from"./chunk-XSLWLDLT.js";import{a as C,b as L}from"./chunk-JNUBCW5H.js";import"./chunk-66742H4U.js";import{a as c,b as d}from"./chunk-N3SKU25W.js";import"./chunk-27JIZF5R.js";import{a as W,b as U}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b as z,f as _,i as P,u as k}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as B}from"./chunk-FKOOMXTU.js";import{a as g,b as f}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as q}from"./chunk-XCUGNKAG.js";import{a as u,b as O}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as S}from"./chunk-D2XKNHFS.js";import{Ab as D,Eb as n,Fb as i,Gb as t,Gc as F,Hb as p,Qa as r,gb as m,hc as e,mb as I,mc as E,nc as w,oc as T,sc as A,zb as h}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var R=(()=>{class s{code={basic:"<p-message>Message Content</p-message>",html:`<div class="card">
    <p-message>Message Content</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-basic-demo',
    templateUrl: './message-basic-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageBasicDemo {}`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["basic-doc"]],decls:7,vars:1,consts:[[1,"card"],["selector","message-basic-demo",3,"code"]],template:function(o,a){o&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Message component requires a content to display."),t()(),i(3,"div",0)(4,"p-message"),e(5,"Message Content"),t()(),p(6,"app-code",1)),o&2&&(r(6),n("code",a.code))},dependencies:[d,c,f,g,u],encapsulation:2})}return s})();function ie(s,b){s&1&&(i(0,"p-message",5),e(1,"Username is required"),t())}function oe(s,b){s&1&&(i(0,"p-message",5),e(1,"Phone number is required"),t())}var G=(()=>{class s{username;phone;code={basic:`<div class="flex flex-col gap-4">
    <p-message severity="error" icon="pi pi-times-circle" styleClass="mb-2">Validation Failed</p-message>
    <div class="flex flex-col gap-1">
        <input pInputText placeholder="Username" [(ngModel)]="username" aria-label="username" [invalid]="!username" />
        @if (!username) {
            <p-message severity="error" variant="simple" size="small">Username is required</p-message>
        }
    </div>
    <div class="flex flex-col gap-1">
        <p-inputmask mask="(999) 999-9999" [(ngModel)]="phone" placeholder="Phone" [invalid]="!phone" />
        @if (!phone) {
            <p-message severity="error" variant="simple" size="small">Phone number is required</p-message>
        }
    </div>
</div>`,html:`<div class="card flex justify-center">
    <div class="flex flex-col gap-4">
        <p-message severity="error" icon="pi pi-times-circle" styleClass="mb-2">Validation Failed</p-message>
        <div class="flex flex-col gap-1">
            <input pInputText placeholder="Username" [(ngModel)]="username" aria-label="username" [invalid]="!username" />
            @if (!username) {
                <p-message severity="error" variant="simple" size="small">Username is required</p-message>
            }
        </div>
        <div class="flex flex-col gap-1">
            <p-inputmask mask="(999) 999-9999" [(ngModel)]="phone" placeholder="Phone" [invalid]="!phone" />
            @if (!phone) {
                <p-message severity="error" variant="simple" size="small">Phone number is required</p-message>
            }
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
    selector: 'message-form-demo',
    templateUrl: './message-form-demo.html',
    standalone: true,
    imports: [Message, InputTextModule,InputMaskModule]
})
export class MessageFormDemo {
    username: string | undefined;

    phone: string | undefined;
}`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["form-doc"]],decls:17,vars:7,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4"],["severity","error","icon","pi pi-times-circle","styleClass","mb-2"],[1,"flex","flex-col","gap-1"],["pInputText","","placeholder","Username","aria-label","username",3,"ngModelChange","ngModel","invalid"],["severity","error","variant","simple","size","small"],["mask","(999) 999-9999","placeholder","Phone",3,"ngModelChange","ngModel","invalid"],["selector","message-form-demo",3,"code"]],template:function(o,a){o&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Validation errors in a form are displayed with the "),i(3,"i"),e(4,"error"),t(),e(5," severity."),t()(),i(6,"div",0)(7,"div",1)(8,"p-message",2),e(9,"Validation Failed"),t(),i(10,"div",3)(11,"input",4),T("ngModelChange",function(M){return w(a.username,M)||(a.username=M),M}),t(),h(12,ie,2,0,"p-message",5),t(),i(13,"div",3)(14,"p-inputmask",6),T("ngModelChange",function(M){return w(a.phone,M)||(a.phone=M),M}),t(),h(15,oe,2,0,"p-message",5),t()()(),p(16,"app-code",7)),o&2&&(r(11),E("ngModel",a.username),n("invalid",!a.username),r(),D(a.username?-1:12),r(2),E("ngModel",a.phone),n("invalid",!a.phone),r(),D(a.phone?-1:15),r(),n("code",a.code))},dependencies:[k,z,_,P,d,c,U,W,H,N,f,g,u,S],encapsulation:2})}return s})();function ae(s,b){s&1&&p(0,"p-avatar",6)}var J=(()=>{class s{ngOnInit(){}code={basic:`<p-message severity="info" icon="pi pi-send" text="Info Message" styleClass="h-full" />
<p-message severity="success">
    <ng-template #icon>
        <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
    </ng-template>
    <span class="ml-2">How may I help you?</span>
</p-message>`,html:`<div class="card flex justify-center align-center gap-4">
    <p-message severity="info" icon="pi pi-send" text="Info Message" styleClass="h-full" />
    <p-message severity="success">
        <ng-template #icon>
            <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </ng-template>
        <span class="ml-2">How may I help you?</span>
    </p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'message-icon-demo',
    templateUrl: './message-icon-demo.html',
    standalone: true,
    imports: [MessageModule, AvatarModule]
})
export class MessageIconDemo {}`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["icon-doc"]],decls:14,vars:1,consts:[["icon",""],[1,"card","flex","justify-center","align-center","gap-4"],["severity","info","icon","pi pi-send","text","Info Message","styleClass","h-full"],["severity","success"],[1,"ml-2"],["selector","message-icon-demo",3,"code"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"]],template:function(o,a){o&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The icon of a message is specified with the "),i(3,"i"),e(4,"icon"),t(),e(5," property."),t()(),i(6,"div",1),p(7,"p-message",2),i(8,"p-message",3),I(9,ae,1,0,"ng-template",null,0,F),i(11,"span",4),e(12,"How may I help you?"),t()()(),p(13,"app-code",5)),o&2&&(r(13),n("code",a.code))},dependencies:[d,c,V,j,f,g,u],encapsulation:2})}return s})();var K=(()=>{class s{code={typescript:"import { MessageModule } from 'primeng/message';"};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["message-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&p(0,"app-code",0),o&2&&n("code",a.code)("hideToggleCode",!0)},dependencies:[f,g],encapsulation:2})}return s})();var Q=(()=>{class s{code={basic:`<p-message severity="success" variant="outlined">Success Message</p-message>
<p-message severity="info" variant="outlined">Info Message</p-message>
<p-message severity="warn" variant="outlined">Warn Message</p-message>
<p-message severity="error" variant="outlined">Error Message</p-message>
<p-message severity="secondary" variant="outlined">Secondary Message</p-message>
<p-message severity="contrast" variant="outlined">Contrast Message</p-message>`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-message severity="success" variant="outlined">Success Message</p-message>
    <p-message severity="info" variant="outlined">Info Message</p-message>
    <p-message severity="warn" variant="outlined">Warn Message</p-message>
    <p-message severity="error" variant="outlined">Error Message</p-message>
    <p-message severity="secondary" variant="outlined">Secondary Message</p-message>
    <p-message severity="contrast" variant="outlined">Contrast Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-outlined-demo',
    templateUrl: './message-outlined-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageOutlinedDemo {}`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["outlined-doc"]],decls:23,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["severity","success","variant","outlined"],["severity","info","variant","outlined"],["severity","warn","variant","outlined"],["severity","error","variant","outlined"],["severity","secondary","variant","outlined"],["severity","contrast","variant","outlined"],["selector","message-outlined-demo",3,"code"]],template:function(o,a){o&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Configure the "),i(3,"i"),e(4,"variant"),t(),e(5," value as "),i(6,"i"),e(7,"outlined"),t(),e(8," for messages with borders and no background."),t()(),i(9,"div",0)(10,"p-message",1),e(11,"Success Message"),t(),i(12,"p-message",2),e(13,"Info Message"),t(),i(14,"p-message",3),e(15,"Warn Message"),t(),i(16,"p-message",4),e(17,"Error Message"),t(),i(18,"p-message",5),e(19,"Secondary Message"),t(),i(20,"p-message",6),e(21,"Contrast Message"),t()(),p(22,"app-code",7)),o&2&&(r(22),n("code",a.code))},dependencies:[d,c,f,g,u],encapsulation:2})}return s})();var X=(()=>{class s{docs=[{data:C("Message"),key:"Message"}];static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["message-pt-viewer"]],decls:3,vars:2,consts:[[3,"docs"],["severity","info","icon","pi pi-send",3,"closable"]],template:function(o,a){o&1&&(i(0,"app-docptviewer",0)(1,"p-message",1),e(2,"Info Message"),t()()),o&2&&(n("docs",a.docs),r(),n("closable",!0))},dependencies:[S,L,d,c],encapsulation:2})}return s})();var Y=(()=>{class s{docs=[{id:"pt.viewer",label:"Viewer",component:X},{id:"pt.doc.message",label:"Message PT Options",component:O,data:C("Message")}];static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["message-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,a){o&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Message Pass Through"),t()(),p(4,"app-docsection",2),t()),o&2&&(r(4),n("docs",a.docs))},dependencies:[S,q],encapsulation:2})}return s})();var Z=(()=>{class s{code={basic:`<p-message severity="success">Success Message</p-message>
<p-message severity="info">Info Message</p-message>
<p-message severity="warn">Warn Message</p-message>
<p-message severity="error">Error Message</p-message>
<p-message severity="secondary">Secondary Message</p-message>
<p-message severity="contrast">Contrast Message</p-message>`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-message severity="success">Success Message</p-message>
    <p-message severity="info">Info Message</p-message>
    <p-message severity="warn">Warn Message</p-message>
    <p-message severity="error">Error Message</p-message>
    <p-message severity="secondary">Secondary Message</p-message>
    <p-message severity="contrast">Contrast Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-severity-demo',
    templateUrl: './message-severity-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageSeverityDemo {}`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["severity-doc"]],decls:20,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["severity","success"],["severity","info"],["severity","warn"],["severity","error"],["severity","secondary"],["severity","contrast"],["selector","message-severity-demo",3,"code"]],template:function(o,a){o&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The "),i(3,"i"),e(4,"severity"),t(),e(5," option specifies the type of the message."),t()(),i(6,"div",0)(7,"p-message",1),e(8,"Success Message"),t(),i(9,"p-message",2),e(10,"Info Message"),t(),i(11,"p-message",3),e(12,"Warn Message"),t(),i(13,"p-message",4),e(14,"Error Message"),t(),i(15,"p-message",5),e(16,"Secondary Message"),t(),i(17,"p-message",6),e(18,"Contrast Message"),t()(),p(19,"app-code",7)),o&2&&(r(19),n("code",a.code))},dependencies:[d,c,f,g,u],encapsulation:2})}return s})();var $=(()=>{class s{code={basic:`<p-message severity="success" variant="simple">Success Message</p-message>
<p-message severity="info" variant="simple">Info Message</p-message>
<p-message severity="warn" variant="simple">Warn Message</p-message>
<p-message severity="error" variant="simple">Error Message</p-message>
<p-message severity="secondary" variant="simple">Secondary Message</p-message>
<p-message severity="contrast" variant="simple">Contrast Message</p-message>`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-message severity="success" variant="simple">Success Message</p-message>
    <p-message severity="info" variant="simple">Info Message</p-message>
    <p-message severity="warn" variant="simple">Warn Message</p-message>
    <p-message severity="error" variant="simple">Error Message</p-message>
    <p-message severity="secondary" variant="simple">Secondary Message</p-message>
    <p-message severity="contrast" variant="simple">Contrast Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-simple-demo',
    templateUrl: './message-simple-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageSimpleDemo {}`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["simple-doc"]],decls:23,vars:1,consts:[[1,"card","flex","flex-wrap","gap-4","justify-center"],["severity","success","variant","simple"],["severity","info","variant","simple"],["severity","warn","variant","simple"],["severity","error","variant","simple"],["severity","secondary","variant","simple"],["severity","contrast","variant","simple"],["selector","message-simple-demo",3,"code"]],template:function(o,a){o&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Configure the "),i(3,"i"),e(4,"variant"),t(),e(5," value as "),i(6,"i"),e(7,"simple"),t(),e(8," for messages without borders and backgrounds."),t()(),i(9,"div",0)(10,"p-message",1),e(11,"Success Message"),t(),i(12,"p-message",2),e(13,"Info Message"),t(),i(14,"p-message",3),e(15,"Warn Message"),t(),i(16,"p-message",4),e(17,"Error Message"),t(),i(18,"p-message",5),e(19,"Secondary Message"),t(),i(20,"p-message",6),e(21,"Contrast Message"),t()(),p(22,"app-code",7)),o&2&&(r(22),n("code",a.code))},dependencies:[d,c,f,g,u],encapsulation:2})}return s})();var ee=(()=>{class s{code={basic:`<p-message size="small" icon="pi pi-send">Small Message</p-message>
<p-message icon="pi pi-user">Normal Message</p-message>
<p-message size="large" icon="pi pi-check">Large Message</p-message>`,html:`<div class="card flex flex-col items-center gap-4">
    <p-message size="small" icon="pi pi-send">Small Message</p-message>
    <p-message icon="pi pi-user">Normal Message</p-message>
    <p-message size="large" icon="pi pi-check">Large Message</p-message>
</div>`,typescript:`import { Component } from '@angular/core';
import { Message } from 'primeng/message';

@Component({
    selector: 'message-sizes-demo',
    templateUrl: './message-sizes-demo.html',
    standalone: true,
    imports: [Message]
})
export class MessageSizesDemo {}`};static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["sizes-doc"]],decls:17,vars:1,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","icon","pi pi-send"],["icon","pi pi-user"],["size","large","icon","pi pi-check"],["selector","message-sizes-demo",3,"code"]],template:function(o,a){o&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Message provides "),i(3,"i"),e(4,"small"),t(),e(5," and "),i(6,"i"),e(7,"large"),t(),e(8," sizes as alternatives to the base."),t()(),i(9,"div",0)(10,"p-message",1),e(11,"Small Message"),t(),i(12,"p-message",2),e(13,"Normal Message"),t(),i(14,"p-message",3),e(15,"Large Message"),t()(),p(16,"app-code",4)),o&2&&(r(16),n("code",a.code))},dependencies:[d,c,f,g,u],encapsulation:2})}return s})();var ne=()=>["Message"],se=(()=>{class s{ptComponent=Y;docs=[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:R},{id:"severity",label:"Severity",component:Z},{id:"icon",label:"Icon",component:J},{id:"outlined",label:"Outlined",component:Q},{id:"simple",label:"Simple",component:$},{id:"sizes",label:"Sizes",component:ee},{id:"forms",label:"Forms",component:G}];static \u0275fac=function(o){return new(o||s)};static \u0275cmp=m({type:s,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Message Component","header","Message","description","Message component is used to display inline messages.","themeDocs","message",3,"docs","apiDocs","ptDocs"]],template:function(o,a){o&1&&p(0,"app-doc",0),o&2&&n("docs",a.docs)("apiDocs",A(3,ne))("ptDocs",a.ptComponent)},dependencies:[B],encapsulation:2})}return s})();var fs=[{path:"",component:se}];export{fs as default};
