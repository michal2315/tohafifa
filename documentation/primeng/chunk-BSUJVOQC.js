import{Fa as u,Ia as I,La as x,Ma as w,Na as i,Oa as v}from"./chunk-UOUHADUB.js";import{S as d,T as a,V as s,Vb as m,Wb as b,X as e,fc as S,gb as l,gc as h,hb as c,kb as f,lb as g,oa as r,rc as y}from"./chunk-O3KMSE75.js";var A=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var j=`
    ${A}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,M={root:({instance:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},C=(()=>{class t extends I{name="inputgroup";style=j;classes=M;static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var G=["*"],B=new s("INPUTGROUP_INSTANCE"),L=(()=>{class t extends w{_componentStyle=e(C);$pcInputGroup=e(B,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=e(i,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275cmp=l({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(o,n){o&2&&h(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass"},features:[y([C,{provide:B,useExisting:t},{provide:x,useExisting:t}]),g([i]),f],ngContentSelectors:G,decls:1,vars:0,template:function(o,n){o&1&&(m(),b(0))},dependencies:[v],encapsulation:2})}return t})(),Q=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=c({type:t});static \u0275inj=a({imports:[u,u]})}return t})();var k={root:"p-inputgroupaddon"},F=(()=>{class t extends I{name="inputgroupaddon";classes=k;static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var P=["*"],D=new s("INPUTGROUPADDON_INSTANCE"),lt=(()=>{class t extends w{_componentStyle=e(F);$pcInputGroupAddon=e(D,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=e(i,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;get hostStyle(){return this.style}static \u0275fac=(()=>{let p;return function(n){return(p||(p=r(t)))(n||t)}})();static \u0275cmp=l({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:4,hostBindings:function(o,n){o&2&&(S(n.hostStyle),h(n.cn(n.cx("root"),n.styleClass)))},inputs:{style:"style",styleClass:"styleClass"},features:[y([F,{provide:D,useExisting:t},{provide:x,useExisting:t}]),g([i]),f],ngContentSelectors:P,decls:1,vars:0,template:function(o,n){o&1&&(m(),b(0))},dependencies:[v],encapsulation:2})}return t})(),ct=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=c({type:t});static \u0275inj=a({imports:[u,u]})}return t})();export{L as a,Q as b,lt as c,ct as d};
