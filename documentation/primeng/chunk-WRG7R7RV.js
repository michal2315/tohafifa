import{a as wt}from"./chunk-TMBT6MYV.js";import{a as _}from"./chunk-WD243CL4.js";import"./chunk-APBUBGZC.js";import"./chunk-RTRG5JID.js";import{a as yt,b as bt}from"./chunk-ZYT4LGUE.js";import{a as vt,b as St}from"./chunk-2SUSAFZL.js";import{a as xe,b as _t}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import{a as mt}from"./chunk-T3D2SKKJ.js";import{a as ut}from"./chunk-VGTHJBIV.js";import{a as ye,b as be}from"./chunk-N3SKU25W.js";import{a as _e,b as we}from"./chunk-SGEFCG26.js";import{a as pt}from"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{a as Xe,d as Ye,f as b,g as he,h as Ze,i as T,j as ge,k as $e,l as et,p as tt,t as ot,u as M,v as it}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as gt}from"./chunk-FKOOMXTU.js";import{a as v}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ht}from"./chunk-XCUGNKAG.js";import{a as w,b as ft}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as $,h as Q}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{A as st,W as dt,da as ve,fa as Se,ga as ct,h as rt,ha as ee,j as at}from"./chunk-MCW4FHXZ.js";import{Ea as Je,Fa as fe,Ia as lt,La as nt,Na as ne,P as me,S as le,T as je,Y as Pe,d as Fe,ma as Qe,r as pe,za as ue}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as Ke,n as qe,q as Ue,r as Ge,w as P}from"./chunk-D2XKNHFS.js";import{$a as y,Ab as se,Eb as s,Fb as n,Gb as r,Gc as z,Hb as p,Lb as Y,Lc as Ne,Mb as Z,Nb as U,Ob as q,Pc as ie,Qa as c,R as De,S as ke,Sb as A,T as Ve,Ub as F,Uc as He,V as Be,Va as H,X as K,Xb as R,Yb as G,Yc as j,Zb as k,_b as V,aa as E,ba as I,ca as Te,cc as X,fc as Re,gb as m,gc as O,hb as Le,hc as l,ic as Oe,ja as Me,jc as ze,kb as We,lb as Ae,mb as N,mc as f,nc as h,oa as re,oc as g,rc as de,sc as ce,tc as Ce,uc as oe,wb as J,zb as ae}from"./chunk-O3KMSE75.js";import{a as te,b as Ie}from"./chunk-GAL4ENT6.js";var xt=(()=>{class o{code={basic:`<span id="dd1">Options</span>
<p-treeselect ariaLabelledBy="dd1" />

<p-treeselect ariaLabel="Options" />`};static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["tree-select-accessibility-doc"]],decls:226,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,t){i&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),r(),n(4,"p"),l(5," Value to describe the component can either be provided with "),n(6,"i"),l(7,"ariaLabelledby"),r(),l(8," or "),n(9,"i"),l(10,"ariaLabel"),r(),l(11," props. The treeselect element has a "),n(12,"i"),l(13,"combobox"),r(),l(14," role in addition to "),n(15,"i"),l(16,"aria-haspopup"),r(),l(17," and "),n(18,"i"),l(19,"aria-expanded"),r(),l(20," attributes. The relation between the combobox and the popup is created with "),n(21,"i"),l(22,"aria-controls"),r(),l(23," that refers to the id of the popup. "),r(),n(24,"p"),l(25," The popup list has an id that refers to the "),n(26,"i"),l(27,"aria-controls"),r(),l(28," attribute of the "),n(29,"i"),l(30,"combobox"),r(),l(31," element and uses "),n(32,"i"),l(33,"tree"),r(),l(34," as the role. Each list item has a "),n(35,"i"),l(36,"treeitem"),r(),l(37," role along with "),n(38,"i"),l(39,"aria-label"),r(),l(40,", "),n(41,"i"),l(42,"aria-selected"),r(),l(43," and "),n(44,"i"),l(45,"aria-expanded"),r(),l(46," attributes. In checkbox selection, "),n(47,"i"),l(48,"aria-checked"),r(),l(49," is used instead of "),n(50,"i"),l(51,"aria-selected"),r(),l(52,". Checkbox and toggle icons are hidden from screen readers as their parent element with "),n(53,"i"),l(54,"treeitem"),r(),l(55," role and attributes are used instead for readers and keyboard support. The container element of a treenode has the "),n(56,"i"),l(57,"group"),r(),l(58," role. The "),n(59,"i"),l(60,"aria-setsize"),r(),l(61,", "),n(62,"i"),l(63,"aria-posinset"),r(),l(64," and "),n(65,"i"),l(66,"aria-level"),r(),l(67," attributes are calculated implicitly and added to each treeitem. "),r(),n(68,"p"),l(69,"If filtering is enabled, "),n(70,"i"),l(71,"filterInputProps"),r(),l(72," can be defined to give "),n(73,"i"),l(74,"aria-*"),r(),l(75," props to the filter input element."),r()(),p(76,"app-code",0),n(77,"h3"),l(78,"Closed State Keyboard Support"),r(),n(79,"div",1)(80,"table",2)(81,"thead")(82,"tr")(83,"th"),l(84,"Key"),r(),n(85,"th"),l(86,"Function"),r()()(),n(87,"tbody")(88,"tr")(89,"td")(90,"i"),l(91,"tab"),r()(),n(92,"td"),l(93,"Moves focus to the treeselect element."),r()(),n(94,"tr")(95,"td")(96,"i"),l(97,"space"),r()(),n(98,"td"),l(99,"Opens the popup and moves visual focus to the selected treenode, if there is none then first treenode receives the focus."),r()(),n(100,"tr")(101,"td")(102,"i"),l(103,"down arrow"),r()(),n(104,"td"),l(105,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),r()()()()(),n(106,"h3"),l(107,"Popup Keyboard Support"),r(),n(108,"div",1)(109,"table",2)(110,"thead")(111,"tr")(112,"th"),l(113,"Key"),r(),n(114,"th"),l(115,"Function"),r()()(),n(116,"tbody")(117,"tr")(118,"td")(119,"i"),l(120,"tab"),r()(),n(121,"td"),l(122,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),r()(),n(123,"tr")(124,"td")(125,"i"),l(126,"shift"),r(),l(127," + "),n(128,"i"),l(129,"tab"),r()(),n(130,"td"),l(131,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),r()(),n(132,"tr")(133,"td")(134,"i"),l(135,"enter"),r()(),n(136,"td"),l(137,"Selects the focused option, closes the popup if selection mode is single."),r()(),n(138,"tr")(139,"td")(140,"i"),l(141,"space"),r()(),n(142,"td"),l(143,"Selects the focused option, closes the popup if selection mode is single."),r()(),n(144,"tr")(145,"td")(146,"i"),l(147,"escape"),r()(),n(148,"td"),l(149,"Closes the popup, moves focus to the treeselect element."),r()(),n(150,"tr")(151,"td")(152,"i"),l(153,"down arrow"),r()(),n(154,"td"),l(155,"Moves focus to the next treenode."),r()(),n(156,"tr")(157,"td")(158,"i"),l(159,"up arrow"),r()(),n(160,"td"),l(161,"Moves focus to the previous treenode."),r()(),n(162,"tr")(163,"td")(164,"i"),l(165,"right arrow"),r()(),n(166,"td"),l(167,"If node is closed, opens the node otherwise moves focus to the first child node."),r()(),n(168,"tr")(169,"td")(170,"i"),l(171,"left arrow"),r()(),n(172,"td"),l(173,"If node is open, closes the node otherwise moves focus to the parent node."),r()()()()(),n(174,"h3"),l(175,"Filter Input Keyboard Support"),r(),n(176,"div",1)(177,"table",2)(178,"thead")(179,"tr")(180,"th"),l(181,"Key"),r(),n(182,"th"),l(183,"Function"),r()()(),n(184,"tbody")(185,"tr")(186,"td")(187,"i"),l(188,"enter"),r()(),n(189,"td"),l(190,"Closes the popup and moves focus to the treeselect element."),r()(),n(191,"tr")(192,"td")(193,"i"),l(194,"escape"),r()(),n(195,"td"),l(196,"Closes the popup and moves focus to the treeselect element."),r()()()()(),n(197,"h3"),l(198,"Close Button Keyboard Support"),r(),n(199,"div",1)(200,"table",2)(201,"thead")(202,"tr")(203,"th"),l(204,"Key"),r(),n(205,"th"),l(206,"Function"),r()()(),n(207,"tbody")(208,"tr")(209,"td")(210,"i"),l(211,"enter"),r()(),n(212,"td"),l(213,"Closes the popup and moves focus to the treeselect element."),r()(),n(214,"tr")(215,"td")(216,"i"),l(217,"space"),r()(),n(218,"td"),l(219,"Closes the popup and moves focus to the treeselect element."),r()(),n(220,"tr")(221,"td")(222,"i"),l(223,"escape"),r()(),n(224,"td"),l(225,"Closes the popup and moves focus to the treeselect element."),r()()()()()()),i&2&&(c(76),s("code",t.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[v,w],encapsulation:2})}return o})();var Tt=`
    .p-treeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('treeselect.background');
        border: 1px solid dt('treeselect.border.color');
        transition:
            background dt('treeselect.transition.duration'),
            color dt('treeselect.transition.duration'),
            border-color dt('treeselect.transition.duration'),
            outline-color dt('treeselect.transition.duration'),
            box-shadow dt('treeselect.transition.duration');
        border-radius: dt('treeselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('treeselect.shadow');
    }

    .p-treeselect:not(.p-disabled):hover {
        border-color: dt('treeselect.hover.border.color');
    }

    .p-treeselect:not(.p-disabled).p-focus {
        border-color: dt('treeselect.focus.border.color');
        box-shadow: dt('treeselect.focus.ring.shadow');
        outline: dt('treeselect.focus.ring.width') dt('treeselect.focus.ring.style') dt('treeselect.focus.ring.color');
        outline-offset: dt('treeselect.focus.ring.offset');
    }

    .p-treeselect.p-variant-filled {
        background: dt('treeselect.filled.background');
    }

    .p-treeselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('treeselect.filled.hover.background');
    }

    .p-treeselect.p-variant-filled.p-focus {
        background: dt('treeselect.filled.focus.background');
    }

    .p-treeselect.p-invalid {
        border-color: dt('treeselect.invalid.border.color');
    }

    .p-treeselect.p-disabled {
        opacity: 1;
        background: dt('treeselect.disabled.background');
    }

    .p-treeselect-clear-icon {
        align-self: center;
        color: dt('treeselect.clear.icon.color');
        inset-inline-end: dt('treeselect.dropdown.width');
    }

    .p-treeselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('treeselect.dropdown.color');
        width: dt('treeselect.dropdown.width');
        border-start-end-radius: dt('border.radius.md');
        border-end-end-radius: dt('border.radius.md');
    }

    .p-treeselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-treeselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('treeselect.padding.y') / 2);
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('treeselect.padding.y') dt('treeselect.padding.x');
        color: dt('treeselect.color');
    }

    .p-treeselect-label.p-placeholder {
        color: dt('treeselect.placeholder.color');
    }

    .p-treeselect.p-invalid .p-treeselect-label.p-placeholder {
        color: dt('treeselect.invalid.placeholder.color');
    }

    .p-treeselect:has(.p-select-clear-icon) .p-treeselect-label {
        padding-inline-end: dt('treeselect.padding.x');
    }

    .p-treeselect.p-disabled .p-treeselect-label {
        color: dt('treeselect.disabled.color');
    }

    .p-treeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-treeselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('treeselect.overlay.background');
        color: dt('treeselect.overlay.color');
        border: 1px solid dt('treeselect.overlay.border.color');
        border-radius: dt('treeselect.overlay.border.radius');
        box-shadow: dt('treeselect.overlay.shadow');
        overflow: hidden;
        min-width: 100%;
    }

    .p-treeselect-tree-container {
        overflow: auto;
    }

    .p-treeselect-empty-message {
        padding: dt('treeselect.empty.message.padding');
        background: transparent;
    }

    .p-treeselect-fluid {
        display: flex;
    }

    .p-treeselect-overlay .p-tree {
        padding: dt('treeselect.tree.padding');
    }

    .p-treeselect-overlay .p-tree-loading {
        min-height: 3rem;
    }

    .p-treeselect-label .p-chip {
        padding-block-start: calc(dt('treeselect.padding.y') / 2);
        padding-block-end: calc(dt('treeselect.padding.y') / 2);
        border-radius: dt('treeselect.chip.border.radius');
    }

    .p-treeselect-label:has(.p-chip) {
        padding: calc(dt('treeselect.padding.y') / 2) calc(dt('treeselect.padding.x') / 2);
    }

    .p-treeselect-sm .p-treeselect-label {
        font-size: dt('treeselect.sm.font.size');
        padding-block: dt('treeselect.sm.padding.y');
        padding-inline: dt('treeselect.sm.padding.x');
    }

    .p-treeselect-sm .p-treeselect-dropdown .p-icon {
        font-size: dt('treeselect.sm.font.size');
        width: dt('treeselect.sm.font.size');
        height: dt('treeselect.sm.font.size');
    }

    .p-treeselect-lg .p-treeselect-label {
        font-size: dt('treeselect.lg.font.size');
        padding-block: dt('treeselect.lg.padding.y');
        padding-inline: dt('treeselect.lg.padding.x');
    }

    .p-treeselect-lg .p-treeselect-dropdown .p-icon {
        font-size: dt('treeselect.lg.font.size');
        width: dt('treeselect.lg.font.size');
        height: dt('treeselect.lg.font.size');
    }
