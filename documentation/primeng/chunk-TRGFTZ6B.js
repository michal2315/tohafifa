import{a as u,b as f}from"./chunk-KBVWLYPF.js";import{a as y,b as G}from"./chunk-JNUBCW5H.js";import{a as W,b as $}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as z}from"./chunk-FKOOMXTU.js";import{a as d}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as q}from"./chunk-XCUGNKAG.js";import{a as c,b as K}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{c as R}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{b as V,ba as j,c as N,ca as B,ga as L,ha as U}from"./chunk-MCW4FHXZ.js";import{za as S}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as F,w as h}from"./chunk-D2XKNHFS.js";import{$a as x,Eb as a,Fb as i,Gb as t,Gc as A,Hb as l,Ob as w,Qa as p,Sb as C,Ub as T,aa as E,ba as I,cc as _,gb as s,gc as k,hc as e,ic as D,mb as M,rc as O,sc as P}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var H=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["tiered-menu-accessibility-doc"]],decls:136,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),i(4,"p"),e(5," TieredMenu component uses the "),i(6,"i"),e(7,"menubar"),t(),e(8," role with "),i(9,"i"),e(10,"aria-orientation"),t(),e(11,' set to "vertical" and the value to describe the menu can either be provided with '),i(12,"i"),e(13,"aria-labelledby"),t(),e(14," or "),i(15,"i"),e(16,"aria-label"),t(),e(17," props. Each list item has a "),i(18,"i"),e(19,"presentation"),t(),e(20," role whereas anchor elements have a "),i(21,"i"),e(22,"menuitem"),t(),e(23," role with "),i(24,"i"),e(25,"aria-label"),t(),e(26," referring to the label of the item and "),i(27,"i"),e(28,"aria-disabled"),t(),e(29," defined if the item is disabled. A submenu within a TieredMenu uses the "),i(30,"i"),e(31,"menu"),t(),e(32," role with an "),i(33,"i"),e(34,"aria-labelledby"),t(),e(35," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),i(36,"i"),e(37,"aria-haspopup"),t(),e(38,", "),i(39,"i"),e(40,"aria-expanded"),t(),e(41," and "),i(42,"i"),e(43,"aria-controls"),t(),e(44," to define the relation between the item and the submenu. "),t(),i(45,"p"),e(46,"In popup mode, the component implicitly manages the "),i(47,"i"),e(48,"aria-expanded"),t(),e(49,", "),i(50,"i"),e(51,"aria-haspopup"),t(),e(52," and "),i(53,"i"),e(54,"aria-controls"),t(),e(55," attributes of the target element to define the relation between the target and the popup."),t(),i(56,"h3"),e(57,"Keyboard Support"),t(),i(58,"div",0)(59,"table",1)(60,"thead")(61,"tr")(62,"th"),e(63,"Key"),t(),i(64,"th"),e(65,"Function"),t()()(),i(66,"tbody")(67,"tr")(68,"td")(69,"i"),e(70,"tab"),t()(),i(71,"td"),e(72,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),t()(),i(73,"tr")(74,"td")(75,"i"),e(76,"shift"),t(),e(77," + "),i(78,"i"),e(79,"tab"),t()(),i(80,"td"),e(81,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),t()(),i(82,"tr")(83,"td")(84,"i"),e(85,"enter"),t()(),i(86,"td"),e(87,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),t()(),i(88,"tr")(89,"td")(90,"i"),e(91,"space"),t()(),i(92,"td"),e(93,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),t()(),i(94,"tr")(95,"td")(96,"i"),e(97,"escape"),t()(),i(98,"td"),e(99,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),t()(),i(100,"tr")(101,"td")(102,"i"),e(103,"down arrow"),t()(),i(104,"td"),e(105,"Moves focus to the next menuitem within the submenu."),t()(),i(106,"tr")(107,"td")(108,"i"),e(109,"up arrow"),t()(),i(110,"td"),e(111,"Moves focus to the previous menuitem within the submenu."),t()(),i(112,"tr")(113,"td")(114,"i"),e(115,"right arrow"),t()(),i(116,"td"),e(117,"Opens a submenu if there is one available and moves focus to the first item."),t()(),i(118,"tr")(119,"td")(120,"i"),e(121,"left arrow"),t()(),i(122,"td"),e(123,"Closes a submenu and moves focus to the root item of the closed submenu."),t()(),i(124,"tr")(125,"td")(126,"i"),e(127,"home"),t()(),i(128,"td"),e(129,"Moves focus to the first menuitem within the submenu."),t()(),i(130,"tr")(131,"td")(132,"i"),e(133,"end"),t()(),i(134,"td"),e(135,"Moves focus to the last menuitem within the submenu."),t()()()()()()())},dependencies:[c],encapsulation:2})}return o})();var J=(()=>{class o{items;ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}]}code={basic:'<p-tieredmenu [model]="items" />',html:`<div class="card flex justify-center">
    <p-tieredmenu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';

@Component({
    selector: 'tiered-menu-basic-demo',
    templateUrl: './tiered-menu-basic-demo.html',
    standalone: true,
    imports: [TieredMenu]
})
export class TieredMenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-basic-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"TieredMenu requires a collection of menuitems as its "),i(3,"i"),e(4,"model"),t(),e(5,"."),t()(),i(6,"div",0),l(7,"p-tieredmenu",1),t(),l(8,"app-code",2)),n&2&&(p(7),a("model",r.items),p(),a("code",r.code))},dependencies:[c,d,f,u],encapsulation:2})}return o})();var Q=(()=>{class o{messageService;items;constructor(m){this.messageService=m}ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{this.messageService.add({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{this.messageService.add({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Search",icon:"pi pi-search",command:()=>{this.messageService.add({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{separator:!0},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{this.messageService.add({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{this.messageService.add({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]}]}code={basic:`<p-toast/>
<p-tieredmenu [model]="items" />`,html:`<div class="card flex justify-center">
    <p-toast/>
    <p-tieredmenu [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'tiered-menu-command-demo',
    templateUrl: './tiered-menu-command-demo.html',
    standalone: true,
    imports: [TieredMenu, ToastModule],
    providers: [MessageService]
})
export class TieredMenuCommandDemo implements OnInit {

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
}`};static \u0275fac=function(n){return new(n||o)(x(S))};static \u0275cmp=s({type:o,selectors:[["command-doc"]],features:[O([S])],decls:10,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-command-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The "),i(3,"i"),e(4,"command"),t(),e(5," property defines the callback to run when an item is activated by click or a key event."),t()(),i(6,"div",0),l(7,"p-toast")(8,"p-tieredmenu",1),t(),l(9,"app-code",2)),n&2&&(p(8),a("model",r.items),p(),a("code",r.code))},dependencies:[c,d,f,u,$,W],encapsulation:2})}return o})();var X=(()=>{class o{code={typescript:"import { TieredMenuModule } from 'primeng/tieredmenu';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["tiered-menu-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&l(0,"app-code",0),n&2&&a("code",r.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2})}return o})();var Y=(()=>{class o{items;ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}]}code={basic:`<p-button label="Toggle" (click)="menu.toggle($event)" />
<p-tieredmenu #menu [model]="items" [popup]="true" />`,html:`<div class="card flex justify-center">
    <p-button label="Toggle" (click)="menu.toggle($event)" />
    <p-tieredmenu #menu [model]="items" [popup]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tiered-menu-popup-demo',
    templateUrl: './tiered-menu-popup-demo.html',
    standalone: true,
    imports: [TieredMenu, ButtonModule]
})
export class TieredMenuPopupDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["popup-doc"]],decls:14,vars:3,consts:[["menu",""],[1,"card","flex","justify-center"],["label","Toggle",3,"click"],[3,"model","popup"],["selector","tiered-menu-popup-demo",3,"code"]],template:function(n,r){if(n&1){let ne=w();i(0,"app-docsectiontext")(1,"p"),e(2,"Popup mode is enabled by adding "),i(3,"i"),e(4,"popup"),t(),e(5," property and calling "),i(6,"i"),e(7,"toggle"),t(),e(8," method with an event of the target."),t()(),i(9,"div",1)(10,"p-button",2),C("click",function(me){E(ne);let ae=_(12);return I(ae.toggle(me))}),t(),l(11,"p-tieredmenu",3,0),t(),l(13,"app-code",4)}n&2&&(p(11),a("model",r.items)("popup",!0),p(2),a("code",r.code))},dependencies:[c,d,f,u,U,L],encapsulation:2})}return o})();var Z=(()=>{class o{items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}];docs=[{data:y("TieredMenu"),key:"TieredMenu"}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["tieredmenu-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],[3,"model"]],template:function(n,r){n&1&&(i(0,"app-docptviewer",0),l(1,"p-tieredmenu",1),t()),n&2&&(a("docs",r.docs),p(),a("model",r.items))},dependencies:[h,G,f,u],encapsulation:2})}return o})();var ee=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:Z},{id:"pt.doc.tieredmenu",label:"TieredMenu PT Options",component:K,data:y("TieredMenu")}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["tieredmenu-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,r){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),e(3,"TieredMenu Pass Through"),t()(),l(4,"app-docsection",2),t()),n&2&&(p(4),a("docs",r.docs))},dependencies:[h,q],encapsulation:2})}return o})();var te=(()=>{class o{router;items;constructor(m){this.router=m}ngOnInit(){this.items=[{label:"Router",icon:"pi pi-palette",items:[{label:"Theming",routerLink:"/theming"},{label:"UI Kit",routerLink:"/uikit"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",items:[{label:"Angular",url:"https://angular.dev/"},{label:"Vite.js",url:"https://vitejs.dev/"}]}]}code={basic:'<p-tieredmenu [model]="items" />',html:'<p-tieredmenu [model]="items" />',typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { TieredMenu } from 'primeng/tieredmenu';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'tiered-menu-router-demo',
    templateUrl: './tiered-menu-router-demo.html',
    standalone: true,
    imports: [TieredMenu, CommonModule]
})
export class TieredMenuRouterDemo implements OnInit {

    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Router',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Theming',
                        routerLink: '/theming'
                    },
                    {
                        label: 'UI Kit',
                        routerLink: '/uikit'
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
                        url: 'https://angular.dev/'
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/'
                    }
                ]
            }
        ];
    }
}`};static \u0275fac=function(n){return new(n||o)(x(R))};static \u0275cmp=s({type:o,selectors:[["router-doc"]],decls:6,vars:2,consts:[[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-router-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Menu items support navigation via routerLink, programmatic routing using commands, or external URLs."),t()(),i(3,"div",0),l(4,"p-tieredmenu",1),t(),l(5,"app-code",2)),n&2&&(p(4),a("model",r.items),p(),a("code",r.code))},dependencies:[c,d,f,u],encapsulation:2})}return o})();function re(o,g){if(o&1&&l(0,"p-badge",10),o&2){let m=T().$implicit;a("value",m.badge)}}function pe(o,g){if(o&1&&(i(0,"span",11),e(1),t()),o&2){let m=T().$implicit;p(),D(m.shortcut)}}function le(o,g){o&1&&l(0,"i",12)}function se(o,g){if(o&1&&(i(0,"a",4),l(1,"span",5),i(2,"span",6),e(3),t(),M(4,re,1,1,"p-badge",7)(5,pe,2,1,"span",8)(6,le,1,0,"i",9),t()),o&2){let m=g.$implicit,n=g.hasSubmenu;p(),k(m.icon),p(2),D(m.label),p(),a("ngIf",m.badge),p(),a("ngIf",m.shortcut),p(),a("ngIf",n)}}var ie=(()=>{class o{items;ngOnInit(){this.items=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file",shortcut:"\u2318+N"},{label:"Image",icon:"pi pi-image",shortcut:"\u2318+I"},{label:"Video",icon:"pi pi-video",shortcut:"\u2318+L"}]},{label:"Open",icon:"pi pi-folder-open",shortcut:"\u2318+O"},{label:"Print",icon:"pi pi-print",shortcut:"\u2318+P"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy",shortcut:"\u2318+C"},{label:"Delete",icon:"pi pi-times",shortcut:"\u2318+D"}]},{label:"Search",icon:"pi pi-search",shortcut:"\u2318+S"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack",badge:"2"},{label:"Whatsapp",icon:"pi pi-whatsapp",badge:"3"}]}]}code={basic:`<p-tieredmenu [model]="items">
    <ng-template #item let-item let-hasSubmenu="hasSubmenu">
        <a pRipple class="flex items-center p-tieredmenu-item-link">
            <span [class]="item.icon" class="p-tieredmenu-item-icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
            <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-tieredmenu>`,html:`<div class="card flex justify-center">
    <p-tieredmenu [model]="items">
        <ng-template #item let-item let-hasSubmenu="hasSubmenu">
            <a pRipple class="flex items-center p-tieredmenu-item-link">
                <span [class]="item.icon" class="p-tieredmenu-item-icon"></span>
                <span class="ml-2">{{ item.label }}</span>
                <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                    {{ item.shortcut }}
                </span>
                <i *ngIf="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
            </a>
        </ng-template>
    </p-tieredmenu>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenu } from 'primeng/tieredmenu';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'tiered-menu-template-demo',
    templateUrl: './tiered-menu-template-demo.html',
    standalone: true,
    imports: [TieredMenu, BadgeModule, Ripple, CommonModule]
})
export class TieredMenuTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        items: [
                            {
                                label: 'Document',
                                icon: 'pi pi-file',
                                shortcut: '\u2318+N'
                            },
                            {
                                label: 'Image',
                                icon: 'pi pi-image',
                                shortcut: '\u2318+I'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-video',
                                shortcut: '\u2318+L'
                            }
                        ]
                    },
                    {
                        label: 'Open',
                        icon: 'pi pi-folder-open',
                        shortcut: '\u2318+O'
                    },
                    {
                        label: 'Print',
                        icon: 'pi pi-print',
                        shortcut: '\u2318+P'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                items: [
                    {
                        label: 'Copy',
                        icon: 'pi pi-copy',
                        shortcut: '\u2318+C'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-times',
                        shortcut: '\u2318+D'
                    }
                ]
            },
            {
                label: 'Search',
                icon: 'pi pi-search',
                shortcut: '\u2318+S'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Slack',
                        icon: 'pi pi-slack',
                        badge: '2'
                    },
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp',
                        badge: '3'
                    }
                ]
            }
        ]
    }
}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["template-doc"]],decls:11,vars:2,consts:[["item",""],[1,"card","flex","justify-center"],[3,"model"],["selector","tiered-menu-template-demo",3,"code"],["pRipple","",1,"flex","items-center","p-tieredmenu-item-link"],[1,"p-tieredmenu-item-icon"],[1,"ml-2"],["class","ml-auto",3,"value",4,"ngIf"],["class","ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1",4,"ngIf"],["class","pi pi-angle-right ml-auto",4,"ngIf"],[1,"ml-auto",3,"value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],[1,"pi","pi-angle-right","ml-auto"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"TieredMenu offers item customization with the "),i(3,"i"),e(4,"item"),t(),e(5," template that receives the menuitem instance from the model as a parameter."),t()(),i(6,"div",1)(7,"p-tieredmenu",2),M(8,se,7,6,"ng-template",null,0,A),t()(),l(10,"app-code",3)),n&2&&(p(7),a("model",r.items),p(3),a("code",r.code))},dependencies:[c,d,f,u,N,V,h,F,B,j],encapsulation:2})}return o})();var ce=()=>["TieredMenu","MenuItem"],oe=(()=>{class o{docs=[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:J},{id:"popup",label:"Popup",component:Y},{id:"template",label:"Template",component:ie},{id:"command",label:"Command",component:Q},{id:"router",label:"Router",component:te},{id:"accessibility",label:"Accessibility",component:H}];ptComponent=ee;static \u0275fac=function(n){return new(n||o)};static \u0275cmp=s({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular TieredMenu Component","header","TieredMenu","description","TieredMenu displays submenus in nested overlays.","themeDocs","tieredmenu",3,"docs","apiDocs","ptDocs"]],template:function(n,r){n&1&&l(0,"app-doc",0),n&2&&a("docs",r.docs)("apiDocs",P(3,ce))("ptDocs",r.ptComponent)},dependencies:[z],encapsulation:2})}return o})();var gt=[{path:"",component:oe}];export{gt as default};
