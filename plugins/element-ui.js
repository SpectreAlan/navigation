import Vue from 'vue'
import {Menu,MenuItem,Submenu,MenuItemGroup, Alert,Notification} from 'element-ui' //引入分页组件
Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(Menu).use(MenuItem).use(Submenu).use(MenuItemGroup);
Vue.use(Alert);
Vue.prototype.$notify = Notification;
