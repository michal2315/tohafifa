import{a as c,b as d}from"./chunk-47AI6XAB.js";import{a as K,b as Q}from"./chunk-XSLWLDLT.js";import{a as w,b as X}from"./chunk-JNUBCW5H.js";import{a as $,b as q}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as W}from"./chunk-FKOOMXTU.js";import{a as f,b as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as J}from"./chunk-XCUGNKAG.js";import{a as u,b as z}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{c as F}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{b as j,ba as N,c as B,ga as U,ha as G}from"./chunk-MCW4FHXZ.js";import{za as v}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as H,w as y}from"./chunk-D2XKNHFS.js";import{$a as x,Eb as m,Fb as t,Gb as i,Gc as E,Hb as a,Ob as A,Qa as l,Sb as P,Ub as I,aa as V,ba as k,ca as T,cc as O,da as _,gb as s,gc as R,hc as e,ic as D,mb as C,rc as M,sc as Z}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Y=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["menu-accessibility-doc"]],decls:112,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,p){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Menu component uses the "),t(6,"i"),e(7,"menu"),i(),e(8," role and the value to describe the menu can either be provided with "),t(9,"i"),e(10,"aria-labelledby"),i(),e(11," or "),t(12,"i"),e(13,"aria-label"),i(),e(14," props. Each list item has a "),t(15,"i"),e(16,"presentation"),i(),e(17," role whereas anchor elements have a "),t(18,"i"),e(19,"menuitem"),i(),e(20," role with "),t(21,"i"),e(22,"aria-label"),i(),e(23," referring to the label of the item and "),t(24,"i"),e(25,"aria-disabled"),i(),e(26," defined if the item is disabled. A submenu within a Menu uses the "),t(27,"i"),e(28,"group"),i(),e(29," role with an "),t(30,"i"),e(31,"aria-labelledby"),i(),e(32," defined as the id of the submenu root menuitem label. "),i(),t(33,"p"),e(34,"In popup mode, the component implicitly manages the "),t(35,"i"),e(36,"aria-expanded"),i(),e(37,", "),t(38,"i"),e(39,"aria-haspopup"),i(),e(40," and "),t(41,"i"),e(42,"aria-controls"),i(),e(43," attributes of the target element to define the relation between the target and the popup."),i(),t(44,"h3"),e(45,"Keyboard Support"),i(),t(46,"div",0)(47,"table",1)(48,"thead")(49,"tr")(50,"th"),e(51,"Key"),i(),t(52,"th"),e(53,"Function"),i()()(),t(54,"tbody")(55,"tr")(56,"td")(57,"i"),e(58,"tab"),i()(),t(59,"td"),e(60,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),i()(),t(61,"tr")(62,"td")(63,"i"),e(64,"shift"),i(),e(65," + "),t(66,"i"),e(67,"tab"),i()(),t(68,"td"),e(69,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),i()(),t(70,"tr")(71,"td")(72,"i"),e(73,"enter"),i()(),t(74,"td"),e(75,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),i()(),t(76,"tr")(77,"td")(78,"i"),e(79,"space"),i()(),t(80,"td"),e(81,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."),i()(),t(82,"tr")(83,"td")(84,"i"),e(85,"escape"),i()(),t(86,"td"),e(87,"If menu is in overlay mode, popup gets closes and focus moves to target."),i()(),t(88,"tr")(89,"td")(90,"i"),e(91,"down arrow"),i()(),t(92,"td"),e(93,"Moves focus to the next menuitem."),i()(),t(94,"tr")(95,"td")(96,"i"),e(97,"up arrow"),i()(),t(98,"td"),e(99,"Moves focus to the previous menuitem."),i()(),t(100,"tr")(101,"td")(102,"i"),e(103,"home"),i()(),t(104,"td"),e(105,"Moves focus to the first menuitem."),i()(),t(106,"tr")(107,"td")(108,"i"),e(109,"end"),i()(),t(110,"td"),e(111,"Moves focus to the last menuitem."),i()()()()()()())},dependencies:[u],encapsulation:2})}return n})();var ee=(()=>{class n{items;ngOnInit(){this.items=[{label:"New",icon:"pi pi-plus"},{label:"Search",icon:"pi pi-search"}]}code={basic:'<p-menu [model]="items" />',html:`<div class="card flex justify-center">
    <p-menu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
    selector: 'menu-basic-demo',
    templateUrl: './menu-basic-demo.html',
    standalone: true,
    imports: [Menu]
})
export class MenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'New', icon: 'pi pi-plus' },
            { label: 'Search', icon: 'pi pi-search' }
        ];
    }
}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","menu-basic-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Menu requires a collection of menuitems as its "),t(3,"i"),e(4,"model"),i(),e(5,"."),i()(),t(6,"div",0),a(7,"p-menu",1),i(),a(8,"app-code",2)),o&2&&(l(7),m("model",p.items),l(),m("code",p.code))},dependencies:[d,c,g,f,u],encapsulation:2})}return n})();var te=(()=>{class n{messageService;items;constructor(r){this.messageService=r}ngOnInit(){this.items=[{label:"New",icon:"pi pi-plus",command:()=>{this.update()}},{label:"Search",icon:"pi pi-search",command:()=>{this.delete()}}]}update(){this.messageService.add({severity:"success",summary:"Success",detail:"File created",life:3e3})}delete(){this.messageService.add({severity:"warn",summary:"Search Completed",detail:"No results found",life:3e3})}code={basic:`<p-toast />
<p-menu [model]="items" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-menu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'menu-command-demo',
    templateUrl: './menu-command-demo.html',
    standalone: true,
    imports: [Menu, ToastModule],
    providers: [MessageService]
})
export class MenuCommandDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'New',
                icon: 'pi pi-plus',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                command: () => {
                    this.delete();
                }
            }
        ];
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
    }
}`};static \u0275fac=function(o){return new(o||n)(x(v))};static \u0275cmp=s({type:n,selectors:[["command-doc"]],features:[M([v])],decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","menu-command-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The function to invoke when an item is clicked is defined using the "),t(3,"i"),e(4,"command"),i(),e(5," property."),i()(),t(6,"div",0),a(7,"p-toast")(8,"p-menu",1),i(),a(9,"app-code",2)),o&2&&(l(8),m("model",p.items),l(),m("code",p.code))},dependencies:[d,c,q,$,g,f,u],encapsulation:2})}return n})();var ie=(()=>{class n{messageService;items;constructor(r){this.messageService=r}ngOnInit(){this.items=[{label:"Documents",items:[{label:"New",icon:"pi pi-plus"},{label:"Search",icon:"pi pi-search"}]},{label:"Profile",items:[{label:"Settings",icon:"pi pi-cog"},{label:"Logout",icon:"pi pi-sign-out"}]}]}code={basic:'<p-menu [model]="items" />',html:`<div class="card flex justify-center">
    <p-menu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'menu-group-demo',
    templateUrl: './menu-group-demo.html',
    standalone: true,
    imports: [Menu, ToastModule]
})
export class MenuGroupDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out'
                    }
                ]
            }
        ];
    }

}`};static \u0275fac=function(o){return new(o||n)(x(v))};static \u0275cmp=s({type:n,selectors:[["menu-group-demo"]],features:[M([v])],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","menu-group-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Menu supports one level of nesting by defining children with "),t(3,"i"),e(4,"items"),i(),e(5," property."),i()(),t(6,"div",0),a(7,"p-menu",1),i(),a(8,"app-code",2)),o&2&&(l(7),m("model",p.items),l(),m("code",p.code))},dependencies:[d,c,g,f,u],encapsulation:2})}return n})();var ne=(()=>{class n{code={typescript:"import { MenuModule } from 'primeng/menu';"};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["menu-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,p){o&1&&a(0,"app-code",0),o&2&&m("code",p.code)("hideToggleCode",!0)},dependencies:[g,f],encapsulation:2})}return n})();var oe=(()=>{class n{items;ngOnInit(){this.items=[{label:"Options",items:[{label:"Refresh",icon:"pi pi-refresh"},{label:"Export",icon:"pi pi-upload"}]}]}code={basic:`
<p-menu #menu [model]="items" [popup]="true" />
<p-button (click)="menu.toggle($event)" icon="pi pi-ellipsis-v"/>`,html:`<div class="card flex justify-center">
    <p-menu #menu [model]="items" [popup]="true" />
    <p-button (click)="menu.toggle($event)" icon="pi pi-ellipsis-v"/>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'menu-popup-demo',
    templateUrl: './menu-popup-demo.html',
    standalone: true,
    imports: [Menu, ButtonModule]
})
export class MenuPopupDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Refresh',
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-upload'
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["popup-doc"]],features:[M([v])],decls:17,vars:3,consts:[["menu",""],[1,"card","flex","justify-center"],[3,"model","popup"],["icon","pi pi-ellipsis-v",3,"click"],["selector","menu-popup-demo",3,"code"]],template:function(o,p){if(o&1){let se=A();t(0,"app-docsectiontext")(1,"p"),e(2,"Popup mode is enabled by setting "),t(3,"i"),e(4,"popup"),i(),e(5," property to "),t(6,"i"),e(7,"true"),i(),e(8," and calling "),t(9,"i"),e(10,"toggle"),i(),e(11," method with an event of the target."),i()(),t(12,"div",1),a(13,"p-menu",2,0),t(15,"p-button",3),P("click",function(ce){V(se);let de=O(14);return k(de.toggle(ce))}),i()(),a(16,"app-code",4)}o&2&&(l(13),m("model",p.items)("popup",!0),l(3),m("code",p.code))},dependencies:[d,c,G,U,g,f,u],encapsulation:2})}return n})();var re=(()=>{class n{items=[{label:"Documents",items:[{label:"New",icon:"pi pi-plus"},{label:"Search",icon:"pi pi-search"}]},{separator:!0},{label:"Profile",items:[{label:"Settings",icon:"pi pi-cog"},{label:"Logout",icon:"pi pi-sign-out"}]}];docs=[{data:w("Menu"),key:"Menu"}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["menu-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"model"]],template:function(o,p){o&1&&(t(0,"app-docptviewer",0),a(1,"p-menu",1),i()),o&2&&(m("docs",p.docs),l(),m("model",p.items))},dependencies:[y,X,d,c],encapsulation:2})}return n})();var ae=(()=>{class n{docs=[{id:"pt.viewer",label:"Viewer",component:re},{id:"pt.doc.menu",label:"Menu PT Options",component:z,data:w("Menu")}];static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["menu-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,p){o&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Menu Pass Through"),i()(),a(4,"app-docsection",2),i()),o&2&&(l(4),m("docs",p.docs))},dependencies:[y,J],encapsulation:2})}return n})();var me=(()=>{class n{router;items;constructor(r){this.router=r}ngOnInit(){this.items=[{label:"Navigate",items:[{label:"Router Link",icon:"pi pi-palette",routerLink:"/theming"},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",url:"https://angular.io//"}]}]}code={basic:'<p-menu [model]="items" />',html:`<div class="card flex justify-center">
    <p-menu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Menu } from 'primeng/menu';

@Component({
    selector: 'menu-router-demo',
    templateUrl: './menu-router-demo.html',
    standalone: true,
    imports: [Menu]
})
export class MenuRouterDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

       ngOnInit() {
        this.items = [
            {
                label: 'Navigate',
                items: [
                    {
                        label: 'Router Link',
                        icon: 'pi pi-palette',
                        routerLink: '/theming'
                    },
                    {
                        label: 'Programmatic',
                        icon: 'pi pi-link',
                        command: () => {
                            this.router.navigate(['/installation']);
                        }
                    },
                    {
                        label: 'External',
                        icon: 'pi pi-home',
                        url: 'https://angular.io//'
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||n)(x(F))};static \u0275cmp=s({type:n,selectors:[["router-doc"]],decls:6,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","menu-router-demo",3,"code"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Menu items support navigation via routerLink, programmatic routing using commands, or external URLs."),i()(),t(3,"div",0),a(4,"p-menu",1),i(),a(5,"app-code",2)),o&2&&(l(4),m("model",p.items),l(),m("code",p.code))},dependencies:[d,c,g,f,u],encapsulation:2})}return n})();function fe(n,b){n&1&&(t(0,"span",7),T(),t(1,"svg",8),a(2,"path",9),t(3,"mask",10),a(4,"path",11),i(),t(5,"g",12),a(6,"path",13),i(),a(7,"path",14)(8,"path",15)(9,"path",16)(10,"path",17)(11,"path",18)(12,"path",19)(13,"path",20)(14,"path",21)(15,"path",22)(16,"path",23),i(),_(),t(17,"span",24),e(18,"PRIME"),t(19,"span",25),e(20,"APP"),i()()())}function ge(n,b){if(n&1&&(t(0,"span",26),e(1),i()),n&2){let r=b.$implicit;l(),D(r.label)}}function ve(n,b){if(n&1&&a(0,"p-badge",31),n&2){let r=I().$implicit;m("value",r.badge)}}function he(n,b){if(n&1&&(t(0,"span",32),e(1),i()),n&2){let r=I().$implicit;l(),D(r.shortcut)}}function be(n,b){if(n&1&&(t(0,"a",27),a(1,"span"),t(2,"span",28),e(3),i(),C(4,ve,1,1,"p-badge",29)(5,he,2,1,"span",30),i()),n&2){let r=b.$implicit;l(),R(r.icon),l(2),D(r.label),l(),m("ngIf",r.badge),l(),m("ngIf",r.shortcut)}}function xe(n,b){n&1&&(t(0,"button",33),a(1,"p-avatar",34),t(2,"span",35)(3,"span",36),e(4,"Amy Elsner"),i(),t(5,"span",37),e(6,"Admin"),i()()())}var pe=(()=>{class n{items;ngOnInit(){this.items=[{separator:!0},{label:"Documents",items:[{label:"New",icon:"pi pi-plus",shortcut:"\u2318+N"},{label:"Search",icon:"pi pi-search",shortcut:"\u2318+S"}]},{label:"Profile",items:[{label:"Settings",icon:"pi pi-cog",shortcut:"\u2318+O"},{label:"Messages",icon:"pi pi-inbox",badge:"2"},{label:"Logout",icon:"pi pi-sign-out",shortcut:"\u2318+Q"}]},{separator:!0}]}code={basic:`<p-menu [model]="items" class="flex justify-center" styleClass="w-full md:w-60">
    <ng-template #start>
        <span class="inline-flex items-center gap-1 px-2 py-2">
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="..." fill="var(--primary-color)" />
            </svg>
            <span class="text-xl font-semibold">
                PRIME<span class="text-primary">APP</span>
            </span>
        </span>
    </ng-template>
    <ng-template #submenuheader let-item>
        <span class="text-primary font-bold">{{ item.label }}</span>
    </ng-template>
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-menu-item-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
    <ng-template #end>
        <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
            <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <span class="inline-flex flex-col">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Admin</span>
            </span>
        </button>
    </ng-template>
</p-menu>`,html:`<div class="card">
    <p-menu [model]="items" class="flex justify-center" styleClass="w-full md:w-60">
        <ng-template #start>
            <span class="inline-flex items-center gap-1 px-2 py-2">
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
                <span class="text-xl font-semibold">PRIME<span class="text-primary">APP</span></span>
            </span>
        </ng-template>
        <ng-template #submenuheader let-item>
            <span class="text-primary font-bold">{{ item.label }}</span>
        </ng-template>
        <ng-template #item let-item>
            <a pRipple class="flex items-center p-menu-item-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
                <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            </a>
        </ng-template>
        <ng-template #end>
            <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
                <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
                <span class="inline-flex flex-col">
                    <span class="font-bold">Amy Elsner</span>
                    <span class="text-sm">Admin</span>
                </span>
            </button>
        </ng-template>
    </p-menu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'menu-template-demo',
    templateUrl: './menu-template-demo.html',
    standalone: true,
    imports: [MenuModule, BadgeModule, RippleModule, AvatarModule]
})
export class MenuTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                separator: true
            },
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        shortcut: '\u2318+N'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        shortcut: '\u2318+S'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '\u2318+O'
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox',
                        badge: '2'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: '\u2318+Q'
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["template-doc"]],decls:26,vars:2,consts:[["start",""],["submenuheader",""],["item",""],["end",""],[1,"card"],["styleClass","w-full md:w-60",1,"flex","justify-center",3,"model"],["selector","menu-template-demo",3,"code"],[1,"inline-flex","items-center","gap-1","px-2","py-2"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[1,"text-xl","font-semibold"],[1,"text-primary"],[1,"text-primary","font-bold"],["pRipple","",1,"flex","items-center","p-menu-item-link"],[1,"ml-2"],["class","ml-auto",3,"value",4,"ngIf"],["class","ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1",4,"ngIf"],[1,"ml-auto",3,"value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],["pRipple","",1,"relative","overflow-hidden","w-full","border-0","bg-transparent","flex","items-start","p-2","pl-4","hover:bg-surface-100","dark:hover:bg-surface-800","rounded-none","cursor-pointer","transition-colors","duration-200"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle",1,"mr-2"],[1,"inline-flex","flex-col","items-start"],[1,"font-bold"],[1,"text-sm"]],template:function(o,p){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Menu offers item customization with the "),t(3,"i"),e(4,"item"),i(),e(5," template that receives the menuitem instance from the model as a parameter. The submenu header has its own "),t(6,"i"),e(7,"submenuheader"),i(),e(8," template, additional slots named "),t(9,"i"),e(10,"start"),i(),e(11," and "),t(12,"i"),e(13,"end"),i(),e(14," are provided to embed content before or after the menu. "),i()(),t(15,"div",4)(16,"p-menu",5),C(17,fe,21,0,"ng-template",null,0,E)(19,ge,2,1,"ng-template",null,1,E)(21,be,6,5,"ng-template",null,2,E)(23,xe,7,0,"ng-template",null,3,E),i()(),a(25,"app-code",6)),o&2&&(l(16),m("model",p.items),l(9),m("code",p.code))},dependencies:[y,H,d,c,B,j,Q,K,N,g,f,u],encapsulation:2})}return n})();var Me=()=>["Menu","MenuItem"],le=(()=>{class n{docs=[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:ee},{id:"group",label:"Group",component:ie},{id:"popup",label:"Popup",component:oe},{id:"template",label:"Template",component:pe},{id:"command",label:"Command",component:te},{id:"router",label:"Router",component:me},{id:"accessibility",label:"Accessibility",component:Y}];ptComponent=ae;static \u0275fac=function(o){return new(o||n)};static \u0275cmp=s({type:n,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Menu Component","header","Menu","description","Menu is a navigation / command component that supports dynamic and static positioning.","themeDocs","menu",3,"docs","apiDocs","ptDocs"]],template:function(o,p){o&1&&a(0,"app-doc",0),o&2&&m("docs",p.docs)("apiDocs",Z(3,Me))("ptDocs",p.ptComponent)},dependencies:[W],encapsulation:2})}return n})();var At=[{path:"",component:le}];export{At as default};
