!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}({3:function(e,t){new Vue({el:"#app",data:{rawCategories:categories,inputTypeOptions:inputTypeOptions,filterTypes:filterTypeOptions,category:{categoryId:"",name:"",description:"",seoDescription:"",isLeaf:!1,properties:[]}},methods:{saveCategory:function(){console.log(JSON.stringify(this.category)),axios.post("/api/v1/category",this.category).then(e=>{console.log(e),console.log(e.data)})},addNewProperty:function(){this.category.properties.push({name:"",required:!0,hasUnits:!1,filterable:!1,filterChoices:[],units:[],input:{type:"fractionalNumber",propertyChoices:[]}})},removeProperty:function(e){this.category.properties.splice(e,1)},addNewChoice:function(e){e.input.propertyChoices.push({name:"",value:""})},removeChoice:function(e,t){t.input.propertyChoices.splice(e,1)},addUnit:function(e){e.units.push({label:"",printLabel:"",threshold:10,nextLabel:""})},removeUnit:function(e,t){t.splice(e,1)},addFilter:function(e){e.filterChoices.push({label:"",printLabel:"",type:""})},removeFilter:function(e,t){t.filterChoices.splice(e,1)}},computed:{categories:function(){const e=t=>{if(!t.processed&&t.categoryId){const r=this.rawCategories.find(e=>e._id===t.categoryId);r.categoryId&&!r.processed&&e(r),t.name=r.name+" > "+t.name,t.processed=!0}};return this.rawCategories.map(t=>(e(t),t))}}})}});