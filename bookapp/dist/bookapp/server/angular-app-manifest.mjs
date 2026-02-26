
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
    'index.csr.html': {size: 5548, hash: '06c2eafb0581c2f306eaaeaeb9a49886083e5a2122e22eeb0a2eccee752f75df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1056, hash: '00617ed8e278edeef48ecd44c402bae11d06bb5eb522b89b892f0e0a298700cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FQTL74HQ.css': {size: 309565, hash: 'RU+v73P503g', text: () => import('./assets-chunks/styles-FQTL74HQ_css.mjs').then(m => m.default)}
  },
};
