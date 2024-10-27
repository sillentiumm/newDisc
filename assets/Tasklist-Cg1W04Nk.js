import{_ as k,B as g,I as f,a as v,c as x,H as V,g as b,d as w}from"./icon-close-DMosbnvm.js";import{o as i,c as _,a as e,t as h,F as T,b as d,w as A,e as r,r as y,h as C,g as S,d as B}from"./index-DocemA4U.js";const $={props:{modelValue:{type:String,required:!0},text:String,type:String,value:String,placeholder:String,size:String},data(){return{visiblePassword:!1,originalValue:"",displayedValue:"",isMasked:!1}},methods:{changeVisiblePasword(){this.visiblePassword=!this.visiblePassword}}},I={class:"input__title text-small"},H={class:"textarea__wrapper"},M=["value","placeholder"];function P(s,t,c,p,a,o){return i(),_(T,null,[e("span",I,h(c.text),1),e("div",H,[e("textarea",{value:c.modelValue,onInput:t[0]||(t[0]=n=>s.$emit("update:modelValue",n.target.value)),class:"textarea",placeholder:c.placeholder},"    ",40,M)])],64)}const N=k($,[["render",P]]),F={components:{Button:g,Input:f,Textarea:N},data(){return{titleValue:"",textValue:"",imageClose:v}},methods:{close(){this.$emit("close")},async createTask(){const s={title:this.titleValue,content:this.textValue};try{await x(s)&&this.close()}catch(t){console.error(t)}}}},L={class:"modal"},U={class:"modal__content"},q={class:"modal__body"},z={class:"tasklist__btn"};function D(s,t,c,p,a,o){const n=r("Button"),u=r("Input"),m=r("Textarea");return i(),_("div",L,[e("div",U,[d(n,{onClick:o.close,imageSrc:a.imageClose,imageClass:"btn__small",imageAlt:"закрыть",class:"modal__exit"},null,8,["onClick","imageSrc"]),t[3]||(t[3]=e("div",{class:"modal__header"},[e("h2",null," Добавление заметки ")],-1)),e("div",q,[e("form",{onSubmit:t[2]||(t[2]=A((...l)=>o.createTask&&o.createTask(...l),["prevent"])),action:""},[d(u,{text:"Название заметки",type:"",modelValue:a.titleValue,"onUpdate:modelValue":t[0]||(t[0]=l=>a.titleValue=l),placeholder:"Введите значение"},null,8,["modelValue"]),d(m,{text:"Текст заметки",modelValue:a.textValue,"onUpdate:modelValue":t[1]||(t[1]=l=>a.textValue=l),placeholder:"Введите текст"},null,8,["modelValue"]),e("div",z,[d(n,{text:"Добавить"})])],32)])])])}const E=k(F,[["render",D]]),J="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%209H17M9%201L9%2017'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",W={components:{Header:V,TaskAdd:E,Button:g},data(){return{taskslist:[],visibleTaskAdd:!1,imageAdd:J}},methods:{changeVisibleTaskAdd(){this.visibleTaskAdd=!this.visibleTaskAdd,this.visibleTaskAdd||this.getTasks()},async getTasks(){try{const s=await b();s&&(this.taskslist=s)}catch(s){console.error(s)}},async deleteTask(s){this.taskslist=this.taskslist.filter(t=>t.id!==s),w(s)}},mounted(){localStorage.getItem("JWT")?this.getTasks():y.push({name:"main_page"})}},j={class:"section"},G={class:"container"},K={class:"taskslist__content"},O={class:"taskslist"},Q={class:"task__content"},R={class:"task__header"},X={class:"task__body text-normal"},Y={class:"task__footer"},Z=["onClick"];function ee(s,t,c,p,a,o){const n=r("Header"),u=r("Button"),m=r("TaskAdd");return i(),_("div",j,[e("div",G,[d(n),e("div",K,[d(u,{onClick:o.changeVisibleTaskAdd,imageSrc:a.imageAdd,imageClass:"btn__small",imageAlt:"добавить заметку",class:"btn__tasklist"},null,8,["onClick","imageSrc"]),e("div",O,[(i(!0),_(T,null,C(a.taskslist,l=>(i(),_("div",{key:l.id,class:"task"},[e("div",Q,[e("div",R,[e("h4",null,h(l.title),1)]),e("div",X,h(l.content),1),e("div",Y,[e("button",{onClick:te=>o.deleteTask(l.id),class:"task__footer__btn"},t[0]||(t[0]=[e("img",{src:v,alt:"фон"},null,-1),e("span",{class:"text-normal"},"Удалить",-1)]),8,Z)])])]))),128))])])]),a.visibleTaskAdd?(i(),S(m,{key:0,onClose:o.changeVisibleTaskAdd},null,8,["onClose"])):B("",!0)])}const le=k(W,[["render",ee]]);export{le as default};