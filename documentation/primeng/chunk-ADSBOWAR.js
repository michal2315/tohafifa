import{a as B,b as be}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as we}from"./chunk-FKOOMXTU.js";import{a as z}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as Ee}from"./chunk-XCUGNKAG.js";import{a as y,b as _e}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import{A as me,D as F,Ea as ve,Fa as N,Ia as xe,La as ye,Ma as ze,Na as D,Oa as k,U as de,_ as A,ba as ue,r as V,s as q,u as X}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as he,n as fe,q as ge,r as Se,w as T,y as W}from"./chunk-D2XKNHFS.js";import{$b as se,Eb as p,Fb as l,Gb as r,Gc as d,Hb as g,Lc as pe,Nb as le,Ob as re,Qa as c,R as J,Rc as ce,S as $,Sb as O,T as Z,Ub as S,V as ee,Va as H,X as L,Xb as U,Zb as G,Zc as Q,_b as K,aa as b,ba as P,bc as oe,fc as x,gb as m,gc as M,hb as te,hc as s,kb as ie,lb as ne,mb as f,oa as I,rc as ae,sc as h,wb as j}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Pe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["splitter-accessibility-doc"]],decls:53,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,n){i&1&&(l(0,"div")(1,"app-docsectiontext")(2,"h3"),s(3,"Screen Reader"),r(),l(4,"p"),s(5,"Splitter bar defines "),l(6,"i"),s(7,"separator"),r(),s(8," as the role with "),l(9,"i"),s(10,"aria-orientation"),r(),s(11," set to either horizontal or vertical."),r(),l(12,"h3"),s(13,"Keyboard Support"),r(),l(14,"div",0)(15,"table",1)(16,"thead")(17,"tr")(18,"th"),s(19,"Key"),r(),l(20,"th"),s(21,"Function"),r()()(),l(22,"tbody")(23,"tr")(24,"td")(25,"i"),s(26,"tab"),r()(),l(27,"td"),s(28,"Moves focus through the splitter bar."),r()(),l(29,"tr")(30,"td")(31,"i"),s(32,"down arrow"),r()(),l(33,"td"),s(34,"Moves a vertical splitter down."),r()(),l(35,"tr")(36,"td")(37,"i"),s(38,"up arrow"),r()(),l(39,"td"),s(40,"Moves a vertical splitter up."),r()(),l(41,"tr")(42,"td")(43,"i"),s(44,"left arrow"),r()(),l(45,"td"),s(46,"Moves a vertical splitter to the left."),r()(),l(47,"tr")(48,"td")(49,"i"),s(50,"right arrow"),r()(),l(51,"td"),s(52,"Moves a vertical splitter to the right."),r()()()()()()())},dependencies:[y],encapsulation:2})}return t})();var Te=`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
`;var Ne={root:({instance:t})=>["p-splitter p-component","p-splitter-"+t.layout],panel:({instance:t})=>["p-splitterpanel",{"p-splitterpanel-nested":t.nestedState()}],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},ke={root:({instance:t})=>[{display:"flex","flex-wrap":"nowrap"},t.layout==="vertical"?{"flex-direction":"column"}:""]},Y=(()=>{class t extends xe{name="splitter";style=Te;classes=Ne;inlineStyles=ke;static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(t)))(n||t)}})();static \u0275prov=$({token:t,factory:t.\u0275fac})}return t})();var Be=["panel"];function He(t,u){t&1&&le(0)}function Oe(t,u){if(t&1){let e=re();l(0,"div",4),O("mousedown",function(n){b(e);let o=S().index,a=S();return P(a.onGutterMouseDown(n,o))})("touchstart",function(n){b(e);let o=S().index,a=S();return P(a.onGutterTouchStart(n,o))})("touchmove",function(n){b(e);let o=S(2);return P(o.onGutterTouchMove(n))})("touchend",function(n){b(e);let o=S(2);return P(o.onGutterTouchEnd(n))}),l(1,"div",5),O("keyup",function(n){b(e);let o=S(2);return P(o.onGutterKeyUp(n))})("keydown",function(n){b(e);let o=S().index,a=S();return P(a.onGutterKeyDown(n,o))}),r()()}if(t&2){let e=S(2);M(e.cx("gutter")),p("pBind",e.ptm("gutter")),j("data-p-gutter-resizing",!1),c(),M(e.cx("gutterHandle")),p("pBind",e.ptm("gutterHandle"))("ngStyle",e.gutterStyle()),j("aria-orientation",e.layout)("aria-valuenow",e.prevSize)}}function Ue(t,u){if(t&1&&(l(0,"div",1),f(1,He,1,0,"ng-container",2),r(),f(2,Oe,2,10,"div",3)),t&2){let e=u.$implicit,i=u.index,n=S();M(n.cn(n.cx("panel"),n.panelStyleClass)),p("pBind",n.ptm("panel"))("ngStyle",n.panelStyle),c(),p("ngTemplateOutlet",e),c(),p("ngIf",i!==n.panels.length-1)}}var De=new ee("SPLITTER_INSTANCE"),v=(()=>{class t extends ze{$pcSplitter=L(De,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=L(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;panelStyleClass;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(e){if(this._panelSizes=e,this.el&&this.el.nativeElement&&this.panels.length>0){let i=[...this.el.nativeElement.children].filter(o=>V(o,"p-splitterpanel")),n=[];this.panels.map((o,a)=>{let C=(this.panelSizes.length-1>=a?this.panelSizes[a]:null)||100/this.panels.length;n[a]=C,i[a].style.flexBasis="calc("+C+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new H;onResizeStart=new H;templates;panelChildren;splitter=ce(J(()=>t));nestedState=pe(()=>this.splitter());panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=L(Y);onAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(e=>{switch(e.getType()){case"panel":this.panels.push(e.template);break;default:this.panels.push(e.template);break}}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(e=>{this.panels.push(e)})}onAfterViewInit(){if(W(this.platformId)&&this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let i=[...this.el.nativeElement.children].filter(o=>V(o,"p-splitterpanel")),n=[];this.panels.map((o,a)=>{let C=(this.panelSizes.length-1>=a?this.panelSizes[a]:null)||100/this.panels.length;n[a]=C,i[a].style.flexBasis="calc("+C+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=n,this.prevSize=parseFloat(n[0]).toFixed(4)}}}resizeStart(e,i,n){this.gutterElement=e.currentTarget||e.target.parentElement,this.size=this.horizontal()?ue(this.el.nativeElement):de(this.el.nativeElement),n||(this.dragging=!0,this.startPos=this.horizontal()?e instanceof MouseEvent?e.pageX:e.changedTouches[0].pageX:e instanceof MouseEvent?e.pageY:e.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,n?(this.prevPanelSize=this.horizontal()?F(this.prevPanelElement,!0):A(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?F(this.nextPanelElement,!0):A(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?F(this.prevPanelElement,!0):A(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?F(this.nextPanelElement,!0):A(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=i,q(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),q(this.el.nativeElement,"p-splitter-resizing"),this.el.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e,i,n){let o,a,w;n?this.horizontal()?(a=100*((this.prevPanelSize??0)+(i??0))/(this.size??1),w=100*((this.nextPanelSize??0)-(i??0))/(this.size??1)):(a=100*((this.prevPanelSize??0)-(i??0))/(this.size??1),w=100*((this.nextPanelSize??0)+(i??0))/(this.size??1)):(this.horizontal()?me(this.el.nativeElement)?o=((this.startPos??0)-e.pageX)*100/(this.size??1):o=(e.pageX-(this.startPos??0))*100/(this.size??1):o=(e.pageY-(this.startPos??0))*100/(this.size??1),a=this.prevPanelSize+o,w=this.nextPanelSize-o),this.prevSize=parseFloat(a).toFixed(4),this.validateResize(a,w)&&(this.prevPanelElement.style.flexBasis="calc("+a+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+w+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=a,this._panelSizes[this.prevPanelIndex+1]=w)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),X(this.gutterElement,"p-splitter-gutter-resizing"),X(this.el.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(e,i){this.resizeStart(e,i),this.bindMouseListeners()}onGutterTouchStart(e,i){e.cancelable&&(this.resizeStart(e,i),this.bindTouchListeners(),e.preventDefault())}onGutterTouchMove(e){this.onResize(e),e.preventDefault()}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}repeat(e,i,n){this.resizeStart(e,i,!0),this.onResize(e,n,!0)}setTimer(e,i,n){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,i,n)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(e){this.clearTimer(),this.resizeEnd(e)}onGutterKeyDown(e,i){switch(e.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(e,i,this.step*-1),e.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(e,i,this.step),e.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(e,i,this.step*-1),e.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(e,i,this.step),e.preventDefault();break}default:break}}validateResize(e,i){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>e||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>i)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",e=>{this.onResize(e)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",e=>{this.resizeEnd(e),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",e=>{this.onResize(e.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",e=>{this.resizeEnd(e),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isStateful(){return this.stateKey!=null}getStorage(){if(W(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView?.localStorage;case"session":return this.document.defaultView?.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage()?.setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let i=this.getStorage()?.getItem(this.stateKey);return i?(this._panelSizes=JSON.parse(i),[...this.el.nativeElement.children].filter(o=>V(o,"p-splitterpanel")).forEach((o,a)=>{o.style.flexBasis="calc("+this._panelSizes[a]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=I(t)))(n||t)}})();static \u0275cmp=m({type:t,selectors:[["p-splitter"]],contentQueries:function(i,n,o){if(i&1&&(se(o,n.splitter,t,5),U(o,ve,4),U(o,Be,4)),i&2){oe();let a;G(a=K())&&(n.templates=a),G(a=K())&&(n.panelChildren=a)}},hostVars:3,hostBindings:function(i,n){i&2&&(j("data-p-gutter-resizing",!1),M(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",Q],step:[2,"step","step",Q],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[ae([Y,{provide:De,useExisting:t},{provide:ye,useExisting:t}]),ne([D]),ie],decls:1,vars:1,consts:[["ngFor","",3,"ngForOf"],["tabindex","-1",3,"pBind","ngStyle"],[4,"ngTemplateOutlet"],["role","separator","tabindex","-1",3,"pBind","class","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend","pBind"],["tabindex","0",3,"keyup","keydown","pBind","ngStyle"]],template:function(i,n){i&1&&f(0,Ue,3,6,"ng-template",0),i&2&&p("ngForOf",n.panels)},dependencies:[T,he,fe,Se,ge,N,k,D],encapsulation:2,changeDetection:0})}return t})(),E=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=Z({imports:[v,N,k,N,k]})}return t})();var Ge=()=>({height:"300px"});function Ke(t,u){t&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function Qe(t,u){t&1&&(l(0,"div",4),s(1,"Panel 2"),r())}var Ce=(()=>{class t{code={basic:`<p-splitter [style]="{ height: '300px' }" class="mb-8">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [style]="{ height: '300px' }" class="mb-8">
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 2</div>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-horizontal-demo',
    templateUrl: './splitter-horizontal-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterHorizontalDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["horizontal-doc"]],decls:10,vars:4,consts:[["panel",""],[1,"card"],[1,"mb-8"],["selector","splitter-horizontal-demo",3,"code"],[1,"flex","items-center","justify-center","h-full"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Splitter requires two SplitterPanel components as children which are displayed horizontally by default."),r()(),l(3,"div",1)(4,"p-splitter",2),f(5,Ke,2,0,"ng-template",null,0,d)(7,Qe,2,0,"ng-template",null,0,d),r()(),g(9,"app-code",3)),i&2&&(c(4),x(h(3,Ge)),c(5),p("code",n.code))},dependencies:[y,E,v,z],encapsulation:2})}return t})();var Me=(()=>{class t{code={typescript:"import { SplitterModule } from 'primeng/splitter';"};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["splitter-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&g(0,"app-code",0),i&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[z],encapsulation:2})}return t})();var qe=()=>({height:"300px"}),Fe=()=>[20,80],Xe=()=>[10,0],We=()=>[50,50];function Ye(t,u){t&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function Je(t,u){t&1&&(l(0,"div",6),s(1,"Panel 2"),r())}function $e(t,u){t&1&&(l(0,"div",8),s(1,"Panel 3"),r())}function Ze(t,u){t&1&&(l(0,"div",8),s(1,"Panel 4"),r())}function et(t,u){t&1&&(l(0,"p-splitter",7),f(1,$e,2,0,"ng-template",null,0,d)(3,Ze,2,0,"ng-template",null,0,d),r()),t&2&&p("panelSizes",h(1,Fe))}function tt(t,u){t&1&&(l(0,"p-splitter",5),f(1,Je,2,0,"ng-template",null,0,d)(3,et,5,2,"ng-template",null,0,d),r()),t&2&&p("panelSizes",h(1,We))}var Ae=(()=>{class t{code={basic:`<p-splitter [style]="{ height: '300px' }" [panelSizes]="[20, 80]" [minSizes]="[10, 0]" class="mb-8">
    <ng-template #panel>
        <div class="col flex w-full items-center justify-center">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <p-splitter layout="vertical" [panelSizes]="[50, 50]">
            <ng-template #panel>
                <div style="flex-grow: 1;" class="flex items-center justify-center">Panel 2</div>
            </ng-template>
            <ng-template #panel>
                <p-splitter [panelSizes]="[20, 80]">
                    <ng-template #panel>
                        <div class="col h-full flex items-center justify-center">Panel 3</div>
                    </ng-template>
                    <ng-template #panel>
                        <div class="col h-full flex items-center justify-center">Panel 4</div>
                    </ng-template>
                </p-splitter>
            </ng-template>
        </p-splitter>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [style]="{ height: '300px' }" [panelSizes]="[20, 80]" [minSizes]="[10, 0]" class="mb-8">
        <ng-template #panel>
            <div class="col flex w-full items-center justify-center">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <p-splitter layout="vertical" [panelSizes]="[50, 50]">
                <ng-template #panel>
                    <div style="flex-grow: 1;" class="flex items-center justify-center">Panel 2</div>
                </ng-template>
                <ng-template #panel>
                    <p-splitter [panelSizes]="[20, 80]">
                        <ng-template #panel>
                            <div class="col h-full flex items-center justify-center">Panel 3</div>
                        </ng-template>
                        <ng-template #panel>
                            <div class="col h-full flex items-center justify-center">Panel 4</div>
                        </ng-template>
                    </p-splitter>
                </ng-template>
            </p-splitter>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-nested-demo',
    templateUrl: './splitter-nested-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterNestedDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["nested-doc"]],decls:10,vars:8,consts:[["panel",""],[1,"card"],[1,"mb-8",3,"panelSizes","minSizes"],["selector","splitter-nested-demo",3,"code"],[1,"col","flex","w-full","items-center","justify-center"],["layout","vertical",3,"panelSizes"],[1,"flex","items-center","justify-center",2,"flex-grow","1"],[3,"panelSizes"],[1,"col","h-full","flex","items-center","justify-center"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Splitters can be combined to create advanced layouts."),r()(),l(3,"div",1)(4,"p-splitter",2),f(5,Ye,2,0,"ng-template",null,0,d)(7,tt,5,2,"ng-template",null,0,d),r()(),g(9,"app-code",3)),i&2&&(c(4),x(h(5,qe)),p("panelSizes",h(6,Fe))("minSizes",h(7,Xe)),c(5),p("code",n.code))},dependencies:[y,E,v,z],encapsulation:2})}return t})();var it=()=>({height:"300px"}),nt=()=>[25,75];function lt(t,u){t&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function rt(t,u){t&1&&(l(0,"div",4),s(1,"Panel 2"),r())}var Re=(()=>{class t{code={basic:`<p-splitter [panelSizes]="[25, 75]" [style]="{ height: '300px' }" class="mb-8">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [panelSizes]="[25, 75]" [style]="{ height: '300px' }" class="mb-8">
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 2</div>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-size-demo',
    templateUrl: './splitter-size-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterSizeDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["size-doc"]],decls:13,vars:6,consts:[["panel",""],[1,"card"],[1,"mb-8",3,"panelSizes"],["selector","splitter-size-demo",3,"code"],[1,"flex","items-center","justify-center","h-full"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"When no panelSizes are defined, panels are split 50/50, use the "),l(3,"i"),s(4,"panelSizes"),r(),s(5," property to give relative widths e.g. [25, 75]."),r()(),l(6,"div",1)(7,"p-splitter",2),f(8,lt,2,0,"ng-template",null,0,d)(10,rt,2,0,"ng-template",null,0,d),r()(),g(12,"app-code",3)),i&2&&(c(7),x(h(4,it)),p("panelSizes",h(5,nt)),c(5),p("code",n.code))},dependencies:[y,E,v,z],encapsulation:2})}return t})();var st=()=>({height:"300px"}),ot=()=>[50,50];function at(t,u){t&1&&(l(0,"div",4),s(1,"Panel 1"),r())}function pt(t,u){t&1&&(l(0,"div",4),s(1,"Panel 2"),r())}var Le=(()=>{class t{code={basic:`<p-splitter [style]="{ height: '300px' }" class="mb-8" layout="vertical">
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 1</div>
    </ng-template>
    <ng-template #panel>
        <div class="flex items-center justify-center h-full">Panel 2</div>
    </ng-template>
</p-splitter>`,html:`<div class="card">
    <p-splitter [style]="{ height: '300px' }" class="mb-8" layout="vertical">
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 1</div>
        </ng-template>
        <ng-template #panel>
            <div class="flex items-center justify-center h-full">Panel 2</div>
        </ng-template>
    </p-splitter>
</div>`,typescript:`import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
    selector: 'splitter-vertical-demo',
    templateUrl: './splitter-vertical-demo.html',
    standalone: true,
    imports: [SplitterModule]
})
export class SplitterVerticalDemo {}`};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["vertical-doc"]],decls:16,vars:6,consts:[["panel",""],[1,"card"],["layout","vertical",1,"mb-8",3,"panelSizes"],["selector","splitter-vertical-demo",3,"code"],[1,"flex","items-center","justify-center","h-full"]],template:function(i,n){i&1&&(l(0,"app-docsectiontext")(1,"p"),s(2,"Panels are displayed as stacked by setting the "),l(3,"i"),s(4,"layout"),r(),s(5," to "),l(6,"i"),s(7,"vertical"),r(),s(8,"."),r()(),l(9,"div",1)(10,"p-splitter",2),f(11,at,2,0,"ng-template",null,0,d)(13,pt,2,0,"ng-template",null,0,d),r()(),g(15,"app-code",3)),i&2&&(c(10),x(h(4,st)),p("panelSizes",h(5,ot)),c(5),p("code",n.code))},dependencies:[y,E,v,z],encapsulation:2})}return t})();var ct=()=>({height:"300px"});function mt(t,u){t&1&&(l(0,"div",3),s(1,"Panel 1"),r())}function dt(t,u){t&1&&(l(0,"div",3),s(1,"Panel 2"),r())}var Ie=(()=>{class t{docs=[{data:B("Splitter"),key:"Splitter"}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["splitter-pt-viewer"]],decls:6,vars:4,consts:[["panel",""],[3,"docs"],[1,"w-full"],[1,"flex","items-center","justify-center","h-full"]],template:function(i,n){i&1&&(l(0,"app-docptviewer",1)(1,"p-splitter",2),f(2,mt,2,0,"ng-template",null,0,d)(4,dt,2,0,"ng-template",null,0,d),r()()),i&2&&(p("docs",n.docs),c(),x(h(3,ct)))},dependencies:[T,be,E,v],encapsulation:2})}return t})();var je=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:Ie},{id:"pt.doc.splitter",label:"Splitter PT Options",component:_e,data:B("Splitter")}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["splitter-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Splitter Pass Through"),r()(),g(4,"app-docsection",2),r()),i&2&&(c(4),p("docs",n.docs))},dependencies:[T,Ee],encapsulation:2})}return t})();var ut=()=>["Splitter"],Ve=(()=>{class t{ptComponent=je;docs=[{id:"import",label:"Import",component:Me},{id:"horizontal",label:"Horizontal",component:Ce},{id:"size",label:"Size",component:Re},{id:"vertical",label:"Vertical",component:Le},{id:"nested",label:"Nested",component:Ae},{id:"accessibility",label:"Accessibility",component:Pe}];static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Splitter Component","header","Splitter","description","Splitter is utilized to separate and resize panels.","themeDocs","splitter",3,"docs","apiDocs","ptDocs"]],template:function(i,n){i&1&&g(0,"app-doc",0),i&2&&p("docs",n.docs)("apiDocs",h(3,ut))("ptDocs",n.ptComponent)},dependencies:[we],encapsulation:2})}return t})();var Pi=[{path:"",component:Ve}];export{Pi as default};
