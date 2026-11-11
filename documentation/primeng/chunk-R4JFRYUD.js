import{a as A,b as z}from"./chunk-SYFA2O3J.js";import"./chunk-27JIZF5R.js";import"./chunk-W2A7AHXD.js";import{f as w,i as M,u as P}from"./chunk-CTI5WBER.js";import{b as F}from"./chunk-FKOOMXTU.js";import{a as l}from"./chunk-A53PSMQK.js";import"./chunk-4ZQ53SJC.js";import"./chunk-T7S2JKIR.js";import"./chunk-XCUGNKAG.js";import{a as m}from"./chunk-7G4ENRB5.js";import"./chunk-IHGTQAE3.js";import"./chunk-QZJXK26D.js";import"./chunk-BL5WFH5W.js";import"./chunk-AAKCLA3R.js";import"./chunk-MCW4FHXZ.js";import"./chunk-UOUHADUB.js";import"./chunk-N73B6F44.js";import{w as E}from"./chunk-D2XKNHFS.js";import{Bb as g,Cb as y,Db as x,Eb as c,Fb as t,Gb as o,Hb as s,Qa as a,Ub as S,fc as D,gb as p,hc as e,ic as v,jc as T,mc as C,nc as b,oc as k}from"./chunk-O3KMSE75.js";import"./chunk-GAL4ENT6.js";var B=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["reversed-keys-doc"]],decls:36,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Following keys are reserved in the preset scheme and cannot be used as a token name; "),t(3,"i"),e(4,"primitive"),o(),e(5,", "),t(6,"i"),e(7,"semantic"),o(),e(8,", "),t(9,"i"),e(10,"components"),o(),e(11,", "),t(12,"i"),e(13,"directives"),o(),e(14,", "),t(15,"i"),e(16,"colorscheme"),o(),e(17,", "),t(18,"i"),e(19,"light"),o(),e(20,", "),t(21,"i"),e(22,"dark"),o(),e(23,", "),t(24,"i"),e(25,"common"),o(),e(26,", "),t(27,"i"),e(28,"root"),o(),e(29,", "),t(30,"i"),e(31,"states"),o(),e(32," and "),t(33,"i"),e(34,"extend"),o(),e(35,". "),o()())},dependencies:[m],encapsulation:2})}return i})();var N=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["architecture-doc"]],decls:70,vars:0,consts:[["alt","Architecture","src","/_ext/primefaces.org/cdn/primevue/images/primevue-v4-styled-architecture.png",1,"w-full","mb-4"],[1,"mb-0"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," PrimeNG is a design agnostic library so unlike some other UI libraries it does not enforce a certain styling such as material design. Styling is decoupled from the components using the themes instead. A theme consists of two parts; "),t(3,"i"),e(4,"base"),o(),e(5," and "),t(6,"i"),e(7,"preset"),o(),e(8,". The base is the style rules with CSS variables as placeholders whereas the preset is a set of design tokens to feed a base by mapping the tokens to CSS variables. A base may be configured with different presets, currently Aura, Material, Lara and Nora are the available built-in options. "),o(),s(9,"img",0),t(10,"p"),e(11,"The core of the styled mode architecture is based on a concept named "),t(12,"i"),e(13,"design token"),o(),e(14,", a preset defines the token configuration in 3 tiers; "),t(15,"i"),e(16,"primitive"),o(),e(17,", "),t(18,"i"),e(19,"semantic"),o(),e(20," and "),t(21,"i"),e(22,"component"),o(),e(23,"."),o(),t(24,"h3"),e(25,"Primitive Tokens"),o(),t(26,"p"),e(27," Primitive tokens have no context, a color palette is a good example for a primitive token such as "),t(28,"i"),e(29,"blue-50"),o(),e(30," to "),t(31,"i"),e(32,"blue-900"),o(),e(33,". A token named "),t(34,"i"),e(35,"blue-500"),o(),e(36," may be used as the primary color, the background of a message however on its own, the name of the token does not indicate context. Usually they are utilized by the semantic tokens. "),o(),t(37,"h3"),e(38,"Semantic Tokens"),o(),t(39,"p"),e(40," Semantic tokens define content and their names indicate where they are utilized, a well known example of a semantic token is the "),t(41,"i"),e(42,"primary.color"),o(),e(43,". Semantic tokens map to primitive tokens or other semantic tokens. The "),t(44,"i"),e(45,"colorScheme"),o(),e(46," token group is a special variable to define tokens based on the color scheme active in the application, this allows defining different tokens based on the color scheme like dark mode. "),o(),t(47,"h3"),e(48,"Component Tokens"),o(),t(49,"p"),e(50," Component tokens are isolated tokens per component such as "),t(51,"i"),e(52,"inputtext.background"),o(),e(53," or "),t(54,"i"),e(55,"button.color"),o(),e(56," that map to the semantic tokens. As an example, "),t(57,"i"),e(58,"button.background"),o(),e(59," component token maps to the "),t(60,"i"),e(61,"primary.color"),o(),e(62," semantic token which maps to the "),t(63,"i"),e(64,"green.500"),o(),e(65," primitive token. "),o(),t(66,"h3"),e(67,"Best Practices"),o(),t(68,"p",1),e(69," Use primitive tokens when defining the core color palette and semantic tokens to specify the common design elements such as focus ring, primary colors and surfaces. Components tokens should only be used when customizing a specific component. By defining your own design tokens as a custom preset, you'll be able to define your own style without touching CSS. Overriding the PrimeNG components using style classes is not a best practice and should be the last resort, design tokens are the suggested approach. "),o()())},dependencies:[m],encapsulation:2})}return i})();function de(i,h){if(i&1&&(t(0,"div",6),s(1,"div",7),t(2,"span",8),e(3),o()()),i&2){let d=h.$implicit,n=S().$implicit;a(),D("background-color: var(--p-"+n+"-"+d+")"),a(2),v(d)}}function se(i,h){if(i&1&&(t(0,"li",3)(1,"span",4),e(2),o(),t(3,"div",5),y(4,de,4,3,"div",6,g),o()()),i&2){let d=h.$implicit,n=S();a(2),v(d),a(2),x(n.shades)}}var _=(()=>{class i{shades=[50,100,200,300,400,500,600,700,800,900,950];colors=["emerald","green","lime","red","orange","amber","yellow","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone"];code={basic:`// With CSS
var(--p-blue-500)

