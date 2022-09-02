import Vue from 'vue'

import {
  Button,
  Swipe, 
  SwipeItem,
} from 'vant'

export default function vant() {
  Vue.use(Button)
    .use(Swipe)
    .use(SwipeItem)
}
