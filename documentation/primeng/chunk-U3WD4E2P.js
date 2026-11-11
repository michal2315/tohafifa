import{a as g,b as f}from"./chunk-GAIR2F33.js";import{a as ne}from"./chunk-374VKA5A.js";import{a as R,b as ae}from"./chunk-JNUBCW5H.js";import{a as ee,b as te}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as re}from"./chunk-FKOOMXTU.js";import{a as u}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as oe}from"./chunk-XCUGNKAG.js";import{a as d,b as ie}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{c as G,d as W,h as Q}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{b as J,ba as Y,c as X}from"./chunk-MCW4FHXZ.js";import{za as F}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as j,m as B,n as z,w}from"./chunk-D2XKNHFS.js";import{$a as E,Eb as m,Fb as t,Gb as n,Gc as $,Hb as s,La as I,Ob as y,Qa as l,Sb as C,Ub as M,Yb as V,Zb as k,_b as A,aa as b,ba as v,ca as Z,cc as S,da as P,gb as c,gc as U,hc as e,ic as L,jc as N,mb as D,pc as q,rc as K,sc as O,tc as H}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var me=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["context-menu-accessibility-doc"]],decls:116,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),n(),t(4,"p"),e(5," ContextMenu component uses the "),t(6,"i"),e(7,"menubar"),n(),e(8," role with "),t(9,"i"),e(10,"aria-orientation"),n(),e(11,' set to "vertical" and the value to describe the menu can either be provided with '),t(12,"i"),e(13,"aria-labelledby"),n(),e(14," or "),t(15,"i"),e(16,"aria-label"),n(),e(17," props. Each list item has a "),t(18,"i"),e(19,"presentation"),n(),e(20," role whereas anchor elements have a "),t(21,"i"),e(22,"menuitem"),n(),e(23," role with "),t(24,"i"),e(25,"aria-label"),n(),e(26," referring to the label of the item and "),t(27,"i"),e(28,"aria-disabled"),n(),e(29," defined if the item is disabled. A submenu within a ContextMenu uses the "),t(30,"i"),e(31,"menu"),n(),e(32," role with an "),t(33,"i"),e(34,"aria-labelledby"),n(),e(35," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),t(36,"i"),e(37,"aria-haspopup"),n(),e(38,", "),t(39,"i"),e(40,"aria-expanded"),n(),e(41," and "),t(42,"i"),e(43,"aria-controls"),n(),e(44," to define the relation between the item and the submenu. "),n(),t(45,"h3"),e(46,"Keyboard Support"),n(),t(47,"div",0)(48,"table",1)(49,"thead")(50,"tr")(51,"th"),e(52,"Key"),n(),t(53,"th"),e(54,"Function"),n()()(),t(55,"tbody")(56,"tr")(57,"td")(58,"i"),e(59,"tab"),n()(),t(60,"td"),e(61,"When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence."),n()(),t(62,"tr")(63,"td")(64,"i"),e(65,"enter"),n()(),t(66,"td"),e(67,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),n()(),t(68,"tr")(69,"td")(70,"i"),e(71,"space"),n()(),t(72,"td"),e(73,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),n()(),t(74,"tr")(75,"td")(76,"i"),e(77,"escape"),n()(),t(78,"td"),e(79,"Closes the context menu."),n()(),t(80,"tr")(81,"td")(82,"i"),e(83,"down arrow"),n()(),t(84,"td"),e(85,"If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu."),n()(),t(86,"tr")(87,"td")(88,"i"),e(89,"up arrow"),n()(),t(90,"td"),e(91,"If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu."),n()(),t(92,"tr")(93,"td")(94,"i"),e(95,"right arrow"),n()(),t(96,"td"),e(97,"Opens a submenu if there is one available and moves focus to the first item."),n()(),t(98,"tr")(99,"td")(100,"i"),e(101,"left arrow"),n()(),t(102,"td"),e(103,"Closes a submenu and moves focus to the root item of the closed submenu."),n()(),t(104,"tr")(105,"td")(106,"i"),e(107,"home"),n()(),t(108,"td"),e(109,"Moves focus to the first menuitem within the submenu."),n()(),t(110,"tr")(111,"td")(112,"i"),e(113,"end"),n()(),t(114,"td"),e(115,"Moves focus to the last menuitem within the submenu."),n()()()()()()())},dependencies:[d],encapsulation:2})}return i})();var le=(()=>{class i{items;ngOnInit(){this.items=[{label:"Copy",icon:"pi pi-copy"},{label:"Rename",icon:"pi pi-file-edit"}]}code={basic:`<img #img src="/_ext/primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg" alt="Logo" aria-haspopup="true" class="w-full md:w-[30rem] rounded shadow-lg" />
<p-contextmenu [target]="img" [model]="items" />`,html:`<div class="card flex justify-center">
    <img #img src="/_ext/primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg" alt="Logo" aria-haspopup="true" class="w-full md:w-[30rem] rounded shadow-lg" />
    <p-contextmenu [target]="img" [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';

@Component({
    selector: 'context-menu-basic-demo',
    templateUrl: './context-menu-basic-demo.html',
    standalone: true,
    imports: [ContextMenu]
})
export class ContextMenuBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Copy', icon: 'pi pi-copy' },
            { label: 'Rename', icon: 'pi pi-file-edit' }
        ];
    }
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["context-menu-basic-demo"]],decls:11,vars:3,consts:[["img",""],[1,"card","flex","justify-center"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg","alt","Logo","aria-haspopup","true",1,"w-full","md:w-[30rem]","rounded","shadow-lg"],[3,"target","model"],["selector","context-menu-basic-demo",3,"code"]],template:function(o,a){if(o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," ContextMenu can be attached to a particular element whose local template variable name is defined using the "),t(3,"i"),e(4,"target"),n(),e(5," property. "),n()(),t(6,"div",1),s(7,"img",2,0)(9,"p-contextmenu",3),n(),s(10,"app-code",4)),o&2){let p=S(8);l(9),m("target",p)("model",a.items),l(),m("code",a.code)}},dependencies:[f,g,u,d],encapsulation:2})}return i})();var Ce=["cm"],Me=i=>({"border-primary":i});function we(i,h){if(i&1){let r=y();t(0,"li",6),C("contextmenu",function(a){let p=b(r).$implicit,T=M();return v(T.onContextMenu(a,p))}),t(1,"div",7),s(2,"img",8),t(3,"span",9),e(4),n()(),s(5,"p-tag",10),n()}if(i&2){let r=h.$implicit,o=M();m("ngClass",H(6,Me,o.selectedId===r.id)),l(2),m("alt",r.name)("src","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/"+r.image,I),l(2),L(r.name),l(),m("value",r.role)("severity",o.getBadge(r))}}var se=(()=>{class i{messageService;items;cm;selectedUser;users;constructor(r){this.messageService=r}ngOnInit(){this.users=[{id:0,name:"Amy Elsner",image:"amyelsner.png",role:"Admin"},{id:1,name:"Anna Fali",image:"annafali.png",role:"Member"},{id:2,name:"Asiya Javayant",image:"asiyajavayant.png",role:"Member"},{id:3,name:"Bernardo Dominic",image:"bernardodominic.png",role:"Guest"},{id:4,name:"Elwin Sharvill",image:"elwinsharvill.png",role:"Member"}],this.items=[{label:"Roles",icon:"pi pi-users",items:[{label:"Admin",command:()=>{this.selectedUser.role="Admin"}},{label:"Member",command:()=>{this.selectedUser.role="Member"}},{label:"Guest",command:()=>{this.selectedUser.role="Guest"}}]},{label:"Invite",icon:"pi pi-user-plus",command:()=>{this.messageService.add({severity:"success",summary:"Success",detail:"Invitation sent!",life:3e3})}}]}getBadge(r){return r.role==="Member"?"info":r.role==="Guest"?"warn":null}onContextMenu(r,o){this.selectedUser=o,this.cm.show(r)}onHide(){this.selectedUser=null}code={basic:`<p-toast />
<ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
    <li
        *ngFor="let user of users"
        class="p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between"
        [ngClass]="{ 'border-primary': selectedId === user.id }"
        (contextmenu)="onContextMenu($event, user)"
    >
        <div class="flex flex-1 items-center gap-2">
            <img class="w-8 h-8" [alt]="user.name" [src]="'/_ext/primefaces.org/cdn/primeng/images/demo/avatar/' + user.image" />
            <span class="font-bold">{{ user.name }}</span>
        </div>
        <p-tag [value]="user.role" [severity]="getBadge(user)" />
    </li>
</ul>

<p-contextmenu #cm [model]="items" (onHide)="onHide()" />`,html:`<div class="card flex sm:justify-center">
    <p-toast />
    <ul class="m-0 list-none border border-surface rounded p-4 flex flex-col gap-2 w-full sm:w-96">
        <li
            *ngFor="let user of users"
            class="p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between"
            [ngClass]="{ 'border-primary': selectedId === user.id }"
            (contextmenu)="onContextMenu($event, user)"
        >
            <div class="flex flex-1 items-center gap-2">
                <img class="w-8 h-8" [alt]="user.name" [src]="'/_ext/primefaces.org/cdn/primeng/images/demo/avatar/' + user.image" />
                <span class="font-bold">{{ user.name }}</span>
            </div>
            <p-tag [value]="user.role" [severity]="getBadge(user)" />
        </li>
    </ul>

    <p-contextmenu #cm [model]="items" (onHide)="onHide()" />
</div>`,typescript:`import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenu } from 'primeng/contextmenu';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ContextMenu } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';
import { Tag } from 'primeng/tag';

