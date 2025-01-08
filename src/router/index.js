import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


// Import your components
const HomePage = () => import('../components/HomePage.vue');
const AboutUs = () => import('../components/AboutUs.vue');
const CoursePage = () => import('../components/CoursePage.vue');
const CoreValuesPage = () => import('../components/CoreValuesPage.vue');

//Cources
const PreschoolPage = () => import('../components/courses/PreschoolPage.vue');
const YoungLearnersPage = () => import('../components/courses/YoungLearnersPage.vue');

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
    path: '/courses',
    name: 'CoursePage',
    component: CoursePage,
  },
  {
    path: '/corevalues',
    name: 'CoreValuesPage',
    component: CoreValuesPage,
  },
  {
    path: '/courses/preschool',
    name: 'PreschoolPage',
    component: PreschoolPage,
  },
  {
    path: '/course/younglearners',
    name: 'YoungLearnersPage',
    component: YoungLearnersPage,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
