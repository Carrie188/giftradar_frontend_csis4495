import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from "react-router-dom";
// import AuthVerify from "./common/auth-verify";
import AuthService from './services/AuthService';
function App() {
  const logout = ()=>{AuthService.logout()};
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
        {/* <AuthVerify logOut={logout}/> */}
    </div>
  );
}

export default App;
