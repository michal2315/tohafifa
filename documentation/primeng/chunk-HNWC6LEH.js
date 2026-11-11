import{a as S,b as _}from"./chunk-RNOT4MWW.js";import{a as X,b as Y}from"./chunk-PKCXEJCN.js";import{a as I,b as ie}from"./chunk-JNUBCW5H.js";import"./chunk-N3SKU25W.js";import{a as k,b as D}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as te}from"./chunk-FKOOMXTU.js";import{a as C}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ee}from"./chunk-XCUGNKAG.js";import{a as w,b as Z}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as K,h as W}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{b as J,c as Q,ga as P,ha as B}from"./chunk-MCW4FHXZ.js";import{Ja as q,za as m}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as G,n as H,w as E}from"./chunk-D2XKNHFS.js";import{$a as F,Eb as p,Fb as o,Gb as l,Gc as T,Hb as d,La as $,Ob as U,Qa as r,Sb as f,Ub as x,aa as g,ba as h,cc as L,gb as c,hc as a,ic as A,jc as O,mb as y,rc as M,sc as N}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var oe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["file-upload-accessibility-doc"]],decls:18,vars:0,consts:[["routerLink","/button#accessibility"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"h3"),a(2,"Screen Reader"),l(),o(3,"p"),a(4,"FileUpload uses a hidden native "),o(5,"i"),a(6,"input"),l(),a(7," element with "),o(8,"i"),a(9,'type="file"'),l(),a(10," for screen readers."),l(),o(11,"h3"),a(12,"Keyboard Support"),l(),o(13,"p"),a(14,"Interactive elements of the uploader are buttons, visit the "),o(15,"a",0),a(16,"Button"),l(),a(17," accessibility section for more information."),l()())},dependencies:[w,W,K],encapsulation:2})}return t})();function me(t,u){t&1&&(o(0,"div"),a(1,"Drag and drop files to here to upload."),l())}var le=(()=>{class t{messageService;uploadedFiles=[];constructor(e){this.messageService=e}onUpload(e){for(let i of e.files)this.uploadedFiles.push(i);this.messageService.add({severity:"info",summary:"File Uploaded",detail:""})}code={basic:`<p-fileupload name="demo[]" url="/_ext/www.primefaces.org/cdn/api/upload.php" (onUpload)="onUpload($event)" [multiple]="true" accept="image/*" maxFileSize="1000000" mode="advanced">
    <ng-template #empty>
        <div>Drag and drop files to here to upload.</div>
    </ng-template>
</p-fileupload>`,html:`<div class="card">
    <p-toast />
    <p-fileupload name="demo[]" url="/_ext/www.primefaces.org/cdn/api/upload.php" (onUpload)="onUpload($event)" [multiple]="true" accept="image/*" maxFileSize="1000000" mode="advanced">
        <ng-template #empty>
            <div>Drag and drop files to here to upload.</div>
        </ng-template>
    </p-fileupload>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-advanced-demo',
    templateUrl: './file-upload-advanced-demo.html',
    standalone: true,
    imports: [FileUpload, ToastModule, CommonModule],
    providers: [MessageService]
})
export class FileUploadAdvancedDemo {
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}`};static \u0275fac=function(i){return new(i||t)(F(m))};static \u0275cmp=c({type:t,selectors:[["file-upload-advanced-demo"]],features:[M([m])],decls:9,vars:2,consts:[["empty",""],[1,"card"],["name","demo[]","url","/_ext/www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000","mode","advanced",3,"onUpload","multiple"],["selector","file-upload-advanced-demo",3,"code"]],template:function(i,n){if(i&1){let s=U();o(0,"app-docsectiontext")(1,"p"),a(2,"Advanced uploader provides dragdrop support, multi file uploads, auto uploading, progress tracking and validations."),l()(),o(3,"div",1),d(4,"p-toast"),o(5,"p-fileupload",2),f("onUpload",function(b){return g(s),h(n.onUpload(b))}),y(6,me,2,0,"ng-template",null,0,T),l()(),d(8,"app-code",3)}i&2&&(r(5),p("multiple",!0),r(3),p("code",n.code))},dependencies:[C,w,_,S,D,k],encapsulation:2})}return t})();var ae=(()=>{class t{messageService;constructor(e){this.messageService=e}onBasicUploadAuto(e){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Auto Mode"})}code={basic:'<p-fileupload mode="basic" name="demo[]" chooseIcon="pi pi-upload" url="/_ext/www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse" />',html:`<div class="card flex justify-center">
    <p-toast />
    <p-fileupload mode="basic" name="demo[]" chooseIcon="pi pi-upload" url="/_ext/www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-auto-demo',
    templateUrl: './file-upload-auto-demo.html',
    standalone: true,
    imports: [FileUpload, ToastModule],
    providers: [MessageService]
})
export class FileUploadAutoDemo {
    constructor(private messageService: MessageService) { }

    onBasicUploadAuto(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }
}`};static \u0275fac=function(i){return new(i||t)(F(m))};static \u0275cmp=c({type:t,selectors:[["file-upload-auto-demo"]],features:[M([m])],decls:10,vars:2,consts:[[1,"card","flex","justify-center"],["mode","basic","name","demo[]","chooseIcon","pi pi-upload","url","/_ext/www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000","chooseLabel","Browse",3,"onUpload","auto"],["selector","file-upload-auto-demo",3,"code"]],template:function(i,n){i&1&&(o(0,"app-docsectiontext")(1,"p"),a(2,"When "),o(3,"i"),a(4,"auto"),l(),a(5," property is enabled, a file gets uploaded instantly after selection."),l()(),o(6,"div",0),d(7,"p-toast"),o(8,"p-fileupload",1),f("onUpload",function(v){return n.onBasicUploadAuto(v)}),l()(),d(9,"app-code",2)),i&2&&(r(8),p("auto",!0),r(),p("code",n.code))},dependencies:[C,w,_,S,D,k],encapsulation:2})}return t})();var ne=(()=>{class t{messageService;constructor(e){this.messageService=e}onUpload(e){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Basic Mode"})}code={basic:`<p-fileupload #fu mode="basic" chooseLabel="Choose" chooseIcon="pi pi-upload" name="demo[]" url="/_ext/www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)" />
<p-button label="Upload" (onClick)="fu.upload()" severity="secondary" />`,html:`<div class="card flex flex-wrap gap-6 items-center justify-between">
    <p-toast />
    <p-fileupload #fu mode="basic" chooseLabel="Choose" chooseIcon="pi pi-upload" name="demo[]" url="/_ext/www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)" />
    <p-button label="Upload" (onClick)="fu.upload()" severity="secondary" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-basic-demo',
    templateUrl: './file-upload-basic-demo.html',
    standalone: true,
    imports: [FileUpload, ToastModule, ButtonModule],
    providers: [MessageService]
})
export class FileUploadBasicDemo {
    constructor(private messageService: MessageService) {}

    onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}`};static \u0275fac=function(i){return new(i||t)(F(m))};static \u0275cmp=c({type:t,selectors:[["file-upload-basic-demo"]],features:[M([m])],decls:12,vars:1,consts:[["fu",""],[1,"card","flex","flex-wrap","gap-6","items-center","justify-between"],["mode","basic","chooseLabel","Choose","chooseIcon","pi pi-upload","name","demo[]","url","/_ext/www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000",3,"onUpload"],["label","Upload","severity","secondary",3,"onClick"],["selector","file-upload-basic-demo",3,"code"]],template:function(i,n){if(i&1){let s=U();o(0,"app-docsectiontext")(1,"p"),a(2,"FileUpload basic "),o(3,"i"),a(4,"mode"),l(),a(5," provides a simpler UI as an alternative to default advanced mode."),l()(),d(6,"p-toast"),o(7,"div",1)(8,"p-fileupload",2,0),f("onUpload",function(b){return g(s),h(n.onUpload(b))}),l(),o(10,"p-button",3),f("onClick",function(){g(s);let b=L(9);return h(b.upload())}),l()(),d(11,"app-code",4)}i&2&&(r(11),p("code",n.code))},dependencies:[_,S,D,k,B,P,C,w],encapsulation:2})}return t})();var re=(()=>{class t{code={typescript:"import { FileUploadModule } from 'primeng/fileupload';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["file-upload-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&d(0,"app-code",0),i&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[C],encapsulation:2})}return t})();function fe(t,u){t&1&&(o(0,"span"),a(1,"Drag and drop files to here to upload."),l())}var pe=(()=>{class t{docs=[{data:I("FileUpload"),key:"FileUpload"}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["fileupload-pt-viewer"]],decls:5,vars:3,consts:[["empty",""],[3,"docs"],[1,"w-full"],["name","demo[]","url","/_ext/www.primefaces.org/cdn/api/upload.php","accept","image/*",3,"multiple","maxFileSize"]],template:function(i,n){i&1&&(o(0,"app-docptviewer",1)(1,"div",2)(2,"p-fileupload",3),y(3,fe,2,0,"ng-template",null,0,T),l()()()),i&2&&(p("docs",n.docs),r(2),p("multiple",!0)("maxFileSize",1e6))},dependencies:[E,ie,_,S],encapsulation:2})}return t})();var de=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:pe},{id:"pt.doc.fileupload",label:"FileUpload PT Options",component:Z,data:I("FileUpload")}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["fileupload-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),a(3,"FileUpload Pass Through"),l()(),d(4,"app-docsection",2),l()),i&2&&(r(4),p("docs",n.docs))},dependencies:[E,ee],encapsulation:2})}return t})();function ve(t,u){if(t&1){let e=U();o(0,"div",8)(1,"div",9)(2,"p-button",10),f("onClick",function(n){let s=g(e).chooseCallback,v=x();return h(v.choose(n,s))}),l(),o(3,"p-button",11),f("onClick",function(){let n=g(e).uploadCallback,s=x();return h(s.uploadEvent(n))}),l(),o(4,"p-button",12),f("onClick",function(){let n=g(e).clearCallback;return h(n())}),l()(),o(5,"p-progressbar",13)(6,"span",14),a(7),l()()()}if(t&2){let e=u.$implicit,i=x();r(2),p("rounded",!0)("outlined",!0),r(),p("rounded",!0)("outlined",!0)("disabled",!e||e.length===0),r(),p("rounded",!0)("outlined",!0)("disabled",!e||e.length===0),r(),p("value",i.totalSizePercent)("showValue",!1),r(2),O("",i.totalSize,"B / 1Mb")}}function ge(t,u){if(t&1){let e=U();o(0,"div",19)(1,"div"),d(2,"img",20),l(),o(3,"span",21),a(4),l(),o(5,"div"),a(6),l(),d(7,"p-badge",22),o(8,"p-button",23),f("click",function(n){let s=g(e).$implicit,v=x(2).removeFileCallback,b=x();return h(b.onRemoveTemplatingFile(n,s,v,b.index))}),l()()}if(t&2){let e=u.$implicit,i=x(3);r(2),p("alt",e.name)("src",e.objectURL,$),r(2),A(e.name),r(2),A(i.formatSize(e.size)),r(2),p("outlined",!0)("rounded",!0)}}function he(t,u){if(t&1&&(o(0,"div")(1,"h5"),a(2,"Pending"),l(),o(3,"div",17),y(4,ge,9,6,"div",18),l()()),t&2){let e=x().$implicit;r(4),p("ngForOf",e)}}function xe(t,u){if(t&1){let e=U();o(0,"div",25)(1,"div"),d(2,"img",20),l(),o(3,"span",21),a(4),l(),o(5,"div"),a(6),l(),d(7,"p-badge",26),o(8,"p-button",27),f("onClick",function(){g(e);let n=x(2).removeUploadedFileCallback,s=x();return h(n(s.index))}),l()()}if(t&2){let e=u.$implicit,i=x(3);r(2),p("alt",e.name)("src",e.objectURL,$),r(2),A(e.name),r(2),A(i.formatSize(e.size)),r(2),p("outlined",!0)("rounded",!0)}}function be(t,u){if(t&1&&(o(0,"div")(1,"h5"),a(2,"Completed"),l(),o(3,"div",17),y(4,xe,9,6,"div",24),l()()),t&2){let e=x().uploadedFiles;r(4),p("ngForOf",e)}}function Se(t,u){if(t&1&&(o(0,"div",15),y(1,he,5,1,"div",16)(2,be,5,1,"div",16),l()),t&2){let e=u.$implicit,i=u.uploadedFiles;r(),p("ngIf",(e==null?null:e.length)>0),r(),p("ngIf",(i==null?null:i.length)>0)}}function _e(t,u){}function we(t,u){t&1&&(o(0,"div",28),d(1,"i",29),o(2,"p",30),a(3,"Drag and drop files to here to upload."),l()())}var se=(()=>{class t{config;messageService;files=[];totalSize=0;totalSizePercent=0;constructor(e,i){this.config=e,this.messageService=i}choose(e,i){i()}onRemoveTemplatingFile(e,i,n,s){n(e,s),this.totalSize-=parseInt(this.formatSize(i.size)),this.totalSizePercent=this.totalSize/10}onClearTemplatingUpload(e){e(),this.totalSize=0,this.totalSizePercent=0}onTemplatedUpload(){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}onSelectedFiles(e){this.files=e.currentFiles,this.files.forEach(i=>{this.totalSize+=parseInt(this.formatSize(i.size))}),this.totalSizePercent=this.totalSize/10}uploadEvent(e){e()}formatSize(e){let s=this.config.translation.fileSizeTypes;if(e===0)return`0 ${s[0]}`;let v=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,v)).toFixed(3))} ${s[v]}`}code={basic:`<p-toast />
<p-fileupload name="myfile[]" url="/_ext/www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000" (onUpload)="onTemplatedUpload()" (onSelect)="onSelectedFiles($event)">
    <ng-template #header let-files let-chooseCallback="chooseCallback" let-clearCallback="clearCallback" let-uploadCallback="uploadCallback">
        <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
            <div class="flex gap-2">
                <p-button (onClick)="choose($event, chooseCallback)" icon="pi pi-images" [rounded]="true" [outlined]="true" />
                <p-button (onClick)="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" [rounded]="true" [outlined]="true" severity="success" [disabled]="!files || files.length === 0" />
                <p-button (onClick)="clearCallback()" icon="pi pi-times" [rounded]="true" [outlined]="true" severity="danger" [disabled]="!files || files.length === 0" />
            </div>
            <p-progressbar [value]="totalSizePercent" [showValue]="false" class="w-full" class="md:w-20rem h-1 w-full md:ml-auto">
                <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
            </p-progressbar>
        </div>
    </ng-template>
    <ng-template #content let-files let-uploadedFiles="uploadedFiles" let-removeFileCallback="removeFileCallback" let-removeUploadedFileCallback="removeUploadedFileCallback">
        <div class="flex flex-col gap-8 pt-4">
            <div *ngIf="files?.length > 0">
                <h5>Pending</h5>
                <div class="flex flex-wrap gap-4">
                    <div *ngFor="let file of files; let i = index" class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                        <div>
                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <p-badge value="Pending" severity="warn" />
                        <p-button icon="pi pi-times" (click)="onRemoveTemplatingFile($event, file, removeFileCallback, index)" [outlined]="true" [rounded]="true" severity="danger" />
                    </div>
                </div>
            </div>
            <div *ngIf="uploadedFiles?.length > 0">
                <h5>Completed</h5>
                <div class="flex flex-wrap gap-4">
                    <div *ngFor="let file of uploadedFiles; let i = index" class="card m-0 px-12 flex flex-col border border-surface items-center gap-4">
                        <div>
                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <p-badge value="Completed" class="mt-4" severity="success" />
                        <p-button icon="pi pi-times" (onClick)="removeUploadedFileCallback(index)" [outlined]="true" [rounded]="true" severity="danger" />
                    </div>
                </div>
            </div>
        </div>
    </ng-template>
    <ng-template #file></ng-template>
    <ng-template #empty>
        <div class="flex items-center justify-center flex-col">
            <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"></i>
            <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
        </div>
    </ng-template>
</p-fileupload>`,html:`<div class="card">
    <p-toast />
    <p-fileupload name="myfile[]" url="/_ext/www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000" (onUpload)="onTemplatedUpload()" (onSelect)="onSelectedFiles($event)">
        <ng-template #header let-files let-chooseCallback="chooseCallback" let-clearCallback="clearCallback" let-uploadCallback="uploadCallback">
            <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
                <div class="flex gap-2">
                    <p-button (onClick)="choose($event, chooseCallback)" icon="pi pi-images" [rounded]="true" [outlined]="true" />
                    <p-button (onClick)="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" [rounded]="true" [outlined]="true" severity="success" [disabled]="!files || files.length === 0" />
                    <p-button (onClick)="clearCallback()" icon="pi pi-times" [rounded]="true" [outlined]="true" severity="danger" [disabled]="!files || files.length === 0" />
                </div>
                <p-progressbar [value]="totalSizePercent" [showValue]="false" class="w-full" class="md:w-20rem h-1 w-full md:ml-auto">
                    <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
                </p-progressbar>
            </div>
        </ng-template>
        <ng-template #content let-files let-uploadedFiles="uploadedFiles" let-removeFileCallback="removeFileCallback" let-removeUploadedFileCallback="removeUploadedFileCallback">
            <div class="flex flex-col gap-8 pt-4">
                <div *ngIf="files?.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap gap-4">
                        <div *ngFor="let file of files; let i = index" class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                            <div>
                                <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                            </div>
                            <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <p-badge value="Pending" severity="warn" />
                            <p-button icon="pi pi-times" (click)="onRemoveTemplatingFile($event, file, removeFileCallback, index)" [outlined]="true" [rounded]="true" severity="danger" />
                        </div>
                    </div>
                </div>
                <div *ngIf="uploadedFiles?.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap gap-4">
                        <div *ngFor="let file of uploadedFiles; let i = index" class="card m-0 px-12 flex flex-col border border-surface items-center gap-4">
                            <div>
                                <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                            </div>
                            <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <p-badge value="Completed" class="mt-4" severity="success" />
                            <p-button icon="pi pi-times" (onClick)="removeUploadedFileCallback(index)" [outlined]="true" [rounded]="true" severity="danger" />
                        </div>
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #file></ng-template>
        <ng-template #empty>
            <div class="flex items-center justify-center flex-col">
                <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"></i>
                <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
            </div>
        </ng-template>
    </p-fileupload>
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService} from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { FileUpload } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'file-upload-template-demo',
    templateUrl: './file-upload-template-demo.html',
    standalone: true,
    imports: [FileUpload, ButtonModule, BadgeModule, ProgressBar, ToastModule, HttpClientModule, CommonModule],
    providers: [MessageService]
})
export class FileUploadTemplateDemo {
    files = [];

    totalSize : number = 0;

    totalSizePercent : number = 0;

    constructor(private config: PrimeNG, private messageService: MessageService) {}

    choose(event, callback) {
        callback();
    }

    onRemoveTemplatingFile(event, file, removeFileCallback, index) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    onSelectedFiles(event) {
        this.files = event.currentFiles;
        this.files.forEach((file) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback) {
        callback();
    }

    formatSize(bytes) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes;
        if (bytes === 0) {
            return \`0 \${sizes[0]}\`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return \`\${formattedSize} \${sizes[i]}\`;
    }
}`};static \u0275fac=function(i){return new(i||t)(F(q),F(m))};static \u0275cmp=c({type:t,selectors:[["file-upload-template-demo"]],features:[M([m])],decls:27,vars:2,consts:[["header",""],["content",""],["file",""],["empty",""],["href","https://www.w3.org/TR/FileAPI/"],[1,"card"],["name","myfile[]","url","/_ext/www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000",3,"onUpload","onSelect","multiple"],["selector","file-upload-template-demo",3,"code"],[1,"flex","flex-wrap","justify-between","items-center","flex-1","gap-4"],[1,"flex","gap-2"],["icon","pi pi-images",3,"onClick","rounded","outlined"],["icon","pi pi-cloud-upload","severity","success",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-times","severity","danger",3,"onClick","rounded","outlined","disabled"],[1,"md:w-20rem","h-1","w-full","md:ml-auto",3,"value","showValue"],[1,"whitespace-nowrap"],[1,"flex","flex-col","gap-8","pt-4"],[4,"ngIf"],[1,"flex","flex-wrap","gap-4"],["class","p-8 rounded-border flex flex-col border border-surface items-center gap-4",4,"ngFor","ngForOf"],[1,"p-8","rounded-border","flex","flex-col","border","border-surface","items-center","gap-4"],["role","presentation","width","100","height","50",3,"alt","src"],[1,"font-semibold","text-ellipsis","max-w-60","whitespace-nowrap","overflow-hidden"],["value","Pending","severity","warn"],["icon","pi pi-times","severity","danger",3,"click","outlined","rounded"],["class","card m-0 px-12 flex flex-col border border-surface items-center gap-4",4,"ngFor","ngForOf"],[1,"card","m-0","px-12","flex","flex-col","border","border-surface","items-center","gap-4"],["value","Completed","severity","success",1,"mt-4"],["icon","pi pi-times","severity","danger",3,"onClick","outlined","rounded"],[1,"flex","items-center","justify-center","flex-col"],[1,"pi","pi-cloud-upload","!border-2","!rounded-full","!p-8","!text-4xl","!text-muted-color"],[1,"mt-6","mb-0"]],template:function(i,n){if(i&1){let s=U();o(0,"app-docsectiontext")(1,"p"),a(2," Uploader UI is customizable using a ng-template called "),o(3,"i"),a(4,"file"),l(),a(5," that gets the "),o(6,"a",4),a(7,"File"),l(),a(8," instance as the implicit variable. Second ng-template named "),o(9,"i"),a(10,"content"),l(),a(11," can be used to place custom content inside the content section which would be useful to implement a user interface to manage the uploaded files such as removing them. This template gets the selected files as the implicit variable. Third and final ng-template option is "),o(12,"i"),a(13,"toolbar"),l(),a(14," to display custom content at toolbar. "),l()(),o(15,"div",5),d(16,"p-toast"),o(17,"p-fileupload",6),f("onUpload",function(){return g(s),h(n.onTemplatedUpload())})("onSelect",function(b){return g(s),h(n.onSelectedFiles(b))}),y(18,ve,8,11,"ng-template",null,0,T)(20,Se,3,2,"ng-template",null,1,T)(22,_e,0,0,"ng-template",null,2,T)(24,we,4,0,"ng-template",null,3,T),l()(),d(26,"app-code",7)}i&2&&(r(17),p("multiple",!0),r(9),p("code",n.code))},dependencies:[E,G,H,_,S,D,k,B,P,Q,J,Y,X,C,w],encapsulation:2})}return t})();var Ce=()=>["FileUpload"],ce=(()=>{class t{docs=[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:ne},{id:"auto",label:"Auto",component:ae},{id:"advanced",label:"Advanced",component:le},{id:"template",label:"Template",component:se},{id:"accessibility",label:"Accessibility",component:oe}];ptComponent=de;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=c({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular FileUpload Component","header","FileUpload","description","FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.","themeDocs","fileupload",3,"docs","apiDocs","ptDocs"]],template:function(i,n){i&1&&d(0,"app-doc",0),i&2&&p("docs",n.docs)("apiDocs",N(3,Ce))("ptDocs",n.ptComponent)},dependencies:[te],encapsulation:2})}return t})();var kt=[{path:"",component:ce}];export{kt as default};
