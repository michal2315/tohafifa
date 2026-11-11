import{a as se}from"./chunk-27JIZF5R.js";import{a as te,e as ie}from"./chunk-CTI5WBER.js";import{K as le,z as de}from"./chunk-MCW4FHXZ.js";import{Ea as oe,Fa as y,Ia as ce,La as re,Na as h,Oa as ae,f as J,g as W}from"./chunk-UOUHADUB.js";import{k as Y,n as Z,r as ee,w as ne}from"./chunk-D2XKNHFS.js";import{Eb as c,Fb as V,Gb as B,Hb as _,Lb as T,Lc as X,Mb as M,Ob as R,Pc as S,Qa as d,R as z,S as F,Sb as q,T as A,Ub as s,V as D,Va as g,X as k,Xb as E,Yb as H,Yc as u,Zb as v,Zc as U,_b as C,aa as x,ba as m,ca as I,fc as G,gb as L,gc as l,hb as Q,ja as O,kb as j,lb as $,mb as b,oa as f,rc as P,uc as K,wb as w}from"./chunk-O3KMSE75.js";var he=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var ke=`
    ${he}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,xe={root:({instance:e})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":e.checked,"p-disabled":e.$disabled(),"p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-checkbox-sm p-inputfield-sm":e.size()==="small","p-checkbox-lg p-inputfield-lg":e.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},N=(()=>{class e extends ce{name="checkbox";style=ke;classes=xe;static \u0275fac=(()=>{let o;return function(n){return(o||(o=f(e)))(n||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var me=["icon"],fe=["input"],ge=(e,a)=>({checked:e,class:a});function _e(e,a){if(e&1&&_(0,"span",8),e&2){let o=s(3);l(o.cx("icon")),c("ngClass",o.checkboxIcon)("pBind",o.ptm("icon"))}}function ve(e,a){if(e&1&&(I(),_(0,"svg",9)),e&2){let o=s(3);l(o.cx("icon")),c("pBind",o.ptm("icon"))}}function Ce(e,a){if(e&1&&(T(0),b(1,_e,1,4,"span",6)(2,ve,1,3,"svg",7),M()),e&2){let o=s(2);d(),c("ngIf",o.checkboxIcon),d(),c("ngIf",!o.checkboxIcon)}}function ye(e,a){if(e&1&&(I(),_(0,"svg",10)),e&2){let o=s(2);l(o.cx("icon")),c("pBind",o.ptm("icon"))}}function Ie(e,a){if(e&1&&(T(0),b(1,Ce,3,2,"ng-container",3)(2,ye,1,3,"svg",5),M()),e&2){let o=s();d(),c("ngIf",o.checked),d(),c("ngIf",o._indeterminate())}}function we(e,a){}function Ve(e,a){e&1&&b(0,we,0,0,"ng-template")}var pe=new D("CHECKBOX_INSTANCE"),Be={provide:te,useExisting:z(()=>be),multi:!0},be=(()=>{class e extends se{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=S();size=S();onChange=new g;onFocus=new g;onBlur=new g;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:W(this.value,this.modelValue())}_indeterminate=O(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=k(N);bindDirectiveInstance=k(h,{self:!0});$pcCheckbox=k(pe,{optional:!0,skipSelf:!0})??void 0;$variant=X(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(o=>{switch(o.getType()){case"icon":this._checkboxIconTemplate=o.template;break;case"checkboxicon":this._checkboxIconTemplate=o.template;break}})}onChanges(o){o.indeterminate&&this._indeterminate.set(o.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(o){let t,n=this.injector.get(ie,null,{optional:!0,self:!0}),i=n&&!this.formControl?n.value:this.modelValue();this.binary?(t=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(t),this.onModelChange(t)):(this.checked||this._indeterminate()?t=i.filter(r=>!J(r,this.value)):t=i?[...i,this.value]:[this.value],this.onModelChange(t),this.writeModelValue(t),this.formControl&&this.formControl.setValue(t)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:t,originalEvent:o})}handleChange(o){this.readonly||this.updateModel(o)}onInputFocus(o){this.focused=!0,this.onFocus.emit(o)}onInputBlur(o){this.focused=!1,this.onBlur.emit(o),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(o,t){t(o),this.cd.markForCheck()}static \u0275fac=(()=>{let o;return function(n){return(o||(o=f(e)))(n||e)}})();static \u0275cmp=L({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(t,n,i){if(t&1&&(E(i,me,4),E(i,oe,4)),t&2){let r;v(r=C())&&(n.checkboxIconTemplate=r.first),v(r=C())&&(n.templates=r)}},viewQuery:function(t,n){if(t&1&&H(fe,5),t&2){let i;v(i=C())&&(n.inputViewChild=i.first)}},hostVars:5,hostBindings:function(t,n){t&2&&(w("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.$disabled()),l(n.cn(n.cx("root"),n.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",u],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",U],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",u],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",u],autofocus:[2,"autofocus","autofocus",u],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[P([Be,N,{provide:pe,useExisting:e},{provide:re,useExisting:e}]),$([h]),j],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(t,n){if(t&1){let i=R();V(0,"input",1,0),q("focus",function(p){return x(i),m(n.onInputFocus(p))})("blur",function(p){return x(i),m(n.onInputBlur(p))})("change",function(p){return x(i),m(n.handleChange(p))}),B(),V(2,"div",2),b(3,Ie,3,2,"ng-container",3)(4,Ve,1,0,null,4),B()}t&2&&(G(n.inputStyle),l(n.cn(n.cx("input"),n.inputClass)),c("checked",n.checked)("pBind",n.ptm("input")),w("id",n.inputId)("value",n.value)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),d(2),l(n.cx("box")),c("pBind",n.ptm("box")),d(),c("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),d(),c("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",K(21,ge,n.checked,n.cx("icon"))))},dependencies:[ne,Y,Z,ee,y,de,le,ae,h],encapsulation:2,changeDetection:0})}return e})(),nn=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=Q({type:e});static \u0275inj=A({imports:[be,y,y]})}return e})();export{be as a,nn as b};
