import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';




const routes=[
  {path: '/', name:"Home", Component: Home},
  {path: '/blog', name:"blog", Component: Blog},
  {path: '/contact', name:"Contact", Component: Contact}
]

function App() {
  return ( 
    <Router>
    <headers>
      <Navbar/>
    </headers>
    <main>
    <section className="container">
          <Switch>
            {routes.map(({path, Component})=>(
              <Route key={path} path={path} exact >
                {()=>(
                      <>
                        <Component/>
                      </>
                )}
              </Route>
            ))};
          </Switch>
      </section>
    </main>
    </Router>

  );
}

export default App;

