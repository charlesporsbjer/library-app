
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
    'index.csr.html': {size: 5548, hash: '215b8c206d0e1d75083df0329cbe204bdd59ab56b3fa63a17ed30f569ef5e221', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: 'b9548cee4c53309ff803a4960c28cb43d9ee235f1d1d79af4b0a4aea0379f790', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FQTL74HQ.css': {size: 309565, hash: 'RU+v73P503g', text: () => import('./assets-chunks/styles-FQTL74HQ_css.mjs').then(m => m.default)}
  },
};
