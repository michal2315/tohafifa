import{b as w,c as D}from"./chunk-7RFPWI4X.js";import"./chunk-J65EHHFF.js";import{a as R,b as N}from"./chunk-XSLWLDLT.js";import{a as W,b as G}from"./chunk-JNUBCW5H.js";import{a as E,b as C}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{u as F}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as Q}from"./chunk-FKOOMXTU.js";import{a as f}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as K}from"./chunk-XCUGNKAG.js";import{a as _,b as O}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as h,ha as y}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as H}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as t,Gb as e,Gc as P,Hb as n,Ob as M,Qa as m,Sb as p,Ub as U,aa as q,ba as S,ca as z,da as Z,fc as k,gb as c,hc as i,mb as B,mc as g,nc as v,oc as x,sc as b}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var J=(()=>{class a{code={html:`<p-button icon="pi pi-external-link" (click)="visible = true" aria-controls="{{visible ? 'dialog' : null}}" aria-expanded="{{visible ? true : false}}" />

<p-dialog id="dialog" header="Header" [(visible)]="visible" [style]="{ width: '50vw' }" (onHide)="visible = false">
    <p>Content</p>
</p-dialog>`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-accessibility-doc"]],decls:130,vars:2,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,o){l&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),e(),t(4,"p"),i(5," Dialog component uses "),t(6,"i"),i(7,"dialog"),e(),i(8," role along with "),t(9,"i"),i(10,"aria-labelledby"),e(),i(11," referring to the header element however any attribute is passed to the root element so you may use "),t(12,"i"),i(13,"aria-labelledby"),e(),i(14," to override this default behavior. In addition "),t(15,"i"),i(16,"aria-modal"),e(),i(17," is added since focus is kept within the popup. "),e(),t(18,"p"),i(19," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(20,"i"),i(21,"tabIndex"),e(),i(22," would be necessary. "),e(),t(23,"p"),i(24,"Trigger element also requires "),t(25,"i"),i(26,"aria-expanded"),e(),i(27," and "),t(28,"i"),i(29,"aria-controls"),e(),i(30," to be handled explicitly."),e(),t(31,"p"),i(32," Close element is a "),t(33,"i"),i(34,"button"),e(),i(35," with an "),t(36,"i"),i(37,"aria-label"),e(),i(38," that refers to the "),t(39,"i"),i(40,"aria.close"),e(),i(41," property of the "),t(42,"a",0),i(43,"locale"),e(),i(44," API by default, you may use "),t(45,"i"),i(46,"closeButtonProps"),e(),i(47," to customize the element and override the default "),t(48,"i"),i(49,"aria-label"),e(),i(50,". "),e(),t(51,"p"),i(52," Maximize element is a "),t(53,"i"),i(54,"button"),e(),i(55," with an "),t(56,"i"),i(57,"aria-label"),e(),i(58," that refers to the "),t(59,"i"),i(60,"aria.maximizeLabel"),e(),i(61," and "),t(62,"i"),i(63,"aria.minimizeLabel"),e(),i(64," property of the "),t(65,"a",0),i(66,"locale"),e(),i(67," API. It cannot be customized using the "),t(68,"i"),i(69,"maximizeButtonProps"),e(),i(70,". "),e(),n(71,"app-code",1),t(72,"h3"),i(73,"Overlay Keyboard Support"),e(),t(74,"div",2)(75,"table",3)(76,"thead")(77,"tr")(78,"th"),i(79,"Key"),e(),t(80,"th"),i(81,"Function"),e()()(),t(82,"tbody")(83,"tr")(84,"td")(85,"i"),i(86,"tab"),e()(),t(87,"td"),i(88,"Moves focus to the next the focusable element within the dialog."),e()(),t(89,"tr")(90,"td")(91,"i"),i(92,"shift"),e(),i(93," + "),t(94,"i"),i(95,"tab"),e()(),t(96,"td"),i(97,"Moves focus to the previous the focusable element within the dialog."),e()(),t(98,"tr")(99,"td")(100,"i"),i(101,"escape"),e()(),t(102,"td"),i(103,"Closes the dialog if "),t(104,"i"),i(105,"closeOnEscape"),e(),i(106," is true."),e()()()()(),t(107,"h3"),i(108,"Close Button Keyboard Support"),e(),t(109,"div",2)(110,"table",3)(111,"thead")(112,"tr")(113,"th"),i(114,"Key"),e(),t(115,"th"),i(116,"Function"),e()()(),t(117,"tbody")(118,"tr")(119,"td")(120,"i"),i(121,"enter"),e()(),t(122,"td"),i(123,"Closes the dialog."),e()(),t(124,"tr")(125,"td")(126,"i"),i(127,"space"),e()(),t(128,"td"),i(129,"Closes the dialog."),e()()()()()()()),l&2&&(m(71),r("code",o.code)("hideToggleCode",!0))},dependencies:[f,_],encapsulation:2})}return a})();var me=()=>({width:"25rem"}),X=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [style]="{ width: '25rem' }">
    <span class="p-text-secondary block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [style]="{ width: '25rem' }">
        <span class="p-text-secondary block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
            <p-button label="Cancel" severity="secondary" (click)="visible = false" />
            <p-button label="Save" (click)="visible = false" />
        </div>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-basic-demo',
    templateUrl: './dialog-basic-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogBasicDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-basic-demo"]],decls:23,vars:6,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Edit Profile",3,"visibleChange","modal","visible"],[1,"p-text-secondary","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-8"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["label","Save",3,"click"],["selector","dialog-basic-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Dialog is used as a container and visibility is controlled with "),t(3,"i"),i(4,"visible"),e(),i(5," property."),e()(),t(6,"div",0)(7,"p-button",1),p("click",function(){return o.showDialog()}),e(),t(8,"p-dialog",2),x("visibleChange",function(u){return v(o.visible,u)||(o.visible=u),u}),t(9,"span",3),i(10,"Update your information."),e(),t(11,"div",4)(12,"label",5),i(13,"Username"),e(),n(14,"input",6),e(),t(15,"div",7)(16,"label",8),i(17,"Email"),e(),n(18,"input",9),e(),t(19,"div",10)(20,"p-button",11),p("click",function(){return o.visible=!1}),e(),t(21,"p-button",12),p("click",function(){return o.visible=!1}),e()()()(),n(22,"app-code",13)),l&2&&(m(8),k(b(5,me)),r("modal",!0),g("visible",o.visible),m(14),r("code",o.code))},dependencies:[D,w,y,h,C,E,f,_],encapsulation:2})}return a})();function pe(a,j){if(a&1){let s=M();t(0,"div",5),z(),t(1,"svg",6),n(2,"path",7),t(3,"mask",8),n(4,"path",9),e(),t(5,"g",10),n(6,"path",11),e(),n(7,"path",12)(8,"path",13)(9,"path",14)(10,"path",15)(11,"path",16)(12,"path",17)(13,"path",18)(14,"path",19)(15,"path",20)(16,"path",21),e(),Z(),t(17,"div",22)(18,"label",23),i(19,"Username"),e(),n(20,"input",24),e(),t(21,"div",22)(22,"label",25),i(23,"Password"),e(),n(24,"input",26),e(),t(25,"div",27)(26,"p-button",28),p("click",function(){q(s);let o=U();return S(o.closeDialog())}),e(),t(27,"p-button",29),p("click",function(){q(s);let o=U();return S(o.closeDialog())}),e()()()}a&2&&(m(26),r("text",!0),m(),r("text",!0))}var Y=(()=>{class a{visible=!1;showDialog(){this.visible=!0}closeDialog(){this.visible=!1}code={basic:`<p-button (click)="showDialog()" icon="pi pi-user" label="Login" />
