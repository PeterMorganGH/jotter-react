(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(28),o=a.n(s),r=a(16),i=a(3),l=a(4),u=a(6),m=a(5),d=a(7),p=a(29),b=a.n(p),h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={content:""},a.onChange=function(e){return a.setState({content:e.target.value})},a.onClick=function(e){e.preventDefault(),a.props.addJot(a.state.content),a.setState({content:""})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"column is-half-desktop"},c.a.createElement("div",{className:"field"},c.a.createElement("textarea",{className:"textarea is-info",placeholder:"Add your jots in markdown",rows:"5",value:this.state.content,onChange:this.onChange})),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button is-info is-outlined",id:"submitButton",onClick:this.onClick},"Submit"))))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"hero is-bold is-info"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"Jotter-React"),c.a.createElement("h2",{className:"subtitle"},"Jotter-React is a React app for storing small, temporary, notes."))))}}]),t}(n.Component),j=a(30),v=a.n(j),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.jots.map(function(t){return c.a.createElement("div",{className:"tile is-child box content",key:t.id},c.a.createElement("button",{className:"button is-danger is-outlined is-small is-pulled-right deleteButton",onClick:e.props.deleteJot.bind(e,t.id)},"Delete"),c.a.createElement(v.a,{source:t.content}))})}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={jots:[]},a.deleteJot=function(e){a.setState({jots:Object(r.a)(a.state.jots.filter(function(t){return t.id!==e}))})},a.addJot=function(e){var t={id:b.a.v4(),content:e};a.setState({jots:[].concat(Object(r.a)(a.state.jots),[t])})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"app"},c.a.createElement(f,null),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns is-desktop"},c.a.createElement(h,{addJot:this.addJot}),c.a.createElement("div",{className:"column is-half-desktop"},c.a.createElement("div",{className:"tile is-ancestor"},c.a.createElement("div",{className:"tile is-parent is-vertical",id:"tileParent"},c.a.createElement(E,{jots:this.state.jots,deleteJot:this.deleteJot}))))))))}}]),t}(n.Component);o.a.render(c.a.createElement(O,null),document.getElementById("root"))},31:function(e,t,a){e.exports=a(121)}},[[31,1,2]]]);
//# sourceMappingURL=main.e69194a5.chunk.js.map