import{a as f,b}from"./chunk-4TPUIEYI.js";import{a as N,b as K}from"./chunk-XSLWLDLT.js";import{a as S,b as G}from"./chunk-JNUBCW5H.js";import{a as F,b as B}from"./chunk-SGEFCG26.js";import{a as U,b as j}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as z}from"./chunk-FKOOMXTU.js";import{a as c,b as u}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as $}from"./chunk-XCUGNKAG.js";import{a as d,b as q}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{c as H}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{b as P,ba as O,c as R}from"./chunk-MCW4FHXZ.js";import{za as y}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as A,n as Z,w as v}from"./chunk-D2XKNHFS.js";import{$a as x,Eb as r,Fb as i,Gb as t,Gc as L,Hb as m,Qa as p,Ub as M,ca as D,gb as s,hc as e,ic as I,mb as C,rc as T,sc as V,tc as k,uc as _}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var J=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["menubar-accessibility-doc"]],decls:157,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,l){n&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),i(4,"p"),e(5," Menubar component uses the "),i(6,"i"),e(7,"menubar"),t(),e(8," role and the value to describe the menu can either be provided with "),i(9,"i"),e(10,"aria-labelledby"),t(),e(11," or "),i(12,"i"),e(13,"aria-label"),t(),e(14," props. Each list item has a "),i(15,"i"),e(16,"presentation"),t(),e(17," role whereas anchor elements have a "),i(18,"i"),e(19,"menuitem"),t(),e(20," role with "),i(21,"i"),e(22,"aria-label"),t(),e(23," referring to the label of the item and "),i(24,"i"),e(25,"aria-disabled"),t(),e(26," defined if the item is disabled. A submenu within a MenuBar uses the "),i(27,"i"),e(28,"menu"),t(),e(29," role with an "),i(30,"i"),e(31,"aria-labelledby"),t(),e(32," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),i(33,"i"),e(34,"aria-haspopup"),t(),e(35,", "),i(36,"i"),e(37,"aria-expanded"),t(),e(38," and "),i(39,"i"),e(40,"aria-controls"),t(),e(41," to define the relation between the item and the submenu. "),t(),i(42,"p"),e(43," In mobile viewports, a menu icon appears with a "),i(44,"i"),e(45,"button"),t(),e(46," role along with "),i(47,"i"),e(48,"aria-haspopup"),t(),e(49,", "),i(50,"i"),e(51,"aria-expanded"),t(),e(52," and "),i(53,"i"),e(54,"aria-controls"),t(),e(55," to manage the relation between the overlay menubar and the button. The value to describe the button can be defined "),i(56,"i"),e(57,"aria-label"),t(),e(58," or "),i(59,"i"),e(60,"aria-labelledby"),t(),e(61," specified using "),i(62,"i"),e(63,"buttonProps"),t(),e(64,", by default "),i(65,"i"),e(66,"navigation"),t(),e(67," key of the "),i(68,"i"),e(69,"aria"),t(),e(70," property from the "),i(71,"a",0),e(72,"locale"),t(),e(73," API as the "),i(74,"i"),e(75,"aria-label"),t(),e(76,". "),t(),i(77,"h3"),e(78,"Keyboard Support"),t(),i(79,"div",1)(80,"table",2)(81,"thead")(82,"tr")(83,"th"),e(84,"Key"),t(),i(85,"th"),e(86,"Function"),t()()(),i(87,"tbody")(88,"tr")(89,"td")(90,"i"),e(91,"tab"),t()(),i(92,"td"),e(93,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),t()(),i(94,"tr")(95,"td")(96,"i"),e(97,"shift"),t(),e(98," + "),i(99,"i"),e(100,"tab"),t()(),i(101,"td"),e(102,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),t()(),i(103,"tr")(104,"td")(105,"i"),e(106,"enter"),t()(),i(107,"td"),e(108,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),t()(),i(109,"tr")(110,"td")(111,"i"),e(112,"space"),t()(),i(113,"td"),e(114,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),t()(),i(115,"tr")(116,"td")(117,"i"),e(118,"escape"),t()(),i(119,"td"),e(120,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),t()(),i(121,"tr")(122,"td")(123,"i"),e(124,"down arrow"),t()(),i(125,"td"),e(126,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu."),t()(),i(127,"tr")(128,"td")(129,"i"),e(130,"up arrow"),t()(),i(131,"td"),e(132,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu."),t()(),i(133,"tr")(134,"td")(135,"i"),e(136,"right arrow"),t()(),i(137,"td"),e(138,"If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item."),t()(),i(139,"tr")(140,"td")(141,"i"),e(142,"left arrow"),t()(),i(143,"td"),e(144,"If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu."),t()(),i(145,"tr")(146,"td")(147,"i"),e(148,"home"),t()(),i(149,"td"),e(150,"Moves focus to the first menuitem within the submenu."),t()(),i(151,"tr")(152,"td")(153,"i"),e(154,"end"),t()(),i(155,"td"),e(156,"Moves focus to the last menuitem within the submenu."),t()()()()()()())},dependencies:[d],encapsulation:2})}return o})();var Q=(()=>{class o{items;ngOnInit(){this.items=[{label:"Home",icon:"pi pi-home"},{label:"Features",icon:"pi pi-star"},{label:"Projects",icon:"pi pi-search",items:[{label:"Components",icon:"pi pi-bolt"},{label:"Blocks",icon:"pi pi-server"},{label:"UI Kit",icon:"pi pi-pencil"},{label:"Templates",icon:"pi pi-palette",items:[{label:"Apollo",icon:"pi pi-palette"},{label:"Ultima",icon:"pi pi-palette"}]}]},{label:"Contact",icon:"pi pi-envelope"}]}code={basic:'<p-menubar [model]="items" />',html:`<div class="card">
    <p-menubar [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
    selector: 'menubar-basic-demo',
    templateUrl: './menubar-basic-demo.html',
    standalone: true,
    imports: [Menubar]
})
export class MenubarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["basic-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"model"],["selector","menubar-basic-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Menubar requires nested menuitems as its model."),t()(),i(3,"div",0),m(4,"p-menubar",1),t(),m(5,"app-code",2)),n&2&&(p(4),r("model",l.items),p(),r("code",l.code))},dependencies:[b,f,u,c,d],encapsulation:2})}return o})();var W=(()=>{class o{messageService;items;constructor(a){this.messageService=a}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{this.messageService.add({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Search",icon:"pi pi-search",command:()=>{this.messageService.add({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{separator:!0},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{this.messageService.add({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{this.messageService.add({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]}]}code={basic:`<p-toast />
<p-menubar [model]="items" />`,html:`<div class="card">
    <p-toast />
    <p-menubar [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'menubar-command-demo',
    templateUrl: './menubar-command-demo.html',
    standalone: true,
    imports: [Menubar, ToastModule],
    providers: [MessageService]
})
export class MenubarCommandDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        command: () => {
                            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                        }
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print',
                        command: () => {
                            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                        }
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                command: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                }
            },
            {
                separator: true
            },
            {
                label: 'Sync',
                icon: 'pi pi-cloud',
                items: [
                    {
                        label: 'Import',
                        icon: 'pi pi-cloud-download',
                        command: () => {
                            this.messageService.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                        }
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-cloud-upload',
                        command: () => {
                            this.messageService.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                        }
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)(x(y))};static \u0275cmp=s({type:o,selectors:[["command-doc"]],features:[T([y])],decls:10,vars:2,consts:[[1,"card"],[3,"model"],["selector","menubar-command-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The "),i(3,"i"),e(4,"command"),t(),e(5," property defines the callback to run when an item is activated by click or a key event."),t()(),i(6,"div",0),m(7,"p-toast")(8,"p-menubar",1),t(),m(9,"app-code",2)),n&2&&(p(8),r("model",l.items),p(),r("code",l.code))},dependencies:[b,f,B,F,u,c,d],encapsulation:2})}return o})();var X=(()=>{class o{code={typescript:"import { MenubarModule } from 'primeng/menubar';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["menubar-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&m(0,"app-code",0),n&2&&r("code",l.code)("hideToggleCode",!0)},dependencies:[u,c],encapsulation:2})}return o})();var Y=(()=>{class o{items;ngOnInit(){this.items=[{label:"Home",icon:"pi pi-home"},{label:"Features",icon:"pi pi-star"},{label:"Projects",icon:"pi pi-search",items:[{label:"Components",icon:"pi pi-bolt"},{label:"Blocks",icon:"pi pi-server"},{label:"UI Kit",icon:"pi pi-pencil"},{label:"Templates",icon:"pi pi-palette",items:[{label:"Apollo",icon:"pi pi-palette"},{label:"Ultima",icon:"pi pi-palette"}]}]},{label:"Contact",icon:"pi pi-envelope"}]}docs=[{data:S("Menubar"),key:"Menubar"}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["menubar-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"model"]],template:function(n,l){n&1&&(i(0,"app-docptviewer",0),m(1,"p-menubar",1),t()),n&2&&(r("docs",l.docs),p(),r("model",l.items))},dependencies:[v,G,b,f],encapsulation:2})}return o})();var ee=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:Y},{id:"pt.doc.menubar",label:"Menubar PT Options",component:q,data:S("Menubar")}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["menubar-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,l){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Menubar Pass Through"),t()(),m(4,"app-docsection",2),t()),n&2&&(p(4),r("docs",l.docs))},dependencies:[v,$],encapsulation:2})}return o})();var te=(()=>{class o{router;items;constructor(a){this.router=a}ngOnInit(){this.items=[{label:"Router",icon:"pi pi-palette",items:[{label:"Installation",routerLink:"/installation"},{label:"Configuration",routerLink:"/configuration"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",items:[{label:"Angular",url:"https://angular.io/"},{label:"Vite.js",url:"https://vitejs.dev/"}]}]}code={basic:'<p-menubar [model]="items" />',html:`<div class="card">
    <p-menubar [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'menubar-router-demo',
    templateUrl: './menubar-router-demo.html',
    standalone: true,
    imports: [Menubar, CommonModule]
})
export class MenubarRouterDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Installation',
                        routerLink: '/installation'
                    },
                    {
                        label: 'Configuration',
                        routerLink: '/configuration'
                    }
                ]
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
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.io/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)(x(H))};static \u0275cmp=s({type:o,selectors:[["router-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"model"],["selector","menubar-router-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Menu items support navigation via routerLink, programmatic routing using commands, or external URLs."),t()(),i(3,"div",0),m(4,"p-menubar",1),t(),m(5,"app-code",2)),n&2&&(p(4),r("model",l.items),p(),r("code",l.code))},dependencies:[b,f,u,c,d],encapsulation:2})}return o})();var ne=(o,g)=>({"ml-auto":o,"ml-2":g}),ae=o=>["ml-auto pi",o];function re(o,g){o&1&&(D(),i(0,"svg",6),m(1,"path",7),i(2,"mask",8),m(3,"path",9),t(),i(4,"g",10),m(5,"path",11),t(),m(6,"path",12)(7,"path",13)(8,"path",14)(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21),t())}function me(o,g){if(o&1&&m(0,"p-badge",26),o&2){let a=M(),n=a.$implicit,l=a.root;r("ngClass",_(2,ne,!l,l))("value",n.badge)}}function le(o,g){if(o&1&&(i(0,"span",27),e(1),t()),o&2){let a=M().$implicit;p(),I(a.shortcut)}}function pe(o,g){if(o&1&&m(0,"i",28),o&2){let a=M().root;r("ngClass",k(1,ae,a?"pi-angle-down":"pi-angle-right"))}}function se(o,g){if(o&1&&(i(0,"a",22)(1,"span"),e(2),t(),C(3,me,1,5,"p-badge",23)(4,le,2,1,"span",24)(5,pe,1,3,"i",25),t()),o&2){let a=g.$implicit;p(2),I(a.label),p(),r("ngIf",a.badge),p(),r("ngIf",a.shortcut),p(),r("ngIf",a.items)}}function de(o,g){o&1&&(i(0,"div",29),m(1,"input",30)(2,"p-avatar",31),t())}var ie=(()=>{class o{items;ngOnInit(){this.items=[{label:"Home",icon:"pi pi-home"},{label:"Projects",icon:"pi pi-search",badge:"3",items:[{label:"Core",icon:"pi pi-bolt",shortcut:"\u2318+S"},{label:"Blocks",icon:"pi pi-server",shortcut:"\u2318+B"},{separator:!0},{label:"UI Kit",icon:"pi pi-pencil",shortcut:"\u2318+U"}]}]}code={basic:`<p-menubar [model]="items">
    <ng-template #start>
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="var(--primary-color)" />
        </svg>
    </ng-template>
    <ng-template #item let-item let-root="root">
        <a pRipple class="flex items-center p-menubar-item-link">
            <span>{{ item.label }}</span>
            <p-badge *ngIf="item.badge" [ngClass]="{ 'ml-auto': !root, 'ml-2': root }" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="item.items" [ngClass]="['ml-auto pi', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
        </a>
    </ng-template>
    <ng-template #end>
        <div class="flex items-center gap-2">
            <input type="text" pInputText placeholder="Search" class="w-36" />
            <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
        </div>
    </ng-template>
</p-menubar>`,html:`<div class="card">
    <p-menubar [model]="items">
        <ng-template #start>
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color)" />
                <mask id="mask0_1_36" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color-text)" />
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
        </ng-template>
        <ng-template #item let-item let-root="root">
            <a pRipple class="flex items-center p-menubar-item-link">
                <span>{{ item.label }}</span>
                <p-badge *ngIf="item.badge" [ngClass]="{ 'ml-auto': !root, 'ml-2': root }" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                <i *ngIf="item.items" [ngClass]="['ml-auto pi', root ? 'pi-angle-down' : 'pi-angle-right']"></i>
            </a>
        </ng-template>
        <ng-template #end>
            <div class="flex items-center gap-2">
                <input type="text" pInputText placeholder="Search" class="w-36" />
                <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" shape="circle" />
            </div>
        </ng-template>
    </p-menubar>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'menubar-template-demo',
    templateUrl: './menubar-template-demo.html',
    standalone: true,
    imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule]
})
export class MenubarTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Core',
                        icon: 'pi pi-bolt',
                        shortcut: '\u2318+S',
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server',
                        shortcut: '\u2318+B',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil',
                        shortcut: '\u2318+U',
                    },
                ],
            },
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["menubar-template-demo"]],decls:18,vars:2,consts:[["start",""],["item",""],["end",""],[1,"card"],[3,"model"],["selector","menubar-template-demo",3,"code"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["pRipple","",1,"flex","items-center","p-menubar-item-link"],[3,"ngClass","value",4,"ngIf"],["class","ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass","value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],[3,"ngClass"],[1,"flex","items-center","gap-2"],["type","text","pInputText","","placeholder","Search",1,"w-36"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Custom content can be placed inside the menubar using the "),i(3,"i"),e(4,"start"),t(),e(5," and "),i(6,"i"),e(7,"end"),t(),e(8," templates."),t()(),i(9,"div",3)(10,"p-menubar",4),C(11,re,16,0,"ng-template",null,0,L)(13,se,6,4,"ng-template",null,1,L)(15,de,3,0,"ng-template",null,2,L),t()(),m(17,"app-code",5)),n&2&&(p(10),r("model",l.items),p(7),r("code",l.code))},dependencies:[v,A,Z,b,f,R,P,K,N,j,U,O,u,c,d],encapsulation:2})}return o})();var ce=()=>["Menubar","MenuItem"],oe=(()=>{class o{ptComponent=ee;docs=[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:Q},{id:"template",label:"Template",component:ie},{id:"command",label:"Command",component:W},{id:"router",label:"Router",component:te},{id:"accessibility",label:"Accessibility",component:J}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Menubar Component","header","Menubar","description","Menubar is a horizontal menu component.","themeDocs","menubar",3,"docs","apiDocs","ptDocs"]],template:function(n,l){n&1&&m(0,"app-doc",0),n&2&&r("docs",l.docs)("apiDocs",V(3,ce))("ptDocs",l.ptComponent)},dependencies:[z],encapsulation:2})}return o})();var ut=[{path:"",component:oe}];export{ut as default};
