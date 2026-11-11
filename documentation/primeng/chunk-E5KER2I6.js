import{Fa as S,Ia as B,La as M,Ma as j,Na as r,Oa as l}from"./chunk-UOUHADUB.js";import{w as C}from"./chunk-D2XKNHFS.js";import{Eb as h,Fb as b,Gb as x,S as s,T as c,V as v,Vb as I,Wb as D,X as o,fc as z,gb as f,gc as a,hb as u,kb as g,lb as m,oa as d,rc as k,wb as y}from"./chunk-O3KMSE75.js";var E=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var w={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},A={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},p=(()=>{class e extends B{name="divider";style=E;classes=A;inlineStyles=w;static \u0275fac=(()=>{let i;return function(t){return(i||(i=d(e)))(t||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})();var T=["*"],F=new v("DIVIDER_INSTANCE"),V=(()=>{class e extends j{$pcDivider=o(F,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=o(p);static \u0275fac=(()=>{let i;return function(t){return(i||(i=d(e)))(t||e)}})();static \u0275cmp=f({type:e,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:5,hostBindings:function(n,t){n&2&&(y("aria-orientation",t.layout),z(t.sx("root")),a(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[k([p,{provide:F,useExisting:e},{provide:M,useExisting:e}]),m([r]),g],ngContentSelectors:T,decls:2,vars:3,consts:[[3,"pBind"]],template:function(n,t){n&1&&(I(),b(0,"div",0),D(1),x()),n&2&&(a(t.cx("content")),h("pBind",t.ptm("content")))},dependencies:[C,S,l,r],encapsulation:2,changeDetection:0})}return e})(),ee=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=u({type:e});static \u0275inj=c({imports:[V,l,l]})}return e})();export{V as a,ee as b};
