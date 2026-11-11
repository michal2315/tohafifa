import{a as x,b as h}from"./chunk-AQTKHBZH.js";import{a as U,b as R}from"./chunk-W7EEBIZF.js";import"./chunk-KBVWLYPF.js";import{a as S,b as w,c as D,d as _}from"./chunk-APBUBGZC.js";import{a as B,b as A}from"./chunk-XSLWLDLT.js";import{a as C,b as O}from"./chunk-JNUBCW5H.js";import{a as M,b as V}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as P}from"./chunk-FKOOMXTU.js";import{a as s}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as F}from"./chunk-XCUGNKAG.js";import{a as v,b as H}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as g,ha as b}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as T}from"./chunk-D2XKNHFS.js";import{Eb as p,Fb as i,Gb as o,Gc as d,Hb as r,Qa as c,Ub as Z,ca as E,da as I,fc as k,gb as m,hc as n,mb as f,sc as y}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";function ee(e,u){e&1&&r(0,"p-button",5)(1,"p-button",6)(2,"p-button",7)}function te(e,u){e&1&&(i(0,"p-iconfield",8),r(1,"p-inputicon",9)(2,"input",10),o())}function oe(e,u){if(e&1&&r(0,"p-splitbutton",11),e&2){let a=Z();p("model",a.items)}}var G=(()=>{class e{items;ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}]}code={basic:`<p-toolbar>
    <ng-template #start>
        <p-button icon="pi pi-plus" class="mr-2" text severity="secondary" />
        <p-button icon="pi pi-print" class="mr-2" text severity="secondary" />
        <p-button icon="pi pi-upload" text severity="secondary" />
    </ng-template>
    <ng-template #center>
        <p-iconfield iconPosition="left">
            <p-inputicon class="pi pi-search" />
            <input type="text" pInputText placeholder="Search" />
        </p-iconfield>
    </ng-template>
    <ng-template #end>
        <p-splitbutton label="Save" [model]="items" />
    </ng-template>
</p-toolbar>`,html:`<div class="card">
    <p-toolbar>
        <ng-template #start>
            <p-button icon="pi pi-plus" class="mr-2" text severity="secondary" />
            <p-button icon="pi pi-print" class="mr-2" text severity="secondary" />
            <p-button icon="pi pi-upload" text severity="secondary" />
        </ng-template>
        <ng-template #center>
            <p-iconfield iconPosition="left">
                <p-inputicon class="pi pi-search" />
                <input type="text" pInputText placeholder="Search" />
            </p-iconfield>
        </ng-template>
        <ng-template #end>
            <p-splitbutton label="Save" [model]="items" />
        </ng-template>
    </p-toolbar>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