// With JS
$dt('blue.500').value`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["colors-doc"]],decls:14,vars:2,consts:[["selector","colors-demo",3,"code","hideToggleCode"],[1,"card","mt-4"],[1,"p-0","m-0","list-none","flex","sm:flex-col","gap-4","flex-wrap","sm:flex-nowrap"],[1,"flex-auto",2,"min-width","6rem"],[1,"font-medium","capitalize","block","mb-2","text-center","sm:text-left"],[1,"flex","gap-4","flex-auto","flex-col","sm:flex-row"],[1,"flex","flex-col","items-center","gap-1","flex-1"],[1,"rounded","h-8","w-full"],[1,"text-sm","text-surface-500","dark:text-surface-400","font-medium"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Color palette of a preset is defined by the "),t(3,"i"),e(4,"primitive"),o(),e(5," design token group. You can access colors using CSS variables or the "),t(6,"i"),e(7,"$dt"),o(),e(8," utility."),o(),s(9,"app-code",0),t(10,"div",1)(11,"ul",2),y(12,se,6,1,"li",3,g),o()()()),n&2&&(a(9),c("code",r.code)("hideToggleCode",!0),a(3),x(r.colors))},dependencies:[E,l,m],encapsulation:2})}return i})();var R=(()=>{class i{code={typescript:`const MyPreset = definePreset(Aura, {
    components: {
        card: {
            colorScheme: {
                light: {
                    root: {
                        background: '{surface.0}',
                        color: '{surface.700}'
                    },
                    subtitle: {
                        color: '{surface.500}'
                    }
                },
                dark: {
                    root: {
                        background: '{surface.900}',
                        color: '{surface.0}'
                    },
                    subtitle: {
                        color: '{surface.400}'
                    }
                }
            }
        }
    }
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["component-doc"]],decls:7,vars:2,consts:[["selector","component-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The design tokens of a specific component is defined at "),t(3,"i"),e(4,"components"),o(),e(5," layer. Overriding components tokens is not the recommended approach if you are building your own style, building your own preset should be preferred instead. This configuration is global and applies to all card components, in case you need to customize a particular component on a page locally, view the Scoped CSS section for an example. "),o()(),s(6,"app-code",0)),n&2&&(a(6),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var U=(()=>{class i{code1={typescript:`providePrimeNG({
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark'
        }
    }
})`};code2={basic:'<p-button label="Toggle Dark Mode" (onClick)="toggleDarkMode()"/>'};code3={typescript:`toggleDarkMode() {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
}`};code4={html:'<html class="my-app-dark">'};code5={typescript:`providePrimeNG({
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false || 'none'
        }
    }
})`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["darkmode-doc"]],decls:48,vars:10,consts:[["selector","darkmode-demo1",3,"code","hideToggleCode"],[1,"mt-4"],["href","https://dev.to/abbeyperini/dark-mode-toggle-and-prefers-color-scheme-4f3m","target","_blank","rel","noopener noreferrer"],[1,"mb-4"],["selector","darkmode-demo2",3,"code","hideToggleCode"],["selector","darkmode-demo3",3,"code","hideToggleCode"],["selector","darkmode-demo4",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," PrimeNG uses the "),t(3,"i"),e(4,"system"),o(),e(5," as the default "),t(6,"i"),e(7,"darkModeSelector"),o(),e(8," in theme configuration. If you have a dark mode switch in your application, set the "),t(9,"i"),e(10,"darkModeSelector"),o(),e(11," to the selector you utilize such as "),t(12,"i"),e(13,".my-app-dark"),o(),e(14," so that PrimeNG can fit in seamlessly with your color scheme. "),o(),s(15,"app-code",0),t(16,"p",1),e(17," Following is a very basic example implementation of a dark mode switch, you may extend it further by involving "),t(18,"i"),e(19,"prefers-color-scheme"),o(),e(20," to retrieve it from the system initially and use "),t(21,"i"),e(22,"localStorage"),o(),e(23," to make it stateful. See this "),t(24,"a",2),e(25,"article"),o(),e(26," for more information. "),o(),t(27,"div",3),s(28,"app-code",4),o(),t(29,"div",3),s(30,"app-code",5),o(),t(31,"p"),e(32,"In case you prefer to use dark mode all the time, apply the "),t(33,"i"),e(34,"darkModeSelector"),o(),e(35," initially and never change it."),o(),t(36,"div",3),s(37,"app-code",6),o(),t(38,"p"),e(39,"It is also possible to disable dark mode completely using "),t(40,"i"),e(41,"false"),o(),e(42," or "),t(43,"i"),e(44,"none"),o(),e(45," as the value of the selector."),o(),t(46,"div",3),s(47,"app-code",6),o()()),n&2&&(a(15),c("code",r.code1)("hideToggleCode",!0),a(13),c("code",r.code2)("hideToggleCode",!0),a(2),c("code",r.code3)("hideToggleCode",!0),a(7),c("code",r.code4)("hideToggleCode",!0),a(10),c("code",r.code5)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var G=(()=>{class i{code1={typescript:`//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
});

export MyPreset;`};code2={typescript:`import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './mypreset';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset
            }
        })
    ]
};`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["define-preset-doc"]],decls:8,vars:4,consts:[["selector","define-preset-demo",1,"block","mb-4",3,"code","hideToggleCode"],["selector","define-preset-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"definePreset"),o(),e(5," utility is used to customize an existing preset during the PrimeNG setup. The first parameter is the preset to customize and the second is the design tokens to override."),o()(),s(6,"app-code",0)(7,"app-code",1)),n&2&&(a(6),c("code",r.code1)("hideToggleCode",!0),a(),c("code",r.code2)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var I=(()=>{class i{code1={typescript:`import { bootstrapApplication } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { AppComponent } from './app/app.component';

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                //...
            },
            dark: {
                //...
            }
        }
    }
});

bootstrapApplication(AppComponent, {
    providers: [
        providePrimeNG({
            theme: {
                preset: MyPreset
            }
        })
    ]
});`};code2={typescript:`/* Fails as Aura defines highlight tokens in colorScheme */
const MyPreset = definePreset(Aura, {
    semantic: {
        highlight: {
            background: '{primary.50}',
            color: '{primary.700}',
        }
    }
});`};code3={typescript:`/* Works because highlight tokens are defined under colorScheme */
const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                semantic: {
                    highlight: {
                        background: '{primary.50}',
                        color: '{primary.700}',
                    }
                }
            },
            dark: {
                semantic: {
                    highlight: {
                        background: '{primary.200}',
                        color: '{primary.900}',
                    }
                }
            }
        }
    }
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["color-scheme-doc"]],decls:42,vars:12,consts:[[3,"code","hideToggleCode","importCode","hideStackBlitz"],[1,"font-bold","my-4"],[1,"leading-normal","list-disc","list-inside","mb-4"],["href","https://github.com/primefaces/primeuix/tree/main/packages/themes/src/presets","target","_blank","rel","noopener noreferrer"],[1,"my-4"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A token can be defined per color scheme using "),t(3,"i"),e(4,"light"),o(),e(5," and "),t(6,"i"),e(7,"dark"),o(),e(8," properties of the "),t(9,"i"),e(10,"colorScheme"),o(),e(11," property. Each token can have specific values based on the current color scheme."),o(),s(12,"app-code",0),t(13,"div",1),e(14,"Common Pitfall"),o(),t(15,"p"),e(16," When customizing an existing preset, your token overrides may be ignored if you don't properly account for color scheme variations. If the original preset defines a token using the "),t(17,"i"),e(18,"colorScheme"),o(),e(19," property, but your customization only provides a direct value, your override will be ignored because the "),t(20,"i"),e(21,"colorScheme"),o(),e(22," property takes precedence over direct values and the system will continue using the preset's scheme-specific values. When customizing tokens that are not defined with "),t(23,"i"),e(24,"colorScheme"),o(),e(25," in the original preset, your customizations will be applied successfully regardless of how you structure them; whether direct or under colorScheme. "),o(),s(26,"app-code",0),t(27,"div",1),e(28,"Best Practices"),o(),t(29,"ul",2)(30,"li"),e(31,"Check how tokens are defined in the preset before customizing from the "),t(32,"a",3),e(33,"source"),o(),e(34,"."),o(),t(35,"li"),e(36,"Always maintain the same structure (direct value or colorScheme) as the original preset."),o(),t(37,"li"),e(38,"Consider both light and dark mode values when overriding scheme-dependent tokens."),o()(),s(39,"app-code",0),t(40,"p",4),e(41,"This approach ensures your customizations will be applied correctly regardless of the user's selected color scheme."),o()()),n&2&&(a(12),c("code",r.code1)("hideToggleCode",!0)("importCode",!0)("hideStackBlitz",!0),a(14),c("code",r.code2)("hideToggleCode",!0)("importCode",!0)("hideStackBlitz",!0),a(13),c("code",r.code3)("hideToggleCode",!0)("importCode",!0)("hideStackBlitz",!0))},dependencies:[l,m],encapsulation:2})}return i})();var W=(()=>{class i{code1={typescript:"import { $dt } from '@primeuix/themes';"};code2={typescript:`const duration = $dt('transition.duration');
/*
    duration: {
        name: '--transition-duration',
        variable: 'var(--p-transition-duration)',
        value: '0.2s'
    }
*/

const primaryColor = $dt('primary.color');
/*
    primaryColor: {
        name: '--primary-color',
        variable: 'var(--p-primary-color)',
        value: {
        light: {
            value: '#10b981',
            paths: {
                name: 'semantic.primary.color',
                binding: {
                    name: 'primitive.emerald.500'
                }
            }
        },
        dark: {
            value: '#34d399',
            paths: {
                name: 'semantic.primary.color',
                binding: {
                    name: 'primitive.emerald.400'
                }
            }
        }
    }
}
*/`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["dt-doc"]],decls:8,vars:4,consts:[["selector","dt-demo",1,"block","mb-4",3,"code","hideToggleCode"],["selector","dt-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"$dt"),o(),e(5," function returns the information about a token like the full path and value. This would be useful if you need to access tokens programmatically."),o()(),s(6,"app-code",0)(7,"app-code",1)),n&2&&(a(6),c("code",r.code1)("hideToggleCode",!0),a(),c("code",r.code2)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var L=(()=>{class i{code={typescript:`const MyPreset = definePreset(Aura, {
    components: {
        // custom button tokens and additional style
        button: {
            extend: {
                accent: {
                    color: '#f59e0b',
                    inverseColor: '#ffffff'
                }
            }
            css: ({ dt }) => \`
.p-button-accent {
    background: \${dt('button.accent.color')};
    color: \${dt('button.accent.inverse.color')};
    transition-duration: \${dt('my.transition.fast')};
}
\`
        }
    },
    // common tokens and styles
    extend: {
        my: {
            transition: {
                slow: '0.75s'
                normal: '0.5s'
                fast: '0.25s'
            },
            imageDisplay: 'block'
        }
    },
    css: ({ dt }) => \`
        /* Global CSS */
        img {
            display: \${dt('my.image.display')};
        }
    \`
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["extend-doc"]],decls:15,vars:2,consts:[["selector","component-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The theming system can be extended by adding custom design tokens and additional styles. This feature provides a high degree of customization, allowing you to adjust styles according to your needs, as you are not limited to the default tokens. "),o(),t(3,"p"),e(4,"The example preset configuration adds a new "),t(5,"i"),e(6,"accent"),o(),e(7," button with custom "),t(8,"i"),e(9,"button.accent.color"),o(),e(10," and "),t(11,"i"),e(12,"button.accent.inverse.color"),o(),e(13," tokens. It is also possible to add tokens globally to share them within the components."),o()(),s(14,"app-code",0)),n&2&&(a(14),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var $=(()=>{class i{code={typescript:`const MyPreset = definePreset(Aura, {
    semantic: {
        focusRing: {
            width: '2px',
            style: 'dashed',
            color: '{primary.color}',
            offset: '1px'
        }
    }
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["focusring-doc"]],decls:4,vars:2,consts:[["selector","focusring-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Focus ring defines the outline width, style, color and offset. Let's use a thicker ring with the primary color for the outline."),o()(),s(3,"app-code",0)),n&2&&(a(3),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var H=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["font-doc"]],decls:3,vars:0,template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"There is no design for fonts as UI components inherit their font settings from the application."),o()())},dependencies:[m],encapsulation:2})}return i})();var O=(()=>{class i{code={typescript:`const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                formField: {
                    hoverBorderColor: '{primary.color}'
                }
            },
            dark: {
                formField: {
                    hoverBorderColor: '{primary.color}'
                }
            }
        }
    }
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["forms-doc"]],decls:13,vars:2,consts:[["selector","forms-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The design tokens of the form input components are derived from the "),t(3,"i"),e(4,"form.field"),o(),e(5," token group. This customization example changes border color to primary on hover. Any component that depends on this semantic token such as "),t(6,"i"),e(7,"dropdown.hover.border.color"),o(),e(8," and "),t(9,"i"),e(10,"textarea.hover.border.color"),o(),e(11," would receive the change. "),o()(),s(12,"app-code",0)),n&2&&(a(12),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var K=(()=>{class i{code={typescript:`const Noir = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{zinc.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{zinc.900}',
                    activeColor: '{zinc.800}'
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{zinc.50}',
                    inverseColor: '{zinc.950}',
                    hoverColor: '{zinc.100}',
                    activeColor: '{zinc.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["noir-doc"]],decls:10,vars:2,consts:[["selector","noir-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The "),t(3,"i"),e(4,"noir"),o(),e(5," mode is the nickname of a variant that uses surface tones as the primary and requires and additional "),t(6,"i"),e(7,"colorScheme"),o(),e(8," configuration to implement. A sample preset configuration with black and white variants as the primary color; "),o()(),s(9,"app-code",0)),n&2&&(a(9),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var j=(()=>{class i{code1={typescript:`options: {
    prefix: 'my'
}`};code2={typescript:`options: {
    darkModeSelector: '.my-app-dark'
}`};code3={typescript:`options: {
    cssLayer: {
        name: 'primeng',
        order: 'app-styles, primeng, another-css-library'
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["options-doc"]],decls:45,vars:7,consts:[["selector","options-demo-1",3,"code","hideToggleCode"],["selector","options-demo-2",3,"code","hideToggleCode"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/@layer","target","_blank","rel","noopener noreferrer"],["selector","options-demo-3",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"options"),o(),e(5," property defines the how the CSS would be generated from the design tokens of the preset."),o(),t(6,"h4"),e(7,"prefix"),o(),t(8,"p"),e(9,"The prefix of the CSS variables, defaults to "),t(10,"i"),e(11,"p"),o(),e(12,". For instance, the "),t(13,"i"),e(14,"primary.color"),o(),e(15," design token would be "),t(16,"i"),e(17,"var(--p-primary-color)"),o(),e(18,"."),o(),s(19,"app-code",0),t(20,"h4"),e(21,"darkModeSelector"),o(),t(22,"p"),e(23," The CSS rule to encapsulate the CSS variables of the dark mode, the default is the "),t(24,"i"),e(25,"system"),o(),e(26," to generate "),t(27,"i"),e(28),o(),e(29,". If you need to make the dark mode toggleable based on the user selection define a class selector such as "),t(30,"i"),e(31,".app-dark"),o(),e(32," and toggle this class at the document root. See the dark mode toggle section for an example. "),o(),s(33,"app-code",1),t(34,"h4"),e(35,"cssLayer"),o(),t(36,"p"),e(37," Defines whether the styles should be defined inside a "),t(38,"a",2),e(39,"CSS layer"),o(),e(40," by default or not. A CSS layer would be handy to declare a custom cascade layer for easier customization if necessary. The default is "),t(41,"i"),e(42,"false"),o(),e(43,". "),o(),s(44,"app-code",3),o()),n&2&&(a(19),c("code",r.code1)("hideToggleCode",!0),a(9),T("","@","media (prefers-color-scheme: dark)"),a(5),c("code",r.code2)("hideToggleCode",!0),a(11),c("code",r.code3)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var q=(()=>{class i{code1={typescript:"import { palette } from '@primeuix/themes';"};code2={typescript:`// custom color
const values1 = palette('#10b981');

// copy an existing token set
const primaryColor = palette('{blue}');`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["palette-doc"]],decls:5,vars:4,consts:[["selector","palette-demo",1,"block","mb-4",3,"code","hideToggleCode"],["selector","palette-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Returns shades and tints of a given color from 50 to 950 as an array."),o()(),s(3,"app-code",0)(4,"app-code",1)),n&2&&(a(3),c("code",r.code1)("hideToggleCode",!0),a(),c("code",r.code2)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var Y=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["presets-doc"]],decls:6,vars:0,consts:[["href","https://github.com/primefaces/primeng/tree/master/packages/themes/src/presets","target","_blank","rel","noopener noreferrer"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Aura, Material, Lara and Nora are the available built-in options, created to demonstrate the power of the design-agnostic theming. Aura is PrimeTek's own vision, Material follows Google Material Design v2, Lara is based on Bootstrap and Nora is inspired by enterprise applications. Visit the "),t(3,"a",0),e(4,"source code"),o(),e(5," to learn more about the structure of presets. You may use them out of the box with modifications or utilize them as reference in case you need to build your own presets from scratch. "),o()())},dependencies:[m],encapsulation:2})}return i})();var J=(()=>{class i{code={typescript:`const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    }
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["primary-doc"]],decls:13,vars:2,consts:[["selector","primary-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"primary"),o(),e(5," defines the main color palette, default value maps to the "),t(6,"i"),e(7,"emerald"),o(),e(8," primitive token. Let's setup to use "),t(9,"i"),e(10,"indigo"),o(),e(11," instead."),o()(),s(12,"app-code",0)),n&2&&(a(12),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var V=(()=>{class i{code={basic:`/* Order */
@layer reset, primeng;

/* Reset CSS */
@layer reset {
    button,
    input {
        /* CSS to Reset */
    }
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["reset-doc"]],decls:4,vars:2,consts:[["selector","reset-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," In case PrimeNG components have visual issues in your application, a Reset CSS may be the culprit. CSS layers would be an efficient solution that involves enabling the PrimeNG layer, wrapping the Reset CSS in another layer and defining the layer order. This way, your Reset CSS does not get in the way of PrimeNG components. "),o()(),s(3,"app-code",0)),n&2&&(a(3),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var Q=(()=>{class i{code={basic:`html {
    font-size: 14px;
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["scale-doc"]],decls:16,vars:2,consts:[["selector","scale-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," PrimeNG UI component use "),t(3,"i"),e(4,"rem"),o(),e(5," units, 1rem equals to the font size of the "),t(6,"i"),e(7,"html"),o(),e(8," element which is "),t(9,"i"),e(10,"16px"),o(),e(11," by default. Use the root font-size to adjust the size of the components globally. This website uses "),t(12,"i"),e(13,"14px"),o(),e(14," as the base so it may differ from your application if your base font size is different. "),o()(),s(15,"app-code",0)),n&2&&(a(15),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var X=(()=>{class i{checked1=!0;checked2=!0;amberSwitch={handle:{borderRadius:"4px"},colorScheme:{light:{root:{checkedBackground:"{amber.500}",checkedHoverBackground:"{amber.600}",borderRadius:"4px"},handle:{checkedBackground:"{amber.50}",checkedHoverBackground:"{amber.100}"}},dark:{root:{checkedBackground:"{amber.400}",checkedHoverBackground:"{amber.300}",borderRadius:"4px"},handle:{checkedBackground:"{amber.900}",checkedHoverBackground:"{amber.800}"}}}};code={typescript:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
    template: \`
        <p-toggleswitch [(ngModel)]="checked1"/>
        <p-toggleswitch [(ngModel)]="checked2" [dt]="amberSwitch"/>
    \`,
    standalone: true,
    imports: [ToggleSwitch, FormsModule]
})
export class AppComponent {

    checked1: boolean = true;

    checked2: boolean = true;

    amberSwitch = {
        handle: {
            borderRadius: '4px'
        },
        colorScheme: {
            light: {
                root: {
                    checkedBackground: '{amber.500}',
                    checkedHoverBackground: '{amber.600}',
                    borderRadius: '4px'
                },
                handle: {
                    checkedBackground: '{amber.50}',
                    checkedHoverBackground: '{amber.100}'
                }
            },
            dark: {
                root: {
                    checkedBackground: '{amber.400}',
                    checkedHoverBackground: '{amber.300}',
                    borderRadius: '4px'
                },
                handle: {
                    checkedBackground: '{amber.900}',
                    checkedHoverBackground: '{amber.800}'
                }
            }
        }
    };
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["scoped-tokens-doc"]],decls:15,vars:5,consts:[[1,"card","flex","gap-2","justify-center","items-center"],[3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel","dt"],["selector","scoped-tokens-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Design tokens can be scoped to a certain component using the "),t(3,"i"),e(4,"dt"),o(),e(5," property. In this example, first switch uses the global tokens whereas second one overrides the global with its own tokens."),o(),t(6,"p"),e(7,"This approach is recommended over the "),t(8,"i"),e(9,"::ng-deep"),o(),e(10," as it offers a cleaner API while avoiding the hassle of CSS rule overrides."),o()(),t(11,"div",0)(12,"p-toggleswitch",1),k("ngModelChange",function(u){return b(r.checked1,u)||(r.checked1=u),u}),o(),t(13,"p-toggleswitch",2),k("ngModelChange",function(u){return b(r.checked2,u)||(r.checked2=u),u}),o()(),s(14,"app-code",3)),n&2&&(a(12),C("ngModel",r.checked1),a(),C("ngModel",r.checked2),c("dt",r.amberSwitch),a(),c("code",r.code)("hideToggleCode",!0))},dependencies:[P,w,M,l,m,z,A],encapsulation:2})}return i})();var Z=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["specificity-doc"]],decls:17,vars:0,consts:[["href","https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",1,"doc-link"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The "),t(3,"i"),e(4,"@layer"),o(),e(5," is a standard CSS feature to define cascade layers for a customizable order of precedence. If you need to become more familiar with layers, visit the documentation at "),t(6,"a",0),e(7,"MDN"),o(),e(8," to begin with. "),o(),t(9,"p"),e(10," The "),t(11,"i"),e(12,"cssLayer"),o(),e(13," is disabled by default, when it is enabled at theme configuration, PrimeNG wraps the built-in style classes under the "),t(14,"i"),e(15,"primeng"),o(),e(16," cascade layer to make the library styles easy to override. CSS in your app without a layer has the highest CSS specificity, so you'll be able to override styles regardless of the location or how strong a class is written. "),o()())},dependencies:[m],encapsulation:2})}return i})();var ee=(()=>{class i{code={typescript:`
const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                }
            }
        }
    }
});`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["surface-doc"]],decls:10,vars:2,consts:[["selector","surface-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," The color scheme palette that varies between light and dark modes is specified with the surface tokens. Example below uses "),t(3,"i"),e(4,"zinc"),o(),e(5," for light mode and "),t(6,"i"),e(7,"slategray"),o(),e(8," for dark mode. With this setting, light mode, would have a grayscale tone and dark mode would include bluish tone. "),o()(),s(9,"app-code",0)),n&2&&(a(9),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var te=(()=>{class i{code={typescript:`import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["theme-doc"]],decls:7,vars:2,consts:[["selector","theme-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"theme"),o(),e(5," property is used to customize the initial theme."),o()(),s(6,"app-code",0)),n&2&&(a(6),c("code",r.code)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var oe=(()=>{class i{code1={typescript:"import { updatePreset } from '@primeuix/themes';"};code2={typescript:`changePrimaryColor() {
    updatePreset({
        semantic: {
            primary: {
                50: '{indigo.50}',
                100: '{indigo.100}',
                200: '{indigo.200}',
                300: '{indigo.300}',
                400: '{indigo.400}',
                500: '{indigo.500}',
                600: '{indigo.600}',
                700: '{indigo.700}',
                800: '{indigo.800}',
                900: '{indigo.900}',
                950: '{indigo.950}'
            }
        }
    })
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["update-preset-doc"]],decls:5,vars:4,consts:[["selector","update-preset-demo",1,"block","mb-4",3,"code","hideToggleCode"],["selector","update-preset-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Merges the provided tokens to the current preset, an example would be changing the primary color palette dynamically."),o()(),s(3,"app-code",0)(4,"app-code",1)),n&2&&(a(3),c("code",r.code1)("hideToggleCode",!0),a(),c("code",r.code2)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var ie=(()=>{class i{code1={typescript:"import { updatePrimaryPalette } from '@primeuix/themes';"};code2={typescript:`changePrimaryColor() {
    updatePrimaryPalette({
        50: '{indigo.50}',
        100: '{indigo.100}',
        200: '{indigo.200}',
        300: '{indigo.300}',
        400: '{indigo.400}',
        500: '{indigo.500}',
        600: '{indigo.600}',
        700: '{indigo.700}',
        800: '{indigo.800}',
        900: '{indigo.900}',
        950: '{indigo.950}'
    });
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["update-primary-palette-doc"]],decls:8,vars:4,consts:[["selector","update-primary-palette-demo",1,"block","mb-4",3,"code","hideToggleCode"],["selector","update-primary-palette-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Updates the primary colors, this is a shorthand to do the same update using "),t(3,"i"),e(4,"updatePreset"),o(),e(5,"."),o()(),s(6,"app-code",0)(7,"app-code",1)),n&2&&(a(6),c("code",r.code1)("hideToggleCode",!0),a(),c("code",r.code2)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var ne=(()=>{class i{code1={typescript:"import { updateSurfacePalette } from '@primeuix/themes';"};code2={typescript:`changeSurfaces() {
    //changes surfaces both in light and dark mode
    updateSurfacePalette({
        50: '{zinc.50}',
        // ...
        950: '{zinc.950}'
    });
}`};code3={typescript:`const changeLightSurfaces() {
    //changes surfaces only in light
    updateSurfacePalette({
        light: {
            50: '{zinc.50}',
            // ...
            950: '{zinc.950}'
        }
    });
}`};code4={typescript:`function changeDarkSurfaces() {
    //changes surfaces only in dark mode
    updateSurfacePalette({
        dark: {
            50: '{zinc.50}',
            // ...
            950: '{zinc.950}'
        }
    });
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["update-surface-palette-doc"]],decls:10,vars:8,consts:[["selector","update-surface-palette-demo",1,"block","mb-4",3,"code","hideToggleCode"],["selector","update-surface-palette-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Updates the surface colors, this is a shorthand to do the same update using "),t(3,"i"),e(4,"updatePreset"),o(),e(5,"."),o()(),s(6,"app-code",0)(7,"app-code",0)(8,"app-code",0)(9,"app-code",1)),n&2&&(a(6),c("code",r.code1)("hideToggleCode",!0),a(),c("code",r.code2)("hideToggleCode",!0),a(),c("code",r.code3)("hideToggleCode",!0),a(),c("code",r.code4)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var re=(()=>{class i{code1={typescript:"import { usePreset } from '@primeuix/themes';"};code2={typescript:`onButtonClick() {
    usePreset(MyPreset);
}`};static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["use-preset-doc"]],decls:5,vars:4,consts:[["selector","use-preset-demo",1,"block","mb-4",3,"code","hideToggleCode"],["selector","use-preset-demo",3,"code","hideToggleCode"]],template:function(n,r){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Replaces the current presets entirely, common use case is changing the preset dynamically at runtime."),o()(),s(3,"app-code",0)(4,"app-code",1)),n&2&&(a(3),c("code",r.code1)("hideToggleCode",!0),a(),c("code",r.code2)("hideToggleCode",!0))},dependencies:[l,m],encapsulation:2})}return i})();var ae=(()=>{class i{docs=[{id:"architecture",label:"Architecture",component:N},{id:"configuration",label:"Configuration API",children:[{id:"theme",label:"Theme",component:te},{id:"options",label:"Options",component:j}]},{id:"presets",label:"Presets",component:Y},{id:"reserved",label:"Reserved Keys",component:B},{id:"colors",label:"Colors",component:_},{id:"darkmode",label:"Dark Mode",component:U},{id:"customization",label:"Customization",children:[{id:"definepreset",label:"definePreset",component:G},{id:"colorscheme",label:"Color Scheme",component:I},{id:"primary",label:"Primary",component:J},{id:"surface",label:"Surface",component:ee},{id:"noir",label:"Noir",component:K},{id:"font",label:"Font",component:H},{id:"forms",label:"Forms",component:O},{id:"focusring",label:"Focus Ring",component:$},{id:"component",label:"Component",component:R},{id:"extend",label:"Extend",component:L}]},{id:"scopedtokens",label:"Scoped Tokens",component:X},{id:"utils",label:"Utils",children:[{id:"usepreset",label:"usePreset",component:re},{id:"updatepreset",label:"updatePreset",component:oe},{id:"updateprimarypalette",label:"updatePrimaryPalette",component:ie},{id:"updatesurfacepalette",label:"updateSurfacePalette",component:ne},{id:"dt",label:"$dt",component:W},{id:"Palette",label:"palette",component:q}]},{id:"csslayer",label:"CSS Layer",children:[{id:"specificity",label:"Specificity",component:Z},{id:"reset",label:"Reset",component:V}]},{id:"scale",label:"Scale",component:Q}];static \u0275fac=function(n){return new(n||i)};static \u0275cmp=p({type:i,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Theming - PrimeNG","header","Theming","description","Choose from a variety of pre-styled themes or develop your own.",3,"docs"]],template:function(n,r){n&1&&s(0,"app-doc",0),n&2&&c("docs",r.docs)},dependencies:[F],encapsulation:2})}return i})();var uo=[{path:"",component:ae}];export{uo as default};
