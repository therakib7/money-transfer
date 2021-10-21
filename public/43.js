webpackJsonp([43],{428:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{tinymce:function(){return s.e(61).then(s.bind(null,247))},"date-time-picker":function(){return s.e(59).then(s.bind(null,240))}},data:function(){return{dateOptions:this.$store.state.dateOptions,tinyOptions:{height:300},formType:!1,user_type:"basic",help_type:"video",help:{status:1,title:"",slug:"",basic_video:"",basic_text:"",medium_video:"",medium_text:"",advance_video:"",advance_text:"",categories:[],roles:[],order:null},helpConst:{status:1,title:"",slug:"",basic_video:"",basic_text:"",medium_video:"",medium_text:"",advance_video:"",advance_text:"",categories:[],roles:[],order:null},helpSearch:{title:"",category:[],date_from:"",date_to:"",order_by:""},helps:{},helpCats:[],roles:[],perPage:this.$route.query.per_page,perPageOptions:this.$store.state.perPageOptions,selected:[],selectAll:!1,noData:"",preloader:!0}},watch:{perPage:function(e){var t=this.$route.query.page;this.$router.push({path:document.location.search,query:{page:t,per_page:e}}),this.getLists()}},created:function(){this.getLists();var e=this.$route.query.per_page;this.perPageOptions.find(function(t){return t.value==e})||this.perPageOptions.splice(0,0,{text:e,value:e})},mounted:function(){this.$root.popupModal()},updated:function(){this.$root.dropdownModal()},methods:{select:function(){if(this.selected=[],!this.selectAll)for(var e in this.helps.data)this.selected.push(this.helps.data[e].id)},dataSearch:function(){var e=this.helpSearch,t={};for(var s in e.date_from=e.date_from?e.date_from.toString():"",e.date_to=e.date_to?e.date_to.toString():"",e)if(e[s])if("category"==s)if(e[s].length){var a=e[s].map(function(e){return e.id});t[s]=a.join()}else t[s]="";else t[s]=e[s];else this.$route.query[s]&&(t[s]="");this.$router.push({path:document.location.search,query:t}),this.getLists()},getLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this,a=this.$route.query.per_page,l=t?e:this.$route.query.page;t&&this.$router.push({path:document.location.search,query:{page:l,per_page:a}});var i=this.$route.query,o=Object.keys(i).map(function(e){return e+"="+i[e]}).join("&");axios.get("/api/v1/mt/helps?"+o).then(function(e){s.preloader=!1,s.helps=e.data.helps,s.helpCats=e.data.helpcats,s.roles=e.data.roles,0==s.helps.data.length?s.noData=s.$store.state.noData:s.noData=""}).catch(function(e){s.$store.commit("errorMessages",e)})},newForm:function(){this.formType=!0,this.help=this.helpConst},saveForm:function(){var e=this,t=this,s=t.help;s.categories.length?s.roles.length?(document.getElementById("createModal").style.display="none",this.formType?axios.post("/api/v1/mt/helps",s).then(function(s){e.help=e.helpConst,t.$store.commit("submitMsg","add"),t.getLists()}).catch(function(e){t.$store.commit("errorMessages",e)}):axios.patch("/api/v1/mt/helps/"+s.id,s).then(function(e){t.$store.commit("submitMsg","update"),t.getLists()}).catch(function(e){t.$store.commit("errorMessages",e)})):alert("Select Role"):alert("Select Category")},editForm:function(e){this.formType=!1,this.help=e,this.help.basic_video||(this.help.basic_video=""),this.help.basic_text||(this.help.basic_text=""),this.help.medium_video||(this.help.medium_video=""),this.help.medium_text||(this.help.medium_text=""),this.help.advance_video||(this.help.advance_video=""),this.help.advance_text||(this.help.advance_text=""),this.help.roles.length||(this.help.roles=[{id:0,name:"All"}])},deleteEntry:function(e,t){var s=this;confirm(s.$store.state.confirmDel)&&axios.delete("/api/v1/mt/helps/"+e).then(function(e){s.helps.data.splice(t,1),s.$store.commit("submitMsg","delete")}).catch(function(e){s.$store.commit("errorMessages",e)})},deleteSelected:function(){var e=this;if(0!=e.selected.length){if(confirm(e.$store.state.confirmDel)){var t=this.selected.toString();axios.delete("/api/v1/mt/helps/"+t).then(function(t){e.$store.commit("submitMsg","selectedDelete"),e.selectAll=!1,e.selected=[],e.getLists()}).catch(function(t){e.$store.commit("errorMessages",t)})}}else e.$store.commit("noSelectedMsg")}}}},429:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"component"},[s("div",{staticClass:"component-heading clearfix"},[s("h2",{staticClass:"heading float-left"},[e._v("\n           Help Lists\n        ")]),e._v(" "),s("back-forward")],1),e._v(" "),s("div",{staticClass:"component-body"},[s("div",{directives:[{name:"can",rawName:"v-can",value:"help-create",expression:"'help-create'"}],staticClass:"modal fade",attrs:{id:"createModal"}},[s("div",{staticClass:"modal-dialog modal-lg big-modal",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[e._v("  "+e._s(e.formType?"New":"Update")+" Help")]),e._v(" "),e._m(0)]),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.saveForm()}}},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12 mb-3"},[s("label",{attrs:{for:"status"}},[e._v("Status")]),e._v(" "),s("label",{staticClass:"switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.help.status,expression:"help.status"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.help.status)?e._i(e.help.status,null)>-1:e.help.status},on:{change:function(t){var s=e.help.status,a=t.target,l=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&e.$set(e.help,"status",s.concat([null])):i>-1&&e.$set(e.help,"status",s.slice(0,i).concat(s.slice(i+1)))}else e.$set(e.help,"status",l)}}}),e._v(" "),s("span",{staticClass:"slider round"})])]),e._v(" "),s("div",{staticClass:"col-12 mb-4 outline-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.help.title,expression:"help.title"}],staticClass:"form-control outline",attrs:{placeholder:" ",type:"text",id:"title"},domProps:{value:e.help.title},on:{input:function(t){t.target.composing||e.$set(e.help,"title",t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"title"}},[e._v("Title")])]),e._v(" "),s("div",{staticClass:"col-12 mb-4 outline-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.help.slug,expression:"help.slug"}],staticClass:"form-control outline",attrs:{placeholder:" ",type:"text",id:"slug"},domProps:{value:e.help.slug},on:{input:function(t){t.target.composing||e.$set(e.help,"slug",t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"slug"}},[e._v("Slug")])]),e._v(" "),s("div",{staticClass:"col-12 mb-2"},[s("button",{class:"basic"==e.user_type?"btn btn-sm btn-dark mb-1":"btn btn-sm btn-light border mb-1",attrs:{type:"button"},on:{click:function(t){e.user_type="basic"}}},[e._v("Basic User")]),e._v(" "),s("button",{class:"medium"==e.user_type?"btn btn-sm btn-dark mb-1":"btn btn-sm btn-light border mb-1",attrs:{type:"button"},on:{click:function(t){e.user_type="medium"}}},[e._v("Medium User")]),e._v(" "),s("button",{class:"advance"==e.user_type?"btn btn-sm btn-dark mb-1":"btn btn-sm btn-light border mb-1",attrs:{type:"button"},on:{click:function(t){e.user_type="advance"}}},[e._v("Advance User")])]),e._v(" "),s("div",{staticClass:"col-12 mb-4"},[s("button",{class:"video"==e.help_type?"btn btn-sm btn-dark mb-1":"btn btn-sm btn-light border mb-1",attrs:{type:"button"},on:{click:function(t){e.help_type="video"}}},[e._v("Video Help")]),e._v(" "),s("button",{class:"text"==e.help_type?"btn btn-sm btn-dark mb-1":"btn btn-sm btn-light border mb-1",attrs:{type:"button"},on:{click:function(t){e.help_type="text"}}},[e._v("Text Help")])]),e._v(" "),s("div",{staticClass:"col-12 mb-4"},["basic"==e.user_type&&"video"==e.help_type?[s("tinymce",{attrs:{id:"d1",other_options:e.tinyOptions},model:{value:e.help.basic_video,callback:function(t){e.$set(e.help,"basic_video",t)},expression:"help.basic_video"}})]:"basic"==e.user_type&&"text"==e.help_type?[s("tinymce",{attrs:{id:"d2",other_options:e.tinyOptions},model:{value:e.help.basic_text,callback:function(t){e.$set(e.help,"basic_text",t)},expression:"help.basic_text"}})]:"medium"==e.user_type&&"video"==e.help_type?[s("tinymce",{attrs:{id:"d3",other_options:e.tinyOptions},model:{value:e.help.medium_video,callback:function(t){e.$set(e.help,"medium_video",t)},expression:"help.medium_video"}})]:"medium"==e.user_type&&"text"==e.help_type?[s("tinymce",{attrs:{id:"d4",other_options:e.tinyOptions},model:{value:e.help.medium_text,callback:function(t){e.$set(e.help,"medium_text",t)},expression:"help.medium_text"}})]:"advance"==e.user_type&&"video"==e.help_type?[s("tinymce",{attrs:{id:"d5",other_options:e.tinyOptions},model:{value:e.help.advance_video,callback:function(t){e.$set(e.help,"advance_video",t)},expression:"help.advance_video"}})]:"advance"==e.user_type&&"text"==e.help_type?[s("tinymce",{attrs:{id:"d6",other_options:e.tinyOptions},model:{value:e.help.advance_text,callback:function(t){e.$set(e.help,"advance_text",t)},expression:"help.advance_text"}})]:e._e()],2),e._v(" "),s("div",{staticClass:"col-md-4 mb-4"},[s("label",{staticClass:"o-s-l"},[e._v("Help Category")]),e._v(" "),s("multiselect",{attrs:{options:e.helpCats,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,"preserve-search":!0,label:"name","track-by":"name","preselect-first":!0},scopedSlots:e._u([{key:"tag",fn:function(t){return[s("span",{staticClass:"custom__tag"},[s("span",[e._v(e._s(t.option.name))]),e._v(" "),s("span",{on:{click:function(e){return t.remove(t.option)}}},[e._v("x")])])]}}]),model:{value:e.help.categories,callback:function(t){e.$set(e.help,"categories",t)},expression:"help.categories"}})],1),e._v(" "),s("div",{staticClass:"col-md-4 mb-3"},[s("label",{staticClass:"o-s-l"},[e._v("Help Roles")]),e._v(" "),s("multiselect",{attrs:{options:e.roles,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,"preserve-search":!0,label:"name","track-by":"name","preselect-first":!0},scopedSlots:e._u([{key:"tag",fn:function(t){return[s("span",{staticClass:"custom__tag"},[s("span",[e._v(e._s(t.option.name))]),e._v(" "),s("span",{on:{click:function(e){return t.remove(t.option)}}},[e._v("x")])])]}}]),model:{value:e.help.roles,callback:function(t){e.$set(e.help,"roles",t)},expression:"help.roles"}})],1),e._v(" "),s("div",{staticClass:"col-md-4 mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.help.order,expression:"help.order"}],staticClass:"form-control outline",attrs:{placeholder:" ",type:"number",id:"order"},domProps:{value:e.help.order},on:{input:function(t){t.target.composing||e.$set(e.help,"order",t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"order"}},[e._v("Serial")])])])]),e._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")]),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n                            "+e._s(e.formType?"Create":"Update")+"\n                            ")])])])])])]),e._v(" "),s("div",{staticClass:"modal right fade",attrs:{id:"dataSearch"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[e._m(1),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.dataSearch()}}},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-12 mb-3"},[s("label",{staticClass:"o-s-l"},[e._v("Show")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.perPage,expression:"perPage"}],staticClass:"form-control",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.perPage=t.target.multiple?s:s[0]}}},e._l(e.perPageOptions,function(t){return s("option",{domProps:{value:t.value}},[e._v("\n                                            "+e._s(t.text)+"\n                                        ")])}),0)]),e._v(" "),s("div",{staticClass:"col-12 mb-3 outline-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.helpSearch.title,expression:"helpSearch.title"}],staticClass:"form-control outline",attrs:{placeholder:" ",type:"text",id:"search-title"},domProps:{value:e.helpSearch.title},on:{input:function(t){t.target.composing||e.$set(e.helpSearch,"title",t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"search-title"}},[e._v("Title")])]),e._v(" "),s("div",{staticClass:"col-12 mb-3"},[s("label",{staticClass:"o-s-l"},[e._v("Select Category")]),e._v(" "),s("multiselect",{attrs:{options:e.helpCats,"deselect-label":"","select-label":"",multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,"preserve-search":!0,label:"name","track-by":"name","preselect-first":!0},scopedSlots:e._u([{key:"tag",fn:function(t){return[s("span",{staticClass:"custom__tag"},[s("span",[e._v(e._s(t.option.name))]),e._v(" "),s("span",{on:{click:function(e){return t.remove(t.option)}}},[e._v("x")])])]}}]),model:{value:e.helpSearch.category,callback:function(t){e.$set(e.helpSearch,"category",t)},expression:"helpSearch.category"}})],1),e._v(" "),s("div",{staticClass:"col-12 mb-3"},[s("date-time-picker",{attrs:{placeholder:"Date From"},model:{value:e.helpSearch.date_from,callback:function(t){e.$set(e.helpSearch,"date_from",t)},expression:"helpSearch.date_from"}})],1),e._v(" "),s("div",{staticClass:"col-12 mb-3"},[s("date-time-picker",{attrs:{placeholder:"Date To"},scopedSlots:e._u([{key:"choose-date",fn:function(){return[e._v(e._s(e.$t("date_to")))]},proxy:!0}]),model:{value:e.helpSearch.date_to,callback:function(t){e.$set(e.helpSearch,"date_to",t)},expression:"helpSearch.date_to"}})],1),e._v(" "),s("div",{staticClass:"col-12 mb-3"},[s("label",{staticClass:"o-s-l"},[e._v("Order By")]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.helpSearch.order_by,expression:"helpSearch.order_by"}],staticClass:"form-control",attrs:{id:"search-order-by"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.helpSearch,"order_by",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v("Newer First")]),e._v(" "),s("option",{attrs:{value:"1"}},[e._v("Newer Last")])])]),e._v(" "),e._m(2)])])])])])]),e._v(" "),s("div",{staticClass:"table-actions"},[s("button",{directives:[{name:"can",rawName:"v-can",value:"help-create",expression:"'help-create'"}],staticClass:"btn btn-sm bg-success",attrs:{type:"button","data-toggle":"modal","data-target":"#createModal"},on:{click:function(t){return e.newForm()}}},[s("i",{staticClass:"icon-plus-squared"}),e._v(" Help\n            ")]),e._v(" "),e.selected.length?s("button",{staticClass:"btn btn-sm btn-danger ",on:{click:function(t){return e.deleteSelected()}}},[s("i",{staticClass:"icon-trash-empty"}),e._v(" Delete Selected")]):e._e(),e._v(" "),e._m(3)]),e._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped bg-white"},[s("thead",[s("tr",[s("th",{staticStyle:{width:"20px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],attrs:{type:"checkbox",id:"check-all"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{click:e.select,change:function(t){var s=e.selectAll,a=t.target,l=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&(e.selectAll=s.concat([null])):i>-1&&(e.selectAll=s.slice(0,i).concat(s.slice(i+1)))}else e.selectAll=l}}})]),e._v(" "),e._m(4),e._v(" "),s("th",[e._v("Status")]),e._v(" "),s("th",[e._v("Category")]),e._v(" "),s("th",[e._v("Role")]),e._v(" "),s("th",[e._v("Serial")]),e._v(" "),s("th",[e._v("Actions")])])]),e._v(" "),s("tbody",[e.preloader?s("tr",{staticStyle:{background:"none"}},[s("td",{attrs:{colspan:"5"}},[s("preloader")],1)]):e._e(),e._v(" "),e._l(e.helps.data,function(t,a){return s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{type:"checkbox",id:"checkbox-id-"+t.id},domProps:{value:t.id,checked:Array.isArray(e.selected)?e._i(e.selected,t.id)>-1:e.selected},on:{change:function(s){var a=e.selected,l=s.target,i=!!l.checked;if(Array.isArray(a)){var o=t.id,n=e._i(a,o);l.checked?n<0&&(e.selected=a.concat([o])):n>-1&&(e.selected=a.slice(0,n).concat(a.slice(n+1)))}else e.selected=i}}})]),e._v(" "),s("td",[s("label",{attrs:{for:"checkbox-id-"+t.id}},[e._v(e._s(t.title))])]),e._v(" "),s("td",[t.status?[s("span",{staticClass:"bg-success active-status"},[e._v("Active")])]:[s("span",{staticClass:"bg-danger active-status"},[e._v("Inactive")])]],2),e._v(" "),s("td",{staticClass:"taxonomies"},[t.categories?e._l(t.categories,function(t){return s("span",[e._v(e._s(t.name))])}):e._e()],2),e._v(" "),s("td",{staticClass:"taxonomies"},[t.roles.length?e._l(t.roles,function(t){return s("span",[e._v(e._s(t.name))])}):[e._v("\n                                All\n                            ")]],2),e._v(" "),s("td",[e._v(e._s(t.order))]),e._v(" "),s("td",[s("div",{staticClass:"dropdown action-items"},[e._m(5,!0),e._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"actionItemButtons"}},[s("a",{directives:[{name:"can",rawName:"v-can",value:"help-edit",expression:"'help-edit'"}],staticClass:"dropdown-item",attrs:{href:"#","data-toggle":"modal","data-target":"#createModal"},on:{click:function(s){return s.preventDefault(),e.editForm(t)}}},[e._v("\n                                   Edit \n                                ")]),e._v(" "),s("a",{directives:[{name:"can",rawName:"v-can",value:"help-delete",expression:"'help-delete'"}],staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.deleteEntry(t.id,a)}}},[e._v("\n                                    Delete\n                                ")])])])])])}),e._v(" "),e.noData?[s("tr",{staticClass:"bg-white",domProps:{innerHTML:e._s(e.noData)}})]:e._e()],2),e._v(" "),s("tfoot",[s("tr",[s("th",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],attrs:{type:"checkbox",id:"check-all-bottom"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{click:e.select,change:function(t){var s=e.selectAll,a=t.target,l=!!a.checked;if(Array.isArray(s)){var i=e._i(s,null);a.checked?i<0&&(e.selectAll=s.concat([null])):i>-1&&(e.selectAll=s.slice(0,i).concat(s.slice(i+1)))}else e.selectAll=l}}})]),e._v(" "),e._m(6),e._v(" "),s("th",[e._v("Status")]),e._v(" "),s("th",[e._v("Category")]),e._v(" "),s("th",[e._v("Role")]),e._v(" "),s("th",[e._v("Serial")]),e._v(" "),s("th",[e._v("Actions")])])])])]),e._v(" "),s("div",{staticClass:"table-actions"},[s("pagination",{attrs:{data:e.helps,limit:2},on:{"pagination-change-page":e.getLists}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[this._v("Search")]),this._v(" "),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-12 mb-3"},[t("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"}},[this._v("Search")]),this._v(" "),t("button",{staticClass:"btn btn-dark float-right btn-sm",attrs:{type:"reset"}},[this._v("Reset")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"btn btn-sm btn-info float-right",attrs:{type:"button","data-toggle":"modal","data-target":"#dataSearch"}},[t("i",{staticClass:"icon-search"}),this._v(" "),t("span",{staticClass:"d-none d-sm-inline"},[this._v("Search")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("th",[t("label",{attrs:{for:"check-all"}},[this._v("Title")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"btn btn-default btn-sm dropdown-toggle",attrs:{type:"button",id:"actionItemButtons","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t("i",{staticClass:"icon-ellipsis"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("th",[t("label",{attrs:{for:"check-all-bottom"}},[this._v("Title")])])}]}},526:function(e,t,s){var a=s(16)(s(428),s(429),!1,null,null,null);e.exports=a.exports}});