interface Users {
    id: number;
    name: string;
    image: string;
    role: string;
}

@Component({
    selector: 'context-menu-command-demo',
    templateUrl: './context-menu-command-demo.html',
    standalone: true,
    imports: [ContextMenu, ToastModule, CommonModule, Tag],
    providers: [MessageService]
})
export class ContextMenuCommandDemo implements OnInit {
    items: MenuItem[] | undefined;

    @ViewChild('cm') cm: ContextMenu;

    selectedUser : Users

    users : Users[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.users = [
            { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
            { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
            { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
            { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
            { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
        ];

        this.items = [
            {
                label: 'Roles',
                icon: 'pi pi-users',
                items: [
                    {
                        label: 'Admin',
                        command: () => {
                            this.selectedUser.role = 'Admin';
                        }
                    },
                    {
                        label: 'Member',
                        command: () => {
                            this.selectedUser.role = 'Member';
                        }
                    },
                    {
                        label: 'Guest',
                        command: () => {
                            this.selectedUser.role = 'Guest';
                        }
                    }
                ]
            },
            {
                label: 'Invite',
                icon: 'pi pi-user-plus',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
                }
            }
        ];
    }

    getBadge(user) {
        if (user.role === 'Member') return 'info';
        else if (user.role === 'Guest') return 'warn';
        else return null;
    }

    onContextMenu(event, user) {
        this.selectedUser = user;
        this.cm.show(event);
    }

    onHide() {
        this.selectedUser = null;
    }
}`};static \u0275fac=function(o){return new(o||i)(E(F))};static \u0275cmp=c({type:i,selectors:[["context-menu-command-demo"]],viewQuery:function(o,a){if(o&1&&V(Ce,5),o&2){let p;k(p=A())&&(a.cm=p.first)}},features:[K([F])],decls:13,vars:3,consts:[["cm",""],[1,"card","flex","sm:justify-center"],[1,"m-0","list-none","border","border-surface","rounded","p-4","flex","flex-col","gap-2","w-full","sm:w-96"],["class","p-2 hover:bg-emphasis rounded border border-transparent transition-all duration-200 flex items-center justify-content-between",3,"ngClass","contextmenu",4,"ngFor","ngForOf"],[3,"onHide","model"],["selector","context-menu-command-demo",3,"code"],[1,"p-2","hover:bg-emphasis","rounded","border","border-transparent","transition-all","duration-200","flex","items-center","justify-content-between",3,"contextmenu","ngClass"],[1,"flex","flex-1","items-center","gap-2"],[1,"w-8","h-8",3,"alt","src"],[1,"font-bold"],[3,"value","severity"]],template:function(o,a){if(o&1){let p=y();t(0,"app-docsectiontext")(1,"p"),e(2,"The function to invoke when an item is clicked is defined using the "),t(3,"i"),e(4,"command"),n(),e(5," property."),n()(),t(6,"div",1),s(7,"p-toast"),t(8,"ul",2),D(9,we,6,8,"li",3),n(),t(10,"p-contextmenu",4,0),C("onHide",function(){return b(p),v(a.onHide())}),n()(),s(12,"app-code",5)}o&2&&(l(9),m("ngForOf",a.users),l(),m("model",a.items),l(2),m("code",a.code))},dependencies:[w,j,B,f,g,te,ee,ne,u,d],encapsulation:2})}return i})();var ce=(()=>{class i{items;ngOnInit(){this.items=[{label:"Translate",icon:"pi pi-language"},{label:"Speech",icon:"pi pi-volume-up",items:[{label:"Start",icon:"pi pi-caret-right"},{label:"Stop",icon:"pi pi-pause"}]},{separator:!0},{label:"Print",icon:"pi pi-print"}]}code={basic:'<p-contextmenu [model]="items" [global]="true" />',html:`<div class="card text-center">
    <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
    <p-contextmenu [model]="items" [global]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';

@Component({
    selector: 'context-menu-document-demo',
    templateUrl: './context-menu-document-demo.html',
    standalone: true,
    imports: [ContextMenu]
})
export class ContextMenuDocumentDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Translate',
                icon: 'pi pi-language'
            },
            {
                label: 'Speech',
                icon: 'pi pi-volume-up',
                items: [
                    {
                        label: 'Start',
                        icon: 'pi pi-caret-right'
                    },
                    {
                        label: 'Stop',
                        icon: 'pi pi-pause'
                    }
                ]
            },
            {
                separator: true
            },
            {
                label: 'Print',
                icon: 'pi pi-print'
            }
        ]
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenu } from 'primeng/contextmenu';
import { ContextMenuDemo } from './contextmenudemo';

@NgModule({
    imports: [CommonModule, ContextMenu],
    declarations: [ContextMenuDemo]
})
export class ContextMenuDemoModule {}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["context-menu-document-demo"]],decls:14,vars:3,consts:[[1,"card","text-center"],[1,"mb-0"],[3,"model","global"],["selector","context-menu-document-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Setting "),t(3,"i"),e(4,"global"),n(),e(5," property to "),t(6,"i"),e(7,"true"),n(),e(8," attaches the context menu to the document."),n()(),t(9,"div",0)(10,"p",1),e(11,"Right-Click anywhere on this page to view the global ContextMenu."),n(),s(12,"p-contextmenu",2),n(),s(13,"app-code",3)),o&2&&(l(12),m("model",a.items)("global",!0),l(),m("code",a.code))},dependencies:[f,g,u,d],encapsulation:2})}return i})();var pe=(()=>{class i{code={typescript:"import { ContextMenuModule } from 'primeng/contextmenu';"};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["context-menu-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&s(0,"app-code",0),o&2&&m("code",a.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2})}return i})();var de=(()=>{class i{items=[{label:"Copy",icon:"pi pi-copy"},{label:"Rename",icon:"pi pi-file-edit"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Facebook",icon:"pi pi-facebook"},{label:"Twitter",icon:"pi pi-twitter"}]}];docs=[{data:R("ContextMenu"),key:"ContextMenu"}];static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["contextmenu-pt-viewer"]],decls:5,vars:3,consts:[["image",""],["cm",""],[3,"docs"],["src","/_ext/primefaces.org/cdn/primeng/images/demo/nature/nature2.jpg","alt","Logo","aria-haspopup","true",1,"w-full","md:w-80","rounded","shadow-lg",3,"contextmenu"],[3,"target","model"]],template:function(o,a){if(o&1){let p=y();t(0,"app-docptviewer",2)(1,"img",3,0),C("contextmenu",function(be){b(p);let ve=S(4);return v(ve.show(be))}),n(),s(3,"p-contextMenu",4,1),n()}if(o&2){let p=S(2);m("docs",a.docs),l(3),m("target",p)("model",a.items)}},dependencies:[w,ae,f,g],encapsulation:2})}return i})();var ue=(()=>{class i{docs=[{id:"pt.viewer",label:"Viewer",component:de},{id:"pt.doc.contextmenu",label:"ContextMenu PT Options",component:ie,data:R("ContextMenu")}];static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["contextmenu-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"div",1)(2,"h1"),e(3,"ContextMenu Pass Through"),n()(),s(4,"app-docsection",2),n()),o&2&&(l(4),m("docs",a.docs))},dependencies:[w,oe],encapsulation:2})}return i})();var ge=(()=>{class i{router;items;constructor(r){this.router=r}ngOnInit(){this.items=[{label:"Router Link",icon:"pi pi-palette",routerLink:"/theming"},{label:"Programmatic",icon:"pi pi-link",command:()=>{this.router.navigate(["/installation"])}},{label:"External",icon:"pi pi-home",url:"https://angular.io//"}]}code={basic:`<span #span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" aria-haspopup="true">
    <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="..." fill="var(--p-primary-color)" />
    </svg>
</span>
<p-contextmenu [target]="span" [model]="items" />`,html:`<div class="card flex justify-center">
    <span #span class="inline-flex items-center justify-center border-2 border-primary rounded w-16 h-16" aria-haspopup="true">
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
    </span>
    <p-contextmenu [target]="span" [model]="items" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'context-menu-router-demo',
    templateUrl: './context-menu-router-demo.html',
    standalone: true,
    imports: [ContextMenu, CommonModule],
})
export class ContextMenuRouterDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
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
        ];
    }
}`};static \u0275fac=function(o){return new(o||i)(E(G))};static \u0275cmp=c({type:i,selectors:[["context-menu-router-demo"]],decls:24,vars:3,consts:[["span",""],[1,"card","flex","justify-center"],["aria-haspopup","true",1,"inline-flex","items-center","justify-center","border-2","border-primary","rounded","w-16","h-16"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[3,"target","model"],["selector","context-menu-router-demo",3,"code"]],template:function(o,a){if(o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Menu items support navigation via routerLink, programmatic routing using commands, or external URLs."),n()(),t(3,"div",1)(4,"span",2,0),Z(),t(6,"svg",3),s(7,"path",4),t(8,"mask",5),s(9,"path",6),n(),t(10,"g",7),s(11,"path",8),n(),s(12,"path",9)(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"path",14)(18,"path",15)(19,"path",16)(20,"path",17)(21,"path",18),n()(),P(),s(22,"p-contextmenu",19),n(),s(23,"app-code",20)),o&2){let p=S(5);l(22),m("target",p)("model",a.items),l(),m("code",a.code)}},dependencies:[f,g,u,d],encapsulation:2})}return i})();var Le=()=>["/table"],fe=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["context-menu-table-demo"]],decls:6,vars:2,consts:[["fragment","context-menu",3,"routerLink"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Table has built-in support for ContextMenu, see the "),t(3,"a",0),e(4,"ContextMenu"),n(),e(5," demo for an example. "),n()()),o&2&&(l(3),m("routerLink",O(1,Le)))},dependencies:[Q,W,d],encapsulation:2})}return i})();var De=["cm"],_e=i=>({"border-primary":i});function Te(i,h){if(i&1){let r=y();t(0,"li",7),C("contextmenu",function(a){b(r);let p=M();return v(p.onContextMenu(a))}),t(1,"div",8),s(2,"img",9),t(3,"div",10)(4,"span",11),e(5),n(),t(6,"div",12),s(7,"i",13),t(8,"span"),e(9),n()()(),t(10,"span",14),e(11),n()()()}if(i&2){let r=h.$implicit,o=M();m("ngClass",H(7,_e,o.selectedId===r.id)),l(2),m("src",q("/_ext/primefaces.org/cdn/primeng/images/demo/product/",r.image),I)("alt",r.name),l(3),L(r.name),l(4),L(r.category),l(2),N("$",r.price)}}function Ie(i,h){if(i&1&&s(0,"p-badge",20),i&2){let r=M().$implicit;m("value",r.badge)}}function Ee(i,h){if(i&1&&(t(0,"span",21),e(1),n()),i&2){let r=M().$implicit;l(),L(r.shortcut)}}function Ve(i,h){i&1&&s(0,"i",22)}function ke(i,h){if(i&1&&(t(0,"a",15),s(1,"span"),t(2,"span",16),e(3),n(),D(4,Ie,1,1,"p-badge",17)(5,Ee,2,1,"span",18)(6,Ve,1,0,"i",19),n()),i&2){let r=h.$implicit;l(),U(r.icon),l(2),L(r.label),l(),m("ngIf",r.badge),l(),m("ngIf",r.shortcut),l(),m("ngIf",r.items)}}var xe=(()=>{class i{items;cm;selectedId;data=[{id:"1000",code:"f230fh0g3",name:"Bamboo Watch",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Accessories",quantity:24,inventoryStatus:"INSTOCK",rating:5},{id:"1001",code:"nvklal433",name:"Black Watch",description:"Product Description",image:"black-watch.jpg",price:72,category:"Accessories",quantity:61,inventoryStatus:"INSTOCK",rating:4},{id:"1002",code:"zz21cz3c1",name:"Blue Band",description:"Product Description",image:"blue-band.jpg",price:79,category:"Fitness",quantity:2,inventoryStatus:"LOWSTOCK",rating:3},{id:"1003",code:"244wgerg2",name:"Blue T-Shirt",description:"Product Description",image:"blue-t-shirt.jpg",price:29,category:"Clothing",quantity:25,inventoryStatus:"INSTOCK",rating:5},{id:"1004",code:"h456wer53",name:"Bracelet",description:"Product Description",image:"bracelet.jpg",price:15,category:"Accessories",quantity:73,inventoryStatus:"INSTOCK",rating:4}];ngOnInit(){this.items=[{label:"Favorite",icon:"pi pi-star",shortcut:"\u2318+D"},{label:"Add",icon:"pi pi-shopping-cart",shortcut:"\u2318+A"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Whatsapp",icon:"pi pi-whatsapp",badge:"2"},{label:"Instagram",icon:"pi pi-instagram",badge:"3"}]}]}onContextMenu(r){this.cm.target=r.currentTarget,this.cm.show(r)}onHide(){this.selectedId=void 0}code={basic:`<ul class="m-0 p-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]">
    <li
        *ngFor="let product of data"
        class="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200"
        [ngClass]="{ 'border-primary': selectedId === product.id }"
        (contextmenu)="onContextMenu($event)"
    >
        <div class="flex flex-wrap p-2 items-center gap-4">
            <img class="w-16 shrink-0 rounded" src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" />
            <div class="flex-1 flex flex-col gap-1">
                <span class="font-bold">{{ product.name }}</span>
                <div class="flex items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ product.category }}</span>
                </div>
            </div>
            <span class="font-bold ml-8">&#36;{{ product.price }}</span>
        </div>
    </li>
