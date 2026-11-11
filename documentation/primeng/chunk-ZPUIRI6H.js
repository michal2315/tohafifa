import{b as G,f as J,i as K,u as U}from"./chunk-CTI5WBER.js";import{Fa as h,Ia as X,La as Y,Ma as Z,N as Q,Na as u}from"./chunk-UOUHADUB.js";import{m as W,n as q,w as z}from"./chunk-D2XKNHFS.js";import{$a as V,Eb as r,Fb as m,Gb as s,Ob as L,Qa as o,S as f,Sb as M,T as _,Ub as x,V as B,X as g,Yb as R,Zb as H,_b as j,aa as v,ba as b,f as y,gb as E,gc as a,hb as k,hc as c,ic as l,kb as T,lb as N,mb as w,mc as A,nc as D,oa as C,oc as P,rc as O,wb as F}from"./chunk-O3KMSE75.js";var ee=(()=>{class t{commandSource=new y;responseSource=new y;commandHandler=this.commandSource.asObservable();responseHandler=this.responseSource.asObservable();sendCommand(e){e&&this.commandSource.next(e)}sendResponse(e){e&&this.responseSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=f({token:t,factory:t.\u0275fac})}return t})();var te=`
    .p-terminal {
        display: block;
        height: dt('terminal.height');
        overflow: auto;
        background: dt('terminal.background');
        color: dt('terminal.color');
        border: 1px solid dt('terminal.border.color');
        padding: dt('terminal.padding');
        border-radius: dt('terminal.border.radius');
    }

    .p-terminal-prompt {
        display: flex;
        align-items: center;
    }

    .p-terminal-prompt-value {
        flex: 1 1 auto;
        border: 0 none;
        background: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
    }

    .p-terminal-prompt-label {
        margin-inline-end: dt('terminal.prompt.gap');
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }

    .p-terminal-command-response {
        margin: dt('terminal.command.response.margin');
    }
`;var re={root:()=>["p-terminal p-component"],welcomeMessage:"p-terminal-welcome-message",commandList:"p-terminal-command-list",command:"p-terminal-command",commandValue:"p-terminal-command-value",commandResponse:"p-terminal-command-response",prompt:"p-terminal-prompt",promptLabel:"p-terminal-prompt-label",promptValue:"p-terminal-prompt-value"},S=(()=>{class t extends X{name="terminal";style=te;classes=re;static \u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})();static \u0275prov=f({token:t,factory:t.\u0275fac})}return t})();var ae=["in"];function me(t,I){if(t&1&&(m(0,"div",2),c(1),s()),t&2){let e=x();a(e.cx("welcomeMessage")),r("pBind",e.ptm("welcomeMessage")),o(),l(e.welcomeMessage)}}function se(t,I){if(t&1&&(m(0,"div",2)(1,"span",2),c(2),s(),m(3,"span",2),c(4),s(),m(5,"div",2),c(6),s()()),t&2){let e=I.$implicit,n=x();a(n.cx("command")),r("pBind",n.ptm("command")),o(),a(n.cx("promptLabel")),r("pBind",n.ptm("promptLabel")),o(),l(n.prompt),o(),a(n.cx("commandValue")),r("pBind",n.ptm("commandValue")),o(),l(e.text),o(),a(n.cx("commandResponse")),r("pBind",n.ptm("commandResponse")),F("aria-live","polite"),o(),l(e.response)}}var ne=new B("TERMINAL_INSTANCE"),pe=(()=>{class t extends Z{terminalService;$pcTerminal=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(u,{self:!0});welcomeMessage;prompt;styleClass;commands=[];command;container;commandProcessed;subscription;_componentStyle=g(S);inputRef;onHostClick(){this.focus(this.inputRef?.nativeElement)}constructor(e){super(),this.terminalService=e,this.subscription=e.responseHandler.subscribe(n=>{this.commands[this.commands.length-1].response=n,this.commandProcessed=!0})}onAfterViewInit(){this.container=Q(this.el.nativeElement,".p-terminal")[0]}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.commandProcessed&&(this.container.scrollTop=this.container.scrollHeight,this.commandProcessed=!1)}set response(e){e&&(this.commands[this.commands.length-1].response=e,this.commandProcessed=!0)}handleCommand(e){e.keyCode==13&&(this.commands.push({text:this.command}),this.terminalService.sendCommand(this.command),this.command="")}focus(e){e.focus()}onDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)(V(ee))};static \u0275cmp=E({type:t,selectors:[["p-terminal"]],viewQuery:function(n,i){if(n&1&&R(ae,5),n&2){let p;H(p=j())&&(i.inputRef=p.first)}},hostVars:2,hostBindings:function(n,i){n&1&&M("click",function(){return i.onHostClick()}),n&2&&a(i.cn(i.cx("root"),i.styleClass))},inputs:{welcomeMessage:"welcomeMessage",prompt:"prompt",styleClass:"styleClass",response:"response"},features:[O([S,{provide:ne,useExisting:t},{provide:Y,useExisting:t}]),N([u]),T],decls:8,vars:16,consts:[["in",""],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","pBind",4,"ngFor","ngForOf"],["type","text","autocomplete","off","autofocus","",3,"ngModelChange","keydown","ngModel","pBind"]],template:function(n,i){if(n&1){let p=L();w(0,me,2,4,"div",1),m(1,"div",2),w(2,se,7,16,"div",3),s(),m(3,"div",2)(4,"span",2),c(5),s(),m(6,"input",4,0),P("ngModelChange",function(d){return v(p),D(i.command,d)||(i.command=d),b(d)}),M("keydown",function(d){return v(p),b(i.handleCommand(d))}),s()()}n&2&&(r("ngIf",i.welcomeMessage),o(),a(i.cx("commandList")),r("pBind",i.ptm("commandList")),o(),r("ngForOf",i.commands),o(),a(i.cx("prompt")),r("pBind",i.ptm("prompt")),o(),a(i.cx("promptLabel")),r("pBind",i.ptm("promptLabel")),o(),l(i.prompt),o(),a(i.cx("promptValue")),A("ngModel",i.command),r("pBind",i.ptm("promptValue")))},dependencies:[z,W,q,U,G,J,K,h,u],encapsulation:2,changeDetection:0})}return t})(),Fe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=k({type:t});static \u0275inj=_({imports:[pe,h,h]})}return t})();export{ee as a,pe as b,Fe as c};
