import React, {  lazy, Suspense } from "react";
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
const Blogs = lazy(() => import("./Blogs"))
const BlogPost = lazy(() => import("./BlogPost"))
const ItemList = lazy(() => import("./ItemList"))

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
          <Route path="/" exact component= {Blogs}/>
          <Route path="/blogs/:id" exact component={BlogPost} />
          <Route path="/landing/:catid" exact component= {ItemList}/>
          <Route path="/blogs/createpost" exact component= {CreatePost}/>
          <Route path="/landing" exact component= {Landing}/>
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
