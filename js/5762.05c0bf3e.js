"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[5762,1126,8445],{75922:function(e,n,t){t.a(e,(async function(e,l){try{var i=t(66252),o=t(2262),a=t(61446),c=t(45542),s=t(28445),r=t(91980),u=e([r]);r=(u.then?(await u)():u)[0];const d=(e=>((0,i.dD)("data-v-211eea68"),e=e(),(0,i.Cn)(),e))((()=>(0,i._)("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vite-vue3-admin/blob/main/src/views/demos/form/use-form/index.vue"}," 查看源码 ",-1))),f={class:"mb-4"},p=(0,i.aZ)({name:"DemosFormDynamicForm"});n.Z=(0,i.aZ)({...p,setup(e){const[n,t]=(0,r.useForm)({labelWidth:120,schemas:s.schemas,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function l(){t.validate().then((()=>a.ZP.success("验证通过！")))}function u(){null==t||t.updateSchema({field:"field3",label:"字段3 New"})}function p(){null==t||t.updateSchema([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])}function m(){null==t||t.appendSchemaByField({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")}function v(){null==t||t.removeSchemaByFiled("field11")}return(e,t)=>{const a=(0,i.up)("a-button"),s=(0,i.up)("a-card");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)((0,o.SU)(c.Z),{message:"useForm示例",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:(0,i.w5)((()=>[d])),_:1}),(0,i._)("div",f,[(0,i.Wm)(a,{class:"mr-2",onClick:u},{default:(0,i.w5)((()=>[(0,i.Uk)(" 更改字段3label ")])),_:1}),(0,i.Wm)(a,{class:"mr-2",onClick:p},{default:(0,i.w5)((()=>[(0,i.Uk)(" 同时更改字段3,4label ")])),_:1}),(0,i.Wm)(a,{class:"mr-2",onClick:m},{default:(0,i.w5)((()=>[(0,i.Uk)(" 往字段3后面插入字段10 ")])),_:1}),(0,i.Wm)(a,{class:"mr-2",onClick:v},{default:(0,i.w5)((()=>[(0,i.Uk)(" 删除字段11 ")])),_:1})]),(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,o.SU)(n),{onSubmit:l})])),_:1})])}}}),l()}catch(e){l(e)}}))},85713:function(e,n,t){t.d(n,{G:function(){return d}});var l,i,o=t(66252),a=t(2262);!function(e){e.XS="XS",e.SM="SM",e.MD="MD",e.LG="LG",e.XL="XL",e.XXL="XXL"}(l||(l={})),function(e){e[e.XS=480]="XS",e[e.SM=576]="SM",e[e.MD=768]="MD",e[e.LG=992]="LG",e[e.XL=1200]="XL",e[e.XXL=1600]="XXL"}(i||(i={}));const c=new Map;let s,r,u;function d(){return{screenRef:(0,o.Fl)((()=>(0,a.SU)(s))),widthRef:r,screenEnum:i,realWidthRef:u}}c.set(l.XS,i.XS),c.set(l.SM,i.SM),c.set(l.MD,i.MD),c.set(l.LG,i.LG),c.set(l.XL,i.XL),c.set(l.XXL,i.XXL)},54278:function(e,n,t){t.d(n,{GP:function(){return i}});var l=t(27484);const i=t.n(l)()},98243:function(e,n,t){t.d(n,{GR:function(){return o},IS:function(){return i},RH:function(){return a},nz:function(){return c}});var l=t(71377);function i(e){var n;if(!e)return"file-type-unknown";const t=null===(n=/[.]/.exec(l=e)?null===(i=/[^.]+$/.exec(l))||void 0===i?void 0:i[0]:void 0)||void 0===n?void 0:n.toLowerCase();var l,i;return t?["png","jpg","jpeg","ico","gif","bmp","webp"].includes(t)?"file-type-img":["markdown","md","txt"].includes(t)?"file-type-txt":["docx","doc","docm","dot","dotx"].includes(t)?"file-type-docx":["csv","xls","xlsb","xlsm","xlsx","xltx"].includes(t)?"file-type-excel":"pdf"===t?"file-type-pdf":["pptx","ppt","pptm"].includes(t)?"file-type-ppt":["zip","rar","7z","tar","gz","tgz","tar.gz","tar.xz"].includes(t)?"file-type-zip":["mp4","avi","wmv","rmvb","3gp","mov","m4v","flv","mkv"].includes(t)?"file-type-video":["mp3","wav"].includes(t)?"file-type-music":["vue","js","go","java","ts","css","html","php","c","cpp","swift","kt"].includes(t)?"file-type-code":"file-type-unknown":"file-type-unknown"}function o(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const t=1024,l=n<0?0:n,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/Math.pow(t,o)).toFixed(l))} ${i[o]}`}function a(){let e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(e in t)n[e]=(0,l.Kn)(n[e])?a(n[e],t[e]):n[e]=t[e];return n}const c=(e,n)=>{const t=e;return t.install=l=>{l.component(t.name||t.displayName,e),n&&(l.config.globalProperties[n]=e)},e}},28445:function(e,n,t){t.r(n),t.d(n,{schemas:function(){return l}});const l=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},vShow:e=>{let{formModel:n}=e;return!!n.field5}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},vShow:e=>{let{formModel:n}=e;return!!n.field6}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:e=>{let{formModel:n}=e;return!!n.field7}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:e=>{let{formModel:n}=e;return n.field8?[{required:!0,message:"字段4必填"}]:[]},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},componentProps:e=>{let{formInstance:n}=e;return{onChange(e){requestAnimationFrame((()=>{e?null==n||n.validateFields():null==n||n.clearValidate()}))}}},labelWidth:200}]},93748:function(e,n,t){t.d(n,{z:function(){return i}});t(81299);var l=t(71377);function i(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",t=arguments.length>2?arguments[2]:void 0;if(!e||!Reflect.has(e,n))return null;if(!(0,l.mf)(e[n]))return null;const i=e[n];return i?i(t):null}},61126:function(e,n,t){t.a(e,(async function(e,l){try{t.r(n);var i=t(85043),o=(t(92773),t(83744)),a=e([i]);i=(a.then?(await a)():a)[0];const c=(0,o.Z)(i.Z,[["__scopeId","data-v-211eea68"]]);n.default=c,l()}catch(e){l(e)}}))},85043:function(e,n,t){t.a(e,(async function(e,l){try{t.d(n,{Z:function(){return i.Z}});var i=t(75922),o=e([i]);i=(o.then?(await o)():o)[0],l()}catch(e){l(e)}}))},92773:function(){}}]);