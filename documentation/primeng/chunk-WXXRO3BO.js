import{a as ee,b as te}from"./chunk-E7PBLJHB.js";import{a as Q,w as X}from"./chunk-CWZPDHKN.js";import"./chunk-IYEEPUY3.js";import"./chunk-3Y7QSSKK.js";import"./chunk-JP2RU6K4.js";import"./chunk-ZVBSRVPM.js";import"./chunk-YIMZONIF.js";import"./chunk-N2Z7YVU2.js";import"./chunk-APBUBGZC.js";import"./chunk-RTRG5JID.js";import{a as G,b as J}from"./chunk-374VKA5A.js";import"./chunk-DM7HQYPB.js";import"./chunk-7ZO4CZ3H.js";import{a as L}from"./chunk-5XWBYR75.js";import"./chunk-66742H4U.js";import"./chunk-VGTHJBIV.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import{b as Y}from"./chunk-FKOOMXTU.js";import{a as h}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as _}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{d as R}from"./chunk-MCW4FHXZ.js";import{Ea as q,s as K,u as U}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as C,n as F,w as O}from"./chunk-D2XKNHFS.js";import{$a as x,Eb as s,Fb as a,Gb as i,Hb as l,La as j,Ob as E,Qa as n,Sb as u,T as W,Ub as m,Va as w,Wa as A,_a as V,aa as b,ba as v,gb as g,hb as z,hc as d,ib as N,ic as P,jc as I,mb as f,pc as k,qa as B,rc as $,sc as Z}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var S=(()=>{class r{el;zone;renderer;scope;dragEffect;dragHandle;onDragStart=new w;onDragEnd=new w;onDrag=new w;handle;dragListener;mouseDownListener;mouseUpListener;_pDraggableDisabled=!1;constructor(e,o,t){this.el=e,this.zone=o,this.renderer=t}get pDraggableDisabled(){return this._pDraggableDisabled}set pDraggableDisabled(e){this._pDraggableDisabled=e,this._pDraggableDisabled?this.unbindMouseListeners():(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}ngAfterViewInit(){this.pDraggableDisabled||(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}bindDragListener(){this.dragListener||this.zone.runOutsideAngular(()=>{this.dragListener=this.renderer.listen(this.el.nativeElement,"drag",this.drag.bind(this))})}unbindDragListener(){this.dragListener&&this.zone.runOutsideAngular(()=>{this.dragListener&&this.dragListener(),this.dragListener=null})}bindMouseListeners(){!this.mouseDownListener&&!this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.mousedown.bind(this)),this.mouseUpListener=this.renderer.listen(this.el.nativeElement,"mouseup",this.mouseup.bind(this))})}unbindMouseListeners(){this.mouseDownListener&&this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.mouseDownListener&&this.mouseDownListener(),this.mouseUpListener&&this.mouseUpListener(),this.mouseDownListener=null,this.mouseUpListener=null})}drag(e){this.onDrag.emit(e)}dragStart(e){this.allowDrag()&&!this.pDraggableDisabled?(this.dragEffect&&(e.dataTransfer.effectAllowed=this.dragEffect),e.dataTransfer.setData("text",this.scope),this.onDragStart.emit(e),this.bindDragListener()):e.preventDefault()}dragEnd(e){this.onDragEnd.emit(e),this.unbindDragListener()}mousedown(e){this.handle=e.target}mouseup(e){this.handle=null}allowDrag(){return this.dragHandle&&this.handle?R.matches(this.handle,this.dragHandle):!0}ngOnDestroy(){this.unbindDragListener(),this.unbindMouseListeners()}static \u0275fac=function(o){return new(o||r)(x(B),x(A),x(V))};static \u0275dir=N({type:r,selectors:[["","pDraggable",""]],hostBindings:function(o,t){o&1&&u("dragstart",function(D){return t.dragStart(D)})("dragend",function(D){return t.dragEnd(D)})},inputs:{scope:[0,"pDraggable","scope"],dragEffect:"dragEffect",dragHandle:"dragHandle",pDraggableDisabled:"pDraggableDisabled"},outputs:{onDragStart:"onDragStart",onDragEnd:"onDragEnd",onDrag:"onDrag"}})}return r})(),M=(()=>{class r{el;zone;renderer;scope;_pDroppableDisabled=!1;get pDroppableDisabled(){return this._pDroppableDisabled}set pDroppableDisabled(e){this._pDroppableDisabled=e,this._pDroppableDisabled?this.unbindDragOverListener():this.bindDragOverListener()}dropEffect;onDragEnter=new w;onDragLeave=new w;onDrop=new w;constructor(e,o,t){this.el=e,this.zone=o,this.renderer=t}dragOverListener;ngAfterViewInit(){this.pDroppableDisabled||this.bindDragOverListener()}bindDragOverListener(){this.dragOverListener||this.zone.runOutsideAngular(()=>{this.dragOverListener=this.renderer.listen(this.el.nativeElement,"dragover",this.dragOver.bind(this))})}unbindDragOverListener(){this.dragOverListener&&this.zone.runOutsideAngular(()=>{this.dragOverListener&&this.dragOverListener(),this.dragOverListener=null})}dragOver(e){e.preventDefault()}drop(e){this.allowDrop(e)&&(U(this.el.nativeElement,"p-draggable-enter"),e.preventDefault(),this.onDrop.emit(e))}dragEnter(e){e.preventDefault(),this.dropEffect&&(e.dataTransfer.dropEffect=this.dropEffect),K(this.el.nativeElement,"p-draggable-enter"),this.onDragEnter.emit(e)}dragLeave(e){e.preventDefault(),this.el.nativeElement.contains(e.relatedTarget)||(U(this.el.nativeElement,"p-draggable-enter"),this.onDragLeave.emit(e))}allowDrop(e){let o=e.dataTransfer.getData("text");if(typeof this.scope=="string"&&o==this.scope)return!0;if(Array.isArray(this.scope)){for(let t=0;t<this.scope.length;t++)if(o==this.scope[t])return!0}return!1}ngOnDestroy(){this.unbindDragOverListener()}static \u0275fac=function(o){return new(o||r)(x(B),x(A),x(V))};static \u0275dir=N({type:r,selectors:[["","pDroppable",""]],hostBindings:function(o,t){o&1&&u("drop",function(D){return t.drop(D)})("dragenter",function(D){return t.dragEnter(D)})("dragleave",function(D){return t.dragLeave(D)})},inputs:{scope:[0,"pDroppable","scope"],pDroppableDisabled:"pDroppableDisabled",dropEffect:"dropEffect"},outputs:{onDragEnter:"onDragEnter",onDragLeave:"onDragLeave",onDrop:"onDrop"}})}return r})(),y=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=z({type:r});static \u0275inj=W({})}return r})();function le(r,c){if(r&1){let e=E();a(0,"li",8),u("onDragStart",function(){let t=b(e).$implicit,p=m();return v(p.dragStart(t))})("onDragEnd",function(){b(e);let t=m();return v(t.dragEnd())}),d(1),i()}if(r&2){let e=c.$implicit;n(),I(" ",e.name," ")}}function ce(r,c){if(r&1&&(a(0,"li",10),d(1),i()),r&2){let e=c.$implicit;n(),I(" ",e.name," ")}}function pe(r,c){if(r&1&&(a(0,"ul",2),f(1,ce,2,1,"li",9),i()),r&2){let e=m();n(),s("ngForOf",e.selectedProducts)}}var oe=(()=>{class r{availableProducts;selectedProducts;draggedProduct;ngOnInit(){this.selectedProducts=[],this.availableProducts=[{id:"1",name:"Black Watch"},{id:"2",name:"Bamboo Watch"}]}dragStart(e){this.draggedProduct=e}drop(){if(this.draggedProduct){let e=this.findIndex(this.draggedProduct);this.selectedProducts=[...this.selectedProducts,this.draggedProduct],this.availableProducts=this.availableProducts?.filter((o,t)=>t!=e),this.draggedProduct=null}}dragEnd(){this.draggedProduct=null}findIndex(e){let o=-1;for(let t=0;t<this.availableProducts.length;t++)if(e.id===this.availableProducts[t].id){o=t;break}return o}code={basic:`<div class="p-2 border border-surface rounded-border w-60">
    <ul class="list-none flex flex-col gap-2 p-0 m-0">
        <li
            *ngFor="let product of availableProducts"
            class="p-2 rounded-border shadow-sm"
            pDraggable
            (onDragStart)="dragStart(product)"
            (onDragEnd)="dragEnd()">
                {{product.name}}
        </li>
    </ul>
