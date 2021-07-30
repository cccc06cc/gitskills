import Button from "vant/lib/button";
import Popup from "vant/lib/popup";
import NavBar from "vant/lib/nav-bar";
import Tabbar from "vant/lib/tabbar";
import TabbarItem from "vant/lib/tabbar-item";
import Icon from "vant/lib/icon";
import Form from 'vant/lib/form';
import Field from 'vant/lib/field';
import Image from 'vant/lib/image';
import Checkbox from 'vant/lib/checkbox';
import CheckboxGroup from 'vant/lib/checkbox-group';
import Toast from 'vant/lib/toast';
import Dialog from 'vant/lib/dialog';
import Col from 'vant/lib/col';
import Row from 'vant/lib/row';
import Cell from 'vant/lib/cell';
import CellGroup from 'vant/lib/cell-group';
import CountDown from 'vant/lib/count-down';
import Tab from 'vant/lib/tab';
import Tabs from 'vant/lib/tabs';

// 引入vant组件的样式
import 'vant/lib/button/style';
import 'vant/lib/popup/style';
import 'vant/lib/nav-bar/style';
import 'vant/lib/tabbar/style';
import 'vant/lib/tabbar-item/style';
import 'vant/lib/icon/style';
import 'vant/lib/form/style';
import 'vant/lib/field/style';
import 'vant/lib/image/style';
import 'vant/lib/checkbox/style';
import 'vant/lib/checkbox-group/style';
import 'vant/lib/toast/style';
import 'vant/lib/dialog/style';
import 'vant/lib/row/style';
import 'vant/lib/col/style';
import 'vant/lib/cell/style';
import 'vant/lib/cell-group/style';
import 'vant/lib/count-down/style';
import 'vant/lib/tab/style';
import 'vant/lib/tabs/style';
// 把引入的vant组件注册成全局组件
// Vue.component(Button.name,Button);
// Vue.component(Popup.name,Popup);
export default {
    install(Vue) {
        Vue.use(Button);
        Vue.use(Tab);
        Vue.use(Tabs);
        Vue.use(Popup);
        Vue.use(NavBar);
        Vue.use(Tabbar);
        Vue.use(TabbarItem);
        Vue.use(Icon);
        Vue.use(Form);
        Vue.use(Field);
        Vue.use(Image);
        Vue.use(Checkbox);
        Vue.use(CheckboxGroup);
        // 这里的Vue.use，会在vue实例的身上挂载一个方法（$toast）
        // 在组件内的用法：this.$toast.fail("错误提示文本")
        Vue.use(Toast);
        Vue.use(Dialog);
        Vue.use(Row);
        Vue.use(Col);
        Vue.use(Cell);
        Vue.use(CellGroup);
        Vue.use(CountDown)
    }
}