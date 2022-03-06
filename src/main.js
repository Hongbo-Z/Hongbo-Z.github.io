import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Header from './components/Header'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Members from "./components/Members";
import Research from "./components/Research";
import Collaboration from "./components/Collaboration";
import CMT from "./components/CMT";
import AcademicStaff from "./components/AcademicStaff";
import Students from "./components/Students";

Vue.use(ElementUI);
Vue.component('common-header', Header);
Vue.component('common-footer', Footer);
Vue.component('uom-home', Main);
Vue.component('common-members',Members)
Vue.component('common-research',Research)
Vue.component('common-collaboration',Collaboration)
Vue.component('common-cmt',CMT)
Vue.component('common-academic_staff',AcademicStaff)
Vue.component('common-students',Students)


/* eslint-disable no-new */
new Vue({
  el: '#app'
})