</ul>

<p-contextmenu #cm [model]="items" (onHide)="onHide()">
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-contextmenu-item-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i *ngIf="item.items" class="pi pi-angle-right ml-auto"></i>
        </a>
    </ng-template>
</p-contextmenu>`,html:`<div class="card flex md:justify-center">
    <ul class="m-0 p-0 list-none border border-surface-200 dark:border-surface-700 rounded p-4 flex flex-col gap-2 w-full md:w-[30rem]">
            <li
                *ngFor="let product of data"
                class="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200"
                [ngClass]="{ 'border-primary': selectedId === product.id }"
                (contextmenu)="onContextMenu($event)"
            >
                <div class="flex flex-wrap p-2 items-center gap-4">
                    <img class="w-16 shrink-0 rounded" src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}" [alt]="product.name" />
                    <div class="flex-1 flex flex-col gap-1">
                        <span class="font-bold">{{ product.name }}</span>
                        <div class="flex items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ product.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold ml-8">&#36;{{ product.price }}</span>
                </div>
            </li>
        </ul>

    <p-contextmenu #cm [model]="items" (onHide)="onHide()">
        <ng-template #item let-item>
            <a pRipple class="flex items-center p-contextmenu-item-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
                <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                <i *ngIf="item.items" class="pi pi-angle-right ml-auto"></i>
            </a>
        </ng-template>
    </p-contextmenu>
