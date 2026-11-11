import{a as H}from"./chunk-PKCXEJCN.js";import{a as Z,b as X}from"./chunk-XSLWLDLT.js";import{a as P,b as G}from"./chunk-JNUBCW5H.js";import{a as S,b as x}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as q}from"./chunk-FKOOMXTU.js";import{a as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as K}from"./chunk-XCUGNKAG.js";import{a as f,b as $}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ba as C,ga as h,ha as b}from"./chunk-MCW4FHXZ.js";import{za as l}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as j}from"./chunk-D2XKNHFS.js";import{$a as g,Eb as p,Fb as t,Gb as i,Gc as F,Hb as a,Ob as E,Qa as m,Sb as c,Ub as A,Uc as W,aa as M,ba as k,fc as L,gb as d,hc as e,ic as I,jc as z,mb as B,rc as y,sc as R,tc as U}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var J=(()=>{class o{static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["toast-accessibility-doc"]],decls:51,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),t(3,"p"),e(4,"Toast component use "),t(5,"i"),e(6,"alert"),i(),e(7," role that implicitly defines "),t(8,"i"),e(9,"aria-live"),i(),e(10,' as "assertive" and '),t(11,"i"),e(12,"aria-atomic"),i(),e(13,' as "true".'),i(),t(14,"p"),e(15,"Close element is a "),t(16,"i"),e(17,"button"),i(),e(18," with an "),t(19,"i"),e(20,"aria-label"),i(),e(21," that refers to the "),t(22,"i"),e(23,"aria.close"),i(),e(24," property of the "),t(25,"a",0),e(26,"locale"),i(),e(27," API by default."),i(),t(28,"h3"),e(29,"Close Button Keyboard Support"),i(),t(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),e(35,"Key"),i(),t(36,"th"),e(37,"Function"),i()()(),t(38,"tbody")(39,"tr")(40,"td")(41,"i"),e(42,"enter"),i()(),t(43,"td"),e(44,"Closes the message."),i()(),t(45,"tr")(46,"td")(47,"i"),e(48,"space"),i()(),t(49,"td"),e(50,"Closes the message."),i()()()()()())},dependencies:[f],encapsulation:2})}return o})();var N=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}code={basic:`<p-toast [showTransitionOptions]="'250ms'" [showTransformOptions]="'translateX(100%)'" [hideTransitionOptions]="'150ms'" [hideTransformOptions]="'translateX(100%)'" />
<p-button (click)="show()" label="Show" />`,html:`<div class="card flex justify-center">
    <p-toast [showTransitionOptions]="'250ms'" [showTransformOptions]="'translateX(100%)'" [hideTransitionOptions]="'150ms'" [hideTransformOptions]="'translateX(100%)'" />
    <p-button (click)="show()" label="Show" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'toast-animation-demo',
    templateUrl: './toast-animation-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule],
    providers: [MessageService]
})
export class ToastAnimationDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["animation-doc"]],features:[y([l])],decls:19,vars:5,consts:[[1,"card","flex","justify-center"],[3,"showTransitionOptions","showTransformOptions","hideTransitionOptions","hideTransformOptions"],["label","Show",3,"click"],["selector","toast-animation-demo",3,"code"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Transition of the animations can be customized using the "),t(3,"i"),e(4,"showTransitionOptions"),i(),e(5,", "),t(6,"i"),e(7,"hideTransitionOptions"),i(),e(8,", "),t(9,"i"),e(10,"showTransformOptions"),i(),e(11," and "),t(12,"i"),e(13,"hideTransformOptions"),i(),e(14," properties."),i()(),t(15,"div",0),a(16,"p-toast",1),t(17,"p-button",2),c("click",function(){return n.show()}),i()(),a(18,"app-code",3)),s&2&&(m(16),p("showTransitionOptions","250ms")("showTransformOptions","translateX(100%)")("hideTransitionOptions","150ms")("hideTransformOptions","translateX(100%)"),m(2),p("code",n.code))},dependencies:[f,v,x,S,b,h],encapsulation:2})}return o})();var Q=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content",life:3e3})}code={basic:`<p-toast />
<p-button (onClick)="show()" label="Show" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-button (onClick)="show()" label="Show" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-basic-demo',
    templateUrl: './toast-basic-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastBasicDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["basic-doc"]],features:[y([l])],decls:28,vars:1,consts:[[1,"card","flex","justify-center"],["label","Show",3,"onClick"],["selector","toast-basic-demo",3,"code"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Toasts are displayed by calling the "),t(3,"i"),e(4,"add"),i(),e(5," and "),t(6,"i"),e(7,"addAll"),i(),e(8," method provided by the "),t(9,"i"),e(10,"messageService"),i(),e(11,". A single toast is specified by the "),t(12,"i"),e(13,"Message"),i(),e(14," interface that defines various properties such as "),t(15,"i"),e(16,"severity"),i(),e(17,", "),t(18,"i"),e(19,"summary"),i(),e(20," and "),t(21,"i"),e(22,"detail"),i(),e(23,". "),i()(),t(24,"div",0),a(25,"p-toast"),t(26,"p-button",1),c("onClick",function(){return n.show()}),i()(),a(27,"app-code",2)),s&2&&(m(27),p("code",n.code))},dependencies:[f,v,x,S,b,h],encapsulation:2})}return o})();var ce=()=>({height:"4px"});function me(o,V){if(o&1){let r=E();t(0,"section",5)(1,"div",6),a(2,"i",7),t(3,"span",8),e(4),i()(),t(5,"div",9),a(6,"p-progressbar",10),t(7,"label",11),e(8),i()(),t(9,"div",12)(10,"p-button",13),c("click",function(n){let u=M(r).closeFn;return k(u(n))}),i(),t(11,"p-button",14),c("click",function(n){let u=M(r).closeFn;return k(u(n))}),i()()()}if(o&2){let r=V.$implicit,s=A();m(4),I(r.summary),m(2),L(R(6,ce)),p("value",s.progress)("showValue",!1),m(2),z("",s.progress,"% uploaded")}}var Y=(()=>{class o{messageService;cdr;visible=!1;progress=0;interval=null;constructor(r,s){this.messageService=r,this.cdr=s}showConfirm(){this.visible||(this.messageService.add({key:"confirm",sticky:!0,severity:"custom",summary:"Uploading your files.",styleClass:"backdrop-blur-lg rounded-2xl"}),this.visible=!0,this.progress=0,this.interval&&clearInterval(this.interval),this.interval=setInterval(()=>{this.progress<=100&&(this.progress=this.progress+20),this.progress>=100&&(this.progress=100,clearInterval(this.interval)),this.cdr.markForCheck()},1e3))}onClose(){this.visible=!1}code={basic:`<p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
    <ng-template let-message #headless let-closeFn="closeFn">
        <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
            <div class="flex items-center gap-5">
                <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
            </div>
            <div class="flex flex-col gap-2">
                <p-progressbar [value]="progress" [showValue]="false" [style]="{ height: '4px' }" class="!bg-primary/80" />
                <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
            </div>
            <div class="flex gap-4 mb-4 justify-end">
                <p-button label="Another Upload?" (click)="closeFn($event)" size="small" />
                <p-button label="Cancel" (click)="closeFn($event)" size="small" />
            </div>
        </section>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="Confirm" />`,html:`<div class="card flex justify-center">
    <p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
        <ng-template let-message #headless let-closeFn="closeFn">
            <section class="flex flex-col p-4 gap-4 w-full bg-primary/70 rounded-xl">
                <div class="flex items-center gap-5">
                    <i class="pi pi-cloud-upload text-white dark:text-black text-2xl"></i>
                    <span class="font-bold text-base text-white dark:text-black">{{ message.summary }}</span>
                </div>
                <div class="flex flex-col gap-2">
                    <p-progressbar [value]="progress" [showValue]="false" [style]="{ height: '4px' }" class="!bg-primary/80" />
                    <label class="text-sm font-bold text-white dark:text-black">{{ progress }}% uploaded</label>
                </div>
                <div class="flex gap-4 mb-4 justify-end">
                    <p-button label="Another Upload?" (click)="closeFn($event)" size="small" />
                    <p-button label="Cancel" (click)="closeFn($event)" size="small" />
                </div>
            </section>
        </ng-template>
    </p-toast>
    <p-button (click)="showConfirm()" label="Confirm" />
</div>`,typescript:`import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'toast-headless-demo',
    templateUrl: './toast-headless-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple, ProgressBar],
    providers: [MessageService]
})
export class ToastHeadlessDemo {

