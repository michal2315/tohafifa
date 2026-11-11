import{a as se,b as oo}from"./chunk-JNUBCW5H.js";import{a as te,b as ie}from"./chunk-N3SKU25W.js";import{a as ne,b as le}from"./chunk-SGEFCG26.js";import{a as Ze}from"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{a as Le,d as Re,f as x,g as Z,h as Ae,i as D,j as $,k as Oe,l as Ne,p as Ge,t as We,u as B,v as je}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import{c as Ye,d as ae,f as pe,h as de}from"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as eo}from"./chunk-FKOOMXTU.js";import{a as M}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as Je}from"./chunk-XCUGNKAG.js";import{a as S,b as $e}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import{c as re}from"./chunk-AAKCLA3R.js";import{d as qe,da as J,fa as ee,g as Xe,h as Ke,ha as oe,i as Qe}from"./chunk-MCW4FHXZ.js";import{Aa as He,B as Te,E as Fe,Fa as Y,Ga as ce,Ia as ze,La as Ue,Na as G,ga as Pe,za as Q}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as Ve,w as g,y as Ie}from"./chunk-D2XKNHFS.js";import{$a as j,Ab as U,Eb as p,Fb as r,Gb as n,Hb as d,Lc as Be,Ob as N,Pc as Ee,Qa as a,R as ue,S as fe,Sb as F,T as he,Ub as v,V as ge,Va as W,X as H,Yb as I,Yc as K,Zb as L,_b as R,aa as f,ba as h,cc as q,dc as Se,gb as m,gc as T,hb as be,hc as l,ic as X,kb as Ce,lb as ke,mb as ye,mc as C,nc as k,oa as ve,oc as y,rc as Me,sc as we,tc as _e,uc as De,wb as xe,zb as z}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var to=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["color-picker-accessibility-doc"]],decls:98,vars:0,consts:[["href","https://github.com/w3c/aria/issues/930"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(o,t){o&1&&(r(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),n(),r(4,"p"),l(5," Specification does not cover a color picker "),r(6,"a",0),l(7,"yet"),n(),l(8," and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats. "),n()(),r(9,"h3"),l(10,"Closed State Keyboard Support of Popup ColorPicker"),n(),r(11,"div",1)(12,"table",2)(13,"thead")(14,"tr")(15,"th"),l(16,"Key"),n(),r(17,"th"),l(18,"Function"),n()()(),r(19,"tbody")(20,"tr")(21,"td")(22,"i"),l(23,"tab"),n()(),r(24,"td"),l(25,"Moves focus to the color picker button."),n()(),r(26,"tr")(27,"td")(28,"i"),l(29,"space"),n()(),r(30,"td"),l(31,"Opens the popup and moves focus to the color slider."),n()()()()(),r(32,"h3"),l(33,"Popup Keyboard Support"),n(),r(34,"div",1)(35,"table",2)(36,"thead")(37,"tr")(38,"th"),l(39,"Key"),n(),r(40,"th"),l(41,"Function"),n()()(),r(42,"tbody")(43,"tr")(44,"td")(45,"i"),l(46,"enter"),n()(),r(47,"td"),l(48,"Selects the color and closes the popup."),n()(),r(49,"tr")(50,"td")(51,"i"),l(52,"space"),n()(),r(53,"td"),l(54,"Selects the color and closes the popup."),n()(),r(55,"tr")(56,"td")(57,"i"),l(58,"escape"),n()(),r(59,"td"),l(60,"Closes the popup, moves focus to the input."),n()()()()(),r(61,"h3"),l(62,"Color Picker Slider"),n(),r(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),l(68,"Key"),n(),r(69,"th"),l(70,"Function"),n()()(),r(71,"tbody")(72,"tr")(73,"td")(74,"i"),l(75,"arrow keys"),n()(),r(76,"td"),l(77,"Changes color."),n()()()()(),r(78,"h3"),l(79,"Hue Slider"),n(),r(80,"div",1)(81,"table",2)(82,"thead")(83,"tr")(84,"th"),l(85,"Key"),n(),r(86,"th"),l(87,"Function"),n()()(),r(88,"tbody")(89,"tr")(90,"td")(91,"span",3)(92,"i",4),l(93,"up arrow"),n(),r(94,"i"),l(95,"down arrow"),n()()(),r(96,"td"),l(97,"Changes hue."),n()()()()()())},dependencies:[S],encapsulation:2})}return i})();var io=`
    .p-colorpicker {
        display: inline-block;
        position: relative;
    }

    .p-colorpicker-dragging {
        cursor: pointer;
    }

    .p-colorpicker-preview {
        width: dt('colorpicker.preview.width');
        height: dt('colorpicker.preview.height');
        padding: 0;
        border: 0 none;
        border-radius: dt('colorpicker.preview.border.radius');
        transition:
            background dt('colorpicker.transition.duration'),
            color dt('colorpicker.transition.duration'),
            border-color dt('colorpicker.transition.duration'),
            outline-color dt('colorpicker.transition.duration'),
            box-shadow dt('colorpicker.transition.duration');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-colorpicker-preview:enabled:focus-visible {
        border-color: dt('colorpicker.preview.focus.border.color');
        box-shadow: dt('colorpicker.preview.focus.ring.shadow');
        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');
        outline-offset: dt('colorpicker.preview.focus.ring.offset');
    }

    .p-colorpicker-panel {
        background: dt('colorpicker.panel.background');
        border: 1px solid dt('colorpicker.panel.border.color');
        border-radius: dt('colorpicker.panel.border.radius');
        box-shadow: dt('colorpicker.panel.shadow');
        width: 193px;
        height: 166px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-colorpicker-panel-inline {
        box-shadow: none;
        position: static;
    }

    .p-colorpicker-content {
        position: relative;
    }

    .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 8px;
        position: absolute;
    }

    .p-colorpicker-color-background {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    }

    .p-colorpicker-color-handle {
        position: absolute;
        inset-block-start: 0px;
        inset-inline-start: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
        border-color: dt('colorpicker.handle.color');
    }

    .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 167px;
        position: absolute;
        opacity: 0.85;
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
    }

    .p-colorpicker-hue-handle {
        position: absolute;
        inset-block-start: 150px;
        inset-inline-start: 0px;
        width: 21px;
        margin-inline-start: -2px;
        margin-block-start: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
        border-color: dt('colorpicker.handle.color');
    }
`;var vo={root:({instance:i})=>["p-colorpicker p-component",{"p-colorpicker-overlay":!i.inline,"p-colorpicker-dragging":i.colorDragging||i.hueDragging}],preview:({instance:i})=>["p-colorpicker-preview",{"p-disabled":i.$disabled()}],panel:({instance:i})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":i.inline,"p-disabled":i.$disabled()}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},me=(()=>{class i extends ze{name="colorpicker";style=io;classes=vo;static \u0275fac=(()=>{let e;return function(t){return(e||(e=ve(i)))(t||i)}})();static \u0275prov=fe({token:i,factory:i.\u0275fac})}return i})();var bo=["input"],Co=["colorSelector"],ko=["colorHandle"],yo=["hue"],xo=["hueHandle"],So=(i,O)=>({showTransitionParams:i,hideTransitionParams:O}),Mo=i=>({value:"visible",params:i});function wo(i,O){if(i&1){let e=N();r(0,"input",7,0),F("click",function(){f(e);let t=v();return h(t.onInputClick())})("keydown",function(t){f(e);let s=v();return h(s.onInputKeydown(t))})("focus",function(){f(e);let t=v();return h(t.onInputFocus())}),n()}if(i&2){let e=v();T(e.cx("preview")),Se("background-color",e.inputBgColor),p("pAutoFocus",e.autofocus)("pBind",e.ptm("preview")),xe("tabindex",e.tabindex)("disabled",e.$disabled()?"":void 0)("id",e.inputId)("aria-label",e.ariaLabel)}}function _o(i,O){if(i&1){let e=N();r(0,"div",8),F("click",function(t){f(e);let s=v();return h(s.onOverlayClick(t))})("@overlayAnimation.start",function(t){f(e);let s=v();return h(s.onOverlayAnimationStart(t))})("@overlayAnimation.done",function(t){f(e);let s=v();return h(s.onOverlayAnimationEnd(t))}),r(1,"div",9)(2,"div",10,1),F("touchstart",function(t){f(e);let s=v();return h(s.onColorDragStart(t))})("touchmove",function(t){f(e);let s=v();return h(s.onDrag(t))})("touchend",function(){f(e);let t=v();return h(t.onDragEnd())})("mousedown",function(t){f(e);let s=v();return h(s.onColorMousedown(t))}),r(4,"div",9),d(5,"div",9,2),n()(),r(7,"div",11,3),F("mousedown",function(t){f(e);let s=v();return h(s.onHueMousedown(t))})("touchstart",function(t){f(e);let s=v();return h(s.onHueDragStart(t))})("touchmove",function(t){f(e);let s=v();return h(s.onDrag(t))})("touchend",function(){f(e);let t=v();return h(t.onDragEnd())}),d(9,"div",9,4),n()()()}if(i&2){let e=v();T(e.cx("panel")),p("@overlayAnimation",_e(26,Mo,De(23,So,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0)("pBind",e.ptm("panel")),a(),T(e.cx("content")),p("pBind",e.ptm("content")),a(),T(e.cx("colorSelector")),p("pBind",e.ptm("colorSelector")),a(2),T(e.cx("colorBackground")),p("pBind",e.ptm("colorBackground")),a(),T(e.cx("colorHandle")),p("pBind",e.ptm("colorHandle")),a(2),T(e.cx("hue")),p("pBind",e.ptm("hue")),a(2),T(e.cx("hueHandle")),p("pBind",e.ptm("hueHandle"))}}var Do={provide:Le,useExisting:ue(()=>b),multi:!0},ro=new ge("COLORPICKER_INSTANCE"),b=(()=>{class i extends Ze{overlayService;$pcColorPicker=H(ro,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=H(G,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;inline;format="hex";tabindex;inputId;autoZIndex=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;defaultColor="ff0000";appendTo=Ee(void 0);onChange=new W;onShow=new W;onHide=new W;inputViewChild;$appendTo=Be(()=>this.appendTo()||this.config.overlayAppendTo());value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=H(me);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(ce.ARIA)[ce.SELECT_COLOR]}onHueMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.$disabled()||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.$disabled()||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,o){let t=o?o.pageY:e.pageY,s=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,t-s)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,o){let t=o?o.pageX:e.pageX,s=o?o.pageY:e.pageY,c=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),u=c.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),_=c.left+this.document.body.scrollLeft,P=Math.floor(100*Math.max(0,Math.min(150,t-_))/150),go=Math.floor(100*(150-Math.max(0,Math.min(150,s-u)))/150);this.value=this.validateHSB({h:this.value.h,s:P,b:go}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.$attrSelector&&this.overlay?.setAttribute(this.$attrSelector,""),this.appendOverlay(),this.autoZIndex&&re.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&re.clear(e.element),this.onHide.emit({});break}}appendOverlay(){qe.appendOverlay(this.overlay,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo())}restoreOverlayAppend(){this.overlay&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.inputViewChild?.nativeElement,this.overlay)}alignOverlay(){this.$appendTo()==="self"?Fe(this.overlay,this.inputViewChild?.nativeElement):Te(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",o=>{this.colorDragging&&this.pickColor(o),this.hueDragging&&this.pickHue(o)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){Ie(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!Pe()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Xe(this.el?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var o=6-e.length;if(o>0){for(var t=[],s=0;s<o;s++)t.push("0");t.push(e),e=t.join("")}return e}HEXtoRGB(e){let o=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:o>>16,g:(o&65280)>>8,b:o&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var o={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),s=Math.max(e.r,e.g,e.b),c=s-t;return o.b=s,o.s=s!=0?255*c/s:0,o.s!=0?e.r==s?o.h=(e.g-e.b)/c:e.g==s?o.h=2+(e.b-e.r)/c:o.h=4+(e.r-e.g)/c:o.h=-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o}HSBtoRGB(e){var o={r:0,g:0,b:0};let t=e.h,s=e.s*255/100,c=e.b*255/100;if(s==0)o={r:c,g:c,b:c};else{let u=c,_=(255-s)*c/255,P=(u-_)*(t%60)/60;t==360&&(t=0),t<60?(o.r=u,o.b=_,o.g=_+P):t<120?(o.g=u,o.b=_,o.r=u-P):t<180?(o.g=u,o.r=_,o.b=_+P):t<240?(o.b=u,o.r=_,o.g=u-P):t<300?(o.b=u,o.g=_,o.r=_+P):t<360?(o.r=u,o.g=_,o.b=u-P):(o.r=0,o.g=0,o.b=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}}RGBtoHEX(e){var o=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var t in o)o[t].length==1&&(o[t]="0"+o[t]);return o.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}onAfterViewInit(){this.inline&&(this.updateColorSelector(),this.updateUI())}writeControlValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&re.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(o){return new(o||i)(j(He))};static \u0275cmp=m({type:i,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(o,t){if(o&1&&(I(bo,5),I(Co,5),I(ko,5),I(yo,5),I(xo,5)),o&2){let s;L(s=R())&&(t.inputViewChild=s.first),L(s=R())&&(t.colorSelector=s.first),L(s=R())&&(t.colorHandle=s.first),L(s=R())&&(t.hue=s.first),L(s=R())&&(t.hueHandle=s.first)}},hostVars:2,hostBindings:function(o,t){o&2&&T(t.cn(t.cx("root"),t.styleClass))},inputs:{styleClass:"styleClass",inline:[2,"inline","inline",K],format:"format",tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",K],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",K],defaultColor:"defaultColor",appendTo:[1,"appendTo"]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[Me([Do,me,{provide:ro,useExisting:i},{provide:Ue,useExisting:i}]),ke([G]),Ce],decls:2,vars:2,consts:[["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],["type","text","readonly","",3,"class","backgroundColor","pAutoFocus","pBind","click","keydown","focus",4,"ngIf"],[3,"class","pBind","click",4,"ngIf"],["type","text","readonly","",3,"click","keydown","focus","pAutoFocus","pBind"],[3,"click","pBind"],[3,"pBind"],[3,"touchstart","touchmove","touchend","mousedown","pBind"],[3,"mousedown","touchstart","touchmove","touchend","pBind"]],template:function(o,t){o&1&&ye(0,wo,2,10,"input",5)(1,_o,11,28,"div",6),o&2&&(p("ngIf",!t.inline),a(),p("ngIf",t.inline||t.overlayVisible))},dependencies:[g,Ve,Qe,Ke,Y,G],encapsulation:2,data:{animation:[Ye("overlayAnimation",[de(":enter",[pe({opacity:0,transform:"scaleY(0.8)"}),ae("{{showTransitionParams}}")]),de(":leave",[ae("{{hideTransitionParams}}",pe({opacity:0}))])])]},changeDetection:0})}return i})(),w=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=be({type:i});static \u0275inj=he({imports:[b,Y,Y]})}return i})();var no=(()=>{class i{color;code={basic:'<p-colorpicker [(ngModel)]="color" />',html:`<div class="card flex justify-center">
    <p-colorpicker [(ngModel)]="color" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-basic-demo',
    templateUrl: './color-picker-basic-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerBasicDemo {
    color: string | undefined;
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["color-picker-basic-demo"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","color-picker-basic-demo",3,"code"]],template:function(o,t){o&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker is used as a controlled input with "),r(3,"i"),l(4,"ngModel"),n(),l(5," property."),n()(),r(6,"div",0)(7,"p-colorpicker",1),y("ngModelChange",function(c){return k(t.color,c)||(t.color=c),c}),n()(),d(8,"app-code",2)),o&2&&(a(7),C("ngModel",t.color),a(),p("code",t.code))},dependencies:[g,B,x,D,w,b,M,S],encapsulation:2})}return i})();var lo=(()=>{class i{color;code={basic:'<p-colorpicker [(ngModel)]="color" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-colorpicker [(ngModel)]="color" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-format-demo',
    templateUrl: './color-picker-format-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerDisabledDemo {
    color: string | undefined;
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["color-picker-disabled-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","color-picker-disabled-demo",3,"code"]],template:function(o,t){o&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"When "),r(3,"i"),l(4,"disabled"),n(),l(5," is present, the element cannot be edited and focused."),n()(),r(6,"div",0)(7,"p-colorpicker",1),y("ngModelChange",function(c){return k(t.color,c)||(t.color=c),c}),n()(),d(8,"app-code",2)),o&2&&(a(7),C("ngModel",t.color),p("disabled",!0),a(),p("code",t.code))},dependencies:[g,B,x,D,w,b,M,S],encapsulation:2})}return i})();var so=(()=>{class i{color="#6466f1";colorRGB={r:100,g:102,b:241};colorHSB={h:239,s:59,b:95};code={basic:`<p-colorpicker [(ngModel)]="color" inputId="cp-hex" />

<p-colorpicker [(ngModel)]="colorRGB" format="rgb" inputId="cp-rgb" />

<p-colorpicker [(ngModel)]="colorHSB" format="hsb" inputId="cp-hsb" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-1 flex flex-col items-center">
        <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
        <p-colorpicker [(ngModel)]="color" inputId="cp-hex" class="mb-4" />
        <span>{{ color }}</span>
    </div>
    <div class="flex-1 flex flex-col items-center">
        <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
        <p-colorpicker [(ngModel)]="colorRGB" format="rgb" inputId="cp-rgb" class="mb-4" />
        <span>{{ 'r:' + colorRGB.r + ' g:' + colorRGB.g + ' b:' + colorRGB.b }}</span>
    </div>
    <div class="flex-1 flex flex-col items-center">
        <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
        <p-colorpicker [(ngModel)]="colorHSB" format="hsb" inputId="cp-hsb" class="mb-4" />
        <span>{{ 'h:' + colorHSB.h + ' s:' + colorHSB.s + ' b:' + colorHSB.b }}</span>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-format-demo',
    templateUrl: './color-picker-format-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerFormatDemo {
    color: string = '#6466f1';

    colorRGB: any = { r: 100, g: 102, b: 241 };

    colorHSB: any = { h: 239, s: 59, b: 95 };
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["color-picker-format-demo"]],decls:35,vars:7,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-1","flex","flex-col","items-center"],["for","cp-hex",1,"font-bold","block","mb-2"],["inputId","cp-hex",1,"mb-4",3,"ngModelChange","ngModel"],["for","cp-rgb",1,"font-bold","block","mb-2"],["format","rgb","inputId","cp-rgb",1,"mb-4",3,"ngModelChange","ngModel"],["for","cp-hsb",1,"font-bold","block","mb-2"],["format","hsb","inputId","cp-hsb",1,"mb-4",3,"ngModelChange","ngModel"],["selector","color-picker-format-demo",3,"code"]],template:function(o,t){o&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"Default color format to use in value binding is "),r(3,"i"),l(4,"hex"),n(),l(5," and other possible values can be "),r(6,"i"),l(7,"rgb"),n(),l(8," and "),r(9,"i"),l(10,"hsb"),n(),l(11," using the "),r(12,"i"),l(13,"format"),n(),l(14," property."),n()(),r(15,"div",0)(16,"div",1)(17,"label",2),l(18," HEX "),n(),r(19,"p-colorpicker",3),y("ngModelChange",function(c){return k(t.color,c)||(t.color=c),c}),n(),r(20,"span"),l(21),n()(),r(22,"div",1)(23,"label",4),l(24," RGB "),n(),r(25,"p-colorpicker",5),y("ngModelChange",function(c){return k(t.colorRGB,c)||(t.colorRGB=c),c}),n(),r(26,"span"),l(27),n()(),r(28,"div",1)(29,"label",6),l(30," HSB "),n(),r(31,"p-colorpicker",7),y("ngModelChange",function(c){return k(t.colorHSB,c)||(t.colorHSB=c),c}),n(),r(32,"span"),l(33),n()()(),d(34,"app-code",8)),o&2&&(a(19),C("ngModel",t.color),a(2),X(t.color),a(4),C("ngModel",t.colorRGB),a(2),X("r:"+t.colorRGB.r+" g:"+t.colorRGB.g+" b:"+t.colorRGB.b),a(4),C("ngModel",t.colorHSB),a(2),X("h:"+t.colorHSB.h+" s:"+t.colorHSB.s+" b:"+t.colorHSB.b),a(),p("code",t.code))},dependencies:[g,B,x,D,w,b,M,S],encapsulation:2})}return i})();var co=(()=>{class i{code={typescript:"import { ColorPickerModule } from 'primeng/colorpicker';"};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["color-picker-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,t){o&1&&d(0,"app-code",0),o&2&&p("code",t.code)("hideToggleCode",!0)},dependencies:[M],encapsulation:2})}return i})();var ao=(()=>{class i{color;code={basic:'<p-colorpicker [(ngModel)]="color" [inline]="true" />',html:`<div class="card flex justify-center">
    <p-colorpicker [(ngModel)]="color" [inline]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
    selector: 'color-picker-inline-demo',
    templateUrl: './color-picker-inline-demo.html',
    standalone: true,
    imports: [FormsModule, ColorPicker]
})
export class ColorPickerInlineDemo {
    color: string | undefined;
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["color-picker-inline-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","inline"],["selector","color-picker-inline-demo",3,"code"]],template:function(o,t){o&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker is displayed as a popup by default, add "),r(3,"i"),l(4,"inline"),n(),l(5," property to customize this behavior."),n()(),r(6,"div",0)(7,"p-colorpicker",1),y("ngModelChange",function(c){return k(t.color,c)||(t.color=c),c}),n()(),d(8,"app-code",2)),o&2&&(a(7),C("ngModel",t.color),p("inline",!0),a(),p("code",t.code))},dependencies:[g,B,x,D,w,b,M,S],encapsulation:2})}return i})();var po=(()=>{class i{color;docs=[{data:se("ColorPicker"),key:"ColorPicker"}];static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["colorpicker-pt-viewer"]],decls:2,vars:3,consts:[[3,"docs"],[3,"ngModelChange","ngModel","inline"]],template:function(o,t){o&1&&(r(0,"app-docptviewer",0)(1,"p-colorpicker",1),y("ngModelChange",function(c){return k(t.color,c)||(t.color=c),c}),n()()),o&2&&(p("docs",t.docs),a(),C("ngModel",t.color),p("inline",!0))},dependencies:[g,oo,w,b,B,x,D],encapsulation:2})}return i})();var mo=(()=>{class i{docs=[{id:"pt.viewer",label:"Viewer",component:po},{id:"pt.doc.colorpicker",label:"ColorPicker PT Options",component:$e,data:se("ColorPicker")}];static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["colorpicker-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,t){o&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),l(3,"ColorPicker Pass Through"),n()(),d(4,"app-docsection",2),n()),o&2&&(a(4),p("docs",t.docs))},dependencies:[g,Je],encapsulation:2})}return i})();function Fo(i,O){i&1&&(r(0,"p-message",4),l(1,"Color is required."),n())}var uo=(()=>{class i{fb;messageService=H(Q);exampleForm;formSubmitted=!1;constructor(e){this.fb=e,this.exampleForm=this.fb.group({color:["",Re.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(e){return this.exampleForm.get(e)?.invalid&&this.formSubmitted}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <p-colorpicker formControlName="color" defaultColor="989898" />
        @if (isInvalid('color')) {
            <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<div class="card flex justify-center">
    <p-toast />
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col items-center gap-2">
            <p-colorpicker formControlName="color" defaultColor="989898" />
            @if (isInvalid('color')) {
                <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'color-picker-reactive-forms-demo',
    templateUrl: './color-picker-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, ColorPickerModule, ButtonModule, MessageModule, ToastModule]
})
export class ColorPickerReactiveFormsDemo {
    messageService = inject(MessageService);

    exampleForm: FormGroup;

    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            color: ['', Validators.required]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && this.formSubmitted;
    }
}`};static \u0275fac=function(o){return new(o||i)(j(We))};static \u0275cmp=m({type:i,selectors:[["reactive-forms-doc"]],decls:16,vars:3,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","items-center","gap-2"],["formControlName","color","defaultColor","989898"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","color-picker-reactive-forms-demo",3,"code"]],template:function(o,t){o&1&&(r(0,"app-docsectiontext")(1,"p"),l(2,"ColorPicker can also be used with reactive forms. In this case, the "),r(3,"i"),l(4,"formControlName"),n(),l(5," property is used to bind the component to a form control."),n()(),r(6,"div",0),d(7,"p-toast"),r(8,"form",1),F("ngSubmit",function(){return t.onSubmit()}),r(9,"div",2),d(10,"p-colorpicker",3),z(11,Fo,2,0,"p-message",4),n(),r(12,"button",5)(13,"span",6),l(14,"Submit"),n()()()(),d(15,"app-code",7)),o&2&&(a(8),p("formGroup",t.exampleForm),a(3),U(t.isInvalid("color")?11:-1),a(4),p("code",t.code))},dependencies:[g,je,$,x,Z,Oe,Ne,w,b,oe,ee,J,ie,te,le,ne,M,S],encapsulation:2})}return i})();function Po(i,O){i&1&&(r(0,"p-message",6),l(1,"Color is required."),n())}var fo=(()=>{class i{messageService=H(Q);color;onSubmit(e){e.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),e.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col items-center gap-2">
        <p-colorpicker name="color" [(ngModel)]="color" #colorModel="ngModel" required defaultColor="989898" />
        @if (colorModel.invalid && (colorModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<div class="card flex justify-center">
    <p-toast />
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
        <div class="flex flex-col items-center gap-2">
            <p-colorpicker name="color" [(ngModel)]="color" #colorModel="ngModel" required defaultColor="989898" />
            @if (colorModel.invalid && (colorModel.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Color is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'color-picker-template-driven-forms-demo',
    templateUrl: './color-picker-template-driven-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, ColorPickerModule, ButtonModule, MessageModule, ToastModule]
})
export class ColorPickerReactiveFormsDemo {
    messageService = inject(MessageService);

    color: string | undefined;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["template-driven-forms-doc"]],decls:13,vars:3,consts:[["exampleForm","ngForm"],["colorModel","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","items-center","gap-2"],["name","color","required","","defaultColor","989898",3,"ngModelChange","ngModel"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","color-picker-template-driven-forms-demo",3,"code"]],template:function(o,t){if(o&1){let s=N();d(0,"app-docsectiontext"),r(1,"div",2),d(2,"p-toast"),r(3,"form",3,0),F("ngSubmit",function(){f(s);let u=q(4);return h(t.onSubmit(u))}),r(5,"div",4)(6,"p-colorpicker",5,1),y("ngModelChange",function(u){return f(s),k(t.color,u)||(t.color=u),h(u)}),n(),z(8,Po,2,0,"p-message",6),n(),r(9,"button",7)(10,"span",8),l(11,"Submit"),n()()()(),d(12,"app-code",9)}if(o&2){let s=q(4),c=q(7);a(6),C("ngModel",t.color),a(2),U(c.invalid&&(c.touched||s.submitted)?8:-1),a(4),p("code",t.code)}},dependencies:[g,B,$,x,Z,Ge,D,Ae,w,b,oe,ee,J,ie,te,le,ne,M,S],encapsulation:2})}return i})();var Ho=()=>["ColorPicker"],ho=(()=>{class i{docs=[{id:"import",label:"Import",component:co},{id:"basic",label:"Basic",component:no},{id:"inline",label:"Inline",component:ao},{id:"format",label:"Format",component:so},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:fo},{id:"reactive",label:"Reactive Forms",component:uo}]},{id:"disabled",label:"Disabled",component:lo},{id:"accessibility",label:"Accessibility",component:to}];ptComponent=mo;static \u0275fac=function(o){return new(o||i)};static \u0275cmp=m({type:i,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ColorPicker Component","header","ColorPicker","description","ColorPicker is an input component to select a color.","themeDocs","colorpicker",3,"docs","apiDocs","ptDocs"]],template:function(o,t){o&1&&d(0,"app-doc",0),o&2&&p("docs",t.docs)("apiDocs",we(3,Ho))("ptDocs",t.ptComponent)},dependencies:[eo],encapsulation:2})}return i})();var Vi=[{path:"",component:ho}];export{Vi as default};
