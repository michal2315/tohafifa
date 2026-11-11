import{Ca as $,Da as G,Ea as J,Fa as C,Ia as K,La as L,Ma as U,Na as T,Oa as x,f as H}from"./chunk-UOUHADUB.js";import{n as P,r as V,w as z}from"./chunk-D2XKNHFS.js";import{Eb as i,Fb as u,Gb as _,Lb as E,Mb as B,Nb as h,Qa as r,S as F,T as M,Ub as y,V as k,Vb as w,Wb as v,X as g,Xb as c,Zb as d,_b as s,fc as A,gb as N,gc as f,hb as j,hc as I,ic as Q,ja as D,kb as R,lb as q,mb as p,oa as b,rc as O}from"./chunk-O3KMSE75.js";var W=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Z=`
    ${W}

    .p-card {
        display: block;
    }
`,ee={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},S=(()=>{class t extends K{name="card";style=Z;classes=ee;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var te=["header"],ne=["title"],ie=["subtitle"],ae=["content"],re=["footer"],oe=["*",[["p-header"]],[["p-footer"]]],le=["*","p-header","p-footer"];function pe(t,l){t&1&&h(0)}function ce(t,l){if(t&1&&(u(0,"div",1),v(1,1),p(2,pe,1,0,"ng-container",2),_()),t&2){let e=y();f(e.cx("header")),i("pBind",e.ptm("header")),r(2),i("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function de(t,l){if(t&1&&(E(0),I(1),B()),t&2){let e=y(2);r(),Q(e.header)}}function se(t,l){t&1&&h(0)}function me(t,l){if(t&1&&(u(0,"div",1),p(1,de,2,1,"ng-container",3)(2,se,1,0,"ng-container",2),_()),t&2){let e=y();f(e.cx("title")),i("pBind",e.ptm("title")),r(),i("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),r(),i("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function fe(t,l){if(t&1&&(E(0),I(1),B()),t&2){let e=y(2);r(),Q(e.subheader)}}function ue(t,l){t&1&&h(0)}function _e(t,l){if(t&1&&(u(0,"div",1),p(1,fe,2,1,"ng-container",3)(2,ue,1,0,"ng-container",2),_()),t&2){let e=y();f(e.cx("subtitle")),i("pBind",e.ptm("subtitle")),r(),i("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),r(),i("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function ye(t,l){t&1&&h(0)}function he(t,l){t&1&&h(0)}function Te(t,l){if(t&1&&(u(0,"div",1),v(1,2),p(2,he,1,0,"ng-container",2),_()),t&2){let e=y();f(e.cx("footer")),i("pBind",e.ptm("footer")),r(2),i("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var X=new k("CARD_INSTANCE"),ge=(()=>{class t extends U{$pcCard=g(X,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(T,{self:!0});_componentStyle=g(S);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){H(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(o=>{this.el.nativeElement.style[o]=e[o]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=D(null);getBlockableElement(){return this.el.nativeElement.children[0]}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=N({type:t,selectors:[["p-card"]],contentQueries:function(o,n,m){if(o&1&&(c(m,$,5),c(m,G,5),c(m,te,4),c(m,ne,4),c(m,ie,4),c(m,ae,4),c(m,re,4),c(m,J,4)),o&2){let a;d(a=s())&&(n.headerFacet=a.first),d(a=s())&&(n.footerFacet=a.first),d(a=s())&&(n.headerTemplate=a.first),d(a=s())&&(n.titleTemplate=a.first),d(a=s())&&(n.subtitleTemplate=a.first),d(a=s())&&(n.contentTemplate=a.first),d(a=s())&&(n.footerTemplate=a.first),d(a=s())&&(n.templates=a)}},hostVars:4,hostBindings:function(o,n){o&2&&(A(n._style()),f(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[O([S,{provide:X,useExisting:t},{provide:L,useExisting:t}]),q([T]),R],ngContentSelectors:le,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(o,n){o&1&&(w(oe),p(0,ce,3,4,"div",0),u(1,"div",1),p(2,me,3,5,"div",0)(3,_e,3,5,"div",0),u(4,"div",1),v(5),p(6,ye,1,0,"ng-container",2),_(),p(7,Te,3,4,"div",0),_()),o&2&&(i("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),r(),f(n.cx("body")),i("pBind",n.ptm("body")),r(),i("ngIf",n.header||n.titleTemplate||n._titleTemplate),r(),i("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),r(),f(n.cx("content")),i("pBind",n.ptm("content")),r(2),i("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),r(),i("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[z,P,V,C,x,T],encapsulation:2,changeDetection:0})}return t})(),Pe=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=j({type:t});static \u0275inj=M({imports:[ge,C,x,C,x]})}return t})();export{ge as a,Pe as b};
