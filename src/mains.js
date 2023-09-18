// main.js
import Vue from 'vue';
import App from './App.vue';
import './styles.css'; // Importe o arquivo de estilos global

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');