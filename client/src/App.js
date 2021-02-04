import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import 'theme/globalStyles.scss'

import Header from 'components/Header'
import SearchResults from 'pages/SearchResults';
import ProductDetails from 'pages/ItemDetails';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact />
          <Route path="/items" component={SearchResults} exact />
          <Route path="/item/:id" component={ProductDetails} exact />
          <Route path="*" />
        </Switch>
      </Router>
  );
}

export default App;
