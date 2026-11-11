import{a as F}from"./chunk-W2A7AHXD.js";import{e as T}from"./chunk-CTI5WBER.js";import{j as w}from"./chunk-MCW4FHXZ.js";import{Ia as N,La as k,Na as d}from"./chunk-UOUHADUB.js";import{Lc as I,Mc as y,Pc as o,S as a,Sb as v,T as l,V as s,X as e,Yc as p,gc as b,hb as f,ib as x,kb as g,lb as m,oa as c,rc as h}from"./chunk-O3KMSE75.js";var S=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var E=`
    ${S}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,z={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},u=(()=>{class t extends N{name="inputtext";style=E;classes=z;static \u0275fac=(()=>{let i;return function(r){return(i||(i=c(t)))(r||t)}})();static \u0275prov=a({token:t,factory:t.\u0275fac})}return t})();var M=new s("INPUTTEXT_INSTANCE"),Q=(()=>{class t extends F{hostName="";ptInputText=o();bindDirectiveInstance=e(d,{self:!0});$pcInputText=e(M,{optional:!0,skipSelf:!0})??void 0;ngControl=e(T,{optional:!0,self:!0});pcFluid=e(w,{optional:!0,host:!0,skipSelf:!0});pSize;variant=o();fluid=o(void 0,{transform:p});invalid=o(void 0,{transform:p});$variant=I(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=e(u);constructor(){super(),y(()=>{this.ptInputText()&&this.directivePT.set(this.ptInputText())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,r){n&1&&v("input",function(D){return r.onInput(D)}),n&2&&b(r.cx("root"))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[h([u,{provide:M,useExisting:t},{provide:k,useExisting:t}]),m([d]),g]})}return t})(),W=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=f({type:t});static \u0275inj=l({})}return t})();export{Q as a,W as b};
