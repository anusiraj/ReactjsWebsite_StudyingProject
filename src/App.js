import React, {Component} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';


class App extends Component {
 render() { 
  return (
    <div>
    <NavigationBar />

     <Layout>
     <Router>
       <Switch>

         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/" component={Home} />
         <Route component={NoMatch} />
         
       </Switch>
      </Router>
     </Layout>

   <Footer />
    </div>
    
  );
  }
}

export default App;