`;var Xt=`
    ${Tt}

    /* For PrimeNG */

    .p-treeselect.ng-invalid.ng-dirty {
        border-color: dt('treeselect.invalid.border.color');
    }

    p-treeselect.ng-invalid.ng-dirty.p-focus {
        border-color: dt('treeselect.focus.border.color');
    }

    p-treeselect.ng-invalid.ng-dirty .p-treeselect-label.p-placeholder {
        color: dt('treeselect.invalid.placeholder.color');
    }

    .p-treeselect-clear-icon.p-icon {
        flex-shrink: 0;
    }
`,Yt={root:({instance:o})=>te({position:o.$appendTo()==="self"?"relative":void 0},o.containerStyle)},Zt={root:({instance:o})=>["p-treeselect p-component p-inputwrapper",{"p-treeselect-display-chip":o.display==="chip","p-disabled":o.$disabled(),"p-invalid":o.invalid(),"p-focus":o.focused,"p-variant-filled":o.$variant()==="filled","p-inputwrapper-filled":!o.emptyValue,"p-inputwrapper-focus":o.focused||o.overlayVisible,"p-treeselect-open":o.overlayVisible,"p-treeselect-clearable":o.showClear,"p-treeselect-fluid":o.hasFluid,"p-treeselect-sm p-inputfield-sm":o.size()==="small","p-treeselect-lg p-inputfield-lg":o.size()==="large"}],labelContainer:"p-treeselect-label-container",label:({instance:o})=>["p-treeselect-label",{"p-placeholder":o.label===o.placeholder,"p-treeselect-label-empty":!o.placeholder&&o.emptyValue}],clearIcon:"p-treeselect-clear-icon",chip:"p-treeselect-chip-item",pcChip:"p-treeselect-chip",dropdown:"p-treeselect-dropdown",dropdownIcon:"p-treeselect-dropdown-icon",panel:"p-treeselect-overlay p-component-overlay p-component",treeContainer:"p-treeselect-tree-container",emptyMessage:"p-treeselect-empty-message"},Ee=(()=>{class o extends lt{name="treeselect";style=Xt;classes=Zt;inlineStyles=Yt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=re(o)))(t||o)}})();static \u0275prov=ke({token:o,factory:o.\u0275fac})}return o})();var $t=["value"],eo=["header"],to=["empty"],oo=["footer"],io=["clearicon"],lo=["triggericon"],no=["dropdownicon"],ro=["filtericon"],ao=["closeicon"],so=["itemtogglericon"],co=["itemcheckboxicon"],po=["itemloadingicon"],mo=["focusInput"],uo=["filter"],fo=["tree"],ho=["panel"],go=["overlay"],vo=["firstHiddenFocusableEl"],So=["lastHiddenFocusableEl"],yo=(o,u)=>({$implicit:o,placeholder:u}),Mt=(o,u)=>({$implicit:o,options:u}),bo=o=>({"max-height":o}),_o=o=>({$implicit:o}),wo=(o,u)=>({$implicit:o,partialSelected:u});function xo(o,u){o&1&&U(0)}function To(o,u){if(o&1&&(Y(0),N(1,xo,1,0,"ng-container",23),Z()),o&2){let e=F();c(),s("ngTemplateOutlet",e.valueTemplate||e._valueTemplate)("ngTemplateOutletContext",oe(2,yo,e.value,e.placeholder))}}function Mo(o,u){if(o&1&&(Y(0),l(1),Z()),o&2){let e=F(2);c(),ze(" ",e.label||"empty"," ")}}function Co(o,u){if(o&1&&(n(0,"div",15),p(1,"p-chip",25),r()),o&2){let e=u.$implicit,i=F(3);O(i.cx("chipItem")),s("pBind",i.ptm("chipItem")),c(),O(i.cx("pcChip")),s("label",e.label)("pt",i.ptm("pcChip"))}}function No(o,u){if(o&1&&(Y(0),l(1),Z()),o&2){let e=F(3);c(),Oe(e.placeholder||"empty")}}function Fo(o,u){if(o&1&&N(0,Co,2,7,"div",24)(1,No,2,1,"ng-container",18),o&2){let e=F(2);s("ngForOf",e.value),c(),s("ngIf",e.emptyValue)}}function Eo(o,u){if(o&1&&N(0,Mo,2,1,"ng-container",17)(1,Fo,2,2,"ng-template",null,4,z),o&2){let e=X(2),i=F();s("ngIf",i.display==="comma")("ngIfElse",e)}}function Io(o,u){if(o&1){let e=q();Te(),n(0,"svg",28),A("click",function(t){E(e);let d=F(2);return I(d.clear(t))}),r()}if(o&2){let e=F(2);O(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon"))}}function Do(o,u){}function ko(o,u){o&1&&N(0,Do,0,0,"ng-template")}function Vo(o,u){if(o&1){let e=q();n(0,"span",29),A("click",function(t){E(e);let d=F(2);return I(d.clear(t))}),N(1,ko,1,0,null,30),r()}if(o&2){let e=F(2);O(e.cx("clearIcon")),s("pBind",e.ptm("clearIcon")),c(),s("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Bo(o,u){if(o&1&&(Y(0),N(1,Io,1,3,"svg",26)(2,Vo,2,4,"span",27),Z()),o&2){let e=F();c(),s("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),c(),s("ngIf",e.clearIconTemplate||e.clearIconTemplate)}}function Lo(o,u){if(o&1&&(Te(),p(0,"svg",31)),o&2){let e=F();O(e.cx("dropdownIcon")),s("pBind",e.ptm("dropdownIcon"))}}function Wo(o,u){}function Ao(o,u){o&1&&N(0,Wo,0,0,"ng-template")}function Ro(o,u){if(o&1&&(n(0,"span",15),N(1,Ao,1,0,null,30),r()),o&2){let e=F();O(e.cx("dropdownIcon")),s("pBind",e.ptm("dropdownIcon")),c(),s("ngTemplateOutlet",e.triggerIconTemplate||e._triggerIconTemplate||e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Oo(o,u){o&1&&U(0)}function zo(o,u){o&1&&U(0)}function Ho(o,u){if(o&1&&N(0,zo,1,0,"ng-container",30),o&2){let e=F(3);s("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function jo(o,u){o&1&&(Y(0),N(1,Ho,1,1,"ng-template",null,9,z),Z())}function Po(o,u){o&1&&U(0)}function Qo(o,u){if(o&1&&N(0,Po,1,0,"ng-container",23),o&2){let e=u.$implicit,i=F(3);s("ngTemplateOutlet",i.itemTogglerIconTemplate||i._itemTogglerIconTemplate)("ngTemplateOutletContext",Ce(2,_o,e))}}function Ko(o,u){o&1&&N(0,Qo,1,4,"ng-template",null,10,z)}function qo(o,u){o&1&&U(0)}function Uo(o,u){if(o&1&&N(0,qo,1,0,"ng-container",23),o&2){let e=u.$implicit,i=u.partialSelected,t=F(3);s("ngTemplateOutlet",t.itemCheckboxIconTemplate||t._itemCheckboxIconTemplate)("ngTemplateOutletContext",oe(2,wo,e,i))}}function Go(o,u){o&1&&N(0,Uo,1,5,"ng-template",null,11,z)}function Jo(o,u){o&1&&U(0)}function Xo(o,u){if(o&1&&N(0,Jo,1,0,"ng-container",30),o&2){let e=F(3);s("ngTemplateOutlet",e.itemLoadingIconTemplate||e._itemLoadingIconTemplate)}}function Yo(o,u){o&1&&N(0,Xo,1,1,"ng-template",null,12,z)}function Zo(o,u){o&1&&U(0)}function $o(o,u){if(o&1){let e=q();n(0,"div",16,5)(2,"span",32,6),A("focus",function(t){E(e);let d=F();return I(d.onFirstHiddenFocus(t))}),r(),N(4,Oo,1,0,"ng-container",23),n(5,"div",16)(6,"p-tree",33,7),A("selectionChange",function(t){E(e);let d=F();return I(d.onSelectionChange(t))})("onNodeExpand",function(t){E(e);let d=F();return I(d.nodeExpand(t))})("onNodeCollapse",function(t){E(e);let d=F();return I(d.nodeCollapse(t))})("onNodeSelect",function(t){E(e);let d=F();return I(d.onSelect(t))})("onNodeUnselect",function(t){E(e);let d=F();return I(d.onUnselect(t))}),N(8,jo,3,0,"ng-container",18)(9,Ko,2,0,null,18)(10,Go,2,0,null,18)(11,Yo,2,0,null,18),r()(),N(12,Zo,1,0,"ng-container",23),n(13,"span",32,8),A("focus",function(t){E(e);let d=F();return I(d.onLastHiddenFocus(t))}),r()()}if(o&2){let e=F();O(e.cn(e.cx("panel"),e.panelStyleClass,e.panelClass)),s("ngStyle",e.panelStyle)("pBind",e.ptm("panel")),J("id",e.listId),c(2),s("pBind",e.ptm("hiddenFirstFocusableEl")),J("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),c(2),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",oe(46,Mt,e.value,e.options)),c(),O(e.cx("treeContainer")),s("ngStyle",Ce(49,bo,e.scrollHeight))("pBind",e.ptm("treeContainer")),c(),s("value",e.options)("propagateSelectionDown",e.propagateSelectionDown)("propagateSelectionUp",e.propagateSelectionUp)("selectionMode",e.selectionMode)("selection",e.value)("metaKeySelection",e.metaKeySelection)("emptyMessage",e.emptyMessage)("filter",e.filter)("filterBy",e.filterBy)("filterMode",e.filterMode)("filterPlaceholder",e.filterPlaceholder)("filterLocale",e.filterLocale)("filteredNodes",e.filteredNodes)("virtualScroll",e.virtualScroll)("virtualScrollItemSize",e.virtualScrollItemSize)("virtualScrollOptions",e.virtualScrollOptions)("_templateMap",e.templateMap)("loading",e.loading)("filterInputAutoFocus",e.filterInputAutoFocus)("pt",e.ptm("pcTree"))("loadingMode",e.loadingMode),c(2),s("ngIf",e.emptyTemplate||e._emptyTemplate),c(),s("ngIf",e.itemTogglerIconTemplate||e._itemTogglerIconTemplate),c(),s("ngIf",e.itemCheckboxIconTemplate||e._itemCheckboxIconTemplate),c(),s("ngIf",e.itemLoadingIconTemplate||e._itemLoadingIconTemplate),c(),s("ngTemplateOutlet",e.footerTemplate)("ngTemplateOutletContext",oe(51,Mt,e.value,e.options)),c(),s("pBind",e.ptm("hiddenLastFocusableEl")),J("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var ei={provide:Xe,useExisting:De(()=>S),multi:!0},Ct=new Be("TREESELECT_INSTANCE"),S=(()=>{class o extends pt{$pcTreeSelect=K(Ct,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=K(ne,{self:!0});_componentStyle=K(Ee);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}inputId;scrollHeight="400px";metaKeySelection=!1;display="comma";selectionMode="single";tabindex="0";ariaLabel;ariaLabelledBy;placeholder;panelClass;panelStyle;panelStyleClass;containerStyle;containerStyleClass;labelStyle;labelStyleClass;overlayOptions;emptyMessage="";filter=!1;filterBy="label";filterMode="lenient";filterPlaceholder;filterLocale;filterInputAutoFocus=!0;propagateSelectionDown=!0;propagateSelectionUp=!0;showClear=!1;resetFilterOnHide=!0;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autofocus;get options(){return this._options}set options(e){this._options=e,this.updateTreeState()}loading;loadingMode="mask";size=ie();variant=ie();fluid=ie(void 0,{transform:j});appendTo=ie(void 0);onNodeExpand=new H;onNodeCollapse=new H;onShow=new H;onHide=new H;onClear=new H;onFilter=new H;onFocus=new H;onBlur=new H;onNodeUnselect=new H;onNodeSelect=new H;$appendTo=Ne(()=>this.appendTo()||this.config.overlayAppendTo());focusInput;filterViewChild;treeViewChild;panelEl;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;$variant=Ne(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());pcFluid=K(at,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}filteredNodes;filterValue=null;serializedValue;valueTemplate;headerTemplate;emptyTemplate;footerTemplate;clearIconTemplate;triggerIconTemplate;dropdownIconTemplate;filterIconTemplate;closeIconTemplate;itemTogglerIconTemplate;itemCheckboxIconTemplate;itemLoadingIconTemplate;templates;_valueTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_clearIconTemplate;_triggerIconTemplate;_filterIconTemplate;_closeIconTemplate;_itemTogglerIconTemplate;_itemCheckboxIconTemplate;_itemLoadingIconTemplate;_dropdownIconTemplate;focused;overlayVisible;value;expandedNodes=[];_options;templateMap;listId="";onHostClick(e){this.onClick(e)}onInit(){this.listId=Qe("pn_id_")+"_list",this.updateTreeState()}onAfterContentInit(){this.templates.length&&(this.templateMap={}),this.templates.forEach(e=>{switch(e.getType()){case"value":this._valueTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"triggericon":this._triggerIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"itemtogglericon":this._itemTogglerIconTemplate=e.template;break;case"itemcheckboxicon":this._itemCheckboxIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"itemloadingicon":this._itemLoadingIconTemplate=e.template;break;default:e.name?this.templateMap[e.name]=e.template:this.valueTemplate=e.template;break}})}onOverlayAnimationStart(e){switch(e.toState){case"visible":if(this.filter)Fe(this.filterValue)&&this.treeViewChild?._filter(this.filterValue),this.filterInputAutoFocus&&this.filterViewChild?.nativeElement.focus();else{let i=le(this.panelEl?.nativeElement);i&&i.length>0&&i[0].focus()}break}}onOverlayBeforeHide(e){let i=le(this.el.nativeElement);i&&i.length>0&&i[0].focus()}onSelectionChange(e){this.value=e,this.onModelChange(this.value),this.cd.markForCheck()}onClick(e){this.$disabled()||!this.overlayViewChild?.el?.nativeElement?.contains(e.target)&&!pe(e.target,"p-treeselect-close")&&!pe(e.target,"p-checkbox-box")&&!pe(e.target,"p-checkbox-icon")&&(this.overlayVisible?this.hide():this.show(),this.focusInput?.nativeElement.focus())}onKeyDown(e){switch(e.code){case"ArrowDown":this.overlayVisible||(this.show(),e.preventDefault()),this.onArrowDown(e),e.preventDefault();break;case"Space":case"Enter":this.overlayVisible||(this.show(),e.preventDefault());break;case"Escape":this.overlayVisible&&(this.hide(),this.focusInput?.nativeElement.focus(),e.preventDefault());break;case"Tab":this.onTabKey(e);break;default:break}}onFilterInput(e){this.filterValue=e.target.value,this.treeViewChild?._filter(this.filterValue),this.onFilter.emit({filter:this.filterValue,filteredValue:this.treeViewChild?.filteredNodes}),setTimeout(()=>{this.overlayViewChild?.alignOverlay()})}onArrowDown(e){if(this.overlayVisible&&this.panelEl?.nativeElement){let i=le(this.panelEl.nativeElement,".p-tree-node");i&&i.length>0&&i[0].focus(),e.preventDefault()}}onFirstHiddenFocus(e){let i=e.relatedTarget===this.focusInput?.nativeElement?je(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInput?.nativeElement;me(i)}onLastHiddenFocus(e){let i=e.relatedTarget===this.focusInput?.nativeElement?Pe(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInput?.nativeElement;me(i)}show(){this.overlayVisible=!0}hide(e){this.overlayVisible=!1,this.resetFilter(),this.onHide.emit(e),this.cd.markForCheck()}clear(e){this.value=null,this.resetExpandedNodes(),this.resetPartialSelected(),this.onModelChange(this.value),this.onClear.emit(),e.stopPropagation()}checkValue(){return this.value!==null&&Fe(this.value)}onTabKey(e,i=!1){i||(this.overlayVisible&&this.hasFocusableElements()?(me(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault()):this.overlayVisible&&this.hide(this.filter))}hasFocusableElements(){return le(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}resetFilter(){this.filter&&!this.resetFilterOnHide?(this.filteredNodes=this.treeViewChild?.filteredNodes,this.treeViewChild?.resetFilter()):this.filterValue=null}updateTreeState(){if(this.value){let e=this.selectionMode==="single"?[this.value]:[...this.value];this.resetExpandedNodes(),this.resetPartialSelected(),e&&this.options&&this.updateTreeBranchState(null,null,e)}}updateTreeBranchState(e,i,t){if(e){if(this.isSelected(e)&&(this.expandPath(i),t.splice(t.indexOf(e),1)),t.length>0&&e.children)for(let d of e.children)this.updateTreeBranchState(d,[...i,e],t)}else for(let d of this.options)this.updateTreeBranchState(d,[],t)}expandPath(e){for(let i of e)i.expanded=!0;this.expandedNodes=[...e]}nodeExpand(e){this.onNodeExpand.emit(e),this.expandedNodes.push(e.node),setTimeout(()=>{this.overlayViewChild?.alignOverlay()})}nodeCollapse(e){this.onNodeCollapse.emit(e),this.expandedNodes.splice(this.expandedNodes.indexOf(e.node),1),setTimeout(()=>{this.overlayViewChild?.alignOverlay()})}resetExpandedNodes(){for(let e of this.expandedNodes)e.expanded=!1;this.expandedNodes=[]}resetPartialSelected(e=this.options){if(e)for(let i of e)i.partialSelected=!1,i.children&&i.children?.length>0&&this.resetPartialSelected(i.children)}findSelectedNodes(e,i,t){if(e){if(this.isSelected(e)&&(t.push(e),delete i[e.key]),Object.keys(i).length&&e.children)for(let d of e.children)this.findSelectedNodes(d,i,t)}else for(let d of this.options)this.findSelectedNodes(d,i,t)}isSelected(e){return this.findIndexInSelection(e)!=-1}findIndexInSelection(e){let i=-1;if(this.value)if(this.selectionMode==="single")i=this.value.key&&this.value.key===e.key||this.value==e?0:-1;else for(let t=0;t<this.value.length;t++){let d=this.value[t];if(d.key&&d.key===e.key||d==e){i=t;break}}return i}onSelect(e){this.onNodeSelect.emit(e),this.selectionMode==="single"&&(this.hide(),this.focusInput?.nativeElement.focus())}onUnselect(e){this.onNodeUnselect.emit(e)}onInputFocus(e){this.$disabled()||(this.focused=!0,this.onFocus.emit(e))}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}writeControlValue(e){this.value=e,this.updateTreeState(),this.cd.markForCheck()}get emptyValue(){return!this.value||Object.keys(this.value).length===0}get emptyOptions(){return!this.options||this.options.length===0}get label(){let e=this.value||[];return e.length?e.map(i=>i.label).join(", "):this.selectionMode==="single"&&this.value?e.label:this.placeholder}static \u0275fac=(()=>{let e;return function(t){return(e||(e=re(o)))(t||o)}})();static \u0275cmp=m({type:o,selectors:[["p-treeSelect"],["p-treeselect"],["p-tree-select"]],contentQueries:function(i,t,d){if(i&1&&(R(d,$t,4),R(d,eo,4),R(d,to,4),R(d,oo,4),R(d,io,4),R(d,lo,4),R(d,no,4),R(d,ro,4),R(d,ao,4),R(d,so,4),R(d,co,4),R(d,po,4),R(d,Je,4)),i&2){let a;k(a=V())&&(t.valueTemplate=a.first),k(a=V())&&(t.headerTemplate=a.first),k(a=V())&&(t.emptyTemplate=a.first),k(a=V())&&(t.footerTemplate=a.first),k(a=V())&&(t.clearIconTemplate=a.first),k(a=V())&&(t.triggerIconTemplate=a.first),k(a=V())&&(t.dropdownIconTemplate=a.first),k(a=V())&&(t.filterIconTemplate=a.first),k(a=V())&&(t.closeIconTemplate=a.first),k(a=V())&&(t.itemTogglerIconTemplate=a.first),k(a=V())&&(t.itemCheckboxIconTemplate=a.first),k(a=V())&&(t.itemLoadingIconTemplate=a.first),k(a=V())&&(t.templates=a)}},viewQuery:function(i,t){if(i&1&&(G(mo,5),G(uo,5),G(fo,5),G(ho,5),G(go,5),G(vo,5),G(So,5)),i&2){let d;k(d=V())&&(t.focusInput=d.first),k(d=V())&&(t.filterViewChild=d.first),k(d=V())&&(t.treeViewChild=d.first),k(d=V())&&(t.panelEl=d.first),k(d=V())&&(t.overlayViewChild=d.first),k(d=V())&&(t.firstHiddenFocusableElementOnOverlay=d.first),k(d=V())&&(t.lastHiddenFocusableElementOnOverlay=d.first)}},hostVars:4,hostBindings:function(i,t){i&1&&A("mousedown",function(a){return t.onHostClick(a)}),i&2&&(Re(t.sx("root")),O(t.cn(t.cx("root"),t.containerStyleClass)))},inputs:{inputId:"inputId",scrollHeight:"scrollHeight",metaKeySelection:[2,"metaKeySelection","metaKeySelection",j],display:"display",selectionMode:"selectionMode",tabindex:"tabindex",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",placeholder:"placeholder",panelClass:"panelClass",panelStyle:"panelStyle",panelStyleClass:"panelStyleClass",containerStyle:"containerStyle",containerStyleClass:"containerStyleClass",labelStyle:"labelStyle",labelStyleClass:"labelStyleClass",overlayOptions:"overlayOptions",emptyMessage:"emptyMessage",filter:[2,"filter","filter",j],filterBy:"filterBy",filterMode:"filterMode",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",filterInputAutoFocus:[2,"filterInputAutoFocus","filterInputAutoFocus",j],propagateSelectionDown:[2,"propagateSelectionDown","propagateSelectionDown",j],propagateSelectionUp:[2,"propagateSelectionUp","propagateSelectionUp",j],showClear:[2,"showClear","showClear",j],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",j],virtualScroll:"virtualScroll",virtualScrollItemSize:"virtualScrollItemSize",virtualScrollOptions:"virtualScrollOptions",autofocus:[2,"autofocus","autofocus",j],options:"options",loading:[2,"loading","loading",j],loadingMode:"loadingMode",size:[1,"size"],variant:[1,"variant"],fluid:[1,"fluid"],appendTo:[1,"appendTo"]},outputs:{onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse",onShow:"onShow",onHide:"onHide",onClear:"onClear",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onNodeUnselect:"onNodeUnselect",onNodeSelect:"onNodeSelect"},features:[de([ei,Ee,{provide:Ct,useExisting:o},{provide:nt,useExisting:o}]),Ae([ne]),We],decls:16,vars:35,consts:[["focusInput",""],["defaultValueTemplate",""],["overlay",""],["content",""],["chipsValueTemplate",""],["panel",""],["firstHiddenFocusableEl",""],["tree",""],["lastHiddenFocusableEl",""],["empty",""],["togglericon",""],["checkboxicon",""],["loadingicon",""],[1,"p-hidden-accessible",3,"pBind"],["type","text","role","combobox","readonly","",3,"focus","blur","keydown","pAutoFocus","pBind"],[3,"pBind"],[3,"ngStyle","pBind"],[4,"ngIf","ngIfElse"],[4,"ngIf"],["role","button","aria-haspopup","tree",3,"pBind"],["data-p-icon","chevron-down",3,"class","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"visibleChange","onAnimationStart","onBeforeHide","onShow","onHide","hostAttrSelector","visible","options","target","appendTo","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind",4,"ngFor","ngForOf"],[3,"label","pt"],["data-p-icon","times",3,"class","pBind","click",4,"ngIf"],[3,"class","pBind","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-down",3,"pBind"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus","pBind"],[3,"selectionChange","onNodeExpand","onNodeCollapse","onNodeSelect","onNodeUnselect","value","propagateSelectionDown","propagateSelectionUp","selectionMode","selection","metaKeySelection","emptyMessage","filter","filterBy","filterMode","filterPlaceholder","filterLocale","filteredNodes","virtualScroll","virtualScrollItemSize","virtualScrollOptions","_templateMap","loading","filterInputAutoFocus","pt","loadingMode"]],template:function(i,t){if(i&1){let d=q();n(0,"div",13)(1,"input",14,0),A("focus",function(C){return E(d),I(t.onInputFocus(C))})("blur",function(C){return E(d),I(t.onInputBlur(C))})("keydown",function(C){return E(d),I(t.onKeyDown(C))}),r()(),n(3,"div",15)(4,"div",16),N(5,To,2,5,"ng-container",17)(6,Eo,3,2,"ng-template",null,1,z),r()(),N(8,Bo,3,2,"ng-container",18),n(9,"div",19),N(10,Lo,1,3,"svg",20)(11,Ro,2,4,"span",21),r(),n(12,"p-overlay",22,2),g("visibleChange",function(C){return E(d),h(t.overlayVisible,C)||(t.overlayVisible=C),I(C)}),A("onAnimationStart",function(C){return E(d),I(t.onOverlayAnimationStart(C))})("onBeforeHide",function(C){return E(d),I(t.onOverlayBeforeHide(C))})("onShow",function(C){return E(d),I(t.onShow.emit(C))})("onHide",function(C){return E(d),I(t.hide(C))}),N(14,$o,15,54,"ng-template",null,3,z),r()}if(i&2){let d=X(7);s("pBind",t.ptm("hiddenInputContainer")),J("data-p-hidden-accessible",!0),c(),s("pAutoFocus",t.autofocus)("pBind",t.ptm("hiddenInput")),J("id",t.inputId)("disabled",t.$disabled()?"":void 0)("tabindex",t.$disabled()?-1:t.tabindex)("aria-controls",t.overlayVisible?t.listId:null)("aria-haspopup","tree")("aria-expanded",t.overlayVisible??!1)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel||(t.label==="p-emptylabel"?void 0:t.label)),c(2),O(t.cx("labelContainer")),s("pBind",t.ptm("labelContainer")),c(),O(t.cn(t.cx("label"),t.labelStyleClass)),s("ngStyle",t.labelStyle)("pBind",t.ptm("label")),c(),s("ngIf",t.valueTemplate||t._valueTemplate)("ngIfElse",d),c(3),s("ngIf",t.checkValue()&&!t.$disabled()&&t.showClear),c(),O(t.cx("dropdown")),s("pBind",t.ptm("dropdown")),J("aria-expanded",t.overlayVisible??!1)("aria-label","treeselect trigger"),c(),s("ngIf",!t.triggerIconTemplate&&!t._triggerIconTemplate&&!t.dropdownIconTemplate&&!t._dropdownIconTemplate),c(),s("ngIf",t.triggerIconTemplate||t._triggerIconTemplate||t.dropdownIconTemplate||t._dropdownIconTemplate),c(),s("hostAttrSelector",t.$attrSelector),f("visible",t.overlayVisible),s("options",t.overlayOptions)("target","@parent")("appendTo",t.$appendTo())("pt",t.ptm("pcOverlay"))}},dependencies:[P,Ke,qe,Ge,Ue,ut,fe,wt,rt,dt,st,mt,ne],encapsulation:2,changeDetection:0})}return o})(),x=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=Le({type:o});static \u0275inj=Ve({imports:[S,fe,fe]})}return o})();var Ft=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:'<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-basic-demo',
    templateUrl: './tree-select-basic-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectBasicDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["basic-doc"]],decls:20,vars:3,consts:[["routerLink","/tree"],[1,"card","flex","justify-center"],["placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-basic-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"TreeSelect is used as a controlled component with "),n(3,"i"),l(4,"ng-model"),r(),l(5," directive along with an "),n(6,"i"),l(7,"options"),r(),l(8," collection. Internally "),n(9,"a",0),l(10,"Tree"),r(),l(11," component is used so the options model is based on TreeNode API."),r(),n(12,"p"),l(13,"In single selection mode, value binding should be the "),n(14,"i"),l(15,"key"),r(),l(16," value of a node."),r()(),n(17,"div",1)(18,"p-treeselect",2),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(19,"app-code",3)),i&2&&(c(18),f("ngModel",t.selectedNodes),s("options",t.nodes),c(),s("code",t.code))},dependencies:[x,S,M,b,T,Q,$,v,w],encapsulation:2})}return o})();var Et=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:'<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-checkbox-demo',
    templateUrl: './tree-select-checkbox-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectCheckboxDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["checkbox-doc"]],decls:12,vars:4,consts:[[1,"card","flex","justify-center"],["display","chip","selectionMode","checkbox","placeholder","Select Item",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","metaKeySelection"],["selector","tree-select-checkbox-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"Selection of multiple nodes via checkboxes is enabled by configuring "),n(3,"i"),l(4,"selectionMode"),r(),l(5," as "),n(6,"i"),l(7,"checkbox"),r(),l(8,"."),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(11,"app-code",2)),i&2&&(c(10),f("ngModel",t.selectedNodes),s("options",t.nodes)("metaKeySelection",!1),c(),s("code",t.code))},dependencies:[x,S,M,b,T,v,w],encapsulation:2})}return o})();var It=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:'<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" [disabled]="true" placeholder="TreeSelect" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" [disabled]="true" placeholder="TreeSelect" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-disabled-demo',
    templateUrl: './tree-select-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectDisabledDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["disabled-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","TreeSelect",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options","disabled"],["selector","tree-select-disabled-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"When "),n(3,"i"),l(4,"disabled"),r(),l(5," is present, the element cannot be edited and focused."),r()(),n(6,"div",0)(7,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(8,"app-code",2)),i&2&&(c(7),f("ngModel",t.selectedNodes),s("options",t.nodes)("disabled",!0),c(),s("code",t.code))},dependencies:[x,S,M,b,T,v,w],encapsulation:2})}return o})();var Dt=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:'<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" variant="filled" [options]="nodes" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" variant="filled" [options]="nodes" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-filled-demo',
    templateUrl: './tree-select-filled-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectFilledDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["filled-doc"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["variant","filled","placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-filled-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"Specify the "),n(3,"i"),l(4,"variant"),r(),l(5," property as "),n(6,"i"),l(7,"filled"),r(),l(8," to display the component with a higher visual emphasis than the default "),n(9,"i"),l(10,"outlined"),r(),l(11," style."),r()(),n(12,"div",0)(13,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(14,"app-code",2)),i&2&&(c(13),f("ngModel",t.selectedNodes),s("options",t.nodes),c(),s("code",t.code))},dependencies:[M,b,T,x,S,v,w],encapsulation:2})}return o})();var kt=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:'<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" [filter]="true" [filterInputAutoFocus]="true" />',html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes"placeholder="Select Item" [filter]="true" [filterInputAutoFocus]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-filter-demo',
    templateUrl: './tree-select-filter-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectFilterDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["filter-doc"]],decls:21,vars:5,consts:[[1,"card","flex","justify-center"],["placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options","filter","filterInputAutoFocus"],["selector","tree-select-filter-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2," Filtering is enabled by adding the "),n(3,"i"),l(4,"filter"),r(),l(5," property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define "),n(6,"i"),l(7,"filterBy"),r(),l(8," property. In addition "),n(9,"i"),l(10,"filterMode"),r(),l(11," specifies the filtering strategy. In "),n(12,"i"),l(13,"lenient"),r(),l(14," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),n(15,"i"),l(16,"strict"),r(),l(17," mode when the query matches a node, filtering continues on all descendants. "),r()(),n(18,"div",0)(19,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(20,"app-code",2)),i&2&&(c(19),f("ngModel",t.selectedNodes),s("options",t.nodes)("filter",!0)("filterInputAutoFocus",!0),c(),s("code",t.code))},dependencies:[M,b,T,x,S,v,w],encapsulation:2})}return o})();var Vt=(()=>{class o{nodeService;nodes;value1;value2;value3;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:`<p-floatlabel class="w-full md:w-80">
    <p-treeselect [(ngModel)]="value1" inputId="over_label" [options]="nodes" class="w-full" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="in">
    <p-treeselect [(ngModel)]="value2" inputId="in_label" [options]="nodes" class="w-full" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel class="w-full md:w-80" variant="on">
    <p-treeselect [(ngModel)]="value3" inputId="on_label" [options]="nodes" class="w-full" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel class="w-full md:w-80">
        <p-treeselect [(ngModel)]="value1" inputId="over_label" [options]="nodes" class="w-full" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="in">
        <p-treeselect [(ngModel)]="value2" inputId="in_label" [options]="nodes" class="w-full" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel class="w-full md:w-80" variant="on">
        <p-treeselect [(ngModel)]="value3" inputId="on_label" [options]="nodes" class="w-full" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'tree-select-floatlabel-demo',
    templateUrl: './tree-select-floatlabel-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect, FloatLabel],
    providers: [NodeService]
})
export class TreeSelectFloatlabelDemo {
    nodes!: any[];

