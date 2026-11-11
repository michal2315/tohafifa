import{c as pe,d as V,f as j,g as P,h as L}from"./chunk-YUYJZJA5.js";import{K as se,L as ce}from"./chunk-MCW4FHXZ.js";import{Ea as le,Fa as E,Ia as ae,La as re,Ma as de,Na as b,Oa as S,ma as ee}from"./chunk-UOUHADUB.js";import{n as te,q as ne,r as ie,w as oe}from"./chunk-D2XKNHFS.js";import{Eb as i,Fb as g,Gb as f,Gc as Z,Hb as M,Lb as w,Mb as F,Nb as m,Ob as D,Qa as o,S as q,Sb as A,T as G,Ub as s,V as K,Va as B,Vb as U,Wb as N,X as x,Xb as _,Yc as Q,Zb as u,_b as h,aa as I,ba as v,ca as k,cc as O,gb as $,gc as c,hb as z,hc as W,ic as X,kb as H,lb as J,mb as p,oa as C,rc as Y,tc as T,wb as y}from"./chunk-O3KMSE75.js";var ge=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`;var _e=`
    ${ge}

    /* For PrimeNG */
    .p-fieldset-collapsed > .p-fieldset-content-container,
    .p-fieldset-content-container.ng-animating {
        overflow: hidden;
    }
