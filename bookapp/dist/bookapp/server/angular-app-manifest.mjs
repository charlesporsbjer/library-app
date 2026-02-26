
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
    'index.csr.html': {size: 5778, hash: 'c1df9b97d130fd267ded049c072857c20c48b9321339150a91ad7f42509d826c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1286, hash: 'ce8b77b5416c6d9e3773b837591961fc4ba1123141664e4bf741f2527e824dbe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FQTL74HQ.css': {size: 309565, hash: 'RU+v73P503g', text: () => import('./assets-chunks/styles-FQTL74HQ_css.mjs').then(m => m.default)}
  },
};
