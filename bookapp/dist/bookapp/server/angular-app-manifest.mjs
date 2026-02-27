
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/login"
  },
  {
    "renderMode": 0,
    "route": "/register"
  },
  {
    "renderMode": 0,
    "route": "/books"
  },
  {
    "renderMode": 0,
    "route": "/books/new"
  },
  {
    "renderMode": 0,
    "route": "/books/edit/*"
  },
  {
    "renderMode": 0,
    "route": "/quotes"
  },
  {
    "renderMode": 0,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5778, hash: '8bb398959c65f8c1e7a215aa57d522da7eaf5a5cda3a9ff9ef05a1cff38f91a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1286, hash: 'dbce5bc2397c8306cea2f833f64e577344feb94893e8fbbfee9d88d84ae57f17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FQTL74HQ.css': {size: 309565, hash: 'RU+v73P503g', text: () => import('./assets-chunks/styles-FQTL74HQ_css.mjs').then(m => m.default)}
  },
};
