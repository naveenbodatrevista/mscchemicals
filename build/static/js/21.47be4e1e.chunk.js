(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1315:function(e,a,t){"use strict";t.r(a);var r=t(32),n=t(33),s=t(67),l=t(34),o=t(68),c=t(46),i=t(1),u=t.n(i),d=t(140),m=t(621),p=(t(3),t(13)),f=t(655),w=t(853),g=t(80),E=t(847),b=t(1309),h=t(634),v=t.n(h),N=t(42),P=t.n(N),y=t(69),U=t(646),C=t.n(U),S=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).state={loading:!1,activeTab:0,user:{name:"",mobile:"",email:"",url:"",location:"",bio:"",company:""},role:{},imageUrl:"img/user.jpg",password:{oldPassword:"",newPassword:"",confirmNewPassword:"",errorMessage:""},image:""},t.saveProfile=function(e){e.preventDefault(),P.a.post(c.i+c.d+"/user/profile",t.state.user).then(function(e){v()("Successfully Updated!","Success","success")}).catch(function(e){v()("Unable to Add!","Error ","error")})},t.updatePassword=function(e){var a;if(e.preventDefault(),t.state.password.newPassword.length<6)return(a=t.state.password).errorMessage="New Password should contain minimum 6 characters",void t.setState({password:a});if(t.state.password.newPassword!==t.state.password.confirmNewPassword)return(a=t.state.password).errorMessage="New Password and confirm password not matching",void t.setState({password:a});var r=new FormData;r.append("oldPassword",t.state.password.oldPassword),r.append("newPassword",t.state.password.newPassword),P()({method:"post",url:c.i+c.d+"user/password",data:r,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(e){v()("Successfully Updated!","Success","success")}).catch(function(e){v()("Unable to Update!",e.response.data.message,"error")})},t.uploadImage=function(e){if(e.preventDefault(),t.state.image){var a=new FormData;a.append("image",t.state.image),P()({method:"post",url:c.i+c.d+"user/image",data:a,config:{headers:{"Content-Type":"application/x-www-form-urlencoded"}}}).then(function(e){t.setState({image:"",imageUrl:e.data.url}),v()("Successfully Updated!","Success","success")}).catch(function(e){v()("Unable to Update!",e.response?e.response.data.message:e.message,"error")})}else v()("Image required!","Please upload image to update","warning")},t.toggleTab=function(e){t.state.activeTab!==e&&t.setState({activeTab:e})},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"loadUser",value:function(){var e=this;P.a.get(c.i+c.d+"/user/profile").then(function(a){"undefined"===typeof a.data.url&&(a.data.url=""),"undefined"===typeof a.data.company&&(a.data.company=""),"undefined"===typeof a.data.location&&(a.data.location=""),"undefined"===typeof a.data.bio&&(a.data.bio=""),e.setState({user:a.data}),P.a.get(c.i+c.d+"/api/roles?projection=user_role_detail&code="+e.state.user.role).then(function(a){e.setState({role:a.data("_embedded").roles[0]})})}),P.a.get(c.i+c.d+"/user-images/"+this.props.user.id).then(function(a){a.data&&a.data.url&&e.setState({imageUrl:a.data.url})})}},{key:"componentDidMount",value:function(){this.loadUser()}},{key:"updateOldPwd",value:function(e){var a=this.state.password;a.oldPassword=e.target.value,this.setState({password:a})}},{key:"updateNewPwd",value:function(e,a){var t=this.state.password;t[e]=a.target.value,t.newPassword!==t.confirmNewPassword?t.errorMessage="New Password and confirm password not matching":t.errorMessage="",this.state.password.newPassword.length<6&&(t.errorMessage="New Password should contain minimum 6 characters"),this.setState({password:t})}},{key:"imageChange",value:function(e){e.target.files&&e.target.files[0]&&this.setState({image:e.target.files[0]})}},{key:"updateProfile",value:function(e,a){var t=this.state.user;t[e]=a.target.value,this.setState({user:t})}},{key:"render",value:function(){var e=this;return u.a.createElement(m.a,null,this.state.loading&&u.a.createElement(d.a,null),u.a.createElement(p.x,null,u.a.createElement(p.e,{lg:"4"},u.a.createElement("div",{className:"card card-default"},u.a.createElement("div",{className:"card-body text-center"},u.a.createElement("div",{className:"py-4"},u.a.createElement("img",{className:"img-fluid rounded-circle img-thumbnail thumb96",src:this.state.imageUrl,alt:"Contact"})),u.a.createElement("h3",{className:"m-0 text-bold"},this.props.user.name),u.a.createElement("div",{className:"my-3"},u.a.createElement("p",null,this.props.user.role.replace("ROLE_","")))))),u.a.createElement(p.e,{lg:"8"},u.a.createElement(w.a,{position:"static"},u.a.createElement(g.a,{className:"bg-white",indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",value:this.state.activeTab,onChange:function(a,t){return e.toggleTab(t)}},u.a.createElement(E.a,{label:"Profile"}),u.a.createElement(E.a,{label:"Update"}),u.a.createElement(E.a,{label:"Image"}),u.a.createElement(E.a,{label:"Password"}))),u.a.createElement(f.a,{value:this.state.activeTab,index:0},this.state.user&&u.a.createElement(p.A,{hover:!0,responsive:!0,className:"table"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,"Name")),u.a.createElement("td",null,this.state.user.name)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,"Phone")),u.a.createElement("td",null,this.state.user.mobile)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,"Email")),u.a.createElement("td",null,this.state.user.email)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,"User Name")),u.a.createElement("td",null,this.state.user.username)),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,"Role")),u.a.createElement("td",null,this.state.user.role?this.state.user.name.replace("ROLE_",""):"")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,"Permissions")),u.a.createElement("td",null,u.a.createElement("ul",null,this.state.user.role?this.state.user.role.permissions.map(function(e){return e.permission.description}).map(function(e){return u.a.createElement("li",null,e)}):""))),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,"Account Created On")),u.a.createElement("td",null,u.a.createElement(C.a,{format:"DD MMM YY HH:mm"},this.state.user.creationDate)))))),u.a.createElement(f.a,{value:this.state.activeTab,index:1},u.a.createElement("form",{onSubmit:this.saveProfile,className:"col-md-8 offset-md-2"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Name"),u.a.createElement(p.n,{value:this.state.user.name,onChange:function(a){return e.updateProfile("name",a)},type:"text"})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Bio"),u.a.createElement("textarea",{value:this.state.user.bio,onChange:function(a){return e.updateProfile("bio",a)},className:"form-control",rows:"3"})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"URL"),u.a.createElement(p.n,{value:this.state.user.url,onChange:function(a){return e.updateProfile("url",a)},className:"form-control",type:"text"})),u.a.createElement(b.a,{className:"btn btn-raised btn-info",type:"submit"},"Update Profile"))),u.a.createElement(f.a,{value:this.state.activeTab,index:2},u.a.createElement("form",{onSubmit:this.uploadImage,className:"col-md-8 offset-md-2"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Picture"),u.a.createElement(p.n,{className:"form-control filestyle",onChange:function(a){return e.imageChange(a)},type:"file",accept:"image/*","data-input":"false","data-classbutton":"btn btn-secondary","data-classinput":"form-control inline","data-text":"Upload new picture","data-icon":"<span class='fa fa-upload mr-2'></span>"})),u.a.createElement(b.a,{className:"btn btn-raised btn-info",type:"submit"},"Upload"))),u.a.createElement(f.a,{value:this.state.activeTab,index:3},u.a.createElement("form",{onSubmit:this.updatePassword,className:"col-md-8 offset-md-2"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Current password"),u.a.createElement(p.n,{className:"form-control",type:"password",value:this.state.password.oldPassword,onChange:function(a){return e.updateOldPwd(a)}})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"New password"),u.a.createElement(p.n,{className:"form-control",type:"password",value:this.state.password.newPassword,onChange:function(a){return e.updateNewPwd("newPassword",a)}})),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,"Confirm new password"),u.a.createElement(p.n,{className:"form-control",type:"password",value:this.state.password.confirmNewPassword,onChange:function(a){return e.updateNewPwd("confirmNewPassword",a)}})),u.a.createElement("p",null,this.state.password.errorMessage),u.a.createElement(b.a,{className:"btn btn-raised btn-info",type:"submit"},"Update password"))))))}}]),a}(i.Component);a.default=Object(y.b)(function(e){return{settings:e.settings,user:e.login.userObj}})(S)},621:function(e,a,t){"use strict";var r=t(1),n=t.n(r),s=function(e){return n.a.createElement("div",{className:"content-wrapper"},e.unwrap?n.a.createElement("div",{className:"unwrap"},e.children):e.children)};s.defaultProps={unwrap:!1},a.a=s},655:function(e,a,t){"use strict";var r=t(198),n=t(1),s=t.n(n),l=t(69),o=t(808),c=t(809),i=t(79);var u=Object(o.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}});a.a=Object(l.b)()(function(e){var a=e.children,t=e.value,n=e.index,l=Object(r.a)(e,["children","value","index"]);return s.a.createElement(c.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},l),t===n&&s.a.createElement(i.a,{className:"bg-white",p:3},a))},function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}},u)}}]);
//# sourceMappingURL=21.47be4e1e.chunk.js.map