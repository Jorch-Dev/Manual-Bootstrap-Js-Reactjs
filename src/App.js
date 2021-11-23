import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/privateroute_component";
import { Dashboard_view } from "./vistas/dhasboard_view"
import { Navbar_view } from "./vistas/navbar_view";
import { Display_Flex } from "./vistas/display-flex_view";
import { Display_flex_orientation } from "./vistas/display-flex-orientation_view";
import { Javascript } from "./vistas/javascript_view";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar_view />
        <Switch>
          <Route exact path="/" component={Dashboard_view} />
          <PrivateRoute exact path="/display_flex" component={Display_Flex} />

          <PrivateRoute
            exact
            path="/displayflex_orientation"
            component={Display_flex_orientation}
          />

          <PrivateRoute exact path="/javascript" component={Javascript} />

        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
