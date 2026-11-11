import{b as v,c as D,d as x}from"./chunk-V7FWKWA6.js";import{a as I,b as R}from"./chunk-JNUBCW5H.js";import{u as k}from"./chunk-CTI5WBER.js";import"./chunk-EZDHLOD5.js";import{b as E}from"./chunk-FKOOMXTU.js";import{a as m}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as w}from"./chunk-XCUGNKAG.js";import{a as f,b as B}from"./chunk-7G4ENRB5.js";import{a as b}from"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as A,y as S}from"./chunk-D2XKNHFS.js";import{$a as h,Eb as l,Fb as n,Gb as a,Hb as s,Mc as y,Qa as p,Uc as C,X as c,gb as d,hc as i,sc as V,ua as g}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var F=(()=>{class r{code={html:'<p-chart type="line" [data]="data" ariaLabel="Data" />'};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=d({type:r,selectors:[["chart-accessibility-doc"]],decls:14,vars:2,consts:[[1,"doc-section-description"],["href","https://www.chartjs.org/docs/latest/general/accessibility.html",1,"text-primary","font-medium","hover:underline"],[3,"code","hideToggleCode"]],template:function(t,o){t&1&&(n(0,"div")(1,"app-docsectiontext")(2,"div",0)(3,"h3"),i(4,"Screen Reader"),a(),n(5,"p"),i(6," Chart components internally use "),n(7,"i"),i(8,"canvas"),a(),i(9," element, refer to the "),n(10,"a",1),i(11,"Chart.js accessibility"),a(),i(12," guide for more information. "),a()()(),s(13,"app-code",2),a()),t&2&&(p(13),l("code",o.code)("hideToggleCode",!0))},dependencies:[m,f],encapsulation:2})}return r})();var O=(()=>{class r{cd;basicData;basicOptions;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.basicData={labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Sales",data:[540,325,702,620],backgroundColor:["rgba(249, 115, 22, 0.2)","rgba(6, 182, 212, 0.2)","rgb(107, 114, 128, 0.2)","rgba(139, 92, 246, 0.2)"],borderColor:["rgb(249, 115, 22)","rgb(6, 182, 212)","rgb(107, 114, 128)","rgb(139, 92, 246)"],borderWidth:1}]},this.basicOptions={maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o},grid:{color:u}},y:{beginAtZero:!0,ticks:{color:o},grid:{color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="basicData" [options]="basicOptions" />',html:`<div class="card">
    <p-chart type="bar" [data]="basicData" [options]="basicOptions" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-basic-demo',
    templateUrl: './chart-basic-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartBasicDemo implements OnInit {
    basicData: any;

    basicOptions: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.basicData = {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [540, 325, 702, 620],
                        backgroundColor: [
                            'rgba(249, 115, 22, 0.2)',
                            'rgba(6, 182, 212, 0.2)',
                            'rgb(107, 114, 128, 0.2)',
                            'rgba(139, 92, 246, 0.2)',
                        ],
                        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                        borderWidth: 1,
                    },
                ],
            };

            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                },
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-basic-demo"]],decls:42,vars:3,consts:[[1,"card"],["type","bar",3,"data","options"],["selector","chart-basic-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2," A chart is configured with 3 properties; "),n(3,"i"),i(4,"type"),a(),i(5,", "),n(6,"i"),i(7,"data"),a(),i(8," and "),n(9,"i"),i(10,"options"),a(),i(11,". Chart type is defined using the "),n(12,"i"),i(13,"type"),a(),i(14," property that accepts "),n(15,"i"),i(16,"pie"),a(),i(17,", "),n(18,"i"),i(19,"doughtnut"),a(),i(20,", "),n(21,"i"),i(22,"line"),a(),i(23,", "),n(24,"i"),i(25,"bar"),a(),i(26,", "),n(27,"i"),i(28,"radar"),a(),i(29," and "),n(30,"i"),i(31,"polarArea"),a(),i(32," as a value. The "),n(33,"i"),i(34,"data"),a(),i(35," defines datasets represented with the chart and the "),n(36,"i"),i(37,"options"),a(),i(38," provide numerous customization options to customize the presentation. "),a()(),n(39,"div",0),s(40,"p-chart",1),a(),s(41,"app-code",2)),t&2&&(p(40),l("data",o.basicData)("options",o.basicOptions),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var j=(()=>{class r{code={typescript:"npm install chart.js --save"};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=d({type:r,selectors:[["chartjs-doc"]],decls:4,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"To begin with, first you must install the charts.js package using npm and then include it in your project. An example with CLI would be;"),a()(),s(3,"app-code",0)),t&2&&(p(3),l("code",o.code)("hideToggleCode",!0))},dependencies:[m,f],encapsulation:2})}return r})();var T=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Dataset 1",borderColor:e.getPropertyValue("--p-orange-500"),borderWidth:2,fill:!1,tension:.4,data:[50,25,12,48,56,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:e.getPropertyValue("--p-gray-500"),data:[21,84,24,75,37,65,34],borderColor:"white",borderWidth:2},{type:"bar",label:"Dataset 3",backgroundColor:e.getPropertyValue("--p-cyan-500"),data:[41,52,24,74,23,21,32]}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o},grid:{color:u}},y:{ticks:{color:o},grid:{color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-combo-demo',
    templateUrl: './chart-combo-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartComboDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Dataset 1',
                        borderColor: documentStyle.getPropertyValue('--p-orange-500'),
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        data: [50, 25, 12, 48, 56, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [21, 84, 24, 75, 37, 65, 34],
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck();
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-combo-demo"]],decls:9,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-combo-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Different chart types can be combined in the same graph using the "),n(3,"i"),i(4,"type"),a(),i(5," option of a dataset."),a()(),n(6,"div",0),s(7,"p-chart",1),a(),s(8,"app-code",2)),t&2&&(p(7),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var L=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color");this.data={labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:[e.getPropertyValue("--p-cyan-500"),e.getPropertyValue("--p-orange-500"),e.getPropertyValue("--p-gray-500")],hoverBackgroundColor:[e.getPropertyValue("--p-cyan-400"),e.getPropertyValue("--p-orange-400"),e.getPropertyValue("--p-gray-400")]}]},this.options={cutout:"60%",plugins:{legend:{labels:{color:t}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="doughnut" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="doughnut" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '@/service/appconfigservice';

@Component({
    selector: 'chart-doughnut-demo',
    templateUrl: './chart-doughnut-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartDoughnutDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');

            this.data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                    }
                ]
            };

            this.options = {
                cutout: '60%',
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-doughnut-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","doughnut",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-doughnut-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included."),a()(),n(3,"div",0),s(4,"p-chart",1),a(),s(5,"app-code",2)),t&2&&(p(4),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var J=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--p-cyan-500"),borderColor:e.getPropertyValue("--p-cyan-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--p-gray-500"),borderColor:e.getPropertyValue("--p-gray-500"),data:[28,48,40,19,86,27,90]}]},this.options={indexAxis:"y",maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o,font:{weight:500}},grid:{color:u,drawBorder:!1}},y:{ticks:{color:o},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-horizontal-bar-demo',
    templateUrl: './chart-horizontal-bar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartHorizontalBarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            this.options = {
                indexAxis: 'y',
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-horizontal-bar-demo"]],decls:12,vars:3,consts:[[1,"card"],["type","bar",1,"h-[30rem]",3,"data","options"],["selector","chart-horizontal-bar-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A bar chart is rendered horizontally when "),n(3,"i"),i(4,"indexAxis"),a(),i(5," option is set as "),n(6,"i"),i(7,"y"),a(),i(8,"."),a()(),n(9,"div",0),s(10,"p-chart",1),a(),s(11,"app-code",2)),t&2&&(p(10),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var _=(()=>{class r{code={typescript:"import { ChartModule } from 'primeng/chart';"};static \u0275fac=function(t){return new(t||r)};static \u0275cmp=d({type:r,selectors:[["chart-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(t,o){t&1&&s(0,"app-code",0),t&2&&l("code",o.code)("hideToggleCode",!0)},dependencies:[m],encapsulation:2})}return r})();var U=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:e.getPropertyValue("--p-cyan-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderColor:e.getPropertyValue("--p-gray-500"),tension:.4}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o},grid:{color:u,drawBorder:!1}},y:{ticks:{color:o},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-line-demo',
    templateUrl: './chart-line-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartLineDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        tension: 0.4
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        tension: 0.4
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-line-demo"]],decls:6,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-line-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments."),a()(),n(3,"div",0),s(4,"p-chart",1),a(),s(5,"app-code",2)),t&2&&(p(4),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var z=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.4,borderColor:e.getPropertyValue("--p-cyan-500")},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderDash:[5,5],tension:.4,borderColor:e.getPropertyValue("--p-orange-500")},{label:"Third Dataset",data:[12,51,62,33,21,62,45],fill:!0,borderColor:e.getPropertyValue("--p-gray-500"),tension:.4,backgroundColor:"rgba(107, 114, 128, 0.2)"}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o},grid:{color:u}},y:{ticks:{color:o},grid:{color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-line-style-demo',
    templateUrl: './chart-line-style-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartLineStyleDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        tension: 0.4,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500')
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderDash: [5, 5],
                        tension: 0.4,
                        borderColor: documentStyle.getPropertyValue('--p-orange-500')
                    },
                    {
                        label: 'Third Dataset',
                        data: [12, 51, 62, 33, 21, 62, 45],
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        tension: 0.4,
                        backgroundColor: 'rgba(107, 114, 128, 0.2)'
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck();
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-line-style-demo"]],decls:6,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-line-style-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Various styles of a line series can be customized to display customizations like an area chart."),a()(),n(3,"div",0),s(4,"p-chart",1),a(),s(5,"app-code",2)),t&2&&(p(4),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var N=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",fill:!1,borderColor:e.getPropertyValue("--p-cyan-500"),yAxisID:"y",tension:.4,data:[65,59,80,81,56,55,10]},{label:"Dataset 2",fill:!1,borderColor:e.getPropertyValue("--p-gray-500"),yAxisID:"y1",tension:.4,data:[28,48,40,19,86,27,90]}]},this.options={stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o},grid:{color:u}},y:{type:"linear",display:!0,position:"left",ticks:{color:o},grid:{color:u}},y1:{type:"linear",display:!0,position:"right",ticks:{color:o},grid:{drawOnChartArea:!1,color:u}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="line" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject , OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-multi-axis-demo',
    templateUrl: './chart-multi-axis-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartMultiAxisDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        yAxisID: 'y',
                        tension: 0.4,
                        data: [65, 59, 80, 81, 56, 55, 10]
                    },
                    {
                        label: 'Dataset 2',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        yAxisID: 'y1',
                        tension: 0.4,
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            this.options = {
                stacked: false,
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck();
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-multi-axis-demo"]],decls:9,vars:3,consts:[[1,"card"],["type","line",1,"h-[30rem]",3,"data","options"],["selector","chart-multi-axis-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Multiple axes can be added using the "),n(3,"i"),i(4,"scales"),a(),i(5," option."),a()(),n(6,"div",0),s(7,"p-chart",1),a(),s(8,"app-code",2)),t&2&&(p(7),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var H=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--text-color");this.data={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--p-cyan-500"),e.getPropertyValue("--p-orange-500"),e.getPropertyValue("--p-gray-500")],hoverBackgroundColor:[e.getPropertyValue("--p-cyan-400"),e.getPropertyValue("--p-orange-400"),e.getPropertyValue("--p-gray-400")]}]},this.options={plugins:{legend:{labels:{usePointStyle:!0,color:t}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="pie" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="pie" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '@/service/appconfigservice';

@Component({
    selector: 'chart-pie-demo',
    templateUrl: './chart-pie-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartPieDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            this.data = {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                    }
                ]
            };

            this.options = {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            color: textColor
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }

    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-pie-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","pie",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-pie-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion."),a()(),n(3,"div",0),s(4,"p-chart",1),a(),s(5,"app-code",2)),t&2&&(p(4),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var Q=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-content-border-color");this.data={datasets:[{data:[11,16,7,3,14],backgroundColor:[e.getPropertyValue("--p-pink-500"),e.getPropertyValue("--p-gray-500"),e.getPropertyValue("--p-orange-500"),e.getPropertyValue("--p-purple-500"),e.getPropertyValue("--p-cyan-500")],label:"My dataset"}],labels:["Pink","Gray","Orange","Purple","Cyan"]},this.options={plugins:{legend:{labels:{color:t}}},scales:{r:{grid:{color:o}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="polarArea" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="polarArea" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-polar-area-demo',
    templateUrl: './chart-polar-area-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartPolarAreaDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                datasets: [
                    {
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: [
                            documentStyle.getPropertyValue('--p-pink-500'),
                            documentStyle.getPropertyValue('--p-gray-500'),
                            documentStyle.getPropertyValue('--p-orange-500'),
                            documentStyle.getPropertyValue('--p-purple-500'),
                            documentStyle.getPropertyValue('--p-cyan-500')
                        ],
                        label: 'My dataset'
                    }
                ],
                labels: ['Pink', 'Gray', 'Orange', 'Purple', 'Cyan']
            };

            this.options = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-polar-area-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","polarArea",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-polar-area-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."),a()(),n(3,"div",0),s(4,"p-chart",1),a(),s(5,"app-code",2)),t&2&&(p(4),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var W=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color");this.data={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--p-gray-400"),pointBackgroundColor:e.getPropertyValue("--p-gray-400"),pointBorderColor:e.getPropertyValue("--p-gray-400"),pointHoverBackgroundColor:t,pointHoverBorderColor:e.getPropertyValue("--p-gray-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--p-cyan-400"),pointBackgroundColor:e.getPropertyValue("--p-cyan-400"),pointBorderColor:e.getPropertyValue("--p-cyan-400"),pointHoverBackgroundColor:t,pointHoverBorderColor:e.getPropertyValue("--p-cyan-400"),data:[28,48,40,19,96,27,100]}]},this.options={plugins:{legend:{labels:{color:t}}},scales:{r:{grid:{color:o}}}}}this.cd.markForCheck()}code={basic:'<p-chart type="radar" [data]="data" [options]="options" class="w-full md:w-[30rem]" />',html:`<div class="card flex justify-center">
    <p-chart type="radar" [data]="data" [options]="options" class="w-full md:w-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-radar-demo',
    templateUrl: './chart-radar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartRadarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

            this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        borderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        borderColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };

            this.options = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: textColorSecondary
                        }
                    }
                }
            };
        }
        this.cd.markForCheck()
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-radar-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-center"],["type","radar",1,"w-full","md:w-[30rem]",3,"data","options"],["selector","chart-radar-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point."),a()(),n(3,"div",0),s(4,"p-chart",1),a(),s(5,"app-code",2)),t&2&&(p(4),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var Z=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{type:"bar",label:"Dataset 1",backgroundColor:e.getPropertyValue("--p-cyan-500"),data:[50,25,12,48,90,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:e.getPropertyValue("--p-gray-500"),data:[21,84,24,75,37,65,34]},{type:"bar",label:"Dataset 3",backgroundColor:e.getPropertyValue("--p-orange-500"),data:[41,52,24,74,23,21,32]}]},this.options={maintainAspectRatio:!1,aspectRatio:.8,plugins:{tooltip:{mode:"index",intersect:!1},legend:{labels:{color:t}}},scales:{x:{stacked:!0,ticks:{color:o},grid:{color:u,drawBorder:!1}},y:{stacked:!0,ticks:{color:o},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'chart-stacked-bar-demo',
    templateUrl: './chart-stacked-bar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartStackedBarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Dataset 1',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [50, 25, 12, 48, 90, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [21, 84, 24, 75, 37, 65, 34]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-stacked-bar-demo"]],decls:9,vars:3,consts:[[1,"card"],["type","bar",1,"h-[30rem]",3,"data","options"],["selector","chart-stacked-bar-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Bars can be stacked on top of each other when "),n(3,"i"),i(4,"stacked"),a(),i(5," option of a scale is enabled."),a()(),n(6,"div",0),s(7,"p-chart",1),a(),s(8,"app-code",2)),t&2&&(p(7),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var G=(()=>{class r{cd;data;options;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--p-cyan-500"),borderColor:e.getPropertyValue("--p-cyan-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--p-gray-500"),borderColor:e.getPropertyValue("--p-gray-500"),data:[28,48,40,19,86,27,90]}]},this.options={maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o,font:{weight:500}},grid:{color:u,drawBorder:!1}},y:{ticks:{color:o},grid:{color:u,drawBorder:!1}}}},this.cd.markForCheck()}}code={basic:'<p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />',html:`<div class="card">
    <p-chart type="bar" [data]="data" [options]="options" class="h-[30rem]" />
</div>`,typescript:`import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AppConfigService } from '@/service/appconfigservice';

