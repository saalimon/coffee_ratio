(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/moka-pot.e0da0cd7.png"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/drip.6491c587.png"},function(e,t,a){e.exports=a.p+"static/media/cold-brew.6d442f00.png"},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(10),r=a.n(o),i=a(5),c=a(0),s=(a(23),a(25),a(7)),m=a(11),d=a(12),u=a(16),p=a(13),h=a(17),E=a(3),g=(a(27),a(29),function(e){var t=e.handleClose,a=e.show,n=e.children,o=a?"modal display-block":"modal display-none";return l.a.createElement("div",{className:o},l.a.createElement("section",{className:"modal-main"},n,l.a.createElement("button",{type:"button",onClick:t},"Close")))}),f=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.state={show:!1},e.showModal=e.showModal.bind(Object(E.a)(Object(E.a)(e))),e.hideModal=e.hideModal.bind(Object(E.a)(Object(E.a)(e))),e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{show:this.state.show,handleClose:this.hideModal},l.a.createElement("h1",null,this.props.name),this.props.details?this.props.details.map(function(e){return l.a.createElement("div",null,e," ",l.a.createElement("br",null),l.a.createElement("br",null))}):null),l.a.createElement("div",{className:"card",onClick:this.showModal},l.a.createElement("h1",null,this.props.name),l.a.createElement("img",{style:{width:"95px",height:"95px"},src:this.props.image,alt:"Logo"}),";",l.a.createElement("p",null,"Everything is here")))}}]),t}(n.Component),b=a(6),v=a.n(b),w=a(14),C=a.n(w),y=a(15),k=a.n(y);var x=function(){var e=[{name:"Moka pot",image:v.a},{name:"Pour over",image:C.a},{name:"Cold brew",image:k.a}].map(function(e){return l.a.createElement(f,{key:e,name:e.name,image:e.image})});return l.a.createElement(s.a,{scrollAxis:"horizontal"},l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Coffee Ratio"),l.a.createElement("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"}},l.a.createElement(i.b,{to:"/glinder"},"Glinder")),l.a.createElement("h2",null,"Select your Coffee process"),e,l.a.createElement("div",{style:{height:"2000px"}})))};var O=function(){var e=[{name:"Timemore C2",image:v.a,details:["Espresso: 10-14 Clicks","Pour Over: 18-24 Clicks","French Press: 25-27 Clicks"]}].map(function(e){return l.a.createElement(f,{key:e,name:e.name,image:e.image,details:e.details})});return l.a.createElement(s.a,{scrollAxis:"horizontal"},l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Glinder Setting"),l.a.createElement("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"}},l.a.createElement(i.b,{to:"/"},"Homepage")),l.a.createElement("h2",null,"Select your glinder"),e))},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,32)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)})};r.a.render(l.a.createElement(i.a,{basename:"."},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/",element:l.a.createElement(x,null)}),l.a.createElement(c.a,{path:"glinder",element:l.a.createElement(O,null)}))),document.getElementById("root")),j()}],[[18,3,2]]]);
//# sourceMappingURL=main.dd1b9e96.chunk.js.map