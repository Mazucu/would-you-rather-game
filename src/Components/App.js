import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Nav from "./Nav";
import handleInitialData from "../Actions";
import { connect } from "react-redux";
import QuestionForm from "./QuestionForm";
import QuestionResults from "./QuestionResults";
import NewQuestion from "./NewQuestion";
import Board from "./Board";
import LogginPage from "./LoggInPage";

function App({ dispatch, loading, loggedOut }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <Router>
      <div className="container">
        {loading ? null : loggedOut ? (
          <LogginPage />
        ) : (
          <div>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/question-form/:id">
                <QuestionForm />
              </Route>
              <Route path="/question-results/:id">
                <QuestionResults />
              </Route>
              <Route path="/new-question">
                <NewQuestion />
              </Route>
              <Route path="/board">
                <Board />
              </Route>
              <Route component={Board} />
            </Switch>
          </div>
        )}
      </div>
    </Router>
  );
}

function mapStateToProps({ loggedUser }) {
  return {
    loading: loggedUser === null,
    loggedOut: loggedUser === "",
  };
}

export default connect(mapStateToProps)(App);
