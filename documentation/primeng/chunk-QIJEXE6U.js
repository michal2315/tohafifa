import{a as b,b as h}from"./chunk-5CB32NC7.js";import"./chunk-7RFPWI4X.js";import"./chunk-J65EHHFF.js";import{a as I,b as K}from"./chunk-JNUBCW5H.js";import{a as D,b as _}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as $}from"./chunk-FKOOMXTU.js";import{a as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as Z}from"./chunk-XCUGNKAG.js";import{a as S,b as U}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as x,ha as w}from"./chunk-MCW4FHXZ.js";import{va as m,za as f}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as q,w as C}from"./chunk-D2XKNHFS.js";import{$a as g,Eb as c,Fb as e,Gb as i,Gc as R,Hb as s,Ob as j,Qa as l,Sb as d,aa as T,ba as E,cc as O,fc as z,gb as p,hc as t,ic as M,mb as B,rc as y,sc as A}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var N=(()=>{class n{code1={typescript:`confirm1() {
this.confirmationService.confirm({
    message: 'Are you sure that you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => acceptFunc(),
    reject: () => rejectFunc()
});

<p-button (click)="confirm1()" icon="pi pi-check" label="Confirm" />

<p-confirmdialog />
        `};code2={html:`<p-confirmdialog id="dialog" [visible]="visible" (onHide)="visible = false" message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" />

<p-button (click)="visible = true" icon="pi pi-check" label="Confirm" aria-controls="{{visible ? 'dialog' : null}} aria-expanded="{{visible ? true : false}}" />`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["confirm-dialog-accessibility-doc"]],decls:102,vars:4,consts:[[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),e(4,"p"),t(5," ConfirmDialog component uses "),e(6,"i"),t(7,"alertdialog"),i(),t(8," role along with "),e(9,"i"),t(10,"aria-labelledby"),i(),t(11," referring to the header element however any attribute is passed to the root element so you may use "),e(12,"i"),t(13,"aria-labelledby"),i(),t(14," to override this default behavior. In addition "),e(15,"i"),t(16,"aria-modal"),i(),t(17," is added since focus is kept within the popup. "),i(),e(18,"p"),t(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),e(20,"i"),t(21,"tabIndex"),i(),t(22," would be necessary. "),i(),e(23,"p"),t(24," When "),e(25,"i"),t(26,"confirm"),i(),t(27," function is used and a trigger is passed as a parameter, ConfirmDialog adds "),e(28,"i"),t(29,"aria-expanded"),i(),t(30," state attribute and "),e(31,"i"),t(32,"aria-controls"),i(),t(33," to the trigger so that the relation between the trigger and the popup is defined. "),i(),s(34,"app-code",0),e(35,"p"),t(36,"If the dialog is controlled with the "),e(37,"i"),t(38,"visible"),i(),t(39," property "),e(40,"i"),t(41,"aria-expanded"),i(),t(42," and "),e(43,"i"),t(44,"aria-controls"),i(),t(45," need to be handled explicitly."),i(),s(46,"app-code",0),e(47,"h3"),t(48,"Overlay Keyboard Support"),i(),e(49,"div",1)(50,"table",2)(51,"thead")(52,"tr")(53,"th"),t(54,"Key"),i(),e(55,"th"),t(56,"Function"),i()()(),e(57,"tbody")(58,"tr")(59,"td")(60,"i"),t(61,"tab"),i()(),e(62,"td"),t(63,"Moves focus to the next the focusable element within the popup."),i()(),e(64,"tr")(65,"td")(66,"i"),t(67,"shift"),i(),t(68," + "),e(69,"i"),t(70,"tab"),i()(),e(71,"td"),t(72,"Moves focus to the previous the focusable element within the popup."),i()(),e(73,"tr")(74,"td")(75,"i"),t(76,"escape"),i()(),e(77,"td"),t(78,"Closes the popup and moves focus to the trigger."),i()()()()(),e(79,"h3"),t(80,"Buttons Keyboard Support"),i(),e(81,"div",1)(82,"table",2)(83,"thead")(84,"tr")(85,"th"),t(86,"Key"),i(),e(87,"th"),t(88,"Function"),i()()(),e(89,"tbody")(90,"tr")(91,"td")(92,"i"),t(93,"enter"),i()(),e(94,"td"),t(95,"Triggers the action, closes the popup and moves focus to the trigger."),i()(),e(96,"tr")(97,"td")(98,"i"),t(99,"space"),i()(),e(100,"td"),t(101,"Triggers the action, closes the popup and moves focus to the trigger."),i()()()()()()()),o&2&&(l(34),c("code",a.code1)("hideToggleCode",!0),l(12),c("code",a.code2)("hideToggleCode",!0))},dependencies:[v,S],encapsulation:2})}return n})();var W=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm1(r){this.confirmationService.confirm({target:r.target,message:"Are you sure that you want to proceed?",header:"Confirmation",closable:!0,closeOnEscape:!0,icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Save"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}confirm2(r){this.confirmationService.confirm({target:r.target,message:"Do you want to delete this record?",header:"Danger Zone",icon:"pi pi-info-circle",rejectLabel:"Cancel",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Delete",severity:"danger"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Record deleted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected"})}})}code={basic:`<p-toast />
<p-confirmdialog />
<p-button (click)="confirm1($event)" label="Save" [outlined]="true" />
<p-button (click)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />`,html:`<div class="card flex justify-center gap-2">
    <p-toast />
    <p-confirmdialog />
    <p-button (click)="confirm1($event)" label="Save" [outlined]="true" />
    <p-button (click)="confirm2($event)" label="Delete" severity="danger" [outlined]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-dialog-basic-demo',
    templateUrl: './confirm-dialog-basic-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogBasicDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            closable: true,
            closeOnEscape: true,
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Save',
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
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

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            header: 'Danger Zone',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Delete',
                severity: 'danger',
            },

            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            },
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(g(m),g(f))};static \u0275cmp=p({type:n,selectors:[["confirm-dialog-basic-demo"]],features:[y([m,f])],decls:15,vars:3,consts:[[1,"card","flex","justify-center","gap-2"],["label","Save",3,"click","outlined"],["label","Delete","severity","danger",3,"click","outlined"],["selector","confirm-dialog-basic-demo",3,"code"]],template:function(o,a){o&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"ConfirmDialog is defined using "),e(3,"i"),t(4,"p-confirmdialog"),i(),t(5," tag and an instance of "),e(6,"i"),t(7,"ConfirmationService"),i(),t(8," is required to display it bycalling confirm method."),i()(),e(9,"div",0),s(10,"p-toast")(11,"p-confirmdialog"),e(12,"p-button",1),d("click",function(P){return a.confirm1(P)}),i(),e(13,"p-button",2),d("click",function(P){return a.confirm2(P)}),i()(),s(14,"app-code",3)),o&2&&(l(12),c("outlined",!0),l(),c("outlined",!0),l(),c("code",a.code))},dependencies:[h,b,_,D,w,x,v,S],encapsulation:2})}return n})();function oe(n,Y){if(n&1){let r=j();e(0,"div",5)(1,"div",6),s(2,"i",7),i(),e(3,"span",8),t(4),i(),e(5,"p",9),t(6),i(),e(7,"div",10)(8,"p-button",11),d("onClick",function(){let a=T(r).onAccept;return E(a())}),i(),e(9,"p-button",12),d("onClick",function(){let a=T(r).onReject;return E(a())}),i()()()}if(n&2){let r=Y.$implicit;l(4),M(r.header),l(2),M(r.message),l(3),c("outlined",!0)}}var G=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm(){this.confirmationService.confirm({header:"Are you sure?",message:"Please confirm to proceed.",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"})},reject:()=>{this.messageService.add({severity:"info",summary:"Rejected",detail:"You have rejected"})}})}code={basic:`<p-toast />
<p-confirmdialog #cd>
    <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
        <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
            <div
                class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
            >
                <i class="pi pi-question !text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex items-center gap-2 mt-6">
                <p-button label="Save" (onClick)="onAccept()" styleClass="w-32"></p-button>
                <p-button label="Cancel" [outlined]="true" (onClick)="onReject()" styleClass="w-32"></p-button>
            </div>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save"/>`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-confirmdialog #cd>
        <ng-template #headless let-message let-onAccept="onAccept" let-onReject="onReject">
            <div class="flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded">
                <div
                    class="rounded-full bg-primary text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"
                >
                    <i class="pi pi-question !text-5xl"></i>
                </div>
                <span class="font-bold text-2xl block mb-2 mt-6">{{ message.header }}</span>
                <p class="mb-0">{{ message.message }}</p>
                <div class="flex items-center gap-2 mt-6">
                    <p-button label="Save" (onClick)="onAccept()" styleClass="w-32"></p-button>
                    <p-button label="Cancel" [outlined]="true" (onClick)="onReject()" styleClass="w-32"></p-button>
                </div>
            </div>
        </ng-template>
    </p-confirmdialog>
    <p-button (click)="confirm()" label="Save"/>
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'confirm-dialog-headless-demo',
    templateUrl: './confirm-dialog-headless-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ButtonModule, ToastModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogHeadlessDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm() {
        this.confirmationService.confirm({
            header: 'Are you sure?',
            message: 'Please confirm to proceed.',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected' });
            },
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(g(m),g(f))};static \u0275cmp=p({type:n,selectors:[["confirm-dialog-headless-demo"]],features:[y([m,f])],decls:13,vars:1,consts:[["cd",""],["headless",""],[1,"card","flex","justify-center"],["label","Save",3,"click"],["selector","confirm-dialog-headless-demo",3,"code"],[1,"flex","flex-col","items-center","p-8","bg-surface-0","dark:bg-surface-900","rounded"],[1,"rounded-full","bg-primary","text-primary-contrast","inline-flex","justify-center","items-center","h-24","w-24","-mt-20"],[1,"pi","pi-question","!text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-6"],[1,"mb-0"],[1,"flex","items-center","gap-2","mt-6"],["label","Save","styleClass","w-32",3,"onClick"],["label","Cancel","styleClass","w-32",3,"onClick","outlined"]],template:function(o,a){if(o&1){let u=j();e(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"Headless"),i(),t(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),e(5,"div",2),s(6,"p-toast"),e(7,"p-confirmdialog",null,0),B(9,oe,10,3,"ng-template",null,1,R),i(),e(11,"p-button",3),d("click",function(){return T(u),E(a.confirm())}),i()(),s(12,"app-code",4)}o&2&&(l(12),c("code",a.code))},dependencies:[C,h,b,_,D,w,x,v,S],encapsulation:2})}return n})();var J=(()=>{class n{code={typescript:"import { ConfirmDialogModule } from 'primeng/confirmdialog';"};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["confirm-dialog-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&s(0,"app-code",0),o&2&&c("code",a.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return n})();var Q=(()=>{class n{confirmationService;messageService;position="center";constructor(r,o){this.confirmationService=r,this.messageService=o}confirmPosition(r){this.position=r,this.confirmationService.confirm({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-info-circle",rejectButtonStyleClass:"p-button-text",rejectButtonProps:{label:"Cancel",severity:"secondary",text:!0},acceptButtonProps:{label:"Save",text:!0},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Request submitted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"Process incomplete",life:3e3})},key:"positionDialog"})}code={basic:`<p-toast />
<p-confirmdialog key="positionDialog" [position]="position" />
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2 mb-4">
    <p-button (click)="confirmPosition('topleft')" icon="pi pi-arrow-down" label="TopLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('topright')" icon="pi pi-arrow-down" label="TopRight" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2">
    <p-button (click)="confirmPosition('bottomleft')" icon="pi pi-arrow-up" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="confirmPosition('bottomright')" icon="pi pi-arrow-up" label="BottomRight" severity="secondary" styleClass="min-w-40" />
</div>`,html:`<div class="card">
    <p-toast />
    <p-confirmdialog key="positionDialog" [position]="position" />
    <div class="flex flex-wrap justify-center gap-2 mb-4">
        <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2 mb-4">
        <p-button (click)="confirmPosition('topleft')" icon="pi pi-arrow-down" label="TopLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('topright')" icon="pi pi-arrow-down" label="TopRight" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2">
        <p-button (click)="confirmPosition('bottomleft')" icon="pi pi-arrow-up" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="confirmPosition('bottomright')" icon="pi pi-arrow-up" label="BottomRight" severity="secondary" styleClass="min-w-40" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'confirm-dialog-position-demo',
    templateUrl: './confirm-dialog-position-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ButtonModule, ToastModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogPositionDemo {
    position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirmPosition(position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
        this.position = position;

        this.confirmationService.confirm({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            rejectButtonStyleClass: 'p-button-text',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                text: true,
            },
            acceptButtonProps: {
                label: 'Save',
                text: true,
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'Process incomplete',
                    life: 3000,
                });
            },
            key: 'positionDialog',
        });
    }
}`};static \u0275fac=function(o){return new(o||n)(g(m),g(f))};static \u0275cmp=p({type:n,selectors:[["confirm-dialog-position-demo"]],features:[y([m,f])],decls:21,vars:2,consts:[[1,"card"],["key","positionDialog",3,"position"],[1,"flex","flex-wrap","justify-center","gap-2","mb-4"],["icon","pi pi-arrow-right","label","Left","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-left","label","Right","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","TopLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","Top","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","TopRight","severity","secondary","styleClass","min-w-40",3,"click"],[1,"flex","flex-wrap","justify-center","gap-2"],["icon","pi pi-arrow-up","label","BottomLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up","label","Bottom","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up","label","BottomRight","severity","secondary","styleClass","min-w-40",3,"click"],["selector","confirm-dialog-position-demo",3,"code"]],template:function(o,a){o&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"The "),e(3,"i"),t(4,"position"),i(),t(5," property of the confirm options is used to display a Dialog at all edges and corners of the screen."),i()(),e(6,"div",0),s(7,"p-toast")(8,"p-confirmdialog",1),e(9,"div",2)(10,"p-button",3),d("click",function(){return a.confirmPosition("left")}),i(),e(11,"p-button",4),d("click",function(){return a.confirmPosition("right")}),i()(),e(12,"div",2)(13,"p-button",5),d("click",function(){return a.confirmPosition("topleft")}),i(),e(14,"p-button",6),d("click",function(){return a.confirmPosition("top")}),i(),e(15,"p-button",7),d("click",function(){return a.confirmPosition("topright")}),i()(),e(16,"div",8)(17,"p-button",9),d("click",function(){return a.confirmPosition("bottomleft")}),i(),e(18,"p-button",10),d("click",function(){return a.confirmPosition("bottom")}),i(),e(19,"p-button",11),d("click",function(){return a.confirmPosition("bottomright")}),i()()(),s(20,"app-code",12)),o&2&&(l(8),c("position",a.position),l(12),c("code",a.code))},dependencies:[h,b,_,D,w,x,v,S],encapsulation:2})}return n})();var ne=()=>({width:"25rem"}),X=(()=>{class n{confirmationService;docs=[{data:I("ConfirmDialog"),key:"ConfirmDialog"}];constructor(r){this.confirmationService=r}ngOnInit(){this.confirmationService.confirm({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Save"}})}static \u0275fac=function(o){return new(o||n)(g(m))};static \u0275cmp=p({type:n,selectors:[["confirmdialog-pt-viewer"]],features:[y([m])],decls:4,vars:9,consts:[["anchorElement",""],[3,"docs"],[2,"visiblity","hidden"],["maskStyleClass","!relative !rounded-[2rem]","styleClass","!relative",3,"draggable","appendTo","autoZIndex","baseZIndex","modal"]],template:function(o,a){if(o&1&&(e(0,"app-docptviewer",1),s(1,"span",2,0)(3,"p-confirmdialog",3),i()),o&2){let u=O(2);c("docs",a.docs),l(3),z(A(8,ne)),c("draggable",!1)("appendTo",u)("autoZIndex",!1)("baseZIndex",2)("modal",!1)}},dependencies:[C,K,h,b],encapsulation:2})}return n})();var ee=(()=>{class n{docs=[{id:"pt.viewer",label:"Viewer",component:X},{id:"pt.doc.confirmdialog",label:"ConfirmDialog PT Options",component:U,data:I("ConfirmDialog")}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["confirmdialog-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,a){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),t(3,"ConfirmDialog Pass Through"),i()(),s(4,"app-docsection",2),i()),o&2&&(l(4),c("docs",a.docs))},dependencies:[C,Z],encapsulation:2})}return n})();function re(n,Y){if(n&1&&(e(0,"div",4),s(1,"i",5),e(2,"p"),t(3),i()()),n&2){let r=Y.$implicit;l(),c("ngClass",r.icon),l(2),M(r.message)}}var te=(()=>{class n{confirmationService;messageService;constructor(r,o){this.confirmationService=r,this.messageService=o}confirm(){this.confirmationService.confirm({header:"Confirmation",message:"Please confirm to proceed moving forward.",icon:"pi pi-exclamation-circle",rejectButtonProps:{label:"Cancel",icon:"pi pi-times",variant:"outlined",size:"small"},acceptButtonProps:{label:"Save",icon:"pi pi-check",size:"small"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}code={basic:`<p-toast />
<p-confirmdialog>
    <ng-template #message let-message>
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i [ngClass]="message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmdialog>
<p-button (click)="confirm()" label="Save" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-confirmdialog>
        <ng-template #message let-message>
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i [ngClass]="message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ message.message }}</p>
            </div>
        </ng-template>
    </p-confirmdialog>
    <p-button (click)="confirm()" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'confirm-dialog-template-demo',
    templateUrl: './confirm-dialog-template-demo.html',
    standalone: true,
    imports: [ConfirmDialog, ToastModule, ButtonModule],
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogTemplateDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm() {
        this.confirmationService.confirm({
            header: 'Confirmation',
            message: 'Please confirm to proceed moving forward.',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                label: 'Cancel',
                icon: 'pi pi-times',
                variant: 'outlined',
                size: 'small'
            },
            acceptButtonProps: {
                label: 'Save',
                icon: 'pi pi-check',
                size: 'small'
            },
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

}`};static \u0275fac=function(o){return new(o||n)(g(m),g(f))};static \u0275cmp=p({type:n,selectors:[["confirm-dialog-template-demo"]],features:[y([m,f])],decls:33,vars:1,consts:[["message",""],[1,"card","flex","justify-center"],["label","Save",3,"click"],["selector","confirm-dialog-template-demo",3,"code"],[1,"flex","flex-col","items-center","w-full","gap-4","border-b","border-surface-200","dark:border-surface-700"],[1,"!text-6xl","text-primary-500",3,"ngClass"]],template:function(o,a){if(o&1){let u=j();e(0,"app-docsectiontext")(1,"p"),t(2," Properties of the dialog are defined in two ways, "),e(3,"i"),t(4,"message"),i(),t(5,", "),e(6,"i"),t(7,"icon"),i(),t(8,", "),e(9,"i"),t(10,"header"),i(),t(11," properties can either be defined using confirm method or declaratively on p-confirmDialog ng-template by "),e(12,"i"),t(13,"header"),i(),t(14,", "),e(15,"i"),t(16,"message"),i(),t(17,", "),e(18,"i"),t(19,"icon"),i(),t(20," and "),e(21,"i"),t(22,"footer"),i(),t(23," templates. If these values are unlikely to change then declarative approach would be useful, still properties defined in a ng-template can be overridden with confirm method call. "),i(),e(24,"p"),t(25," In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons. "),i()(),e(26,"div",1),s(27,"p-toast"),e(28,"p-confirmdialog"),B(29,re,4,2,"ng-template",null,0,R),i(),e(31,"p-button",2),d("click",function(){return T(u),E(a.confirm())}),i()(),s(32,"app-code",3)}o&2&&(l(32),c("code",a.code))},dependencies:[C,q,h,b,_,D,w,x,v,S],encapsulation:2})}return n})();var ae=()=>["ConfirmDialog","ConfirmationService","Confirmation"],ie=(()=>{class n{ptComponent=ee;docs=[{id:"import",label:"Import",component:J},{id:"basic",label:"Basic",component:W},{id:"position",label:"Position",component:Q},{id:"template",label:"Template",component:te},{id:"headless",label:"Headless",component:G},{id:"accessibility",label:"Accessibility",component:N}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ConfirmDialog Component","header","ConfirmDialog","description","ConfirmDialog is backed by a service utilizing Observables to display confirmation windows easily that can be shared by multiple actions on the same component.","themeDocs","confirmDialog",3,"docs","apiDocs","ptDocs"]],template:function(o,a){o&1&&s(0,"app-doc",0),o&2&&c("docs",a.docs)("apiDocs",A(3,ae))("ptDocs",a.ptComponent)},dependencies:[$],encapsulation:2})}return n})();var mt=[{path:"",component:ie}];export{mt as default};
