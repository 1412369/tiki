import loadable from '@loadable/component';

export default [
  {
    title: 'Home page',
    path: '/',
    exact: true,
    private: false,
    component: loadable(() => import('./home/home')),
  },
];
