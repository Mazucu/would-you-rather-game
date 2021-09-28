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
import NotFound from "./NotFound";

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
              <Route path="/questions/:id">
                <QuestionForm />
              </Route>
              <Route path="/question-results/:id">
                <QuestionResults />
              </Route>
              <Route path="/add">
                <NewQuestion />
              </Route>
              <Route path="/leaderboard">
                <Board />
              </Route>
              <Route component={NotFound} />
              <NotFound />
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
