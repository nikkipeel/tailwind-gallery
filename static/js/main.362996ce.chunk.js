(this.webpackJsonptailwindcssgallery=this.webpackJsonptailwindcssgallery||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(9),a(1)),s=function(e){var t=e.image,a=t.tags.split(",");return l.a.createElement("div",{className:"max-w-sm m-2 rounded overflow-hidden shadow-lg bg-gray-800 text-white text-opacity-75"},l.a.createElement("img",{src:t.webformatURL,alt:"",className:"w-full"}),l.a.createElement("div",{className:"px-6 py-4 "},l.a.createElement("div",{className:"font-bold text-teal-400 text-opacity-1 text-xl mb-2"},"Photo by ",t.user),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Views: "),t.views),l.a.createElement("li",null,l.a.createElement("strong",null,"Downloads: "),t.downloads),l.a.createElement("li",null,l.a.createElement("strong",null,"Likes: "),t.likes))),l.a.createElement("div",{className:"px-6 py-4"},a.map((function(e,t){return l.a.createElement("span",{key:t,className:"inline-block bg-teal-200 bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#",e)}))))},m=function(e){var t=e.searchText,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1];return l.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"w-full max-w-sm"},l.a.createElement("div",{className:"flex items-center border-b border-teal-200 py-2"},l.a.createElement("input",{onChange:function(e){return s(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none ",type:"text",placeholder:"Search Image Term","aria-label":"Search Images"}),l.a.createElement("button",{className:"flex-shrink-0 bg-teal-200 hover:bg-teal-800 hover:bg-opacity-75 border-teal-200 hover:border-white focus:outline-none text-sm border-4 text-gray-800 hover:text-white py-1 px-2 rounded",type:"submit"},"Search"))))};var i=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),i=Object(o.a)(c,2),u=i[0],d=i[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),g=b[0],x=b[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("18733361-474eb188f7ea824970cc210d6","&q=").concat(g,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){r(e.hits),d(!1)})).catch((function(e){return console.log(e)}))}),[g]),l.a.createElement("div",{className:"container mx-auto"},l.a.createElement(m,{searchText:function(e){return x(e)}}),!u&&0===a.length&&l.a.createElement("h1",{className:"text-5xl text-center mx-auto mt-32"},"No Images Found"),u?l.a.createElement("h1",{className:"text-6xl text-center mx-auto mt-32"},"Loading..."):l.a.createElement("div",{className:"grid m-2 lg:grid-cols-3 md:grid-cols-2 md:gap-4"},a.map((function(e){return l.a.createElement(s,{key:e.id,image:e})}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.362996ce.chunk.js.map