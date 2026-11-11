import{a as Je,c as Xe,d as Ye}from"./chunk-6D4BYQID.js";import"./chunk-APBUBGZC.js";import"./chunk-RTRG5JID.js";import{a as re,b as Ge}from"./chunk-JNUBCW5H.js";import"./chunk-7ZO4CZ3H.js";import{a as h}from"./chunk-5XWBYR75.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{f as De,i as Be,u as Fe}from"./chunk-CTI5WBER.js";import"./chunk-EZDHLOD5.js";import{b as ze}from"./chunk-FKOOMXTU.js";import{a as w,b as I}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as We}from"./chunk-XCUGNKAG.js";import{a as F,b as He}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{h as Me}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ba as je,ea as Qe,fa as $e,ha as qe,m as Ke,p as Re,q as Ue,t as Ne}from"./chunk-MCW4FHXZ.js";import{Ea as Pe,Fa as ie,Ia as ke,La as Ve,Ma as Ae,Na as X,h as S,la as le,ma as we,ya as Ie}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{k as H,n as Ee,r as Le,w as C,y as ae}from"./chunk-D2XKNHFS.js";import{$a as _,Eb as l,Fb as o,Gb as n,Gc as v,Hb as f,La as Q,Lb as U,Mb as N,Ob as xe,Qa as p,S as de,Sb as $,T as ue,Ub as E,Uc as K,V as fe,Va as R,X as z,Xb as b,Yb as ne,Yc as j,Zb as x,Zc as Ce,_b as y,aa as D,ba as B,ca as G,gb as g,gc as se,hb as he,hc as r,ic as T,ja as ge,jc as te,kb as ve,lb as _e,mb as d,mc as ye,nc as Se,oa as ee,oc as be,pc as q,rc as O,sc as Te,tc as Oe,vc as A,wb as J}from"./chunk-O3KMSE75.js";import{a as V}from"./chunk-GAL4ENT6.js";var Ze=(()=>{class t{code={html:`<span id="lb">Options</span>
<p-orderlist ariaLabelledBy="lb" />

<p-orderlist ariaLabel="City" />`};static \u0275fac=function(s){return new(s||t)};static \u0275cmp=g({type:t,selectors:[["order-list-accessibility-doc"]],decls:231,vars:2,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(s,i){s&1&&(o(0,"app-docsectiontext")(1,"h3"),r(2,"Screen Reader"),n(),o(3,"p"),r(4," Value to describe the source listbox and target listbox can be provided with "),o(5,"i"),r(6,"sourceListProps"),n(),r(7," and "),o(8,"i"),r(9,"targetListProps"),n(),r(10," by passing "),o(11,"i"),r(12,"aria-labelledby"),n(),r(13," or "),o(14,"i"),r(15,"aria-label"),n(),r(16," props. The list elements has a "),o(17,"i"),r(18,"listbox"),n(),r(19," role with the "),o(20,"i"),r(21,"aria-multiselectable"),n(),r(22," attribute. Each list item has an "),o(23,"i"),r(24,"option"),n(),r(25," role with "),o(26,"i"),r(27,"aria-selected"),n(),r(28," and "),o(29,"i"),r(30,"aria-disabled"),n(),r(31," as their attributes. "),n(),o(32,"p"),r(33," Controls buttons are "),o(34,"i"),r(35,"button"),n(),r(36," elements with an "),o(37,"i"),r(38,"aria-label"),n(),r(39," that refers to the "),o(40,"i"),r(41,"aria.moveTop"),n(),r(42,", "),o(43,"i"),r(44,"aria.moveUp"),n(),r(45,", "),o(46,"i"),r(47,"aria.moveDown"),n(),r(48,", "),o(49,"i"),r(50,"aria.moveBottom"),n(),r(51,","),o(52,"i"),r(53,"aria.moveTo"),n(),r(54,", "),o(55,"i"),r(56,"aria.moveAllTo"),n(),r(57,", "),o(58,"i"),r(59,"aria.moveFrom"),n(),r(60," and "),o(61,"i"),r(62,"aria.moveAllFrom"),n(),r(63," properties of the "),o(64,"a",0),r(65,"locale"),n(),r(66," API by default, alternatively you may use"),o(67,"i"),r(68,"moveTopButtonProps"),n(),r(69,", "),o(70,"i"),r(71,"moveUpButtonProps"),n(),r(72,", "),o(73,"i"),r(74,"moveDownButtonProps"),n(),r(75,", "),o(76,"i"),r(77,"moveToButtonProps"),n(),r(78,", "),o(79,"i"),r(80,"moveAllToButtonProps"),n(),r(81,", "),o(82,"i"),r(83,"moveFromButtonProps"),n(),r(84,", "),o(85,"i"),r(86,"moveFromButtonProps"),n(),r(87," and "),o(88,"i"),r(89,"moveAllFromButtonProps"),n(),r(90," to customize the buttons like overriding the default "),o(91,"i"),r(92,"aria-label"),n(),r(93," attributes. "),n(),f(94,"app-code",1),o(95,"h3"),r(96,"OrderList Keyboard Support"),n(),o(97,"div",2)(98,"table",3)(99,"thead")(100,"tr")(101,"th"),r(102,"Key"),n(),o(103,"th"),r(104,"Function"),n()()(),o(105,"tbody")(106,"tr")(107,"td")(108,"i"),r(109,"tab"),n()(),o(110,"td"),r(111,"Moves focus to the first selected option, if there is none then first option receives the focus."),n()(),o(112,"tr")(113,"td")(114,"i"),r(115,"up arrow"),n()(),o(116,"td"),r(117,"Moves focus to the previous option."),n()(),o(118,"tr")(119,"td")(120,"i"),r(121,"down arrow"),n()(),o(122,"td"),r(123,"Moves focus to the next option."),n()(),o(124,"tr")(125,"td")(126,"i"),r(127,"enter"),n()(),o(128,"td"),r(129,"Toggles the selected state of the focused option."),n()(),o(130,"tr")(131,"td")(132,"i"),r(133,"space"),n()(),o(134,"td"),r(135,"Toggles the selected state of the focused option."),n()(),o(136,"tr")(137,"td")(138,"i"),r(139,"home"),n()(),o(140,"td"),r(141,"Moves focus to the first option."),n()(),o(142,"tr")(143,"td")(144,"i"),r(145,"end"),n()(),o(146,"td"),r(147,"Moves focus to the last option."),n()(),o(148,"tr")(149,"td")(150,"i"),r(151,"shift"),n(),r(152," + "),o(153,"i"),r(154,"down arrow"),n()(),o(155,"td"),r(156,"Moves focus to the next option and toggles the selection state."),n()(),o(157,"tr")(158,"td")(159,"i"),r(160,"shift"),n(),r(161," + "),o(162,"i"),r(163,"up arrow"),n()(),o(164,"td"),r(165,"Moves focus to the previous option and toggles the selection state."),n()(),o(166,"tr")(167,"td")(168,"i"),r(169,"shift"),n(),r(170," + "),o(171,"i"),r(172,"space"),n()(),o(173,"td"),r(174,"Selects the items between the most recently selected option and the focused option."),n()(),o(175,"tr")(176,"td")(177,"i"),r(178,"control"),n(),r(179," + "),o(180,"i"),r(181,"shift"),n(),r(182," + "),o(183,"i"),r(184,"home"),n()(),o(185,"td"),r(186,"Selects the focused options and all the options up to the first one."),n()(),o(187,"tr")(188,"td")(189,"i"),r(190,"control"),n(),r(191," + "),o(192,"i"),r(193,"shift"),n(),r(194," + "),o(195,"i"),r(196,"end"),n()(),o(197,"td"),r(198,"Selects the focused options and all the options down to the first one."),n()(),o(199,"tr")(200,"td")(201,"i"),r(202,"control"),n(),r(203," + "),o(204,"i"),r(205,"a"),n()(),o(206,"td"),r(207,"Selects all options."),n()()()()(),o(208,"h3"),r(209,"Buttons Keyboard Support"),n(),o(210,"div",2)(211,"table",3)(212,"thead")(213,"tr")(214,"th"),r(215,"Key"),n(),o(216,"th"),r(217,"Function"),n()()(),o(218,"tbody")(219,"tr")(220,"td")(221,"i"),r(222,"enter"),n()(),o(223,"td"),r(224,"Executes button action."),n()(),o(225,"tr")(226,"td")(227,"i"),r(228,"space"),n()(),o(229,"td"),r(230,"Executes button action."),n()()()()()()),s&2&&(p(94),l("code",i.code)("hideToggleCode",!0))},dependencies:[Me,I,w,F],encapsulation:2})}return t})();var et=`
    .p-orderlist {
        display: flex;
        gap: dt('orderlist.gap');
    }

    .p-orderlist .p-listbox {
        flex: 1 1 auto;
    }

    .p-orderlist-controls {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: dt('orderlist.controls.gap');
    }
