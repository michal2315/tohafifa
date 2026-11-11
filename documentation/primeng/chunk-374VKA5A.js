import{Ea as q,Fa as m,Ia as G,La as H,Ma as $,Na as s}from"./chunk-UOUHADUB.js";import{k as O,n as P,r as R,w as V}from"./chunk-D2XKNHFS.js";import{Eb as a,Fb as f,Gb as y,Hb as N,Lb as E,Mb as M,Qa as i,S as h,T as x,Ub as u,V as I,Vb as A,Wb as F,X as d,Xb as T,Yc as Q,Zb as _,_b as v,gb as k,gc as c,hb as B,hc as j,ic as D,kb as w,lb as S,mb as r,oa as g,rc as z}from"./chunk-O3KMSE75.js";var J=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var U={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},b=(()=>{class t extends G{name="tag";style=J;classes=U;static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275prov=h({token:t,factory:t.\u0275fac})}return t})();var W=["icon"],X=["*"];function Y(t,p){if(t&1&&N(0,"span",4),t&2){let e=u(2);c(e.cx("icon")),a("ngClass",e.icon)("pBind",e.ptm("icon"))}}function Z(t,p){if(t&1&&(E(0),r(1,Y,1,4,"span",3),M()),t&2){let e=u();i(),a("ngIf",e.icon)}}function tt(t,p){}function et(t,p){t&1&&r(0,tt,0,0,"ng-template")}function nt(t,p){if(t&1&&(f(0,"span",2),r(1,et,1,0,null,5),y()),t&2){let e=u();c(e.cx("icon")),a("pBind",e.ptm("icon")),i(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var K=new I("TAG_INSTANCE"),ot=(()=>{class t extends ${$pcTag=d(K,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(s,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=d(b);onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=g(t)))(n||t)}})();static \u0275cmp=k({type:t,selectors:[["p-tag"]],contentQueries:function(o,n,C){if(o&1&&(T(C,W,4),T(C,q,4)),o&2){let l;_(l=v())&&(n.iconTemplate=l.first),_(l=v())&&(n.templates=l)}},hostVars:2,hostBindings:function(o,n){o&2&&c(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",Q]},features:[z([b,{provide:K,useExisting:t},{provide:H,useExisting:t}]),S([s]),w],ngContentSelectors:X,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(o,n){o&1&&(A(),F(0),r(1,Z,2,1,"ng-container",0)(2,nt,2,4,"span",1),f(3,"span",2),j(4),y()),o&2&&(i(),a("ngIf",!n.iconTemplate&&!n._iconTemplate),i(),a("ngIf",n.iconTemplate||n._iconTemplate),i(),c(n.cx("label")),a("pBind",n.ptm("label")),i(),D(n.value))},dependencies:[V,O,P,R,m,s],encapsulation:2,changeDetection:0})}return t})(),xt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=B({type:t});static \u0275inj=x({imports:[ot,m,m]})}return t})();export{ot as a,xt as b};
