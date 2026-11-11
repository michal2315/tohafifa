import{Ea as te,Fa as L,Ia as ie,La as ne,Ma as oe,Na as b,Oa as V,U as $,ma as Z,s as d,u as w}from"./chunk-UOUHADUB.js";import{r as G,w as J,y as ee}from"./chunk-D2XKNHFS.js";import{Ab as N,Eb as h,Fb as B,Gb as M,Nb as Q,Ob as q,Qa as p,S as x,Sb as _,T as F,V as P,Vb as W,Wa as X,Wb as j,X as y,Xb as E,Yb as C,Zb as u,Zc as O,_b as m,aa as l,ba as a,gb as Y,gc as f,hb as z,kb as R,lb as I,mb as H,oa as g,rc as K,wb as D,zb as U}from"./chunk-O3KMSE75.js";var re=`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`;var pe=`
    ${re}

    .p-scrollpanel {
        display: block;
    }
`,he={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},S=(()=>{class r extends ie{name="scrollpanel";style=pe;classes=he;static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(r)))(t||r)}})();static \u0275prov=x({token:r,factory:r.\u0275fac})}return r})();var se=["content"],ue=["xBar"],me=["yBar"],fe=["*"];function we(r,ae){r&1&&j(0)}function be(r,ae){r&1&&Q(0)}var le=new P("SCROLLPANEL_INSTANCE"),ve=(()=>{class r extends oe{$pcScrollPanel=y(le,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(b,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;step=5;contentViewChild;xBarViewChild;yBarViewChild;contentTemplate;templates;_contentTemplate;scrollYRatio;scrollXRatio;timeoutFrame=e=>setTimeout(e,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;lastScrollLeft=0;lastScrollTop=0;orientation="vertical";timer;contentId;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;_componentStyle=y(S);zone=y(X);onInit(){this.contentId=Z("pn_id_")+"_content"}onAfterViewInit(){ee(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}calculateContainerHeight(){let e=this.el.nativeElement,i=this.contentViewChild.nativeElement,t=this.xBarViewChild.nativeElement,n=this.document.defaultView,o=n.getComputedStyle(e),s=n.getComputedStyle(t),c=$(e)-parseInt(s.height,10);o["max-height"]!="none"&&c==0&&(i.offsetHeight+parseInt(s.height,10)>parseInt(o["max-height"],10)?e.style.height=o["max-height"]:e.style.height=i.offsetHeight+parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth)+"px")}moveBar(){let e=this.el.nativeElement,i=this.contentViewChild.nativeElement,t=this.xBarViewChild.nativeElement,n=i.scrollWidth,o=i.clientWidth,s=(e.clientHeight-t.clientHeight)*-1;this.scrollXRatio=o/n;let c=this.yBarViewChild.nativeElement,k=i.scrollHeight,A=i.clientHeight,ce=(e.clientWidth-c.clientWidth)*-1;this.scrollYRatio=A/k,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)t.setAttribute("data-p-scrollpanel-hidden","true"),d(t,"p-scrollpanel-hidden");else{t.setAttribute("data-p-scrollpanel-hidden","false"),w(t,"p-scrollpanel-hidden");let v=Math.max(this.scrollXRatio*100,10),T=Math.abs(i.scrollLeft*(100-v)/(n-o));t.style.cssText="width:"+v+"%; inset-inline-start:"+T+"%;bottom:"+s+"px;"}if(this.scrollYRatio>=1)c.setAttribute("data-p-scrollpanel-hidden","true"),d(c,"p-scrollpanel-hidden");else{c.setAttribute("data-p-scrollpanel-hidden","false"),w(c,"p-scrollpanel-hidden");let v=Math.max(this.scrollYRatio*100,10),T=i.scrollTop*(100-v)/(k-A);c.style.cssText="height:"+v+"%; top: calc("+T+"% - "+t.clientHeight+"px); inset-inline-end:"+ce+"px;"}}),this.cd.markForCheck()}onScroll(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()}onKeyDown(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}default:break}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}default:break}}onKeyUp(){this.clearTimer()}repeat(e,i){this.contentViewChild?.nativeElement&&(this.contentViewChild.nativeElement[e]+=i),this.moveBar()}setTimer(e,i){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,i)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}bindDocumentMouseListeners(){this.documentMouseMoveListener||(this.documentMouseMoveListener=e=>{this.onDocumentMouseMove(e)},this.document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=e=>{this.onDocumentMouseUp(e)},this.document.addEventListener("mouseup",this.documentMouseUpListener))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)}onYBarMouseDown(e){this.isYBarClicked=!0,this.yBarViewChild?.nativeElement?.focus(),this.lastPageY=e.pageY,this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","true"),d(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","true"),d(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onXBarMouseDown(e){this.isXBarClicked=!0,this.xBarViewChild?.nativeElement?.focus(),this.lastPageX=e.pageX,this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),d(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),d(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onDocumentMouseMove(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))}onMouseMoveForXBar(e){let i=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=i/this.scrollXRatio})}onMouseMoveForYBar(e){let i=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=i/this.scrollYRatio})}scrollTop(e){let i=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;e=e>i?i:e>0?e:0,this.contentViewChild.nativeElement.scrollTop=e}onFocus(e){this.xBarViewChild?.nativeElement?.isSameNode(e.target)?this.orientation="horizontal":this.yBarViewChild?.nativeElement?.isSameNode(e.target)&&(this.orientation="vertical")}onBlur(){this.orientation==="horizontal"&&(this.orientation="vertical")}onDocumentMouseUp(e){this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),w(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),w(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),w(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(e){(window.requestAnimationFrame||this.timeoutFrame)(e)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}onDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(r)))(t||r)}})();static \u0275cmp=Y({type:r,selectors:[["p-scroll-panel"],["p-scrollPanel"],["p-scrollpanel"]],contentQueries:function(i,t,n){if(i&1&&(E(n,se,4),E(n,te,4)),i&2){let o;u(o=m())&&(t.contentTemplate=o.first),u(o=m())&&(t.templates=o)}},viewQuery:function(i,t){if(i&1&&(C(se,5),C(ue,5),C(me,5)),i&2){let n;u(n=m())&&(t.contentViewChild=n.first),u(n=m())&&(t.xBarViewChild=n.first),u(n=m())&&(t.yBarViewChild=n.first)}},hostVars:2,hostBindings:function(i,t){i&2&&f(t.cn(t.cx("root"),t.styleClass))},inputs:{styleClass:"styleClass",step:[2,"step","step",O]},features:[K([S,{provide:le,useExisting:r},{provide:ne,useExisting:r}]),I([b]),R],ngContentSelectors:fe,decls:9,vars:20,consts:[["content",""],["xBar",""],["yBar",""],[3,"pBind"],[3,"mouseenter","scroll","pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","scrollbar",3,"mousedown","keydown","keyup","focus","blur","pBind"],["tabindex","0","role","scrollbar",3,"mousedown","keydown","keyup","focus","pBind"]],template:function(i,t){if(i&1){let n=q();W(),B(0,"div",3)(1,"div",4,0),_("mouseenter",function(){return l(n),a(t.moveBar())})("scroll",function(s){return l(n),a(t.onScroll(s))}),U(3,we,1,0),H(4,be,1,0,"ng-container",5),M()(),B(5,"div",6,1),_("mousedown",function(s){return l(n),a(t.onXBarMouseDown(s))})("keydown",function(s){return l(n),a(t.onKeyDown(s))})("keyup",function(){return l(n),a(t.onKeyUp())})("focus",function(s){return l(n),a(t.onFocus(s))})("blur",function(){return l(n),a(t.onBlur())}),M(),B(7,"div",7,2),_("mousedown",function(s){return l(n),a(t.onYBarMouseDown(s))})("keydown",function(s){return l(n),a(t.onKeyDown(s))})("keyup",function(){return l(n),a(t.onKeyUp())})("focus",function(s){return l(n),a(t.onFocus(s))}),M()}i&2&&(f(t.cx("contentContainer")),h("pBind",t.ptm("contentContainer")),p(),f(t.cx("content")),h("pBind",t.ptm("content")),p(2),N(!t.contentTemplate&&!t._contentTemplate?3:-1),p(),h("ngTemplateOutlet",t.contentTemplate||t._contentTemplate),p(),f(t.cx("barX")),h("pBind",t.ptm("barX")),D("aria-orientation","horizontal")("aria-valuenow",t.lastScrollLeft)("aria-controls",t.contentId),p(2),f(t.cx("barY")),h("pBind",t.ptm("barY")),D("aria-orientation","vertical")("aria-valuenow",t.lastScrollTop)("aria-controls",t.contentId))},dependencies:[J,G,L,V,b],encapsulation:2,changeDetection:0})}return r})(),He=(()=>{class r{static \u0275fac=function(i){return new(i||r)};static \u0275mod=z({type:r});static \u0275inj=F({imports:[ve,L,V,L,V]})}return r})();export{ve as a,He as b};
