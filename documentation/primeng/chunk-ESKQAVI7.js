import{a as v,b as u}from"./chunk-TKXBBDTC.js";import{a as C,b}from"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import"./chunk-CTI5WBER.js";import{b as g}from"./chunk-FKOOMXTU.js";import{a as c}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as y}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{ga as p,ha as f}from"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import"./chunk-D2XKNHFS.js";import{Eb as l,Fb as t,Gb as i,Hb as s,Qa as m,gb as a,hc as e,sc as h}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var z=(()=>{class o{code={basic:`<div class="flex flex-col items-center">
    <div>
        <p-button pStyleClass=".box1" enterFromClass="my-hidden" enterActiveClass="my-fadein" label="FadeIn" class="mr-2" />
        <p-button
            pStyleClass=".box1"
            leaveActiveClass="my-fadeout"
            leaveToClass="my-hidden"
            label="FadeOut"
            severity="secondary"
        />
    </div>
    <div class="h-32">
        <div class="my-hidden animate-duration-500 box1">
            <div
                class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
            >
                Custom
            </div>
        </div>
    </div>
</div>
<div class="flex flex-col items-center">
    <div>
        <p-button
            pStyleClass=".box2"
            enterFromClass="hidden"
            enterActiveClass="animate-slidedown"
            label="SlideDown"
            class="mr-2"
        />
        <p-button
            pStyleClass=".box2"
            leaveActiveClass="animate-slideup"
            leaveToClass="hidden"
            label="SlideUp"
            severity="secondary"
        />
    </div>
    <div class="h-32">
        <div class="hidden animate-duration-500 box2 overflow-hidden">
            <div
                class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
            >
                Content
            </div>
        </div>
    </div>
</div>`,html:`<div class="card flex items-center justify-center gap-8">
    <div class="flex flex-col items-center">
        <div>
            <p-button pStyleClass=".box1" enterFromClass="my-hidden" enterActiveClass="my-fadein" label="FadeIn" class="mr-2" />
            <p-button
                pStyleClass=".box1"
                leaveActiveClass="my-fadeout"
                leaveToClass="my-hidden"
                label="FadeOut"
                severity="secondary"
            />
        </div>
        <div class="h-32">
            <div class="my-hidden animate-duration-500 box1">
                <div
                    class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
                >
                    Custom
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div>
            <p-button
                pStyleClass=".box2"
                enterFromClass="hidden"
                enterActiveClass="animate-slidedown"
                label="SlideDown"
                class="mr-2"
            />
            <p-button
                pStyleClass=".box2"
                leaveActiveClass="animate-slideup"
                leaveToClass="hidden"
                label="SlideUp"
                severity="secondary"
            />
        </div>
        <div class="h-32">
            <div class="hidden animate-duration-500 box2 overflow-hidden">
                <div
                    class="flex bg-primary text-primary-contrast items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32"
                >
                    Content
                </div>
            </div>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: './style-class-animation-demo',
    templateUrl: './style-class-animation-demo.html',
    standalone: true,
    imports: [StyleClassModule, ButtonModule],
    styles: [
        \`:host ::ng-deep {
                @keyframes my-fadein {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                @keyframes my-fadeout {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }

                .my-hidden {
                    display: none;
                }

                .my-fadein {
                    animation: my-fadein 150ms linear;
                }

                .my-fadeout {
                    animation: my-fadeout 150ms linear;
                }
            } \`
    ],
})
export class StyleClassAnimationDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["animation-doc"]],decls:48,vars:1,consts:[[1,"card","flex","items-center","justify-center","gap-8"],[1,"flex","flex-col","items-center"],["pStyleClass",".box1","enterFromClass","my-hidden","enterActiveClass","my-fadein","label","FadeIn",1,"mr-2"],["pStyleClass",".box1","leaveActiveClass","my-fadeout","leaveToClass","my-hidden","label","FadeOut","severity","secondary"],[1,"h-32"],[1,"my-hidden","animate-duration-500","box1"],[1,"flex","bg-primary","text-primary-contrast","items-center","justify-center","py-4","rounded-md","mt-4","font-bold","w-32","h-32"],["pStyleClass",".box2","enterFromClass","hidden","enterActiveClass","animate-slidedown","label","SlideDown",1,"mr-2"],["pStyleClass",".box2","leaveActiveClass","animate-slideup","leaveToClass","hidden","label","SlideUp","severity","secondary"],[1,"hidden","animate-duration-500","box2","overflow-hidden"],["selector","style-class-animation-demo",3,"code"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Classes to apply during enter and leave animations are specified using the "),t(3,"i"),e(4,"enterFromClass"),i(),e(5,", "),t(6,"i"),e(7,"enterActiveClass"),i(),e(8,", "),t(9,"i"),e(10,"enterToClass"),i(),e(11,", "),t(12,"i"),e(13,"leaveFromClass"),i(),e(14,", "),t(15,"i"),e(16,"leaveActiveClass"),i(),e(17,","),t(18,"i"),e(19,"leaveToClass"),i(),e(20,"properties. In addition in case the target is an overlay, "),t(21,"i"),e(22,"hideOnOutsideClick"),i(),e(23," would be handy to hide the target if outside of the popup is clicked, or enable "),t(24,"i"),e(25,"hideOnEscape"),i(),e(26," to close the popup by listening "),t(27,"i"),e(28,"escape"),i(),e(29," key. "),i()(),t(30,"div",0)(31,"div",1)(32,"div"),s(33,"p-button",2)(34,"p-button",3),i(),t(35,"div",4)(36,"div",5)(37,"div",6),e(38,"Custom"),i()()()(),t(39,"div",1)(40,"div"),s(41,"p-button",7)(42,"p-button",8),i(),t(43,"div",4)(44,"div",9)(45,"div",6),e(46,"Content"),i()()()()(),s(47,"app-code",10)),n&2&&(m(47),l("code",d.code))},dependencies:[y,c,u,v,f,p],styles:["@keyframes _ngcontent-%COMP%_my-fadein{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_my-fadeout{0%{opacity:1}to{opacity:0}}[_nghost-%COMP%]     .my-hidden{display:none}[_nghost-%COMP%]     .my-fadein{animation:_ngcontent-%COMP%_my-fadein .15s linear}[_nghost-%COMP%]     .my-fadeout{animation:_ngcontent-%COMP%_my-fadeout .15s linear}"]})}return o})();var T=(()=>{class o{code={basic:`<div class="flex justify-center">
    <div class="flex flex-col items-center gap-4 w-[25rem]">
        <p-button pStyleClass=".window-responsive-box" enterFromClass="hidden" enterActiveClass="animate-fadein" leaveActiveClass="animate-fadeout" leaveToClass="hidden" [hideOnResize]="true" label="Show Window Responsive Content" />
        <div class="window-responsive-box hidden animate-duration-300 border border-lg border-surface">
            <div class="p-4 flex flex-col gap-2">
                <h3 class="text-xl font-bold">Window Responsive Panel</h3>
                <p class="text-sm">This panel will hide when you resize the browser window.</p>
                <p class="text-sm">Try resizing your browser window to see the effect.</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center gap-4 w-[25rem]">
        <p-button
            pStyleClass=".resizable-container"
            enterFromClass="hidden"
            enterActiveClass="animate-fadein"
            leaveActiveClass="animate-fadeout"
            leaveToClass="hidden"
            [hideOnResize]="true"
            resizeSelector=".resizable-container"
            label="Show Resizable Panel"
        />

        <div class="resizable-container hidden animate-duration-300 border border-lg border-surface w-[20rem] w-max-[25rem] w-min-[15rem] overflow-auto resize">
            <div class="p-4 h-full flex flex-col gap-2">
                <h3 class="text-xl font-bold">Resizable Panel</h3>
                <p class="text-sm">Drag the resize handle in the bottom-right corner to resize this panel.</p>
                <p class="text-sm">The panel will hide when you resize it.</p>
            </div>
        </div>
    </div>
</div>`,html:`<div class="card">
    <div class="flex justify-center">
        <div class="flex flex-col items-center gap-4 w-[25rem]">
            <p-button pStyleClass=".window-responsive-box" enterFromClass="hidden" enterActiveClass="animate-fadein" leaveActiveClass="animate-fadeout" leaveToClass="hidden" [hideOnResize]="true" resizeSelector="window" label="Show Window Responsive Content" />
            <div class="window-responsive-box hidden animate-duration-300 border border-lg border-surface">
                <div class="p-4 flex flex-col gap-2">
                    <h3 class="text-xl font-bold">Window Responsive Panel</h3>
                    <p class="text-sm">This panel will hide when you resize the browser window.</p>
                    <p class="text-sm">Try resizing your browser window to see the effect.</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center gap-4 w-[25rem]">
            <p-button
                pStyleClass=".resizable-container"
                enterFromClass="hidden"
                enterActiveClass="animate-fadein"
                leaveActiveClass="animate-fadeout"
                leaveToClass="hidden"
                [hideOnResize]="true"
                resizeSelector=".resizable-container"
                label="Show Resizable Panel"
            />

            <div class="resizable-container hidden animate-duration-300 border border-lg border-surface w-[20rem] w-max-[25rem] w-min-[15rem] overflow-auto resize">
                <div class="p-4 h-full flex flex-col gap-2">
                    <h3 class="text-xl font-bold">Resizable Panel</h3>
                    <p class="text-sm">Drag the resize handle in the bottom-right corner to resize this panel.</p>
                    <p class="text-sm">The panel will hide when you resize it.</p>
                </div>
            </div>
        </div>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';
import { StyleClass } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'hide-on-resize-demo',
    templateUrl: './hide-on-resize-demo.html',
    standalone: true,
    imports: [StyleClass, ButtonModule]
})
export class HideOnResizeDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["hide-on-resize-doc"]],decls:35,vars:3,consts:[[1,"card"],[1,"flex","justify-center"],[1,"flex","flex-col","items-center","gap-4","w-[25rem]"],["pStyleClass",".window-responsive-box","enterFromClass","hidden","enterActiveClass","animate-fadein","leaveActiveClass","animate-fadeout","leaveToClass","hidden","resizeSelector","window","label","Show Window Responsive Content",3,"hideOnResize"],[1,"window-responsive-box","hidden","animate-duration-300","border","border-lg","border-surface"],[1,"p-4","flex","flex-col","gap-2"],[1,"text-xl","font-bold"],[1,"text-sm"],["pStyleClass",".resizable-container","enterFromClass","hidden","enterActiveClass","animate-fadein","leaveActiveClass","animate-fadeout","leaveToClass","hidden","resizeSelector",".resizable-container","label","Show Resizable Panel",3,"hideOnResize"],[1,"resizable-container","hidden","animate-duration-300","border","border-lg","border-surface","w-[20rem]","w-max-[25rem]","w-min-[15rem]","overflow-auto","resize"],[1,"p-4","h-full","flex","flex-col","gap-2"],["selector","hide-on-resize-demo",3,"code"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," When "),t(3,"i"),e(4,"hideOnResize"),i(),e(5," is enabled, the leave animation is triggered automatically when resizing occurs. Use the "),t(6,"i"),e(7,"resizeSelector"),i(),e(8," property to specify whether to listen to window resize events or element-specific resize events. Set "),t(9,"i"),e(10,"resizeSelector"),i(),e(11,` to "window" (default) or "document" for browser resize, or a CSS selector to observe the target element's dimensions. `),i()(),t(12,"div",0)(13,"div",1)(14,"div",2),s(15,"p-button",3),t(16,"div",4)(17,"div",5)(18,"h3",6),e(19,"Window Responsive Panel"),i(),t(20,"p",7),e(21,"This panel will hide when you resize the browser window."),i(),t(22,"p",7),e(23,"Try resizing your browser window to see the effect."),i()()()(),t(24,"div",2),s(25,"p-button",8),t(26,"div",9)(27,"div",10)(28,"h3",6),e(29,"Resizable Panel"),i(),t(30,"p",7),e(31,"Drag the resize handle in the bottom-right corner to resize this panel."),i(),t(32,"p",7),e(33,"The panel will hide when you resize it."),i()()()()()(),s(34,"app-code",11)),n&2&&(m(15),l("hideOnResize",!0),m(10),l("hideOnResize",!0),m(9),l("code",d.code))},dependencies:[y,c,u,v,f,p],encapsulation:2})}return o})();var A=(()=>{class o{code={typescript:"import { StyleClassModule } from 'primeng/styleclass';"};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["style-class-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,d){n&1&&s(0,"app-code",0),n&2&&l("code",d.code)("hideToggleCode",!0)},dependencies:[c],encapsulation:2})}return o})();var D=(()=>{class o{code={basic:`<p-button label="Toggle p-disabled" pStyleClass="@next" toggleClass="p-disabled" />
<input type="text" pInputText class="block mt-4" />`,html:`<div class="card flex flex-col items-center">
    <p-button label="Toggle p-disabled" pStyleClass="@next" toggleClass="p-disabled" />
    <input type="text" pInputText class="block mt-4">
</div>`,typescript:`import { Component } from '@angular/core';
import { StyleClass } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'style-class-toggle-class-demo',
    templateUrl: './style-class-toggle-class-demo.html',
    standalone: true,
    imports: [StyleClass, InputTextModule, ButtonModule]
})
export class StyleClassToggleClassDemo {}`};static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["toggle-class-doc"]],decls:26,vars:1,consts:[[1,"card","flex","flex-col","items-center"],["label","Toggle p-disabled","pStyleClass","@next","toggleClass","p-disabled"],["type","text","pInputText","",1,"block","mt-4"],["selector","style-class-toggle-class-demo",3,"code"]],template:function(n,d){n&1&&(t(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"StyleClass"),i(),e(4," has two modes, "),t(5,"i"),e(6,"toggleClass"),i(),e(7," to simply add-remove a class and enter/leave animations. The target element to change the styling is defined with the "),t(8,"i"),e(9,"selector"),i(),e(10," property that accepts any valid CSS selector or keywords including "),t(11,"i"),e(12,"@next"),i(),e(13,", "),t(14,"i"),e(15,"prev"),i(),e(16,", "),t(17,"i"),e(18,"parent"),i(),e(19,", "),t(20,"i"),e(21,"grandparent"),i()()(),t(22,"div",0),s(23,"p-button",1)(24,"input",2),i(),s(25,"app-code",3)),n&2&&(m(25),l("code",d.code))},dependencies:[y,c,u,v,f,p,b,C],encapsulation:2})}return o})();var E=()=>["StyleClass"],M=(()=>{class o{docs=[{id:"import",label:"Import",component:A},{id:"toggleclass",label:"Toggle Class",component:D},{id:"animation",label:"Animation",component:z},{id:"hideonresize",label:"Hide On Resize",component:T}];static \u0275fac=function(n){return new(n||o)};static \u0275cmp=a({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular StyleClass Component","header","StyleClass","description","StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.",3,"docs","apiDocs"]],template:function(n,d){n&1&&s(0,"app-doc",0),n&2&&l("docs",d.docs)("apiDocs",h(2,E))},dependencies:[g],encapsulation:2})}return o})();var ie=[{path:"",component:M}];export{ie as default};