</div>`,typescript:`import { Component, OnInit, ViewChild } from '@angular/core';
import { ContextMenu } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'context-menu-template-demo',
    templateUrl: './context-menu-template-demo.html',
    standalone: true,
    imports: [ContextMenu, CommonModule, Ripple, BadgeModule]
})
export class ContextMenuTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    @ViewChild('cm') cm: ContextMenu;

    selectedId!: string;

    data = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            description: 'Product Description',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Blue Band',
            description: 'Product Description',
            image: 'blue-band.jpg',
            price: 79,
            category: 'Fitness',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Blue T-Shirt',
            description: 'Product Description',
            image: 'blue-t-shirt.jpg',
            price: 29,
            category: 'Clothing',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'Bracelet',
            description: 'Product Description',
            image: 'bracelet.jpg',
            price: 15,
            category: 'Accessories',
            quantity: 73,
            inventoryStatus: 'INSTOCK',
            rating: 4
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Favorite',
                icon: 'pi pi-star',
                shortcut: '\u2318+D'
            },
            {
                label: 'Add',
                icon: 'pi pi-shopping-cart',
                shortcut: '\u2318+A'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
                items: [
                    {
                        label: 'Whatsapp',
                        icon: 'pi pi-whatsapp',
                        badge: '2'
                    },
                    {
                        label: 'Instagram',
                        icon: 'pi pi-instagram',
                        badge: '3'
                    }
                ]
            }
        ];
    }

    onContextMenu(event) {
        this.cm.target = event.currentTarget;
        this.cm.show(event);
    }

    onHide() {
        this.selectedId = undefined;
    }
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["context-menu-template-demo"]],viewQuery:function(o,a){if(o&1&&V(De,5),o&2){let p;k(p=A())&&(a.cm=p.first)}},decls:14,vars:3,consts:[["cm",""],["item",""],[1,"card","flex","md:justify-center"],[1,"m-0","p-0","list-none","border","border-surface-200","dark:border-surface-700","rounded","p-4","flex","flex-col","gap-2","w-full","md:w-[30rem]"],["class","p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded border border-transparent transition-all transition-duration-200",3,"ngClass","contextmenu",4,"ngFor","ngForOf"],[3,"onHide","model"],["selector","context-menu-template-demo",3,"code"],[1,"p-2","hover:bg-surface-100","dark:hover:bg-surface-800","rounded","border","border-transparent","transition-all","transition-duration-200",3,"contextmenu","ngClass"],[1,"flex","flex-wrap","p-2","items-center","gap-4"],[1,"w-16","shrink-0","rounded",3,"src","alt"],[1,"flex-1","flex","flex-col","gap-1"],[1,"font-bold"],[1,"flex","items-center","gap-2"],[1,"pi","pi-tag","text-sm"],[1,"font-bold","ml-8"],["pRipple","",1,"flex","items-center","p-contextmenu-item-link"],[1,"ml-2"],["class","ml-auto",3,"value",4,"ngIf"],["class","ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1",4,"ngIf"],["class","pi pi-angle-right ml-auto",4,"ngIf"],[1,"ml-auto",3,"value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],[1,"pi","pi-angle-right","ml-auto"]],template:function(o,a){if(o&1){let p=y();t(0,"app-docsectiontext")(1,"p"),e(2,"ContextMenu offers item customization with the "),t(3,"i"),e(4,"item"),n(),e(5," template that receives the menuitem instance from the model as a parameter."),n()(),t(6,"div",2)(7,"ul",3),D(8,Te,12,9,"li",4),n(),t(9,"p-contextmenu",5,0),C("onHide",function(){return b(p),v(a.onHide())}),D(11,ke,7,6,"ng-template",null,1,$),n()(),s(13,"app-code",6)}o&2&&(l(8),m("ngForOf",a.data),l(),m("model",a.items),l(4),m("code",a.code))},dependencies:[w,j,B,z,f,g,X,J,Y,u,d],encapsulation:2})}return i})();var Ae=()=>["ContextMenu","MenuItem"],he=(()=>{class i{docs=[{id:"import",label:"Import",component:pe},{id:"basic",label:"Basic",component:le},{id:"document",label:"Document",component:ce},{id:"template",label:"Template",component:xe},{id:"command",label:"Command",component:se},{id:"router",label:"Router",component:ge},{id:"table",label:"Table",component:fe},{id:"accessibility",label:"Accessibility",component:me}];ptComponent=ue;static \u0275fac=function(o){return new(o||i)};static \u0275cmp=c({type:i,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ContextMenu Component","header","ContextMenu","description","ContextMenu displays an overlay menu on right click of its target.","themeDocs","contextmenu",3,"docs","apiDocs","ptDocs"]],template:function(o,a){o&1&&s(0,"app-doc",0),o&2&&m("docs",a.docs)("apiDocs",O(3,Ae))("ptDocs",a.ptComponent)},dependencies:[re],encapsulation:2})}return i})();var Rt=[{path:"",component:he}];export{Rt as default};
