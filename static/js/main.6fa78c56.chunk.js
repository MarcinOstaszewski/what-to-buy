(this["webpackJsonpwhat-to-buy"]=this["webpackJsonpwhat-to-buy"]||[]).push([[0],{10:function(e,t,a){e.exports={backDrop:"Modal_backDrop__1X4vu",visible:"Modal_visible__2SMZK",modalWindow:"Modal_modalWindow__16Crz",newCategoryName:"Modal_newCategoryName__e8lG8",hideBackDrop:"Modal_hideBackDrop__1qf7m"}},11:function(e,t,a){e.exports={list:"ShowList_list__3ulZj",categoryName:"ShowList_categoryName__30IIg",category:"ShowList_category__2UWnV",product:"ShowList_product__KkwLr",toBuy:"ShowList_toBuy__PJrhx",theRest:"ShowList_theRest__1Ih5C"}},14:function(e,t,a){e.exports={TopMenu:"TopMenu_TopMenu__1GqW0",true:"TopMenu_true__vXCSI"}},15:function(e,t,a){e.exports={checkboxContainer:"ProductWithCheckbox_checkboxContainer__1UHTy",checkmark:"ProductWithCheckbox_checkmark__1RLcK",prodName:"ProductWithCheckbox_prodName__2N05W"}},25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var o=a(1),c=a.n(o),n=a(20),r=a.n(n),i=(a(30),a(5)),s=a(12),l=a(16),d=a(21),u=a(22),m=a(24),h=a(23),p=a(14),g=a.n(p),y=function(e){return c.a.createElement("div",{id:"dddafad",className:g.a.TopMenu},c.a.createElement("div",{onClick:e.funcUndoRedo,"data-dir":"u",className:g.a[e.undo],disabled:0===e.undo},"Undo"),c.a.createElement("div",{onClick:e.funcUndoRedo,"data-dir":"r",className:g.a[e.redo],disabled:0===e.redo},"Redo"),c.a.createElement("div",{"data-value":1,onClick:e.changeFontSize},"A+"),c.a.createElement("div",{"data-value":-1,onClick:e.changeFontSize},"a-"))},k=a(8),v=a.n(k),C=function(e){var t;"radio"===e.type&&(t=c.a.createElement("span",{className:v.a.checkmark}));var a,o,n,r=e.width?e.width:12,i=e.disabled;return"switch"===e.type?(o="switch",n="moveHigher",a=c.a.createElement("div",null,c.a.createElement("input",{id:e.id,value:e.value,type:"checkbox",onChange:e.onChange}),c.a.createElement("span",{className:v.a.slider}))):a=c.a.createElement("input",{type:e.type,id:e.id,value:e.value,onChange:e.onChange,onClick:e.onClick,className:e.clName,name:e.name,disabled:i}),c.a.createElement("div",{key:e.key,className:[v.a.formField,"col-"+r,v.a[e.mainClassName]].join(" ")},c.a.createElement("label",{className:v.a[o]},c.a.createElement("div",{className:v.a[n]},e.text),a,t))},b=a(15),f=a.n(b),w=function(e){var t=e.prod;return c.a.createElement("label",{className:f.a.checkboxContainer,key:t},c.a.createElement("input",{type:"checkbox",id:t,onChange:e.checkProductToDelete,checked:e.checked}),c.a.createElement("span",{className:f.a.prodName},t),c.a.createElement("span",{className:f.a.checkmark}))},_=a(10),N=a.n(_),E=function(e){var t=c.a.createElement("span",{className:["categoryName",e.clickedCategoryHue,e.removeDiacrits(e.categoryClicked)].join(" ")},e.categoryClicked.toUpperCase()),a=[];for(var o in e.productsToDelete)a.push(c.a.createElement(w,{key:o,prod:o,checked:e.productsToDelete[o],checkProductToDelete:e.checkProductToDelete}));for(var n=[],r=0;r<=36;r++){var i="hue-".concat(10*r),s=i===e.newCategoryHue?"chosenHue":"";n.push(c.a.createElement("div",{className:["colorSwatch",i,s].join(" "),id:i,key:i,onClick:e.colorSwatchClicked}))}return c.a.createElement("div",{className:[N.a.backDrop,N.a[e.isModalVisible]].join(" "),onClick:e.hideBackDrop},c.a.createElement("div",{className:[N.a.modalWindow,N.a[e.isModalVisible]].join(" ")},c.a.createElement("div",{className:N.a.hideBackDrop,onClick:e.hideBackDrop}),c.a.createElement("form",{onSubmit:e.submitNewProduct},c.a.createElement("h4",null,"Dodaj produkt do kategorii ",t),c.a.createElement("div",{className:"row"},c.a.createElement(C,{id:"newProductName",text:"Podaj nazw\u0119 produktu",width:"9",value:e.newProductName,onChange:e.handleInputChange}),c.a.createElement(C,{id:"newProductToBuy",text:"Kupi\u0107?",type:"switch",width:"3",mainClassName:"switchContainer",onChange:e.handleInputChange})),c.a.createElement(C,{id:"newProductNameSubmit",clName:"hue-120",type:"submit",value:"Dodaj produkt"})),c.a.createElement("form",{onSubmit:e.deleteSelectedProducts},c.a.createElement("h4",null,"Usu\u0144 produkt/y z kategorii ",t),a,c.a.createElement(C,{id:"deleteProductFromCategory",type:"submit",clName:"hue-0",value:"Usu\u0144 zaznaczone produkty"})),c.a.createElement("form",{onSubmit:e.submitCategoryChange},c.a.createElement("h4",null,"Edytuj kategori\u0119 ",t),c.a.createElement(C,{id:"newCategoryName",text:"Nowa nazwa kategorii",value:e.newCategoryName,onChange:e.handleInputChange}),c.a.createElement("div",{className:"row mt-5"},n),c.a.createElement(C,{id:"newCategoryNameSubmit",type:"submit",clName:"hue-30",value:"Zmie\u0144 nazw\u0119 i / lub kolor kategorii"}))))},S=a(9);S.initializeApp({apiKey:"AIzaSyB_psG_2HT8VisbjB3szsMjZsnlfQIS9ko",authDomain:"what-to-buy-94750.firebaseapp.com",databaseURL:"https://what-to-buy-94750.firebaseio.com",projectId:"what-to-buy-94750",storageBucket:"what-to-buy-94750.appspot.com",messagingSenderId:"194092546135",appId:"1:194092546135:web:7661e65a00a7f2aa390b12",measurementId:"G-XWZR1H0ZMY"});var D=S.database();new S.auth.GoogleAuthProvider;D.ref("categories").once("value").then((function(e){var t=e.val(),a={};Object.keys(t).forEach((function(e){a[e]=1})),D.ref("categoryNames").set(a)}));var P=a(11),j=a.n(P),I=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={categories:{"Pobieranie danych":{products:{"prosz\u0119_czeka\u0107...":1}}},fontSize:16,undo:[],redo:[],newCategoryName:"",newProductName:"",newProductToBuy:0,isModalVisible:"",categoryClicked:"",clickedCategoryHue:"",newCategoryHue:"",productsToDelete:{}},e.dbRef="categories",e.changeFontSize=function(t){console.log(parseInt(t.target.dataset)),e.setState({fontSize:parseInt(e.state.fontSize)+parseInt(t.target.dataset.value)})},e.funcUndoRedo=function(t){var a,o,c=t.target.dataset.dir,n=Object(l.a)(e.state.undo),r=Object(l.a)(e.state.redo);"u"===c&&(a=n.pop(),r.push(a),D.ref("".concat(e.dbRef,"/").concat(a.category,"/products/").concat(a.name)).set(a.value)),"r"===c&&((o=r.pop()).value=0===o.value?1:0,n.push(o),D.ref("".concat(e.dbRef,"/").concat(o.category,"/products/").concat(o.name)).set(o.value)),console.log(a,o,n,r),e.setState({undo:n,redo:r})},e.moveProduct=function(t){var a=t.target.dataset.name,o=t.target.dataset.category,c=0===parseInt(t.target.dataset.value)?1:0;D.ref("".concat(e.dbRef,"/").concat(o,"/products/").concat(a)).set(c);var n=Object(l.a)(e.state.undo);n.push({name:a,category:o,value:parseInt(t.target.dataset.value)}),e.setState({undo:n})},e.updateProductsFromDb=function(t){D.ref(t).on("value",(function(a){var o=a.val();e.setState(Object(s.a)({},t,o))}),(function(e){console.log(e.code,e)}))},e.handleInputChange=function(t){var a=t.target.value;a="newProductName"===t.target.id?a.toLowerCase():"newProductToBuy"===t.target.id?1===e.state.newProductToBuy?0:1:a.toUpperCase(),e.setState(Object(s.a)({},t.target.id,a))},e.checkProductToDelete=function(t){console.log(t.target,t.target.id,Object(i.a)({},e.state.productsToDelete)[t.target.id]);var a=Object(i.a)({},e.state.productsToDelete);a[t.target.id]=!Object(i.a)({},e.state.productsToDelete)[t.target.id],e.setState({productsToDelete:a})},e.handleCategoryClick=function(t){var a=t.target.dataset.name,o={};for(var c in e.state.categories[a].products)o[c]=!1;e.setState({productsToDelete:o,isModalVisible:"visible",categoryClicked:a,clickedCategoryHue:t.target.dataset.hue,newCategoryHue:t.target.dataset.hue,newCategoryName:a.toUpperCase()})},e.hideBackDrop=function(t){t.target===t.currentTarget&&e.setState({isModalVisible:""})},e.removeDiacrits=function(e){return e.replace(/[\u0105\u0107\u0119\u0142\u0144\xf3\u015b\u017a\u017c]/gi,"x")},e.categoryElement=function(t,a,o,n){return c.a.createElement("div",{"data-name":o,className:["categoryName",n,j.a.categoryName,e.removeDiacrits(o)].join(" "),onClick:e.handleCategoryClick,"data-hue":n,key:t+a},o)},e.submitCategoryChange=function(t){t.preventDefault();var a=Object(i.a)({},e.state.categories),o=Object(i.a)({},a[e.state.categoryClicked]);delete a[e.state.categoryClicked];var c=e.state.newCategoryName.toLowerCase();a[c]=o,a[c].hue=parseInt(e.state.newCategoryHue.slice(4)),console.log(a[c].hue,e.state.newCategoryHue.slice(4)),e.setState({isModalVisible:!1}),D.ref("".concat(e.dbRef,"/")).set(a)},e.submitNewProduct=function(t){t.preventDefault();var a=Object(i.a)({},e.state.categories[e.state.categoryClicked].products);a[e.state.newProductName]=e.state.newProductToBuy,console.log(e.state.newProductName),D.ref("".concat(e.dbRef,"/").concat(e.state.categoryClicked,"/products/")).set(a)},e.deleteSelectedProducts=function(t){t.preventDefault();var a=Object(i.a)({},e.state.categories),o=Object(i.a)({},a[e.state.categoryClicked].products);for(var c in console.log(o,e.state.productsToDelete),o)e.state.productsToDelete[c]&&delete o[c];e.setState({isModalVisible:!1}),D.ref("".concat(e.dbRef,"/").concat(e.state.categoryClicked,"/products/")).set(o)},e.colorSwatchClicked=function(t){console.log(t.target.id),e.setState({newCategoryHue:t.target.id})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.updateProductsFromDb("".concat(this.dbRef))}},{key:"render",value:function(){var e=this,t=[],a=[];return Object.keys(this.state.categories).forEach((function(o,n){var r=e.state.categories[o],i="hue-"+r.hue,s=[],l=[];Object.keys(r.products).forEach((function(t,a){var n=c.a.createElement("div",{className:["product",i,j.a.product].join(" "),key:e.removeDiacrits(o)+a,"data-name":t,"data-category":o,onClick:e.moveProduct,"data-value":r.products[t]},t.toLowerCase());r.products[t]?s.push(n):l.push(n)})),s.length>0&&t.push(e.categoryElement(t,n,o,i)),t.push.apply(t,s),l.length>0&&a.push(e.categoryElement(a,n,o,i)),a.push.apply(a,l)})),console.log(this.state),c.a.createElement("div",{className:j.a.list,style:{fontSize:this.state.fontSize}},c.a.createElement(y,{changeFontSize:this.changeFontSize,funcUndoRedo:this.funcUndoRedo,undo:0===this.state.undo.length,redo:0===this.state.redo.length}),c.a.createElement("p",null,"Do kupienia:"),c.a.createElement("div",{className:j.a.toBuy},t),c.a.createElement("hr",null),c.a.createElement("div",{className:j.a.theRest},a),c.a.createElement(E,{categoryClicked:this.state.categoryClicked,newCategoryName:this.state.newCategoryName,newProductName:this.state.newProductName,hideBackDrop:this.hideBackDrop,removeDiacrits:this.removeDiacrits,handleInputChange:this.handleInputChange,submitCategoryChange:this.submitCategoryChange,submitNewProduct:this.submitNewProduct,productsToDelete:this.state.productsToDelete,deleteSelectedProducts:this.deleteSelectedProducts,isModalVisible:this.state.isModalVisible,colorSwatchClicked:this.colorSwatchClicked,clickedCategoryHue:this.state.clickedCategoryHue,newCategoryHue:this.state.newCategoryHue,checkProductToDelete:this.checkProductToDelete}))}}]),a}(o.Component);a(41);var T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={formField:"InputField_formField__1aeAu",answerRadio:"InputField_answerRadio__38Ff8",checkmark:"InputField_checkmark__2FKrn",invalid:"InputField_invalid__1BJoB",submit:"InputField_submit__2j43y",switchContainer:"InputField_switchContainer__3xTYm",switch:"InputField_switch__3PWGH",moveHigher:"InputField_moveHigher__1ohim",slider:"InputField_slider__3212e"}}},[[25,1,2]]]);
//# sourceMappingURL=main.6fa78c56.chunk.js.map