</div>
<div class="p-2 border border-surface rounded-border w-60" pDroppable (onDrop)="drop()">
    <p class="text-center border-surface border-b">
        Drop Zone
    </p>
    <ul class="list-none flex flex-col gap-2 p-0 m-0" *ngIf="selectedProducts" >
        <li *ngFor="let product of selectedProducts" class="p-2 rounded-border shadow-sm">
            {{product.name}}
        </li>
    </ul>
</div>`,html:`<div class="card flex flex-wrap gap-4">
    <div class="p-2 border border-surface rounded-border w-60">
        <ul class="list-none flex flex-col gap-2 p-0 m-0">
            <li
                *ngFor="let product of availableProducts"
                class="p-2 rounded-border shadow-sm"
                pDraggable
                (onDragStart)="dragStart(product)"
                (onDragEnd)="dragEnd()">
                    {{product.name}}
            </li>
        </ul>
    </div>
    <div class="p-2 border border-surface rounded-border w-60" pDroppable (onDrop)="drop()">
        <p class="text-center border-surface border-b">Drop Zone</p>
        <ul class="list-none flex flex-col gap-2 p-0 m-0" *ngIf="selectedProducts" >
            <li *ngFor="let product of selectedProducts" class="p-2 rounded-border shadow-sm">
                {{product.name}}
            </li>
        </ul>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { DragDropModule } from 'primeng/dragdrop';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'drag-drop-basic-demo',
    templateUrl: './drag-drop-basic-demo.html',
    styles: [
        \`:host ::ng-deep {
            [pDraggable] {
                cursor: move;
            }
        }\`
    ],
    standalone: true,
    imports: [DragDropModule, CommonModule]
})
export class DragDropBasicDemo implements OnInit {
    availableProducts: Product[] | undefined;

    selectedProducts: Product[] | undefined;

    draggedProduct: Product | undefined | null;

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Black Watch'},
            {id:'2', name: 'Bamboo Watch'}
        ]
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
            if (product.id === (this.availableProducts as Product[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}`,scss:`
:host ::ng-deep {
    [pDraggable] {
        cursor: move;
    }
}`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(o){return new(o||r)};static \u0275cmp=g({type:r,selectors:[["drag-drop-basic-demo"]],decls:17,vars:4,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"p-2","border","border-surface","rounded-border","w-60"],[1,"list-none","flex","flex-col","gap-2","p-0","m-0"],["class","p-2 rounded-border shadow-sm","pDraggable","",3,"onDragStart","onDragEnd",4,"ngFor","ngForOf"],["pDroppable","",1,"p-2","border","border-surface","rounded-border","w-60",3,"onDrop"],[1,"text-center","border-surface","border-b"],["class","list-none flex flex-col gap-2 p-0 m-0",4,"ngIf"],["selector","drag-drop-basic-demo",3,"code","extFiles"],["pDraggable","",1,"p-2","rounded-border","shadow-sm",3,"onDragStart","onDragEnd"],["class","p-2 rounded-border shadow-sm",4,"ngFor","ngForOf"],[1,"p-2","rounded-border","shadow-sm"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p")(2,"i"),d(3,"pDraggable"),i(),d(4," and "),a(5,"i"),d(6,"pDroppable"),i(),d(7," are attached to a target element to add drag-drop behavior. The value of a Directive attribute is required and it defines the scope to match draggables with droppables. Droppable scope can also be an array to accept multiple droppables. "),i()(),a(8,"div",0)(9,"div",1)(10,"ul",2),f(11,le,2,1,"li",3),i()(),a(12,"div",4),u("onDrop",function(){return t.drop()}),a(13,"p",5),d(14,"Drop Zone"),i(),f(15,pe,2,1,"ul",6),i()(),l(16,"app-code",7)),o&2&&(n(11),s("ngForOf",t.availableProducts),n(4),s("ngIf",t.selectedProducts),n(),s("code",t.code)("extFiles",t.extFiles))},dependencies:[O,C,F,y,S,M,h,_],encapsulation:2})}return r})();function ge(r,c){if(r&1){let e=E();a(0,"div")(1,"div",8),u("onDragStart",function(){let t=b(e).$implicit,p=m();return v(p.dragStart(t))})("onDragEnd",function(){b(e);let t=m();return v(t.dragEnd())}),a(2,"div",9),l(3,"img",10),i(),a(4,"div",11)(5,"h5",12),d(6),i(),l(7,"i",13),a(8,"span",14),d(9),i()(),a(10,"div",15)(11,"h6",12),d(12),i(),l(13,"p-tag",16),i()()()}if(r&2){let e=c.$implicit,o=m();n(3),s("src",k("/_ext/primefaces.org/cdn/primeng/images/demo/product/",e.image),j)("alt",e.name),n(3),P(e.name),n(3),P(e.category),n(3),P(e.price),n(),s("value",e.inventoryStatus)("severity",o.getSeverity(e.inventoryStatus))}}function ue(r,c){r&1&&(a(0,"tr")(1,"th"),d(2,"ID"),i(),a(3,"th"),d(4,"Category"),i(),a(5,"th"),d(6,"Name"),i(),a(7,"th"),d(8,"Price"),i()())}function me(r,c){if(r&1&&(a(0,"tr")(1,"td"),d(2),i(),a(3,"td"),d(4),i(),a(5,"td"),d(6),i(),a(7,"td"),d(8),i()()),r&2){let e=c.$implicit;n(2),P(e.id),n(2),P(e.category),n(2),P(e.name),n(2),P(e.price)}}var ie=(()=>{class r{productService;availableProducts;selectedProducts;draggedProduct;constructor(e){this.productService=e}ngOnInit(){this.selectedProducts=[],this.productService.getProductsSmall().then(e=>this.availableProducts=e)}dragStart(e){this.draggedProduct=e}drop(){if(this.draggedProduct){let e=this.findIndex(this.draggedProduct);this.selectedProducts=[...this.selectedProducts,this.draggedProduct],this.availableProducts=this.availableProducts?.filter((o,t)=>t!=e),this.draggedProduct=null}}dragEnd(){this.draggedProduct=null}findIndex(e){let o=-1;for(let t=0;t<this.availableProducts.length;t++)if(e.id===this.availableProducts[t].id){o=t;break}return o}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger"}}code={basic:`<div class="card grid grid-cols-12 gap-4 grid-nogutter">
    <div class="col-span-12 md:col-span-6 drag-column">
        <div *ngFor="let product of availableProducts">
            <div
                class="product-item"
                pDraggable="products"
                (onDragStart)="dragStart(product)"
                (onDragEnd)="dragEnd()">
                    <div class="image-container">
                        <img
                            src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"
                            [alt]="product.name"
                            class="product-image" />
                    </div>
                    <div class="product-list-detail">
                        <h5 class="mb-2">
                            {{product.name}}
                        </h5>
                        <i class="pi pi-tag product-category-icon"></i>
                        <span class="product-category">
                            {{product.category}}
                        </span>
                        </div>
                        <div class="product-list-action">
                        <h6 class="mb-2">
                            {{product.price}}
                        </h6>
                        <p-tag
                            [value]="product.inventoryStatus"
                            [severity]="getSeverity(product.inventoryStatus)" />
                    </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 md:col-span-6 drop-column" pDroppable="products" (onDrop)="drop()">
    <p-table [value]="selectedProducts">
        <ng-template pTemplate="header">
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Category
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    {{product.id}}
                </td>
                <td>
                    {{product.category}}
                </td>
                <td>
                    {{product.name}}
                </td>
                <td>
                    {{product.price}}
                </td>
            </tr>
            </ng-template>
        </p-table>
    </div>
</div>`,html:`<div class="card grid grid-cols-12 gap-4 grid-nogutter">
    <div class="col-span-12 md:col-span-6 drag-column">
        <div *ngFor="let product of availableProducts">
            <div
                class="product-item"
                pDraggable="products"
                (onDragStart)="dragStart(product)"
                (onDragEnd)="dragEnd()">
                    <div class="image-container">
                        <img
                            src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"
                            [alt]="product.name"
                            class="product-image" />
                    </div>
                    <div class="product-list-detail">
                        <h5 class="mb-2">
                            {{product.name}}
                        </h5>
                        <i class="pi pi-tag product-category-icon"></i>
                        <span class="product-category">
                            {{product.category}}
                        </span>
                        </div>
                        <div class="product-list-action">
                        <h6 class="mb-2">
                            {{product.price}}
                        </h6>
                        <p-tag
                            [value]="product.inventoryStatus"
                            [severity]="getSeverity(product.inventoryStatus)" />
                    </div>
            </div>
        </div>
    </div>
    <div class="col-span-12 md:col-span-6 drop-column" pDroppable="products" (onDrop)="drop()">
    <p-table [value]="selectedProducts">
        <ng-template pTemplate="header">
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Category
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    {{product.id}}
                </td>
                <td>
                    {{product.category}}
                </td>
                <td>
                    {{product.name}}
                </td>
                <td>
                    {{product.price}}
                </td>
            </tr>
            </ng-template>
        </p-table>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'drag-drop-data-table-demo',
    templateUrl: './drag-drop-data-table-demo.html',
    styles: [
        \`:host ::ng-deep {
            .drag-column {
                padding-right: .5em;
            }

            .drop-column {
                border: 1px solid transparent;
                transition: border-color .2s;

                &.p-draggable-enter {
                    border-color: var(--primary-color);
                }
            }

            .product-item {
                display: flex;
                align-items: center;
                padding: 1rem;
                width: 100%;
                border-bottom: 1px solid var(--surface-d);

                img {
                    width: 75px;
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                    margin-right: 1rem;
                }

                .product-list-detail {
                    flex: 1 1 0;
                }

                .product-list-action {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }

                .product-category-icon {
                    vertical-align: middle;
                    margin-right: .5rem;
                }

                .product-category {
                    vertical-align: middle;
                    line-height: 1;
                }
            }

            [pDraggable] {
                cursor: move;
            }

            @media screen and (max-width: 576px) {
                .product-item {
                    flex-wrap: wrap;

                    .image-container {
                        width: 100%;
                        text-align: center;
                    }

                    img {
                        margin: 0 0 1rem 0;
                        width: 100px;
                    }
                }
            }
        }\`
    ],
    standalone: true,
    imports: [DragDropModule, TableModule, Tag, CommonModule],
    providers: [ProductService]
})
export class DragDropDataTableDemo implements OnInit {
    availableProducts: Product[] | undefined;

    selectedProducts: Product[] | undefined;

    draggedProduct: Product | undefined | null;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.selectedProducts = [];
        this.productService.getProductsSmall().then((products) => (this.availableProducts = products));
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
            if (product.id === (this.availableProducts as Product[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,data:`
...
{
    "id": "1000",
    "code": "f230fh0g3",
    "name": "Bamboo Watch",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": 65,
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
},
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(o){return new(o||r)(x(L))};static \u0275cmp=g({type:r,selectors:[["drag-drop-data-table-demo"]],features:[$([L])],decls:11,vars:4,consts:[[1,"card","grid","grid-cols-12","gap-4","grid-nogutter"],[1,"col-span-12","md:col-span-6","drag-column"],[4,"ngFor","ngForOf"],["pDroppable","products",1,"col-span-12","md:col-span-6","drop-column",3,"onDrop"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["selector","drag-drop-data-table-demo",3,"code","extFiles"],["pDraggable","products",1,"product-item",3,"onDragStart","onDragEnd"],[1,"image-container"],[1,"product-image",3,"src","alt"],[1,"product-list-detail"],[1,"mb-2"],[1,"pi","pi-tag","product-category-icon"],[1,"product-category"],[1,"product-list-action"],[3,"value","severity"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),d(2,"Drag and Drop to Table"),i()(),a(3,"div",0)(4,"div",1),f(5,ge,14,8,"div",2),i(),a(6,"div",3),u("onDrop",function(){return t.drop()}),a(7,"p-table",4),f(8,ue,9,0,"ng-template",5)(9,me,9,4,"ng-template",6),i()()(),l(10,"app-code",7)),o&2&&(n(5),s("ngForOf",t.availableProducts),n(2),s("value",t.selectedProducts),n(3),s("code",t.code)("extFiles",t.extFiles))},dependencies:[O,C,y,S,M,X,Q,q,J,G,h,_],encapsulation:2})}return r})();var ae=(()=>{class r{code={basic:`<div pDraggable dragHandle=".p-panel-header" class="w-60">
    <p-panel header="Drag Header">
        Content
    </p-panel>
</div>`,html:`<div class="card">
    <div pDraggable dragHandle=".p-panel-header" class="w-60">
        <p-panel header="Drag Header">
            Content
        </p-panel>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'drag-drop-drag-handle-demo',
    templateUrl: './drag-drop-drag-handle-demo.html',
    styles: [
        \`:host ::ng-deep {
            [pDraggable] {
                cursor: move;
            }
        }\`
    ],
    standalone: true,
    imports: [DragDropModule, PanelModule]
})
export class DragDropDragHandleDemo {}`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(o){return new(o||r)};static \u0275cmp=g({type:r,selectors:[["drag-drop-drag-handle-demo"]],decls:10,vars:2,consts:[[1,"card"],["pDraggable","","dragHandle",".p-panel-header",1,"w-60"],["header","Drag Header"],["selector","drag-drop-drag-handle-demo",3,"code","extFiles"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p")(2,"i"),d(3,"dragHandle"),i(),d(4," is used to restrict dragging unless mousedown occurs on the specified element. Panel below can only be dragged using its header."),i()(),a(5,"div",0)(6,"div",1)(7,"p-panel",2),d(8," Content "),i()()(),l(9,"app-code",3)),o&2&&(n(9),s("code",t.code)("extFiles",t.extFiles))},dependencies:[y,S,te,ee,h,_],encapsulation:2})}return r})();function fe(r,c){if(r&1){let e=E();a(0,"li",8),u("onDragStart",function(){let t=b(e).$implicit,p=m();return v(p.dragStart(t))})("onDragEnd",function(){b(e);let t=m();return v(t.dragEnd())}),d(1),i()}if(r&2){let e=c.$implicit;n(),I(" ",e.name," ")}}function he(r,c){if(r&1&&(a(0,"li",10),d(1),i()),r&2){let e=c.$implicit;n(),I(" ",e.name," ")}}function De(r,c){if(r&1&&(a(0,"ul",2),f(1,he,2,1,"li",9),i()),r&2){let e=m();n(),s("ngForOf",e.selectedProducts)}}var de=(()=>{class r{availableProducts;selectedProducts;draggedProduct;ngOnInit(){this.selectedProducts=[],this.availableProducts=[{id:"1",name:"Black Watch"},{id:"2",name:"Bamboo Watch"}]}dragStart(e){this.draggedProduct=e}drop(){if(this.draggedProduct){let e=this.findIndex(this.draggedProduct);this.selectedProducts=[...this.selectedProducts,this.draggedProduct],this.availableProducts=this.availableProducts?.filter((o,t)=>t!=e),this.draggedProduct=null}}dragEnd(){this.draggedProduct=null}findIndex(e){let o=-1;for(let t=0;t<this.availableProducts.length;t++)if(e.id===this.availableProducts[t].id){o=t;break}return o}code={basic:`<div class="p-2 border border-surface rounded-border w-60 h-40">
    <ul class="list-none flex flex-col gap-2 p-0 m-0">
        <li
            *ngFor="let product of availableProducts"
            class="p-2 rounded-border shadow-sm"
            pDraggable
            (onDragStart)="dragStart(product)"
            (onDragEnd)="dragEnd()">
                {{product.name}}
        </li>
    </ul>
</div>
<div class="p-2 w-60 h-40 drop-column" pDroppable (onDrop)="drop()">
    <p class="text-center border-surface border-b">Drop Zone</p>
    <ul class="list-none flex flex-col gap-2 p-0 m-0" *ngIf="selectedProducts" >
        <li *ngFor="let product of selectedProducts" class="p-2 rounded-border shadow-sm">
            {{product.name}}
        </li>
    </ul>
</div>`,html:`<div class="card flex flex-wrap gap-4">
    <div class="p-2 border border-surface rounded-border w-60 h-40">
        <ul class="list-none flex flex-col gap-2 p-0 m-0">
            <li
                *ngFor="let product of availableProducts"
                class="p-2 rounded-border shadow-sm"
                pDraggable
                (onDragStart)="dragStart(product)"
                (onDragEnd)="dragEnd()">
                    {{product.name}}
            </li>
        </ul>
    </div>
    <div class="p-2 w-60 h-40 drop-column" pDroppable (onDrop)="drop()">
        <p class="text-center border-surface border-b">Drop Zone</p>
        <ul class="list-none flex flex-col gap-2 p-0 m-0" *ngIf="selectedProducts" >
            <li *ngFor="let product of selectedProducts" class="p-2 rounded-border shadow-sm">
                {{product.name}}
            </li>
        </ul>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';

@Component({
    selector: 'drag-drop-drop-indicator-demo',
    templateUrl: './drag-drop-drop-indicator-demo.html',
    styles: [
        \`:host ::ng-deep {
            .drop-column {
                border: 1px solid transparent;
                transition: border-color .2s;

                &.p-draggable-enter {
                    border-color: var(--primary-color);
                }
            }

            [pDraggable] {
                cursor: move;
            }
        }\`
    ],
    standalone: true,
    imports: [DragDropModule, CommonModule],
    providers: [ProductService]
})
export class DragDropDropIndicatorDemo implements OnInit {
    availableProducts: Product[] | undefined;

    selectedProducts: Product[] | undefined;

    draggedProduct: Product | undefined | null;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Black Watch'},
            {id:'2', name: 'Bamboo Watch'}
        ]
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
            if (product.id === (this.availableProducts as Product[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}`,scss:`
:host ::ng-deep {
    .drop-column {
        border: 1px solid transparent;
        transition: border-color .2s;

        &.p-draggable-enter {
            border-color: var(--primary-color);
        }
    }

    [pDraggable] {
        cursor: move;
    }
}`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(o){return new(o||r)};static \u0275cmp=g({type:r,selectors:[["drag-drop-drop-indicator-demo"]],decls:15,vars:4,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"p-2","border","border-surface","rounded-border","w-60","h-40"],[1,"list-none","flex","flex-col","gap-2","p-0","m-0"],["class","p-2 rounded-border shadow-sm","pDraggable","",3,"onDragStart","onDragEnd",4,"ngFor","ngForOf"],["pDroppable","",1,"p-2","w-60","h-40","drop-column",3,"onDrop"],[1,"text-center","border-surface","border-b"],["class","list-none flex flex-col gap-2 p-0 m-0",4,"ngIf"],["selector","drag-drop-drop-indicator-demo",3,"code","extFiles"],["pDraggable","",1,"p-2","rounded-border","shadow-sm",3,"onDragStart","onDragEnd"],["class","p-2 rounded-border shadow-sm",4,"ngFor","ngForOf"],[1,"p-2","rounded-border","shadow-sm"]],template:function(o,t){o&1&&(a(0,"app-docsectiontext")(1,"p"),d(2,"When a suitable draggable enters a droppable area, the area gets "),a(3,"i"),d(4,"p-draggable-enter"),i(),d(5," class that can be used to style the droppable section."),i()(),a(6,"div",0)(7,"div",1)(8,"ul",2),f(9,fe,2,1,"li",3),i()(),a(10,"div",4),u("onDrop",function(){return t.drop()}),a(11,"p",5),d(12,"Drop Zone"),i(),f(13,De,2,1,"ul",6),i()(),l(14,"app-code",7)),o&2&&(n(9),s("ngForOf",t.availableProducts),n(4),s("ngIf",t.selectedProducts),n(),s("code",t.code)("extFiles",t.extFiles))},dependencies:[O,C,F,y,S,M,h,_],encapsulation:2})}return r})();var ne=(()=>{class r{code={typescript:"import { DragDropModule } from 'primeng/dragdrop';"};static \u0275fac=function(o){return new(o||r)};static \u0275cmp=g({type:r,selectors:[["drag-drop-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&l(0,"app-code",0),o&2&&s("code",t.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2})}return r})();var be=()=>["DragDrop"],se=(()=>{class r{docs=[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:oe},{id:"datatable",label:"DataTable",component:ie},{id:"dropindicator",label:"Drop Indicator",component:de},{id:"draghandle",label:"Drag Handle",component:ae}];static \u0275fac=function(o){return new(o||r)};static \u0275cmp=g({type:r,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Drag and Drop Component","header","Drag and Drop","description","pDraggable and pDroppable directives apply drag-drop behaviors to any element.",3,"docs","apiDocs"]],template:function(o,t){o&1&&l(0,"app-doc",0),o&2&&s("docs",t.docs)("apiDocs",Z(2,be))},dependencies:[Y],styles:["[_nghost-%COMP%]     .drag-column{padding-right:.5em}[_nghost-%COMP%]     .drop-column{border:1px solid transparent;transition:border-color .2s}[_nghost-%COMP%]     .drop-column.p-draggable-enter{border-color:var(--primary-color)}[_nghost-%COMP%]     .product-item{display:flex;align-items:center;padding:1rem;width:100%;border-bottom:1px solid var(--surface-d)}[_nghost-%COMP%]     .product-item img{width:75px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin-right:1rem}[_nghost-%COMP%]     .product-item .product-list-detail{flex:1 1 0}[_nghost-%COMP%]     .product-item .product-list-action{display:flex;flex-direction:column;align-items:flex-end}[_nghost-%COMP%]     .product-item .product-category-icon{vertical-align:middle;margin-right:.5rem}[_nghost-%COMP%]     .product-item .product-category{vertical-align:middle;line-height:1}[_nghost-%COMP%]     [pDraggable]{cursor:move}@media screen and (max-width: 576px){[_nghost-%COMP%]     .product-item{flex-wrap:wrap}[_nghost-%COMP%]     .product-item .image-container{width:100%;text-align:center}[_nghost-%COMP%]     .product-item img{margin:0 0 1rem;width:100px}}"]})}return r})();var ut=[{path:"",component:se}];export{ut as default};
