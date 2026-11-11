import{a as se,b as Ke}from"./chunk-JNUBCW5H.js";import{a as x,b as k}from"./chunk-SGEFCG26.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as Qe}from"./chunk-FKOOMXTU.js";import{a as D}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import{a as He,b as Ze}from"./chunk-T7S2JKIR.js";import{a as $e}from"./chunk-XCUGNKAG.js";import{a as M,b as je}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{c as re,d as Ae,h as w}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{L as Ue,ba as Be,ea as Ne,fa as Re,ga as qe,ha as ae}from"./chunk-MCW4FHXZ.js";import{Ea as Ee,Fa as ne,Ia as Ve,La as Pe,Ma as Fe,N as J,Na as $,O as P,P as X,ma as we,r as oe,za as u}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as Ie,n as Te,q as Le,r as Oe,w as F,y as me}from"./chunk-D2XKNHFS.js";import{$a as y,Eb as s,Fb as r,Gb as a,Gc as pe,Hb as c,Lb as K,Mb as z,Nb as ie,Ob as B,Qa as d,S as ge,Sb as N,T as ve,Ub as b,V as ye,Va as j,X as Y,Xb as W,Yb as de,Yc as G,Zb as R,Zc as ce,_b as q,aa as T,ba as L,ca as ee,fc as f,gb as h,gc as E,h as he,hb as Se,hc as n,ja as be,jc as xe,kb as De,lb as _e,mb as O,oa as te,rc as S,sc as m,tc as ke,uc as Me,vc as Ce,wb as Q}from"./chunk-O3KMSE75.js";import{a as le,b as fe}from"./chunk-GAL4ENT6.js";var ze=(()=>{class t{code={basic:'<p-speeddial aria-label="Options" />'};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["speed-dial-accessibility-doc"]],decls:111,vars:4,consts:[[3,"code","hideToggleCode","hideStackBlitz","hideCodeSandbox"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),a(),r(3,"p"),n(4," SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the "),r(5,"i"),n(6,"aria-labelledby"),a(),n(7," or "),r(8,"i"),n(9,"aria-label"),a(),n(10," props. Addititonally the button includes includes "),r(11,"i"),n(12,"aria-haspopup"),a(),n(13,", "),r(14,"i"),n(15,"aria-expanded"),a(),n(16," for states along with "),r(17,"i"),n(18,"aria-controls"),a(),n(19," to define the relation between the popup and the button. "),a(),r(20,"p"),n(21,"The popup overlay uses "),r(22,"i"),n(23,"menu"),a(),n(24," role on the list and each action item has a "),r(25,"i"),n(26,"menuitem"),a(),n(27," role with an "),r(28,"i"),n(29,"aria-label"),a(),n(30," as the menuitem label. The id of the menu refers to the "),r(31,"i"),n(32,"aria-controls"),a(),n(33," of the button."),a()(),c(34,"app-code",0),r(35,"h3"),n(36,"Menu Button Keyboard Support"),a(),r(37,"div",1)(38,"table",2)(39,"thead")(40,"tr")(41,"th"),n(42,"Key"),a(),r(43,"th"),n(44,"Function"),a()()(),r(45,"tbody")(46,"tr")(47,"td")(48,"i"),n(49,"enter"),a()(),r(50,"td"),n(51,"Toggles the visibility of the menu."),a()(),r(52,"tr")(53,"td")(54,"i"),n(55,"space"),a()(),r(56,"td"),n(57,"Toggles the visibility of the menu."),a()(),r(58,"tr")(59,"td")(60,"i"),n(61,"down arrow"),a()(),r(62,"td"),n(63,"Opens the menu and moves focus to the first item."),a()(),r(64,"tr")(65,"td")(66,"i"),n(67,"up arrow"),a()(),r(68,"td"),n(69,"Opens the menu and moves focus to the last item."),a()()()()(),r(70,"h3"),n(71,"Menu Keyboard Support"),a(),r(72,"div",1)(73,"table",2)(74,"thead")(75,"tr")(76,"th"),n(77,"Key"),a(),r(78,"th"),n(79,"Function"),a()()(),r(80,"tbody")(81,"tr")(82,"td")(83,"i"),n(84,"enter"),a()(),r(85,"td"),n(86,"Activates the menuitem, closes the menu and sets focus on the menu button."),a()(),r(87,"tr")(88,"td")(89,"i"),n(90,"escape"),a()(),r(91,"td"),n(92,"Closes the menu and sets focus on the menu button."),a()(),r(93,"tr")(94,"td")(95,"i"),n(96,"arrow keys"),a()(),r(97,"td"),n(98,"Navigates between the menu items."),a()(),r(99,"tr")(100,"td")(101,"i"),n(102,"home"),a()(),r(103,"td"),n(104,"Moves focus to the first item."),a()(),r(105,"tr")(106,"td")(107,"i"),n(108,"end"),a()(),r(109,"td"),n(110,"Moves focus to the last item."),a()()()()()),o&2&&(d(34),s("code",i.code)("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0))},dependencies:[M,D],encapsulation:2})}return t})();var We=`
    .p-speeddial {
        position: static;
        display: flex;
        gap: dt('speeddial.gap');
    }

    .p-speeddial-button {
        z-index: 1;
    }

    .p-speeddial-button.p-speeddial-rotate {
        transition:
            transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            background dt('speeddial.transition.duration'),
            color dt('speeddial.transition.duration'),
            border-color dt('speeddial.transition.duration'),
            box-shadow dt('speeddial.transition.duration'),
            outline-color dt('speeddial.transition.duration');
        will-change: transform;
    }

    .p-speeddial-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: inset-block-start 0s linear dt('speeddial.transition.duration');
        pointer-events: none;
        outline: 0 none;
        z-index: 2;
        gap: dt('speeddial.gap');
    }

    .p-speeddial-item {
        transform: scale(0);
        opacity: 0;
        transition:
            transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            opacity 0.8s;
        will-change: transform;
    }

    .p-speeddial-circle .p-speeddial-item,
    .p-speeddial-semi-circle .p-speeddial-item,
    .p-speeddial-quarter-circle .p-speeddial-item {
        position: absolute;
    }

    .p-speeddial-mask {
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: dt('mask.background');
        border-radius: 6px;
        transition: opacity 150ms;
    }

    .p-speeddial-mask-visible {
        pointer-events: none;
        opacity: 1;
        transition: opacity 150ms;
    }

    .p-speeddial-open .p-speeddial-list {
        pointer-events: auto;
    }

    .p-speeddial-open .p-speeddial-item {
        transform: scale(1);
        opacity: 1;
    }

    .p-speeddial-open .p-speeddial-rotate {
        transform: rotate(45deg);
    }
`;var lt={root:({instance:t})=>({alignItems:(t.direction==="up"||t.direction==="down")&&"center",justifyContent:(t.direction==="left"||t.direction==="right")&&"center",flexDirection:t.direction==="up"?"column-reverse":t.direction==="down"?"column":t.direction==="left"?"row-reverse":t.direction==="right"?"row":null}),list:({instance:t})=>({flexDirection:t.direction==="up"?"column-reverse":t.direction==="down"?"column":t.direction==="left"?"row-reverse":t.direction==="right"?"row":null})},dt={root:({instance:t})=>[`p-speeddial p-component p-speeddial-${t.type}`,{[`p-speeddial-direction-${t.direction}`]:t.type!=="circle","p-speeddial-open":t.visible,"p-disabled":t.disabled}],pcButton:({instance:t})=>["p-button-icon-only p-speeddial-button p-button-rounded",{"p-speeddial-rotate":t.rotateAnimation&&!t.hideIcon}],list:"p-speeddial-list",item:({instance:t,item:g,i:e})=>["p-speeddial-item",{"p-hidden":g.visible===!1,"p-focus":t.focusedOptionId==t.id+"_"+e}],action:"p-speeddial-action",actionIcon:"p-speeddial-action-icon",mask:({instance:t})=>["p-speeddial-mask",{"p-speeddial-mask-visible":t.visible}]},ue=(()=>{class t extends Ve{name="speeddial";style=We;classes=dt;inlineStyles=lt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=te(t)))(i||t)}})();static \u0275prov=ge({token:t,factory:t.\u0275fac})}return t})();var ct=["button"],mt=["item"],ut=["icon"],ft=["container"],ht=["list"],gt=t=>({toggleCallback:t}),vt=(t,g)=>({item:t,i:g}),yt=(t,g,e)=>({$implicit:t,index:g,toggleCallback:e});function bt(t,g){if(t&1&&(ee(),c(0,"svg",10)),t&2){let e=b(2);s("pt",e.ptm("pcButton").icon)}}function St(t,g){t&1&&ie(0)}function Dt(t,g){if(t&1){let e=B();K(0),r(1,"button",7),N("click",function(i){T(e);let l=b();return L(l.onButtonClick(i))})("keydown",function(i){T(e);let l=b();return L(l.onTogglerKeydown(i))}),O(2,bt,1,1,"svg",8)(3,St,1,0,"ng-container",9),a(),z()}if(t&2){let e=b();d(),f(e.buttonStyle),E(e.cn(e.cx("pcButton"),e.buttonClassName)),s("icon",e.buttonIconClass)("disabled",e.disabled)("buttonProps",e.buttonProps)("pt",e.ptm("pcButton")),Q("aria-expanded",e.visible)("aria-haspopup",!0)("aria-controls",e.id+"_list")("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy),d(),s("ngIf",!e.buttonIconClass&&!e.iconTemplate&&!e._iconTemplate),d(),s("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function _t(t,g){t&1&&ie(0)}function xt(t,g){if(t&1&&(K(0),O(1,_t,1,0,"ng-container",11),z()),t&2){let e=b();d(),s("ngTemplateOutlet",e.buttonTemplate||e._buttonTemplate)("ngTemplateOutletContext",ke(2,gt,e.onButtonClick.bind(e)))}}function kt(t,g){t&1&&ie(0)}function Mt(t,g){if(t&1&&(K(0),O(1,kt,1,0,"ng-container",11),z()),t&2){let e=b(),o=e.$implicit,i=e.index,l=b();d(),s("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",Ce(2,yt,o,i,l.onItemClick.bind(l)))}}function Ct(t,g){if(t&1&&c(0,"span",15),t&2){let e=b(2),o=e.$implicit,i=e.index,l=b();E(o.icon),s("pt",l.getPTOptions(l.id+"_"+i,"actionIcon"))}}function wt(t,g){if(t&1){let e=B();K(0),r(1,"button",13),N("click",function(i){T(e);let l=b().$implicit,p=b();return L(p.onItemClick(i,l))})("keydown.enter",function(i){T(e);let l=b().$implicit,p=b();return L(p.onItemClick(i,l))}),O(2,Ct,1,3,"span",14),a(),z()}if(t&2){let e=b(),o=e.$implicit,i=e.index,l=b();d(),E(l.cx("pcAction")),s("rounded",!0)("icon",o.icon)("disabled",o==null?null:o.disabled)("pt",l.getPTOptions(l.id+"_"+i,"pcAction")),Q("aria-label",o.label)("tabindex",o.disabled||!l.visible?null:o.tabindex?o.tabindex:"0"),d(),s("ngIf",o.icon)}}function It(t,g){if(t&1&&(r(0,"li",12),O(1,Mt,2,6,"ng-container",3)(2,wt,3,9,"ng-container",3),a()),t&2){let e=g.$implicit,o=g.index,i=b();E(i.cx("item",Me(10,vt,e,o))),s("pBind",i.getPTOptions(i.id+"_"+o,"item"))("ngStyle",i.getItemStyle(o))("tooltipOptions",e.tooltipOptions||i.getTooltipOptions(e))("id",i.id+"_"+o),Q("aria-controls",i.id+"_item")("data-p-active",i.isItemActive(i.id+"_"+o)),d(),s("ngIf",i.itemTemplate||i._itemTemplate),d(),s("ngIf",!i.itemTemplate&&!i._itemTemplate)}}function Tt(t,g){if(t&1&&c(0,"div",2),t&2){let e=b();E(e.cn(e.cx("mask"),e.maskClassName)),s("pBind",e.ptm("mask"))("ngStyle",e.maskStyle)}}var Ge=new ye("SPEED_DIAL_INSTANCE"),_=(()=>{class t extends Fe{$pcSpeedDial=Y(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=Y($,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}id;model=null;get visible(){return this._visible}set visible(e){this._visible=e,this._visible?this.bindDocumentClickListener():this.unbindDocumentClickListener()}style;className;direction="up";transitionDelay=30;type="linear";radius=0;mask=!1;disabled=!1;hideOnClickOutside=!0;buttonStyle;buttonClassName;maskStyle;maskClassName;showIcon;hideIcon;rotateAnimation=!0;ariaLabel;ariaLabelledBy;tooltipOptions;buttonProps;onVisibleChange=new j;visibleChange=new j;onClick=new j;onShow=new j;onHide=new j;container;list;buttonTemplate;itemTemplate;iconTemplate;templates;_buttonTemplate;_itemTemplate;_iconTemplate;isItemClicked=!1;_visible=!1;documentClickListener;focusedOptionIndex=be(null);focused=!1;_componentStyle=Y(ue);get focusedOptionId(){return this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null}getTooltipOptions(e){return fe(le({},this.tooltipOptions),{tooltipLabel:e.label,disabled:!this.tooltipOptions})}getPTOptions(e,o){return this.ptm(o,{context:{active:this.isItemActive(e),hidden:!this.visible}})}isItemActive(e){return e===this.focusedOptionId}onInit(){this.id=this.id||we("pn_id_")}onAfterViewInit(){if(me(this.platformId)&&this.type!=="linear"){let e=P(this.container?.nativeElement,".p-speeddial-button"),o=P(this.list?.nativeElement,".p-speeddial-item");if(e&&o){let i=Math.abs(e.offsetWidth-o.offsetWidth),l=Math.abs(e.offsetHeight-o.offsetHeight);this.list?.nativeElement.style.setProperty("--item-diff-x",`${i/2}px`),this.list?.nativeElement.style.setProperty("--item-diff-y",`${l/2}px`)}}}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"button":this._buttonTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break}})}show(){this.onVisibleChange.emit(!0),this.visibleChange.emit(!0),this._visible=!0,this.onShow.emit(),this.bindDocumentClickListener(),this.cd.markForCheck()}hide(){this.onVisibleChange.emit(!1),this.visibleChange.emit(!1),this._visible=!1,this.onHide.emit(),this.unbindDocumentClickListener(),this.cd.markForCheck()}onButtonClick(e){this.visible?this.hide():this.show(),this.onClick.emit(e),this.isItemClicked=!0}onItemClick(e,o){o.command&&o.command({originalEvent:e,item:o}),this.hide(),this.isItemClicked=!0}onKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"ArrowRight":this.onArrowRight(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;default:break}}onFocus(e){this.focused=!0}onBlur(e){this.focused=!1,he.schedule(()=>this.focusedOptionIndex.set(-1))}onArrowUp(e){this.direction==="up"?this.navigateNextItem(e):this.direction==="down"?this.navigatePrevItem(e):this.navigateNextItem(e)}onArrowDown(e){this.direction==="up"?this.navigatePrevItem(e):this.direction==="down"?this.navigateNextItem(e):this.navigatePrevItem(e)}onArrowLeft(e){let o=["left","up-right","down-left"],i=["right","up-left","down-right"];o.includes(this.direction||"")?this.navigateNextItem(e):i.includes(this.direction||"")?this.navigatePrevItem(e):this.navigatePrevItem(e)}onArrowRight(e){let o=["left","up-right","down-left"],i=["right","up-left","down-right"];o.includes(this.direction||"")?this.navigatePrevItem(e):i.includes(this.direction||"")?this.navigateNextItem(e):this.navigateNextItem(e)}onEndKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigatePrevItem(e)}onHomeKey(e){e.preventDefault(),this.focusedOptionIndex.set(-1),this.navigateNextItem(e)}onEnterKey(e){let i=[...J(this.container?.nativeElement,'[data-pc-section="item"]')].findIndex(p=>p.id===this.focusedOptionIndex());i!==-1&&this.model&&this.model[i]&&this.onItemClick(e,this.model[i]),this.onBlur(e);let l=P(this.container?.nativeElement,"button");l&&X(l)}onEscapeKey(e){this.hide();let o=P(this.container?.nativeElement,"button");o&&X(o)}onTogglerKeydown(e){switch(e.code){case"ArrowDown":case"ArrowLeft":this.onTogglerArrowDown(e);break;case"ArrowUp":case"ArrowRight":this.onTogglerArrowUp(e);break;case"Escape":this.onEscapeKey(e);break;default:break}}onTogglerArrowUp(e){this.focused=!0,X(this.list?.nativeElement),this.show(),this.navigatePrevItem(e),e.preventDefault()}onTogglerArrowDown(e){this.focused=!0,X(this.list?.nativeElement),this.show(),this.navigateNextItem(e),e.preventDefault()}navigateNextItem(e){let o=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(o),e.preventDefault()}navigatePrevItem(e){let o=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(o),e.preventDefault()}findPrevOptionIndex(e){let i=[...J(this.container?.nativeElement,'[data-pc-section="item"]')].filter(v=>!oe(P(v,"a"),"p-disabled")),l=e===-1?i[i.length-1].id:e,p=i.findIndex(v=>v.getAttribute("id")===l);return p=e===-1?i.length-1:p-1,p}findNextOptionIndex(e){let i=[...J(this.container?.nativeElement,'[data-pc-section="item"]')].filter(v=>!oe(P(v,"a"),"p-disabled")),l=e===-1?i[0].id:e,p=i.findIndex(v=>v.getAttribute("id")===l);return p=e===-1?0:p+1,p}changeFocusedOptionIndex(e){let i=[...J(this.container?.nativeElement,'[data-pc-section="item"]')].filter(l=>!oe(P(l,"a"),"p-disabled"));i[e]&&this.focusedOptionIndex.set(i[e].getAttribute("id"))}calculatePointStyle(e){let o=this.type;if(o!=="linear"){let i=this.model.length,l=this.radius||i*20;if(o==="circle"){let p=2*Math.PI/i;return{left:`calc(${l*Math.cos(p*e)}px + var(--item-diff-x, 0px))`,top:`calc(${l*Math.sin(p*e)}px + var(--item-diff-y, 0px))`}}else if(o==="semi-circle"){let p=this.direction,v=Math.PI/(i-1),A=`calc(${l*Math.cos(v*e)}px + var(--item-diff-x, 0px))`,V=`calc(${l*Math.sin(v*e)}px + var(--item-diff-y, 0px))`;if(p==="up")return{left:A,bottom:V};if(p==="down")return{left:A,top:V};if(p==="left")return{right:V,top:A};if(p==="right")return{left:V,top:A}}else if(o==="quarter-circle"){let p=this.direction,v=Math.PI/(2*(i-1)),A=`calc(${l*Math.cos(v*e)}px + var(--item-diff-x, 0px))`,V=`calc(${l*Math.sin(v*e)}px + var(--item-diff-y, 0px))`;if(p==="up-left")return{right:A,bottom:V};if(p==="up-right")return{left:A,bottom:V};if(p==="down-left")return{right:V,top:A};if(p==="down-right")return{left:V,top:A}}}return{}}calculateTransitionDelay(e){let o=this.model.length;return(this.visible?e:o-e-1)*this.transitionDelay}get buttonIconClass(){return!this.visible&&this.showIcon?this.showIcon:this.visible&&this.hideIcon?this.hideIcon:this.showIcon}getItemStyle(e){let o=this.calculateTransitionDelay(e),i=this.calculatePointStyle(e);return le({transitionDelay:`${o}ms`},i)}isClickableRouterLink(e){return e.routerLink&&!this.disabled&&!e.disabled}isOutsideClicked(e){return this.container&&!(this.container.nativeElement.isSameNode(e.target)||this.container.nativeElement.contains(e.target)||this.isItemClicked)}bindDocumentClickListener(){me(this.platformId)&&!this.documentClickListener&&this.hideOnClickOutside&&(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{this.visible&&this.isOutsideClicked(e)&&this.hide(),this.isItemClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onDestroy(){this.unbindDocumentClickListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=te(t)))(i||t)}})();static \u0275cmp=h({type:t,selectors:[["p-speeddial"],["p-speedDial"],["p-speed-dial"]],contentQueries:function(o,i,l){if(o&1&&(W(l,ct,4),W(l,mt,4),W(l,ut,4),W(l,Ee,4)),o&2){let p;R(p=q())&&(i.buttonTemplate=p.first),R(p=q())&&(i.itemTemplate=p.first),R(p=q())&&(i.iconTemplate=p.first),R(p=q())&&(i.templates=p)}},viewQuery:function(o,i){if(o&1&&(de(ft,5),de(ht,5)),o&2){let l;R(l=q())&&(i.container=l.first),R(l=q())&&(i.list=l.first)}},inputs:{id:"id",model:"model",visible:"visible",style:"style",className:"className",direction:"direction",transitionDelay:[2,"transitionDelay","transitionDelay",ce],type:"type",radius:[2,"radius","radius",ce],mask:[2,"mask","mask",G],disabled:[2,"disabled","disabled",G],hideOnClickOutside:[2,"hideOnClickOutside","hideOnClickOutside",G],buttonStyle:"buttonStyle",buttonClassName:"buttonClassName",maskStyle:"maskStyle",maskClassName:"maskClassName",showIcon:"showIcon",hideIcon:"hideIcon",rotateAnimation:[2,"rotateAnimation","rotateAnimation",G],ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tooltipOptions:"tooltipOptions",buttonProps:"buttonProps"},outputs:{onVisibleChange:"onVisibleChange",visibleChange:"visibleChange",onClick:"onClick",onShow:"onShow",onHide:"onHide"},features:[S([ue,{provide:Ge,useExisting:t},{provide:Pe,useExisting:t}]),_e([$]),De],decls:8,vars:17,consts:[["container",""],["list",""],[3,"pBind","ngStyle"],[4,"ngIf"],["role","menu",3,"focus","focusout","keydown","pBind","id","tabindex","ngStyle"],["pTooltip","","role","menuitem",3,"pBind","ngStyle","class","tooltipOptions","id",4,"ngFor","ngForOf"],[3,"pBind","class","ngStyle",4,"ngIf"],["type","button","pButton","","pRipple","",3,"click","keydown","icon","disabled","buttonProps","pt"],["data-p-icon","plus","pButtonIcon","",3,"pt",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","plus","pButtonIcon","",3,"pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pTooltip","","role","menuitem",3,"pBind","ngStyle","tooltipOptions","id"],["type","button","pButton","","pRipple","","severity","secondary","size","small","role","menuitem",3,"click","keydown.enter","rounded","icon","disabled","pt"],["pButtonIcon","",3,"pt","class",4,"ngIf"],["pButtonIcon","",3,"pt"]],template:function(o,i){if(o&1){let l=B();r(0,"div",2,0),O(2,Dt,4,15,"ng-container",3)(3,xt,2,4,"ng-container",3),r(4,"ul",4,1),N("focus",function(v){return T(l),L(i.onFocus(v))})("focusout",function(v){return T(l),L(i.onBlur(v))})("keydown",function(v){return T(l),L(i.onKeyDown(v))}),O(6,It,3,13,"li",5),a()(),O(7,Tt,1,4,"div",6)}o&2&&(f(i.style),E(i.cn(i.cx("root"),i.className)),s("pBind",i.ptm("root"))("ngStyle",i.sx("root")),d(2),s("ngIf",!i.buttonTemplate&&!i._buttonTemplate),d(),s("ngIf",i.buttonTemplate||i._buttonTemplate),d(),E(i.cx("list")),s("pBind",i.ptm("list"))("id",i.id+"_list")("tabindex",-1)("ngStyle",i.sx("list")),Q("aria-activedescendant",i.focused?i.focusedOptionId:void 0),d(2),s("ngForOf",i.model),d(),s("ngIf",i.mask&&i.visible))},dependencies:[F,Ie,Te,Oe,Le,ae,Re,Ne,Be,Ze,He,$,w,Ue,ne],encapsulation:2,changeDetection:0})}return t})(),C=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=Se({type:t});static \u0275inj=ve({imports:[_,ne,ne]})}return t})();var Lt=()=>({position:"absolute"}),Ot=()=>({severity:"warn",rounded:!0}),Je=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"https://angular.dev"}]}code={basic:`<p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />`,html:`<div class="card">
    <div style="position:relative; height: 500px;" class="flex items-center justify-center">
        <p-toast />
        <p-speeddial [model]="items" [radius]="80" type="circle" [style]="{ position: 'absolute' }" [buttonProps]="{ severity: 'warn', rounded: true }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-circle-demo',
    templateUrl: './speed-dial-circle-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(y(u))};static \u0275cmp=h({type:t,selectors:[["circle-doc"]],features:[S([u])],decls:17,vars:8,consts:[[1,"card"],[1,"flex","items-center","justify-center",2,"position","relative","height","500px"],["type","circle",3,"model","radius","buttonProps"],["selector","speed-dial-circle-demo",3,"code"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"p"),n(2,"Items can be displayed around the button when "),r(3,"i"),n(4,"type"),a(),n(5," is set to "),r(6,"i"),n(7,"circle"),a(),n(8,". Additional "),r(9,"i"),n(10,"radius"),a(),n(11," property defines the radius of the circle."),a()(),r(12,"div",0)(13,"div",1),c(14,"p-toast")(15,"p-speeddial",2),a()(),c(16,"app-code",3)),o&2&&(d(15),f(m(6,Lt)),s("model",i.items)("radius",80)("buttonProps",m(7,Ot)),d(),s("code",i.code))},dependencies:[M,D,C,_,k,x,w],encapsulation:2})}return t})();var Xe=(()=>{class t{code={typescript:"import { SpeedDialModule } from 'primeng/speeddial';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["speed-dial-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,i){o&1&&c(0,"app-code",0),o&2&&s("code",i.code)("hideToggleCode",!0)},dependencies:[D],encapsulation:2})}return t})();var Et=()=>({position:"absolute",left:"calc(50% - 2rem)",bottom:0}),At=()=>({position:"absolute",left:"calc(50% - 2rem)",top:0}),Vt=()=>({position:"absolute",top:"calc(50% - 2rem)",right:0}),Pt=()=>({position:"absolute",top:"calc(50% - 2rem)",left:0}),Ye=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"https://angular.dev"}]}code={basic:`<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
<p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />`,html:`<div class="card">
    <div style="height: 500px; position: relative;">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
        <p-speeddial [model]="items" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
        <p-speeddial [model]="items" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
        <p-speeddial [model]="items" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-linear-demo',
    templateUrl: './speed-dial-linear-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialLinearDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target:'_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(y(u))};static \u0275cmp=h({type:t,selectors:[["linear-doc"]],features:[S([u])],decls:17,vars:17,consts:[[1,"card"],[2,"height","500px","position","relative"],["direction","up",3,"model"],["direction","down",3,"model"],["direction","left",3,"model"],["direction","right",3,"model"],["selector","speed-dial-linear-demo",3,"code"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"p"),n(2,"SpeedDial items are defined with the "),r(3,"i"),n(4,"model"),a(),n(5," property based on MenuModel API. Default orientation of the items is linear and "),r(6,"i"),n(7,"direction"),a(),n(8," property is used to define the position of the items related to the button."),a()(),r(9,"div",0)(10,"div",1),c(11,"p-toast")(12,"p-speeddial",2)(13,"p-speeddial",3)(14,"p-speeddial",4)(15,"p-speeddial",5),a()(),c(16,"app-code",6)),o&2&&(d(12),f(m(13,Et)),s("model",i.items),d(),f(m(14,At)),s("model",i.items),d(),f(m(15,Vt)),s("model",i.items),d(),f(m(16,Pt)),s("model",i.items),d(),s("code",i.code))},dependencies:[M,D,C,_,k,x,w],encapsulation:2})}return t})();var Ft=()=>({position:"relative",height:"350px"}),Ut=()=>({position:"absolute",right:"1rem",bottom:"1rem"}),et=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"https://angular.dev"}]}code={basic:`<p-speeddial [model]="items" direction="up" mask [style]="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />`,html:`<div class="card p-4">
    <div [style]="{ position: 'relative', height: '350px' }">
        <p-toast />
        <p-speeddial [model]="items" direction="up" mask [style]="{ position: 'absolute', right: '1rem', bottom: '1rem' }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-mask-demo',
    templateUrl: './speed-dial-mask-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialMaskDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(y(u))};static \u0275cmp=h({type:t,selectors:[["mask-doc"]],features:[S([u])],decls:11,vars:8,consts:[[1,"card","p-4"],["direction","up","mask","",3,"model"],["selector","speed-dial-mask-demo",3,"code"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"p"),n(2,"Adding "),r(3,"i"),n(4,"mask"),a(),n(5," property displays a modal layer behind the popup items."),a()(),r(6,"div",0)(7,"div"),c(8,"p-toast")(9,"p-speeddial",1),a()(),c(10,"app-code",2)),o&2&&(d(7),f(m(6,Ft)),d(2),f(m(7,Ut)),s("model",i.items),d(),s("code",i.code))},dependencies:[M,D,C,_,k,x,w],encapsulation:2})}return t})();var Bt=()=>({position:"absolute",left:"calc(50% - 2rem)",bottom:0}),tt=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}}]}docs=[{data:se("SpeedDial"),key:"SpeedDial"}];static \u0275fac=function(o){return new(o||t)(y(u))};static \u0275cmp=h({type:t,selectors:[["speeddial-pt-viewer"]],features:[S([u])],decls:4,vars:5,consts:[[3,"docs"],[2,"height","500px","position","relative"],["direction","up",3,"model"]],template:function(o,i){o&1&&(r(0,"app-docptviewer",0)(1,"div",1),c(2,"p-toast")(3,"p-speeddial",2),a()()),o&2&&(s("docs",i.docs),d(3),f(m(4,Bt)),s("model",i.items))},dependencies:[F,Ke,C,_,k,x],encapsulation:2})}return t})();var it=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:tt},{id:"pt.doc.speeddial",label:"SpeedDial PT Options",component:je,data:se("SpeedDial")}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["speeddial-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,i){o&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),n(3,"SpeedDial Pass Through"),a()(),c(4,"app-docsection",2),a()),o&2&&(d(4),s("docs",i.docs))},dependencies:[F,$e],encapsulation:2})}return t})();var Nt=()=>({position:"absolute",right:0,bottom:0}),Rt=()=>({position:"absolute",left:0,bottom:0}),qt=()=>({position:"absolute",right:0,top:0}),Ht=()=>({position:"absolute",left:0,top:0}),ot=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"https://angular.dev"}]}code={basic:`<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-left" [style]="{ position: 'absolute', right: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-right" [style]="{ position: 'absolute', left: 0, bottom: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-left" [style]="{ position: 'absolute', right: 0, top: 0 }" />
<p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-right" [style]="{ position: 'absolute', left: 0, top: 0 }" />`,html:`<div class="card">
    <div style="position: relative; height: 500px">
        <p-toast />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-left" [style]="{ position: 'absolute', right: 0, bottom: 0 }" />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="up-right" [style]="{ position: 'absolute', left: 0, bottom: 0 }" />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-left" [style]="{ position: 'absolute', right: 0, top: 0 }" />
        <p-speeddial [model]="items" [radius]="120" type="quarter-circle" direction="down-right" [style]="{ position: 'absolute', left: 0, top: 0 }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-quarter-circle-demo',
    templateUrl: './speed-dial-quarter-circle-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialQuarterCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}`};static \u0275fac=function(o){return new(o||t)(y(u))};static \u0275cmp=h({type:t,selectors:[["quarter-circle-doc"]],features:[S([u])],decls:17,vars:21,consts:[[1,"card"],[2,"position","relative","height","500px"],["type","quarter-circle","direction","up-left",3,"model","radius"],["type","quarter-circle","direction","up-right",3,"model","radius"],["type","quarter-circle","direction","down-left",3,"model","radius"],["type","quarter-circle","direction","down-right",3,"model","radius"],["selector","speed-dial-quarter-circle-demo",3,"code"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"p"),n(2,"When "),r(3,"i"),n(4,"type"),a(),n(5," is defined as "),r(6,"i"),n(7,"quarter-circle"),a(),n(8,", items are displayed in a half-circle around the button."),a()(),r(9,"div",0)(10,"div",1),c(11,"p-toast")(12,"p-speeddial",2)(13,"p-speeddial",3)(14,"p-speeddial",4)(15,"p-speeddial",5),a()(),c(16,"app-code",6)),o&2&&(d(12),f(m(17,Nt)),s("model",i.items)("radius",120),d(),f(m(18,Rt)),s("model",i.items)("radius",120),d(),f(m(19,qt)),s("model",i.items)("radius",120),d(),f(m(20,Ht)),s("model",i.items)("radius",120),d(),s("code",i.code))},dependencies:[M,D,C,_,k,x,w],encapsulation:2})}return t})();var Zt=()=>({position:"absolute",left:"calc(50% - 2rem)",top:0}),jt=()=>({position:"absolute",top:"calc(50% - 2rem)",left:0}),$t=()=>({position:"absolute",top:"calc(50% - 2rem)",right:0}),Qt=()=>({position:"absolute",left:"calc(50% - 2rem)",bottom:0}),nt=(()=>{class t{messageService;items;constructor(e){this.messageService=e}ngOnInit(){this.items=[{icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{icon:"pi pi-upload",routerLink:["/fileupload"]},{icon:"pi pi-external-link",target:"_blank",url:"https://angular.dev"}]}code={basic:`<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
<p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />`,html:`<div class="card">
    <div style="position: relative; height: 500px">
        <p-toast />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="down" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }" />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="right" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', left: 0 }" />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="left" [style]="{ position: 'absolute', top: 'calc(50% - 2rem)', right: 0 }" />
        <p-speeddial [model]="items" [radius]="80" type="semi-circle" direction="up" [style]="{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'speed-dial-semi-circle-demo',
    templateUrl: './speed-dial-semi-circle-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialSemiCircleDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.items = [
            {
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                icon: 'pi pi-upload',
                routerLink: ['/fileupload']
            },
            {
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev'
            }
        ];
    }
}`,scss:`:host ::ng-deep {
    .speeddial-linear-demo {
        .p-speeddial-direction-up {
            left: calc(50% - 2rem);
            bottom: 0;
        }

        .p-speeddial-direction-down {
            left: calc(50% - 2rem);
            top: 0;
        }

        .p-speeddial-direction-left {
            right: 0;
            top: calc(50% - 2rem);
        }

        .p-speeddial-direction-right {
            left: 0;
            top: calc(50% - 2rem);
        }
    }
}`};static \u0275fac=function(o){return new(o||t)(y(u))};static \u0275cmp=h({type:t,selectors:[["semi-circle-doc"]],features:[S([u])],decls:17,vars:21,consts:[[1,"card"],[2,"position","relative","height","500px"],["type","semi-circle","direction","down",3,"model","radius"],["type","semi-circle","direction","right",3,"model","radius"],["type","semi-circle","direction","left",3,"model","radius"],["type","semi-circle","direction","up",3,"model","radius"],["selector","speed-dial-semi-circle-demo",3,"code"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"p"),n(2,"When "),r(3,"i"),n(4,"type"),a(),n(5," is defined as "),r(6,"i"),n(7,"semi-circle"),a(),n(8,", items are displayed in a half-circle around the button."),a()(),r(9,"div",0)(10,"div",1),c(11,"p-toast")(12,"p-speeddial",2)(13,"p-speeddial",3)(14,"p-speeddial",4)(15,"p-speeddial",5),a()(),c(16,"app-code",6)),o&2&&(d(12),f(m(17,Zt)),s("model",i.items)("radius",80),d(),f(m(18,jt)),s("model",i.items)("radius",80),d(),f(m(19,$t)),s("model",i.items)("radius",80),d(),f(m(20,Qt)),s("model",i.items)("radius",80),d(),s("code",i.code))},dependencies:[M,D,C,_,k,x,w],encapsulation:2})}return t})();function zt(t,g){if(t&1){let e=B();r(0,"p-button",6),N("click",function(i){let l=T(e).toggleCallback;return L(l(i))}),ee(),r(1,"svg",7),c(2,"path",8),r(3,"mask",9),c(4,"path",10),a(),r(5,"g",11),c(6,"path",12),a(),c(7,"path",13)(8,"path",14)(9,"path",15)(10,"path",16)(11,"path",17)(12,"path",18)(13,"path",19)(14,"path",20)(15,"path",21)(16,"path",22),a()()}}function Wt(t,g){if(t&1){let e=B();r(0,"div",23),N("click",function(i){let l=T(e),p=l.$implicit,v=l.toggleCallback;return L(v(i,p))}),c(1,"span"),r(2,"span"),n(3),a()()}if(t&2){let e=g.$implicit;d(),E(e.icon),d(2),xe(" ",e.label," ")}}var rt=(()=>{class t{messageService;router;items;code={basic:`<p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
    <ng-template #button let-toggleCallback="toggleCallback">
        <p-button outlined styleClass="border" (click)="toggleCallback($event)">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="..." fill="var(--p-primary-color)" />
            </svg>
        </p-button>
    </ng-template>
    <ng-template #item let-item let-toggleCallback="toggleCallback">
        <div
            class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
            (click)="toggleCallback($event, item)"
        >
            <span [class]="item.icon"></span>
            <span>
                {{ item.label }}
            </span>
        </div>
    </ng-template>
