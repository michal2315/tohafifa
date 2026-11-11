import{a as D,b as x}from"./chunk-DM7HQYPB.js";import{a as De,b as xe}from"./chunk-ZYT4LGUE.js";import{a as he,b as Me}from"./chunk-2SUSAFZL.js";import{a as $,b as ke}from"./chunk-JNUBCW5H.js";import"./chunk-66742H4U.js";import{a as J,b as Q}from"./chunk-N3SKU25W.js";import{a as X,b as Z}from"./chunk-SGEFCG26.js";import"./chunk-27JIZF5R.js";import"./chunk-I67REHSN.js";import"./chunk-W2A7AHXD.js";import{d as re,f as M,g as O,h as le,i as k,j as R,k as de,l as me,p as pe,t as ce,u as v,v as se}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as ye}from"./chunk-FKOOMXTU.js";import{a as h}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as ge}from"./chunk-XCUGNKAG.js";import{a as y,b as fe}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import{d as U,h as Y}from"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as K,fa as H,ga as ue,ha as A,j as q,k as G}from"./chunk-MCW4FHXZ.js";import{za as V}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as ne,w as L}from"./chunk-D2XKNHFS.js";import{$a as oe,Ab as z,Eb as m,Fb as i,Gb as t,Gc as W,Hb as c,Ob as F,Qa as l,Sb as P,Ub as te,X as N,aa as _,ba as E,cc as T,gb as p,hc as e,ic as ie,mb as B,mc as s,nc as u,oc as f,sc as ae,zb as j}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var ve=(()=>{class a{code={basic:`<label for="date1">Date</label>
<p-datepicker inputId="date1"/>

<span id="date2">Date</span>
<p-datepicker ariaLabelledBy="date2"/>

