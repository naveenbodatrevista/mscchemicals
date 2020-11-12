(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1242:function(e,a,t){"use strict";t.r(a);var r=t(558),n=t(56),i=t(55),o=t(33),l=t(34),s=t(36),c=t(35),d=t(37),u=t(1),m=t.n(u),p=(t(117),t(1246)),h=t(1212),f=t(13),b=t(46),v=t(17),g=t(611),y=t(27),E=t(51),k=t(740),O=t(65),w=t(593);function N(e,a){var t=m.a.memo(m.a.forwardRef(function(a,t){return m.a.createElement(w.a,Object(O.a)({ref:t},a),e)}));return t.muiName=w.a.muiName,t}var x=N(m.a.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})),j=N(m.a.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})),L=function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,d=new Array(l),u=0;u<l;u++)d[u]=arguments[u];return(t=Object(s.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(d)))).state={loading:!1,formLogin:{email:"",password:""}},t.validateOnChange=function(e){var a,r=e.target,o=r.form,l="checkbox"===r.type?r.checked:r.value,s=g.a.validate(r);t.setState(Object(n.a)({},o.name,Object(i.a)({},t.state[o.name],(a={},Object(n.a)(a,r.name,l),Object(n.a)(a,"errors",Object(i.a)({},t.state[o.name].errors,Object(n.a)({},r.name,s))),a))))},t.onSubmit=function(e){e.preventDefault();var a=e.target,o=Object(r.a)(a.elements).filter(function(e){return["INPUT","SELECT"].includes(e.nodeName)}),l=g.a.bulkValidate(o),s=l.errors,c=l.hasError;t.setState(Object(n.a)({},a.name,Object(i.a)({},t.state[a.name],{errors:s})));var d={userName:t.state.formLogin.email,password:t.state.formLogin.password};fetch(E.i+E.d+"user-login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then(function(e){return e.json()}).then(function(e){200===e.status?(t.props.actions.login(e.user),t.props.history.push("/dashboard")):t.setState({loginError:e.message})}).catch(function(e){t.setState({loginError:"Error while processing"})}),console.log(c?"Form has errors. Check!":"Form Submitted!")},t.hasError=function(e,a,r){return t.state[e]&&t.state[e].errors&&t.state[e].errors[a]&&t.state[e].errors[a][r]},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentWillMount",value:function(){console.log("Component will mount")}},{key:"render",value:function(){var e=this.state.formLogin.errors;if(this.props.loginStatus.login)return m.a.createElement(p.a,{to:{pathname:"/dashboard",state:{from:this.props.location}}});var a,t,r,n,i,o;return m.a.createElement("div",{className:"block-center"},m.a.createElement("style",null,".wrapper{background: #2b3eb7} .card {min-height: 400px; max-width: 400px; margin: calc(50vh - 200px) auto 0 !important;} .card img {height: 75px} .btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus {color: #fff !important; background-color: #2b3eb7 !important; border-color: #2b3eb7 !important; box-shadow: none !important;}"),m.a.createElement("div",{className:"card card-flat"},m.a.createElement("div",{className:"card-header text-center bg-default"},m.a.createElement(h.a,{to:""},m.a.createElement("img",{className:"block-center rounded",src:"img/logo-dark.png",alt:"Logo"}))),m.a.createElement("div",{className:"card-body"},m.a.createElement("p",{className:"text-center py-2"},"SIGN IN TO CONTINUE."),m.a.createElement("form",{className:"mb-3",name:"formLogin",onSubmit:this.onSubmit},m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"input-group with-focus"},m.a.createElement(k.a,{type:"text",name:"email",className:"border-right-0",placeholder:"Enter email",invalid:this.hasError("formLogin","email","required")||this.hasError("formLogin","email","email"),onChange:this.validateOnChange,inputProps:{"data-validate":'[{ "key":"required"},{ "key":"email"}]'},helperText:(null===e||void 0===e?void 0:null===(a=e.email)||void 0===a?void 0:a.length)>0?null===e||void 0===e?void 0:null===(t=e.email[0])||void 0===t?void 0:t.msg:"",error:(null===e||void 0===e?void 0:null===(r=e.email)||void 0===r?void 0:r.length)>0,value:this.state.formLogin.email,minLength:"5",maxLength:"100",InputProps:{endAdornment:m.a.createElement(x,null)}}),this.hasError("formLogin","email","required")&&m.a.createElement("span",{className:"invalid-feedback"},"Field is required"))),m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"input-group with-focus"},m.a.createElement(k.a,{type:"password",id:"id-password",name:"password",className:"border-right-0",placeholder:"Password",invalid:this.hasError("formLogin","password","required"),onChange:this.validateOnChange,inputProps:{"data-validate":'[{ "key":"required"},{"key":"minlen","param":"5"},{"key":"maxlen","param":"50"}]'},value:this.state.formLogin.password,helperText:(null===e||void 0===e?void 0:null===(n=e.password)||void 0===n?void 0:n.length)>0?null===e||void 0===e?void 0:null===(i=e.password[0])||void 0===i?void 0:i.msg:"",error:(null===e||void 0===e?void 0:null===(o=e.password)||void 0===o?void 0:o.length)>0,InputProps:{endAdornment:m.a.createElement(j,null)}}),this.state.formLogin.errors&&this.state.formLogin.errors.password&&m.a.createElement(f.l,null,this.state.formLogin.errors.password.required," "),m.a.createElement("span",{className:"invalid-feedback"},"Field is required"))),m.a.createElement("div",{className:"clearfix"},m.a.createElement("div",{className:"float-right"},m.a.createElement(h.a,{to:"mobile",className:"text-muted"},"Forgot Password"))),this.state.loginError,m.a.createElement("span",{className:"invalid-feedback"}," ",this.state.loginError),m.a.createElement("button",{className:"btn btn-raised btn-block btn-primary mt-3",type:"submit"},"Login"))),m.a.createElement("div",{className:"card-footer text-center d-none"},m.a.createElement(h.a,{to:"register",className:"text-muted"},"Register"))))}}]),a}(u.Component);a.default=Object(b.b)(function(e){return{loginStatus:e.login}},function(e){return{actions:Object(y.bindActionCreators)(v,e)}})(L)},535:function(e,a,t){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.d(a,"a",function(){return r})},536:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var r=t(1),n=t(599);function i(e,a){return r.useMemo(function(){return null==e&&null==a?null:function(t){Object(n.a)(e,t),Object(n.a)(a,t)}},[e,a])}},599:function(e,a,t){"use strict";function r(e,a){"function"===typeof e?e(a):e&&(e.current=a)}t.d(a,"a",function(){return r})},611:function(e,a,t){"use strict";var r=t(56),n=t(55),i=t(662),o=t(659),l=t.n(o),s={validate:function(e){var a="checkbox"===e.type,t=a?e.checked:e.value;if(!e.name)throw new Error("Input name must not be empty.");var r=JSON.parse(e.getAttribute("data-validate")),n=[];return r&&r.length&&r.forEach(function(e){switch(e.key){case"required":if(m=a?!1===t:l.a.isEmpty(t)){var r={key:e.key,msg:"Field is mandatory"};n.push(r)}break;case"email":if(m=!l.a.isEmail(t)){r={key:e.key,msg:"Please enter valid email"};n.push(r)}break;case"number":if(m=!l.a.isNumeric(t)){r={key:e.key,msg:"Field should be number"};n.push(r)}break;case"integer":if(m=!l.a.isInt(t)){r={key:e.key,msg:"Field should be integer"};n.push(r)}break;case"alphanum":if(m=!l.a.isAlphanumeric(t)){r={key:e.key,msg:"Field should be alpha numeric"};n.push(r)}break;case"url":if(m=!l.a.isURL(t)){r={key:e.key,msg:"Field should be url"};n.push(r)}break;case"equalto":var o=document.getElementById(e.param).value;if(m=!l.a.equals(t,o)){r={key:e.key,msg:"Field should be match"};n.push(r)}break;case"minlen":if(m=!l.a.isEmpty(t)&&!l.a.isLength(t,{min:Number(e.param)})){r={key:e.key,msg:"Field should have minimum length: "+e.param};n.push(r)}break;case"maxlen":if(m=!l.a.isEmpty(t)&&!l.a.isLength(t,{max:Number(e.param)})){r={key:e.key,msg:"Field should have maximum length: "+e.param};n.push(r)}break;case"len":var s=JSON.parse(e.param),c=Object(i.a)(s,2),d=c[0],u=c[1];if(m=!l.a.isEmpty(t)&&!l.a.isLength(t,{min:d,max:u})){r={key:e.key,msg:"Field should have min length "+d+" maximum length: "+u};n.push(r)}break;case"min":if(m=!l.a.isInt(t,{min:l.a.toInt(e.param)})){r={key:e.key,msg:"Field should have minimum characters"};n.push(r)}break;case"max":if(m=!l.a.isInt(t,{max:l.a.toInt(e.param)})){r={key:e.key,msg:"Field should not exceed maximum characters"};n.push(r)}break;case"list":var m,p=JSON.parse(e.param);if(m=!l.a.isIn(t,p))r={status:m,message:m?"Invalid value":""};break;default:throw new Error("Unrecognized validator.")}}),n},bulkValidate:function(e){var a=this,t={},i=!1;return e.forEach(function(e){var o=a.validate(e);i||(i=o.length>0),t=Object(n.a)({},t,Object(r.a)({},e.name,o))}),{errors:t,hasError:i}}};a.a=s},632:function(e,a,t){"use strict";t.d(a,"a",function(){return i});var r=t(1),n="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function i(e){var a=r.useRef(e);return n(function(){a.current=e}),r.useCallback(function(){return a.current.apply(void 0,arguments)},[])}},733:function(e,a,t){"use strict";var r=t(1),n=t.n(r);a.a=n.a.createContext(null)},740:function(e,a,t){"use strict";var r=t(65),n=t(531),i=t(1),o=(t(0),t(533)),l=t(747),s=t(750),c=t(757),d=t(752),u=t(751),m=t(539),p=t(545),h=t(2),f=i.forwardRef(function(e,a){var t=e.children,l=e.classes,s=e.className,c=e.component,d=void 0===c?"p":c,u=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(n.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),h=Object(p.a)(),f=Object(m.a)({props:e,muiFormControl:h,states:["variant","margin","disabled","error","filled","focused","required"]});return i.createElement(d,Object(r.a)({className:Object(o.a)(l.root,("filled"===f.variant||"outlined"===f.variant)&&l.contained,s,f.disabled&&l.disabled,f.error&&l.error,f.filled&&l.filled,f.focused&&l.focused,f.required&&l.required,"dense"===f.margin&&l.marginDense),ref:a},u)," "===t?i.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):t)}),b=Object(h.a)(function(e){return{root:Object(r.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}},{name:"MuiFormHelperText"})(f),v=t(756),g={standard:l.a,filled:s.a,outlined:c.a},y=i.forwardRef(function(e,a){var t=e.autoComplete,l=e.autoFocus,s=void 0!==l&&l,c=e.children,m=e.classes,p=e.className,h=e.color,f=void 0===h?"primary":h,y=e.defaultValue,E=e.disabled,k=void 0!==E&&E,O=e.error,w=void 0!==O&&O,N=e.FormHelperTextProps,x=e.fullWidth,j=void 0!==x&&x,L=e.helperText,F=e.hiddenLabel,C=e.id,I=e.InputLabelProps,S=e.inputProps,q=e.InputProps,P=e.inputRef,T=e.label,M=e.multiline,R=void 0!==M&&M,V=e.name,A=e.onBlur,H=e.onChange,z=e.onFocus,J=e.placeholder,U=e.required,W=void 0!==U&&U,B=e.rows,D=e.rowsMax,$=e.select,_=void 0!==$&&$,G=e.SelectProps,K=e.type,Q=e.value,X=e.variant,Y=void 0===X?"standard":X,Z=Object(n.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};"outlined"===Y&&(I&&"undefined"!==typeof I.shrink&&(ee.notched=I.shrink),T&&(ee.label=i.createElement(i.Fragment,null,T,W&&"\xa0*"))),_&&(G&&G.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var ae=L&&C?"".concat(C,"-helper-text"):void 0,te=T&&C?"".concat(C,"-label"):void 0,re=g[Y],ne=i.createElement(re,Object(r.a)({"aria-describedby":ae,autoComplete:t,autoFocus:s,defaultValue:y,fullWidth:j,multiline:R,name:V,rows:B,rowsMax:D,type:K,value:Q,id:C,inputRef:P,onBlur:A,onChange:H,onFocus:z,placeholder:J,inputProps:S},ee,q));return i.createElement(u.a,Object(r.a)({className:Object(o.a)(m.root,p),disabled:k,error:w,fullWidth:j,hiddenLabel:F,ref:a,required:W,color:f,variant:Y},Z),T&&i.createElement(d.a,Object(r.a)({htmlFor:C,id:te},I),T),_?i.createElement(v.a,Object(r.a)({"aria-describedby":ae,id:C,labelId:te,value:Q,input:ne},G),c):ne,L&&i.createElement(b,Object(r.a)({id:ae},N),L))});a.a=Object(h.a)({root:{}},{name:"MuiTextField"})(y)}}]);
//# sourceMappingURL=8.18c4c536.chunk.js.map