import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
