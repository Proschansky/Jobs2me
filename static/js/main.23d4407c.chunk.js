(this.webpackJsonpstartstrap=this.webpackJsonpstartstrap||[]).push([[0],{33:function(e,a,t){e.exports=t(43)},38:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),s=t.n(r),c=(t(38),t(19)),o=t(5),m=t(6),i=t(13),d=t(8),u=t(7),g=l.a.createContext(),p=g.Consumer,b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).toggleMessages=function(){e.state.showMessages?e.setState({showMessages:!1}):e.setState({showMessages:!0})},e.toggleLogout=function(){e.state.logoutDisplayed?e.setState({logoutDisplayed:!1}):e.setState({logoutDisplayed:!0})},e.setActiveMessage=function(a,t){t.preventDefault(),console.log(a,"selected"),a===e.state.activeMessageIndex?e.setState({activeMessageIndex:void 0}):e.setState({activeMessageIndex:a})},e.setMessageSeen=function(a){for(var t=e.state.conversations,n=0;n<t[a].length;n++)t[a].seen=!0;e.setState({conversations:t})},e.handleInput=function(a){var t=e.state;t.currentMessage=a.target.value,e.setState({newState:t})},e.handleNewMessage=function(a,t){var n=e.state.conversations;n[a].messages.push({message:e.state.currentMessage,name:"me",seen:!0,date:new Date}),e.setState({conversations:n,currentMessage:""}),t.preventDefault()},e.state={showMessages:!1,logoutDisplayed:!1,activeMessageIndex:void 0,currentMessage:"",conversations:[{name:"John",unseenMessage:!1,messages:[{message:"Hi there! I am wondering if you can help me with a problem I've been having.",date:new Date(2020,4,26,16),seen:!1}]},{name:"Garrett",unseenMessage:!1,messages:[{message:"I have the photos that you ordered last month, how would you like them sent to you?",date:new Date(2020,4,25,15,36),seen:!1}]},{name:"Steven",unseenMessage:!1,messages:[{message:"Last month's report looks great, I am very happy with the progress so far, keep up the good work!",date:new Date(2020,4,24,12),seen:!1}]},{name:"Bill",unseenMessage:!1,messages:[{message:"Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...",date:new Date(2020,4,12,14),seen:!1}]}]},e.toggleMessages=e.toggleMessages.bind(Object(i.a)(e)),e.toggleLogout=e.toggleLogout.bind(Object(i.a)(e)),e.setActiveMessage=e.setActiveMessage.bind(Object(i.a)(e)),e.handleInput=e.handleInput.bind(Object(i.a)(e)),e.handleNewMessage=e.handleNewMessage.bind(Object(i.a)(e)),e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.children,a=this.state,t=a.currentMessage,n=a.showMessages,r=a.logoutDisplayed,s=a.conversations,c=a.activeMessageIndex,o=this.toggleMessages,m=this.toggleLogout,i=this.setActiveMessage,d=this.setMessageSeen,u=this.handleInput,p=this.handleNewMessage;return l.a.createElement(g.Provider,{value:{showMessages:n,logoutDisplayed:r,toggleMessages:o,setMessageSeen:d,toggleLogout:m,setActiveMessage:i,handleInput:u,handleNewMessage:p,activeMessageIndex:c,conversations:s,currentMessage:t}},e)}}]),t}(n.Component),E=g;function h(){var e=l.a.useState(0),a=Object(c.a)(e,2),t=a[0],n=a[1],r=t?"toggled":null;return l.a.createElement(p,null,(function(e){return l.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ".concat(r),id:"accordionSidebar"},l.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"index.html"},l.a.createElement("div",{className:"sidebar-brand-icon rotate-n-15"},l.a.createElement("i",{className:"fas fa-laugh-wink"})),l.a.createElement("div",{className:"sidebar-brand-text mx-3"},"SB Admin ",l.a.createElement("sup",null,"2"))),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",onClick:function(){return window.location.reload()}},l.a.createElement("i",{className:"fas fa-fw fa-tachometer-alt"}),l.a.createElement("span",null,"Dashboard"))),l.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}),l.a.createElement("div",{className:"text-center d-none d-md-inline"},l.a.createElement("button",{className:"rounded-circle border-0",id:"sidebarToggle",onClick:function(){n(t?0:1)}})))}))}function v(e){return l.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},e.children)}function f(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},e.children))}function N(){return l.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3"},l.a.createElement("i",{className:"fa fa-bars"}))}function w(){return l.a.createElement("form",{className:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-primary",type:"button"},l.a.createElement("i",{className:"fas fa-search fa-sm"})))))}function y(){return l.a.createElement("li",{className:"nav-item dropdown no-arrow d-sm-none"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"searchDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-search fa-fw"})),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in","aria-labelledby":"searchDropdown"},l.a.createElement("form",{className:"form-inline mr-auto w-100 navbar-search"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Search for...","aria-label":"Search","aria-describedby":"basic-addon2"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-primary",type:"button"},l.a.createElement("i",{className:"fas fa-search fa-sm"})))))))}function x(e){return l.a.createElement("ul",{className:"navbar-nav ml-auto"},e.children)}function k(){return l.a.createElement(p,null,(function(e){return l.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"alertsDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-bell fa-fw"}),l.a.createElement("span",{className:"badge badge-danger badge-counter"},"3+")),l.a.createElement("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"alertsDropdown"},l.a.createElement("h6",{className:"dropdown-header"},"Alerts Center"),l.a.createElement("a",{className:"dropdown-item d-flex align-items-center",href:"#"},l.a.createElement("div",{className:"mr-3"},l.a.createElement("div",{className:"icon-circle bg-primary"},l.a.createElement("i",{className:"fas fa-file-alt text-white"}))),l.a.createElement("div",null,l.a.createElement("div",{className:"small text-gray-500"},"December 12, 2019"),l.a.createElement("span",{className:"font-weight-bold"},"A new monthly report is ready to download!"))),l.a.createElement("a",{className:"dropdown-item d-flex align-items-center",href:"#"},l.a.createElement("div",{className:"mr-3"},l.a.createElement("div",{className:"icon-circle bg-success"},l.a.createElement("i",{className:"fas fa-donate text-white"}))),l.a.createElement("div",null,l.a.createElement("div",{className:"small text-gray-500"},"December 7, 2019"),"$290.29 has been deposited into your account!")),l.a.createElement("a",{className:"dropdown-item d-flex align-items-center",href:"#"},l.a.createElement("div",{className:"mr-3"},l.a.createElement("div",{className:"icon-circle bg-warning"},l.a.createElement("i",{className:"fas fa-exclamation-triangle text-white"}))),l.a.createElement("div",null,l.a.createElement("div",{className:"small text-gray-500"},"December 2, 2019"),"Spending Alert: We've noticed unusually high spending for your account.")),l.a.createElement("a",{className:"dropdown-item text-center small text-gray-500",href:"#"},"Show All Alerts")))}))}var M=t(11),C=t.n(M);function S(){return l.a.createElement(p,null,(function(e){return l.a.createElement("li",{className:"nav-item dropdown no-arrow mx-1"},l.a.createElement("a",{className:"nav-link dropdown-toggle",id:"messagesDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fas fa-envelope fa-fw"}),l.a.createElement("span",{className:"badge badge-danger badge-counter"},e.conversations.filter((function(e){return!e.unseenMessages})).length)),l.a.createElement("div",{className:"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"alertsDropdown"},l.a.createElement("h6",{className:"dropdown-header"},"Message Center"),e.conversations.map((function(a,t){return l.a.createElement("a",{className:"dropdown-item d-flex align-items-center messageModal",href:"#","data-toggle":"modal","data-target":"#messageModal",key:t,onClick:function(a){return e.setActiveMessage(t,a)}},l.a.createElement("div",{className:"dropdown-list-image mr-3"},l.a.createElement("img",{className:"rounded-circle",src:"https://via.placeholder.com/50",alt:""}),l.a.createElement("div",{className:"status-indicator bg-success"})),l.a.createElement("div",{className:"font-weight-bold"},l.a.createElement("div",{className:"text-truncate"},a.messages[a.messages.length-1].message),l.a.createElement("div",{className:"small text-gray-500"},a.name," ",C()(a.messages[a.messages.length-1].date).fromNow(!0)," ago")))})),l.a.createElement("a",{className:"dropdown-item text-center small text-gray-500",onClick:e.toggleMessages},"Show All Messages")))}))}function j(){var e=l.a.useContext(E).toggleLogout;return l.a.createElement("li",{className:"nav-item dropdown no-arrow"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small"},"Valerie Luna"),l.a.createElement("img",{className:"img-profile rounded-circle",src:"https://source.unsplash.com/QAB-WJcbgJk/60x60"})),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},l.a.createElement("a",{className:"dropdown-item",href:"#"},l.a.createElement("i",{className:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"),l.a.createElement("a",{className:"dropdown-item",href:"#"},l.a.createElement("i",{className:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"),l.a.createElement("a",{className:"dropdown-item",href:"#"},l.a.createElement("i",{className:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"#","data-toggle":"modal",onClick:function(){return e()}},l.a.createElement("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout")))}function D(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(w,null),l.a.createElement(x,null,l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(S,null),l.a.createElement(j,null)))}function A(e){return l.a.createElement("div",{className:"container-fluid"},e.children)}function O(){return l.a.createElement("div",{className:"d-sm-flex align-items-center justify-content-between mb-4"},l.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},"Dashboard"),l.a.createElement("a",{href:"#",className:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"},l.a.createElement("i",{className:"fas fa-download fa-sm text-white-50"})," Generate Report"))}function I(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},l.a.createElement("div",{className:"card border-left-primary shadow h-100 py-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row no-gutters align-items-center"},l.a.createElement("div",{className:"col mr-2"},l.a.createElement("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1"},"Earnings (Monthly)"),l.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},"$40,000")),l.a.createElement("div",{className:"col-auto"},l.a.createElement("i",{className:"fas fa-calendar fa-2x text-gray-300"})))))),l.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4 mr-0"},l.a.createElement("div",{className:"card border-left-success shadow h-100 py-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row no-gutters align-items-center"},l.a.createElement("div",{className:"col mr-2"},l.a.createElement("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Earnings (Annual)"),l.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},"$215,000")),l.a.createElement("div",{className:"col-auto"},l.a.createElement("i",{className:"fas fa-dollar-sign fa-2x text-gray-300"})))))),l.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4 mr-0"},l.a.createElement("div",{className:"card border-left-info shadow h-100 py-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row no-gutters align-items-center"},l.a.createElement("div",{className:"col mr-2"},l.a.createElement("div",{className:"text-xs font-weight-bold text-info text-uppercase mb-1"},"Tasks"),l.a.createElement("div",{className:"row no-gutters align-items-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("div",{className:"h5 mb-0 mr-3 font-weight-bold text-gray-800"},"50%")),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"progress progress-sm mr-2"},l.a.createElement("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}))))),l.a.createElement("div",{className:"col-auto"},l.a.createElement("i",{className:"fas fa-clipboard-list fa-2x text-gray-300"})))))),l.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4 mr-0"},l.a.createElement("div",{className:"card border-left-warning shadow h-100 py-2"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row no-gutters align-items-center"},l.a.createElement("div",{className:"col mr-2"},l.a.createElement("div",{className:"text-xs font-weight-bold text-warning text-uppercase mb-1"},"Pending Requests"),l.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},"18")),l.a.createElement("div",{className:"col-auto"},l.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"}))))))))}var L=t(21),B=t.n(L);function R(e,a,t,n){e=(e+"").replace(",","").replace(" ","");var l=isFinite(+e)?+e:0,r=isFinite(+a)?Math.abs(a):0,s="undefined"===typeof n?",":n,c="undefined"===typeof t?".":t,o="";return(o=(r?function(e,a){var t=Math.pow(10,a);return""+Math.round(e*t)/t}(l,r):""+Math.round(l)).split("."))[0].length>3&&(o[0]=o[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,s)),(o[1]||"").length<r&&(o[1]=o[1]||"",o[1]+=new Array(r-o[1].length+1).join("0")),o.join(c)}var P=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).chartRef=l.a.createRef(),n.componentDidMount=function(){var e=n.chartRef.current.getContext("2d");new B.a(e,{type:n.state.type,data:n.state.data,options:n.state.options})},n.state={type:"line",data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Earnings",lineTension:.3,backgroundColor:"rgba(78, 115, 223, 0.05)",borderColor:"rgba(78, 115, 223, 1)",pointRadius:3,pointBackgroundColor:"rgba(78, 115, 223, 1)",pointBorderColor:"rgba(78, 115, 223, 1)",pointHoverRadius:3,pointHoverBackgroundColor:"rgba(78, 115, 223, 1)",pointHoverBorderColor:"rgba(78, 115, 223, 1)",pointHitRadius:10,pointBorderWidth:2,data:[0,1e4,5e3,15e3,1e4,2e4,15e3,25e3,2e4,3e4,25e3,4e4]}]},options:{maintainAspectRatio:!1,layout:{padding:{left:10,right:25,top:25,bottom:0}},scales:{xAxes:[{time:{unit:"date"},gridLines:{display:!1,drawBorder:!1},ticks:{maxTicksLimit:7}}],yAxes:[{ticks:{maxTicksLimit:5,padding:10,callback:function(e,a,t){return"$"+R(e)}},gridLines:{color:"rgb(234, 236, 244)",zeroLineColor:"rgb(234, 236, 244)",drawBorder:!1,borderDash:[2],zeroLineBorderDash:[2]}}]},legend:{display:!1},tooltips:{backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",titleMarginBottom:10,titleFontColor:"#6e707e",titleFontSize:14,borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,intersect:!1,mode:"index",caretPadding:10,callbacks:{label:function(e,a){return(a.datasets[e.datasetIndex].label||"")+": $"+R(e.yLabel)}}}}},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("canvas",{id:"myAreaChart",ref:this.chartRef}))}}]),t}(l.a.Component),T=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).chartRef=l.a.createRef(),n.componentDidMount=function(){var e=n.chartRef.current.getContext("2d");new B.a(e,{type:n.state.type,data:n.state.data,options:n.state.options,legend:n.state.legend,cutoutPercentage:n.state.cutoutPercentage})},n.state={type:"doughnut",data:{labels:["Direct","Referral","Social"],datasets:[{data:[55,30,15],backgroundColor:["#4e73df","#1cc88a","#36b9cc"],hoverBackgroundColor:["#2e59d9","#17a673","#2c9faf"],hoverBorderColor:"rgba(234, 236, 244, 1)"}]},options:{maintainAspectRatio:!1,tooltips:{backgroundColor:"rgb(255,255,255)",bodyFontColor:"#858796",borderColor:"#dddfeb",borderWidth:1,xPadding:15,yPadding:15,displayColors:!1,caretPadding:10},legend:{display:!1},cutoutPercentage:80}},n}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("canvas",{id:"myPieChart",ref:this.chartRef}))}}]),t}(l.a.Component);function F(){var e=l.a.useState(0),a=Object(c.a)(e,2),t=a[0],n=a[1],r=t?"show":null,s=l.a.useState(0),o=Object(c.a)(s,2),m=o[0],i=o[1],d=m?"show":null;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-8 col-lg-7"},l.a.createElement("div",{className:"card shadow mb-4"},l.a.createElement("div",{className:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},l.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Earnings Overview"),l.a.createElement("div",{className:"dropdown no-arrow"},l.a.createElement("a",{className:"dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return n(!t)}},l.a.createElement("i",{className:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right shadow animated--fade-in ".concat(r),"aria-labelledby":"dropdownMenuLink"},l.a.createElement("div",{className:"dropdown-header"},"Dropdown Header:"),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here")))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"chart-area"},l.a.createElement(P,null))))),l.a.createElement("div",{className:"col-xl-4 col-lg-5"},l.a.createElement("div",{className:"card shadow mb-4"},l.a.createElement("div",{className:"card-header py-3 d-flex flex-row align-items-center justify-content-between"},l.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Revenue Sources"),l.a.createElement("div",{className:"dropdown no-arrow"},l.a.createElement("a",{className:"dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return i(!m)}},l.a.createElement("i",{className:"fas fa-ellipsis-v fa-sm fa-fw text-gray-400"})),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right shadow animated--fade-in ".concat(d),"aria-labelledby":"dropdownMenuLink"},l.a.createElement("div",{className:"dropdown-header"},"Dropdown Header:"),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here")))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"chart-pie pt-4 pb-2"},l.a.createElement(T,null)),l.a.createElement("div",{className:"mt-4 text-center small"},l.a.createElement("span",{className:"mr-2"},l.a.createElement("i",{className:"fas fa-circle text-primary"})," Direct"),l.a.createElement("span",{className:"mr-2"},l.a.createElement("i",{className:"fas fa-circle text-success"})," Social"),l.a.createElement("span",{className:"mr-2"},l.a.createElement("i",{className:"fas fa-circle text-info"})," Referral"))))))}function _(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card shadow mb-4"},l.a.createElement("div",{className:"card-header py-3"},l.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Projects")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"small font-weight-bold"},"Server Migration ",l.a.createElement("span",{className:"float-right"},"20%")),l.a.createElement("div",{className:"progress mb-4"},l.a.createElement("div",{className:"progress-bar bg-danger",role:"progressbar","aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100",style:{width:"20%"}})),l.a.createElement("h4",{className:"small font-weight-bold"},"Sales Tracking ",l.a.createElement("span",{className:"float-right"},"40%")),l.a.createElement("div",{className:"progress mb-4"},l.a.createElement("div",{className:"progress-bar bg-warning",role:"progressbar","aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100",style:{width:"40%"}})),l.a.createElement("h4",{className:"small font-weight-bold"},"Customer Database ",l.a.createElement("span",{className:"float-right"},"60%")),l.a.createElement("div",{className:"progress mb-4"},l.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"40%"}})),l.a.createElement("h4",{className:"small font-weight-bold"},"Payout Details ",l.a.createElement("span",{className:"float-right"},"80%")),l.a.createElement("div",{className:"progress mb-4"},l.a.createElement("div",{className:"progress-bar bg-info",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}})),l.a.createElement("h4",{className:"small font-weight-bold"},"Account Setup ",l.a.createElement("span",{className:"float-right"},"Complete!")),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar bg-success",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",style:{width:"100%"}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card bg-primary text-white shadow"},l.a.createElement("div",{className:"card-body"},"Primary",l.a.createElement("div",{className:"text-white-50 small"},"#4e73df")))),l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card bg-success text-white shadow"},l.a.createElement("div",{className:"card-body"},"Success",l.a.createElement("div",{className:"text-white-50 small"},"#1cc88a")))),l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card bg-info text-white shadow"},l.a.createElement("div",{className:"card-body"},"Info",l.a.createElement("div",{className:"text-white-50 small"},"#36b9cc")))),l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card bg-warning text-white shadow"},l.a.createElement("div",{className:"card-body"},"Warning",l.a.createElement("div",{className:"text-white-50 small"},"#f6c23e")))),l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card bg-danger text-white shadow"},l.a.createElement("div",{className:"card-body"},"Danger",l.a.createElement("div",{className:"text-white-50 small"},"#e74a3b")))),l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card bg-secondary text-white shadow"},l.a.createElement("div",{className:"card-body"},"Secondary",l.a.createElement("div",{className:"text-white-50 small"},"#858796")))))),l.a.createElement("div",{className:"col-lg-6 mb-4"},l.a.createElement("div",{className:"card shadow mb-4"},l.a.createElement("div",{className:"card-header py-3"},l.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Illustrations")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,"Add some quality, svg illustrations to your project courtesy of ",l.a.createElement("a",{target:"_blank",rel:"nofollow",href:"https://undraw.co/"},"unDraw"),", a constantly updated collection of beautiful svg images that you can use completely free and without attribution!"),l.a.createElement("a",{target:"_blank",rel:"nofollow",href:"https://undraw.co/"},"Browse Illustrations on unDraw \u2192"))),l.a.createElement("div",{className:"card shadow mb-4"},l.a.createElement("div",{className:"card-header py-3"},l.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Development Approach")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,"SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce CSS bloat and poor page performance. Custom CSS classNamees are used to create custom components and custom utility classNamees."),l.a.createElement("p",{className:"mb-0"},"Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classNamees.")))))}function W(){return l.a.createElement("footer",{className:"sticky-footer bg-white"},l.a.createElement("div",{className:"container my-auto"},l.a.createElement("div",{className:"copyright text-center my-auto"},l.a.createElement("span",null,"Copyright \xa9 Your Website 2019"))))}function J(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"content",className:"p-3"},l.a.createElement(f,null,l.a.createElement(D,null)),l.a.createElement(A,null,l.a.createElement(O,null)),l.a.createElement(I,null),l.a.createElement(F,null),l.a.createElement(_,null)),l.a.createElement(W,null))}var H=t(45);function $(){var e=l.a.useContext(E),a=e.logoutDisplayed,t=e.toggleLogout;return l.a.createElement(H.a,{className:"modal fade",show:a,id:"logoutModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Ready to Leave?"),l.a.createElement("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",onClick:function(){return t()}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},'Select "Logout" below if you are ready to end your current session.'),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",onClick:function(){return t()}},"Cancel"),l.a.createElement("a",{className:"btn btn-primary",href:"login.html"},"Logout")))))}function z(){return l.a.createElement("a",{className:"scroll-to-top rounded",href:"#page-top"},l.a.createElement("i",{className:"fas fa-angle-up"}))}function q(e){return console.log(e),l.a.createElement(p,null,(function(a){return l.a.createElement("div",{className:"modal-header",style:{paddingBottom:"0px",borderBottom:"0px"}},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel",style:{width:"100%"}},l.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",role:"tab","aria-controls":"home","aria-selected":"true",onClick:function(){return e.setIndex(0)}},"SMS")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement("a",{className:"nav-link",id:"profile-tab","data-toggle":"tab",role:"tab","aria-controls":"profile","aria-selected":"false",onClick:function(){return e.setIndex(1)}},"Email")),l.a.createElement("li",{className:"nav-item",role:"presentation"},l.a.createElement("a",{className:"nav-link",id:"contact-tab","data-toggle":"tab",role:"tab","aria-controls":"contact","aria-selected":"false",onClick:function(){return e.setIndex(2)}},"Phone")))),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:a.toggleMessages},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}))}function G(){var e=function(e,a){return e===a?"active":void 0};return l.a.createElement(p,null,(function(a){return a.conversations.map((function(t,n){return l.a.createElement("a",{className:"list-group-item list-group-item-action smsTabModal ".concat(e(n,a.activeMessageIndex)),onClick:function(e){return a.setActiveMessage(n,e)},id:"butinfo_7705652031","data-toggle":"list",href:"#smsTab_7705652031",role:"tab","aria-controls":"home",key:n},l.a.createElement("div",{className:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{className:"mb-1"},t.name),l.a.createElement("small",null,C()(t.messages[t.messages.length-1].date).fromNow(!0)," ago")),l.a.createElement("p",{className:"mb-1"},t.messages[t.messages.length-1].message))}))}))}var Q=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).priorMessages=function(e,a){if(void 0!==a)return e.conversations[a].messages.map((function(e,a){return"me"!==e.name?l.a.createElement("div",{className:"row mb-3",key:a},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",null,e.message),l.a.createElement("p",{style:{fontSize:"12px",paddingLeft:"3px"}},C()(e.date).format("l h:mm a"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("p",null,"\xa0"))):l.a.createElement("div",{className:"row mb-3 float-right",key:a},l.a.createElement("div",{className:"col-md-8 bg-dark text-align-center text-light"},l.a.createElement("div",null,e.message),l.a.createElement("p",{style:{fontSize:"12px",paddingLeft:"3px"}},C()(e.date).format("l h:mm a"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("p",null,"\xa0")))}))},n.textRef=l.a.createRef(),n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p,null,(function(a){return void 0!==a.activeMessageIndex?l.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},l.a.createElement("div",{id:"sms_form"},l.a.createElement("form",{name:"send_sms",action:"",onSubmit:function(e){a.handleNewMessage(a.activeMessageIndex,e)}},l.a.createElement("input",{type:"hidden",name:"k",value:"h7d22dh8d2h9d3j989j8hdh98d9h8d9h8d9hh98d2"}),l.a.createElement("input",{type:"hidden",name:"oid",value:"1234"}),l.a.createElement("input",{type:"hidden",name:"toNumber",value:"<?php echo $userid; ?>"}),l.a.createElement("input",{type:"hidden",name:"toNumber",value:"+14049638521"}),e.priorMessages(a,a.activeMessageIndex),l.a.createElement("textarea",{className:"form-control",style:{marginBottom:"1rem"},value:a.currentMessage,onChange:a.handleInput}),l.a.createElement("input",{type:"submit",className:"btn btn-primary float-right",name:"sendSms",id:"sendSms_btn",value:"Send"})))):null}))}}]),t}(l.a.Component),V=t(24),Y=t(30),K=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).handleEditorChange=function(e,a){console.log("Content was updated:",e)},e}return Object(m.a)(t,[{key:"render",value:function(){var e;return l.a.createElement(Y.a,{init:(e={height:300,browser_spellcheck:!0,menubar:!1,plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools codesample toc"],toolbar:"undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media",entity_encoding:"raw",templates:[{title:"200+",description:"200+ Applies",content:"jobdescription"}],image_advtab:!0,encoding:"xml"},Object(V.a)(e,"entity_encoding","numeric"),Object(V.a)(e,"formats",{removeformat:[{selector:"*",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"*",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}),e),onEditorChange:this.handleEditorChange})}}]),t}(l.a.Component),U=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={index:0,activeEmail:0},e.setIndex=function(a){e.setState({index:a})},e}return Object(m.a)(t,[{key:"render",value:function(){var e,a=this,t=this.state.index,n=l.a.createElement("div",{className:"tab-content",id:"myTabContent"},l.a.createElement("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},l.a.createElement("div",{className:"col-4 float-left",style:{paddingLeft:"0px"}},l.a.createElement("div",{className:"list-group",id:"list-tab",role:"tablist"}),l.a.createElement(G,null))),l.a.createElement("div",{className:"col-8 float-right"},l.a.createElement(Q,null))),r=l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"list-group",id:"list-tab",role:"tablist"},l.a.createElement("a",{className:"list-group-item list-group-item-action active",id:"list-email1-list","data-toggle":"list",role:"tab","aria-controls":"home"},"email@domain.com"),l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-email2-list","data-toggle":"list",role:"tab","aria-controls":"profile"},"email@domain.com"),l.a.createElement("a",{className:"list-group-item list-group-item-action",id:"list-email3-list","data-toggle":"list",role:"tab","aria-controls":"messages"},"email@domain.com"))),s=l.a.createElement("div",{className:"tab-pane fade show active",role:"tabpanel","aria-labelledby":"list-email1-list"},l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"To")),l.a.createElement("input",{type:"text",className:"form-control"})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},"Subject")),l.a.createElement("input",{type:"text",className:"form-control"})),l.a.createElement(K,{className:"email"}),l.a.createElement("button",{className:"btn btn-primary float-right",style:{marginTop:"1rem"}},"Send"));0===t&&(e=n),1===t&&(e=l.a.createElement("div",{className:"tab-pane fade show",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},l.a.createElement("div",{className:"row"},r,l.a.createElement("div",{className:"col-8",style:{paddingRight:"1.75rem"}},l.a.createElement("div",{className:"tab-content",id:"nav-tabContent"},s))))),2===t&&(e=l.a.createElement("div",{class:"tab-pane fade active show p-3",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},l.a.createElement("strong",null,"Phone tab")));var c=function(e){return e.showMessages?{display:"block"}:{display:"none"}};return l.a.createElement(p,null,(function(t){return l.a.createElement("div",{className:"modal fade show",style:c(t),id:"messageModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document",style:{maxWidth:"75%"}},l.a.createElement("div",{className:"modal-content"},l.a.createElement(q,{setIndex:a.setIndex}),e)))}))}}]),t}(l.a.Component);var X=function(){return l.a.createElement(b,null,l.a.createElement("div",{id:"wrapper"},l.a.createElement(h,null),l.a.createElement(v,null,l.a.createElement(J,null)),l.a.createElement($,null),l.a.createElement(U,null),l.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.23d4407c.chunk.js.map