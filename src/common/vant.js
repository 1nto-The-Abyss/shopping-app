import Vue from 'vue'

import {
  Button,
  Swipe, 
  SwipeItem,
  Tab,
  Tabs,
  List,
  PullRefresh
} from 'vant'

export default function vant() {
  Vue.use(Button)
    .use(Swipe)
    .use(SwipeItem)
    .use(Tab)
    .use(Tabs)
    .use(List)
    .use(PullRefresh)
}