    visible: boolean = false;

    progress: number = 0;

    interval = null;

    constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) {}

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({
                key: 'confirm',
                sticky: true,
                severity: 'custom',
                summary: 'Uploading your files.',
                styleClass: 'backdrop-blur-lg rounded-2xl',
            });
            this.visible = true;
            this.progress = 0;

            if (this.interval) {
                clearInterval(this.interval);
            }

            this.interval = setInterval(() => {
                if (this.progress <= 100) {
                    this.progress = this.progress + 20;
                }

                if (this.progress >= 100) {
                    this.progress = 100;
                    clearInterval(this.interval);
                }
                this.cdr.markForCheck();
            }, 1000);
        }
    }

    onClose() {
        this.visible = false;
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l),g(W))};static \u0275cmp=d({type:o,selectors:[["headless-doc"]],features:[y([l])],decls:11,vars:2,consts:[["headless",""],[1,"card","flex","justify-center"],["position","top-center","key","confirm",3,"onClose","baseZIndex"],["label","Confirm",3,"click"],["selector","toast-headless-demo",3,"code"],[1,"flex","flex-col","p-4","gap-4","w-full","bg-primary/70","rounded-xl"],[1,"flex","items-center","gap-5"],[1,"pi","pi-cloud-upload","text-white","dark:text-black","text-2xl"],[1,"font-bold","text-base","text-white","dark:text-black"],[1,"flex","flex-col","gap-2"],[1,"!bg-primary/80",3,"value","showValue"],[1,"text-sm","font-bold","text-white","dark:text-black"],[1,"flex","gap-4","mb-4","justify-end"],["label","Another Upload?","size","small",3,"click"],["label","Cancel","size","small",3,"click"]],template:function(s,n){if(s&1){let u=E();t(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"Headless"),i(),e(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),t(5,"div",1)(6,"p-toast",2),c("onClose",function(){return M(u),k(n.onClose())}),B(7,me,12,7,"ng-template",null,0,F),i(),t(9,"p-button",3),c("click",function(){return M(u),k(n.showConfirm())}),i()(),a(10,"app-code",4)}s&2&&(m(6),p("baseZIndex",5e3),m(4),p("code",n.code))},dependencies:[f,v,x,S,b,h,H],styles:["[_nghost-%COMP%]     .p-progressbar-value{--tw-bg-opacity: 1 !important;background-color:color-mix(in srgb,var(--p-primary-50) calc(100% * var(--tw-bg-opacity)),transparent)!important}"]})}return o})();var ee=(()=>{class o{code={typescript:"import { ToastModule } from 'primeng/toast';"};static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["toast-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(s,n){s&1&&a(0,"app-code",0),s&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return o})();var te=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.addAll([{severity:"success",summary:"Message 1",detail:"Message Content"},{severity:"info",summary:"Message 2",detail:"Message Content"},{severity:"warn",summary:"Message 3",detail:"Message Content"},{severity:"error",summary:"Message 4",detail:"Message Content"}])}code={basic:`<p-toast />
<p-button pRipple (click)="show()" label="Multiple" severity="warn" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-button pRipple (click)="show()" label="Multiple" severity="warn" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-multiple-demo',
    templateUrl: './toast-multiple-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastMultipleDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
            { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
        ]);
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["toast-multiple-demo"]],features:[y([l])],decls:13,vars:1,consts:[[1,"card","flex","justify-center"],["pRipple","","label","Multiple","severity","warn",3,"click"],["selector","toast-multiple-demo",3,"code"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Multiple toasts are displayed by passing an array to the "),t(3,"i"),e(4,"showAll"),i(),e(5," method of the "),t(6,"i"),e(7,"messageService"),i(),e(8,"."),i()(),t(9,"div",0),a(10,"p-toast"),t(11,"p-button",1),c("click",function(){return n.show()}),i()(),a(12,"app-code",2)),s&2&&(m(12),p("code",n.code))},dependencies:[f,v,x,S,b,h,C],encapsulation:2})}return o})();var ie=(()=>{class o{messageService;constructor(r){this.messageService=r}showTopLeft(){this.messageService.add({severity:"info",summary:"Info Message",detail:"Message Content",key:"tl",life:3e3})}showBottomLeft(){this.messageService.add({severity:"warn",summary:"Warn Message",detail:"Message Content",key:"bl",life:3e3})}showBottomRight(){this.messageService.add({severity:"success",summary:"Success Message",detail:"Message Content",key:"br",life:3e3})}code={basic:`<p-toast position="top-left" key="tl" />
<p-toast position="bottom-left" key="bl" />
<p-toast position="bottom-right" key="br" />
<p-button pRipple (click)="showTopLeft()" label="Top Left" />
<p-button pRipple (click)="showBottomLeft()" label="Bottom Left" />
<p-button pRipple (click)="showBottomRight()" label="Bottom Right" />`,html:`<div class="card flex justify-center">
    <p-toast position="top-left" key="tl" />
    <p-toast position="bottom-left" key="bl" />
    <p-toast position="bottom-right" key="br" />
    <div class="flex flex-wrap gap-2">
        <p-button pRipple (click)="showTopLeft()" label="Top Left" />
        <p-button pRipple (click)="showBottomLeft()" label="Bottom Left" />
        <p-button pRipple (click)="showBottomRight()" label="Bottom Right" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-position-demo',
    templateUrl: './toast-position-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastPositionDemo {
    constructor(private messageService: MessageService) {}

    showTopLeft() {
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', key: 'tl', life: 3000 });
    }

    showBottomLeft() {
        this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', key: 'bl', life: 3000 });
    }

    showBottomRight() {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', key: 'br', life: 3000 });
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["position-doc"]],features:[y([l])],decls:36,vars:1,consts:[[1,"card","flex","justify-center"],["position","top-left","key","tl"],["position","bottom-left","key","bl"],["position","bottom-right","key","br"],[1,"flex","flex-wrap","gap-2"],["pRipple","","label","Top Left",3,"click"],["pRipple","","label","Bottom Left",3,"click"],["pRipple","","label","Bottom Right",3,"click"],["selector","toast-position-demo",3,"code"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Location of the toast is customized with the "),t(3,"i"),e(4,"position"),i(),e(5," property. Valid values are "),t(6,"i"),e(7,"top-left"),i(),e(8,", "),t(9,"i"),e(10,"top-center"),i(),e(11,", "),t(12,"i"),e(13,"top-right"),i(),e(14,", "),t(15,"i"),e(16,"bottom-left"),i(),e(17,", "),t(18,"i"),e(19,"bottom-center"),i(),e(20,", "),t(21,"i"),e(22,"bottom-right"),i(),e(23," and "),t(24,"i"),e(25,"center"),i(),e(26,"."),i()(),t(27,"div",0),a(28,"p-toast",1)(29,"p-toast",2)(30,"p-toast",3),t(31,"div",4)(32,"p-button",5),c("click",function(){return n.showTopLeft()}),i(),t(33,"p-button",6),c("click",function(){return n.showBottomLeft()}),i(),t(34,"p-button",7),c("click",function(){return n.showBottomRight()}),i()()(),a(35,"app-code",8)),s&2&&(m(35),p("code",n.code))},dependencies:[f,v,x,S,b,h,C],encapsulation:2})}return o})();var de=()=>({width:"100%",right:"0",left:"0"}),ue=o=>({"920px":o}),oe=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}code={basic:`<p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />
<p-button (click)="show()" label="Show" />`,html:`<div class="card flex justify-center">
    <p-toast [breakpoints]="{ '920px': { width: '100%', right: '0', left: '0' } }" />
    <p-button (click)="show()" label="Show" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-responsive-demo',
    templateUrl: './toast-responsive-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastResponsiveDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["responsive-doc"]],features:[y([l])],decls:13,vars:5,consts:[[1,"card","flex","justify-center"],[3,"breakpoints"],["label","Show",3,"click"],["selector","toast-responsive-demo",3,"code"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Toast styling can be adjusted per screen size with the "),t(3,"i"),e(4,"breakpoints"),i(),e(5," option. The value of "),t(6,"i"),e(7,"breakpoints"),i(),e(8," should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px. "),i()(),t(9,"div",0),a(10,"p-toast",1),t(11,"p-button",2),c("click",function(){return n.show()}),i()(),a(12,"app-code",3)),s&2&&(m(10),p("breakpoints",U(3,ue,R(2,de))),m(2),p("code",n.code))},dependencies:[f,v,x,S,b,h],encapsulation:2})}return o})();var se=(()=>{class o{messageService;constructor(r){this.messageService=r}showSuccess(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}showInfo(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content"})}showWarn(){this.messageService.add({severity:"warn",summary:"Warn",detail:"Message Content"})}showError(){this.messageService.add({severity:"error",summary:"Error",detail:"Message Content"})}showContrast(){this.messageService.add({severity:"contrast",summary:"Contrast",detail:"Message Content"})}showSecondary(){this.messageService.add({severity:"secondary",summary:"Secondary",detail:"Message Content"})}code={basic:`<p-toast />
<p-button type="button" pRipple (click)="showSuccess()" label="Success" severity="success" />
<p-button type="button" pRipple (click)="showInfo()" label="Info" severity="info" />
<p-button type="button" pRipple (click)="showWarn()" label="Warn" severity="warn" />
<p-button type="button" pRipple (click)="showError()" label="Error" severity="danger" />
<p-button type="button" pRipple (click)="showSecondary()" label="Secondary" severity="secondary" />
<p-button type="button" pRipple (click)="showContrast()" label="Contrast" severity="contrast" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-button type="button" pRipple (click)="showSuccess()" label="Success" severity="success" />
    <p-button type="button" pRipple (click)="showInfo()" label="Info" severity="info" />
    <p-button type="button" pRipple (click)="showWarn()" label="Warn" severity="warn" />
    <p-button type="button" pRipple (click)="showError()" label="Error" severity="danger" />
    <p-button type="button" pRipple (click)="showSecondary()" label="Secondary" severity="secondary" />
    <p-button type="button" pRipple (click)="showContrast()" label="Contrast" severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'toast-severity-demo',
    templateUrl: './toast-severity-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple],
    providers: [MessageService]
})
export class ToastSeverityDemo {
    constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }

    showContrast() {
        this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
    }

    showSecondary() {
        this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["severity-doc"]],features:[y([l])],decls:27,vars:1,consts:[[1,"card","flex","justify-center","gap-2"],["type","button","pRipple","","label","Success","severity","success",3,"click"],["type","button","pRipple","","label","Info","severity","info",3,"click"],["type","button","pRipple","","label","Warn","severity","warn",3,"click"],["type","button","pRipple","","label","Error","severity","danger",3,"click"],["type","button","pRipple","","label","Secondary","severity","secondary",3,"click"],["type","button","pRipple","","label","Contrast","severity","contrast",3,"click"],["selector","toast-severity-demo",3,"code"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The "),t(3,"i"),e(4,"severity"),i(),e(5," option specifies the type of the message. There are four types of messages: "),t(6,"i"),e(7,"success"),i(),e(8,", "),t(9,"i"),e(10,"info"),i(),e(11,", "),t(12,"i"),e(13,"warn"),i(),e(14," and "),t(15,"i"),e(16,"error"),i(),e(17,". The severity of the message is used to display the icon and the color of the toast. "),i()(),t(18,"div",0),a(19,"p-toast"),t(20,"p-button",1),c("click",function(){return n.showSuccess()}),i(),t(21,"p-button",2),c("click",function(){return n.showInfo()}),i(),t(22,"p-button",3),c("click",function(){return n.showWarn()}),i(),t(23,"p-button",4),c("click",function(){return n.showError()}),i(),t(24,"p-button",5),c("click",function(){return n.showSecondary()}),i(),t(25,"p-button",6),c("click",function(){return n.showContrast()}),i()(),a(26,"app-code",7)),s&2&&(m(26),p("code",n.code))},dependencies:[f,v,x,S,b,h,C],encapsulation:2})}return o})();var re=(()=>{class o{messageService;constructor(r){this.messageService=r}show(){this.messageService.add({severity:"info",summary:"Sticky",detail:"Message Content",sticky:!0})}clear(){this.messageService.clear()}code={basic:`<p-toast />
<div class="flex flex-wrap gap-2">
    <p-button pRipple (click)="show()" label="Sticky" />
    <p-button pRipple (click)="clear()" label="Clear" severity="secondary" />
</div>`,html:`<div class="card flex justify-center">
    <p-toast />
    <div class="flex flex-wrap gap-2">
        <p-button pRipple (click)="show()" label="Sticky" />
        <p-button pRipple (click)="clear()" label="Clear" severity="secondary" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'toast-sticky-demo',
    templateUrl: './toast-sticky-demo.html',
    standalone: true,
    imports: [ToastModule, ButtonModule, RippleModule],
    providers: [MessageService]
})
export class ToastStickyDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    }

    clear() {
        this.messageService.clear();
    }
}`};static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["sticky-doc"]],features:[y([l])],decls:18,vars:1,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-wrap","gap-2"],["pRipple","","label","Sticky",3,"click"],["pRipple","","severity","secondary","label","Clear",3,"click"],["selector","toast-sticky-demo",3,"code"]],template:function(s,n){s&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A toast disappears after the time defined by the "),t(3,"i"),e(4,"life"),i(),e(5," option, set "),t(6,"i"),e(7,"sticky"),i(),e(8," option "),t(9,"i"),e(10,"true"),i(),e(11," on the message to override this and not hide the toast automatically."),i()(),t(12,"div",0),a(13,"p-toast"),t(14,"div",1)(15,"p-button",2),c("click",function(){return n.show()}),i(),t(16,"p-button",3),c("click",function(){return n.clear()}),i()()(),a(17,"app-code",4)),s&2&&(m(17),p("code",n.code))},dependencies:[f,v,x,S,b,h,C],encapsulation:2})}return o})();function fe(o,V){if(o&1){let r=E();t(0,"div",5)(1,"div",6),a(2,"p-avatar",7),t(3,"span",8),e(4,"Amy Elsner"),i()(),t(5,"div",9),e(6),i(),t(7,"p-button",10),c("click",function(){M(r);let n=A();return k(n.onConfirm())}),i()()}if(o&2){let r=V.$implicit;m(6),I(r.summary)}}var ne=(()=>{class o{messageService;constructor(r){this.messageService=r}visible=!1;code={basic:`<p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
    <ng-template let-message #message>
        <div class="flex flex-col items-start flex-auto">
            <div class="flex items-center gap-2">
                <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
            <div class="font-medium text-lg my-4">{{ message.summary }}</div>
            <p-button severity="success" size="small" label="Reply" (click)="onConfirm()" />
        </div>
    </ng-template>
</p-toast>
<p-button (click)="showConfirm()" label="View" />`,html:`<div class="card flex justify-center">
    <p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
        <ng-template let-message #message>
            <div class="flex flex-col items-start flex-auto">
                <div class="flex items-center gap-2">
                    <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </div>
                <div class="font-medium text-lg my-4">{{ message.summary }}</div>
                <p-button severity="success" size="small" label="Reply" (click)="onConfirm()" />
            </div>
        </ng-template>
    </p-toast>
    <p-button (click)="showConfirm()" label="View" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'toast-template-demo',
    templateUrl: './toast-template-demo.html',
    standalone: true,
    imports: [Toast, ButtonModule, Ripple, AvatarModule],
    providers: [MessageService]
})
export class ToastTemplateDemo {
    constructor(private messageService: MessageService) {}

