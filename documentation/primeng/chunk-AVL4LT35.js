import{a as de,b as ue}from"./chunk-QU6ZZOVJ.js";import{a as q,b as se}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as ce}from"./chunk-FKOOMXTU.js";import{a as x}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as me}from"./chunk-XCUGNKAG.js";import{a as h,b as pe}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as ae,ha as re}from"./chunk-MCW4FHXZ.js";import{Ea as ne,Fa as O,Ia as ie,La as oe,Ma as le,Na as B}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as ee,n as F,r as te,w as b}from"./chunk-D2XKNHFS.js";import{Eb as o,Fb as a,Gb as l,Gc as u,Hb as d,La as Q,Lb as K,Mb as G,Nb as A,Qa as p,S as j,T as N,Ub as C,V as $,X as z,Xb as S,Zb as k,_b as M,cc as J,fc as W,gb as s,gc as _,hb as V,hc as r,ic as X,ja as H,jc as f,kb as L,lb as U,mb as c,oa as I,rc as Y,sc as Z,tc as w}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ve=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["timeline-accessibility-doc"]],decls:9,vars:0,template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),l(),a(3,"p"),r(4,"Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element."),l(),a(5,"h3"),r(6,"Keyboard Support"),l(),a(7,"p"),r(8,"Component does not include any interactive elements."),l()())},dependencies:[h],encapsulation:2})}return e})();var fe=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var Ee={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},P=(()=>{class e extends ie{name="timeline";style=fe;classes=Ee;static \u0275fac=(()=>{let t;return function(i){return(t||(t=I(e)))(i||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var ke=["content"],Me=["opposite"],Be=["marker"],R=e=>({$implicit:e});function ze(e,m){e&1&&A(0)}function Ie(e,m){e&1&&A(0)}function Ae(e,m){if(e&1&&(K(0),c(1,Ie,1,0,"ng-container",3),G()),e&2){let t=C().$implicit,n=C();p(),o("ngTemplateOutlet",n.markerTemplate||n._markerTemplate)("ngTemplateOutletContext",w(2,R,t))}}function Fe(e,m){if(e&1&&d(0,"div",2),e&2){let t=C(2);_(t.cx("eventMarker")),o("pBind",t.ptm("eventMarker"))}}function Oe(e,m){if(e&1&&d(0,"div",2),e&2){let t=C(2);_(t.cx("eventConnector")),o("pBind",t.ptm("eventConnector"))}}function qe(e,m){e&1&&A(0)}function Pe(e,m){if(e&1&&(a(0,"div",2)(1,"div",2),c(2,ze,1,0,"ng-container",3),l(),a(3,"div",2),c(4,Ae,2,4,"ng-container",4)(5,Fe,1,3,"ng-template",null,0,u)(7,Oe,1,3,"div",5),l(),a(8,"div",2),c(9,qe,1,0,"ng-container",3),l()()),e&2){let t=m.$implicit,n=m.last,i=J(6),v=C();_(v.cx("event")),o("pBind",v.ptm("event")),p(),_(v.cx("eventOpposite")),o("pBind",v.ptm("eventOpposite")),p(),o("ngTemplateOutlet",v.oppositeTemplate||v._oppositeTemplate)("ngTemplateOutletContext",w(19,R,t)),p(),_(v.cx("eventSeparator")),o("pBind",v.ptm("eventSeparator")),p(),o("ngIf",v.markerTemplate||v._markerTemplate)("ngIfElse",i),p(3),o("ngIf",!n),p(),_(v.cx("eventContent")),o("pBind",v.ptm("eventContent")),p(),o("ngTemplateOutlet",v.contentTemplate||v._contentTemplate)("ngTemplateOutletContext",w(21,R,t))}}var ge=new $("TIMELINE_INSTANCE"),g=(()=>{class e extends le{bindDirectiveInstance=z(B,{self:!0});$pcTimeline=z(ge,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=z(P);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=I(e)))(i||e)}})();static \u0275cmp=s({type:e,selectors:[["p-timeline"]],contentQueries:function(n,i,v){if(n&1&&(S(v,ke,4),S(v,Me,4),S(v,Be,4),S(v,ne,4)),n&2){let D;k(D=M())&&(i.contentTemplate=D.first),k(D=M())&&(i.oppositeTemplate=D.first),k(D=M())&&(i.markerTemplate=D.first),k(D=M())&&(i.templates=D)}},hostVars:2,hostBindings:function(n,i){n&2&&_(i.cn(i.cx("root"),i.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[Y([P,{provide:ge,useExisting:e},{provide:oe,useExisting:e}]),U([B]),L],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(n,i){n&1&&c(0,Pe,10,23,"div",1),n&2&&o("ngForOf",i.value)},dependencies:[b,ee,F,te,O,B],encapsulation:2,changeDetection:0})}return e})(),y=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=N({imports:[g,O,O]})}return e})();function Re(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t.status," ")}}function je(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t.status," ")}}function Ne(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t.status," ")}}var he=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events" class="w-full md:w-80">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="right">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-80" align="alternate">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`<div class="card flex flex-wrap gap-12">
    <p-timeline [value]="events" class="w-full md:w-80">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" class="w-full md:w-80" align="right">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" class="w-full md:w-80" align="alternate">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-alignment-demo',
    templateUrl: './timeline-alignment-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineAlignmentDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["alignment-doc"]],decls:17,vars:4,consts:[["content",""],[1,"card","flex","flex-wrap","gap-12"],[1,"w-full","md:w-80",3,"value"],["align","right",1,"w-full","md:w-80",3,"value"],["align","alternate",1,"w-full","md:w-80",3,"value"],["selector","timeline-alignment-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Content location relative the line is defined with the "),a(3,"i"),r(4,"align"),l(),r(5," property."),l()(),a(6,"div",1)(7,"p-timeline",2),c(8,Re,1,1,"ng-template",null,0,u),l(),a(10,"p-timeline",3),c(11,je,1,1,"ng-template",null,0,u),l(),a(13,"p-timeline",4),c(14,Ne,1,1,"ng-template",null,0,u),l()(),d(16,"app-code",5)),n&2&&(p(7),o("value",i.events),p(3),o("value",i.events),p(3),o("value",i.events),p(3),o("code",i.code))},dependencies:[h,y,g,x],encapsulation:2})}return e})();function $e(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t.status," ")}}var xe=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events">
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`<div class="card">
    <p-timeline [value]="events">
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

