import Home from './views/home/Home';
import About from './views/about/About';
import FormEx from './views/formex/FormEx';

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
    path: '/formex',
    component: FormEx,
    exact: true,
    title: 'FormEx',
  },
]

export default routes;
