import{a as y,b}from"./chunk-EL6VDWTD.js";import"./chunk-J65EHHFF.js";import{a as V,b as G}from"./chunk-JNUBCW5H.js";import{a as E,b as j}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as W}from"./chunk-FKOOMXTU.js";import{a as x}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as q}from"./chunk-XCUGNKAG.js";import{a as h,b as U}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as S,ha as C}from"./chunk-MCW4FHXZ.js";import{va as s,za as d}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as g}from"./chunk-D2XKNHFS.js";import{$a as u,Eb as p,Fb as e,Gb as i,Gc as A,Hb as c,Ob as w,Qa as l,Sb as f,Ub as F,aa as D,ba as _,cc as Y,gb as m,gc as O,hc as t,ic as B,mb as k,rc as v,sc as K}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var J=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275cmp=m({type:r,selectors:[["confirm-popup-accessibility-doc"]],decls:89,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),e(4,"p"),t(5," ConfirmPopup component uses "),e(6,"i"),t(7,"alertdialog"),i(),t(8," role and since any attribute is passed to the root element you may define attributes like "),e(9,"i"),t(10,"aria-label"),i(),t(11," or "),e(12,"i"),t(13,"aria-labelledby"),i(),t(14," to describe the popup contents. In addition "),e(15,"i"),t(16,"aria-modal"),i(),t(17," is added since focus is kept within the popup. "),i(),e(18,"p"),t(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),e(20,"i"),t(21,"tabIndex"),i(),t(22," would be necessary. ConfirmPopup adds "),e(23,"i"),t(24,"aria-expanded"),i(),t(25," state attribute and "),e(26,"i"),t(27,"aria-controls"),i(),t(28," to the trigger so that the relation between the trigger and the popup is defined. "),i(),e(29,"h3"),t(30,"Overlay Keyboard Support"),i(),e(31,"p"),t(32," When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),e(33,"i"),t(34,"autofocus"),i(),t(35," to an element within the popup. "),i(),e(36,"div",0)(37,"table",1)(38,"thead")(39,"tr")(40,"th"),t(41,"Key"),i(),e(42,"th"),t(43,"Function"),i()()(),e(44,"tbody")(45,"tr")(46,"td")(47,"i"),t(48,"tab"),i()(),e(49,"td"),t(50,"Moves focus to the next the focusable element within the popup."),i()(),e(51,"tr")(52,"td")(53,"i"),t(54,"shift"),i(),t(55," + "),e(56,"i"),t(57,"tab"),i()(),e(58,"td"),t(59,"Moves focus to the previous the focusable element within the popup."),i()(),e(60,"tr")(61,"td")(62,"i"),t(63,"escape"),i()(),e(64,"td"),t(65,"Closes the popup and moves focus to the trigger."),i()()()()(),e(66,"h3"),t(67,"Buttons Keyboard Support"),i(),e(68,"div",0)(69,"table",1)(70,"thead")(71,"tr")(72,"th"),t(73,"Key"),i(),e(74,"th"),t(75,"Function"),i()()(),e(76,"tbody")(77,"tr")(78,"td")(79,"i"),t(80,"enter"),i()(),e(81,"td"),t(82,"Triggers the action, closes the popup and moves focus to the trigger."),i()(),e(83,"tr")(84,"td")(85,"i"),t(86,"space"),i()(),e(87,"td"),t(88,"Triggers the action, closes the popup and moves focus to the trigger."),i()()()()()()())},dependencies:[h],encapsulation:2})}return r})();var N=(()=>{class r{confirmationService;messageService;constructor(n,o){this.confirmationService=n,this.messageService=o}confirm1(n){this.confirmationService.confirm({target:n.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Save"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}confirm2(n){this.confirmationService.confirm({target:n.currentTarget,message:"Do you want to delete this record?",icon:"pi pi-info-circle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Delete",severity:"danger"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmpopup />
<p-button (onClick)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (onClick)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-confirmpopup />
    <p-button (onClick)="confirm1($event)" label="Save" [outlined]="true" />
    <p-button (onClick)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
    selector: 'confirm-popup-basic-demo',
    templateUrl: './confirm-popup-basic-demo.html',
    standalone: true,
    imports: [ButtonModule, ToastModule, ConfirmPopupModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupBasicDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.currentTarget as EventTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Save'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.currentTarget as EventTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Delete',
                severity: 'danger'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`};static \u0275fac=function(o){return new(o||r)(u(s),u(d))};static \u0275cmp=m({type:r,selectors:[["confirm-popup-basic-demo"]],features:[v([s,d])],decls:15,vars:3,consts:[[1,"card","flex","justify-center","gap-2"],["label","Save",3,"onClick","outlined"],["label","Delete","severity","danger",3,"onClick","outlined"],["selector","confirm-popup-basic-demo",3,"code"]],template:function(o,a){o&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"ConfirmPopup is defined using "),e(3,"i"),t(4,"p-confirmPopup"),i(),t(5," tag and an instance of "),e(6,"i"),t(7,"ConfirmationService"),i(),t(8," is required to display it bycalling confirm method."),i()(),e(9,"div",0),c(10,"p-toast")(11,"p-confirmpopup"),e(12,"p-button",1),f("onClick",function(M){return a.confirm1(M)}),i(),e(13,"p-button",2),f("onClick",function(M){return a.confirm2(M)}),i()(),c(14,"app-code",3)),o&2&&(l(12),p("outlined",!0),l(),p("outlined",!0),l(),p("code",a.code))},dependencies:[b,y,j,E,C,S,x,h],encapsulation:2})}return r})();function oe(r,I){if(r&1){let n=w();e(0,"div",5)(1,"span"),t(2),i(),e(3,"div",6)(4,"p-button",7),f("onClick",function(){D(n),F();let a=Y(8);return _(a.onAccept())}),i(),e(5,"p-button",8),f("onClick",function(){D(n),F();let a=Y(8);return _(a.onReject())}),i()()()}if(r&2){let n=I.$implicit;l(2),B(n.message),l(3),p("text",!0)}}var Q=(()=>{class r{confirmationService;messageService;constructor(n,o){this.confirmationService=n,this.messageService=o}confirm(n){this.confirmationService.confirm({target:n.target,message:"Save your current process?",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmpopup #cp>
    <ng-template #headless let-message>
        <div class="rounded p-4">
            <span>{{ message.message }}</span>
            <div class="flex items-center gap-2 mt-4">
                <p-button (onClick)="cp.onAccept()" label="Save" size="small" />
                <p-button (onClick)="cp.onReject()" label="Cancel" [text]="true" size="small" severity="secondary" />
            </div>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (onClick)="confirm($event)" label="Save" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-confirmpopup #cp>
        <ng-template #headless let-message>
            <div class="rounded p-4">
                <span>{{ message.message }}</span>
                <div class="flex items-center gap-2 mt-4">
                    <p-button (onClick)="cp.onAccept()" label="Save" size="small" />
                    <p-button (onClick)="cp.onReject()" label="Cancel" [text]="true" size="small" severity="secondary" />
                </div>
            </div>
        </ng-template>
    </p-confirmpopup>
    <p-button (onClick)="confirm($event)" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-popup-headless-demo',
    templateUrl: './confirm-popup-headless-demo.html',
    standalone: true,
    imports: [ConfirmPopupModule, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupHeadlessDemo {
   constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Save your current process?',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`};static \u0275fac=function(o){return new(o||r)(u(s),u(d))};static \u0275cmp=m({type:r,selectors:[["confirm-popup-headless-demo"]],features:[v([s,d])],decls:13,vars:1,consts:[["cp",""],["headless",""],[1,"card","flex","justify-center"],["label","Save",3,"onClick"],["selector","confirm-popup-headless-demo",3,"code"],[1,"rounded","p-4"],[1,"flex","items-center","gap-2","mt-4"],["label","Save","size","small",3,"onClick"],["label","Cancel","size","small","severity","secondary",3,"onClick","text"]],template:function(o,a){if(o&1){let T=w();e(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"Headless"),i(),t(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),e(5,"div",2),c(6,"p-toast"),e(7,"p-confirmpopup",null,0),k(9,oe,6,2,"ng-template",null,1,A),i(),e(11,"p-button",3),f("onClick",function(R){return D(T),_(a.confirm(R))}),i()(),c(12,"app-code",4)}o&2&&(l(12),p("code",a.code))},dependencies:[g,b,y,j,E,C,S,x,h],encapsulation:2})}return r})();var X=(()=>{class r{code={typescript:"import { ConfirmPopupModule } from 'primeng/confirmpopup';"};static \u0275fac=function(o){return new(o||r)};static \u0275cmp=m({type:r,selectors:[["confirm-popup-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&c(0,"app-code",0),o&2&&p("code",a.code)("hideToggleCode",!0)},dependencies:[x],encapsulation:2})}return r})();var Z=(()=>{class r{confirmationService;constructor(n){this.confirmationService=n}confirm(n){this.confirmationService.confirm({target:n.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Save"}})}docs=[{data:V("ConfirmPopup"),key:"ConfirmPopup"}];static \u0275fac=function(o){return new(o||r)(u(s))};static \u0275cmp=m({type:r,selectors:[["confirmpopup-pt-viewer"]],features:[v([s])],decls:3,vars:1,consts:[[3,"docs"],["label","Open Popup","outlined","",3,"onClick"]],template:function(o,a){o&1&&(e(0,"app-docptviewer",0),c(1,"p-confirmpopup"),e(2,"p-button",1),f("onClick",function(M){return a.confirm(M)}),i()()),o&2&&p("docs",a.docs)},dependencies:[g,G,b,y,C,S],encapsulation:2})}return r})();var ee=(()=>{class r{docs=[{id:"pt.viewer",label:"Viewer",component:Z},{id:"pt.doc.confirmpopup",label:"ConfirmPopup PT Options",component:U,data:V("ConfirmPopup")}];static \u0275fac=function(o){return new(o||r)};static \u0275cmp=m({type:r,selectors:[["confirmpopup-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,a){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),t(3,"ConfirmPopup Pass Through"),i()(),c(4,"app-docsection",2),i()),o&2&&(l(4),p("docs",a.docs))},dependencies:[g,q],encapsulation:2})}return r})();function re(r,I){if(r&1&&(e(0,"div",4),c(1,"i",5),e(2,"p"),t(3),i()()),r&2){let n=I.$implicit;l(),O(n.icon),l(2),B(n.message)}}var te=(()=>{class r{confirmationService;messageService;constructor(n,o){this.confirmationService=n,this.messageService=o}confirm(n){this.confirmationService.confirm({target:n.target,message:"Please confirm to proceed moving forward.",icon:"pi pi-exclamation-circle",rejectButtonProps:{icon:"pi pi-times",label:"Cancel",outlined:!0},acceptButtonProps:{icon:"pi pi-check",label:"Confirm"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmpopup>
    <ng-template #content let-message>
        <div
            class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0"
        >
            <i [class]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmpopup>
<p-button (click)="confirm($event)" label="Save" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-confirmpopup>
        <ng-template #content let-message>
            <div
                class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700 p-4 mb-4 pb-0"
            >
                <i [class]="message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ message.message }}</p>
            </div>
        </ng-template>
    </p-confirmpopup>
    <p-button (click)="confirm($event)" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-popup-template-demo',
    templateUrl: './confirm-popup-template-demo.html',
    standalone: true,
    imports: [ConfirmPopupModule, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmPopupTemplateDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}


    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Please confirm to proceed moving forward.',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                icon: 'pi pi-times',
                label: 'Cancel',
                outlined: true,
            },
            acceptButtonProps: {
                icon: 'pi pi-check',
                label: 'Confirm',
            },
            accept: () => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmed',
                    detail: 'You have accepted',
                    life: 3000,
                });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'You have rejected',
                    life: 3000,
                });
            },
        });
    }
}`};static \u0275fac=function(o){return new(o||r)(u(s),u(d))};static \u0275cmp=m({type:r,selectors:[["confirm-popup-template-demo"]],features:[v([s,d])],decls:13,vars:1,consts:[["content",""],[1,"card","flex","justify-center"],["label","Save",3,"click"],["selector","confirm-popup-template-demo",3,"code"],[1,"flex","flex-col","items-center","w-full","gap-4","border-b","border-surface-200","dark:border-surface-700","p-4","mb-4","pb-0"],[1,"!text-6xl","text-primary-500"]],template:function(o,a){if(o&1){let T=w();e(0,"app-docsectiontext")(1,"p"),t(2,"Content section can be customized using "),e(3,"i"),t(4,"content"),i(),t(5," template."),i()(),e(6,"div",1),c(7,"p-toast"),e(8,"p-confirmpopup"),k(9,re,4,3,"ng-template",null,0,A),i(),e(11,"p-button",2),f("click",function(R){return D(T),_(a.confirm(R))}),i()(),c(12,"app-code",3)}o&2&&(l(12),p("code",a.code))},dependencies:[g,b,y,j,E,C,S,x,h],encapsulation:2})}return r})();var ne=()=>["ConfirmPopup","Confirmation","ConfirmationService"],ie=(()=>{class r{ptComponent=ee;docs=[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:N},{id:"template",label:"Template",component:te},{id:"headless",label:"Headless",component:Q},{id:"accessibility",label:"Accessibility",component:J}];static \u0275fac=function(o){return new(o||r)};static \u0275cmp=m({type:r,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ConfirmPopup Component","header","ConfirmPopup","description","ConfirmPopup displays a confirmation overlay displayed relatively to its target.","themeDocs","confirmPopup",3,"docs","apiDocs","ptDocs"]],template:function(o,a){o&1&&c(0,"app-doc",0),o&2&&p("docs",a.docs)("apiDocs",K(3,ne))("ptDocs",a.ptComponent)},dependencies:[W],encapsulation:2})}return r})();var et=[{path:"",component:ie}];export{et as default};
