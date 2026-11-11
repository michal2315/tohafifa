import{a as w,b as h}from"./chunk-4JC5K4OU.js";import{a as J,b as X}from"./chunk-TKXBBDTC.js";import"./chunk-J65EHHFF.js";import{a as F,b as H}from"./chunk-XSLWLDLT.js";import{a as U,b as te}from"./chunk-JNUBCW5H.js";import{u as _}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ie}from"./chunk-FKOOMXTU.js";import{a as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ee}from"./chunk-XCUGNKAG.js";import{a as x,b as $}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{W as N,ba as Q,ca as Y,fa as G,ga as k,ha as y}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as P}from"./chunk-D2XKNHFS.js";import{Eb as c,Fb as e,Gb as i,Gc as T,Hb as n,Ob as M,Qa as p,Sb as v,Ub as Z,Yb as z,Zb as I,_b as O,aa as C,ba as L,ca as R,cc as K,da as B,fc as j,gb as m,hc as t,mb as E,mc as u,nc as f,oc as b,sc as V}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var re=(()=>{class o{code={html:`<p-button
    icon="pi pi-arrow-right"
    (click)="visible = true"
    aria-controls="{{visible ? 'drawer' : null}}"
    aria-expanded="{{visible ? true : false}}"
></p-button>
<p-drawer
    [(visible)]="visible"
    id="drawer"
    (onHide)="visible = false"
    role="region"
>
    content
</p-drawer>`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["drawer-accessibility-doc"]],decls:86,vars:2,consts:[[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,r){a&1&&(e(0,"app-docsectiontext")(1,"h3"),t(2,"Screen Reader"),i(),e(3,"p"),t(4," Drawer component uses "),e(5,"i"),t(6,"complementary"),i(),t(7," role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like "),e(8,"i"),t(9,"aria-labelledby"),i(),t(10," can be added. In addition "),e(11,"i"),t(12,"aria-modal"),i(),t(13," is added since focus is kept within the drawer when opened. "),i(),e(14,"p"),t(15," It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),e(16,"i"),t(17,"tabIndex"),i(),t(18," would be necessary. "),i(),e(19,"p"),t(20,"Trigger element also requires "),e(21,"i"),t(22,"aria-expanded"),i(),t(23," and "),e(24,"i"),t(25,"aria-controls"),i(),t(26," to be handled explicitly."),i(),n(27,"app-code",0),e(28,"h3"),t(29,"Overlay Keyboard Support"),i(),e(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),t(35,"Key"),i(),e(36,"th"),t(37,"Function"),i()()(),e(38,"tbody")(39,"tr")(40,"td")(41,"i"),t(42,"tab"),i()(),e(43,"td"),t(44,"Moves focus to the next the focusable element within the drawer."),i()(),e(45,"tr")(46,"td")(47,"i"),t(48,"shift"),i(),t(49," + "),e(50,"i"),t(51,"tab"),i()(),e(52,"td"),t(53,"Moves focus to the previous the focusable element within the drawer."),i()(),e(54,"tr")(55,"td")(56,"i"),t(57,"escape"),i()(),e(58,"td"),t(59,"Closes the dialog if "),e(60,"i"),t(61,"closeOnEscape"),i(),t(62," is true."),i()()()()(),e(63,"h3"),t(64,"Close Button Keyboard Support"),i(),e(65,"div",1)(66,"table",2)(67,"thead")(68,"tr")(69,"th"),t(70,"Key"),i(),e(71,"th"),t(72,"Function"),i()()(),e(73,"tbody")(74,"tr")(75,"td")(76,"i"),t(77,"enter"),i()(),e(78,"td"),t(79,"Closes the drawer."),i()(),e(80,"tr")(81,"td")(82,"i"),t(83,"space"),i()(),e(84,"td"),t(85,"Closes the drawer."),i()()()()()()),a&2&&(p(27),c("code",r.code)("hideToggleCode",!0))},dependencies:[g,x],encapsulation:2})}return o})();var oe=(()=>{class o{visible=!1;code={basic:`<p-drawer [(visible)]="visible" header="Drawer">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-arrow-right" />`,html:`<div class="card flex justify-center">
    <p-drawer [(visible)]="visible" header="Drawer">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>
    <p-button (click)="visible = true" icon="pi pi-arrow-right" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-basic-demo',
    templateUrl: './drawer-basic-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerBasicDemo {
    visible: boolean = false;
}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["header","Drawer",3,"visibleChange","visible"],["icon","pi pi-arrow-right",3,"click"],["selector","drawer-basic-demo",3,"code"]],template:function(a,r){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Drawer is used as a container and visibility is controlled with a binding to "),e(3,"i"),t(4,"visible"),i(),t(5,"."),i()(),e(6,"div",0)(7,"p-drawer",1),b("visibleChange",function(l){return f(r.visible,l)||(r.visible=l),l}),e(8,"p"),t(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(10,"p-button",2),v("click",function(){return r.visible=!0}),i()(),n(11,"app-code",3)),a&2&&(p(7),u("visible",r.visible),p(4),c("code",r.code))},dependencies:[h,w,y,k,g,x],encapsulation:2})}return o})();var ae=(()=>{class o{visible=!1;code={basic:`<p-drawer header="Drawer" [(visible)]="visible" position="full">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-window-maximize" />`,html:`<div class="card flex justify-center">
    <p-drawer header="Drawer" [(visible)]="visible" position="full">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </p-drawer>
    <p-button (click)="visible = true" icon="pi pi-window-maximize" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-full-screen-demo',
    templateUrl: './drawer-full-screen-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerFullScreenDemo {
    visible: boolean = false;
}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["full-screen-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-center"],["header","Drawer","position","full",3,"visibleChange","visible"],["icon","pi pi-window-maximize",3,"click"],["selector","drawer-full-screen-demo",3,"code"]],template:function(a,r){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Drawer can cover the whole page when "),e(3,"i"),t(4,"fullScreen"),i(),t(5," property is enabled."),i()(),e(6,"div",0)(7,"p-drawer",1),b("visibleChange",function(l){return f(r.visible,l)||(r.visible=l),l}),e(8,"p"),t(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(10,"p-button",2),v("click",function(){return r.visible=!0}),i()(),n(11,"app-code",3)),a&2&&(p(7),u("visible",r.visible),p(4),c("code",r.code))},dependencies:[g,x,h,w,y,k,_],encapsulation:2})}return o})();var ve=["drawerRef"];function ge(o,W){if(o&1){let d=M();e(0,"div",6)(1,"div",7)(2,"span",8),R(),e(3,"svg",9),n(4,"path",10),e(5,"mask",11),n(6,"path",12),i(),e(7,"g",13),n(8,"path",14),i(),n(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21)(16,"path",22)(17,"path",23)(18,"path",24),i(),B(),e(19,"span",25),t(20,"Your Logo"),i()(),e(21,"span")(22,"p-button",26),v("click",function(r){C(d);let s=Z();return L(s.closeCallback(r))}),i()()(),e(23,"div",27)(24,"ul",28)(25,"li")(26,"div",29)(27,"span",30),t(28,"FAVORITES"),i(),n(29,"i",31),i(),e(30,"ul",32)(31,"li")(32,"a",33),n(33,"i",34),e(34,"span",30),t(35,"Dashboard"),i()()(),e(36,"li")(37,"a",33),n(38,"i",35),e(39,"span",30),t(40,"Bookmarks"),i()()(),e(41,"li")(42,"a",36),n(43,"i",37),e(44,"span",30),t(45,"Reports"),i(),n(46,"i",38),i(),e(47,"ul",39)(48,"li")(49,"a",36),n(50,"i",37),e(51,"span",30),t(52,"Revenue"),i(),n(53,"i",38),i(),e(54,"ul",39)(55,"li")(56,"a",33),n(57,"i",40),e(58,"span",30),t(59,"View"),i()()(),e(60,"li")(61,"a",33),n(62,"i",41),e(63,"span",30),t(64,"Search"),i()()()()(),e(65,"li")(66,"a",33),n(67,"i",37),e(68,"span",30),t(69,"Expenses"),i()()()()(),e(70,"li")(71,"a",33),n(72,"i",42),e(73,"span",30),t(74,"Team"),i()()(),e(75,"li")(76,"a",33),n(77,"i",43),e(78,"span",30),t(79,"Messages"),i(),e(80,"span",44),t(81,"3"),i()()(),e(82,"li")(83,"a",33),n(84,"i",45),e(85,"span",30),t(86,"Calendar"),i()()(),e(87,"li")(88,"a",33),n(89,"i",46),e(90,"span",30),t(91,"Settings"),i()()()()()(),e(92,"ul",28)(93,"li")(94,"div",29)(95,"span",30),t(96,"APPLICATION"),i(),n(97,"i",31),i(),e(98,"ul",32)(99,"li")(100,"a",33),n(101,"i",47),e(102,"span",30),t(103,"Projects"),i()()(),e(104,"li")(105,"a",33),n(106,"i",48),e(107,"span",30),t(108,"Performance"),i()()(),e(109,"li")(110,"a",33),n(111,"i",46),e(112,"span",30),t(113,"Settings"),i()()()()()()(),e(114,"div",49),n(115,"hr",50),e(116,"a",51),n(117,"p-avatar",52),e(118,"span",53),t(119,"Amy Elsner"),i()()()()}}var ne=(()=>{class o{drawerRef;closeCallback(d){this.drawerRef.close(d)}visible=!1;code={basic:`<p-drawer #drawerRef [(visible)]="visible">
    <ng-template #headless>
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                <span class="inline-flex items-center gap-2">
                    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                        <path d="..." />
                    </svg>
                    <span class="font-semibold text-2xl text-primary">Your Logo</span>
                </span>
                <span>
                    <p-button type="button" (click)="closeCallback($event)" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-8 w-8"></p-button>
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    pRipple
                                    pStyleClass="@next"
                                    enterFromClass="hidden"
                                    enterActiveClass="animate-slidedown"
                                    leaveToClass="hidden"
                                    leaveActiveClass="animate-slideup"
                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                    <li>
                                        <a
                                            pRipple
                                            pStyleClass="@next"
                                            enterFromClass="hidden"
                                            enterActiveClass="animate-slidedown"
                                            leaveToClass="hidden"
                                            leaveActiveClass="animate-slideup"
                                            class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                            <li>
                                                <a
                                                    pRipple
                                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                                >
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    pRipple
                                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                                >
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-4 mx-4 border-t border-0 border-surface" />
                <a pRipple class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                    <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </a>
            </div>
        </div>
    </ng-template>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-bars" />`,html:`<div class="card flex justify-center">
<p-drawer #drawerRef [(visible)]="visible">
    <ng-template #headless>
        <div class="flex flex-col h-full">
            <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                <span class="inline-flex items-center gap-2">
                    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
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
                    <span class="font-semibold text-2xl text-primary">Your Logo</span>
                </span>
                <span>
                    <p-button type="button" (click)="closeCallback($event)" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-8 w-8"></p-button>
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    pRipple
                                    pStyleClass="@next"
                                    enterFromClass="hidden"
                                    enterActiveClass="animate-slidedown"
                                    leaveToClass="hidden"
                                    leaveActiveClass="animate-slideup"
                                    class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                    <li>
                                        <a
                                            pRipple
                                            pStyleClass="@next"
                                            enterFromClass="hidden"
                                            enterActiveClass="animate-slidedown"
                                            leaveToClass="hidden"
                                            leaveActiveClass="animate-slideup"
                                            class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-4 pr-0 m-0 hidden overflow-y-hidden transition-all duration-[400ms] ease-in-out">
                                            <li>
                                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-4 m-0">
                    <li>
                        <div
                            pRipple
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            enterActiveClass="animate-slidedown"
                            leaveToClass="hidden"
                            leaveActiveClass="animate-slideup"
                            class="p-4 flex items-center justify-between text-surface-600 dark:text-surface-200 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a pRipple class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-4 mx-4 border-t border-0 border-surface" />
                <a pRipple class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple">
                    <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </a>
            </div>
        </div>
    </ng-template>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-bars" />
</div>`,typescript:`import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'drawer-headless-demo',
    templateUrl: './drawer-headless-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass]
})
export class DrawerHeadlessDemo {
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;
}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["headless-doc"]],viewQuery:function(a,r){if(a&1&&z(ve,5),a&2){let s;I(s=O())&&(r.drawerRef=s.first)}},decls:12,vars:2,consts:[["drawerRef",""],["headless",""],[1,"card","flex","justify-center"],[3,"visibleChange","visible"],["icon","pi pi-bars",3,"click"],["selector","drawer-headless-demo",3,"code"],[1,"flex","flex-col","h-full"],[1,"flex","items-center","justify-between","px-6","pt-4","shrink-0"],[1,"inline-flex","items-center","gap-2"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[1,"font-semibold","text-2xl","text-primary"],["type","button","icon","pi pi-times","rounded","true","outlined","true","styleClass","h-8 w-8",3,"click"],[1,"overflow-y-auto"],[1,"list-none","p-4","m-0"],["pRipple","","pStyleClass","@next","enterFromClass","hidden","enterActiveClass","animate-slidedown","leaveToClass","hidden","leaveActiveClass","animate-slideup",1,"p-4","flex","items-center","justify-between","text-surface-600","dark:text-surface-200","cursor-pointer","p-ripple"],[1,"font-medium"],[1,"pi","pi-chevron-down"],[1,"list-none","p-0","m-0","overflow-hidden"],["pRipple","",1,"flex","items-center","cursor-pointer","p-4","rounded-border","text-surface-700","dark:text-surface-100","hover:bg-surface-100","dark:hover:bg-surface-700","duration-150","transition-colors","p-ripple"],[1,"pi","pi-home","mr-2"],[1,"pi","pi-bookmark","mr-2"],["pRipple","","pStyleClass","@next","enterFromClass","hidden","enterActiveClass","animate-slidedown","leaveToClass","hidden","leaveActiveClass","animate-slideup",1,"flex","items-center","cursor-pointer","p-4","rounded-border","text-surface-700","dark:text-surface-100","hover:bg-surface-100","dark:hover:bg-surface-700","duration-150","transition-colors","p-ripple"],[1,"pi","pi-chart-line","mr-2"],[1,"pi","pi-chevron-down","ml-auto"],[1,"list-none","py-0","pl-4","pr-0","m-0","hidden","overflow-y-hidden","transition-all","duration-[400ms]","ease-in-out"],[1,"pi","pi-table","mr-2"],[1,"pi","pi-search","mr-2"],[1,"pi","pi-users","mr-2"],[1,"pi","pi-comments","mr-2"],[1,"inline-flex","items-center","justify-center","ml-auto","bg-primary","text-primary-contrast","rounded-full",2,"min-width","1.5rem","height","1.5rem"],[1,"pi","pi-calendar","mr-2"],[1,"pi","pi-cog","mr-2"],[1,"pi","pi-folder","mr-2"],[1,"pi","pi-chart-bar","mr-2"],[1,"mt-auto"],[1,"mb-4","mx-4","border-t","border-0","border-surface"],["pRipple","",1,"m-4","flex","items-center","cursor-pointer","p-4","gap-2","rounded-border","text-surface-700","dark:text-surface-100","hover:bg-surface-100","dark:hover:bg-surface-700","duration-150","transition-colors","p-ripple"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"]],template:function(a,r){if(a&1){let s=M();e(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"Headless"),i(),t(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),e(5,"div",2)(6,"p-drawer",3,0),b("visibleChange",function(S){return C(s),f(r.visible,S)||(r.visible=S),L(S)}),E(8,ge,120,0,"ng-template",null,1,T),i(),e(10,"p-button",4),v("click",function(){return C(s),L(r.visible=!0)}),i()(),n(11,"app-code",5)}a&2&&(p(6),u("visible",r.visible),p(5),c("code",r.code))},dependencies:[g,x,h,w,y,k,_,H,F,Y,Q,X,J],encapsulation:2})}return o})();var le=(()=>{class o{code={typescript:"import { DrawerModule } from 'primeng/drawer';"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["drawer-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,r){a&1&&n(0,"app-code",0),a&2&&c("code",r.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return o})();var se=()=>({height:"auto"}),pe=(()=>{class o{visible1=!1;visible2=!1;visible3=!1;visible4=!1;code={basic:`<p-drawer header="Left Drawer" [(visible)]="visible1" position="left">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>

<p-drawer header="Right Drawer" [(visible)]="visible2" position="right">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>

<p-drawer header="Top Drawer" [(visible)]="visible3" position="top" style="height: auto">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>

<p-drawer header="Bottom Drawer" [(visible)]="visible4" position="bottom" style="height: auto">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
    </p>
</p-drawer>
<div class="flex gap-2 justify-center">
    <p-button type="button" (click)="visible1 = true" icon="pi pi-arrow-right" />
    <p-button type="button" (click)="visible2 = true" icon="pi pi-arrow-left" />
    <p-button type="button" (click)="visible3 = true" icon="pi pi-arrow-down" />
    <p-button type="button" (click)="visible4 = true" icon="pi pi-arrow-up" />
</div>`,html:`<div class="card">
    <p-drawer header="Left Drawer" [(visible)]="visible1" position="left">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>

    <p-drawer header="Right Drawer" [(visible)]="visible2" position="right">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>

    <p-drawer header="Top Drawer" [(visible)]="visible3" position="top" style="height: auto">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>

    <p-drawer header="Bottom Drawer" [(visible)]="visible4" position="bottom" style="height: auto">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>
    </p-drawer>
    <div class="flex gap-2 justify-center">
        <p-button type="button" (click)="visible1 = true" icon="pi pi-arrow-right" />
        <p-button type="button" (click)="visible2 = true" icon="pi pi-arrow-left" />
        <p-button type="button" (click)="visible3 = true" icon="pi pi-arrow-down" />
        <p-button type="button" (click)="visible4 = true" icon="pi pi-arrow-up" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-position-demo',
    templateUrl: './drawer-position-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerPositionDemo {
    visible1: boolean = false;

    visible2: boolean = false;

    visible3: boolean = false;

    visible4: boolean = false;
}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["position-doc"]],decls:37,vars:11,consts:[[1,"card"],["header","Left Drawer","position","left",3,"visibleChange","visible"],["header","Right Drawer","position","right",3,"visibleChange","visible"],["header","Top Drawer","position","top",3,"visibleChange","visible"],["header","Bottom Drawer","position","bottom",3,"visibleChange","visible"],[1,"flex","gap-2","justify-center"],["type","button","icon","pi pi-arrow-right",3,"click"],["type","button","icon","pi pi-arrow-left",3,"click"],["type","button","icon","pi pi-arrow-down",3,"click"],["type","button","icon","pi pi-arrow-up",3,"click"],["selector","drawer-position-demo",3,"code"]],template:function(a,r){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Drawer location is configured with the "),e(3,"i"),t(4,"position"),i(),t(5," property that can take "),e(6,"i"),t(7,"left"),i(),t(8,", "),e(9,"i"),t(10,"right"),i(),t(11,", "),e(12,"i"),t(13,"top"),i(),t(14," and "),e(15,"i"),t(16,"bottom"),i(),t(17," as a value."),i()(),e(18,"div",0)(19,"p-drawer",1),b("visibleChange",function(l){return f(r.visible1,l)||(r.visible1=l),l}),e(20,"p"),t(21," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(22,"p-drawer",2),b("visibleChange",function(l){return f(r.visible2,l)||(r.visible2=l),l}),e(23,"p"),t(24," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(25,"p-drawer",3),b("visibleChange",function(l){return f(r.visible3,l)||(r.visible3=l),l}),e(26,"p"),t(27," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(28,"p-drawer",4),b("visibleChange",function(l){return f(r.visible4,l)||(r.visible4=l),l}),e(29,"p"),t(30," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(31,"div",5)(32,"p-button",6),v("click",function(){return r.visible1=!0}),i(),e(33,"p-button",7),v("click",function(){return r.visible2=!0}),i(),e(34,"p-button",8),v("click",function(){return r.visible3=!0}),i(),e(35,"p-button",9),v("click",function(){return r.visible4=!0}),i()()(),n(36,"app-code",10)),a&2&&(p(19),u("visible",r.visible1),p(3),u("visible",r.visible2),p(3),j(V(9,se)),u("visible",r.visible3),p(3),j(V(10,se)),u("visible",r.visible4),p(8),c("code",r.code))},dependencies:[g,x,h,w,y,k,_],encapsulation:2})}return o})();function we(o,W){o&1&&(n(0,"span",4),e(1,"div",5)(2,"div",6),t(3,"Drawer"),i(),e(4,"button",7),R(),n(5,"svg",8),i()(),B(),e(6,"div",9)(7,"p"),t(8," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(9,"div",10),t(10,"Footer"),i(),n(11,"span",11))}var de=(()=>{class o{visible=!0;docs=[{data:U("Drawer"),key:"Drawer"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["drawer-pt-viewer"]],decls:5,vars:4,consts:[["docref",""],["headless",""],[1,"!justify-start",3,"docs"],["styleClass","!relative !h-[450px] !w-80","header","Drawer",3,"visibleChange","visible","appendTo","modal"],["tabindex","0","role","presentation","aria-hidden","true","data-p-hidden-accessible","true","data-p-hidden-focusable","true","data-pc-section","firstfocusableelement",1,"p-hidden-accessible","p-hidden-focusable"],["data-pc-section","header",1,"p-drawer-header"],["data-pc-section","title",1,"p-drawer-title"],["type","button","aria-label","Close","data-pc-name","pcclosebutton","data-p-disabled","false","data-p-severity","secondary","data-pc-group-section","iconcontainer","data-pc-extend","button","data-pc-section","root",1,"p-button","p-component","p-button-icon-only","p-button-secondary","p-button-rounded","p-button-text","p-drawer-close-button"],["data-p-icon","times",1,"p-button-icon"],["data-pc-section","content",1,"p-drawer-content"],["data-pc-section","footer",1,"p-drawer-footer"],["tabindex","0","role","presentation","aria-hidden","true","data-p-hidden-accessible","true","data-p-hidden-focusable","true","data-pc-section","lastfocusableelement",1,"p-hidden-accessible","p-hidden-focusable"]],template:function(a,r){if(a&1){let s=M();e(0,"app-docptviewer",2,0)(2,"p-drawer",3),b("visibleChange",function(S){return C(s),f(r.visible,S)||(r.visible=S),L(S)}),E(3,we,12,0,"ng-template",null,1,T),i()()}if(a&2){let s=K(1);c("docs",r.docs),p(2),u("visible",r.visible),c("appendTo",s==null?null:s.nativeElement)("modal",!1)}},dependencies:[P,te,h,w,N],encapsulation:2})}return o})();var ce=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:de},{id:"pt.doc.drawer",label:"Drawer PT Options",component:$,data:U("Drawer")}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["drawer-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),t(3,"Drawer Pass Through"),i()(),n(4,"app-docsection",2),i()),a&2&&(p(4),c("docs",r.docs))},dependencies:[P,ee],encapsulation:2})}return o})();var me=(()=>{class o{visible=!1;code={basic:`<p-drawer header="Drawer" [(visible)]="visible" styleClass="!w-full md:!w-80 lg:!w-[30rem]">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
</p-drawer>
<p-button (click)="visible = true" icon="pi pi-arrow-right" />`,html:`<div class="card flex justify-center">
  <p-drawer header="Drawer" [(visible)]="visible" styleClass="!w-full md:!w-80 lg:!w-[30rem]">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
    </p-drawer>
    <p-button (click)="visible = true" icon="pi pi-arrow-right" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'drawer-size-demo',
    templateUrl: './drawer-size-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule]
})
export class DrawerSizeDemo {
    visible: boolean = false;
}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["size-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["header","Drawer","styleClass","!w-full md:!w-80 lg:!w-[30rem]",3,"visibleChange","visible"],["icon","pi pi-arrow-right",3,"click"],["selector","drawer-size-demo",3,"code"]],template:function(a,r){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Drawer dimension can be defined with "),e(3,"i"),t(4,"style"),i(),t(5," or "),e(6,"i"),t(7,"class"),i(),t(8," properties, this responsive example utilizes Tailwind."),i()(),e(9,"div",0)(10,"p-drawer",1),b("visibleChange",function(l){return f(r.visible,l)||(r.visible=l),l}),e(11,"p"),t(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i()(),e(13,"p-button",2),v("click",function(){return r.visible=!0}),i()(),n(14,"app-code",3)),a&2&&(p(10),u("visible",r.visible),p(4),c("code",r.code))},dependencies:[g,x,h,w,y,k,_],encapsulation:2})}return o})();function he(o,W){o&1&&(e(0,"div",6),n(1,"p-avatar",7),e(2,"span",8),t(3,"Amy Elsner"),i()())}function xe(o,W){o&1&&(e(0,"div",6),n(1,"button",9)(2,"button",10),i())}var ue=(()=>{class o{visible=!1;code={basic:`<p-drawer [(visible)]="visible" [closable]="false">
    <ng-template #header>
        <div class="flex items-center gap-2">
            <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold">Amy Elsner</span>
        </div>
    </ng-template>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
    <ng-template #footer>
        <div class="flex items-center gap-2">
            <button pButton label="Account" icon="pi pi-user" class="w-full" outlined></button>
            <button pButton label="Logout" icon="pi pi-sign-out" class="w-full" severity="danger" text></button>
        </div>
    </ng-template>
</p-drawer>
<button pButton (click)="visible = true" icon="pi pi-plus"></button>`,html:`<div class="card flex justify-center">
    <p-drawer [(visible)]="visible" [closable]="false">
        <ng-template #header>
            <div class="flex items-center gap-2">
                <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold">Amy Elsner</span>
            </div>
        </ng-template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
        <ng-template #footer>
            <div class="flex items-center gap-2">
                <button pButton label="Account" icon="pi pi-user" class="w-full" outlined></button>
                <button pButton label="Logout" icon="pi pi-sign-out" class="w-full" severity="danger" text></button>
            </div>
        </ng-template>
    </p-drawer>
    <button pButton (click)="visible = true" icon="pi pi-plus"></button>
</div>`,typescript:`import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'drawer-template-demo',
    templateUrl: './drawer-template-demo.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule, AvatarModule]
})
export class DrawerTemplateDemo {
    visible: boolean = false;
}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["template-doc"]],decls:22,vars:3,consts:[["header",""],["footer",""],[1,"card","flex","justify-center"],[3,"visibleChange","visible","closable"],["pButton","","icon","pi pi-plus",3,"click"],["selector","drawer-template-demo",3,"code"],[1,"flex","items-center","gap-2"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold"],["pButton","","label","Account","icon","pi pi-user","outlined","",1,"w-full"],["pButton","","label","Logout","icon","pi pi-sign-out","severity","danger","text","",1,"w-full"]],template:function(a,r){if(a&1){let s=M();e(0,"app-docsectiontext")(1,"p"),t(2,"Drawer is customizable by "),e(3,"i"),t(4,"header"),i(),t(5,", "),e(6,"i"),t(7,"content"),i(),t(8,", "),e(9,"i"),t(10,"footer"),i(),t(11," templates."),i()(),e(12,"div",2)(13,"p-drawer",3),b("visibleChange",function(S){return C(s),f(r.visible,S)||(r.visible=S),L(S)}),E(14,he,4,0,"ng-template",null,0,T),e(16,"p"),t(17," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),i(),E(18,xe,3,0,"ng-template",null,1,T),i(),e(20,"button",4),v("click",function(){return C(s),L(r.visible=!0)}),i()(),n(21,"app-code",5)}a&2&&(p(13),u("visible",r.visible),c("closable",!1),p(8),c("code",r.code))},dependencies:[h,w,y,G,H,F,g,x],encapsulation:2})}return o})();var ye=()=>["Drawer"],fe=(()=>{class o{ptComponent=ce;docs=[{id:"import",label:"Import",component:le},{id:"basic",label:"Basic",component:oe},{id:"position",label:"Position",component:pe},{id:"size",label:"Size",component:me},{id:"fullscreen",label:"Full Screen",component:ae},{id:"template",label:"Template",component:ue},{id:"headless",label:"Headless",component:ne},{id:"accessibility",label:"Accessibility",component:re}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Drawer Component","header","Drawer","description","Drawer is a container component displayed as an overlay.","componentName","drawer",3,"docs","apiDocs","ptDocs"]],template:function(a,r){a&1&&n(0,"app-doc",0),a&2&&c("docs",r.docs)("apiDocs",V(3,ye))("ptDocs",r.ptComponent)},dependencies:[ie],encapsulation:2})}return o})();var Pi=[{path:"",component:fe}];export{Pi as default};
