import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import IsolationSourceView from './views/IsolationSourceView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IsolationSourceView
    },
    {
      path: '/isolations',
      name: 'isolations',
      component: IsolationSourceView
    }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')

router.push('/')