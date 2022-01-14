import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Search from 'pages/Search';
import Find from 'pages/Find';


const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/find">
        <Find />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
