(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c.n(s),n=(c(15),c(10)),a=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},j=c(8),b=c(6),m=c.n(b),u=c(9),v=c.n(u),h=(c(21),function(e){var t=e.addMovie,c=Object(r.useState)(""),s=Object(a.a)(c,2),i=s[0],n=s[1],d=Object(r.useState)(),b=Object(a.a)(d,2),u=b[0],h=b[1],O=Object(r.useState)(!1),x=Object(a.a)(O,2),f=x[0],p=x[1],N=function(){var e=Object(j.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,c=i,fetch("".concat("https://www.omdbapi.com/?apikey=4e95fcdc&t=").concat(c)).then((function(e){if(!e.ok)throw new Error;return e.json()}));case 4:if("False"!==(t=e.sent).Response){e.next=8;break}return p(!0),e.abrupt("return");case 8:if((null===u||void 0===u?void 0:u.imdbID)!==t.imdbID){e.next=10;break}return e.abrupt("return");case 10:n(""),h({Poster:t.Poster,Title:t.Title,Plot:t.Plot,imdbID:t.imdbID});case 12:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{value:i,onChange:function(e){p(!1),n(e.target.value)},type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input",{"is-danger":f})})}),f&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:function(){N()},children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",disabled:f,onClick:function(){t(u)},children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),u&&Object(l.jsx)(o,{movie:u})]})]})}),O=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{addMovie:function(e){e&&(c.some((function(t){return t.imdbID===e.imdbID}))||s([].concat(Object(n.a)(c),[e])))}})})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a2dbdd9e.chunk.js.map