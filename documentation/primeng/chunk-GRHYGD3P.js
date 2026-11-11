import{a as y,b as g}from"./chunk-W7EEBIZF.js";import"./chunk-KBVWLYPF.js";import{a as w,b as L}from"./chunk-JNUBCW5H.js";import{a as f,b}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as F}from"./chunk-FKOOMXTU.js";import{a as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as j}from"./chunk-XCUGNKAG.js";import{a as S,b as P}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{h}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import{za as d}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as x}from"./chunk-D2XKNHFS.js";import{$a as C,Eb as s,Fb as e,Gb as i,Gc as R,Hb as c,Ob as A,Qa as l,Sb as p,aa as E,ba as B,gb as u,hc as o,mb as U,rc as _,sc as I}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var z=(()=>{class n{code={basic:`<p-splitbutton [buttonProps]="{'aria-label': 'Default Action'}" [menuButtonProps]="{'aria-label': 'More Options'}" />`};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["split-button-accessibility-doc"]],decls:143,vars:4,consts:[[3,"code","hideToggleCode","hideStackBlitz","hideCodeSandbox"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),i(),e(3,"p"),o(4," SplitButton component renders two native button elements, main button uses the label property to define "),e(5,"i"),o(6,"aria-label"),i(),o(7," by default which can be customized with "),e(8,"i"),o(9,"buttonProps"),i(),o(10,". Dropdown button requires an explicit definition to describe it using "),e(11,"i"),o(12,"menuButtonProps"),i(),o(13," option and also includes "),e(14,"i"),o(15,"aria-haspopup"),i(),o(16,", "),e(17,"i"),o(18,"aria-expanded"),i(),o(19," for states along with "),e(20,"i"),o(21,"aria-controls"),i(),o(22," to define the relation between the popup and the button. "),i(),e(23,"p"),o(24,"The popup overlay uses "),e(25,"i"),o(26,"menu"),i(),o(27," role on the list and each action item has a "),e(28,"i"),o(29,"menuitem"),i(),o(30," role with an "),e(31,"i"),o(32,"aria-label"),i(),o(33," as the menuitem label. The id of the menu refers to the "),e(34,"i"),o(35,"aria-controls"),i(),o(36," of the dropdown button."),i()(),c(37,"app-code",0),e(38,"h3"),o(39,"Main Button Keyboard Support"),i(),e(40,"div",1)(41,"table",2)(42,"thead")(43,"tr")(44,"th"),o(45,"Key"),i(),e(46,"th"),o(47,"Function"),i()()(),e(48,"tbody")(49,"tr")(50,"td")(51,"i"),o(52,"enter"),i()(),e(53,"td"),o(54,"Activates the button."),i()(),e(55,"tr")(56,"td")(57,"i"),o(58,"space"),i()(),e(59,"td"),o(60,"Activates the button."),i()()()()(),e(61,"h3"),o(62,"Menu Button Keyboard Support"),i(),e(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),o(68,"Key"),i(),e(69,"th"),o(70,"Function"),i()()(),e(71,"tbody")(72,"tr")(73,"td")(74,"i"),o(75,"enter"),i()(),e(76,"td"),o(77,"Toggles the visibility of the menu."),i()(),e(78,"tr")(79,"td")(80,"i"),o(81,"space"),i()(),e(82,"td"),o(83,"Toggles the visibility of the menu."),i()(),e(84,"tr")(85,"td")(86,"i"),o(87,"down arrow"),i()(),e(88,"td"),o(89,"Opens the menu and moves focus to the first item."),i()(),e(90,"tr")(91,"td")(92,"i"),o(93,"up arrow"),i()(),e(94,"td"),o(95,"Opens the menu and moves focus to the last item."),i()()()()(),e(96,"h3"),o(97,"Menu Keyboard Support"),i(),e(98,"div",1)(99,"table",2)(100,"thead")(101,"tr")(102,"th"),o(103,"Key"),i(),e(104,"th"),o(105,"Function"),i()()(),e(106,"tbody")(107,"tr")(108,"td")(109,"i"),o(110,"enter"),i()(),e(111,"td"),o(112,"Actives the menuitem, closes the menu and sets focus on the menu button."),i()(),e(113,"tr")(114,"td")(115,"i"),o(116,"escape"),i()(),e(117,"td"),o(118,"Closes the menu and sets focus on the menu button."),i()(),e(119,"tr")(120,"td")(121,"i"),o(122,"down arrow"),i()(),e(123,"td"),o(124,"Moves focus to the next item, if it is the last one then first item receives the focus."),i()(),e(125,"tr")(126,"td")(127,"i"),o(128,"up arrow"),i()(),e(129,"td"),o(130,"Moves focus to the previous item, if it is the first one then last item receives the focus."),i()(),e(131,"tr")(132,"td")(133,"i"),o(134,"home"),i()(),e(135,"td"),o(136,"Moves focus to the first item."),i()(),e(137,"tr")(138,"td")(139,"i"),o(140,"end"),i()(),e(141,"td"),o(142,"Moves focus to the last item."),i()()()()()),a&2&&(l(37),s("code",t.code)("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0))},dependencies:[v,S],encapsulation:2})}return n})();var O=(()=>{class n{messageService;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}items;save(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Updated",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}code={basic:'<p-splitbutton label="Save" (onClick)="save()" [model]="items" />',html:`<div class="card flex justify-center">
    <p-toast />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-basic-demo',
    templateUrl: './split-button-basic-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonBasicDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

     save() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["basic-doc"]],features:[_([d])],decls:10,vars:2,consts:[[1,"card","flex","justify-center"],["label","Save",3,"onClick","model"],["selector","split-button-basic-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"SplitButton has a default action button and a collection of additional options defined by the "),e(3,"i"),o(4,"model"),i(),o(5," property based on MenuModel API."),i()(),e(6,"div",0),c(7,"p-toast"),e(8,"p-splitbutton",1),p("onClick",function(){return t.save()}),i()(),c(9,"app-code",2)),a&2&&(l(8),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var N=(()=>{class n{messageService;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}items;save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" [disabled]="true" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-splitbutton label="Save" icon="pi pi-plus" (onClick)="save('info')" [model]="items" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-disabled-demo',
    templateUrl: './split-button-disabled-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonDisabledDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["disabled-doc"]],features:[_([d])],decls:16,vars:3,consts:[[1,"card","flex","justify-center"],["label","Save","icon","pi pi-plus",3,"onClick","model","disabled"],["selector","split-button-disabled-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2," When the "),e(3,"i"),o(4,"disabled"),i(),o(5," attribute is present, the element is uneditable and unfocused. Additionally, the disabled states of the button and menu button can be handled independently. The button is disabled when "),e(6,"i"),o(7,"buttonDisabled"),i(),o(8," is present, and the menu button is disabled when "),e(9,"i"),o(10,"menuButtonDisabled"),i(),o(11," is present. "),i()(),e(12,"div",0),c(13,"p-toast"),e(14,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i()(),c(15,"app-code",2)),a&2&&(l(14),s("model",t.items)("disabled",!0),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var W=(()=>{class n{messageService;items;code={basic:'<p-splitbutton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" [model]="items" />',html:`<div class="card flex justify-center">
    <p-toast />
    <p-splitbutton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" [model]="items" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-icons-demo',
    templateUrl: './split-button-icons-demo.html',
    standalone: true,
    imports: [SplitButtonModule, ToastModule],
    providers: [MessageService]
})
export class SplitButtonIconsDemo {
    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                },
            },
            {
                separator: true,
            },
            {
                label: 'Quit',
                icon: 'pi pi-power-off',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                },
            },
        ];
    }
}`};constructor(r){this.messageService=r,this.items=[{label:"Update",icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{separator:!0},{label:"Quit",icon:"pi pi-power-off",command:()=>{window.open("https://angular.io/","_blank")}}]}static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["icons-doc"]],features:[_([d])],decls:7,vars:2,consts:[[1,"card","flex","justify-center"],["label","Save","icon","pi pi-check","dropdownIcon","pi pi-cog",3,"model"],["selector","split-button-icons-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"The buttons and menuitems have support to display icons."),i()(),e(3,"div",0),c(4,"p-toast")(5,"p-splitbutton",1),i(),c(6,"app-code",2)),a&2&&(l(5),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f],encapsulation:2})}return n})();var H=(()=>{class n{code={typescript:"import { SplitButtonModule } from 'primeng/splitbutton';"};static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["split-button-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,t){a&1&&c(0,"app-code",0),a&2&&s("code",t.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return n})();var V=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}code={basic:`<p-splitbutton label="Save" (onClick)="save('info')" [model]="items" />`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-splitbutton label="Save" (onClick)="save('info')" [model]="items" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-nested-demo',
    templateUrl: './split-button-nested-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonNestedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                separator: true
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["nested-doc"]],features:[_([d])],decls:10,vars:2,consts:[[1,"card","flex","justify-center"],["label","Save",3,"onClick","model"],["selector","split-button-nested-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"SplitButton has a default action button and a collection of additional options defined by the "),e(3,"i"),o(4,"model"),i(),o(5," property based on MenuModel API."),i()(),e(6,"div",0),c(7,"p-toast"),e(8,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i()(),c(9,"app-code",2)),a&2&&(l(8),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f],encapsulation:2})}return n})();var K=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" outlined />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" outlined severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" outlined severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" outlined severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" outlined severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" outlined severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" outlined severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" outlined severity="contrast" />`,html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-toast />
    <p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" outlined />
    <p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" outlined severity="secondary" />
    <p-splitbutton label="Success" [model]="items" (onClick)="save('info')" outlined severity="success" />
    <p-splitbutton label="Info" [model]="items" (onClick)="save('info')" outlined severity="info" />
    <p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" outlined severity="warn" />
    <p-splitbutton label="Help" [model]="items" (onClick)="save('info')" outlined severity="help" />
    <p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" outlined severity="danger" />
    <p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" outlined severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-outlined-demo',
    templateUrl: './split-button-outlined-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonOutlinedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["outlined-doc"]],features:[_([d])],decls:14,vars:9,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Primary","outlined","",3,"onClick","model"],["label","Secondary","outlined","","severity","secondary",3,"onClick","model"],["label","Success","outlined","","severity","success",3,"onClick","model"],["label","Info","outlined","","severity","info",3,"onClick","model"],["label","Warning","outlined","","severity","warn",3,"onClick","model"],["label","Help","outlined","","severity","help",3,"onClick","model"],["label","Danger","outlined","","severity","danger",3,"onClick","model"],["label","Contrast","outlined","","severity","contrast",3,"onClick","model"],["selector","split-button-outlined-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Outlined buttons display a border without a background initially."),i()(),e(3,"div",0),c(4,"p-toast"),e(5,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i(),e(6,"p-splitbutton",2),p("onClick",function(){return t.save("info")}),i(),e(7,"p-splitbutton",3),p("onClick",function(){return t.save("info")}),i(),e(8,"p-splitbutton",4),p("onClick",function(){return t.save("info")}),i(),e(9,"p-splitbutton",5),p("onClick",function(){return t.save("info")}),i(),e(10,"p-splitbutton",6),p("onClick",function(){return t.save("info")}),i(),e(11,"p-splitbutton",7),p("onClick",function(){return t.save("info")}),i(),e(12,"p-splitbutton",8),p("onClick",function(){return t.save("info")}),i()(),c(13,"app-code",9)),a&2&&(l(5),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var Q=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" raised />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" raised severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" raised severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" raised severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" raised severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" raised severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" raised severity="danger" />
