import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


// Import your components
const HomePage = () => import('../components/HomePage.vue');
const AboutUs = () => import('../components/AboutUs.vue');
const CoursePage = () => import('../components/CoursePage.vue');
const CoreValuesPage = () => import('../components/CoreValuesPage.vue');
const ContactUsPage = () => import('../components/ContactUsPage.vue');
const NewsEventPage = () => import('../components/NewsEventPage.vue');
const CareersPage = () => import('../components/CareersPage.vue');

//Cources
const PreschoolPage = () => import('../components/courses/PreschoolPage.vue');
const YoungLearnersPage = () => import('../components/courses/YoungLearnersPage.vue');
const ForSchoolPage = () => import('../components/courses/ForSchoolPage.vue');
const EnglishskillsforOLPage = () => import('../components/courses/EnglishskillsforOLPage.vue');
const EnglishskillsforALPage = () => import('../components/courses/EnglishskillsforALPage.vue');
const IELTSPage = () => import('../components/courses/IELTSPage.vue');

const routes = [
  {path: '/', name: 'HomePage',component: HomePage},
  {path: '/about',name: 'AboutUs',component: AboutUs},
  {path: '/courses',name: 'CoursePage',component: CoursePage,},
  {path: '/corevalues',name: 'CoreValuesPage',component: CoreValuesPage,},
  {path: '/contact',name: 'contact',component: ContactUsPage,},
  {path: '/news',name: 'NewsEventPage',component: NewsEventPage ,},
  {path: '/careers',name: 'CareersPage',component: CareersPage ,},


  {path: '/courses/preschool',name: 'PreschoolPage',component: PreschoolPage,},
  {path: '/course/younglearners',name: 'YoungLearnersPage',component: YoungLearnersPage,},
  {path: '/course/forschool',name: 'ForSchoolPage',component: ForSchoolPage,},
  {path: '/course/ol',name: 'EnglishskillsforOLPage',component: EnglishskillsforOLPage,},
  {path: '/course/al',name: 'EnglishskillsforALPage',component: EnglishskillsforALPage,},
  {path: '/course/ielts',name: 'IELTSPage',component: IELTSPage,},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
