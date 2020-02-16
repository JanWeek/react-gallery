import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            {/*
              routes.map(({ path, component }, key) => (
                <Route path={path} exact component={component} key={key} />
              ))
            */}
            {routes.map(({ path, name, Component }, key) => (
              <Route
                exact
                path={path}
                key={key}
                render={props => {
                  const crumbs = routes
                    .filter(({ path }) => props.match.path.includes(path))
                    .map(({ path, ...rest }) => ({
                      path: Object.keys(props.match.params).length ?
                        Object.keys(props.match.params).reduce(
                          (path, param) =>
                            path.replace(
                              `:${param}`,
                              props.match.params[param]
                            ),
                          path
                        ) : path,
                      ...rest
                    }));
                  console.log(`Generated crumbs for ${props.match.path}`);
                  crumbs.map(({ name, path }) => console.log({ name, path }));
                  return <Component {...props} />
                }}
              />
            ))}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
