import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  AddPost,
  AllPosts,
  EditPost,
  Home,
  Login,
  Post,
  Signup,
} from "./pages";
import { Protected } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <Protected authentication={false}>
            <Login />
          </Protected>
        }
      />
      <Route
        path="/signup"
        element={
          <Protected authentication={false}>
            <Signup />
          </Protected>
        }
      />
      <Route
        path="/all-posts"
        element={
          <Protected>
            <AllPosts />
          </Protected>
        }
      />
      <Route
        path="/post/:slug"
        element={
          <Protected authentication={false}>
            <Post />
          </Protected>
        }
      />
      <Route
        path="/add-post"
        element={
          <Protected>
            <AddPost />
          </Protected>
        }
      />
      <Route
        path="/edit-post/:slug"
        element={
          <Protected>
            <EditPost />
          </Protected>
        }
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  // </React.StrictMode>,
);