</p-speeddial>`,html:`<div class="card">
    <div class="flex items-end justify-center" style="position: 'relative'; height: '400px'">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [transitionDelay]="80" style="position: 'absolute'">
            <ng-template #button let-toggleCallback="toggleCallback">
                <p-button outlined styleClass="border" (click)="toggleCallback($event)">
                    <svg
                        width="31"
                        height="33"
                        viewBox="0 0 31 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                            fill="var(--p-primary-color)"
                        />
                        <mask
                            id="mask0_1_52"
                            style="mask-type:luminance"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="31"
                            height="33"
                        >
                            <path
                                d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                                fill="var(--ground-background)"
                            />
                        </mask>
                        <g mask="url(#mask0_1_52)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                                fill="var(--p-primary-color)"
                            />
                        </g>
                        <path
                            d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                            fill="var(--ground-background)"
                        />
                        <path
                            d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                            fill="var(--ground-background)"
                        />
                    </svg>
                </p-button>
            </ng-template>
            <ng-template #item let-item let-toggleCallback="toggleCallback">
                <div
                    class="flex flex-col items-center justify-between gap-2 p-2 border rounded border-surface-200 dark:border-surface-700 w-20 cursor-pointer"
                    (click)="toggleCallback($event, item)"
                >
                    <span [class]="item.icon"></span>
                    <span>
                        {{ item.label }}
                    </span>
                </div>
            </ng-template>
        </p-speeddial>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
    selector: 'speed-dial-template-demo',
    templateUrl: './speed-dial-template-demo.html',
    standalone: true,
    imports: [SpeedDialModule, ToastModule, ButtonModule],
    providers: [MessageService]
})
export class SpeedDialTemplateDemo implements OnInit {
    items: MenuItem[] | undefined;

