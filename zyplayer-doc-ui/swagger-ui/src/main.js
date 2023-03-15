import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import routes from './routes'
import store from './store/index'
import { ElConfigProvider, ElCascader, ElCascaderPanel } from 'element-plus';
import 'element-plus/lib/theme-chalk/base.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
const app = createApp(App);
app.config.productionTip = false;
app.use(Antd);
app.use(router);
app.use(store);
app.component(ElCascader.name, ElCascader);
app.component(ElCascaderPanel.name, ElCascaderPanel);
app.component(ElConfigProvider.name, ElConfigProvider);
app.mount('#app');