@Component({
    selector: 'toolbar-basic-demo',
    templateUrl: './toolbar-basic-demo.html',
    standalone: true,
    imports: [Toolbar, ButtonModule, SplitButton, InputTextModule, IconField, InputIcon]
})
export class ToolbarBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["basic-doc"]],decls:21,vars:1,consts:[["start",""],["center",""],["end",""],[1,"card"],["selector","toolbar-basic-demo",3,"code"],["icon","pi pi-plus","text","","severity","secondary",1,"mr-2"],["icon","pi pi-print","text","","severity","secondary",1,"mr-2"],["icon","pi pi-upload","text","","severity","secondary"],["iconPosition","left"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Search"],["label","Save",3,"model"]],template:function(t,l){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2," Toolbar is a grouping component for buttons and other content. Its content can be placed inside the "),i(3,"i"),n(4,"start"),o(),n(5,", "),i(6,"i"),n(7,"center"),o(),n(8," and "),i(9,"i"),n(10,"end"),o(),n(11," sections. "),o()(),i(12,"div",3)(13,"p-toolbar"),f(14,ee,3,0,"ng-template",null,0,d)(16,te,3,0,"ng-template",null,1,d)(18,oe,1,1,"ng-template",null,2,d),o()(),r(20,"app-code",4)),t&2&&(c(20),p("code",l.code))},dependencies:[v,s,h,x,b,g,R,U,V,M,w,S,_,D],encapsulation:2})}return e})();var K=(()=>{class e{code={typescript:"import { ToolbarModule } from 'primeng/toolbar';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["toolbar-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&r(0,"app-code",0),t&2&&p("code",l.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2})}return e})();var j=(()=>{class e{code={html:`<p-toolbar aria-label="Actions">
    Content
</p-toolbar>`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["toolbar-accessibility-doc"]],decls:26,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,l){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),o(),i(4,"p"),n(5," Toolbar uses "),i(6,"i"),n(7,"toolbar"),o(),n(8," role for the root element, "),i(9,"i"),n(10,"aria-orientation"),o(),n(11," is not included as it defaults to "),i(12,"i"),n(13,"horizontal"),o(),n(14,". Any valid attribute is passed to the root element so you may add additional properties like "),i(15,"i"),n(16,"aria-labelledby"),o(),n(17," and "),i(18,"i"),n(19,"aria-labelled"),o(),n(20," to define the element if required. "),o(),r(21,"app-code",0),i(22,"h3"),n(23,"Keyboard Support"),o(),i(24,"p"),n(25,"Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence."),o()()()),t&2&&(c(21),p("code",l.code)("hideToggleCode",!0))},dependencies:[v,s],encapsulation:2})}return e})();var ie=()=>({"border-radius":"3rem",padding:"1rem 1rem 1rem 1.5rem"}),ne=()=>({width:"32px",height:"32px"});function re(e,u){e&1&&(i(0,"div",4),E(),i(1,"svg",5),r(2,"path",6),i(3,"mask",7),r(4,"path",8),o(),i(5,"g",9),r(6,"path",10),o(),r(7,"path",11)(8,"path",12)(9,"path",13)(10,"path",14)(11,"path",15)(12,"path",16)(13,"path",17)(14,"path",18)(15,"path",19)(16,"path",20),o(),I(),r(17,"p-button",21)(18,"p-button",22)(19,"p-button",23),o())}function ae(e,u){e&1&&(i(0,"div",4),r(1,"p-button",24)(2,"p-avatar",25),o()),e&2&&(c(2),k(y(2,ne)))}var J=(()=>{class e{code={basic:`<p-toolbar [style]="{ 'border-radius': '3rem', 'padding': '1rem 1rem 1rem 1.5rem' }">
    <ng-template #start>
        <div class="flex items-center gap-2">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; margin-right: 1rem">
                <path d="..." fill="var(--p-primary-color)" />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33"></mask>
            </svg>
            <p-button label="Files" text plain />
            <p-button label="Edit" text plain />
            <p-button label="View" text plain />
        </div>
    </ng-template>

    <ng-template #end>
        <div class="flex items-center gap-2">
            <p-button label="Share" severity="contrast" size="small" />
            <p-avatar image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" [style]="{ width: '32px', height: '32px' }" />
        </div>
    </ng-template>
</p-toolbar>`,html:`<div class="card">
  <p-toolbar [style]="{ 'border-radius': '3rem', 'padding': '1rem 1rem 1rem 1.5rem' }">
        <ng-template #start>
            <div class="flex items-center gap-2">
                 <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 2rem; margin-right: 1rem">
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
                <p-button label="Files" text plain />
                <p-button label="Edit" text plain />
                <p-button label="View" text plain />
            </div>
        </ng-template>

        <ng-template #end>
            <div class="flex items-center gap-2">
                <p-button label="Share" severity="contrast" size="small" />
                <p-avatar
                    image="/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                    [style]="{ width: '32px', height: '32px' }"
                />
            </div>
        </ng-template>
    </p-toolbar>
</div>`,typescript:`import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'toolbar-custom-demo',
    templateUrl: './toolbar-custom-demo.html',
    standalone: true,
    imports: [Toolbar, AvatarModule, ButtonModule]
})
export class ToolbarCustomDemo {

}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["custom-doc"]],decls:19,vars:4,consts:[["start",""],["end",""],[1,"card"],["selector","toolbar-custom-demo",3,"code"],[1,"flex","items-center","gap-2"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",2,"width","2rem","margin-right","1rem"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],["label","Files","text","","plain",""],["label","Edit","text","","plain",""],["label","View","text","","plain",""],["label","Share","severity","contrast","size","small"],["image","/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"]],template:function(t,l){t&1&&(i(0,"app-docsectiontext")(1,"p"),n(2,"Content can also be placed using the "),i(3,"i"),n(4,"start"),o(),n(5,", "),i(6,"i"),n(7,"center"),o(),n(8," and "),i(9,"i"),n(10,"end"),o(),n(11," templates."),o()(),i(12,"div",2)(13,"p-toolbar"),f(14,re,20,0,"ng-template",null,0,d)(16,ae,3,3,"ng-template",null,1,d),o()(),r(18,"app-code",3)),t&2&&(c(13),k(y(3,ie)),c(5),p("code",l.code))},dependencies:[v,s,h,x,b,g,A,B],encapsulation:2})}return e})();function pe(e,u){e&1&&r(0,"p-button",5)(1,"p-button",6)(2,"p-button",7)}function le(e,u){e&1&&(i(0,"p-iconfield",8),r(1,"p-inputicon",9)(2,"input",10),o())}function me(e,u){e&1&&r(0,"p-button",11)}var N=(()=>{class e{docs=[{data:C("Toolbar"),key:"Toolbar"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["toolbar-pt-viewer"]],decls:8,vars:1,consts:[["start",""],["center",""],["end",""],[3,"docs"],[1,"w-full"],["icon","pi pi-plus","text","","severity","secondary",1,"mr-2"],["icon","pi pi-print","text","","severity","secondary",1,"mr-2"],["icon","pi pi-upload","text","","severity","secondary"],["iconPosition","left"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Search"],["label","Save"]],template:function(t,l){t&1&&(i(0,"app-docptviewer",3)(1,"p-toolbar",4),f(2,pe,3,0,"ng-template",null,0,d)(4,le,3,0,"ng-template",null,1,d)(6,me,1,0,"ng-template",null,2,d),o()()),t&2&&p("docs",l.docs)},dependencies:[T,O,h,x,b,g,V,M,w,S,_,D],encapsulation:2})}return e})();var Q=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:N},{id:"pt.doc.toolbar",label:"Toolbar PT Options",component:H,data:C("Toolbar")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["toolbar-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,l){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),n(3,"Toolbar Pass Through"),o()(),r(4,"app-docsection",2),o()),t&2&&(c(4),p("docs",l.docs))},dependencies:[T,F],encapsulation:2})}return e})();var de=()=>["Toolbar"],W=(()=>{class e{ptComponent=Q;docs=[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:G},{id:"custom",label:"Custom",component:J},{id:"accessibility",label:"Accessibility",component:j}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Toolbar Component","header","Toolbar","description","Toolbar is a grouping component for buttons and other content.","themeDocs","toolbar",3,"docs","apiDocs","ptDocs"]],template:function(t,l){t&1&&r(0,"app-doc",0),t&2&&p("docs",l.docs)("apiDocs",y(3,de))("ptDocs",l.ptComponent)},dependencies:[P],encapsulation:2})}return e})();var tt=[{path:"",component:W}];export{tt as default};
