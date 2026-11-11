import{a as C,b as U}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as H}from"./chunk-FKOOMXTU.js";import{a as d}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as G}from"./chunk-XCUGNKAG.js";import{a as u,b as O}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import{Fa as b,Ia as L,La as R,Ma as W,Na as S}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as g}from"./chunk-D2XKNHFS.js";import{Eb as a,Fb as i,Gb as o,Hb as p,Qa as m,S as M,T as w,V as E,X as h,ca as A,dc as N,fc as j,gb as c,gc as D,hb as I,hc as s,kb as F,lb as B,oa as v,rc as V,sc as x,wb as P}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var _=(()=>{class e{code={html:'<p-progress-spinner aria-label="Loading"></p-progress-spinner>'};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["progress-spinner-accessibility-doc"]],decls:20,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,t){n&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),s(3,"Screen Reader"),o(),i(4,"p"),s(5,"ProgressSpinner components uses "),i(6,"i"),s(7,"progressbar"),o(),s(8," role. Value to describe the component can be defined using "),i(9,"i"),s(10,"aria-labelledby"),o(),s(11," and "),i(12,"i"),s(13,"aria-label"),o(),s(14," props."),o()(),p(15,"app-code",0),i(16,"h3"),s(17,"Keyboard Support"),o(),i(18,"p"),s(19,"Component does not include any interactive elements."),o()()),n&2&&(m(15),a("code",t.code)("hideToggleCode",!0))},dependencies:[d,u],encapsulation:2})}return e})();var z=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var Z={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},k=(()=>{class e extends L{name="progressspinner";style=z;classes=Z;static \u0275fac=(()=>{let r;return function(t){return(r||(r=v(e)))(t||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var K=new E("PROGRESSSPINNER_INSTANCE"),f=(()=>{class e extends W{$pcProgressSpinner=h(K,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(S,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=h(k);static \u0275fac=(()=>{let r;return function(t){return(r||(r=v(e)))(t||e)}})();static \u0275cmp=c({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(n,t){n&2&&(P("aria-label",t.ariaLabel)("role","progressbar")("aria-busy",!0),D(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[V([k,{provide:K,useExisting:e},{provide:R,useExisting:e}]),B([S]),F],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(n,t){n&1&&(A(),i(0,"svg",0),p(1,"circle",1),o()),n&2&&(D(t.cx("spin")),N("animation-duration",t.animationDuration),a("pBind",t.ptm("spin")),m(),D(t.cx("circle")),a("pBind",t.ptm("circle")),P("fill",t.fill)("stroke-width",t.strokeWidth))},dependencies:[g,b,S],encapsulation:2,changeDetection:0})}return e})(),y=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=I({type:e});static \u0275inj=w({imports:[f,b,b]})}return e})();var $=(()=>{class e{code={basic:'<p-progress-spinner ariaLabel="loading" />',html:`<div class="card flex justify-center">
    <p-progress-spinner ariaLabel="loading" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
    selector: 'progress-spinner-basic-demo',
    templateUrl: './progress-spinner-basic-demo.html',
    standalone: true,
    imports: [ProgressSpinner]
})
export class ProgressSpinnerBasicDemo {}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["basic-doc"]],decls:6,vars:1,consts:[[1,"card","flex","justify-center"],["ariaLabel","loading"],["selector","progress-spinner-basic-demo",3,"code"]],template:function(n,t){n&1&&(i(0,"app-docsectiontext")(1,"p"),s(2,"An infinite spin animation is displayed by default."),o()(),i(3,"div",0),p(4,"p-progress-spinner",1),o(),p(5,"app-code",2)),n&2&&(m(5),a("code",t.code))},dependencies:[y,f,d,u],encapsulation:2})}return e})();var ee=()=>({width:"50px",height:"50px"}),q=(()=>{class e{id;title;code={basic:`<p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />`,html:`<div class="card flex justify-center">
    <p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" [style]="{ width: '50px', height: '50px' }" />
</div>`,typescript:`import { Component } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
    selector: 'progress-spinner-custom-demo',
    templateUrl: './progress-spinner-custom-demo.html',
    standalone: true,
    imports: [ProgressSpinner]
})
export class ProgressSpinnerCustomDemo {}`};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["custom-doc"]],inputs:{id:"id",title:"title"},decls:12,vars:4,consts:[[1,"card","flex","justify-center"],["strokeWidth","8","fill","transparent","animationDuration",".5s"],["selector","progress-spinner-custom-demo",3,"code"]],template:function(n,t){n&1&&(i(0,"app-docsectiontext")(1,"p"),s(2,"ProgressSpinner can be customized with styling property like "),i(3,"i"),s(4,"strokeWidth"),o(),s(5," and "),i(6,"i"),s(7,"fill"),o(),s(8,"."),o()(),i(9,"div",0),p(10,"p-progress-spinner",1),o(),p(11,"app-code",2)),n&2&&(m(10),j(x(3,ee)),m(),a("code",t.code))},dependencies:[y,f,d,u],encapsulation:2})}return e})();var J=(()=>{class e{code={typescript:"import { ProgressSpinnerModule } from 'primeng/progressspinner';"};static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["progress-spinner-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,t){n&1&&p(0,"app-code",0),n&2&&a("code",t.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2})}return e})();var Q=(()=>{class e{docs=[{data:C("ProgressSpinner"),key:"ProgressSpinner"}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["progressspinner-pt-viewer"]],decls:2,vars:1,consts:[[3,"docs"]],template:function(n,t){n&1&&(i(0,"app-docptviewer",0),p(1,"p-progressspinner"),o()),n&2&&a("docs",t.docs)},dependencies:[g,U,y,f],encapsulation:2})}return e})();var X=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:Q},{id:"pt.doc.progressspinner",label:"ProgressSpinner PT Options",component:O,data:C("ProgressSpinner")}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["progressspinner-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,t){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),s(3,"ProgressSpinner Pass Through"),o()(),p(4,"app-docsection",2),o()),n&2&&(m(4),a("docs",t.docs))},dependencies:[g,G],encapsulation:2})}return e})();var ne=()=>["ProgressSpinner"],Y=(()=>{class e{ptComponent=X;docs=[{id:"import",label:"Import",component:J},{id:"basic",label:"Basic",component:$},{id:"custom",label:"Custom",component:q},{id:"accessibility",label:"Accessibility",component:_}];static \u0275fac=function(n){return new(n||e)};static \u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ProgressSpinner Component","header","ProgressSpinner","description","ProgressSpinner is a process status indicator.","themeDocs","progressspinner",3,"docs","ptDocs","apiDocs"]],template:function(n,t){n&1&&p(0,"app-doc",0),n&2&&a("docs",t.docs)("ptDocs",t.ptComponent)("apiDocs",x(3,ne))},dependencies:[H],encapsulation:2})}return e})();var Ye=[{path:"",component:Y}];export{Ye as default};
