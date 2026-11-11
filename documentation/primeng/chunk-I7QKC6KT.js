import{a as lt}from"./chunk-27JIZF5R.js";import{a as it}from"./chunk-CTI5WBER.js";import{U as st,V as ct,h as rt}from"./chunk-MCW4FHXZ.js";import{Ea as nt,Fa as b,Ia as et,La as ot,Na as f,Oa as at,P as H,T as U,ma as J}from"./chunk-UOUHADUB.js";import{k as K,m as W,n as X,q as Y,r as Z,w as tt}from"./chunk-D2XKNHFS.js";import{Ab as y,Eb as r,Fb as R,Gb as B,Hb as g,Nb as w,Ob as z,Qa as p,R as M,S as N,Sb as A,T as k,Ub as a,V as $,Va as h,X as m,Xb as I,Yc as V,Zb as T,Zc as P,_b as v,aa as u,ba as _,ca as S,gb as Q,gc as l,hb as G,ja as D,kb as j,lb as q,mb as d,oa as x,rc as L,uc as O,wb as F,zb as C}from"./chunk-O3KMSE75.js";var pt=`
    .p-rating {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: dt('rating.gap');
    }

    .p-rating-option {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        outline-color: transparent;
        border-radius: 50%;
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
    }

    .p-rating-option.p-focus-visible {
        box-shadow: dt('rating.focus.ring.shadow');
        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');
        outline-offset: dt('rating.focus.ring.offset');
    }

    .p-rating-icon {
        color: dt('rating.icon.color');
        transition:
            background dt('rating.transition.duration'),
            color dt('rating.transition.duration'),
            border-color dt('rating.transition.duration'),
            outline-color dt('rating.transition.duration'),
            box-shadow dt('rating.transition.duration');
        font-size: dt('rating.icon.size');
        width: dt('rating.icon.size');
        height: dt('rating.icon.size');
    }

    .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
        color: dt('rating.icon.hover.color');
    }

    .p-rating-option-active .p-rating-icon {
        color: dt('rating.icon.active.color');
    }

    .p-rating-icon.p-invalid {
        /* @todo */
        stroke: dt('rating.invalid.icon.color');
    }

    .p-rating.p-readonly .p-rating-option {
        cursor: not-allowed;
    }
`;var gt=`
    ${pt}

    /* For PrimeNG */
    p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
        stroke: dt('rating.invalid.icon.color');
    }
`,mt={root:({instance:n})=>["p-rating",{"p-readonly":n.readonly,"p-disabled":n.$disabled()}],option:({instance:n,star:o,value:t})=>["p-rating-option",{"p-rating-option-active":o+1<=t,"p-focus-visible":o+1===n.focusedOptionIndex()&&n.isFocusVisibleItem}],onIcon:({instance:n})=>["p-rating-icon p-rating-on-icon",{"p-invalid":n.invalid()}],offIcon:({instance:n})=>["p-rating-icon p-rating-off-icon",{"p-invalid":n.invalid()}]},E=(()=>{class n extends et{name="rating";style=gt;classes=mt;static \u0275fac=(()=>{let t;return function(e){return(t||(t=x(n)))(e||n)}})();static \u0275prov=N({token:n,factory:n.\u0275fac})}return n})();var xt=["onicon"],ht=["officon"],Ct=(n,o)=>({star:n,value:o}),ft=(n,o)=>({$implicit:n,class:o});function yt(n,o){n&1&&w(0)}function It(n,o){if(n&1&&d(0,yt,1,0,"ng-container",4),n&2){let t=a(2).$implicit,i=a();r("ngTemplateOutlet",i.onIconTemplate||i._onIconTemplate)("ngTemplateOutletContext",O(2,ft,t+1,i.cx("onIcon")))}}function Tt(n,o){if(n&1&&g(0,"span",7),n&2){let t=a(4);l(t.cx("onIcon")),r("ngStyle",t.iconOnStyle)("ngClass",t.iconOnClass)("pBind",t.ptm("onIcon"))}}function vt(n,o){if(n&1&&(S(),g(0,"svg",8)),n&2){let t=a(4);l(t.cx("onIcon")),r("ngStyle",t.iconOnStyle)("pBind",t.ptm("onIcon"))}}function Ot(n,o){if(n&1&&d(0,Tt,1,5,"span",5)(1,vt,1,4,"svg",6),n&2){let t=a(3);r("ngIf",t.iconOnClass),p(),r("ngIf",!t.iconOnClass)}}function bt(n,o){if(n&1&&C(0,It,1,5,"ng-container")(1,Ot,2,2),n&2){let t=a(2);y(t.onIconTemplate||t._onIconTemplate?0:1)}}function St(n,o){n&1&&w(0)}function Ft(n,o){if(n&1&&d(0,St,1,0,"ng-container",4),n&2){let t=a(2).$implicit,i=a();r("ngTemplateOutlet",i.offIconTemplate||i._offIconTemplate)("ngTemplateOutletContext",O(2,ft,t+1,i.cx("offIcon")))}}function Rt(n,o){if(n&1&&g(0,"span",7),n&2){let t=a(4);l(t.cx("offIcon")),r("ngStyle",t.iconOffStyle)("ngClass",t.iconOffClass)("pBind",t.ptm("offIcon"))}}function Bt(n,o){if(n&1&&(S(),g(0,"svg",10)),n&2){let t=a(4);l(t.cx("offIcon")),r("ngStyle",t.iconOffStyle)("pBind",t.ptm("offIcon"))}}function wt(n,o){if(n&1&&d(0,Rt,1,5,"span",5)(1,Bt,1,4,"svg",9),n&2){let t=a(3);r("ngIf",t.iconOffClass),p(),r("ngIf",!t.iconOffClass)}}function At(n,o){if(n&1&&C(0,Ft,1,5,"ng-container")(1,wt,2,2),n&2){let t=a(2);y(t.offIconTemplate||t._offIconTemplate?0:1)}}function Vt(n,o){if(n&1){let t=z();R(0,"div",1),A("click",function(e){let c=u(t).$implicit,s=a();return _(s.onOptionClick(e,c+1))}),R(1,"span",2)(2,"input",3),A("focus",function(e){let c=u(t).$implicit,s=a();return _(s.onInputFocus(e,c+1))})("blur",function(e){u(t);let c=a();return _(c.onInputBlur(e))})("change",function(e){let c=u(t).$implicit,s=a();return _(s.onChange(e,c+1))}),B()(),C(3,bt,2,1)(4,At,2,1),B()}if(n&2){let t=o.$implicit,i=a();l(i.cx("option",O(16,Ct,t,i.value))),r("pBind",i.ptm("option")),p(),r("pBind",i.ptm("hiddenOptionInputContainer")),F("data-p-hidden-accessible",!0),p(),r("value",t+1)("checked",i.value===t+1)("pAutoFocus",i.autofocus)("pBind",i.ptm("hiddenOptionInput")),F("name",i.name()||i.nameattr+"_name")("value",i.modelValue())("required",i.required()?"":void 0)("readonly",i.readonly?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-label",i.starAriaLabel(t+1)),p(),y(t+1<=i.value?3:4)}}var dt=new $("RATING_INSTANCE"),Et={provide:it,useExisting:M(()=>ut),multi:!0},ut=(()=>{class n extends lt{$pcRating=m(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}readonly;stars=5;iconOnClass;iconOnStyle;iconOffClass;iconOffStyle;autofocus;onRate=new h;onFocus=new h;onBlur=new h;onIconTemplate;offIconTemplate;templates;value;starsArray;isFocusVisibleItem=!0;focusedOptionIndex=D(-1);nameattr;_componentStyle=m(E);_onIconTemplate;_offIconTemplate;onInit(){this.nameattr=this.nameattr||J("pn_id_"),this.starsArray=[];for(let t=0;t<this.stars;t++)this.starsArray[t]=t}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"onicon":this._onIconTemplate=t.template;break;case"officon":this._offIconTemplate=t.template;break}})}onOptionClick(t,i){if(!this.readonly&&!this.$disabled()){this.onOptionSelect(t,i),this.isFocusVisibleItem=!1;let e=U(t.currentTarget,"");e&&H(e)}}onOptionSelect(t,i){!this.readonly&&!this.$disabled()&&(this.focusedOptionIndex()===i||i===this.value?(this.focusedOptionIndex.set(-1),this.updateModel(t,null)):(this.focusedOptionIndex.set(i),this.updateModel(t,i||null)))}onChange(t,i){this.onOptionSelect(t,i),this.isFocusVisibleItem=!0}onInputBlur(t){this.focusedOptionIndex.set(-1),this.onBlur.emit(t)}onInputFocus(t,i){!this.readonly&&!this.$disabled()&&(this.focusedOptionIndex.set(i),this.isFocusVisibleItem=t.sourceCapabilities?.firesTouchEvents===!1,this.onFocus.emit(t))}updateModel(t,i){this.writeValue(i),this.onModelChange(this.value),this.onModelTouched(),this.onRate.emit({originalEvent:t,value:i})}starAriaLabel(t){return t===1?this.config.translation.aria?.star:this.config.translation.aria?.stars?.replace(/{star}/g,t)}getIconTemplate(t){return!this.value||t>=this.value?this.offIconTemplate||this._offIconTemplate:this.onIconTemplate||this.offIconTemplate}writeControlValue(t,i){this.value=t,i(t)}get isCustomIcon(){return!!(this.onIconTemplate||this._onIconTemplate||this.offIconTemplate||this._offIconTemplate)}static \u0275fac=(()=>{let t;return function(e){return(t||(t=x(n)))(e||n)}})();static \u0275cmp=Q({type:n,selectors:[["p-rating"]],contentQueries:function(i,e,c){if(i&1&&(I(c,xt,4),I(c,ht,4),I(c,nt,4)),i&2){let s;T(s=v())&&(e.onIconTemplate=s.first),T(s=v())&&(e.offIconTemplate=s.first),T(s=v())&&(e.templates=s)}},hostVars:2,hostBindings:function(i,e){i&2&&l(e.cx("root"))},inputs:{readonly:[2,"readonly","readonly",V],stars:[2,"stars","stars",P],iconOnClass:"iconOnClass",iconOnStyle:"iconOnStyle",iconOffClass:"iconOffClass",iconOffStyle:"iconOffStyle",autofocus:[2,"autofocus","autofocus",V]},outputs:{onRate:"onRate",onFocus:"onFocus",onBlur:"onBlur"},features:[L([Et,E,{provide:dt,useExisting:n},{provide:ot,useExisting:n}]),q([f]),j],decls:1,vars:1,consts:[["ngFor","",3,"ngForOf"],[3,"click","pBind"],[1,"p-hidden-accessible",3,"pBind"],["type","radio",3,"focus","blur","change","value","checked","pAutoFocus","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngStyle","ngClass","pBind",4,"ngIf"],["data-p-icon","star-fill",3,"ngStyle","class","pBind",4,"ngIf"],[3,"ngStyle","ngClass","pBind"],["data-p-icon","star-fill",3,"ngStyle","pBind"],["data-p-icon","star",3,"ngStyle","class","pBind",4,"ngIf"],["data-p-icon","star",3,"ngStyle","pBind"]],template:function(i,e){i&1&&d(0,Vt,5,19,"ng-template",0),i&2&&r("ngForOf",e.starsArray)},dependencies:[tt,K,W,X,Z,Y,rt,ct,st,b,at,f],encapsulation:2,changeDetection:0})}return n})(),cn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=G({type:n});static \u0275inj=k({imports:[ut,b,b]})}return n})();export{ut as a,cn as b};
