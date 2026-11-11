import{a as rt,b as lt}from"./chunk-H3G2323E.js";import{a as tt,b as nt}from"./chunk-3Y7QSSKK.js";import{a as P,b as ot}from"./chunk-JNUBCW5H.js";import"./chunk-66742H4U.js";import"./chunk-27JIZF5R.js";import{a as $e,b as et}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{b as Ke,f as Je,i as Xe,u as Ye}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import{c as Ze,d as De,f as Ie,g as Ee,h as Ve}from"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as at}from"./chunk-FKOOMXTU.js";import{a as H}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as it}from"./chunk-XCUGNKAG.js";import{a as F,b as ne}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import{d as Pe}from"./chunk-AAKCLA3R.js";import{ga as R,ha as Q}from"./chunk-MCW4FHXZ.js";import{Ea as Me,Fa as te,Ia as A,La as J,Ma as X,N as qe,Na as h,Oa as O,h as ze,ma as Ge}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as Ue,r as Te,w as V}from"./chunk-D2XKNHFS.js";import{$b as ee,Ab as oe,Eb as p,Fb as a,Gb as o,Gc as C,Hb as x,Lc as E,Mc as we,Nb as Se,Ob as g,Pc as be,Qa as l,R as Y,Rc as xe,S as N,Sb as u,Sc as _e,T as We,Tc as me,Ub as _,V as q,Vb as Z,Wb as $,X as b,Xb as pe,Zb as se,_b as ce,aa as c,ba as d,bc as ve,gb as f,gc as j,hb as Oe,hc as r,ic as Re,ja as he,kb as G,lb as U,mb as v,mc as T,nc as M,oa as y,oc as D,rc as K,sc as Qe,tc as de,uc as ge,vc as ke,wb as ie,zb as ae}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var pt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["stepper-accessibility-doc"]],decls:56,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(a(0,"div")(1,"app-docsectiontext")(2,"h3"),r(3,"Screen Reader"),o(),a(4,"p"),r(5," Stepper container is defined with the "),a(6,"i"),r(7,"tablist"),o(),r(8," role, as any attribute is passed to the container element "),a(9,"i"),r(10,"aria-labelledby"),o(),r(11," can be optionally used to specify an element to describe the Stepper. Each stepper header has a "),a(12,"i"),r(13,"tab"),o(),r(14," role and "),a(15,"i"),r(16,"aria-controls"),o(),r(17," to refer to the corresponding stepper content element. The content element of each stepper has "),a(18,"i"),r(19,"tabpanel"),o(),r(20," role, an id to match the "),a(21,"i"),r(22,"aria-controls"),o(),r(23," of the header and "),a(24,"i"),r(25,"aria-labelledby"),o(),r(26," reference to the header as the accessible name. "),o(),a(27,"h3"),r(28,"Tab Header Keyboard Support"),o(),a(29,"div",0)(30,"table",1)(31,"thead")(32,"tr")(33,"th"),r(34,"Key"),o(),a(35,"th"),r(36,"Function"),o()()(),a(37,"tbody")(38,"tr")(39,"td")(40,"i"),r(41,"tab"),o()(),a(42,"td"),r(43,"Moves focus through the header."),o()(),a(44,"tr")(45,"td")(46,"i"),r(47,"enter"),o()(),a(48,"td"),r(49,"Activates the focused stepper header."),o()(),a(50,"tr")(51,"td")(52,"i"),r(53,"space"),o()(),a(54,"td"),r(55,"Activates the focused stepper header."),o()()()()()()())},dependencies:[F],encapsulation:2})}return e})();var It={root:({instance:e})=>["p-stepitem",{"p-stepitem-active":e.isActive()}]},Be=(()=>{class e extends A{name="stepitem";classes=It;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Et={root:"p-steplist"},Le=(()=>{class e extends A{name="steplist";classes=Et;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Vt={root:"p-steppanels"},Ne=(()=>{class e extends A{name="steppanel";classes=Vt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Pt={root:({instance:e})=>["p-steppanel",{"p-steppanel-active":e.isVertical()&&e.active()}],content:"p-steppanel-content"},je=(()=>{class e extends A{name="steppanel";classes=Pt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var st=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }

    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-steppanel {
        display: flex;
        flex: 1 1 auto;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`;var Bt=`
    ${st}

    /* For PrimeNG */
    .p-steppanel:not(.p-steppanel-active) > .p-steppanel-content,
    .p-steppanel-content.ng-animating {
        overflow: hidden;
    }
`,Lt={root:({instance:e})=>["p-stepper p-component",{"p-readonly":e.linear()}],separator:"p-stepper-separator"},ue=(()=>{class e extends A{name="stepper";style=Bt;classes=Lt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Nt={root:({instance:e})=>["p-step",{"p-step-active":e.active(),"p-disabled":e.isStepDisabled()}],header:"p-step-header",number:"p-step-number",title:"p-step-title"},Ae=(()=>{class e extends A{name="step";classes=Nt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var re=["*"],xt=["content"],_t=(e,m,t)=>({activateCallback:e,value:m,active:t});function At(e,m){e&1&&x(0,"p-stepper-separator")}function Ft(e,m){if(e&1){let t=g();a(0,"button",0),u("click",function(){c(t);let n=_();return d(n.onStepClick())}),a(1,"span",1),r(2),o(),a(3,"span",1),$(4),o()(),ae(5,At,1,0,"p-stepper-separator")}if(e&2){let t=_();j(t.cx("header")),p("pBind",t.ptm("header"))("tabindex",t.isStepDisabled()?-1:void 0)("disabled",t.isStepDisabled()),ie("id",t.id())("role","tab")("aria-controls",t.ariaControls()),l(),j(t.cx("number")),p("pBind",t.ptm("number")),l(),Re(t.value()),l(),j(t.cx("title")),p("pBind",t.ptm("title")),l(2),oe(t.isSeparatorVisible()?5:-1)}}function Ht(e,m){e&1&&Se(0)}function Wt(e,m){e&1&&x(0,"p-stepper-separator")}function Ot(e,m){if(e&1&&(v(0,Ht,1,0,"ng-container",2),ae(1,Wt,1,0,"p-stepper-separator")),e&2){let t=_();p("ngTemplateOutlet",t.content||t._contentTemplate)("ngTemplateOutletContext",ke(3,_t,t.onStepClick.bind(t),t.value(),t.active())),l(),oe(t.isSeparatorVisible()?1:-1)}}var ct=e=>({transitionParams:e}),Rt=e=>({value:"visible",params:e}),Qt=e=>({value:"hidden",params:e});function zt(e,m){e&1&&x(0,"p-stepper-separator")}function qt(e,m){e&1&&Se(0)}function Gt(e,m){if(e&1&&v(0,qt,1,0,"ng-container",1),e&2){let t=_();p("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",ke(2,_t,t.updateValue.bind(t),t.value(),t.active()))}}var dt=new q("STEPPER_INSTANCE"),mt=new q("STEPLIST_INSTANCE"),ut=new q("STEPITEM_INSTANCE"),ft=new q("STEP_INSTANCE"),vt=new q("STEPPANEL_INSTANCE"),gt=new q("STEPPANELS_INSTANCE"),bt=new q("STEPPERSEPARATOR_INSTANCE"),B=(()=>{class e extends X{$pcStepList=b(mt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(h,{self:!0});steps=_e(Y(()=>S));_componentStyle=b(Le);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-list"]],contentQueries:function(i,n,s){i&1&&ee(s,n.steps,S,4),i&2&&ve()},hostVars:2,hostBindings:function(i,n){i&2&&j(n.cx("root"))},features:[K([Le,{provide:mt,useExisting:e},{provide:J,useExisting:e}]),U([h]),G],ngContentSelectors:re,decls:1,vars:0,template:function(i,n){i&1&&(Z(),$(0))},dependencies:[V,O],encapsulation:2,changeDetection:0})}return e})(),Fe=(()=>{class e extends X{$pcStepperSeparator=b(bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=b(ue);static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-stepper-separator"]],hostVars:2,hostBindings:function(i,n){i&2&&j(n.cx("separator"))},features:[K([ue,{provide:bt,useExisting:e},{provide:J,useExisting:e}]),U([h]),G],ngContentSelectors:re,decls:1,vars:0,template:function(i,n){i&1&&(Z(),$(0))},dependencies:[V,O],encapsulation:2,changeDetection:0})}return e})(),fe=(()=>{class e extends X{$pcStepItem=b(ut,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(h,{self:!0});_componentStyle=b(Be);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}pcStepper=b(Y(()=>w));value=me();isActive=E(()=>this.pcStepper.value()===this.value());step=xe(Y(()=>S));stepPanel=xe(Y(()=>L));constructor(){super(),we(()=>{this.step().value.set(this.value())}),we(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["p-step-item"]],contentQueries:function(i,n,s){i&1&&(ee(s,n.step,S,5),ee(s,n.stepPanel,L,5)),i&2&&ve(2)},hostVars:3,hostBindings:function(i,n){i&2&&(ie("data-p-active",n.isActive()),j(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[K([Be,{provide:ut,useExisting:e},{provide:J,useExisting:e}]),U([h]),G],ngContentSelectors:re,decls:1,vars:0,template:function(i,n){i&1&&(Z(),$(0))},dependencies:[V,O],encapsulation:2,changeDetection:0})}return e})(),S=(()=>{class e extends X{$pcStep=b(ft,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(h,{self:!0});pcStepper=b(Y(()=>w));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=me();disabled=be(!1,{transform:t=>Pe(t)});active=E(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=E(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=E(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=E(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=E(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps(),i=t.indexOf(this),n=t.length;return i!==n-1}else return!1});content;templates;_contentTemplate;_componentStyle=b(Ae);onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step"]],contentQueries:function(i,n,s){if(i&1&&(pe(s,xt,4),pe(s,Me,4)),i&2){let I;se(I=ce())&&(n.content=I.first),se(I=ce())&&(n.templates=I)}},hostVars:6,hostBindings:function(i,n){i&2&&(ie("aria-current",n.active()?"step":void 0)("role","presentation")("data-p-active",n.active())("data-p-disabled",n.isStepDisabled()),j(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[K([Ae,{provide:ft,useExisting:e},{provide:J,useExisting:e}]),U([h]),G],ngContentSelectors:re,decls:2,vars:1,consts:[["type","button",3,"click","pBind","tabindex","disabled"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(Z(),ae(0,Ft,6,16)(1,Ot,2,7)),i&2&&oe(!n.content&&!n._contentTemplate?0:1)},dependencies:[V,Te,Fe,te,O,h],encapsulation:2,changeDetection:0})}return e})(),L=(()=>{class e extends X{$pcStepPanel=b(vt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(h,{self:!0});pcStepper=b(Y(()=>w));transitionOptions=E(()=>this.pcStepper.transitionOptions());value=me(void 0);active=E(()=>this.pcStepper.value()===this.value());visible=he(this.active());isVisible=E(()=>this.active()||this.isVertical()&&this.visible());ariaControls=E(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=E(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=E(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=E(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,i=qe(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return ze(this.el.nativeElement,i)!==t-1}});contentTemplate;templates;_contentTemplate;_componentStyle=b(je);onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}onAnimationStart(t){t.toState==="visible"&&this.visible.set(!0)}onAnimationEnd(t){t.toState==="hidden"&&this.visible.set(!1)}updateValue(t){this.pcStepper.updateValue(t)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-panel"]],contentQueries:function(i,n,s){if(i&1&&(pe(s,xt,5),pe(s,Me,4)),i&2){let I;se(I=ce())&&(n.contentTemplate=I.first),se(I=ce())&&(n.templates=I)}},hostVars:7,hostBindings:function(i,n){i&2&&(ie("role","tabpanel")("aria-controls",n.ariaControls())("id",n.id())("data-p-active",n.active())("data-pc-name","steppanel"),j(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[K([je,{provide:vt,useExisting:e},{provide:J,useExisting:e}]),U([h]),G],decls:3,vars:14,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(ae(0,zt,1,0,"p-stepper-separator"),a(1,"div",0),u("@content.start",function(I){return n.onAnimationStart(I)})("@content.done",function(I){return n.onAnimationEnd(I)}),ae(2,Gt,1,6,"ng-container"),o()),i&2&&(oe(n.isSeparatorVisible()?0:-1),l(),j(n.cx("content")),p("pBind",n.ptm("content"))("@content",n.isVertical()?n.active()?de(8,Rt,de(6,ct,n.transitionOptions())):de(12,Qt,de(10,ct,n.transitionOptions())):void 0),l(),oe(n.isVisible()?2:-1))},dependencies:[V,Te,Fe,te,O,h],encapsulation:2,data:{animation:[Ze("content",[Ee("hidden",Ie({height:"0"})),Ee("visible",Ie({height:"*"})),Ve("visible <=> hidden",[De("400ms cubic-bezier(0.86, 0, 0.07, 1)")]),Ve("void => *",De(0))])]},changeDetection:0})}return e})(),z=(()=>{class e extends X{$pcStepPanels=b(gt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(h,{self:!0});_componentStyle=b(Ne);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-step-panels"]],hostVars:2,hostBindings:function(i,n){i&2&&j(n.cx("root"))},features:[K([Ne,{provide:gt,useExisting:e},{provide:J,useExisting:e}]),U([h]),G],ngContentSelectors:re,decls:1,vars:0,template:function(i,n){i&1&&(Z(),$(0))},dependencies:[V,te,O],encapsulation:2,changeDetection:0})}return e})(),w=(()=>{class e extends X{$pcStepper=b(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=b(h,{self:!0});_componentStyle=b(ue);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=me(void 0);linear=be(!1,{transform:t=>Pe(t)});transitionOptions=be("400ms cubic-bezier(0.86, 0, 0.07, 1)");id=he(Ge("pn_id_"));stepItems=_e(fe);steps=_e(S);stepList=xe(B);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=y(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-stepper"]],contentQueries:function(i,n,s){i&1&&(ee(s,n.stepItems,fe,4),ee(s,n.steps,S,4),ee(s,n.stepList,B,5)),i&2&&ve(3)},hostVars:4,hostBindings:function(i,n){i&2&&(ie("role","tablist")("id",n.id()),j(n.cx("root")))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"]},outputs:{value:"valueChange"},features:[K([ue,{provide:dt,useExisting:e},{provide:J,useExisting:e}]),U([h]),G],ngContentSelectors:re,decls:1,vars:0,template:function(i,n){i&1&&(Z(),$(0))},dependencies:[V,te,O],encapsulation:2,changeDetection:0})}return e})(),W=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Oe({type:e});static \u0275inj=We({imports:[w,B,z,L,fe,S,Fe,te,O,te,O]})}return e})();function Ut(e,m){if(e&1){let t=g();a(0,"div",5)(1,"div",6),r(2,"Content I"),o()(),a(3,"div",7)(4,"p-button",8),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}function Kt(e,m){if(e&1){let t=g();a(0,"div",5)(1,"div",6),r(2,"Content II"),o()(),a(3,"div",9)(4,"p-button",10),u("onClick",function(){let n=c(t).activateCallback;return d(n(1))}),o(),a(5,"p-button",8),u("onClick",function(){let n=c(t).activateCallback;return d(n(3))}),o()()}}function Jt(e,m){if(e&1){let t=g();a(0,"div",5)(1,"div",6),r(2,"Content III"),o()(),a(3,"div",11)(4,"p-button",12),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}var Ct=(()=>{class e{code={basic:`<p-stepper [value]="1" class="basis-[50rem]">
    <p-step-list>
        <p-step [value]="1">Header I</p-step>
        <p-step [value]="2">Header II</p-step>
        <p-step [value]="3">Header II</p-step>
    </p-step-list>
    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                </div>
                <div class="flex pt-6 justify-end">
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [value]="1" class="basis-[50rem]">
        <p-step-list>
            <p-step [value]="1">Header I</p-step>
            <p-step [value]="2">Header II</p-step>
            <p-step [value]="3">Header II</p-step>
        </p-step-list>
        <p-step-panels>
            <p-step-panel [value]="1">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content I
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="2">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content II
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="3">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content III
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-panels>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
    selector: 'stepper-basic-demo',
    templateUrl: './stepper-basic-demo.html',
    standalone: true,
    imports: [ButtonModule, StepperModule]
})
export class StepperBasicDemo {
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["basic-doc"]],decls:38,vars:8,consts:[["content",""],[1,"card","flex","justify-center"],[1,"basis-[50rem]",3,"value"],[3,"value"],["selector","stepper-basic-demo",3,"code"],[1,"flex","flex-col","h-48"],[1,"border-2","border-dashed","border-surface-200","dark:border-surface-700","rounded","bg-surface-50","dark:bg-surface-950","flex-auto","flex","justify-center","items-center","font-medium"],[1,"flex","pt-6","justify-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-6","justify-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","pt-6","justify-start"],["label","Back","icon","pi pi-arrow-left","iconPos","right",3,"onClick"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Stepper consists of a combination of "),a(3,"i"),r(4,"StepList"),o(),r(5,", "),a(6,"i"),r(7,"Step"),o(),r(8,", "),a(9,"i"),r(10,"StepPanels"),o(),r(11," and "),a(12,"i"),r(13,"StepPanel"),o(),r(14," components. The "),a(15,"i"),r(16,"value"),o(),r(17," property is essential for associating Step and StepPanel with each other."),o()(),a(18,"div",1)(19,"p-stepper",2)(20,"p-step-list")(21,"p-step",3),r(22,"Header I"),o(),a(23,"p-step",3),r(24,"Header II"),o(),a(25,"p-step",3),r(26,"Header II"),o()(),a(27,"p-step-panels")(28,"p-step-panel",3),v(29,Ut,5,0,"ng-template",null,0,C),o(),a(31,"p-step-panel",3),v(32,Kt,6,0,"ng-template",null,0,C),o(),a(34,"p-step-panel",3),v(35,Jt,5,0,"ng-template",null,0,C),o()()()(),x(37,"app-code",4)),i&2&&(l(19),p("value",1),l(2),p("value",1),l(2),p("value",2),l(2),p("value",3),l(3),p("value",1),l(3),p("value",2),l(3),p("value",3),l(3),p("code",n.code))},dependencies:[F,H,W,w,B,z,L,S,Q,R],encapsulation:2})}return e})();var yt=(()=>{class e{code={typescript:"import { StepperModule } from 'primeng/stepper';"};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["stepper-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&x(0,"app-code",0),i&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[H],encapsulation:2})}return e})();function Xt(e,m){if(e&1){let t=g();a(0,"div",5)(1,"div",6),r(2,"Content I"),o()(),a(3,"div",7)(4,"p-button",8),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}function Yt(e,m){if(e&1){let t=g();a(0,"div",5)(1,"div",6),r(2,"Content II"),o()(),a(3,"div",9)(4,"p-button",10),u("onClick",function(){let n=c(t).activateCallback;return d(n(1))}),o(),a(5,"p-button",8),u("onClick",function(){let n=c(t).activateCallback;return d(n(3))}),o()()}}function Zt(e,m){if(e&1){let t=g();a(0,"div",5)(1,"div",6),r(2,"Content III"),o()(),a(3,"div",11)(4,"p-button",12),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}var ht=(()=>{class e{code={basic:`<p-stepper [value]="1" class="basis-[50rem]" [linear]="true">
    <p-step-list>
        <p-step [value]="1">Header I</p-step>
        <p-step [value]="2">Header II</p-step>
        <p-step [value]="3">Header II</p-step>
    </p-step-list>
    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                </div>
                <div class="flex pt-6 justify-end">
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                    <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [value]="1" class="basis-[50rem]" [linear]="true">
        <p-step-list>
            <p-step [value]="1">Header I</p-step>
            <p-step [value]="2">Header II</p-step>
            <p-step [value]="3">Header II</p-step>
        </p-step-list>
        <p-step-panels>
            <p-step-panel [value]="1">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content I
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="2">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content II
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                        <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="3">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content III
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-panels>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'stepper-linear-demo-demo',
    templateUrl: './stepper-linear-demo-demo.html',
    standalone: true,
    imports: [StepperModule, ButtonModule]
})
export class StepperLinearDemo {
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["linear-doc"]],decls:26,vars:9,consts:[["content",""],[1,"card","flex","justify-center"],[1,"basis-[50rem]",3,"value","linear"],[3,"value"],["selector","stepper-linear-demo",3,"code"],[1,"flex","flex-col","h-48"],[1,"border-2","border-dashed","border-surface-200","dark:border-surface-700","rounded","bg-surface-50","dark:bg-surface-950","flex-auto","flex","justify-center","items-center","font-medium"],[1,"flex","pt-6","justify-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-6","justify-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","pt-6","justify-start"],["label","Back","icon","pi pi-arrow-left","iconPos","right",3,"onClick"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"When "),a(3,"i"),r(4,"linear"),o(),r(5," property is set to true, current step must be completed in order to move to the next step."),o()(),a(6,"div",1)(7,"p-stepper",2)(8,"p-step-list")(9,"p-step",3),r(10,"Header I"),o(),a(11,"p-step",3),r(12,"Header II"),o(),a(13,"p-step",3),r(14,"Header II"),o()(),a(15,"p-step-panels")(16,"p-step-panel",3),v(17,Xt,5,0,"ng-template",null,0,C),o(),a(19,"p-step-panel",3),v(20,Yt,6,0,"ng-template",null,0,C),o(),a(22,"p-step-panel",3),v(23,Zt,5,0,"ng-template",null,0,C),o()()()(),x(25,"app-code",4)),i&2&&(l(7),p("value",1)("linear",!0),l(2),p("value",1),l(2),p("value",2),l(2),p("value",3),l(3),p("value",1),l(3),p("value",2),l(3),p("value",3),l(3),p("code",n.code))},dependencies:[F,H,W,w,B,z,L,S,Q,R],encapsulation:2})}return e})();function $t(e,m){if(e&1){let t=g();a(0,"div",4)(1,"div",5),r(2,"Content I"),o()(),a(3,"div",6)(4,"p-button",7),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}function en(e,m){if(e&1){let t=g();a(0,"div",4)(1,"div",5),r(2,"Content II"),o()(),a(3,"div",8)(4,"p-button",9),u("onClick",function(){let n=c(t).activateCallback;return d(n(1))}),o(),a(5,"p-button",7),u("onClick",function(){let n=c(t).activateCallback;return d(n(3))}),o()()}}function tn(e,m){if(e&1){let t=g();a(0,"div",4)(1,"div",5),r(2,"Content III"),o()(),a(3,"div",10)(4,"p-button",11),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}var St=(()=>{class e{docs=[{data:P("Stepper"),key:"Stepper"},{data:P("StepperSeparator"),key:"StepperSeparator"},{data:P("StepList"),key:"StepList"},{data:P("Step"),key:"Step"},{data:P("StepPanels"),key:"StepPanels"},{data:P("StepPanel"),key:"StepPanel"}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["stepper-pt-viewer"]],decls:19,vars:8,consts:[["content",""],[3,"docs"],[1,"basis-[50rem]",3,"value"],[3,"value"],[1,"flex","flex-col","h-48"],[1,"border-2","border-dashed","border-surface-200","dark:border-surface-700","rounded","bg-surface-50","dark:bg-surface-950","flex-auto","flex","justify-center","items-center","font-medium"],[1,"flex","pt-6","justify-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","pt-6","justify-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","pt-6","justify-start"],["label","Back","icon","pi pi-arrow-left","iconPos","right",3,"onClick"]],template:function(i,n){i&1&&(a(0,"app-docptviewer",1)(1,"p-stepper",2)(2,"p-step-list")(3,"p-step",3),r(4,"Header I"),o(),a(5,"p-step",3),r(6,"Header II"),o(),a(7,"p-step",3),r(8,"Header II"),o()(),a(9,"p-step-panels")(10,"p-step-panel",3),v(11,$t,5,0,"ng-template",null,0,C),o(),a(13,"p-step-panel",3),v(14,en,6,0,"ng-template",null,0,C),o(),a(16,"p-step-panel",3),v(17,tn,5,0,"ng-template",null,0,C),o()()()()),i&2&&(p("docs",n.docs),l(),p("value",1),l(2),p("value",1),l(2),p("value",2),l(2),p("value",3),l(3),p("value",1),l(3),p("value",2),l(3),p("value",3))},dependencies:[V,ot,W,w,B,z,L,S,Q,R],encapsulation:2})}return e})();var kt=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:St},{id:"pt.doc.stepper",label:"Stepper PT Options",component:ne,data:P("Stepper")},{id:"pt.doc.stepperseparator",label:"StepperSeparator PT Options",component:ne,data:P("StepperSeparator")},{id:"pt.doc.steplist",label:"StepList PT Options",component:ne,data:P("StepList")},{id:"pt.doc.step",label:"Step PT Options",component:ne,data:P("Step")},{id:"pt.doc.steppanels",label:"StepPanels PT Options",component:ne,data:P("StepPanels")},{id:"pt.doc.steppanel",label:"StepPanel PT Options",component:ne,data:P("StepPanel")}];static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["stepper-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,n){i&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),r(3,"Stepper Pass Through"),o()(),x(4,"app-docsection",2),o()),i&2&&(l(4),p("docs",n.docs))},dependencies:[V,it],encapsulation:2})}return e})();var wt=(()=>{class e{code={basic:`<p-stepper [value]="1" class="basis-[50rem]">
    <p-step-list>
        <p-step [value]="1">Design</p-step>
        <p-step [value]="2">Development</p-step>
        <p-step [value]="3">QA</p-step>
    </p-step-list>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [value]="1" class="basis-[50rem]">
        <p-step-list>
            <p-step [value]="1">Design</p-step>
            <p-step [value]="2">Development</p-step>
            <p-step [value]="3">QA</p-step>
        </p-step-list>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
    selector: 'stepper-steps-only-demo',
    templateUrl: './stepper-steps-only-demo.html',
    standalone: true,
    imports: [ButtonModule, StepperModule]
})
export class StepperStepsOnlyDemo {
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["steps-only-doc"]],decls:16,vars:5,consts:[[1,"card","flex","justify-center"],[1,"basis-[50rem]",3,"value"],[3,"value"],["selector","stepper-steps-only-demo",3,"code"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Use Stepper with a "),a(3,"i"),r(4,"StepList"),o(),r(5," only for custom requirements where a progress indicator is needed."),o()(),a(6,"div",0)(7,"p-stepper",1)(8,"p-step-list")(9,"p-step",2),r(10,"Design"),o(),a(11,"p-step",2),r(12,"Development"),o(),a(13,"p-step",2),r(14,"QA"),o()()()(),x(15,"app-code",3)),i&2&&(l(7),p("value",1),l(2),p("value",1),l(2),p("value",2),l(2),p("value",3),l(2),p("code",n.code))},dependencies:[F,H,W,w,B,S],encapsulation:2})}return e})();var He=(e,m)=>({"bg-primary text-primary-contrast border-primary":e,"border-surface":m});function nn(e,m){if(e&1){let t=g();a(0,"button",6),u("click",function(){let n=c(t).activateCallback;return d(n())}),a(1,"span",7),x(2,"i",8),o()()}if(e&2){let t=m.value,i=_();l(),p("ngClass",ge(1,He,t<=i.activeStep,t>i.activeStep))}}function an(e,m){if(e&1){let t=g();a(0,"button",6),u("click",function(){let n=c(t).activateCallback;return d(n())}),a(1,"span",7),x(2,"i",9),o()()}if(e&2){let t=m.value,i=_();l(),p("ngClass",ge(1,He,t<=i.activeStep,t>i.activeStep))}}function on(e,m){if(e&1){let t=g();a(0,"button",6),u("click",function(){let n=c(t).activateCallback;return d(n())}),a(1,"span",7),x(2,"i",10),o()()}if(e&2){let t=m.value,i=_();l(),p("ngClass",ge(1,He,t<=i.activeStep,t>i.activeStep))}}function rn(e,m){if(e&1){let t=g();a(0,"div",11)(1,"div",12),r(2,"Create your account"),o(),a(3,"div",13)(4,"input",14),D("ngModelChange",function(n){c(t);let s=_();return M(s.name,n)||(s.name=n),d(n)}),o()(),a(5,"div",13)(6,"input",15),D("ngModelChange",function(n){c(t);let s=_();return M(s.email,n)||(s.email=n),d(n)}),o()(),a(7,"div",13)(8,"p-password",16),D("ngModelChange",function(n){c(t);let s=_();return M(s.password,n)||(s.password=n),d(n)}),o()()(),a(9,"div",17)(10,"p-button",18),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}if(e&2){let t=_();l(4),T("ngModel",t.name),l(2),T("ngModel",t.email),l(2),T("ngModel",t.password)}}function ln(e,m){if(e&1){let t=g();a(0,"div",19)(1,"div",12),r(2,"Choose your interests"),o(),a(3,"div",20)(4,"p-togglebutton",21),D("ngModelChange",function(n){c(t);let s=_();return M(s.option1,n)||(s.option1=n),d(n)}),o(),a(5,"p-togglebutton",22),D("ngModelChange",function(n){c(t);let s=_();return M(s.option2,n)||(s.option2=n),d(n)}),o(),a(6,"p-togglebutton",23),D("ngModelChange",function(n){c(t);let s=_();return M(s.option3,n)||(s.option3=n),d(n)}),o(),a(7,"p-togglebutton",24),D("ngModelChange",function(n){c(t);let s=_();return M(s.option4,n)||(s.option4=n),d(n)}),o(),a(8,"p-togglebutton",25),D("ngModelChange",function(n){c(t);let s=_();return M(s.option5,n)||(s.option5=n),d(n)}),o(),a(9,"p-togglebutton",26),D("ngModelChange",function(n){c(t);let s=_();return M(s.option6,n)||(s.option6=n),d(n)}),o(),a(10,"p-togglebutton",27),D("ngModelChange",function(n){c(t);let s=_();return M(s.option7,n)||(s.option7=n),d(n)}),o(),a(11,"p-togglebutton",28),D("ngModelChange",function(n){c(t);let s=_();return M(s.option8,n)||(s.option8=n),d(n)}),o(),a(12,"p-togglebutton",29),D("ngModelChange",function(n){c(t);let s=_();return M(s.option9,n)||(s.option9=n),d(n)}),o(),a(13,"p-togglebutton",30),D("ngModelChange",function(n){c(t);let s=_();return M(s.option10,n)||(s.option10=n),d(n)}),o()()(),a(14,"div",31)(15,"p-button",32),u("onClick",function(){let n=c(t).activateCallback;return d(n(1))}),o(),a(16,"p-button",18),u("onClick",function(){let n=c(t).activateCallback;return d(n(3))}),o()()}if(e&2){let t=_();l(4),T("ngModel",t.option1),l(),T("ngModel",t.option2),l(),T("ngModel",t.option3),l(),T("ngModel",t.option4),l(),T("ngModel",t.option5),l(),T("ngModel",t.option6),l(),T("ngModel",t.option7),l(),T("ngModel",t.option8),l(),T("ngModel",t.option9),l(),T("ngModel",t.option10)}}function pn(e,m){if(e&1){let t=g();a(0,"div",33)(1,"div",12),r(2,"Account created successfully"),o(),a(3,"div",34),x(4,"img",35),o()(),a(5,"div",36)(6,"p-button",32),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}var Tt=(()=>{class e{activeStep=1;name=null;email=null;password=null;option1=!1;option2=!1;option3=!1;option4=!1;option5=!1;option6=!1;option7=!1;option8=!1;option9=!1;option10=!1;code={basic:`<p-stepper [(value)]="activeStep" class="basis-[40rem]">
    <p-step-list>
        <p-step [value]="1" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-user"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>

        <p-step [value]="2" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-star"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>

        <p-step [value]="3" class="flex flex-row flex-auto gap-2">
            <ng-template #content let-activateCallback="activateCallback" let-value="value">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                    <span
                        class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                        [ngClass]="{
                            'bg-primary text-primary-contrast border-primary': value <= activeStep,
                            'border-surface': value > activeStep
                        }"
                    >
                        <i class="pi pi-id-card"></i>
                    </span>
                </button>
            </ng-template>
        </p-step>
    </p-step-list>

    <p-step-panels>
        <p-step-panel [value]="1">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                    <div class="field">
                        <input [(ngModel)]="name" pInputText id="input" type="text" placeholder="Name" fluid />
                    </div>
                    <div class="field">
                        <input [(ngModel)]="email" pInputText id="email" type="email" placeholder="Email" fluid />
                    </div>
                    <div class="field">
                        <p-password [(ngModel)]="password" placeholder="Password" fluid />
                    </div>
                </div>
                <div class="flex pt-6 justify-end">
                    <p-button (onClick)="activateCallback(2)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="2">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                    <div class="flex flex-wrap justify-center gap-4">
                        <p-togglebutton [(ngModel)]="option1" onLabel="Nature" offLabel="Nature" />
                        <p-togglebutton [(ngModel)]="option2" onLabel="Art" offLabel="Art" />
                        <p-togglebutton [(ngModel)]="option3" onLabel="Music" offLabel="Music" />
                        <p-togglebutton [(ngModel)]="option4" onLabel="Design" offLabel="Design" />
                        <p-togglebutton [(ngModel)]="option5" onLabel="Photography" offLabel="Photography" />
                        <p-togglebutton [(ngModel)]="option6" onLabel="Movies" offLabel="Movies" />
                        <p-togglebutton [(ngModel)]="option7" onLabel="Sports" offLabel="Sports" />
                        <p-togglebutton [(ngModel)]="option8" onLabel="Gaming" offLabel="Gaming" />
                        <p-togglebutton [(ngModel)]="option9" onLabel="Traveling" offLabel="Traveling" />
                        <p-togglebutton [(ngModel)]="option10" onLabel="Dancing" offLabel="Dancing" />
                    </div>
                </div>
                <div class="flex pt-6 justify-between">
                    <p-button (onClick)="activateCallback(1)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                    <p-button (onClick)="activateCallback(3)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                </div>
            </ng-template>
        </p-step-panel>

        <p-step-panel [value]="3">
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col items-center gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                    <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                    <div class="text-center">
                        <img alt="logo" src="/_ext/primefaces.org/cdn/primeng/images/stepper/content.svg" />
                    </div>
                </div>
                <div class="flex pt-6 justify-start">
                    <p-button (onClick)="activateCallback(2)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-panels>
</p-stepper>`,html:`<div class="card flex justify-center">
    <p-stepper [(value)]="activeStep" class="basis-[40rem]">
        <p-step-list>
            <p-step [value]="1" class="flex flex-row flex-auto gap-2">
                <ng-template #content let-activateCallback="activateCallback" let-value="value">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                        <span
                            class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                            [ngClass]="{
                                'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                'border-surface': value > activeStep
                            }"
                        >
                            <i class="pi pi-user"></i>
                        </span>
                    </button>
                </ng-template>
            </p-step>

            <p-step [value]="2" class="flex flex-row flex-auto gap-2">
                <ng-template #content let-activateCallback="activateCallback" let-value="value">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                        <span
                            class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                            [ngClass]="{
                                'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                'border-surface': value > activeStep
                            }"
                        >
                            <i class="pi pi-star"></i>
                        </span>
                    </button>
                </ng-template>
            </p-step>

            <p-step [value]="3" class="flex flex-row flex-auto gap-2">
                <ng-template #content let-activateCallback="activateCallback" let-value="value">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" (click)="activateCallback()">
                        <span
                            class="rounded-full border-2 w-12 h-12 inline-flex items-center justify-center"
                            [ngClass]="{
                                'bg-primary text-primary-contrast border-primary': value <= activeStep,
                                'border-surface': value > activeStep
                            }"
                        >
                            <i class="pi pi-id-card"></i>
                        </span>
                    </button>
                </ng-template>
            </p-step>
        </p-step-list>

        <p-step-panels>
            <p-step-panel [value]="1">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                        <div class="field">
                            <input [(ngModel)]="name" pInputText id="input" type="text" placeholder="Name" fluid />
                        </div>
                        <div class="field">
                            <input [(ngModel)]="email" pInputText id="email" type="email" placeholder="Email" fluid />
                        </div>
                        <div class="field">
                            <p-password [(ngModel)]="password" placeholder="Password" fluid />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <p-button (onClick)="activateCallback(2)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="2">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                        <div class="flex flex-wrap justify-center gap-4">
                            <p-togglebutton [(ngModel)]="option1" onLabel="Nature" offLabel="Nature" />
                            <p-togglebutton [(ngModel)]="option2" onLabel="Art" offLabel="Art" />
                            <p-togglebutton [(ngModel)]="option3" onLabel="Music" offLabel="Music" />
                            <p-togglebutton [(ngModel)]="option4" onLabel="Design" offLabel="Design" />
                            <p-togglebutton [(ngModel)]="option5" onLabel="Photography" offLabel="Photography" />
                            <p-togglebutton [(ngModel)]="option6" onLabel="Movies" offLabel="Movies" />
                            <p-togglebutton [(ngModel)]="option7" onLabel="Sports" offLabel="Sports" />
                            <p-togglebutton [(ngModel)]="option8" onLabel="Gaming" offLabel="Gaming" />
                            <p-togglebutton [(ngModel)]="option9" onLabel="Traveling" offLabel="Traveling" />
                            <p-togglebutton [(ngModel)]="option10" onLabel="Dancing" offLabel="Dancing" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <p-button (onClick)="activateCallback(1)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                        <p-button (onClick)="activateCallback(3)" label="Next" icon="pi pi-arrow-right" iconPos="right" />
                    </div>
                </ng-template>
            </p-step-panel>

            <p-step-panel [value]="3">
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col items-center gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                        <div class="text-center">
                            <img alt="logo" src="/_ext/primefaces.org/cdn/primeng/images/stepper/content.svg" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <p-button (onClick)="activateCallback(2)" label="Back" severity="secondary" icon="pi pi-arrow-left" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-panels>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButton } from 'primeng/togglebutton';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'stepper-template-demo',
    templateUrl: './stepper-template-demo.html',
    standalone: true,
    imports: [
      StepperModule,
      ButtonModule,
      InputTextModule,
      ToggleButton,
      IconField,
      InputIcon,
      CommonModule
    ]
})
export class StepperTemplateDemo {
    activeStep: number = 1;

