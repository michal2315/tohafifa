import{Ea as q,Fa as m,Ia as G,La as H,Ma as $,Na as o}from"./chunk-UOUHADUB.js";import{n as O,r as Q,w as z}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as b,Gb as v,Hb as A,Nb as F,Qa as a,S as k,T,Ub as c,V as B,X as p,Xb as y,Yc as V,Zb as h,Zc as j,_b as x,dc as u,gb as w,gc as s,hb as I,hc as M,kb as S,kc as N,lb as P,mb as f,oa as d,rc as R,tc as D,wb as E}from"./chunk-O3KMSE75.js";var J=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var U={root:({instance:n})=>["p-progressbar p-component",{"p-progressbar-determinate":n.mode=="determinate","p-progressbar-indeterminate":n.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},_=(()=>{class n extends G{name="progressbar";style=J;classes=U;static \u0275fac=(()=>{let e;return function(t){return(e||(e=d(n)))(t||n)}})();static \u0275prov=k({token:n,factory:n.\u0275fac})}return n})();var W=["content"],X=n=>({$implicit:n});function Y(n,g){if(n&1&&(b(0,"div"),M(1),v()),n&2){let e=c(2);u("display",e.value!=null&&e.value!==0?"flex":"none"),a(),N("",e.value,"",e.unit)}}function Z(n,g){n&1&&F(0)}function ee(n,g){if(n&1&&(b(0,"div",2)(1,"div",2),f(2,Y,2,4,"div",3)(3,Z,1,0,"ng-container",4),v()()),n&2){let e=c();s(e.cn(e.cx("value"),e.valueStyleClass)),u("width",e.value+"%")("display","flex")("background",e.color),r("pBind",e.ptm("value")),a(),s(e.cx("label")),r("pBind",e.ptm("label")),a(),r("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),a(),r("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",D(15,X,e.value))}}function ne(n,g){if(n&1&&A(0,"div",2),n&2){let e=c();s(e.cn(e.cx("value"),e.valueStyleClass)),u("background",e.color),r("pBind",e.ptm("value"))}}var K=new B("PROGRESSBAR_INSTANCE"),te=(()=>{class n extends ${$pcProgressBar=p(K,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(o,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=p(_);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(t){return(e||(e=d(n)))(t||n)}})();static \u0275cmp=w({type:n,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,t,C){if(i&1&&(y(C,W,4),y(C,q,4)),i&2){let l;h(l=x())&&(t.contentTemplate=l.first),h(l=x())&&(t.templates=l)}},hostVars:6,hostBindings:function(i,t){i&2&&(E("aria-valuemin",0)("aria-valuenow",t.value)("aria-valuemax",100)("aria-level",t.value+t.unit),s(t.cn(t.cx("root"),t.styleClass)))},inputs:{value:[2,"value","value",j],showValue:[2,"showValue","showValue",V],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[R([_,{provide:K,useExisting:n},{provide:H,useExisting:n}]),P([o]),S],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,t){i&1&&f(0,ee,4,17,"div",0)(1,ne,1,5,"div",1),i&2&&(r("ngIf",t.mode==="determinate"),a(),r("ngIf",t.mode==="indeterminate"))},dependencies:[z,O,Q,m,o],encapsulation:2,changeDetection:0})}return n})(),Ce=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=I({type:n});static \u0275inj=T({imports:[te,m,m]})}return n})();export{te as a,Ce as b};
