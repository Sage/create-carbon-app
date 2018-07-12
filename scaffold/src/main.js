import React from 'react';
import { Route } from 'react-router';
import { startRouter } from 'carbon-react/lib/utils/router';

// Loads base css from carbon:
import 'carbon-react/lib/utils/css';

import HelloWorld from 'components/hello-world';

// Defines routes and corresponding components for app
// (see ReactRouter for more information):
startRouter(
  <Route path='/' component={ HelloWorld } />
);

// Enables hot reloading through webpack:
if (module.hot) {
  module.hot.accept();
}