<p-datepicker ariaLabel="Date"/>`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["date-picker-accessibility-doc"]],decls:336,vars:4,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,o){n&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),i(4,"p"),e(5," Value to describe the component can either be provided via "),i(6,"i"),e(7,"label"),t(),e(8," tag combined with "),i(9,"i"),e(10,"inputId"),t(),e(11," prop or using "),i(12,"i"),e(13,"aria-labelledby"),t(),e(14,", "),i(15,"i"),e(16,"aria-label"),t(),e(17," props. The input element has "),i(18,"i"),e(19,"combobox"),t(),e(20," role in addition to "),i(21,"i"),e(22,"aria-autocomplete"),t(),e(23,' as "none", '),i(24,"i"),e(25,"aria-haspopup"),t(),e(26,' as "dialog" and '),i(27,"i"),e(28,"aria-expanded"),t(),e(29," attributes. The relation between the input and the popup is created with "),i(30,"i"),e(31,"aria-controls"),t(),e(32," attribute that refers to the id of the popup. "),t(),i(33,"p"),e(34," The optional DatePicker button requires includes "),i(35,"i"),e(36,"aria-haspopup"),t(),e(37,", "),i(38,"i"),e(39,"aria-expanded"),t(),e(40," for states along with "),i(41,"i"),e(42,"aria-controls"),t(),e(43," to define the relation between the popup and the button. The value to read is retrieved from the "),i(44,"i"),e(45,"chooseDate"),t(),e(46," key of the aria property from the "),i(47,"a",0),e(48,"locale"),t(),e(49," API. This label is also used for the "),i(50,"i"),e(51,"aria-label"),t(),e(52," of the popup as well. When there is a value selected, it is formatted and appended to the label to be able to notify users about the current value. "),t(),i(53,"p"),e(54," Popup has a "),i(55,"i"),e(56,"dialog"),t(),e(57," role along with "),i(58,"i"),e(59,"aria-modal"),t(),e(60," and "),i(61,"i"),e(62,"aria-label"),t(),e(63,". The navigation buttons at the header has an "),i(64,"i"),e(65,"aria-label"),t(),e(66," retrieved from the "),i(67,"i"),e(68,"prevYear"),t(),e(69,", "),i(70,"i"),e(71,"nextYear"),t(),e(72,", "),i(73,"i"),e(74,"prevMonth"),t(),e(75,", "),i(76,"i"),e(77,"nextMonth"),t(),e(78,","),i(79,"i"),e(80,"prevDecade"),t(),e(81," and "),i(82,"i"),e(83,"nextDecade"),t(),e(84," keys of the locale aria API. Similarly month picker button uses the "),i(85,"i"),e(86,"chooseMonth"),t(),e(87," and year picker button uses the "),i(88,"i"),e(89,"chooseYear"),t(),e(90," keys. "),t(),i(91,"p"),e(92," Main date table uses "),i(93,"i"),e(94,"grid"),t(),e(95," role that contains th elements with "),i(96,"i"),e(97,"col"),t(),e(98," as the scope along with "),i(99,"i"),e(100,"abbr"),t(),e(101," tag resolving to the full name of the month. Each date cell has an "),i(102,"i"),e(103,"aria-label"),t(),e(104," referring to the full date value. Buttons at the footer utilize their readable labels as "),i(105,"i"),e(106,"aria-label"),t(),e(107," as well. Selected date also receives the "),i(108,"i"),e(109,"aria-selected"),t(),e(110," attribute. "),t(),i(111,"p"),e(112," Timepicker spinner buttons get their labels for "),i(113,"i"),e(114,"aria-label"),t(),e(115," from the aria locale API using the "),i(116,"i"),e(117,"prevHour"),t(),e(118,", "),i(119,"i"),e(120,"nextHour"),t(),e(121,", "),i(122,"i"),e(123,"prevMinute"),t(),e(124,", "),i(125,"i"),e(126,"nextMinute"),t(),e(127,", "),i(128,"i"),e(129,"prevSecond"),t(),e(130,", "),i(131,"i"),e(132,"nextSecond"),t(),e(133,", "),i(134,"i"),e(135,"am"),t(),e(136," and "),i(137,"i"),e(138,"pm"),t(),e(139," keys. "),t(),i(140,"p"),e(141,"DatePicker also includes a hidden section that is only available to screen readers with "),i(142,"i"),e(143,"aria-live"),t(),e(144,' as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.'),t()(),c(145,"app-code",1),i(146,"h3"),e(147,"Choose Date Button Keyboard Support"),t(),i(148,"div",2)(149,"table",3)(150,"thead")(151,"tr")(152,"th"),e(153,"Key"),t(),i(154,"th"),e(155,"Function"),t()()(),i(156,"tbody")(157,"tr")(158,"td")(159,"i"),e(160,"space"),t()(),i(161,"td"),e(162,"Opens popup and moves focus to the selected date, if there is none focuses on today."),t()(),i(163,"tr")(164,"td")(165,"i"),e(166,"enter"),t()(),i(167,"td"),e(168,"Opens popup and moves focus to the selected date, if there is none focuses on today."),t()()()()(),i(169,"h3"),e(170,"Popup Keyboard Support"),t(),i(171,"div",2)(172,"table",3)(173,"thead")(174,"tr")(175,"th"),e(176,"Key"),t(),i(177,"th"),e(178,"Function"),t()()(),i(179,"tbody")(180,"tr")(181,"td")(182,"i"),e(183,"escape"),t()(),i(184,"td"),e(185,"Closes the popup and moves focus to the input element."),t()(),i(186,"tr")(187,"td")(188,"i"),e(189,"tab"),t()(),i(190,"td"),e(191,"Moves focus to the next focusable element within the popup."),t()(),i(192,"tr")(193,"td")(194,"i"),e(195,"shift"),t(),e(196," + "),i(197,"i"),e(198,"tab"),t()(),i(199,"td"),e(200,"Moves focus to the next focusable element within the popup."),t()()()()(),i(201,"h3"),e(202,"Header Buttons Keyboard Support"),t(),i(203,"div",2)(204,"table",3)(205,"thead")(206,"tr")(207,"th"),e(208,"Key"),t(),i(209,"th"),e(210,"Function"),t()()(),i(211,"tbody")(212,"tr")(213,"td")(214,"i"),e(215,"enter"),t()(),i(216,"td"),e(217,"Triggers the button action."),t()(),i(218,"tr")(219,"td")(220,"i"),e(221,"space"),t()(),i(222,"td"),e(223,"Triggers the button action."),t()()()()(),i(224,"h3"),e(225,"Date Grid Keyboard Support"),t(),i(226,"div",2)(227,"table",3)(228,"thead")(229,"tr")(230,"th"),e(231,"Key"),t(),i(232,"th"),e(233,"Function"),t()()(),i(234,"tbody")(235,"tr")(236,"td")(237,"i"),e(238,"enter"),t()(),i(239,"td"),e(240,"Selects the date, closes the popup and moves focus to the input element."),t()(),i(241,"tr")(242,"td")(243,"i"),e(244,"space"),t()(),i(245,"td"),e(246,"Selects the date, closes the popup and moves focus to the input element."),t()(),i(247,"tr")(248,"td")(249,"i"),e(250,"up arrow"),t()(),i(251,"td"),e(252,"Moves focus to the same day of the previous week."),t()(),i(253,"tr")(254,"td")(255,"i"),e(256,"down arrow"),t()(),i(257,"td"),e(258,"Moves focus to the same day of the next week."),t()(),i(259,"tr")(260,"td")(261,"i"),e(262,"right arrow"),t()(),i(263,"td"),e(264,"Moves focus to the next day."),t()(),i(265,"tr")(266,"td")(267,"i"),e(268,"left arrow"),t()(),i(269,"td"),e(270,"Moves focus to the previous day."),t()(),i(271,"tr")(272,"td")(273,"i"),e(274,"home"),t()(),i(275,"td"),e(276,"Moves focus to the first day of the current week."),t()(),i(277,"tr")(278,"td")(279,"i"),e(280,"end"),t()(),i(281,"td"),e(282,"Moves focus to the last day of the current week."),t()(),i(283,"tr")(284,"td")(285,"i"),e(286,"page up"),t()(),i(287,"td"),e(288,"Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker."),t()(),i(289,"tr")(290,"td")(291,"i"),e(292,"shift"),t(),e(293," + "),i(294,"i"),e(295,"page up"),t()(),i(296,"td"),e(297,"Changes the date to previous year in date picker mode. Has no effect in month or year picker"),t()(),i(298,"tr")(299,"td")(300,"i"),e(301,"page down"),t()(),i(302,"td"),e(303,"Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker."),t()(),i(304,"tr")(305,"td")(306,"i"),e(307,"shift"),t(),e(308," + "),i(309,"i"),e(310,"page down"),t()(),i(311,"td"),e(312,"Changes the date to next year in date picker mode. Has no effect in month or year picker"),t()()()()(),i(313,"h3"),e(314,"Footer Buttons Keyboard Support"),t(),i(315,"div",2)(316,"table",3)(317,"thead")(318,"tr")(319,"th"),e(320,"Key"),t(),i(321,"th"),e(322,"Function"),t()()(),i(323,"tbody")(324,"tr")(325,"td")(326,"i"),e(327,"enter"),t()(),i(328,"td"),e(329,"Triggers the button action."),t()(),i(330,"tr")(331,"td")(332,"i"),e(333,"space"),t()(),i(334,"td"),e(335,"Triggers the button action."),t()()()()()()),n&2&&(l(145),m("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[h,y],encapsulation:2})}return a})();var be=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'date-picker-basic-demo',
    templateUrl: './date-picker-basic-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerBasicDemo {
    date: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-basic-demo"]],decls:12,vars:2,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","date-picker-basic-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Two-way value binding is defined using the standard "),i(3,"i"),e(4,"ngModel"),t(),e(5," directive referencing to a "),i(6,"i"),e(7,"Date"),t(),e(8," property."),t()(),i(9,"div",0)(10,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(11,"app-code",2)),n&2&&(l(10),s("ngModel",o.date),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();function Ze(a,I){if(a&1){let d=F();i(0,"div",5)(1,"div",6),c(2,"p-button",7)(3,"p-button",8),t(),i(4,"div",6)(5,"p-button",9),P("click",function(o){let g=_(d).todayCallback;return E(g(o))}),t(),i(6,"p-button",10),P("click",function(o){let g=_(d).clearCallback;return E(g(o))}),t()()()}}var Ce=(()=>{class a{date;dates;code={basic:`<p-datepicker [(ngModel)]="date" [showButtonBar]="true" placeholder="Basic" />
<p-datepicker [(ngModel)]="dates" [showButtonBar]="true" placeholder="Customized" selectionMode="range" [readonlyInput]="true">
    <ng-template #buttonbar let-todayCallback="todayCallback" let-clearCallback="clearCallback">
        <div class="flex justify-between w-full">
            <div class="flex gap-2">
                <p-button size="small" label="Exact" severity="secondary" />
                <p-button size="small" label="Flexible" severity="secondary" />
            </div>
            <div class="flex gap-2">
                <p-button size="small" label="Today" (click)="todayCallback($event)" variant="outlined" />
                <p-button size="small" icon="pi pi-times" severity="danger" variant="text" (click)="clearCallback($event)" />
            </div>
        </div>
    </ng-template>
