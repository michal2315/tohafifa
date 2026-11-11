import{Fa as m,Ia as O,La as U,Ma as $,Na as o}from"./chunk-UOUHADUB.js";import{k as H,n as P,w as q}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as u,Gb as x,Gc as _,Hb as F,La as B,Ob as M,Qa as f,S as y,Sb as j,T as I,Ub as i,V as z,Va as w,Vb as D,Wb as L,X as s,aa as C,ba as E,cc as h,gb as A,gc as d,hb as T,hc as V,ic as k,kb as S,lb as N,mb as c,oa as p,rc as R,wb as v}from"./chunk-O3KMSE75.js";var G=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var Q={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},b=(()=>{class t extends O{name="avatar";style=G;classes=Q;static \u0275fac=(()=>{let a;return function(e){return(a||(a=p(t)))(e||t)}})();static \u0275prov=y({token:t,factory:t.\u0275fac})}return t})();var W=["*"];function X(t,l){if(t&1&&(u(0,"span",3),V(1),x()),t&2){let a=i();d(a.cx("label")),r("pBind",a.ptm("label")),f(),k(a.label)}}function Y(t,l){if(t&1&&F(0,"span",5),t&2){let a=i(2);d(a.icon),r("pBind",a.ptm("icon"))("ngClass",a.cx("icon"))}}function Z(t,l){if(t&1&&c(0,Y,1,4,"span",4),t&2){let a=i(),n=h(5);r("ngIf",a.icon)("ngIfElse",n)}}function tt(t,l){if(t&1){let a=M();u(0,"img",7),j("error",function(e){C(a);let g=i(2);return E(g.imageError(e))}),x()}if(t&2){let a=i(2);r("pBind",a.ptm("image"))("src",a.image,B),v("aria-label",a.ariaLabel)}}function at(t,l){if(t&1&&c(0,tt,1,3,"img",6),t&2){let a=i();r("ngIf",a.image)}}var J=new z("AVATAR_INSTANCE"),et=(()=>{class t extends ${$pcAvatar=s(J,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(o,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new w;_componentStyle=s(b);imageError(a){this.onImageError.emit(a)}static \u0275fac=(()=>{let a;return function(e){return(a||(a=p(t)))(e||t)}})();static \u0275cmp=A({type:t,selectors:[["p-avatar"]],hostVars:4,hostBindings:function(n,e){n&2&&(v("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy),d(e.cn(e.cx("root"),e.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[R([b,{provide:J,useExisting:t},{provide:U,useExisting:t}]),N([o]),S],ngContentSelectors:W,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(n,e){if(n&1&&(D(),L(0),c(1,X,2,4,"span",2)(2,Z,1,2,"ng-template",null,0,_)(4,at,1,1,"ng-template",null,1,_)),n&2){let g=h(3);f(),r("ngIf",e.label)("ngIfElse",g)}},dependencies:[q,H,P,m,o],encapsulation:2,changeDetection:0})}return t})(),yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=T({type:t});static \u0275inj=I({imports:[et,m,m]})}return t})();export{et as a,yt as b};
