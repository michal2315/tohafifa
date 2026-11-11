import{a as X}from"./chunk-27JIZF5R.js";import{a as q}from"./chunk-CTI5WBER.js";import{ba as W}from"./chunk-MCW4FHXZ.js";import{Ea as U,Fa as y,Ia as K,La as Y,Na as r,Oa as J}from"./chunk-UOUHADUB.js";import{r as V,w as $}from"./chunk-D2XKNHFS.js";import{Ab as f,Eb as l,Fb as T,Gb as C,Hb as R,Nb as x,Pc as Q,Qa as g,R as w,S as I,Sb as z,T as E,Ub as d,V as O,Va as M,X as s,Xb as m,Yc as v,Zb as h,Zc as j,_b as k,gb as N,gc as u,hb as A,hc as P,ic as G,kb as S,lb as F,mb as _,oa as p,rc as H,tc as B,wb as D,zb as b}from"./chunk-O3KMSE75.js";var Z=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var it=`
    ${Z}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,lt={root:({instance:o})=>["p-togglebutton p-component",{"p-togglebutton-checked":o.checked,"p-invalid":o.invalid(),"p-disabled":o.$disabled(),"p-togglebutton-sm p-inputfield-sm":o.size==="small","p-togglebutton-lg p-inputfield-lg":o.size==="large","p-togglebutton-fluid":o.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},L=(()=>{class o extends K{name="togglebutton";style=it;classes=lt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(o)))(n||o)}})();static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();var rt=["icon"],at=["content"],ot=o=>({$implicit:o});function ct(o,a){o&1&&x(0)}function gt(o,a){if(o&1&&R(0,"span",0),o&2){let t=d(3);u(t.cn(t.cx("icon"),t.checked?t.onIcon:t.offIcon,t.iconPos==="left"?t.cx("iconLeft"):t.cx("iconRight"))),l("pBind",t.ptm("icon"))}}function dt(o,a){if(o&1&&b(0,gt,1,3,"span",2),o&2){let t=d(2);f(t.onIcon||t.offIcon?0:-1)}}function ut(o,a){o&1&&x(0)}function st(o,a){if(o&1&&_(0,ut,1,0,"ng-container",1),o&2){let t=d(2);l("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",B(2,ot,t.checked))}}function pt(o,a){if(o&1&&(b(0,dt,1,1)(1,st,1,4,"ng-container"),T(2,"span",0),P(3),C()),o&2){let t=d();f(t.iconTemplate?1:0),g(2),u(t.cx("label")),l("pBind",t.ptm("label")),g(),G(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var tt=new O("TOGGLEBUTTON_INSTANCE"),bt={provide:q,useExisting:w(()=>nt),multi:!0},nt=(()=>{class o extends X{$pcToggleButton=s(tt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=Q(void 0,{transform:v});onChange=new M;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=s(L);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}writeControlValue(t,e){this.checked=t,e(t),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(o)))(n||o)}})();static \u0275cmp=N({type:o,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(e,n,c){if(e&1&&(m(c,rt,4),m(c,at,4),m(c,U,4)),e&2){let i;h(i=k())&&(n.iconTemplate=i.first),h(i=k())&&(n.contentTemplate=i.first),h(i=k())&&(n.templates=i)}},hostVars:8,hostBindings:function(e,n){e&1&&z("keydown",function(i){return n.onKeyDown(i)})("click",function(i){return n.toggle(i)}),e&2&&(D("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-pressed",n.checked?"true":"false")("role","button")("tabindex",n.tabindex!==void 0?n.tabindex:n.$disabled()?-1:0)("data-pc-name","togglebutton"),u(n.cn(n.cx("root"),n.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",j],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",v],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[H([bt,L,{provide:tt,useExisting:o},{provide:Y,useExisting:o}]),F([W,r]),S],decls:3,vars:8,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(e,n){e&1&&(T(0,"span",0),_(1,ct,1,0,"ng-container",1),b(2,pt,4,5),C()),e&2&&(u(n.cx("content")),l("pBind",n.ptm("content")),g(),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",B(6,ot,n.checked)),g(),f(n.contentTemplate?-1:2))},dependencies:[$,V,y,J,r],encapsulation:2,changeDetection:0})}return o})(),Qt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=A({type:o});static \u0275inj=E({imports:[nt,y,y]})}return o})();export{nt as a,Qt as b};
