import{a as se,b as Ye}from"./chunk-JNUBCW5H.js";import{a as le,b as ie}from"./chunk-N3SKU25W.js";import{a as re,b as ae}from"./chunk-SGEFCG26.js";import{a as We}from"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{a as ze,d as Ne,f as g,g as $,h as Ie,i as M,j as ee,k as Ae,l as Re,p as Le,t as Qe,u as S,v as Ve}from"./chunk-CTI5WBER.js";import"./chunk-D22NEC44.js";import"./chunk-YUYJZJA5.js";import"./chunk-EZDHLOD5.js";import{b as Ue}from"./chunk-FKOOMXTU.js";import{a as b}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as Ge}from"./chunk-XCUGNKAG.js";import{a as u,b as He}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import{da as te,fa as oe,ha as ne}from"./chunk-MCW4FHXZ.js";import{Ca as Fe,Ea as _e,Fa as Z,Ia as Oe,La as Pe,Na as T,O as J,Oa as je,za as K}from"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{n as Ee,q as Be,r as Te,w as X,z as De}from"./chunk-D2XKNHFS.js";import{$a as he,Ab as P,Eb as l,Fb as r,Gb as a,Gc as Se,Hb as d,Nb as ye,Ob as j,Qa as i,R as me,S as qe,Sb as W,T as ue,Ub as pe,V as be,Va as B,Vb as xe,Wb as Ce,X as E,Xa as ve,Xb as H,Zb as G,_b as U,aa as z,ba as N,cc as Y,fc as h,gb as c,gc as A,hb as ge,hc as s,kb as we,lb as ke,mb as I,mc as y,nc as x,oa as fe,oc as C,rc as Me,sc as q,zb as O}from"./chunk-O3KMSE75.js";import{a as de}from"./chunk-GAL4ENT6.js";var Je=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["editor-accessibility-doc"]],decls:7,vars:0,consts:[["href","https://github.com/quilljs/quill/issues/1031"]],template:function(o,n){o&1&&(r(0,"div")(1,"app-docsectiontext")(2,"p"),s(3," Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support for "),r(4,"a",0),s(5,"dropdowns"),a(),s(6," in the toolbar that may be overcome with a custom toolbar. "),a()()())},dependencies:[u],encapsulation:2})}return t})();var Ke=`
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }
`;var dt={root:({instance:t})=>["p-editor",{"p-invalid":t.invalid()}],toolbar:"p-editor-toolbar",content:"p-editor-content"},ce=(()=>{class t extends Oe{name="editor";style=Ke;classes=dt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=fe(t)))(n||t)}})();static \u0275prov=qe({token:t,factory:t.\u0275fac})}return t})();var pt=["header"],ct=[[["p-header"]]],mt=["p-header"];function qt(t,F){t&1&&ye(0)}function ut(t,F){if(t&1&&(r(0,"div",2),Ce(1),I(2,qt,1,0,"ng-container",3),a()),t&2){let e=pe();A(e.cx("toolbar")),l("pBind",e.ptm("toolbar")),i(2),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function bt(t,F){if(t&1&&(r(0,"div",2)(1,"span",4)(2,"select",5)(3,"option",6),s(4,"Heading"),a(),r(5,"option",7),s(6,"Subheading"),a(),r(7,"option",8),s(8,"Normal"),a()(),r(9,"select",9)(10,"option",8),s(11,"Sans Serif"),a(),r(12,"option",10),s(13,"Serif"),a(),r(14,"option",11),s(15,"Monospace"),a()()(),r(16,"span",4),d(17,"button",12)(18,"button",13)(19,"button",14),a(),r(20,"span",4),d(21,"select",15)(22,"select",16),a(),r(23,"span",4),d(24,"button",17)(25,"button",18),r(26,"select",19),d(27,"option",8),r(28,"option",20),s(29,"center"),a(),r(30,"option",21),s(31,"right"),a(),r(32,"option",22),s(33,"justify"),a()()(),r(34,"span",4),d(35,"button",23)(36,"button",24)(37,"button",25),a(),r(38,"span",4),d(39,"button",26),a()()),t&2){let e=pe();A(e.cx("toolbar")),l("pBind",e.ptm("toolbar")),i(),l("pBind",e.ptm("formats")),i(),l("pBind",e.ptm("header")),i(),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("select")),i(),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("formats")),i(),l("pBind",e.ptm("bold")),i(),l("pBind",e.ptm("italic")),i(),l("pBind",e.ptm("underline")),i(),l("pBind",e.ptm("formats")),i(),l("pBind",e.ptm("color")),i(),l("pBind",e.ptm("background")),i(),l("pBind",e.ptm("formats")),i(),l("pBind",e.ptm("list")),i(),l("pBind",e.ptm("list")),i(),l("pBind",e.ptm("select")),i(),l("pBind",e.ptm("option")),i(),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("option")),i(2),l("pBind",e.ptm("formats")),i(),l("pBind",e.ptm("link")),i(),l("pBind",e.ptm("image")),i(),l("pBind",e.ptm("codeBlock")),i(),l("pBind",e.ptm("formats")),i(),l("pBind",e.ptm("clean"))}}var Xe=new be("EDITOR_INSTANCE"),ft={provide:ze,useExisting:me(()=>f),multi:!0},f=(()=>{class t extends We{$pcEditor=E(Xe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=E(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(e){this._readonly=e,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onEditorInit=new B;onTextChange=new B;onSelectionChange=new B;onEditorChange=new B;onFocus=new B;onBlur=new B;toolbar;value;delayedCommand=null;_readonly=!1;quill;dynamicQuill;headerTemplate;templates;_headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;focusListener=null;blurListener=null;_componentStyle=E(ce);constructor(){super(),ve(()=>{this.initQuillElements(),this.initQuillEditor()})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break}})}writeControlValue(e){if(this.value=e,this.quill)if(e){let o=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?o():this.delayedCommand=o}else{let o=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?o():this.delayedCommand=o}}getQuill(){return this.quill}initQuillEditor(){De(this.platformId)||(this.dynamicQuill?this.createQuillEditor():import("./chunk-T6OLHI3G.js").then(e=>{this.dynamicQuill=e.default,this.createQuillEditor()}).catch(e=>console.error(e.message)))}createQuillEditor(){this.initQuillElements();let{toolbarElement:e,editorElement:o}=this.quillElements,n={toolbar:e},m=this.modules?de(de({},n),this.modules):n;this.quill=new this.dynamicQuill(o,{modules:m,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});let p=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(p?{html:this.value}:this.value)),this.quill.on("text-change",(_,L,Q)=>{if(Q==="user"){let V=p?this.quill.getSemanticHTML():J(o,".ql-editor")?.innerHTML,st=this.quill.getText().trim();V==="<p><br></p>"&&(V=null),this.onTextChange.emit({htmlValue:V,textValue:st,delta:_,source:Q}),this.onModelChange(V),this.onModelTouched()}}),this.quill.on("selection-change",(_,L,Q)=>{this.onSelectionChange.emit({range:_,oldRange:L,source:Q})}),this.quill.on("editor-change",(_,...L)=>{this.onEditorChange.emit({eventName:_,args:L})});let v=this.quill.root;this.focusListener=()=>{this.onFocus.emit({source:"user"})},this.blurListener=()=>{this.onBlur.emit({source:"user"})},v.addEventListener("focus",this.focusListener),v.addEventListener("blur",this.blurListener),this.onEditorInit.emit({editor:this.quill})}onDestroy(){if(this.quill&&this.quill.root){let e=this.quill.root;this.focusListener&&(e.removeEventListener("focus",this.focusListener),this.focusListener=null),this.blurListener&&(e.removeEventListener("blur",this.blurListener),this.blurListener=null)}}initQuillElements(){this.quillElements||(this.quillElements={editorElement:J(this.el.nativeElement,"div.p-editor-content"),toolbarElement:J(this.el.nativeElement,"div.p-editor-toolbar")})}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["p-editor"]],contentQueries:function(o,n,m){if(o&1&&(H(m,Fe,5),H(m,pt,4),H(m,_e,4)),o&2){let p;G(p=U())&&(n.toolbar=p.first),G(p=U())&&(n.headerTemplate=p.first),G(p=U())&&(n.templates=p)}},hostVars:2,hostBindings:function(o,n){o&2&&A(n.cn(n.cx("root"),n.styleClass))},inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onEditorInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange",onEditorChange:"onEditorChange",onFocus:"onFocus",onBlur:"onBlur"},features:[Me([ft,ce,{provide:Xe,useExisting:t},{provide:Pe,useExisting:t}]),ke([T]),we],ngContentSelectors:mt,decls:3,vars:6,consts:[[3,"class","pBind",4,"ngIf"],[3,"ngStyle","pBind"],[3,"pBind"],[4,"ngTemplateOutlet"],[1,"ql-formats",3,"pBind"],[1,"ql-header",3,"pBind"],["value","1",3,"pBind"],["value","2",3,"pBind"],["selected","",3,"pBind"],[1,"ql-font",3,"pBind"],["value","serif",3,"pBind"],["value","monospace",3,"pBind"],["aria-label","Bold","type","button",1,"ql-bold",3,"pBind"],["aria-label","Italic","type","button",1,"ql-italic",3,"pBind"],["aria-label","Underline","type","button",1,"ql-underline",3,"pBind"],[1,"ql-color",3,"pBind"],[1,"ql-background",3,"pBind"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list",3,"pBind"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list",3,"pBind"],[1,"ql-align",3,"pBind"],["value","center",3,"pBind"],["value","right",3,"pBind"],["value","justify",3,"pBind"],["aria-label","Insert Link","type","button",1,"ql-link",3,"pBind"],["aria-label","Insert Image","type","button",1,"ql-image",3,"pBind"],["aria-label","Insert Code Block","type","button",1,"ql-code-block",3,"pBind"],["aria-label","Remove Styles","type","button",1,"ql-clean",3,"pBind"]],template:function(o,n){o&1&&(xe(ct),I(0,ut,3,4,"div",0)(1,bt,40,33,"div",0),d(2,"div",1)),o&2&&(l("ngIf",n.toolbar||n.headerTemplate||n._headerTemplate),i(),l("ngIf",!n.toolbar&&!n.headerTemplate&&!n._headerTemplate),i(),A(n.cx("content")),l("ngStyle",n.style)("pBind",n.ptm("content")))},dependencies:[X,Ee,Te,Be,Z,je,T],encapsulation:2,changeDetection:0})}return t})(),k=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=ge({type:t});static \u0275inj=ue({imports:[f,Z,Z]})}return t})();var vt=()=>({height:"320px"}),Ze=(()=>{class t{text;code={basic:`<p-editor [(ngModel)]="text" [style]="{ height: '320px' }" />`,html:`<div class="card">
    <p-editor [(ngModel)]="text" [style]="{ height: '320px' }" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor } from 'primeng/editor';

