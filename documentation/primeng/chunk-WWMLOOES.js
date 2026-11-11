import{a as v,b as h}from"./chunk-TMBT6MYV.js";import{a as le,b as re}from"./chunk-GAIR2F33.js";import{a as b}from"./chunk-WD243CL4.js";import"./chunk-APBUBGZC.js";import"./chunk-RTRG5JID.js";import{a as ee,b as te}from"./chunk-SYFA2O3J.js";import{a as oe,b as ne}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import{a as K,b as L}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{f as Q,i as X,u as I}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ie}from"./chunk-FKOOMXTU.js";import{a as g}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as u}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as Y,ha as Z}from"./chunk-MCW4FHXZ.js";import{Ea as J,Ha as H,za as _}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as z}from"./chunk-D2XKNHFS.js";import{$a as y,Eb as a,Fb as i,Gb as o,Gc as W,Hb as p,La as B,Ob as $,Qa as d,Sb as D,Tc as V,aa as R,ba as P,cc as q,fc as G,gb as c,hc as e,ic as U,ja as m,mb as O,mc as w,nc as S,oc as k,rc as M,sc as A}from"./chunk-O3KMSE75.js";import{a as T,b as C}from"./chunk-GAL4ENT6.js";var ae=(()=>{class l{static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["tree-accessibility-doc"]],decls:109,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),o(),i(3,"p"),e(4," Value to describe the component can either be provided with "),i(5,"i"),e(6,"aria-labelledby"),o(),e(7," or "),i(8,"i"),e(9,"aria-label"),o(),e(10," props. The root list element has a "),i(11,"i"),e(12,"tree"),o(),e(13," role whereas each list item has a "),i(14,"i"),e(15,"treeitem"),o(),e(16," role along with "),i(17,"i"),e(18,"aria-label"),o(),e(19,", "),i(20,"i"),e(21,"aria-selected"),o(),e(22," and "),i(23,"i"),e(24,"aria-expanded"),o(),e(25," attributes. In checkbox selection, "),i(26,"i"),e(27,"aria-checked"),o(),e(28," is used instead of "),i(29,"i"),e(30,"aria-selected"),o(),e(31,". The container element of a treenode has the "),i(32,"i"),e(33,"group"),o(),e(34," role. Checkbox and toggle icons are hidden from screen readers as their parent element with "),i(35,"i"),e(36,"treeitem"),o(),e(37," role and attributes are used instead for readers and keyboard support. The "),i(38,"i"),e(39,"aria-setsize"),o(),e(40,", "),i(41,"i"),e(42,"aria-posinset"),o(),e(43," and "),i(44,"i"),e(45,"aria-level"),o(),e(46," attributes are calculated implicitly and added to each treeitem. "),o(),i(47,"h3"),e(48,"Keyboard Support"),o(),i(49,"div",0)(50,"table",1)(51,"thead")(52,"tr")(53,"th"),e(54,"Key"),o(),i(55,"th"),e(56,"Function"),o()()(),i(57,"tbody")(58,"tr")(59,"td")(60,"i"),e(61,"tab"),o()(),i(62,"td"),e(63," Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. "),o()(),i(64,"tr")(65,"td")(66,"i"),e(67,"shift"),o(),e(68," + "),i(69,"i"),e(70,"tab"),o()(),i(71,"td"),e(72," Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. "),o()(),i(73,"tr")(74,"td")(75,"i"),e(76,"enter"),o()(),i(77,"td"),e(78,"Selects the focused treenode."),o()(),i(79,"tr")(80,"td")(81,"i"),e(82,"space"),o()(),i(83,"td"),e(84,"Selects the focused treenode."),o()(),i(85,"tr")(86,"td")(87,"i"),e(88,"down arrow"),o()(),i(89,"td"),e(90,"Moves focus to the next treenode."),o()(),i(91,"tr")(92,"td")(93,"i"),e(94,"up arrow"),o()(),i(95,"td"),e(96,"Moves focus to the previous treenode."),o()(),i(97,"tr")(98,"td")(99,"i"),e(100,"right arrow"),o()(),i(101,"td"),e(102,"If node is closed, opens the node otherwise moves focus to the first child node."),o()(),i(103,"tr")(104,"td")(105,"i"),e(106,"left arrow"),o()(),i(107,"td"),e(108,"If node is open, closes the node otherwise moves focus to the parent node."),o()()()()()())},dependencies:[u],encapsulation:2})}return l})();var de=(()=>{class l{nodeService;files=m(void 0);constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files.set(t)})}code={basic:'<p-tree [value]="files()" class="w-full md:w-[30rem]" />',html:`<div class="card">
    <p-tree [value]="files()" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-basic-demo',
    templateUrl: './tree-basic-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeBasicDemo implements OnInit {
    files = signal<TreeNode[]>(undefined);

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files.set(data);
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card"],[1,"w-full","md:w-[30rem]",3,"value"],["selector","tree-basic-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Tree component requires an array of "),i(3,"i"),e(4,"TreeNode"),o(),e(5," objects as its "),i(6,"i"),e(7,"value"),o(),e(8,"."),o()(),i(9,"div",0),p(10,"p-tree",1),o(),p(11,"app-code",2)),n&2&&(d(10),a("value",r.files()),d(),a("code",r.code))},dependencies:[h,v,g,u],encapsulation:2})}return l})();var se=(()=>{class l{nodeService;files=m(void 0);selectedFiles;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files.set(t)})}code={basic:'<p-tree [value]="files()" selectionMode="checkbox" class="w-full md:w-[30rem]" [(selection)]="selectedFiles" />',html:`<div class="card">
    <p-tree [value]="files()" selectionMode="checkbox" class="w-full md:w-[30rem]" [(selection)]="selectedFiles" />
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-checkbox-demo',
    templateUrl: './tree-checkbox-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeCheckboxDemo implements OnInit {
    files = signal<TreeNode[]>(undefined);

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files.set(data);
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["checkbox-doc"]],decls:12,vars:3,consts:[[1,"card"],["selectionMode","checkbox",1,"w-full","md:w-[30rem]",3,"selectionChange","value","selection"],["selector","tree-checkbox-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Selection of multiple nodes via checkboxes is enabled by configuring "),i(3,"i"),e(4,"selectionMode"),o(),e(5," as "),i(6,"i"),e(7,"checkbox"),o(),e(8,"."),o()(),i(9,"div",0)(10,"p-tree",1),k("selectionChange",function(s){return S(r.selectedFiles,s)||(r.selectedFiles=s),s}),o()(),p(11,"app-code",2)),n&2&&(d(10),a("value",r.files()),w("selection",r.selectedFiles),d(),a("code",r.code))},dependencies:[h,v,I,g,u],encapsulation:2})}return l})();var Ee=()=>({marginTop:"80px"}),pe=(()=>{class l{nodeService;messageService;files=m([]);selectedNode=V(null);contextMenuNode=V(null);items;constructor(t,n){this.nodeService=t,this.messageService=n}ngOnInit(){this.nodeService.getFiles().then(t=>this.files.set(t)),this.items=[{label:"View",icon:"pi pi-search",command:()=>this.viewFile(this.contextMenuNode())},{label:"Toggle",icon:"pi pi-sort",command:()=>this.toggleFile(this.contextMenuNode())}]}viewFile(t){t&&this.messageService.add({severity:"info",summary:"File Selected",detail:t.label})}toggleFile(t){t&&this.files.set(this.updateNodeInTree(this.files(),t.key,C(T({},t),{expanded:!t.expanded})))}updateNodeInTree(t,n,r){return t.map(f=>f.key===n?r:f.children?C(T({},f),{children:this.updateNodeInTree(f.children,n,r)}):f)}code={basic:`<p-tree [value]="files()" class="w-full md:w-80" selectionMode="single" [(selection)]="selectedNode" [(contextMenuSelection)]="contextMenuNode" [contextMenu]="cm" contextMenuSelectionMode="separate" />
<p-contextmenu #cm [model]="items" />`,html:`<div class="card">
    <p-toast [style]="{ marginTop: '80px' }" />
    <p-tree [value]="files()" class="w-full md:w-80" selectionMode="single" [(selection)]="selectedNode" [(contextMenuSelection)]="contextMenuNode" [contextMenu]="cm" contextMenuSelectionMode="separate" />
    <p-contextmenu #cm [model]="items" />
</div>`,typescript:`import { ChangeDetectionStrategy, Component, model, OnInit, signal } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'tree-context-menu-demo',
    templateUrl: './tree-context-menu-demo.html',
    standalone: true,
    imports: [Tree, ContextMenuModule, ToastModule],
    providers: [MessageService, NodeService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeContextMenuDemo implements OnInit {
    files = signal<TreeNode[]>([]);

    selectedNode = model<TreeNode | null>(null);

    contextMenuNode = model<TreeNode | null>(null);

    items!: MenuItem[];

    constructor(
        private nodeService: NodeService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.nodeService.getFiles().then((files) => this.files.set(files));

        this.items = [
            { label: 'View', icon: 'pi pi-search', command: () => this.viewFile(this.contextMenuNode()) },
            { label: 'Toggle', icon: 'pi pi-sort', command: () => this.toggleFile(this.contextMenuNode()) }
        ];
    }

    viewFile(node: TreeNode | null) {
        if (node) {
            this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.label });
        }
    }

    toggleFile(node: TreeNode | null) {
        if (node) {
            this.files.set(this.updateNodeInTree(this.files(), node.key, { ...node, expanded: !node.expanded }));
        }
    }

    updateNodeInTree(nodes: TreeNode[], key: string | undefined, updatedNode: TreeNode): TreeNode[] {
        return nodes.map((n) => {
            if (n.key === key) {
                return updatedNode;
            }
            if (n.children) {
                return { ...n, children: this.updateNodeInTree(n.children, key, updatedNode) };
            }
            return n;
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b),y(_))};static \u0275cmp=c({type:l,selectors:[["context-menu-doc"]],inputs:{selectedNode:[1,"selectedNode"],contextMenuNode:[1,"contextMenuNode"]},outputs:{selectedNode:"selectedNodeChange",contextMenuNode:"contextMenuNodeChange"},features:[M([_])],decls:15,vars:9,consts:[["cm",""],[1,"card"],["selectionMode","single","contextMenuSelectionMode","separate",1,"w-full","md:w-80",3,"selectionChange","contextMenuSelectionChange","value","selection","contextMenuSelection","contextMenu"],[3,"model"],["selector","tree-context-menu-demo",3,"code"]],template:function(n,r){if(n&1){let f=$();i(0,"app-docsectiontext")(1,"p"),e(2,"Tree has exclusive integration with ContextMenu using the "),i(3,"i"),e(4,"contextMenu"),o(),e(5," property along with the "),i(6,"i"),e(7,"contextMenuSelection"),o(),e(8," to manage the selection."),o()(),i(9,"div",1),p(10,"p-toast"),i(11,"p-tree",2),k("selectionChange",function(F){return R(f),S(r.selectedNode,F)||(r.selectedNode=F),P(F)})("contextMenuSelectionChange",function(F){return R(f),S(r.contextMenuNode,F)||(r.contextMenuNode=F),P(F)}),o(),p(12,"p-contextmenu",3,0),o(),p(14,"app-code",4)}if(n&2){let f=q(13);d(10),G(A(8,Ee)),d(),a("value",r.files()),w("selection",r.selectedNode)("contextMenuSelection",r.contextMenuNode),a("contextMenu",f),d(),a("model",r.items),d(2),a("code",r.code)}},dependencies:[h,v,re,le,L,K,g,u],encapsulation:2,changeDetection:0})}return l})();var ce=(()=>{class l{nodeService;files=m(void 0);constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files.set(t)})}expandAll(){let t=this.files().map(n=>this.expandRecursive(n,!0));this.files.set(t)}collapseAll(){let t=this.files().map(n=>this.expandRecursive(n,!1));this.files.set(t)}expandRecursive(t,n){return C(T({},t),{expanded:n,children:t.children?t.children.map(r=>this.expandRecursive(r,n)):t.children})}code={basic:`<div class="flex flex-wrap gap-2 mb-6">
    <p-button icon="pi pi-plus" label="Expand all" (click)="expandAll()" />
    <p-button icon="pi pi-minus" label="Collapse all" (click)="collapseAll()" />
</div>
<p-tree [value]="files()" class="w-full md:w-[30rem]" />`,html:`<div class="card">
    <div class="flex flex-wrap gap-2 mb-6">
        <p-button icon="pi pi-plus" label="Expand all" (click)="expandAll()" />
        <p-button icon="pi pi-minus" label="Collapse all" (click)="collapseAll()" />
    </div>
    <p-tree [value]="files()" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tree-controlled-demo',
    templateUrl: './tree-controlled-demo.html',
    standalone: true,
    imports: [Tree, ButtonModule],
    providers: [NodeService]
})
export class TreeControlledDemo implements OnInit {
    files = signal<TreeNode[]>(undefined);

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files.set(data);
        });
    }

    expandAll() {
        const updatedFiles = this.files().map((node) => this.expandRecursive(node, true));
        this.files.set(updatedFiles);
    }

    collapseAll() {
        const updatedFiles = this.files().map((node) => this.expandRecursive(node, false));
        this.files.set(updatedFiles);
    }

    private expandRecursive(node: TreeNode, isExpand: boolean): TreeNode {
        return {
            ...node,
            expanded: isExpand,
            children: node.children ? node.children.map((child) => this.expandRecursive(child, isExpand)) : node.children
        };
    }

}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["controlled-doc"]],decls:15,vars:2,consts:[[1,"card"],[1,"flex","flex-wrap","gap-2","mb-6"],["icon","pi pi-plus","label","Expand all",3,"click"],["icon","pi pi-minus","label","Collapse all",3,"click"],[1,"w-full","md:w-[30rem]",3,"value"],["selector","tree-controlled-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Tree requires a collection of "),i(3,"i"),e(4,"TreeNode"),o(),e(5," instances as a "),i(6,"i"),e(7,"value"),o(),e(8,"."),o()(),i(9,"div",0)(10,"div",1)(11,"p-button",2),D("click",function(){return r.expandAll()}),o(),i(12,"p-button",3),D("click",function(){return r.collapseAll()}),o()(),p(13,"p-tree",4),o(),p(14,"app-code",5)),n&2&&(d(13),a("value",r.files()),d(),a("code",r.code))},dependencies:[h,v,Z,Y,g,u],encapsulation:2})}return l})();var Ce=()=>["first","second"];function _e(l,j){l&1&&e(0," No Items Left ")}function Ie(l,j){l&1&&e(0," Drag Nodes Here ")}function Fe(l,j){l&1&&e(0," Drag Nodes Here ")}var me=(()=>{class l{value1=m(void 0);value2=m(void 0);value3=m(void 0);ngOnInit(){this.value1.set([{key:"0",label:".github",data:".github folder",icon:"pi pi-fw pi-folder",children:[{key:"0-0",label:"workflows",data:"workflows folder",icon:"pi pi-fw pi-folder",children:[{key:"0-0-0",label:"node.js.yml",data:"node.js.yml file",icon:"pi pi-fw pi-file"}]}]},{key:"1",label:".vscode",data:".vscode folder",icon:"pi pi-fw pi-folder",children:[{key:"1-0",label:"extensions.json",data:"extensions.json file",icon:"pi pi-fw pi-file"}]},{key:"2",label:"public",data:"public folder",icon:"pi pi-fw pi-folder",children:[{key:"2-0",label:"vite.svg",data:"vite.svg file",icon:"pi pi-fw pi-file"}]},{key:"3",label:"src",data:"src folder",icon:"pi pi-fw pi-folder",children:[{key:"3-0",label:"assets",data:"assets folder",icon:"pi pi-fw pi-folder",children:[{key:"3-0-0",label:"vue.svg",data:"vue.svg file",icon:"pi pi-fw pi-file"}]},{key:"3-1",label:"components",data:"components folder",icon:"pi pi-fw pi-folder",children:[{key:"3-1-0",label:"HelloWorld.vue",data:"HelloWorld.vue file",icon:"pi pi-fw pi-file"}]},{key:"3-2",label:"App.vue",data:"App.vue file",icon:"pi pi-fw pi-file"},{key:"3-3",label:"main.js",data:"main.js file",icon:"pi pi-fw pi-file"},{key:"3-4",label:"style.css",data:"style.css file",icon:"pi pi-fw pi-file"}]},{key:"4",label:"index.html",data:"index.html file",icon:"pi pi-fw pi-file"},{key:"5",label:"package.json",data:"package.json file",icon:"pi pi-fw pi-file"},{key:"6",label:"vite.config.js",data:"vite.config.js file",icon:"pi pi-fw pi-file"}]),this.value2.set([{key:"1-0",label:"/etc",icon:"pi pi-fw pi-folder"}]),this.value3.set([])}code={basic:`<p-tree [value]="value1()" class="flex-1 border border-surface rounded-lg" [draggableNodes]="true" [droppableNodes]="true" draggableScope="first" droppableScope="none">
    <ng-template #empty> No Items Left </ng-template>
</p-tree>
<p-tree [value]="value2()" class="flex-1 border border-surface rounded-lg" [draggableNodes]="true" [droppableNodes]="true" draggableScope="second" droppableScope="first">
    <ng-template #empty> Drag Nodes Here </ng-template>
</p-tree>
<p-tree [value]="value3()" class="flex-1 border border-surface rounded-lg" [draggableNodes]="true" [droppableNodes]="true" [droppableScope]="['first', 'second']">
    <ng-template #empty> Drag Nodes Here </ng-template>
</p-tree>`,html:`<div class="card flex flex-col md:flex-row gap-4">
    <p-tree [value]="value1()" class="flex-1 border border-surface rounded-lg" [draggableNodes]="true" [droppableNodes]="true" draggableScope="first" droppableScope="none">
        <ng-template #empty> No Items Left </ng-template>
    </p-tree>
    <p-tree [value]="value2()" class="flex-1 border border-surface rounded-lg" [draggableNodes]="true" [droppableNodes]="true" draggableScope="second" droppableScope="first">
        <ng-template #empty> Drag Nodes Here </ng-template>
    </p-tree>
    <p-tree [value]="value3()" class="flex-1 border border-surface rounded-lg" [draggableNodes]="true" [droppableNodes]="true" [droppableScope]="['first', 'second']">
        <ng-template #empty> Drag Nodes Here </ng-template>
    </p-tree>
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-multiple-drag-drop-demo',
    templateUrl: './tree-multiple-drag-drop-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [TreeDragDropService],
    styles: [
        \`.p-tree-node-dragover {
                border: 1px dashed var(--p-primary-color);
        }\`
    ],
})
export class TreeMultipleDragDropDemo implements OnInit {
    value1 = signal<TreeNode[]>(undefined);

    value2 = signal<TreeNode[]>(undefined);

    value3 = signal<TreeNode[]>(undefined);

    ngOnInit() {
        this.value1.set([
            {
                key: '0',
                label: '.github',
                data: '.github folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '0-0',
                        label: 'workflows',
                        data: 'workflows folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '0-0-0',
                                label: 'node.js.yml',
                                data: 'node.js.yml file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    }
                ]
            },
            {
                key: '1',
                label: '.vscode',
                data: '.vscode folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '1-0',
                        label: 'extensions.json',
                        data: 'extensions.json file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '2',
                label: 'public',
                data: 'public folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '2-0',
                        label: 'vite.svg',
                        data: 'vite.svg file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '3',
                label: 'src',
                data: 'src folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '3-0',
                        label: 'assets',
                        data: 'assets folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '3-0-0',
                                label: 'vue.svg',
                                data: 'vue.svg file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    },
                    {
                        key: '3-1',
                        label: 'components',
                        data: 'components folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '3-1-0',
                                label: 'HelloWorld.vue',
                                data: 'HelloWorld.vue file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    },
                    {
                        key: '3-2',
                        label: 'App.vue',
                        data: 'App.vue file',
                        icon: 'pi pi-fw pi-file'
                    },
                    {
                        key: '3-3',
                        label: 'main.js',
                        data: 'main.js file',
                        icon: 'pi pi-fw pi-file'
                    },
                    {
                        key: '3-4',
                        label: 'style.css',
                        data: 'style.css file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '4',
                label: 'index.html',
                data: 'index.html file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '5',
                label: 'package.json',
                data: 'package.json file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '6',
                label: 'vite.config.js',
                data: 'vite.config.js file',
                icon: 'pi pi-fw pi-file'
            }
        ]);

        this.value2.set([
            {
                key: '1-0',
                label: '/etc',
                icon: 'pi pi-fw pi-folder'
            }
        ]);

        this.value3.set([]);
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["multiple-drag-drop-doc"]],features:[M([H])],decls:20,vars:12,consts:[["empty",""],[1,"card","flex","flex-col","md:flex-row","gap-4"],["draggableScope","first","droppableScope","none",1,"flex-1","border","border-surface","rounded-lg",3,"value","draggableNodes","droppableNodes"],["draggableScope","second","droppableScope","first",1,"flex-1","border","border-surface","rounded-lg",3,"value","draggableNodes","droppableNodes"],[1,"flex-1","border","border-surface","rounded-lg",3,"value","draggableNodes","droppableNodes","droppableScope"],["selector","tree-multiple-drag-drop-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Nodes can be transferred between multiple trees as well. The "),i(3,"i"),e(4,"draggableScope"),o(),e(5," and "),i(6,"i"),e(7,"droppableScope"),o(),e(8," properties defines keys to restrict the actions between trees. In this example, nodes can only be transferred from start to the end. "),o()(),i(9,"div",1)(10,"p-tree",2),O(11,_e,1,0,"ng-template",null,0,W),o(),i(13,"p-tree",3),O(14,Ie,1,0,"ng-template",null,0,W),o(),i(16,"p-tree",4),O(17,Fe,1,0,"ng-template",null,0,W),o()(),p(19,"app-code",5)),n&2&&(d(10),a("value",r.value1())("draggableNodes",!0)("droppableNodes",!0),d(3),a("value",r.value2())("draggableNodes",!0)("droppableNodes",!0),d(3),a("value",r.value3())("draggableNodes",!0)("droppableNodes",!0)("droppableScope",A(11,Ce)),d(3),a("code",r.code))},dependencies:[h,v,g,u],styles:[".p-tree-node-dragover[_ngcontent-%COMP%]{border:1px dashed var(--p-primary-color)}"]})}return l})();var fe=(()=>{class l{files=m(void 0);ngOnInit(){this.files.set([{key:"0",label:".github",data:".github folder",icon:"pi pi-fw pi-folder",children:[{key:"0-0",label:"workflows",data:"workflows folder",icon:"pi pi-fw pi-folder",children:[{key:"0-0-0",label:"node.js.yml",data:"node.js.yml file",icon:"pi pi-fw pi-file"}]}]},{key:"1",label:".vscode",data:".vscode folder",icon:"pi pi-fw pi-folder",children:[{key:"1-0",label:"extensions.json",data:"extensions.json file",icon:"pi pi-fw pi-file"}]},{key:"2",label:"public",data:"public folder",icon:"pi pi-fw pi-folder",children:[{key:"2-0",label:"vite.svg",data:"vite.svg file",icon:"pi pi-fw pi-file"}]},{key:"3",label:"src",data:"src folder",icon:"pi pi-fw pi-folder",children:[{key:"3-0",label:"assets",data:"assets folder",icon:"pi pi-fw pi-folder",children:[{key:"3-0-0",label:"vue.svg",data:"vue.svg file",icon:"pi pi-fw pi-file"}]},{key:"3-1",label:"components",data:"components folder",icon:"pi pi-fw pi-folder",children:[{key:"3-1-0",label:"HelloWorld.vue",data:"HelloWorld.vue file",icon:"pi pi-fw pi-file"}]},{key:"3-2",label:"App.vue",data:"App.vue file",icon:"pi pi-fw pi-file"},{key:"3-3",label:"main.js",data:"main.js file",icon:"pi pi-fw pi-file"},{key:"3-4",label:"style.css",data:"style.css file",icon:"pi pi-fw pi-file"}]},{key:"4",label:"index.html",data:"index.html file",icon:"pi pi-fw pi-file"},{key:"5",label:"package.json",data:"package.json file",icon:"pi pi-fw pi-file"},{key:"6",label:"vite.config.js",data:"vite.config.js file",icon:"pi pi-fw pi-file"}])}code={basic:'<p-tree [value]="files()" class="w-full md:w-[30rem]" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />',html:`<div class="card">
    <p-tree [value]="files()" class="w-full md:w-[30rem]" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self" />
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-single-drag-drop-demo',
    templateUrl: './tree-single-drag-drop-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [TreeDragDropService]
})
export class TreeSingleDragDropDemo implements OnInit {
    files = signal<TreeNode[]>(undefined);

    ngOnInit() {
        this.files.set([
            {
                key: '0',
                label: '.github',
                data: '.github folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '0-0',
                        label: 'workflows',
                        data: 'workflows folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '0-0-0',
                                label: 'node.js.yml',
                                data: 'node.js.yml file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    }
                ]
            },
            {
                key: '1',
                label: '.vscode',
                data: '.vscode folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '1-0',
                        label: 'extensions.json',
                        data: 'extensions.json file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '2',
                label: 'public',
                data: 'public folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '2-0',
                        label: 'vite.svg',
                        data: 'vite.svg file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '3',
                label: 'src',
                data: 'src folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '3-0',
                        label: 'assets',
                        data: 'assets folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '3-0-0',
                                label: 'vue.svg',
                                data: 'vue.svg file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    },
                    {
                        key: '3-1',
                        label: 'components',
                        data: 'components folder',
                        icon: 'pi pi-fw pi-folder',
                        children: [
                            {
                                key: '3-1-0',
                                label: 'HelloWorld.vue',
                                data: 'HelloWorld.vue file',
                                icon: 'pi pi-fw pi-file'
                            }
                        ]
                    },
                    {
                        key: '3-2',
                        label: 'App.vue',
                        data: 'App.vue file',
                        icon: 'pi pi-fw pi-file'
                    },
                    {
                        key: '3-3',
                        label: 'main.js',
                        data: 'main.js file',
                        icon: 'pi pi-fw pi-file'
                    },
                    {
                        key: '3-4',
                        label: 'style.css',
                        data: 'style.css file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '4',
                label: 'index.html',
                data: 'index.html file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '5',
                label: 'package.json',
                data: 'package.json file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '6',
                label: 'vite.config.js',
                data: 'vite.config.js file',
                icon: 'pi pi-fw pi-file'
            }
        ]);
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["single-drag-drop-doc"]],features:[M([H])],decls:6,vars:4,consts:[[1,"card"],["draggableScope","self","droppableScope","self",1,"w-full","md:w-[30rem]",3,"value","draggableNodes","droppableNodes"],["selector","tree-single-drag-drop-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Nodes can be reordered within the same tree and also can be transferred between other trees using drag&drop."),o()(),i(3,"div",0),p(4,"p-tree",1),o(),p(5,"app-code",2)),n&2&&(d(4),a("value",r.files())("draggableNodes",!0)("droppableNodes",!0),d(),a("code",r.code))},dependencies:[h,v,g,u],encapsulation:2})}return l})();var ue=(()=>{class l{nodeService;messageService;files=m(void 0);selectedFile;constructor(t,n){this.nodeService=t,this.messageService=n}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files.set(t)})}nodeExpand(t){this.messageService.add({severity:"success",summary:"Node Expanded",detail:t.node.label})}nodeCollapse(t){this.messageService.add({severity:"warn",summary:"Node Collapsed",detail:t.node.label})}nodeSelect(t){this.messageService.add({severity:"info",summary:"Node Selected",detail:t.node.label})}nodeUnselect(t){this.messageService.add({severity:"info",summary:"Node Unselected",detail:t.node.label})}code={basic:'<p-tree [value]="files()" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)" />',html:`<div class="card">
    <p-toast />
    <p-tree [value]="files()" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)" />
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'tree-events-demo',
    templateUrl: './tree-events-demo.html',
    standalone: true,
    imports: [Tree, ToastModule],
    providers: [MessageService, NodeService]
})
export class TreeEventsDemo implements OnInit {
    files = signal<TreeNode[]>(undefined);

    selectedFile!: TreeNode;

    constructor(
        private nodeService: NodeService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files.set(data);
        });
    }

    nodeExpand(event: any) {
        this.messageService.add({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    }

    nodeCollapse(event: any) {
        this.messageService.add({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    }

    nodeSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    nodeUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b),y(_))};static \u0275cmp=c({type:l,selectors:[["event-doc"]],features:[M([_])],decls:7,vars:3,consts:[[1,"card"],["selectionMode","single",1,"w-full","md:w-[30rem]",3,"selectionChange","onNodeExpand","onNodeCollapse","onNodeSelect","onNodeUnselect","value","selection"],["selector","tree-events-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"An event is provided for each type of user interaction such as expand, collapse and selection."),o()(),i(3,"div",0),p(4,"p-toast"),i(5,"p-tree",1),k("selectionChange",function(s){return S(r.selectedFile,s)||(r.selectedFile=s),s}),D("onNodeExpand",function(s){return r.nodeExpand(s)})("onNodeCollapse",function(s){return r.nodeCollapse(s)})("onNodeSelect",function(s){return r.nodeSelect(s)})("onNodeUnselect",function(s){return r.nodeUnselect(s)}),o()(),p(6,"app-code",2)),n&2&&(d(5),a("value",r.files()),w("selection",r.selectedFile),d(),a("code",r.code))},dependencies:[h,v,I,L,K,g,u],encapsulation:2})}return l})();var ge=(()=>{class l{nodeService;files=m(void 0);files2=m(void 0);constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files.set(t),this.files2.set(t)})}code={basic:`<p-tree [value]="files()" [filter]="true" filterPlaceholder="Lenient Filter" />
<p-tree [value]="files2()" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <p-tree [value]="files()" [filter]="true" filterPlaceholder="Lenient Filter" />
    </div>
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <p-tree [value]="files2()" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter" />
    </div>
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-filter-demo',
    templateUrl: './tree-filter-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeFilterDemo implements OnInit {
    files = signal<TreeNode[]>(undefined);

    files2 = signal<TreeNode[]>(undefined);

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files.set(data);
            this.files2.set(data);
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["filter-doc"]],decls:24,vars:5,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto","md:flex","md:justify-start","md:items-center","flex-col"],["filterPlaceholder","Lenient Filter",3,"value","filter"],["filterMode","strict","filterPlaceholder","Strict Filter",3,"value","filter"],["selector","tree-filter-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Filtering is enabled by adding the "),i(3,"i"),e(4,"filter"),o(),e(5," property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define "),i(6,"i"),e(7,"filterBy"),o(),e(8," property. In addition "),i(9,"i"),e(10,"filterMode"),o(),e(11," specifies the filtering strategy. In "),i(12,"i"),e(13,"lenient"),o(),e(14," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),i(15,"i"),e(16,"strict"),o(),e(17," mode when the query matches a node, filtering continues on all descendants. "),o()(),i(18,"div",0)(19,"div",1),p(20,"p-tree",2),o(),i(21,"div",1),p(22,"p-tree",3),o()(),p(23,"app-code",4)),n&2&&(d(20),a("value",r.files())("filter",!0),d(2),a("value",r.files2())("filter",!0),d(),a("code",r.code))},dependencies:[h,v,g,u],encapsulation:2})}return l})();var ve=(()=>{class l{code={typescript:"import { TreeModule } from 'primeng/tree';"};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["tree-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&p(0,"app-code",0),n&2&&a("code",r.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2})}return l})();var he=(()=>{class l{loading=m(!1);nodes=m(void 0);nodes2=m(void 0);ngOnInit(){this.loading.set(!0),this.nodes2.set(this.initiateNodes2()),setTimeout(()=>{this.nodes.set(this.initiateNodes()),this.loading.set(!1),this.nodes2.set(this.nodes2().map(t=>C(T({},t),{loading:!1})))},2e3)}initiateNodes(){return[{key:"0",label:"Node 0",leaf:!1},{key:"1",label:"Node 1",leaf:!1},{key:"2",label:"Node 2",leaf:!1}]}initiateNodes2(){return[{key:"0",label:"Node 0",leaf:!1,loading:!0},{key:"1",label:"Node 1",leaf:!1,loading:!0},{key:"2",label:"Node 2",leaf:!1,loading:!0}]}onNodeExpand(t){t.node.children||(this.loading.set(!0),setTimeout(()=>{let n=this.nodes(),r=T({},t.node);r.children=[];for(let f=0;f<3;f++)r.children.push({key:t.node.key+"-"+f,label:"Lazy "+t.node.label+"-"+f});n[parseInt(t.node.key,10)]=r,this.nodes.set([...n]),this.loading.set(!1)},500))}onNodeExpand2(t){t.node.children||(t.node.loading=!0,setTimeout(()=>{let n=this.nodes2(),r=T({},t.node);r.children=[];for(let s=0;s<3;s++)r.children.push({key:t.node.key+"-"+s,label:"Lazy "+t.node.label+"-"+s});let f=parseInt(r.key,10);n[f]=C(T({},r),{loading:!1}),this.nodes2.set([...n])},500))}code={basic:`<p-tree class="w-full md:w-[30rem]" [value]="nodes()" (onNodeExpand)="onNodeExpand($event)" [loading]="loading()" />
<p-tree class="w-full md:w-[30rem]" [value]="nodes2()" loadingMode="icon" (onNodeExpand)="onNodeExpand2($event)" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <label for="mask" class="font-bold block mb-2">Mask Mode</label>
        <p-tree class="w-full md:w-[30rem]" [value]="nodes()" (onNodeExpand)="onNodeExpand($event)" [loading]="loading()" />
    </div>
    <div class="flex-auto md:flex md:justify-start md:items-center flex-col">
        <label for="icon" class="font-bold block mb-2">Icon Mode</label>
        <p-tree class="w-full md:w-[30rem]" [value]="nodes2()" loadingMode="icon" (onNodeExpand)="onNodeExpand2($event)" />
    </div>
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-lazy-demo',
    templateUrl: './tree-lazy-demo.html',
    standalone: true,
    imports: [Tree]
})
export class TreeLazyDemo implements OnInit {
    loading = signal<boolean>(false);

    nodes = signal<TreeNode[]>(undefined);

    nodes2 = signal<TreeNode[]>(undefined);

    ngOnInit() {
        this.loading.set(true);
        this.nodes2.set(this.initiateNodes2());

        setTimeout(() => {
            this.nodes.set(this.initiateNodes());
            this.loading.set(false);
            this.nodes2.set(this.nodes2().map((node) => ({ ...node, loading: false })));
        }, 2000);
    }

    initiateNodes(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    initiateNodes2(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false,
                loading: true
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false,
                loading: true
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false,
                loading: true
            }
        ];
    }

    onNodeExpand(event: any) {
        if (!event.node.children) {
            this.loading.set(true);

            setTimeout(() => {
                const _nodes = this.nodes();
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 3; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                _nodes[parseInt(event.node.key, 10)] = _node;
                this.nodes.set([..._nodes]);

                this.loading.set(false);
            }, 500);
        }
    }

    onNodeExpand2(event: any) {
        if (!event.node.children) {
            event.node.loading = true;

            setTimeout(() => {
                const _nodes2 = this.nodes2();
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 3; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                const key = parseInt(_node.key, 10);
                _nodes2[key] = { ..._node, loading: false };
                this.nodes2.set([..._nodes2]);
            }, 500);
        }
    }
}`,data:`{
    key: '0',
    label: 'Node 0',
    leaf: false
},
...`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["lazy-demo"]],decls:28,vars:4,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto","md:flex","md:justify-start","md:items-center","flex-col"],["for","mask",1,"font-bold","block","mb-2"],[1,"w-full","md:w-[30rem]",3,"onNodeExpand","value","loading"],["for","icon",1,"font-bold","block","mb-2"],["loadingMode","icon",1,"w-full","md:w-[30rem]",3,"onNodeExpand","value"],["selector","tree-lazy-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using "),i(3,"i"),e(4,"loading"),o(),e(5," property and "),i(6,"i"),e(7,"onNodeExpand"),o(),e(8," method. Default value of "),i(9,"i"),e(10,"loadingMode"),o(),e(11," is "),i(12,"i"),e(13,"mask"),o(),e(14," and also "),i(15,"i"),e(16,"icon"),o(),e(17," is available. "),o()(),i(18,"div",0)(19,"div",1)(20,"label",2),e(21,"Mask Mode"),o(),i(22,"p-tree",3),D("onNodeExpand",function(s){return r.onNodeExpand(s)}),o()(),i(23,"div",1)(24,"label",4),e(25,"Icon Mode"),o(),i(26,"p-tree",5),D("onNodeExpand",function(s){return r.onNodeExpand2(s)}),o()()(),p(27,"app-code",6)),n&2&&(d(22),a("value",r.nodes())("loading",r.loading()),d(4),a("value",r.nodes2()),d(),a("code",r.code))},dependencies:[h,v,g,u],encapsulation:2})}return l})();var ye=(()=>{class l{nodeService;metaKeySelection=!1;files=m(void 0);selectedFiles;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files.set(t)})}code={basic:`<div class="flex items-center mb-6 gap-2">
    <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
    <label for="input-metakey">MetaKey</label>
</div>
<p-tree [metaKeySelection]="metaKeySelection" [value]="files()" class="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />`,html:`<div class="card">
    <div class="flex items-center mb-6 gap-2">
        <p-toggleswitch inputId="input-metakey" [(ngModel)]="metaKeySelection" />
        <label for="input-metakey">MetaKey</label>
    </div>
    <p-tree [metaKeySelection]="metaKeySelection" [value]="files()" class="w-full md:w-[30rem]" selectionMode="multiple" [(selection)]="selectedFiles" />
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'tree-multiple-demo',
    templateUrl: './tree-multiple-demo.html',
    standalone: true,
    imports: [Tree, ToggleSwitchModule],
    providers: [NodeService]
})
export class TreeMultipleDemo implements OnInit {
    metaKeySelection: boolean = false;

