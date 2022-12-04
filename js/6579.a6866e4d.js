"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[6579],{62202:function(e,l,o){o.d(l,{Z:function(){return r}});var n=o(66252),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},t=o(33058);function c(e){for(var l=1;l<arguments.length;l++){var o=null!=arguments[l]?Object(arguments[l]):{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(l){i(e,l,o[l])}))}return e}function i(e,l,o){return l in e?Object.defineProperty(e,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[l]=o,e}var p=function(e,l){var o=c({},e,l.attrs);return(0,n.Wm)(t.Z,c({},o,{icon:a}),null)};p.displayName="UploadOutlined",p.inheritAttrs=!1;var r=p},37820:function(e,l,o){o.a(e,(async function(e,n){try{o.d(l,{Q:function(){return c}});var a=o(4064),t=e([a]);function c(e){return(0,a.W)({url:"/select/getDemoOptions",method:"get",params:e},{isMock:!0,isGetDataDirectly:!0})}a=(t.then?(await t)():t)[0],n()}catch(i){n(i)}}))},6579:function(e,l,o){o.a(e,(async function(e,n){try{o.r(l),o.d(l,{schemas:function(){return m}});var a=o(66252),t=o(62202),c=o(40058),i=o(45949),p=o(37820),r=o(81175),s=e([p]);p=(s.then?(await s)():s)[0];const d=[{id:"guangdong",label:"广东省",value:"1",key:"1"},{id:"jiangsu",label:"江苏省",value:"2",key:"2"}],u={guangdong:[{label:"珠海市",value:"1",key:"1"},{label:"深圳市",value:"2",key:"2"},{label:"广州市",value:"3",key:"3"}],jiangsu:[{label:"南京市",value:"1",key:"1"},{label:"无锡市",value:"2",key:"2"},{label:"苏州市",value:"3",key:"3"}]},f=async()=>{await(0,r.pQ)(3e3);return(await(0,p.Q)()).list.map((e=>({label:e.name,value:e.id})))},m=[{field:"divider-basic",component:"Divider",label:"基础字段"},{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:()=>({placeholder:"自定义placeholder",onChange:e=>{}}),componentSlots:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},componentSlots:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"Divider",label:"远程下拉演示"},{field:"field30",component:"Select",label:"懒加载远程下拉",required:!0,componentProps:{request:async e=>await f(),onChange:e=>{}},colProps:{span:8},defaultValue:"1"},{field:"field31",component:"Input",label:"下拉本地搜索",helpMessage:["Select组件","远程数据源本地搜索","只发起一次请求获取所有选项"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"下拉远程搜索",helpMessage:["Select组件","将关键词发送到接口进行远程搜索"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"TreeSelect",label:"远程下拉树",helpMessage:["TreeSelect组件","使用接口提供的数据生成选项"],required:!0,componentProps:{request:()=>new Promise((e=>{const l=Array.from({length:5}).map(((e,l)=>({title:`选项 ${l}`,value:`选项 ${l}`,children:Array.from({length:3}).map(((e,o)=>({title:`选项 ${l}-${o}`,value:`选项 ${l}-${o}`})))})));setTimeout((()=>e(l)),2e3)}))},colProps:{span:8}},{field:"field34",component:e=>{var l;let{schema:o}=e;const n=(null===(l=o.componentProps)||void 0===l?void 0:l.requestResult)||[];return(0,a.Wm)(c.ZP.Group,{options:n.slice(0,2)},null)},label:"远程Radio",helpMessage:["RadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{optionType:"button",request:async()=>await f()},defaultValue:"0",colProps:{span:8}},{field:"field35",component:"RadioGroup",label:"远程Radio",helpMessage:["RadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{optionType:"button",request:async()=>(await f()).slice(0,2)},defaultValue:"1",colProps:{span:8}},{field:"divider-linked",component:"Divider",label:"字段联动"},{field:"province",component:"Select",label:"省份",colProps:{span:8},componentProps:e=>{let{formModel:l,formInstance:o}=e;return{options:d,placeholder:"省份与城市联动",onChange:e=>{let n=1==e?u[d[0].id]:u[d[1].id];void 0===e&&(n=[]),l.city=void 0;const{updateSchema:a}=o;a({field:"city",componentProps:{options:n}})}}}},{field:"city",component:"Select",label:"城市",colProps:{span:8},componentProps:{options:[],placeholder:"省份与城市联动"}},{field:"divider-selects",component:"Divider",label:"互斥多选",helpMessage:["两个Select共用数据源","但不可选择对方已选中的项目"]},{field:"selectA",component:"Select",label:"互斥SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"Select",label:"互斥SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-others",component:"Divider",label:"其它"},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"字段21",componentProps:{min:0,max:100,range:!0,marks:{20:"20°C",60:"60°C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"字段22",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}},{field:"field23",component:"Upload",label:"字段23",colProps:{span:8},componentProps:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},componentSlots:{default:()=>(0,a.Wm)(i.Z,null,{default:()=>[(0,a.Wm)(t.Z,null,null),(0,a.Uk)(" Click to Upload")]})}}];n()}catch(e){n(e)}}))}}]);