<p-splitbutton label="Contrast" (onClick)="save('info')" [model]="items" severity="contrast" />`,html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-toast />
    <p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" raised />
    <p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" raised severity="secondary" />
    <p-splitbutton label="Success" [model]="items" (onClick)="save('info')" raised severity="success" />
    <p-splitbutton label="Info" [model]="items" (onClick)="save('info')" raised severity="info" />
    <p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" raised severity="warn" />
    <p-splitbutton label="Help" [model]="items" (onClick)="save('info')" raised severity="help" />
    <p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" raised severity="danger" />
    <p-splitbutton label="Contrast" (onClick)="save('info')" [model]="items" severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-raised-demo',
    templateUrl: './split-button-raised-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonRaisedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["raised-doc"]],features:[_([d])],decls:14,vars:9,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Primary","raised","",3,"onClick","model"],["label","Secondary","raised","","severity","secondary",3,"onClick","model"],["label","Success","raised","","severity","success",3,"onClick","model"],["label","Info","raised","","severity","info",3,"onClick","model"],["label","Warning","raised","","severity","warn",3,"onClick","model"],["label","Help","raised","","severity","help",3,"onClick","model"],["label","Danger","raised","","severity","danger",3,"onClick","model"],["label","Contrast","severity","contrast",3,"onClick","model"],["selector","split-button-raised-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Raised buttons display a shadow to indicate elevation."),i()(),e(3,"div",0),c(4,"p-toast"),e(5,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i(),e(6,"p-splitbutton",2),p("onClick",function(){return t.save("info")}),i(),e(7,"p-splitbutton",3),p("onClick",function(){return t.save("info")}),i(),e(8,"p-splitbutton",4),p("onClick",function(){return t.save("info")}),i(),e(9,"p-splitbutton",5),p("onClick",function(){return t.save("info")}),i(),e(10,"p-splitbutton",6),p("onClick",function(){return t.save("info")}),i(),e(11,"p-splitbutton",7),p("onClick",function(){return t.save("info")}),i(),e(12,"p-splitbutton",8),p("onClick",function(){return t.save("info")}),i()(),c(13,"app-code",9)),a&2&&(l(5),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var G=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" raised text />
<p-spliButton label="Secondary" [model]="items" (onClick)="save('info')" raised text severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" raised text severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" raised text severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" raised text severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" raised text severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" raised text severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" raised text severity="contrast" />`,html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-toast />
    <p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" raised text />
    <p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" raised text severity="secondary" />
    <p-splitbutton label="Success" [model]="items" (onClick)="save('info')" raised text severity="success" />
    <p-splitbutton label="Info" [model]="items" (onClick)="save('info')" raised text severity="info" />
    <p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" raised text severity="warn" />
    <p-splitbutton label="Help" [model]="items" (onClick)="save('info')" raised text severity="help" />
    <p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" raised text severity="danger" />
    <p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" raised text severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-raised-text-demo',
    templateUrl: './split-button-raised-text-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonRaisedTextDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["raised-text-doc"]],features:[_([d])],decls:14,vars:9,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Primary","raised","","text","",3,"onClick","model"],["label","Secondary","raised","","text","","severity","secondary",3,"onClick","model"],["label","Success","raised","","text","","severity","success",3,"onClick","model"],["label","Info","raised","","text","","severity","info",3,"onClick","model"],["label","Warning","raised","","text","","severity","warn",3,"onClick","model"],["label","Help","raised","","text","","severity","help",3,"onClick","model"],["label","Danger","raised","","text","","severity","danger",3,"onClick","model"],["label","Contrast","raised","","text","","severity","contrast",3,"onClick","model"],["selector","split-button-raised-text-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Text buttons can be displayed as raised as well for elevation."),i()(),e(3,"div",0),c(4,"p-toast"),e(5,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i(),e(6,"p-splitbutton",2),p("onClick",function(){return t.save("info")}),i(),e(7,"p-splitbutton",3),p("onClick",function(){return t.save("info")}),i(),e(8,"p-splitbutton",4),p("onClick",function(){return t.save("info")}),i(),e(9,"p-splitbutton",5),p("onClick",function(){return t.save("info")}),i(),e(10,"p-splitbutton",6),p("onClick",function(){return t.save("info")}),i(),e(11,"p-splitbutton",7),p("onClick",function(){return t.save("info")}),i(),e(12,"p-splitbutton",8),p("onClick",function(){return t.save("info")}),i()(),c(13,"app-code",9)),a&2&&(l(5),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var J=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" rounded />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" rounded severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" rounded severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" rounded severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" rounded severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" rounded severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" rounded severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" rounded severity="contrast" />`,html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-toast />
    <p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" rounded />
    <p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" rounded severity="secondary" />
    <p-splitbutton label="Success" [model]="items" (onClick)="save('info')" rounded severity="success" />
    <p-splitbutton label="Info" [model]="items" (onClick)="save('info')" rounded severity="info" />
    <p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" rounded severity="warn" />
    <p-splitbutton label="Help" [model]="items" (onClick)="save('info')" rounded severity="help" />
    <p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" rounded severity="danger" />
    <p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" rounded severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-rounded-demo',
    templateUrl: './split-button-rounded-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonRoundedDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["rounded-doc"]],features:[_([d])],decls:14,vars:9,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Primary","rounded","",3,"onClick","model"],["label","Secondary","rounded","","severity","secondary",3,"onClick","model"],["label","Success","rounded","","severity","success",3,"onClick","model"],["label","Info","rounded","","severity","info",3,"onClick","model"],["label","Warning","rounded","","severity","warn",3,"onClick","model"],["label","Help","rounded","","severity","help",3,"onClick","model"],["label","Danger","rounded","","severity","danger",3,"onClick","model"],["label","Contrast","rounded","","severity","contrast",3,"onClick","model"],["selector","split-button-rounded-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Rounded buttons have a circular border radius."),i()(),e(3,"div",0),c(4,"p-toast"),e(5,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i(),e(6,"p-splitbutton",2),p("onClick",function(){return t.save("info")}),i(),e(7,"p-splitbutton",3),p("onClick",function(){return t.save("info")}),i(),e(8,"p-splitbutton",4),p("onClick",function(){return t.save("info")}),i(),e(9,"p-splitbutton",5),p("onClick",function(){return t.save("info")}),i(),e(10,"p-splitbutton",6),p("onClick",function(){return t.save("info")}),i(),e(11,"p-splitbutton",7),p("onClick",function(){return t.save("info")}),i(),e(12,"p-splitbutton",8),p("onClick",function(){return t.save("info")}),i()(),c(13,"app-code",9)),a&2&&(l(5),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var q=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}save(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Updated",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Save" (onClick)="save()" [model]="items" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="secondary" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="success" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="info" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="warn" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="help" />
