import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { IsLoadingContext, CurrentPhotoContext } from './context'
import routes from './utility/routes';
import Header from './components/ui/Header';
import ModalPhoto from './components/ModalPhoto';
import Loader from './components/ui/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(false);
  const [currentGallery, setCurrentGalery] = useState(false);

  return (
    <IsLoadingContext.Provider value={{ setIsLoading }}>
      <CurrentPhotoContext.Provider value={{ setCurrentPhoto, setCurrentGalery }}>
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
                  <Route exact path={path} key={key} render={props => (<Component {...props} />)} />
                ))}
              </Switch>
            </main>
          </Router>
          <ModalPhoto photoIndex={currentPhoto} gallery={currentGallery} setCurrentPhoto={setCurrentPhoto} />
          <Loader showLoader={isLoading} />
        </div>
      </CurrentPhotoContext.Provider>
    </IsLoadingContext.Provider>
  );
}

export default App;
