(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{60:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(43),r=n.n(c),s=n(9),o=n(84),i=n(80),j=n(85),u=n(81),b=n(82),l=n(79),O=n(86),d=n(2);function x(e){e.counter;var t=a.useState(""),n=Object(s.a)(t,2),c=n[0],r=n[1],x=a.useState(!1),h=Object(s.a)(x,2),p=h[0],m=h[1],v=a.useState("Choose wisely"),f=Object(s.a)(v,2),w=f[0],S=f[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),"best"===c?(S("You got it!"),m(!1)):"worst"===c?(S("Sorry, wrong answer!"),m(!0)):(S("Please select an option."),m(!0))},children:Object(d.jsxs)(i.a,{sx:{m:3},component:"fieldset",error:p,variant:"standard",children:[Object(d.jsx)(j.a,{component:"legend",children:"Pop quiz: MUI is..."}),Object(d.jsxs)(u.a,{"aria-label":"quiz",name:"quiz",value:c,onChange:function(e){r(e.target.value),S(" "),m(!1)},children:[Object(d.jsx)(b.a,{value:"best",control:Object(d.jsx)(l.a,{}),label:"The best!"}),Object(d.jsx)(b.a,{value:"worst",control:Object(d.jsx)(l.a,{}),label:"The worst."})]}),Object(d.jsx)(O.a,{children:w}),Object(d.jsx)(o.a,{sx:{mt:1,mr:1},type:"submit",variant:"outlined",children:"Check Answer"})]})})}function h(){return Object(d.jsx)(x,{counter:0})}function p(){var e=a.useState(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(d.jsx)(o.a,{variant:"contained",onClick:function(){c(!0)},children:"Start Test"});return n?r:Object(d.jsx)(h,{})}r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.ce5e2cc7.chunk.js.map