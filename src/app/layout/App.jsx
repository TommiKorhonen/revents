import React from "react";
import { Route, useLocation } from "react-router-dom"
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/Sandbox";

function App() {
  const { key } = useLocation();
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path={"/(.+)"} render={() => (
        <>
          <NavBar />
          <Container className="main">
            <Route path="/events" exact component={EventDashboard} />
            <Route path="/sandbox" exact component={Sandbox} />
            <Route path="/events/:id" exact component={EventDetailedPage} />
            <Route path={["/createEvent", "/manage/:id"]} exact component={EventForm} key={key} />
          </Container>
        </>
      )} />
    </>
  );
}

export default App;
