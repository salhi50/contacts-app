import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<Root />}
    >
      <Route
        index
        element={<h1>Project start</h1>}
      />
    </Route>,
  ),
);

root.render(<RouterProvider router={router} />);
