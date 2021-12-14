(this["webpackJsonpuniversal-currency-converter"]=this["webpackJsonpuniversal-currency-converter"]||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var a,r,i,o,c,u,l,s,d=t(1),g=t.n(d),b=t(11),h=t.n(b),f=t(4),p=function(e,n){var t=Object(d.useState)((function(){return null===localStorage.getItem(e)?n:JSON.parse(localStorage.getItem(e))})),a=Object(f.a)(t,2),r=a[0],i=a[1];return Object(d.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[r]),[r,i]},j={EN:{headerTitle:"Currency converter",currentTitle:"Current currency",inputPlaceholder:"Amount in ",targetCurrencyLabel:"Chosen currency:",targetTitle:"Chosen currency",resultTitle:"Calculated amount",clockLabel:"Today is ",loadingMessage:"Loading... please wait",errorMessage:"Unable to fetch data...\nplease check your internet connection.",mainButtonLabel:"Switch currencies",resetButtonLabel:"Clear",dateLabel:"*rate valid on: "},PL:{headerTitle:"Przelicznik walut",currentTitle:"Bie\u017c\u0105ca waluta",inputPlaceholder:"Kwota w ",targetCurrencyLabel:"Wybrana waluta:",targetTitle:"Wybrana waluta",resultTitle:"Otrzymana kwota",clockLabel:"Dzisiaj jest ",loadingMessage:"Pobieranie danych...",errorMessage:"Nie uda\u0142o si\u0119 pobra\u0107 danych...\nsprawd\u017a swoje po\u0142\u0105czenie internetowe",mainButtonLabel:"Prze\u0142\u0105cz waluty",resetButtonLabel:"Wyczy\u015b\u0107",dateLabel:"*wg kursu z dnia: "}},m=t(8),x=t.n(m),O=t(12),v=function(e,n){return["https://api.exchangerate.host/latest","?base=",e||"EUR",n&&"&v=",n||""].join("")},k=function(){var e=Object(O.a)(x.a.mark((function e(n,t){var a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v(n,t),e.prev=1,e.next=4,fetch(a,{mode:"cors"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("No response");case 7:return e.next=9,r.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(1),console.error(e.t0.message),e.abrupt("return",{success:!1});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n,t){return e.apply(this,arguments)}}(),y={AUD:"Australian Dollar",BGN:"Bulgarian Lev",BRL:"Brazilian real",CAD:"Canadian dollar",CHF:"Swiss franc",CLP:"Peso",CNY:"Yuan renminbi",CZK:"Czech Koruna",DKK:"Danish Krone",EUR:"Euro",GBP:"Pound sterling",HKD:"Hong Kong Dollar",HRK:"Croatian Kuna",HUF:"Hungarian Forint",IDR:"Indonesian rupee",ILS:"Israel new shekel",INR:"Rupee",ISK:"Icelandic Krona",JPY:"Japanese yen",KRW:"South Korean won",MXN:"Mexican Peso",MYR:"Malaysian ringgit",NOK:"Norwegian krone",NZD:"New Zealand dollar",PHP:"Philippine Peso",PLN:"Polish zloty",RON:"Romanian Leu",RUB:"Russian ruble",SEK:"Swedish Krona",SGD:"Singapore dollar",THB:"Thailand bat",TRY:"Turkish lira",UAH:"Ukrainian hryvnia",USD:"US dollar",XDR:"Special Drawing Rights",ZAR:"South African rand"},w={AUD:"Dolar australijski",BGN:"Lew bu\u0142garski",BRL:"Real brazylijski",CAD:"Dolar kanadyjski",CHF:"Frank szwajcarski",CLP:"Peso",CNY:"Yuan renminbi",CZK:"Korona czeska",DKK:"Korona du\u0144ska",EUR:"Euro",GBP:"Funt szterling",HKD:"Dolar hongko\u0144ski",HRK:"Kuna chorwacka",HUF:"Forint w\u0119gierski",IDR:"Rupia Indonezyjska",ILS:"Nowy szekel Izraelski",INR:"Rupia",ISK:"Korona islandzka",JPY:"Jen japo\u0144ski",KRW:"Won Po\u0142udniowokorea\u0144ski",MXN:"Peso meksyka\u0144skie",MYR:"Ringgit malezyjski",NOK:"Korona norweska",NZD:"Dolar nowozelandzki",PHP:"Peso filipi\u0144skie",PLN:"Polski z\u0142oty",RON:"Lej rumu\u0144ski",RUB:"Rubel rosyjski",SEK:"Korona szwedzka",SGD:"Dolar singapurski",THB:"Bat Tajski",TRY:"Lira turecka",UAH:"Hrywna ukrai\u0144ska",USD:"Dolar ameryka\u0144ski",XDR:"SDR (MFW)",ZAR:"Rand RPA"},A=t(3),C=t(2),S=C.c.p(a||(a=Object(A.a)(["\n    font-size: 12px;\n    text-align: right;\n    min-height: 13px;\n"]))),R=t(0),L=function(e){var n=e.text;return Object(R.jsx)(S,{children:n})},T=C.c.div(r||(r=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: ",") {\n            flex-direction: column;\n            align-items: center;\n    }\n"])),(function(e){return e.theme.breakpoint.xs})),D=C.c.button(i||(i=Object(A.a)(["\n    color: ",";\n    background-color: ",";\n    border: none;\n    display: inline-block;\n    border-radius: 20px;\n    padding: 8px 16px;\n    margin: 5px 10px;\n    width: 45%;\n\n    @media (max-width: ",") {\n        width: 100%;\n    }\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"])),(function(e){return e.theme.color.elementsText}),(function(e){var n=e.theme;return function(e){return e.reset?n.color.crimson:n.color.emerald}}),(function(e){return e.theme.breakpoint.xs})),z=function(e){var n=e.languages,t=e.language,a=e.onButtonClick;return Object(R.jsxs)(T,{children:[Object(R.jsx)(D,{onClick:a,children:n[t].mainButtonLabel}),Object(R.jsx)(D,{reset:!0,type:"reset",children:n[t].resetButtonLabel})]})},K=C.c.fieldset(o||(o=Object(A.a)(["\n    min-height: 100px;\n    border-radius: 20px;\n    padding: 16px 32px;\n    margin-bottom: 10px;\n    min-height: 128px;\n"]))),B=C.c.legend(c||(c=Object(A.a)(["\n    color: ",";\n    background-color: ",";\n    padding: 8px 24px;\n    border-style: none;\n    border-radius: 20px;\n    text-align: center;\n    width: 200px;\n"])),(function(e){return e.theme.color.elementsText}),(function(e){return e.theme.color.elementsBackground})),N=function(e){var n=e.title,t=e.children;return Object(R.jsxs)(K,{children:[Object(R.jsx)(B,{children:n}),t]})},P=C.c.span(u||(u=Object(A.a)(["\n    display: block;\n    min-width: 125px;\n"]))),E=function(e){var n=e.text;return Object(R.jsx)(P,{children:n})},I=C.c.label.attrs((function(e){return{type:"text",direction:e.vertical?"column":"row"}}))(l||(l=Object(A.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n\n    @media (max-width: ",") {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n"])),(function(e){return e.direction}),(function(e){return e.theme.breakpoint.sm})),F=t(19),U=t(5),V=t(16),H=t(17),Q=t(20),M=t(18),W=["element","onChange","value","minLength","debounceTimeout","inputRef"],G=function(e){Object(Q.a)(t,e);var n=Object(M.a)(t);function t(e){var a;Object(V.a)(this,t),(a=n.call(this,e)).onChange=function(e){e.persist();var n=a.state.value,t=a.props.minLength;a.setState({value:e.target.value},(function(){var r=a.state.value;r.length>=t?a.notify(e):n.length>r.length&&a.notify(Object(U.a)(Object(U.a)({},e),{},{target:Object(U.a)(Object(U.a)({},e.target),{},{value:""})}))}))},a.createNotifier=function(e){if(e<0)a.notify=function(){return null};else if(0===e)a.notify=a.doNotify;else{var n=function(e,n){var t=null;return function(){for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];window.clearTimeout(t),t=window.setTimeout((function(){e.apply(null,r)}),n)}}((function(e){a.isDebouncing=!1,a.doNotify(e)}),e);a.notify=function(e){a.isDebouncing=!0,n(e)},a.flush=function(){return n.flush()},a.cancel=function(){a.isDebouncing=!1,n.cancel()}}},a.doNotify=function(){var e=a.props.onChange;e.apply(void 0,arguments)},a.forceNotify=function(e){var n=a.props.debounceTimeout;if(a.isDebouncing||!(n>0)){a.cancel&&a.cancel();var t=a.state.value,r=a.props.minLength;t.length>=r?a.doNotify(e):a.doNotify(Object(U.a)(Object(U.a)({},e),{},{target:Object(U.a)(Object(U.a)({},e.target),{},{value:t})}))}},a.isDebouncing=!1,a.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var r=a.props.debounceTimeout;return a.createNotifier(r),a}return Object(H.a)(t,[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var n=this.props,t=n.value,a=n.debounceTimeout,r=e.debounceTimeout,i=e.value,o=this.state.value;"undefined"!==typeof t&&i!==t&&o!==t&&this.setState({value:t}),a!==r&&this.createNotifier(a)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e=this.props,n=e.element,t=(e.onChange,e.value,e.minLength,e.debounceTimeout,e.inputRef),a=Object(F.a)(e,W),r=this.state.value;return g.a.createElement(n,Object(U.a)(Object(U.a)(Object(U.a)({},a),t),{},{value:r,onChange:this.onChange}))}}]),t}(g.a.PureComponent);G.defaultProps={element:"input",className:"input",type:"text",value:void 0,minLength:0,debounceTimeout:100,inputRef:void 0};var Z,Y,J,X,q,$,_,ee,ne,te,ae,re,ie,oe,ce=Object(C.c)(G)(s||(s=Object(A.a)(["\n    width: 100%;\n    border-radius: 8px;\n    height: 32px;\n    padding-left: 8px;\n"]))),ue=C.c.select(Z||(Z=Object(A.a)(["\n    width: 100%;\n    border-radius: 8px;\n    height: 32px;\n    padding-left: 8px;\n"]))),le=C.c.form(Y||(Y=Object(A.a)(["\n    margin: auto;\n    padding: 12px 24px;\n    border-radius: 24px;\n    background-color: ",";\n    width: ",";\n\n    @media (max-width: ",") {\n        width: 100%;\n    }\n\n    @media (max-width: ",") {\n        padding: 12px;\n    }\n"])),(function(e){return e.theme.color.innerContainerBackground}),(function(e){return e.theme.breakpoint.md}),(function(e){return e.theme.breakpoint.md}),(function(e){return e.theme.breakpoint.sm})),se=C.c.p(J||(J=Object(A.a)(["\n    font-size: 32px;\n    font-weight: 700;\n    line-height: 1.15;\n    margin: 8px auto;\n    min-height: 37px;\n"]))),de=function(e){var n=e.languages,t=e.language,a=e.currentTitle,r=e.targetTitle,i=e.resultTitle,o=Object(d.useState)(null),c=Object(f.a)(o,2),u=c[0],l=c[1],s=Object(d.useState)(""),g=Object(f.a)(s,2),b=g[0],h=g[1],j=p("currentCurrency","EUR"),m=Object(f.a)(j,2),x=m[0],O=m[1],v=p("targetCurrency","PLN"),A=Object(f.a)(v,2),C=A[0],S=A[1],T=Object(d.useState)([]),D=Object(f.a)(T,2),K=D[0],B=D[1],P=Object(d.useState)(""),F=Object(f.a)(P,2),U=F[0],V=F[1],H=null===u||void 0===u?void 0:u.date,Q=null===u||void 0===u?void 0:u.rates,M=null===u||void 0===u?void 0:u.success;Object(d.useEffect)((function(){V(b>0&&void 0!==H?"".concat(n[t].dateLabel).concat(H):"")}),[u]);var W="PL"===t?w:y,G=null;Q&&(G=Object.fromEntries(Object.entries(Q).filter((function(e){var n=Object(f.a)(e,1)[0];return Object.keys(W).includes(n)}))));var Z=function(){if(G)return Object.values(G)[Object.keys(G).findIndex((function(e){return e===x}))]/Object.values(G)[Object.keys(G).findIndex((function(e){return e===C}))]}(),Y=new Date(Date.now()).toISOString().substring(0,10),J=function(){k(x,Y).then((function(e){return l(e)})).then((function(){B(Z&&b>0?[(b/Z).toFixed(2)," ",C]:"")}))};Object(d.useEffect)((function(){setTimeout((function(){J()}),500)}),[b,x,C]);return Object(R.jsxs)(le,{onSubmit:function(e){e.preventDefault()},onReset:function(e){e.preventDefault(),h(""),B(""),V("")},children:[Object(R.jsx)(N,{title:a,children:Object(R.jsxs)(I,{children:[Object(R.jsx)(ce,{value:b,placeholder:n[t].inputPlaceholder+x,type:"number",min:"0.01",step:"any",onChange:function(e){var n=e.target;return h(n.value)},minLength:0,debounceTimeout:500}),Object(R.jsx)(ue,{name:"currentCurrency",value:x,onChange:function(e){var n=e.target;O(n.value)},children:W?Object.keys(W).map((function(e,n){return Object(R.jsxs)("option",{value:e,children:[e," - ",Object.values(W)[Object.keys(W).indexOf(e)]]},e)})):Object(R.jsx)("option",{children:n[t].loadingMessage})})]})}),Object(R.jsx)(N,{title:r,children:Object(R.jsxs)(I,{vertical:!0,children:[void 0===M&&Object(R.jsx)(E,{text:n[t].loadingMessage}),!1===M&&Object(R.jsx)(E,{text:n[t].errorMessage}),!0===M&&Object(R.jsx)(ue,{name:"targetCurrency",value:C,onChange:function(e){var n=e.target;S(n.value)},children:G&&Object.keys(G).map((function(e,n){return Object(R.jsxs)("option",{value:e,children:[(1/Object.values(G)[n]).toFixed(4)," - ",e," - ",Object.values(W)[Object.keys(W).indexOf(e)]]},e)}))})]})}),Object(R.jsxs)(N,{title:i,children:[Object(R.jsx)(se,{children:K}),Object(R.jsx)(L,{text:U}),Object(R.jsx)(z,{languages:n,language:t,onButtonClick:function(){var e=x;O(C),S(e)}})]})]})},ge=C.c.div(X||(X=Object(A.a)(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n"]))),be=C.c.p(q||(q=Object(A.a)(["\n    font-family: monospace;\n    font-size: 12px;\n    margin: 0 0 8px 0;\n    text-align: center;\n"]))),he=C.c.span($||($=Object(A.a)(["\n    margin-right: 8px;\n    \n    @media (max-width: ",") {\n        display: none;\n    }\n"])),(function(e){return e.theme.breakpoint.md})),fe=function(e){var n=e.languages,t=e.language,a=function(){var e=Object(d.useState)(new Date),n=Object(f.a)(e,2),t=n[0],a=n[1];return Object(d.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return Object(R.jsx)(ge,{children:Object(R.jsxs)(be,{children:[Object(R.jsxs)(he,{children:[n[t].clockLabel," ",a.toLocaleString(t,{weekday:"long"})]}),a.toLocaleString(t,{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"})]})})},pe=C.c.div(_||(_=Object(A.a)(["\n    text-align: right;\n\n    @media (max-width: ",") {\n        margin-left: 8px;\n    }\n"])),(function(e){return e.theme.breakpoint.sm})),je=C.c.button(ee||(ee=Object(A.a)(["\n    background-color: transparent;\n    background-position: center;\n    border: none;\n    margin: 2px;\n    border-radius: 2px;\n"]))),me=function(e){var n=e.languages,t=e.setLanguage,a=function(e){var n=e.target;t(n.value)};return Object(R.jsx)(pe,{children:Object.keys(n).map((function(e){return Object(R.jsx)(je,{value:e,onClick:a,style:{backgroundImage:"url(".concat("PL"===e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAidJREFUWIXtl7FuE0EQhr/Zm7sz8QVFyBSIygUFr0BBeAZeh5J3oKGngKfII6RwB4qMqJCCTGQsn2PPUNze5WISiOwzbjKSvV55T/83M7uzc7Bnk1t+3zTf1vymeS0i/4DpGqIZFWA8Hj8xs6zX61GWpQDkec5isegExN0b7/M89/l8DjAZDocTGY1GbwaDwds0TQEQ2ZXz4O6ICO7ObDYrx+PxS03T9NXR0RGqujPhmyzLsvz09PRFWC6XyS69vs1EBDPT8N+V1yyEsF+G/UfgHuAe4B5g3wB6/v4dDx8PSK4VJGldyNuU6VYL4B6nDu7MLy/5+fkLOvn0kR/9XgXg4CJIEKjvh23uifoWjuLuDmbgRmnGxXRGIFQL3Cy2KPLnw5up32mVBgVRJ4QYdnEQqThq5903z0TLD6nT4BBWkKSgSQahByFcidNkoBbeUL0VPW/EPQI4YQGqB0Zy4CSJV0ISRUVa+3DDNDTet8QjWLICLUH1AWjhhOBX4tDRKYgUjXD8MlBz0gWo9kEPnSAOYiDxODZedwAAESLCuOHmVQSywtHCkWAx7HEfdNKlr3Xh7jEd1Ud/WRWB5NAJ66GXmDcR7nqk/grha5EwSPugZ5fLr0+LgNAqPi2Pu6hD10DiH7YyG01W3yTLsufPHoXXmnhW9YdBdtEmGoCZV4NxMef72Xn5ofYviaMcHx8znU4779OLonCAk5MTaMoRtq+X0202Vbf2G0PL9Fg33ZVqAAAAAElFTkSuQmCC":"data:image/png;base64,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",")"),width:"32px",height:"24px"}},e)}))})},xe=C.c.h1(ne||(ne=Object(A.a)(["\n    display: inline-block;\n    margin: 0;\n\n    @media (max-width: ",") {\n        font-size: 28px;\n        margin-bottom: 16px;\n    }\n"])),(function(e){return e.theme.breakpoint.sm})),Oe=C.c.header(te||(te=Object(A.a)(["\n    width: 100%;\n    color: ",";\n    background-color: ",";\n    min-height: 80px;\n    "])),(function(e){return e.theme.color.elementsText}),(function(e){return e.theme.color.elementsBackground})),ve=C.c.div(ae||(ae=Object(A.a)(["\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px 24px;\n    max-width: ",";\n    \n    @media (max-width: ",") {\n        flex-direction: column;\n        padding: 16px;\n    }\n"])),(function(e){return e.theme.breakpoint.xxl}),(function(e){return e.theme.breakpoint.sm})),ke=C.c.div(re||(re=Object(A.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n\n    @media (max-width: ",") {\n        flex-direction: row;\n        margin-bottom: 16px;\n    }\n"])),(function(e){return e.theme.breakpoint.sm})),ye=function(e){var n=e.title,t=e.languages,a=e.language,r=e.setLanguage;return Object(R.jsx)(Oe,{children:Object(R.jsxs)(ve,{children:[Object(R.jsx)(xe,{children:n}),Object(R.jsxs)(ke,{children:[Object(R.jsx)(fe,{languages:t,language:a}),Object(R.jsx)(me,{languages:t,language:a,setLanguage:r})]})]})})},we=C.c.div(ie||(ie=Object(A.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"]))),Ae=t.p+"static/media/background.33e64e6f.png",Ce=Object(C.b)(oe||(oe=Object(A.a)(['\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\n#root {\n  height: 100%;\n}\n\nbody {\n  background-image: url("','");\n  background-size: contain;\n  background-position: center;\n  background-attachment: scroll;\n  background-color: ',";\n  font-family: 'Ubuntu', sans-serif;\n  background-color: ",";\n  height: 100%;\n  margin: 0 auto;\n  min-width: 300px;\n  /* overflow-y: hidden; */\n}"])),Ae,(function(e){return e.theme.color.background}),(function(e){return e.theme.color.background})),Se={color:{background:"#ddd",innerContainerBackground:"rgb(238 238 238 / 75%)",elementsText:"#ebe6dc",elementsBackground:"#133246",crimson:"#DC143C",emerald:"#086522"},breakpoint:{xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"}},Re=function(e){var n=e.children;return Object(R.jsxs)(C.a,{theme:Se,children:[Object(R.jsx)(Ce,{}),n]})},Le=function(){var e=p("language","EN"),n=Object(f.a)(e,2),t=n[0],a=n[1];return document.title=j[t].headerTitle,Object(d.useEffect)((function(){caches.keys().then((function(e){e.forEach((function(e){caches.delete(e)}))})),console.log("Complete Cache Cleared")}),[]),Object(R.jsx)(Re,{children:Object(R.jsxs)(we,{children:[Object(R.jsx)(ye,{languages:j,language:t,setLanguage:a,title:j[t].headerTitle}),Object(R.jsx)(we,{children:Object(R.jsx)(de,{languages:j,language:t,currentTitle:j[t].currentTitle,inputLabel:j[t].inputLabel,targetTitle:j[t].targetTitle,resultTitle:j[t].resultTitle,resultLabel:j[t].resultLabel})})]})})},Te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),i(e),o(e)}))};h.a.render(Object(R.jsx)(g.a.StrictMode,{children:Object(R.jsx)(Le,{})}),document.getElementById("root")),Te()}},[[29,1,2]]]);
//# sourceMappingURL=main.abb82aeb.chunk.js.map