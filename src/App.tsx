import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { routes } from "./utils/routes";
import { useEffect, useState } from "react";
import CommonSidebar from "./Components/CommonSidebar";
function App() {
  const [name, setName] = useState("");

  const c = () => {
    const urlParams = window.location.pathname;
    setName(urlParams);
  };

  window.addEventListener("popstate", c);

  useEffect(() => {
    c();
  }, [window.location.pathname]);

  return (
    <div className="p-5">
      {name !== "/sidebar" ? (
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <CommonSidebar>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} {...route} />
              ))}
            </Routes>
          </CommonSidebar>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