</p-datepicker>`,html:`<div class="card flex justify-center gap-4 flex-wrap">
    <p-datepicker [(ngModel)]="date" [showButtonBar]="true" placeholder="Basic" />
    <p-datepicker [(ngModel)]="dates" [showButtonBar]="true" placeholder="Customized" selectionMode="range" [readonlyInput]="true">
        <ng-template #buttonbar let-todayCallback="todayCallback" let-clearCallback="clearCallback">
            <div class="flex justify-between w-full">
                <div class="flex gap-2">
                    <p-button size="small" label="Exact" severity="secondary" />
                    <p-button size="small" label="Flexible" severity="secondary" />
                </div>
                <div class="flex gap-2">
                    <p-button size="small" label="Today" (click)="todayCallback($event)" variant="outlined" />
                    <p-button size="small" icon="pi pi-times" severity="danger" variant="text" (click)="clearCallback($event)" />
                </div>
            </div>
        </ng-template>
    </p-datepicker>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'date-picker-buttonbar-demo',
    templateUrl: './date-picker-buttonbar-demo.html',
    standalone: true,
    imports: [FormsModule, DatePickerModule, ButtonModule]
})
export class DatePickerButtonbarDemo {
    date: Date | undefined;

    dates: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-buttonbar-demo"]],decls:15,vars:6,consts:[["buttonbar",""],[1,"card","flex","justify-center","gap-4","flex-wrap"],["placeholder","Basic",3,"ngModelChange","ngModel","showButtonBar"],["placeholder","Customized","selectionMode","range",3,"ngModelChange","ngModel","showButtonBar","readonlyInput"],["selector","date-picker-buttonbar-demo",3,"code"],[1,"flex","justify-between","w-full"],[1,"flex","gap-2"],["size","small","label","Exact","severity","secondary"],["size","small","label","Flexible","severity","secondary"],["size","small","label","Today","variant","outlined",3,"click"],["size","small","icon","pi pi-times","severity","danger","variant","text",3,"click"]],template:function(n,o){if(n&1){let g=F();i(0,"app-docsectiontext")(1,"p"),e(2,"When "),i(3,"i"),e(4,"showButtonBar"),t(),e(5," is present, today and clear buttons are displayed at the footer. The content can be fully customized with the "),i(6,"i"),e(7,"buttonbar"),t(),e(8," template as well."),t()(),i(9,"div",1)(10,"p-datepicker",2),f("ngModelChange",function(b){return _(g),u(o.date,b)||(o.date=b),E(b)}),t(),i(11,"p-datepicker",3),f("ngModelChange",function(b){return _(g),u(o.dates,b)||(o.dates=b),E(b)}),B(12,Ze,7,0,"ng-template",null,0,W),t()(),c(14,"app-code",4)}n&2&&(l(10),s("ngModel",o.date),m("showButtonBar",!0),l(),s("ngModel",o.dates),m("showButtonBar",!0)("readonlyInput",!0),l(3),m("code",o.code))},dependencies:[v,M,k,x,D,A,ue,h,y],encapsulation:2})}return a})();function $e(a,I){if(a&1&&(i(0,"strong",6),e(1),t()),a&2){let d=te().$implicit;l(),ie(d.day)}}function et(a,I){if(a&1&&e(0),a&2){let d=te().$implicit;ie(d.day)}}function tt(a,I){if(a&1&&B(0,$e,2,1,"strong",5)(1,et,1,1,"ng-template",null,1,W),a&2){let d=I.$implicit,n=T(2);m("ngIf",d.day>10&&d.day<15)("ngIfElse",n)}}var we=(()=>{class a{date;code={basic:`<p-datepicker [(ngModel)]="date">
    <ng-template #date let-date>
        <strong *ngIf="date.day > 10 && date.day < 15; else elseBlock" style="text-decoration: line-through">{{ date.day }}</strong>
        <ng-template #elseBlock>{{ date.day }}</ng-template>
    </ng-template>
</p-datepicker>`,html:`<div class="card flex justify-center">
   <p-datepicker [(ngModel)]="date">
        <ng-template #date let-date>
            <strong *ngIf="date.day > 10 && date.day < 15; else elseBlock" style="text-decoration: line-through">{{ date.day }}</strong>
            <ng-template #elseBlock>{{ date.day }}</ng-template>
        </ng-template>
    </p-datepicker>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-datetemplate-demo',
    templateUrl: './date-picker-datetemplate-demo.html',
    standalone: true,
    imports: [FormsModule, DatePickerModule]
})
export class DatePickerDatetemplateDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-datetemplate-demo"]],decls:11,vars:2,consts:[["date",""],["elseBlock",""],[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel"],["selector","date-picker-datetemplate-demo",3,"code"],["style","text-decoration: line-through",4,"ngIf","ngIfElse"],[2,"text-decoration","line-through"]],template:function(n,o){if(n&1){let g=F();i(0,"app-docsectiontext")(1,"p"),e(2,"Custom content can be placed inside date cells with the "),i(3,"i"),e(4,"ng-template"),t(),e(5," property that takes a Date as a parameter."),t()(),i(6,"div",2)(7,"p-datepicker",3),f("ngModelChange",function(b){_(g);let ee=T(9);return u(ee,b),E(b)}),B(8,tt,3,2,"ng-template",null,0,W),t()(),c(10,"app-code",4)}if(n&2){let g=T(9);l(7),s("ngModel",g),l(3),m("code",o.code)}},dependencies:[L,ne,v,M,k,x,D,h,y],encapsulation:2})}return a})();var _e=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" [disabled]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [disabled]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-disabled-demo',
    templateUrl: './date-picker-disabled-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerDisabledDemo {
    date: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-disabled-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","disabled"],["selector","date-picker-disabled-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"When "),i(3,"i"),e(4,"disabled"),t(),e(5," is present, the element cannot be edited and focused."),t()(),i(6,"div",0)(7,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(8,"app-code",2)),n&2&&(l(7),s("ngModel",o.date),m("disabled",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Ee=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" variant="filled" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" variant="filled" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-filled-demo',
    templateUrl: './date-picker-filled-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerFilledDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-filled-demo"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["variant","filled",3,"ngModelChange","ngModel"],["selector","date-picker-filled-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Specify the "),i(3,"i"),e(4,"variant"),t(),e(5," property as "),i(6,"i"),e(7,"filled"),t(),e(8," to display the component with a higher visual emphasis than the default "),i(9,"i"),e(10,"outlined"),t(),e(11," style."),t()(),i(12,"div",0)(13,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(14,"app-code",2)),n&2&&(l(13),s("ngModel",o.date),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Fe=(()=>{class a{value1;value2;value3;code={basic:`<p-floatlabel>
    <p-datepicker [(ngModel)]="value1" inputId="over_label" showIcon iconDisplay="input" />
    <label for="over_label">Over Label</label>
</p-floatlabel>

<p-floatlabel variant="in">
    <p-datepicker [(ngModel)]="value2" inputId="in_label" showIcon iconDisplay="input" />
    <label for="in_label">In Label</label>
</p-floatlabel>

<p-floatlabel variant="on">
    <p-datepicker [(ngModel)]="value3" inputId="on_label" showIcon iconDisplay="input" />
    <label for="on_label">On Label</label>
</p-floatlabel>`,html:`<div class="card flex flex-wrap justify-center items-end gap-4">
    <p-floatlabel>
        <p-datepicker [(ngModel)]="value1" inputId="over_label" showIcon iconDisplay="input" />
        <label for="over_label">Over Label</label>
    </p-floatlabel>

    <p-floatlabel variant="in">
        <p-datepicker [(ngModel)]="value2" inputId="in_label" showIcon iconDisplay="input" />
        <label for="in_label">In Label</label>
    </p-floatlabel>

    <p-floatlabel variant="on">
        <p-datepicker [(ngModel)]="value3" inputId="on_label" showIcon iconDisplay="input" />
        <label for="on_label">On Label</label>
    </p-floatlabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
    selector: 'date-picker-float-label-demo',
    templateUrl: './date-picker-float-label-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker, FloatLabel]
})
export class DatePickerFloatLabelDemo {
    value1: Date | undefined;

