import Vue from 'vue';
import myCustomElement from './components/HelloWorld';
import vueCustomElement from 'vue-custom-element'

Vue.use(vueCustomElement);

Vue.customElement('my-custom-element', myCustomElement, {
    shadow: false // Deaktivert Shadow-DOM
})
