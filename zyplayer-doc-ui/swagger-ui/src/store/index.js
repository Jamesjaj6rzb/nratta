import {createStore} from 'vuex'
import {createTreeViewByTag} from './SwaggerDocUtil'

export default createStore({
    state() {
        return {
            docChangedNum: 1,
            userInfo: {},
            pageTabNameMap: {},
            swaggerDoc: {},
            swaggerDefinitions: {},
            swaggerTreePathMap: {},
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        addDocChangedNum(state) {
            state.docChangedNum++;
        },
        setSwaggerDoc(state, swaggerDoc) {
            state.swaggerDoc = swaggerDoc;
            state.swaggerDefinitions = swaggerDoc.definitions || {};
        },
        setSwaggerTreePathMap(state, swaggerTreePathMap) {
            state.swaggerTreePathMap = swaggerTreePathMap;
        },
        addTableName(state, item) {
            let sameObj = Object.assign({}, state.pageTabNameMap);
            sameObj[item.key] = item.val;
            state.pageTabNameMap = sameObj;
        },
    }
});

// 使用方法
// return this.$store.state.userInfo
// this.$store.commit('setUserInfo', 111);

// 动态计算值
// computed: {
//     initialEnv () {
//         return this.$store.state.initialEnv;
//     }
// },

// js文件中使用
// import store from '../../store/index'
// store.commit('setInitialEnv', this.initialEnv);


