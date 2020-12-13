import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Planets } from 'react-preloaders';

import ApofeozTemplate from './apofeoz';

export default () => (
  <>
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Planets color="#E6B6B3" />
            <ApofeozTemplate />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);
