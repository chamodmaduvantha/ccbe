import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


// Import your components
const HomePage = () => import('../components/HomePage.vue');
const AboutUs = () => import('../components/AboutUs.vue');
const Documentations = () => import('../components/OurDocumentations.vue');
const Papers = () => import('../components/PapersPage.vue');


const routes = [
  {
    path: '/', // Ensure this is '/' for the root path
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/documentations',
    name: 'Documentations',
    component: Documentations
  },
  {
    path: '/papers',
    name: 'PapersPage',
    component: Papers
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
