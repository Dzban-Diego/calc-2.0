(this["webpackJsonpcalc-react"]=this["webpackJsonpcalc-react"]||[]).push([[0],{1:function(_,e,t){"use strict";var c=t(3),a=t(4),s=t(7),i=t(6),r=t(0),l=t(2),E=function(_){Object(s.a)(t,_);var e=Object(i.a)(t);function t(){var _;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(_=e.call.apply(e,[this].concat(s))).style={float:"left",margin:"2px",width:"60px",height:"60px",fontSize:"25px"},_}return Object(a.a)(t,[{key:"render",value:function(){var _=this;return Object(r.jsx)("div",{children:Object(r.jsx)("button",{style:this.style,onClick:function(){return _.props.click(_.props.value)},children:this.props.value})})}}]),t}(t.n(l).a.Component);e.a=E},10:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_btt__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),Keyboard=function(_React$Component){Object(C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Keyboard,_React$Component);var _super=Object(C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Keyboard);function Keyboard(_){var e;return Object(C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Keyboard),(e=_super.call(this,_)).screen={marginLeft:"auto",marginRight:"auto",marginTop:"2px",marginBottom:"2px",height:"60px",width:"256px",border:"solid black 4px",textAlign:"right",fontSize:"50px"},e.keyboard={marginLeft:"auto",marginRight:"auto",marginTop:"2px",marginBottom:"2px",height:"320px",width:"256px",border:"solid black 4px",fontSize:"25px"},e.click=e.click.bind(Object(C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.state={flag:!1,equals:"",screen:"",op:!1,dot:!1},e}return Object(C_Users_Michal_Desktop_HTML_calc_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Keyboard,[{key:"click",value:function click(value){if("C"===value)this.setState({equals:"",screen:"",flag:!1});else if("="===value){var eq=eval(this.state.equals);console.log(eq),eq<10?this.setState({equals:eq,screen:eval(this.state.equals),flag:!0}):this.setState({equals:"ERR",screen:eval(this.state.equals),flag:!0})}else"<"===value?this.state.flag||(this.state.op?this.setState({equals:this.state.equals.slice(0,-1),screen:this.state.equals.slice(0,-1),flag:!1,op:!1}):this.setState({equals:this.state.equals.slice(0,-1),screen:this.state.screen.slice(0,-1),flag:!1})):"/"===value||"*"===value||"+"===value||"-"===value?this.state.op||this.setState({equals:this.state.equals+value,screen:value,op:!0}):this.state.screen.length<9&&(this.state.op?this.setState({equals:this.state.equals+value,screen:value,flag:!1,op:!1}):this.setState({equals:this.state.equals+value,screen:this.state.screen+value,flag:!1,op:!1}))}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{style:this.screen,children:this.state.screen}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:this.keyboard,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"C",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"<",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"-",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"+",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"1",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"2",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"3",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"/",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"4",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"5",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"6",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"*",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"7",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"8",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"9",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"=",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:".",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"0",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"=",click:this.click}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_btt__WEBPACK_IMPORTED_MODULE_7__.a,{value:"=",click:this.click})]})]})}}]),Keyboard}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=Keyboard},16:function(_,e,t){},17:function(_,e,t){},18:function(_,e,t){"use strict";t.r(e);var c=t(0),a=t(2),s=t.n(a),i=t(9),r=t.n(i),l=(t(16),t(17),t(10));var E=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l.a,{})})},n=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;t(_),c(_),a(_),s(_),i(_)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),n()}},[[18,1,2]]]);
//# sourceMappingURL=main.a2002a4a.chunk.js.map