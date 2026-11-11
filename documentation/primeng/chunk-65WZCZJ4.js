import{a as A,b as te}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as ee}from"./chunk-FKOOMXTU.js";import{a as u,b as h}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as Z}from"./chunk-XCUGNKAG.js";import{a as C,b as Y}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import{Ea as H,Fa as M,Ia as K,La as J,Ma as W,Na as x,Oa as X}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{r as U,w as y,y as G}from"./chunk-D2XKNHFS.js";import{Eb as p,Fb as a,Gb as i,Gc as g,Hb as m,Qa as l,S as P,Sb as Q,T as B,V as F,X as D,Xb as E,Zb as S,_b as _,gb as c,gc as j,hb as O,hc as o,kb as L,lb as N,mb as s,oa as I,rc as $,sc as q,wb as V}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ie=(()=>{class e{code={typescript:"import { ImageCompareModule } from 'primeng/imagecompare';"};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["image-compare-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,n){t&1&&m(0,"app-code",0),t&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[h,u],encapsulation:2})}return e})();var oe=`
    .p-imagecompare {
        position: relative;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    .p-imagecompare img {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .p-imagecompare img + img {
        clip-path: polygon(0 0, dt('imagecompare.scope.x', '50%') 0, dt('imagecompare.scope.x', '50%') 100%, 0 100%);
    }

    .p-imagecompare:dir(rtl) img + img {
        clip-path: polygon(calc(100% - dt('imagecompare.scope.x', '50%')) 0, 100% 0, 100% 100%, calc(100% - dt('imagecompare.scope.x', '50%')) 100%);
    }

    .p-imagecompare-slider {
        position: relative;
        -webkit-appearance: none;
        width: calc(100% + dt('imagecompare.handle.size'));
        height: 100%;
        margin-inline-start: calc(-1 * calc(dt('imagecompare.handle.size') / 2));
        background-color: transparent;
        outline: none;
        transition: all dt('imagecompare.handle.transition.duration');
    }

    .p-imagecompare-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: dt('imagecompare.handle.size');
        width: dt('imagecompare.handle.size');
        background: dt('imagecompare.handle.background');
        border: dt('imagecompare.handle.border.width') solid dt('imagecompare.handle.border.color');
        border-radius: dt('imagecompare.handle.border.radius');
        background-size: contain;
        cursor: ew-resize;
        transition: all dt('imagecompare.handle.transition.duration');
    }

    .p-imagecompare-slider::-moz-range-thumb {
        height: dt('imagecompare.handle.size');
        width: dt('imagecompare.handle.size');
        background: dt('imagecompare.handle.background');
        border: dt('imagecompare.handle.border.width') dt('imagecompare.handle.border.style') dt('imagecompare.handle.border.color');
        border-radius: dt('imagecompare.handle.border.radius');
        background-size: contain;
        cursor: ew-resize;
    }

    .p-imagecompare-slider:focus-visible::-webkit-slider-thumb {
        box-shadow: dt('imagecompare.handle.focus.ring.shadow');
        outline: dt('imagecompare.handle.focus.ring.width') dt('imagecompare.handle.focus.ring.style') dt('imagecompare.handle.focus.ring.color');
        outline-offset: dt('imagecompare.handle.focus.ring.offset');
    }

    .p-imagecompare-slider:focus-visible::-moz-range-thumb {
        box-shadow: dt('imagecompare.handle.focus.ring.shadow');
        outline: dt('imagecompare.handle.focus.ring.width') dt('imagecompare.handle.focus.ring.style') dt('imagecompare.handle.focus.ring.color');
        outline-offset: dt('imagecompare.handle.focus.ring.offset');
    }

    .p-imagecompare-slider:hover {
        width: calc(100% + dt('imagecompare.handle.hover.size'));
        margin-inline-start: calc(-1 * calc(dt('imagecompare.handle.hover.size') / 2));
    }

    .p-imagecompare-slider:hover::-webkit-slider-thumb {
        background: dt('imagecompare.handle.hover.background');
        border-color: dt('imagecompare.handle.hover.border.color');
        height: dt('imagecompare.handle.hover.size');
        width: dt('imagecompare.handle.hover.size');
    }

    .p-imagecompare-slider:hover::-moz-range-thumb {
        background: dt('imagecompare.handle.hover.background');
        border-color: dt('imagecompare.handle.hover.border.color');
        height: dt('imagecompare.handle.hover.size');
        width: dt('imagecompare.handle.hover.size');
    }
`;var se={root:"p-imagecompare",slider:"p-imagecompare-slider"},R=(()=>{class e extends K{name="imagecompare";style=oe;classes=se;static \u0275fac=(()=>{let r;return function(n){return(r||(r=I(e)))(n||e)}})();static \u0275prov=P({token:e,factory:e.\u0275fac})}return e})();var de=["left"],ge=["right"];function fe(e,d){}function ue(e,d){e&1&&s(0,fe,0,0,"ng-template")}function he(e,d){}function be(e,d){e&1&&s(0,he,0,0,"ng-template")}var ae=new F("IMAGECOMPARE_INSTANCE"),v=(()=>{class e extends W{$pcImageCompare=D(ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(x,{self:!0});tabindex;ariaLabelledby;ariaLabel;leftTemplate;rightTemplate;_leftTemplate;_rightTemplate;templates;_componentStyle=D(R);mutationObserver;isRTL=!1;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onInit(){this.updateDirection(),this.observeDirectionChanges()}onAfterContentInit(){this.templates?.forEach(r=>{switch(r.getType()){case"left":this._leftTemplate=r.template;break;case"right":this._rightTemplate=r.template;break}})}onSlide(r){let t=r.target.value,n=r.target.previousElementSibling;this.isRTL?n.style.clipPath=`polygon(${100-t}% 0, 100% 0, 100% 100%, ${100-t}% 100%)`:n.style.clipPath=`polygon(0 0, ${t}% 0, ${t}% 100%, 0 100%)`}updateDirection(){this.isRTL=!!this.el.nativeElement.closest('[dir="rtl"]')}observeDirectionChanges(){if(G(this.platformId)){let r=document?.documentElement,t={attributes:!0,attributeFilter:["dir"]};this.mutationObserver=new MutationObserver(()=>{this.updateDirection()}),this.mutationObserver.observe(r,t)}}onDestroy(){this.mutationObserver&&this.mutationObserver.disconnect()}static \u0275fac=(()=>{let r;return function(n){return(r||(r=I(e)))(n||e)}})();static \u0275cmp=c({type:e,selectors:[["p-imageCompare"],["p-imagecompare"],["p-image-compare"]],contentQueries:function(t,n,T){if(t&1&&(E(T,de,4),E(T,ge,4),E(T,H,4)),t&2){let f;S(f=_())&&(n.leftTemplate=f.first),S(f=_())&&(n.rightTemplate=f.first),S(f=_())&&(n.templates=f)}},hostVars:5,hostBindings:function(t,n){t&2&&(V("tabindex",n.tabindex)("aria-labelledby",n.ariaLabelledby)("aria-label",n.ariaLabel),j(n.cx("root")))},inputs:{tabindex:"tabindex",ariaLabelledby:"ariaLabelledby",ariaLabel:"ariaLabel"},features:[$([R,{provide:ae,useExisting:e},{provide:J,useExisting:e}]),N([x]),L],decls:3,vars:5,consts:[[4,"ngTemplateOutlet"],["type","range","min","0","max","100","value","50",3,"input","pBind"]],template:function(t,n){t&1&&(s(0,ue,1,0,null,0)(1,be,1,0,null,0),a(2,"input",1),Q("input",function(f){return n.onSlide(f)}),i()),t&2&&(p("ngTemplateOutlet",n.leftTemplate||n._leftTemplate),l(),p("ngTemplateOutlet",n.rightTemplate||n._rightTemplate),l(),j(n.cx("slider")),p("pBind",n.ptm("slider")))},dependencies:[y,U,M,X,x],encapsulation:2,changeDetection:0})}return e})(),w=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=O({type:e});static \u0275inj=B({imports:[v,M,M]})}return e})();function ve(e,d){e&1&&m(0,"img",5)}function ye(e,d){e&1&&m(0,"img",6)}var ne=(()=>{class e{code={basic:`<p-imagecompare class="shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>`,html:`<div class="card flex justify-center">
    <p-imagecompare class="shadow-lg rounded-2xl">
        <ng-template #left>
            <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island1.jpg" />
        </ng-template>
        <ng-template #right>
            <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island2.jpg" />
        </ng-template>
    </p-imagecompare>
</div>`,typescript:`import { Component } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
    selector: 'image-compare-basic-demo',
    templateUrl: './image-compare-basic-demo.html',
    standalone: true,
    imports: [ImageCompareModule]
})
export class ImageCompareBasicDemo {
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["basic-doc"]],decls:22,vars:1,consts:[["left",""],["right",""],[1,"card","flex","justify-center"],[1,"shadow-lg","rounded-2xl"],["selector","image-compare-basic-demo",3,"code"],["src","/_ext/primefaces.org/cdn/primevue/images/compare/island1.jpg"],["src","/_ext/primefaces.org/cdn/primevue/images/compare/island2.jpg"]],template:function(t,n){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Images are defined using templating with "),a(3,"i"),o(4,"left"),i(),o(5," and "),a(6,"i"),o(7,"right"),i(),o(8," templates. Use the "),a(9,"i"),o(10,"style"),i(),o(11," or "),a(12,"i"),o(13,"class"),i(),o(14," properties to define the size of the container."),i()(),a(15,"div",2)(16,"p-imagecompare",3),s(17,ve,1,0,"ng-template",null,0,g)(19,ye,1,0,"ng-template",null,1,g),i()(),m(21,"app-code",4)),t&2&&(l(21),p("code",n.code))},dependencies:[C,h,u,w,v],encapsulation:2})}return e})();var re=(()=>{class e{code={html:`<span id="image_label">Compare Images</span>
<p-imagecompare class="shadow-lg rounded-2xl" aria-labelledby="image-label">
    ...
</p-imagecompare>

<p-imagecompare class="shadow-lg rounded-2xl" aria-label="Compare Images">
    ...
</p-imagecompare>`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["image-compare-accessibility-doc"]],decls:75,vars:2,consts:[["id","accessibility","label","Accessibility"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-col"],[1,"mb-1"]],template:function(t,n){t&1&&(a(0,"div")(1,"app-docsectiontext",0)(2,"h3"),o(3,"Screen Reader"),i(),a(4,"p"),o(5,"ImageComponent component uses a native range "),a(6,"i"),o(7,"slider"),i(),o(8," internally. Value to describe the component can be defined using "),a(9,"i"),o(10,"aria-labelledby"),i(),o(11," and "),a(12,"i"),o(13,"aria-label"),i(),o(14," props."),i(),m(15,"app-code",1),a(16,"h3"),o(17,"Keyboard Support"),i(),a(18,"div",2)(19,"table",3)(20,"thead")(21,"tr")(22,"th"),o(23,"Key"),i(),a(24,"th"),o(25,"Function"),i()()(),a(26,"tbody")(27,"tr")(28,"td")(29,"i"),o(30,"tab"),i()(),a(31,"td"),o(32,"Moves focus to the component."),i()(),a(33,"tr")(34,"td")(35,"span",4)(36,"i",5),o(37,"left arrow"),i(),a(38,"i"),o(39,"up arrow"),i()()(),a(40,"td"),o(41,"Decrements the value."),i()(),a(42,"tr")(43,"td")(44,"span",4)(45,"i",5),o(46,"right arrow"),i(),a(47,"i"),o(48,"down arrow"),i()()(),a(49,"td"),o(50,"Increments the value."),i()(),a(51,"tr")(52,"td")(53,"i"),o(54,"home"),i()(),a(55,"td"),o(56,"Set the minimum value."),i()(),a(57,"tr")(58,"td")(59,"i"),o(60,"end"),i()(),a(61,"td"),o(62,"Set the maximum value."),i()(),a(63,"tr")(64,"td")(65,"i"),o(66,"page up"),i()(),a(67,"td"),o(68,"Increments the value by 10 steps."),i()(),a(69,"tr")(70,"td")(71,"i"),o(72,"page down"),i()(),a(73,"td"),o(74,"Decrements the value by 10 steps."),i()()()()()()()),t&2&&(l(15),p("code",n.code)("hideToggleCode",!0))},dependencies:[C,h,u],encapsulation:2})}return e})();function xe(e,d){e&1&&m(0,"img",3)}function Ce(e,d){e&1&&m(0,"img",4)}var me=(()=>{class e{docs=[{data:A("ImageCompare"),key:"ImageCompare"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["imagecompare-pt-viewer"]],decls:6,vars:1,consts:[["left",""],["right",""],[3,"docs"],["src","/_ext/primefaces.org/cdn/primevue/images/compare/island1.jpg"],["src","/_ext/primefaces.org/cdn/primevue/images/compare/island2.jpg"]],template:function(t,n){t&1&&(a(0,"app-docptviewer",2)(1,"p-imagecompare"),s(2,xe,1,0,"ng-template",null,0,g)(4,Ce,1,0,"ng-template",null,1,g),i()()),t&2&&p("docs",n.docs)},dependencies:[y,te,w,v],encapsulation:2})}return e})();var pe=(()=>{class e{docs=[{id:"pt.viewer",label:"Viewer",component:me},{id:"pt.doc.imagecompare",label:"ImageCompare PT Options",component:Y,data:A("ImageCompare")}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["imagecompare-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1)(2,"h1"),o(3,"ImageCompare Pass Through"),i()(),m(4,"app-docsection",2),i()),t&2&&(l(4),p("docs",n.docs))},dependencies:[y,Z],encapsulation:2})}return e})();function we(e,d){e&1&&m(0,"img",5)}function Te(e,d){e&1&&m(0,"img",6)}var ce=(()=>{class e{code={basic:`<p-imagecompare class="sm:!w-96 shadow-lg rounded-2xl">
    <ng-template #left>
        <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island1.jpg" />
    </ng-template>
    <ng-template #right>
        <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island2.jpg" />
    </ng-template>
</p-imagecompare>`,html:`<div class="card flex justify-center">
    <p-imagecompare class="sm:!w-96 shadow-lg rounded-2xl">
        <ng-template #left>
            <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island1.jpg" />
        </ng-template>
        <ng-template #right>
            <img src="/_ext/primefaces.org/cdn/primevue/images/compare/island2.jpg" />
        </ng-template>
    </p-imagecompare>
</div>`,typescript:`import { Component } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
    selector: 'image-compare-responsive-demo',
    templateUrl: './image-compare-responsive-demo.html',
    standalone: true,
    imports: [ImageCompareModule]
})
export class ImageCompareResponsiveDemo {
}`};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["responsive-doc"]],decls:10,vars:1,consts:[["left",""],["right",""],[1,"card","flex","justify-center"],[1,"sm:!w-96","shadow-lg","rounded-2xl"],["selector","image-compare-basic-demo",3,"code"],["src","/_ext/primefaces.org/cdn/primevue/images/compare/island1.jpg"],["src","/_ext/primefaces.org/cdn/primevue/images/compare/island2.jpg"]],template:function(t,n){t&1&&(a(0,"app-docsectiontext")(1,"p"),o(2,"Apply responsive styles to the container element to optimize display per screen size."),i()(),a(3,"div",2)(4,"p-imagecompare",3),s(5,we,1,0,"ng-template",null,0,g)(7,Te,1,0,"ng-template",null,1,g),i()(),m(9,"app-code",4)),t&2&&(l(9),p("code",n.code))},dependencies:[C,h,u,w,v],encapsulation:2})}return e})();var De=()=>["ImageCompare"],le=(()=>{class e{docs=[{id:"import",label:"Import",component:ie},{id:"basic",label:"Basic",component:ne},{id:"responsive",label:"Responsive",component:ce},{id:"accessibility",label:"Accessibility",component:re}];ptComponent=pe;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular ImageCompare Component","header","ImageCompare","description","Compare two images side by side with a slider.","themeDocs","imagecompare",3,"docs","apiDocs","ptDocs"]],template:function(t,n){t&1&&m(0,"app-doc",0),t&2&&p("docs",n.docs)("apiDocs",q(3,De))("ptDocs",n.ptComponent)},dependencies:[ee],encapsulation:2})}return e})();var It=[{path:"",component:le}];export{It as default};
