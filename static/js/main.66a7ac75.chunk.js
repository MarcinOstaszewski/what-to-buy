(this["webpackJsonpwhat-to-buy"]=this["webpackJsonpwhat-to-buy"]||[]).push([[0],{10:function(e,t,a){e.exports={TopMenu:"TopMenu_TopMenu__1GqW0",true:"TopMenu_true__vXCSI"}},21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(15),c=a.n(r),s=(a(26),a(16)),i=a(11),u=a(17),d=a(18),l=a(20),p=a(19),h=a(10),_=a.n(h),y=function(e){return n.a.createElement("div",{id:"dddafad",className:_.a.TopMenu},n.a.createElement("div",{onClick:e.funcUndoRedo,"data-dir":"u",className:_.a[e.undo],disabled:0===e.undo},"Undo"),n.a.createElement("div",{onClick:e.funcUndoRedo,"data-dir":"r",className:_.a[e.redo],disabled:0===e.redo},"Redo"),n.a.createElement("div",{"data-value":1,onClick:e.changeFontSize,style:{fontSize:"24px"}},n.a.createElement("span",null,"A")),n.a.createElement("div",{"data-value":-1,onClick:e.changeFontSize,style:{fontSize:"12px",lineHeight:"44px"}},n.a.createElement("span",null,"A")))},m=a(7),f=a.n(m),w=a(8);w.initializeApp({apiKey:"AIzaSyB_psG_2HT8VisbjB3szsMjZsnlfQIS9ko",authDomain:"what-to-buy-94750.firebaseapp.com",databaseURL:"https://what-to-buy-94750.firebaseio.com",projectId:"what-to-buy-94750",storageBucket:"what-to-buy-94750.appspot.com",messagingSenderId:"194092546135",appId:"1:194092546135:web:7661e65a00a7f2aa390b12",measurementId:"G-XWZR1H0ZMY"});var v=w.database(),g=(new w.auth.GoogleAuthProvider,function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={zakupy:{"pobieranie danych...":!0},categories:{},fontSize:16,undo:[],redo:[]},e.dbRef="categories",e.changeFontSize=function(t){console.log(parseInt(t.target.dataset)),e.setState({fontSize:parseInt(e.state.fontSize)+parseInt(t.target.dataset.value)})},e.funcUndoRedo=function(t){var a,o,n=t.target.dataset.dir,r=Object(i.a)(e.state.undo),c=Object(i.a)(e.state.redo);"u"===n&&(a=r.pop(),c.push(a),v.ref("".concat(e.dbRef,"/").concat(a.category,"/products/").concat(a.name)).set(a.value)),"r"===n&&((o=c.pop()).value=0===o.value?1:0,r.push(o),v.ref("".concat(e.dbRef,"/").concat(o.category,"/products/").concat(o.name)).set(o.value)),console.log(a,o,r,c),e.setState({undo:r,redo:c})},e.moveProduct=function(t){var a=t.target.dataset.name,o=t.target.dataset.category,n=0===parseInt(t.target.dataset.value)?1:0;v.ref("".concat(e.dbRef,"/").concat(o,"/products/").concat(a)).set(n);var r=Object(i.a)(e.state.undo);r.push({name:a,category:o,value:parseInt(t.target.dataset.value)}),e.setState({undo:r})},e.updateProductsFromDb=function(t){v.ref(t).on("value",(function(a){var o=a.val();e.setState(Object(s.a)({},t,o))}),(function(e){console.log(e.code,e)}))},e.removeDiacrits=function(e){return e.replace(/[\u0105\u0107\u0119\u0142\u0144\xf3\u015b\u017a\u017c]/gi,"x")},e.categorySpan=function(t,a,o){return n.a.createElement("span",{className:f.a[e.removeDiacrits(o)],key:t+a},o.toUpperCase())},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.updateProductsFromDb("".concat(this.dbRef))}},{key:"render",value:function(){var e=this,t=[],a=[];return Object.keys(this.state.categories).forEach((function(o,r){var c=e.state.categories[o],s=[],i=[];Object.keys(c.products).forEach((function(t,a){var r=n.a.createElement("div",{className:[f.a.product,f.a[e.removeDiacrits(o)]].join(" "),key:e.removeDiacrits(o)+a,"data-name":t,"data-category":o,onClick:e.moveProduct,"data-value":c.products[t]},t.replace(/_/g," "));c.products[t]?s.push(r):i.push(r)})),s.length>0&&t.push(e.categorySpan(t,r,o)),t.push.apply(t,s),i.length>0&&a.push(e.categorySpan(a,r,o)),a.push.apply(a,i)})),n.a.createElement("div",{className:f.a.list,style:{fontSize:this.state.fontSize}},n.a.createElement(y,{changeFontSize:this.changeFontSize,funcUndoRedo:this.funcUndoRedo,undo:0===this.state.undo.length,redo:0===this.state.redo.length}),n.a.createElement("p",null,"Do kupienia:"),n.a.createElement("div",{className:f.a.toBuy},t),n.a.createElement("hr",null),n.a.createElement("div",{className:f.a.theRest},a))}}]),a}(o.Component));a(37);var S=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports={list:"ShowList_list__3ulZj",category:"ShowList_category__2UWnV",product:"ShowList_product__KkwLr",chemia:"ShowList_chemia__aDB_2",pieczywo:"ShowList_pieczywo__g4ZEQ",nabiax:"ShowList_nabiax__3B3CQ",napoje:"ShowList_napoje__1IS8g",uxywki:"ShowList_uxywki__1Gdf0",sxodycze:"ShowList_sxodycze__BMK1Z",kasze:"ShowList_kasze__dSkKD",sypkie:"ShowList_sypkie__Qe3Bz",przyprawy:"ShowList_przyprawy__h0hFz",makarony:"ShowList_makarony__31evg",mixso_ryby:"ShowList_mixso_ryby__2wokS",owoce:"ShowList_owoce__264Rc",warzywa:"ShowList_warzywa__1t9qB",konserwy:"ShowList_konserwy__323G5",przybory:"ShowList_przybory__1Kh4D",toBuy:"ShowList_toBuy__PJrhx",theRest:"ShowList_theRest__1Ih5C"}}},[[21,1,2]]]);
//# sourceMappingURL=main.66a7ac75.chunk.js.map