@Component({
    selector: 'editor-basic-demo',
    templateUrl: './editor-basic-demo.html',
    standalone: true,
    imports: [FormsModule, Editor]
})
export class EditorBasicDemo {
    text: string | undefined;
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["editor-basic-demo"]],decls:9,vars:5,consts:[[1,"card"],[3,"ngModelChange","ngModel"],["selector","editor-basic-demo",3,"code"]],template:function(o,n){o&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"A model can be bound using the standard "),r(3,"i"),s(4,"ngModel"),a(),s(5," directive."),a()(),r(6,"div",0)(7,"p-editor",1),C("ngModelChange",function(p){return x(n.text,p)||(n.text=p),p}),a()(),d(8,"app-code",2)),o&2&&(i(7),h(q(4,vt)),y("ngModel",n.text),i(),l("code",n.code))},dependencies:[S,g,M,k,f,b,u],encapsulation:2})}return t})();var ht=()=>({height:"320px"});function gt(t,F){t&1&&(r(0,"span",5),d(1,"button",6)(2,"button",7)(3,"button",8),a())}var $e=(()=>{class t{text="<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>";code={basic:`<p-editor [(ngModel)]="text" [style]="{ height: '320px' }">
    <ng-template #header>
        <span class="ql-formats">
            <button type="button" class="ql-bold" aria-label="Bold"></button>
            <button type="button" class="ql-italic" aria-label="Italic"></button>
            <button type="button" class="ql-underline" aria-label="Underline"></button>
        </span>
    </ng-template>
</p-editor>`,html:`<div class="card">
    <p-editor [(ngModel)]="text" [style]="{ height: '320px' }">
        <ng-template #header>
            <span class="ql-formats">
                <button type="button" class="ql-bold" aria-label="Bold"></button>
                <button type="button" class="ql-italic" aria-label="Italic"></button>
                <button type="button" class="ql-underline" aria-label="Underline"></button>
            </span>
        </ng-template>
    </p-editor>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'editor-customtoolbar-demo',
    templateUrl: './editor-customtoolbar-demo.html'
})
export class EditorCustomtoolbarDemo {
    text: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["editor-customtoolbar-demo"]],decls:11,vars:5,consts:[["header",""],["href","http://quilljs.com/docs/modules/toolbar/"],[1,"card"],[3,"ngModelChange","ngModel"],["selector","editor-customtoolbar-demo",3,"code"],[1,"ql-formats"],["type","button","aria-label","Bold",1,"ql-bold"],["type","button","aria-label","Italic",1,"ql-italic"],["type","button","aria-label","Underline",1,"ql-underline"]],template:function(o,n){if(o&1){let m=j();r(0,"app-docsectiontext")(1,"p"),s(2,"Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to "),r(3,"a",1),s(4,"Quill documentation"),a(),s(5," for available controls."),a()(),r(6,"div",2)(7,"p-editor",3),C("ngModelChange",function(v){return z(m),x(n.text,v)||(n.text=v),N(v)}),I(8,gt,4,0,"ng-template",null,0,Se),a()(),d(10,"app-code",4)}o&2&&(i(7),h(q(4,ht)),y("ngModel",n.text),i(3),l("code",n.code))},dependencies:[S,g,M,k,f,b,u],encapsulation:2})}return t})();var et=(()=>{class t{code={typescript:"import { EditorModule } from 'primeng/editor';"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["editor-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,n){o&1&&d(0,"app-code",0),o&2&&l("code",n.code)("hideToggleCode",!0)},dependencies:[b],encapsulation:2})}return t})();var wt=()=>({height:"320px"}),tt=(()=>{class t{value="";docs=[{data:se("Editor"),key:"Editor"}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["editor-pt-viewer"]],decls:2,vars:5,consts:[[3,"docs"],[3,"ngModelChange","ngModel"]],template:function(o,n){o&1&&(r(0,"app-docptviewer",0)(1,"p-editor",1),C("ngModelChange",function(p){return x(n.value,p)||(n.value=p),p}),a()()),o&2&&(l("docs",n.docs),i(),h(q(4,wt)),y("ngModel",n.value))},dependencies:[X,Ye,k,f,S,g,M],encapsulation:2})}return t})();var ot=(()=>{class t{docs=[{id:"pt.viewer",label:"Viewer",component:tt},{id:"pt.doc.editor",label:"Editor PT Options",component:He,data:se("Editor")}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["editor-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(o,n){o&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Editor Pass Through"),a()(),d(4,"app-docsection",2),a()),o&2&&(i(4),l("docs",n.docs))},dependencies:[Ge],encapsulation:2})}return t})();var nt=(()=>{class t{code={basic:"npm install quill"};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["quill-doc"]],decls:7,vars:2,consts:[["href","https://quilljs.com/"],[3,"code","hideToggleCode"]],template:function(o,n){o&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"Editor uses "),r(3,"a",0),s(4,"Quill"),a(),s(5," editor underneath so it needs to be installed as a dependency."),a()(),d(6,"app-code",1)),o&2&&(i(6),l("code",n.code)("hideToggleCode",!0))},dependencies:[b,u],encapsulation:2})}return t})();var Ct=()=>({height:"320px"});function Mt(t,F){t&1&&(r(0,"p-message",4),s(1,"Content is required."),a())}var lt=(()=>{class t{fb;messageService=E(K);items;exampleForm;formSubmitted=!1;constructor(e){this.fb=e,this.exampleForm=this.fb.group({text:["",Ne.required]})}onSubmit(){this.formSubmitted=!0,this.exampleForm.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form is submitted",life:3e3}),this.exampleForm.reset(),this.formSubmitted=!1)}isInvalid(e){let o=this.exampleForm.get(e);return o?.invalid&&(o.touched||this.formSubmitted)}code={basic:`<form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-editor formControlName="text" [invalid]="isInvalid('text')" [style]="{ height: '320px' }" />
        @if (isInvalid('text')) {
            <p-message severity="error" size="small" variant="simple">Content is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card ">
    <form [formGroup]="exampleForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-editor formControlName="text" [invalid]="isInvalid('text')" [style]="{ height: '320px' }" />
            @if (isInvalid('text')) {
                <p-message severity="error" size="small" variant="simple">Content is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'editor-reactive-forms-demo',
    templateUrl: './editor-reactive-forms-demo.html',
    standalone: true,
    imports: [ReactiveFormsModule, EditorModule, ToastModule, MessageModule, ButtonModule],
  })
export class EditorReactiveFormsDemo implements OnInit {
    messageService = inject(MessageService);

    items: any[] | undefined;

    exampleForm: FormGroup | undefined;

    formSubmitted: boolean = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            text: ['', Validators.required]
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
}`};static \u0275fac=function(o){return new(o||t)(he(Qe))};static \u0275cmp=c({type:t,selectors:[["reactive-forms-doc"]],decls:16,vars:7,consts:[[1,"card"],[1,"flex","flex-col","gap-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-1"],["formControlName","text",3,"invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","editor-reactive-forms-demo",3,"code"]],template:function(o,n){o&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"Editor can also be used with reactive forms. In this case, the "),r(3,"i"),s(4,"formControlName"),a(),s(5," property is used to bind the component to a form control."),a()(),d(6,"p-toast"),r(7,"div",0)(8,"form",1),W("ngSubmit",function(){return n.onSubmit()}),r(9,"div",2),d(10,"p-editor",3),O(11,Mt,2,0,"p-message",4),a(),r(12,"button",5)(13,"span",6),s(14,"Submit"),a()()()(),d(15,"app-code",7)),o&2&&(i(8),l("formGroup",n.exampleForm),i(2),h(q(6,Ct)),l("invalid",n.isInvalid("text")),i(),P(n.isInvalid("text")?11:-1),i(4),l("code",n.code))},dependencies:[Ve,ee,g,$,Ae,Re,k,f,ae,re,ie,le,ne,oe,te,b,u],encapsulation:2})}return t})();var St=()=>({height:"320px"}),it=(()=>{class t{text="Always bet on Prime!";code={basic:`<p-editor [(ngModel)]="text" [readonly]="true" [style]="{ height: '320px' }" />`,html:`<div class="card">
    <p-editor [(ngModel)]="text" [readonly]="true" [style]="{ height: '320px' }" />
</div>`,typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Editor } from 'primeng/editor';

@Component({
    selector: 'editor-readonly-demo',
    templateUrl: './editor-readonly-demo.html',
    standalone: true,
    imports: [FormsModule, Editor]
})
export class EditorReadonlyDemo {
    text: string = 'Always bet on Prime!';
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["editor-readonly-demo"]],decls:9,vars:6,consts:[[1,"card"],[3,"ngModelChange","ngModel","readonly"],["selector","editor-readonly-demo",3,"code"]],template:function(o,n){o&1&&(r(0,"app-docsectiontext")(1,"p"),s(2,"When "),r(3,"i"),s(4,"readonly"),a(),s(5," is present, the value cannot be edited."),a()(),r(6,"div",0)(7,"p-editor",1),C("ngModelChange",function(p){return x(n.text,p)||(n.text=p),p}),a()(),d(8,"app-code",2)),o&2&&(i(7),h(q(5,St)),y("ngModel",n.text),l("readonly",!0),i(),l("code",n.code))},dependencies:[S,g,M,k,f,b,u],encapsulation:2})}return t})();var Et=()=>({height:"320px"});function Bt(t,F){t&1&&(r(0,"p-message",6),s(1,"Content is required."),a())}var rt=(()=>{class t{messageService=E(K);text;onSubmit(e){e.valid&&(this.messageService.add({severity:"success",summary:"Success",detail:"Form Submitted",life:3e3}),e.resetForm())}code={basic:`<form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
        <p-editor #content="ngModel" [(ngModel)]="text" [invalid]="content.invalid && (content.touched || exampleForm.submitted)" name="content" [style]="{ height: '320px' }" required />
        @if (content.invalid && (content.touched || exampleForm.submitted)) {
            <p-message severity="error" size="small" variant="simple">Content is required.</p-message>
        }
    </div>
    <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
</form>`,html:`<p-toast />
<div class="card">
    <form #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <p-editor #content="ngModel" [(ngModel)]="text" [invalid]="content.invalid && (content.touched || exampleForm.submitted)" name="content" [style]="{ height: '320px' }" required />
            @if (content.invalid && (content.touched || exampleForm.submitted)) {
                <p-message severity="error" size="small" variant="simple">Content is required.</p-message>
            }
        </div>
        <button pButton severity="secondary" type="submit"><span pButtonLabel>Submit</span></button>
    </form>
</div>`,typescript:`import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

@Component({
    selector: 'editor-template-driven-forms-demo',
    templateUrl: './editor-template-driven-forms-demo.html',
    standalone: true,
    imports: [FormsModule, EditorModule, MessageModule, ToastModule, ButtonModule]
})
export class TemplateDrivenFormsDemo implements OnInit {
    messageService = inject(MessageService);

    text: string | undefined;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }
}`};static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["template-driven-forms-doc"]],decls:13,vars:7,consts:[["exampleForm","ngForm"],["content","ngModel"],[1,"card"],[1,"flex","flex-col","gap-4",3,"ngSubmit"],[1,"flex","flex-col","gap-1"],["name","content","required","",3,"ngModelChange","ngModel","invalid"],["severity","error","size","small","variant","simple"],["pButton","","severity","secondary","type","submit"],["pButtonLabel",""],["selector","editor-template-driven-forms-demo",3,"code"]],template:function(o,n){if(o&1){let m=j();d(0,"app-docsectiontext")(1,"p-toast"),r(2,"div",2)(3,"form",3,0),W("ngSubmit",function(){z(m);let v=Y(4);return N(n.onSubmit(v))}),r(5,"div",4)(6,"p-editor",5,1),C("ngModelChange",function(v){return z(m),x(n.text,v)||(n.text=v),N(v)}),a(),O(8,Bt,2,0,"p-message",6),a(),r(9,"button",7)(10,"span",8),s(11,"Submit"),a()()()(),d(12,"app-code",9)}if(o&2){let m=Y(4),p=Y(7);i(6),h(q(6,Et)),y("ngModel",n.text),l("invalid",p.invalid&&(p.touched||m.submitted)),i(2),P(p.invalid&&(p.touched||m.submitted)?8:-1),i(4),l("code",n.code)}},dependencies:[S,ee,g,$,Le,M,Ie,k,f,ae,re,ie,le,ne,oe,te,b,u],encapsulation:2})}return t})();var Tt=()=>["Editor"],at=(()=>{class t{ptComponent=ot;docs=[{id:"import",label:"Import",component:et},{id:"quill",label:"Quill",component:nt},{id:"basic",label:"Basic",component:Ze},{id:"readonly",label:"ReadOnly",component:it},{id:"template",label:"Template",component:$e},{id:"forms",label:"Forms",children:[{id:"templatedriven",label:"Template Driven",component:rt},{id:"reactive",label:"Reactive Forms",component:lt}]},{id:"accessibility",label:"Accessibility",component:Je}];static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Editor Component","header","Editor","description","Editor is rich text editor component based on Quill.","themeDocs","editor",3,"docs","apiDocs","ptDocs"]],template:function(o,n){o&1&&d(0,"app-doc",0),o&2&&l("docs",n.docs)("apiDocs",q(3,Tt))("ptDocs",n.ptComponent)},dependencies:[Ue],encapsulation:2})}return t})();var wn=[{path:"",component:at}];export{wn as default};
