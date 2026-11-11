import{a as R,b as Ee}from"./chunk-JNUBCW5H.js";import"./chunk-D22NEC44.js";import{c as Se,d as ne,f as j,g as Oe,h as oe}from"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as Ne}from"./chunk-FKOOMXTU.js";import{a as y,b as De}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as we}from"./chunk-XCUGNKAG.js";import{a as _,b as Me}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{A as ze,D as Te}from"./chunk-MCW4FHXZ.js";import{Ea as v,Fa as F,Ia as Ce,La as Y,Ma as ee,Na as O,Oa as te,r as Z}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{m as ve,n as J,q as _e,r as ye,w as S}from"./chunk-D2XKNHFS.js";import{$a as E,Eb as o,Fb as i,Gb as r,Hb as p,La as V,Lb as I,Mb as B,Nb as he,Ob as L,Qa as l,R as re,S as le,Sb as G,T as ce,Ub as h,Uc as K,V as de,Va as M,X as w,Xb as H,Yc as T,Zb as X,_b as q,aa as N,ba as D,ca as $,f as ae,gb as m,gc as f,hb as me,hc as c,ic as u,kb as Q,lb as ge,mb as g,mc as fe,nc as ue,oa as pe,oc as be,qa as se,rc as W,sc as xe,tc as A,wb as U}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var Ie=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["org-chart-accessibility-doc"]],decls:34,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"h3"),c(2,"Screen Reader"),r(),i(3,"p"),c(4," Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions. "),r(),i(5,"h3"),c(6,"Keyboard Support"),r(),i(7,"div",0)(8,"table",1)(9,"thead")(10,"tr")(11,"th"),c(12,"Key"),r(),i(13,"th"),c(14,"Function"),r()()(),i(15,"tbody")(16,"tr")(17,"td")(18,"i"),c(19,"tab"),r()(),i(20,"td"),c(21,"Moves focus through the focusable elements within the chart."),r()(),i(22,"tr")(23,"td")(24,"i"),c(25,"enter"),r()(),i(26,"td"),c(27,"Toggles the expanded state of a node."),r()(),i(28,"tr")(29,"td")(30,"i"),c(31,"space"),r()(),i(32,"td"),c(33,"Toggles the expanded state of a node."),r()()()()()())},dependencies:[_],encapsulation:2})}return t})();var Be=`
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }

    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 dt('organizationchart.gutter');
    }

    .p-organizationchart-node {
        display: inline-block;
        position: relative;
        border: 1px solid dt('organizationchart.node.border.color');
        background: dt('organizationchart.node.background');
        color: dt('organizationchart.node.color');
        padding: dt('organizationchart.node.padding');
        border-radius: dt('organizationchart.node.border.radius');
        transition:
            background dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
        padding: dt('organizationchart.node.toggleable.padding');
    }

    .p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
        background: dt('organizationchart.node.hover.background');
        color: dt('organizationchart.node.hover.color');
    }

    .p-organizationchart-node-selected {
        background: dt('organizationchart.node.selected.background');
        color: dt('organizationchart.node.selected.color');
    }

    .p-organizationchart-node-toggle-button {
        position: absolute;
        inset-block-end: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));
        margin-inline-start: calc(-1 * calc(dt('organizationchart.node.toggle.button.size') / 2));
        z-index: 2;
        inset-inline-start: 50%;
        user-select: none;
        cursor: pointer;
        width: dt('organizationchart.node.toggle.button.size');
        height: dt('organizationchart.node.toggle.button.size');
        text-decoration: none;
        background: dt('organizationchart.node.toggle.button.background');
        color: dt('organizationchart.node.toggle.button.color');
        border-radius: dt('organizationchart.node.toggle.button.border.radius');
        border: 1px solid dt('organizationchart.node.toggle.button.border.color');
        display: inline-flex;
        justify-content: center;
        align-items: center;
        outline-color: transparent;
        transition:
            background dt('organizationchart.transition.duration'),
            color dt('organizationchart.transition.duration'),
            border-color dt('organizationchart.transition.duration'),
            outline-color dt('organizationchart.transition.duration'),
            box-shadow dt('organizationchart.transition.duration');
    }

    .p-organizationchart-node-toggle-button:hover {
        background: dt('organizationchart.node.toggle.button.hover.background');
        color: dt('organizationchart.node.toggle.button.hover.color');
    }

    .p-organizationchart-node-toggle-button:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-organizationchart-node-toggle-button-icon {
        position: relative;
        inset-block-start: 1px;
    }

    .p-organizationchart-connector-down {
        margin: 0 auto;
        height: dt('organizationchart.connector.height');
        width: 1px;
        background: dt('organizationchart.connector.color');
    }

    .p-organizationchart-connector-right {
        border-radius: 0;
    }

    .p-organizationchart-connector-left {
        border-radius: 0;
        border-inline-end: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-connector-top {
        border-block-start: 1px solid dt('organizationchart.connector.color');
    }

    .p-organizationchart-node-selectable {
        cursor: pointer;
    }

    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
        border-inline-end: 0 none;
    }

    .p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
        border-start-end-radius: dt('organizationchart.connector.border.radius');
    }

    .p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
        border-inline-start: 1px solid dt('organizationchart.connector.color');
        border-start-start-radius: dt('organizationchart.connector.border.radius');
    }
