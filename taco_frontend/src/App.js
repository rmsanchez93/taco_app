import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import UserDashBoard from './Components/UserDashBoard/UserDashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>
  <div>
    <Switch>  
          <Route path='/welcome_page' component={WelcomePage}/>
          <Route path='/user_dashboard' component={UserDashBoard}/>
    </Switch>   
  </div>     
    </BrowserRouter>
  );
}

export default App;
