import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext.jsx";
import { Provider } from "react-redux";
import store from "./redux-store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* wrap the main component with user Provider */}
      <UserProvider>
        {/* Redux Provider */}
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