    value1: any;

    value2: any;

    value3: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["floatlabel-doc"]],decls:20,vars:7,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],[1,"w-full","md:w-80"],["inputId","over_label",1,"w-full",3,"ngModelChange","ngModel","options"],["for","over_label"],["variant","in",1,"w-full","md:w-80"],["inputId","in_label",1,"w-full",3,"ngModelChange","ngModel","options"],["for","in_label"],["variant","on",1,"w-full","md:w-80"],["inputId","on_label",1,"w-full",3,"ngModelChange","ngModel","options"],["for","on_label"],["selector","tree-select-floatlabel-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2," A floating label appears on top of the input field when focused. Visit "),n(3,"a",0),l(4,"FloatLabel"),r(),l(5," documentation for more information. "),r()(),n(6,"div",1)(7,"p-floatlabel",2)(8,"p-treeselect",3),g("ngModelChange",function(a){return h(t.value1,a)||(t.value1=a),a}),r(),n(9,"label",4),l(10,"Over Label"),r()(),n(11,"p-floatlabel",5)(12,"p-treeselect",6),g("ngModelChange",function(a){return h(t.value2,a)||(t.value2=a),a}),r(),n(13,"label",7),l(14,"In Label"),r()(),n(15,"p-floatlabel",8)(16,"p-treeselect",9),g("ngModelChange",function(a){return h(t.value3,a)||(t.value3=a),a}),r(),n(17,"label",10),l(18,"On Label"),r()()(),p(19,"app-code",11)),i&2&&(c(8),f("ngModel",t.value1),s("options",t.nodes),c(4),f("ngModel",t.value2),s("options",t.nodes),c(4),f("ngModel",t.value3),s("options",t.nodes),c(3),s("code",t.code))},dependencies:[M,b,T,Q,$,x,S,St,vt,v,w],encapsulation:2})}return o})();var Bt=(()=>{class o{nodeService;nodes;selectedValue;code={basic:`<p-iftalabel class="w-full md:w-80">
    <p-treeselect [(ngModel)]="selectedValue" inputId="t_file" [options]="nodes" class="w-full" />
    <label for="t_file">File</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel class="w-full md:w-80">
        <p-treeselect [(ngModel)]="selectedValue" inputId="t_file" [options]="nodes" class="w-full" />
        <label for="t_file">File</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'tree-select-iftalabel-demo',
    templateUrl: './tree-select-iftalabel-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelectModule, IftaLabelModule],
    providers: [NodeService]
})
export class TreeSelectIftaLabelDemo {
    nodes!: any[];

