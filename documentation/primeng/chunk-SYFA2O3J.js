import{a as Z}from"./chunk-27JIZF5R.js";import{a as U}from"./chunk-CTI5WBER.js";import{h as Y}from"./chunk-MCW4FHXZ.js";import{Ea as W,Fa as p,Ia as J,La as K,Na as r,Oa as X}from"./chunk-UOUHADUB.js";import{r as $,w as P}from"./chunk-D2XKNHFS.js";import{Ab as N,Eb as s,Fb as m,Gb as k,Nb as H,Ob as O,Pc as R,Qa as g,R as _,S,Sb as y,T as V,Ub as Q,V as E,Va as B,X as a,Xb as v,Yb as z,Yc as C,Zb as h,Zc as q,_b as u,aa as w,ba as b,fc as D,gb as I,gc as d,hb as F,kb as M,lb as x,mb as A,oa as c,rc as j,tc as G,wb as f,zb as L}from"./chunk-O3KMSE75.js";var ee=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var le=`
    ${ee}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,re={root:{position:"relative"}},se={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},T=(()=>{class t extends J{name="toggleswitch";style=le;classes=se;inlineStyles=re;static \u0275fac=(()=>{let i;return function(e){return(i||(i=c(t)))(e||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();var de=["handle"],ae=["input"],ce=t=>({checked:t});function ge(t,oe){t&1&&H(0)}function he(t,oe){if(t&1&&A(0,ge,1,0,"ng-container",3),t&2){let i=Q();s("ngTemplateOutlet",i.handleTemplate||i._handleTemplate)("ngTemplateOutletContext",G(2,ce,i.checked()))}}var te=new E("TOGGLESWITCH_INSTANCE"),ue={provide:U,useExisting:_(()=>ie),multi:!0},ie=(()=>{class t extends Z{$pcToggleSwitch=a(te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=a(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=R();ariaLabelledBy;autofocus;onChange=new B;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=a(T);templates;onHostClick(i){this.onClick(i)}onAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"handle":this._handleTemplate=i.template;break;default:this._handleTemplate=i.template;break}})}onClick(i){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:i,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(i,o){o(i),this.cd.markForCheck()}static \u0275fac=(()=>{let i;return function(e){return(i||(i=c(t)))(e||t)}})();static \u0275cmp=I({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,e,n){if(o&1&&(v(n,de,4),v(n,W,4)),o&2){let l;h(l=u())&&(e.handleTemplate=l.first),h(l=u())&&(e.templates=l)}},viewQuery:function(o,e){if(o&1&&z(ae,5),o&2){let n;h(n=u())&&(e.input=n.first)}},hostVars:5,hostBindings:function(o,e){o&1&&y("click",function(l){return e.onHostClick(l)}),o&2&&(f("data-pc-name","toggleswitch"),D(e.sx("root")),d(e.cn(e.cx("root"),e.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",q],inputId:"inputId",readonly:[2,"readonly","readonly",C],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",C]},outputs:{onChange:"onChange"},features:[j([ue,T,{provide:te,useExisting:t},{provide:K,useExisting:t}]),x([r]),M],decls:5,vars:20,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,e){if(o&1){let n=O();m(0,"input",1,0),y("focus",function(){return w(n),b(e.onFocus())})("blur",function(){return w(n),b(e.onBlur())}),k(),m(2,"div",2)(3,"div",2),L(4,he,1,4,"ng-container"),k()()}o&2&&(d(e.cx("input")),s("checked",e.checked())("pAutoFocus",e.autofocus)("pBind",e.ptm("input")),f("id",e.inputId)("required",e.required()?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-checked",e.checked())("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("name",e.name())("tabindex",e.tabindex),g(2),d(e.cx("slider")),s("pBind",e.ptm("slider")),g(),d(e.cx("handle")),s("pBind",e.ptm("handle")),g(),N(e.handleTemplate||e._handleTemplate?4:-1))},dependencies:[P,$,Y,p,X,r],encapsulation:2,changeDetection:0})}return t})(),je=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=F({type:t});static \u0275inj=V({imports:[ie,p,p]})}return t})();export{ie as a,je as b};