`;var dt={root:()=>["p-orderlist p-component"],controls:"p-orderlist-controls"},pe=(()=>{class t extends ke{name="orderlist";style=et;classes=dt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=ee(t)))(i||t)}})();static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();var ut=["item"],ft=["empty"],gt=["emptyfilter"],tt=["filter"],ht=["header"],vt=["moveupicon"],_t=["movetopicon"],xt=["movedownicon"],yt=["movebottomicon"],St=["filtericon"],bt=["listelement"],Tt=(t,a,e)=>({$implicit:t,selected:a,index:e}),Ot=t=>({options:t});function Ct(t,a){if(t&1&&(G(),f(0,"svg",16)),t&2){let e=E();l("pt",e.ptm("pcMoveUpButton").icon)}}function wt(t,a){}function It(t,a){t&1&&d(0,wt,0,0,"ng-template")}function Et(t,a){if(t&1&&(G(),f(0,"svg",17)),t&2){let e=E();l("pt",e.ptm("pcMoveTopButton").icon)}}function Lt(t,a){}function Pt(t,a){t&1&&d(0,Lt,0,0,"ng-template")}function Dt(t,a){if(t&1&&(G(),f(0,"svg",18)),t&2){let e=E();l("pt",e.ptm("pcMoveDownButton").icon)}}function Bt(t,a){}function Ft(t,a){t&1&&d(0,Bt,0,0,"ng-template")}function Mt(t,a){if(t&1&&(G(),f(0,"svg",19)),t&2){let e=E();l("pt",e.ptm("pcMoveBottomButton").icon)}}function kt(t,a){}function Vt(t,a){t&1&&d(0,kt,0,0,"ng-template")}function At(t,a){}function Kt(t,a){t&1&&d(0,At,0,0,"ng-template")}function Rt(t,a){if(t&1&&d(0,Kt,1,0,null,10),t&2){let e=E(2);l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Ut(t,a){t&1&&(U(0),d(1,Rt,1,1,"ng-template",null,1,v),N())}function Nt(t,a){}function jt(t,a){t&1&&d(0,Nt,0,0,"ng-template")}function Qt(t,a){if(t&1&&d(0,jt,1,0,null,20),t&2){let e=a.$implicit,s=a.selected,i=a.index,m=E(2);l("ngTemplateOutlet",m.itemTemplate||m._itemTemplate)("ngTemplateOutletContext",A(2,Tt,e,s,i))}}function $t(t,a){t&1&&(U(0),d(1,Qt,1,6,"ng-template",null,2,v),N())}function qt(t,a){}function Ht(t,a){t&1&&d(0,qt,0,0,"ng-template")}function Wt(t,a){if(t&1&&d(0,Ht,1,0,null,10),t&2){let e=E(2);l("ngTemplateOutlet",e.emptyMessageTemplate||e._emptyMessageTemplate)}}function zt(t,a){t&1&&(U(0),d(1,Wt,1,1,"ng-template",null,3,v),N())}function Gt(t,a){}function Jt(t,a){t&1&&d(0,Gt,0,0,"ng-template")}function Xt(t,a){if(t&1&&d(0,Jt,1,0,null,10),t&2){let e=E(2);l("ngTemplateOutlet",e.emptyFilterMessageTemplate||e._emptyFilterMessageTemplate)}}function Yt(t,a){t&1&&(U(0),d(1,Xt,1,1,"ng-template",null,4,v),N())}function Zt(t,a){}function ei(t,a){t&1&&d(0,Zt,0,0,"ng-template")}function ti(t,a){if(t&1&&d(0,ei,1,0,null,10),t&2){let e=E(2);l("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function ii(t,a){t&1&&(U(0),d(1,ti,1,1,"ng-template",null,5,v),N())}function ri(t,a){}function oi(t,a){t&1&&d(0,ri,0,0,"ng-template")}function ni(t,a){if(t&1&&d(0,oi,1,0,null,20),t&2){let e=a.options,s=E(2);l("ngTemplateOutlet",s.filterTemplate||s._filterTemplate)("ngTemplateOutletContext",Oe(2,Ot,e))}}function si(t,a){t&1&&(U(0),d(1,ni,1,4,"ng-template",null,6,v),N())}var it=new fe("ORDERLIST_INSTANCE"),L=(()=>{class t extends Ae{bindDirectiveInstance=z(X,{self:!0});$pcOrderList=z(it,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;styleClass;tabindex;ariaLabel;ariaLabelledBy;listStyle;responsive;filterBy;filterPlaceholder;filterLocale;metaKeySelection=!1;dragdrop=!1;controlsPosition="left";ariaFilterLabel;filterMatchMode="contains";breakpoint="960px";stripedRows;disabled;trackBy=(e,s)=>s;scrollHeight="14rem";autoOptionFocus=!0;dataKey;set selection(e){this.d_selection=e}get selection(){return this.d_selection}set value(e){this._value=e,this.filterValue?this.filter():this.dragdrop&&(this.visibleOptions=[...e||[]])}get value(){return this._value}buttonProps={severity:"secondary"};moveUpButtonProps;moveTopButtonProps;moveDownButtonProps;moveBottomButtonProps;selectionChange=new R;onReorder=new R;onSelectionChange=new R;onFilterEvent=new R;onFocus=new R;onBlur=new R;listViewChild;filterViewChild;itemTemplate;emptyMessageTemplate;emptyFilterMessageTemplate;filterTemplate;headerTemplate;moveUpIconTemplate;moveTopIconTemplate;moveDownIconTemplate;moveBottomIconTemplate;filterIconTemplate;get moveUpAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveUp:void 0}get moveTopAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveTop:void 0}get moveDownAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveDown:void 0}get moveBottomAriaLabel(){return this.config.translation.aria?this.config.translation.aria.moveBottom:void 0}_componentStyle=z(pe);filterOptions;d_selection=[];movedUp;movedDown;itemTouched;styleElement;id=we("pn_id_");filterValue;visibleOptions;_value;filterService=z(Ie);getButtonProps(e){switch(e){case"up":return V(V({},this.buttonProps),this.moveUpButtonProps);case"top":return V(V({},this.buttonProps),this.moveTopButtonProps);case"down":return V(V({},this.buttonProps),this.moveDownButtonProps);case"bottom":return V(V({},this.buttonProps),this.moveBottomButtonProps);default:return this.buttonProps}}onInit(){this.responsive&&this.createStyle(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterKeyup(e),reset:()=>this.resetFilter()}),this.dragdrop&&this.value&&!this.visibleOptions&&(this.visibleOptions=[...this.value])}templates;_itemTemplate;_emptyMessageTemplate;_emptyFilterMessageTemplate;_filterTemplate;_headerTemplate;_moveUpIconTemplate;_moveTopIconTemplate;_moveDownIconTemplate;_moveBottomIconTemplate;_filterIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"empty":this._emptyMessageTemplate=e.template;break;case"emptyfilter":this._emptyFilterMessageTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"moveupicon":this._moveUpIconTemplate=e.template;break;case"movetopicon":this._moveTopIconTemplate=e.template;break;case"movedownicon":this._moveDownIconTemplate=e.template;break;case"movebottomicon":this._moveBottomIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onChangeSelection(e){this.d_selection=e.value,this.selectionChange.emit(e.value),this.onSelectionChange.emit({originalEvent:e.originalEvent,value:e.value})}onFilterKeyup(e){this.filterValue=e.target.value.trim().toLocaleLowerCase(this.filterLocale),this.filter(),this.onFilterEvent.emit({originalEvent:e,value:this.visibleOptions})}filter(){let e=this.filterBy.split(",");this.visibleOptions=this.filterService.filter(this.value,e,this.filterValue,this.filterMatchMode,this.filterLocale)}resetFilter(){this.filterValue="",this.filterViewChild&&(this.filterViewChild.nativeElement.value="")}isItemVisible(e){if(this.filterValue&&this.filterValue.trim().length){for(let s=0;s<this.visibleOptions.length;s++)if(e==this.visibleOptions[s])return!0}else return!0}isSelected(e){return S(e,this.d_selection)!==-1}isEmpty(){return this.filterValue?!this.visibleOptions||this.visibleOptions.length===0:!this.value||this.value.length===0}moveUp(){if(this.selection&&this.value instanceof Array){let e=this.sortByIndexInList(this.selection,this.value);for(let s of e){let i=S(s,this.value);if(i>0){let m=this.value[i],c=this.value[i-1];this.value[i-1]=m,this.value[i]=c}}this.dragdrop&&(this.filterValue?this.filter():this.visibleOptions&&(this.visibleOptions=[...this.value])),this.movedUp=!0,this.onReorder.emit(this.selection)}this.listViewChild?.cd?.markForCheck()}moveTop(){if(this.selection){for(let e=this.selection.length-1;e>=0;e--){let s=this.selection[e],i=S(s,this.value||[]);if(i!=0&&this.value instanceof Array){let m=this.value.splice(i,1)[0];this.value.unshift(m)}else break}this.dragdrop&&(this.filterValue?this.filter():this.visibleOptions&&(this.visibleOptions=[...this.value||[]])),this.onReorder.emit(this.selection),setTimeout(()=>{this.listViewChild.scrollInView(0)})}this.listViewChild?.cd?.markForCheck()}moveDown(){if(this.selection&&this.value instanceof Array){let e=this.sortByIndexInList(this.selection,this.value).reverse();for(let s of e){let i=S(s,this.value);if(i<this.value.length-1){let m=this.value[i],c=this.value[i+1];this.value[i+1]=m,this.value[i]=c}}this.dragdrop&&(this.filterValue?this.filter():this.visibleOptions&&(this.visibleOptions=[...this.value])),this.movedDown=!0,this.onReorder.emit(this.selection)}this.listViewChild?.cd?.markForCheck()}moveBottom(){if(this.selection){for(let e=0;e<this.selection.length;e++){let s=this.selection[e],i=S(s,this.value||[]);if(this.value instanceof Array&&i!=this.value.length-1){let m=this.value.splice(i,1)[0];this.value.push(m)}else break}this.dragdrop&&(this.filterValue?this.filter():this.visibleOptions&&(this.visibleOptions=[...this.value||[]])),this.onReorder.emit(this.selection),this.listViewChild?.scrollInView(this.value?.length?this.value.length-1:0)}this.listViewChild?.cd?.markForCheck()}onDrop(e){let s=e.previousIndex,i=e.currentIndex,m=[...this.value||[]],c=this.visibleOptions?[...this.visibleOptions]:null;if(s!==i){let u=[];if(this.selection&&this.selection.length>1&&S(e.item.data,this.selection)!==-1){u=[...this.selection],this.value&&(this.value.length=0,this.value.push(...m)),c&&this.visibleOptions&&(this.visibleOptions.length=0,this.visibleOptions.push(...c)),u=this.sortByIndexInList(u,this.value||[]);let ce=0;for(let P of u){let W=S(P,this.value||[]);W!==-1&&W<i&&ce++}for(let P=u.length-1;P>=0;P--){let W=S(u[P],this.value||[]);W!==-1&&this.value?.splice(W,1)}let ct=Math.max(0,i-ce);for(let P=0;P<u.length;P++)this.value?.splice(ct+P,0,u[P]);this.dragdrop&&(this.filterValue?this.filter():this.visibleOptions&&(this.visibleOptions=[...this.value||[]])),this.cd?.markForCheck(),this.onReorder.emit(u)}else u=[e.item.data],this.filterValue&&(s=S(e.item.data,this.value||[]),i=S(this.visibleOptions?.[i],this.value||[])),Je(this.value,s,i),this.dragdrop&&this.visibleOptions&&!this.filterValue&&(this.visibleOptions=[...this.value||[]]),this.onReorder.emit([e.item.data])}}sortByIndexInList(e,s){return e.sort((i,m)=>{let c=S(i,s),u=S(m,s);return c-u})}onListFocus(e){this.onFocus.emit(e)}onListBlur(e){this.onBlur.emit(e)}getVisibleOptions(){return this.visibleOptions&&this.visibleOptions.length>0?this.visibleOptions:this.value&&this.value.length>0?this.value:null}moveDisabled(){if(this.disabled||!this.selection.length)return!0}createStyle(){if(ae(this.platformId)&&!this.styleElement){this.renderer.setAttribute(this.el.nativeElement.children[0],this.id,""),this.styleElement=this.renderer.createElement("style"),this.renderer.setAttribute(this.styleElement,"type","text/css"),le(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e=`
                    @media screen and (max-width: ${this.breakpoint}) {
                        .p-orderlist[${this.$attrSelector}] {
                            flex-direction: column;
                        }

                        .p-orderlist[${this.$attrSelector}] .p-orderlist-controls {
                            padding: var(--content-padding);
                            flex-direction: row;
                        }

                        .p-orderlist[${this.$attrSelector}] .p-orderlist-controls .p-button {
                            margin-right: var(--inline-spacing);
                            margin-bottom: 0;
                        }

                        .p-orderlist[${this.$attrSelector}] .p-orderlist-controls .p-button:last-child {
                            margin-right: 0;
                        }
                    }
                `;this.renderer.setProperty(this.styleElement,"innerHTML",e),le(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){ae(this.platformId)&&this.styleElement&&(this.renderer.removeChild(this.document,this.styleElement),this.styleElement=null)}onDestroy(){this.destroyStyle()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ee(t)))(i||t)}})();static \u0275cmp=g({type:t,selectors:[["p-orderList"],["p-orderlist"],["p-order-list"]],contentQueries:function(s,i,m){if(s&1&&(b(m,ut,4),b(m,ft,4),b(m,gt,4),b(m,tt,4),b(m,ht,4),b(m,vt,4),b(m,_t,4),b(m,xt,4),b(m,yt,4),b(m,St,4),b(m,Pe,4)),s&2){let c;x(c=y())&&(i.itemTemplate=c.first),x(c=y())&&(i.emptyMessageTemplate=c.first),x(c=y())&&(i.emptyFilterMessageTemplate=c.first),x(c=y())&&(i.filterTemplate=c.first),x(c=y())&&(i.headerTemplate=c.first),x(c=y())&&(i.moveUpIconTemplate=c.first),x(c=y())&&(i.moveTopIconTemplate=c.first),x(c=y())&&(i.moveDownIconTemplate=c.first),x(c=y())&&(i.moveBottomIconTemplate=c.first),x(c=y())&&(i.filterIconTemplate=c.first),x(c=y())&&(i.templates=c)}},viewQuery:function(s,i){if(s&1&&(ne(bt,5),ne(tt,5)),s&2){let m;x(m=y())&&(i.listViewChild=m.first),x(m=y())&&(i.filterViewChild=m.first)}},hostVars:2,hostBindings:function(s,i){s&2&&se(i.cn(i.cx("root"),i.styleClass))},inputs:{header:"header",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",Ce],ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",listStyle:"listStyle",responsive:[2,"responsive","responsive",j],filterBy:"filterBy",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",metaKeySelection:[2,"metaKeySelection","metaKeySelection",j],dragdrop:[2,"dragdrop","dragdrop",j],controlsPosition:"controlsPosition",ariaFilterLabel:"ariaFilterLabel",filterMatchMode:"filterMatchMode",breakpoint:"breakpoint",stripedRows:[2,"stripedRows","stripedRows",j],disabled:[2,"disabled","disabled",j],trackBy:"trackBy",scrollHeight:"scrollHeight",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",j],dataKey:"dataKey",selection:"selection",value:"value",buttonProps:"buttonProps",moveUpButtonProps:"moveUpButtonProps",moveTopButtonProps:"moveTopButtonProps",moveDownButtonProps:"moveDownButtonProps",moveBottomButtonProps:"moveBottomButtonProps"},outputs:{selectionChange:"selectionChange",onReorder:"onReorder",onSelectionChange:"onSelectionChange",onFilterEvent:"onFilterEvent",onFocus:"onFocus",onBlur:"onBlur"},features:[O([pe,{provide:it,useExisting:t},{provide:Ve,useExisting:t}]),_e([X]),ve],decls:21,vars:52,consts:[["listelement",""],["header",""],["item",""],["empty",""],["emptyfilter",""],["filtericon",""],["filter",""],[3,"pBind"],["type","button","pButton","","pRipple","","hostName","orderlist",3,"click","pt","disabled","buttonProps"],["data-p-icon","angle-up","pButtonIcon","",3,"pt",4,"ngIf"],[4,"ngTemplateOutlet"],["data-p-icon","angle-double-up","pButtonIcon","",3,"pt",4,"ngIf"],["data-p-icon","angle-down","pButtonIcon","",3,"pt",4,"ngIf"],["data-p-icon","angle-double-down","pButtonIcon","",3,"pt",4,"ngIf"],["hostName","orderlist",3,"ngModelChange","onFocus","onBlur","onChange","onDrop","pt","multiple","options","ngModel","optionLabel","id","listStyle","striped","tabindex","ariaLabel","disabled","metaKeySelection","scrollHeight","autoOptionFocus","filter","filterBy","filterLocale","filterPlaceHolder","dragdrop"],[4,"ngIf"],["data-p-icon","angle-up","pButtonIcon","",3,"pt"],["data-p-icon","angle-double-up","pButtonIcon","",3,"pt"],["data-p-icon","angle-down","pButtonIcon","",3,"pt"],["data-p-icon","angle-double-down","pButtonIcon","",3,"pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(s,i){if(s&1){let m=xe();o(0,"div",7)(1,"button",8),$("click",function(){return D(m),B(i.moveUp())}),d(2,Ct,1,1,"svg",9)(3,It,1,0,null,10),n(),o(4,"button",8),$("click",function(){return D(m),B(i.moveTop())}),d(5,Et,1,1,"svg",11)(6,Pt,1,0,null,10),n(),o(7,"button",8),$("click",function(){return D(m),B(i.moveDown())}),d(8,Dt,1,1,"svg",12)(9,Ft,1,0,null,10),n(),o(10,"button",8),$("click",function(){return D(m),B(i.moveBottom())}),d(11,Mt,1,1,"svg",13)(12,Vt,1,0,null,10),n()(),o(13,"p-listbox",14,0),be("ngModelChange",function(u){return D(m),Se(i.d_selection,u)||(i.d_selection=u),B(u)}),$("onFocus",function(u){return D(m),B(i.onListFocus(u))})("onBlur",function(u){return D(m),B(i.onListBlur(u))})("onChange",function(u){return D(m),B(i.onChangeSelection(u))})("onDrop",function(u){return D(m),B(i.onDrop(u))}),d(15,Ut,3,0,"ng-container",15)(16,$t,3,0,"ng-container",15)(17,zt,3,0,"ng-container",15)(18,Yt,3,0,"ng-container",15)(19,ii,3,0,"ng-container",15)(20,si,3,0,"ng-container",15),n()}s&2&&(se(i.cx("controls")),l("pBind",i.ptm("controls")),p(),l("pt",i.ptm("pcMoveUpButton"))("disabled",i.moveDisabled())("buttonProps",i.getButtonProps("up")),J("aria-label",i.moveUpAriaLabel),p(),l("ngIf",!i.moveUpIconTemplate&&!i._moveUpIconTemplate),p(),l("ngTemplateOutlet",i.moveUpIconTemplate||i._moveUpIconTemplate),p(),l("pt",i.ptm("pcMoveTopButton"))("disabled",i.moveDisabled())("buttonProps",i.getButtonProps("top")),J("aria-label",i.moveTopAriaLabel),p(),l("ngIf",!i.moveTopIconTemplate&&!i._moveTopIconTemplate),p(),l("ngTemplateOutlet",i.moveTopIconTemplate||i._moveTopIconTemplate),p(),l("pt",i.ptm("pcMoveDownButton"))("disabled",i.moveDisabled())("buttonProps",i.getButtonProps("down")),J("aria-label",i.moveDownAriaLabel),p(),l("ngIf",!i.moveDownIconTemplate&&!i._moveDownIconTemplate),p(),l("ngTemplateOutlet",i.moveDownIconTemplate||i._moveDownIconTemplate),p(),l("pt",i.ptm("pcMoveBottomButton"))("disabled",i.moveDisabled())("buttonProps",i.getButtonProps("bottom")),J("aria-label",i.moveBottomAriaLabel),p(),l("ngIf",!i.moveBottomIconTemplate&&!i._moveBottomIconTemplate),p(),l("ngTemplateOutlet",i.moveBottomIconTemplate||i._moveBottomIconTemplate),p(),l("pt",i.ptm("pcListbox"))("multiple",!0)("options",i.value),ye("ngModel",i.d_selection),l("optionLabel",i.dataKey??"name")("id",i.id+"_list")("listStyle",i.listStyle)("striped",i.stripedRows)("tabindex",i.tabindex)("ariaLabel",i.ariaLabel)("disabled",i.disabled)("metaKeySelection",i.metaKeySelection)("scrollHeight",i.scrollHeight)("autoOptionFocus",i.autoOptionFocus)("filter",i.filterBy)("filterBy",i.filterBy)("filterLocale",i.filterLocale)("filterPlaceHolder",i.filterPlaceholder)("dragdrop",i.dragdrop),p(2),l("ngIf",i.headerTemplate||i._headerTemplate),p(),l("ngIf",i.itemTemplate||i._itemTemplate),p(),l("ngIf",i.emptyMessageTemplate||i._emptyMessageTemplate),p(),l("ngIf",i.emptyFilterMessageTemplate||i._emptyFilterMessageTemplate),p(),l("ngIf",i.filterIconTemplate||i._filterIconTemplate),p(),l("ngIf",i.filterTemplate||i._filterTemplate))},dependencies:[C,Ee,Le,qe,$e,Qe,je,Xe,Ke,Re,Ne,Ue,Ye,Fe,De,Be,ie,X],encapsulation:2,changeDetection:0})}return t})(),k=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[L,ie,ie]})}return t})();function li(t,a){if(t&1&&r(0),t&2){let e=a.$implicit;te(" ",e.name," ")}}var rt=(()=>{class t{productService;cdr;products;constructor(e,s){this.productService=e,this.cdr=s}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}code={basic:`<p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px">
    <ng-template #item let-option>
        {{ option.name }}
    </ng-template>