`,ue={root:({instance:t})=>["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable,"p-fieldset-collapsed":t.collapsed&&t.toggleable}],legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},R=(()=>{class t extends ae{name="fieldset";style=_e;classes=ue;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=q({token:t,factory:t.\u0275fac})}return t})();var he=["header"],be=["expandicon"],ye=["collapseicon"],Te=["content"],xe=["*",[["p-header"]]],Ie=["*","p-header"],ve=t=>({transitionParams:t,height:"0"}),Ce=t=>({value:"hidden",params:t}),Be=t=>({transitionParams:t,height:"*"}),we=t=>({value:"visible",params:t});function Fe(t,r){if(t&1&&(k(),M(0,"svg",10)),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon"))}}function Ee(t,r){t&1&&m(0)}function Se(t,r){if(t&1&&(g(0,"span",2),p(1,Ee,1,0,"ng-container",5),f()),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),o(),i("ngTemplateOutlet",e.expandIconTemplate||e._expandIconTemplate)}}function ke(t,r){if(t&1&&(w(0),p(1,Fe,1,3,"svg",8)(2,Se,2,4,"span",9),F()),t&2){let e=s(2);o(),i("ngIf",!e.expandIconTemplate&&!e._expandIconTemplate),o(),i("ngIf",e.expandIconTemplate||e._expandIconTemplate)}}function Me(t,r){if(t&1&&(k(),M(0,"svg",12)),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),y("aria-hidden",!0)}}function De(t,r){t&1&&m(0)}function Ae(t,r){if(t&1&&(g(0,"span",2),p(1,De,1,0,"ng-container",5),f()),t&2){let e=s(3);c(e.cx("toggleIcon")),i("pBind",e.ptm("toggleIcon")),o(),i("ngTemplateOutlet",e.collapseIconTemplate||e._collapseIconTemplate)}}function Ne(t,r){if(t&1&&(w(0),p(1,Me,1,4,"svg",11)(2,Ae,2,4,"span",9),F()),t&2){let e=s(2);o(),i("ngIf",!e.collapseIconTemplate&&!e._collapseIconTemplate),o(),i("ngIf",e.collapseIconTemplate||e._collapseIconTemplate)}}function Oe(t,r){t&1&&m(0)}function Qe(t,r){if(t&1){let e=D();w(0),g(1,"button",6),A("click",function(n){I(e);let a=s();return v(a.toggle(n))})("keydown",function(n){I(e);let a=s();return v(a.onKeyDown(n))}),p(2,ke,3,2,"ng-container",7)(3,Ne,3,2,"ng-container",7)(4,Oe,1,0,"ng-container",5),f(),F()}if(t&2){let e=s(),l=O(4);o(),c(e.cx("toggleButton")),i("pBind",e.ptm("toggleButton")),y("id",e.id+"_header")("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)("aria-label",e.buttonAriaLabel),o(),i("ngIf",e.collapsed),o(),i("ngIf",!e.collapsed),o(),i("ngTemplateOutlet",l)}}function Ve(t,r){t&1&&m(0)}function je(t,r){if(t&1&&(g(0,"span",2),W(1),f(),N(2,1),p(3,Ve,1,0,"ng-container",5)),t&2){let e=s();c(e.cx("legendLabel")),i("pBind",e.ptm("legendLabel")),o(),X(e.legend),o(2),i("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Pe(t,r){t&1&&m(0)}var fe=new K("FIELDSET_INSTANCE"),Le=(()=>{class t extends de{$pcFieldset=x(fe,{optional:!0,skipSelf:!0})??void 0;_componentStyle=x(R);bindDirectiveInstance=x(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}get dataP(){return this.cn({toggleable:this.toggleable})}legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new B;onBeforeToggle=new B;onAfterToggle=new B;_id=ee("pn_id_");get id(){return this._id}get buttonAriaLabel(){return this.legend}animating;headerTemplate;expandIconTemplate;collapseIconTemplate;contentTemplate;toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed}),e.preventDefault()}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}_headerTemplate;_expandIconTemplate;_collapseIconTemplate;_contentTemplate;templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"expandicon":this._expandIconTemplate=e.template;break;case"collapseicon":this._collapseIconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=$({type:t,selectors:[["p-fieldset"]],contentQueries:function(l,n,a){if(l&1&&(_(a,he,4),_(a,be,4),_(a,ye,4),_(a,Te,4),_(a,le,4)),l&2){let d;u(d=h())&&(n.headerTemplate=d.first),u(d=h())&&(n.expandIconTemplate=d.first),u(d=h())&&(n.collapseIconTemplate=d.first),u(d=h())&&(n.contentTemplate=d.first),u(d=h())&&(n.templates=d)}},inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",Q],collapsed:[2,"collapsed","collapsed",Q],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[Y([R,{provide:fe,useExisting:t},{provide:re,useExisting:t}]),J([b]),H],ngContentSelectors:Ie,decls:9,vars:30,consts:[["legendContent",""],[3,"ngStyle","pBind"],[3,"pBind"],[4,"ngIf","ngIfElse"],["role","region",3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],[4,"ngIf"],["data-p-icon","plus",3,"class","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],["data-p-icon","plus",3,"pBind"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],["data-p-icon","minus",3,"pBind"]],template:function(l,n){if(l&1){let a=D();U(xe),g(0,"fieldset",1)(1,"legend",2),p(2,Qe,5,10,"ng-container",3)(3,je,4,5,"ng-template",null,0,Z),f(),g(5,"div",4),A("@fieldsetContent.done",function(){return I(a),v(n.onToggleDone())}),g(6,"div",2),N(7),p(8,Pe,1,0,"ng-container",5),f()()()}if(l&2){let a=O(4);c(n.cn(n.cx("root"),n.styleClass)),i("ngStyle",n.style)("pBind",n.ptm("root")),y("id",n.id)("data-p",n.dataP),o(),c(n.cx("legend")),i("pBind",n.ptm("legend")),o(),i("ngIf",n.toggleable)("ngIfElse",a),o(3),c(n.cx("contentContainer")),i("pBind",n.ptm("contentContainer"))("@fieldsetContent",n.collapsed?T(24,Ce,T(22,ve,n.transitionOptions)):T(28,we,T(26,Be,n.animating?n.transitionOptions:"0ms"))),y("id",n.id+"_content")("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed),o(),c(n.cx("content")),i("pBind",n.ptm("content")),o(2),i("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)}},dependencies:[oe,te,ie,ne,se,ce,E,S,b],encapsulation:2,data:{animation:[pe("fieldsetContent",[P("hidden",j({height:"0"})),P("visible",j({height:"*"})),L("visible <=> hidden",[V("{{transitionParams}}")]),L("void => *",V(0))])]},changeDetection:0})}return t})(),pt=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=z({type:t});static \u0275inj=G({imports:[Le,E,S,E,S]})}return t})();export{Le as a,pt as b};
