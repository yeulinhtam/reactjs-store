import './App.css';
import { Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './router/index';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingPage from './pages/LoadingPage';

function App() {
  const showPage = (Page) => {
    var result = null;
    if (Page.length > 0) {
      result = Page.map((Page, index) => (
        <Route
          key={index}
          exact={Page.exact}
          path={Page.path}
          render={props => <Page.main {...props} />}
        />
      ))
    }
    return result;
  };

  return (
    <React.Fragment>
      <Router>
        <Header></Header>
        <Suspense fallback={LoadingPage}>
          <Switch>
            {showPage(Page)}
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
