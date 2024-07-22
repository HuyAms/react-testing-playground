import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserDetails from "./screens/UserDetails";
import UserList from "./screens/UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList/>,
  },
  {
    path: "/users/:id",
    element: <UserDetails/>,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
