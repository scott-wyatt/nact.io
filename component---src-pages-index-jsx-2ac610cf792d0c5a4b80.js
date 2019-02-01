webpackJsonp([0xc23565d713b7],{224:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"],["\n  border: 1px solid ",";\n  border-radius: 3px;  \n  padding-left: 0.5em;  \n  padding-right: 0.5em;  \n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0.25em;\n  margin-right: 0.25em;  \n  margin-top: 0;\n  color: ",";\n  display: inline-block;\n  transition: all .3s ease;\n  height: 5rem;  \n  &:hover {\n    color: ",";\n    background: ",";\n  }  \n"]),d=n(3),s=r(d),c=n(23),f=r(c),p=n(19),m=r(p),h=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.children;return s.default.createElement(f.default,{style:{border:"none"},to:this.props.to},s.default.createElement(g,null,e))},t}(d.Component);t.default=h;var g=m.default.div(u,function(e){return e.theme.brand},function(e){return e.theme.brand},function(e){return e.theme.accent},function(e){return e.theme.brand});e.exports=t.default},231:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=a(["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"],["\n  list-style-type: '✔ ';       \n  li { \n    padding-right: 25px;\n  }\n"]),d=a(["\n  padding: ",";  \n  background: ",";    \n"],["\n  padding: ",";  \n  background: ",";    \n"]),s=a(["\npadding: ",";  \npadding-bottom: 16rem;\n"],["\npadding: ",";  \npadding-bottom: 16rem;\n"]),c=a(["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\ncolor:  ",";\n"]),f=a(["\nmargin: 0 auto;\nmax-width: ",";\n"],["\nmargin: 0 auto;\nmax-width: ",";\n"]),p=n(3),m=r(p),h=n(24),g=r(h),b=n(19),y=r(b),E=n(23),v=(r(E),n(65)),w=r(v),x=n(21),k=r(x),_=n(64),j=r(_),O=n(224),T=r(O),P=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return m.default.createElement("div",{className:"index-container"},m.default.createElement(g.default,{title:k.default.siteTitle}),m.default.createElement(w.default,{postEdges:e}),m.default.createElement("main",{style:{display:"flex",flexDirection:"column"}},m.default.createElement("span",{style:{flex:1,minHeight:"65vh"}},m.default.createElement(j.default,{siteTitle:k.default.siteTitle,siteDescription:k.default.siteDescription,location:this.props.location,logo:k.default.siteLogo})),m.default.createElement(M,null,m.default.createElement(R,null,m.default.createElement("h2",null,"Nact is redux but for the server."),m.default.createElement("p",null,"Servers today are very different from those even 10 years ago. So why are we still programming like it's the 90s?"),m.default.createElement("p",null,"Inspired by the approaches taken by Akka and Erlang, nact is an open source Node.js framework which enables you to take control of your state to:"),m.default.createElement(S,null,m.default.createElement("li",null,"more effectively use memory"),m.default.createElement("li",null,"improve application resiliance"),m.default.createElement("li",null,"increase performance"),m.default.createElement("li",null,"reduce coupling")),m.default.createElement("p",null,"With out of the box support for event sourcing, and a considered implementation of the actor model, nact can work across a wide variety of domains."),m.default.createElement("p",null,"Nact is no silver bullet, but it is evolving to tackle ever more demanding use cases. Perhaps one of them is yours?"))),m.default.createElement(L,null,m.default.createElement(C,null,m.default.createElement("h2",null,"Getting Started"),m.default.createElement("p",null,"Both the ReasonML and JS libraries are 1",m.default.createElement("sup",null,"st")," class citizens. This means 100% unit test coverage, full documentation and support by project maintainers."),m.default.createElement("p",null,"Learning the ins and outs of the framework should not take more than an evening. The hello world example in particular should take less than 15 minutes."),m.default.createElement(T.default,{to:"/lesson/reasonml/introduction"},m.default.createElement("img",{style:{height:"2.5rem"},src:"/logos/language-logo_reason-inverted.svg"})," REASONML"),m.default.createElement(T.default,{to:"/lesson/javascript/introduction"},m.default.createElement("img",{style:{height:"2.5rem"},src:"/logos/language-logo_js-inverted.svg"})," JAVASCRIPT")))))},t}(m.default.Component);t.default=P;var S=y.default.ul(u),M=y.default.div(d,function(e){return e.theme.sitePadding},function(e){return e.theme.brand}),L=y.default.div(s,function(e){return e.theme.sitePadding}),R=y.default.div(c,function(e){return e.theme.contentWidthLaptop},function(e){return e.theme.accent}),C=y.default.div(f,function(e){return e.theme.contentWidthLaptop});t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-2ac610cf792d0c5a4b80.js.map