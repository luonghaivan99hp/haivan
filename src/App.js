import './App.css'

import React from "react";
import { Switch, Route, Link, withRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

function App(props) {
  return (
    <div>
      <nav>
        <ul>

          
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <div className="container">
            <div className="item">
              <li>
                <Link to="/page1">Page1 (Link)</Link>
              </li>
              <li>
                <Link to="/page2">Page2 (Link)</Link>
              </li>
              <li>
                <Link to="/page3">Page3 (Link)</Link>
              </li>
              <li>
                <Link to="/page4">Page4 (Link)</Link>
              </li>
            </div>
            <div className="item">
              <li>
                <button onClick={() => props.history.push("/page1")}>
                  Page1 (history.push())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.push("/page2")}>
                  Page2 (history.push())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.push("/page3")}>
                  Page3 (history.push())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.push("/page4")}>
                  Page4 (history.push())
                </button>
              </li>
              <li>
                <button onClick={()=>console.log(props.history.location)}>
                    an
                </button>
              </li>
            </div>
            <div className="item">
              <li>
                <button onClick={() => props.history.replace("/page1")}>
                  Page1 (history.replace())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.replace("/page2")}>
                  Page2 (history.replace())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.replace("/page3")}>
                  Page3 (history.replace())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.replace("/page4")}>
                  Page4 (history.replace())
                </button>
              </li>
            </div>
          </div>

          <button onClick={() => console.log(props.history)}>Print History</button>

        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/page1" component={Page1} exact />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Redirect to="/" />
      </Switch>

    </div>
  );
}

export default withRouter(App);



