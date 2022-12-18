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

const Container = styled.footer`
 min-height:30px;
 background-color:#a5db8a;
 text-align:center;
`;

export default function App() {
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
          <PublicRoute path="/logout" component={Logout}  />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/report" component={Report} />
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