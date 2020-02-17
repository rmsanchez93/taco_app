import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './Componets/WelcomePage/WelcomePage';

function App() {
  return (

    
    <BrowserRouter>
  <div>
    <Switch>  
          <Route path='/welcome_page' component={WelcomePage}/>

    </Switch>   
  </div>     
    </BrowserRouter>
  );
}

export default App;