    constructor(
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                },
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                },
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                },
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                },
            },
        ];
    }
}`};constructor(e,o){this.messageService=e,this.router=o}ngOnInit(){this.items=[{label:"Add",icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.router.navigate(["/fileupload"])}},{label:"Website",icon:"pi pi-external-link",command:()=>{window.open("https://angular.io/","_blank")}}]}static \u0275fac=function(o){return new(o||t)(y(u),y(re))};static \u0275cmp=h({type:t,selectors:[["template-doc"]],features:[S([u])],decls:21,vars:3,consts:[["button",""],["item",""],[1,"card"],[1,"flex","items-end","justify-center",2,"position","'relative'","height","'400px'"],["direction","up",2,"position","'absolute'",3,"model","transitionDelay"],["selector","speed-dial-template-demo",3,"code"],["outlined","","styleClass","border",3,"click"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"],[1,"flex","flex-col","items-center","justify-between","gap-2","p-2","border","rounded","border-surface-200","dark:border-surface-700","w-20","cursor-pointer",3,"click"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"p"),n(2," SpeedDial offers item customization with the "),r(3,"i"),n(4,"item"),a(),n(5," template that receives the menuitem instance from the model as a parameter. The button has its own "),r(6,"i"),n(7,"button"),a(),n(8," template, additional template named "),r(9,"i"),n(10,"icon"),a(),n(11," is provided to embed icon content for default button. "),a()(),r(12,"div",2)(13,"div",3),c(14,"p-toast"),r(15,"p-speeddial",4),O(16,zt,17,0,"ng-template",null,0,pe)(18,Wt,4,3,"ng-template",null,1,pe),a()()(),c(20,"app-code",5)),o&2&&(d(15),s("model",i.items)("transitionDelay",80),d(5),s("code",i.code))},dependencies:[F,M,D,C,_,k,x,ae,qe],encapsulation:2})}return t})();var Gt=()=>["/tooltip"],Jt=()=>({position:"relative",height:"350px"}),Xt=()=>({position:"absolute",right:0,bottom:0}),Yt=()=>({severity:"help",rounded:!0}),ei=()=>({tooltipPosition:"left"}),ti=()=>({position:"absolute",left:0,bottom:0}),ii=()=>({severity:"danger",rounded:!0}),oi=()=>({tooltipPosition:"right"}),at=(()=>{class t{messageService;router;items;code={basic:`<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', right: 0, bottom: 0 }" [buttonProps]="{ severity: 'help', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'left' }" />
<p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 0, bottom: 0 }" [buttonProps]="{ severity: 'danger', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'right' }" />`,html:`<div class="card">
    <div [style]="{ position: 'relative', height: '350px' }">
        <p-toast />
        <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', right: 0, bottom: 0 }" [buttonProps]="{ severity: 'help', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'left' }" />
        <p-speeddial [model]="items" direction="up" [style]="{ position: 'absolute', left: 0, bottom: 0 }" [buttonProps]="{ severity: 'danger', rounded: true }" [tooltipOptions]="{ tooltipPosition: 'right' }" />
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
    selector: 'speed-dial-tooltip-demo',
    templateUrl: './speed-dial-tooltip-demo.html',
    standalone: true,
    imports: [SpeedDial, ToastModule],
    providers: [MessageService]
})
export class SpeedDialTooltipDemo implements OnInit {
      items: MenuItem[] | undefined;

