import{a as re}from"./chunk-3Y7QSSKK.js";import{a as ae}from"./chunk-27JIZF5R.js";import{a as ee,f as te,i as ie,u as ne}from"./chunk-CTI5WBER.js";import{Ea as Z,Fa as f,Ia as oe,La as le,Na as b,Oa as se,e as m,f as d}from"./chunk-UOUHADUB.js";import{r as X,w as Y}from"./chunk-D2XKNHFS.js";import{Ab as $,Cb as z,Db as K,Eb as _,Fb as R,Gb as j,Gc as J,Nb as q,Ob as Q,Pc as E,Qa as F,R as S,S as w,Sb as U,T as B,Ub as u,V as O,Va as g,X as c,Xb as x,Yc as r,Zb as v,Zc as W,_b as C,aa as L,ba as V,gb as A,gc as P,hb as D,kb as M,lb as N,mb as y,oa as p,rc as H,uc as G,wb as I,zb as k}from"./chunk-O3KMSE75.js";var ue=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var me=`
    ${ue}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,fe={root:({instance:i})=>["p-selectbutton p-component",{"p-invalid":i.invalid(),"p-selectbutton-fluid":i.fluid()}]},T=(()=>{class i extends oe{name="selectbutton";style=me;classes=fe;static \u0275fac=(()=>{let e;return function(n){return(e||(e=p(i)))(n||i)}})();static \u0275prov=w({token:i,factory:i.\u0275fac})}return i})();var be=["item"],he=(i,s)=>({$implicit:i,index:s});function ge(i,s){return this.getOptionLabel(s)}function ye(i,s){i&1&&q(0)}function _e(i,s){if(i&1&&y(0,ye,1,0,"ng-container",3),i&2){let e=u(2),t=e.$implicit,n=e.$index,o=u();_("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",G(2,he,t,n))}}function xe(i,s){i&1&&y(0,_e,1,5,"ng-template",null,0,J)}function ve(i,s){if(i&1){let e=Q();R(0,"p-togglebutton",2),U("onChange",function(n){let o=L(e),l=o.$implicit,a=o.$index,h=u();return V(h.onOptionSelect(n,l,a))}),k(1,xe,2,0),j()}if(i&2){let e=s.$implicit,t=u();_("autofocus",t.autofocus)("styleClass",t.styleClass)("ngModel",t.isSelected(e))("onLabel",t.getOptionLabel(e))("offLabel",t.getOptionLabel(e))("disabled",t.$disabled()||t.isOptionDisabled(e))("allowEmpty",t.getAllowEmpty())("size",t.size())("fluid",t.fluid())("pt",t.ptm("pcToggleButton")),F(),$(t.itemTemplate||t._itemTemplate?1:-1)}}var de=new O("SELECTBUTTON_INSTANCE"),Ce={provide:ee,useExisting:S(()=>ce),multi:!0},ce=(()=>{class i extends ae{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=E();fluid=E(void 0,{transform:r});onOptionClick=new g;onChange=new g;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=c(T);$pcSelectButton=c(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?m(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?m(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?m(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,t,n){if(this.$disabled()||this.isOptionDisabled(t))return;let o=this.isSelected(t);if(o&&this.unselectable)return;let l=this.getOptionValue(t),a;if(this.multiple)o?a=this.value.filter(h=>!d(h,l,this.equalityKey||void 0)):a=this.value?[...this.value,l]:[l];else{if(o&&!this.allowEmpty)return;a=o?null:l}this.focusedIndex=n,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:t,index:n})}changeTabIndexes(e,t){let n,o;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[l],index:l});t==="prev"?n.index===0?o=this.el.nativeElement.children.length-1:o=n.index-1:n.index===this.el.nativeElement.children.length-1?o=0:o=n.index+1,this.focusedIndex=o,this.el.nativeElement.children[o].focus()}onFocus(e,t){this.focusedIndex=t}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(t=>!d(t,this.getOptionValue(e),this.dataKey))}isSelected(e){let t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let o of this.value)if(d(o,n,this.dataKey)){t=!0;break}}}else t=d(this.getOptionValue(e),this.value,this.equalityKey||void 0);return t}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,t){this.value=e,t(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=p(i)))(n||i)}})();static \u0275cmp=A({type:i,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(t,n,o){if(t&1&&(x(o,be,4),x(o,Z,4)),t&2){let l;v(l=C())&&(n.itemTemplate=l.first),v(l=C())&&(n.templates=l)}},hostVars:4,hostBindings:function(t,n){t&2&&(I("role","group")("aria-labelledby",n.ariaLabelledBy),P(n.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",r],tabindex:[2,"tabindex","tabindex",W],multiple:[2,"multiple","multiple",r],allowEmpty:[2,"allowEmpty","allowEmpty",r],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",r],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[H([Ce,T,{provide:de,useExisting:i},{provide:le,useExisting:i}]),N([b]),M],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&z(0,ve,2,11,"p-togglebutton",1,ge,!0),t&2&&K(n.options)},dependencies:[re,ne,te,ie,Y,X,f,se],encapsulation:2,changeDetection:0})}return i})(),Ge=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=D({type:i});static \u0275inj=B({imports:[ce,f,f]})}return i})();export{ce as a,Ge as b};
