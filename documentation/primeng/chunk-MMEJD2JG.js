import{a as D,b as P}from"./chunk-JNUBCW5H.js";import{a as x,b as v}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import"./chunk-CTI5WBER.js";import"./chunk-EZDHLOD5.js";import{b as H}from"./chunk-FKOOMXTU.js";import{a as f}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import{a as s,b as c}from"./chunk-T7S2JKIR.js";import{a as k}from"./chunk-XCUGNKAG.js";import{a as u,b as I}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as h,ha as g}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as T}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as p,Gb as i,Gc as S,Hb as n,Qa as d,ca as M,cc as w,da as E,gb as a,hc as e,mb as C,sc as V}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var A=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["tooltip-accessibility-doc"]],decls:28,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,l){o&1&&(p(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),p(3,"p"),e(4,"Tooltip component uses "),p(5,"i"),e(6,"tooltip"),i(),e(7," role and when it becomes visible the generated id of the tooltip is defined as the "),p(8,"i"),e(9,"aria-describedby"),i(),e(10," of the target."),i(),p(11,"h3"),e(12,"Keyboard Support"),i(),p(13,"div",0)(14,"table",1)(15,"thead")(16,"tr")(17,"th"),e(18,"Key"),i(),p(19,"th"),e(20,"Function"),i()()(),p(21,"tbody")(22,"tr")(23,"td")(24,"i"),e(25,"escape"),i()(),p(26,"td"),e(27,"Closes the tooltip when focus is on the target."),i()()()()()())},dependencies:[u],encapsulation:2})}return t})();var Z=(()=>{class t{code={basic:`<input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false" />
<input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true" />`,html:`<div class="card flex flex-wrap justify-center gap-2">
    <input type="text" pInputText pTooltip="Enter your username" [autoHide]="false" placeholder="autoHide: false" />
    <input type="text" pInputText pTooltip="Enter your username" placeholder="autoHide: true">
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-auto-hide-demo',
    templateUrl: './tooltip-auto-hide-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipAutoHideDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["auto-hide-doc"]],decls:10,vars:2,consts:[[1,"card","flex","flex-wrap","justify-center","gap-2"],["type","text","pInputText","","pTooltip","Enter your username","placeholder","autoHide: false",3,"autoHide"],["type","text","pInputText","","pTooltip","Enter your username","placeholder","autoHide: true"],["selector","tooltip-auto-hide-demo",3,"code"]],template:function(o,l){o&1&&(p(0,"app-docsectiontext")(1,"p"),e(2," Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set "),p(3,"i"),e(4,"autoHide"),i(),e(5," to false to change the default behavior. "),i()(),p(6,"div",0),n(7,"input",1)(8,"input",2),i(),n(9,"app-code",3)),o&2&&(d(7),r("autoHide",!1),d(2),r("code",l.code))},dependencies:[f,u,v,x,c,s],encapsulation:2})}return t})();function z(t,Q){t&1&&(p(0,"div",4),M(),p(1,"svg",5),n(2,"path",6),p(3,"mask",7),n(4,"path",8),i(),p(5,"g",9),n(6,"path",10),i(),n(7,"path",11)(8,"path",12)(9,"path",13)(10,"path",14)(11,"path",15)(12,"path",16)(13,"path",17)(14,"path",18)(15,"path",19)(16,"path",20),i(),E(),p(17,"span")(18,"b"),e(19,"PrimeNG"),i(),e(20," rocks! "),i()())}var B=(()=>{class t{code={basic:`<p-button [pTooltip]="tooltipContent" severity="secondary" tooltipPosition="bottom" label="Button" />
<ng-template #tooltipContent>
    <div class="flex items-center">
        <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
            <path
                d="..."
                fill="var(--p-primary-color)"
            />
        </svg>
        <span> <b>PrimeNG</b> rocks! </span>
    </div>
</ng-template>`,html:`<div class="card flex justify-center">
    <p-button [pTooltip]="tooltipContent" severity="secondary" tooltipPosition="bottom" label="Button" />
    <ng-template #tooltipContent>
        <div class="flex items-center">
            <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                <path
                    d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                    fill="var(--p-primary-color)"
                />
                <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
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
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--ground-background)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--ground-background)" />
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
            <span> <b>PrimeNG</b> rocks! </span>
        </div>
    </ng-template>
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tooltip-custom-demo',
    templateUrl: './tooltip-custom-demo.html',
    standalone: true,
    imports: [Tooltip, ButtonModule]
})
export class TooltipCustomDemo {

}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["custom-doc"]],decls:14,vars:2,consts:[["tooltipContent",""],[1,"card","flex","justify-center"],["severity","secondary","tooltipPosition","bottom","label","Button",3,"pTooltip"],["selector","tooltip-custom-demo",3,"code"],[1,"flex","items-center"],["width","31","height","33","viewBox","0 0 31 33","fill","none","xmlns","http://www.w3.org/2000/svg",1,"mr-2"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--p-primary-color)"],["id","mask0_1_52","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--ground-background)"],["mask","url(#mask0_1_52)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--p-primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--ground-background)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--ground-background)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--ground-background)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--ground-background)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--ground-background)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--ground-background)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--ground-background)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--ground-background)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--ground-background)"]],template:function(o,l){if(o&1&&(p(0,"app-docsectiontext")(1,"p"),e(2,"Tooltip can use either a "),p(3,"i"),e(4,"string"),i(),e(5," or a "),p(6,"i"),e(7,"TemplateRef"),i(),e(8,"."),i()(),p(9,"div",1),n(10,"p-button",2),C(11,z,21,0,"ng-template",null,0,S),i(),n(13,"app-code",3)),o&2){let q=w(12);d(10),r("pTooltip",q),d(3),r("code",l.code)}},dependencies:[T,f,u,g,h,c,s],encapsulation:2})}return t})();var _=(()=>{class t{code={basic:'<p-button pTooltip="Confirm to proceed" showDelay="1000" hideDelay="300" label="Save" />',html:`<div class="card flex justify-center">
    <p-button pTooltip="Confirm to proceed" showDelay="1000" hideDelay="300" label="Save" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'tooltip-delay-demo',
    templateUrl: './tooltip-delay-demo.html',
    standalone: true,
    imports: [Tooltip, ButtonModule]
})
export class TooltipDelayDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["delay-doc"]],decls:12,vars:1,consts:[[1,"card","flex","justify-center"],["pTooltip","Confirm to proceed","showDelay","1000","hideDelay","300","label","Save"],["selector","tooltip-delay-demo",3,"code"]],template:function(o,l){o&1&&(p(0,"app-docsectiontext")(1,"p"),e(2,"Adding delays to the show and hide events are defined with "),p(3,"i"),e(4,"showDelay"),i(),e(5," and "),p(6,"i"),e(7,"hideDelay"),i(),e(8," options respectively."),i()(),p(9,"div",0),n(10,"p-button",1),i(),n(11,"app-code",2)),o&2&&(d(11),r("code",l.code))},dependencies:[f,u,g,h,c,s],encapsulation:2})}return t})();var F=(()=>{class t{code={basic:'<input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText pTooltip="Enter your username" tooltipEvent="focus" placeholder="focus to display tooltip">
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-event-demo',
    templateUrl: './tooltip-event-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipEventDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["event-doc"]],decls:12,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-2"],["type","text","pInputText","","pTooltip","Enter your username","tooltipEvent","focus","placeholder","focus to display tooltip"],["selector","tooltip-event-demo",3,"code"]],template:function(o,l){o&1&&(p(0,"app-docsectiontext")(1,"p"),e(2,"Tooltip gets displayed on "),p(3,"i"),e(4,"hover"),i(),e(5," event of its target by default, other option is the "),p(6,"i"),e(7,"focus"),i(),e(8," event to display and blur to hide."),i()(),p(9,"div",0),n(10,"input",1),i(),n(11,"app-code",2)),o&2&&(d(11),r("code",l.code))},dependencies:[f,u,v,x,c,s],encapsulation:2})}return t})();var j=(()=>{class t{code={typescript:"import { TooltipModule } from 'primeng/tooltip';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["tooltip-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,l){o&1&&n(0,"app-code",0),o&2&&r("code",l.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2})}return t})();var U=(()=>{class t{tooltipOptions={showDelay:150,autoHide:!1,tooltipEvent:"hover",tooltipPosition:"left"};code={basic:'<input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />',html:`<div class="card flex justify-center">
    <input type="text" pInputText pTooltip="Enter your username" [tooltipOptions]="tooltipOptions" placeholder="hover to display tooltip" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-options-demo',
    templateUrl: './tooltip-options-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipOptionsDemo {
    tooltipOptions = {
        showDelay: 150,
        autoHide: false,
        tooltipEvent: 'hover',
        tooltipPosition: 'left'
    };
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["options-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-center"],["type","text","pInputText","","pTooltip","Enter your username","placeholder","hover to display tooltip",3,"tooltipOptions"],["selector","tooltip-options-demo",3,"code"]],template:function(o,l){o&1&&(p(0,"app-docsectiontext")(1,"p"),e(2,"Tooltip is also configurable by using "),p(3,"i"),e(4,"tooltipOptions"),i(),e(5," property."),i()(),p(6,"div",0),n(7,"input",1),i(),n(8,"app-code",2)),o&2&&(d(7),r("tooltipOptions",l.tooltipOptions),d(),r("code",l.code))},dependencies:[f,u,v,x,c,s],encapsulation:2})}return t})();var R=(()=>{class t{code={basic:`<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom" />
<input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left" />`,html:`<div class="card flex flex-wrap justify-center gap-2">
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="right" placeholder="Right" />
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="top" placeholder="Top" />
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="bottom" placeholder="Bottom" />
    <input type="text" pInputText pTooltip="Enter your username" tooltipPosition="left" placeholder="Left" />
</div>`,typescript:`import { Component } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'tooltip-position-demo',
    templateUrl: './tooltip-position-demo.html',
    standalone: true,
    imports: [Tooltip, InputTextModule]
})
export class TooltipPositionDemo {}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["position-doc"]],decls:27,vars:1,consts:[[1,"card","flex","flex-wrap","justify-center","gap-2"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","right","placeholder","Right"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","top","placeholder","Top"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","bottom","placeholder","Bottom"],["type","text","pInputText","","pTooltip","Enter your username","tooltipPosition","left","placeholder","Left"],["selector","tooltip-position-demo",3,"code"]],template:function(o,l){o&1&&(p(0,"app-docsectiontext")(1,"p"),e(2,"Position of the tooltip is specified using "),p(3,"i"),e(4,"tooltipPosition"),i(),e(5," attribute. Valid values are "),p(6,"i"),e(7,"top"),i(),e(8,", "),p(9,"i"),e(10,"bottom"),i(),e(11,", "),p(12,"i"),e(13,"right"),i(),e(14," and "),p(15,"i"),e(16,"left"),i(),e(17,". Default position of the tooltip is "),p(18,"i"),e(19,"right"),i(),e(20,"."),i()(),p(21,"div",0),n(22,"input",1)(23,"input",2)(24,"input",3)(25,"input",4),i(),n(26,"app-code",5)),o&2&&(d(26),r("code",l.code))},dependencies:[f,u,v,x,c,s],encapsulation:2})}return t})();var G=(()=>{class t{docs=[{data:D("Tooltip"),key:"Tooltip"}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["tooltip-pt-viewer"]],decls:2,vars:2,consts:[[3,"docs"],["pTooltip","Confirm to proceed","severity","secondary","label","Tooltip",3,"hideDelay"]],template:function(o,l){o&1&&(p(0,"app-docptviewer",0),n(1,"p-button",1),i()),o&2&&(r("docs",l.docs),d(),r("hideDelay",3e5))},dependencies:[T,P,g,h,c,s],encapsulation:2})}return t})();var N=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:G},{id:"pt.doc.tooltip",label:"Tooltip PT Options",component:I,data:D("Tooltip")}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["tooltip-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,l){o&1&&(p(0,"div",0)(1,"div",1)(2,"h1"),e(3,"Tooltip Pass Through"),i()(),n(4,"app-docsection",2),i()),o&2&&(d(4),r("docs",l.docs))},dependencies:[T,k],encapsulation:2})}return t})();var J=()=>["Tooltip","TooltipOptions"],K=(()=>{class t{docs=[{id:"import",label:"Import",component:j},{id:"position",label:"Position",component:R},{id:"event",label:"Event",component:F},{id:"autohide",label:"Auto Hide",component:Z},{id:"delay",label:"Delay",component:_},{id:"custom",label:"Custom",component:B},{id:"options",label:"Tooltip Options",component:U},{id:"accessibility",label:"Accessibility",component:A}];ptComponent=N;static \u0275fac=function(o){return new(o||t)};static \u0275cmp=a({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Tooltip Component","header","Tooltip","description","Tooltip directive provides advisory information for a component. Tooltip is integrated within various PrimeNG components.","themeDocs","tooltip",3,"docs","apiDocs","ptDocs"]],template:function(o,l){o&1&&n(0,"app-doc",0),o&2&&r("docs",l.docs)("apiDocs",V(3,J))("ptDocs",l.ptComponent)},dependencies:[H],encapsulation:2})}return t})();var te=[{path:"",component:K}];export{te as default};
