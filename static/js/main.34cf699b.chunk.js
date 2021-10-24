(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(30),a(31),a(14)),i=a(3),l=a(4),u=a(6),h=a(5),d=(a(32),a(33),a(34),a(9)),p=a(13),b=a.n(p),j=a(23),m=a(24),v=a.n(m),g=function(){function e(t,a){Object(i.a)(this,e),this.base_url=t,this.api_key=a,this._value="",this._page=1}return Object(l.a)(e,[{key:"value",get:function(){return this._value},set:function(e){return this._value=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"incrementPage",value:function(){return this._page+=1}},{key:"resetPage",value:function(){return this._page=1}},{key:"searchImages",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.base_url,"?q=").concat(this.value,"&page=").concat(this.page,"&key=").concat(this.api_key,"&image_type=photo&orientation=horizontal&per_page=12"),e.prev=1,e.next=4,v.a.get(t);case 4:return a=e.sent,n=a.data.hits,e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),f=a(1),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.value.trim())return d.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435!"),void e.props.clearRender();e.props.onSubmit(e.state.value),e.setState({value:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.value,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),y=O,k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onClickGalleryItem=function(){e.props.onClose(e.props.largeImageURL)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("li",{className:"ImageGalleryItem",onClick:this.onClickGalleryItem,children:Object(f.jsx)("img",{src:this.props.webformatURL,alt:this.props.id,className:"ImageGalleryItem-image"})})}}]),a}(n.Component),w=k,C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Button-div",children:Object(f.jsx)("button",{className:"Button",type:"button",onClick:this.props.onClick,children:"LoadMore"})})}}]),a}(n.Component),x=C,S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.arr,a=e.onClose,n=e.handleClick;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(f.jsx)(w,{webformatURL:n,largeImageURL:r,onClose:a},t)}))}),t.length%12===0&&Object(f.jsx)(x,{onClick:n})]})}}]),a}(n.Component),I=S,L=document.querySelector("#modal-root"),R=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(c.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:e,alt:e})})}),L)}}]),a}(n.Component),_=R,N=a(25),U=a.n(N),M=(a(75),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)(U.a,{type:"Circles",color:"#3f51b5",height:100,width:100,timeout:3e3})}}]),a}(n.Component)),F=M,A=new g("https://pixabay.com/api/","23089683-10e6383e94187ff47334541d4"),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:"",arr:[],status:"idle",showModal:!1,largeImageURL:""},e.windowScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.checkLengthArr=function(){0===e.state.arr.length?(d.b.warn("\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435\u0442"),e.setState({status:"idle"})):e.setState({status:"resolved"})},e.handleSubmitForm=function(t){e.setState({value:t})},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e.clearRender=function(){e.setState({status:"idle"})},e.handleClick=function(){A.incrementPage(),A.searchImages().then((function(t){e.setState((function(e){return{arr:[].concat(Object(s.a)(e.arr),Object(s.a)(t)),status:"resolved"}}))})).catch((function(t){console.log(t),e.setState({status:"error"})})),console.log("\u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b handleClick")},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;t.value!==this.state.value&&(this.setState({status:"pending"}),A.resetPage(),A.value=this.state.value,A.searchImages().then((function(e){a.setState({arr:e}),a.checkLengthArr()})).catch((function(e){console.log(e),a.setState({status:"error"})}))),this.windowScroll()}},{key:"render",value:function(){var e=this.state,t=e.arr,a=e.status,n=e.value,r=e.showModal,c=e.largeImageURL,o=this.handleSubmitForm,s=this.clearRender,i=this.handleClick,l=this.toggleModal;return Object(f.jsxs)("div",{children:[Object(f.jsx)(y,{onSubmit:o,clearRender:s}),Object(f.jsx)(d.a,{theme:"colored",autoClose:2e3}),"idle"===a&&Object(f.jsx)("p",{children:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"}),"pending"===a&&Object(f.jsx)("div",{className:"Loader",children:Object(f.jsx)(F,{})}),"resolved"===a&&Object(f.jsx)(I,{arr:t,handleClick:i,onClose:l}),r&&Object(f.jsx)(_,{value:n,onClose:this.toggleModal,largeImageURL:c})]})}}]),a}(n.Component),E=D;o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.34cf699b.chunk.js.map