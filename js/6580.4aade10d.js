"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[6580],{46580:function(e,n,t){t.r(n),t.d(n,{setChildrenChecked:function(){return c},setParentChecked:function(){return r},updateNodeCheckStatus:function(){return d}});const r=e=>{const n=null==e?void 0:e.children,t=null==n?void 0:n.length,c=!!t&&!n.some((e=>!e.checked)),d=!!t&&n.some((e=>e.checked||e.indeterminate));e.checked=c,e.indeterminate=!c&&d,e.parent&&r(e.parent)},c=(e,n)=>{null==e||e.forEach((e=>{var t;e.checked=n,e.indeterminate=!1,null!==(t=e.children)&&void 0!==t&&t.length&&c(e.children,n)}))},d=(e,n)=>{var t;n.checked=e,n.indeterminate=!1,Array.isArray(n.children)&&null!==(t=n.children)&&void 0!==t&&t.length&&c(n.children,e),n.parent&&r(n.parent)}}}]);