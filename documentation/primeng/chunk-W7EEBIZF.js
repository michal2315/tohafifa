import{a as at}from"./chunk-KBVWLYPF.js";import{a as lt,b as st}from"./chunk-T7S2JKIR.js";import{A as it,ba as rt,fa as pt,h as ot}from"./chunk-MCW4FHXZ.js";import{Ea as Z,Fa as I,Ia as tt,La as et,Ma as nt,Na as x,ma as J}from"./chunk-UOUHADUB.js";import{n as W,r as X,w as Y}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as y,Gb as T,Gc as $,Hb as k,Lb as P,Mb as O,Nb as j,Ob as S,Qa as s,S as V,Sb as h,T as A,Ub as c,V as z,Va as w,X as B,Xb as v,Yb as E,Yc as l,Zb as b,Zc as G,_b as f,aa as u,ba as d,ca as F,cc as q,fc as U,gb as Q,gc as _,hb as H,ja as N,kb as R,lb as L,mb as m,oa as g,rc as K,wb as C}from"./chunk-O3KMSE75.js";var ut=`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`;var mt={root:({instance:n})=>["p-splitbutton p-component",{"p-splitbutton-raised":n.raised,"p-splitbutton-rounded":n.rounded,"p-splitbutton-outlined":n.outlined,"p-splitbutton-text":n.text,[`p-splitbutton-${n.size==="small"?"sm":"lg"}`]:n.size}],pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown p-button-icon-only"},M=(()=>{class n extends tt{name="splitbutton";style=ut;classes=mt;static \u0275fac=(()=>{let t;return function(e){return(t||(t=g(n)))(e||n)}})();static \u0275prov=V({token:n,factory:n.\u0275fac})}return n})();var bt=["content"],ft=["dropdownicon"],_t=["defaultbtn"],wt=["menu"];function yt(n,a){n&1&&j(0)}function Tt(n,a){if(n&1){let t=S();P(0),y(1,"button",8),h("click",function(e){u(t);let o=c();return d(o.onDefaultButtonClick(e))}),m(2,yt,1,0,"ng-container",9),T(),O()}if(n&2){let t=c();s(),_(t.cx("pcButton")),r("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("disabled",t.disabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions)("pt",t.ptm("pcButton")),C("tabindex",t.tabindex)("aria-label",(t.buttonProps==null?null:t.buttonProps.ariaLabel)||t.label),s(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)}}function ht(n,a){if(n&1){let t=S();y(0,"button",10,2),h("click",function(e){u(t);let o=c();return d(o.onDefaultButtonClick(e))}),T()}if(n&2){let t=c();_(t.cx("pcButton")),r("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("label",t.label)("disabled",t.buttonDisabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions)("pt",t.ptm("pcButton")),C("tabindex",t.tabindex)("aria-label",t.buttonProps==null?null:t.buttonProps.ariaLabel)}}function Bt(n,a){if(n&1&&k(0,"span"),n&2){let t=c();_(t.dropdownIcon)}}function gt(n,a){n&1&&(F(),k(0,"svg",12))}function Ct(n,a){}function St(n,a){n&1&&m(0,Ct,0,0,"ng-template")}function vt(n,a){if(n&1&&(P(0),m(1,gt,1,0,"svg",11)(2,St,1,0,null,9),O()),n&2){let t=c();s(),r("ngIf",!t.dropdownIconTemplate&&!t._dropdownIconTemplate),s(),r("ngTemplateOutlet",t.dropdownIconTemplate||t._dropdownIconTemplate)}}var dt=new z("SPLITBUTTON_INSTANCE"),It=(()=>{class n extends nt{$pcSplitButton=B(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=B(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}model;severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;icon;iconPos="left";label;tooltip;tooltipOptions;styleClass;menuStyle;menuStyleClass;dropdownIcon;appendTo="body";dir;expandAriaLabel;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";buttonProps;menuButtonProps;autofocus;set disabled(t){this._disabled=t??!1,this.buttonDisabled=t??!1,this.menuButtonDisabled=t??!1}get disabled(){return this._disabled}tabindex;menuButtonDisabled=!1;buttonDisabled=!1;onClick=new w;onMenuHide=new w;onMenuShow=new w;onDropdownClick=new w;buttonViewChild;menu;contentTemplate;dropdownIconTemplate;templates;ariaId;isExpanded=N(!1);_disabled;_componentStyle=B(M);_contentTemplate;_dropdownIconTemplate;onInit(){this.ariaId=J("pn_id_")}onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"dropdownicon":this._dropdownIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onDefaultButtonClick(t){this.onClick?.emit(t),this.menu?.hide()}onDropdownButtonClick(t){this.onDropdownClick.emit(t),this.menu?.toggle({currentTarget:this.el?.nativeElement,relativeAlign:this.appendTo==null})}onDropdownButtonKeydown(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())}onHide(){this.isExpanded.set(!1),this.onMenuHide.emit()}onShow(){this.isExpanded.set(!0),this.onMenuShow.emit()}static \u0275fac=(()=>{let t;return function(e){return(t||(t=g(n)))(e||n)}})();static \u0275cmp=Q({type:n,selectors:[["p-splitbutton"],["p-splitButton"],["p-split-button"]],contentQueries:function(i,e,o){if(i&1&&(v(o,bt,4),v(o,ft,4),v(o,Z,4)),i&2){let p;b(p=f())&&(e.contentTemplate=p.first),b(p=f())&&(e.dropdownIconTemplate=p.first),b(p=f())&&(e.templates=p)}},viewQuery:function(i,e){if(i&1&&(E(_t,5),E(wt,5)),i&2){let o;b(o=f())&&(e.buttonViewChild=o.first),b(o=f())&&(e.menu=o.first)}},hostVars:2,hostBindings:function(i,e){i&2&&_(e.cn(e.cx("root"),e.styleClass))},inputs:{model:"model",severity:"severity",raised:[2,"raised","raised",l],rounded:[2,"rounded","rounded",l],text:[2,"text","text",l],outlined:[2,"outlined","outlined",l],size:"size",plain:[2,"plain","plain",l],icon:"icon",iconPos:"iconPos",label:"label",tooltip:"tooltip",tooltipOptions:"tooltipOptions",styleClass:"styleClass",menuStyle:"menuStyle",menuStyleClass:"menuStyleClass",dropdownIcon:"dropdownIcon",appendTo:"appendTo",dir:"dir",expandAriaLabel:"expandAriaLabel",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonProps:"buttonProps",menuButtonProps:"menuButtonProps",autofocus:[2,"autofocus","autofocus",l],disabled:[2,"disabled","disabled",l],tabindex:[2,"tabindex","tabindex",G],menuButtonDisabled:[2,"menuButtonDisabled","menuButtonDisabled",l],buttonDisabled:[2,"buttonDisabled","buttonDisabled",l]},outputs:{onClick:"onClick",onMenuHide:"onMenuHide",onMenuShow:"onMenuShow",onDropdownClick:"onDropdownClick"},features:[K([M,{provide:dt,useExisting:n},{provide:et,useExisting:n}]),L([x]),R],decls:8,vars:26,consts:[["defaultButton",""],["menu",""],["defaultbtn",""],[4,"ngIf","ngIfElse"],["type","button","pButton","","pRipple","",3,"click","keydown","size","severity","text","outlined","disabled","pt"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"onHide","onShow","id","popup","model","styleClass","appendTo","showTransitionOptions","hideTransitionOptions","pt"],["type","button","pButton","","pRipple","",3,"click","severity","text","outlined","size","icon","iconPos","disabled","pAutoFocus","pTooltip","tooltipOptions","pt"],[4,"ngTemplateOutlet"],["type","button","pButton","","pRipple","",3,"click","severity","text","outlined","size","icon","iconPos","label","disabled","pAutoFocus","pTooltip","tooltipOptions","pt"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-down"]],template:function(i,e){if(i&1){let o=S();m(0,Tt,3,16,"ng-container",3)(1,ht,2,16,"ng-template",null,0,$),y(3,"button",4),h("click",function(D){return u(o),d(e.onDropdownButtonClick(D))})("keydown",function(D){return u(o),d(e.onDropdownButtonKeydown(D))}),m(4,Bt,1,2,"span",5)(5,vt,3,2,"ng-container",6),T(),y(6,"p-tieredmenu",7,1),h("onHide",function(){return u(o),d(e.onHide())})("onShow",function(){return u(o),d(e.onShow())}),T()}if(i&2){let o=q(2);r("ngIf",e.contentTemplate||e._contentTemplate)("ngIfElse",o),s(3),_(e.cx("pcDropdown")),r("size",e.size)("severity",e.severity)("text",e.text)("outlined",e.outlined)("disabled",e.menuButtonDisabled)("pt",e.ptm("pcDropdown")),C("aria-label",(e.menuButtonProps==null?null:e.menuButtonProps.ariaLabel)||e.expandAriaLabel)("aria-haspopup",(e.menuButtonProps==null?null:e.menuButtonProps.ariaHasPopup)||!0)("aria-expanded",(e.menuButtonProps==null?null:e.menuButtonProps.ariaExpanded)||e.isExpanded())("aria-controls",(e.menuButtonProps==null?null:e.menuButtonProps.ariaControls)||e.ariaId),s(),r("ngIf",e.dropdownIcon),s(),r("ngIf",!e.dropdownIcon),s(),U(e.menuStyle),r("id",e.ariaId)("popup",!0)("model",e.model)("styleClass",e.menuStyleClass)("appendTo",e.appendTo)("showTransitionOptions",e.showTransitionOptions)("hideTransitionOptions",e.hideTransitionOptions)("pt",e.ptm("pcMenu"))}},dependencies:[Y,W,X,pt,at,ot,it,rt,st,lt,I],encapsulation:2,changeDetection:0})}return n})(),ne=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=H({type:n});static \u0275inj=A({imports:[It,I,I]})}return n})();export{It as a,ne as b};
