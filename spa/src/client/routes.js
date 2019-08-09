import Home from './views/home/Home';
import About from './views/about/About';
import Dynam from './views/dynam/Dynam';

const routes = [
  {
    prefix: '',
    path: '/',
    component: Home,
    exact: true,
    title: 'Home',
  },
  {
    prefix: '',
    path: '/about',
    component: About,
    exact: true,
    title: 'About',
  },
  {
    prefix: '',
    path: '/dynam',
    component: Dynam,
    exact: true,
    title: 'Dynam',
  },
]

export default routes;
