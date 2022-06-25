import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from "react-router-dom";
function App() {
  const currentUser = localStorage.getItem("user");
  return (
    <div className="App">
        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path={["/", "/home"]} component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