<p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="danger" />`,html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-toast />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="secondary" />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="success" />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="info" />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="warn" />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="help" />
    <p-splitbutton label="Save" (onClick)="save()" [model]="items" severity="danger" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-severity-demo',
    templateUrl: './split-button-severity-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonSeverityDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["severity-doc"]],features:[_([d])],decls:17,vars:9,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Save",3,"onClick","model"],["label","Save","severity","secondary",3,"onClick","model"],["label","Save","severity","success",3,"onClick","model"],["label","Save","severity","info",3,"onClick","model"],["label","Save","severity","warn",3,"onClick","model"],["label","Save","severity","help",3,"onClick","model"],["label","Save","severity","danger",3,"onClick","model"],["label","Save","severity","contrast",3,"onClick","model"],["selector","split-button-severity-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"The "),e(3,"i"),o(4,"severity"),i(),o(5," property defines the type of button."),i()(),e(6,"div",0),c(7,"p-toast"),e(8,"p-splitbutton",1),p("onClick",function(){return t.save()}),i(),e(9,"p-splitbutton",2),p("onClick",function(){return t.save()}),i(),e(10,"p-splitbutton",3),p("onClick",function(){return t.save()}),i(),e(11,"p-splitbutton",4),p("onClick",function(){return t.save()}),i(),e(12,"p-splitbutton",5),p("onClick",function(){return t.save()}),i(),e(13,"p-splitbutton",6),p("onClick",function(){return t.save()}),i(),e(14,"p-splitbutton",7),p("onClick",function(){return t.save()}),i(),e(15,"p-splitbutton",8),p("onClick",function(){return t.save()}),i()(),c(16,"app-code",9)),a&2&&(l(8),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var X=(()=>{class n{messageService;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}items;save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Small" [model]="items" (onClick)="save('info')" size="small" />
<p-splitbutton label="Normal" [model]="items" (onClick)="save('info')" />
<p-splitbutton label="Large" [model]="items" (onClick)="save('info')" size="large" />`,html:`<div class="card flex flex-wrap gap-4 justify-center">
    <p-toast />
    <p-splitbutton label="Small" [model]="items" (onClick)="save('info')" size="small" />
    <p-splitbutton label="Normal" [model]="items" (onClick)="save('info')" />
    <p-splitbutton label="Large" [model]="items" (onClick)="save('info')" size="large" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-sizes-demo',
    templateUrl: './split-button-sizes-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonSizesDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["sizes-doc"]],features:[_([d])],decls:15,vars:4,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["label","Small","size","small",3,"onClick","model"],["label","Normal",3,"onClick","model"],["label","Large","size","large",3,"onClick","model"],["selector","split-button-sizes-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"SplitButton provides "),e(3,"i"),o(4,"small"),i(),o(5," and "),e(6,"i"),o(7,"large"),i(),o(8," sizes as alternatives to the standard."),i()(),e(9,"div",0),c(10,"p-toast"),e(11,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i(),e(12,"p-splitbutton",2),p("onClick",function(){return t.save("info")}),i(),e(13,"p-splitbutton",3),p("onClick",function(){return t.save("info")}),i()(),c(14,"app-code",4)),a&2&&(l(11),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();function ie(n,se){n&1&&(e(0,"span",4),c(1,"img",5),e(2,"span"),o(3,"PrimeNG"),i()())}var Y=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}code={basic:`<p-splitbutton label="Save" (onClick)="save()" severity="contrast" [model]="items">
    <ng-template #content>
        <span class="flex items-center font-bold">
            <img alt="logo" src="/_ext/primefaces.org/cdn/primeng/images/logo.svg" style="height: 1rem; margin-right: 0.5rem" />
            <span>PrimeNG</span>
        </span>
    </ng-template>
