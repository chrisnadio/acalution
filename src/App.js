import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
// import { NotificationContainer } from 'react-notification';
import ListingPage from './pages/ListingPage'
import DetailPage from './pages/DetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ListingPage} />
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
