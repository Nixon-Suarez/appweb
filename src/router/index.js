import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import CursoView from '../views/CursoView.vue'
import StudentView from '../views/StudentView.vue'


const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/curso',
    name: 'curso',
    component: CursoView
  },
  {
    path: '/student',
    name: 'student',
    component: StudentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
