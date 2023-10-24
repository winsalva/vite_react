import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import ErrorPage from "./error_page";
import Index from "./routes/index";

import Contact, {
  loader as contactLoader,
  action as contactAction
} from "./routes/contact";

import EditContact, {
  loader as editLoader,
  action as editAction,
} from "./routes/edit";

import {
  action as DestroyAction,
} from "./routes/destroy";

import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

/***
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
	<Route
	  path="contacts/:contactID"
	  element={<Contact />}
	  loader={contactLoader}
	  action={contactAction}
	/>
	<Route
	  path="contacts/:contactID/edit"
	  element={<EditContact />}
	  loader={editLoader}
	  action={editAction}
	/>
	<Route
	  path="contacts/:contactID/destroy"
	  action={destroyAction}
	/>
      </Route>
    </Route>
  )
);
***/


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
	children: [
          {
            index: true,
	    element: <Index />,
          },
          {
            path: "contacts/:contactID",
	    element: <Contact />,
	    loader: contactLoader,
	    action: contactAction
          },
          {
            path: "contacts/:contactID/edit",
	    element: <EditContact />,
	    action: editAction,
	    loader: editLoader,
          },
          {
            path: "contacts/:contactID/destroy",
	    action: DestroyAction,
	    // errorElement: <div>Oops, There was an error!</div>,
          },
	]
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
