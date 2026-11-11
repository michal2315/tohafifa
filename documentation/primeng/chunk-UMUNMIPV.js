import{a as Ye,b as Ze}from"./chunk-TMBT6MYV.js";import{a as K,b as Ue,c as Ke}from"./chunk-ZPUIRI6H.js";import{a as Je,b as Xe}from"./chunk-4TPUIEYI.js";import{a as We,b as Qe}from"./chunk-WGSSWXXI.js";import{a as H}from"./chunk-WD243CL4.js";import{a as G}from"./chunk-6U552ITR.js";import{a as ze,b as $e}from"./chunk-YIMZONIF.js";import"./chunk-APBUBGZC.js";import"./chunk-RTRG5JID.js";import{b as Ne,c as Re}from"./chunk-7RFPWI4X.js";import"./chunk-J65EHHFF.js";import{a as U,b as Ge}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import{a as Be,b as Ve}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{f as De,i as Me,u as Ie}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as He}from"./chunk-FKOOMXTU.js";import{a as A}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import{a as T,b as S}from"./chunk-T7S2JKIR.js";import{a as je}from"./chunk-XCUGNKAG.js";import{a as P,b as qe}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as Ce,e as Oe,h as Ee}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ba as Ae}from"./chunk-MCW4FHXZ.js";import{Ea as Se,Fa as j,Ia as Le,La as Fe,Ma as Pe,N as V,Na as F,O as te,k as ke,ma as ye,za as q}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as we,n as xe,q as _e,r as Te,w as _}from"./chunk-D2XKNHFS.js";import{$a as M,Cb as de,Db as ue,Eb as l,Fb as n,Gb as a,Gc as k,Hb as d,La as x,Nb as X,Ob as I,Qa as p,S as ae,Sb as Y,T as re,Ub as f,Uc as ve,V as se,Va as J,X as N,Xb as Z,Yb as fe,Zb as R,_b as z,aa as h,ba as b,cc as ge,fc as ee,gb as g,gc as y,hb as pe,hc as s,ja as Q,jc as he,kb as ce,lb as me,mb as v,mc as C,nc as O,oa as le,oc as L,rc as $,sc as w,tc as ie,uc as be,wb as B}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ei=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275cmp=g({type:o,selectors:[["dock-accessibility-doc"]],decls:92,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,t){i&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),s(3,"Screen Reader"),a(),n(4,"p"),s(5," Dock component uses the "),n(6,"i"),s(7,"menu"),a(),s(8," role with the "),n(9,"i"),s(10,"aria-orientation"),a(),s(11," and the value to describe the menu can either be provided with "),n(12,"i"),s(13,"aria-labelledby"),a(),s(14," or "),n(15,"i"),s(16,"aria-label"),a(),s(17," props. Each list item has a "),n(18,"i"),s(19,"presentation"),a(),s(20," role whereas anchor elements have a "),n(21,"i"),s(22,"menuitem"),a(),s(23," role with "),n(24,"i"),s(25,"aria-label"),a(),s(26," referring to the label of the item and "),n(27,"i"),s(28,"aria-disabled"),a(),s(29," defined if the item is disabled. "),a(),n(30,"h3"),s(31,"Keyboard Support"),a(),n(32,"div",0)(33,"table",1)(34,"thead")(35,"tr")(36,"th"),s(37,"Key"),a(),n(38,"th"),s(39,"Function"),a()()(),n(40,"tbody")(41,"tr")(42,"td")(43,"i"),s(44,"tab"),a()(),n(45,"td"),s(46,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),a()(),n(47,"tr")(48,"td")(49,"i"),s(50,"shift"),a(),s(51," + "),n(52,"i"),s(53,"tab"),a()(),n(54,"td"),s(55,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),a()(),n(56,"tr")(57,"td")(58,"i"),s(59,"enter"),a()(),n(60,"td"),s(61,"Activates the focused menuitem."),a()(),n(62,"tr")(63,"td")(64,"i"),s(65,"space"),a()(),n(66,"td"),s(67,"Activates the focused menuitem."),a()(),n(68,"tr")(69,"td")(70,"i"),s(71,"down arrow"),a()(),n(72,"td"),s(73,"Moves focus to the next menuitem in vertical layout."),a()(),n(74,"tr")(75,"td")(76,"i"),s(77,"up arrow"),a()(),n(78,"td"),s(79,"Moves focus to the previous menuitem in vertical layout."),a()(),n(80,"tr")(81,"td")(82,"i"),s(83,"home"),a()(),n(84,"td"),s(85,"Moves focus to the first menuitem in horizontal layout."),a()(),n(86,"tr")(87,"td")(88,"i"),s(89,"end"),a()(),n(90,"td"),s(91,"Moves focus to the last menuitem in horizontal layout."),a()()()()()()())},dependencies:[P],encapsulation:2})}return o})();var ii=`
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
        background: dt('dock.background');
        border: 1px solid dt('dock.border.color');
        padding: dt('dock.padding');
        border-radius: dt('dock.border.radius');
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0 none;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        padding: dt('dock.item.padding');
        border-radius: dt('dock.item.border.radius');
    }

    .p-dock-item.p-focus {
        box-shadow: dt('dock.item.focus.ring.shadow');
        outline: dt('dock.item.focus.ring.width') dt('dock.item.focus.ring.style') dt('dock.item.focus.ring.color');
        outline-offset: dt('dock.item.focus.ring.offset');
    }

    .p-dock-item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
        width: dt('dock.item.size');
        height: dt('dock.item.size');
    }

    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container {
        overflow-x: auto;
        width: 100%;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
        margin: 0 auto;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container,
    .p-dock-mobile.p-dock-right .p-dock-list-container {
        overflow-y: auto;
        height: 100%;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
        margin: auto 0;
    }

    .p-dock-mobile .p-dock-list .p-dock-item {
        transform: none;
        margin: 0;
    }
`;var di={root:({instance:o})=>["p-dock p-component",`p-dock-${o.position}`,{"p-dock-mobile":o.queryMatches()}],listContainer:"p-dock-list-container",list:"p-dock-list",item:({instance:o,item:m,id:e})=>["p-dock-item",{"p-focus":o.isItemActive(e),"p-disabled":o.disabled(m)}],itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},oe=(()=>{class o extends Le{name="dock";style=ii;classes=di;static \u0275fac=(()=>{let e;return function(t){return(e||(e=le(o)))(t||o)}})();static \u0275prov=ae({token:o,factory:o.\u0275fac})}return o})();var fi=["item"],gi=["list"],hi=(o,m)=>({item:o,id:m}),bi=()=>({exact:!1}),oi=o=>({$implicit:o}),vi=(o,m)=>m.label;function ki(o,m){if(o&1&&d(0,"span",11),o&2){let e=f(3),i=e.$implicit,t=e.$index,r=f();y(r.cn(r.cx("itemIcon"),i.icon,i.iconClass)),l("ngStyle",i.iconStyle)("pBind",r.getPTOptions(i,t,"itemIcon"))}}function yi(o,m){o&1&&X(0)}function wi(o,m){if(o&1&&(n(0,"a",8),v(1,ki,1,4,"span",9)(2,yi,1,0,"ng-container",10),a()),o&2){let e=f(2),i=e.$implicit,t=e.$index,r=f();y(r.cx("itemLink")),l("routerLink",i.routerLink)("queryParams",i.queryParams)("routerLinkActiveOptions",i.routerLinkActiveOptions||w(22,bi))("target",i.target)("tooltipPosition",i.tooltipPosition)("tooltipOptions",i.tooltipOptions)("fragment",i.fragment)("queryParamsHandling",i.queryParamsHandling)("preserveFragment",i.preserveFragment)("skipLocationChange",i.skipLocationChange)("replaceUrl",i.replaceUrl)("state",i.state)("pBind",r.getPTOptions(i,t,"itemLink")),B("title",i.title)("data-automationid",i.automationId)("tabindex",i.disabled?null:i.tabindex?i.tabindex:"-1")("aria-hidden",!0),p(),l("ngIf",i.icon&&!r.itemTemplate&&!r._itemTemplate),p(),l("ngTemplateOutlet",r.itemTemplate||r.itemTemplate)("ngTemplateOutletContext",ie(23,oi,i))}}function xi(o,m){if(o&1&&d(0,"span",11),o&2){let e=f(3),i=e.$implicit,t=e.$index,r=f();y(r.cn(r.cx("itemIcon"),i.icon,i.iconClass)),l("ngStyle",i.iconStyle)("pBind",r.getPTOptions(i,t,"itemIcon"))}}function _i(o,m){o&1&&X(0)}function Ti(o,m){if(o&1&&(n(0,"a",12),v(1,xi,1,4,"span",9)(2,_i,1,0,"ng-container",10),a()),o&2){let e=f(2),i=e.$implicit,t=e.$index,r=f();y(r.cx("itemLink")),l("target",i.target)("tooltipPosition",i.tooltipPosition)("tooltipOptions",i.tooltipOptions)("pBind",r.getPTOptions(i,t,"itemLink")),B("href",i.url||null,x)("title",i.title)("data-automationid",i.automationId)("tabindex",i.disabled?null:i.tabindex?i.tabindex:"-1")("aria-hidden",!0),p(),l("ngIf",i.icon&&!r.itemTemplate&&!r._itemTemplate),p(),l("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",ie(14,oi,i))}}function Si(o,m){if(o&1){let e=I();n(0,"li",6),Y("click",function(t){h(e);let r=f().$implicit,c=f();return b(c.onItemClick(t,r))})("mouseenter",function(){h(e);let t=f().$index,r=f();return b(r.onItemMouseEnter(t))}),n(1,"div",2),v(2,wi,3,25,"a",7)(3,Ti,3,16,"ng-template",null,1,k),a()()}if(o&2){let e=ge(4),i=f(),t=i.$implicit,r=i.$index,c=f();y(c.cn(c.cx("item",be(14,hi,t,c.getItemId(t,r))),t==null?null:t.styleClass)),l("ngStyle",t.style)("pBind",c.getPTOptions(t,r,"item")),B("id",c.getItemId(t,r))("aria-label",t.label)("aria-disabled",c.disabled(t)||!1)("data-p-focused",c.isItemActive(c.getItemId(t,r)))("data-p-disabled",c.disabled(t)||!1),p(),y(c.cx("itemContent")),l("pBind",c.getPTOptions(t,r,"itemContent")),p(),l("ngIf",c.isClickableRouterLink(t))("ngIfElse",e)}}function Di(o,m){if(o&1&&v(0,Si,5,17,"li",5),o&2){let e=m.$implicit;l("ngIf",e.visible!==!1)}}var ti=new se("DOCK_INSTANCE"),E=(()=>{class o extends Pe{cd;id;styleClass;model=null;position="bottom";ariaLabel;breakpoint="960px";ariaLabelledBy;onFocus=new J;onBlur=new J;listViewChild;currentIndex;tabindex=0;focused=!1;focusedOptionIndex=-1;_componentStyle=N(oe);bindDirectiveInstance=N(F,{self:!0});$pcDock=N(ti,{optional:!0,skipSelf:!0})??void 0;matchMediaListener;query;queryMatches=Q(!1);mobileActive=Q(!1);get focusedOptionId(){return this.focusedOptionIndex!==-1&&this.focusedOptionIndex!=="-1"?String(this.focusedOptionIndex):null}constructor(e){super(),this.cd=e,this.currentIndex=-3}onInit(){this.id=this.id||ye("pn_id_"),this.bindMatchMediaListener()}onDestroy(){this.unbindMatchMediaListener()}itemTemplate;_itemTemplate;getItemId(e,i){return e&&e?.id?e.id:`${i}`}getItemProp(e,i){return e&&e.item?ke(e.item[i]):void 0}disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled||!1}isItemActive(e){return String(e)===String(this.focusedOptionIndex)}onListMouseLeave(){this.currentIndex=-3,this.cd.markForCheck()}onItemMouseEnter(e){this.currentIndex=e,this.cd.markForCheck()}onItemClick(e,i){i.command&&i.command({originalEvent:e,item:i})}onListFocus(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.onFocus.emit(e)}onListBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.onBlur.emit(e)}onListKeyDown(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"Space":{this.onSpaceKey(),e.preventDefault();break}default:break}}onArrowDownKey(){let e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onArrowUpKey(){let e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)}onHomeKey(){this.changeFocusedOptionIndex(0)}onEndKey(){this.changeFocusedOptionIndex(V(this.listViewChild?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]').length-1)}onSpaceKey(){let e=te(this.listViewChild?.nativeElement,`li[id="${`${this.focusedOptionIndex}`}"]`),i=e&&te(e,"a,button");i?i.click():e&&e.click()}findNextOptionIndex(e){let t=[...V(this.listViewChild?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return t>-1?t+1:0}changeFocusedOptionIndex(e){let i=V(this.listViewChild?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]'),t=e>=i.length?i.length-1:e<0?0:e;this.focusedOptionIndex=i[t]?.getAttribute("id")}findPrevOptionIndex(e){let t=[...V(this.listViewChild?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return t>-1?t-1:0}isClickableRouterLink(e){return!!e.routerLink&&!this.disabled(e)}templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getPTOptions(e,i,t){return this.ptm(t,{context:{item:e,index:i}})}bindMatchMediaListener(){if(!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive.set(!1)},this.renderer.listen(this.query,"change",this.matchMediaListener.bind(this))}}unbindMatchMediaListener(){this.matchMediaListener&&(this.matchMediaListener(),this.matchMediaListener=null,this.query=null)}static \u0275fac=function(i){return new(i||o)(M(ve))};static \u0275cmp=g({type:o,selectors:[["p-dock"]],contentQueries:function(i,t,r){if(i&1&&(Z(r,fi,5),Z(r,Se,4)),i&2){let c;R(c=z())&&(t.itemTemplate=c.first),R(c=z())&&(t.templates=c)}},viewQuery:function(i,t){if(i&1&&fe(gi,5),i&2){let r;R(r=z())&&(t.listViewChild=r.first)}},hostAttrs:["data-pc-name","dock"],hostVars:2,hostBindings:function(i,t){i&2&&y(t.cn(t.cx("root"),t.styleClass))},inputs:{id:"id",styleClass:"styleClass",model:"model",position:"position",ariaLabel:"ariaLabel",breakpoint:"breakpoint",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[$([oe,{provide:ti,useExisting:o},{provide:Fe,useExisting:o}]),me([F]),ce],decls:5,vars:12,consts:[["list",""],["elseBlock",""],[3,"pBind"],["role","menu",3,"focus","blur","keydown","mouseleave","tabindex","pBind"],["role","menuitem",3,"class","ngStyle","pBind"],["role","menuitem",3,"class","ngStyle","pBind","click","mouseenter",4,"ngIf"],["role","menuitem",3,"click","mouseenter","ngStyle","pBind"],["pRipple","","routerLinkActive","router-link-active","pTooltip","",3,"routerLink","queryParams","class","routerLinkActiveOptions","target","tooltipPosition","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf","ngIfElse"],["pRipple","","routerLinkActive","router-link-active","pTooltip","",3,"routerLink","queryParams","routerLinkActiveOptions","target","tooltipPosition","tooltipOptions","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngStyle","pBind"],["pRipple","","pTooltip","",3,"target","tooltipPosition","tooltipOptions","pBind"]],template:function(i,t){if(i&1){let r=I();n(0,"div",2)(1,"ul",3,0),Y("focus",function(u){return h(r),b(t.onListFocus(u))})("blur",function(u){return h(r),b(t.onListBlur(u))})("keydown",function(u){return h(r),b(t.onListKeyDown(u))})("mouseleave",function(){return h(r),b(t.onListMouseLeave())}),de(3,Di,1,1,"li",4,vi),a()()}i&2&&(y(t.cx("listContainer")),l("pBind",t.ptm("listContainer")),p(),y(t.cx("list")),l("tabindex",t.tabindex)("pBind",t.ptm("list")),B("id",t.id)("aria-orientation",t.position==="bottom"||t.position==="top"?"horizontal":"vertical")("aria-activedescendant",t.focused?t.focusedOptionId:void 0)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy),p(2),ue(t.model))},dependencies:[_,xe,Te,_e,Ee,Ce,Oe,Ae,S,T,F,j],encapsulation:2,changeDetection:0})}return o})(),W=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=pe({type:o});static \u0275inj=re({imports:[E,j,j]})}return o})();var Mi=()=>({width:"30vw",height:"18rem"}),ai=()=>({"960px":"50vw"}),Ii=()=>({width:"30vw"}),Ci=()=>({width:"400px"});function Oi(o,m){o&1&&d(0,"i",14)}function Ei(o,m){o&1&&(d(0,"i",15)(1,"i",16)(2,"i",17),n(3,"span",18),s(4,"Fri 13:07"),a(),d(5,"i",19)(6,"i",20))}function Li(o,m){if(o&1&&(n(0,"a",21),d(1,"img",22),a()),o&2){let e=m.$implicit;l("pTooltip",e.label),p(),l("alt",e.label)("src",e.icon,x)}}function Fi(o,m){if(o&1&&d(0,"img",23),o&2){let e=m.$implicit;l("src",e.itemImageSrc,x)}}var ri=(()=>{class o{galleriaService;nodeService;messageService;terminalService;displayTerminal;displayFinder;displayGalleria;dockItems;menubarItems;responsiveOptions;images;nodes;subscription;constructor(e,i,t,r){this.galleriaService=e,this.nodeService=i,this.messageService=t,this.terminalService=r}ngOnInit(){this.dockItems=[{label:"Finder",tooltipOptions:{tooltipLabel:"Finder",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"/_ext/primefaces.org/cdn/primeng/images/dock/finder.svg",command:()=>{this.displayFinder=!0}},{label:"Terminal",tooltipOptions:{tooltipLabel:"Terminal",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"/_ext/primefaces.org/cdn/primeng/images/dock/terminal.svg",command:()=>{this.displayTerminal=!0}},{label:"App Store",tooltipOptions:{tooltipLabel:"App Store",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"/_ext/primefaces.org/cdn/primeng/images/dock/appstore.svg",url:"https://www.apple.com/app-store/"},{label:"Safari",tooltipOptions:{tooltipLabel:"Safari",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"/_ext/primefaces.org/cdn/primeng/images/dock/safari.svg"},{label:"Photos",tooltipOptions:{tooltipLabel:"Photos",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"/_ext/primefaces.org/cdn/primeng/images/dock/photos.svg",command:()=>{this.displayGalleria=!0}},{label:"GitHub",tooltipOptions:{tooltipLabel:"GitHub",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"/_ext/primefaces.org/cdn/primeng/images/dock/github.svg",url:"https://github.com/primefaces/primeng"},{label:"Trash",tooltipOptions:{tooltipLabel:"Trash",tooltipPosition:"top",positionTop:-15,positionLeft:15,showDelay:1e3},icon:"/_ext/primefaces.org/cdn/primeng/images/dock/trash.png",command:()=>{this.messageService.add({severity:"info",summary:"Trash is empty",key:"tc"})}}],this.menubarItems=[{label:"Finder",styleClass:"menubar-root"},{label:"File",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit"}],this.responsiveOptions=[{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.subscription=this.terminalService.commandHandler.subscribe(e=>this.commandHandler(e)),this.galleriaService.getImages().then(e=>this.images=e),this.nodeService.getFiles().then(e=>this.nodes=e)}commandHandler(e){let i,t=e.indexOf(" "),r=t!==-1?e.substring(0,t):e;switch(r){case"date":i="Today is "+new Date().toDateString();break;case"greet":i="Hola "+e.substring(t+1)+"!";break;case"random":i=Math.floor(Math.random()*100);break;default:i="Unknown command: "+r;break}i&&this.terminalService.sendResponse(i)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}code={basic:`<p-menubar [model]="menubarItems">
    <ng-template #start>
        <i class="pi pi-apple px-2"></i>
    </ng-template>
    <ng-template #end>
        <i class="pi pi-video px-2"></i>
        <i class="pi pi-wifi px-2"></i>
        <i class="pi pi-volume-up px-2"></i>
        <span class="px-2">Fri 13:07</span>
        <i class="pi pi-search px-2"></i>
        <i class="pi pi-bars px-2"></i>
    </ng-template>
</p-menubar>
<div class="dock-window">
    <p-dock [model]="dockItems" position="bottom">
        <ng-template #item let-item>
            <a [pTooltip]="item.label" tooltipPosition="top" class="p-dock-item-link">
                <img [alt]="item.label" [src]="item.icon" style="width: 100%" />
            </a>
        </ng-template>
    </p-dock>

    <p-toast position="top-center" key="tc" />

    <p-dialog
        [(visible)]="displayFinder"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw', height: '18rem' }"
        [draggable]="false"
        [resizable]="false"
        header="Finder"
    >
        <p-tree [value]="nodes" />
    </p-dialog>

    <p-dialog
        [maximizable]="true"
        [(visible)]="displayTerminal"
        [breakpoints]="{ '960px': '50vw' }"
        [style]="{ width: '30vw' }"
        [draggable]="false"
        [resizable]="false"
        header="Terminal"
    >
        <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $" />
    </p-dialog>

    <p-galleria
        [(value)]="images"
        [showThumbnails]="false"
        [showThumbnailNavigators]="false"
        [showItemNavigators]="true"
        [(visible)]="displayGalleria"
        [circular]="true"
        [responsiveOptions]="responsiveOptions"
        [circular]="true"
        [fullScreen]="true"
        [containerStyle]="{ width: '400px' }"
    >
        <ng-template #item let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>`,html:`<div class="card dock-demo">
   <p-menubar [model]="menubarItems">
        <ng-template #start>
            <i class="pi pi-apple px-2"></i>
        </ng-template>
        <ng-template #end>
            <i class="pi pi-video px-2"></i>
            <i class="pi pi-wifi px-2"></i>
            <i class="pi pi-volume-up px-2"></i>
            <span class="px-2">Fri 13:07</span>
            <i class="pi pi-search px-2"></i>
            <i class="pi pi-bars px-2"></i>
        </ng-template>
    </p-menubar>
    <div class="dock-window">
        <p-dock [model]="dockItems" position="bottom">
            <ng-template #item let-item>
                <a [pTooltip]="item.label" tooltipPosition="top" class="p-dock-item-link">
                    <img [alt]="item.label" [src]="item.icon" style="width: 100%" />
                </a>
            </ng-template>
        </p-dock>

        <p-toast position="top-center" key="tc" />

        <p-dialog
            [(visible)]="displayFinder"
            [breakpoints]="{ '960px': '50vw' }"
            [style]="{ width: '30vw', height: '18rem' }"
            [draggable]="false"
            [resizable]="false"
            header="Finder"
        >
            <p-tree [value]="nodes" />
        </p-dialog>

        <p-dialog
            [maximizable]="true"
            [(visible)]="displayTerminal"
            [breakpoints]="{ '960px': '50vw' }"
            [style]="{ width: '30vw' }"
            [draggable]="false"
            [resizable]="false"
            header="Terminal"
        >
            <p-terminal welcomeMessage="Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')" prompt="primeng $" />
        </p-dialog>

        <p-galleria
            [(value)]="images"
            [showThumbnails]="false"
            [showThumbnailNavigators]="false"
            [showItemNavigators]="true"
            [(visible)]="displayGalleria"
            [circular]="true"
            [responsiveOptions]="responsiveOptions"
            [circular]="true"
            [fullScreen]="true"
            [containerStyle]="{ width: '400px' }"
        >
            <ng-template #item let-item>
                <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
            </ng-template>
        </p-galleria>
</div>`,typescript:`import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { TerminalModule } from 'primeng/terminal';
import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { NodeService } from '@/service/nodeservice';
import { PhotoService } from '@/service/photoservice';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { GalleriaModule } from 'primeng/galleria';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'dock-advanced-demo',
    templateUrl: './dock-advanced-demo.html',
    imports: [DockModule, MenubarModule, ToastModule, DialogModule, TreeModule, TerminalModule, GalleriaModule, TooltipModule],
    standalone: true,
    styles: [
        \` :host ::ng-deep {
            .dock-demo > .dock-window {
                width: 100%;
                height: 450px;
                position: relative;
                background-image: url('/_ext/primefaces.org/cdn/primevue/images/dock/window.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            }

            .dock-demo .p-menubar {
                padding: 0;
                border-radius: 0;
            }
        }\`
    ],
    providers: [MessageService, TerminalService, PhotoService, NodeService]
})
export class DockAdvancedDemo implements OnInit, OnDestroy {
    displayTerminal: boolean | undefined;

    displayFinder: boolean | undefined;

    displayGalleria: boolean | undefined;

    dockItems: MenuItem[] | undefined;

    menubarItems: any[] | undefined;

    responsiveOptions: any[] | undefined;

    images: any[] | undefined;

    nodes: any[] | undefined;

    subscription: Subscription | undefined;

    constructor(private galleriaService: PhotoService, private nodeService: NodeService, private messageService: MessageService, private terminalService: TerminalService) {}

    ngOnInit() {
        this.dockItems = [
            {
                label: 'Finder',
                tooltipOptions: {
                    tooltipLabel: 'Finder',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/finder.svg',
                command: () => {
                    this.displayFinder = true;
                }
            },
            {
                label: 'Terminal',
                tooltipOptions: {
                    tooltipLabel: 'Terminal',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/terminal.svg',
                command: () => {
                    this.displayTerminal = true;
                }
            },
            {
                label: 'App Store',
                tooltipOptions: {
                    tooltipLabel: 'App Store',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/appstore.svg',
                url: 'https://www.apple.com/app-store/'
            },
            {
                label: 'Safari',
                tooltipOptions: {
                    tooltipLabel: 'Safari',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/safari.svg'
            },
            {
                label: 'Photos',
                tooltipOptions: {
                    tooltipLabel: 'Photos',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/photos.svg',
                command: () => {
                    this.displayGalleria = true;
                }
            },
            {
                label: 'GitHub',
                tooltipOptions: {
                    tooltipLabel: 'GitHub',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/github.svg',
                url: 'https://github.com/primefaces/primeng'
            },
            {
                label: 'Trash',
                tooltipOptions: {
                    tooltipLabel: 'Trash',
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15,
                    showDelay: 1000
                },
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/trash.png',
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Trash is empty', key: 'tc' });
                }
            }
        ];

        this.menubarItems = [
            {
                label: 'Finder',
                styleClass: 'menubar-root'
            },
            {
                label: 'File',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Users',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit'
            }
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];

        this.subscription = this.terminalService.commandHandler.subscribe((command) => this.commandHandler(command));

        this.galleriaService.getImages().then((data) => (this.images = data));
        this.nodeService.getFiles().then((data) => (this.nodes = data));
    }

    commandHandler(text: any) {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            this.terminalService.sendResponse(response as string);
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}`,scss:`
:host ::ng-deep {
    .dock-demo > .dock-window {
            width: 100%;
            height: 450px;
            position: relative;
            background-image: url('/_ext/primefaces.org/cdn/primevue/images/dock/window.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }

        .dock-demo .p-menubar {
            padding: 0;
            border-radius: 0;
        }
}

.dark-tooltip {
    .p-tooltip {
        .p-tooltip-arrow {
            border-top-color: var(--surface-900);
        }

        .p-tooltip-text {
            background-color: var(--surface-900);
        }
    }
}`,service:["PhotoService","NodeService"]};static \u0275fac=function(i){return new(i||o)(M(G),M(H),M(q),M(K))};static \u0275cmp=g({type:o,selectors:[["dock-advanced-demo"]],features:[$([q,K,G,H])],decls:22,vars:32,consts:[["start",""],["end",""],["item",""],[1,"card","dock-demo"],[3,"model"],[1,"dock-window"],["position","bottom",3,"model"],["position","top-center","key","tc"],["header","Finder",3,"visibleChange","visible","breakpoints","draggable","resizable"],[3,"value"],["header","Terminal",3,"visibleChange","maximizable","visible","breakpoints","draggable","resizable"],["welcomeMessage","Welcome to PrimeNG (cmd: 'date', 'greet {0}', 'random')","prompt","primeng $"],[3,"valueChange","visibleChange","value","showThumbnails","showThumbnailNavigators","showItemNavigators","visible","circular","responsiveOptions","fullScreen","containerStyle"],["selector","dock-advanced-demo",3,"code"],[1,"pi","pi-apple","px-2"],[1,"pi","pi-video","px-2"],[1,"pi","pi-wifi","px-2"],[1,"pi","pi-volume-up","px-2"],[1,"px-2"],[1,"pi","pi-search","px-2"],[1,"pi","pi-bars","px-2"],["tooltipPosition","top",1,"p-dock-item-link",3,"pTooltip"],[2,"width","100%",3,"alt","src"],[2,"width","100%","display","block",3,"src"]],template:function(i,t){if(i&1){let r=I();n(0,"app-docsectiontext")(1,"p"),s(2,"A mock desktop UI implemented with various components in addition to Dock."),a()(),n(3,"div",3)(4,"p-menubar",4),v(5,Oi,1,0,"ng-template",null,0,k)(7,Ei,7,0,"ng-template",null,1,k),a(),n(9,"div",5)(10,"p-dock",6),v(11,Li,2,3,"ng-template",null,2,k),a(),d(13,"p-toast",7),n(14,"p-dialog",8),L("visibleChange",function(u){return h(r),O(t.displayFinder,u)||(t.displayFinder=u),b(u)}),d(15,"p-tree",9),a(),n(16,"p-dialog",10),L("visibleChange",function(u){return h(r),O(t.displayTerminal,u)||(t.displayTerminal=u),b(u)}),d(17,"p-terminal",11),a(),n(18,"p-galleria",12),L("valueChange",function(u){return h(r),O(t.images,u)||(t.images=u),b(u)})("visibleChange",function(u){return h(r),O(t.displayGalleria,u)||(t.displayGalleria=u),b(u)}),v(19,Fi,1,1,"ng-template",null,2,k),a()()(),d(21,"app-code",13)}i&2&&(p(4),l("model",t.menubarItems),p(6),l("model",t.dockItems),p(4),ee(w(27,Mi)),C("visible",t.displayFinder),l("breakpoints",w(28,ai))("draggable",!1)("resizable",!1),p(),l("value",t.nodes),p(),ee(w(29,Ii)),l("maximizable",!0),C("visible",t.displayTerminal),l("breakpoints",w(30,ai))("draggable",!1)("resizable",!1),p(2),C("value",t.images),l("showThumbnails",!1)("showThumbnailNavigators",!1)("showItemNavigators",!0),C("visible",t.displayGalleria),l("circular",!0)("responsiveOptions",t.responsiveOptions)("circular",!0)("fullScreen",!0)("containerStyle",w(31,Ci)),p(3),l("code",t.code))},dependencies:[E,Re,Ne,Qe,We,Xe,Je,Ke,Ue,Ve,Be,S,T,Ze,Ye,A,P],styles:["[_nghost-%COMP%]     .dock-demo>.dock-window{width:100%;height:450px;position:relative;background-image:url(/_ext/primefaces.org/cdn/primevue/images/dock/window.jpg);background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]     .dock-demo .p-menubar{padding:0;border-radius:0}"]})}return o})();function Pi(o,m){if(o&1){let e=I();n(0,"div",7)(1,"p-radiobutton",8),L("ngModelChange",function(t){h(e);let r=f();return O(r.position,t)||(r.position=t),b(t)}),a(),n(2,"label",9),s(3),a()()}if(o&2){let e=m.$implicit,i=f();p(),l("value",e.value)("label",e.label),C("ngModel",i.position),l("inputId",e.label),p(),l("for",e.label),p(),he(" ",e.label," ")}}function Ai(o,m){if(o&1&&d(0,"img",10),o&2){let e=m.$implicit;l("pTooltip",e.label)("src",e.icon,x)("alt",e.label)}}var si=(()=>{class o{items;position="bottom";positionOptions=[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}];ngOnInit(){this.items=[{label:"Finder",icon:"/_ext/primefaces.org/cdn/primeng/images/dock/finder.svg"},{label:"App Store",icon:"/_ext/primefaces.org/cdn/primeng/images/dock/appstore.svg"},{label:"Photos",icon:"/_ext/primefaces.org/cdn/primeng/images/dock/photos.svg"},{label:"Trash",icon:"/_ext/primefaces.org/cdn/primeng/images/dock/trash.png"}]}code={basic:`<p-dock [model]="items" [position]="position">
    <ng-template #item let-item>
        <img [pTooltip]="item.label" tooltipPosition="top" [src]="item.icon" [alt]="item.label" width="100%" />
    </ng-template>
</p-dock>`,html:`<div class="card">
    <div class="flex flex-wrap gap-4 mb-8">
        <div *ngFor="let pos of positionOptions" class="flex items-center">
            <p-radiobutton
                name="dock"
                [value]="pos.value"
                [label]="pos.label"
                [(ngModel)]="position"
                [inputId]="pos.label"
            />
            <label [for]="pos.label" class="ml-2"> {{ pos.label }} </label>
        </div>
    </div>
    <div class="dock-window">
        <p-dock [model]="items" [position]="position">
            <ng-template #item let-item>
                <img [pTooltip]="item.label" tooltipPosition="top" [src]="item.icon" [alt]="item.label" width="100%" />
            </ng-template>
        </p-dock>
    </div>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { RadioButton } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'dock-basic-demo',
    templateUrl: './dock-basic-demo.html',
    styles: [
        \` .dock-window {
            width: 100%;
            height: 450px;
            position: relative;
            background-image: url('/_ext/primefaces.org/cdn/primeng/images/dock/window.jpg');
            background-repeat: no-repeat;
            background-size: cover;
        }

        .p-dock {
            z-index: 1000;
        }\`
    ],
    standalone: true,
    imports: [Dock, RadioButton, CommonModule, FormsModule, TooltipModule]
})
export class DockBasicDemo implements OnInit {
    items: MenuItem[] | undefined;

    position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: '/_ext/primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }
}`,scss:`
:host ::ng-deep {
    .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('/_ext/primefaces.org/cdn/primeng/images/dock/window.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .p-dock {
        z-index: 1000;
    }
}`};static \u0275fac=function(i){return new(i||o)};static \u0275cmp=g({type:o,selectors:[["dock-basic-demo"]],decls:23,vars:4,consts:[["item",""],[1,"card"],[1,"flex","flex-wrap","gap-4","mb-8"],["class","flex items-center",4,"ngFor","ngForOf"],[1,"dock-window"],[3,"model","position"],["selector","dock-basic-demo",3,"code"],[1,"flex","items-center"],["name","dock",3,"ngModelChange","value","label","ngModel","inputId"],[1,"ml-2",3,"for"],["tooltipPosition","top","width","100%",3,"pTooltip","src","alt"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),s(2," Dock requires a collection of menuitems as its "),n(3,"i"),s(4,"model"),a(),s(5,". Default location is "),n(6,"i"),s(7,"bottom"),a(),s(8," and other sides are also available when defined with the "),n(9,"i"),s(10,"position"),a(),s(11," property. Content of the dock component is defined by "),n(12,"i"),s(13,"item"),a(),s(14," template. "),a()(),n(15,"div",1)(16,"div",2),v(17,Pi,4,6,"div",3),a(),n(18,"div",4)(19,"p-dock",5),v(20,Ai,1,3,"ng-template",null,0,k),a()()(),d(22,"app-code",6)),i&2&&(p(17),l("ngForOf",t.positionOptions),p(2),l("model",t.items)("position",t.position),p(3),l("code",t.code))},dependencies:[_,we,Ie,De,Me,W,E,$e,ze,S,T,A,P],styles:["[_nghost-%COMP%]     .dock-window{width:100%;height:450px;position:relative;background-image:url(/_ext/primefaces.org/cdn/primeng/images/dock/window.jpg);background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]     .p-dock{z-index:1000}"]})}return o})();var li=(()=>{class o{code={typescript:"import { DockModule } from 'primeng/dock';"};static \u0275fac=function(i){return new(i||o)};static \u0275cmp=g({type:o,selectors:[["dock-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,t){i&1&&d(0,"app-code",0),i&2&&l("code",t.code)("hideToggleCode",!0)},dependencies:[A],encapsulation:2})}return o})();function Bi(o,m){if(o&1&&d(0,"img",4),o&2){let e=m.$implicit;l("pTooltip",e.label)("alt",e.label)("src",e.icon,x)}}var pi=(()=>{class o{items=[{label:"Finder",icon:"/_ext/primefaces.org/cdn/primevue/images/dock/finder.svg"},{label:"App Store",icon:"/_ext/primefaces.org/cdn/primevue/images/dock/appstore.svg"},{label:"Photos",icon:"/_ext/primefaces.org/cdn/primevue/images/dock/photos.svg"},{label:"Trash",icon:"/_ext/primefaces.org/cdn/primevue/images/dock/trash.png"}];docs=[{data:U("Dock"),key:"Dock"}];static \u0275fac=function(i){return new(i||o)};static \u0275cmp=g({type:o,selectors:[["dock-pt-viewer"]],decls:5,vars:2,consts:[["item",""],[3,"docs"],[1,"relative","w-full"],[3,"model"],["tooltipPosition","top",2,"width","100%",3,"pTooltip","alt","src"]],template:function(i,t){i&1&&(n(0,"app-docptviewer",1)(1,"div",2)(2,"p-dock",3),v(3,Bi,1,3,"ng-template",null,0,k),a()()()),i&2&&(l("docs",t.docs),p(2),l("model",t.items))},dependencies:[_,Ge,W,E,S,T],encapsulation:2})}return o})();var ci=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:pi},{id:"pt.doc.dock",label:"Dock PT Options",component:qe,data:U("Dock")}];static \u0275fac=function(i){return new(i||o)};static \u0275cmp=g({type:o,selectors:[["dock-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,t){i&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Dock Pass Through"),a()(),d(4,"app-docsection",2),a()),i&2&&(p(4),l("docs",t.docs))},dependencies:[_,je],encapsulation:2})}return o})();var Vi=()=>["Dock","MenuItem"],mi=(()=>{class o{docs=[{id:"import",label:"Import",component:li},{id:"basic",label:"Basic",component:si},{id:"advanced",label:"Advanced",component:ri},{id:"accessibility",label:"Accessibility",component:ei}];ptComponent=ci;static \u0275fac=function(i){return new(i||o)};static \u0275cmp=g({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Dock Component","header","Dock","description","Dock is a navigation component consisting of menuitems.","themeDocs","dock",3,"docs","apiDocs","ptDocs"]],template:function(i,t){i&1&&d(0,"app-doc",0),i&2&&l("docs",t.docs)("apiDocs",w(3,Vi))("ptDocs",t.ptComponent)},dependencies:[He],encapsulation:2})}return o})();var wo=[{path:"",component:mi}];export{wo as default};
