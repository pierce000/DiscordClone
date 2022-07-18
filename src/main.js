import Vue from 'vue';

import './styles/main.scss';
import layout from './components/layout';

new Vue({
  el: '#app',
  render: h => h(layout)
})
