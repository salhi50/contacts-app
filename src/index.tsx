import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import { addContactAction } from "./actions";
import ContactInfo from "./routes/ContactInfo";
import { contactLoader, contactsListLoader } from "./loaders";
import Root from "./routes/Root";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={<Root />}
      loader={contactsListLoader}
      action={addContactAction}
    >
      <Route
        index
        element={<h1>Project start</h1>}
      />
      <Route
        path="/:contactId"
        element={<ContactInfo />}
        loader={contactLoader}
      />
    </Route>,
  ),
);

root.render(<RouterProvider router={router} />);
