import{a as se}from"./chunk-27JIZF5R.js";import{a as ee}from"./chunk-CTI5WBER.js";import{h as ae}from"./chunk-MCW4FHXZ.js";import{A as K,Fa as H,Ia as te,La as ie,Na as m,Oa as ne,s as B,u as F,y as Y,z as Z}from"./chunk-UOUHADUB.js";import{n as U,q,w as G,y as J}from"./chunk-D2XKNHFS.js";import{Eb as o,Fb as v,Gb as w,Hb as _,Ob as y,Qa as p,R as A,S as z,Sb as b,T as N,Ub as s,V as R,Va as I,Wa as W,X as g,Yb as S,Yc as E,Zb as C,Zc as x,_b as D,aa as r,ba as l,dc as k,gb as O,gc as u,hb as $,kb as j,lb as P,mb as Q,oa as V,rc as X,tc as L,uc as f,wb as h}from"./chunk-O3KMSE75.js";var re=`
    .p-slider {
        display: block;
        position: relative;
        background: dt('slider.track.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider-handle {
        cursor: grab;
        touch-action: none;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: dt('slider.handle.height');
        width: dt('slider.handle.width');
        background: dt('slider.handle.background');
        border-radius: dt('slider.handle.border.radius');
        transition:
            background dt('slider.transition.duration'),
            color dt('slider.transition.duration'),
            border-color dt('slider.transition.duration'),
            box-shadow dt('slider.transition.duration'),
            outline-color dt('slider.transition.duration');
        outline-color: transparent;
    }

    .p-slider-handle::before {
        content: '';
        width: dt('slider.handle.content.width');
        height: dt('slider.handle.content.height');
        display: block;
        background: dt('slider.handle.content.background');
        border-radius: dt('slider.handle.content.border.radius');
        box-shadow: dt('slider.handle.content.shadow');
        transition: background dt('slider.transition.duration');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover {
        background: dt('slider.handle.hover.background');
    }

    .p-slider:not(.p-disabled) .p-slider-handle:hover::before {
        background: dt('slider.handle.content.hover.background');
    }

    .p-slider-handle:focus-visible {
        box-shadow: dt('slider.handle.focus.ring.shadow');
        outline: dt('slider.handle.focus.ring.width') dt('slider.handle.focus.ring.style') dt('slider.handle.focus.ring.color');
        outline-offset: dt('slider.handle.focus.ring.offset');
    }

    .p-slider-range {
        display: block;
        background: dt('slider.range.background');
        border-radius: dt('slider.track.border.radius');
    }

    .p-slider.p-slider-horizontal {
        height: dt('slider.track.size');
    }

    .p-slider-horizontal .p-slider-range {
        inset-block-start: 0;
        inset-inline-start: 0;
        height: 100%;
    }

    .p-slider-horizontal .p-slider-handle {
        inset-block-start: 50%;
        margin-block-start: calc(-1 * calc(dt('slider.handle.height') / 2));
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
    }

    .p-slider-vertical {
        min-height: 100px;
        width: dt('slider.track.size');
    }

    .p-slider-vertical .p-slider-handle {
        inset-inline-start: 50%;
        margin-inline-start: calc(-1 * calc(dt('slider.handle.width') / 2));
        margin-block-end: calc(-1 * calc(dt('slider.handle.height') / 2));
    }

    .p-slider-vertical .p-slider-range {
        inset-block-end: 0;
        inset-inline-start: 0;
        width: 100%;
    }
`;var he={handle:{position:"absolute"},range:{position:"absolute"}},ue={root:({instance:a})=>["p-slider p-component",{"p-disabled":a.$disabled(),"p-invalid":a.invalid(),"p-slider-horizontal":a.orientation==="horizontal","p-slider-vertical":a.orientation==="vertical","p-slider-animate":a.animate}],range:"p-slider-range",handle:"p-slider-handle"},T=(()=>{class a extends te{name="slider";style=re;classes=ue;inlineStyles=he;static \u0275fac=(()=>{let e;return function(t){return(e||(e=V(a)))(t||a)}})();static \u0275prov=z({token:a,factory:a.\u0275fac})}return a})();var ce=["sliderHandle"],pe=["sliderHandleStart"],fe=["sliderHandleEnd"],me=(a,d)=>({position:"absolute","inset-inline-start":a,width:d}),ge=(a,d)=>({position:"absolute",bottom:a,height:d}),_e=a=>({position:"absolute",height:a}),be=a=>({position:"absolute",width:a}),M=(a,d)=>({position:"absolute","inset-inline-start":a,bottom:d});function xe(a,d){if(a&1&&_(0,"span",7),a&2){let e=s();u(e.cx("range")),o("ngStyle",f(5,me,e.offset!==null&&e.offset!==void 0?e.offset+"%":e.handleValues[0]+"%",e.diff?e.diff+"%":e.handleValues[1]-e.handleValues[0]+"%"))("pBind",e.ptm("range")),h("data-pc-section","range")}}function Ve(a,d){if(a&1&&_(0,"span",7),a&2){let e=s();u(e.cx("range")),o("ngStyle",f(5,ge,e.offset!==null&&e.offset!==void 0?e.offset+"%":e.handleValues[0]+"%",e.diff?e.diff+"%":e.handleValues[1]-e.handleValues[0]+"%"))("pBind",e.ptm("range")),h("data-pc-section","range")}}function ve(a,d){if(a&1&&_(0,"span",7),a&2){let e=s();u(e.cx("range")),o("ngStyle",L(5,_e,e.handleValue+"%"))("pBind",e.ptm("range")),h("data-pc-section","range")}}function we(a,d){if(a&1&&_(0,"span",7),a&2){let e=s();u(e.cx("range")),o("ngStyle",L(5,be,e.handleValue+"%"))("pBind",e.ptm("range")),h("data-pc-section","range")}}function ye(a,d){if(a&1){let e=y();v(0,"span",8,0),b("touchstart",function(t){r(e);let n=s();return l(n.onDragStart(t))})("touchmove",function(t){r(e);let n=s();return l(n.onDrag(t))})("touchend",function(t){r(e);let n=s();return l(n.onDragEnd(t))})("mousedown",function(t){r(e);let n=s();return l(n.onMouseDown(t))})("keydown",function(t){r(e);let n=s();return l(n.onKeyDown(t))}),w()}if(a&2){let e=s();u(e.cx("handle")),k("transition",e.dragging?"none":null),o("ngStyle",f(15,M,e.orientation=="horizontal"?e.handleValue+"%":null,e.orientation=="vertical"?e.handleValue+"%":null))("pAutoFocus",e.autofocus)("pBind",e.ptm("handle")),h("tabindex",e.$disabled()?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-orientation",e.orientation)("data-pc-section","handle")}}function Se(a,d){if(a&1){let e=y();v(0,"span",9,1),b("keydown",function(t){r(e);let n=s();return l(n.onKeyDown(t,0))})("mousedown",function(t){r(e);let n=s();return l(n.onMouseDown(t,0))})("touchstart",function(t){r(e);let n=s();return l(n.onDragStart(t,0))})("touchmove",function(t){r(e);let n=s();return l(n.onDrag(t))})("touchend",function(t){r(e);let n=s();return l(n.onDragEnd(t))}),w()}if(a&2){let e=s();u(e.cn(e.cx("handle"),e.handleIndex==0&&"p-slider-handle-active")),k("transition",e.dragging?"none":null),o("ngStyle",f(15,M,e.rangeStartLeft,e.rangeStartBottom))("pAutoFocus",e.autofocus)("pBind",e.ptm("startHandler")),h("tabindex",e.$disabled()?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[0]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-orientation",e.orientation)("data-pc-section","startHandler")}}function Ce(a,d){if(a&1){let e=y();v(0,"span",10,2),b("keydown",function(t){r(e);let n=s();return l(n.onKeyDown(t,1))})("mousedown",function(t){r(e);let n=s();return l(n.onMouseDown(t,1))})("touchstart",function(t){r(e);let n=s();return l(n.onDragStart(t,1))})("touchmove",function(t){r(e);let n=s();return l(n.onDrag(t))})("touchend",function(t){r(e);let n=s();return l(n.onDragEnd(t))}),w()}if(a&2){let e=s();u(e.cn(e.cx("handle"),e.handleIndex==1&&"p-slider-handle-active")),k("transition",e.dragging?"none":null),o("ngStyle",f(14,M,e.rangeEndLeft,e.rangeEndBottom))("pBind",e.ptm("endHandler")),h("tabindex",e.$disabled()?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[1]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-orientation",e.orientation)("data-pc-section","endHandler")}}var le=new R("SLIDER_INSTANCE"),De={provide:ee,useExisting:A(()=>oe),multi:!0},oe=(()=>{class a extends se{$pcSlider=g(le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}animate;min=0;max=100;orientation="horizontal";step;range;styleClass;ariaLabel;ariaLabelledBy;tabindex=0;autofocus;onChange=new I;onSlideEnd=new I;sliderHandle;sliderHandleStart;sliderHandleEnd;_componentStyle=g(T);value;values;handleValue;handleValues=[];diff;offset;bottom;dragging;dragListener;mouseupListener;initX;initY;barWidth;barHeight;sliderHandleClick;handleIndex=0;startHandleValue;startx;starty;ngZone=g(W);onHostClick(e){this.onBarClick(e)}onMouseDown(e,i){this.$disabled()||(this.dragging=!0,this.updateDomData(),this.sliderHandleClick=!0,this.range&&this.handleValues&&this.handleValues[0]===this.max?this.handleIndex=0:this.handleIndex=i,this.bindDragListeners(),e.target.focus(),e.preventDefault(),this.animate&&F(this.el.nativeElement,"p-slider-animate"))}onDragStart(e,i){if(!this.$disabled()){var t=e.changedTouches[0];this.startHandleValue=this.range?this.handleValues[i]:this.handleValue,this.dragging=!0,this.range&&this.handleValues&&this.handleValues[0]===this.max?this.handleIndex=0:this.handleIndex=i,this.orientation==="horizontal"?(this.startx=parseInt(t.clientX,10),this.barWidth=this.el.nativeElement.offsetWidth):(this.starty=parseInt(t.clientY,10),this.barHeight=this.el.nativeElement.offsetHeight),this.animate&&F(this.el.nativeElement,"p-slider-animate"),e.preventDefault()}}onDrag(e){if(!this.$disabled()){var i=e.changedTouches[0],t=0;this.orientation==="horizontal"?t=Math.floor((parseInt(i.clientX,10)-this.startx)*100/this.barWidth)+this.startHandleValue:t=Math.floor((this.starty-parseInt(i.clientY,10))*100/this.barHeight)+this.startHandleValue,this.setValueFromHandle(e,t),e.preventDefault()}}onDragEnd(e){this.$disabled()||(this.dragging=!1,this.range?this.onSlideEnd.emit({originalEvent:e,values:this.values}):this.onSlideEnd.emit({originalEvent:e,value:this.value}),this.animate&&B(this.el.nativeElement,"p-slider-animate"),e.preventDefault())}onBarClick(e){this.$disabled()||(this.sliderHandleClick||(this.updateDomData(),this.handleChange(e),this.range?this.onSlideEnd.emit({originalEvent:e,values:this.values}):this.onSlideEnd.emit({originalEvent:e,value:this.value})),this.sliderHandleClick=!1)}onKeyDown(e,i){switch(this.handleIndex=i,e.code){case"ArrowDown":case"ArrowLeft":this.decrementValue(e,i),e.preventDefault();break;case"ArrowUp":case"ArrowRight":this.incrementValue(e,i),e.preventDefault();break;case"PageDown":this.decrementValue(e,i,!0),e.preventDefault();break;case"PageUp":this.incrementValue(e,i,!0),e.preventDefault();break;case"Home":this.updateValue(this.min,e),e.preventDefault();break;case"End":this.updateValue(this.max,e),e.preventDefault();break;default:break}}decrementValue(e,i,t=!1){let n;this.range?this.step?n=(this.values?.[i]??0)-this.step:n=(this.values?.[i]??0)-1:this.step?n=this.value-this.step:!this.step&&t?n=this.value-10:n=this.value-1,this.updateValue(n,e),e.preventDefault()}incrementValue(e,i,t=!1){let n;this.range?this.step?n=(this.values?.[i]??0)+this.step:n=(this.values?.[i]??0)+1:this.step?n=this.value+this.step:!this.step&&t?n=this.value+10:n=this.value+1,this.updateValue(n,e),e.preventDefault()}handleChange(e){let i=this.calculateHandleValue(e);this.setValueFromHandle(e,i)}bindDragListeners(){J(this.platformId)&&this.ngZone.runOutsideAngular(()=>{let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.dragListener||(this.dragListener=this.renderer.listen(e,"mousemove",i=>{this.dragging&&this.ngZone.run(()=>{this.handleChange(i)})})),this.mouseupListener||(this.mouseupListener=this.renderer.listen(e,"mouseup",i=>{this.dragging&&(this.dragging=!1,this.ngZone.run(()=>{this.range?this.onSlideEnd.emit({originalEvent:i,values:this.values}):this.onSlideEnd.emit({originalEvent:i,value:this.value}),this.animate&&B(this.el.nativeElement,"p-slider-animate")}))}))})}unbindDragListeners(){this.dragListener&&(this.dragListener(),this.dragListener=null),this.mouseupListener&&(this.mouseupListener(),this.mouseupListener=null)}setValueFromHandle(e,i){let t=this.getValueFromHandle(i);this.range?this.step?this.handleStepChange(t,this.values[this.handleIndex]):(this.handleValues[this.handleIndex]=i,this.updateValue(t,e)):this.step?this.handleStepChange(t,this.value):(this.handleValue=i,this.updateValue(t,e)),this.cd.markForCheck()}handleStepChange(e,i){let t=e-i,n=i,c=this.step;t<0?n=i+Math.ceil(e/c-i/c)*c:t>0&&(n=i+Math.floor(e/c-i/c)*c),this.updateValue(n),this.updateHandleValue()}get rangeStartLeft(){return this.isVertical()?null:this.handleValues[0]>100?"100%":this.handleValues[0]+"%"}get rangeStartBottom(){return this.isVertical()?this.handleValues[0]+"%":"auto"}get rangeEndLeft(){return this.isVertical()?null:this.handleValues[1]+"%"}get rangeEndBottom(){return this.isVertical()?this.handleValues[1]+"%":"auto"}isVertical(){return this.orientation==="vertical"}updateDomData(){let e=this.el.nativeElement.getBoundingClientRect();this.initX=e.left+Y(),this.initY=e.top+Z(),this.barWidth=this.el.nativeElement.offsetWidth,this.barHeight=this.el.nativeElement.offsetHeight}calculateHandleValue(e){return this.orientation==="horizontal"?K(this.el.nativeElement)?(this.initX+this.barWidth-e.pageX)*100/this.barWidth:(e.pageX-this.initX)*100/this.barWidth:(this.initY+this.barHeight-e.pageY)*100/this.barHeight}updateHandleValue(){this.range?(this.handleValues[0]=(this.values[0]<this.min?0:this.values[0]-this.min)*100/(this.max-this.min),this.handleValues[1]=(this.values[1]>this.max?100:this.values[1]-this.min)*100/(this.max-this.min)):this.value<this.min?this.handleValue=0:this.value>this.max?this.handleValue=100:this.handleValue=(this.value-this.min)*100/(this.max-this.min),this.step&&this.updateDiffAndOffset()}updateDiffAndOffset(){this.diff=this.getDiff(),this.offset=this.getOffset()}getDiff(){return Math.abs(this.handleValues[0]-this.handleValues[1])}getOffset(){return Math.min(this.handleValues[0],this.handleValues[1])}updateValue(e,i){if(this.range){let t=e;this.handleIndex==0?(t<this.min?(t=this.min,this.handleValues[0]=0):t>this.values[1]&&t>this.max&&(t=this.max,this.handleValues[0]=100),this.sliderHandleStart?.nativeElement.focus()):(t>this.max?(t=this.max,this.handleValues[1]=100,this.offset=this.handleValues[1]):t<this.min?(t=this.min,this.handleValues[1]=0):t<this.values[0]&&(this.offset=this.handleValues[1]),this.sliderHandleEnd?.nativeElement.focus()),this.step?this.updateHandleValue():this.updateDiffAndOffset(),this.values[this.handleIndex]=this.getNormalizedValue(t);let n=[this.minVal,this.maxVal];this.onModelChange(n),this.onChange.emit({event:i,values:this.values})}else e<this.min?(e=this.min,this.handleValue=0):e>this.max&&(e=this.max,this.handleValue=100),this.value=this.getNormalizedValue(e),this.onModelChange(this.value),this.onChange.emit({event:i,value:this.value}),this.sliderHandle?.nativeElement.focus();this.updateHandleValue()}getValueFromHandle(e){return(this.max-this.min)*(e/100)+this.min}getDecimalsCount(e){return e&&Math.floor(e)!==e&&e.toString().split(".")[1].length||0}getNormalizedValue(e){let i=this.getDecimalsCount(this.step);return i>0?+parseFloat(e.toString()).toFixed(i):Math.floor(e)}onDestroy(){this.unbindDragListeners()}get minVal(){return Math.min(this.values[1],this.values[0])}get maxVal(){return Math.max(this.values[1],this.values[0])}writeControlValue(e){this.range?this.values=e||[0,0]:this.value=e||0,this.updateHandleValue(),this.updateDiffAndOffset(),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=V(a)))(t||a)}})();static \u0275cmp=O({type:a,selectors:[["p-slider"]],viewQuery:function(i,t){if(i&1&&(S(ce,5),S(pe,5),S(fe,5)),i&2){let n;C(n=D())&&(t.sliderHandle=n.first),C(n=D())&&(t.sliderHandleStart=n.first),C(n=D())&&(t.sliderHandleEnd=n.first)}},hostVars:4,hostBindings:function(i,t){i&1&&b("click",function(c){return t.onHostClick(c)}),i&2&&(h("data-pc-name","slider")("data-pc-section","root"),u(t.cn(t.cx("root"),t.styleClass)))},inputs:{animate:[2,"animate","animate",E],min:[2,"min","min",x],max:[2,"max","max",x],orientation:"orientation",step:[2,"step","step",x],range:[2,"range","range",E],styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",tabindex:[2,"tabindex","tabindex",x],autofocus:[2,"autofocus","autofocus",E]},outputs:{onChange:"onChange",onSlideEnd:"onSlideEnd"},features:[X([De,T,{provide:le,useExisting:a},{provide:ie,useExisting:a}]),P([m]),j],decls:7,vars:7,consts:[["sliderHandle",""],["sliderHandleStart",""],["sliderHandleEnd",""],[3,"class","ngStyle","pBind",4,"ngIf"],["role","slider",3,"class","transition","ngStyle","pAutoFocus","pBind","touchstart","touchmove","touchend","mousedown","keydown",4,"ngIf"],["role","slider",3,"transition","class","ngStyle","pAutoFocus","pBind","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","slider",3,"transition","class","ngStyle","pBind","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],[3,"ngStyle","pBind"],["role","slider",3,"touchstart","touchmove","touchend","mousedown","keydown","ngStyle","pAutoFocus","pBind"],["role","slider",3,"keydown","mousedown","touchstart","touchmove","touchend","ngStyle","pAutoFocus","pBind"],["role","slider",3,"keydown","mousedown","touchstart","touchmove","touchend","ngStyle","pBind"]],template:function(i,t){i&1&&Q(0,xe,1,8,"span",3)(1,Ve,1,8,"span",3)(2,ve,1,7,"span",3)(3,we,1,7,"span",3)(4,ye,2,18,"span",4)(5,Se,2,18,"span",5)(6,Ce,2,17,"span",6),i&2&&(o("ngIf",t.range&&t.orientation=="horizontal"),p(),o("ngIf",t.range&&t.orientation=="vertical"),p(),o("ngIf",!t.range&&t.orientation=="vertical"),p(),o("ngIf",!t.range&&t.orientation=="horizontal"),p(),o("ngIf",!t.range),p(),o("ngIf",t.range),p(),o("ngIf",t.range))},dependencies:[G,U,q,ae,H,ne,m],encapsulation:2,changeDetection:0})}return a})(),Ge=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=$({type:a});static \u0275inj=N({imports:[oe,H,H]})}return a})();export{oe as a,Ge as b};
