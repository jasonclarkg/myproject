import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import UserForm from './components/forms/UserForm'
import AddUserForm from './components/forms/AddUserForm';
import EditUserForm from './components/forms/EditUserForm'


function App() {
  return (
    <Router> 
    <Switch>
      <Route path="/">
        <UserForm />
      </Route>
      <Route path="/add">
        <AddUserForm />
      </Route>
      <Route path="/edit">
        <EditUserForm />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
