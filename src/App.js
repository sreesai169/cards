import React from "react";
import Profile from "./profile.jpg";
import "./App.css";

import data from "./data/data.json";
import Resume from "./Resume.js";
import { Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

let Home = () => {
  let profile = data.profiles;
  console.log(profile);
  return (
    <div className="row justify-content-center">
      {profile.map((value, index) => (
        <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
          <div className="card">
            <div className="card-body">
              <img src={Profile} style={{ width: "300px" }} />
              <h2>{value.basic.name}</h2>
              <h3>{value.basic.role}</h3>
              <h4>
                <a href="tel:8919791594">{value.basic.Phone}</a>
              </h4>
              <p>
                <a href="mailto:sreesai169@gmail.com">{value.basic.email}</a>
              </p>

              <Link
                to={{ pathname: "/resume", profilesData: { i: index } }}
                className="btn btn-primary"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; //evaledh? INDHAKA
export default App;
