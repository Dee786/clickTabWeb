import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Nopage from "./Components/Nopage";
import styled from 'styled-components'
import Dashboard from "./Components/Dashboard";
import Logout from "./Components/Logout";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import Report from "./Components/Report";
import Profile from "./Components/Profile";
import AccountDetails from "./Components/AccountDetails";
import Analytics from "./Components/Analytics";
import { initializeParse } from "./config/parse";
import { LoginGoogle } from "./Components/LoginGoogle";
import { UserRegistration } from "./Components/RegisterGoogle";
import { UserPasswordReset } from "./Components/ResetPassword";

const Container = styled.footer`
 min-height:30px;
 background-color:darkgray;
 text-align:center;
`;

export default function App() {
  initializeParse();
  return (
      <div className="App">
      <Router>
        <Navbar />
        <div style={{minHeight:`${window.innerHeight-86}px`,width:"100%",backgroundColor:"#F2F2F2"}}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PublicRoute path="/about" component={Aboutus}  />
          <PublicRoute path="/login" component={LoginGoogle}  />
          <PublicRoute path="/passwordreset" component={UserPasswordReset}  />
          <PublicRoute path="/register" component={UserRegistration}  />
          <PublicRoute path="/logout" component={Logout}  />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/report" component={Report} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/account" component={AccountDetails} />
          <PrivateRoute path="/analytics" component={Analytics} />
          <PublicRoute path="*" component={Nopage} />
        </Switch>
        </div>
      </Router>
      <Container>©Copyright - 2022</Container>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);