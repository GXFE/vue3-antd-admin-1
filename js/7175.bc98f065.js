"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[7175,3444],{8897:function(e,t,a){a.a(e,(async function(e,i){try{var l=a(66252),n=a(2262),o=a(68023),u=a(91416),s=a(82739),r=a(67740),c=a(1e3),d=a(9508),v=a(95878),f=a(96301),p=a(46450),m=a(66969),y=a(98243),x=e([m]);m=(x.then?(await x)():x)[0];const w={class:"netdisk-overview-container"},h={class:"ov-header"},g={class:"ov-content"},b=(0,l.aZ)({name:"NetDiskOverview"});t.Z=(0,l.aZ)({...b,setup(e){(0,o.D)([u.N,s.N,r.N,d.N]);const t=(0,n.iH)(!1),a=(0,n.iH)(0),i=(0,n.iH)("B"),x=(0,n.iH)(0),b=(0,n.iH)(0),S=(0,n.iH)("B"),k=(0,n.iH)(0),Z=(0,n.iH)("flow"),z=(0,n.iH)({tooltip:{trigger:"axis",formatter:e=>`<div>${e[0].name}号</div><div>${e[0].marker} ${e[0].seriesName}：${e[0].value}MB</div>`},xAxis:{type:"category",boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1},data:[]},yAxis:{type:"value",axisLabel:{formatter:"{value}MB"},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},grid:{show:!1,top:"5%",right:"2%",left:"5%",bottom:"8%"},series:[{name:"使用流量",data:[],type:"line",smooth:.6,areaStyle:{color:"#8cc6f2"},itemStyle:{opacity:0},lineStyle:{color:"#8cc6f2"}}]}),_=(0,n.iH)({tooltip:{trigger:"axis",formatter:e=>`<div>${e[0].name}号</div><div>${e[0].marker} ${e[0].seriesName}：${e[0].value}MB</div>`},xAxis:{type:"category",boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1},data:[]},yAxis:{type:"value",axisLabel:{formatter:"{value}MB"},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},grid:{show:!1,top:"5%",right:"2%",left:"5%",bottom:"8%"},series:[{name:"占用空间",data:[],type:"line",smooth:.6,areaStyle:{color:"#8cc6f2"},itemStyle:{opacity:0},lineStyle:{color:"#8cc6f2"}}]}),B=()=>{t.value=!0},H=()=>{t.value=!1};return(async()=>{try{B();const e=await(0,m.e)(),t=(0,y.GR)(e.spaceSize).split(" ");a.value=Number(t[0]),i.value=t[1],x.value=e.fileSize;const l=(0,y.GR)(e.flowSize).split(" ");b.value=Number(l[0]),S.value=l[1],k.value=e.hitSize,z.value.xAxis.data=e.flowTrend.times,z.value.series[0].data=e.flowTrend.datas.map((e=>(e/1024/1024).toFixed())),_.value.xAxis.data=e.sizeTrend.times,_.value.series[0].data=e.sizeTrend.datas.map((e=>(e/1024/1024).toFixed()))}finally{H()}})(),(e,t)=>((0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",h,[(0,l.Wm)(p.default,{title:"存储总量",value:a.value,suffix:i.value},null,8,["value","suffix"]),(0,l.Wm)(p.default,{title:"文件数量",value:x.value,suffix:"个"},null,8,["value"]),(0,l.Wm)(p.default,{title:"下载流量",value:b.value,suffix:S.value},null,8,["value","suffix"]),(0,l.Wm)(p.default,{title:"GET请求次数",value:k.value,suffix:"次"},null,8,["value"])]),(0,l._)("div",g,[(0,l.Wm)((0,n.SU)(v.ZP),{shadow:"hover"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(f.Z),{modelValue:Z.value,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.value=e),"destroy-inactive-tab-pane":""},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(f.Z).TabPane,{key:"flow",tab:"流量趋势"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.ZP),{option:z.value,style:{height:"320px"},autoresize:""},null,8,["option"])])),_:1}),(0,l.Wm)((0,n.SU)(f.Z).TabPane,{key:"space",tab:"容量趋势"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.ZP),{option:_.value,style:{height:"320px"},autoresize:""},null,8,["option"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])]))}}),i()}catch(e){i(e)}}))},66969:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{e:function(){return o}});var l=a(4064),n=e([l]);function o(){return(0,l.W)({url:"netdisk/overview/desc",method:"get"})}l=(n.then?(await n)():n)[0],i()}catch(u){i(u)}}))},98243:function(e,t,a){a.d(t,{GR:function(){return n},IS:function(){return l},RH:function(){return o},nz:function(){return u}});var i=a(71377);function l(e){var t;if(!e)return"file-type-unknown";const a=null===(t=/[.]/.exec(i=e)?null===(l=/[^.]+$/.exec(i))||void 0===l?void 0:l[0]:void 0)||void 0===t?void 0:t.toLowerCase();var i,l;return a?["png","jpg","jpeg","ico","gif","bmp","webp"].includes(a)?"file-type-img":["markdown","md","txt"].includes(a)?"file-type-txt":["docx","doc","docm","dot","dotx"].includes(a)?"file-type-docx":["csv","xls","xlsb","xlsm","xlsx","xltx"].includes(a)?"file-type-excel":"pdf"===a?"file-type-pdf":["pptx","ppt","pptm"].includes(a)?"file-type-ppt":["zip","rar","7z","tar","gz","tgz","tar.gz","tar.xz"].includes(a)?"file-type-zip":["mp4","avi","wmv","rmvb","3gp","mov","m4v","flv","mkv"].includes(a)?"file-type-video":["mp3","wav"].includes(a)?"file-type-music":["vue","js","go","java","ts","css","html","php","c","cpp","swift","kt"].includes(a)?"file-type-code":"file-type-unknown":"file-type-unknown"}function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=1024,i=t<0?0:t,l=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(a));return`${parseFloat((e/Math.pow(a,n)).toFixed(i))} ${l[n]}`}function o(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(e in a)t[e]=(0,i.Kn)(t[e])?o(t[e],a[e]):t[e]=a[e];return t}const u=(e,t)=>{const a=e;return a.install=i=>{i.component(a.name||a.displayName,e),t&&(i.config.globalProperties[t]=e)},e}},46450:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var i=a(66252),l=a(2262),n=a(3577),o=a(95878),u=a(80041);const s={class:"title"},r={class:"suffix"},c=(0,i.aZ)({name:"OverviewHeaderItem"});var d=(0,i.aZ)({...c,props:{title:{type:String,required:!0},value:{type:Number,required:!0},suffix:{type:String,default:""}},setup(e){return(t,a)=>((0,i.wg)(),(0,i.j4)((0,l.SU)(o.ZP),{class:"header-item-card",hoverable:""},{default:(0,i.w5)((()=>[(0,i._)("div",s,(0,n.zw)(e.title),1),(0,i.Wm)((0,l.SU)(u.Z),{class:"value",value:e.value,duration:2e3},null,8,["value"]),(0,i._)("span",r,(0,n.zw)(e.suffix),1)])),_:1}))}});var v=(0,a(83744).Z)(d,[["__scopeId","data-v-604ff1b2"]])},56353:function(e,t,a){a.a(e,(async function(e,i){try{a.r(t);var l=a(66862),n=(a(54459),a(83744)),o=e([l]);l=(o.then?(await o)():o)[0];const u=(0,n.Z)(l.Z,[["__scopeId","data-v-69abfc84"]]);t.default=u,i()}catch(e){i(e)}}))},66862:function(e,t,a){a.a(e,(async function(e,i){try{a.d(t,{Z:function(){return l.Z}});var l=a(8897),n=e([l]);l=(n.then?(await n)():n)[0],i()}catch(e){i(e)}}))},54459:function(){}}]);