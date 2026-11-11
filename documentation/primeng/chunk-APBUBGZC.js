import{Fa as C,Ia as N,La as x,Ma as F,Na as s,Oa as v}from"./chunk-UOUHADUB.js";import{w as y}from"./chunk-D2XKNHFS.js";import{S as c,T as p,V as a,Vb as u,Wb as g,X as o,gb as l,gc as I,hb as d,kb as f,lb as m,oa as r,rc as h}from"./chunk-O3KMSE75.js";var M=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var z={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},S=(()=>{class t extends N{name="iconfield";style=M;classes=z;static \u0275fac=(()=>{let e;return function(n){return(e||(e=r(t)))(n||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})();var A=["*"],j=new a("ICONFIELD_INSTANCE"),w=(()=>{class t extends F{hostName="";_componentStyle=o(S);$pcIconField=o(j,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(n){return(e||(e=r(t)))(n||t)}})();static \u0275cmp=l({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,n){i&2&&I(n.cn(n.cx("root"),n.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[h([S,{provide:j,useExisting:t},{provide:x,useExisting:t}]),m([s]),f],ngContentSelectors:A,decls:1,vars:0,template:function(i,n){i&1&&(u(),g(0))},dependencies:[y,v],encapsulation:2,changeDetection:0})}return t})(),X=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=d({type:t});static \u0275inj=p({imports:[w]})}return t})();var P={root:"p-inputicon"},B=(()=>{class t extends N{name="inputicon";classes=P;static \u0275fac=(()=>{let e;return function(n){return(e||(e=r(t)))(n||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})();var b=["*"],E=new a("INPUTICON_INSTANCE"),k=(()=>{class t extends F{hostName="";styleClass;_componentStyle=o(B);$pcInputIcon=o(E,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=r(t)))(n||t)}})();static \u0275cmp=l({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,n){i&2&&I(n.cn(n.cx("root"),n.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[h([B,{provide:E,useExisting:t},{provide:x,useExisting:t}]),m([s]),f],ngContentSelectors:b,decls:1,vars:0,template:function(i,n){i&1&&(u(),g(0))},dependencies:[y,C,v],encapsulation:2,changeDetection:0})}return t})(),gt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=d({type:t});static \u0275inj=p({imports:[k,C,C]})}return t})();export{w as a,X as b,k as c,gt as d};