<p-dialog maskStyleClass="backdrop-blur-sm" [(visible)]="visible" styleClass="!border-0 !bg-transparent">
    <ng-template #headless>
        <div
            class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
            style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"
        >
            <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="block mx-auto"
            >
                <path
                    d="..."
                    fill="var(--p-primary-color)"
                />
            </svg>
            <div class="inline-flex flex-col gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <input pInputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" />
            </div>
            <div class="inline-flex flex-col gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <input
                    pInputText
                    id="password"
                    class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
                    type="password"
                />
            </div>
            <div class="flex items-center gap-4">
                <p-button
                    label="Cancel"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
                <p-button
                    label="Sign-In"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
            </div>
        </div>
    </ng-template>
</p-dialog>`,html:`<div class="card flex justify-center">
  <p-button (click)="showDialog()" icon="pi pi-user" label="Login" />
<p-dialog maskStyleClass="backdrop-blur-sm" [(visible)]="visible" styleClass="!border-0 !bg-transparent">
    <ng-template #headless>
        <div
            class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
            style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"
        >
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--p-primary-color)" />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--ground-background)" />
                </mask>
                <g mask="url(#mask0_1_52)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z" fill="var(--p-primary-color)" />
                </g>
                <path d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z" fill="var(--ground-background)" />
                <path d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z" fill="var(--ground-background)" />
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
                <path d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z" fill="var(--ground-background)" />
                <path d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z" fill="var(--ground-background)" />
                <path d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z" fill="var(--ground-background)" />
                <path d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z" fill="var(--ground-background)" />
            </svg>
            <div class="inline-flex flex-col gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <input pInputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" />
            </div>
            <div class="inline-flex flex-col gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <input
                    pInputText
                    id="password"
                    class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
                    type="password"
                />
            </div>
            <div class="flex items-center gap-4">
                <p-button
                    label="Cancel"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
                <p-button
                    label="Sign-In"
                    (click)="closeDialog()"
                    [text]="true"
                    styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                    class="w-full"
                />
            </div>
        </div>
    </ng-template>
