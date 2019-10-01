import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header.component';
import Home from '../Home/Home.component';
import Movie from '../Movie/Movie.component';
import NotFound from '../elements/NotFound/NotFound.component';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:movieId" component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default App;