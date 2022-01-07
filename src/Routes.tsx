import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import StartSearch from 'pages/StartSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/startsearch">
        <StartSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
