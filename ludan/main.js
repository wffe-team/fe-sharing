//组件
// Vue.component('alert',{
//      template:'<button @click="on_click">我是组件</button>',
//       // props:['msg'],
//      methods:{
//         on_click:function(){
//              alert('yo');
//         }
//      }
//      // data:function(){
//      //     return{
//      //         msg:'我是信息'
//      //     }
//      // }
// });
//  var app = new Vue({
//      el:'#app'
//     // components:{
//     //     alert:{
//     //         template:'<button @click="on_click">我是组件</button>',
//     //         methods:{
//     //             on_click:function(){
//     //                 alert('yo');
//     //             }
//     //         }
//     //     }
//     // }
//  });













// v-model指令
// var app = new Vue({
//     el:'#app',
//     data:{
//         message:'你输入吧'
//     }
// });

//过滤属性
// Vue.filter('currency',function (val,unit) {
//     val = val || 0;
//     unit = unit || '元';
//     return val+ unit;
// });
// Vue.filter('meter',function (val,unit) {
//     val = val || 0;
//     unit = unit || 'm';
//     return (val/1000).toFixed(2)+ unit;
// });
// var app = new Vue({
//     el:'#app',
//     data:{
//         length:10,
//         price:50
//     }
// });

// 自定义指令
// Vue.directive('pin',function (el,binding) {
//     var pinned = binding.value;
//     if(pinned){
//         el.style.position= 'fixed';
//         el.style.top= '10px';
//         el.style.left = '10px';
//     }else{
//         el.style.position= 'static';
//     }
// });
// var app = new Vue({
//     el:'#app',
//     data:{
//        card1:{
//            pinned:false
//        },
//        card2:{
//            pinned:false
//        }
//     }
// });
// 自定义指令传参
// Vue.directive('pin',function (el,binding) {
//     var pinned = binding.value;
//     var position = binding.modifiers;
//     var warning = binding.arg;
//     if(pinned){
//         el.style.position= 'fixed';
//         for(var key in position){
//             if(position[key]){
//                 el.style[key]= '10px';
//             }
//         }
//         if(warning === 'true'){
//             el.style.backgroundColor= 'red';
//         }
//     }else{
//         el.style.position= 'static';
//         if(warning === 'true'){
//             el.style.backgroundColor= '#fff';
//         }
//     }
// });
// var app = new Vue({
//     el:'#app',
//     data:{
//         card1:{
//             pinned:false
//         },
//         card2:{
//             pinned:false
//         }
//     }
// });
// 混合指令（重复功能和数据的储存器）
// var base = {
//     methods:{
//         show:function () {
//             this.visible = true;
//         },
//         hide:function () {
//             this.visible = false;
//         },
//         toggle:function () {
//             this.visible = !this.visible;
//         }
//     },
//     data:function () {
//         return{
//             visible:false
//         }
//     }
// };
// Vue.component('tooltip',{
//     template:'<div><span @mouseenter="show" @mouseleave="hide">显示我的提示</span><div v-if="visible"><div>我就是你的提示</div></div></div>',
//     mixins:[base]
// });
// Vue.component('popup',{
//     template:'<div>' +
//                 '<button @click="toggle">弹出</button>' +
//                 '<div v-if="visible">' +
//                   '<div><span @click="hide">X</span><div>我弹出来了</div></div>' +
//                 '</div>' +
//               '</div>',
//     mixins:[base]
// });
// var app = new Vue({
//     el:'#app',
//     data:{}
// });


//插槽slot(类似于占位符)
Vue.component('panel',{
    template:'#panel-tpl'
});
var app = new Vue({
    el:'#app',
    data:{}
});
























