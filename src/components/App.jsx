import React, { useState , lazy, Suspense } from "react";
import {} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Landing = lazy(() => import("./Landing"));
//const ItemList = lazy(() => import("./ItemList"));
const AR = lazy(() => import("./AR"))
const LAUNCHER = lazy(() => import("./LAUNCHER"))
const LMG = lazy(() => import("./LMG"))
const MELEE = lazy(() => import("./MELEE"))
const PISTOL = lazy(() => import("./PISTOL"))
const SG = lazy(() => import("./SG"))
const SMG = lazy(() => import("./SMG"))
const SR = lazy(() => import("./SR"))
const CreatePost = lazy(() => import("./CreatePost"))

function App() {
  
  const renderLoader = () => (
    <div className="spinner-container">
        <div className="spinner-border text-warning" role="status">
            <span className="sr-only"></span>
        </div>
    </div>
  );

  return (
    <div>
      <Router>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route path="/" exact component= {Landing}/>
          <Route path="/AR" exact component= {AR}/>
          <Route path="/LAUNCHER" exact component= {LAUNCHER}/>
          <Route path="/LMG" exact component= {LMG}/>
          <Route path="/MELEE" exact component= {MELEE}/>
          <Route path="/PISTOL" exact component= {PISTOL}/>
          <Route path="/SG" exact component= {SG}/>
          <Route path="/SMG" exact component= {SMG}/>
          <Route path="/SR" exact component= {SR}/>
          <Route path="/createpost" exact component= {CreatePost}/>
          
          {/* <Route path="/:id" exact component={ItemList} /> */}
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