@Component({
    selector: 'chart-vertical-bar-demo',
    templateUrl: './chart-vertical-bar-demo.html',
    standalone: true,
    imports: [ChartModule]
})
export class ChartVerticalBarDemo implements OnInit {
    data: any;

    options: any;

    platformId = inject(PLATFORM_ID);

    configService = inject(AppConfigService);

    designerService = inject(DesignerService);

    constructor(private cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.configService.transitionComplete()) {
            if (this.designerService.preset()) {
                this.initChart();
            }
        }
    });

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        if (isPlatformBrowser(this.platformId)) {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        }
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartDemo } from './chartdemo';

@NgModule({
    imports: [CommonModule, ChartModule],
    declarations: [ChartDemo]
})
export class ChartDemoModule {}`};static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-vertical-bar-demo"]],decls:6,vars:3,consts:[[1,"card"],["type","bar",1,"h-[30rem]",3,"data","options"],["selector","chart-vertical-bar-demo",3,"code"]],template:function(t,o){t&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent."),a()(),n(3,"div",0),s(4,"p-chart",1),a(),s(5,"app-code",2)),t&2&&(p(4),l("data",o.data)("options",o.options),p(),l("code",o.code))},dependencies:[m,f,x,D],encapsulation:2})}return r})();var q=(()=>{class r{cd;basicData;basicOptions;platformId=c(g);configService=c(b);designerService=c(v);constructor(e){this.cd=e}themeEffect=y(()=>{this.configService.transitionComplete()&&this.designerService.preset()&&this.initChart()});ngOnInit(){this.initChart()}initChart(){if(S(this.platformId)){let e=getComputedStyle(document.documentElement),t=e.getPropertyValue("--p-text-color"),o=e.getPropertyValue("--p-text-muted-color"),u=e.getPropertyValue("--p-content-border-color");this.basicData={labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Sales",data:[540,325,702,620],backgroundColor:["rgba(249, 115, 22, 0.2)","rgba(6, 182, 212, 0.2)","rgb(107, 114, 128, 0.2)","rgba(139, 92, 246, 0.2)"],borderColor:["rgb(249, 115, 22)","rgb(6, 182, 212)","rgb(107, 114, 128)","rgb(139, 92, 246)"],borderWidth:1}]},this.basicOptions={maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:t}}},scales:{x:{ticks:{color:o},grid:{color:u}},y:{beginAtZero:!0,ticks:{color:o},grid:{color:u}}}},this.cd.markForCheck()}}docs=[{data:I("Chart"),key:"Chart"}];static \u0275fac=function(t){return new(t||r)(h(C))};static \u0275cmp=d({type:r,selectors:[["chart-pt-viewer"]],decls:2,vars:3,consts:[[3,"docs"],["type","bar",1,"w-full","md:w-[30rem]",3,"data","options"]],template:function(t,o){t&1&&(n(0,"app-docptviewer",0),s(1,"p-chart",1),a()),t&2&&(l("docs",o.docs),p(),l("data",o.basicData)("options",o.basicOptions))},dependencies:[A,R,k,x,D],encapsulation:2})}return r})();var K=(()=>{class r{docs=[{id:"pt.viewer",label:"Viewer",component:q},{id:"pt.doc.chart",label:"Chart PT Options",component:B,data:I("Chart")}];static \u0275fac=function(t){return new(t||r)};static \u0275cmp=d({type:r,selectors:[["chart-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1"),i(3,"Chart Pass Through"),a()(),s(4,"app-docsection",2),a()),t&2&&(p(4),l("docs",o.docs))},dependencies:[A,w],encapsulation:2})}return r})();var Y=()=>["Chart"],X=(()=>{class r{ptComponent=K;docs=[{id:"import",label:"Import",component:_},{id:"chartjs",label:"Chart.js",component:j},{id:"basic",label:"Basic",component:O},{id:"pie",label:"Pie",component:H},{id:"doughnut",label:"Doughnut",component:L},{id:"verticalbar",label:"Vertical Bar",component:G},{id:"horizontalbar",label:"Horizontal Bar",component:J},{id:"stackedbar",label:"Stacked Bar",component:Z},{id:"line",label:"Line",component:U},{id:"multiaxis",label:"MultiAxis",component:N},{id:"linestyles",label:"Line Styles",component:z},{id:"polararea",label:"Polar Area",component:Q},{id:"Radar",label:"Radar",component:W},{id:"combo",label:"Combo",component:T},{id:"accessibility",label:"Accessibility",component:F}];static \u0275fac=function(t){return new(t||r)};static \u0275cmp=d({type:r,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Chart Component","header","Charts","description","Chart components are based on Charts.js 3.3.2+, an open source HTML5 based charting library.","themeDocs","chart",3,"docs","apiDocs","ptDocs"]],template:function(t,o){t&1&&s(0,"app-doc",0),t&2&&l("docs",o.docs)("apiDocs",V(3,Y))("ptDocs",o.ptComponent)},dependencies:[E],encapsulation:2})}return r})();var zo=[{path:"",component:X}];export{zo as default};
