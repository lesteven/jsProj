import Home from './views/home/Home';
import About from './views/about/About';
import Dynam from './views/dynam/Dynam';
import Hooks from './views/hooks/Hooks';
import LifeCy from './views/lifecy/LifeCy';
import Red from './views/red/Red';
import Blue from './views/blue/Blue';

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
  {
    prefix: '',
    path: '/hooks',
    component: Hooks,
    exact: true,
    title: 'Hooks',
  },
  {
    prefix: '',
    path: '/lifecy',
    component: LifeCy,
    exact: true,
    title: 'LifeCy',
  },
  {
    prefix: '',
    path: '/red',
    component: Red,
    exact: true,
    title: 'Red',
  },
  {
    prefix: '',
    path: '/blue',
    component: Blue,
    exact: true,
    title: 'Blue',
  },
]

export default routes;