    value2: Date | undefined;

    value3: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-float-label-demo"]],decls:20,vars:4,consts:[["routerLink","/floatlabel"],[1,"card","flex","flex-wrap","justify-center","items-end","gap-4"],["inputId","over_label","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","over_label"],["variant","in"],["inputId","in_label","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","in_label"],["variant","on"],["inputId","on_label","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","on_label"],["selector","date-picker-float-label-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," A floating label appears on top of the input field when focused. Visit "),i(3,"a",0),e(4,"FloatLabel"),t(),e(5," documentation for more information. "),t()(),i(6,"div",1)(7,"p-floatlabel")(8,"p-datepicker",2),f("ngModelChange",function(r){return u(o.value1,r)||(o.value1=r),r}),t(),i(9,"label",3),e(10,"Over Label"),t()(),i(11,"p-floatlabel",4)(12,"p-datepicker",5),f("ngModelChange",function(r){return u(o.value2,r)||(o.value2=r),r}),t(),i(13,"label",6),e(14,"In Label"),t()(),i(15,"p-floatlabel",7)(16,"p-datepicker",8),f("ngModelChange",function(r){return u(o.value3,r)||(o.value3=r),r}),t(),i(17,"label",9),e(18,"On Label"),t()()(),c(19,"app-code",10)),n&2&&(l(8),s("ngModel",o.value1),l(4),s("ngModel",o.value2),l(4),s("ngModel",o.value3),l(3),m("code",o.code))},dependencies:[v,M,k,Y,U,x,D,Me,he,h,y],encapsulation:2})}return a})();var Pe=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" dateFormat="dd.mm.yy" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" dateFormat="dd.mm.yy" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-format-demo',
    templateUrl: './date-picker-format-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerFormatDemo {
    date: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-format-demo"]],decls:81,vars:2,consts:[[1,"mb-6","leading-loose"],[1,"card","flex","justify-center"],["dateFormat","dd.mm.yy",3,"ngModelChange","ngModel"],["selector","date-picker-format-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Default date format is "),i(3,"i"),e(4,"mm/dd/yy"),t(),e(5," which can be customized using the "),i(6,"i"),e(7,"dateFormat"),t(),e(8," property. Following options can be a part of the format."),t(),i(9,"ul",0)(10,"li")(11,"i"),e(12,"d"),t(),e(13," - day of month (no leading zero)"),t(),i(14,"li")(15,"i"),e(16,"dd"),t(),e(17," - day of month (two digit)"),t(),i(18,"li")(19,"i"),e(20,"o"),t(),e(21," - day of the year (no leading zeros)"),t(),i(22,"li")(23,"i"),e(24,"oo"),t(),e(25," - day of the year (three digit)"),t(),i(26,"li")(27,"i"),e(28,"D"),t(),e(29," - day name short"),t(),i(30,"li")(31,"i"),e(32,"DD"),t(),e(33," - day name long"),t(),i(34,"li")(35,"i"),e(36,"m"),t(),e(37," - month of year (no leading zero)"),t(),i(38,"li")(39,"i"),e(40,"mm"),t(),e(41," - month of year (two digit)"),t(),i(42,"li")(43,"i"),e(44,"M"),t(),e(45," - month name short"),t(),i(46,"li")(47,"i"),e(48,"MM"),t(),e(49," - month name long"),t(),i(50,"li")(51,"i"),e(52,"y"),t(),e(53," - year (two digit)"),t(),i(54,"li")(55,"i"),e(56,"yy"),t(),e(57," - year (four digit)"),t(),i(58,"li")(59,"i"),e(60,"@"),t(),e(61," - Unix timestamp (ms since 01/01/1970)"),t(),i(62,"li")(63,"i"),e(64,"!"),t(),e(65," - Windows ticks (100ns since 01/01/0001)"),t(),i(66,"li")(67,"i"),e(68,"'...'"),t(),e(69," - literal text"),t(),i(70,"li")(71,"i"),e(72,"''"),t(),e(73," - single quote"),t(),i(74,"li")(75,"i"),e(76,"anything else"),t(),e(77," - literal text"),t()()(),i(78,"div",1)(79,"p-datepicker",2),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(80,"app-code",3)),n&2&&(l(79),s("ngModel",o.date),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();function at(a,I){if(a&1){let d=F();i(0,"i",10),P("click",function(o){let g=_(d).clickCallBack;return E(g(o))}),t()}}var Te=(()=>{class a{date1;date2;date3;code={basic:`<p-datepicker [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay" [showOnFocus]="false" />

