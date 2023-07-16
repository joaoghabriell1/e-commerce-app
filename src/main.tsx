import { Provider } from "react-redux";
import store from "./store/index.ts";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { AuthContextProvider } from "./store/auth-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthContextProvider>
);