@Component({
    selector: 'timeline-basic-demo',
    templateUrl: './timeline-basic-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineBasicDemo {
    events: any[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:14,vars:2,consts:[["content",""],[1,"card"],[3,"value"],["selector","timeline-basic-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),r(2," Timeline receives the events with the "),a(3,"i"),r(4,"value"),l(),r(5," property as a collection of arbitrary objects. In addition, "),a(6,"i"),r(7,"content"),l(),r(8," template is required to display the representation of an event. Example below is a sample events array that is used throughout the documentation. "),l()(),a(9,"div",1)(10,"p-timeline",2),c(11,$e,1,1,"ng-template",null,0,u),l()(),d(13,"app-code",3)),n&2&&(p(10),o("value",i.events),p(3),o("code",i.code))},dependencies:[h,y,g,x],encapsulation:2})}return e})();function He(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t," ")}}function Qe(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t," ")}}function Ve(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t," ")}}function Le(e,m){e&1&&(a(0,"span"),r(1,"\xA0"),l())}var ye=(()=>{class e{events;constructor(){this.events=["2020","2021","2022","2023"]}code={basic:`<p-timeline [value]="events" layout="horizontal" align="top">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="bottom">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="alternate">
    <ng-template #content let-event>
        {{ event }}
    </ng-template>
    <ng-template #opposite let-event>
        <span>&nbsp;</span>
    </ng-template>
</p-timeline>`,html:`<div class="card flex flex-col gap-4">
    <p-timeline [value]="events" layout="horizontal" align="top">
        <ng-template #content let-event>
            {{ event }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" layout="horizontal" align="bottom">
        <ng-template #content let-event>
            {{ event }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" layout="horizontal" align="alternate">
        <ng-template #content let-event>
            {{ event }}
        </ng-template>
        <ng-template #opposite let-event>
            <span>&nbsp;</span>
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

@Component({
    selector: 'timeline-horizontal-demo',
    templateUrl: './timeline-horizontal-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineHorizontalDemo {
    events: string[];

    constructor() {
        this.events = [
            "2020", "2021", "2022", "2023"
        ];
    }
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["horizontal-doc"]],decls:25,vars:4,consts:[["content",""],["opposite",""],[1,"card","flex","flex-col","gap-4"],["layout","horizontal","align","top",3,"value"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],["selector","timeline-horizontal-demo",3,"code"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"TimeLine orientation is controlled with the "),a(3,"i"),r(4,"layout"),l(),r(5," property, default is "),a(6,"i"),r(7,"vertical"),l(),r(8," having "),a(9,"i"),r(10,"horizontal"),l(),r(11," as the alternative."),l()(),a(12,"div",2)(13,"p-timeline",3),c(14,He,1,1,"ng-template",null,0,u),l(),a(16,"p-timeline",4),c(17,Qe,1,1,"ng-template",null,0,u),l(),a(19,"p-timeline",5),c(20,Ve,1,1,"ng-template",null,0,u)(22,Le,2,0,"ng-template",null,1,u),l()(),d(24,"app-code",6)),n&2&&(p(13),o("value",i.events),p(3),o("value",i.events),p(3),o("value",i.events),p(5),o("code",i.code))},dependencies:[h,y,g,x],encapsulation:2})}return e})();var Te=(()=>{class e{code={typescript:"import { TimelineModule } from 'primeng/timeline';"};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["timeline-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,i){n&1&&d(0,"app-code",0),n&2&&o("code",i.code)("hideToggleCode",!0)},dependencies:[x],encapsulation:2})}return e})();function Ue(e,m){if(e&1&&(a(0,"small",5),r(1),l()),e&2){let t=m.$implicit;p(),X(t.date)}}function Ke(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t.status," ")}}var _e=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events">
    <ng-template #opposite let-event>
        <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
    </ng-template>
    <ng-template #content let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`<div class="card">
    <p-timeline [value]="events">
         <ng-template #opposite let-event>
            <small class="text-surface-500 dark:text-surface-400">{{ event.date }}</small>
        </ng-template>
        <ng-template #content let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-opposite-demo',
    templateUrl: './timeline-opposite-demo.html',
    standalone: true,
    imports: [Timeline]
})
export class TimelineOppositeDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["opposite-doc"]],decls:13,vars:2,consts:[["opposite",""],["content",""],[1,"card"],[3,"value"],["selector","timeline-opposite-demo",3,"code"],[1,"text-surface-500","dark:text-surface-400"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Additional content at the other side of the line can be provided with the "),a(3,"i"),r(4,"opposite"),l(),r(5," property."),l()(),a(6,"div",2)(7,"p-timeline",3),c(8,Ue,2,1,"ng-template",null,0,u)(10,Ke,1,1,"ng-template",null,1,u),l()(),d(12,"app-code",4)),n&2&&(p(7),o("value",i.events),p(5),o("code",i.code))},dependencies:[h,y,g,x],encapsulation:2})}return e})();var Ge=e=>({"background-color":e});function Je(e,m){if(e&1&&(a(0,"span",5),d(1,"i"),l()),e&2){let t=m.$implicit;W(w(4,Ge,t.color)),p(),_(t.icon)}}function We(e,m){if(e&1&&d(0,"img",9),e&2){let t=C().$implicit;o("src","/_ext/primefaces.org/cdn/primeng/images/demo/product/"+t.image,Q)("alt",t.name)}}function Xe(e,m){if(e&1&&(a(0,"p-card",6),c(1,We,1,2,"img",7),a(2,"p"),r(3," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),l(),d(4,"p-button",8),l()),e&2){let t=m.$implicit;o("header",t.status)("subheader",t.date),p(),o("ngIf",t.image),p(3),o("text",!0)}}var De=(()=>{class e{events;constructor(){this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}code={basic:`<p-timeline [value]="events" align="alternate" class="customized-timeline">
    <ng-template #marker let-event>
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
            <i [class]="event.icon"></i>
        </span>
    </ng-template>
    <ng-template #content let-event>
        <p-card [header]="event.status" [subheader]="event.date">
            <img *ngIf="event.image" [src]="'/_ext/primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                neque quas!
            </p>
            <p-button label="Read more" [text]="true" />
        </p-card>
    </ng-template>
</p-timeline>`,html:`<div class="card">
    <p-timeline [value]="events" align="alternate" class="customized-timeline">
        <ng-template #marker let-event>
            <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" [style]="{ 'background-color': event.color }">
                <i [class]="event.icon"></i>
            </span>
        </ng-template>
        <ng-template #content let-event>
            <p-card [header]="event.status" [subheader]="event.date">
                <img *ngIf="event.image" [src]="'/_ext/primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                    neque quas!
                </p>
                <p-button label="Read more" [text]="true" />
            </p-card>
        </ng-template>
    </p-timeline>
</div>`,typescript:`import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-template-demo',
    templateUrl: './timeline-template-demo.html',
    standalone: true,
    imports: [Timeline, CardModule, ButtonModule]
})
export class TimelineTemplateDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["template-doc"]],decls:10,vars:2,consts:[["marker",""],["content",""],[1,"card"],["align","alternate",1,"customized-timeline",3,"value"],["selector","timeline-template-demo",3,"code"],[1,"flex","w-8","h-8","items-center","justify-center","text-white","rounded-full","z-10","shadow-sm"],[3,"header","subheader"],["width","200","class","shadow",3,"src","alt",4,"ngIf"],["label","Read more",3,"text"],["width","200",1,"shadow",3,"src","alt"]],template:function(n,i){n&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Sample implementation with custom content and styled markers."),l()(),a(3,"div",2)(4,"p-timeline",3),c(5,Je,2,6,"ng-template",null,0,u)(7,Xe,5,4,"ng-template",null,1,u),l()(),d(9,"app-code",4)),n&2&&(p(4),o("value",i.events),p(5),o("code",i.code))},dependencies:[b,F,h,y,g,ue,de,re,ae,x],encapsulation:2})}return e})();function Ye(e,m){if(e&1&&r(0),e&2){let t=m.$implicit;f(" ",t.status," ")}}var Ce=(()=>{class e{events=H([{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]);docs=[{data:q("Timeline"),key:"Timeline"}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["timeline-pt-viewer"]],decls:4,vars:2,consts:[["content",""],[3,"docs"],[3,"value"]],template:function(n,i){n&1&&(a(0,"app-docptviewer",1)(1,"p-timeline",2),c(2,Ye,1,1,"ng-template",null,0,u),l()()),n&2&&(o("docs",i.docs),p(),o("value",i.events()))},dependencies:[b,se,y,g],encapsulation:2})}return e})();var be=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:Ce},{id:"pt.doc.timeline",label:"Timeline PT Options",component:pe,data:q("Timeline")}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["timeline-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),r(3,"Timeline Pass Through"),l()(),d(4,"app-docsection",2),l()),n&2&&(p(4),o("docs",i.docs))},dependencies:[b,me],encapsulation:2})}return e})();var Ze=()=>["Timeline"],we=(()=>{class e{ptComponent=be;docs=[{id:"import",label:"Import",component:Te},{id:"basic",label:"Basic",component:xe},{id:"alignment",label:"Alignment",component:he},{id:"opposite",label:"Opposite",component:_e},{id:"template",label:"Template",component:De},{id:"horizontal",label:"Horizontal",component:ye},{id:"accessibility",label:"Accessibility",component:ve}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Timeline Component","header","Timeline","description","Timeline visualizes a series of chained events.","themeDocs","timeline",3,"docs","apiDocs","ptDocs"]],template:function(n,i){n&1&&d(0,"app-doc",0),n&2&&o("docs",i.docs)("apiDocs",Z(3,Ze))("ptDocs",i.ptComponent)},dependencies:[ce],styles:[".custom-marker[_ngcontent-%COMP%]{display:flex;width:2rem;height:2rem;align-items:center;justify-content:center;color:#fff;border-radius:50%;z-index:1}  .p-timeline-event-content,   .p-timeline-event-opposite{line-height:1}@media screen and (max-width: 960px){  .customized-timeline .p-timeline-event:nth-child(2n){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]})}return e})();var Dn=[{path:"",component:we}];export{Dn as default};