    selectedValue: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["iftalabel-doc"]],decls:12,vars:3,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],[1,"w-full","md:w-80"],["inputId","t_file",1,"w-full",3,"ngModelChange","ngModel","options"],["for","t_file"],["selector","tree-select-iftalabel-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"IftaLabel is used to create infield top aligned labels. Visit "),n(3,"a",0),l(4,"IftaLabel"),r(),l(5," documentation for more information."),r()(),n(6,"div",1)(7,"p-iftalabel",2)(8,"p-treeselect",3),g("ngModelChange",function(a){return h(t.selectedValue,a)||(t.selectedValue=a),a}),r(),n(9,"label",4),l(10,"File"),r()()(),p(11,"app-code",5)),i&2&&(c(8),f("ngModel",t.selectedValue),s("options",t.nodes),c(3),s("code",t.code))},dependencies:[M,b,T,Q,$,x,S,bt,yt,v,w],encapsulation:2})}return o})();var Lt=(()=>{class o{code={typescript:"import { TreeSelectModule } from 'primeng/treeselect';"};static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["tree-select-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,t){i&1&&p(0,"app-code",0),i&2&&s("code",t.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2})}return o})();var Wt=(()=>{class o{nodeService;nodes;selectedValue1;selectedValue2;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:`<p-treeselect [invalid]="selectedValue1 === undefined" [(ngModel)]="selectedValue1" [options]="nodes" placeholder="TreeSelect" class="md:w-80 w-full" />
<p-treeselect [invalid]="selectedValue2 === undefined" [(ngModel)]="selectedValue2" [options]="nodes" placeholder="TreeSelect" class="md:w-80 w-full" />`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-treeselect [invalid]="selectedValue1 === undefined" [(ngModel)]="selectedValue1" [options]="nodes" placeholder="TreeSelect" class="md:w-80 w-full" />
    <p-treeselect [invalid]="selectedValue2 === undefined" [(ngModel)]="selectedValue2" [options]="nodes" placeholder="TreeSelect" class="md:w-80 w-full" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-invalid-demo',
    templateUrl: './tree-select-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectInvalidDemo {
    nodes!: any[];

    selectedValue1: any;

    selectedValue2: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["invalid-doc"]],decls:10,vars:7,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["placeholder","TreeSelect",1,"md:w-80","w-full",3,"ngModelChange","invalid","ngModel","options"],["selector","tree-select-invalid-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"The invalid state is applied using the "),n(3,"i"),l(4,"\u2060invalid"),r(),l(5," property to indicate failed validation, which can be integrated with Angular Forms."),r()(),n(6,"div",0)(7,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedValue1,a)||(t.selectedValue1=a),a}),r(),n(8,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedValue2,a)||(t.selectedValue2=a),a}),r()(),p(9,"app-code",2)),i&2&&(c(7),s("invalid",t.selectedValue1===void 0),f("ngModel",t.selectedValue1),s("options",t.nodes),c(),s("invalid",t.selectedValue2===void 0),f("ngModel",t.selectedValue2),s("options",t.nodes),c(),s("code",t.code))},dependencies:[M,b,T,x,S,v,w],encapsulation:2})}return o})();var At=(()=>{class o{cd;selectedNodes=[];nodes=Me(void 0);loading=Me(!1);constructor(e){this.cd=e}ngOnInit(){this.loading.set(!0),this.nodes.set(this.initiateNodes())}initiateNodes(){return[{key:"0",label:"Node 0",leaf:!1,loading:!1},{key:"1",label:"Node 1",leaf:!1,loading:!1},{key:"2",label:"Node 2",leaf:!1,loading:!1}]}onNodeExpand(e){e.node.children||(e.node.loading=!0,setTimeout(()=>{let i=this.nodes(),t=te({},e.node);t.children=[];for(let a=0;a<3;a++)t.children.push({key:e.node.key+"-"+a,label:"Lazy "+e.node.label+"-"+a});let d=parseInt(t.key,10);i[d]=Ie(te({},t),{loading:!1}),this.nodes.set([...i])},500))}code={basic:'<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes()" (onNodeExpand)="onNodeExpand($event)" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" loadingMode="icon"/>',html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes()" (onNodeExpand)="onNodeExpand($event)" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" loadingMode="icon"/>
</div>`,typescript:`import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-lazy-demo',
    templateUrl: './tree-select-lazy-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect]
})
export class TreeSelectLazyDemo {
    selectedNodes: TreeNode[] = [];

    nodes = signal<TreeNode[]>(undefined);

    ngOnInit() {
        this.nodes.set(this.initiateNodes());
    }

    initiateNodes(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false,
                loading: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false,
                loading: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false,
                loading: false
            }
        ];
    }

    onNodeExpand(event: any) {
        if (!event.node.children) {
            event.node.loading = true;

            setTimeout(() => {
                const _nodes = this.nodes();
                let _node = { ...event.node };
                _node.children = [];

                for (let i = 0; i < 3; i++) {
                    _node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Lazy ' + event.node.label + '-' + i
                    });
                }

                const key = parseInt(_node.key, 10);
                _nodes[key] = { ..._node, loading: false };
                this.nodes.set([..._nodes]);
            }, 500);
        }
    }
}`,data:`{
    key: '0',
    label: 'Node 0',
    leaf: false,
    loading: false
},
...`};static \u0275fac=function(i){return new(i||o)(y(He))};static \u0275cmp=m({type:o,selectors:[["lazy-doc"]],decls:12,vars:5,consts:[[1,"card","flex","justify-center"],["display","chip","selectionMode","checkbox","placeholder","Select Item","loadingMode","icon",1,"w-full","md:w-80",3,"ngModelChange","onNodeExpand","ngModel","options","metaKeySelection","loading"],["selector","tree-select-basic-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2," Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using "),n(3,"i"),l(4,"loading"),r(),l(5," property and "),n(6,"i"),l(7,"onNodeExpand"),r(),l(8," method. "),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),A("onNodeExpand",function(a){return t.onNodeExpand(a)}),r()(),p(11,"app-code",2)),i&2&&(c(10),f("ngModel",t.selectedNodes),s("options",t.nodes())("metaKeySelection",!1)("loading",t.loading),c(),s("code",t.code))},dependencies:[M,b,T,x,S,v,w],encapsulation:2})}return o})();var Rt=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}exampleCode={typescript:`{
    '0-0': true,
    '0-1-0': true
}`};code={basic:'<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" [metaKeySelection]="false" selectionMode="multiple" placeholder="Select Item" />',html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" [metaKeySelection]="false" selectionMode="multiple" placeholder="Select Item" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-multiple-demo',
    templateUrl: './tree-select-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectMultipleDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["multiple-doc"]],decls:21,vars:6,consts:[[3,"code","hideToggleCode"],[1,"card","flex","justify-center"],["selectionMode","multiple","placeholder","Select Item",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","metaKeySelection"],["selector","tree-select-multiple-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2," More than one node is selectable by setting "),n(3,"i"),l(4,"selectionMode"),r(),l(5," to "),n(6,"i"),l(7,"multiple"),r(),l(8,". By default in multiple selection mode, metaKey press (e.g. "),n(9,"i"),l(10,"\u2318"),r(),l(11,") is necessary to add to existing selections however this can be configured with disabling the "),n(12,"i"),l(13,"metaKeySelection"),r(),l(14," property. Note that in touch enabled devices, TreeSelect always ignores metaKey. "),r(),n(15,"p"),l(16,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."),r()(),p(17,"app-code",0),n(18,"div",1)(19,"p-treeselect",2),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(20,"app-code",3)),i&2&&(c(17),s("code",t.exampleCode)("hideToggleCode",!0),c(2),f("ngModel",t.selectedNodes),s("options",t.nodes)("metaKeySelection",!1),c(),s("code",t.code))},dependencies:[x,S,M,b,T,v,w],encapsulation:2})}return o})();function ii(o,u){o&1&&(n(0,"p-message",4),l(1,"Selection is required."),r())}var zt=(()=>{class o{fb;nodeService;messageService=K(ue);nodes;exampleForm;formSubmitted=!1;constructor(e,i){this.fb=e,this.nodeService=i,this.nodeService.getFiles().then(t=>this.nodes=t),this.exampleForm=this.fb.group({selectedNodes:["",Ye.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(e){return this.exampleForm.get(e)?.invalid&&this.formSubmitted}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full md:w-80">
    <div class="flex flex-col gap-1">
        <p-treeselect class="md:w-80 w-full" formControlName="selectedNodes" [options]="nodes" placeholder="Select Item" [invalid]="isInvalid('selectedNodes')" />

        @if (isInvalid('selectedNodes')) {
            <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-full md:w-80">
        <div class="flex flex-col gap-1">
            <p-treeselect class="md:w-80 w-full" formControlName="selectedNodes" [options]="nodes" placeholder="Select Item" [invalid]="isInvalid('selectedNodes')" />

            @if (isInvalid('selectedNodes')) {
                <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NodeService } from '@/service/nodeservice';
import { TreeSelectModule } from 'primeng/treeselect';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tree-select-reactive-forms-demo',
    templateUrl: './tree-select-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, TreeSelectModule, ButtonModule, ToastModule, MessageModule],
    providers: [NodeService]
})
export class TreeSelectReactiveFormsDemo {
    messageService = inject(MessageService);

    nodes!: any[];

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(
        private fb: FormBuilder,
        private nodeService: NodeService
    ) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
        this.exampleForm = this.fb.group({
            selectedNodes: ['', Validators.required]
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
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(ot),y(_))};static \u0275cmp=m({type:o,selectors:[["reactive-forms-doc"]],decls:16,vars:5,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-full","md:w-80",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","selectedNodes","placeholder","Select Item",1,"md:w-80","w-full",3,"options","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","tree-select-reactive-forms-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"TreeSelect can also be used with reactive forms. In this case, the "),n(3,"i"),l(4,"formControlName"),r(),l(5," property is used to bind the component to a form control."),r()(),p(6,"p-toast"),n(7,"div",0)(8,"form",1),A("ngSubmit",function(){return t.onSubmit()}),n(9,"div",2),p(10,"p-treeselect",3),ae(11,ii,2,0,"p-message",4),r(),n(12,"button",5)(13,"span",6),l(14,"Submit"),r()()()(),p(15,"app-code",7)),i&2&&(c(8),s("formGroup",t.exampleForm),c(2),s("options",t.nodes)("invalid",t.isInvalid("selectedNodes")),c(),se(t.isInvalid("selectedNodes")?11:-1),c(4),s("code",t.code))},dependencies:[P,it,ge,b,he,$e,et,x,S,ee,Se,ve,we,_e,be,ye,v,w],encapsulation:2})}return o})();var Ht=(()=>{class o{nodeService;nodes;value1;value2;value3;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:`<p-treeselect [(ngModel)]="value1" [options]="nodes" size="small" placeholder="Small" class="md:w-80 w-full" />
<p-treeselect [(ngModel)]="value2" [options]="nodes" placeholder="Normal" class="md:w-80 w-full" />
<p-treeselect [(ngModel)]="value3" [options]="nodes" size="large" placeholder="Large" class="md:w-80 w-full" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-treeselect [(ngModel)]="value1" [options]="nodes" size="small" placeholder="Small" class="md:w-80 w-full" />
    <p-treeselect [(ngModel)]="value2" [options]="nodes" placeholder="Normal" class="md:w-80 w-full" />
    <p-treeselect [(ngModel)]="value3" [options]="nodes" size="large" placeholder="Large" class="md:w-80 w-full" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-sizes-demo',
    templateUrl: './tree-select-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectSizesDemo {
    nodes!: any[];

    value1: any;

    value2: any;

    value3: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["sizes-doc"]],decls:14,vars:7,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["placeholder","Normal",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["size","large","placeholder","Large",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-sizes-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"TreeSelect provides "),n(3,"i"),l(4,"small"),r(),l(5," and "),n(6,"i"),l(7,"large"),r(),l(8," sizes as alternatives to the base."),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(t.value1,a)||(t.value1=a),a}),r(),n(11,"p-treeselect",2),g("ngModelChange",function(a){return h(t.value2,a)||(t.value2=a),a}),r(),n(12,"p-treeselect",3),g("ngModelChange",function(a){return h(t.value3,a)||(t.value3=a),a}),r()(),p(13,"app-code",4)),i&2&&(c(10),f("ngModel",t.value1),s("options",t.nodes),c(),f("ngModel",t.value2),s("options",t.nodes),c(),f("ngModel",t.value3),s("options",t.nodes),c(),s("code",t.code))},dependencies:[M,b,T,x,S,v,w],encapsulation:2})}return o})();function li(o,u){o&1&&p(0,"i",6)}function ni(o,u){o&1&&(n(0,"div",7),l(1,"Available Files"),r())}function ri(o,u){o&1&&(n(0,"div",8),p(1,"p-button",9)(2,"p-button",10),r())}var jt=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:`<p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item">
    <ng-template #dropdownicon>
        <i class="pi pi-search"></i>
    </ng-template>
    <ng-template #header>
        <div class="font-medium px-3 py-2">Available Files</div>
    </ng-template>
    <ng-template #footer>
        <div class="px-3 pt-1 pb-2 flex justify-between">
            <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
            <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-plus" />
        </div>
    </ng-template>
</p-treeselect>`,html:`<div class="card flex justify-center">
    <p-treeselect class="md:w-80 w-full" [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item">
        <ng-template #dropdownicon>
            <i class="pi pi-search"></i>
        </ng-template>
        <ng-template #header>
            <div class="font-medium px-3 py-2">Available Files</div>
        </ng-template>
        <ng-template #footer>
            <div class="px-3 pt-1 pb-2 flex justify-between">
                <p-button label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
                <p-button label="Remove All" severity="danger" text size="small" icon="pi pi-plus" />
            </div>
        </ng-template>
    </p-treeselect>
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tree-select-template-demo',
    templateUrl: './tree-select-template-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect, ButtonModule],
    providers: [NodeService]
  })
export class TreeSelectTemplateDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["template-doc"]],decls:12,vars:3,consts:[["dropdownicon",""],["header",""],["footer",""],[1,"card","flex","justify-center"],["placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options"],["selector","tree-select-template-demo",3,"code"],[1,"pi","pi-search"],[1,"font-medium","px-3","py-2"],[1,"px-3","pt-1","pb-2","flex","justify-between"],["label","Add New","severity","secondary","text","","size","small","icon","pi pi-plus"],["label","Remove All","severity","danger","text","","size","small","icon","pi pi-plus"]],template:function(i,t){if(i&1){let d=q();n(0,"app-docsectiontext")(1,"p"),l(2,"TreeSelect offers multiple templates for customization through templating."),r()(),n(3,"div",3)(4,"p-treeselect",4),g("ngModelChange",function(C){return E(d),h(t.selectedNodes,C)||(t.selectedNodes=C),I(C)}),N(5,li,1,0,"ng-template",null,0,z)(7,ni,2,0,"ng-template",null,1,z)(9,ri,3,0,"ng-template",null,2,z),r()(),p(11,"app-code",5)}i&2&&(c(4),f("ngModel",t.selectedNodes),s("options",t.nodes),c(7),s("code",t.code))},dependencies:[M,b,T,x,S,ee,ct,v,w],encapsulation:2})}return o})();function ai(o,u){o&1&&(n(0,"p-message",6),l(1,"Selection is required."),r())}var Pt=(()=>{class o{nodeService;messageService=K(ue);selectedNodes;nodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}onSubmit(e){e.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),e.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full md:w-80">
    <div class="flex flex-col gap-1">
        <p-treeselect #node="ngModel" [(ngModel)]="selectedNodes" [invalid]="node.invalid && exampleForm.submitted" name="node" class="md:w-80 w-full" [options]="nodes" placeholder="Select Item" required />
        @if (node.invalid && exampleForm.submitted) {
            <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4 w-full md:w-80">
        <div class="flex flex-col gap-1">
            <p-treeselect #node="ngModel" [(ngModel)]="selectedNodes" [invalid]="node.invalid && exampleForm.submitted" name="node" class="md:w-80 w-full" [options]="nodes" placeholder="Select Item" required />
            @if (node.invalid && exampleForm.submitted) {
                <p-message severity="error" size="small" variant="simple">Selection is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NodeService } from '@/service/nodeservice';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TreeSelectModule } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-template-driven-forms-demo',
    templateUrl: './tree-select-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelectModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    selectedNodes: any;

    nodes!: any[];

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["template-driven-forms-doc"]],decls:13,vars:5,consts:[["exampleForm","ngForm"],["node","ngModel"],[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4","w-full","md:w-80",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","node","placeholder","Select Item","required","",1,"md:w-80","w-full",3,"ngModelChange","ngModel","invalid","options"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","tree-select-template-driven-forms-demo",3,"code"]],template:function(i,t){if(i&1){let d=q();p(0,"app-docsectiontext")(1,"p-toast"),n(2,"div",2)(3,"form",3,0),A("ngSubmit",function(){E(d);let C=X(4);return I(t.onSubmit(C))}),n(5,"div",4)(6,"p-treeselect",5,1),g("ngModelChange",function(C){return E(d),h(t.selectedNodes,C)||(t.selectedNodes=C),I(C)}),r(),ae(8,ai,2,0,"p-message",6),r(),n(9,"button",7)(10,"span",8),l(11,"Submit"),r()()()(),p(12,"app-code",9)}if(i&2){let d=X(4),a=X(7);c(6),f("ngModel",t.selectedNodes),s("invalid",a.invalid&&d.submitted)("options",t.nodes),c(2),se(a.invalid&&d.submitted?8:-1),c(4),s("code",t.code)}},dependencies:[P,M,ge,b,he,tt,T,Ze,x,S,ee,Se,ve,we,_e,be,ye,v,w],encapsulation:2})}return o})();var si=()=>({scrollHeight:"200px"}),Qt=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getLargeTreeNodes().then(i=>this.nodes=i)}code={basic:`<p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="35" [virtualScrollOptions]="{scrollHeight: '200px'}" />`,html:`<div class="card flex justify-center">
    <p-treeselect class="w-full md:w-80" [(ngModel)]="selectedNodes" [options]="nodes" display="chip" [metaKeySelection]="false" selectionMode="checkbox" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="35" [virtualScrollOptions]="{scrollHeight: '200px'}" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-virtual-scroll-demo',
    templateUrl: './tree-select-virtual-scroll-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
})
export class TreeSelectVirtualScrollDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getLargeTreeNodes().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"]};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["virtual-scroll-doc"]],decls:12,vars:8,consts:[[1,"card","flex","justify-center"],["display","chip","selectionMode","checkbox","placeholder","Select Item",1,"w-full","md:w-80",3,"ngModelChange","ngModel","options","metaKeySelection","virtualScroll","virtualScrollItemSize","virtualScrollOptions"],["selector","tree-select-virtual-scroll-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),n(3,"i"),l(4,"virtualScroll"),r(),l(5," property to true and defining "),n(6,"i"),l(7,"virtualScrollItemSize"),r(),l(8," to specify the height of an item. "),r()(),n(9,"div",0)(10,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(11,"app-code",2)),i&2&&(c(10),f("ngModel",t.selectedNodes),s("options",t.nodes)("metaKeySelection",!1)("virtualScroll",!0)("virtualScrollItemSize",35)("virtualScrollOptions",ce(7,si)),c(),s("code",t.code))},dependencies:[M,b,T,x,S,v,w],encapsulation:2})}return o})();var Kt=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:'<p-treeselect [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" fluid />',html:`<div class="card">
    <p-treeselect [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-fluid-demo',
    templateUrl: './tree-select-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectFluidDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["fluid-doc"]],decls:6,vars:3,consts:[[1,"card"],["placeholder","Select Item","fluid","",3,"ngModelChange","ngModel","options"],["selector","tree-select-fluid-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"The fluid prop makes the component take up the full width of its container when set to true."),r()(),n(3,"div",0)(4,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(5,"app-code",2)),i&2&&(c(4),f("ngModel",t.selectedNodes),s("options",t.nodes),c(),s("code",t.code))},dependencies:[x,S,M,b,T,Q,v,w],encapsulation:2})}return o})();var qt=(()=>{class o{nodeService;nodes;selectedNodes;constructor(e){this.nodeService=e,this.nodeService.getFiles().then(i=>this.nodes=i)}code={basic:'<p-treeselect [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" class="md:w-80 w-full" [showClear]="true" />',html:`<div class="card flex justify-center">
    <p-treeselect [(ngModel)]="selectedNodes" [options]="nodes" placeholder="Select Item" class="md:w-80 w-full" [showClear]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { NodeService } from '@/service/nodeservice';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from 'primeng/treeselect';

