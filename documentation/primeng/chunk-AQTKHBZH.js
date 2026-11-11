import{Ea as R,Fa as h,Ia as L,La as q,Ma as P,Na as l,Oa as x}from"./chunk-UOUHADUB.js";import{n as D,r as O,w}from"./chunk-D2XKNHFS.js";import{Eb as o,Fb as b,Gb as _,Nb as g,Qa as i,S as B,T as I,Ub as v,V as E,Vb as F,Wb as Q,X as T,Xb as c,Zb as d,_b as m,gb as S,gc as f,hb as M,kb as N,lb as k,mb as s,oa as y,rc as j,wb as A}from"./chunk-O3KMSE75.js";var V=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var z={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},C=(()=>{class e extends L{name="toolbar";style=V;classes=z;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var G=["start"],J=["end"],K=["center"],U=["*"];function W(e,p){e&1&&g(0)}function X(e,p){if(e&1&&(b(0,"div",1),s(1,W,1,0,"ng-container",2),_()),e&2){let t=v();f(t.cx("start")),o("pBind",t.ptm("start")),i(),o("ngTemplateOutlet",t.startTemplate||t._startTemplate)}}function Y(e,p){e&1&&g(0)}function Z(e,p){if(e&1&&(b(0,"div",1),s(1,Y,1,0,"ng-container",2),_()),e&2){let t=v();f(t.cx("center")),o("pBind",t.ptm("center")),i(),o("ngTemplateOutlet",t.centerTemplate||t._centerTemplate)}}function ee(e,p){e&1&&g(0)}function te(e,p){if(e&1&&(b(0,"div",1),s(1,ee,1,0,"ng-container",2),_()),e&2){let t=v();f(t.cx("end")),o("pBind",t.ptm("end")),i(),o("ngTemplateOutlet",t.endTemplate||t._endTemplate)}}var H=new E("TOOLBAR_INSTANCE"),ne=(()=>{class e extends P{$pcToolbar=T(H,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=T(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;ariaLabelledBy;_componentStyle=T(C);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this._startTemplate=t.template;break;case"end":case"right":this._endTemplate=t.template;break;case"center":this._centerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=S({type:e,selectors:[["p-toolbar"]],contentQueries:function(r,n,u){if(r&1&&(c(u,G,4),c(u,J,4),c(u,K,4),c(u,R,4)),r&2){let a;d(a=m())&&(n.startTemplate=a.first),d(a=m())&&(n.endTemplate=a.first),d(a=m())&&(n.centerTemplate=a.first),d(a=m())&&(n.templates=a)}},hostAttrs:["role","toolbar"],hostVars:3,hostBindings:function(r,n){r&2&&(A("aria-labelledby",n.ariaLabelledBy),f(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[j([C,{provide:H,useExisting:e},{provide:q,useExisting:e}]),k([l]),N],ngContentSelectors:U,decls:4,vars:3,consts:[[3,"class","pBind",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(r,n){r&1&&(F(),Q(0),s(1,X,2,4,"div",0)(2,Z,2,4,"div",0)(3,te,2,4,"div",0)),r&2&&(i(),o("ngIf",n.startTemplate||n._startTemplate),i(),o("ngIf",n.centerTemplate||n._centerTemplate),i(),o("ngIf",n.endTemplate||n._endTemplate))},dependencies:[w,D,O,h,x,l],encapsulation:2,changeDetection:0})}return e})(),Ce=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=M({type:e});static \u0275inj=I({imports:[ne,h,x,h,x]})}return e})();export{ne as a,Ce as b};