</p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-headless-demo',
    templateUrl: './dialog-headless-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogHeadlessDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    closeDialog() {
        this.visible = false;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-headless-demo"]],decls:11,vars:2,consts:[["headless",""],[1,"card","flex","justify-center"],["icon","pi pi-user","label","Login",3,"click"],["maskStyleClass","backdrop-blur-sm","styleClass","!border-0 !bg-transparent",3,"visibleChange","visible"],["selector","dialog-headless-demo",3,"code"],[1,"flex","flex-col","px-8","py-8","gap-6","rounded-2xl",2,"border-radius","12px","background-image","radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[1,"inline-flex","flex-col","gap-2"],["for","username",1,"text-primary-50","font-semibold"],["pInputText","","id","username",1,"!bg-white/20","!border-0","!p-4","!text-primary-50","w-80"],["for","password",1,"text-primary-50","font-semibold"],["pInputText","","id","password","type","password",1,"!bg-white/20","!border-0","!p-4","!text-primary-50","w-80"],[1,"flex","items-center","gap-4"],["label","Cancel","styleClass","!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10",1,"w-full",3,"click","text"],["label","Sign-In","styleClass","!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10",1,"w-full",3,"click","text"]],template:function(l,o){if(l&1){let d=M();t(0,"app-docsectiontext")(1,"p")(2,"i"),i(3,"Headless"),e(),i(4," mode allows you to customize the entire user interface instead of the default elements."),e()(),t(5,"div",1)(6,"p-button",2),p("click",function(){return q(d),S(o.showDialog())}),e(),t(7,"p-dialog",3),x("visibleChange",function(L){return q(d),v(o.visible,L)||(o.visible=L),S(L)}),B(8,pe,28,2,"ng-template",null,0,P),e()(),n(10,"app-code",4)}l&2&&(m(7),g("visible",o.visible),m(3),r("code",o.code))},dependencies:[D,w,y,h,C,E,f,_],encapsulation:2})}return a})();var $=(()=>{class a{code={typescript:"import { DialogModule } from 'primeng/dialog';"};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,o){l&1&&n(0,"app-code",0),l&2&&r("code",o.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return a})();var de=()=>({width:"50rem"}),ue=()=>({"1199px":"75vw","575px":"90vw"}),ee=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }">
    <p class="mb-8">
        Lorem ipsum dolor sit amet...
    </p>
    <p class="mb-8">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p class="mb-8">
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
    <p class="mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p class="mb-8">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }">
        <p class="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="mb-8">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p class="mb-8">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <p class="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="mb-8">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'dialog-long-content-demo',
    templateUrl: './dialog-long-content-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule]
})
export class DialogLongContentDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-long-content-demo"]],decls:19,vars:8,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Header",3,"visibleChange","modal","visible","breakpoints"],[1,"mb-8"],["selector","dialog-long-content-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Dialog automatically displays a scroller when content exceeds viewport."),e()(),t(3,"div",0)(4,"p-button",1),p("click",function(){return o.showDialog()}),e(),t(5,"p-dialog",2),x("visibleChange",function(u){return v(o.visible,u)||(o.visible=u),u}),t(6,"p",3),i(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e(),t(8,"p",3),i(9,' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? '),e(),t(10,"p",3),i(11," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "),e(),t(12,"p",3),i(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e(),t(14,"p",3),i(15,' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? '),e(),t(16,"p"),i(17," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "),e()()(),n(18,"app-code",4)),l&2&&(m(5),k(b(6,de)),r("modal",!0),g("visible",o.visible),r("breakpoints",b(7,ue)),m(13),r("code",o.code))},dependencies:[D,w,y,h,f,_],encapsulation:2})}return a})();var ce=()=>({width:"50rem"}),fe=()=>({"1199px":"75vw","575px":"90vw"}),te=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [maximizable]="true">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [maximizable]="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
    selector: 'dialog-maximizable-demo',
    templateUrl: './dialog-maximizable-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule]
})
export class DialogMaximizableDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-maximizable-demo"]],decls:15,vars:9,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Header",3,"visibleChange","modal","visible","breakpoints","maximizable"],["selector","dialog-maximizable-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Setting "),t(3,"i"),i(4,"maximizable"),e(),i(5," property to "),t(6,"i"),i(7,"true"),e(),i(8," enables the full screen mode."),e()(),t(9,"div",0)(10,"p-button",1),p("click",function(){return o.showDialog()}),e(),t(11,"p-dialog",2),x("visibleChange",function(u){return v(o.visible,u)||(o.visible=u),u}),t(12,"p"),i(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e()()(),n(14,"app-code",3)),l&2&&(m(11),k(b(7,ce)),r("modal",!0),g("visible",o.visible),r("breakpoints",b(8,fe))("maximizable",!0),m(3),r("code",o.code))},dependencies:[D,w,y,h,f,_],encapsulation:2})}return a})();var be=()=>({width:"25rem"}),ie=(()=>{class a{visible=!1;position="center";showDialog(s){this.position=s,this.visible=!0}code={basic:`<div class="flex flex-wrap justify-center gap-2 mb-2">
    <p-button (click)="showDialog('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2 mb-2">
    <p-button (click)="showDialog('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="secondary" styleClass="min-w-40" />
</div>
<div class="flex flex-wrap justify-center gap-2">
    <p-button (click)="showDialog('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
    <p-button (click)="showDialog('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="secondary" styleClass="min-w-40" />
</div>
<p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [position]="position" [style]="{ width: '25rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>`,html:`<div class="card">
    <div class="flex flex-wrap justify-center gap-2 mb-2">
        <p-button (click)="showDialog('left')" icon="pi pi-arrow-right" label="Left" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('right')" icon="pi pi-arrow-left" label="Right" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2 mb-2">
        <p-button (click)="showDialog('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="secondary" styleClass="min-w-40" />
    </div>
    <div class="flex flex-wrap justify-center gap-2">
        <p-button (click)="showDialog('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="secondary" styleClass="min-w-40" />
        <p-button (click)="showDialog('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="secondary" styleClass="min-w-40" />
    </div>
    <p-dialog header="Edit Profile" [modal]="true" [(visible)]="visible" [position]="position" [style]="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
            <p-button label="Cancel" severity="secondary" (click)="visible = false" />
            <p-button label="Save" (click)="visible = false" />
        </div>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-position-demo',
    templateUrl: './dialog-position-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogPositionDemo {
    visible: boolean = false;

    position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

    showDialog(position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
        this.position = position;
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-position-demo"]],decls:33,vars:7,consts:[[1,"card"],[1,"flex","flex-wrap","justify-center","gap-2","mb-2"],["icon","pi pi-arrow-right","label","Left","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-left","label","Right","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down-right","label","TopLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down","label","Top","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-down-left","label","TopRight","severity","secondary","styleClass","min-w-40",3,"click"],[1,"flex","flex-wrap","justify-center","gap-2"],["icon","pi pi-arrow-up-right","label","BottomLeft","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up","label","Bottom","severity","secondary","styleClass","min-w-40",3,"click"],["icon","pi pi-arrow-up-left","label","BottomRight","severity","secondary","styleClass","min-w-40",3,"click"],["header","Edit Profile",3,"visibleChange","modal","visible","position"],[1,"text-surface-500","dark:text-surface-400","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-8"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["label","Save",3,"click"],["selector","dialog-position-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"The "),t(3,"i"),i(4,"position"),e(),i(5," property is used to display a Dialog at all edges and corners of the screen."),e()(),t(6,"div",0)(7,"div",1)(8,"p-button",2),p("click",function(){return o.showDialog("left")}),e(),t(9,"p-button",3),p("click",function(){return o.showDialog("right")}),e()(),t(10,"div",1)(11,"p-button",4),p("click",function(){return o.showDialog("topleft")}),e(),t(12,"p-button",5),p("click",function(){return o.showDialog("top")}),e(),t(13,"p-button",6),p("click",function(){return o.showDialog("topright")}),e()(),t(14,"div",7)(15,"p-button",8),p("click",function(){return o.showDialog("bottomleft")}),e(),t(16,"p-button",9),p("click",function(){return o.showDialog("bottom")}),e(),t(17,"p-button",10),p("click",function(){return o.showDialog("bottomright")}),e()(),t(18,"p-dialog",11),x("visibleChange",function(u){return v(o.visible,u)||(o.visible=u),u}),t(19,"span",12),i(20,"Update your information."),e(),t(21,"div",13)(22,"label",14),i(23,"Username"),e(),n(24,"input",15),e(),t(25,"div",16)(26,"label",17),i(27,"Email"),e(),n(28,"input",18),e(),t(29,"div",19)(30,"p-button",20),p("click",function(){return o.visible=!1}),e(),t(31,"p-button",21),p("click",function(){return o.visible=!1}),e()()()(),n(32,"app-code",22)),l&2&&(m(18),k(b(6,be)),r("modal",!0),g("visible",o.visible),r("position",o.position),m(14),r("code",o.code))},dependencies:[D,w,y,h,C,E,f,_],encapsulation:2})}return a})();function ge(a,j){a&1&&(t(0,"div",10),n(1,"p-button",11)(2,"p-button",12),e())}var oe=(()=>{class a{visible=!0;docs=[{data:W("Dialog"),key:"Dialog"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-pt-viewer"]],decls:14,vars:4,consts:[["footer",""],[3,"docs"],["header","Edit Profile","maskStyleClass","!relative",1,"!my-auto","w-full",3,"visibleChange","visible","maximizable","draggable"],[1,"text-surface-500","dark:text-surface-400","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-8"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],[1,"flex","justify-end","gap-2"],["type","button","label","Cancel","severity","secondary"],["type","button","label","Save"]],template:function(l,o){if(l&1){let d=M();t(0,"app-docptviewer",1)(1,"p-dialog",2),x("visibleChange",function(L){return q(d),v(o.visible,L)||(o.visible=L),S(L)}),t(2,"span",3),i(3,"Update your information."),e(),t(4,"div",4)(5,"label",5),i(6,"Username"),e(),n(7,"input",6),e(),t(8,"div",7)(9,"label",8),i(10,"Email"),e(),n(11,"input",9),e(),B(12,ge,3,0,"ng-template",null,0,P),e()()}l&2&&(r("docs",o.docs),m(),g("visible",o.visible),r("maximizable",!0)("draggable",!1))},dependencies:[H,G,D,w,y,h,C,E,F],encapsulation:2})}return a})();var ae=(()=>{class a{docs=[{id:"pt.viewer",label:"Viewer",component:oe},{id:"pt.doc.dialog",label:"Dialog PT Options",component:O,data:W("Dialog")}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),i(3,"Dialog Pass Through"),e()(),n(4,"app-docsection",2),e()),l&2&&(m(4),r("docs",o.docs))},dependencies:[H,K],encapsulation:2})}return a})();var ve=()=>({width:"50vw"}),xe=()=>({"1199px":"75vw","575px":"90vw"}),le=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Header" [(visible)]="visible" [modal]="true" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Header" [(visible)]="visible" [modal]="true" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'dialog-responsive-demo',
    templateUrl: './dialog-responsive-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule]
})
export class DialogResponsiveDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-responsive-demo"]],decls:15,vars:10,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Header",3,"visibleChange","visible","modal","breakpoints","draggable","resizable"],["selector","dialog-responsive-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2," Dialog width can be adjusted per screen size with the "),t(3,"i"),i(4,"breakpoints"),e(),i(5," option where a key defines the max-width for the breakpoint and value for the corresponding width. When no breakpoint matches width defined in "),t(6,"i"),i(7,"style"),e(),i(8," property is used. "),e()(),t(9,"div",0)(10,"p-button",1),p("click",function(){return o.showDialog()}),e(),t(11,"p-dialog",2),x("visibleChange",function(u){return v(o.visible,u)||(o.visible=u),u}),t(12,"p"),i(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e()()(),n(14,"app-code",3)),l&2&&(m(11),k(b(8,ve)),g("visible",o.visible),r("modal",!0)("breakpoints",b(9,xe))("draggable",!1)("resizable",!1),m(3),r("code",o.code))},dependencies:[D,w,y,h,f,_],encapsulation:2})}return a})();var he=()=>({width:"25rem"});function ye(a,j){a&1&&(t(0,"div",13),n(1,"p-avatar",14),t(2,"span",15),i(3,"Amy Elsner"),e()())}function we(a,j){if(a&1){let s=M();t(0,"p-button",16),p("click",function(){q(s);let o=U();return S(o.visible=!1)}),e(),t(1,"p-button",17),p("click",function(){q(s);let o=U();return S(o.visible=!1)}),e()}a&2&&(r("text",!0),m(),r("outlined",!0))}var ne=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog [(visible)]="visible" [modal]="true" [style]="{ width: '25rem' }">
    <ng-template #header>
        <div class="inline-flex items-center justify-center gap-2">
            <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </div>
    </ng-template>
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-2">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <ng-template #footer>
        <p-button label="Cancel" [text]="true" severity="secondary" (click)="visible = false" />
        <p-button label="Save" [outlined]="true" severity="secondary" (click)="visible = false" />
    </ng-template>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog [(visible)]="visible" [modal]="true" [style]="{ width: '25rem' }">
        <ng-template #header>
            <div class="inline-flex items-center justify-center gap-2">
                <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
            </div>
        </ng-template>
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-2">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <ng-template #footer>
            <p-button label="Cancel" [text]="true" severity="secondary" (click)="visible = false" />
            <p-button label="Save" [outlined]="true" severity="secondary" (click)="visible = false" />
        </ng-template>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'dialog-template-demo',
    templateUrl: './dialog-template-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule, AvatarModule]
})
export class DialogTemplateDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-template-demo"]],decls:27,vars:6,consts:[["header",""],["footer",""],[1,"card","flex","justify-center"],["label","Show",3,"click"],[3,"visibleChange","visible","modal"],[1,"text-surface-500","dark:text-surface-400","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-2"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],["selector","dialog-template-demo",3,"code"],[1,"inline-flex","items-center","justify-center","gap-2"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold","whitespace-nowrap"],["label","Cancel","severity","secondary",3,"click","text"],["label","Save","severity","secondary",3,"click","outlined"]],template:function(l,o){if(l&1){let d=M();t(0,"app-docsectiontext")(1,"p"),i(2,"Dialog can be customized using "),t(3,"i"),i(4,"header"),e(),i(5," and "),t(6,"i"),i(7,"footer"),e(),i(8," templates."),e()(),t(9,"div",2)(10,"p-button",3),p("click",function(){return q(d),S(o.showDialog())}),e(),t(11,"p-dialog",4),x("visibleChange",function(L){return q(d),v(o.visible,L)||(o.visible=L),S(L)}),B(12,ye,4,0,"ng-template",null,0,P),t(14,"span",5),i(15,"Update your information."),e(),t(16,"div",6)(17,"label",7),i(18,"Username"),e(),n(19,"input",8),e(),t(20,"div",9)(21,"label",10),i(22,"Email"),e(),n(23,"input",11),e(),B(24,we,2,2,"ng-template",null,1,P),e()(),n(26,"app-code",12)}l&2&&(m(11),k(b(5,he)),g("visible",o.visible),r("modal",!0),m(15),r("code",o.code))},dependencies:[D,w,y,h,C,E,N,R,f,_],encapsulation:2})}return a})();var De=()=>({width:"25rem"}),re=(()=>{class a{visible=!1;showDialog(){this.visible=!0}code={basic:`<p-button (click)="showDialog()" label="Show" />
<p-dialog header="Edit Profile" [(visible)]="visible" [style]="{ width: '25rem' }">
    <span class="p-text-secondary block mb-8">Update your information.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <input pInputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <input pInputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
        <p-button label="Cancel" severity="secondary" (click)="visible = false" />
        <p-button label="Save" (click)="visible = false" />
    </div>
</p-dialog>`,html:`<div class="card flex justify-center">
    <p-button (click)="showDialog()" label="Show" />
    <p-dialog header="Edit Profile" [(visible)]="visible" [style]="{ width: '25rem' }">
        <span class="p-text-secondary block mb-8">Update your information.</span>
        <div class="flex items-center gap-4 mb-4">
            <label for="username" class="font-semibold w-24">Username</label>
            <input pInputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="email" class="font-semibold w-24">Email</label>
            <input pInputText id="email" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex justify-end gap-2">
            <p-button label="Cancel" severity="secondary" (click)="visible = false" />
            <p-button label="Save" (click)="visible = false" />
        </div>
    </p-dialog>
</div>`,typescript:`import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'dialog-without-modal-demo',
    templateUrl: './dialog-without-modal-demo.html',
    standalone: true,
    imports: [Dialog, ButtonModule, InputTextModule]
})
export class DialogWithoutModalDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["dialog-without-modal-demo"]],decls:23,vars:5,consts:[[1,"card","flex","justify-center"],["label","Show",3,"click"],["header","Edit Profile",3,"visibleChange","visible"],[1,"p-text-secondary","block","mb-8"],[1,"flex","items-center","gap-4","mb-4"],["for","username",1,"font-semibold","w-24"],["pInputText","","id","username","autocomplete","off",1,"flex-auto"],[1,"flex","items-center","gap-4","mb-8"],["for","email",1,"font-semibold","w-24"],["pInputText","","id","email","autocomplete","off",1,"flex-auto"],[1,"flex","justify-end","gap-2"],["label","Cancel","severity","secondary",3,"click"],["label","Save",3,"click"],["selector","dialog-without-modal-demo",3,"code"]],template:function(l,o){l&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Mask layer behind the Dialog is configured with the "),t(3,"i"),i(4,"modal"),e(),i(5," property. By default, no modal layer is added."),e()(),t(6,"div",0)(7,"p-button",1),p("click",function(){return o.showDialog()}),e(),t(8,"p-dialog",2),x("visibleChange",function(u){return v(o.visible,u)||(o.visible=u),u}),t(9,"span",3),i(10,"Update your information."),e(),t(11,"div",4)(12,"label",5),i(13,"Username"),e(),n(14,"input",6),e(),t(15,"div",7)(16,"label",8),i(17,"Email"),e(),n(18,"input",9),e(),t(19,"div",10)(20,"p-button",11),p("click",function(){return o.visible=!1}),e(),t(21,"p-button",12),p("click",function(){return o.visible=!1}),e()()()(),n(22,"app-code",13)),l&2&&(m(8),k(b(4,De)),g("visible",o.visible),m(14),r("code",o.code))},dependencies:[D,w,y,h,C,E,f,_],encapsulation:2})}return a})();var _e=()=>["Dialog"],se=(()=>{class a{ptComponent=ae;docs=[{id:"import",label:"Import",component:$},{id:"basic",label:"Basic",component:X},{id:"template",label:"Template",component:ne},{id:"position",label:"Position",component:ie},{id:"maximizable",label:"Maximizable",component:te},{id:"longcontent",label:"Long Content",component:ee},{id:"withoutmodal",label:"Without Modal",component:re},{id:"responsive",label:"Responsive",component:le},{id:"headless",label:"Headless",component:Y},{id:"accessibility",label:"Accessibility",component:J}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Dialog Component","header","Dialog","description","Dialog is a container to display content in an overlay window.","themeDocs","dialog",3,"docs","apiDocs","ptDocs"]],template:function(l,o){l&1&&n(0,"app-doc",0),l&2&&r("docs",o.docs)("apiDocs",b(3,_e))("ptDocs",o.ptComponent)},dependencies:[Q],encapsulation:2})}return a})();var Gt=[{path:"",component:se}];export{Gt as default};