</p-splitbutton>`,html:`<div class="card flex justify-center">
    <p-toast />
    <p-splitbutton label="Save" (onClick)="save()" severity="contrast" [model]="items">
        <ng-template #content>
            <span class="flex items-center font-bold">
                <img
                    alt="logo"
                    src="/_ext/primefaces.org/cdn/primeng/images/logo.svg"
                    style="height: 1rem; margin-right: 0.5rem" />
                <span>PrimeNG</span>
            </span>
        </ng-template>
    </p-splitbutton>
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-template-demo',
    templateUrl: './split-button-template-demo.html',
    standalone: true,
    imports: [SplitButtonModule, ToastModule],
    providers: [MessageService]
})
export class SplitButtonTemplateDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}`};save(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Updated",detail:"Data Updated"})}delete(){this.messageService.add({severity:"warn",summary:"Delete",detail:"Data Deleted"})}static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["template-doc"]],features:[_([d])],decls:12,vars:2,consts:[["content",""],[1,"card","flex","justify-center"],["label","Save","severity","contrast",3,"onClick","model"],["selector","split-button-template-demo",3,"code"],[1,"flex","items-center","font-bold"],["alt","logo","src","/_ext/primefaces.org/cdn/primeng/images/logo.svg",2,"height","1rem","margin-right","0.5rem"]],template:function(a,t){if(a&1){let m=A();e(0,"app-docsectiontext")(1,"p"),o(2,"SplitButton has a default action button and a collection of additional options defined by the "),e(3,"i"),o(4,"model"),i(),o(5," property based on MenuModel API."),i()(),e(6,"div",1),c(7,"p-toast"),e(8,"p-splitbutton",2),p("onClick",function(){return E(m),B(t.save())}),U(9,ie,4,0,"ng-template",null,0,R),i()(),c(11,"app-code",3)}a&2&&(l(8),s("model",t.items),l(3),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var Z=(()=>{class n{messageService;items;constructor(r){this.messageService=r,this.items=[{label:"Update",command:()=>{this.update()}},{label:"Delete",command:()=>{this.delete()}},{label:"Angular.dev",url:"https://angular.dev"},{separator:!0},{label:"Upload",routerLink:["/fileupload"]}]}save(r){this.messageService.add({severity:r,summary:"Success",detail:"Data Saved"})}update(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Updated"})}delete(){this.messageService.add({severity:"success",summary:"Success",detail:"Data Deleted"})}code={basic:`<p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" text />
<p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" text severity="secondary" />
<p-splitbutton label="Success" [model]="items" (onClick)="save('info')" text severity="success" />
<p-splitbutton label="Info" [model]="items" (onClick)="save('info')" text severity="info" />
<p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" text severity="warn" />
<p-splitbutton label="Help" [model]="items" (onClick)="save('info')" text severity="help" />
<p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" text severity="danger" />
<p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" text severity="contrast" />`,html:`<div class="card flex justify-center flex-wrap gap-4">
    <p-toast />
    <p-splitbutton label="Primary" [model]="items" (onClick)="save('info')" text />
    <p-splitbutton label="Secondary" [model]="items" (onClick)="save('info')" text severity="secondary" />
    <p-splitbutton label="Success" [model]="items" (onClick)="save('info')" text severity="success" />
    <p-splitbutton label="Info" [model]="items" (onClick)="save('info')" text severity="info" />
    <p-splitbutton label="Warning" [model]="items" (onClick)="save('info')" text severity="warn" />
    <p-splitbutton label="Help" [model]="items" (onClick)="save('info')" text severity="help" />
    <p-splitbutton label="Danger" [model]="items" (onClick)="save('info')" text severity="danger" />
    <p-splitbutton label="Contrast" [model]="items" (onClick)="save('info')" text severity="contrast" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'split-button-text-demo',
    templateUrl: './split-button-text-demo.html',
    standalone: true,
    imports: [SplitButton, ToastModule],
    providers: [MessageService]
})
export class SplitButtonTextDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.dev', url: 'https://angular.dev' },
            { separator: true },
            { label: 'Upload', routerLink: ['/fileupload'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`};static \u0275fac=function(a){return new(a||n)(C(d))};static \u0275cmp=u({type:n,selectors:[["text-doc"]],features:[_([d])],decls:14,vars:9,consts:[[1,"card","flex","justify-center","flex-wrap","gap-4"],["label","Primary","text","",3,"onClick","model"],["label","Secondary","text","","severity","secondary",3,"onClick","model"],["label","Success","text","","severity","success",3,"onClick","model"],["label","Info","text","","severity","info",3,"onClick","model"],["label","Warning","text","","severity","warn",3,"onClick","model"],["label","Help","text","","severity","help",3,"onClick","model"],["label","Danger","text","","severity","danger",3,"onClick","model"],["label","Contrast","text","","severity","contrast",3,"onClick","model"],["selector","split-button-text-demo",3,"code"]],template:function(a,t){a&1&&(e(0,"app-docsectiontext")(1,"p"),o(2,"Text buttons are displayed as textual elements."),i()(),e(3,"div",0),c(4,"p-toast"),e(5,"p-splitbutton",1),p("onClick",function(){return t.save("info")}),i(),e(6,"p-splitbutton",2),p("onClick",function(){return t.save("info")}),i(),e(7,"p-splitbutton",3),p("onClick",function(){return t.save("info")}),i(),e(8,"p-splitbutton",4),p("onClick",function(){return t.save("info")}),i(),e(9,"p-splitbutton",5),p("onClick",function(){return t.save("info")}),i(),e(10,"p-splitbutton",6),p("onClick",function(){return t.save("info")}),i(),e(11,"p-splitbutton",7),p("onClick",function(){return t.save("info")}),i(),e(12,"p-splitbutton",8),p("onClick",function(){return t.save("info")}),i()(),c(13,"app-code",9)),a&2&&(l(5),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("model",t.items),l(),s("code",t.code))},dependencies:[v,S,g,y,b,f,h],encapsulation:2})}return n})();var $=(()=>{class n{items;constructor(){this.items=[{label:"Update"},{label:"Delete"},{label:"Angular.dev",url:"https://angular.dev"}]}docs=[{data:w("SplitButton"),key:"SplitButton"}];static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["splitbutton-pt-viewer"]],decls:3,vars:2,consts:[[3,"docs"],["label","Save","icon","pi pi-check","dropdownIcon","pi pi-cog",3,"model"]],template:function(a,t){a&1&&(e(0,"app-docptviewer",0),c(1,"p-toast")(2,"p-splitbutton",1),i()),a&2&&(s("docs",t.docs),l(2),s("model",t.items))},dependencies:[x,L,g,y,b,f],encapsulation:2})}return n})();var ee=(()=>{class n{docs=[{id:"pt.viewer",label:"Viewer",component:$},{id:"pt.doc.splitbutton",label:"SplitButton PT Options",component:P,data:w("SplitButton")}];static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["splitbutton-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(a,t){a&1&&(e(0,"div",0)(1,"div",1)(2,"h1"),o(3,"SplitButton Pass Through"),i()(),c(4,"app-docsection",2),i()),a&2&&(l(4),s("docs",t.docs))},dependencies:[x,j],encapsulation:2})}return n})();var oe=()=>["SplitButton"],te=(()=>{class n{ptComponent=ee;docs=[{id:"import",label:"Import",component:H},{id:"basic",label:"Basic",component:O},{id:"icons",label:"Icons",component:W},{id:"nested",label:"Nested",component:V},{id:"severity",label:"Severity",component:q},{id:"disabled",label:"Disabled",component:N},{id:"raised",label:"Raised",component:Q},{id:"rounded",label:"Rounded",component:J},{id:"text",label:"Text",component:Z},{id:"raisedtext",label:"Raised Text",component:G},{id:"outlined",label:"Outlined",component:K},{id:"sizes",label:"Sizes",component:X},{id:"template",label:"Template",component:Y},{id:"accessibility",label:"Accessibility",component:z}];static \u0275fac=function(a){return new(a||n)};static \u0275cmp=u({type:n,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular SplitButton Component","header","SplitButton","description","SplitButton groups a set of commands in an overlay with a default action item.","themeDocs","splitbutton",3,"docs","apiDocs","ptDocs"]],template:function(a,t){a&1&&c(0,"app-doc",0),a&2&&s("docs",t.docs)("apiDocs",I(3,oe))("ptDocs",t.ptComponent)},dependencies:[F],encapsulation:2})}return n})();var vi=[{path:"",component:te}];export{vi as default};