    name: string | undefined = null;

    email: string | undefined = null;

    password: string | undefined = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | undefined = false;
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["template-doc"]],decls:26,vars:8,consts:[["content",""],[1,"card","flex","justify-center"],[1,"basis-[40rem]",3,"valueChange","value"],[1,"flex","flex-row","flex-auto","gap-2",3,"value"],[3,"value"],["selector","stepper-template-demo",3,"code"],[1,"bg-transparent","border-0","inline-flex","flex-col","gap-2",3,"click"],[1,"rounded-full","border-2","w-12","h-12","inline-flex","items-center","justify-center",3,"ngClass"],[1,"pi","pi-user"],[1,"pi","pi-star"],[1,"pi","pi-id-card"],[1,"flex","flex-col","gap-2","mx-auto",2,"min-height","16rem","max-width","20rem"],[1,"text-center","mt-4","mb-4","text-xl","font-semibold"],[1,"field"],["pInputText","","id","input","type","text","placeholder","Name","fluid","",3,"ngModelChange","ngModel"],["pInputText","","id","email","type","email","placeholder","Email","fluid","",3,"ngModelChange","ngModel"],["placeholder","Password","fluid","",3,"ngModelChange","ngModel"],[1,"flex","pt-6","justify-end"],["label","Next","icon","pi pi-arrow-right","iconPos","right",3,"onClick"],[1,"flex","flex-col","gap-2","mx-auto",2,"min-height","16rem","max-width","24rem"],[1,"flex","flex-wrap","justify-center","gap-4"],["onLabel","Nature","offLabel","Nature",3,"ngModelChange","ngModel"],["onLabel","Art","offLabel","Art",3,"ngModelChange","ngModel"],["onLabel","Music","offLabel","Music",3,"ngModelChange","ngModel"],["onLabel","Design","offLabel","Design",3,"ngModelChange","ngModel"],["onLabel","Photography","offLabel","Photography",3,"ngModelChange","ngModel"],["onLabel","Movies","offLabel","Movies",3,"ngModelChange","ngModel"],["onLabel","Sports","offLabel","Sports",3,"ngModelChange","ngModel"],["onLabel","Gaming","offLabel","Gaming",3,"ngModelChange","ngModel"],["onLabel","Traveling","offLabel","Traveling",3,"ngModelChange","ngModel"],["onLabel","Dancing","offLabel","Dancing",3,"ngModelChange","ngModel"],[1,"flex","pt-6","justify-between"],["label","Back","severity","secondary","icon","pi pi-arrow-left",3,"onClick"],[1,"flex","flex-col","items-center","gap-2","mx-auto",2,"min-height","16rem","max-width","24rem"],[1,"text-center"],["alt","logo","src","/_ext/primefaces.org/cdn/primeng/images/stepper/content.svg"],[1,"flex","pt-6","justify-start"]],template:function(i,n){if(i&1){let s=g();a(0,"app-docsectiontext")(1,"p"),r(2,"Stepper provides various templating options to customize the default UI design."),o()(),a(3,"div",1)(4,"p-stepper",2),D("valueChange",function(ye){return c(s),M(n.activeStep,ye)||(n.activeStep=ye),d(ye)}),a(5,"p-step-list")(6,"p-step",3),v(7,nn,3,4,"ng-template",null,0,C),o(),a(9,"p-step",3),v(10,an,3,4,"ng-template",null,0,C),o(),a(12,"p-step",3),v(13,on,3,4,"ng-template",null,0,C),o()(),a(15,"p-step-panels")(16,"p-step-panel",4),v(17,rn,11,3,"ng-template",null,0,C),o(),a(19,"p-step-panel",4),v(20,ln,17,10,"ng-template",null,0,C),o(),a(22,"p-step-panel",4),v(23,pn,7,0,"ng-template",null,0,C),o()()()(),x(25,"app-code",5)}i&2&&(l(4),T("value",n.activeStep),l(2),p("value",1),l(3),p("value",2),l(3),p("value",3),l(4),p("value",1),l(3),p("value",2),l(3),p("value",3),l(3),p("code",n.code))},dependencies:[V,Ue,Ye,Ke,Je,Xe,F,H,W,w,B,z,L,S,Q,R,lt,rt,nt,tt,et,$e],encapsulation:2})}return e})();function sn(e,m){if(e&1){let t=g();a(0,"div",4)(1,"div",5),r(2,"Content I"),o()(),a(3,"div",6)(4,"p-button",7),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}function cn(e,m){if(e&1){let t=g();a(0,"div",4)(1,"div",5),r(2,"Content II"),o()(),a(3,"div",8)(4,"p-button",9),u("onClick",function(){let n=c(t).activateCallback;return d(n(1))}),o(),a(5,"p-button",7),u("onClick",function(){let n=c(t).activateCallback;return d(n(3))}),o()()}}function dn(e,m){if(e&1){let t=g();a(0,"div",4)(1,"div",5),r(2,"Content III"),o()(),a(3,"div",6)(4,"p-button",9),u("onClick",function(){let n=c(t).activateCallback;return d(n(2))}),o()()}}var Mt=(()=>{class e{code={basic:`<p-stepper [value]="1">
    <p-step-item [value]="1">
        <p-step>Header I</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content I
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Next" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="2">
        <p-step>Header II</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content II
                    </div>
                </div>
                <div class="flex py-6 gap-2">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(1)" />
                    <p-button label="Next" (onClick)="activateCallback(3)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>

    <p-step-item [value]="3">
        <p-step>Header III</p-step>
        <p-step-panel>
            <ng-template #content let-activateCallback="activateCallback">
                <div class="flex flex-col h-48">
                    <div
                        class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                    >
                        Content III
                    </div>
                </div>
                <div class="py-6">
                    <p-button label="Back" severity="secondary" (onClick)="activateCallback(2)" />
                </div>
            </ng-template>
        </p-step-panel>
    </p-step-item>
</p-stepper>`,html:`<div class="card">
    <p-stepper [value]="1">
        <p-step-item [value]="1">
            <p-step>Header I</p-step>
            <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content I
                        </div>
                    </div>
                    <div class="py-6">
                        <p-button label="Next" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-item>

        <p-step-item [value]="2">
            <p-step>Header II</p-step>
            <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content II
                        </div>
                    </div>
                    <div class="flex py-6 gap-2">
                        <p-button label="Back" severity="secondary" (onClick)="activateCallback(1)" />
                        <p-button label="Next" (onClick)="activateCallback(3)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-item>

        <p-step-item [value]="3">
            <p-step>Header III</p-step>
            <p-step-panel>
                <ng-template #content let-activateCallback="activateCallback">
                    <div class="flex flex-col h-48">
                        <div
                            class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
                        >
                            Content III
                        </div>
                    </div>
                    <div class="py-6">
                        <p-button label="Back" severity="secondary" (onClick)="activateCallback(2)" />
                    </div>
                </ng-template>
            </p-step-panel>
        </p-step-item>
    </p-stepper>
</div>`,typescript:`import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'stepper-vertical-demo',
    templateUrl: './stepper-vertical-demo.html',
    standalone: true,
    imports: [StepperModule, ButtonModule]
})
export class StepperVerticalDemo {
}`};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["vertical-doc"]],decls:33,vars:5,consts:[["content",""],[1,"card"],[3,"value"],["selector","stepper-vertical-demo",3,"code"],[1,"flex","flex-col","h-48"],[1,"border-2","border-dashed","border-surface-200","dark:border-surface-700","rounded","bg-surface-50","dark:bg-surface-950","flex-auto","flex","justify-center","items-center","font-medium"],[1,"py-6"],["label","Next",3,"onClick"],[1,"flex","py-6","gap-2"],["label","Back","severity","secondary",3,"onClick"]],template:function(i,n){i&1&&(a(0,"app-docsectiontext")(1,"p"),r(2,"Vertical layout requires "),a(3,"i"),r(4,"StepItem"),o(),r(5," as a wrapper of "),a(6,"i"),r(7,"Step"),o(),r(8," and "),a(9,"i"),r(10,"StepPanel"),o(),r(11," components."),o()(),a(12,"div",1)(13,"p-stepper",2)(14,"p-step-item",2)(15,"p-step"),r(16,"Header I"),o(),a(17,"p-step-panel"),v(18,sn,5,0,"ng-template",null,0,C),o()(),a(20,"p-step-item",2)(21,"p-step"),r(22,"Header II"),o(),a(23,"p-step-panel"),v(24,cn,6,0,"ng-template",null,0,C),o()(),a(26,"p-step-item",2)(27,"p-step"),r(28,"Header III"),o(),a(29,"p-step-panel"),v(30,dn,5,0,"ng-template",null,0,C),o()()()(),x(32,"app-code",3)),i&2&&(l(13),p("value",1),l(),p("value",1),l(6),p("value",2),l(6),p("value",3),l(6),p("code",n.code))},dependencies:[F,H,W,w,L,fe,S,Q,R],encapsulation:2})}return e})();var mn=()=>["Stepper"],Dt=(()=>{class e{docs=[{id:"import",label:"Import",component:yt},{id:"horizontal",label:"Horizontal",component:Ct},{id:"vertical",label:"Vertical",component:Mt},{id:"linear",label:"Linear",component:ht},{id:"steps-only",label:"Steps Only",component:wt},{id:"template",label:"Template",component:Tt},{id:"accessibility",label:"Accessibility",component:pt}];ptComponent=kt;static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Stepper Component","header","Stepper","description","The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.","themeDocs","stepper",3,"docs","apiDocs","ptDocs"]],template:function(i,n){i&1&&x(0,"app-doc",0),i&2&&p("docs",n.docs)("apiDocs",Qe(3,mn))("ptDocs",n.ptComponent)},dependencies:[at],encapsulation:2})}return e})();var ia=[{path:"",component:Dt}];export{ia as default};