<p-datepicker [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay" />

<p-datepicker [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" [timeOnly]="true" inputId="templatedisplay">
    <ng-template #inputicon let-clickCallBack="clickCallBack">
        <i class="pi pi-clock" (click)="clickCallBack($event)"></i>
    </ng-template>
</p-datepicker>`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="buttondisplay" class="font-bold block mb-2"> Button </label>
        <p-datepicker [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay" [showOnFocus]="false" />
    </div>

    <div class="flex-auto">
        <label for="icondisplay" class="font-bold block mb-2"> Default Icon </label>
        <p-datepicker [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay" />
    </div>

    <div class="flex-auto">
        <label for="templatedisplay" class="font-bold block mb-2"> Custom Icon </label>
        <p-datepicker [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" [timeOnly]="true" inputId="templatedisplay">
            <ng-template #inputicon let-clickCallBack="clickCallBack">
                <i class="pi pi-clock" (click)="clickCallBack($event)"></i>
            </ng-template>
        </p-datepicker>
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';

@Component({
    selector: 'date-picker-icon-demo',
    templateUrl: './date-picker-icon-demo.html',
    standalone: true,
    imports: [DatePickerModule, FormsModule, FluidModule]
})
export class DatePickerIconDemo {
    date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-icon-demo"]],decls:22,vars:11,consts:[["inputicon",""],[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","buttondisplay",1,"font-bold","block","mb-2"],["inputId","buttondisplay",3,"ngModelChange","ngModel","showIcon","showOnFocus"],["for","icondisplay",1,"font-bold","block","mb-2"],["inputId","icondisplay",3,"ngModelChange","ngModel","iconDisplay","showIcon"],["for","templatedisplay",1,"font-bold","block","mb-2"],["inputId","templatedisplay",3,"ngModelChange","ngModel","iconDisplay","showIcon","timeOnly"],["selector","date-picker-icon-demo",3,"code"],[1,"pi","pi-clock",3,"click"]],template:function(n,o){if(n&1){let g=F();i(0,"app-docsectiontext")(1,"p"),e(2,"An additional icon is displayed next to the input field when "),i(3,"i"),e(4,"showIcon"),t(),e(5," is present."),t()(),i(6,"p-fluid",1)(7,"div",2)(8,"label",3),e(9," Button "),t(),i(10,"p-datepicker",4),f("ngModelChange",function(b){return _(g),u(o.date1,b)||(o.date1=b),E(b)}),t()(),i(11,"div",2)(12,"label",5),e(13," Default Icon "),t(),i(14,"p-datepicker",6),f("ngModelChange",function(b){return _(g),u(o.date2,b)||(o.date2=b),E(b)}),t()(),i(15,"div",2)(16,"label",7),e(17," Custom Icon "),t(),i(18,"p-datepicker",8),f("ngModelChange",function(b){return _(g),u(o.date3,b)||(o.date3=b),E(b)}),B(19,at,1,0,"ng-template",null,0,W),t()()(),c(21,"app-code",9)}n&2&&(l(10),s("ngModel",o.date1),m("showIcon",!0)("showOnFocus",!1),l(4),s("ngModel",o.date2),m("iconDisplay","input")("showIcon",!0),l(4),s("ngModel",o.date3),m("iconDisplay","input")("showIcon",!0)("timeOnly",!0),l(3),m("code",o.code))},dependencies:[v,M,k,x,D,G,q,h,y],encapsulation:2})}return a})();var Ie=(()=>{class a{value;code={basic:`<p-iftalabel>
    <p-datepicker [(ngModel)]="value" inputId="date" showIcon iconDisplay="input" />
    <label for="date">Date</label>
</p-iftalabel>`,html:`<div class="card flex justify-center">
    <p-iftalabel>
        <p-datepicker [(ngModel)]="value" inputId="date" showIcon iconDisplay="input" />
        <label for="date">Date</label>
    </p-iftalabel>
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
    selector: 'date-picker-ifta-label-demo',
    templateUrl: './date-picker-ifta-label-demo.html',
    standalone: true,
    imports: [FormsModule, DatePickerModule, IftaLabelModule]
})
export class DatepickerIftaLabelDemo {
    value: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-ifta-label-demo"]],decls:12,vars:2,consts:[["routerLink","/iftalabel"],[1,"card","flex","justify-center"],["inputId","date","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["for","date"],["selector","date-picker-ifta-label-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"IftaLabel is used to create infield top aligned labels. Visit "),i(3,"a",0),e(4,"IftaLabel"),t(),e(5," documentation for more information."),t()(),i(6,"div",1)(7,"p-iftalabel")(8,"p-datepicker",2),f("ngModelChange",function(r){return u(o.value,r)||(o.value=r),r}),t(),i(9,"label",3),e(10,"Date"),t()()(),c(11,"app-code",4)),n&2&&(l(8),s("ngModel",o.value),l(3),m("code",o.code))},dependencies:[v,M,k,Y,U,x,D,xe,De,h,y],encapsulation:2})}return a})();var Be=(()=>{class a{code={typescript:"import { DatePickerModule } from 'primeng/datepicker';"};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,o){n&1&&c(0,"app-code",0),n&2&&m("code",o.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2})}return a})();var We=(()=>{class a{date;code={basic:'<p-datepicker class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-inline-demo',
    templateUrl: './date-picker-inline-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerInlineDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-inline-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-center"],[1,"max-w-full",3,"ngModelChange","ngModel","inline","showWeek"],["selector","date-picker-inline-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"DatePicker is displayed as a popup by default, add "),i(3,"i"),e(4,"inline"),t(),e(5," property to customize this behavior."),t()(),i(6,"div",0)(7,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(8,"app-code",2)),n&2&&(l(7),s("ngModel",o.date),m("inline",!0)("showWeek",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Le=(()=>{class a{date1;date2;code={basic:`<p-datepicker [(ngModel)]="date1" [invalid]="!date1" placeholder="Date" />
<p-datepicker [(ngModel)]="date2" [invalid]="!date2" variant="filled" placeholder="Date" />`,html:`<div class="card flex flex-wrap justify-center gap-4">
    <p-datepicker [(ngModel)]="date1" [invalid]="!date1" placeholder="Date" />
    <p-datepicker [(ngModel)]="date2" [invalid]="!date2" variant="filled" placeholder="Date" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-invalid-demo',
    templateUrl: './date-picker-invalid-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerInvalidDemo {
    date1: Date | undefined;
    
    date2: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-invalid-demo"]],decls:10,vars:5,consts:[[1,"card","flex","flex-wrap","justify-center","gap-4"],["placeholder","Date",3,"ngModelChange","ngModel","invalid"],["variant","filled","placeholder","Date",3,"ngModelChange","ngModel","invalid"],["selector","date-picker-invalid-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The invalid state is applied using the "),i(3,"i"),e(4,"\u2060invalid"),t(),e(5," property to indicate failed validation, which can be integrated with Angular Forms."),t()(),i(6,"div",0)(7,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date1,r)||(o.date1=r),r}),t(),i(8,"p-datepicker",2),f("ngModelChange",function(r){return u(o.date2,r)||(o.date2=r),r}),t()(),c(9,"app-code",3)),n&2&&(l(7),s("ngModel",o.date1),m("invalid",!o.date1),l(),s("ngModel",o.date2),m("invalid",!o.date2),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Ae=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-local-demo"]],decls:6,vars:0,consts:[["href","/configuration/#locale"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Locale for different languages and formats is defined globally, refer to the "),i(3,"a",0),e(4,"PrimeNG Locale"),t(),e(5," configuration for more information. "),t()())},dependencies:[y],encapsulation:2})}return a})();var Ne=(()=>{class a{date;minDate;maxDate;ngOnInit(){let d=new Date,n=d.getMonth(),o=d.getFullYear(),g=n===0?11:n-1,r=g===11?o-1:o,b=n===11?0:n+1,ee=b===0?o+1:o;this.minDate=new Date,this.minDate.setMonth(g),this.minDate.setFullYear(r),this.maxDate=new Date,this.maxDate.setMonth(b),this.maxDate.setFullYear(ee)}code={basic:'<p-datepicker [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true" />
</div>`,typescript:`import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-minmax-demo',
    templateUrl: './date-picker-minmax-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMinmaxDemo implements OnInit {
    date: Date | undefined;

    minDate: Date | undefined;

    maxDate: Date | undefined;

    ngOnInit() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
    }
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-minmax-demo"]],decls:12,vars:5,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","minDate","maxDate","readonlyInput"],["selector","date-picker-minmax-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Boundaries for the permitted dates that can be entered are defined with "),i(3,"i"),e(4,"minDate"),t(),e(5," and "),i(6,"i"),e(7,"maxDate"),t(),e(8," properties."),t()(),i(9,"div",0)(10,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(11,"app-code",2)),n&2&&(l(10),s("ngModel",o.date),m("minDate",o.minDate)("maxDate",o.maxDate)("readonlyInput",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var je=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-month-demo',
    templateUrl: './date-picker-month-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMonthDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-month-demo"]],decls:15,vars:3,consts:[[1,"card","flex","justify-center"],["view","month","dateFormat","mm/yy",3,"ngModelChange","ngModel","readonlyInput"],["selector","date-picker-month-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Month only picker is enabled by specifying "),i(3,"i"),e(4,"view"),t(),e(5," as "),i(6,"i"),e(7,"month"),t(),e(8," in addition to a suitable "),i(9,"i"),e(10,"dateFormat"),t(),e(11,"."),t()(),i(12,"div",0)(13,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(14,"app-code",2)),n&2&&(l(13),s("ngModel",o.date),m("readonlyInput",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var ze=(()=>{class a{dates;code={basic:'<p-datepicker [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-multiple-demo',
    templateUrl: './date-picker-multiple-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMultipleDemo {
    dates: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-multiple-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["selectionMode","multiple",3,"ngModelChange","ngModel","readonlyInput"],["selector","date-picker-multiple-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"In order to choose multiple dates, set "),i(3,"i"),e(4,"selectionMode"),t(),e(5," as "),i(6,"i"),e(7,"multiple"),t(),e(8,". In this mode, the value binding should be an array."),t()(),i(9,"div",0)(10,"p-datepicker",1),f("ngModelChange",function(r){return u(o.dates,r)||(o.dates=r),r}),t()(),c(11,"app-code",2)),n&2&&(l(10),s("ngModel",o.dates),m("readonlyInput",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Ve=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" [numberOfMonths]="2" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [numberOfMonths]="2" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-multiplemonths-demo',
    templateUrl: './date-picker-multiplemonths-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerMultiplemonthsDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-multiplemonths-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],[3,"ngModelChange","ngModel","numberOfMonths"],["selector","date-picker-multiplemonths-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Number of months to display is configured with the "),i(3,"i"),e(4,"numberOfMonths"),t(),e(5," property."),t()(),i(6,"div",0)(7,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(8,"app-code",2)),n&2&&(l(7),s("ngModel",o.date),m("numberOfMonths",2),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Oe=(()=>{class a{rangeDates;code={basic:'<p-datepicker [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-range-demo',
    templateUrl: './date-picker-range-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerRangeDemo {
    rangeDates: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-range-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-center"],["selectionMode","range",3,"ngModelChange","ngModel","readonlyInput"],["selector","date-picker-range-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"A range of dates can be selected by defining "),i(3,"i"),e(4,"selectionMode"),t(),e(5," as "),i(6,"i"),e(7,"range"),t(),e(8,", in this case the bound value would be an array with two values where first date is the start of the range and second date is the end."),t()(),i(9,"div",0)(10,"p-datepicker",1),f("ngModelChange",function(r){return u(o.rangeDates,r)||(o.rangeDates=r),r}),t()(),c(11,"app-code",2)),n&2&&(l(10),s("ngModel",o.rangeDates),m("readonlyInput",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();function lt(a,I){a&1&&(i(0,"p-message",4),e(1,"Date is required."),t())}var Re=(()=>{class a{fb;messageService=N(V);exampleForm;formSubmitted=!1;constructor(d){this.fb=d,this.exampleForm=this.fb.group({selectedDate:["",re.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(d){let n=this.exampleForm.get(d);return n?.invalid&&(n.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-datepicker formControlName="selectedDate" [invalid]="isInvalid('selectedDate')" />
        @if (isInvalid('selectedDate')) {
            <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<div class="card flex justify-center">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-datepicker formControlName="selectedDate" [invalid]="isInvalid('selectedDate')" />
            @if (isInvalid('selectedDate')) {
                <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'date-picker-reactive-forms-demo',
    templateUrl: './date-picker-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, DatePickerModule, MessageModule, ToastModule, ButtonModule]
})
export class DatePickerReactiveFormsDemo {
    messageService = inject(MessageService);

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            selectedDate: ['', Validators.required]
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
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}`};static \u0275fac=function(n){return new(n||a)(oe(ce))};static \u0275cmp=p({type:a,selectors:[["reactive-forms-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-center"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","selectedDate",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","date-picker-reactive-forms-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"DatePicker can also be used with reactive forms. In this case, the "),i(3,"i"),e(4,"formControlName"),t(),e(5," property is used to bind the component to a form control."),t()(),c(6,"p-toast"),i(7,"div",0)(8,"form",1),P("ngSubmit",function(){return o.onSubmit()}),i(9,"div",2),c(10,"p-datepicker",3),j(11,lt,2,0,"p-message",4),t(),i(12,"button",5)(13,"span",6),e(14,"Submit"),t()()()(),c(15,"app-code",7)),n&2&&(l(8),m("formGroup",o.exampleForm),l(2),m("invalid",o.isInvalid("selectedDate")),l(),z(o.isInvalid("selectedDate")?11:-1),l(4),m("code",o.code))},dependencies:[se,R,M,O,de,me,x,D,Q,J,Z,X,A,H,K,h,y],encapsulation:2})}return a})();var Ue=(()=>{class a{value1;value2;value3;code={basic:`<p-datepicker [(ngModel)]="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value2" placeholder="Normal" showIcon iconDisplay="input" />
<p-datepicker [(ngModel)]="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />`,html:`<div class="card flex flex-col items-center gap-4">
    <p-datepicker [(ngModel)]="value1" size="small" placeholder="Small" showIcon iconDisplay="input" />
    <p-datepicker [(ngModel)]="value2" placeholder="Normal" showIcon iconDisplay="input" />
    <p-datepicker [(ngModel)]="value3" size="large" placeholder="Large" showIcon iconDisplay="input" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'date-picker-sizes-demo',
    templateUrl: './date-picker-sizes-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerSizesDemo {
    value1: Date | undefined;

    value2: Date | undefined;

    value3: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-sizes-demo"]],decls:14,vars:4,consts:[[1,"card","flex","flex-col","items-center","gap-4"],["size","small","placeholder","Small","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["placeholder","Normal","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["size","large","placeholder","Large","showIcon","","iconDisplay","input",3,"ngModelChange","ngModel"],["selector","date-picker-sizes-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"DatePicker provides "),i(3,"i"),e(4,"small"),t(),e(5," and "),i(6,"i"),e(7,"large"),t(),e(8," sizes as alternatives to the base."),t()(),i(9,"div",0)(10,"p-datepicker",1),f("ngModelChange",function(r){return u(o.value1,r)||(o.value1=r),r}),t(),i(11,"p-datepicker",2),f("ngModelChange",function(r){return u(o.value2,r)||(o.value2=r),r}),t(),i(12,"p-datepicker",3),f("ngModelChange",function(r){return u(o.value3,r)||(o.value3=r),r}),t()(),c(13,"app-code",4)),n&2&&(l(10),s("ngModel",o.value1),l(),s("ngModel",o.value2),l(),s("ngModel",o.value3),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();function dt(a,I){a&1&&(i(0,"p-message",6),e(1,"Date is required."),t())}var Ye=(()=>{class a{messageService=N(V);date;onSubmit(d){d.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),d.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
    <div class="flex flex-col gap-1">
        <p-datepicker name="date" [invalid]="dateModel.invalid && (dateModel.touched || exampleForm.submitted)" #dateModel="ngModel" [(ngModel)]="date" required />
        @if (dateModel.invalid && (dateModel.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card flex justify-center">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex justify-center flex-col gap-4 md:w-56">
        <div class="flex flex-col gap-1">
            <p-datepicker name="date" [invalid]="dateModel.invalid && (dateModel.touched || exampleForm.submitted)" #dateModel="ngModel" [(ngModel)]="date" required />
            @if (dateModel.invalid && (dateModel.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Date is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'date-picker-template-driven-forms-demo',
    templateUrl: './date-picker-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, DatePickerModule, MessageModule, ToastModule, ButtonModule]
})
export class DatePickerTemplateDrivenFormsDemo {
    messageService = inject(MessageService);

    date: Date | undefined;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["template-driven-forms-doc"]],decls:13,vars:4,consts:[["exampleForm","ngForm"],["dateModel","ngModel"],[1,"card","flex","justify-center"],[1,"flex","justify-center","flex-col","gap-4","md:w-56",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","date","required","",3,"ngModelChange","invalid","ngModel"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","date-picker-template-driven-forms-demo",3,"code"]],template:function(n,o){if(n&1){let g=F();c(0,"app-docsectiontext")(1,"p-toast"),i(2,"div",2)(3,"form",3,0),P("ngSubmit",function(){_(g);let b=T(4);return E(o.onSubmit(b))}),i(5,"div",4)(6,"p-datepicker",5,1),f("ngModelChange",function(b){return _(g),u(o.date,b)||(o.date=b),E(b)}),t(),j(8,dt,2,0,"p-message",6),t(),i(9,"button",7)(10,"span",8),e(11,"Submit"),t()()()(),c(12,"app-code",9)}if(n&2){let g=T(4),r=T(7);l(6),m("invalid",r.invalid&&(r.touched||g.submitted)),s("ngModel",o.date),l(2),z(r.invalid&&(r.touched||g.submitted)?8:-1),l(4),m("code",o.code)}},dependencies:[v,R,M,O,pe,k,le,x,D,Q,J,Z,X,A,H,K,h,y],encapsulation:2})}return a})();var qe=(()=>{class a{datetime12h;datetime24h;time;code={basic:`<p-datepicker inputId="calendar-12h" [(ngModel)]="datetime12h" [showTime]="true" [hourFormat]="12" />

<p-datepicker inputId="calendar-24h" [(ngModel)]="datetime24h" [showTime]="true" [hourFormat]="24" />

<p-datepicker inputId="calendar-timeonly" [(ngModel)]="time" [timeOnly]="true" />`,html:`<p-fluid class="card flex flex-wrap gap-4">
    <div class="flex-auto">
        <label for="calendar-12h" class="font-bold block mb-2"> 12h Format </label>
        <p-datepicker inputId="calendar-12h" [(ngModel)]="datetime12h" [showTime]="true" [hourFormat]="12" />
    </div>
    <div class="flex-auto">
        <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label>
        <p-datepicker inputId="calendar-24h" [(ngModel)]="datetime24h" [showTime]="true" [hourFormat]="24" />
    </div>
    <div class="flex-auto">
        <label for="calendar-timeonly" class="font-bold block mb-2"> Time Only </label>
        <p-datepicker inputId="calendar-timeonly" [(ngModel)]="time" [timeOnly]="true" />
    </div>
</p-fluid>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { Fluid } from 'primeng/fluid';

@Component({
    selector: 'date-picker-time-demo',
    templateUrl: './date-picker-time-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker, Fluid]
})
export class DatePickerTimeDemo {

    datetime12h: Date[] | undefined;

    datetime24h: Date[] | undefined;

    time: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-time-demo"]],decls:26,vars:9,consts:[[1,"card","flex","flex-wrap","gap-4"],[1,"flex-auto"],["for","calendar-12h",1,"font-bold","block","mb-2"],["inputId","calendar-12h",3,"ngModelChange","ngModel","showTime","hourFormat"],["for","calendar-24h",1,"font-bold","block","mb-2"],["inputId","calendar-24h",3,"ngModelChange","ngModel","showTime","hourFormat"],["for","calendar-timeonly",1,"font-bold","block","mb-2"],["inputId","calendar-timeonly",3,"ngModelChange","ngModel","timeOnly"],["selector","date-picker-time-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"A time picker is displayed when "),i(3,"i"),e(4,"showTime"),t(),e(5," is enabled where 12/24 hour format is configured with "),i(6,"i"),e(7,"hourFormat"),t(),e(8," property. In case, only time needs to be selected, add "),i(9,"i"),e(10,"timeOnly"),t(),e(11," to hide the date section."),t()(),i(12,"p-fluid",0)(13,"div",1)(14,"label",2),e(15," 12h Format "),t(),i(16,"p-datepicker",3),f("ngModelChange",function(r){return u(o.datetime12h,r)||(o.datetime12h=r),r}),t()(),i(17,"div",1)(18,"label",4),e(19," 24h Format "),t(),i(20,"p-datepicker",5),f("ngModelChange",function(r){return u(o.datetime24h,r)||(o.datetime24h=r),r}),t()(),i(21,"div",1)(22,"label",6),e(23," Time Only "),t(),i(24,"p-datepicker",7),f("ngModelChange",function(r){return u(o.time,r)||(o.time=r),r}),t()()(),c(25,"app-code",8)),n&2&&(l(16),s("ngModel",o.datetime12h),m("showTime",!0)("hourFormat",12),l(4),s("ngModel",o.datetime24h),m("showTime",!0)("hourFormat",24),l(4),s("ngModel",o.time),m("timeOnly",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,G,q,h,y],encapsulation:2})}return a})();var Ge=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" view="year" dateFormat="yy" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" view="year" dateFormat="yy" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'date-picker-year-demo',
    templateUrl: './date-picker-year-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerYearDemo {
    date: Date[] | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-year-demo"]],decls:15,vars:2,consts:[[1,"card","flex","justify-center"],["view","year","dateFormat","yy",3,"ngModelChange","ngModel"],["selector","date-picker-year-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Specifying "),i(3,"i"),e(4,"view"),t(),e(5," as "),i(6,"i"),e(7,"year"),t(),e(8," in addition to a suitable "),i(9,"i"),e(10,"dateFormat"),t(),e(11," enables the year picker."),t()(),i(12,"div",0)(13,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(14,"app-code",2)),n&2&&(l(13),s("ngModel",o.date),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Ke=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" fluid />',html:`<div class="card">
    <p-datepicker [(ngModel)]="date" fluid />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'date-picker-fluid-demo',
    templateUrl: './date-picker-fluid-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerFluidDemo {
    date: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-fluid-demo"]],decls:6,vars:2,consts:[[1,"card"],["fluid","",3,"ngModelChange","ngModel"],["selector","date-picker-fluid-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"The fluid prop makes the component take up the full width of its container when set to true."),t()(),i(3,"div",0)(4,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(5,"app-code",2)),n&2&&(l(4),s("ngModel",o.date),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var He=(()=>{class a{date;code={basic:'<p-datepicker [(ngModel)]="date" [showClear]="true" inputStyleClass="w-56" />',html:`<div class="card flex justify-center">
    <p-datepicker [(ngModel)]="date" [showClear]="true" inputStyleClass="w-56" />
</div>`,typescript:`import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'date-picker-clear-icon-demo',
    templateUrl: './date-picker-clear-icon-demo.html',
    standalone: true,
    imports: [FormsModule, DatePicker]
})
export class DatePickerClearIconDemo {
    date: Date | undefined;
}`};static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-clear-icon-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-center"],["inputStyleClass","w-56",3,"ngModelChange","ngModel","showClear"],["selector","date-picker-clear-icon-demo",3,"code"]],template:function(n,o){n&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"When "),i(3,"i"),e(4,"showClear"),t(),e(5," is enabled, a clear icon is displayed to clear the value."),t()(),i(6,"div",0)(7,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()(),c(8,"app-code",2)),n&2&&(l(7),s("ngModel",o.date),m("showClear",!0),l(),m("code",o.code))},dependencies:[v,M,k,x,D,h,y],encapsulation:2})}return a})();var Je=(()=>{class a{date;docs=[{data:$("DatePicker"),key:"DatePicker"}];static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-pt-viewer"]],decls:2,vars:6,consts:[[3,"docs"],["placeholder","Select a date",1,"w-full","md:w-80",3,"ngModelChange","ngModel","showTime","showButtonBar","showIcon","iconDisplay"]],template:function(n,o){n&1&&(i(0,"app-docptviewer",0)(1,"p-datepicker",1),f("ngModelChange",function(r){return u(o.date,r)||(o.date=r),r}),t()()),n&2&&(m("docs",o.docs),l(),s("ngModel",o.date),m("showTime",!0)("showButtonBar",!0)("showIcon",!0)("iconDisplay","button"))},dependencies:[L,ke,x,D,v,M,k],encapsulation:2})}return a})();var Qe=(()=>{class a{docs=[{id:"pt.viewer",label:"Viewer",component:Je},{id:"pt.doc.datepicker",label:"DatePicker PT Options",component:fe,data:$("DatePicker")}];static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["datepicker-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),e(3,"DatePicker Pass Through"),t()(),c(4,"app-docsection",2),t()),n&2&&(l(4),m("docs",o.docs))},dependencies:[L,ge],encapsulation:2})}return a})();var mt=()=>["DatePicker"],Xe=(()=>{class a{ptComponent=Qe;docs=[{id:"import",label:"Import",component:Be},{id:"basic",label:"Basic",component:be},{id:"format",label:"Format",component:Pe},{id:"locale",label:"Locale",component:Ae},{id:"icon",label:"Icon",component:Te},{id:"minmax",label:"Min / Max",component:Ne},{id:"multiple",label:"Multiple",component:ze},{id:"range",label:"Range",component:Oe},{id:"buttonbar",label:"Button Bar",component:Ce},{id:"time",label:"Time",component:qe},{id:"monthpicker",label:"Month Picker",component:je},{id:"yearpicker",label:"Year Picker",component:Ge},{id:"multiplemonths",label:"Multiple Months",component:Ve},{id:"datetemplate",label:"Date Template",component:we},{id:"inline",label:"Inline",component:We},{id:"floatlabel",label:"Float Label",component:Fe},{id:"iftalabel",label:"Ifta Label",component:Ie},{id:"clearicon",label:"Clear Icon",component:He},{id:"sizes",label:"Sizes",component:Ue},{id:"fluid",label:"Fluid",component:Ke},{id:"filled",label:"Filled",component:Ee},{id:"disabled",label:"Disabled",component:_e},{id:"invalid",label:"Invalid",component:Le},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:Ye},{id:"reactive",label:"Reactive Forms",component:Re}]},{id:"accessibility",label:"Accessibility",component:ve}];static \u0275fac=function(n){return new(n||a)};static \u0275cmp=p({type:a,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular DatePicker Component","header","DatePicker","description","DatePicker is an input component to select a date.","themeDocs","datepicker",3,"docs","apiDocs","ptDocs"]],template:function(n,o){n&1&&c(0,"app-doc",0),n&2&&m("docs",o.docs)("apiDocs",ae(3,mt))("ptDocs",o.ptComponent)},dependencies:[ye],encapsulation:2})}return a})();var La=[{path:"",component:Xe}];export{La as default};
