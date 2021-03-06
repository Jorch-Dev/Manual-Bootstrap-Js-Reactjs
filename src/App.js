import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/privateroute_component";
import { Dashboard_view } from "./vistas/dhasboard_view";
import { Navbar_view } from "./vistas/navbar_view";
import { Display_Flex } from "./vistas/display-flex_view";
import { Orientation_view } from "./vistas/flexorientation_view";
import { Javascript } from "./vistas/javascript_view";
import { EditemailView, EditMailexampleView } from "./vistas/reactemail_view"
import { PageView } from "./vistas/page_view"
import "./styles/App.css"

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar_view />
        <Switch>
          <Route exact path="/" component={Dashboard_view} />

          <PrivateRoute exact path="/display_flex" component={Display_Flex} />
          <PrivateRoute exact path="/flex_orientation" component={Orientation_view} />
          <PrivateRoute exact path="/javascript" component={Javascript} />
          <PrivateRoute exact path="/reactemail" component={EditMailexampleView} />
          <PrivateRoute exact path="/page" component={PageView} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