`;var He={root:({instance:t})=>["p-organizationchart p-component",{"p-organizationchart-preservespace":t.preserveSpace}],table:"p-organizationchart-table",node:({instance:t})=>["p-organizationchart-node",{"p-organizationchart-node":!0,"p-organizationchart-node-selectable":t.chart.selectionMode&&t.node.selectable!==!1,"p-organizationchart-node-selected":t.isSelected()}],nodeToggleButton:"p-organizationchart-node-toggle-button",nodeToggleButtonIcon:"p-organizationchart-node-toggle-button-icon",connectors:"p-organizationchart-connectors",connectorDown:"p-organizationchart-connector-down",connectorLeft:({first:t})=>["p-organizationchart-connector-left",{"p-organizationchart-connector-top":!t}],connectorRight:({last:t})=>["p-organizationchart-connector-right",{"p-organizationchart-connector-top":!t}],nodeChildren:"p-organizationchart-node-children"},k=(()=>{class t extends Ce{name="organizationchart";style=Be;classes=He;static \u0275fac=(()=>{let e;return function(a){return(e||(e=pe(t)))(a||t)}})();static \u0275prov=le({token:t,factory:t.\u0275fac})}return t})();var Xe=["pOrganizationChartNode",""],Fe=t=>({$implicit:t}),qe=t=>({first:t}),We=t=>({last:t});function Ke(t,d){if(t&1&&(i(0,"div"),c(1),r()),t&2){let e=h(2);l(),u(e.node.label)}}function Ze(t,d){t&1&&he(0)}function Je(t,d){if(t&1&&(i(0,"div"),g(1,Ze,1,0,"ng-container",6),r()),t&2){let e=h(2);l(),o("ngTemplateOutlet",e.chart.getTemplateForNode(e.node))("ngTemplateOutletContext",A(2,Fe,e.node))}}function Ye(t,d){if(t&1&&($(),p(0,"svg",12)),t&2){let e=h(5);f(e.cx("nodeToggleButtonIcon")),o("pBind",e.getPTOptions("nodeToggleButtonIcon"))}}function et(t,d){if(t&1&&($(),p(0,"svg",13)),t&2){let e=h(5);f(e.cx("nodeToggleButtonIcon")),o("pBind",e.getPTOptions("nodeToggleButtonIcon"))}}function tt(t,d){if(t&1&&(I(0),g(1,Ye,1,3,"svg",10)(2,et,1,3,"svg",11),B()),t&2){let e=h(4);l(),o("ngIf",e.node.expanded),l(),o("ngIf",!e.node.expanded)}}function nt(t,d){}function ot(t,d){t&1&&g(0,nt,0,0,"ng-template")}function it(t,d){if(t&1&&(i(0,"span",1),g(1,ot,1,0,null,6),r()),t&2){let e=h(4);f(e.cx("nodeToggleButtonIcon")),o("pBind",e.getPTOptions("nodeToggleButtonIcon")),l(),o("ngTemplateOutlet",e.chart.togglerIconTemplate||e.chart._togglerIconTemplate)("ngTemplateOutletContext",A(5,Fe,e.node.expanded))}}function at(t,d){if(t&1){let e=L();i(0,"a",8),G("click",function(a){N(e);let s=h(3);return D(s.toggleNode(a,s.node))})("keydown.enter",function(a){N(e);let s=h(3);return D(s.toggleNode(a,s.node))})("keydown.space",function(a){N(e);let s=h(3);return D(s.toggleNode(a,s.node))}),g(1,tt,3,2,"ng-container",3)(2,it,2,7,"span",9),r()}if(t&2){let e=h(3);f(e.cx("nodeToggleButton")),o("pBind",e.getPTOptions("nodeToggleButton")),l(),o("ngIf",!e.chart.togglerIconTemplate&&!e.chart._togglerIconTemplate),l(),o("ngIf",e.chart.togglerIconTemplate||e.chart._togglerIconTemplate)}}function rt(t,d){if(t&1&&(I(0),g(1,at,3,5,"a",7),B()),t&2){let e=h(2);l(),o("ngIf",!e.leaf)}}function lt(t,d){if(t&1&&(I(0),i(1,"td",1),p(2,"div",1),r(),B()),t&2){let e=h(2);l(),o("pBind",e.ptm("lineCell")),U("colspan",e.colspan),l(),f(e.cx("connectorDown")),o("pBind",e.ptm("connectorDown"))}}function ct(t,d){if(t&1&&(i(0,"td",1),c(1,"\xA0"),r(),i(2,"td",1),c(3,"\xA0"),r()),t&2){let e=d.first,n=d.last,a=d.index,s=h(3);f(s.cx("connectorLeft",A(6,qe,e))),o("pBind",s.getNodeOptions(a!==0,"connectorLeft")),l(2),f(s.cx("connectorRight",A(8,We,n))),o("pBind",s.getNodeOptions(a!==s.node.children.length-1,"connectorRight"))}}function dt(t,d){if(t&1&&(I(0),g(1,ct,4,10,"ng-template",14),B()),t&2){let e=h(2);l(),o("ngForOf",e.node.children)}}function pt(t,d){if(t&1&&(i(0,"td",15),p(1,"table",16),r()),t&2){let e=d.$implicit,n=h(2);o("pBind",n.ptm("nodeCell")),l(),f(n.cx("table")),o("pt",n.pt)("node",e)("collapsible",n.node.children&&n.node.children.length>0&&n.collapsible)}}function st(t,d){if(t&1){let e=L();i(0,"tbody",1)(1,"tr",1)(2,"td",1)(3,"div",2),G("click",function(a){N(e);let s=h();return D(s.onNodeClick(a,s.node))}),g(4,Ke,2,1,"div",3)(5,Je,2,4,"div",3)(6,rt,2,1,"ng-container",3),r()()(),i(7,"tr",4)(8,"td",1),p(9,"div",1),r()(),i(10,"tr",4),g(11,lt,3,5,"ng-container",3)(12,dt,2,1,"ng-container",3),r(),i(13,"tr",4),g(14,pt,2,6,"td",5),r()()}if(t&2){let e=h();o("pBind",e.ptm("body")),l(),o("pBind",e.ptm("row")),l(),o("pBind",e.ptm("cell")),U("colspan",e.colspan),l(),f(e.cn(e.cx("node"),e.node.styleClass)),o("pBind",e.getPTOptions("node")),l(),o("ngIf",!e.chart.getTemplateForNode(e.node)),l(),o("ngIf",e.chart.getTemplateForNode(e.node)),l(),o("ngIf",e.collapsible),l(),f(e.cx("connectors")),o("ngStyle",e.getChildStyle(e.node))("@childState","in")("pBind",e.ptm("connectors")),l(),o("pBind",e.ptm("lineCell")),U("colspan",e.colspan),l(),f(e.cx("connectorDown")),o("pBind",e.ptm("connectorDown")),l(),f(e.cx("connectors")),o("ngStyle",e.getChildStyle(e.node))("@childState","in")("pBind",e.ptm("connectors")),l(),o("ngIf",e.node.children&&e.node.children.length===1),l(),o("ngIf",e.node.children&&e.node.children.length>1),l(),f(e.cx("nodeChildren")),o("ngStyle",e.getChildStyle(e.node))("@childState","in")("pBind",e.ptm("nodeChildren")),l(),o("ngForOf",e.node.children)}}var mt=["togglericon"];function gt(t,d){if(t&1&&p(0,"table",1),t&2){let e=h();f(e.cx("table")),o("collapsible",e.collapsible)("pt",e.pt)("node",e.root)("pBind",e.ptm("table"))}}var Ae=new de("ORGANIZATIONCHART_INSTANCE"),ke=(()=>{class t extends ee{cd;node;root;first;last;collapsible;chart;subscription;_componentStyle=w(k);constructor(e,n){super(),this.cd=n,this.chart=e,this.subscription=this.chart.selectionSource$.subscribe(()=>{this.cd.markForCheck()})}get leaf(){if(this.node)return this.node.leaf==!1?!1:!(this.node.children&&this.node.children.length)}get colspan(){if(this.node)return this.node.children&&this.node.children.length?this.node.children.length*2:null}getChildStyle(e){return{visibility:!this.leaf&&e.expanded?"inherit":"hidden"}}getPTOptions(e){return this.ptm(e,{context:{expanded:this.node?.expanded,selectable:this.node?.selectable!==!1&&this.chart.selectionMode,selected:this.isSelected(),toggleable:this.collapsible&&!this.leaf,active:this.isSelected()}})}getNodeOptions(e,n){return this.ptm(n,{context:{lineTop:e}})}onNodeClick(e,n){this.chart.onNodeClick(e,n)}toggleNode(e,n){n.expanded=!n.expanded,n.expanded?this.chart.onNodeExpand.emit({originalEvent:e,node:this.node}):this.chart.onNodeCollapse.emit({originalEvent:e,node:this.node}),e.preventDefault()}isSelected(){return this.chart.isSelected(this.node)}onDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)(E(re(()=>b)),E(K))};static \u0275cmp=m({type:t,selectors:[["","pOrganizationChartNode",""]],inputs:{node:"node",root:[2,"root","root",T],first:[2,"first","first",T],last:[2,"last","last",T],collapsible:[2,"collapsible","collapsible",T]},features:[W([k,{provide:Y,useExisting:t}]),Q],attrs:Xe,decls:1,vars:1,consts:[[3,"pBind",4,"ngIf"],[3,"pBind"],[3,"click","pBind"],[4,"ngIf"],[3,"ngStyle","pBind"],["colspan","2",3,"pBind",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["tabindex","0",3,"class","pBind","click","keydown.enter","keydown.space",4,"ngIf"],["tabindex","0",3,"click","keydown.enter","keydown.space","pBind"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-up",3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"],["data-p-icon","chevron-up",3,"pBind"],["ngFor","",3,"ngForOf"],["colspan","2",3,"pBind"],["pOrganizationChartNode","",3,"pt","node","collapsible"]],template:function(n,a){n&1&&g(0,st,15,33,"tbody",0),n&2&&o("ngIf",a.node)},dependencies:[t,S,ve,J,ye,_e,ze,Te,F,te,O],encapsulation:2,data:{animation:[Se("childState",[Oe("in",j({opacity:1})),oe("void => *",[j({opacity:0}),ne(150)]),oe("* => void",[ne(150,j({opacity:0}))])])]}})}return t})(),b=(()=>{class t extends ee{el;cd;value;styleClass;selectionMode;collapsible;preserveSpace=!0;get selection(){return this._selection}set selection(e){this._selection=e,this.initialized&&this.selectionSource.next(null)}selectionChange=new M;onNodeSelect=new M;onNodeUnselect=new M;onNodeExpand=new M;onNodeCollapse=new M;templates;togglerIconTemplate;templateMap;_togglerIconTemplate;selectionSource=new ae;_selection;initialized;selectionSource$=this.selectionSource.asObservable();_componentStyle=w(k);bindDirectiveInstance=w(O,{self:!0});$pcOrganizationChart=w(Ae,{optional:!0,skipSelf:!0})??void 0;constructor(e,n){super(),this.el=e,this.cd=n}ngAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}get root(){return this.value&&this.value.length?this.value[0]:null}onAfterContentInit(){this.templates.length&&(this.templateMap={}),this.templates.forEach(e=>{e.getType()==="togglericon"?this._togglerIconTemplate=e.template:this.templateMap[e.getType()]=e.template}),this.initialized=!0}getTemplateForNode(e){return this.templateMap?e.type?this.templateMap[e.type]:this.templateMap.default:null}onNodeClick(e,n){let a=e.target;if(!(a.className&&(Z(a,"p-organizationchart-node-toggle-button")||Z(a,"p-organizationchart-node-toggle-button-icon")))&&this.selectionMode){if(n.selectable===!1)return;let s=this.findIndexInSelection(n),x=s>=0;this.selectionMode==="single"?x?(this.selection=null,this.onNodeUnselect.emit({originalEvent:e,node:n})):(this.selection=n,this.onNodeSelect.emit({originalEvent:e,node:n})):this.selectionMode==="multiple"&&(x?(this.selection=this.selection.filter((vt,Ge)=>Ge!=s),this.onNodeUnselect.emit({originalEvent:e,node:n})):(this.selection=[...this.selection||[],n],this.onNodeSelect.emit({originalEvent:e,node:n}))),this.selectionChange.emit(this.selection),this.selectionSource.next(null)}}findIndexInSelection(e){let n=-1;if(this.selectionMode&&this.selection){if(this.selectionMode==="single")n=this.selection==e?0:-1;else if(this.selectionMode==="multiple"){for(let a=0;a<this.selection.length;a++)if(this.selection[a]==e){n=a;break}}}return n}isSelected(e){return this.findIndexInSelection(e)!=-1}static \u0275fac=function(n){return new(n||t)(E(se),E(K))};static \u0275cmp=m({type:t,selectors:[["p-organizationChart"],["p-organization-chart"],["p-organizationchart"]],contentQueries:function(n,a,s){if(n&1&&(H(s,mt,4),H(s,v,4)),n&2){let x;X(x=q())&&(a.togglerIconTemplate=x.first),X(x=q())&&(a.templates=x)}},hostVars:2,hostBindings:function(n,a){n&2&&f(a.cn(a.cx("root"),a.styleClass))},inputs:{value:"value",styleClass:"styleClass",selectionMode:"selectionMode",collapsible:[2,"collapsible","collapsible",T],preserveSpace:[2,"preserveSpace","preserveSpace",T],selection:"selection"},outputs:{selectionChange:"selectionChange",onNodeSelect:"onNodeSelect",onNodeUnselect:"onNodeUnselect",onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse"},features:[W([k,{provide:Ae,useExisting:t},{provide:Y,useExisting:t}]),ge([O]),Q],decls:1,vars:1,consts:[["pOrganizationChartNode","",3,"class","collapsible","pt","node","pBind",4,"ngIf"],["pOrganizationChartNode","",3,"collapsible","pt","node","pBind"]],template:function(n,a){n&1&&g(0,gt,1,6,"table",0),n&2&&o("ngIf",a.root)},dependencies:[S,J,ke,F,te,O],encapsulation:2})}return t})(),z=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=me({type:t});static \u0275inj=ce({imports:[b,ke,F,F]})}return t})();var Pe=(()=>{class t{data=[{label:"Argentina",expanded:!0,children:[{label:"Argentina",expanded:!0,children:[{label:"Argentina"},{label:"France"}]},{label:"France",expanded:!0,children:[{label:"France"},{label:"Morocco"}]}]}];code={basic:'<p-organization-chart [value]="data" />',html:`<div class="card flex justify-center">
    <p-organization-chart [value]="data" />
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-basic-doc',
    templateUrl: './organization-chart-basic-doc.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartBasicDoc {
    data: TreeNode[] = [
        {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'France'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ];
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-center","overflow-x-auto"],[3,"value"],["selector","organization-chart-basic-doc",3,"code"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),c(2,"OrganizationChart requires a collection of "),i(3,"i"),c(4,"TreeNode"),r(),c(5," instances as a "),i(6,"i"),c(7,"value"),r(),c(8,"."),r()(),i(9,"div",0),p(10,"p-organization-chart",1),r(),p(11,"app-code",2)),n&2&&(l(10),o("value",a.data),l(),o("code",a.code))},dependencies:[z,b,y,_],encapsulation:2})}return t})();function ht(t,d){if(t&1&&(i(0,"div",4)(1,"div",5),p(2,"img",6),i(3,"span",7),c(4),r(),i(5,"span"),c(6),r()()()),t&2){let e=d.$implicit;l(2),o("src",e.data.image,V),l(2),u(e.data.name),l(2),u(e.data.title)}}var Ve=(()=>{class t{data=[{expanded:!0,type:"person",styleClass:"!bg-indigo-100 !text-indigo-900 rounded-xl",data:{image:"/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",styleClass:"!bg-purple-100 !text-purple-900 rounded-xl",data:{image:"/_ext/primefaces.org/cdn/primeng/images/demo/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales",styleClass:"!bg-purple-100 !text-purple-900 rounded-xl"},{label:"Marketing",styleClass:"!bg-purple-100 !text-purple-900 rounded-xl"}]},{expanded:!0,type:"person",styleClass:"!bg-teal-100 !text-teal-900 rounded-xl",data:{image:"/_ext/primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development",styleClass:"!bg-teal-100 !text-teal-900 rounded-xl"},{label:"UI/UX Design",styleClass:"!bg-teal-100 !text-teal-900 rounded-xl"}]}]}];code={basic:`<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <span class="font-bold mb-2">{{ node.data.name }}</span>
                <span>{{ node.data.title }}</span>
            </div>
        </div>
    </ng-template>
</p-organization-chart>`,html:`<div class="card overflow-x-auto">
    <p-organization-chart [value]="data" [collapsible]="true">
        <ng-template let-node pTemplate="person">
            <div class="flex flex-col">
                <div class="flex flex-col items-center">
                    <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                    <span class="font-bold mb-2">{{ node.data.name }}</span>
                    <span>{{ node.data.title }}</span>
                </div>
            </div>
        </ng-template>
    </p-organization-chart>
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-colored-demo',
    templateUrl: './organization-chart-colored-demo.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartColoredDemo {
     data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            styleClass: '!bg-indigo-100 !text-indigo-900 rounded-xl',
            data: {
                image: '/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO',
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                    data: {
                        image: '/_ext/primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO',
                    },
                    children: [
                        {
                            label: 'Sales',
                            styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                        },
                        {
                            label: 'Marketing',
                            styleClass: '!bg-purple-100 !text-purple-900 rounded-xl',
                        },
                    ],
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                    data: {
                        image: '/_ext/primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO',
                    },
                    children: [
                        {
                            label: 'Development',
                            styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                        },
                        {
                            label: 'UI/UX Design',
                            styleClass: '!bg-teal-100 !text-teal-900 rounded-xl',
                        },
                    ],
                },
            ],
        },
    ];
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["organization-chart-colored-demo"]],decls:13,vars:3,consts:[[1,"card","overflow-x-auto"],[3,"value","collapsible"],["pTemplate","person"],["selector","organization-chart-colored-demo",3,"code"],[1,"flex","flex-col"],[1,"flex","flex-col","items-center"],[1,"mb-4","w-12","h-12",3,"src"],[1,"font-bold","mb-2"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),c(2,"Styling a specific node is configured with "),i(3,"i"),c(4,"class"),r(),c(5," and "),i(6,"i"),c(7,"style"),r(),c(8," options of a TreeNode."),r()(),i(9,"div",0)(10,"p-organization-chart",1),g(11,ht,7,3,"ng-template",2),r()(),p(12,"app-code",3)),n&2&&(l(10),o("value",a.data)("collapsible",!0),l(2),o("code",a.code))},dependencies:[z,b,v,y,_],encapsulation:2})}return t})();var Ue=(()=>{class t{code={typescript:"import { OrganizationChartModule } from 'primeng/organizationchart';"};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["org-chart-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,a){n&1&&p(0,"app-code",0),n&2&&o("code",a.code)("hideToggleCode",!0)},dependencies:[De,y],encapsulation:2})}return t})();function ft(t,d){if(t&1&&(i(0,"span"),c(1),r()),t&2){let e=d.$implicit;l(),u(e.label)}}var je=(()=>{class t{data=[{label:"Argentina",expanded:!0,children:[{label:"Argentina",expanded:!0,children:[{label:"Argentina"},{label:"Croatia"}]},{label:"France",expanded:!0,children:[{label:"France"},{label:"Morocco"}]}]}];docs=[{data:R("OrganizationChart"),key:"OrganizationChart"}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["organizationchart-pt-viewer"]],decls:3,vars:3,consts:[[3,"docs"],[3,"value","collapsible"],["pTemplate","default"]],template:function(n,a){n&1&&(i(0,"app-docptviewer",0)(1,"p-organizationchart",1),g(2,ft,2,1,"ng-template",2),r()()),n&2&&(o("docs",a.docs),l(),o("value",a.data)("collapsible",!0))},dependencies:[S,Ee,z,b,v],encapsulation:2})}return t})();var Re=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:je},{id:"pt.doc.organizationchart",label:"OrganizationChart PT Options",component:Me,data:R("OrganizationChart")}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["organizationchart-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,a){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),c(3,"OrganizationChart Pass Through"),r()(),p(4,"app-docsection",2),r()),n&2&&(l(4),o("docs",a.docs))},dependencies:[S,we],encapsulation:2})}return t})();function ut(t,d){if(t&1&&(i(0,"div",4)(1,"div",5),p(2,"img",6),i(3,"div",7),c(4),r(),i(5,"div"),c(6),r()()()),t&2){let e=d.$implicit;l(2),o("src",e.data.image,V),l(2),u(e.data.name),l(2),u(e.data.title)}}var $e=(()=>{class t{selectedNodes;data=[{expanded:!0,type:"person",data:{image:"/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",data:{image:"/_ext/primefaces.org/cdn/primeng/images/demo/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales"},{label:"Marketing"}]},{expanded:!0,type:"person",data:{image:"/_ext/primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development"},{label:"UI/UX Design"}]}]}];code={basic:`<p-organization-chart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes" [collapsible]="true">
    <ng-template let-node pTemplate="person">
        <div class="flex flex-col">
            <div class="flex flex-col items-center">
                <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                <div class="font-bold mb-2">{{ node.data.name }}</div>
                <div>{{ node.data.title }}</div>
            </div>
        </div>
    </ng-template>
</p-organization-chart>`,html:`<div class="card flex justify-center overflow-x-auto">
    <p-organization-chart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes" [collapsible]="true">
        <ng-template let-node pTemplate="person">
            <div class="flex flex-col">
                <div class="flex flex-col items-center">
                    <img [src]="node.data.image" class="mb-4 w-12 h-12" />
                    <div class="font-bold mb-2">{{ node.data.name }}</div>
                    <div>{{ node.data.title }}</div>
                </div>
            </div>
        </ng-template>
    </p-organization-chart>
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-selection-demo',
    templateUrl: './organization-chart-selection-demo.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartSelectionDemo {
    selectedNodes!: TreeNode[];

    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            data: {
                image: '/_ext/primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: '/_ext/primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: '/_ext/primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ];
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["selection-doc"]],decls:19,vars:4,consts:[[1,"card","flex","justify-center","overflow-x-auto"],["selectionMode","multiple",3,"selectionChange","value","selection","collapsible"],["pTemplate","person"],["selector","organization-chart-selection-demo",3,"code"],[1,"flex","flex-col"],[1,"flex","flex-col","items-center"],[1,"mb-4","w-12","h-12",3,"src"],[1,"font-bold","mb-2"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),c(2," Nodes can be selected by defining "),i(3,"i"),c(4,"selectionMode"),r(),c(5," along with a value binding with "),i(6,"i"),c(7,"selection"),r(),c(8," properties. By default only one node can be selected, set "),i(9,"i"),c(10,"selectionMode"),r(),c(11," as "),i(12,"i"),c(13,"multiple"),r(),c(14," to select more than one. "),r()(),i(15,"div",0)(16,"p-organization-chart",1),be("selectionChange",function(x){return ue(a.selectedNodes,x)||(a.selectedNodes=x),x}),g(17,ut,7,3,"ng-template",2),r()(),p(18,"app-code",3)),n&2&&(l(16),o("value",a.data),fe("selection",a.selectedNodes),o("collapsible",!0),l(2),o("code",a.code))},dependencies:[z,b,v,y,_],encapsulation:2})}return t})();function bt(t,d){if(t&1&&(i(0,"div",4),p(1,"img",5),i(2,"div",6),c(3),r()()),t&2){let e=d.$implicit;l(),f("flag flag-"+e.data),o("alt",e.label),l(2),u(e.label)}}var Qe=(()=>{class t{data=[{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",data:"ar"},{label:"Croatia",data:"hr"}]},{label:"France",expanded:!0,data:"fr",children:[{label:"France",data:"fr"},{label:"Morocco",data:"ma"}]}]}];code={basic:`<p-organization-chart [value]="data" [collapsible]="true">
    <ng-template let-node pTemplate="default">
        <div class="flex flex-col items-center">
            <img src="/_ext/primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
            <div class="mt-4 font-medium text-lg">{{ node.label }}</div>
        </div>
    </ng-template>
</p-organization-chart>`,html:`<div class="card overflow-x-auto">
    <p-organization-chart [value]="data" [collapsible]="true">
        <ng-template let-node pTemplate="default">
            <div class="flex flex-col items-center">
                <img src="/_ext/primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
                <div class="mt-4 font-medium text-lg">{{ node.label }}</div>
            </div>
        </ng-template>
    </p-organization-chart>
</div>`,typescript:`import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
    selector: 'organization-chart-template-demo',
    templateUrl: './organization-chart-template-demo.html',
    standalone: true,
    imports: [OrganizationChartModule]
})
export class OrganizationChartTemplateDemo {
    data: TreeNode[] = [
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ];
}`};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["template-doc"]],decls:13,vars:3,consts:[[1,"card","overflow-x-auto"],[3,"value","collapsible"],["pTemplate","default"],["selector","organization-chart-template-demo",3,"code"],[1,"flex","flex-col","items-center"],["src","/_ext/primefaces.org/cdn/primeng/images/flag/flag_placeholder.png","width","32",3,"alt"],[1,"mt-4","font-medium","text-lg"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),c(2,"Custom content instead of a node "),i(3,"i"),c(4,"label"),r(),c(5," is defined using the "),i(6,"i"),c(7,"pTemplate"),r(),c(8," property."),r()(),i(9,"div",0)(10,"p-organization-chart",1),g(11,bt,4,4,"ng-template",2),r()(),p(12,"app-code",3)),n&2&&(l(10),o("value",a.data)("collapsible",!0),l(2),o("code",a.code))},dependencies:[z,b,v,y,_],encapsulation:2})}return t})();var xt=()=>["OrganizationChart"],Le=(()=>{class t{ptComponent=Re;docs=[{id:"import",label:"Import",component:Ue},{id:"basic",label:"Basic",component:Pe},{id:"template",label:"Template",component:Qe},{id:"selection",label:"Selection",component:$e},{id:"colored",label:"Colored",component:Ve},{id:"accessibility",label:"Accessibility",component:Ie}];static \u0275fac=function(n){return new(n||t)};static \u0275cmp=m({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Organization Chart Component","header","OrganizationChart","description","OrganizationChart visualizes hierarchical organization data.","componentName","OrganizationChart",3,"docs","apiDocs","ptDocs"]],template:function(n,a){n&1&&p(0,"app-doc",0),n&2&&o("docs",a.docs)("apiDocs",xe(3,xt))("ptDocs",a.ptComponent)},dependencies:[Ne],styles:["[_nghost-%COMP%]     .p-organizationchart .p-person{padding:0;border:0 none}[_nghost-%COMP%]     .p-organizationchart .node-header, [_nghost-%COMP%]     .p-organizationchart .node-content{padding:.5em .7rem}[_nghost-%COMP%]     .p-organizationchart .node-header{background-color:#495ebb;color:#fff}[_nghost-%COMP%]     .p-organizationchart .node-content{text-align:center;border:1px solid #495ebb}[_nghost-%COMP%]     .p-organizationchart .node-content img{border-radius:50%}[_nghost-%COMP%]     .p-organizationchart .department-cfo{background-color:#7247bc;color:#fff}[_nghost-%COMP%]     .p-organizationchart .department-coo{background-color:#a534b6;color:#fff}[_nghost-%COMP%]     .p-organizationchart .department-cto{background-color:#e9286f;color:#fff}"]})}return t})();var Un=[{path:"",component:Le}];export{Un as default};
