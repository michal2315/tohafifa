import{X as oe}from"./chunk-MCW4FHXZ.js";import{Ea as Z,Fa as C,Ga as ee,Ia as ne,La as te,Ma as ie,Na as v}from"./chunk-UOUHADUB.js";import{k as J,n as W,r as X,w as Y}from"./chunk-D2XKNHFS.js";import{Eb as c,Fb as _,Gb as g,Gc as U,Hb as Q,La as j,Lb as w,Mb as T,Ob as h,Qa as p,S as P,Sb as u,T as A,Ub as r,V as M,Va as I,Vb as K,Wb as L,X as b,Xb as k,Yc as V,Zb as E,_b as B,aa as s,ba as l,ca as N,cc as O,dc as H,gb as F,gc as m,hb as z,hc as $,ic as q,kb as D,lb as R,mb as d,oa as y,rc as G,wb as f}from"./chunk-O3KMSE75.js";var re=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var pe={root:({instance:n})=>["p-chip p-component",{"p-disabled":n.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},S=(()=>{class n extends ne{name="chip";style=re;classes=pe;static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275prov=P({token:n,factory:n.\u0275fac})}return n})();var se=["removeicon"],le=["*"];function me(n,a){if(n&1){let e=h();_(0,"img",4),u("error",function(i){s(e);let o=r();return l(o.imageError(i))}),g()}if(n&2){let e=r();m(e.cx("image")),c("pBind",e.ptm("image"))("src",e.image,j)("alt",e.alt)}}function de(n,a){if(n&1&&Q(0,"span",6),n&2){let e=r(2);m(e.icon),c("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function _e(n,a){if(n&1&&d(0,de,1,4,"span",5),n&2){let e=r();c("ngIf",e.icon)}}function ge(n,a){if(n&1&&(_(0,"div",7),$(1),g()),n&2){let e=r();m(e.cx("label")),c("pBind",e.ptm("label")),p(),q(e.label)}}function fe(n,a){if(n&1){let e=h();_(0,"span",11),u("click",function(i){s(e);let o=r(3);return l(o.close(i))})("keydown",function(i){s(e);let o=r(3);return l(o.onKeydown(i))}),g()}if(n&2){let e=r(3);m(e.removeIcon),c("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),f("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function he(n,a){if(n&1){let e=h();N(),_(0,"svg",12),u("click",function(i){s(e);let o=r(3);return l(o.close(i))})("keydown",function(i){s(e);let o=r(3);return l(o.onKeydown(i))}),g()}if(n&2){let e=r(3);m(e.cx("removeIcon")),c("pBind",e.ptm("removeIcon")),f("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function ue(n,a){if(n&1&&(w(0),d(1,fe,1,6,"span",9)(2,he,1,5,"svg",10),T()),n&2){let e=r(2);p(),c("ngIf",e.removeIcon),p(),c("ngIf",!e.removeIcon)}}function ve(n,a){}function xe(n,a){n&1&&d(0,ve,0,0,"ng-template")}function be(n,a){if(n&1){let e=h();_(0,"span",13),u("click",function(i){s(e);let o=r(2);return l(o.close(i))})("keydown",function(i){s(e);let o=r(2);return l(o.onKeydown(i))}),d(1,xe,1,0,null,14),g()}if(n&2){let e=r(2);m(e.cx("removeIcon")),c("pBind",e.ptm("removeIcon")),f("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),p(),c("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function ye(n,a){if(n&1&&(w(0),d(1,ue,3,2,"ng-container",3)(2,be,2,6,"span",8),T()),n&2){let e=r();p(),c("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),p(),c("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var ce=new M("CHIP_INSTANCE"),Ce=(()=>{class n extends ie{$pcChip=b(ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new I;onImageError=new I;visible=!0;get removeAriaLabel(){return this.config.getTranslation(ee.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([t,i])=>this[`_${t}`]!==i&&(this[`_${t}`]=i))}_chipProps;_componentStyle=b(S);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:t}=e.chipProps;t.label!==void 0&&(this.label=t.label),t.icon!==void 0&&(this.icon=t.icon),t.image!==void 0&&(this.image=t.image),t.alt!==void 0&&(this.alt=t.alt),t.styleClass!==void 0&&(this.styleClass=t.styleClass),t.removable!==void 0&&(this.removable=t.removable),t.removeIcon!==void 0&&(this.removeIcon=t.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275cmp=F({type:n,selectors:[["p-chip"]],contentQueries:function(t,i,o){if(t&1&&(k(o,se,4),k(o,Z,4)),t&2){let x;E(x=B())&&(i.removeIconTemplate=x.first),E(x=B())&&(i.templates=x)}},hostVars:5,hostBindings:function(t,i){t&2&&(f("aria-label",i.label),m(i.cn(i.cx("root"),i.styleClass)),H("display",!i.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",V],removable:[2,"removable","removable",V],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[G([S,{provide:ce,useExisting:n},{provide:te,useExisting:n}]),R([v]),D],ngContentSelectors:le,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(K(),L(0),d(1,me,1,5,"img",1)(2,_e,1,1,"ng-template",null,0,U)(4,ge,2,4,"div",2)(5,ye,3,2,"ng-container",3)),t&2){let o=O(3);p(),c("ngIf",i.image)("ngIfElse",o),p(3),c("ngIf",i.label),p(),c("ngIf",i.removable)}},dependencies:[Y,J,W,X,oe,C,v],encapsulation:2,changeDetection:0})}return n})(),He=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=A({imports:[Ce,C,C]})}return n})();export{Ce as a,He as b};