</p-orderlist>`,html:`<div class="card sm:flex sm:justify-center">
    <p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px">
        <ng-template #item let-option>
            {{ option.name }}
        </ng-template>
    </p-orderlist>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { OrderListModule } from 'primeng/orderlist';

@Component({
    selector: 'orderlist-basic-demo',
    templateUrl: './orderlist-basic-demo.html',
    standalone: true,
    imports: [OrderListModule],
    providers: [ProductService],
    styles: [
    \`@media (min-width: 576px) {
            :host ::ng-deep .p-listbox {
                width: 14rem;
            }
        }\`
    ],

})
export class OrderlistBasicDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)(_(h),_(K))};static \u0275cmp=g({type:t,selectors:[["basic-doc"]],features:[O([h])],decls:14,vars:4,consts:[["item",""],[1,"card","sm:flex","sm:justify-center"],["dataKey","id","breakpoint","575px",3,"value","responsive"],["selector","orderlist-basic-demo",3,"code","extFiles"]],template:function(s,i){s&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"OrderList is used as a controlled input with "),o(3,"i"),r(4,"value"),n(),r(5," property. Content of a list item needs to be defined with the "),o(6,"i"),r(7,"item"),n(),r(8," template that receives an object in the list as parameter."),n()(),o(9,"div",1)(10,"p-orderlist",2),d(11,li,1,1,"ng-template",null,0,v),n()(),f(13,"app-code",3)),s&2&&(p(10),l("value",i.products)("responsive",!0),p(3),l("code",i.code)("extFiles",i.extFiles))},dependencies:[k,L,I,w,F],styles:["@media (min-width: 576px){[_nghost-%COMP%]     .p-listbox{width:14rem}}"]})}return t})();var ai=(t,a,e)=>({"text-sm":!0,"text-surface-500":t,"dark:text-surface-400":a,"text-inherit":e});function pi(t,a){if(t&1&&(o(0,"div",4),f(1,"img",5),o(2,"div",6)(3,"span",7),r(4),n(),o(5,"span",8),r(6),n()(),o(7,"span",9),r(8),n()()),t&2){let e=a.$implicit,s=a.selected;p(),l("src",q("/_ext/primefaces.org/cdn/primeng/images/demo/product/",e.image),Q)("alt",e.name),p(3),T(e.name),p(),l("ngClass",A(7,ai,!s,!s,s)),p(),T(e.category),p(2),T("$"+e.price)}}var ot=(()=>{class t{productService;cdr;products;constructor(e,s){this.productService=e,this.cdr=s}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}code={basic:`<p-orderlist [value]="products" dataKey="id" [dragdrop]="true" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
    <ng-template let-option let-selected="selected" #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-sm': true,
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-orderlist>`,html:`<div class="card sm:flex sm:justify-center">
    <p-orderlist [value]="products" dataKey="id" [dragdrop]="true" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
        <ng-template let-option let-selected="selected" #item>
            <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                <img
                    class="w-12 shrink-0 rounded"
                    src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                    [alt]="option.name"
                />
                <div class="flex-1 flex flex-col">
                    <span class="font-medium text-sm">{{ option.name }}</span>
                    <span
                        [ngClass]="{
                            'text-sm': true,
                            'text-surface-500': !selected,
                            'dark:text-surface-400': !selected,
                            'text-inherit': selected,
                        }"
                        >{{ option.category }}</span
                    >
                </div>
                <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
            </div>
        </ng-template>
    </p-orderlist>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { OrderListModule } from 'primeng/orderlist';

@Component({
    selector: 'orderlist-drag-drop-demo',
    templateUrl: './orderlist-drag-drop-demo.html',
    standalone: true,
    imports: [OrderListModule],
    providers: [ProductService]
})
export class OrderlistDragDropDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)(_(h),_(K))};static \u0275cmp=g({type:t,selectors:[["drag-drop-doc"]],features:[O([h])],decls:14,vars:5,consts:[["item",""],[1,"card","sm:flex","sm:justify-center"],["dataKey","id","breakpoint","575px","scrollHeight","20rem",3,"value","dragdrop","responsive"],["selector","orderlist-drag-drop-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-1","items-center","gap-4","w-full"],[1,"w-12","shrink-0","rounded",3,"src","alt"],[1,"flex-1","flex","flex-col"],[1,"font-medium","text-sm"],[3,"ngClass"],[1,"font-bold","sm:ml-8"]],template:function(s,i){s&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Items can be reordered using drag and drop by enabling "),o(3,"i"),r(4,"dragdrop"),n(),r(5," property. Depends on "),o(6,"i"),r(7,"@angular/cdk"),n(),r(8," package."),n()(),o(9,"div",1)(10,"p-orderlist",2),d(11,pi,9,11,"ng-template",null,0,v),n()(),f(13,"app-code",3)),s&2&&(p(10),l("value",i.products)("dragdrop",!0)("responsive",!0),p(3),l("code",i.code)("extFiles",i.extFiles))},dependencies:[C,H,k,L,I,w,F],encapsulation:2})}return t})();var mi=(t,a,e)=>({"text-sm":!0,"text-surface-500":t,"dark:text-surface-400":a,"text-inherit":e});function ci(t,a){if(t&1&&(o(0,"div",4),f(1,"img",5),o(2,"div",6)(3,"span",7),r(4),n(),o(5,"span",8),r(6),n()(),o(7,"span",9),r(8),n()()),t&2){let e=a.$implicit,s=a.selected;p(),l("src",q("/_ext/primefaces.org/cdn/primeng/images/demo/product/",e.image),Q)("alt",e.name),p(3),T(e.name),p(),l("ngClass",A(7,mi,!s,!s,s)),p(),T(e.category),p(2),T("$"+e.price)}}var nt=(()=>{class t{productService;cdr;products;constructor(e,s){this.productService=e,this.cdr=s}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}code={basic:`<p-orderlist [value]="products" filterBy="name" filterPlaceholder="Filter by name" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
    <ng-template let-option let-selected="selected" #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-sm': true,
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-orderlist>`,html:`<div class="card sm:flex sm:justify-center">
    <p-orderlist [value]="products" filterBy="name" filterPlaceholder="Filter by name" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
        <ng-template let-option let-selected="selected" #item>
            <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                <img
                    class="w-12 shrink-0 rounded"
                    src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                    [alt]="option.name"
                />
                <div class="flex-1 flex flex-col">
                    <span class="font-medium text-sm">{{ option.name }}</span>
                    <span
                        [ngClass]="{
                            'text-sm': true,
                            'text-surface-500': !selected,
                            'dark:text-surface-400': !selected,
                            'text-inherit': selected,
                        }"
                        >{{ option.category }}</span
                    >
                </div>
                <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
            </div>
        </ng-template>
    </p-orderlist>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { OrderListModule } from 'primeng/orderlist';

@Component({
    selector: 'orderlist-filter-demo',
    templateUrl: './orderlist-filter-demo.html',
    standalone: true,
    imports: [OrderListModule],
    providers: [ProductService]
})
export class OrderlistFilterDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];static \u0275fac=function(s){return new(s||t)(_(h),_(K))};static \u0275cmp=g({type:t,selectors:[["filter-doc"]],features:[O([h])],decls:11,vars:4,consts:[["item",""],[1,"card","sm:flex","sm:justify-center"],["filterBy","name","filterPlaceholder","Filter by name","breakpoint","575px","scrollHeight","20rem",3,"value","responsive"],["selector","orderlist-filter-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-1","items-center","gap-4","w-full"],[1,"w-12","shrink-0","rounded",3,"src","alt"],[1,"flex-1","flex","flex-col"],[1,"font-medium","text-sm"],[3,"ngClass"],[1,"font-bold","sm:ml-8"]],template:function(s,i){s&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"Filter value is checked against the property of an object configured with the "),o(3,"i"),r(4,"filterBy"),n(),r(5," property"),n()(),o(6,"div",1)(7,"p-orderlist",2),d(8,ci,9,11,"ng-template",null,0,v),n()(),f(10,"app-code",3)),s&2&&(p(7),l("value",i.products)("responsive",!0),p(3),l("code",i.code)("extFiles",i.extFiles))},dependencies:[C,H,k,L,I,w,F],encapsulation:2})}return t})();var st=(()=>{class t{code={typescript:"import { OrderListModule } from 'primeng/orderlist';"};static \u0275fac=function(s){return new(s||t)};static \u0275cmp=g({type:t,selectors:[["order-list-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(s,i){s&1&&f(0,"app-code",0),s&2&&l("code",i.code)("hideToggleCode",!0)},dependencies:[I,w],encapsulation:2})}return t})();var di=(t,a,e)=>({"text-sm":!0,"text-surface-500":t,"dark:text-surface-400":a,"text-inherit":e});function ui(t,a){if(t&1&&(o(0,"div",4),f(1,"img",5),o(2,"div",6)(3,"span",7),r(4),n(),o(5,"span",8),r(6),n()(),o(7,"span",9),r(8),n()()),t&2){let e=a.$implicit,s=a.selected;p(),l("src",q("/_ext/primefaces.org/cdn/primeng/images/demo/product/",e.image),Q)("alt",e.name),p(3),T(e.name),p(),l("ngClass",A(7,di,!s,!s,s)),p(),T(e.category),p(2),T("$"+e.price)}}var lt=(()=>{class t{productService;cdr;products;code={basic:`<p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
    <ng-template let-option let-selected="selected" #item>
        <div class="flex flex-wrap p-1 items-center gap-4 w-full">
            <img
                class="w-12 shrink-0 rounded"
                src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                [alt]="option.name"
            />
            <div class="flex-1 flex flex-col">
                <span class="font-medium text-sm">{{ option.name }}</span>
                <span
                    [ngClass]="{
                        'text-sm': true,
                        'text-surface-500': !selected,
                        'dark:text-surface-400': !selected,
                        'text-inherit': selected,
                    }"
                    >{{ option.category }}</span
                >
            </div>
            <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
        </div>
    </ng-template>
</p-orderlist>`,html:`<div class="card sm:flex sm:justify-center">
    <p-orderlist [value]="products" dataKey="id" [responsive]="true" breakpoint="575px" scrollHeight="20rem">
        <ng-template let-option let-selected="selected" #item>
            <div class="flex flex-wrap p-1 items-center gap-4 w-full">
                <img
                    class="w-12 shrink-0 rounded"
                    src="/_ext/primefaces.org/cdn/primeng/images/demo/product/{{ option.image }}"
                    [alt]="option.name"
                />
                <div class="flex-1 flex flex-col">
                    <span class="font-medium text-sm">{{ option.name }}</span>
                    <span
                        [ngClass]="{
                            'text-sm': true,
                            'text-surface-500': !selected,
                            'dark:text-surface-400': !selected,
                            'text-inherit': selected,
                        }"
                        >{{ option.category }}</span
                    >
                </div>
                <span class="font-bold sm:ml-8">{{ '$' + option.price }}</span>
            </div>
        </ng-template>
    </p-orderlist>
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { Product } from '@/domain/product';
import { ProductService } from '@/service/productservice';
import { OrderListModule } from 'primeng/orderlist';

@Component({
    selector: 'orderlist-template-demo',
    templateUrl: './orderlist-template-demo.html',
    standalone: true,
    imports: [OrderListModule],
    providers: [ProductService]
})
export class OrderlistTemplateDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((cars) => (this.products = cars));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,service:["ProductService"]};extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}];constructor(e,s){this.productService=e,this.cdr=s}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products=e,this.cdr.detectChanges()})}getSeverity(e){switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}static \u0275fac=function(s){return new(s||t)(_(h),_(K))};static \u0275cmp=g({type:t,selectors:[["template-doc"]],features:[O([h])],decls:14,vars:4,consts:[["item",""],[1,"card","sm:flex","sm:justify-center"],["dataKey","id","breakpoint","575px","scrollHeight","20rem",3,"value","responsive"],["selector","orderlist-template-demo",3,"code","extFiles"],[1,"flex","flex-wrap","p-1","items-center","gap-4","w-full"],[1,"w-12","shrink-0","rounded",3,"src","alt"],[1,"flex-1","flex","flex-col"],[1,"font-medium","text-sm"],[3,"ngClass"],[1,"font-bold","sm:ml-8"]],template:function(s,i){s&1&&(o(0,"app-docsectiontext")(1,"p"),r(2,"For custom content support define an "),o(3,"i"),r(4,"item"),n(),r(5," template that gets the item instance as a parameter. In addition "),o(6,"i"),r(7,"header"),n(),r(8," template is provided for further customization."),n()(),o(9,"div",1)(10,"p-orderlist",2),d(11,ui,9,11,"ng-template",null,0,v),n()(),f(13,"app-code",3)),s&2&&(p(10),l("value",i.products)("responsive",!0),p(3),l("code",i.code)("extFiles",i.extFiles))},dependencies:[C,H,k,L,I,w,F],encapsulation:2})}return t})();function fi(t,a){if(t&1&&r(0),t&2){let e=a.$implicit;te(" ",e.name," ")}}var at=(()=>{class t{productService;products=ge([]);docs=[{data:re("OrderList"),key:"OrderList"}];constructor(e){this.productService=e}ngOnInit(){this.productService.getProductsSmall().then(e=>{this.products.set(e.slice(0,5))})}static \u0275fac=function(s){return new(s||t)(_(h))};static \u0275cmp=g({type:t,selectors:[["orderlist-pt-viewer"]],features:[O([h])],decls:4,vars:2,consts:[["item",""],[3,"docs"],["dataKey","id",3,"value"]],template:function(s,i){s&1&&(o(0,"app-docptviewer",1)(1,"p-orderlist",2),d(2,fi,1,1,"ng-template",null,0,v),n()()),s&2&&(l("docs",i.docs),p(),l("value",i.products()))},dependencies:[C,Ge,k,L],encapsulation:2})}return t})();var pt=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:at},{id:"pt.doc.orderlist",label:"OrderList PT Options",component:He,data:re("OrderList")}];static \u0275fac=function(s){return new(s||t)};static \u0275cmp=g({type:t,selectors:[["orderlist-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(s,i){s&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),r(3,"OrderList Pass Through"),n()(),f(4,"app-docsection",2),n()),s&2&&(p(4),l("docs",i.docs))},dependencies:[C,We],encapsulation:2})}return t})();var gi=()=>["OrderList"],mt=(()=>{class t{ptComponent=pt;docs=[{id:"import",label:"Import",component:st},{id:"basic",label:"Basic",component:rt},{id:"filter",label:"Filter",component:nt},{id:"template",label:"Template",component:lt},{id:"drag-drop",label:"Drag & Drop",component:ot},{id:"accessibility",label:"Accessibility",component:Ze}];static \u0275fac=function(s){return new(s||t)};static \u0275cmp=g({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular OrderList Component","header","OrderList","description","OrderList is used to sort a collection.","themeDocs","orderlist",3,"docs","apiDocs","ptDocs"]],template:function(s,i){s&1&&f(0,"app-doc",0),s&2&&l("docs",i.docs)("apiDocs",Te(3,gi))("ptDocs",i.ptComponent)},dependencies:[ze],encapsulation:2})}return t})();var Gr=[{path:"",component:mt}];export{Gr as default};
