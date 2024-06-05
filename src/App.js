import logo from "./logo.svg";
import "./App.css";
import React from "react";

const RemoteButton = React.lazy(() => import("remoteapp/AppComponent"));

function App() {
  const [show, setshow] = React.useState(false);
  return (
    <div className="App">
      <main onClick={() => setshow((show) => !show)}>
        This is the host application
      </main>
      <div
        style={{
          width: "50%",
          height: "500px",
          margin: "auto",
          background: "gray",
        }}
      >
        {show && (
          <React.Suspense fallback="Loading...">
            <RemoteButton />
          </React.Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
