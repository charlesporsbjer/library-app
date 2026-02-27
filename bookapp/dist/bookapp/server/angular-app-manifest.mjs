
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
    'index.csr.html': {size: 5778, hash: '2ce8950f06be4251f13c678d1d72d00894ac7b544896e36a4e2c1a4a6473b084', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1286, hash: '3e0902749f0eb921e536c9fd6ce3fc8a783fd224fe7b026d5158f7eb32a63b70', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FQTL74HQ.css': {size: 309565, hash: 'RU+v73P503g', text: () => import('./assets-chunks/styles-FQTL74HQ_css.mjs').then(m => m.default)}
  },
};