    constructor(
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                },
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                },
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                },
            },
            {
                label: 'Angular.dev',
                icon: 'pi pi-external-link',
                target: '_blank',
                url: 'https://angular.dev',
            },
        ];
    }
}`};constructor(e,o){this.messageService=e,this.router=o}ngOnInit(){this.items=[{label:"Add",icon:"pi pi-pencil",command:()=>{this.messageService.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.messageService.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.messageService.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.router.navigate(["/fileupload"])}},{label:"Angular.dev",icon:"pi pi-external-link",target:"_blank",url:"https://angular.dev"}]}static \u0275fac=function(o){return new(o||t)(y(u),y(re))};static \u0275cmp=h({type:t,selectors:[["tooltip-doc"]],features:[S([u])],decls:12,vars:22,consts:[["href","#",3,"routerLink"],[1,"card"],["direction","up",3,"model","buttonProps","tooltipOptions"],["selector","speed-dial-tooltip-demo",3,"code"]],template:function(o,i){o&1&&(r(0,"app-docsectiontext")(1,"p"),n(2,"Items display a tooltip on hover when a standalone "),r(3,"a",0),n(4,"Tooltip"),a(),n(5," is present with a target that matches the items."),a()(),r(6,"div",1)(7,"div"),c(8,"p-toast")(9,"p-speeddial",2)(10,"p-speeddial",2),a()(),c(11,"app-code",3)),o&2&&(d(3),s("routerLink",m(14,Gt)),d(4),f(m(15,Jt)),d(2),f(m(16,Xt)),s("model",i.items)("buttonProps",m(17,Yt))("tooltipOptions",m(18,ei)),d(),f(m(19,ti)),s("model",i.items)("buttonProps",m(20,ii))("tooltipOptions",m(21,oi)),d(),s("code",i.code))},dependencies:[M,D,C,_,k,x,w,Ae],encapsulation:2})}return t})();var ni=()=>["SpeedDial"],st=(()=>{class t{ptComponent=it;docs=[{id:"import",label:"Import",component:Xe},{id:"linear",label:"Linear",component:Ye},{id:"circle",label:"Circle",component:Je},{id:"semicircle",label:"Semi Circle",component:nt},{id:"quartercircle",label:"Quarter Circle",component:ot},{id:"tooltip",label:"Tooltip",component:at},{id:"mask",label:"Mask",component:et},{id:"template",label:"Template",component:rt},{id:"accessibility",label:"Accessibility",component:ze}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=h({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Speed Dial Component","header","Speed Dial","description","SpeedDial is a floating button with a popup menu.","themeDocs","speeddial",3,"docs","apiDocs","ptDocs"]],template:function(o,i){o&1&&c(0,"app-doc",0),o&2&&s("docs",i.docs)("apiDocs",m(3,ni))("ptDocs",i.ptComponent)},dependencies:[Qe],styles:["[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-down{left:calc(50% - 2rem);top:0}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-left{right:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-right{left:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-circle{top:calc(50% - 2rem);left:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-down{left:calc(50% - 2rem);top:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-left{right:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-right{left:0;top:calc(50% - 2rem)}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-left{right:0;bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-right{left:0;bottom:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-left{right:0;top:0}[_nghost-%COMP%]     .speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-right{left:0;top:0}[_nghost-%COMP%]     .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-left{left:0;bottom:0}[_nghost-%COMP%]     .speeddial-tooltip-demo .p-speeddial-direction-up.speeddial-right{right:0;bottom:0}[_nghost-%COMP%]     .speeddial-delay-demo .p-speeddial-direction-up{left:calc(50% - 2rem);bottom:0}[_nghost-%COMP%]     .speeddial-mask-demo .p-speeddial-direction-up{right:0;bottom:0}"]})}return t})();var hn=[{path:"",component:st}];export{hn as default};
