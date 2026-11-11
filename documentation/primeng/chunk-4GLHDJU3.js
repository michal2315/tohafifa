import{a as d,b as g}from"./chunk-PKCXEJCN.js";import{a as x,b as Z}from"./chunk-JNUBCW5H.js";import{a as w,b as A}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as O}from"./chunk-FKOOMXTU.js";import{a as l}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as F}from"./chunk-XCUGNKAG.js";import{a as u,b as I}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import{za as v}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as D}from"./chunk-D2XKNHFS.js";import{$a as b,Eb as n,Fb as i,Gb as r,Gc as T,Hb as p,Qa as m,Uc as E,Wa as S,fc as M,gb as c,hc as o,jc as B,mb as C,rc as y,sc as h}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var _=(()=>{class e{code={html:`<span id="label_status">Status</span>
<p-progressbar aria-labelledby="label_status" />

<p-progressbar aria-label="Status" />`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["progress-bar-accessibility-doc"]],decls:29,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,s){t&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),o(3,"Screen Reader"),r(),i(4,"p"),o(5," ProgressBar components uses "),i(6,"i"),o(7,"progressbar"),r(),o(8," role along with "),i(9,"i"),o(10,"aria-valuemin"),r(),o(11,", "),i(12,"i"),o(13,"aria-valuemax"),r(),o(14," and "),i(15,"i"),o(16,"aria-valuenow"),r(),o(17," attributes. Value to describe the component can be defined using"),i(18,"i"),o(19,"aria-labelledby"),r(),o(20," and "),i(21,"i"),o(22,"aria-label"),r(),o(23," props. "),r()(),p(24,"app-code",0),i(25,"h3"),o(26,"Keyboard Support"),r(),i(27,"p"),o(28,"Not applicable."),r()()),t&2&&(m(24),n("code",s.code)("hideToggleCode",!0))},dependencies:[l,u],encapsulation:2})}return e})();var V=(()=>{class e{code={basic:'<p-progressbar [value]="50" />',html:`<div class="card">
    <p-progressbar [value]="50" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'progress-bar-basic-demo',
    templateUrl: './progress-bar-basic-demo.html',
    standalone: true,
    imports: [ProgressBar]
})
export class ProgressBarBasicDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card"],[3,"value"],["selector","progress-bar-basic-demo",3,"code"]],template:function(t,s){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"ProgressBar is used with the "),i(3,"i"),o(4,"value"),r(),o(5," property."),r()(),i(6,"div",0),p(7,"p-progressbar",1),r(),p(8,"app-code",2)),t&2&&(m(7),n("value",50),m(),n("code",s.code))},dependencies:[g,d,l,u],encapsulation:2})}return e})();var k=(()=>{class e{messageService;cd;ngZone;value=0;interval;constructor(a,t,s){this.messageService=a,this.cd=t,this.ngZone=s}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.interval=setInterval(()=>{this.ngZone.run(()=>{this.value=this.value+Math.floor(Math.random()*10)+1,this.value>=100&&(this.value=100,this.messageService.add({severity:"info",summary:"Success",detail:"Process Completed"}),clearInterval(this.interval)),this.cd.markForCheck()})},2e3)})}ngOnDestroy(){this.interval&&clearInterval(this.interval)}code={basic:'<p-progressbar [value]="value" />',html:`<div class="card">
    <p-toast />
    <p-progressbar [value]="value" />
</div>`,typescript:`import { Component, NgZone, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'progress-bar-dynamic-demo',
    templateUrl: './progress-bar-dynamic-demo.html',
    standalone: true,
    imports: [ProgressBar, ToastModule],
    providers: [MessageService]
})
export class ProgressBarDynamicDemo implements OnInit {
    value: number = 0;

    interval: any;

    constructor(private messageService: MessageService, private ngZone: NgZone) {}

    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            this.interval = setInterval(() => {
                this.ngZone.run(() => {
                    this.value = this.value + Math.floor(Math.random() * 10) + 1;
                    if (this.value >= 100) {
                        this.value = 100;
                        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                        clearInterval(this.interval);
                    }
                });
            }, 2000);
        });
    }

    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}`};static \u0275fac=function(t){return new(t||e)(b(v),b(E),b(S))};static \u0275cmp=c({type:e,selectors:[["dynamic-doc"]],features:[y([v])],decls:7,vars:2,consts:[[1,"card"],[3,"value"],["selector","progress-bar-dynamic-demo",3,"code"]],template:function(t,s){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Value is reactive so updating it dynamically changes the bar as well."),r()(),i(3,"div",0),p(4,"p-toast")(5,"p-progressbar",1),r(),p(6,"app-code",2)),t&2&&(m(5),n("value",s.value),m(),n("code",s.code))},dependencies:[g,d,A,w,l,u],encapsulation:2})}return e})();var N=(()=>{class e{code={typescript:`import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["progress-bar-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,s){t&1&&p(0,"app-code",0),t&2&&n("code",s.code)("hideToggleCode",!0)},dependencies:[l],encapsulation:2})}return e})();var z=()=>({height:"6px"}),U=(()=>{class e{code={basic:`<p-progressbar mode="indeterminate" [style]="{ height: '6px' }" />`,html:`<div class="card">
    <p-progressbar mode="indeterminate" [style]="{'height': '6px'}" />
</div>`,typescript:`import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'progress-bar-indeterminate-demo',
    templateUrl: './progress-bar-indeterminate-demo.html',
    standalone: true,
    imports: [ProgressBar],
    providers: [MessageService]
})
export class ProgressBarIndeterminateDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["indeterminate-doc"]],features:[y([v])],decls:12,vars:4,consts:[[1,"card"],["mode","indeterminate"],["selector","progress-bar-indeterminate-demo",3,"code"]],template:function(t,s){t&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"For progresses with no value to track, set the "),i(3,"i"),o(4,"mode"),r(),o(5," property to "),i(6,"i"),o(7,"indeterminate"),r(),o(8,"."),r()(),i(9,"div",0),p(10,"p-progressbar",1),r(),p(11,"app-code",2)),t&2&&(m(10),M(h(3,z)),m(),n("code",s.code))},dependencies:[g,d,l,u],encapsulation:2})}return e})();var j=(()=>{class e{docs=[{data:x("ProgressBar"),key:"ProgressBar"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["progressbar-pt-viewer"]],decls:3,vars:2,consts:[[3,"docs"],[1,"w-full"],[3,"value"]],template:function(t,s){t&1&&(i(0,"app-docptviewer",0)(1,"div",1),p(2,"p-progressbar",2),r()()),t&2&&(n("docs",s.docs),m(2),n("value",50))},dependencies:[D,Z,g,d],encapsulation:2})}return e})();var R=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:j},{id:"pt.doc.progressbar",label:"ProgressBar PT Options",component:I,data:x("ProgressBar")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["progressbar-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,s){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),o(3,"ProgressBar Pass Through"),r()(),p(4,"app-docsection",2),r()),t&2&&(m(4),n("docs",s.docs))},dependencies:[D,F],encapsulation:2})}return e})();function G(e,q){if(e&1&&(i(0,"span"),o(1),r()),e&2){let a=q.$implicit;m(),B("",a,"/100")}}var K=(()=>{class e{code={basic:`<p-progressbar [value]="50">
    <ng-template #content let-value>
        <span>{{value}}/100</span>
    </ng-template>
</p-progressbar>`,html:`<div class="card">
     <p-progressbar [value]="50">
         <ng-template #content let-value>
            <span>{{value}}/100</span>
         </ng-template>
     </p-progressbar>
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'progress-bar-template-demo',
    templateUrl: './progress-bar-template-demo.html',
    standalone: true,
    imports: [ProgressBar]
})
export class ProgressBarTemplateDemo {}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["template-doc"]],decls:10,vars:2,consts:[["content",""],[1,"card"],[3,"value"],["selector","progress-bar-template-demo",3,"code"]],template:function(t,s){t&1&&(i(0,"app-docsectiontext")(1,"p")(2,"i"),o(3,"content"),r(),o(4," template allows displaying custom content inside the progressbar."),r()(),i(5,"div",1)(6,"p-progressbar",2),C(7,G,2,1,"ng-template",null,0,T),r()(),p(9,"app-code",3)),t&2&&(m(6),n("value",50),m(3),n("code",s.code))},dependencies:[g,d,l,u],encapsulation:2})}return e})();var H=()=>["ProgressBar"],$=(()=>{class e{ptComponent=R;docs=[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:V},{id:"dynamic",label:"Dynamic",component:k},{id:"template",label:"Template",component:K},{id:"indeterminate",label:"Indeterminate",component:U},{id:"accessibility",label:"Accessibility",component:_}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ProgressBar Component","header","ProgressBar","description","ProgressBar is a process status indicator.","themeDocs","progressbar",3,"docs","ptDocs","apiDocs"]],template:function(t,s){t&1&&p(0,"app-doc",0),t&2&&n("docs",s.docs)("ptDocs",s.ptComponent)("apiDocs",h(3,H))},dependencies:[O],encapsulation:2})}return e})();var je=[{path:"",component:$}];export{je as default};
