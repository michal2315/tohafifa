import{Fa as s,Ia as I,La as w,Ma as x,Na as a}from"./chunk-UOUHADUB.js";import{w as C}from"./chunk-D2XKNHFS.js";import{S as p,T as m,V as f,X as o,fc as b,gb as u,gc as S,hb as h,kb as y,lb as k,oa as r,rc as v,wb as g}from"./chunk-O3KMSE75.js";import{a as l,b as d}from"./chunk-GAL4ENT6.js";var E=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var M={root:{position:"relative"}},B={root:({instance:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},c=(()=>{class e extends I{name="skeleton";style=E;classes=B;inlineStyles=M;static \u0275fac=(()=>{let t;return function(i){return(t||(t=r(e)))(i||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();var N=new f("SKELETON_INSTANCE"),D=(()=>{class e extends x{$pcSkeleton=o(N,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(a,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=o(c);get containerStyle(){let t=this._componentStyle?.inlineStyles.root,n;return this.size?n=d(l({},t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=d(l({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius}),n}static \u0275fac=(()=>{let t;return function(i){return(t||(t=r(e)))(i||e)}})();static \u0275cmp=u({type:e,selectors:[["p-skeleton"]],hostVars:5,hostBindings:function(n,i){n&2&&(g("aria-hidden",!0),b(i.containerStyle),S(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[v([c,{provide:N,useExisting:e},{provide:w,useExisting:e}]),k([a]),y],decls:0,vars:0,template:function(n,i){},dependencies:[C,s],encapsulation:2,changeDetection:0})}return e})(),J=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=h({type:e});static \u0275inj=m({imports:[D,s,s]})}return e})();export{D as a,J as b};
