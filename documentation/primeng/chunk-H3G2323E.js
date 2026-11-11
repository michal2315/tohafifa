import{a as Le}from"./chunk-66742H4U.js";import{a as Ee}from"./chunk-I67REHSN.js";import{a as we}from"./chunk-CTI5WBER.js";import{c as Se,d as F,f as H,h as $}from"./chunk-YUYJZJA5.js";import{c as M}from"./chunk-AAKCLA3R.js";import{F as ke,G as Ie,W as Ce,d as be,g as Te,h as xe}from"./chunk-MCW4FHXZ.js";import{Aa as ue,B as le,D as pe,E as de,Ea as ge,Fa as R,Ga as L,Ia as ve,La as ye,Na as k,Oa as B,ga as ce}from"./chunk-UOUHADUB.js";import{n as me,q as he,r as _e,w as fe,y as D}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as h,Gb as _,Gc as se,Hb as J,Lb as T,Lc as ae,Mb as x,Nb as z,Ob as f,Pc as oe,Qa as s,R as Q,S as W,Sb as g,T as q,Ub as o,V as U,Va as V,X as I,Xb as y,Yb as X,Yc as S,Zb as w,Zc as O,_b as v,aa as d,ba as c,ca as E,cc as ee,fc as A,gb as j,gc as m,hb as Z,hc as te,ic as ne,kb as G,lb as K,mb as u,oa as P,rc as ie,tc as C,uc as re,wb as Y}from"./chunk-O3KMSE75.js";var Pe=`
    .p-password {
        display: inline-flex;
        position: relative;
    }

    .p-password .p-password-overlay {
        min-width: 100%;
    }

    .p-password-meter {
        height: dt('password.meter.height');
        background: dt('password.meter.background');
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-label {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-weak {
        background: dt('password.strength.weak.background');
    }

    .p-password-meter-medium {
        background: dt('password.strength.medium.background');
    }

    .p-password-meter-strong {
        background: dt('password.strength.strong.background');
    }

    .p-password-fluid {
        display: flex;
    }

    .p-password-fluid .p-password-input {
        width: 100%;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }

    .p-password-overlay {
        padding: dt('password.overlay.padding');
        background: dt('password.overlay.background');
        color: dt('password.overlay.color');
        border: 1px solid dt('password.overlay.border.color');
        box-shadow: dt('password.overlay.shadow');
        border-radius: dt('password.overlay.border.radius');
    }

    .p-password-content {
        display: flex;
        flex-direction: column;
        gap: dt('password.content.gap');
    }

    .p-password-toggle-mask-icon {
        inset-inline-end: dt('form.field.padding.x');
        color: dt('password.icon.color');
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * calc(dt('icon.size') / 2));
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-password-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon {
        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-clear-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-clear-icon):has(.p-password-toggle-mask-icon)  .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));
    }

`;var Me=`
    ${Pe}

    /* For PrimeNG */
    p-password.ng-invalid.ng-dirty .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-password-fluid-directive {
        width: 100%;
    }
`,Ae={root:({instance:t})=>({position:t.$appendTo()==="self"?"relative":void 0}),overlay:{position:"absolute"}},Oe={root:({instance:t})=>["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()==="filled","p-inputwrapper-focus":t.focused,"p-password-fluid":t.hasFluid}],rootDirective:({instance:t})=>["p-password p-inputtext p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()==="filled","p-password-fluid-directive":t.hasFluid}],pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:t})=>`p-password-meter-label ${t.meter?"p-password-meter-"+t.meter.strength:""}`,meterText:"p-password-meter-text",clearIcon:"p-password-clear-icon"},N=(()=>{class t extends ve{name="password";style=Me;classes=Oe;inlineStyles=Ae;static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275prov=W({token:t,factory:t.\u0275fac})}return t})();var De=["content"],Fe=["footer"],He=["header"],$e=["clearicon"],Ne=["hideicon"],Qe=["showicon"],We=["input"],ze=t=>({class:t}),qe=(t,a)=>({showTransitionParams:t,hideTransitionParams:a}),Ue=t=>({value:"visible",params:t}),je=t=>({width:t});function Ze(t,a){if(t&1){let e=f();E(),h(0,"svg",9),g("click",function(){d(e);let n=o(2);return c(n.clear())}),_()}if(t&2){let e=o(2);m(e.cx("clearIcon")),r("pBind",e.ptm("clearIcon"))}}function Ge(t,a){}function Ke(t,a){t&1&&u(0,Ge,0,0,"ng-template")}function Ye(t,a){if(t&1){let e=f();T(0),u(1,Ze,1,3,"svg",6),h(2,"span",7),g("click",function(){d(e);let n=o();return c(n.clear())}),u(3,Ke,1,0,null,8),_(),x()}if(t&2){let e=o();s(),r("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),m(e.cx("clearIcon")),r("pBind",e.ptm("clearIcon")),s(),r("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Je(t,a){if(t&1){let e=f();E(),h(0,"svg",12),g("click",function(){d(e);let n=o(3);return c(n.onMaskToggle())}),_()}if(t&2){let e=o(3);m(e.cx("maskIcon")),r("pBind",e.ptm("maskIcon"))}}function Xe(t,a){}function et(t,a){t&1&&u(0,Xe,0,0,"ng-template")}function tt(t,a){if(t&1){let e=f();h(0,"span",7),g("click",function(){d(e);let n=o(3);return c(n.onMaskToggle())}),u(1,et,1,0,null,13),_()}if(t&2){let e=o(3);r("pBind",e.ptm("maskIcon")),s(),r("ngTemplateOutlet",e.hideIconTemplate||e._hideIconTemplate)("ngTemplateOutletContext",C(3,ze,e.cx("maskIcon")))}}function nt(t,a){if(t&1&&(T(0),u(1,Je,1,3,"svg",10)(2,tt,2,5,"span",11),x()),t&2){let e=o(2);s(),r("ngIf",!e.hideIconTemplate&&!e._hideIconTemplate),s(),r("ngIf",e.hideIconTemplate||e._hideIconTemplate)}}function it(t,a){if(t&1){let e=f();E(),h(0,"svg",15),g("click",function(){d(e);let n=o(3);return c(n.onMaskToggle())}),_()}if(t&2){let e=o(3);m(e.cx("unmaskIcon")),r("pBind",e.ptm("unmaskIcon"))}}function rt(t,a){}function st(t,a){t&1&&u(0,rt,0,0,"ng-template")}function at(t,a){if(t&1){let e=f();h(0,"span",7),g("click",function(){d(e);let n=o(3);return c(n.onMaskToggle())}),u(1,st,1,0,null,13),_()}if(t&2){let e=o(3);r("pBind",e.ptm("unmaskIcon")),s(),r("ngTemplateOutlet",e.showIconTemplate||e._showIconTemplate)("ngTemplateOutletContext",C(3,ze,e.cx("unmaskIcon")))}}function ot(t,a){if(t&1&&(T(0),u(1,it,1,3,"svg",14)(2,at,2,5,"span",11),x()),t&2){let e=o(2);s(),r("ngIf",!e.showIconTemplate&&!e._showIconTemplate),s(),r("ngIf",e.showIconTemplate||e._showIconTemplate)}}function lt(t,a){if(t&1&&(T(0),u(1,nt,3,2,"ng-container",4)(2,ot,3,2,"ng-container",4),x()),t&2){let e=o();s(),r("ngIf",e.unmasked),s(),r("ngIf",!e.unmasked)}}function pt(t,a){t&1&&z(0)}function dt(t,a){t&1&&z(0)}function ct(t,a){if(t&1&&(T(0),u(1,dt,1,0,"ng-container",8),x()),t&2){let e=o(2);s(),r("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}function ut(t,a){if(t&1&&(h(0,"div",17)(1,"div",17),J(2,"div",18),_(),h(3,"div",17),te(4),_()()),t&2){let e=o(2);m(e.cx("content")),r("pBind",e.ptm("content")),s(),m(e.cx("meter")),r("pBind",e.ptm("meter")),s(),m(e.cx("meterLabel")),r("ngStyle",C(14,je,e.meter?e.meter.width:""))("pBind",e.ptm("meterLabel")),s(),m(e.cx("meterText")),r("pBind",e.ptm("meterText")),s(),ne(e.infoText)}}function mt(t,a){t&1&&z(0)}function ht(t,a){if(t&1){let e=f();h(0,"div",7,1),g("click",function(n){d(e);let l=o();return c(l.onOverlayClick(n))})("@overlayAnimation.start",function(n){d(e);let l=o();return c(l.onAnimationStart(n))})("@overlayAnimation.done",function(n){d(e);let l=o();return c(l.onAnimationEnd(n))}),u(2,pt,1,0,"ng-container",8)(3,ct,2,1,"ng-container",16)(4,ut,5,16,"ng-template",null,2,se)(6,mt,1,0,"ng-container",8),_()}if(t&2){let e=ee(5),i=o();A(i.sx("overlay")),m(i.cx("overlay")),r("@overlayAnimation",C(13,Ue,re(10,qe,i.showTransitionOptions,i.hideTransitionOptions)))("pBind",i.ptm("overlay")),s(2),r("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),s(),r("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),s(3),r("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}}var Ve=new U("PASSWORD_INSTANCE");var _t={provide:we,useExisting:Q(()=>Re),multi:!0},Re=(()=>{class t extends Le{bindDirectiveInstance=I(k,{self:!0});$pcPassword=I(Ve,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}ariaLabel;ariaLabelledBy;label;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;toggleMask;inputStyleClass;styleClass;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autocomplete;placeholder;showClear=!1;autofocus;tabindex;appendTo=oe(void 0);onFocus=new V;onBlur=new V;onClear=new V;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;$appendTo=ae(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_footerTemplate;_headerTemplate;_clearIconTemplate;_hideIconTemplate;_showIconTemplate;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;overlay;value=null;translationSubscription;_componentStyle=I(N);overlayService=I(ue);onInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"hideicon":this._hideIconTemplate=e.template;break;case"showicon":this._showIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onAnimationStart(e){switch(e.toState){case"visible":this.overlay=e.element,M.set("overlay",this.overlay,this.config.zIndex.overlay),this.$attrSelector&&this.overlay.setAttribute(this.$attrSelector,""),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null;break}}onAnimationEnd(e){switch(e.toState){case"void":M.clear(e.element);break}}appendContainer(){be.appendOverlay(this.overlay,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}alignOverlay(){this.overlay.style.minWidth=pe(this.input.nativeElement)+"px",this.$appendTo()==="self"?de(this.overlay,this.input?.nativeElement):le(this.overlay,this.input?.nativeElement)}onInput(e){this.value=e.target.value,this.onModelChange(this.value)}onInputFocus(e){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(e)}onKeyUp(e){if(this.feedback){let i=e.target.value;if(this.updateUI(i),e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}}updateUI(e){let i=null,n=null;switch(this.testStrength(e)){case 1:i=this.weakText(),n={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),n={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),n={strength:"strong",width:"100%"};break;default:i=this.promptText(),n=null;break}this.meter=n,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}testStrength(e){let i=0;return this.strongCheckRegExp?.test(e)?i=3:this.mediumCheckRegExp?.test(e)?i=2:e.length&&(i=1),i}bindScrollListener(){D(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Te(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){if(D(this.platformId)&&!this.resizeListener){let e=this.document.defaultView;this.resizeListener=this.renderer.listen(e,"resize",()=>{this.overlayVisible&&!ce()&&(this.overlayVisible=!1)})}}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}promptText(){return this.promptLabel||this.getTranslation(L.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(L.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(L.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(L.STRONG)}restoreAppend(){this.overlay&&this.$appendTo()&&(this.$appendTo()==="body"?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.$appendTo()).removeChild(this.overlay))}inputType(e){return e?"text":"password"}getTranslation(e){return this.config.getTranslation(e)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}writeControlValue(e,i){e===void 0?this.value=null:this.value=e,this.feedback&&this.updateUI(this.value||""),i(this.value),this.cd.markForCheck()}onDestroy(){this.overlay&&(M.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(t)))(n||t)}})();static \u0275cmp=j({type:t,selectors:[["p-password"]],contentQueries:function(i,n,l){if(i&1&&(y(l,De,4),y(l,Fe,4),y(l,He,4),y(l,$e,4),y(l,Ne,4),y(l,Qe,4),y(l,ge,4)),i&2){let p;w(p=v())&&(n.contentTemplate=p.first),w(p=v())&&(n.footerTemplate=p.first),w(p=v())&&(n.headerTemplate=p.first),w(p=v())&&(n.clearIconTemplate=p.first),w(p=v())&&(n.hideIconTemplate=p.first),w(p=v())&&(n.showIconTemplate=p.first),w(p=v())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&X(We,5),i&2){let l;w(l=v())&&(n.input=l.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(A(n.sx("root")),m(n.cn(n.cx("root"),n.styleClass)))},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:[2,"maxLength","maxLength",O],strongLabel:"strongLabel",inputId:"inputId",feedback:[2,"feedback","feedback",S],toggleMask:[2,"toggleMask","toggleMask",S],inputStyleClass:"inputStyleClass",styleClass:"styleClass",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autocomplete:"autocomplete",placeholder:"placeholder",showClear:[2,"showClear","showClear",S],autofocus:[2,"autofocus","autofocus",S],tabindex:[2,"tabindex","tabindex",O],appendTo:[1,"appendTo"]},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[ie([_t,N,{provide:Ve,useExisting:t},{provide:ye,useExisting:t}]),K([k]),G],decls:5,vars:25,consts:[["input",""],["overlay",""],["content",""],["pInputText","",3,"input","focus","blur","keyup","pSize","ngStyle","value","variant","invalid","pAutoFocus","pt"],[4,"ngIf"],[3,"class","style","pBind","click",4,"ngIf"],["data-p-icon","times",3,"class","pBind","click",4,"ngIf"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["data-p-icon","times",3,"click","pBind"],["data-p-icon","eyeslash",3,"class","pBind","click",4,"ngIf"],[3,"pBind","click",4,"ngIf"],["data-p-icon","eyeslash",3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","eye",3,"class","pBind","click",4,"ngIf"],["data-p-icon","eye",3,"click","pBind"],[4,"ngIf","ngIfElse"],[3,"pBind"],[3,"ngStyle","pBind"]],template:function(i,n){if(i&1){let l=f();h(0,"input",3,0),g("input",function(b){return d(l),c(n.onInput(b))})("focus",function(b){return d(l),c(n.onInputFocus(b))})("blur",function(b){return d(l),c(n.onInputBlur(b))})("keyup",function(b){return d(l),c(n.onKeyUp(b))}),_(),u(2,Ye,4,5,"ng-container",4)(3,lt,3,2,"ng-container",4)(4,ht,7,15,"div",5)}i&2&&(m(n.cn(n.cx("pcInputText"),n.inputStyleClass)),r("pSize",n.size())("ngStyle",n.inputStyle)("value",n.value)("variant",n.$variant())("invalid",n.invalid())("pAutoFocus",n.autofocus)("pt",n.ptm("pcInputText")),Y("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("tabindex",n.tabindex)("type",n.unmasked?"text":"password")("placeholder",n.placeholder)("autocomplete",n.autocomplete)("name",n.name())("maxlength",n.maxlength()||n.maxLength)("minlength",n.minlength())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0),s(2),r("ngIf",n.showClear&&n.value!=null),s(),r("ngIf",n.toggleMask),s(),r("ngIf",n.overlayVisible))},dependencies:[fe,me,_e,he,Ee,xe,Ce,Ie,ke,R,B,k],encapsulation:2,data:{animation:[Se("overlayAnimation",[$(":enter",[H({opacity:0,transform:"scaleY(0.8)"}),F("{{showTransitionParams}}")]),$(":leave",[F("{{hideTransitionParams}}",H({opacity:0}))])])]},changeDetection:0})}return t})(),pn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=q({imports:[Re,R,B,R,B]})}return t})();export{Re as a,pn as b};
