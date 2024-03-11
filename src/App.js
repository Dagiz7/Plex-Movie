import Navbar from './NavBar/NavBar';
import Movies from './Movies/Movies';
import Kids from './Kids/Kids';
import Series from './Series/Series';
import Footer from './footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/Series">
              <Series />
            </Route>
            <Route path="/Kids">
              <Kids />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