    files = signal<TreeNode[]>(undefined);

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files.set(data);
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["multiple-doc"]],decls:24,vars:5,consts:[[1,"card"],[1,"flex","items-center","mb-6","gap-2"],["inputId","input-metakey",3,"ngModelChange","ngModel"],["for","input-metakey"],["selectionMode","multiple",1,"w-full","md:w-[30rem]",3,"selectionChange","metaKeySelection","value","selection"],["selector","tree-multiple-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," More than one node is selectable by setting "),i(3,"i"),e(4,"selectionMode"),o(),e(5," to "),i(6,"i"),e(7,"multiple"),o(),e(8,". By default in multiple selection mode, metaKey press (e.g. "),i(9,"i"),e(10,"\u2318"),o(),e(11,") is necessary to add to existing selections however this can be configured with disabling the "),i(12,"i"),e(13,"metaKeySelection"),o(),e(14," property. Note that in touch enabled devices, Tree always ignores metaKey. "),o(),i(15,"p"),e(16,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."),o()(),i(17,"div",0)(18,"div",1)(19,"p-toggleswitch",2),k("ngModelChange",function(s){return S(r.metaKeySelection,s)||(r.metaKeySelection=s),s}),o(),i(20,"label",3),e(21,"MetaKey"),o()(),i(22,"p-tree",4),k("selectionChange",function(s){return S(r.selectedFiles,s)||(r.selectedFiles=s),s}),o()(),p(23,"app-code",5)),n&2&&(d(19),w("ngModel",r.metaKeySelection),d(3),a("metaKeySelection",r.metaKeySelection)("value",r.files()),w("selection",r.selectedFiles),d(),a("code",r.code))},dependencies:[h,v,I,Q,X,te,ee,g,u],encapsulation:2})}return l})();var be=(()=>{class l{nodeService;nodes=m(void 0);selectedKey=null;docs=[{data:oe("Tree"),key:"Tree"}];constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getTreeNodes().then(t=>this.nodes.set(t))}static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["tree-pt-viewer"]],features:[M([b])],decls:2,vars:3,consts:[[3,"docs"],["filter","","selectionMode","checkbox",1,"w-full","md:w-[30rem]",3,"selectionChange","value","selection"]],template:function(n,r){n&1&&(i(0,"app-docptviewer",0)(1,"p-tree",1),k("selectionChange",function(s){return S(r.selectedKey,s)||(r.selectedKey=s),s}),o()()),n&2&&(a("docs",r.docs),d(),a("value",r.nodes()),w("selection",r.selectedKey))},dependencies:[z,ne,h,v],encapsulation:2})}return l})();var xe=(()=>{class l{static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["ng-component"]],decls:1,vars:0,template:function(n,r){n&1&&p(0,"tree-pt-viewer")},dependencies:[be],encapsulation:2})}return l})();var Se=(()=>{class l{nodeService;files=m(void 0);selectedFile;constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files.set(t)})}code={basic:'<p-tree [value]="files()" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" />',html:`<div class="card">
    <p-tree [value]="files()" class="w-full md:w-[30rem]" selectionMode="single" [(selection)]="selectedFile" />
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-single-demo',
    templateUrl: './tree-single-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeSingleDemo implements OnInit {
    files = signal<TreeNode[]>(undefined);

    selectedFile!: TreeNode;

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files.set(data);
        });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["single-doc"]],decls:15,vars:3,consts:[[1,"card"],["selectionMode","single",1,"w-full","md:w-[30rem]",3,"selectionChange","value","selection"],["selector","tree-single-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Single node selection is configured by setting "),i(3,"i"),e(4,"selectionMode"),o(),e(5," as "),i(6,"i"),e(7,"single"),o(),e(8," along with "),i(9,"i"),e(10,"selection"),o(),e(11," properties to manage the selection value binding."),o()(),i(12,"div",0)(13,"p-tree",1),k("selectionChange",function(s){return S(r.selectedFile,s)||(r.selectedFile=s),s}),o()(),p(14,"app-code",2)),n&2&&(d(13),a("value",r.files()),w("selection",r.selectedFile),d(),a("code",r.code))},dependencies:[h,v,I,g,u],encapsulation:2})}return l})();function je(l,j){if(l&1&&(i(0,"a",5),e(1),o()),l&2){let t=j.$implicit;a("href",t.data,B),d(),U(t.label)}}function Oe(l,j){if(l&1&&(i(0,"b"),e(1),o()),l&2){let t=j.$implicit;d(),U(t.label)}}var Ne=(()=>{class l{nodes=m(void 0);ngOnInit(){this.nodes.set([{key:"0",label:"Introduction",children:[{key:"0-0",label:"What is Angular",data:"https://angular.io",type:"url"},{key:"0-1",label:"Getting Started",data:"https://angular.io/guide/setup-local",type:"url"},{key:"0-2",label:"Learn and Explore",data:"https://angular.io/guide/architecture",type:"url"},{key:"0-3",label:"Take a Look",data:"https://angular.io/start",type:"url"}]},{key:"1",label:"Components In-Depth",children:[{key:"1-0",label:"Component Registration",data:"https://angular.io/guide/component-interaction",type:"url"},{key:"1-1",label:"User Input",data:"https://angular.io/guide/user-input",type:"url"},{key:"1-2",label:"Hooks",data:"https://angular.io/guide/lifecycle-hooks",type:"url"},{key:"1-3",label:"Attribute Directives",data:"https://angular.io/guide/attribute-directives",type:"url"}]}])}code={basic:`<p-tree [value]="nodes()" class="w-full md:w-[30rem]">
    <ng-template let-node pTemplate="url">
        <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-100 hover:text-primary">
            {{ node.label }}
        </a>
    </ng-template>
    <ng-template let-node pTemplate="default">
        <b>{{ node.label }}</b>
    </ng-template>
</p-tree>`,html:`<div class="card">
    <p-tree [value]="nodes()" class="w-full md:w-[30rem]">
        <ng-template let-node pTemplate="url">
            <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-surface-700 dark:text-surface-100 hover:text-primary">
               {{ node.label }}
            </a>
        </ng-template>
        <ng-template let-node pTemplate="default">
            <b>{{ node.label }}</b>
        </ng-template>
    </p-tree>
</div>`,typescript:`import { Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';

@Component({
    selector: 'tree-template-demo',
    templateUrl: './tree-template-demo.html',
    standalone: true,
    imports: [TreeModule]
})
export class TreeTemplateDemo implements OnInit {
    nodes = signal<TreeNode[]>(undefined);

    ngOnInit() {
        this.nodes.set([
            {
                key: '0',
                label: 'Introduction',
                children: [
                    { key: '0-0', label: 'What is Angular', data: 'https://angular.io', type: 'url' },
                    { key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url' },
                    { key: '0-2', label: 'Learn and Explore', data: 'https://angular.io/guide/architecture', type: 'url' },
                    { key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url' }
                ]
            },
            {
                key: '1',
                label: 'Components In-Depth',
                children: [
                    { key: '1-0', label: 'Component Registration', data: 'https://angular.io/guide/component-interaction', type: 'url' },
                    { key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url' },
                    { key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url' },
                    { key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url' }
                ]
            }
        ]);
    }
}`};static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["template-doc"]],decls:11,vars:2,consts:[[1,"card"],[1,"w-full","md:w-[30rem]",3,"value"],["pTemplate","url"],["pTemplate","default"],["selector","tree-template-demo",3,"code"],["target","_blank","rel","noopener noreferrer",1,"text-surface-700","dark:text-surface-100","hover:text-primary",3,"href"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Custom node content instead of a node label is defined with the "),i(3,"i"),e(4,"pTemplate"),o(),e(5," property."),o()(),i(6,"div",0)(7,"p-tree",1),O(8,je,2,2,"ng-template",2)(9,Oe,2,1,"ng-template",3),o()(),p(10,"app-code",4)),n&2&&(d(7),a("value",r.nodes()),d(3),a("code",r.code))},dependencies:[h,v,J,g,u,z],encapsulation:2})}return l})();var we=(()=>{class l{nodeService;nodes=m(void 0);constructor(t){this.nodeService=t}ngOnInit(){this.nodes.set(this.nodeService.generateNodes(150))}code={basic:'<p-tree [value]="nodes()" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="35" />',html:`<div class="card">
    <p-tree [value]="nodes()" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="35" />
</div>`,typescript:`import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-virtual-scroll-demo',
    templateUrl: './tree-virtual-scroll-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeVirtualScrollDemo implements OnInit {
    nodes = signal<TreeNode[]>(undefined);

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodes.set(this.nodeService.generateNodes(150));
    }
}`,service:["NodeService"],data:`
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {
    generateNodes(count: number): TreeNode[] {
        return this.createNodes(count);
    }

    createNodes(length: number, parentKey?: string): TreeNode[] {
        const _createNodes = (length: number, level: number, parentKey?: string): TreeNode[] => {
            const nodes: TreeNode[] = [];
            for (let i = 0; i < length; i++) {
                const key = parentKey ? \`\${parentKey}-\${i}\` : \`\${i}\`;
                nodes.push({
                    key,
                    label: \`Node \${key}\`,
                    children: level < 2 ? _createNodes(5, level + 1, key) : []
                });
            }
            return nodes;
        };
        return _createNodes(length, 0, parentKey);
    }
}
`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["virtual-scroll-doc"]],decls:12,vars:4,consts:[[1,"card"],["scrollHeight","250px",3,"value","virtualScroll","virtualScrollItemSize"],["selector","tree-virtual-scroll-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),i(3,"i"),e(4,"virtualScroll"),o(),e(5," property as true and providing a "),i(6,"i"),e(7,"virtualScrollItemSize"),o(),e(8," in pixels would be enough to enable this functionality."),o()(),i(9,"div",0),p(10,"p-tree",1),o(),p(11,"app-code",2)),n&2&&(d(10),a("value",r.nodes())("virtualScroll",!0)("virtualScrollItemSize",35),d(),a("code",r.code))},dependencies:[h,v,g,u],encapsulation:2})}return l})();var ke=(()=>{class l{nodeService;loading=m(!1);nodes=m(void 0);constructor(t){this.nodeService=t}ngOnInit(){this.loading.set(!0),setTimeout(()=>{this.nodes.set(this.nodeService.generateNodes(150)),this.loading.set(!1)},1e3)}nodeExpand(t){t.node&&(this.loading.set(!0),setTimeout(()=>{t.node.children=this.nodeService.createNodes(5,t.node.key),this.loading.set(!1),this.nodes.set([...this.nodes()])},200))}code={basic:'<p-tree [value]="nodes()" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="35" (onNodeExpand)="nodeExpand($event)" [loading]="loading()" />',html:`<div class="card">
    <p-tree [value]="nodes()" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="35" (onNodeExpand)="nodeExpand($event)" [loading]="loading()" />
</div>`,typescript:`import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '@/service/nodeservice';
import { Tree } from 'primeng/tree';

@Component({
    selector: 'tree-virtual-scroll-lazy-demo',
    templateUrl: './tree-virtual-scroll-lazy-demo.html',
    standalone: true,
    imports: [Tree],
    providers: [NodeService]
})
export class TreeVirtualScrollLazyDemo implements OnInit {
    loading = signal<boolean>(false);

    nodes = signal<TreeNode[]>(undefined);

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.loading.set(true);
        setTimeout(() => {
            this.nodes.set(this.nodeService.generateNodes(150));
            this.loading.set(false);
        }, 1000);
    }

    nodeExpand(event: any) {
        if (event.node) {
            this.loading.set(true);
            setTimeout(() => {
                event.node.children = this.nodeService.createNodes(5, event.node.key);
                this.loading.set(false);
                this.nodes.set([...this.nodes()]);
            }, 200);
        }
    }
}`,service:["NodeService"],data:`
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {
    generateNodes(count: number): TreeNode[] {
        return this.createNodes(count);
    }

    createNodes(length: number, parentKey?: string): TreeNode[] {
        const _createNodes = (length: number, level: number, parentKey?: string): TreeNode[] => {
            const nodes: TreeNode[] = [];
            for (let i = 0; i < length; i++) {
                const key = parentKey ? \`\${parentKey}-\${i}\` : \`\${i}\`;
                nodes.push({
                    key,
                    label: \`Node \${key}\`,
                    children: level < 2 ? _createNodes(5, level + 1, key) : []
                });
            }
            return nodes;
        };
        return _createNodes(length, 0, parentKey);
    }
}`};static \u0275fac=function(n){return new(n||l)(y(b))};static \u0275cmp=c({type:l,selectors:[["lazy-virtual-scroll-doc"]],decls:12,vars:6,consts:[[1,"card"],["scrollHeight","250px",3,"onNodeExpand","value","virtualScroll","lazy","virtualScrollItemSize","loading"],["selector","tree-virtual-scroll-lazy-demo",3,"code"]],template:function(n,r){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),i(3,"i"),e(4,"virtualScroll"),o(),e(5," property as true and providing a "),i(6,"i"),e(7,"virtualScrollItemSize"),o(),e(8," in pixels would be enough to enable this functionality."),o()(),i(9,"div",0)(10,"p-tree",1),D("onNodeExpand",function(s){return r.nodeExpand(s)}),o()(),p(11,"app-code",2)),n&2&&(d(10),a("value",r.nodes())("virtualScroll",!0)("lazy",!0)("virtualScrollItemSize",35)("loading",r.loading()),d(),a("code",r.code))},dependencies:[h,v,g,u],encapsulation:2})}return l})();var Ae=()=>["Tree","TreeNode"],Te=(()=>{class l{ptComponent=xe;docs=[{id:"import",label:"Import",component:ve},{id:"basic",label:"Basic",component:de},{id:"controlled",label:"Controlled",component:ce},{id:"selection",label:"Selection",children:[{id:"single",label:"Single",component:Se},{id:"multiple",label:"Multiple",component:ye},{id:"checkbox",label:"Checkbox",component:se}]},{id:"event",label:"Events",component:ue},{id:"lazy",label:"Lazy",component:he},{id:"template",label:"Template",component:Ne},{id:"filter",label:"Filter",component:ge},{id:"virtualscroll",label:"Virtual Scroll",children:[{id:"preload",label:"Preload",component:we},{id:"lazyvirtualscroll",label:"Lazy",component:ke}]},{id:"dragdrop",label:"DragDrop",children:[{id:"dragdrop-single",label:"Single",component:fe},{id:"dragdrop-multiple",label:"Multiple",component:me}]},{id:"contextmenu",label:"Context Menu",component:pe},{id:"accessibility",label:"Accessibility",component:ae}];static \u0275fac=function(n){return new(n||l)};static \u0275cmp=c({type:l,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Tree Component","header","Tree","description","Tree is used to display hierarchical data.","themeDocs","tree",3,"docs","apiDocs","ptDocs"]],template:function(n,r){n&1&&p(0,"app-doc",0),n&2&&a("docs",r.docs)("apiDocs",A(3,Ae))("ptDocs",r.ptComponent)},dependencies:[ie],encapsulation:2})}return l})();var go=[{path:"",component:Te}];export{go as default};