@Component({
    selector: 'tree-select-clear-icon-demo',
    templateUrl: './tree-select-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, TreeSelect],
    providers: [NodeService]
  })
export class TreeSelectClearIconDemo {
    nodes!: any[];

    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`};static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["clear-icon-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],["placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options","showClear"],["selector","tree-select-clear-icon-demo",3,"code"]],template:function(i,t){i&1&&(n(0,"app-docsectiontext")(1,"p"),l(2,"When "),n(3,"i"),l(4,"showClear"),r(),l(5," is enabled, a clear icon is displayed to clear the value."),r()(),n(6,"div",0)(7,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()(),p(8,"app-code",2)),i&2&&(c(7),f("ngModel",t.selectedNodes),s("options",t.nodes)("showClear",!0),c(),s("code",t.code))},dependencies:[x,S,M,b,T,Q,v,w],encapsulation:2})}return o})();var Ut=(()=>{class o{nodeService;selectedNodes=null;nodes;docs=[{data:xe("TreeSelect"),key:"TreeSelect"}];constructor(e){this.nodeService=e}ngOnInit(){this.nodeService.getFiles().then(e=>this.nodes=e)}static \u0275fac=function(i){return new(i||o)(y(_))};static \u0275cmp=m({type:o,selectors:[["treeselect-pt-viewer"]],features:[de([_])],decls:2,vars:5,consts:[[3,"docs"],["selectionMode","checkbox","placeholder","Select Item",1,"md:w-80","w-full",3,"ngModelChange","ngModel","options","filter","showClear"]],template:function(i,t){i&1&&(n(0,"app-docptviewer",0)(1,"p-treeselect",1),g("ngModelChange",function(a){return h(t.selectedNodes,a)||(t.selectedNodes=a),a}),r()()),i&2&&(s("docs",t.docs),c(),f("ngModel",t.selectedNodes),s("options",t.nodes)("filter",!0)("showClear",!0))},dependencies:[P,_t,x,S,M,b,T],encapsulation:2})}return o})();var Gt=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:Ut},{id:"pt.doc.treeselect",label:"TreeSelect PT Options",component:ft,data:xe("TreeSelect")}];static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["treeselect-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(i,t){i&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),l(3,"TreeSelect Pass Through"),r()(),p(4,"app-docsection",2),r()),i&2&&(c(4),s("docs",t.docs))},dependencies:[P,ht],encapsulation:2})}return o})();var di=()=>["TreeSelect","TreeNode"],Jt=(()=>{class o{ptComponent=Gt;docs=[{id:"import",label:"Import",component:Lt},{id:"basic",label:"Basic",component:Ft},{id:"multiple",label:"Multiple",component:Rt},{id:"checkbox",label:"Checkbox",component:Et},{id:"virtual-scroll-doc",label:"Virtual Scroll",component:Qt},{id:"lazy",label:"Lazy",component:At},{id:"filter",label:"Filter",component:kt},{id:"template",label:"Template",component:jt},{id:"floatlabel",label:"Float Label",component:Vt},{id:"iftalabel",label:"Ifta Label",component:Bt},{id:"clearicon",label:"Clear Icon",component:qt},{id:"sizes",label:"Sizes",component:Ht},{id:"fluid",label:"Fluid",component:Kt},{id:"filled",label:"Filled",component:Dt},{id:"disabled",label:"Disabled",component:It},{id:"invalid",label:"Invalid",component:Wt},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Pt},{id:"reactive",label:"Reactive Forms",component:zt}]},{id:"accessibility",label:"Accessibility",component:xt}];static \u0275fac=function(i){return new(i||o)};static \u0275cmp=m({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular TreeSelect Component","header","TreeSelect","description","TreeSelect is a form component to choose from hierarchical data.","themeDocs","treeselect",3,"docs","apiDocs","ptDocs"]],template:function(i,t){i&1&&p(0,"app-doc",0),i&2&&s("docs",t.docs)("apiDocs",ce(3,di))("ptDocs",t.ptComponent)},dependencies:[gt],encapsulation:2})}return o})();var Rr=[{path:"",component:Jt}];export{Rr as default};
