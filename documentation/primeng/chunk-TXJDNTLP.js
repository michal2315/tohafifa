import{a as v,b as F}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{c as O}from"./chunk-CTI5WBER.js";import{b as H}from"./chunk-FKOOMXTU.js";import{a as f,b as y}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as u}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import{R as b,ca as _}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{y as $}from"./chunk-D2XKNHFS.js";import{$a as g,Eb as c,Fb as p,Gb as o,Hb as a,Qa as m,R as T,Sb as V,T as C,Va as w,Yc as B,fa as D,gb as d,hb as S,hc as r,ib as A,qa as E,rc as R,sc as P,ua as M}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var N=(()=>{class l{static \u0275fac=function(e){return new(e||l)};static \u0275cmp=d({type:l,selectors:[["key-filter-accessibility-doc"]],decls:7,vars:0,consts:[["href","/inputtext"]],template:function(e,i){e&1&&(p(0,"div")(1,"app-docsectiontext")(2,"p"),r(3,"Refer to "),p(4,"a",0),r(5,"InputText"),o(),r(6," for accessibility as KeyFilter is a built-in add-on of the InputText."),o()()())},dependencies:[u],encapsulation:2})}return l})();var j=(()=>{class l{code={typescript:"import { KeyFilterModule } from 'primeng/keyfilter';"};static \u0275fac=function(e){return new(e||l)};static \u0275cmp=d({type:l,selectors:[["key-filter-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(e,i){e&1&&a(0,"app-code",0),e&2&&c("code",i.code)("hideToggleCode",!0)},dependencies:[y,f],encapsulation:2})}return l})();var W={provide:O,useExisting:T(()=>h),multi:!0},z={pint:/^[\d]*$/,int:/^[-]?[\d]*$/,pnum:/^[\d\.]*$/,money:/^[\d\.\s,]*$/,num:/^[-]?[\d\.]*$/,hex:/^[0-9a-f]*$/i,email:/^[a-z0-9_\.\-@]*$/i,alpha:/^[a-z_]*$/i,alphanum:/^[a-z0-9_]*$/i},I={TAB:9,RETURN:13,ESC:27,BACKSPACE:8,DELETE:46},U={63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35},h=(()=>{class l{document;platformId;el;pValidateOnly;set pattern(t){this._pattern=t,t instanceof RegExp?this.regex=t:t&&t in z?this.regex=z[t]:this.regex=/./}get pattern(){return this._pattern}ngModelChange=new w;regex=/./;_pattern;isAndroid;lastValue;constructor(t,e,i){this.document=t,this.platformId=e,this.el=i,$(this.platformId)?this.isAndroid=_():this.isAndroid=!1}isNavKeyPress(t){let e=t.keyCode;return e=b().safari&&U[e]||e,e>=33&&e<=40||e==I.RETURN||e==I.TAB||e==I.ESC}isSpecialKey(t){let e=t.keyCode||t.charCode;return e==9||e==13||e==27||e==16||e==17||e>=18&&e<=20||b().opera&&!t.shiftKey&&(e==8||e>=33&&e<=35||e>=36&&e<=39||e>=44&&e<=45)}getKey(t){let e=t.keyCode||t.charCode;return b().safari&&U[e]||e}getCharCode(t){return t.charCode||t.keyCode||t.which}findDelta(t,e){let i="";for(let n=0;n<t.length;n++)t.substr(0,n)+t.substr(n+t.length-e.length)===e&&(i=t.substr(n,t.length-e.length));return i}isValidChar(t){return this.regex.test(t)}isValidString(t){for(let e=0;e<t.length;e++)if(!this.isValidChar(t.substr(e,1)))return!1;return!0}onInput(t){if(this.isAndroid&&!this.pValidateOnly){let e=this.el.nativeElement.value,i=this.lastValue||"",n=this.findDelta(e,i),s=this.findDelta(i,e);n.length>1||!n&&!s?this.isValidString(e)||(this.el.nativeElement.value=i,this.ngModelChange.emit(i)):s||this.isValidChar(n)||(this.el.nativeElement.value=i,this.ngModelChange.emit(i)),e=this.el.nativeElement.value,this.isValidString(e)&&(this.lastValue=e)}}onKeyPress(t){if(this.isAndroid||this.pValidateOnly)return;let e=b(),i=this.getKey(t);if(e.mozilla&&(t.ctrlKey||t.altKey))return;if(i==17||i==18||i==13)return;let n=this.getCharCode(t),s=String.fromCharCode(n),k=!0;if(!e.mozilla&&(this.isSpecialKey(t)||!s))return;let Q=(this.el.nativeElement.value||"")+s;k=this.regex.test(Q),k||t.preventDefault()}onPaste(t){let e=t.clipboardData;if(!e&&this.document.defaultView){let i=this.document.defaultView.clipboardData;i&&(e={getData:n=>i.getData("text")})}if(e){let i=/\{[0-9]+\}/,n=e.getData("text");if(i.test(this.regex.toString())){if(!this.regex.test(n)){t.preventDefault();return}}else for(let s of n.toString())if(!this.regex.test(s)){t.preventDefault();return}}}validate(t){if(this.pValidateOnly){let e=this.el.nativeElement.value;if(e&&!this.regex.test(e))return{validatePattern:!1}}}static \u0275fac=function(e){return new(e||l)(g(D),g(M),g(E))};static \u0275dir=A({type:l,selectors:[["","pKeyFilter",""]],hostBindings:function(e,i){e&1&&V("input",function(s){return i.onInput(s)})("keypress",function(s){return i.onKeyPress(s)})("paste",function(s){return i.onPaste(s)})},inputs:{pValidateOnly:[2,"pValidateOnly","pValidateOnly",B],pattern:[0,"pKeyFilter","pattern"]},outputs:{ngModelChange:"ngModelChange"},features:[R([W])]})}return l})(),K=(()=>{class l{static \u0275fac=function(e){return new(e||l)};static \u0275mod=S({type:l});static \u0275inj=C({})}return l})();var G=(()=>{class l{code={basic:`<input pInputText pKeyFilter="int" />
<input pInputText pKeyFilter="num" />
<input pInputText pKeyFilter="money" />
<input pInputText pKeyFilter="hex" />
<input pInputText pKeyFilter="alpha" />
<input pInputText pKeyFilter="alphanum" />`,html:`<div class="card">
    <div class="flex flex-wrap gap-4 mb-6">
        <div class="flex-auto">
            <label for="integer" class="font-bold block mb-2"> Integer </label>
            <input pInputText id="integer" pKeyFilter="int" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="number" class="font-bold block mb-2"> Number </label>
            <input pInputText id="number" pKeyFilter="num" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="money" class="font-bold block mb-2"> Money </label>
            <input pInputText id="money" pKeyFilter="money" class="w-full" />
        </div>
    </div>
    <div class="flex flex-wrap gap-4">
        <div class="flex-auto">
            <label for="hex" class="font-bold block mb-2"> Hex </label>
            <input pInputText id="hex" pKeyFilter="hex" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="alphabetic" class="font-bold block mb-2"> Alphabetic </label>
            <input pInputText id="alphabetic" pKeyFilter="alpha" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="alphanumeric" class="font-bold block mb-2"> Alphanumeric </label>
            <input pInputText id="alphanumeric" pKeyFilter="alphanum" class="w-full" />
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
    selector: 'key-filter-presets-demo',
    templateUrl: './key-filter-presets-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, KeyFilterModule]
})
export class KeyFilterPresetsDemo {}`};static \u0275fac=function(e){return new(e||l)};static \u0275cmp=d({type:l,selectors:[["presets-doc"]],decls:34,vars:1,consts:[[1,"card"],[1,"flex","flex-wrap","gap-4","mb-6"],[1,"flex-auto"],["for","integer",1,"font-bold","block","mb-2"],["pInputText","","id","integer","pKeyFilter","int",1,"w-full"],["for","number",1,"font-bold","block","mb-2"],["pInputText","","id","number","pKeyFilter","num",1,"w-full"],["for","money",1,"font-bold","block","mb-2"],["pInputText","","id","money","pKeyFilter","money",1,"w-full"],[1,"flex","flex-wrap","gap-4"],["for","hex",1,"font-bold","block","mb-2"],["pInputText","","id","hex","pKeyFilter","hex",1,"w-full"],["for","alphabetic",1,"font-bold","block","mb-2"],["pInputText","","id","alphabetic","pKeyFilter","alpha",1,"w-full"],["for","alphanumeric",1,"font-bold","block","mb-2"],["pInputText","","id","alphanumeric","pKeyFilter","alphanum",1,"w-full"],["selector","key-filter-presets-demo",3,"code"]],template:function(e,i){e&1&&(p(0,"app-docsectiontext")(1,"p"),r(2,"KeyFilter provides various presets configured with the "),p(3,"i"),r(4,"pKeyFilter"),o(),r(5," property."),o()(),p(6,"div",0)(7,"div",1)(8,"div",2)(9,"label",3),r(10," Integer "),o(),a(11,"input",4),o(),p(12,"div",2)(13,"label",5),r(14," Number "),o(),a(15,"input",6),o(),p(16,"div",2)(17,"label",7),r(18," Money "),o(),a(19,"input",8),o()(),p(20,"div",9)(21,"div",2)(22,"label",10),r(23," Hex "),o(),a(24,"input",11),o(),p(25,"div",2)(26,"label",12),r(27," Alphabetic "),o(),a(28,"input",13),o(),p(29,"div",2)(30,"label",14),r(31," Alphanumeric "),o(),a(32,"input",15),o()()(),a(33,"app-code",16)),e&2&&(m(33),c("code",i.code))},dependencies:[F,v,K,h,y,f,u],encapsulation:2})}return l})();var q=(()=>{class l{blockSpace=/^[^\s]+$/;blockChars=/^[^<>*!]+$/;code={basic:`<input pInputText [pKeyFilter]="blockSpace" />
<input pInputText [pKeyFilter]="blockChars" />`,html:`<div class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="blockspace" class="font-bold block mb-2"> Block Space </label>
        <input pInputText id="blockspace" [pKeyFilter]="blockSpace" class="w-full" />
    </div>
    <div class="flex-auto">
        <label for="block" class="font-bold block mb-2"> Block < > * ! </label>
        <input pInputText id="block" [pKeyFilter]="blockChars" class="w-full" />
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
    selector: 'key-filter-reg-exp-demo',
    templateUrl: './key-filter-reg-exp-demo.html',
    standalone: true,
    imports: [FormsModule, InputTextModule, KeyFilterModule]
})
export class KeyFilterRegExpDemo {
     blockSpace: RegExp = /^[^\\s]+$/;
     blockChars: RegExp = /^[^<>*!]+$/;
}`};static \u0275fac=function(e){return new(e||l)};static \u0275cmp=d({type:l,selectors:[["reg-exp-demo"]],decls:13,vars:3,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","blockspace",1,"font-bold","block","mb-2"],["pInputText","","id","blockspace",1,"w-full",3,"pKeyFilter"],["for","block",1,"font-bold","block","mb-2"],["pInputText","","id","block",1,"w-full",3,"pKeyFilter"],["selector","key-filter-reg-exp-demo",3,"code"]],template:function(e,i){e&1&&(p(0,"app-docsectiontext")(1,"p"),r(2,"In addition to the presets, a regular expression can be configured for customization."),o()(),p(3,"div",0)(4,"div",1)(5,"label",2),r(6," Block Space "),o(),a(7,"input",3),o(),p(8,"div",1)(9,"label",4),r(10," Block < > * ! "),o(),a(11,"input",5),o()(),a(12,"app-code",6)),e&2&&(m(7),c("pKeyFilter",i.blockSpace),m(4),c("pKeyFilter",i.blockChars),m(),c("code",i.code))},dependencies:[F,v,K,h,y,f,u],encapsulation:2})}return l})();var Z=()=>["KeyFilter"],J=(()=>{class l{docs=[{id:"import",label:"Import",component:j},{id:"presets",label:"Presets",component:G},{id:"regex",label:"Regex",component:q},{id:"accessibility",label:"Accessibility",component:N}];static \u0275fac=function(e){return new(e||l)};static \u0275cmp=d({type:l,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular KeyFilter Component","header","KeyFilter","description","KeyFilter is a directive to restrict individual key strokes. In order to restrict the whole input, use InputNumber or InputMask instead.",3,"docs","apiDocs"]],template:function(e,i){e&1&&a(0,"app-doc",0),e&2&&c("docs",i.docs)("apiDocs",P(2,Z))},dependencies:[H],encapsulation:2})}return l})();var Re=[{path:"",component:J}];export{Re as default};
