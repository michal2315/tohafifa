import{a as f,b as v}from"./chunk-FGLSKX5A.js";import{a as x,b as D}from"./chunk-JNUBCW5H.js";import"./chunk-EZDHLOD5.js";import{b as y}from"./chunk-FKOOMXTU.js";import{a as q}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import{a as S}from"./chunk-XCUGNKAG.js";import{a as d,b as h}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as g}from"./chunk-D2XKNHFS.js";import{Eb as r,Fb as i,Gb as t,Hb as m,Qa as l,fc as p,gb as n,hc as e,sc as c}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var E=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=n({type:o,selectors:[["scroll-panel-accessibility-doc"]],decls:50,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,u){a&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),i(4,"p"),e(5," Scrollbars of the ScrollPanel has a "),i(6,"i"),e(7,"scrollbar"),t(),e(8," role along with the "),i(9,"i"),e(10,"aria-controls"),t(),e(11," attribute that refers to the id of the scrollable content container and the "),i(12,"i"),e(13,"aria-orientation"),t(),e(14," to indicate the orientation of scrolling. "),t(),i(15,"h3"),e(16,"Header Keyboard Support"),t(),i(17,"div",0)(18,"table",1)(19,"thead")(20,"tr")(21,"th"),e(22,"Key"),t(),i(23,"th"),e(24,"Function"),t()()(),i(25,"tbody")(26,"tr")(27,"td")(28,"i"),e(29,"down arrow"),t()(),i(30,"td"),e(31,"Scrolls content down when vertical scrolling is available."),t()(),i(32,"tr")(33,"td")(34,"i"),e(35,"up arrow"),t()(),i(36,"td"),e(37,"Scrolls content up when vertical scrolling is available."),t()(),i(38,"tr")(39,"td")(40,"i"),e(41,"left"),t()(),i(42,"td"),e(43,"Scrolls content left when horizontal scrolling is available."),t()(),i(44,"tr")(45,"td")(46,"i"),e(47,"right"),t()(),i(48,"td"),e(49,"Scrolls content right when horizontal scrolling is available."),t()()()()()()())},dependencies:[d],encapsulation:2})}return o})();var F=()=>({width:"100%",height:"150px"}),P=(()=>{class o{code={basic:`<p-scrollpanel [style]="{ width: '100%', height: '150px' }">
    <p>
        Lorem ipsum dolor sit amet...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p class="m-0">
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>`,html:`<div class="card">
    <p-scrollpanel [style]="{ width: '100%', height: '150px' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
        <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </p-scrollpanel>
</div>`,typescript:`import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
    selector: 'scroll-panel-basic-demo',
    templateUrl: './scroll-panel-basic-demo.html',
    standalone: true,
    imports: [ScrollPanelModule]
})
export class ScrollPanelBasicDemo {}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=n({type:o,selectors:[["basic-doc"]],decls:12,vars:4,consts:[[1,"card"],[1,"m-0"],["selector","scroll-panel-basic-demo",3,"code"]],template:function(a,u){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"ScrollPanel is defined using dimensions for the scrollable viewport."),t()(),i(3,"div",0)(4,"p-scrollpanel")(5,"p"),e(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),t(),i(7,"p"),e(8," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),t(),i(9,"p",1),e(10," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),t()()(),m(11,"app-code",2)),a&2&&(l(4),p(c(3,F)),l(7),r("code",u.code))},dependencies:[d,q,v,f],encapsulation:2})}return o})();var L=()=>({width:"100%",height:"200px"}),w=(()=>{class o{code={basic:`<p-scrollpanel [style]="{ width: '100%', height: '200px' }" >
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...
    </p>
    <p>
        At vero eos et accusamus et iusto odio dignissimos...
    </p>
</p-scrollpanel>`,html:`<div class="card">
    <p-scrollpanel [style]="{ width: '100%', height: '200px' }" >
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
        </p>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
        </p>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
            fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus.
        </p>
    </p-scrollpanel>
</div>`,typescript:`import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
    selector: 'scroll-panel-custom-demo',
    templateUrl: './scroll-panel-custom-demo.html',
    standalone: true,
    imports: [ScrollPanelModule],
    styles: [ \`:host ::ng-deep {
    .p-scrollpanel {
        &.custombar {
            .p-scrollpanel-bar {
                background-color: var(--p-primary-color);
            }
        }
    }
}\`
    ],
})
export class ScrollPanelCustomDemo {}`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=n({type:o,selectors:[["custom-doc"]],decls:18,vars:4,consts:[[1,"card"],["selector","scroll-panel-custom-demo",3,"code"]],template:function(a,u){a&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Scrollbar visuals can be styled for a unified look across different platforms."),t()(),i(3,"div",0)(4,"p-scrollpanel")(5,"p"),e(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),t(),i(7,"p"),e(8," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),t(),i(9,"p"),e(10," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),t(),i(11,"p"),e(12," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),t(),i(13,"p"),e(14," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),t(),i(15,"p"),e(16," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),t()()(),m(17,"app-code",1)),a&2&&(l(4),p(c(3,L)),l(13),r("code",u.code))},dependencies:[d,q,v,f],styles:["[_nghost-%COMP%]     .p-scrollpanel.custombar .p-scrollpanel-bar{background-color:var(--p-primary-color)}"]})}return o})();var M=(()=>{class o{code={typescript:"import { ScrollPanelModule } from 'primeng/scrollpanel';"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=n({type:o,selectors:[["scroll-panel-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,u){a&1&&m(0,"app-code",0),a&2&&r("code",u.code)("hideToggleCode",!0)},dependencies:[q],encapsulation:2})}return o})();var U=()=>({width:"100%",height:"200px"}),_=()=>({barY:"!visible !opacity-100"}),A=(()=>{class o{docs=[{data:x("ScrollPanel"),key:"ScrollPanel"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=n({type:o,selectors:[["scrollpanel-pt-viewer"]],decls:10,vars:6,consts:[[3,"docs"],[3,"pt"],[1,"m-0"]],template:function(a,u){a&1&&(i(0,"app-docptviewer",0)(1,"p-scroll-panel",1)(2,"p"),e(3," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),t(),i(4,"p"),e(5," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. "),t(),i(6,"p"),e(7," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. "),t(),i(8,"p",2),e(9," Quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat "),t()()()),a&2&&(r("docs",u.docs),l(),p(c(4,U)),r("pt",c(5,_)))},dependencies:[g,D,v,f],encapsulation:2})}return o})();var T=(()=>{class o{docs=[{id:"pt.viewer",label:"Viewer",component:A},{id:"pt.doc.scrollpanel",label:"ScrollPanel PT Options",component:h,data:x("ScrollPanel")}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=n({type:o,selectors:[["scrollpanel-pt-component"]],decls:5,vars:1,consts:[[1,"doc-main"],[1,"doc-intro"],[3,"docs"]],template:function(a,u){a&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),e(3,"ScrollPanel Pass Through"),t()(),m(4,"app-docsection",2),t()),a&2&&(l(4),r("docs",u.docs))},dependencies:[g,S],encapsulation:2})}return o})();var k=()=>["ScrollPanel"],N=(()=>{class o{docs=[{id:"import",label:"Import",component:M},{id:"basic",label:"Basic",component:P},{id:"custom",label:"Custom",component:w},{id:"accessibility",label:"Accessibility",component:E}];ptComponent=T;static \u0275fac=function(a){return new(a||o)};static \u0275cmp=n({type:o,selectors:[["ng-component"]],decls:1,vars:4,consts:[["docTitle","Angular Scroll Panel Component","header","ScrollPanel","description","ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.","themeDocs","scrollpanel",3,"docs","apiDocs","ptDocs"]],template:function(a,u){a&1&&m(0,"app-doc",0),a&2&&r("docs",u.docs)("apiDocs",c(3,k))("ptDocs",u.ptComponent)},dependencies:[y],encapsulation:2})}return o})();var de=[{path:"",component:N}];export{de as default};