    visible: boolean = false;

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?' });
            this.visible = true;
        }
    }

    onConfirm() {
        this.messageService.clear('confirm');
        this.visible = false;
    }

    onReject() {
        this.messageService.clear('confirm');
        this.visible = false;
    }
}`};onConfirm(){this.messageService.clear("confirm"),this.visible=!1}onReject(){this.messageService.clear("confirm"),this.visible=!1}showConfirm(){this.visible||(this.messageService.add({key:"confirm",sticky:!0,severity:"success",summary:"Can you send me the report?"}),this.visible=!0)}static \u0275fac=function(s){return new(s||o)(g(l))};static \u0275cmp=d({type:o,selectors:[["template-doc"]],features:[y([l])],decls:9,vars:2,consts:[["message",""],[1,"card","flex","justify-center"],["position","bottom-center","key","confirm",3,"onClose","baseZIndex"],["label","View",3,"click"],["selector","toast-template-demo",3,"code"],[1,"flex","flex-col","items-start","flex-auto"],[1,"flex","items-center","gap-2"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"],[1,"font-medium","text-lg","my-4"],["severity","success","size","small","label","Reply",3,"click"]],template:function(s,n){if(s&1){let u=E();t(0,"app-docsectiontext")(1,"p"),e(2,"Templating allows customizing the content where the message instance is available as the implicit variable."),i()(),t(3,"div",1)(4,"p-toast",2),c("onClose",function(){return M(u),k(n.onReject())}),B(5,fe,8,1,"ng-template",null,0,F),i(),t(7,"p-button",3),c("click",function(){return M(u),k(n.showConfirm())}),i()(),a(8,"app-code",4)}s&2&&(m(4),p("baseZIndex",5e3),m(4),p("code",n.code))},dependencies:[f,v,x,S,b,h,X,Z],encapsulation:2})}return o})();var ae=(()=>{class o{docs=[{data:P("Toast"),key:"Toast"}];static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["toast-pt-viewer"]],decls:14,vars:1,consts:[[3,"docs"],["data-pc-name","toast","data-pc-section","root",1,"p-toast","p-component"],["data-pc-section","message",1,"p-toast-message","p-toast-message-info"],["data-pc-section","messagecontent",1,"p-toast-message-content"],["data-pc-section","messageicon",1,"pi","pi-info-circle","p-toast-message-icon"],["data-pc-section","messagetext",1,"p-toast-message-text"],["data-pc-section","summary",1,"p-toast-summary"],["data-pc-section","detail",1,"p-toast-detail"],["data-pc-section","buttoncontainer"],["type","button","data-pc-section","closebutton",1,"p-toast-close-button"],["data-pc-section","closeicon",1,"pi","pi-times","p-toast-close-icon"]],template:function(s,n){s&1&&(t(0,"app-docptviewer",0)(1,"div",1)(2,"div")(3,"div",2)(4,"div",3),a(5,"i",4),t(6,"div",5)(7,"span",6),e(8,"Message Summary"),i(),t(9,"div",7),e(10,"Message Detail"),i()(),t(11,"div",8)(12,"button",9),a(13,"i",10),i()()()()()()()),s&2&&p("docs",n.docs)},dependencies:[j,G],encapsulation:2})}return o})();var le=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:ae},{id:"pt.doc.toast",label:"Toast PT Options",component:$,data:P("Toast")}];static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["toast-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(s,n){s&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Toast Pass Through"),i()(),a(4,"app-docsection",2),i()),s&2&&(m(4),p("docs",n.docs))},dependencies:[j,K],encapsulation:2})}return o})();var ve=()=>["Toast","ToastMessage"],pe=(()=>{class o{ptComponent=le;docs=[{id:"import",label:"Import",component:ee},{id:"basic",label:"Basic",component:Q},{id:"severity",label:"Severity",component:se},{id:"position",label:"Position",component:ie},{id:"multiple",label:"Multiple",component:te},{id:"sticky",label:"Sticky",component:re},{id:"templating",label:"Template",component:ne},{id:"headless",label:"Headless",component:Y},{id:"responsive",label:"Responsive",component:oe},{id:"animation",label:"Animation",component:N},{id:"accessibility",label:"Accessibility",component:J}];static \u0275fac=function(s){return new(s||o)};static \u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Toast Component","header","Toast","description","Toast is used to display messages in an overlay.","themeDocs","toast",3,"docs","apiDocs","ptDocs"]],template:function(s,n){s&1&&a(0,"app-doc",0),s&2&&p("docs",n.docs)("apiDocs",R(3,ve))("ptDocs",n.ptComponent)},dependencies:[q],encapsulation:2})}return o})();var Nt=[{path:"",component:pe}];export{Nt as default};
